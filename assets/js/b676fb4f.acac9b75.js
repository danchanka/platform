(window.webpackJsonp=window.webpackJsonp||[]).push([[487,441],{560:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(749)),l=n(57),s={title:"How-to: CRUD"},c={unversionedId:"How-to_CRUD",id:"version-v4/How-to_CRUD",isDocsHomePage:!1,title:"How-to: CRUD",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_CRUD.md",slug:"/How-to_CRUD",permalink:"/platform/How-to_CRUD",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_CRUD.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Interactive forms: Overview",permalink:"/platform/How-to_Interactive_forms"},next:{title:"How-to: Documents with lines",permalink:"/platform/How-to_Documents_with_lines"}},i=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"task"},"Task"),Object(r.b)("p",null,"We have a set of predefined book types."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create a form to select a type from the list."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"DIALOG")," indicates that this form will be used for selecting a type from the list (e. g. when the user wants to change the book type)."),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"task-1"},"Task"),Object(r.b)("p",null,"We have a set of books with given titles."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=sample2",mdxType:"CodeSample"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is recommended that you add all the ",Object(r.b)("strong",{parentName:"p"},"name")," properties to the ",Object(r.b)("strong",{parentName:"p"},"id")," group. Values of this property will help identify the object in case of the constraint violations. It will also be added to automatic forms when no edit (EDIT) or list (LIST) forms are defined for the class."))),Object(r.b)("p",null,"We need to create a form with a list of books where the user can add, edit or delete them."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=solution2",mdxType:"CodeSample"}),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"task-2"},"Task"),Object(r.b)("p",null,"We have a set of book genres with given titles."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=sample3",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create a form with a list of genres where the user can add, edit or delete them, and one more form with a list of genres but without these options."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCRUD&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"Use this scheme (with three forms instead of two) when you want to allow users to select genres and prevent any accidental changes to the genre information. In this case, the user will be able to edit genres only on a dedicated form."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=n(0),l=n.n(r),s=n(749),c=n(752),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],i=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),a?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(b,s(s({ref:t},i),{},{components:n})):a.a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),a=n(0),r=n.n(a),l=n(753),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==a&&(r.style=void 0!==r.style?p({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?p({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),i(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,l=0,s=[],c=[s];l>-1;){for(;(r=o[l]++)<a[l];){var i=void 0,p=t[l],b=n[l][r];if("string"==typeof b?(p=l>0?p:["plain"],i=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),i=b.content),"string"==typeof i){var h=i.split(u),y=h.length;s.push({types:p,content:h[0]});for(var f=1;f<y;f++)d(s),c.push(s=[]),s.push({types:p,content:h[f]})}else l++,t.push(p),n.push(i),o.push(0),a.push(i.length)}l--,t.pop(),n.pop(),o.pop(),a.pop()}return d(s),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var f=n(751),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(755),O=n(750);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},w=n(754),C=n(58),x=n.n(C);const T=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},D=/(?:title=")(.*)(?:")/;function N({children:e,className:t,metastring:n}){const{prism:s}=Object(O.useThemeConfig)(),[i,p]=Object(a.useState)(!1),[u,d]=Object(a.useState)(!1);Object(a.useEffect)((()=>{d(!0)}),[]);const m=Object(a.useRef)(null);let b=[],h="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];b=g()(e).filter((e=>e>0))}n&&D.test(n)&&(h=n.match(D)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let C=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let a=0;a<n.length;){const r=a+1,l=n[a].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":o=r;break;case"highlight-end":e+=`${o}-${r-1},`}n.splice(a,1)}else a+=1}b=g()(e),C=n.join("\n")}const N=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(y,Object(o.a)({},c,{key:String(u),theme:f,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:s})=>r.a.createElement("div",{className:x.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(l.a)(x.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:x.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(o.a)({key:t},s({token:e,key:t}))))))})))),r.a.createElement("button",{ref:m,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(x.a.copyButton),onClick:N},i?r.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);