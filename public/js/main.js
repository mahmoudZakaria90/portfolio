(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var stars = require("./stars");

function updateDate() {
  document.getElementById("date").innerHTML = new Date().getFullYear();
}

window.addEventListener("DOMContentLoaded", function () {
  stars();
  updateDate();
});

},{"./stars":2}],2:[function(require,module,exports){
'use strict';

module.exports = function stars() {
	var colors = ['#40FFDC', '#00A9D4', '#1C3166', '#240047', '#1C0021', '#40FFDC', '#00A9D4', '#1C3166'];
	for (var i = 0; i < 90; i++) {
		var star = document.createElement('div');
		star.className = 'star';
		document.getElementById('starWrap').appendChild(star);
		var rand = Math.floor(Math.random() * window.innerWidth);
		var rand2 = Math.floor(Math.random() * window.innerWidth);
		if (window.innerWidth <= 480) {
			rand = Math.floor(Math.random() * window.innerHeight);
			rand2 = Math.floor(Math.random() * window.innerHeight);
		}
		var rand3 = Math.floor(Math.random() * colors.length);
		star.style.top = rand + 'px';
		star.style.left = rand2 + 'px';
		star.style.animationDelay = rand / i / 20 + 's';
		star.style.borderColor = colors[rand3];
	}
};

},{}]},{},[1]);
