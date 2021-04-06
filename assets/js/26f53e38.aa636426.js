(window.webpackJsonp=window.webpackJsonp||[]).push([[102,441],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(749)),s=n(57),i={title:"Recursion (RECURSION)"},l={unversionedId:"Recursion_RECURSION_",id:"version-v4/Recursion_RECURSION_",isDocsHomePage:!1,title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/versioned_docs/version-v4/Recursion_RECURSION_.md",slug:"/Recursion_RECURSION_",permalink:"/platform/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Recursion_RECURSION_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/platform/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"Distribution (UNGROUP)",permalink:"/platform/Distribution_UNGROUP_"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"recursion")," operator is an operator that creates a ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," which sequentially performs two operations:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN), where initial is an ",Object(a.b)("em",{parentName:"li"},"initial")," property."),Object(a.b)("li",{parentName:"ol"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN), where step is a ",Object(a.b)("em",{parentName:"li"},"step")," property."))),Object(a.b)("li",{parentName:"ol"},"For all values of the obtained property, it calculates the given\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Set_operations#func"},"aggregate function"),"\xa0grouping by all its parameters except the operation number.")),Object(a.b)("p",null,"Currently, only two types of aggregate functions are supported for the recursion operator: ",Object(a.b)("strong",{parentName:"p"},"SUM")," and\xa0",Object(a.b)("strong",{parentName:"p"},"OR"),". The latter is used in the case when the initial value and step are of class ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN."),"\xa0",Object(a.b)("strong",{parentName:"p"},"SUM")," is used in all other cases."),Object(a.b)("p",null,"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES YES")," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",Object(a.b)("strong",{parentName:"li"},"BOOLEAN"),"."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES NO")," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES IMPOSSIBLE")," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated.")),Object(a.b)("p",null,"When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",Object(a.b)("strong",{parentName:"p"},"NULL"),". (This refers primarily to a ",Object(a.b)("strong",{parentName:"p"},"CYCLES IMPOSSIBLE")," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare a property that implements recursion, use the ",Object(a.b)("a",{parentName:"p",href:"/platform/RECURSION_operator"},Object(a.b)("strong",{parentName:"a"},"RECURSION")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=n(0),s=n.n(a),i=n(749),l=n(752),c={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],c=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),o?n?Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,i(i({ref:t},c),{},{components:n})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(3),o=n(0),a=n.n(o),s=n(753),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:i};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),c(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=r[s]++)<o[s];){var c=void 0,p=t[s],b=n[s][a];if("string"==typeof b?(p=s>0?p:["plain"],c=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),c=b.content),"string"==typeof c){var y=c.split(u),h=y.length;i.push({types:p,content:y[0]});for(var f=1;f<h;f++)m(i),l.push(i=[]),i.push({types:p,content:y[f]})}else s++,t.push(p),n.push(c),r.push(0),o.push(c.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return m(i),l}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(751),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(755),j=n(750);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||v,r=e.darkTheme||n;return t?r:n},N=n(754),C=n(58),w=n.n(C);const S=/{([\d,-]+)}/,E=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},T=/(?:title=")(.*)(?:")/;function x({children:e,className:t,metastring:n}){const{prism:i}=Object(j.useThemeConfig)(),[c,p]=Object(o.useState)(!1),[u,m]=Object(o.useState)(!1);Object(o.useEffect)((()=>{m(!0)}),[]);const d=Object(o.useRef)(null);let b=[],y="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];b=g()(e).filter((e=>e>0))}n&&T.test(n)&&(y=n.match(T)[1]);let O=t&&t.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);let C=v.replace(/\n$/,"");if(0===b.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"]);case"jsx":case"tsx":return E(["js","jsBlock","jsx"]);case"html":return E(["js","jsBlock","html"]);case"python":case"py":return E(["python"]);default:return E()}})(O),n=v.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const a=o+1,s=n[o].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":r=a;break;case"highlight-end":e+=`${r}-${a-1},`}n.splice(o,1)}else o+=1}b=g()(e),C=n.join("\n")}const x=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(r.a)({},l,{key:String(u),theme:f,code:C,language:O}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:i})=>a.a.createElement("div",{className:w.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:w.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(s.a)(w.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:w.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:d,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(w.a.copyButton),onClick:x},c?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);