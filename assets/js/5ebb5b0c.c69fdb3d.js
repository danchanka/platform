(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{337:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(746)),p={title:"Data export (EXPORT)"},i={unversionedId:"Data_export_EXPORT_",id:"version-v4/Data_export_EXPORT_",isDocsHomePage:!1,title:"Data export (EXPORT)",description:"The data\xa0export\xa0operator creates an\xa0action that reads values of the specified properties for all object collections where the value of the specified property (condition) is not NULL, and then saves these values to a file in a specified format.",source:"@site/versioned_docs/version-v4/Data_export_EXPORT_.md",slug:"/Data_export_EXPORT_",permalink:"/platform/Data_export_EXPORT_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Data_export_EXPORT_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Data import (IMPORT)",permalink:"/platform/Data_import_IMPORT_"},next:{title:"Send mail (EMAIL)",permalink:"/platform/Send_mail_EMAIL_"}},s=[{value:"General case",id:"general-case",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"data\xa0export"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that reads values of the specified properties for all object collections where the value of the specified property (",Object(o.b)("em",{parentName:"p"},"condition"),") is not ",Object(o.b)("strong",{parentName:"p"},"NULL"),", and then saves these values to a file in a specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Structured_view"},"format"),".\xa0"),Object(o.b)("p",null,"The condition is optional in this operator and, if not defined, it is considered equal to the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Logical_operators_AND_OR_NOT_XOR_"},"disjunction")," of all exported properties (i.e., at least one of the properties must be non-",Object(o.b)("strong",{parentName:"p"},"NULL"),").\xa0"),Object(o.b)("p",null,"Similar to the other\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Set_operations"},"set operations"),", the condition must be such that the operation is\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Set_operations"},"correct"),"."),Object(o.b)("h3",{id:"general-case"},"General case"),Object(o.b)("p",null,"It should be noted that data export is a special case of (syntactic sugar for) ",Object(o.b)("a",{parentName:"p",href:"/platform/In_a_structured_view_EXPORT_IMPORT_"},"form export"),", in which the exported form is created automatically, named ",Object(o.b)("strong",{parentName:"p"},"export")," and consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"object group"),"\xa0named\xa0",Object(o.b)("strong",{parentName:"li"},"value")," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."),Object(o.b)("li",{parentName:"ul"},"exported properties. The ",Object(o.b)("a",{parentName:"li",href:"/platform/Groups_of_properties_and_actions#builtin"},"built-in"),"\xa0",Object(o.b)("strong",{parentName:"li"},"System.private"),"\xa0group is used as the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#propertygroup-broken"},"property group"),"\xa0for the created properties on the form,\xa0and the created object group is used as the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#drawgroup-broken"},"display group"),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name\xa0",Object(o.b)("strong",{parentName:"li"},"value"),"."),Object(o.b)("li",{parentName:"ul"},"a filter equal to the defined condition."),Object(o.b)("li",{parentName:"ul"},"defined orders.")),Object(o.b)("p",null,"Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",Object(o.b)("a",{parentName:"p",href:"/platform/Structured_view#value"},"processing\xa0",Object(o.b)("strong",{parentName:"a"},"value")),",\xa0etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that exports data, use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/EXPORT_operator"},Object(o.b)("strong",{parentName:"a"},"EXPORT")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploads to CSV without header line and escaping special characters\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC; // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM ff=\'HI\'; // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform gets the object {"value":"HI"} to\n    EXPORT FROM \'HI\'; // uploads JSON "HI", as by default it gets the name value, and the platform automatically converts the object {"value": "HI"} to "HI"\n}\n')))}l.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.a.createElement(f,i(i({ref:t},c),{},{components:r})):n.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);