(window.webpackJsonp=window.webpackJsonp||[]).push([[7,441],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=n(0),l=n.n(a),s=n(749),i=n(752),c={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(3),r=n(0),a=n.n(r),l=n(753),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,s=[],i=[s];l>-1;){for(;(a=o[l]++)<r[l];){var c=void 0,p=t[l],b=n[l][a];if("string"==typeof b?(p=l>0?p:["plain"],c=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),c=b.content),"string"==typeof c){var h=c.split(u),y=h.length;s.push({types:p,content:h[0]});for(var f=1;f<y;f++)d(s),i.push(s=[]),s.push({types:p,content:h[f]})}else l++,t.push(p),n.push(c),o.push(0),r.push(c.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return d(s),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var f=n(751),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(755),j=n(750);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},w=n(754),x=n(58),C=n.n(x);const N=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},T=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:s}=Object(j.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const m=Object(r.useRef)(null);let b=[],h="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&N.test(n)){const e=n.match(N)[1];b=g()(e).filter((e=>e>0))}n&&T.test(n)&&(h=n.match(T)[1]);let O=t&&t.replace(/language-/,"");!O&&s.defaultLanguage&&(O=s.defaultLanguage);let x=v.replace(/\n$/,"");if(0===b.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(O),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,l=n[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}b=g()(e),x=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(y,Object(o.a)({},i,{key:String(u),theme:f,code:x,language:O}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:s})=>a.a.createElement("div",{className:C.a.codeBlockContainer},h&&a.a.createElement("div",{style:t,className:C.a.codeBlockTitle},h),a.a.createElement("div",{className:Object(l.a)(C.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:h})},a.a.createElement("div",{className:C.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(C.a.copyButton),onClick:E},c?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(749)),l=n(57),s={title:"How-to: FORMULA"},i={unversionedId:"How-to_FORMULA",id:"version-v4/How-to_FORMULA",isDocsHomePage:!1,title:"How-to: FORMULA",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FORMULA.md",slug:"/How-to_FORMULA",permalink:"/platform/How-to_FORMULA",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_FORMULA.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Access to internal systems: Overview",permalink:"/platform/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/platform/How-to_INTERNAL"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a list of orders."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to export this list to CSV and keep the date in the ISO format (YYYY-MM-DD)."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"To solve this task we use the ",Object(a.b)("a",{parentName:"p",href:"/platform/FORMULA_operator"},"FORMULA")," operator to create a new property that takes a date and returns its value as a string in the YYYY-MM-DD format. The expression contains ",Object(a.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/11/functions-formatting.html"},"to","_","char")," which is a standard PostgreSQL function."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),". New lines containing quantity and amount have been added to the orders."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=sample2",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to export all the lines from a given order as CSV file in which quantities and amounts are shortened to 3 and 2 characters respectively. In addition, the numbers must be split into triads."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"We create the toString property that takes two parameters (numeric value and format) and returns a value of the ",Object(a.b)("strong",{parentName:"p"},"TEXT")," type. When exporting, we pass the required format as the second parameter."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 2"),"."),Object(a.b)("p",null,"We need to add a column that will be marked when the given order number contains only digits."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"Since single quotes are used in the formula, make sure to ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escape_character"},"escape")," them with a backslash ",Object(a.b)("strong",{parentName:"p"},"\\","\\"),"."),Object(a.b)("p",null,"Note that the native ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," type allows only 2 values: ",Object(a.b)("strong",{parentName:"p"},"TRUE")," and ",Object(a.b)("strong",{parentName:"p"},"NULL"),". Therefore, when composing a logical expression, make sure to convert its negative value to ",Object(a.b)("strong",{parentName:"p"},"NULL"),". In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword ",Object(a.b)("strong",{parentName:"p"},"FORMULA")," must be followed by the corresponding marker."),Object(a.b)("p",null,"At the database level, the ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," type is stored as numeric value (1 or null), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error)."),Object(a.b)("p",null,"Keep in mind that if any property composed by the ",Object(a.b)("strong",{parentName:"p"},"FORMULA")," operator receives ",Object(a.b)("strong",{parentName:"p"},"NULL")," as argument, then the overall result will always be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."))}u.isMDXComponent=!0}}]);