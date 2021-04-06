(window.webpackJsonp=window.webpackJsonp||[]).push([[254,440],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(747)),l=n(57),s={title:"How-to: FOR"},i={unversionedId:"How-to_FOR",id:"version-v4/How-to_FOR",isDocsHomePage:!1,title:"How-to: FOR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FOR.md",slug:"/How-to_FOR",permalink:"/platform/How-to_FOR",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_FOR.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: DELETE",permalink:"/platform/How-to_DELETE"},next:{title:"How-to: IF/CASE",permalink:"/platform/How-to_IF_CASE"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Task",id:"task-1",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"task"},"Task"),Object(r.b)("p",null,"We have a list of books with titles."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to find all the books containing a given line and display a message with their names and internal codes."),Object(r.b)("h3",{id:"task-1"},"Task"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,"Use the isSubstring property (defined in the ",Object(r.b)("strong",{parentName:"p"},"Utils")," system ",Object(r.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),") to identify whether a given line contains another line."),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"task-2"},"Task"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"We need to create an action that creates 100 new books with certain titles."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=solution2",mdxType:"CodeSample"}),Object(r.b)("p",null,"Both these implementations will provide the same result."),Object(r.b)("p",null,"To solve this task, use the ",Object(r.b)("strong",{parentName:"p"},"iterate")," property (defined in the ",Object(r.b)("strong",{parentName:"p"},"Utils")," system module) which returns ",Object(r.b)("strong",{parentName:"p"},"TRUE")," for all integers in the range."),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"task-3"},"Task"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 1"),", but with the order logic. Each order contains lines where books and discount prices are specified."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=sample3",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create an action that applies a discount to all the lines with prices above 100."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"Both these implementations will provide the same result."),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"task-4"},"Task"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 3"),", but a default price was added for each book."),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=sample4",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create an action that adds all the books with prices above 100 to the order."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFor&block=solution4",mdxType:"CodeSample"}),Object(r.b)("p",null,"Both these implementations will provide the same result."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=n(0),l=n.n(r),s=n(747),i=n(750),c={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],c=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),a?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),a=n(0),r=n.n(a),l=n(751),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==a&&(r.style=void 0!==r.style?p({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?p({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,l=0,s=[],i=[s];l>-1;){for(;(r=o[l]++)<a[l];){var c=void 0,p=t[l],b=n[l][r];if("string"==typeof b?(p=l>0?p:["plain"],c=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),c=b.content),"string"==typeof c){var h=c.split(u),y=h.length;s.push({types:p,content:h[0]});for(var f=1;f<y;f++)d(s),i.push(s=[]),s.push({types:p,content:h[f]})}else l++,t.push(p),n.push(c),o.push(0),a.push(c.length)}l--,t.pop(),n.pop(),o.pop(),a.pop()}return d(s),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var f=n(749),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(748);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(752),C=n(58),w=n.n(C);const T=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},E=/(?:title=")(.*)(?:")/;function N({children:e,className:t,metastring:n}){const{prism:s}=Object(j.useThemeConfig)(),[c,p]=Object(a.useState)(!1),[u,d]=Object(a.useState)(!1);Object(a.useEffect)((()=>{d(!0)}),[]);const m=Object(a.useRef)(null);let b=[],h="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];b=g()(e).filter((e=>e>0))}n&&E.test(n)&&(h=n.match(E)[1]);let O=t&&t.replace(/language-/,"");!O&&s.defaultLanguage&&(O=s.defaultLanguage);let C=v.replace(/\n$/,"");if(0===b.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(O),n=v.replace(/\n$/,"").split("\n");let o;for(let a=0;a<n.length;){const r=a+1,l=n[a].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":o=r;break;case"highlight-end":e+=`${o}-${r-1},`}n.splice(a,1)}else a+=1}b=g()(e),C=n.join("\n")}const N=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(y,Object(o.a)({},i,{key:String(u),theme:f,code:C,language:O}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:s})=>r.a.createElement("div",{className:w.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:w.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(l.a)(w.a.codeBlockContent,O)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:w.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(o.a)({key:t},s({token:e,key:t}))))))})))),r.a.createElement("button",{ref:m,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(w.a.copyButton),onClick:N},c?r.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);