(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60373],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,N=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(N,l(l({ref:t},p),{},{components:n})):a.createElement(N,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58468:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"Naming"},o={unversionedId:"Naming",id:"version-v4/Naming",isDocsHomePage:!1,title:"Naming",description:"Each system element may have a name which can be used to access the element.",source:"@site/versioned_docs/version-v4/Naming.md",sourceDirName:".",slug:"/Naming",permalink:"/platform/Naming",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Naming.md",version:"v4",lastUpdatedAt:1620308844,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"Naming"},sidebar:"version-v4/learn",previous:{title:"Element identification",permalink:"/platform/Element_identification"},next:{title:"Search",permalink:"/platform/Search"}},m=[{value:"Namespaces",id:"namespace",children:[]},{value:"Uniqueness",id:"uniqueness",children:[]},{value:"Canonical names",id:"canonicalname",children:[]},{value:"Name policy",id:"name-policy",children:[]},{value:"Language",id:"language",children:[]}],s={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each ",(0,i.kt)("a",{parentName:"p",href:"/platform/Element_identification"},"system element")," may have a ",(0,i.kt)("em",{parentName:"p"},"name")," which can be used to ",(0,i.kt)("a",{parentName:"p",href:"/platform/Search"},"access")," the element."),(0,i.kt)("h3",{id:"namespace"},"Namespaces"),(0,i.kt)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",(0,i.kt)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence.  However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can ",(0,i.kt)("a",{parentName:"p",href:"/platform/Search"},"find")," more details on how namespaces are used when ",(0,i.kt)("a",{parentName:"p",href:"/platform/Search"},"finding")," elements in the relevant section."))),(0,i.kt)("p",null,"The namespace in which elements are created is determined by the ",(0,i.kt)("a",{parentName:"p",href:"/platform/Modules"},"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),(0,i.kt)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",(0,i.kt)("em",{parentName:"p"},"full name"),". For example, if the namespace is called ",(0,i.kt)("inlineCode",{parentName:"p"},"System"),", and inside it there is a class ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", then the full name of this class will be ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Element"),"."),(0,i.kt)("h3",{id:"uniqueness"},"Uniqueness"),(0,i.kt)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),(0,i.kt)("h3",{id:"canonicalname"},"Canonical names"),(0,i.kt)("p",null,"For some elements of the system, string ",(0,i.kt)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the ",(0,i.kt)("em",{parentName:"p"},"full name")," of that element of the system, which looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),(0,i.kt)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," is used instead of the canonical class name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<namespace name>.<Property/action name>[<class1>,...,<classN>]\n\nItem.gender[Item.Article]\nDate.between[DATE,DATE,DATE]\nDocument.addHeader[Document.Document,STRING]\nMath.sum[?,?]\n")),(0,i.kt)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for built-in classes: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class name"),(0,i.kt)("th",{parentName:"tr",align:null},"Canonical name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INTEGER"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LONG")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LONG"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DOUBLE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NUMERIC[ , ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NUMERIC"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BOOLEAN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIME"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YEAR")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YEAR"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"STRING[ ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ISTRING"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ISTRING[ ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BPSTRING[ ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BPISTRING[ ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TEXT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ITEXT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RICHTEXT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"COLOR")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"COLOR"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FILE,RAWFILE...")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FILE,RAWFILE..."))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."))),(0,i.kt)("h3",{id:"name-policy"},"Name policy"),(0,i.kt)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),(0,i.kt)("h4",{id:"system-elements"},"System elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"myFirstName"),"."))),(0,i.kt)("h4",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of each class should begin with a capital letter. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"MySuperClass"),".")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"Elements are named using ",(0,i.kt)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"simple IDs"),"."))}p.isMDXComponent=!0}}]);