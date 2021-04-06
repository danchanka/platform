(window.webpackJsonp=window.webpackJsonp||[]).push([[74,441],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(749)),l=r(57),p={title:"EXPORT operator"},c={unversionedId:"EXPORT_operator",id:"version-v4/EXPORT_operator",isDocsHomePage:!1,title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified\xa0properties\xa0to a file,\xa0or, in common case, that opens a form\xa0in a structured view.",source:"@site/versioned_docs/version-v4/EXPORT_operator.md",slug:"/EXPORT_operator",permalink:"/platform/EXPORT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/EXPORT_operator.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"EXEC operator",permalink:"/platform/EXEC_operator"},next:{title:"EXTERNAL operator",permalink:"/platform/EXTERNAL_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of export\xa0</em>",id:"source-of-export",children:[]},{value:"<em>Export format</em>",id:"export-format",children:[]},{value:"<em>Export destination</em>",id:"export-destination",children:[]},{value:"propertyIdM\xa0<em>, ...,\xa0</em>propertyIdM",id:"propertyidm---propertyidm",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator: creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that exports ",Object(a.b)("a",{parentName:"p",href:"/platform/Data_export_EXPORT_"},"specified\xa0properties"),"\xa0to a file,\xa0or, in common case, that ",Object(a.b)("a",{parentName:"p",href:"/platform/In_a_structured_view_EXPORT_IMPORT_"},"opens a form"),"\xa0in a structured view.\xa0"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"exportFormat"),"\xa0can be specified by one of the following options:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("br",{parentName:"strong"}),"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",Object(a.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSON"),",**\xa0",Object(a.b)("strong",{parentName:"p"},"CSV**"),",\xa0",Object(a.b)("strong",{parentName:"p"},"XLS"),", ",Object(a.b)("strong",{parentName:"p"},"XLSX"),", ",Object(a.b)("strong",{parentName:"p"},"DBF"),",\xa0",Object(a.b)("strong",{parentName:"p"},"TABLE"),".\xa0"),Object(a.b)("p",null,"If no*\xa0",Object(a.b)("em",{parentName:"p"},"export file format"),"\xa0*is specified, it is considered to be ",Object(a.b)("strong",{parentName:"p"},"JSON"),"."),Object(a.b)("p",null,"If the property to which the data is exported is of class ",Object(a.b)("strong",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},Object(a.b)("p",null,"Format")),Object(a.b)("th",{parentName:"tr",align:null},Object(a.b)("p",null,"Extension")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"JSON")),Object(a.b)("td",{parentName:"tr",align:null},"json")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"XML")),Object(a.b)("td",{parentName:"tr",align:null},"xml")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"CSV")),Object(a.b)("td",{parentName:"tr",align:null},"csv")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"XLS")),Object(a.b)("td",{parentName:"tr",align:null},"xls")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"XLSX")),Object(a.b)("td",{parentName:"tr",align:null},"xlsx")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"DBF")),Object(a.b)("td",{parentName:"tr",align:null},"dbf")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"TABLE")),Object(a.b)("td",{parentName:"tr",align:null},"table")))),Object(a.b)("p",null,"When exporting a form in an\xa0",Object(a.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block, it is possible to add extra filters to check for the equality of the objects on the form with ",Object(a.b)("a",{parentName:"p",href:"/platform/Open_form#params"},"the values passed"),". These objects ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view#objects-broken"},"will not participate")," in building the object group hierarchy."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("h3",{id:"source-of-export"},Object(a.b)("em",{parentName:"h3"},"Source of export\xa0")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formName")),Object(a.b)("p",null,"The name of the form from which you want to export data.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"objName1 ... objNameK")),Object(a.b)("p",null,"Names of form objects for which filtered (fixed) values are specified.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple IDs"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1 ... exprK")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),Object(a.b)("p",null,"List\xa0of ",Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," from whose values the data is exported.\xa0Each property is mapped to a table column of the result file."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(a.b)("p",null,"A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"a simple ID")," or\xa0a ",Object(a.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"string literal"),".\xa0If no ID is specified, it is considered equal to expr<Column number",">"," by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"whereExpr")),Object(a.b)("p",null,"An expression whose value is a condition for the export. If not specified, it is considered equal to\xa0the ",Object(a.b)("a",{parentName:"p",href:"/platform/Logical_operators_AND_OR_NOT_XOR_"},"disjunction")," of\xa0all exported properties (that is, at least one of the properties must be\xa0non-",Object(a.b)("strong",{parentName:"p"},"NULL"),")."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprL")),Object(a.b)("p",null,"List\xa0of ",Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," by which the exported data is sorted. Only properties present in the list ",Object(a.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"DESC")),Object(a.b)("p",null,"Keyword. Specifies reverse sort order. By default, ascending sort is used."),Object(a.b)("h3",{id:"export-format"},Object(a.b)("em",{parentName:"h3"},"Export format")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ATTR")),Object(a.b)("p",null,"A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to\xa0",Object(a.b)("strong",{parentName:"p"},"XML"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"separator")),Object(a.b)("p",null,"Delimiter in a ",Object(a.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If not specified, then the default delimiter is '",Object(a.b)("strong",{parentName:"p"},";")," '."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(a.b)("p",null,"Keywords specifying the presence (HEADER) or absence (NOHEADER) of a header string in\xa0a ",Object(a.b)("strong",{parentName:"p"},"CSV"),", ",Object(a.b)("strong",{parentName:"p"},"xls"),", or ",Object(a.b)("strong",{parentName:"p"},"xlsx")," file. The default is NOHEADER."),Object(a.b)("p",null,"When using the NOHEADER option:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"if the column name is one of the predefined names (A, B, ..., Z, AA, ...,\xa0AE), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column.")))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(a.b)("p",null,"Keyword specifying the presence (ESCAPE) or absence (NOESCAPE) of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes) and the specified delimiter (',Object(a.b)("em",{parentName:"p"},"separator"),") in\xa0a ",Object(a.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use NOESCAPE only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ESCAPE."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(a.b)("p",null,"An option specifying the encoding used for export."),Object(a.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"TOP n")),Object(a.b)("p",null,"Exports only the first n records.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Literals#intliteral-broken"},"Integer literal"),"."),Object(a.b)("h3",{id:"export-destination"},Object(a.b)("em",{parentName:"h3"},"Export destination")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",Object(a.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSONFILE"),", etc.).\xa0If this property is not specified, the ",Object(a.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(a.b)("p",null,"Names of object groups from the exported form for which you want to export data.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple IDs"),".\xa0Used only for exporting forms to flat formats."),Object(a.b)("h3",{id:"propertyidm---propertyidm"},"propertyIdM\xa0",Object(a.b)("em",{parentName:"h3"},", ...,\xa0"),"propertyIdM"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property IDs")," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",Object(a.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSONFILE"),", etc.). Used only for exporting forms to flat formats.\xa0For\xa0the",Object(a.b)("a",{parentName:"p",href:"/platform/Static_view#empty"},"empty group"),"\xa0of objects, the name\xa0",Object(a.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=exportplain",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=export",mdxType:"CodeSample"}))}b.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"CodeSample",(function(){return m})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=r(0),l=r.n(a),p=r(749),c=r(752),s={},i={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},b=[],m=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],s=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),o?r?Object(p.b)(l.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(l.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},u={toc:b,CodeSample:m};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=i(r),u=n,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||a;return r?o.a.createElement(d,p(p({ref:t},s),{},{components:r})):o.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},751:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),o=r(0),a=r.n(o),l=r(753),p={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:r(23).a,theme:p};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},d=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=i({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=i({},r,{backgroundColor:null}),o};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?d(e.theme,e.language):void 0;return t.themeDict=r})),s(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=i({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),s(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var l=n?{display:"inline-block"}:{},p=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(p))}})),s(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,l=i({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),s(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,l=0,p=[],c=[p];l>-1;){for(;(a=n[l]++)<o[l];){var s=void 0,i=t[l],d=r[l][a];if("string"==typeof d?(i=l>0?i:["plain"],s=d):(i=u(i,d.type),d.alias&&(i=u(i,d.alias)),s=d.content),"string"==typeof s){var f=s.split(b),h=f.length;p.push({types:i,content:f[0]});for(var O=1;O<h;O++)m(p),c.push(p=[]),p.push({types:i,content:f[O]})}else l++,t.push(i),r.push(s),n.push(0),o.push(s.length)}l--,t.pop(),r.pop(),n.pop(),o.pop()}return m(p),c}(void 0!==l?this.tokenize(t,n,l,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var O=r(751),y=r.n(O),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},g=r(755),N=r(750);var v=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(g.a)(),r=e.theme||j,n=e.darkTheme||r;return t?n:r},E=r(754),x=r(58),k=r.n(x);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},C=/(?:title=")(.*)(?:")/;function w({children:e,className:t,metastring:r}){const{prism:p}=Object(N.useThemeConfig)(),[s,i]=Object(o.useState)(!1),[b,m]=Object(o.useState)(!1);Object(o.useEffect)((()=>{m(!0)}),[]);const u=Object(o.useRef)(null);let d=[],f="";const O=v(),j=Array.isArray(e)?e.join(""):e;if(r&&S.test(r)){const e=r.match(S)[1];d=y()(e).filter((e=>e>0))}r&&C.test(r)&&(f=r.match(C)[1]);let g=t&&t.replace(/language-/,"");!g&&p.defaultLanguage&&(g=p.defaultLanguage);let x=j.replace(/\n$/,"");if(0===d.length&&void 0!==g){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(g),r=j.replace(/\n$/,"").split("\n");let n;for(let o=0;o<r.length;){const a=o+1,l=r[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}r.splice(o,1)}else o+=1}d=y()(e),x=r.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(x),i(!0),setTimeout((()=>i(!1)),2e3)};return a.a.createElement(h,Object(n.a)({},c,{key:String(b),theme:O,code:x,language:g}),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:p})=>a.a.createElement("div",{className:k.a.codeBlockContainer},f&&a.a.createElement("div",{style:t,className:k.a.codeBlockTitle},f),a.a.createElement("div",{className:Object(l.a)(k.a.codeBlockContent,g)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,k.a.codeBlock,"thin-scrollbar",{[k.a.codeBlockWithTitle]:f})},a.a.createElement("div",{className:k.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return d.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},r),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},p({token:e,key:t}))))))})))),a.a.createElement("button",{ref:u,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(k.a.copyButton),onClick:w},s?a.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);