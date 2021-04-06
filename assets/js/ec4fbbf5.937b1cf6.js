(window.webpackJsonp=window.webpackJsonp||[]).push([[620,440],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return y}));var o=n(3),r=n(7),a=n(0),s=n.n(a),i=n(747),l=n(750),c={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},692:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(747)),s=n(57),i={title:"Property extension"},l={unversionedId:"Property_extension",id:"version-v4/Property_extension",isDocsHomePage:!1,title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes\xa0or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/versioned_docs/version-v4/Property_extension.md",slug:"/Property_extension",permalink:"/platform/Property_extension",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Property_extension.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Class extension",permalink:"/platform/Class_extension"},next:{title:"Action extension",permalink:"/platform/Action_extension"}},c=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," ",Object(a.b)("a",{parentName:"p",href:"/platform/Extensions"},"extension")," technique allows the developer to declare an ",Object(a.b)("em",{parentName:"p"},"abstract action")," in one ",Object(a.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),'\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection operator"),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",Object(a.b)("a",{parentName:"p",href:"/platform/Classes"},"classes"),"\xa0or ",Object(a.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."),Object(a.b)("p",null,"For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),Object(a.b)("p",null,"Extension of properties allows you to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."),Object(a.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.')),Object(a.b)("h3",{id:"poly"},"Polymorphic form"),Object(a.b)("p",null,"Just as ",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#poly"},"for a selection operator"),", for an abstract property there is a ",Object(a.b)("em",{parentName:"p"},"polymorphic form")," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator,\xa0either belonging to the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"signature\xa0"),"of this property or the property itself can be a condition."),Object(a.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(a.b)("p",null,"As\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"for a selection operator"),", you can specify that all conditions of an abstract property must be\xa0",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"The key instructions that implement the extension procedure are the ",Object(a.b)("a",{parentName:"p",href:"/platform/ABSTRACT_operator"},Object(a.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",for declaring an abstract action, and the ",Object(a.b)("a",{parentName:"p",href:"/platform/Instruction_+="},Object(a.b)("strong",{parentName:"a"},"+=")," instruction"),", for defining its implementation."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=abstract",mdxType:"CodeSample"}),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendproperty",mdxType:"CodeSample"}))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(y,i(i({ref:t},c),{},{components:n})):r.a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n(3),r=n(0),a=n.n(r),s=n(751),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:i};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=o[s]++)<r[s];){var c=void 0,p=t[s],y=n[s][a];if("string"==typeof y?(p=s>0?p:["plain"],c=y):(p=m(p,y.type),y.alias&&(p=m(p,y.alias)),c=y.content),"string"==typeof c){var f=c.split(u),h=f.length;i.push({types:p,content:f[0]});for(var b=1;b<h;b++)d(i),l.push(i=[]),i.push({types:p,content:f[b]})}else s++,t.push(p),n.push(c),o.push(0),r.push(c.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return d(i),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var b=n(749),g=n.n(b),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(748);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(752),C=n(58),E=n.n(C);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},w=/(?:title=")(.*)(?:")/;function _({children:e,className:t,metastring:n}){const{prism:i}=Object(O.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const m=Object(r.useRef)(null);let y=[],f="";const b=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];y=g()(e).filter((e=>e>0))}n&&w.test(n)&&(f=n.match(w)[1]);let j=t&&t.replace(/language-/,"");!j&&i.defaultLanguage&&(j=i.defaultLanguage);let C=v.replace(/\n$/,"");if(0===y.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,s=n[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}y=g()(e),C=n.join("\n")}const _=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(o.a)({},l,{key:String(u),theme:b,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:i})=>a.a.createElement("div",{className:E.a.codeBlockContainer},f&&a.a.createElement("div",{style:t,className:E.a.codeBlockTitle},f),a.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,E.a.codeBlock,"thin-scrollbar",{[E.a.codeBlockWithTitle]:f})},a.a.createElement("div",{className:E.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:_},c?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);