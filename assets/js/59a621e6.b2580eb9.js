(window.webpackJsonp=window.webpackJsonp||[]).push([[251,440],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(747)),l=n(57),c={title:"WRITE operator"},s={unversionedId:"WRITE_operator",id:"version-v4/WRITE_operator",isDocsHomePage:!1,title:"WRITE operator",description:"The WRITE operator creates an action that writes a file\xa0from a property to an external resource.",source:"@site/versioned_docs/version-v4/WRITE_operator.md",slug:"/WRITE_operator",permalink:"/platform/WRITE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/WRITE_operator.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"WHILE operator",permalink:"/platform/WHILE_operator"},next:{title:"Action options",permalink:"/platform/Action_options"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>fileExpr</em>",id:"fileexpr",children:[]},{value:"<strong>Examples</strong>",id:"examples",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WRITE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/Write_file_WRITE_"},"writes a file"),"\xa0from a property to an external resource.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WRITE [CLIENT [DIALOG]] fileExpr TO urlExpr [APPEND]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WRITE"),"\xa0 operator creates an action that writes a file from the property to an external resource located at the specified URL."),Object(o.b)("p",null,"The following URL types are supported:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(o.b)("p",null,"It is assumed that the file extension\xa0is not specified in the URL (that is, the period (.) is also considered a part of the file name). This extension is determined automatically based on the class of the file\xa0being written:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Extension")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Class")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"read from the passed object"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"FILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"json"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSONFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xml"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XMLFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"csv"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSVFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xls or xlsx, depending on the file content"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"EXCELFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"dbf"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBFFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"table"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLEFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"html"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"HTMLFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"doc or docx, depending on the file content"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"WORDFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"jpg"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"IMAGEFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"pdf"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"PDFFILE"))))),Object(o.b)("p",null,"The Downloads folder in the user folder is considered to be the current folder on the client side."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CLIENT")),Object(o.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DIALOG")),Object(o.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL*",Object(o.b)("strong",{parentName:"p"},"*.**"),"\xa0This can be used only when writing to the disk (the URL type is file).*",Object(o.b)("strong",{parentName:"p"},"*\xa0**")," By default, the dialog is not shown.\xa0"),Object(o.b)("p",null,"*",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"ulrExpr")),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value equals to the URL."),Object(o.b)("h3",{id:"fileexpr"},Object(o.b)("em",{parentName:"h3"},"fileExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value equals to the file that will be written to an external resource.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"APPEND")),Object(o.b)("p",null,"Keyword. If specified, the file is re-read from \xa0fileExpr\xa0and appended to the file at\xa0urlExpr;. For the CSV extension, data is added to the end of the file. For xls and xlsx\xa0, all sheets from the\xa0fileExpr\xa0file are copied to the\xa0file at the specified location\xa0urlExpr. Not supported for other extensions.\xa0By default, the file is rewritten."),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("h3",{id:"examples"},Object(o.b)("strong",{parentName:"h3"},"Examples")),Object(o.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=write",mdxType:"CodeSample"}))}b.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=n(0),l=n.n(o),c=n(747),s=n(750),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},b=[],u=function(e){var t=e.url,n=e.lines,r=Object(o.useState)(""),a=r[0],i=r[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),a?n?Object(c.b)(l.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(l.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:b,CodeSample:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n(3),a=n(0),o=n.n(a),l=n(751),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?p({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=p({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?p({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=r[l]++)<a[l];){var i=void 0,p=t[l],m=n[l][o];if("string"==typeof m?(p=l>0?p:["plain"],i=m):(p=d(p,m.type),m.alias&&(p=d(p,m.alias)),i=m.content),"string"==typeof i){var f=i.split(b),y=f.length;c.push({types:p,content:f[0]});for(var h=1;h<y;h++)u(c),s.push(c=[]),c.push({types:p,content:f[h]})}else l++,t.push(p),n.push(i),r.push(0),a.push(i.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return u(c),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var h=n(749),g=n.n(h),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),v=n(748);var N=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||j,r=e.darkTheme||n;return t?r:n},k=n(752),x=n(58),E=n.n(x);const T=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},C=/(?:title=")(.*)(?:")/;function I({children:e,className:t,metastring:n}){const{prism:c}=Object(v.useThemeConfig)(),[i,p]=Object(a.useState)(!1),[b,u]=Object(a.useState)(!1);Object(a.useEffect)((()=>{u(!0)}),[]);const d=Object(a.useRef)(null);let m=[],f="";const h=N(),j=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];m=g()(e).filter((e=>e>0))}n&&C.test(n)&&(f=n.match(C)[1]);let O=t&&t.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);let x=j.replace(/\n$/,"");if(0===m.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(O),n=j.replace(/\n$/,"").split("\n");let r;for(let a=0;a<n.length;){const o=a+1,l=n[a].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":r=o;break;case"highlight-end":e+=`${r}-${o-1},`}n.splice(a,1)}else a+=1}m=g()(e),x=n.join("\n")}const I=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return o.a.createElement(y,Object(r.a)({},s,{key:String(b),theme:h,code:x,language:O}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:c})=>o.a.createElement("div",{className:E.a.codeBlockContainer},f&&o.a.createElement("div",{style:t,className:E.a.codeBlockTitle},f),o.a.createElement("div",{className:Object(l.a)(E.a.codeBlockContent,O)},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,E.a.codeBlock,"thin-scrollbar",{[E.a.codeBlockWithTitle]:f})},o.a.createElement("div",{className:E.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t}))))))})))),o.a.createElement("button",{ref:d,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(E.a.copyButton),onClick:I},i?o.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);