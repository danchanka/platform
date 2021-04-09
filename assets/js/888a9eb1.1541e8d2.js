(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{442:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return u}));var l=n(3),r=n(7),b=(n(0),n(746)),a={title:"Literals"},c={unversionedId:"Literals",id:"Literals",isDocsHomePage:!1,title:"Literals",description:"|Name|Example|Class|Description|Constraints|",source:"@site/docs/Literals.md",slug:"/Literals",permalink:"/platform/next/Literals",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Literals.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"IDs",permalink:"/platform/next/IDs"},next:{title:"Instructions",permalink:"/platform/next/Instructions"}},i=[],o={toc:i};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(l.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Example"),Object(b.b)("th",{parentName:"tr",align:null},"Class"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"String literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"'text'")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"'line1\\nline2'")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"'{system.cancel}'"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"STRING","[N]",", TEXT, ITEXT")),Object(b.b)("td",{parentName:"tr",align:null},"A sequence of characters enclosed in single quotes, allowing to use the special sequences '\\n', '\\r', '\\t'. To specify single quote and backslash characters, use the escape sequences '\\'' and '","\\","'. A string literal can also be a ",Object(b.b)("a",{parentName:"td",href:"/platform/next/Internationalization"},"localizable")," string. In this case the literal's class will be ",Object(b.b)("strong",null,"TEXT"),", and instead of the characters '{' and '}' it is necessary to use the special sequences '","{","' and '","}","' respectively. If a string literal does not use localization capabilities, then the literal's class will be ",Object(b.b)("strong",null,"STRING","[N]")," where ",Object(b.b)("strong",null,"N")," is the number of characters in the string."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("br",null),Object(b.b)("br",null))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"Integer literal (int)",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"56")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"-32")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"1000000000"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"INTEGER")),Object(b.b)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning"),Object(b.b)("td",{parentName:"tr",align:null},"32-bit signed integers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"Integer literal (long)",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"56L")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"-32L")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"1000000000000L"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"LONG")),Object(b.b)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning and the letter L (uppercase or lowercase) at the end"),Object(b.b)("td",{parentName:"tr",align:null},"64-bit signed integers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"Floating-point literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"3d")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"4.25D")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"-2.125D"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"DOUBLE")),Object(b.b)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty), then the letter D (uppercase or lowercase). With an optional minus sign at the beginning."),Object(b.b)("td",{parentName:"tr",align:null},"64-bit floating point number")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),Object(b.b)("strong",null,"NUMERIC")," class literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"3")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"4.25")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"-2.125"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"NUMERIC","[N,M]")),Object(b.b)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty). With an optional minus sign at the beginning."),Object(b.b)("td",{parentName:"tr",align:null},"The number of digits of the integer and fractional parts of a literal is determined by its class")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"Logical literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"TRUE")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"BOOLEAN")),Object(b.b)("td",{parentName:"tr",align:null},"Keyword ",Object(b.b)("strong",null,"TRUE")),Object(b.b)("td",{parentName:"tr",align:null},"The opposite value is the special value ",Object(b.b)("strong",null,"NULL"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),Object(b.b)("strong",null,"DATE")," class literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"1982_07_13")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"2000_01_25"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"DATE")),Object(b.b)("td",{parentName:"tr",align:null},"Date in the format ",Object(b.b)("strong",null,"YYYY_MM_DD"),". Four digits specifying the year, an underscore, two digits for the month, an underscore, and two digits for the day."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("br",null),Object(b.b)("br",null))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),Object(b.b)("strong",null,"TIME")," class literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"12:05")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"00:59"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"TIME")),Object(b.b)("td",{parentName:"tr",align:null},"Time in the format ",Object(b.b)("strong",null,"HH:mm"),". Two digits for the hours, a colon and two digits for the minutes."),Object(b.b)("td",{parentName:"tr",align:null},"Hours from 0 to 23, minutes from 0 to 59")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),"Literal of class ",Object(b.b)("strong",null,"DATETIME"),Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"1982_07_13_12:05")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"DATETIME")),Object(b.b)("td",{parentName:"tr",align:null},"Date and time in the format ",Object(b.b)("strong",null,"YYYY_MM_DD_HH:mm")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("br",null),Object(b.b)("br",null))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("div",{class:"content-wrapper"},Object(b.b)("br",null),Object(b.b)("strong",null,"COLOR")," class literal",Object(b.b)("br",null))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,Object(b.b)("strong",null,"RGB(255, 0, 204)")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",null,"#FF00CC"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",null,"COLOR")),Object(b.b)("td",{parentName:"tr",align:null},"Two definition forms. The first is the keyword ",Object(b.b)("strong",null,"RGB"),", then comma-separated values for the red, green, and blue components in parentheses. The second is the pound sign, then the values of the red, blue, and green components in hexadecimal format, using two characters per component. ",Object(b.b)("strong",null)),Object(b.b)("td",{parentName:"tr",align:null},"Each number is from 0 to 255. In hexadecimal representation, you can use both uppercase and lowercase characters")))))}u.isMDXComponent=!0},746:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return j}));var l=n(0),r=n.n(l);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},b=Object.keys(t);for(l=0;l<b.length;l++)n=b[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(l=0;l<b.length;l++)n=b[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),u=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=u(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,b=t.originalType,a=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=u(n),O=l,j=s["".concat(a,".").concat(O)]||s[O]||p[O]||b;return n?r.a.createElement(j,c(c({ref:e},o),{},{components:n})):r.a.createElement(j,c({ref:e},o))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var b=n.length,a=new Array(b);a[0]=O;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,a[1]=c;for(var o=2;o<b;o++)a[o]=n[o];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);