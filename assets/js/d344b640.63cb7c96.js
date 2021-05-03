(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27769],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9745:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"RECURSION operator"},p={unversionedId:"RECURSION_operator",id:"version-v4/RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION operator creates a property that implements recursion.",source:"@site/versioned_docs/version-v4/RECURSION_operator.md",sourceDirName:".",slug:"/RECURSION_operator",permalink:"/platform/RECURSION_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/RECURSION_operator.md",version:"v4",lastUpdatedAt:1619434733,formattedLastUpdatedAt:"4/26/2021",frontMatter:{title:"RECURSION operator"},sidebar:"version-v4/learn",previous:{title:"PREV operator",permalink:"/platform/PREV_operator"},next:{title:"STRUCT operator",permalink:"/platform/STRUCT_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RECURSION")," operator creates a ",(0,i.kt)("a",{parentName:"p",href:"/platform/Properties"},"property")," that implements ",(0,i.kt)("a",{parentName:"p",href:"/platform/Recursion_RECURSION_"},"recursion"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",(0,i.kt)("a",{parentName:"p",href:"/platform/Expression"},"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"$name"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is the name of the parameter."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"initialExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value is the initial property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"stepExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value is a property of a recursion step. Allows a special syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"$name")," to access the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter in the previous step.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES YES")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are allowed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES NO")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are not allowed. This option is used by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES IMPOSSIBLE")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are not possible."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")),(0,i.kt)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"fib(i) = RECURSION 1 IF (i==0 OR i==1) STEP 1 IF (i==$i+1 OR i==$i+2);\n")),(0,i.kt)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own, artificially creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}c.isMDXComponent=!0}}]);