(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{548:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(746)),o={title:"Simple event"},c={unversionedId:"Simple_event",id:"Simple_event",isDocsHomePage:!1,title:"Simple event",description:"Simple\xa0event - an event that occurs when the value of the specified property (which shall be called an event\xa0condition)\xa0changes\xa0to non-NULL. This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:",source:"@site/docs/Simple_event.md",slug:"/Simple_event",permalink:"/platform/next/Simple_event",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Simple_event.md",version:"current",sidebar:"learn",previous:{title:"Events: Overview",permalink:"/platform/next/Events"},next:{title:"Calculated events",permalink:"/platform/next/Calculated_events"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Simple"),"\xa0event - an ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Events"},"event")," that occurs when the value of the specified ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," (which shall be called an event\xa0",Object(i.b)("em",{parentName:"p"},"condition"),")\xa0changes\xa0to non-",Object(i.b)("strong",{parentName:"p"},"NULL"),". This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"event ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Events#type"},"type"),", which determines the point in time when this simple event will occur (including checking the condition)."),Object(i.b)("li",{parentName:"ul"},"event ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Events"},"handler")," - an ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Actions"},"action")," to be executed upon the occurrence of this simple event")),Object(i.b)("p",null,"Compared to a basic event, a simple event just wraps its handling in a ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Loop_FOR_"},"loop")," operator\xa0whose condition is an\xa0event condition. However, simple events have a number of important additional features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the condition does not contain the ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Previous_value_PREV_"},"previous value operator (PREV)"),", the platform itself wraps the specified condition in a ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Change_operators_SET_CHANGED_..._"},"change operator (SET)"),". This significantly reduces the risk of creating incorrect handling (which will have consequences if the change session is empty)"),Object(i.b)("li",{parentName:"ul"},"Such events are more understandable and readable, as they reflect the classic cause-effect relationship (when one thing occurs, another is done)"),Object(i.b)("li",{parentName:"ul"},'For these events there is the possibility of "recalculation" - that is, executing handlers in a mode where all previous values are ',Object(i.b)("strong",{parentName:"li"},"NULL")," (as if the database were empty). This is useful when an event is created for an existing database, and the old data must also follow the logic of this event."),Object(i.b)("li",{parentName:"ul"},"If the action in a simple event is a single ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Property_change_CHANGE_"},"change")," of a given property, this event is easily made\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Calculated_events"},"calculated")," and vice versa.")),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To create simple events, use the ",Object(i.b)("a",{parentName:"p",href:"/platform/next/WHEN_instruction"},Object(i.b)("strong",{parentName:"a"},"WHEN")," instruction"),"."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);