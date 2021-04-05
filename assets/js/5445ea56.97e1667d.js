(window.webpackJsonp=window.webpackJsonp||[]).push([[234,460],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(751)),i=n(57),c={title:"Branching (CASE, IF, MULTI)"},l={unversionedId:"Branching_CASE_IF_MULTI_",id:"version-1.0.0/Branching_CASE_IF_MULTI_",isDocsHomePage:!1,title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of\xa0conditions\xa0which condition is met, and calls the corresponding action.",source:"@site/versioned_docs/version-1.0.0/Branching_CASE_IF_MULTI_.md",slug:"/Branching_CASE_IF_MULTI_",permalink:"/platform/docs/Branching_CASE_IF_MULTI_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Branching_CASE_IF_MULTI_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Loop (FOR)",permalink:"/platform/docs/Loop_FOR_"},next:{title:"Recursive loop (WHILE)",permalink:"/platform/docs/Recursive_loop_WHILE_"}},s=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"The branching operator")," creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that determines for a set of\xa0",Object(a.b)("em",{parentName:"p"},"conditions"),"\xa0which condition is met, and calls the corresponding action."),Object(a.b)("p",null,"All conditions are defined as\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"properties"),"\xa0and/or parameters. Accordingly, a condition is\xa0",Object(a.b)("em",{parentName:"p"},"met")," if the value of the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"p"),"roperty\xa0or parameter by which it is set is not equal to\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("h3",{id:"poly"},"Polymorphic form"),Object(a.b)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_signature_CLASS_"},"signature")," of the action corresponding to that condition. We will call this the\xa0",Object(a.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(a.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(a.b)("p",null,"The branching operator lets you specify that all its conditions are\xa0",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(a.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(a.b)("p",null,"This operator has the capability of an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Action_extension"},"implicit definition"),"\xa0using the technique of\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(a.b)("h3",{id:"single"},"Single form"),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"single\xa0"),"form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an\xa0",Object(a.b)("em",{parentName:"p"},"alternative action\xa0"),"that is called if the condition is not met."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare an action implementing general form of branching, the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/CASE_operator_action_"},Object(a.b)("strong",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the IF operator is used, and for the polymorphic form the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/MULTI_operator_action_"},Object(a.b)("strong",{parentName:"a"},"MULTI")," operator"),".\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=case",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=ifthena",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=multi",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return h}));var o=n(3),r=n(7),a=n(0),i=n.n(a),c=n(751),l=n(754),s={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],u=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],s=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),r?n?Object(c.b)(i.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(i.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:u};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n(3),r=n(0),a=n.n(r),i=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=p({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,c=[],l=[c];i>-1;){for(;(a=o[i]++)<r[i];){var s=void 0,p=t[i],h=n[i][a];if("string"==typeof h?(p=i>0?p:["plain"],s=h):(p=m(p,h.type),h.alias&&(p=m(p,h.alias)),s=h.content),"string"==typeof s){var b=s.split(d),f=b.length;c.push({types:p,content:b[0]});for(var y=1;y<f;y++)u(c),l.push(c=[]),c.push({types:p,content:b[y]})}else i++,t.push(p),n.push(s),o.push(0),r.push(s.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return u(c),l}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(753),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),O=n(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(756),N=n(58),T=n.n(N);const C=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},w=/(?:title=")(.*)(?:")/;function _({children:e,className:t,metastring:n}){const{prism:c}=Object(O.useThemeConfig)(),[s,p]=Object(r.useState)(!1),[d,u]=Object(r.useState)(!1);Object(r.useEffect)((()=>{u(!0)}),[]);const m=Object(r.useRef)(null);let h=[],b="";const y=k(),v=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];h=g()(e).filter((e=>e>0))}n&&w.test(n)&&(b=n.match(w)[1]);let j=t&&t.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);let N=v.replace(/\n$/,"");if(0===h.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,i=n[r].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}h=g()(e),N=n.join("\n")}const _=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(N),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(d),theme:y,code:N,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>a.a.createElement("div",{className:T.a.codeBlockContainer},b&&a.a.createElement("div",{style:t,className:T.a.codeBlockTitle},b),a.a.createElement("div",{className:Object(i.a)(T.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:b})},a.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return h.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(T.a.copyButton),onClick:_},s?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);