var EnableCopyingElement;
var EnableElement;

// 获取当前根文档
function GetCurrentDocument()
{
	return window.document;
}

function EnableCopyMouseOver(e)
{
	// Block
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');

	if( ! block ){
		return;
	}

	var document = GetCurrentDocument();
	var div = document.getElementById('EnableCopy_content');
	div.innerHTML = this.textContent;

	if (this.tagName != 'body') {
		this.style.outline = '1px dashed #f00';
		EnableCopyingElement = this;
	}

	EnableElement = this;

	HideMessage();

	e.stopPropagation();
}

function EnableCopyMouseOut(e)
{
	this.style.outline = '';

	e.stopPropagation();
}

function EnableCopyMouseMove(e)
{
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');

	if( ! block ){
		return;
	}

	block.style.display = 'block';
	
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
	var blockWidth = 332;
	var blockHeight = document.defaultView.getComputedStyle(block, null).getPropertyValue('height');

	blockHeight = blockHeight.substr(0, blockHeight.length - 2) * 1;

	if ((e.pageX + blockWidth) > pageWidth) {
		if ((e.pageX - blockWidth - 10) > 0)
			block.style.left = e.pageX - blockWidth - 40 + 'px';
		else
			block.style.left = 0 + 'px';
	}
	else
		block.style.left = (e.pageX + 20) + 'px';

	if ((e.pageY + blockHeight) > pageHeight) {
		if ((e.pageY - blockHeight - 10) > 0)
			block.style.top = e.pageY - blockHeight - 20 + 'px';
		else
			block.style.top = 0 + 'px';
	}
	else
		block.style.top = (e.pageY + 20) + 'px';

	inView = EnableCopyIsElementInViewport(block);

	if( ! inView )
		block.style.top = ( window.pageYOffset  + 20 ) + 'px';

	e.stopPropagation();
}

function setOpacity(elem, opacity) {
    if (elem.style.filter) {
        elem.style.filter = 'alpha(opacity:' + opacity * 100 + ')';
    } else {
        elem.style.opacity = opacity;
    }
}

function fadeIn(elem, speed) {
    elem.style.display = "block";
    setOpacity(elem, 0);

    var tempOpacity = 0;
    (function() {
        setOpacity(elem, tempOpacity);
        tempOpacity += 0.05;
        if (tempOpacity <= 1) {
            setTimeout(arguments.callee, speed);
        }
    })();
}

function fadeOut(elem, speed) {
    elem.style.display = "block";
    var tempOpacity = 1;
    (function() {
        setOpacity(elem, tempOpacity);
        tempOpacity -= 0.05;
        if (tempOpacity > 0) {
            setTimeout(arguments.callee, speed);
        } else {
            elem.style.display = "none"; //不可放在匿名函数外面会先执行。
        }
    })();
}

function EnableCopyIsElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function copy() {
        var div = document.getElementById('EnableCopy_content');
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(div);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(div);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn("none");
        }
        document.execCommand("Copy");
        ShowMessage("已经复制文本到剪切板");
    }

// EnableCopy Class
function EnableCopy()
{
	this.CreateBlock = function() {
		var document = GetCurrentDocument();
		var block;
		
		if (document) {
			block = document.createElement('div');
			block.id = 'EnableCopy_block';
			
			var header = document.createElement('h1');

			header.appendChild(document.createTextNode('按[F] 固定/释放窗口，按[C] 复制，按[Esc] 退出'));
			block.appendChild(header);
			
			// Insert all properties
			var center = document.createElement('div');

			center.id = 'EnableCopy_center';
			var div = document.createElement('div');
			div.id = 'EnableCopy_content';
			div.className = 'EnableCopy_content';
			center.appendChild(div);
			block.appendChild(center);
			var footer = document.createElement('div');
			footer.id = 'EnableCopy_footer';
			block.appendChild(footer);

		    var container = document.createElement('div');
		    container.id = "EnableCopy_alert_container";
		    container.className = "EnableCopy_alert_container";

		    var al = document.createElement('div');
		    al.className = "EnableCopy_alert";
		    container.appendChild(al);
		    document.body.appendChild(container);
		}
		ShowMessage(chrome.i18n.getMessage("extTip"));
		return block;
	}
	
	// Get all elements within the given element
	this.GetAllElements = function(element)
	{
		var elements = new Array();

		if (element && element.hasChildNodes()) {
			elements.push(element);

			var childs = element.childNodes;

			for (var i = 0; i < childs.length; i++) {
				if (childs[i].hasChildNodes()) {
					elements = elements.concat(this.GetAllElements(childs[i]));
				}
				else if (childs[i].nodeType == 1) {
					elements.push(childs[i]);
				}
			}
		}

		return elements;
	}
	
	// Add bool for knowing all elements having event listeners or not
	this.haveEventListeners = false;

	// Add event listeners for all elements in the current document
	this.AddEventListeners = function()
	{
		var document = GetCurrentDocument();
		var elements = this.GetAllElements(document.body);

		for (var i = 0; i < elements.length; i++)	{
			elements[i].addEventListener("mouseover", EnableCopyMouseOver, false);
			elements[i].addEventListener("mouseout", EnableCopyMouseOut, false);
			elements[i].addEventListener("mousemove", EnableCopyMouseMove, false);
		}	
		this.haveEventListeners = true;
	}
	
	// Remove event listeners for all elements in the current document
	this.RemoveEventListeners = function()
	{
		var document = GetCurrentDocument();
		var elements = this.GetAllElements(document.body);

		for (var i = 0; i < elements.length; i++){
			elements[i].removeEventListener("mouseover", EnableCopyMouseOver, false);
			elements[i].removeEventListener("mouseout", EnableCopyMouseOut, false);
			elements[i].removeEventListener("mousemove", EnableCopyMouseMove, false);
		}	
		this.haveEventListeners = false;
	}
}


// 检查是否运行
EnableCopy.prototype.IsEnabled = function() {
	var document = GetCurrentDocument();
	if (document.getElementById('EnableCopy_block')) {
		return true;
	}
	return false;
}

// 运行程序
EnableCopy.prototype.Enable = function()
{
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');

	if (!block){
		block = this.CreateBlock();
		document.body.appendChild(block);
		this.AddEventListeners();
		return true;
	}

	return false;
}

// 关闭程序
EnableCopy.prototype.Disable = function()
{
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');

	if (block) {
		document.body.removeChild(block); 
		this.RemoveEventListeners();

		return true;
	}

	return false;
}

/*
* 冻结
*/
EnableCopy.prototype.Freeze = function()
{
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');
	if ( block && this.haveEventListeners ) {
		this.RemoveEventListeners();
		return true;
	}
	return false;
}

/*
* 解冻
*/
EnableCopy.prototype.Unfreeze = function()
{
	var document = GetCurrentDocument();
	var block = document.getElementById('EnableCopy_block');
	if ( block && !this.haveEventListeners ) {
		EnableCopyingElement.style.outline = '';
		this.AddEventListeners();

		return true;
	}

	return false;
}

// 显示消息
function ShowMessage(msg){
    var target = document.getElementById("EnableCopy_alert_container");
    target.children[0].textContent = msg;
    fadeIn(target, 10);
    setTimeout(function() { fadeOut(target, 50) }, 1000);
}

// 移除消息
function HideMessage() {   
	var n = document.getElementById('enableCopyShowMessage');
	if(n){
		document.body.removeChild(n); 
	}
}


function EnableCopyKeyMap(e) {
	if( !enableCopy.IsEnabled() )
		return;

	if (e.keyCode === 27) {
		EnableCopyingElement.style.outline = '';
		enableCopy.Disable();
	}
	
	if( e.altKey || e.ctrlKey )
		return;

	if ( e.keyCode === 70 ){
		if (enableCopy.haveEventListeners ){
			enableCopy.Freeze();
		}
		else {
			enableCopy.Unfreeze();
		}
	}

	if (e.keyCode === 67 ){
		copy();
		//window.prompt("选中并手工复制", EnableElement.textContent);
	}
}

enableCopy = new EnableCopy();

if (enableCopy.IsEnabled() ){
	enableCopy.Disable();  
}
else {
	enableCopy.Enable(); 
}

document.onkeydown = EnableCopyKeyMap;
