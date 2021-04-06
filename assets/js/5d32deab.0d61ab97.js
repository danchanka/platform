(window.webpackJsonp=window.webpackJsonp||[]).push([[261,440],{335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(747)),c=n(57),i={title:"ACTION instruction: Overview",sidebar_label:"Overview"},s={unversionedId:"ACTION_instruction",id:"version-v4/ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction: Overview",description:"The ACTION instruction\xa0creates an\xa0action.",source:"@site/versioned_docs/version-v4/ACTION_instruction.md",slug:"/ACTION_instruction",permalink:"/platform/ACTION_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/ACTION_instruction.md",version:"v4",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Property options",permalink:"/platform/Property_options"},next:{title:"Action operator: Overview",permalink:"/platform/Action_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ACTION")," instruction\xa0creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ACTION\xa0"),"instruction declares a new action and adds it to the current\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),"."),Object(a.b)("p",null,"The instruction has two forms: the first form creates an action using a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator, the second form creates a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Property_operators#contextindependent"},"context-independent")," one."),Object(a.b)("p",null,"Also, when declaring an action, a set of its options can be specified. \xa0\xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name\xa0")),Object(a.b)("p",null,"Action name.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"caption")),Object(a.b)("p",null,"Action caption.\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption. \xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(a.b)("p",null,"List of parameters. Each of them is defined by a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#paramid-broken"},"typed parameter"),"\xa0These parameters can be later used in the action operator describing the action being created (as well as in some options)."),Object(a.b)("p",null,"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"operator")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator describing and creating an action.\xa0You can use the parameters defined in this instruction (if any) as operator parameters."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"contextIndependentOperator")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/Action_operator#contextindependent"},"context-independent"),"\xa0action operator describing and creating an action.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"options")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Action_options"},"Action options")," .\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=n(0),c=n.n(a),i=n(747),s=n(750),l={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],l=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?n?Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(3),o=n(0),a=n.n(o),c=n(751),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),l(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,i=[],s=[i];c>-1;){for(;(a=r[c]++)<o[c];){var l=void 0,p=t[c],b=n[c][a];if("string"==typeof b?(p=c>0?p:["plain"],l=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),l=b.content),"string"==typeof l){var f=l.split(u),y=f.length;i.push({types:p,content:f[0]});for(var h=1;h<y;h++)d(i),s.push(i=[]),i.push({types:p,content:f[h]})}else c++,t.push(p),n.push(l),r.push(0),o.push(l.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return d(i),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(749),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(748);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||v,r=e.darkTheme||n;return t?r:n},N=n(752),x=n(58),T=n.n(x);const C=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},A=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:n}){const{prism:i}=Object(j.useThemeConfig)(),[l,p]=Object(o.useState)(!1),[u,d]=Object(o.useState)(!1);Object(o.useEffect)((()=>{d(!0)}),[]);const m=Object(o.useRef)(null);let b=[],f="";const h=k(),v=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];b=g()(e).filter((e=>e>0))}n&&A.test(n)&&(f=n.match(A)[1]);let O=t&&t.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);let x=v.replace(/\n$/,"");if(0===b.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(O),n=v.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const a=o+1,c=n[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":r=a;break;case"highlight-end":e+=`${r}-${a-1},`}n.splice(o,1)}else o+=1}b=g()(e),x=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(y,Object(r.a)({},s,{key:String(u),theme:h,code:x,language:O}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:i})=>a.a.createElement("div",{className:T.a.codeBlockContainer},f&&a.a.createElement("div",{style:t,className:T.a.codeBlockTitle},f),a.a.createElement("div",{className:Object(c.a)(T.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:f})},a.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(T.a.copyButton),onClick:S},l?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);