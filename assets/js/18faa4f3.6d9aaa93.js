(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(747)),l={title:"Simple constraints"},i={unversionedId:"Simple_constraints",id:"version-v4/Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/versioned_docs/version-v4/Simple_constraints.md",slug:"/Simple_constraints",permalink:"/platform/Simple_constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Simple_constraints.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Constraints",permalink:"/platform/Constraints"},next:{title:"Classes",permalink:"/platform/Classes"}},s=[{value:"Examples",id:"examples",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The platform currently supports four types of ",Object(o.b)("em",{parentName:"p"},"simple constraints"),": ",Object(o.b)("em",{parentName:"p"},"consequence"),", ",Object(o.b)("em",{parentName:"p"},"exception"),", ",Object(o.b)("em",{parentName:"p"},"equality"),", and ",Object(o.b)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",Object(o.b)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("th",{parentName:"tr",align:null},"Consequence"),Object(o.b)("th",{parentName:"tr",align:null},"Exception"),Object(o.b)("th",{parentName:"tr",align:null},"Equality"),Object(o.b)("th",{parentName:"tr",align:null},"Definiteness"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Number of properties"),Object(o.b)("td",{parentName:"tr",align:null},"2"),Object(o.b)("td",{parentName:"tr",align:null},"2...N"),Object(o.b)("td",{parentName:"tr",align:null},"2"),Object(o.b)("td",{parentName:"tr",align:null},"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Description"),Object(o.b)("td",{parentName:"tr",align:null},"If the value of one property (the ",Object(o.b)("em",{parentName:"td"},"premise"),") is non-",Object(o.b)("strong",null,"NULL"),", the value of the second property (the ",Object(o.b)("em",{parentName:"td"},"consequence"),") must also be non-",Object(o.b)("strong",null,"NULL")),Object(o.b)("td",{parentName:"tr",align:null},"Only one of the values of the specified properties must be non-",Object(o.b)("strong",null,"NULL")),Object(o.b)("td",{parentName:"tr",align:null},"If the value of one property is non-",Object(o.b)("strong",null,"NULL")," and the value of the second property is non-",Object(o.b)("strong",null,"NULL"),", they must be equal"),Object(o.b)("td",{parentName:"tr",align:null},"If all property parameters match specified classes, a non-",Object(o.b)("strong",null,"NULL")," value must be specified for them")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Instruction"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,Object(o.b)("a",{parentName:"td",href:"/platform/Instruction=_"},"=>"))),Object(o.b)("td",{parentName:"tr",align:null},"Not yet implemented"),Object(o.b)("td",{parentName:"tr",align:null},"Not yet implemented"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"NONULL")," option when defining properties")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Auto-resolution"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"Two modes are supported:"),Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("br",null),Object(o.b)("li",null,Object(o.b)("strong",null,"LEFT")," - if the premise changes to non-",Object(o.b)("strong",null,"NULL"),", change the * consequence to non-",Object(o.b)("strong",null,"NULL")),Object(o.b)("br",null),Object(o.b)("li",null,Object(o.b)("strong",null,"RIGHT")," - if the consequence changes to ",Object(o.b)("strong",null,"NULL"),", change the premise to ",Object(o.b)("strong",null,"NULL")),Object(o.b)("br",null))),Object(o.b)("td",{parentName:"tr",align:null},"If one of the properties changes to non-",Object(o.b)("strong",null,"NULL"),", change the rest to ",Object(o.b)("strong",null,"NULL")),Object(o.b)("td",{parentName:"tr",align:null},"If one of the properties changes to a non-",Object(o.b)("strong",null,"NULL")," value, change the second to the same value"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,Object(o.b)("strong",null,"AGGR")," - if a property value changes to ",Object(o.b)("strong",null,"NULL"),", delete objects corresponding to the parameters"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",null,"DEFAULT")," value - if objects whose classes match the parameters classes are added/reclassified, change the property value for these objects to the default value."))))),Object(o.b)("p",null,"*"," A change to ",Object(o.b)("strong",{parentName:"p"},"NULL"),"/non-",Object(o.b)("strong",{parentName:"p"},"NULL")," is the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",{parentName:"li",href:"/platform/Data_properties_DATA_"},"data")," properties - ",Object(o.b)("a",{parentName:"li",href:"/platform/Property_change_CHANGE_"},"input")," ",Object(o.b)("strong",{parentName:"li"},"NULL")," or the default value for this property value class."),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",{parentName:"li",href:"/platform/Classification_IS_AS_"},"membership")," to a class - deleting an object ","\\","\\"," adding an object of a class for which belonging to the class is checked."),Object(o.b)("li",{parentName:"ul"},"For an ",Object(o.b)("a",{parentName:"li",href:"/platform/Grouping_GROUP_"},"aggregation")," constraint - (only if changing to non-",Object(o.b)("strong",{parentName:"li"},"NULL"),") create an object of the base class (",Object(o.b)("strong",{parentName:"li"},"System"),".",Object(o.b)("strong",{parentName:"li"},"Object"),"), change to non-",Object(o.b)("strong",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),Object(o.b)("p",null,"Just as for a basic ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraint"),", for each simple constraint, a base event must be defined, which determines when the specified constraint will be checked. "),Object(o.b)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"operator"),")."),Object(o.b)("p",null,"There is also an implicit fifth kind of simple constraint, ",Object(o.b)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",Object(o.b)("a",{parentName:"p",href:"/platform/Aggregations"},"aggregation")," mechanism. "),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);