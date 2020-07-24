!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);const r=(()=>{const e=[],n=()=>{let n=document.querySelector(".project-cont"),t=e.map(e=>`\n            <div class="project-card">\n            <span> ${e.getName()}</span>\n            <button class="delete-project"> x </button>\n            </div>\n            `).join("");n.innerHTML=t},t=()=>{let n=document.querySelectorAll(".project-card");for(let t=0;t<e.length;t++)n[t].setAttribute("data-index",t)};return{projectList:e,addNewProject:()=>{let t=(e=>{e="Project";let n=[],t=[];return{getName:()=>e,changeName:n=>{null!=(n=prompt("Change project Name"))&&""!=n&&(e=n)},getTodos:()=>n,getCompletedList:()=>t}})();e.push(t),n()},setIndex:t,showProjectPage:n=>{if("project-card"==n.target.className){let t=n.target.getAttribute("data-index"),r=e[t].getName();document.querySelector(".project-header h2").innerHTML=r}},changeName:r=>{if("SPAN"==r.target.tagName){let o=r.target.parentNode.getAttribute("data-index");e[o].changeName(),n(),t()}},selectProject:e=>{if("project-card"==e.target.className){let n=document.querySelectorAll(".project-card"),t=e.target;n.forEach(e=>{e.classList.remove("selected")}),t.classList.add("selected")}},deleteProject:r=>{if("delete-project"==r.target.className){let o=r.target.parentNode.getAttribute("data-index");e.splice(o,1),n(),t()}}}})();function o(e,n,t){this.note=e,this.dueDate=n,this.priority=t}let i=(()=>{let e,n;const t=()=>{let t;if(document.querySelectorAll(".project-card").forEach(e=>{e.classList.contains("selected")&&(t=e.getAttribute("data-index"))}),void 0!==t){let o=r.projectList[t].getTodos(),i=r.projectList[t].getCompletedList();e=o,n=i}},i=()=>{let t=document.querySelector(".todo-list"),r=document.querySelector(".completed"),o=e.map(e=>`\n            <div class="todo-card">\n            <input type="checkbox" class="checkbox">\n            <span> ${e.note}</span>\n            <span> ${e.dueDate}</span>\n            <span> ${e.priority}</span>\n            <button class="delete-btn">x</button>\n            </div>\n            `).join(""),i=n.map(e=>`\n            <div class="completed-card">\n            <span> ${e.note}</span>\n            <span> ${e.dueDate}</span>\n            </div>\n            `).join("");r.innerHTML=i,t.innerHTML=o};return t(),{addNewTodo:()=>{let n=document.querySelector(".input-note").value,r=document.querySelector(".due-date").value,i=document.querySelector("#priority"),a=new o(n,r,i.options[i.selectedIndex].value);t(),e.push(a)},render:i,getLists:t,checkBox:t=>{if("checkbox"==t.target.classList){let r=t.target.parentNode;r.classList.add("checked");let o=r.getAttribute("data-index"),a=e.splice(o,1);n.push(a[0]),i()}},setIndex:()=>{let n=document.querySelectorAll(".todo-card");for(let t=0;t<e.length;t++)n[t].setAttribute("data-index",t)},deleteCard:n=>{if("delete-btn"==n.target.className){let t=n.target.parentNode.getAttribute("data-index");e.splice(t,1),i()}}}})(),a=(e,n)=>{let t=document.createElement(e);return n&&t.classList.add(n),t};const c=(()=>{let e=a("div","main-container");const n=()=>{document.querySelector(".form-field").innerHTML='\n            <label for="noteForm"></label>\n                        <input type="text"  name="input-note" class="input-note" placeholder="Note" required>\n                        <label for="dueDate">Due Date </label>\n                        <input type="date"  name="due-date" class="due-date">\n                        <label for="priority"> Priority </label>\n                        <select name="priority" id="priority">\n                            <option value=""> </option>\n                            <option value="low"> Low </option>\n                            <option value="medium"> Medium </option>\n                            <option value="high"> High </option>\n                        </select>\n                    \n            '};return{container:()=>(e.append((()=>{let e=a("div","col1"),n=a("div","banner-cont"),t=a("div","project-cont"),r=a("h1"),o=a("div","project-btn-div"),i=a("h2"),c=a("button","add-btn");return c.classList.add("add-project"),r.textContent="O-Note Again",i.textContent="Projects",c.textContent="+",o.append(i,c),n.append(r),e.append(n,o,t),e})()),e.append((()=>{let e=a("div","col2"),n=a("div","project-header"),t=a("div","form-field"),r=a("div","todo-list"),o=a("div","completed"),i=a("h2"),c=a("button","add-btn");return c.classList.add("add-todo"),i.innerHTML="Project Name",c.innerHTML="+",t.style.visibility="hidden",n.append(i,c),e.append(n,t,r,o),e})()),e),showForms:()=>{let e=document.querySelector(".form-field");"hidden"===e.style.visibility?(n(),e.style.visibility="visible"):(e.style.visibility="hidden",i.addNewTodo(),i.render(),i.setIndex())}}})(),d={init:()=>{(()=>{const e=document.querySelector(".add-project");e.addEventListener("click",r.addNewProject),e.addEventListener("click",r.setIndex)})(),(()=>{const e=document.querySelector(".project-cont");e.addEventListener("click",r.showProjectPage),e.addEventListener("click",r.changeName),e.addEventListener("click",r.selectProject),e.addEventListener("click",i.getLists),e.addEventListener("click",r.deleteProject),e.addEventListener("click",i.render)})(),(()=>{const e=document.querySelector(".add-todo");e.addEventListener("click",c.showForms),e.addEventListener("click",i.checkBox)})(),(()=>{const e=document.querySelector(".todo-list");e.addEventListener("click",i.checkBox),e.addEventListener("click",i.deleteCard)})()}};document.querySelector("#content").append(c.container()),window.addEventListener("load",d.init)},function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],d=n.base?i[0]+n.base:i[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var p=c(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:s,updater:m(u,n),references:1}),r.push(s)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,p=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=g||(g=l(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=d(e,n),l=0;l<t.length;l++){var s=c(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=i}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,":root {\n    --white: #f4f9f4;\n    --green: #a7d7c5;\n    --darkgreen: #74b49b;\n    --darkestgreen:#5c8d89;\n    --main-font: 'Titillium Web', sans-serif;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns:30vw 70vw;\n    font-family: var(--main-font);\n    position: fixed;\n}\n\n.col1 {\n    background-color: var(--green);\n    box-shadow: 1px 1px gray;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 12vh 10vh 80vh;\n}\n\n.banner-cont {\n    background-color: var(--darkgreen);\n    padding: 10px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    font-family: var(--main-font);\n    border-bottom: thin solid gray;\n    border-right: thin solid gray;\n}\n\n\n.project-cont {\n    background-color: var(--darkgreen);\n    display: flex;\n    flex-direction: column;\n    padding: 20px 0px 0px 0px;\n    border-right: thin solid gray;\n    overflow: auto;\n}\n\n.project-btn-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0px 20px 0px 20px;\n}\n\n.add-btn {\n    border-radius: 25px;\n    height: 50px;\n    width: 50px;\n    border: thin gray;\n    margin: 10px;\n    font-size: 2em;\n}\n\n.add-project {\n    background-color: var(--white);\n}\n\n.project-card {\n    height: 3em;\n    border-bottom: thin solid grey;\n    background-color: var(--white);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 5px 5px 20px;\n    box-shadow: 0px 0px 4px 1px grey;\n}\n\n\n.selected {\n    background-color: var(--darkestgreen);\n    color: var(--white)\n}\n\n\n.col2 {\n    background-color: var(--white);\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 12vh 10vh 60vh 15vh;\n}\n\n\n.project-header{\n    background-color: var(--darkestgreen);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 10px 10px 50px;\n    color:white;\n\n\n}\n\n.add-todo {\n    background-color: var(--white);\n    float: right;\n    margin: 0px 25px 0px -20px;\n    color: var(--darkestgreen);\n}\n\n\n.form-field {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: var(--darkgreen);\n    border-bottom: thin solid grey;\n}\n\n.form-field input:first-of-type {\n    width: 45%;\n    height: 30%;\n    background-color: var(--green);\n    border: thin var(--darkgreen) solid;\n}\n\n\nh1 {\n    margin: 0 auto;\n    text-align: center;\n}\n\n.todo-list {\n    background-color: var(--white);\n    padding: 20px 10px 0px 10px;\n    overflow: auto;\n}\n\n.todo-card {\n    height: 3em;\n    width: 85%;\n    margin: 0 auto;\n    border-bottom: thin solid #80808069;\n    background-color: var(--white);\n    padding: 5px 5px 5px 20px;\n    display: grid;\n    grid-template-columns: 10% 50% 20% 10% 10%;\n    \n}\n\n\n.todo-card > * {\n    display: flex;\n    align-items: center;\n\n}\n\n.completed-card {\n    height: 3em;\n    width: 85%;\n    margin: 0 auto;\n    border-bottom: thin solid #80808069;\n    background-color: var(--white);\n    padding: 5px 5px 5px 20px;\n    color:gray;\n    text-decoration: line-through;\n    display: grid;\n    grid-template-columns: 80% 20%;\n}\n\n.completed {\n    overflow: auto;\n    border-top: var(--darkestgreen) solid 5px;\n}\n\n.checkbox {\n    margin-top: 15px;\n    width: 20px;\n    height: 20px;\n}\n\n.checked {\n    background-color: var(--green);\n\n}\n\n\n.delete-btn, .delete-project {\n    border-radius: 10px;\n    border: thin solid #808080a8;\n    color:white;\n    background-color: #ff0000a1;\n    height: 17px;\n    width: 21px;\n    margin: 14px 10px 10px 20px;\n}\n\n\n\n\n\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}}]);