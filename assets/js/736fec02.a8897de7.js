(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{382:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(745)),l={title:"Change operators (SET, CHANGED, ...)"},i={unversionedId:"Change_operators_SET_CHANGED_..._",id:"version-v4/Change_operators_SET_CHANGED_..._",isDocsHomePage:!1,title:"Change operators (SET, CHANGED, ...)",description:"Change operators determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the previous value operator (PREV), however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:",source:"@site/versioned_docs/version-v4/Change_operators_SET_CHANGED_..._.md",slug:"/Change_operators_SET_CHANGED_..._",permalink:"/platform/Change_operators_SET_CHANGED_..._",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Change_operators_SET_CHANGED_..._.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Previous value (PREV)",permalink:"/platform/Previous_value_PREV_"},next:{title:"User/IS interaction",permalink:"/platform/User_IS_interaction"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Change operators")," determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the ",Object(o.b)("a",{parentName:"p",href:"/platform/Previous_value_PREV_"},"previous value operator (PREV)"),", however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Operator"),Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"SET")),Object(o.b)("td",{parentName:"tr",align:null},"f AND NOT PREV(f)"),Object(o.b)("td",{parentName:"tr",align:null},"Value is set")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DROPPED")),Object(o.b)("td",{parentName:"tr",align:null},"NOT f AND PREV(f)"),Object(o.b)("td",{parentName:"tr",align:null},"Value is reset")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CHANGED")),Object(o.b)("td",{parentName:"tr",align:null},"(f OR PREV(f)) AND NOT f==PREV(f)"),Object(o.b)("td",{parentName:"tr",align:null},"Value is changed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"SETCHANGED")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"f AND NOT f==PREV(f)"),Object(o.b)("br",null),Object(o.b)("p",null,"or"),Object(o.b)("br",null),Object(o.b)("p",null,"CHANGED(f) AND NOT DROPPED(f)")),Object(o.b)("td",{parentName:"tr",align:null},"Value is changed to non-",Object(o.b)("strong",null,"NULL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DROPCHANGED")),Object(o.b)("td",{parentName:"tr",align:null},"CHANGED(f) AND NOT SET(f)"),Object(o.b)("td",{parentName:"tr",align:null},"Value is either reset or changed from one non-",Object(o.b)("strong",null,"NULL")," to another non-",Object(o.b)("strong",null,"NULL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"SETDROPPED")),Object(o.b)("td",{parentName:"tr",align:null},"SET(f) OR DROPPED(f)"),Object(o.b)("td",{parentName:"tr",align:null},"Value is either reset or changed from ",Object(o.b)("strong",null,"NULL")," to non-",Object(o.b)("strong",null,"NULL"))))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"These operators are computed differently inside the ",Object(o.b)("a",{parentName:"p",href:"/platform/Events#change"},"event")," handler: in this case, they return changes from the point of the previous occurrence of this event, or rather, from the point at which all its handlers are completed."))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare a property using change operators, the following ",Object(o.b)("a",{parentName:"p",href:"/platform/Change_operators"},"syntax constructs")," are used. "),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}b.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);