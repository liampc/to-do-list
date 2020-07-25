!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const r=e=>{let t=[],n=[];return{getName:()=>e,changeName:t=>{null!=(t=prompt("Change project Name"))&&""!=t&&(e=t)},getTodos:()=>t,getCompletedList:()=>n}},a=(()=>{const e=[],t=()=>{let t=document.querySelector(".project-cont"),n=e.map(e=>`\n            <div class="project-card">\n            <span> ${e.getName()}</span>\n            <button class="delete-project"> x </button>\n            </div>\n            `).join("");t.innerHTML=n},n=()=>{let t=document.querySelectorAll(".project-card");for(let n=0;n<e.length;n++)t[n].setAttribute("data-index",n)},a=t=>{if("project-card"==t.target.className){let n=t.target.getAttribute("data-index"),r=e[n].getName();document.querySelector(".project-header h2").innerHTML=r}};return{projectList:e,addNewProject:()=>{let n=document.querySelector(".project-name");if(""==n.value)return;let a=r(n.value);e.push(a),t(),n.value=""},setIndex:n,showProjectPage:a,changeName:r=>{if("SPAN"==r.target.tagName){let a=r.target.parentNode.getAttribute("data-index");e[a].changeName(),t(),n()}},selectProject:e=>{if("project-card"==e.target.className){let t=document.querySelectorAll(".project-card"),n=e.target;t.forEach(e=>{e.classList.remove("selected")}),n.classList.add("selected")}},deleteProject:r=>{if("delete-project"==r.target.className){let a=r.target.parentNode.getAttribute("data-index");e.splice(a,1),t(),n()}},initial:()=>{let n=r("Project");e.push(n),t(),document.querySelector(".project-card").classList.add("selected"),a()}}})();function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(e){o(1,arguments);var t=i(e);return!isNaN(t)}var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var s={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var c=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[c]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=r.match(i);if(!c)return null;var u,d=c[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,(function(e){return e.test(d)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,(function(e){return e.test(d)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(d.length)}}}var m,g={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(m.matchPattern);if(!a)return null;var o=a[0],i=n.match(m.parsePattern);if(!i)return null;var c=m.valueCallback?m.valueCallback(i[0]):i[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:n.slice(o.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){o(2,arguments);var n=i(e).getTime(),r=p(t);return new Date(n+r)}function w(e,t){o(2,arguments);var n=p(t);return v(e,-n)}function b(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var y={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},d:function(e,t){return b(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return b(e.getUTCHours()%12||12,t.length)},H:function(e,t){return b(e.getUTCHours(),t.length)},m:function(e,t){return b(e.getUTCMinutes(),t.length)},s:function(e,t){return b(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),t.length)}};function x(e){o(1,arguments);var t=1,n=i(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function T(e){o(1,arguments);var t=i(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=x(r),c=new Date(0);c.setUTCFullYear(n,0,4),c.setUTCHours(0,0,0,0);var u=x(c);return t.getTime()>=a.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function M(e){o(1,arguments);var t=T(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=x(n);return r}function k(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,c=null==a?0:p(a),u=null==n.weekStartsOn?c:p(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=i(e),s=d.getUTCDay(),l=(s<u?7:0)+s-u;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function C(e,t){o(1,arguments);var n=i(e,t),r=n.getUTCFullYear(),a=t||{},c=a.locale,u=c&&c.options&&c.options.firstWeekContainsDate,d=null==u?1:p(u),s=null==a.firstWeekContainsDate?d:p(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,s),l.setUTCHours(0,0,0,0);var f=k(l,t),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var m=k(h,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function S(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:p(a),c=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),u=C(e,t),d=new Date(0);d.setUTCFullYear(u,0,c),d.setUTCHours(0,0,0,0);var s=k(d,t);return s}var j="midnight",P="noon",D="morning",N="afternoon",L="evening",U="night";function E(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+b(o,2)}function q(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}var W={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(e,t)},Y:function(e,t,n,r){var a=C(e,r),o=a>0?a:1-a;return"YY"===t?b(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){return b(T(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){o(1,arguments);var n=i(e),r=k(n,t).getTime()-S(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},I:function(e,t,n){var r=function(e){o(1,arguments);var t=i(e),n=x(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,n){var r=function(e){o(1,arguments);var t=i(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):b(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return b(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?P:0===a?j:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?L:a>=12?N:a>=4?D:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return q(a);case"XXXX":case"XX":return O(a);case"XXXXX":case"XXX":default:return O(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return q(a);case"xxxx":case"xx":return O(a);case"xxxxx":case"xxx":default:return O(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+E(a,":");case"OOOO":default:return"GMT"+O(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+E(a,":");case"zzzz":default:return"GMT"+O(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return b(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return b((r._originalDate||e).getTime(),t.length)}};function Y(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var A={p:H,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return Y(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,t)).replace("{{time}}",H(o,t))}};function z(e){return e.getTime()%6e4}function F(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+z(t))%6e4:z(t))}var B=["D","DD"],X=["YY","YYYY"];function Q(e){return-1!==B.indexOf(e)}function G(e){return-1!==X.indexOf(e)}function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,$=/''/g,V=/[a-zA-Z]/;function K(e){return e.match(J)[1].replace($,"'")}function Z(e,t,n){this.note=e,this.dueDate=t,this.priority=n}let ee=(()=>{let e,t;const n=()=>{let n;if(document.querySelectorAll(".project-card").forEach(e=>{e.classList.contains("selected")&&(n=e.getAttribute("data-index"))}),void 0!==n){let r=a.projectList[n].getTodos(),o=a.projectList[n].getCompletedList();e=r,t=o}},r=()=>{let n=document.querySelector(".todo-list"),r=document.querySelector(".completed"),a=e.map(e=>`\n            <div class="todo-card">\n            <input type="checkbox" class="checkbox">\n            <span> ${e.note}</span>\n            <span> ${e.dueDate}</span>\n            <span> ${e.priority}</span>\n            <button class="delete-btn">x</button>\n            </div>\n            `).join(""),o=t.map(e=>`\n            <div class="completed-card">\n            <span> ${e.note}</span>\n            <span> ${e.dueDate}</span>\n            </div>\n            `).join("");r.innerHTML=o,n.innerHTML=a};return n(),{addNewTodo:()=>{let t=document.querySelector(".input-note").value,r=document.querySelector(".due-date").value;r&&(r=function(e,t,n){o(2,arguments);var r=String(t),a=n||{},u=a.locale||g,d=u.options&&u.options.firstWeekContainsDate,s=null==d?1:p(d),l=null==a.firstWeekContainsDate?s:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=u.options&&u.options.weekStartsOn,h=null==f?0:p(f),m=null==a.weekStartsOn?h:p(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var v=i(e);if(!c(v))throw new RangeError("Invalid time value");var b=F(v),y=w(v,b),x={firstWeekContainsDate:l,weekStartsOn:m,locale:u,_originalDate:v},T=r.match(_).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,u.formatLong,x):e})).join("").match(I).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var o=W[r];if(o)return!a.useAdditionalWeekYearTokens&&G(n)&&R(n,t,e),!a.useAdditionalDayOfYearTokens&&Q(n)&&R(n,t,e),o(y,n,u.localize,x);if(r.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}(new Date(r),"MMM-dd"));let a=document.querySelector("#priority"),u=new Z(t,r,a.options[a.selectedIndex].value);n(),e.push(u)},render:r,getLists:n,checkBox:n=>{if("checkbox"==n.target.classList){let a=n.target.parentNode;a.classList.add("checked");let o=a.getAttribute("data-index"),i=e.splice(o,1);t.push(i[0]),r()}},setIndex:()=>{let t=document.querySelectorAll(".todo-card");for(let n=0;n<e.length;n++)t[n].setAttribute("data-index",n)},deleteCard:t=>{if("delete-btn"==t.target.className){let n=t.target.parentNode.getAttribute("data-index");e.splice(n,1),r()}}}})(),te=(e,t)=>{let n=document.createElement(e);return t&&n.classList.add(t),n};const ne=(()=>{let e=te("div","main-container");const t=()=>{document.querySelector(".form-field").innerHTML='\n            <label for="noteForm"></label>\n                        <input type="text"  name="input-note" class="input-note" placeholder="Note" required>\n                        <label for="dueDate">Due Date </label>\n                        <input type="date"  name="due-date" class="due-date">\n                        <label for="priority"> Priority </label>\n                        <select name="priority" id="priority">\n                            <option value=""> </option>\n                            <option value="low"> Low </option>\n                            <option value="medium"> Medium </option>\n                            <option value="high"> High </option>\n                        </select>\n                    \n            '};return{container:()=>(e.append((()=>{let e=te("div","col1"),t=te("div","banner-cont"),n=te("div","project-cont"),r=te("h1"),a=te("div","project-btn-div"),o=te("input","project-name");o.type="text",o.placeholder="Add Project";let i=te("button","add-btn");return i.classList.add("add-project"),r.textContent="O-Note Again",i.textContent="+",a.append(o,i),t.append(r),e.append(t,a,n),e})()),e.append((()=>{let e=te("div","col2"),t=te("div","project-header"),n=te("div","form-field"),r=te("div","todo-list"),a=te("div","completed"),o=te("h2"),i=te("button","add-btn");return i.classList.add("add-todo"),o.innerHTML="Project",i.innerHTML="+",n.style.visibility="hidden",t.append(o,i),e.append(t,n,r,a),e})()),e),showForms:()=>{let e=document.querySelector(".form-field");"hidden"===e.style.visibility?(t(),e.style.visibility="visible"):(e.style.visibility="hidden",ee.addNewTodo(),ee.render(),ee.setIndex())}}})(),re={init:()=>{(()=>{const e=document.querySelector(".add-project");e.addEventListener("click",a.addNewProject),e.addEventListener("click",a.setIndex)})(),(()=>{const e=document.querySelector(".project-cont");e.addEventListener("click",a.showProjectPage),e.addEventListener("click",a.changeName),e.addEventListener("click",a.selectProject),e.addEventListener("click",ee.getLists),e.addEventListener("click",a.deleteProject),e.addEventListener("click",ee.render)})(),(()=>{const e=document.querySelector(".add-todo");e.addEventListener("click",ne.showForms),e.addEventListener("click",ee.checkBox)})(),(()=>{const e=document.querySelector(".todo-list");e.addEventListener("click",ee.checkBox),e.addEventListener("click",ee.deleteCard)})()}};document.querySelector("#content").append(ne.container()),window.addEventListener("load",re.init),window.addEventListener("load",a.initial),window.addEventListener("load",a.setIndex)},function(e,t,n){var r=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],u=t.base?o[0]+t.base:o[0],d=n[u]||0,s="".concat(u," ").concat(d);n[u]=d+1;var l=c(s),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:s,updater:p(f,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function p(e,t){var n,r,a;if(t.singleton){var o=g++;n=m||(m=d(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=d(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=u(e,t),d=0;d<n.length;d++){var s=c(n[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=o}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,":root {\n    --white: #f4f9f4;\n    --green: #a7d7c5;\n    --darkgreen: #74b49b;\n    --darkestgreen:#5c8d89;\n    --main-font: 'Titillium Web', sans-serif;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns:30vw 70vw;\n    font-family: var(--main-font);\n    position: fixed;\n}\n\n.col1 {\n    background-color: var(--green);\n    box-shadow: 1px 1px gray;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 12vh 10vh 80vh;\n}\n\n.banner-cont {\n    background-color: var(--darkgreen);\n    padding: 10px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    font-family: var(--main-font);\n    border-bottom: thin solid gray;\n    border-right: thin solid gray;\n}\n\n\n.project-cont {\n    background-color: var(--darkgreen);\n    display: flex;\n    flex-direction: column;\n    padding: 20px 0px 0px 0px;\n    border-right: thin solid gray;\n    overflow: auto;\n}\n\n.project-btn-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0px 20px 0px 20px;\n}\n\n.project-name {\n    height: 3em;\n    width: 80%;\n    font-family: var(--main-font);\n    color:black;\n    border:thin solid var(--green);\n    background-color: var(--green);\n}\n\n.add-btn {\n    border-radius: 25px;\n    height: 50px;\n    width: 50px;\n    border: thin gray;\n    margin: 10px;\n    font-size: 2em;\n}\n\n.add-project {\n    background-color: var(--white);\n}\n\n.project-card {\n    height: 3em;\n    border-bottom: thin solid grey;\n    background-color: var(--white);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 5px 5px 20px;\n    box-shadow: 0px 0px 4px 1px grey;\n}\n\n\n.selected {\n    background-color: var(--darkestgreen);\n    color: var(--white)\n}\n\n\n.col2 {\n    background-color: var(--white);\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 12vh 10vh 60vh 15vh;\n}\n\n\n.project-header{\n    background-color: var(--darkestgreen);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 10px 10px 50px;\n    color:white;\n\n\n}\n\n.add-todo {\n    background-color: var(--white);\n    float: right;\n    margin: 0px 25px 0px -20px;\n    color: var(--darkestgreen);\n}\n\n\n.form-field {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: var(--darkgreen);\n    border-bottom: thin solid grey;\n}\n\n.form-field input:first-of-type {\n    width: 45%;\n    height: 30%;\n    background-color: var(--green);\n    border: thin var(--darkgreen) solid;\n}\n\n\nh1 {\n    margin: 0 auto;\n    text-align: center;\n}\n\n.todo-list {\n    background-color: var(--white);\n    padding: 20px 10px 0px 10px;\n    overflow: auto;\n}\n\n.todo-card, .completed-card{\n    height: 2.5em;\n    width: 85%;\n    margin: 0 auto;\n    border-bottom: thin solid #80808069;\n    background-color: var(--white);\n    padding: 5px 5px 5px 20px;\n    display: grid;\n    grid-template-columns: 10% 50% 20% 10% 10%;\n    \n}\n\n\n.todo-card > * {\n    display: flex;\n    align-items: center;\n\n}\n\n.completed-card {\n    text-decoration: line-through;\n    grid-template-columns: 80% 20%;\n    color:gray;\n}\n\n.completed {\n    overflow: auto;\n    border-top: var(--darkestgreen) solid 5px;\n}\n\n.checkbox {\n    margin-top: 15px;\n    width: 20px;\n    height: 20px;\n}\n\n.checked {\n    background-color: var(--green);\n\n}\n\n\n.delete-btn, .delete-project {\n    border-radius: 10px;\n    border: thin solid #808080a8;\n    color:white;\n    background-color: #ff0000a1;\n    height: 17px;\n    width: 21px;\n    margin: 14px 10px 10px 20px;\n}\n\n\n\n\n\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}}]);