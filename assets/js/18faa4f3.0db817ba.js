(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42397],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93216:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Simple constraints"},l={unversionedId:"Simple_constraints",id:"version-v4/Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/versioned_docs/version-v4/Simple_constraints.md",sourceDirName:".",slug:"/Simple_constraints",permalink:"/Simple_constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Simple_constraints.md",version:"v4",lastUpdatedAt:1620216094,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Simple constraints"},sidebar:"version-v4/learn",previous:{title:"Constraints",permalink:"/Constraints"},next:{title:"Classes",permalink:"/Classes"}},s=[{value:"Examples",id:"examples",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The platform currently supports four types of ",(0,i.kt)("em",{parentName:"p"},"simple constraints"),": ",(0,i.kt)("em",{parentName:"p"},"consequence"),", ",(0,i.kt)("em",{parentName:"p"},"exception"),", ",(0,i.kt)("em",{parentName:"p"},"equality"),", and ",(0,i.kt)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",(0,i.kt)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Consequence"),(0,i.kt)("th",{parentName:"tr",align:null},"Exception"),(0,i.kt)("th",{parentName:"tr",align:null},"Equality"),(0,i.kt)("th",{parentName:"tr",align:null},"Definiteness"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number of properties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2...N")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"If the value of one property (the ",(0,i.kt)("em",{parentName:"td"},"premise"),") is non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", the value of the second property (the ",(0,i.kt)("em",{parentName:"td"},"consequence"),") must also be non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")),(0,i.kt)("td",{parentName:"tr",align:null},"Only one of the values of the specified properties must be non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")),(0,i.kt)("td",{parentName:"tr",align:null},"If the value of one property is non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," and the value of the second property is non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", they must be equal"),(0,i.kt)("td",{parentName:"tr",align:null},"If all property parameters match specified classes, a non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," value must be specified for them")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Instruction"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/Instruction=_"},(0,i.kt)("inlineCode",{parentName:"a"},"=>"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Not yet implemented")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Not yet implemented")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NONULL")," option when defining properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Auto-resolution"),(0,i.kt)("td",{parentName:"tr",align:null},"Two modes are supported:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"LEFT")," - if the premise changes to non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", change","*"," the consequence to non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"RIGHT")," - if the consequence changes to ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", change the premise to ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),(0,i.kt)("br",null)),(0,i.kt)("td",{parentName:"tr",align:null},"If one of the properties changes to non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", change the rest to ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")),(0,i.kt)("td",{parentName:"tr",align:null},"If one of the properties changes to a non-",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," value, change the second to the same value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AGGR")," - if a property value changes to ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"),", delete objects corresponding to the parameters.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULT")," value - if objects whose classes match the parameters classes are added/reclassified, change the property value for these objects to the default value.")))),(0,i.kt)("p",null,"*"," A change to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"/non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," is the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/Data_properties_DATA_"},"data")," properties - ",(0,i.kt)("a",{parentName:"li",href:"/Property_change_CHANGE_"},"input")," ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," or the default value for this property value class."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/Classification_IS_AS_"},"membership")," to a class - deleting an object / adding an object of a class for which belonging to the class is checked."),(0,i.kt)("li",{parentName:"ul"},"For an ",(0,i.kt)("a",{parentName:"li",href:"/Grouping_GROUP_"},"aggregation")," constraint - (only if changing to non-",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),") create an object of the base class (",(0,i.kt)("inlineCode",{parentName:"li"},"System.Object"),"), change to non-",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),(0,i.kt)("p",null,"Just as for a basic ",(0,i.kt)("a",{parentName:"p",href:"/Constraints"},"constraint"),", for each simple constraint, a base event must be defined, which determines when the specified constraint will be checked. "),(0,i.kt)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/Property_signature_CLASS_"},"operator"),")."),(0,i.kt)("p",null,"There is also an implicit fifth kind of simple constraint, ",(0,i.kt)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",(0,i.kt)("a",{parentName:"p",href:"/Aggregations"},"aggregation")," mechanism. "),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}c.isMDXComponent=!0}}]);