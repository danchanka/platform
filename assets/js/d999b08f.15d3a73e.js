(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{630:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(747)),a={title:"Print view",sidebar_label:"Overview"},c={unversionedId:"Print_view",id:"version-v4/Print_view",isDocsHomePage:!1,title:"Print view",description:"Print view of the form consists of a set of templates (reports). When data is substituted in these templates, a document is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format.",source:"@site/versioned_docs/version-v4/Print_view.md",slug:"/Print_view",permalink:"/platform/Print_view",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Print_view.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Static view",permalink:"/platform/Static_view"},next:{title:"Report design",permalink:"/platform/Report_design"}},p=[{value:"Report hierarchy",id:"report-hierarchy",children:[]},{value:"Building report hierarchy",id:"buildhierarchy",children:[]},{value:"Report hierarchy example",id:"report-hierarchy-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Print view of the ",Object(i.b)("a",{parentName:"p",href:"/platform/Forms"},"form")," consists of a set of templates (",Object(i.b)("em",{parentName:"p"},"reports"),"). When data is substituted in these templates, a ",Object(i.b)("em",{parentName:"p"},"document")," is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format."),Object(i.b)("p",null,"For each report, a set of the form ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure#objects"},"object groups")," that it will display is determined."),Object(i.b)("h3",{id:"report-hierarchy"},"Report hierarchy"),Object(i.b)("p",null,"Similar to an object group, each report has a ",Object(i.b)("em",{parentName:"p"},"parent")," report, so all reports form a hierarchy. The report hierarchy should:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"include ",Object(i.b)("a",{parentName:"li",href:"/platform/Static_view"},"the hierarchy of object groups"),", i.e. if a group of objects of one report is a child of a group of objects of the other report, then the first report must match the second one or be its child as well"),Object(i.b)("li",{parentName:"ul"},"within one report, each group of objects must have exactly one child.")),Object(i.b)("h3",{id:"buildhierarchy"},"Building report hierarchy"),Object(i.b)("p",null,'Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn, where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one) or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (',Object(i.b)("strong",{parentName:"p"},"SUBREPORT"),") for a child object group."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Using this option comes down to whether to display data for a parent object group when the child object group has no data."))),Object(i.b)("h3",{id:"report-hierarchy-example"},"Report hierarchy example"),Object(i.b)("p",null,"The form is similar to the ",Object(i.b)("a",{parentName:"p",href:"/platform/Static_view#hierarchysample-broken"},"example of building an object group hierarchy"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"\nFORM myForm 'myForm'\n    OBJECTS A, B SUBREPORT, C, D, E\n    PROPERTIES f(B, C), g(A, C)\n    FILTERS c(E) = C, h(B, D)\n;\n")),Object(i.b)("p",null,"The report hierarchy for this form is built as follows:"),Object(i.b)("p",null,Object(i.b)("img",{src:r(907).default})),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"All of the above options, as well as defining the form structure, can be done using the ",Object(i.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(i.b)("strong",{parentName:"a"},"FORM")," instruction"),"."),Object(i.b)("h3",{id:"open-form"},"Open form"),Object(i.b)("p",null,"To display the form in print view, the corresponding ",Object(i.b)("a",{parentName:"p",href:"/platform/Open_form"},"open form")," in the ",Object(i.b)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_"},"print view")," operator is used."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},h=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(r),m=n,u=h["".concat(a,".").concat(m)]||h[m]||d[m]||i;return r?o.a.createElement(u,c(c({ref:t},s),{},{components:r})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},907:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/svgout3984245327843122838-30675fbf8253097a05c03fa725206aa5.png"}}]);