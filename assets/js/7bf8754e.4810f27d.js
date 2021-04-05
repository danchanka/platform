(window.webpackJsonp=window.webpackJsonp||[]).push([[336,460],{411:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(751)),c=r(57),s={title:"EXTERNAL operator"},l={unversionedId:"EXTERNAL_operator",id:"version-1.0.0/EXTERNAL_operator",isDocsHomePage:!1,title:"EXTERNAL operator",description:"The\xa0EXTERNAL\xa0operator creates an\xa0action that implements accessing to an external system.",source:"@site/versioned_docs/version-1.0.0/EXTERNAL_operator.md",slug:"/EXTERNAL_operator",permalink:"/platform/docs/EXTERNAL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/EXTERNAL_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"EXPORT operator",permalink:"/platform/docs/EXPORT_operator"},next:{title:"FOR operator",permalink:"/platform/docs/FOR_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"requestType",id:"requesttype",children:[]},{value:"headersToPropertyId",id:"headerstopropertyid",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that implements ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Access_to_an_external_system_EXTERNAL_"},"accessing to an external system"),".\xa0"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n")),Object(a.b)("p",null,"externalCall - an external call defined by one of the following syntaxes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an action that makes a request to an external system."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"HTTP")),Object(a.b)("p",null,"Keyword. Specifies that the operator is executing a web server HTTP request."),Object(a.b)("h3",{id:"requesttype"},"requestType"),Object(a.b)("p",null,"Keyword. Defines the ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods"},"method")," of the HTTP request:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"POST")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GET")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PUT")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DELETE"))),Object(a.b)("p",null,"The default value is\xa0",Object(a.b)("strong",{parentName:"p"},"POST"),".**",Object(a.b)("br",{parentName:"p"}),"\n","**"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"SQL")),Object(a.b)("p",null,"Keyword. Specifies that the operator executes an SQL server command or commands."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"LSF")),Object(a.b)("p",null,"Keyword. Specifies that the operator executes an action of another lsFusion server."),Object(a.b)("p",null,"*connectionStrExpr  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"Expression"),". *",Object(a.b)("strong",{parentName:"p"},"*HTTP**"),":\xa0http request string. ",Object(a.b)("strong",{parentName:"p"},"SQL"),": DBMS connection string. ",Object(a.b)("strong",{parentName:"p"},"LSF"),": URL of an lsFusion server (application)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"bodyStrExpr\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"Expression"),".\xa0Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"headersPropertyId")),Object(a.b)("h3",{id:"headerstopropertyid"},"headersToPropertyId"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"Property ID")," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string\xa0class. If the property is not specified, headers are ignored/not set."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"cookiesPropertyId")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"cookiesToPropertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"Property ID")," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string\xa0class. If the property is not specified, cookies are ignored/not set."),Object(a.b)("p",null,"lsfExecType"),Object(a.b)("p",null,"Keyword. Specifies the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Access_from_an_external_system#actiontype"},"way of defining")," the action:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EVAL")," \u2013 the code of the action is specified in the lsFusion language. It is assumed that this code contains a declaration of an action named ",Object(a.b)("strong",{parentName:"li"},"run"),". This is the action that will be called."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EVAL ACTION")," \u2013 the action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.")),Object(a.b)("p",null,"*execStr  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"})),Object(a.b)("p",null,"Expression. ",Object(a.b)("strong",{parentName:"p"},"SQL"),": SQL query command(s). ",Object(a.b)("strong",{parentName:"p"},"LSF"),": The name of an action or code, depending on how the action is defined."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(a.b)("p",null,"List of expressions whose values will be used as the call parameters."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(a.b)("p",null,"List\xa0of property IDs\xa0(without parameters) to which the results will be written."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=external",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return b})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),a=r(0),c=r.n(a),s=r(751),l=r(754),i={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],i=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?r?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:b};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,s(s({ref:t},i),{},{components:r})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},753:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},754:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),o=r(0),a=r.n(o),c=r(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:r(23).a,theme:s};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},m=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function y(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?m(e.theme,e.language):void 0;return t.themeDict=r})),i(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),i(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var c=n?{display:"inline-block"}:{},s=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==r&&(c.key=r),n&&(c.className+=" "+n),c})),i(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=n[c]++)<o[c];){var i=void 0,p=t[c],m=r[c][a];if("string"==typeof m?(p=c>0?p:["plain"],i=m):(p=d(p,m.type),m.alias&&(p=d(p,m.alias)),i=m.content),"string"==typeof i){var y=i.split(u),h=y.length;s.push({types:p,content:y[0]});for(var f=1;f<h;f++)b(s),l.push(s=[]),s.push({types:p,content:y[f]})}else c++,t.push(p),r.push(i),n.push(0),o.push(i.length)}c--,t.pop(),r.pop(),n.pop(),o.pop()}return b(s),l}(void 0!==c?this.tokenize(t,n,c,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=r(753),g=r.n(f),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=r(757),v=r(752);var E=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),r=e.theme||O,n=e.darkTheme||r;return t?n:r},T=r(756),k=r(58),N=r.n(k);const x=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},P=/(?:title=")(.*)(?:")/;function w({children:e,className:t,metastring:r}){const{prism:s}=Object(v.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,b]=Object(o.useState)(!1);Object(o.useEffect)((()=>{b(!0)}),[]);const d=Object(o.useRef)(null);let m=[],y="";const f=E(),O=Array.isArray(e)?e.join(""):e;if(r&&x.test(r)){const e=r.match(x)[1];m=g()(e).filter((e=>e>0))}r&&P.test(r)&&(y=r.match(P)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let k=O.replace(/\n$/,"");if(0===m.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),r=O.replace(/\n$/,"").split("\n");let n;for(let o=0;o<r.length;){const a=o+1,c=r[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}r.splice(o,1)}else o+=1}m=g()(e),k=r.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(k),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(n.a)({},l,{key:String(u),theme:f,code:k,language:j}),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:s})=>a.a.createElement("div",{className:N.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:N.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(c.a)(N.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,N.a.codeBlock,"thin-scrollbar",{[N.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:N.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return m.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},r),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:d,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(N.a.copyButton),onClick:w},i?a.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);