(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{571:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),p={title:"EXTERNAL operator"},c={unversionedId:"EXTERNAL_operator",id:"version-v4/EXTERNAL_operator",isDocsHomePage:!1,title:"EXTERNAL operator",description:"The EXTERNAL operator creates an action that implements accessing to an external system.",source:"@site/versioned_docs/version-v4/EXTERNAL_operator.md",slug:"/EXTERNAL_operator",permalink:"/platform/EXTERNAL_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/EXTERNAL_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"EXPORT operator",permalink:"/platform/EXPORT_operator"},next:{title:"FOR operator",permalink:"/platform/FOR_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"requestType",id:"requesttype",children:[]},{value:"headersToPropertyId",id:"headerstopropertyid",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXTERNAL")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that implements ",Object(o.b)("a",{parentName:"p",href:"/platform/Access_to_an_external_system_EXTERNAL_"},"accessing to an external system"),". "),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n")),Object(o.b)("p",null,"externalCall - an external call defined by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXTERNAL")," operator creates an action that makes a request to an external system."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP")),Object(o.b)("p",null,"Keyword. Specifies that the operator is executing a web server HTTP request."),Object(o.b)("h3",{id:"requesttype"},"requestType"),Object(o.b)("p",null,"Keyword. Defines the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods"},"method")," of the HTTP request:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"POST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PUT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DELETE"))),Object(o.b)("p",null,"The default value is ",Object(o.b)("strong",{parentName:"p"},"POST"),".**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SQL")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an SQL server command or commands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LSF")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an action of another lsFusion server."),Object(o.b)("p",null,"*connectionStrExpr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),". *",Object(o.b)("strong",{parentName:"p"},"*HTTP**"),": http request string. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": DBMS connection string. ",Object(o.b)("strong",{parentName:"p"},"LSF"),": URL of an lsFusion server (application)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bodyStrExpr\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),". Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"headersPropertyId")),Object(o.b)("h3",{id:"headerstopropertyid"},"headersToPropertyId"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property ID")," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string class. If the property is not specified, headers are ignored/not set."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesPropertyId")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesToPropertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property ID")," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string class. If the property is not specified, cookies are ignored/not set."),Object(o.b)("p",null,"lsfExecType"),Object(o.b)("p",null,"Keyword. Specifies the ",Object(o.b)("a",{parentName:"p",href:"/platform/Access_from_an_external_system#actiontype"},"way of defining")," the action:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL")," \u2013 the code of the action is specified in the lsFusion language. It is assumed that this code contains a declaration of an action named ",Object(o.b)("strong",{parentName:"li"},"run"),". This is the action that will be called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL ACTION")," \u2013 the action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.")),Object(o.b)("p",null,"*execStr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Expression. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": SQL query command(s). ",Object(o.b)("strong",{parentName:"p"},"LSF"),": The name of an action or code, depending on how the action is defined."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(o.b)("p",null,"List of expressions whose values will be used as the call parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(o.b)("p",null,"List of property IDs (without parameters) to which the results will be written."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}') TO exportFile; // braces are escaped') TO exportFile; // braces are escaped as they are used in internationalization\n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' BODYURL 'otherprm=$2&andonemore=$3' PARAMS 1,2,'3'; // passes the second and third parameters to BODY url-encoded\n}\nexternalSQL ()  {\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%'; // getting all barcodes of products with the name meat\n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' PARAMS 'localhost',exportFile() TO exportFile; // reading prices for read barcodes\n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,d=b["".concat(p,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);