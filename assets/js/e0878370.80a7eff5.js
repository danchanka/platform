(window.webpackJsonp=window.webpackJsonp||[]).push([[602,462],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return y}));var o=n(3),r=n(7),a=n(0),s=n.n(a),c=n(751),l=n(756),i={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],i=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),r?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},672:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(751)),s=n(57),c={title:"How-to: CHANGE"},l={unversionedId:"How-to_CHANGE",id:"version-1.0.0/How-to_CHANGE",isDocsHomePage:!1,title:"How-to: CHANGE",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_CHANGE.md",slug:"/How-to_CHANGE",permalink:"/platform/docs/How-to_CHANGE",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_CHANGE.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Actions: Overview",permalink:"/platform/docs/How-to_Actions"},next:{title:"How-to: EXEC",permalink:"/platform/docs/How-to_EXEC"}},i=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],u={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a sales order for the books."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create an action to place the order on 30 days from today and apply a 5% discount."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=solution1",mdxType:"CodeSample"}),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", except that a specification was added to the order. The current price for each book is also defined."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=sample2",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create an action to populate all the lines in the order with current prices for the corresponding books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"Make sure to use WHERE in the action. Otherwise, the prices will be set for all lines of all orders in the database."))}p.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(y,c(c({ref:t},i),{},{components:n})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r},755:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),r=n(0),a=n.n(r),s=n(757),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var b=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?u({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=u({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,c=[],l=[c];s>-1;){for(;(a=o[s]++)<r[s];){var i=void 0,u=t[s],y=n[s][a];if("string"==typeof y?(u=s>0?u:["plain"],i=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),i=y.content),"string"==typeof i){var f=i.split(p),b=f.length;c.push({types:u,content:f[0]});for(var h=1;h<b;h++)d(c),l.push(c=[]),c.push({types:u,content:f[h]})}else s++,t.push(u),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return d(c),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var h=n(755),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(753),j=n(752),O=function(){var e=Object(j.useThemeConfig)().prism,t=Object(k.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},C=n(758),x=n(58),E=n.n(x),w=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},S=/(?:title=")(.*)(?:")/;function N(e){var t=e.children,n=e.className,c=e.metastring,i=Object(j.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],m=Object(r.useState)(!1),y=m[0],f=m[1];Object(r.useEffect)((function(){f(!0)}),[]);var h=Object(r.useRef)(null),v=[],k="",x=O(),N=Array.isArray(t)?t.join(""):t;if(c&&w.test(c)){var P=c.match(w)[1];v=g()(P).filter((function(e){return e>0}))}c&&S.test(c)&&(k=c.match(S)[1]);var A=n&&n.replace(/language-/,"");!A&&i.defaultLanguage&&(A=i.defaultLanguage);var H=N.replace(/\n$/,"");if(0===v.length&&void 0!==A){for(var D,B="",_=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(A),L=N.replace(/\n$/,"").split("\n"),G=0;G<L.length;){var I=G+1,M=L[G].match(_);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=I+",";break;case"highlight-start":D=I;break;case"highlight-end":B+=D+"-"+(I-1)+","}L.splice(G,1)}else G+=1}v=g()(B),H=L.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(H),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(b,Object(o.a)({},l,{key:String(y),theme:x,code:H,language:A}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.a.createElement("div",{className:E.a.codeBlockContainer},k&&a.a.createElement("div",{style:r,className:E.a.codeBlockTitle},k),a.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,A)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=k,t))},a.a.createElement("div",{className:E.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:R},p?a.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);