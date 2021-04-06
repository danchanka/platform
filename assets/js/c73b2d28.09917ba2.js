(window.webpackJsonp=window.webpackJsonp||[]).push([[530,440],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return f}));var o=n(3),r=n(7),a=n(0),c=n.n(a),i=n(747),s=n(750),l={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?n?Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},603:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(747)),c=n(57),i={title:"Loop (FOR)"},s={unversionedId:"Loop_FOR_",id:"version-v4/Loop_FOR_",isDocsHomePage:!1,title:"Loop (FOR)",description:"The loop operator creates an action that iterates all object collections for which the defined condition is met, and executes a defined action for each such object collection (let's call it the\xa0main one). You can also define an alternative action that will be executed only if no object collections have been found that meet the condition.\xa0The condition itself is defined as a certain property. Let's say that the condition is satisfied if the value of this property is not NULL.",source:"@site/versioned_docs/version-v4/Loop_FOR_.md",slug:"/Loop_FOR_",permalink:"/platform/Loop_FOR_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Loop_FOR_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Call (EXEC)",permalink:"/platform/Call_EXEC_"},next:{title:"Branching (CASE, IF, MULTI)",permalink:"/platform/Branching_CASE_IF_MULTI_"}},l=[{value:"Adding an object",id:"addobject",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"loop")," operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that iterates all object collections for which the defined ",Object(a.b)("em",{parentName:"p"},"condition")," is met, and executes a defined action for each such object collection (let's call it the\xa0",Object(a.b)("em",{parentName:"p"},"main one).")," You can also define an ",Object(a.b)("em",{parentName:"p"},"alternative action")," that will be executed only if no object collections have been found that meet the condition",Object(a.b)("em",{parentName:"p"},"."),"\xa0The condition itself is defined as a certain ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),". Let's say that the condition is ",Object(a.b)("em",{parentName:"p"},"satisfied")," if the value of this property is not ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("p",null,"By default, object collections are iterated in arbitrary order. However, the developer can explicitly define this order, if necessary. To do this, you need to specify a list of properties with values in an ascending or descending order that will define the order of object iteration."),Object(a.b)("p",null,"As for other ",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations"},"set operations"),", the condition must be such that the operation is ",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations#correct"},"correct"),"."),Object(a.b)("h3",{id:"addobject"},"Adding an object"),Object(a.b)("p",null,"This operator also allows you to create an object of a specified concrete ",Object(a.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class")," for each iterated object collection. This object can then be used in the main action as a parameter."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"The syntax of the loop operator is described by ",Object(a.b)("a",{parentName:"p",href:"/platform/FOR_operator"},"the",Object(a.b)("strong",{parentName:"a"},"FOR")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=for",mdxType:"CodeSample"}))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(f,i(i({ref:t},l),{},{components:n})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var o=n(3),r=n(0),a=n.n(r),c=n(751),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var b=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?p({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,i=[],s=[i];c>-1;){for(;(a=o[c]++)<r[c];){var l=void 0,p=t[c],f=n[c][a];if("string"==typeof f?(p=c>0?p:["plain"],l=f):(p=m(p,f.type),f.alias&&(p=m(p,f.alias)),l=f.content),"string"==typeof l){var y=l.split(u),b=y.length;i.push({types:p,content:y[0]});for(var h=1;h<b;h++)d(i),s.push(i=[]),i.push({types:p,content:y[h]})}else c++,t.push(p),n.push(l),o.push(0),r.push(l.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return d(i),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var h=n(749),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(748);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(752),T=n(58),C=n.n(T);const N=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},E=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:n}){const{prism:i}=Object(O.useThemeConfig)(),[l,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const m=Object(r.useRef)(null);let f=[],y="";const h=k(),v=Array.isArray(e)?e.join(""):e;if(n&&N.test(n)){const e=n.match(N)[1];f=g()(e).filter((e=>e>0))}n&&E.test(n)&&(y=n.match(E)[1]);let j=t&&t.replace(/language-/,"");!j&&i.defaultLanguage&&(j=i.defaultLanguage);let T=v.replace(/\n$/,"");if(0===f.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,c=n[r].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}f=g()(e),T=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(T),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(b,Object(o.a)({},s,{key:String(u),theme:h,code:T,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:i})=>a.a.createElement("div",{className:C.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:C.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(c.a)(C.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:C.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return f.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(C.a.copyButton),onClick:S},l?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);