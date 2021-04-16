(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{605:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"Grouping (GROUP)"},c={unversionedId:"Grouping_GROUP_",id:"version-v4/Grouping_GROUP_",isDocsHomePage:!1,title:"Grouping (GROUP)",description:"The group operator creates a property that divides all object collections in the system into groups, and calculates an aggregating function for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/versioned_docs/version-v4/Grouping_GROUP_.md",slug:"/Grouping_GROUP_",permalink:"/platform/Grouping_GROUP_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Grouping_GROUP_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Set operations",permalink:"/platform/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/platform/Partitioning_sorting_PARTITION_..._ORDER_"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"group "),"operator creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that divides all object collections in the system into groups, and calculates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Set_operations#func"},"aggregating function")," for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group. "),Object(o.b)("p",null,"Groups are defined for this operator as a set of properties (",Object(o.b)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker. If the aggregation function is not ",Object(o.b)("a",{parentName:"p",href:"/platform/Set_operations#commutative-broken"},"commutative"),", then the order must be uniquely determined. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"))),Object(o.b)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",Object(o.b)("strong",{parentName:"p"},"EQUAL"),", ",Object(o.b)("strong",{parentName:"p"},"AGGR")," and ",Object(o.b)("strong",{parentName:"p"},"NAGGR"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EQUAL "),"is a special case of the aggregation function ",Object(o.b)("strong",{parentName:"li"},"MAX")," (or ",Object(o.b)("strong",{parentName:"li"},"MIN"),"), with the additional ",Object(o.b)("a",{parentName:"li",href:"/platform/Constraints"},"constraint")," that the value of the operand of the aggregating function within each group must be the same. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AGGR")," and ",Object(o.b)("strong",{parentName:"li"},"NAGGR ")," are a special case of ",Object(o.b)("strong",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function NAGGR only differs from AGGR in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare a property that implements grouping, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/GROUP_operator"},Object(o.b)("strong",{parentName:"a"},"GROUP")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); // property (STRING[100]) -> Country is obtained\n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);