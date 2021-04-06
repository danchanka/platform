(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(747)),o={title:"Access to an external system (EXTERNAL)"},i={unversionedId:"Access_to_an_external_system_EXTERNAL_",id:"Access_to_an_external_system_EXTERNAL_",isDocsHomePage:!1,title:"Access to an external system (EXTERNAL)",description:"The operator for accessing an external system executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of\xa0built-in classes as parameters of this type of call, and also writing the\xa0results\xa0of calls to the properties specified (without parameters).",source:"@site/docs/Access_to_an_external_system_EXTERNAL_.md",slug:"/Access_to_an_external_system_EXTERNAL_",permalink:"/platform/next/Access_to_an_external_system_EXTERNAL_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Access_to_an_external_system_EXTERNAL_.md",version:"current",sidebar:"learn",previous:{title:"Access from an internal system",permalink:"/platform/next/Access_from_an_internal_system"},next:{title:"Access to an internal system (INTERNAL, FORMULA): Overview",permalink:"/platform/next/Access_to_an_internal_system_INTERNAL_FORMULA_"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The operator for ",Object(s.b)("em",{parentName:"p"},"accessing an external system")," executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of\xa0",Object(s.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"built-in classes")," as parameters of this type of call, and also writing the\xa0",Object(s.b)("em",{parentName:"p"},"results"),"\xa0of calls to the properties specified (without parameters)."),Object(s.b)("p",null,"Currently the platform supports the following types of interactions/external systems:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"HTTP - web server HTTP request"),".\xa0")),Object(s.b)("p",null,"For this type of interaction, only the request string (URL)\xa0is specified, which simultaneously determines both the server address and the request to be executed."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Parameters")),Object(s.b)("p",null,"Parameters can be passed both in the request string (to refer to the parameter, the special character $ and the number of this parameter, starting with 1, are used) and in its body (BODY). It is assumed that all parameters not used in the request string are passed to BODY."),Object(s.b)("p",null,"When processing file class parameters (",Object(s.b)("strong",{parentName:"p"},"FILE"),", ",Object(s.b)("strong",{parentName:"p"},"PDFFILE"),", etc.) to BODY,\xa0the ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"content type"),"\xa0of the parameter, depending on the file extension, is determined in accordance with the following ",Object(s.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),". If the file extension is not found in this table, the content type is set\xa0to application/<file\xa0extension",">","."),Object(s.b)("p",null,"The file extension in this case is determined automatically, similarly to the\xa0",Object(s.b)("a",{parentName:"p",href:"/platform/next/WRITE_operator#extension-broken"},Object(s.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(s.b)("p",null,"In each of the three cases above, if the parameter value is\xa0",Object(s.b)("strong",{parentName:"p"},"NULL"),', "null" is substituted for the file extension in the content type (for example, application/null), and an empty string is passed as the parameter itself.'),Object(s.b)("p",null,"Parameters of classes that differ from those of files are converted into strings and are passed as a text/plain content type.\xa0",Object(s.b)("strong",{parentName:"p"},"NULL"),"\xa0values are passed as empty strings."),Object(s.b)("p",null,"If necessary, using the special ",Object(s.b)("strong",{parentName:"p"},"HEADERS")," option you can define the ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request being executed. To do this, you need to specify a property with exactly one parameter of the string class in which the header will be stored, and with the value of the string class in which the value of this header will be stored."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Results")),Object(s.b)("p",null,"When processing a request response,\xa0results\xa0with a content type from the following\xa0",Object(s.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),"\xa0are considered files, and can only be written to properties whose value class is\xa0",Object(s.b)("strong",{parentName:"p"},"FILE"),'. During this process, the corresponding file\xa0extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with "application," the result is still considered a file, and the file extension is taken from the right part of the content\xa0type (for example, for\xa0the "application/abc" content type it will be "abc"). Results with the "application/null" content type are considered equal to ',Object(s.b)("strong",{parentName:"p"},"NULL"),"."),Object(s.b)("p",null,"Results with content types different from the ones mentioned above are considered strings and when writing are automatically converted into the\xa0classes with the value of the properties to which they are being written.\xa0Empty strings are converted to\xa0",Object(s.b)("strong",{parentName:"p"},"NULL"),"."),Object(s.b)("p",null,"If necessary, using the special ",Object(s.b)("strong",{parentName:"p"},"HEADERSTO")," option you can write the ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request response received to the specified property. This property must have exactly one parameter of the string class in which the header will be stored, and the value of the string class in which the value of this header will be stored."),Object(s.b)("p",null,"All results are returned in UTF-8 encoding."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Multiple "),"results/*parameters in BODY***"),Object(s.b)("p",null,"If more than one parameter is passed to BODY,\xa0then:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If the option\xa0",Object(s.b)("strong",{parentName:"li"},"BODYURL"),'\xa0is specified, the BODY content type on transmission is\xa0set to "application/x-www-form-urlencoded," and the specified string, in which the parameters are encoded as if they were ',Object(s.b)("a",{parentName:"li",href:"#url-broken"},"passed in the request string"),", is passed as BODY."),Object(s.b)("li",{parentName:"ul"},'Otherwise, during transmission the\xa0response content type is set to "multipart/mixed," and the parameters are passed as components of this BODY.\xa0')),Object(s.b)("p",null,"In turn, if the request response type is multipart/","*"," or application/x-www-form-urlencoded, it will be split into parts, and each part will be considered a separate execution result. In this case, the order of these results is equal to the order of the corresponding parts in the request response."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Note that the processing of parameters and request results is largely similar to their processing during ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Access_from_an_external_system"},"access from an external system")," over the HTTP protocol (here parameters are processed as results and, conversely, results are processed as parameters)"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"SQL - executing an SQL server command"),".\xa0")),Object(s.b)("p",null,"For this type of interaction, a connection string and the SQL command(s) to be executed are specified. Parameters can be passed both in the connection string and in the SQL command. To access the parameter, the special character\xa0$ and the parameter number are used (starting from 1)."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Parameters")),Object(s.b)("p",null,"File class parameters (",Object(s.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(s.b)("strong",{parentName:"p"},"PDFFILE"),",\xa0etc.)\xa0can be used only in an SQL command (not in the connection string). Furthermore, if any of the parameters, when executed,\xa0is a file in ",Object(s.b)("strong",{parentName:"p"},"TABLE")," format (",Object(s.b)("strong",{parentName:"p"},"TABLEFILE")," or ",Object(s.b)("strong",{parentName:"p"},"\xa0FILE"),"\xa0with the extension ",Object(s.b)("strong",{parentName:"p"},"table"),"), that parameter is considered to be a table and in this case:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"before executing an SQL command, the value of each such parameter is loaded onto the server into a temporary table"),Object(s.b)("li",{parentName:"ul"},"when substituting parameters, the name of the created temporary table is substituted instead of the parameter value itself")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Results")),Object(s.b)("p",null,"The execution results are: for DML requests - numbers equal to the number of processed records; for SELECT requests - files in ",Object(s.b)("strong",{parentName:"p"},"TABLE")," format (",Object(s.b)("strong",{parentName:"p"},"FILE"),"\xa0with the extension ",Object(s.b)("strong",{parentName:"p"},"table"),") containing the results of these requests. The order of these results is equal to the execution order of the corresponding\xa0queries in the SQL command."),Object(s.b)("p",null,"The predefined LOCAL value may be used as the connection string. In this case the connection will be made to the database server used by the platform."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"LSF - calling an action of another lsFusion server"),".\xa0")),Object(s.b)("p",null,"For this type of interaction, the following things need to be specified: the connection string for connecting to the lsFusion server (or its web server, if any), the\xa0action being executed, and the list of properties (without parameters) to whose values the results of the call will be written.\xa0The parameters passed must match the parameters of the action being performed by number and by class."),Object(s.b)("p",null,"The way of defining an action in this type of interaction fully corresponds to the ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Access_from_an_external_system#actiontype"},"way of defining")," an action during ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Access_from_an_external_system"},"access from an external system"),"."),Object(s.b)("p",null,"By default, this type of interaction is implemented via HTTP protocol using the corresponding interfaces for access ",Object(s.b)("a",{parentName:"p",href:"#http-broken"},"to")," and ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Access_from_an_external_system#http-broken"},"from")," an external system."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"You can also use operators for ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Read_file_READ_"},"reading")," and ",Object(s.b)("a",{parentName:"p",href:"/platform/next/Write_file_WRITE_"},"writing")," files to access external systems (if file exchange is the interface for this interaction)."))),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"To declare an action that accesses an external system, use the\xa0",Object(s.b)("a",{parentName:"p",href:"/platform/next/EXTERNAL_operator"},Object(s.b)("strong",{parentName:"a"},"EXTERNAL"),"\xa0operator"),"."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}') TO exportFile; // braces are escaped') TO exportFile; // braces are escaped as they are used in internationalization\n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' BODYURL 'otherprm=$2&andonemore=$3' PARAMS 1,2,'3'; // passes the second and third parameters to BODY url-encoded\n}\nexternalSQL ()  {\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%'; // getting all barcodes of products with the name meat\n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' PARAMS 'localhost',exportFile() TO exportFile; // reading prices for read barcodes\n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(o,".").concat(h)]||b[h]||m[h]||s;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);