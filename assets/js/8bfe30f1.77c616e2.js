(window.webpackJsonp=window.webpackJsonp||[]).push([[372,440],{447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(747)),l=n(57),s={title:"How-to: Physical model"},c={unversionedId:"How-to_Physical_model",id:"version-v4/How-to_Physical_model",isDocsHomePage:!1,title:"How-to: Physical model",description:"By default, each class in the database creates a separate table that stores all those properties whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.",source:"@site/versioned_docs/version-v4/How-to_Physical_model.md",slug:"/How-to_Physical_model",permalink:"/platform/How-to_Physical_model",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Physical_model.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Metaprogramming",permalink:"/platform/How-to_Metaprogramming"},next:{title:"How-to: Internationalization",permalink:"/platform/How-to_Internationalization"}},i=[],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default, each class in the database creates a separate table that stores all those ",Object(r.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys."),Object(r.b)("p",null,"To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"With a standard ",Object(r.b)("a",{parentName:"p",href:"/platform/Tables#name"},"field naming policy"),", a <",Object(r.b)("a",{parentName:"p",href:"/platform/Naming"},"Namespace"),">",Object(r.b)("strong",{parentName:"p"},"_","animal")," table will be created within the database, with a key ",Object(r.b)("strong",{parentName:"p"},"key0")," with the internal ID of an animal and a\xa0<",Object(r.b)("a",{parentName:"p",href:"/platform/Naming"},"Namespace"),">",Object(r.b)("strong",{parentName:"p"},"_","name","_","Animal")," field storing its name."),Object(r.b)("p",null,"For properties with multiple parameters, we can create a table as follows:"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample2",mdxType:"CodeSample"}),Object(r.b)("p",null,"In this case we create a <Namespace",">",Object(r.b)("strong",{parentName:"p"},"_","animalCountry")," table with two keys: ",Object(r.b)("strong",{parentName:"p"},"key0")," for the animal and ",Object(r.b)("strong",{parentName:"p"},"key1")," for the country. It will also have a <Namespace",">",Object(r.b)("strong",{parentName:"p"},"_","population","_","Animal","_","Country")," field."),Object(r.b)("p",null,"All other properties with signature (",Object(r.b)("strong",{parentName:"p"},"Animal"),", ",Object(r.b)("strong",{parentName:"p"},"Country"),") will also be placed in this table. If some property needs to be placed in a separate table, then the following technique can be used:"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample3",mdxType:"CodeSample"}),Object(r.b)("p",null,"This table will only store properties for which it is explicitly specified. All others will go into the first table declared with the necessary signature."),Object(r.b)("p",null,"Computed properties that need to be stored ",Object(r.b)("a",{parentName:"p",href:"/platform/Materializations"},"permanently")," in the table need to be marked with the keyword ",Object(r.b)("strong",{parentName:"p"},"MATERIALIZED")," :"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample4",mdxType:"CodeSample"}),Object(r.b)("p",null,"The table in which this field will be stored will be selected according to the same algorithm as for ",Object(r.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data properties"),". In this case, it will go into the table <Namespace",">",Object(r.b)("strong",{parentName:"p"},"_","animal"),"."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=n(0),l=n.n(r),s=n(747),c=n(750),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],i=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(b,s(s({ref:t},i),{},{components:n})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(3),o=n(0),r=n.n(o),l=n(751),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?p({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=p({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,s=[],c=[s];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,p=t[l],b=n[l][r];if("string"==typeof b?(p=l>0?p:["plain"],i=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),i=b.content),"string"==typeof i){var y=i.split(u),h=y.length;s.push({types:p,content:y[0]});for(var f=1;f<h;f++)m(s),c.push(s=[]),s.push({types:p,content:y[f]})}else l++,t.push(p),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return m(s),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(749),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(748);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,a=e.darkTheme||n;return t?a:n},w=n(752),C=n(58),N=n.n(C);const T=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},P=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:n}){const{prism:s}=Object(O.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,m]=Object(o.useState)(!1);Object(o.useEffect)((()=>{m(!0)}),[]);const d=Object(o.useRef)(null);let b=[],y="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];b=g()(e).filter((e=>e>0))}n&&P.test(n)&&(y=n.match(P)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let C=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(j),n=v.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,l=n[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}b=g()(e),C=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(h,Object(a.a)({},c,{key:String(u),theme:f,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:s})=>r.a.createElement("div",{className:N.a.codeBlockContainer},y&&r.a.createElement("div",{style:t,className:N.a.codeBlockTitle},y),r.a.createElement("div",{className:Object(l.a)(N.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,N.a.codeBlock,"thin-scrollbar",{[N.a.codeBlockWithTitle]:y})},r.a.createElement("div",{className:N.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(N.a.copyButton),onClick:S},i?r.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);