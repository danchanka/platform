(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{424:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(751)),i={title:"Tables"},o={unversionedId:"Tables",id:"Tables",isDocsHomePage:!1,title:"Tables",description:"For storing and calculating values of the properties the lsFusion platform uses a relational database. All data properties, as well as all calculated properties marked as materialized, are stored in the fields of the tables in the database. For each table, there is a set of key fields with the names key0, key1, ..., keyN, where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row\xa0there is a property value for the objects with IDs from the key fields.\xa0Objects of\xa0built-in classes can also be used as table keys.",source:"@site/docs/Tables.md",slug:"/Tables",permalink:"/platform/docs/next/Tables",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Tables.md",version:"current",sidebar:"docs",previous:{title:"Indexes",permalink:"/platform/docs/next/Indexes"},next:{title:"Management: Overview",permalink:"/platform/docs/next/Management"}},s=[{value:"Property table determining",id:"property",children:[]},{value:"Table naming",id:"table-naming",children:[]},{value:"Field naming",id:"name",children:[]},{value:"Default tables",id:"default-tables",children:[]},{value:"Default indexes",id:"default-indexes",children:[]},{value:"Full tables",id:"full",children:[]},{value:"Storing belonging to the class",id:"storing-belonging-to-the-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For storing and calculating values of the ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"properties")," the ",Object(l.b)("strong",{parentName:"p"},"lsFusion")," platform uses a relational database. All ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Data_properties_DATA_"},"data properties"),", as well as all calculated ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"properties")," marked as ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Materializations"},"materialized"),", are stored in the fields of the ",Object(l.b)("em",{parentName:"p"},"tables")," in the database. For each table, there is a set of key fields with the names ",Object(l.b)("strong",{parentName:"p"},"key0"),", ",Object(l.b)("strong",{parentName:"p"},"key1"),", ..., ",Object(l.b)("strong",{parentName:"p"},"keyN"),", where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row\xa0there is a property value for the objects with IDs from the key fields.\xa0Objects of\xa0built-in classes can also be used as table keys."),Object(l.b)("p",null,"When creating a table, you must specify a list of the object\xa0classes\xa0which will be the keys in this table."),Object(l.b)("h3",{id:"property"},"Property table determining"),Object(l.b)("p",null,'For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (',Object(l.b)("strong",{parentName:"p"},"NODEFAULT"),") to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (",Object(l.b)("strong",{parentName:"p"},"TABLE"),"))."),Object(l.b)("h3",{id:"table-naming"},"Table naming"),Object(l.b)("p",null,"For each table created in the\xa0platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Naming policy"),Object(l.b)("th",{parentName:"tr",align:null},"Field name"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Full with signature (default)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,Object(l.b)("strong",null,"NameSpace_TableName"),Object(l.b)("br",null),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Full without signature"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NameSpace_TableName"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Short"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TableName"))))),Object(l.b)("p",null,"The naming policy is defined using the ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Launch_parameters#namingpolicy-broken"},"db.namingPolicy")," startup parameter."),Object(l.b)("h3",{id:"name"},"Field naming"),Object(l.b)("p",null,"The values of each property are always stored exactly in one field, which name, depending on the selected naming policy, is defined as follows:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Naming policy"),Object(l.b)("th",{parentName:"tr",align:null},"Field name"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Full with signature (default)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NameSpace",Object(l.b)("em",{parentName:"td"},"PropertyName_ClassName1_ClassName2"),"..,ClassNameN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Full without signature"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NameSpace_PropertyName"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Short"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"PropertyName"))))),Object(l.b)("p",null,"If necessary, for each property, the developer can explicitly specify the name of the field in which this property will be stored. Also, it is possible to create a custom policy for naming property fields if the above does not suit for some reason."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Using too short property naming policy (in case the number of materialized properties is large enough) can significantly complicate ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Naming"},"naming")," these properties (keeping them unique), or, accordingly, lead to the case when you will need to explicitly name the fields in which these properties will be stored too often."))),Object(l.b)("p",null,"The naming policy is defined using the ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Launch_parameters#namingpolicy-broken"},"db.namingPolicy")," startup parameter."),Object(l.b)("h3",{id:"default-tables"},"Default tables"),Object(l.b)("p",null,"If the system cannot determine the table in which the property should be put, then a table with a name equal to ",Object(l.b)("strong",{parentName:"p"},"_","auto","_","<class ID 1 in the\xa0property signature",">","_","<class ID 2 in the\xa0property signature",">","_","...<class ID n\xa0in the\xa0property signature",">")," is automatically created. For example, for a property with class arguments DATE, Item.Item, Country.Country, INTEGER, the table ",Object(l.b)("strong",{parentName:"p"},"auto","_","DATE","_","Item","_","Item","_","Country","_","Country","_","INTEGER")," will be created.\xa0However, it is recommended to avoid situations when the default table is used and explicitly specify the tables in which properties will be stored."),Object(l.b)("p",null,"Also, it is possible to create a custom policy for naming tables in the platform if the basic policy does not suit for some reason."),Object(l.b)("h3",{id:"default-indexes"},"Default indexes"),Object(l.b)("p",null,"By default, a unique ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Indexes"},"index")," is built for each table by its key fields\xa0",Object(l.b)("strong",{parentName:"p"},"key0"),",\xa0",Object(l.b)("strong",{parentName:"p"},"key1"),", ...,\xa0",Object(l.b)("strong",{parentName:"p"},"keyN"),"\xa0named as\xa0",Object(l.b)("strong",{parentName:"p"},"pk","_","<table ID",">")," where N is the number of key fields in the table minus 1. Also indexes on key fields\xa0",Object(l.b)("strong",{parentName:"p"},"keyK"),", ...,\xa0",Object(l.b)("strong",{parentName:"p"},"keyN"),"\xa0with names like\xa0",Object(l.b)("strong",{parentName:"p"},"<table ID",">","_","keyK ","_","...","_"," keyN","_","idx")," are automatically added for all\xa0",Object(l.b)("strong",{parentName:"p"},"K"),"\xa0from 1 to\xa0",Object(l.b)("strong",{parentName:"p"},"N"),"."),Object(l.b)("h3",{id:"full"},"Full tables"),Object(l.b)("p",null,"Let's say that the table is ",Object(l.b)("em",{parentName:"p"},"full")," if for each of its keys it contains all existing in the system objects of this key class. In general, the fullness of a table is specified explicitly using the special option (",Object(l.b)("strong",{parentName:"p"},"FULL"),") and is implemented via an implicit creation of a materialized ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Classification_IS_AS_"},"classification")," property (we will call it the ",Object(l.b)("em",{parentName:"p"},"fullness")," property). However, in some cases, the platform may not create this property if it determines that the table already has properties which guarantee that it contains all the necessary objects (for example, the property of belonging to the class)."),Object(l.b)("p",null,"By default, the fullness property is named ",Object(l.b)("strong",{parentName:"p"},"_","FULL","_","TableName"),".\xa0Also, when defining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),Object(l.b)("p",null,"It is worth noting that the fullness of the table is important only from the execution optimization perspective (for example, the server knows that a certain table has all objects of the required class, and instead of LEFT JOIN uses INNER JOIN, which may be critical in some cases), and just as the table mechanism itself, it does not affect the logic of the system."),Object(l.b)("h3",{id:"storing-belonging-to-the-class"},"Storing belonging to the class"),Object(l.b)("p",null,"Belonging to the class is basic data similar to ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Data_properties_DATA_"},"data")," properties. Thus, like data properties, this belonging is stored in the field of a certain table. At the same time, this table is determined similar to the table for the other materialized properties (assuming that the belonging to the class is a property with one parameter of this class), with the only difference being that at first only full tables are processed (i.e., they have higher priority), and only if no full tables are found, the remaining (not full) tables are processed."),Object(l.b)("p",null,"If a certain table for each of its keys\xa0stores the belonging to the class of all descendants of the class of this key, firstly it is automatically marked as full (even if it was not specified explicitly), and secondly, the fullness property is not created for it (it is assumed that the role of this property is fulfilled by the property of belonging to the class itself)."),Object(l.b)("p",null,"By default, the property of belonging to the class is named ",Object(l.b)("strong",{parentName:"p"},"_","CLASS","_","TableName"),". Also, when determining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),Object(l.b)("h3",{id:"language"},"Language"),Object(l.b)("p",null,"To create tables, use the\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/TABLE_instruction"},Object(l.b)("strong",{parentName:"a"},"TABLE")," instruction"),". To specify the table which should store the property, use the ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Property_options"},Object(l.b)("strong",{parentName:"a"},"TABLE")," option")," in the property options."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n")))}p.isMDXComponent=!0},751:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||h[m]||l;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);