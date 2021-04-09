(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"Instruction<- WHEN"},i={unversionedId:"Instruction_-_WHEN",id:"Instruction_-_WHEN",isDocsHomePage:!1,title:"Instruction<- WHEN",description:"The <-\xa0WHEN\xa0instruction creates a\xa0calculated event.",source:"@site/docs/Instruction_-_WHEN.md",slug:"/Instruction_-_WHEN",permalink:"/platform/next/Instruction_-_WHEN",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Instruction_-_WHEN.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"WHEN instruction",permalink:"/platform/next/WHEN_instruction"},next:{title:"CONSTRAINT instruction",permalink:"/platform/next/CONSTRAINT_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"<-\xa0WHEN"),"\xa0instruction creates a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Calculated_events"},"calculated event"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"propertyId(param1, ..., paramN) <- valueExpr WHEN eventExpr;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"<-WHEN")," instruction creates a calculated event for the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"property")," specified on the left side of the instruction.\xa0This operator **\xa0** can declare its own local parameters when specifying the property whose value will ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},"change"),". These parameters can then be used in expressions of the condition and value to which the property will change."),Object(o.b)("p",null,"Only one calculated event can be defined for a property.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," whose value will be changed\xa0when the event occurs."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#paramid-broken"},"Typed parameters")," properties whose value will be changed when the event occurs. The number of these parameters must be equal to the number of parameters of the property being changed."),Object(o.b)("p",null,"valueExpr"),Object(o.b)("p",null,"The expression to whose value the property value must be changed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventExpr")),Object(o.b)("p",null,"An expression whose value is a condition for the generated event."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// when adding a client, by default, give him the specified discount\ndefaultDiscount = DATA NUMERIC[6,2] ();\ndiscount = DATA NUMERIC[6,2] (Customer);\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[10,2] (OrderDetail);\n\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n")))}u.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);