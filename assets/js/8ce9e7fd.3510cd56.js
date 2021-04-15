(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(747)),c={title:"Naming"},b={unversionedId:"Naming",id:"version-v4/Naming",isDocsHomePage:!1,title:"Naming",description:"Each\xa0system element may have a name which can be used to access the element.",source:"@site/versioned_docs/version-v4/Naming.md",slug:"/Naming",permalink:"/platform/Naming",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Naming.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Element identification",permalink:"/platform/Element_identification"},next:{title:"Search",permalink:"/platform/Search"}},o=[{value:"Namespaces",id:"namespace",children:[]},{value:"Uniqueness",id:"uniqueness",children:[]},{value:"Canonical names",id:"canonicalname",children:[]},{value:"Name policy",id:"name-policy",children:[]},{value:"Language",id:"language",children:[]}],i={toc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Each\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/Element_identification"},"system element")," may have a ",Object(l.b)("em",{parentName:"p"},"name")," which can be used to ",Object(l.b)("a",{parentName:"p",href:"/platform/Search"},"access")," the element."),Object(l.b)("h3",{id:"namespace"},"Namespaces"),Object(l.b)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",Object(l.b)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence. \xa0However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"You can ",Object(l.b)("a",{parentName:"p",href:"/platform/Search"},"find")," more details on how namespaces are used when\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/Search"},"finding"),"\xa0elements in the relevant section."))),Object(l.b)("p",null,"The namespace in which elements are created is determined by the ",Object(l.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),Object(l.b)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",Object(l.b)("em",{parentName:"p"},"full name"),".\xa0For example, if the namespace is called\xa0",Object(l.b)("strong",{parentName:"p"},"System"),", and inside it there is a class ",Object(l.b)("strong",{parentName:"p"},"Element"),", then the full name of this class will be ",Object(l.b)("strong",{parentName:"p"},"System.Element"),"."),Object(l.b)("h3",{id:"uniqueness"},"Uniqueness"),Object(l.b)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),Object(l.b)("h3",{id:"canonicalname"},"Canonical names"),Object(l.b)("p",null,"For some elements of the system, string\xa0",Object(l.b)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type\xa0within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the\xa0",Object(l.b)("em",{parentName:"p"},"full name"),"\xa0of that element of the system, which looks as follows:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),Object(l.b)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be\xa0unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character '",Object(l.b)("strong",{parentName:"p"},"?"),"' is used instead of the canonical class name:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<namespace name>.<Property/action name> [<class1>,..., <classN>]\n\nItem.gender[Item.Article]\nDate.between [DATE, DATE, DATE]\nDocument.addHeader [Document. Document, STRING]\nMath.sum [?,?]\n")),Object(l.b)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for\xa0builtin classes:\xa0"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class name"),Object(l.b)("th",{parentName:"tr",align:null},"Canonical name"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"INTEGER")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"INTEGER"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"LONG")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"LONG"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DOUBLE")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DOUBLE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NUMERIC","[ , ]")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NUMERIC"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"BOOLEAN")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"BOOLEAN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DATE")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DATE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DATETIME")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DATETIME"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TIME")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TIME"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"YEAR")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"YEAR"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING, STRING","[ ]")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"ISTRING, ISTRING","[ ]")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"BPSTRING","[ ]")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"BPISTRING","[ ]")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"),"\xa0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TEXT")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"),"\xa0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"ITEXT")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"),"\xa0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"RICHTEXT")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING"),"\xa0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"COLOR")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"COLOR"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"FILE,RAWFILE...")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"FILE,RAWFILE..."))))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."))),Object(l.b)("h3",{id:"name-policy"},"Name policy"),Object(l.b)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"System elements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example,\xa0",Object(l.b)("strong",{parentName:"p"},"myFirstName")," ,\xa0",Object(l.b)("strong",{parentName:"p"},"MySuperClass"),"."))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Classes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The name of each class should begin with a capital letter.")),Object(l.b)("h3",{id:"language"},"Language"),Object(l.b)("p",null,"Elements are named using ",Object(l.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"simple IDs"),"."))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);