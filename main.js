!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);let r=(n,e)=>{let t=document.createElement(n);return e&&t.classList.add(e),t};let o=[];function i(){let n=document.querySelector(".project-cont"),e=o.map(n=>`\n        <div class="project-card">\n        <span> ${n.getName()}</span>\n       </div>\n        `).join("");n.innerHTML=e}function a(){let n=document.querySelectorAll(".project-card");for(let e=0;e<o.length;e++)n[e].setAttribute("data-index",e)}const c=document.querySelector("#content");let d=r("div","main-container");c.append(d),d.append(function(){let n=r("div","col1"),e=r("div","banner-cont"),t=r("div","project-cont"),o=r("h1"),i=r("div","project-btn-div"),a=r("h2"),c=r("button","add-btn");return c.classList.add("add-project"),o.textContent="O-Note Again",a.textContent="Projects",c.textContent="+",i.append(a,c),e.append(o),n.append(e,i,t),n}()),d.append(function(){let n=r("div","col2"),e=r("div","project-header"),t=r("div","todo-list"),o=r("div","todo-btn-div"),i=r("h2"),a=r("button","add-btn");return a.classList.add("add-todo"),i.innerHTML="Project Name",a.innerHTML="+",o.append(a),e.append(i),n.append(e,t,o),n}());const l=document.querySelector(".add-project");l.addEventListener("click",(function(){let n=(n=>{n="Project";let e=[];return{getName:()=>n,changeName:e=>{e=prompt("Change project Name"),n=e},getTodos:()=>e}})();o.push(n),i()})),l.addEventListener("click",a);let u=document.querySelector(".project-cont");u.addEventListener("click",(function(n){if("project-card"==n.target.className){let e=n.target.getAttribute("data-index"),t=o[e].getName();document.querySelector(".project-header h2").innerHTML=t;let r=o[e].getTodos();console.log(r)}})),u.addEventListener("click",(function(n){if("SPAN"==n.target.tagName){let e=n.target.parentNode.getAttribute("data-index");o[e].changeName(),i(),a()}}))},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],d=e.base?i[0]+e.base:i[0],l=t[d]||0,u="".concat(d," ").concat(l);t[d]=l+1;var s=c(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:u,updater:v(p,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,s=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,h=0;function v(n,e){var t,r,o;if(e.singleton){var i=h++;t=g||(g=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=d(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){(e=t(4)(!1)).push([n.i,":root {\n    --white: #f4f9f4;\n    --green: #a7d7c5;\n    --darkgreen: #74b49b;\n    --darkestgreen:#5c8d89;\n    --main-font: 'Titillium Web', sans-serif;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns:30vw 70vw;\n    font-family: var(--main-font);\n}\n\n.col1 {\n    background-color: var(--green);\n    box-shadow: 1px 1px gray;\n}\n\n.banner-cont {\n    background-color: var(--darkgreen);\n    height: 10vh;\n    padding: 10px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    font-family: var(--main-font);\n    border-bottom: thin solid gray;\n    border-right: thin solid gray;\n}\n\n\n.project-cont {\n    background-color: var(--darkgreen);\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    padding: 20px 0px 0px 0px;\n    border-right: thin solid gray;\n}\n\n.project-btn-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0px 20px 0px 20px;\n}\n\n.add-btn {\n    border-radius: 25px;\n    height: 50px;\n    width: 50px;\n    border: thin gray;\n    margin: 10px;\n    font-size: 2em;\n}\n\n.add-project {\n    background-color: var(--white);\n}\n\n.project-card {\n    height: 3em;\n    border-bottom: thin solid grey;\n    background-color: var(--white);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5px 5px 5px 20px;\n    box-shadow: 0px 0px 4px 1px grey;\n}\n\n\n.col2 {\n    background-color: var(--white);\n    display: grid;\n    grid-template-rows: 13vh 75vh 10vh;\n}\n\n.project-header {\n    background-color: var(--darkestgreen);\n    \n    display: flex;\n    align-items: center;\n    padding: 10px 10px 10px 50px;\n    color:white\n}\n\nh1 {\n    margin: 0 auto;\n    text-align: center;\n}\n\n.todo-list {\n    background-color: var(--white);\n    padding: 20px 10px 0px 10px;\n}\n\n.todo-card {\n    height: 3em;\n    width: 85%;\n    margin: 0 auto;\n    border-bottom: thin solid #80808069;\n    background-color: var(--white);\n    padding: 5px 5px 5px 20px;\n    display: grid;\n    grid-template-columns: 10% 60% 20% 10%;\n    \n}\n\n.todo-card > * {\n    display: flex;\n    align-items: center;\n\n}\n\n\n\n.checkbox {\n    margin-top: 15px;\n    width: 20px;\n    height: 20px;\n}\n\n.delete-btn {\n    border-radius: 10px;\n    border: thin solid #808080a8;\n    color:white;\n    background-color: #ff0000a1;\n    height: 25px;\n    width: 23px;\n    margin: 10px 10px 10px 20px;\n}\n\n\n.todo-btn-div {\n    background-color: var(--white);\n}\n\n\n.add-todo {\n    background-color: var(--darkestgreen);\n    float: right;\n    margin-right: 25px;\n    color: white;\n}\n\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}}]);