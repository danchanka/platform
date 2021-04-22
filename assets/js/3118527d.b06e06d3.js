(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var o=r(3),i=r(7),n=(r(0),r(747)),a={title:"Distribution (UNGROUP)"},l={unversionedId:"Distribution_UNGROUP_",id:"Distribution_UNGROUP_",isDocsHomePage:!1,title:"Distribution (UNGROUP)",description:"The distribution operator creates a property, the grouping\xa0value of which using sum function will be equal to the value of the specified property (distributable). Accordingly, as for a group operator, for a distribution operator multiple properties (groups) must be set by which the grouping will take place.",source:"@site/docs/Distribution_UNGROUP_.md",slug:"/Distribution_UNGROUP_",permalink:"/platform/next/Distribution_UNGROUP_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Distribution_UNGROUP_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Recursion (RECURSION)",permalink:"/platform/next/Recursion_RECURSION_"},next:{title:"Actions",permalink:"/platform/next/Actions"}},s=[{value:"Extended form",id:"extended-form",children:[]},{value:"Language",id:"language",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"distribution")," operator creates a property, the ",Object(n.b)("a",{parentName:"p",href:"/platform/next/Grouping_GROUP_"},"grouping"),"\xa0value of which using sum function will be equal to the value of the specified property (",Object(n.b)("em",{parentName:"p"},"distributable"),"). Accordingly, as for a group operator, for a distribution operator multiple properties (",Object(n.b)("em",{parentName:"p"},"groups"),") must be set by which the grouping will take place."),Object(n.b)("p",null,"There are many different ways to build this kind of distribution. At present the platform supports the two most commonly used:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Limiting - the distribution result must not exceed the value of the specified property."),Object(n.b)("li",{parentName:"ol"},"Proportional - the distribution result should be directly proportional to the value of a given property (in other words, the ratio of the distribution results for two object collections within the same group should be equal to the ratio of the values of this property for the same object collections).\xa0")),Object(n.b)("p",null,"The operator can work in ",Object(n.b)("em",{parentName:"p"},"non-strict")," mode (used by default). Here the platform tries to calculate the value as close as possible to the value of the distributable property but does not guarantee that they will be equal."),Object(n.b)("p",null,"As for other operations with sets, an ",Object(n.b)("em",{parentName:"p"},"order")," can (and usually must) be defined for the distribution operator."),Object(n.b)("p",null,"The general algorithm of the distribution operator,\xa0depending on the type of distribution, is as follows:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Limiting - distribution is done in the specified order, not exceeding the restriction, until the overall result equals the value of the distributable property. If the operator is working in strict mode and the overall result has not reached the value of the distributable property, the total difference is added to the resulting value of the first object collection."),Object(n.b)("li",{parentName:"ol"},"Proportional - the total of the proportions for each group is calculated, after which a distribution coefficient is determined for each object collection, equal to the ratio of the proportion value for this set of objects to the total amount of the group to which it belongs. Finally, the distribution result is calculated as the product of this coefficient and the value of the distributed property. Since the final (and intermediate) results are rounded (and hence accuracy is lost), the sum of the result of this distribution may differ from the value of the distributed property. Therefore, if the operator is working in strict mode, the difference between these values is added to the resulting value of the first object collection.")),Object(n.b)("h3",{id:"extended-form"},"Extended form"),Object(n.b)("p",null,'The mechanism described above allows distribution only\xa0in "one-to-many" mode. However, in some cases this is not enough, and distribution in "many-to-many" mode is necessary. For this, the platform has the so-called ',Object(n.b)("em",{parentName:"p"},"extended"),"\xa0distribution operator form\xa0(consequently, the basic form will be called ",Object(n.b)("em",{parentName:"p"},"simple"),").\xa0"),Object(n.b)("p",null,"In the extended form of this operator, the conditions for the distribution result are changed as follows:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Limiting - it is not the distribution result itself that must not exceed the value of the specified property, but rather the grouping of the distribution result by certain additional groups must not exceed this value."),Object(n.b)("li",{parentName:"ol"},"Proportional - similar; that is, it is not the result of the distribution itself that must be directly proportional to the value of a certain property, but its grouping by additional groups.")),Object(n.b)("p",null,"The algorithm of the operator\u2019s work likewise changes accordingly."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"Since the simple form of the operator is semantically very similar to the operator partition/sort, to declare a property that implements a simple distribution the ",Object(n.b)("a",{parentName:"p",href:"/platform/next/PARTITION_operator"},Object(n.b)("strong",{parentName:"a"},"PARTITION")," operator")," is also used."),Object(n.b)("p",null,"For the extended form, use the ",Object(n.b)("a",{parentName:"p",href:"/platform/next/UNGROUP_operator"},Object(n.b)("strong",{parentName:"a"},"UNGROUP")," operator"),Object(n.b)("strong",{parentName:"p"},".")))}p.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h}));var o=r(0),i=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,h=c["".concat(a,".").concat(d)]||c[d]||b[d]||n;return r?i.a.createElement(h,l(l({ref:t},u),{},{components:r})):i.a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);