(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(745)),i={title:"Form structure",sidebar_label:"Overview"},s={unversionedId:"Form_structure",id:"version-v4/Form_structure",isDocsHomePage:!1,title:"Form structure",description:"The form structure is a complex of objects, properties, actions and relations between them.",source:"@site/versioned_docs/version-v4/Form_structure.md",slug:"/Form_structure",permalink:"/platform/Form_structure",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Form_structure.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Forms",permalink:"/platform/Forms"},next:{title:"Groups of properties and actions",permalink:"/platform/Groups_of_properties_and_actions"}},c=[{value:"Objects",id:"objects",children:[]},{value:"Properties and actions",id:"properties",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Orders",id:"sort",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/Forms"},"form")," structure is a complex of ",Object(a.b)("em",{parentName:"p"},"objects"),", ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"properties"),", ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"actions")," and relations between them."),Object(a.b)("h3",{id:"objects"},"Objects"),Object(a.b)("p",null,"When creating a form, first you must define which objects it will display. For each form object you need to specify its ",Object(a.b)("a",{parentName:"p",href:"/platform/Classes"},"class"),"."),Object(a.b)("p",null,"It is possible to combine objects into ",Object(a.b)("em",{parentName:"p"},"object groups"),'. In this case, the table will show a "Cartesian product" of these objects (i.e., for two objects - all pairs, three objects - triples, etc.). '),Object(a.b)("p",null,"In accordance with the order of adding object groups to the form, an ordered ",Object(a.b)("em",{parentName:"p"},"list")," of object groups is formed. Accordingly, the group with the maximum number for a certain set of object groups shall be called the ",Object(a.b)("em",{parentName:"p"},"last")," group for this set (i.e., the latest). The ",Object(a.b)("em",{parentName:"p"},"last")," group for a set of objects is determined similarly: first, a set of object groups into which these objects are included is built, then the last group is determined for the obtained set of object groups."),Object(a.b)("p",null,"Each object on the form has a ",Object(a.b)("em",{parentName:"p"},"current value")," at any time. It changes either as a result of ",Object(a.b)("a",{parentName:"p",href:"/platform/Interactive_view#objects"},"corresponding user actions")," in ",Object(a.b)("a",{parentName:"p",href:"/platform/Interactive_view"},"interactive"),' view or "virtually" while reading data in ',Object(a.b)("a",{parentName:"p",href:"/platform/Static_view"},"static")," view."),Object(a.b)("h3",{id:"properties"},"Properties and actions"),Object(a.b)("p",null,"After defining objects, you can add properties and actions to the form, passing these objects to them as arguments."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Adding actions is relevant only for ",Object(a.b)("a",{parentName:"p",href:"/platform/Interactive_view"},"interactive")," view. In ",Object(a.b)("a",{parentName:"p",href:"/platform/Static_view"},"static")," view added actions are ignored."))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The behavior of properties and actions in the context of their display on the form is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Display group")),Object(a.b)("p",null,"Each property is displayed exactly in one of the object groups on the form (this group shall be called a ",Object(a.b)("em",{parentName:"p"},"display group")," of this property). By default, the display group is the last group for the set of objects which this property receives as an input. If necessary, the developer can specify the display group explicitly (with certain ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view#drawgroup-broken"},"constraints")," when used in a structured view)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Groups-in-columns")),Object(a.b)("p",null,"By default, a property is displayed in its display group exactly once. In this case, the values of objects which are not in the display group of this property (these objects shall be called ",Object(a.b)("em",{parentName:"p"},"upper"),') are used as their current values. However, it is also possible to display one property multiple times so that all object collections are used as the values of certain upper objects (not their current values). With this display of the property, a kind of "matrix" is formed - upper objects x objects of the display group. Thus, to create such a matrix, when adding a property to the form you must specify which ',Object(a.b)("em",{parentName:"p"},"upper")," objects (specifically, object groups) must be used to create columns (these object groups shall be called ",Object(a.b)("em",{parentName:"p"},"groups-in-columns"),")."),Object(a.b)("p",null,"When determining a ",Object(a.b)("a",{parentName:"p",href:"#drawgroup-broken"},"display group"),", properties of the group-to-columns are ignored."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Property groups")),Object(a.b)("p",null,"Properties on the form can be combined into ",Object(a.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"groups")," which, in turn, are used in the interactive (",Object(a.b)("a",{parentName:"p",href:"/platform/Form_design#defaultDesign"},"default design"),") and ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view#hierarchy"},"hierarchical")," form views. By default, a property is included in a group globally (i.e., this inclusion is defined for a property for all forms at once), however, this inclusion can be redefined for particular forms."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Default settings")),Object(a.b)("p",null,"Properties on the form have a large number of display settings in various ",Object(a.b)("a",{parentName:"p",href:"/platform/Form_views"},"views"),', most of which can be set not only directly for the property on the form, but also for the property itself (when creating it). These settings will be the default settings, i.e., if the setting is not explicitly set for a specific property on the form, then the setting of the property itself is used. In addition, these default settings are "inherited" when using ',Object(a.b)("a",{parentName:"p",href:"/platform/Composition_JOIN_"},"composition"),", ",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection")," and ",Object(a.b)("a",{parentName:"p",href:"/platform/Previous_value_PREV_"},"previous value")," operators (i.e., if property f(a) has the default width of 10, then the property g(a) = f(a) IF h(a) will also have a width of 10 by default)."),Object(a.b)("h3",{id:"filters"},"Filters"),Object(a.b)("p",null,"For each form, the developer can create ",Object(a.b)("em",{parentName:"p"},"filters")," which will limit the list of object collections available for viewing/selection on the form."),Object(a.b)("p",null,"To define a filter, you must specify a property that will be used as a filter condition. The filter will be applied to the table of the object group that is the last for the set of objects which this property takes as input (i.e., similar to the definition of the property ",Object(a.b)("em",{parentName:"p"},"display group"),"). In this case, only those object collections (rows) for which property values are not ",Object(a.b)("strong",{parentName:"p"},"NULL")," will be shown."),Object(a.b)("h3",{id:"sort"},"Orders"),Object(a.b)("p",null,"By default, in all object group views, object collections are displayed in a certain non-deterministic order, which is determined by the specific implementation of the platform (most often, internal identifiers are used to determine the order). If necessary, the developer can define this order explicitly by specifying a list of properties on the form that will be used as orders. At the same time, for each property in this list, you can specify whether the order should be ascending or descending (by default, the ascending option is used)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NULL")," value is always considered to be the smallest value. "),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To create a new form and define its structure, the ",Object(a.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"FORM")," instruction")," is used."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    OBJECTS d = Document // Adding one object of the Document class. The object will be available by this name in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n\n\n    // ... adding properties and filters to the form\n\n    LIST Document OBJECT d // marking that this form should be used when it is necessary to select a document, while the d object should be used as a return value\n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    OBJECTS i = Item PANEL // adding an object of the Item class and marking that it should be displayed in the panel (i.e., only one value is visible)\n\n    // ... adding properties and filters to the form\n\n    EDIT Item OBJECT i // marking that this form should be used when it is necessary to add or edit a product\n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    PROPERTIES(i) NEWSESSION NEW, EDIT // adding buttons that will create and edit the product using the item form\n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two instructions (the second instruction can be transferred to another module)\nEXTEND FORM printInvoice\n    OBJECTS d = InvoiceDetail // adding invoice lines, each of which will be used in the report as a detail\n\n    // ... adding properties and filters to the form\n;\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } // declaring an action that will open the invoice print form\n")))}l.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return r?o.a.createElement(h,s(s({ref:t},p),{},{components:r})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);