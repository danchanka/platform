(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{693:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(751)),p={title:"Instruction =: Overview",sidebar_label:"Overview"},i={unversionedId:"Instruction_=",id:"Instruction_=",isDocsHomePage:!1,title:"Instruction =: Overview",description:"The =\xa0 instruction\xa0creates a new property.",source:"@site/docs/Instruction_=.md",slug:"/Instruction_=",permalink:"/platform/docs/next/Instruction_=",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Instruction_=.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Module header",permalink:"/platform/docs/next/Module_header"},next:{title:"Expression: Overview",permalink:"/platform/docs/next/Expression"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"=\xa0")," instruction\xa0creates a new ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"name [caption] [(param1, ..., paramN)] = expression [options];\nname [caption] [(param1, ..., paramN)] = contextIndependentOperator [options];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"=\xa0")," instruction declares a new property and adds it to the current\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"module"),"."),Object(o.b)("p",null,"When creating a property, the instruction has two forms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The first form describes and creates a property using an ",Object(o.b)("a",{parentName:"li",href:"/platform/docs/next/Expression"},"expression"),".\xa0"),Object(o.b)("li",{parentName:"ul"},"The second form describes the property using one of the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/docs/next/Property_operators#contextindependent"},"context-independent"),"\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/docs/next/Property_operators"},"property operators")," that cannot be part of an expression.")),Object(o.b)("p",null,"When declaring a property, its set of options can also be specified. \xa0\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name\xa0")),Object(o.b)("p",null,"The name of the property.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Property caption.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Literals#strliteral-broken"},"String literal"),". If no caption is specified, then the property caption will be its name. \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters. Each of these is specified by a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#paramid-broken"},"typed parameter"),". These parameters can then be used in the expression describing the property being created (as well as in some options)."),Object(o.b)("p",null,"If parameters are not specified explicitly, they will be automatically calculated\xa0when processing the expression. The order of the parameters will correspond to the order in which the parameters appear in the expression. It is recommended that you explicitly specify property parameters. This will allow to find typos and other errors in the declaration (for example, a mismatch of the number of parameters provided with the number of parameters of the created property)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An expression that describes and creates a property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"contextIndependentOperator")),Object(o.b)("p",null,"A context-independent property operator that describes and creates a property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"options")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Property_options"},"Property options"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}l.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,u=b["".concat(p,".").concat(m)]||b[m]||d[m]||o;return r?a.a.createElement(u,i(i({ref:t},s),{},{components:r})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);