// ==UserScript==
// @name Google Chrome GM_* (greasemonkey functions) emulation
// @description
// Google Chrome can install userscripts natively,
//   eg see http://3rdnews.info/20100201496080-news-it-news-chrome-4-supports-greasemonkey-user-scripts-without-an-extension-userscripts.html
//   (There is the Greasemetal extension http://greasemetal.31tools.com, but it's not required, and it didn't work for me)
// However, scripts that use GM_* functions don't work, see:
//   http://code.google.com/p/chromium/issues/detail?id=16341
//   http://code.google.com/p/chromium/issues/detail?id=4476
// This script provides the following functions, allowing you to use MANY MORE userscripts in Chrome:
// GM_setValue(key,value)
//   Stores the variable value as a cookie so it can be retrieved later. With Greasemonkey, these would be available to the script no matter what site it is being used on. With this script, it is available only for the current domain (as with normal cookies). Unlike Greasemonkey, which can store only numbers, strings and boolean values, this script can store regular expressions, dates, functions, arrays and objects as well (it utilises my toRecoverableString function).
// GM_getValue(key[,defaultValue])
//   Returns the previously stored variable using the given key. If none, it returns the defaultValue, or undefined if no defaultValue is provided.
// GM_deleteValue(key)
//   Deletes the stored value - this is not a normal Greasemonkey function, but it just seemed sensible to provide a way to delete them again...
// GM_registerMenuCommand(title,function)
//   Adds a menu item with the specified title that runs the specified function when clicked. Unlike Greasemonkey (which uses the browser's own menu), this script places a menu in the top right corner of the page when needed - it is even keyboard accessible, using spatial navigation.
// GM_xmlhttpRequest(details)
//   Performs an XMLHttpRequest using the XMLHttpRequest constructor. Restricted to the same domain (the Greasemonkey function has no cross domain restrictions), but it's better than nothing
// GM_addStyle(CSSString)
//   Adds a stylesheet LINK tag to the document containing the new CSS. Note that this can cause problems with sites using jQuery, or stylesheet switching scripts.
// Additionally, it maps window._content to window, as this is unnecessarily used by many Greasemonkey scripts.
//
// Adapted from http://www.howtocreate.co.uk/operaStuff/userjs/aagmfunctions.js by TarquinWJ, version 1.3.1
// See http://www.howtocreate.co.uk/operaStuff/userJavaScript.html for details
// @namespace http://www.howtocreate.co.uk/operaStuff/userjs/
// @include *
// ==/UserScript==

/**
 * Stores a value in an cookie named key for 3153600 or -10 seconds
 *
 * @param	{Object}	key
 * @param	{Object}	value
 * @param	{Object}	lifeTime
 * @return	void
 */
function GM_setValue(key, value, lifeTime) {
	if (!key) {
		return;
	}

	if (lifeTime == "delete") {
		lifeTime = -10;
	} else {
		lifeTime = 31536000;
	}

	document.cookie = escape(key) + "=" +
		escape(getRecoverableString(value)) +
		";expires=" + (
			new Date(
				(new Date()).getTime() + (1000 * lifeTime)
			)
		).toGMTString() + ";path=/";
}

/**
 * Fetch cookie explodes it by ; iterates over the result and returns the value
 * if key was found or returns the preset
 *
 * @param	{Object}	key
 * @param	{Object}	preset
 * @return	mixed	result/preset
 */
function GM_getValue(key, preset) {
	var cookieJar = document.cookie.split("; ");

	for (var x = 0; x < cookieJar.length; x++) {
		var oneCookie = cookieJar[x].split("=");

		if (oneCookie[0] == escape(key)) {
			try {
				eval('var result = ' + unescape(oneCookie[1]));
			} catch(e) {
				return preset;
			}
			return result;
		}
	}
	return preset;
}

/**
 * Deletes a stored value named key
 *
 * @param	{Object}	key
 * @return	void
 */
function GM_deleteValue(key) {
		//yes, they didn't seem to provide a way to delete variables in Greasemonkey, and the user must use about:config to
		//delete them - so the stored variables will pile up forever ...
	GM_setValue(key, '', 'delete');
}

/**
 *
 * @param	{Object}	oVar
 * @param	{Object}	notFirst
 * @return	string
 */
function getRecoverableString(oVar, notFirst) {
	var oType = typeof(oVar);

	if ((oType == 'null') || (oType == 'object' && !oVar)) {
			//most browsers say that the typeof for null is 'object', but unlike a real
			//object, it will not have any overall value
		return 'null';
	}

	if (oType == 'undefined') {
		return 'window.uDfXZ0_d';
	}

	if (oType == 'object') {
			//Safari throws errors when comparing non-objects with window/document/etc
		if (oVar == window) {
			return 'window';
		}

		if (oVar == document) {
			return 'document';
		}

		if (oVar == document.body) {
			return 'document.body';
		}

		if (oVar == document.documentElement) {
			return 'document.documentElement';
		}
	}

	if (oVar.nodeType && (oVar.childNodes || oVar.ownerElement)) {
		return '{error:\'DOM node\'}';
	}

	if (!notFirst) {
		Object.prototype.toRecoverableString = function(oBn) {
			if (this.tempLockIgnoreMe) {
				return '{\'LoopBack\'}';
			}

			this.tempLockIgnoreMe = true;
			var retVal = '{',
				sepChar = '',
				j;
			for (var i in this) {
				if (i == 'toRecoverableString' ||
						i == 'tempLockIgnoreMe' ||
						i == 'prototype' ||
						i == 'constructor') {
					continue;
				}

				if (oBn && (
						i == 'index' ||
						i == 'input' ||
						i == 'length' ||
						i == 'toRecoverableObString')) {
					continue;
				}

				j = this[i];
				if (!i.match(basicObPropNameValStr)) {
						//for some reason, you cannot use unescape when defining peoperty names inline
					for (var x = 0; x < cleanStrFromAr.length; x++) {
						i = i.replace(cleanStrFromAr[x],cleanStrToAr[x]);
					}
					i = '\'' + i + '\'';
				} else if (window.ActiveXObject &&
						navigator.userAgent.indexOf('Mac') + 1 &&
						!navigator.__ice_version &&
						window.ScriptEngine &&
						ScriptEngine() == 'JScript' &&
						i.match(/^\d+$/)) {
						//IE mac does not allow numerical property names to be used unless they are quoted
					i = '\'' + i + '\'';
				}
				retVal += sepChar + i + ':' + getRecoverableString(j, true);
				sepChar = ',';
			}
			retVal += '}';

			this.tempLockIgnoreMe = false;
			return retVal;
		};

		Array.prototype.toRecoverableObString = Object.prototype.toRecoverableString;
		Array.prototype.toRecoverableString = function() {
			if (this.tempLock) {
				return '[\'LoopBack\']';
			}

			if (!this.length) {
				var oCountProp = 0;

				for (var i in this) {
					if (i != 'toRecoverableString' &&
							i != 'toRecoverableObString' &&
							i != 'tempLockIgnoreMe' &&
							i != 'prototype' &&
							i != 'constructor' &&
							i != 'index' &&
							i != 'input' &&
							i != 'length') {
						oCountProp++;
					}
				}

				if (oCountProp) {
					return this.toRecoverableObString(true);
				}
			}

			this.tempLock = true;
			var retVal = '[';
			for (var i = 0; i < this.length; i++) {
				retVal += (i ? ',' : '') + getRecoverableString(this[i], true);
			}
			retVal += ']';

			delete this.tempLock;
			return retVal;
		};

		Boolean.prototype.toRecoverableString = function() {
			return '' + this + '';
		};

		Date.prototype.toRecoverableString = function() {
			return 'new Date(' + this.getTime() + ')';
		};

		Function.prototype.toRecoverableString = function() {
			return this
				.toString()
				.replace(/^\s+|\s+$/g, '')
				.replace(
					/^function\s*\w*\([^\)]*\)\s*\{\s*\[native\s+code\]\s*\}$/i,
					'function () {[\'native code\'];}'
				);
		};

		Number.prototype.toRecoverableString = function() {
			if (isNaN(this)) {
				return 'Number.NaN';
			}

			if (this == Number.POSITIVE_INFINITY) {
				return 'Number.POSITIVE_INFINITY';
			}

			if (this == Number.NEGATIVE_INFINITY) {
				return 'Number.NEGATIVE_INFINITY';
			}

			return '' + this + '';
		};

		RegExp.prototype.toRecoverableString = function() {
			return '\/' + this.source + '\/' +
				(this.global ? 'g' : '') +
				(this.ignoreCase ? 'i' : '');
		};

		String.prototype.toRecoverableString = function() {
			var temp = escape(this);
			if (temp == this) {
				return '\'' + this + '\'';
			}
			return 'unescape(\'' + temp + '\')';
		};
	}

	if (!oVar.toRecoverableString) {
		return '{error:\'internal object\'}';
	}

	var oTmp = oVar.toRecoverableString();

	if (!notFirst) {
		//prevent it from changing for...in loops that the page may be using
		delete Object.prototype.toRecoverableString;
		delete Array.prototype.toRecoverableObString;
		delete Array.prototype.toRecoverableString;
		delete Boolean.prototype.toRecoverableString;
		delete Date.prototype.toRecoverableString;
		delete Function.prototype.toRecoverableString;
		delete Number.prototype.toRecoverableString;
		delete RegExp.prototype.toRecoverableString;
		delete String.prototype.toRecoverableString;
	}

	return oTmp;
}

var basicObPropNameValStr = /^\w+$/,
	cleanStrFromAr = new Array(
		/\\/g,
		/'/g,
		/"/g,
		/\r/g,
		/\n/g,
		/\f/g,
		/\t/g,
		new RegExp('-' + '->', 'g'),
		new RegExp('<!-' + '-', 'g'),
		/\//g
	),
	cleanStrToAr = new Array(
		'\\\\',
		'\\\'',
		'\\\"',
		'\\r',
		'\\n',
		'\\f',
		'\\t',
		'-\'+\'->',
		'<!-\'+\'-',
		'\\\/'
	);


/**
 * Only a dummy to satisfy Chrome
 *
 * @param	string	text
 * @return	void
 */
function GM_log(msg) {}

/**
 * Only a dummy to satisfy Chrome
 *
 * @param	string	text
 * @param	string	functionname
 * @return	void
 */
function GM_registerMenuCommand(text, functionname) {}

/**
 * Only a dummy to satisfy Chrome
 *
 * @param	string	url
 * @return	void
 */
function GM_openInTab(url) {}

/* GM_xmlhttpRequest implementation adapted from the
Turnabout GM compatibility library:
http://www.reifysoft.com/turnabout.php
Used under the following license:

Copyright (c) 2005, Reify Software, Inc.
All rights reserved.

Redistribution and use in source and binary forms,
with or without modification, are permitted provided
that the following conditions are met:

1) Redistributions of source code must retain the
	above copyright notice, this list of conditions
	and the following disclaimer.
2) Redistributions in binary form must reproduce the
	above copyright notice, this list of conditions
	and the following disclaimer in the documentation
	and/or other materials provided with the
	distribution.
3) Neither the name of the Reify Software, Inc. nor
	the names of its contributors may be used to
	endorse or promote products derived from this
	software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS
AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
OF SUCH DAMAGE.

*/

//yes, I know the domain limitations, but it's better than an outright error
function GM_xmlhttpRequest(details) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		var responseState = {
			responseXML : (xmlhttp.readyState == 4 ? xmlhttp.responseXML : ''),
			responseText : (xmlhttp.readyState == 4 ? xmlhttp.responseText : ''),
			readyState : xmlhttp.readyState,
			responseHeaders : (xmlhttp.readyState == 4 ? xmlhttp.getAllResponseHeaders() : ''),
			status : (xmlhttp.readyState == 4 ? xmlhttp.status : 0),
			statusText : (xmlhttp.readyState == 4 ? xmlhttp.statusText : '')
		};

		if (details["onreadystatechange"]) {
			details["onreadystatechange"](responseState);
		}

		if (xmlhttp.readyState == 4) {
			if (details["onload"] && xmlhttp.status >= 200 && xmlhttp.status < 300) {
				details["onload"](responseState);
			}
			if (details["onerror"] && (xmlhttp.status < 200 || xmlhttp.status >= 300)) {
				details["onerror"](responseState);
			}
		}
	};

	try {
			//cannot do cross domain
		xmlhttp.open(details.method, details.url);
	} catch(e) {
		if (details["onerror"]) {
				//simulate a real error
			details["onerror"]({
				responseXML : '',
				responseText : '',
				readyState : 4,
				responseHeaders : '',
				status : 403,
				statusText : 'Forbidden'
			});
		}
		return;
	}

	if (details.headers) {
		for (var prop in details.headers) {
			xmlhttp.setRequestHeader(prop, details.headers[prop]);
		}
	}

	xmlhttp.send((typeof(details.data) != 'undefined') ? details.data : null);
}

function GM_addStyle(css) {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node["type"] = "text/css";
		node.appendChild(
			document.createTextNode(css)
		);
		heads[0].appendChild(node);
	}
}