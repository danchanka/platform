(window.webpackJsonp=window.webpackJsonp||[]).push([[33,441],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(749)),o=n(57),c={title:"String operators (+, CONCAT, SUBSTRING)"},s={unversionedId:"String_operators_+_CONCAT_SUBSTRING_",id:"version-v4/String_operators_+_CONCAT_SUBSTRING_",isDocsHomePage:!1,title:"String operators (+, CONCAT, SUBSTRING)",description:"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:",source:"@site/versioned_docs/version-v4/String_operators_+_CONCAT_SUBSTRING_.md",slug:"/String_operators_+_CONCAT_SUBSTRING_",permalink:"/platform/String_operators_+_CONCAT_SUBSTRING_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/String_operators_+_CONCAT_SUBSTRING_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Extremum (MAX, MIN)",permalink:"/platform/Extremum_MAX_MIN_"},next:{title:"Structure operations (STRUCT, \\[\\])",permalink:"/platform/Structure_operations_STRUCT_"}},i=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Operator",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Name",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Description",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Example",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Result",Object(l.b)("br",null)),Object(l.b)("br",null))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"+, ",Object(l.b)("strong",null,Object(l.b)("a",{parentName:"td",href:"/platform/CONCAT_operator"},"CONCAT")))),Object(l.b)("td",{parentName:"tr",align:null},"Concatenation"),Object(l.b)("td",{parentName:"tr",align:null},"Takes two operands and returns a string obtained by concatenating the strings specified in the operands"),Object(l.b)("td",{parentName:"tr",align:null},"'a' + 'b'"),Object(l.b)("td",{parentName:"tr",align:null},"'ab'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"SUBSTRING")),Object(l.b)("td",{parentName:"tr",align:null},"Substring"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Takes three operands and\xa0returns a substring obtained from the string specified in the first operand, starting with the character specified in the second operand, and having length specified in the third operand")),Object(l.b)("td",{parentName:"tr",align:null},"SUBSTRING('abc', 2, 2)"),Object(l.b)("td",{parentName:"tr",align:null},"'bc'")))),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"+")," and ",Object(l.b)("strong",{parentName:"p"},"SUBSTRING")," operators return ",Object(l.b)("strong",{parentName:"p"},"NULL")," if one of the operands is ",Object(l.b)("strong",{parentName:"p"},"NULL"),".\xa0The ",Object(l.b)("strong",{parentName:"p"},"CONCAT"),"\xa0operator treats\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),"\xa0value of the operand as an empty string (however, concatenation of two ",Object(l.b)("strong",{parentName:"p"},"NULL")," values still returns ",Object(l.b)("strong",{parentName:"p"},"NULL"),"). Also, in the ",Object(l.b)("strong",{parentName:"p"},"CONCAT")," operator you can optionally specify the third operand (",Object(l.b)("em",{parentName:"p"},"delimiter"),") which will be inserted if and only if both operands are not ",Object(l.b)("strong",{parentName:"p"},"NULL"),". For example, CONCAT ' ', 'John', 'Smith' = 'John Smith', but CONCAT ' ', 'John', NULL = 'John'."),Object(l.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(l.b)("p",null,"The result class is defined as:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operator"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"+"),", ",Object(l.b)("strong",null,"CONCAT")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("pre",null,Object(l.b)("code",null,"result = STRING","[p1.blankPadded AND p2.blankPadded, p1.caseInsensitive OR p2.caseInsensitive, p1.length + p2.length]")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"SUBSTRING(p, from, length)")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("pre",null,Object(l.b)("code",null,"result = STRING","[p.blankPadded, p.caseInsensitive, length]")))))),Object(l.b)("p",null,"where ",Object(l.b)("em",{parentName:"p"},"blankPadded"),",\xa0",Object(l.b)("em",{parentName:"p"},"caseInsensitive"),"\xa0and\xa0",Object(l.b)("em",{parentName:"p"},"length")," are determined similarly to the rules for construction of a common ancestor\xa0for two\xa0built-in classes (Strings family)."),Object(l.b)("p",null,"In the + operator, operands which classes are other than string are cast to strings in accordance with the following table:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Cast class"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("strong",null,"DATE"),", ",Object(l.b)("strong",null,"DATETIME"),", ",Object(l.b)("strong",null,"TIME"))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[25]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NUMERIC")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[p.length]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"LOGICAL")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[1]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"FILE")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TEXT"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/platform/User_classes"},"Object")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[10]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Other"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[8]"))))),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=concat",mdxType:"CodeSample"}))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),l=n(0),o=n.n(l),c=n(749),s=n(752),i={},b={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},p=[],u=function(e){var t=e.url,n=e.lines,r=Object(l.useState)(""),a=r[0],i=r[1];return Object(l.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),a?n?Object(c.b)(o.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(o.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:p,CodeSample:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(3),a=n(0),l=n.n(a),o=n(753),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=b({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=b({},n,{backgroundColor:null}),a};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var O=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=b({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?b({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=b({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?b({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=r[o]++)<a[o];){var i=void 0,b=t[o],m=n[o][l];if("string"==typeof m?(b=o>0?b:["plain"],i=m):(b=d(b,m.type),m.alias&&(b=d(b,m.alias)),i=m.content),"string"==typeof i){var g=i.split(p),O=g.length;c.push({types:b,content:g[0]});for(var h=1;h<O;h++)u(c),s.push(c=[]),c.push({types:b,content:g[h]})}else o++,t.push(b),n.push(i),r.push(0),a.push(i.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return u(c),s}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var h=n(751),y=n.n(h),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},f=n(755),N=n(750);var v=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(f.a)(),n=e.theme||j,r=e.darkTheme||n;return t?r:n},T=n(754),k=n(58),S=n.n(k);const C=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},_=/(?:title=")(.*)(?:")/;function x({children:e,className:t,metastring:n}){const{prism:c}=Object(N.useThemeConfig)(),[i,b]=Object(a.useState)(!1),[p,u]=Object(a.useState)(!1);Object(a.useEffect)((()=>{u(!0)}),[]);const d=Object(a.useRef)(null);let m=[],g="";const h=v(),j=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];m=y()(e).filter((e=>e>0))}n&&_.test(n)&&(g=n.match(_)[1]);let f=t&&t.replace(/language-/,"");!f&&c.defaultLanguage&&(f=c.defaultLanguage);let k=j.replace(/\n$/,"");if(0===m.length&&void 0!==f){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(f),n=j.replace(/\n$/,"").split("\n");let r;for(let a=0;a<n.length;){const l=a+1,o=n[a].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":r=l;break;case"highlight-end":e+=`${r}-${l-1},`}n.splice(a,1)}else a+=1}m=y()(e),k=n.join("\n")}const x=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus()}(k),b(!0),setTimeout((()=>b(!1)),2e3)};return l.a.createElement(O,Object(r.a)({},s,{key:String(p),theme:h,code:k,language:f}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:c})=>l.a.createElement("div",{className:S.a.codeBlockContainer},g&&l.a.createElement("div",{style:t,className:S.a.codeBlockTitle},g),l.a.createElement("div",{className:Object(o.a)(S.a.codeBlockContent,f)},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:g})},l.a.createElement("div",{className:S.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>l.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(o.a)(S.a.copyButton),onClick:x},i?l.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);