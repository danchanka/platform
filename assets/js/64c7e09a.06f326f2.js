(window.webpackJsonp=window.webpackJsonp||[]).push([[278,460],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(751)),l=n(57),i={title:"How-to: WHILE"},c={unversionedId:"How-to_WHILE",id:"version-1.0.0/How-to_WHILE",isDocsHomePage:!1,title:"How-to: WHILE",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_WHILE.md",slug:"/How-to_WHILE",permalink:"/platform/docs/How-to_WHILE",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_WHILE.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: IF/CASE",permalink:"/platform/docs/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/platform/docs/How-to_NEWSESSION"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order for which a date is defined."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to display a message containing the number of orders for each date from a given interval."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"Both these options will provide the same result."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"sum")," property defined in the ",Object(a.b)("strong",{parentName:"p"},"Time"),"\xa0system\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Modules"},"module")," is used to add one day to the given date."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),". We have also defined order lines, so that each line contains the (full) amount and the discount."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=sample2",mdxType:"CodeSample"}),Object(a.b)("p",null,'We need to create an action that "distributes" given discount by line, starting from the line with the largest amount.'),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=solution2",mdxType:"CodeSample"}),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"The logic for changing the balance for the book is defined as follows:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create an action that will calculate the accumulated (integral) balance for a given time period."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseWhile&block=solution3",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=n(0),l=n.n(a),i=n(751),c=n(754),s={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],s=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),r?n?Object(i.b)(l.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(l.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),r=n(0),a=n.n(r),l=n(755),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,i=[],c=[i];l>-1;){for(;(a=o[l]++)<r[l];){var s=void 0,p=t[l],b=n[l][a];if("string"==typeof b?(p=l>0?p:["plain"],s=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),s=b.content),"string"==typeof s){var y=s.split(u),h=y.length;i.push({types:p,content:y[0]});for(var f=1;f<h;f++)d(i),c.push(i=[]),i.push({types:p,content:y[f]})}else l++,t.push(p),n.push(s),o.push(0),r.push(s.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return d(i),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var f=n(753),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),O=n(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},C=n(756),x=n(58),S=n.n(x);const E=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},T=/(?:title=")(.*)(?:")/;function N({children:e,className:t,metastring:n}){const{prism:i}=Object(O.useThemeConfig)(),[s,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const m=Object(r.useRef)(null);let b=[],y="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&E.test(n)){const e=n.match(E)[1];b=g()(e).filter((e=>e>0))}n&&T.test(n)&&(y=n.match(T)[1]);let j=t&&t.replace(/language-/,"");!j&&i.defaultLanguage&&(j=i.defaultLanguage);let x=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,l=n[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}b=g()(e),x=n.join("\n")}const N=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(o.a)({},c,{key:String(u),theme:f,code:x,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:i})=>a.a.createElement("div",{className:S.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:S.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(l.a)(S.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:S.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(S.a.copyButton),onClick:N},s?a.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);