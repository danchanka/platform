(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61643],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42360:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={title:"PARTITION operator"},p={unversionedId:"PARTITION_operator",id:"PARTITION_operator",isDocsHomePage:!1,title:"PARTITION operator",description:"The\xa0PARTITION operator\xa0creates\xa0a property that implements\xa0partition/order\xa0or simple distribution.",source:"@site/docs/PARTITION_operator.md",sourceDirName:".",slug:"/PARTITION_operator",permalink:"/next/PARTITION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/PARTITION_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"PARTITION operator"},sidebar:"learn",previous:{title:"OVERRIDE operator",permalink:"/next/OVERRIDE_operator"},next:{title:"PREV operator",permalink:"/next/PREV_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("strong",{parentName:"p"},"PARTITION")," operator\xa0creates\xa0a ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Partitioning_sorting_PARTITION_..._ORDER_"},"partition/order"),"\xa0or ",(0,i.kt)("a",{parentName:"p",href:"/next/Distribution_UNGROUP_"},"simple distribution"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"There are two different types of ",(0,i.kt)("strong",{parentName:"p"},"PARTITION")," operator. The first implements partition/order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PARTITION \ntype expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),(0,i.kt)("p",null,"The second implements simple distribution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PARTITION \nUNGROUP propertyId distributionType expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"distributionType")," can be described in several ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PROPORTION [STRICT] ROUND(digits)\nLIMIT [STRICT]\n")),(0,i.kt)("p",null,"\xa0",(0,i.kt)("strong",{parentName:"p"},"Description")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"PARTITION"),"\xa0operator creates a property\xa0that divides all object collections in the system into groups, and taking into account the specified order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"calculates an ",(0,i.kt)("a",{parentName:"li",href:"/next/Set_operations"},"aggregate function"),"\xa0for each object collection. In case of partition/order,"),(0,i.kt)("li",{parentName:"ul"},"it distributes a certain value among the object collections of one group in the case of distribution.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"BY")," block describes the groups into which numerous sets of object collections will be divided. If the ",(0,i.kt)("strong",{parentName:"p"},"BY")," block is not specified, all object collections are considered to belong to the same group.\xa0"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("strong",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated or the distribution will take place. If this function is\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Set_operations"},"non-commutative"),", the specified order must be uniquely determined.\xa0If a new parameter (not used earlier in the \xa0",(0,i.kt)("strong",{parentName:"p"},"PARTITION"),"\xa0and\xa0",(0,i.kt)("strong",{parentName:"p"},"BY")," options and\xa0in the upper context) is declared in the expressions defining the order, when calculating the resulting value the condition of non-",(0,i.kt)("strong",{parentName:"p"},"NULLness")," of all these expressions is automatically added."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type")),(0,i.kt)("p",null,"Type of aggregate function. Currently the aggregate function types ",(0,i.kt)("strong",{parentName:"p"},"SUM")," and ",(0,i.kt)("strong",{parentName:"p"},"PREV")," are supported."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"propertyId")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"ID")," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",(0,i.kt)("strong",{parentName:"p"},"BY")," block. When calculating the values of group/partition expressions, objects that identify a certain group of object sets will be passed to this property as an input."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"distributionType")),(0,i.kt)("p",null,"Distribution type. These are of the following types:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PROPORTION")),(0,i.kt)("p",null,"Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",(0,i.kt)("em",{parentName:"p"},"expr")," expression that is specified after the distribution type."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"STRICT")),(0,i.kt)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",(0,i.kt)("strong",{parentName:"p"},"ORDER")," block."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ROUND(digits)")),(0,i.kt)("p",null,"Specifies the number of decimal places the value will be rounded to."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"digits \u2013")," ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#intliteral-broken"},"Integer literal")," specifying the number of decimal places.\xa0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LIMIT")),(0,i.kt)("p",null,"A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set to the first object collection, and the rest of the value of the distributed property is assigned to the second object collection. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",(0,i.kt)("em",{parentName:"p"},"expr")," expression specified after specifying the distribution type."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"STRICT")),(0,i.kt)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order defined in the\xa0",(0,i.kt)("strong",{parentName:"p"},"ORDER")," block."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"expr")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value is passed as an input to the aggregating function as an operand in case of partition/order. In case of distribution with type ",(0,i.kt)("strong",{parentName:"p"},"PROPORTION")," it defines the proportion, and with type ",(0,i.kt)("strong",{parentName:"p"},"LIMIT")," it\xa0defines the limit."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"groupExpr1, ..., groupExprM"),"\xa0\xa0"),(0,i.kt)("p",null,"\xa0List of group expressions (groups).\xa0"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"DESC")),(0,i.kt)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),(0,i.kt)("p",null,"A list of expressions that define the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// determines the place of the team in the conference\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// finds the team next in the conference standings\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// proportional distribution example\nCLASS Order;\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// example of distribution with limits\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\ndiscountSum 'Discount by line' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}c.isMDXComponent=!0}}]);