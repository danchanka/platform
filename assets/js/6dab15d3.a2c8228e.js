(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{372:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Recursion (RECURSION)"},l={unversionedId:"Recursion_RECURSION_",id:"Recursion_RECURSION_",isDocsHomePage:!1,title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/docs/Recursion_RECURSION_.md",slug:"/Recursion_RECURSION_",permalink:"/platform/next/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Recursion_RECURSION_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/platform/next/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"Distribution (UNGROUP)",permalink:"/platform/next/Distribution_UNGROUP_"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"recursion")," operator is an operator that creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," which sequentially performs two operations:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN), where initial is an ",Object(o.b)("em",{parentName:"li"},"initial")," property."),Object(o.b)("li",{parentName:"ol"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN), where step is a ",Object(o.b)("em",{parentName:"li"},"step")," property."))),Object(o.b)("li",{parentName:"ol"},"For all values of the obtained property, it calculates the given\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Set_operations#func"},"aggregate function"),"\xa0grouping by all its parameters except the operation number.")),Object(o.b)("p",null,"Currently, only two types of aggregate functions are supported for the recursion operator: ",Object(o.b)("strong",{parentName:"p"},"SUM")," and\xa0",Object(o.b)("strong",{parentName:"p"},"OR"),". The latter is used in the case when the initial value and step are of class ",Object(o.b)("strong",{parentName:"p"},"BOOLEAN."),"\xa0",Object(o.b)("strong",{parentName:"p"},"SUM")," is used in all other cases."),Object(o.b)("p",null,"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"CYCLES YES")," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",Object(o.b)("strong",{parentName:"li"},"BOOLEAN"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"CYCLES NO")," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"CYCLES IMPOSSIBLE")," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated.")),Object(o.b)("p",null,"When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",Object(o.b)("strong",{parentName:"p"},"NULL"),". (This refers primarily to a ",Object(o.b)("strong",{parentName:"p"},"CYCLES IMPOSSIBLE")," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare a property that implements recursion, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/RECURSION_operator"},Object(o.b)("strong",{parentName:"a"},"RECURSION")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")))}p.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,l(l({ref:t},c),{},{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);