(window.webpackJsonp=window.webpackJsonp||[]).push([[480,460],{553:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(751)),c=n(57),s={title:"Class change (CHANGECLASS, DELETE)"},i={unversionedId:"Class_change_CHANGECLASS_DELETE_",id:"version-1.0.0/Class_change_CHANGECLASS_DELETE_",isDocsHomePage:!1,title:"Class change (CHANGECLASS, DELETE)",description:"The\xa0class change\xa0operator creates an action that assigns the given\xa0class to all objects where value of a particular\xa0property\xa0(condition) is not equal to\xa0NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/versioned_docs/version-1.0.0/Class_change_CHANGECLASS_DELETE_.md",slug:"/Class_change_CHANGECLASS_DELETE_",permalink:"/platform/docs/Class_change_CHANGECLASS_DELETE_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Class_change_CHANGECLASS_DELETE_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"New object (NEW)",permalink:"/platform/docs/New_object_NEW_"},next:{title:"Session management: Overview",permalink:"/platform/docs/Session_management"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("em",{parentName:"p"},"class change"),"\xa0operator creates an ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that assigns the given\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Classes"},"class")," to all objects where value of a particular\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property"),"\xa0(",Object(r.b)("em",{parentName:"p"},"condition"),") is not equal to\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",Object(r.b)("strong",{parentName:"p"},"TRUE"),". \xa0"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The platform also has a builtin\xa0changeClass\xa0action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)"))),Object(r.b)("p",null,"If there is a non-",Object(r.b)("strong",{parentName:"p"},"NULL")," value of some ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Data_properties_DATA_"},"data property"),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This behavior is implemented by analogy with ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Calculated_events"},"computed")," and ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Simple_event"},"simple")," events."))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare an action that implements a change of object classes, use the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/CHANGECLASS_operator"},Object(r.b)("strong",{parentName:"a"},"CHANGECLASS")," operator")," or ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/DELETE_operator"},"the ",Object(r.b)("strong",{parentName:"a"},"DELETE")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=delete",mdxType:"CodeSample"}),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=changeclass",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=n(0),c=n.n(r),s=n(751),i=n(754),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],u=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],l=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(3),o=n(0),r=n.n(o),c=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?p({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var c=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(s))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,c=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),l(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,c=0,s=[],i=[s];c>-1;){for(;(r=a[c]++)<o[c];){var l=void 0,p=t[c],b=n[c][r];if("string"==typeof b?(p=c>0?p:["plain"],l=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),l=b.content),"string"==typeof l){var h=l.split(d),f=h.length;s.push({types:p,content:h[0]});for(var y=1;y<f;y++)u(s),i.push(s=[]),s.push({types:p,content:h[y]})}else c++,t.push(p),n.push(l),a.push(0),o.push(l.length)}c--,t.pop(),n.pop(),a.pop(),o.pop()}return u(s),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=n(753),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),O=n(752);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,a=e.darkTheme||n;return t?a:n},k=n(756),E=n(58),C=n.n(E);const w=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},T=/(?:title=")(.*)(?:")/;function x({children:e,className:t,metastring:n}){const{prism:s}=Object(O.useThemeConfig)(),[l,p]=Object(o.useState)(!1),[d,u]=Object(o.useState)(!1);Object(o.useEffect)((()=>{u(!0)}),[]);const m=Object(o.useRef)(null);let b=[],h="";const y=N(),v=Array.isArray(e)?e.join(""):e;if(n&&w.test(n)){const e=n.match(w)[1];b=g()(e).filter((e=>e>0))}n&&T.test(n)&&(h=n.match(T)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let E=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),n=v.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,c=n[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}b=g()(e),E=n.join("\n")}const x=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(E),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(f,Object(a.a)({},i,{key:String(d),theme:y,code:E,language:j}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:s})=>r.a.createElement("div",{className:C.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:C.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(c.a)(C.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:C.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),r.a.createElement("button",{ref:m,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(C.a.copyButton),onClick:x},l?r.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);