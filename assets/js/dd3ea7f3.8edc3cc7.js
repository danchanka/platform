(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{664:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(751)),i={title:"Domain logic: Overview",sidebar_label:"Overview"},c={unversionedId:"Domain_logic",id:"version-1.0.0/Domain_logic",isDocsHomePage:!1,title:"Domain logic: Overview",description:"Properties are the basic concept for business logic and are responsible for storing and calculating data.",source:"@site/versioned_docs/version-1.0.0/Domain_logic.md",slug:"/Domain_logic",permalink:"/platform/docs/Domain_logic",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Domain_logic.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Logical model: Overview",permalink:"/platform/docs/Logical_model"},next:{title:"Properties: Overview",permalink:"/platform/docs/Properties"}},l=[{value:"Stack",id:"stack",children:[]}],s={toc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"Properties")," are the basic concept for business logic and are responsible for storing and calculating data.\xa0"),Object(o.b)("p",null,"An important feature of properties is that they do not change the data in the system in any way \u2013 for this, the platform has ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"actions"),".\xa0"),Object(o.b)("p",null,"Actions answer the question of what to do, but do not answer the question of when to do it. To define such moments, the platform has ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Events"},"events"),".\xa0"),Object(o.b)("p",null,"As a rule, the business logic does not allow just any data changes: only changes subject to certain rules. The platform uses ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Constraints"},"constraints")," to define these rules."),Object(o.b)("p",null,"Accordingly, the summary table for all elements of the business logic is as follows:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"System elements"),Object(o.b)("th",{parentName:"tr",align:null},"Answer the question"),Object(o.b)("th",{parentName:"tr",align:null},"Character"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Properties"),Object(o.b)("td",{parentName:"tr",align:null},"What to store and calculate"),Object(o.b)("td",{parentName:"tr",align:null},"static / declarative")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Actions"),Object(o.b)("td",{parentName:"tr",align:null},"What to do"),Object(o.b)("td",{parentName:"tr",align:null},"dynamic / imperative")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Events"),Object(o.b)("td",{parentName:"tr",align:null},"When to do"),Object(o.b)("td",{parentName:"tr",align:null},"dynamic / imperative")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Constraints"),Object(o.b)("td",{parentName:"tr",align:null},"What can be done"),Object(o.b)("td",{parentName:"tr",align:null},"static / declarative")))),Object(o.b)("h3",{id:"stack"},"Stack"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,Object(o.b)("img",{src:n(909).default})))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},909:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/svgout619108216981339674-4940986ec61026063743980e6620107b.png"}}]);