(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"Calculated events"},i={unversionedId:"Calculated_events",id:"version-v4/Calculated_events",isDocsHomePage:!1,title:"Calculated events",description:"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.",source:"@site/versioned_docs/version-v4/Calculated_events.md",slug:"/Calculated_events",permalink:"/platform/Calculated_events",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Calculated_events.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Simple event",permalink:"/platform/Simple_event"},next:{title:"Constraints",permalink:"/platform/Constraints"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Calculated")," events are events that change the value of a property when the value of some other property (",Object(o.b)("em",{parentName:"p"},"condition"),") changes to a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value. Moreover, unlike ",Object(o.b)("a",{parentName:"p",href:"/platform/Simple_event"},"simple")," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},"changed")," in the same session, this change is considered higher priority than the change in the calculated event."),Object(o.b)("p",null,"For each property, there can only be one calculated event that changes this property. \xa0"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To define calculated events, use ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_-_WHEN"},"the ",Object(o.b)("strong",{parentName:"a"},"<- WHEN")," instruction"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// when adding a client, by default, give him the specified discount\ndefaultDiscount = DATA NUMERIC[6,2] ();\ndiscount = DATA NUMERIC[6,2] (Customer);\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[10,2] (OrderDetail);\n\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);