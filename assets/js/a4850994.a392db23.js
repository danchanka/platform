(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64301],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96255:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Simple event"},l={unversionedId:"Simple_event",id:"version-v4/Simple_event",isDocsHomePage:!1,title:"Simple event",description:"Simple event - an event that occurs when the value of the specified property (which shall be called an event condition) changes to non-NULL. This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:",source:"@site/versioned_docs/version-v4/Simple_event.md",sourceDirName:".",slug:"/Simple_event",permalink:"/platform/Simple_event",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Simple_event.md",version:"v4",lastUpdatedAt:1620216094,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Simple event"},sidebar:"version-v4/learn",previous:{title:"Events",permalink:"/platform/Events"},next:{title:"Calculated events",permalink:"/platform/Calculated_events"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Simple")," event - an ",(0,i.kt)("a",{parentName:"p",href:"/platform/Events"},"event")," that occurs when the value of the specified ",(0,i.kt)("a",{parentName:"p",href:"/platform/Properties"},"property")," (which shall be called an event ",(0,i.kt)("em",{parentName:"p"},"condition"),") changes to non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"event ",(0,i.kt)("a",{parentName:"li",href:"/platform/Events#type"},"type"),", which determines the point in time when this simple event will occur (including checking the condition)."),(0,i.kt)("li",{parentName:"ul"},"event ",(0,i.kt)("a",{parentName:"li",href:"/platform/Events"},"handler")," - an ",(0,i.kt)("a",{parentName:"li",href:"/platform/Actions"},"action")," to be executed upon the occurrence of this simple event")),(0,i.kt)("p",null,"Compared to a basic event, a simple event just wraps its handling in a ",(0,i.kt)("a",{parentName:"p",href:"/platform/Loop_FOR_"},"loop")," operator whose condition is an event condition. However, simple events have a number of important additional features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the condition does not contain the ",(0,i.kt)("a",{parentName:"li",href:"/platform/Previous_value_PREV_"},"previous value operator (",(0,i.kt)("inlineCode",{parentName:"a"},"PREV"),")"),", the platform itself wraps the specified condition in a ",(0,i.kt)("a",{parentName:"li",href:"/platform/Change_operators_SET_CHANGED_..._"},"change operator (",(0,i.kt)("inlineCode",{parentName:"a"},"SET"),")"),". This significantly reduces the risk of creating incorrect handling (which will have consequences if the change session is empty)"),(0,i.kt)("li",{parentName:"ul"},"Such events are more understandable and readable, as they reflect the classic cause-effect relationship (when one thing occurs, another is done)"),(0,i.kt)("li",{parentName:"ul"},'For these events there is the possibility of "recalculation" - that is, executing handlers in a mode where all previous values are ',(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," (as if the database were empty). This is useful when an event is created for an existing database, and the old data must also follow the logic of this event."),(0,i.kt)("li",{parentName:"ul"},"If the action in a simple event is a single ",(0,i.kt)("a",{parentName:"li",href:"/platform/Property_change_CHANGE_"},"change")," of a given property, this event is easily made ",(0,i.kt)("a",{parentName:"li",href:"/platform/Calculated_events"},"calculated")," and vice versa.")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To create simple events, use the ",(0,i.kt)("a",{parentName:"p",href:"/platform/WHEN_instruction"},(0,i.kt)("inlineCode",{parentName:"a"},"WHEN")," instruction"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}p.isMDXComponent=!0}}]);