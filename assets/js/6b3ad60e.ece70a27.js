(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{369:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(751)),i={title:"RECURSION operator"},p={unversionedId:"RECURSION_operator",id:"RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION\xa0operator\xa0creates a\xa0property that implements\xa0recursion.",source:"@site/docs/RECURSION_operator.md",slug:"/RECURSION_operator",permalink:"/platform/docs/next/RECURSION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/RECURSION_operator.md",version:"current",sidebar:"docs",previous:{title:"PREV operator",permalink:"/platform/docs/next/PREV_operator"},next:{title:"STRUCT operator",permalink:"/platform/docs/next/STRUCT_operator"}},c=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"RECURSION\xa0"),"operator\xa0creates a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," that implements\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Recursion_RECURSION_"},"recursion"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",Object(o.b)("strong",{parentName:"p"},"$name"),", where ",Object(o.b)("strong",{parentName:"p"},"name")," is the name of the parameter."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"initialExpr")),Object(o.b)("p",null,"An expression whose value is the initial property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"stepExpr")),Object(o.b)("p",null,"An expression whose value is a property of a recursion step. Allows a special syntax (",Object(o.b)("strong",{parentName:"p"},"$name"),") to access the value of the ",Object(o.b)("strong",{parentName:"p"},"name")," parameter in the previous step."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES YES")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are allowed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES NO")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not allowed. This option is used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES IMPOSSIBLE")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not possible."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")),Object(o.b)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"fib(i) = RECURSION 1 IF (i==0 OR i==1) STEP 1 IF (i==$i+1 OR i==$i+2);\n")),Object(o.b)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own,\xa0artificially\xa0creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed\xa0into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}l.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);