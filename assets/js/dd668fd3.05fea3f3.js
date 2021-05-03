(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87917],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62612:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"CHANGE operator"},s={unversionedId:"CHANGE_operator",id:"CHANGE_operator",isDocsHomePage:!1,title:"CHANGE operator",description:"The CHANGE operator creates an action that changes properties.",source:"@site/docs/CHANGE_operator.md",sourceDirName:".",slug:"/CHANGE_operator",permalink:"/platform/next/CHANGE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/CHANGE_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"CHANGE operator"},sidebar:"learn",previous:{title:"ASK operator",permalink:"/platform/next/ASK_operator"},next:{title:"BREAK operator",permalink:"/platform/next/BREAK_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"CHANGE")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},"changes properties"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"CHANGE"),"\xa0operator creates an action that changes a property when a condition is met. This operator \xa0can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action.\xa0"),(0,o.kt)("p",null,"The condition is defined by the ",(0,o.kt)("strong",{parentName:"p"},"WHERE")," block. If this block is not specified, it is assumed that the condition is always met.\xa0"),(0,o.kt)("p",null,"The keyword ",(0,o.kt)("strong",{parentName:"p"},"CHANGE"),", which defines an operator, may be omitted.**\xa0**"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyId")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/platform/next/DATA_operator"},"DATA"))," , ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/platform/next/ABSTRACT_operator"},"ABSTRACT")),", and ",(0,o.kt)("strong",{parentName:"p"},"LOCAL"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"expr1, ..., exprN")),(0,o.kt)("p",null,"A list of expressions or typed parameters defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added.\xa0The number of expressions in this list must equal to the number of parameters of the property being changed.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"valueExpr")),(0,o.kt)("p",null,"The expression to whose value the property value must be changed."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"whereExpr")),(0,o.kt)("p",null,"An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",(0,o.kt)("strong",{parentName:"p"},"TRUE"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// set a 15 percent discount for all customers who have an order amount over 100\nCLASS Customer;\ndiscount = DATA NUMERIC[5,2] (Customer);\ntotalOrders = DATA NUMERIC[14,2] (Customer);\nsetDiscount  {\n    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;\n}\n\ndiscount = DATA NUMERIC[5,2] (Customer, Item);\nin = DATA BOOLEAN (Item);\n// change the discount for selected products for a customer\nsetDiscount (Customer c)  {\n    discount(c, Item i) <- 15 WHERE in(i);\n}\n\n// copy property g to property f\nf = DATA INTEGER (INTEGER);\ng = DATA INTEGER (INTEGER);\ncopyFG  {\n    f(a) <- g(a);\n}\n")))}l.isMDXComponent=!0}}]);