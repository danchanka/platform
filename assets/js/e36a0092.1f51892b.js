(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{660:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Static view",sidebar_label:"Overview"},c={unversionedId:"Static_view",id:"Static_view",isDocsHomePage:!1,title:"Static view",description:"In static view, all form data is read at the time the form is opened, after which the obtained data is converted:",source:"@site/docs/Static_view.md",slug:"/Static_view",permalink:"/platform/next/Static_view",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Static_view.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Activity (ACTIVE)",permalink:"/platform/next/Activity_ACTIVE_"},next:{title:"Print view",permalink:"/platform/next/Print_view"}},p=[{value:"Empty object group",id:"empty",children:[]},{value:"Object group hierarchy",id:"hierarchy",children:[]},{value:"Building <strong>object group</strong>\xa0hierarchy",id:"building-object-group-hierarchy",children:[]},{value:"An example of constructing *<strong>*object group**</strong>\xa0hierarchy",id:"an-example-of-constructing-object-group-hierarchy",children:[]}],b={toc:p};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("em",{parentName:"p"},"static")," view, all form data is read at the time the form is ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"opened"),", after which the obtained data is converted:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"either to ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Print_view"},"print"),"\xa0view - image or excel.\xa0Print view is also often referred to as\xa0a ",Object(o.b)("em",{parentName:"li"},"report")),Object(o.b)("li",{parentName:"ul"},"or to ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Structured_view"},"structured"),"\xa0view - one of the corresponding data formats (e.g.\xa0",Object(o.b)("strong",{parentName:"li"},"XML"),",\xa0",Object(o.b)("strong",{parentName:"li"},"JSON"),",\xa0",Object(o.b)("strong",{parentName:"li"},"CSV"),",\xa0",Object(o.b)("strong",{parentName:"li"},"DBF"),")")),Object(o.b)("p",null,"As a rule, structured view is used to load data into other information systems, while print view is used to view data by a user and print to a printer."),Object(o.b)("h3",{id:"empty"},"Empty object group"),Object(o.b)("p",null,"In static view, any form has a predefined\xa0",Object(o.b)("em",{parentName:"p"},"empty")," object\xa0group, which is considered to be the first object group on the form, does not contain any objects and is considered to be the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure#drawgroup-broken"},"display group")," for properties/filters without parameters. Accordingly, in this display group there is always a maximum of one empty object collection (exactly one, if there are no filters without parameters)."),Object(o.b)("h3",{id:"hierarchy"},"Object group hierarchy"),Object(o.b)("p",null,"To display information in static view\xa0, the form's ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure"},"object groups")," must be organized in a ",Object(o.b)("em",{parentName:"p"},"hierarchy"),' in which data for object groups will be a kind of "nested" in each other. For example, if we have object groups ',Object(o.b)("strong",{parentName:"p"},"A")," and\xa0",Object(o.b)("strong",{parentName:"p"},"B,\xa0")," and ",Object(o.b)("strong",{parentName:"p"},"A\xa0"),"is\xa0the ",Object(o.b)("em",{parentName:"p"},"parent"),"\xa0of",Object(o.b)("strong",{parentName:"p"},"B"),", then in static view all properties of ",Object(o.b)("strong",{parentName:"p"},"A")," will be displayed first for the first object collection from ",Object(o.b)("strong",{parentName:"p"},"A"),", then all the properties of ",Object(o.b)("strong",{parentName:"p"},"B")," and of the pair (",Object(o.b)("strong",{parentName:"p"},"A"),", ",Object(o.b)("strong",{parentName:"p"},"B"),")\xa0for all object collections from ",Object(o.b)("strong",{parentName:"p"},"B"),", then similar information will be displayed for the second object collection from ",Object(o.b)("strong",{parentName:"p"},"A")," and all sets of objects from ",Object(o.b)("strong",{parentName:"p"},"B")," and so on."),Object(o.b)("h3",{id:"building-object-group-hierarchy"},"Building ",Object(o.b)("strong",{parentName:"h3"},"object group"),"\xa0hierarchy"),Object(o.b)("p",null,"The platform builds object group hierarchy based on the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure"},"form structure"),"\xa0as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"First, relations between object groups are built according to the following rules:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"object group\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0",Object(o.b)("em",{parentName:"li"},"depends"),"\xa0on object group ",Object(o.b)("strong",{parentName:"li"},"B")," if\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0appears in the list of object groups later than\xa0",Object(o.b)("strong",{parentName:"li"},"B")," and the form has a property or filter that takes objects from\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0and\xa0",Object(o.b)("strong",{parentName:"li"},"B"),"\xa0as input arguments (",Object(o.b)("strong",{parentName:"li"},"B")," should not be a ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_structure#groupcolumns-broken"},"group-in-column")," of this property)."),Object(o.b)("li",{parentName:"ul"},"any object group\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0depends on the empty object group"),Object(o.b)("li",{parentName:"ul"},"group\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0",Object(o.b)("em",{parentName:"li"},"indirectly\xa0depends"),"\xa0on group\xa0",Object(o.b)("strong",{parentName:"li"},"B")," if, again,\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0appears later\xa0than ",Object(o.b)("strong",{parentName:"li"},"B")," and there is an object group\xa0",Object(o.b)("strong",{parentName:"li"},"C")," which depends on\xa0both ",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0and ",Object(o.b)("strong",{parentName:"li"},"B")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After the relations are built, the hierarchy is constructed in such a way that the parent of object group\xa0",Object(o.b)("strong",{parentName:"p"},"A"),"\xa0is the group\xa0",Object(o.b)("strong",{parentName:"p"},"B")," that is latest in the object group list on which\xa0",Object(o.b)("strong",{parentName:"p"},"A"),"\xa0depends (directly or indirectly)."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As follows from the algorithm, the empty object group is always the only root group of the constructed hierarchy"))),Object(o.b)("h3",{id:"an-example-of-constructing-object-group-hierarchy"},"An example of constructing *",Object(o.b)("strong",{parentName:"h3"},"*object group**"),"\xa0hierarchy"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\nFORM myForm 'myForm'\n    OBJECTS A, B SUBREPORT, C, D, E\n    PROPERTIES f(B, C), g(A, C)\n    FILTERS c(E) = C, h(B, D)\n;\n")),Object(o.b)("p",null,"The hierarchy of groups of objects for this form will be constructed as follows:"),Object(o.b)("p",null,Object(o.b)("img",{src:r(921).default})))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return r?a.a.createElement(d,c(c({ref:t},b),{},{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},921:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/svgout5075616957434477942-6dfeb1689eaf802397f28f96d7c3f59f.png"}}]);