(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42397],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93216:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Simple constraints"},i={unversionedId:"Simple_constraints",id:"version-v4/Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/versioned_docs/version-v4/Simple_constraints.md",sourceDirName:".",slug:"/Simple_constraints",permalink:"/platform/Simple_constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Simple_constraints.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Simple constraints"},sidebar:"version-v4/learn",previous:{title:"Constraints",permalink:"/platform/Constraints"},next:{title:"Classes",permalink:"/platform/Classes"}},s=[{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The platform currently supports four types of ",(0,o.kt)("em",{parentName:"p"},"simple constraints"),": ",(0,o.kt)("em",{parentName:"p"},"consequence"),", ",(0,o.kt)("em",{parentName:"p"},"exception"),", ",(0,o.kt)("em",{parentName:"p"},"equality"),", and ",(0,o.kt)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",(0,o.kt)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("th",{parentName:"tr",align:null},"Consequence"),(0,o.kt)("th",{parentName:"tr",align:null},"Exception"),(0,o.kt)("th",{parentName:"tr",align:null},"Equality"),(0,o.kt)("th",{parentName:"tr",align:null},"Definiteness"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of properties"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"2...N"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"If the value of one property (the ",(0,o.kt)("em",{parentName:"td"},"premise"),") is non-",(0,o.kt)("strong",null,"NULL"),", the value of the second property (the ",(0,o.kt)("em",{parentName:"td"},"consequence"),") must also be non-",(0,o.kt)("strong",null,"NULL")),(0,o.kt)("td",{parentName:"tr",align:null},"Only one of the values of the specified properties must be non-",(0,o.kt)("strong",null,"NULL")),(0,o.kt)("td",{parentName:"tr",align:null},"If the value of one property is non-",(0,o.kt)("strong",null,"NULL")," and the value of the second property is non-",(0,o.kt)("strong",null,"NULL"),", they must be equal"),(0,o.kt)("td",{parentName:"tr",align:null},"If all property parameters match specified classes, a non-",(0,o.kt)("strong",null,"NULL")," value must be specified for them")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instruction"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",null,(0,o.kt)("a",{parentName:"td",href:"/platform/Instruction=_"},"=>"))),(0,o.kt)("td",{parentName:"tr",align:null},"Not yet implemented"),(0,o.kt)("td",{parentName:"tr",align:null},"Not yet implemented"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",null,"NONULL")," option when defining properties")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Auto-resolution"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Two modes are supported:"),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("br",null),(0,o.kt)("li",null,(0,o.kt)("strong",null,"LEFT")," - if the premise changes to non-",(0,o.kt)("strong",null,"NULL"),", change the * consequence to non-",(0,o.kt)("strong",null,"NULL")),(0,o.kt)("br",null),(0,o.kt)("li",null,(0,o.kt)("strong",null,"RIGHT")," - if the consequence changes to ",(0,o.kt)("strong",null,"NULL"),", change the premise to ",(0,o.kt)("strong",null,"NULL")),(0,o.kt)("br",null))),(0,o.kt)("td",{parentName:"tr",align:null},"If one of the properties changes to non-",(0,o.kt)("strong",null,"NULL"),", change the rest to ",(0,o.kt)("strong",null,"NULL")),(0,o.kt)("td",{parentName:"tr",align:null},"If one of the properties changes to a non-",(0,o.kt)("strong",null,"NULL")," value, change the second to the same value"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("strong",null,"AGGR")," - if a property value changes to ",(0,o.kt)("strong",null,"NULL"),", delete objects corresponding to the parameters"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",null,"DEFAULT")," value - if objects whose classes match the parameters classes are added/reclassified, change the property value for these objects to the default value."))))),(0,o.kt)("p",null,"*"," A change to ",(0,o.kt)("strong",{parentName:"p"},"NULL"),"/non-",(0,o.kt)("strong",{parentName:"p"},"NULL")," is the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"/platform/Data_properties_DATA_"},"data")," properties - ",(0,o.kt)("a",{parentName:"li",href:"/platform/Property_change_CHANGE_"},"input")," ",(0,o.kt)("strong",{parentName:"li"},"NULL")," or the default value for this property value class."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"/platform/Classification_IS_AS_"},"membership")," to a class - deleting an object ","\\","\\"," adding an object of a class for which belonging to the class is checked."),(0,o.kt)("li",{parentName:"ul"},"For an ",(0,o.kt)("a",{parentName:"li",href:"/platform/Grouping_GROUP_"},"aggregation")," constraint - (only if changing to non-",(0,o.kt)("strong",{parentName:"li"},"NULL"),") create an object of the base class (",(0,o.kt)("strong",{parentName:"li"},"System"),".",(0,o.kt)("strong",{parentName:"li"},"Object"),"), change to non-",(0,o.kt)("strong",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),(0,o.kt)("p",null,"Just as for a basic ",(0,o.kt)("a",{parentName:"p",href:"/platform/Constraints"},"constraint"),", for each simple constraint, a base event must be defined, which determines when the specified constraint will be checked. "),(0,o.kt)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"operator"),")."),(0,o.kt)("p",null,"There is also an implicit fifth kind of simple constraint, ",(0,o.kt)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",(0,o.kt)("a",{parentName:"p",href:"/platform/Aggregations"},"aggregation")," mechanism. "),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}u.isMDXComponent=!0}}]);