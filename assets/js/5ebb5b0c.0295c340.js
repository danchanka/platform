(window.webpackJsonp=window.webpackJsonp||[]).push([[264,440],{338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(747)),s=r(57),c={title:"Data export (EXPORT)"},l={unversionedId:"Data_export_EXPORT_",id:"version-v4/Data_export_EXPORT_",isDocsHomePage:!1,title:"Data export (EXPORT)",description:"The data\xa0export\xa0operator creates an\xa0action that reads values of the specified properties for all object collections where the value of the specified property (condition) is not NULL, and then saves these values to a file in a specified format.",source:"@site/versioned_docs/version-v4/Data_export_EXPORT_.md",slug:"/Data_export_EXPORT_",permalink:"/platform/Data_export_EXPORT_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Data_export_EXPORT_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Data import (IMPORT)",permalink:"/platform/Data_import_IMPORT_"},next:{title:"Send mail (EMAIL)",permalink:"/platform/Send_mail_EMAIL_"}},i=[{value:"General case",id:"general-case",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"data\xa0export"),"\xa0operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that reads values of the specified properties for all object collections where the value of the specified property (",Object(a.b)("em",{parentName:"p"},"condition"),") is not ",Object(a.b)("strong",{parentName:"p"},"NULL"),", and then saves these values to a file in a specified ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view"},"format"),".\xa0"),Object(a.b)("p",null,"The condition is optional in this operator and, if not defined, it is considered equal to the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Logical_operators_AND_OR_NOT_XOR_"},"disjunction")," of all exported properties (i.e., at least one of the properties must be non-",Object(a.b)("strong",{parentName:"p"},"NULL"),").\xa0"),Object(a.b)("p",null,"Similar to the other\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations"},"set operations"),", the condition must be such that the operation is\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations"},"correct"),"."),Object(a.b)("h3",{id:"general-case"},"General case"),Object(a.b)("p",null,"It should be noted that data export is a special case of (syntactic sugar for) ",Object(a.b)("a",{parentName:"p",href:"/platform/In_a_structured_view_EXPORT_IMPORT_"},"form export"),", in which the exported form is created automatically, named ",Object(a.b)("strong",{parentName:"p"},"export")," and consists of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"one\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"object group"),"\xa0named\xa0",Object(a.b)("strong",{parentName:"li"},"value")," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."),Object(a.b)("li",{parentName:"ul"},"exported properties. The ",Object(a.b)("a",{parentName:"li",href:"/platform/Groups_of_properties_and_actions#builtin"},"built-in"),"\xa0",Object(a.b)("strong",{parentName:"li"},"System.private"),"\xa0group is used as the\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Form_structure#propertygroup-broken"},"property group"),"\xa0for the created properties on the form,\xa0and the created object group is used as the\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Form_structure#drawgroup-broken"},"display group"),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name\xa0",Object(a.b)("strong",{parentName:"li"},"value"),"."),Object(a.b)("li",{parentName:"ul"},"a filter equal to the defined condition."),Object(a.b)("li",{parentName:"ul"},"defined orders.")),Object(a.b)("p",null,"Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view#value"},"processing\xa0",Object(a.b)("strong",{parentName:"a"},"value")),",\xa0etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare an action that exports data, use the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/EXPORT_operator"},Object(a.b)("strong",{parentName:"a"},"EXPORT")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=exportplain",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return d})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),a=r(0),s=r.n(a),c=r(747),l=r(750),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],d=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],i=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(f,c(c({ref:t},i),{},{components:r})):o.a.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},749:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),o=r(0),a=r.n(o),s=r(751),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:r(23).a,theme:c};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},f=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function b(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?f(e.theme,e.language):void 0;return t.themeDict=r})),i(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),i(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var s=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),i(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,s=p({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s})),i(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,s=0,c=[],l=[c];s>-1;){for(;(a=n[s]++)<o[s];){var i=void 0,p=t[s],f=r[s][a];if("string"==typeof f?(p=s>0?p:["plain"],i=f):(p=m(p,f.type),f.alias&&(p=m(p,f.alias)),i=f.content),"string"==typeof i){var b=i.split(u),h=b.length;c.push({types:p,content:b[0]});for(var y=1;y<h;y++)d(c),l.push(c=[]),c.push({types:p,content:b[y]})}else s++,t.push(p),r.push(i),n.push(0),o.push(i.length)}s--,t.pop(),r.pop(),n.pop(),o.pop()}return d(c),l}(void 0!==s?this.tokenize(t,n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=r(749),g=r.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=r(753),j=r(748);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),r=e.theme||v,n=e.darkTheme||r;return t?n:r},x=r(752),N=r(58),T=r.n(N);const _=/{([\d,-]+)}/,E=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},P=/(?:title=")(.*)(?:")/;function w({children:e,className:t,metastring:r}){const{prism:c}=Object(j.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,d]=Object(o.useState)(!1);Object(o.useEffect)((()=>{d(!0)}),[]);const m=Object(o.useRef)(null);let f=[],b="";const y=k(),v=Array.isArray(e)?e.join(""):e;if(r&&_.test(r)){const e=r.match(_)[1];f=g()(e).filter((e=>e>0))}r&&P.test(r)&&(b=r.match(P)[1]);let O=t&&t.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);let N=v.replace(/\n$/,"");if(0===f.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"]);case"jsx":case"tsx":return E(["js","jsBlock","jsx"]);case"html":return E(["js","jsBlock","html"]);case"python":case"py":return E(["python"]);default:return E()}})(O),r=v.replace(/\n$/,"").split("\n");let n;for(let o=0;o<r.length;){const a=o+1,s=r[o].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}r.splice(o,1)}else o+=1}f=g()(e),N=r.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(N),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(n.a)({},l,{key:String(u),theme:y,code:N,language:O}),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:c})=>a.a.createElement("div",{className:T.a.codeBlockContainer},b&&a.a.createElement("div",{style:t,className:T.a.codeBlockTitle},b),a.a.createElement("div",{className:Object(s.a)(T.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:b})},a.a.createElement("div",{className:T.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return f.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},r),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(T.a.copyButton),onClick:w},i?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);