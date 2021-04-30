(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{491:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(745)),p={title:"EXPORT operator"},b={unversionedId:"EXPORT_operator",id:"EXPORT_operator",isDocsHomePage:!1,title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified\xa0properties\xa0to a file,\xa0or, in common case, that opens a form\xa0in a structured view.",source:"@site/docs/EXPORT_operator.md",slug:"/EXPORT_operator",permalink:"/platform/next/EXPORT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/EXPORT_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"EXEC operator",permalink:"/platform/next/EXEC_operator"},next:{title:"EXTERNAL operator",permalink:"/platform/next/EXTERNAL_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of export\xa0</em>",id:"source-of-export",children:[]},{value:"<em>Export format</em>",id:"export-format",children:[]},{value:"<em>Export destination</em>",id:"export-destination",children:[]},{value:"propertyIdM\xa0<em>, ...,\xa0</em>propertyIdM",id:"propertyidm---propertyidm",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXPORT")," operator: creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that exports ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_export_EXPORT_"},"specified\xa0properties"),"\xa0to a file,\xa0or, in common case, that ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_structured_view_EXPORT_IMPORT_"},"opens a form"),"\xa0in a structured view.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"exportFormat"),"\xa0can be specified by one of the following options:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("br",{parentName:"strong"}),"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",Object(o.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSON"),",**\xa0",Object(o.b)("strong",{parentName:"p"},"CSV**"),",\xa0",Object(o.b)("strong",{parentName:"p"},"XLS"),", ",Object(o.b)("strong",{parentName:"p"},"XLSX"),", ",Object(o.b)("strong",{parentName:"p"},"DBF"),",\xa0",Object(o.b)("strong",{parentName:"p"},"TABLE"),".\xa0"),Object(o.b)("p",null,"If no*\xa0",Object(o.b)("em",{parentName:"p"},"export file format"),"\xa0*is specified, it is considered to be ",Object(o.b)("strong",{parentName:"p"},"JSON"),"."),Object(o.b)("p",null,"If the property to which the data is exported is of class ",Object(o.b)("strong",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Format")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Extension")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSON")),Object(o.b)("td",{parentName:"tr",align:null},"json")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XML")),Object(o.b)("td",{parentName:"tr",align:null},"xml")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSV")),Object(o.b)("td",{parentName:"tr",align:null},"csv")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XLS")),Object(o.b)("td",{parentName:"tr",align:null},"xls")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XLSX")),Object(o.b)("td",{parentName:"tr",align:null},"xlsx")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBF")),Object(o.b)("td",{parentName:"tr",align:null},"dbf")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLE")),Object(o.b)("td",{parentName:"tr",align:null},"table")))),Object(o.b)("p",null,"When exporting a form in an\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block, it is possible to add extra filters to check for the equality of the objects on the form with ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Open_form#params"},"the values passed"),". These objects ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#objects-broken"},"will not participate")," in building the object group hierarchy."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"source-of-export"},Object(o.b)("em",{parentName:"h3"},"Source of export\xa0")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"The name of the form from which you want to export data.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameK")),Object(o.b)("p",null,"Names of form objects for which filtered (fixed) values are specified.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1 ... exprK")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),Object(o.b)("p",null,"List\xa0of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expressions")," from whose values the data is exported.\xa0Each property is mapped to a table column of the result file."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(o.b)("p",null,"A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"a simple ID")," or\xa0a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"string literal"),".\xa0If no ID is specified, it is considered equal to expr<Column number",">"," by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An expression whose value is a condition for the export. If not specified, it is considered equal to\xa0the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Logical_operators_AND_OR_NOT_XOR_"},"disjunction")," of\xa0all exported properties (that is, at least one of the properties must be\xa0non-",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprL")),Object(o.b)("p",null,"List\xa0of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expressions")," by which the exported data is sorted. Only properties present in the list ",Object(o.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies reverse sort order. By default, ascending sort is used."),Object(o.b)("h3",{id:"export-format"},Object(o.b)("em",{parentName:"h3"},"Export format")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ATTR")),Object(o.b)("p",null,"A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to\xa0",Object(o.b)("strong",{parentName:"p"},"XML"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"separator")),Object(o.b)("p",null,"Delimiter in a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If not specified, then the default delimiter is '",Object(o.b)("strong",{parentName:"p"},";")," '."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(o.b)("p",null,"Keywords specifying the presence (HEADER) or absence (NOHEADER) of a header string in\xa0a ",Object(o.b)("strong",{parentName:"p"},"CSV"),", ",Object(o.b)("strong",{parentName:"p"},"xls"),", or ",Object(o.b)("strong",{parentName:"p"},"xlsx")," file. The default is NOHEADER."),Object(o.b)("p",null,"When using the NOHEADER option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"if the column name is one of the predefined names (A, B, ..., Z, AA, ...,\xa0AE), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column.")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(o.b)("p",null,"Keyword specifying the presence (ESCAPE) or absence (NOESCAPE) of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes) and the specified delimiter (',Object(o.b)("em",{parentName:"p"},"separator"),") in\xa0a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use NOESCAPE only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ESCAPE."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(o.b)("p",null,"An option specifying the encoding used for export."),Object(o.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TOP n")),Object(o.b)("p",null,"Exports only the first n records.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#intliteral-broken"},"Integer literal"),"."),Object(o.b)("h3",{id:"export-destination"},Object(o.b)("em",{parentName:"h3"},"Export destination")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSONFILE"),", etc.).\xa0If this property is not specified, the ",Object(o.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(o.b)("p",null,"Names of object groups from the exported form for which you want to export data.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple IDs"),".\xa0Used only for exporting forms to flat formats."),Object(o.b)("h3",{id:"propertyidm---propertyidm"},"propertyIdM\xa0",Object(o.b)("em",{parentName:"h3"},", ...,\xa0"),"propertyIdM"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"Property IDs")," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",Object(o.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSONFILE"),", etc.). Used only for exporting forms to flat formats.\xa0For\xa0the",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view#empty"},"empty group"),"\xa0of objects, the name\xa0",Object(o.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploads to CSV without header line and escaping special characters\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC; // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM ff=\'HI\'; // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform gets the object {"value":"HI"} to\n    EXPORT FROM \'HI\'; // uploads JSON "HI", as by default it gets the name value, and the platform automatically converts the object {"value": "HI"} to "HI"\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")))}c.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=c(r),O=n,u=s["".concat(p,".").concat(O)]||s[O]||m[O]||o;return r?a.a.createElement(u,b(b({ref:t},i),{},{components:r})):a.a.createElement(u,b({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,p[1]=b;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);