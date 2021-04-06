(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{389:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(750)),a={title:"PARTITION operator"},p={unversionedId:"PARTITION_operator",id:"PARTITION_operator",isDocsHomePage:!1,title:"PARTITION operator",description:"The\xa0PARTITION operator\xa0creates\xa0a property that implements\xa0partition/order\xa0or simple distribution.",source:"@site/docs/PARTITION_operator.md",slug:"/PARTITION_operator",permalink:"/platform/docs/next/PARTITION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/PARTITION_operator.md",version:"current",sidebar:"docs",previous:{title:"OVERRIDE operator",permalink:"/platform/docs/next/OVERRIDE_operator"},next:{title:"PREV operator",permalink:"/platform/docs/next/PREV_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"PARTITION")," operator\xa0creates\xa0a ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," that implements\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Partitioning_sorting_PARTITION_..._ORDER_"},"partition/order"),"\xa0or ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Distribution_UNGROUP_"},"simple distribution"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"There are two different types of ",Object(i.b)("strong",{parentName:"p"},"PARTITION")," operator. The first implements partition/order:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PARTITION \ntype expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),Object(i.b)("p",null,"The second implements simple distribution:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PARTITION \nUNGROUP propertyId distributionType expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),Object(i.b)("p",null,"where ",Object(i.b)("em",{parentName:"p"},"distributionType")," can be described in several ways:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PROPORTION [STRICT] ROUND(digits)\nLIMIT [STRICT]\n")),Object(i.b)("p",null,"\xa0",Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"PARTITION"),"\xa0operator creates a property\xa0that divides all object collections in the system into groups, and taking into account the specified order:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"calculates an ",Object(i.b)("a",{parentName:"li",href:"/platform/docs/next/Set_operations"},"aggregate function"),"\xa0for each object collection. In case of partition/order,"),Object(i.b)("li",{parentName:"ul"},"it distributes a certain value among the object collections of one group in the case of distribution.")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"BY")," block describes the groups into which numerous sets of object collections will be divided. If the ",Object(i.b)("strong",{parentName:"p"},"BY")," block is not specified, all object collections are considered to belong to the same group.\xa0"),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated or the distribution will take place. If this function is\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Set_operations"},"non-commutative"),", the specified order must be uniquely determined.\xa0If a new parameter (not used earlier in the \xa0",Object(i.b)("strong",{parentName:"p"},"PARTITION"),"\xa0and\xa0",Object(i.b)("strong",{parentName:"p"},"BY")," options and\xa0in the upper context) is declared in the expressions defining the order, when calculating the resulting value the condition of non-",Object(i.b)("strong",{parentName:"p"},"NULLness")," of all these expressions is automatically added."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"type")),Object(i.b)("p",null,"Type of aggregate function. Currently the aggregate function types ",Object(i.b)("strong",{parentName:"p"},"SUM")," and ",Object(i.b)("strong",{parentName:"p"},"PREV")," are supported."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"propertyId")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#propertyid-broken"},"ID")," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",Object(i.b)("strong",{parentName:"p"},"BY")," block. When calculating the values of group/partition expressions, objects that identify a certain group of object sets will be passed to this property as an input."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"distributionType")),Object(i.b)("p",null,"Distribution type. These are of the following types:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"PROPORTION")),Object(i.b)("p",null,"Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",Object(i.b)("em",{parentName:"p"},"expr")," expression that is specified after the distribution type."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"STRICT")),Object(i.b)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",Object(i.b)("strong",{parentName:"p"},"ORDER")," block."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ROUND(digits)")),Object(i.b)("p",null,"Specifies the number of decimal places the value will be rounded to."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"digits \u2013")," ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Literals#intliteral-broken"},"Integer literal")," specifying the number of decimal places.\xa0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"LIMIT")),Object(i.b)("p",null,"A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set to the first object collection, and the rest of the value of the distributed property is assigned to the second object collection. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",Object(i.b)("em",{parentName:"p"},"expr")," expression specified after specifying the distribution type."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"STRICT")),Object(i.b)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order defined in the\xa0",Object(i.b)("strong",{parentName:"p"},"ORDER")," block."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"expr")),Object(i.b)("p",null,"An ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," whose value is passed as an input to the aggregating function as an operand in case of partition/order. In case of distribution with type ",Object(i.b)("strong",{parentName:"p"},"PROPORTION")," it defines the proportion, and with type ",Object(i.b)("strong",{parentName:"p"},"LIMIT")," it\xa0defines the limit."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"groupExpr1, ..., groupExprM"),"\xa0\xa0"),Object(i.b)("p",null,"\xa0List of group expressions (groups).\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DESC")),Object(i.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(i.b)("p",null,"A list of expressions that define the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"// determines the place of the team in the conference\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// finds the team next in the conference standings\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// proportional distribution example\nCLASS Order;\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// example of distribution with limits\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\ndiscountSum 'Discount by line' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}l.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||i;return r?o.a.createElement(m,p(p({ref:t},s),{},{components:r})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);