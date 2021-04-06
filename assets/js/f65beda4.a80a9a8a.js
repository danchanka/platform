(window.webpackJsonp=window.webpackJsonp||[]).push([[650,441],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return y}));var o=n(3),r=n(7),a=n(0),s=n.n(a),c=n(749),l=n(752),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],i=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),r?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},722:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(749)),s=n(57),c={title:"How-to: Property extension"},l={unversionedId:"How-to_Property_extension",id:"version-v4/How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/versioned_docs/version-v4/How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/platform/How-to_Property_extension",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Property_extension.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Class extension",permalink:"/platform/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/platform/How-to_Action_extension"}},i=[],p={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(a.b)("p",null,"Let's create an abstract class ",Object(a.b)("strong",{parentName:"p"},"Shape")," with an abstract property ",Object(a.b)("strong",{parentName:"p"},"square"),":"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=shape",mdxType:"CodeSample"}),Object(a.b)("p",null,"Now, let's create classes ",Object(a.b)("strong",{parentName:"p"},"Rectangle\xa0"),"and ",Object(a.b)("strong",{parentName:"p"},"Circle")," inherited from ",Object(a.b)("strong",{parentName:"p"},"Shape"),":"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=concrete",mdxType:"CodeSample"}),Object(a.b)("p",null,"Define the implementation of the abstract property ",Object(a.b)("strong",{parentName:"p"},"square\xa0")," for the created classes:"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendsimple",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(a.b)("strong",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendover",mdxType:"CodeSample"}),Object(a.b)("p",null,"If the ",Object(a.b)("strong",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(a.b)("strong",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(a.b)("strong",{parentName:"p"},"MyShape")," module."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyMyShape",mdxType:"CodeSample"}),Object(a.b)("p",null,"Note that you can use any other expressions instead of the ",Object(a.b)("a",{parentName:"p",href:"/platform/OVERRIDE_operator"},"OVERRIDE operator"),". In particular, ",Object(a.b)("a",{parentName:"p",href:"/platform/Arithmetic_operators_+_-_..._"},"(+) and (-)")," may be the most frequently used operators."))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(y,c(c({ref:t},i),{},{components:n})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),r=n(0),a=n.n(r),s=n(753),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=p({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,c=[],l=[c];s>-1;){for(;(a=o[s]++)<r[s];){var i=void 0,p=t[s],y=n[s][a];if("string"==typeof y?(p=s>0?p:["plain"],i=y):(p=d(p,y.type),y.alias&&(p=d(p,y.alias)),i=y.content),"string"==typeof i){var b=i.split(u),f=b.length;c.push({types:p,content:b[0]});for(var h=1;h<f;h++)m(c),l.push(c=[]),c.push({types:p,content:b[h]})}else s++,t.push(p),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return m(c),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var h=n(751),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(755),O=n(750);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(754),C=n(58),w=n.n(C);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},P=/(?:title=")(.*)(?:")/;function N({children:e,className:t,metastring:n}){const{prism:c}=Object(O.useThemeConfig)(),[i,p]=Object(r.useState)(!1),[u,m]=Object(r.useState)(!1);Object(r.useEffect)((()=>{m(!0)}),[]);const d=Object(r.useRef)(null);let y=[],b="";const h=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];y=g()(e).filter((e=>e>0))}n&&P.test(n)&&(b=n.match(P)[1]);let j=t&&t.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);let C=v.replace(/\n$/,"");if(0===y.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,s=n[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}y=g()(e),C=n.join("\n")}const N=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(u),theme:h,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>a.a.createElement("div",{className:w.a.codeBlockContainer},b&&a.a.createElement("div",{style:t,className:w.a.codeBlockTitle},b),a.a.createElement("div",{className:Object(s.a)(w.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:b})},a.a.createElement("div",{className:w.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t}))))))})))),a.a.createElement("button",{ref:d,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(w.a.copyButton),onClick:N},i?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);