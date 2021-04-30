(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{571:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(745)),i={title:"IMPORT operator"},p={unversionedId:"IMPORT_operator",id:"IMPORT_operator",isDocsHomePage:!1,title:"IMPORT operator",description:"The IMPORT operator creates an action that imports\xa0data from a specified file into specified properties (parameters)\xa0or, in general, into a specified form.",source:"@site/docs/IMPORT_operator.md",slug:"/IMPORT_operator",permalink:"/platform/next/IMPORT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/IMPORT_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"IF ... THEN operator (action)",permalink:"/platform/next/IF_..._THEN_operator_action_"},next:{title:"INPUT operator",permalink:"/platform/next/INPUT_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of import</em>",id:"source-of-import",children:[]},{value:"<em>Import format</em>",id:"import-format",children:[]},{value:"<em>Import destination</em>",id:"import-destination",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IMPORT")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that imports\xa0data from a specified file into ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_import_IMPORT_"},"specified properties (parameters)"),"\xa0or, in general, into a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_structured_view_EXPORT_IMPORT_#importForm"},"specified form"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"importFormat"),"\xa0can be specified by one of the following options:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"importDestination"),"\xa0can be specified by one of the following options:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n\nDescription\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IMPORT")," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form.\xa0"),Object(o.b)("p",null,"If *\xa0",Object(o.b)("em",{parentName:"p"},"the format of the imported file"),"\xa0*is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",Object(o.b)("strong",{parentName:"p"},"FILE"),"), in the following way:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Format")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Extension")),Object(o.b)("th",{parentName:"tr",align:null},"Class"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSON")),Object(o.b)("td",{parentName:"tr",align:null},"json"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSONFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XML")),Object(o.b)("td",{parentName:"tr",align:null},"xml"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XMLFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSV")),Object(o.b)("td",{parentName:"tr",align:null},"csv"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSVFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XLS")),Object(o.b)("td",{parentName:"tr",align:null},"xls or xlsx"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"EXCELFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBF")),Object(o.b)("td",{parentName:"tr",align:null},"dbf"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBFFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLE")),Object(o.b)("td",{parentName:"tr",align:null},"table"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLEFILE"))))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The first passed file is used to automatically determine a flat file format by its extension"))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"source-of-import"},Object(o.b)("em",{parentName:"h3"},"Source of import")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fileExpr")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," whose value is the imported file. The value of the expression must be an object of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE")," etc. ).\xa0If this expression is not specified when importing a form, then the default expression is\xa0",Object(o.b)("strong",{parentName:"p"},"System.importFile()"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(o.b)("p",null,"Names of object groups of the imported form for which you want to import data.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple IDs"),".\xa0Used only for importing a form from flat formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fileExpr1 , ..., fileExprM")),Object(o.b)("p",null,"Expressions whose values are files that need to be imported for the specified object groups. The value of each expression must be an object of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE")," etc. ). Used only to import forms from flat formats.\xa0For\xa0the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view#empty"},"empty object group"),",\xa0the name\xa0",Object(o.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(o.b)("h3",{id:"import-format"},Object(o.b)("em",{parentName:"h3"},"Import format")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ATTR")),Object(o.b)("p",null,"A keyword that specifies that values should be read from the attributes of an element. If not specified, then reading happens from child elements. Only applicable for import from\xa0",Object(o.b)("strong",{parentName:"p"},"XML"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"separator")),Object(o.b)("p",null,"Delimiter in a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If not specified, then the default delimiter is '",Object(o.b)("strong",{parentName:"p"},";")," '."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(o.b)("p",null,"Keywords specifying the presence (",Object(o.b)("strong",{parentName:"p"},"HEADER"),") or absence (",Object(o.b)("strong",{parentName:"p"},"NOHEADER"),") of a header string in\xa0a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0, or\xa0",Object(o.b)("strong",{parentName:"p"},"XLS"),"\xa0file. The default is ",Object(o.b)("strong",{parentName:"p"},"NOHEADER"),"."),Object(o.b)("p",null,"When using the ",Object(o.b)("strong",{parentName:"p"},"NOHEADER")," option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"column names are considered to be: A, B, ..., Z, AA, ..., \xa0AE,\xa0..."),Object(o.b)("li",{parentName:"ul"},"if a column is not found / does not match the type of the destination property, the value of this column is considered to be ",Object(o.b)("strong",{parentName:"li"},"NULL")," (in other import formats, in the platform throws an error in these cases).")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(o.b)("p",null,"Keyword specifying the presence (",Object(o.b)("strong",{parentName:"p"},"ESCAPE"),") or absence (",Object(o.b)("strong",{parentName:"p"},"NOESCAPE"),") of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes)) and the specified delimiter (',Object(o.b)("em",{parentName:"p"},"separator"),") in a\xa0",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use ",Object(o.b)("strong",{parentName:"p"},"NOESCAPE")," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",Object(o.b)("strong",{parentName:"p"},"ESCAPE"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHEET sheetExpr")),Object(o.b)("p",null,"An option specifying the import of a specific sheet from an Excel file. If the option is not specified, then sheet number 1 is taken."),Object(o.b)("p",null,"sheetExpr - an expression whose value determines the number of the sheet imported from the Excel file. The value of the expression must be of class ",Object(o.b)("strong",{parentName:"p"},"INTEGER")," or ",Object(o.b)("strong",{parentName:"p"},"LONG"),". Numbering starts from 1."),Object(o.b)("p",null,"ALL - a keyword that means that import will be from all sheets of the excel file."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(o.b)("p",null,"An option specifying the encoding used for import."),Object(o.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent action operator")," describing the action that is executed for each imported record."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A context-dependent action operator describing the action that is executed if no records have been imported. Parameters into which\xa0data is imported cannot be used as parameters of this action."),Object(o.b)("h3",{id:"import-destination"},Object(o.b)("em",{parentName:"h3"},"Import destination")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"The name of the form into which data has to be imported.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objClassId1, ..., objClassIdK")),Object(o.b)("p",null,"Classes\xa0of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_import_IMPORT_#objects-broken"},"imported"),"\xa0objects. Specified by ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#classid-broken"},"class IDs"),".\xa0K <= 1. By default, it is assumed that what is being imported is one object of class\xa0",Object(o.b)("strong",{parentName:"p"},"INTEGER"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objAlias1, ..., objAliasK")),Object(o.b)("p",null,"Names of local parameters into which imported objects are written.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple IDs"),".\xa0K <= 1. By default, it is assumed that one object is being imported with the name\xa0",Object(o.b)("strong",{parentName:"p"},"row"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"property IDs")," into which columns (fields) of data are imported. Property parameters and their classes must match the imported objects and their classes."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(o.b)("p",null,"A list of column IDs in the source file from which data will be imported to the corresponding property. Each element of the list is specified either by\xa0a simple ID or by a\xa0string literal. When the ID of a nonexistent column is specified, or in the absence of an ID, the column corresponding to the property is the column that follows the column specified for the previous property in the list, or the first if the first property is specified.\xa0For ",Object(o.b)("strong",{parentName:"p"},"DBF")," files,\xa0column IDs are case-insensitive.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereId")),Object(o.b)("p",null,"Property ID to which\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes#defaultvalue"},"a default value"),"\xa0of the class of this property\xa0value will be written for each imported object.\xa0Property parameters and classes must match the imported objects and their classes.\xa0If the property is not specified and the number of imported objects is greater than 0, a property with the name ",Object(o.b)("strong",{parentName:"p"},"imported")," and classes of imported objects (e.g. ",Object(o.b)("strong",{parentName:"p"},"System.imported","[","INTEGER","]"),") is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propClassId1, ..., "),"propClassId",Object(o.b)("em",{parentName:"p"},"N")),Object(o.b)("p",null,"List of names\xa0of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"builtin classes"),"\xa0of the imported columns."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propAlias1, ..., propAliasN")),Object(o.b)("p",null,"Names of local parameters into which columns (fields) of data are imported.\xa0Simple IDs. If the name is not specified, then the name of the column (field) in the source file will be used as the parameter name."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Keyword. Specifies that\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0values during import (if the imported format supports them) will not be replaced with default values (for example, 0 for numbers, the empty string for strings, etc. )."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}s.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,O=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?a.a.createElement(O,p(p({ref:t},b),{},{components:r})):a.a.createElement(O,p({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);