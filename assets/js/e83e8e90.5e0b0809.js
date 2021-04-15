(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{679:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Form structure",sidebar_label:"Overview"},s={unversionedId:"Form_structure",id:"Form_structure",isDocsHomePage:!1,title:"Form structure",description:"The form structure is a complex of objects, properties, actions\xa0and relations between them.",source:"@site/docs/Form_structure.md",slug:"/Form_structure",permalink:"/platform/next/Form_structure",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Form_structure.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Forms",permalink:"/platform/next/Forms"},next:{title:"Groups of properties and actions",permalink:"/platform/next/Groups_of_properties_and_actions"}},c=[{value:"Objects",id:"objects",children:[]},{value:"Properties and actions",id:"properties",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Orders",id:"sort",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form")," structure is a complex of ",Object(o.b)("em",{parentName:"p"},"objects"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"actions"),"\xa0and relations between them."),Object(o.b)("h3",{id:"objects"},"Objects"),Object(o.b)("p",null,"When creating a form, first you must define which objects it will display.\xa0For each form object you need to specify its\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Classes"},"class"),"."),Object(o.b)("p",null,"It is possible to combine objects into ",Object(o.b)("em",{parentName:"p"},"object groups"),'. In this case, the table will show a "Cartesian product" of these objects (i.e., for two objects - all pairs, three objects - triples, etc.).\xa0'),Object(o.b)("p",null,"In accordance with the order of adding object groups to the form, an ordered\xa0",Object(o.b)("em",{parentName:"p"},"list"),"\xa0of object groups is formed. Accordingly, the group with the maximum number for a certain set of\xa0object groups shall be called the ",Object(o.b)("em",{parentName:"p"},"last"),"\xa0group for this set (i.e., the latest). The ",Object(o.b)("em",{parentName:"p"},"last")," group for a set of objects is determined similarly: first, a set of object groups into which these objects are included is built, then the last group is determined for the obtained set of object groups."),Object(o.b)("p",null,"Each object on the form has a\xa0",Object(o.b)("em",{parentName:"p"},"current value")," at any time. It changes either as a result of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Interactive_view#objects"},"corresponding user actions")," in ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Interactive_view"},"interactive"),'\xa0view or "virtually" while reading data in ',Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view"},"static")," view."),Object(o.b)("h3",{id:"properties"},"Properties and actions"),Object(o.b)("p",null,"After defining objects, you can add\xa0properties and actions to the form, passing these objects to them as arguments."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Adding actions is relevant only for ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Interactive_view"},"interactive")," view. In ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view"},"static")," view added actions are ignored."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The behavior of properties and actions in the context of their display on the form is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Display group")),Object(o.b)("p",null,"Each property is displayed exactly in one of the object groups on the form (this group shall be called a ",Object(o.b)("em",{parentName:"p"},"display group")," of this property). By default, the display group is the last group for the set of objects which this property receives as an input. If necessary, the developer can specify the display group explicitly (with certain ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#drawgroup-broken"},"constraints")," when used in a structured view)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Groups-in-columns")),Object(o.b)("p",null,"By default, a property is displayed in its display group exactly once. In this case, the values of objects which are not in the display group of this property (these objects shall be called ",Object(o.b)("em",{parentName:"p"},"upper"),') are used as their\xa0current values. However, it is also possible to display one property multiple times so that all object collections are used as the values of certain upper objects (not their current values). With this display of the property, a kind of "matrix" is formed - upper objects x objects of the display group. Thus, to create such a matrix, when adding a property to the form you must specify which ',Object(o.b)("em",{parentName:"p"},"upper"),"\xa0objects (specifically, object groups) must be used to create\xa0columns (these object groups shall be called\xa0",Object(o.b)("em",{parentName:"p"},"groups-in-columns"),")."),Object(o.b)("p",null,"When determining a ",Object(o.b)("a",{parentName:"p",href:"#drawgroup-broken"},"display group"),", properties of the group-to-columns are ignored."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Property groups")),Object(o.b)("p",null,"Properties on the form can be combined into ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"groups")," which, in turn, are used in the interactive (",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_design#defaultDesign"},"default design"),") and ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#hierarchy"},"hierarchical")," form views. By default, a property is included in a group globally (i.e., this inclusion is defined for a property for all forms at once), however, this inclusion can be redefined for particular forms."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Default settings")),Object(o.b)("p",null,"Properties on the form have a large number of display settings in various ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_views"},"views"),', most of which can be set not only directly for the property on the form, but also for the property itself (when creating it). These settings will be the default settings, i.e., if the setting is not explicitly set for a specific property on the form, then the setting of the property itself is used. In addition, these default settings are "inherited" when using ',Object(o.b)("a",{parentName:"p",href:"/platform/next/Composition_JOIN_"},"composition"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection")," and ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Previous_value_PREV_"},"previous value")," operators (i.e., if property f(a) has the default width of 10, then the property g(a) = f(a) IF h(a) will also have a width of 10 by default)."),Object(o.b)("h3",{id:"filters"},"Filters"),Object(o.b)("p",null,"For each form, the developer can create ",Object(o.b)("em",{parentName:"p"},"filters")," which will limit the list of object collections available for viewing/selection on the form."),Object(o.b)("p",null,"To define a filter, you must specify a property that will be used as a filter condition. The filter will be applied to the table of the object group that is the last for the set of objects which this property takes as input (i.e., similar to the definition of the property ",Object(o.b)("em",{parentName:"p"},"display group"),"). In this case, only those object collections (rows) for which property values are not ",Object(o.b)("strong",{parentName:"p"},"NULL")," will be shown."),Object(o.b)("h3",{id:"sort"},"Orders"),Object(o.b)("p",null,"By default, in all object group views, object collections are displayed in a certain non-deterministic order, which is determined by the specific implementation of the platform (most often, internal identifiers are used to determine the order). If necessary, the developer can define this order explicitly by specifying a list of properties on the form that will be used as orders. At the same time, for each property in this list, you can specify whether the order should be ascending or descending (by default, the ascending option is used)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0value is always considered to be the smallest value.\xa0"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create a new form and define its structure, the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},Object(o.b)("strong",{parentName:"a"},"FORM")," instruction")," is used."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    OBJECTS d = Document // Adding one object of the Document class. The object will be available by this name in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n\n\n    // ... adding properties and filters to the form\n\n    LIST Document OBJECT d // marking that this form should be used when it is necessary to select a document, while the d object should be used as a return value\n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    OBJECTS i = Item PANEL // adding an object of the Item class and marking that it should be displayed in the panel (i.e., only one value is visible)\n\n    // ... adding properties and filters to the form\n\n    EDIT Item OBJECT i // marking that this form should be used when it is necessary to add or edit a product\n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    PROPERTIES(i) NEWSESSION NEW, EDIT // adding buttons that will create and edit the product using the item form\n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two instructions (the second instruction can be transferred to another module)\nEXTEND FORM printInvoice\n    OBJECTS d = InvoiceDetail // adding invoice lines, each of which will be used in the report as a detail\n\n    // ... adding properties and filters to the form\n;\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } // declaring an action that will open the invoice print form\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);