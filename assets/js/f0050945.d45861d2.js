(window.webpackJsonp=window.webpackJsonp||[]).push([[631,441],{57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return m})),r.d(t,"default",(function(){return d}));var o=r(3),n=r(7),a=r(0),c=r.n(a),s=r(749),l=r(752),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,r=e.lines,o=Object(a.useState)(""),n=o[0],i=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),n?r?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:m};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},703:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(749)),c=r(57),s={title:"Object group operator"},l={unversionedId:"Object_group_operator",id:"version-v4/Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/versioned_docs/version-v4/Object_group_operator.md",slug:"/Object_group_operator",permalink:"/platform/Object_group_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Object_group_operator.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"UNGROUP operator",permalink:"/platform/UNGROUP_operator"},next:{title:"Type conversion operator",permalink:"/platform/Type_conversion_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Form_structure"},"Object group")," operators are used for creating ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," working with the ",Object(a.b)("a",{parentName:"p",href:"/platform/Object_group_operations"},"current state")," of the object group on the ",Object(a.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FILTER")," operator creates a property which value is\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",Object(a.b)("a",{parentName:"p",href:"/platform/Form_structure#filters"},"filtering")," conditions on the form, otherwise the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"VIEW"),"\xa0operator creates a property which value is ",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",Object(a.b)("strong",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/PARTITION_operator"},"PARTITION")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/FOR_operator"},"FOR")),", etc."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupObjectId")),Object(a.b)("p",null,"Global ",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#groupobjectid-broken"},"object group ID"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=groupobject",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return r?n.a.createElement(d,s(s({ref:t},i),{},{components:r})):n.a.createElement(d,s({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},751:function(e,t){function r(e){let t,r=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))r.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,n,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==n&&".."!==n&&"\u2025"!==n||(a+=e);for(let t=o;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var o=r(3),n=r(0),a=r.n(n),c=r(753),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:r(23).a,theme:s};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},d=function(e,t){var r=e.plain,o=Object.create(null),n=e.styles.reduce((function(e,r){var o=r.languages,n=r.style;return o&&!o.includes(t)||r.types.forEach((function(t){var r=p({},e[t],n);e[t]=r})),e}),o);return n.root=r,n.plain=p({},r,{backgroundColor:null}),n};function y(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(r[o]=e[o]);return r}var f=function(e){function t(){for(var t=this,r=[],o=arguments.length;o--;)r[o]=arguments[o];e.apply(this,r),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?d(e.theme,e.language):void 0;return t.themeDict=r})),i(this,"getLineProps",(function(e){var r=e.key,o=e.className,n=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==n&&(a.style=void 0!==a.style?p({},a.style,n):n),void 0!==r&&(a.key=r),o&&(a.className+=" "+o),a})),i(this,"getStyleForToken",(function(e){var r=e.types,o=e.empty,n=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===n&&"plain"===r[0])return o?{display:"inline-block"}:void 0;if(1===n&&!o)return a[r[0]];var c=o?{display:"inline-block"}:{},s=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var r=e.key,o=e.className,n=e.style,a=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==n&&(c.style=void 0!==c.style?p({},c.style,n):n),void 0!==r&&(c.key=r),o&&(c.className+=" "+o),c})),i(this,"tokenize",(function(e,t,r,o){var n={code:t,grammar:r,language:o,tokens:[]};e.hooks.run("before-tokenize",n);var a=n.tokens=e.tokenize(n.code,n.grammar,n.language);return e.hooks.run("after-tokenize",n),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,o=e.code,n=e.children,a=this.getThemeDict(this.props),c=t.languages[r];return n({tokens:function(e){for(var t=[[]],r=[e],o=[0],n=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=o[c]++)<n[c];){var i=void 0,p=t[c],d=r[c][a];if("string"==typeof d?(p=c>0?p:["plain"],i=d):(p=b(p,d.type),d.alias&&(p=b(p,d.alias)),i=d.content),"string"==typeof i){var y=i.split(u),f=y.length;s.push({types:p,content:y[0]});for(var h=1;h<f;h++)m(s),l.push(s=[]),s.push({types:p,content:y[h]})}else c++,t.push(p),r.push(i),o.push(0),n.push(i.length)}c--,t.pop(),r.pop(),o.pop(),n.pop()}return m(s),l}(void 0!==c?this.tokenize(t,o,c,r):[o]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var h=r(751),g=r.n(h),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=r(755),O=r(750);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(v.a)(),r=e.theme||j,o=e.darkTheme||r;return t?o:r},N=r(754),T=r(58),x=r.n(T);const w=/{([\d,-]+)}/,E=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},C=/(?:title=")(.*)(?:")/;function P({children:e,className:t,metastring:r}){const{prism:s}=Object(O.useThemeConfig)(),[i,p]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1);Object(n.useEffect)((()=>{m(!0)}),[]);const b=Object(n.useRef)(null);let d=[],y="";const h=k(),j=Array.isArray(e)?e.join(""):e;if(r&&w.test(r)){const e=r.match(w)[1];d=g()(e).filter((e=>e>0))}r&&C.test(r)&&(y=r.match(C)[1]);let v=t&&t.replace(/language-/,"");!v&&s.defaultLanguage&&(v=s.defaultLanguage);let T=j.replace(/\n$/,"");if(0===d.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"]);case"jsx":case"tsx":return E(["js","jsBlock","jsx"]);case"html":return E(["js","jsBlock","html"]);case"python":case"py":return E(["python"]);default:return E()}})(v),r=j.replace(/\n$/,"").split("\n");let o;for(let n=0;n<r.length;){const a=n+1,c=r[n].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}r.splice(n,1)}else n+=1}d=g()(e),T=r.join("\n")}const P=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const n=document.getSelection();let a=!1;n.rangeCount>0&&(a=n.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),a&&(n.removeAllRanges(),n.addRange(a)),o&&o.focus()}(T),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(u),theme:h,code:T,language:v}),(({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:s})=>a.a.createElement("div",{className:x.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:x.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(c.a)(x.a.codeBlockContent,v)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:x.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=n({line:e,key:t});return d.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},r),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:b,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(x.a.copyButton),onClick:P},i?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);