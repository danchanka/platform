(window.webpackJsonp=window.webpackJsonp||[]).push([[648,441],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=n(0),c=n.n(a),s=n(749),l=n(752),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],i=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:m};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},720:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(749)),c=n(57),s={title:"Instruction=>"},l={unversionedId:"Instruction=_",id:"version-v4/Instruction=_",isDocsHomePage:!1,title:"Instruction=>",description:"The => instruction\xa0creates a\xa0consequence.",source:"@site/versioned_docs/version-v4/Instruction=_.md",slug:"/Instruction=_",permalink:"/platform/Instruction=_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Instruction=_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"CONSTRAINT instruction",permalink:"/platform/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/platform/CLASS_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"=>")," instruction\xa0creates a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"consequence"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"=>\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(a.b)("p",null,"When creating a consequence a ",Object(a.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraint")," will be created, which is pretty similar to the following instruction"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(a.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",Object(a.b)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",Object(a.b)("a",{parentName:"p",href:"/platform/Simple_event"},"a simple event"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),Object(a.b)("p",null,"\xa0",Object(a.b)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"leftPropertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property")," specifying the consequence premise."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(a.b)("p",null,"List of ",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#paramid-broken"},"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"rightExpr")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," whose value determines the consequence."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"resolveType")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Simple_event"},"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(a.b)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(a.b)("strong",{parentName:"li"},"NULL"),".**\xa0**"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",Object(a.b)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",Object(a.b)("strong",{parentName:"li"},"NULL"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(a.b)("strong",{parentName:"li"},"LEFT")," and ",Object(a.b)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"eventClause")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event description block"),". Describes an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Events"},"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=means",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,s(s({ref:t},i),{},{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(3),o=n(0),a=n.n(o),c=n(753),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,p=t[c],d=n[c][a];if("string"==typeof d?(p=c>0?p:["plain"],i=d):(p=b(p,d.type),d.alias&&(p=b(p,d.alias)),i=d.content),"string"==typeof i){var y=i.split(u),f=y.length;s.push({types:p,content:y[0]});for(var h=1;h<f;h++)m(s),l.push(s=[]),s.push({types:p,content:y[h]})}else c++,t.push(p),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return m(s),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(751),g=n.n(h),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=n(755),j=n(750);var k=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(v.a)(),n=e.theme||O,r=e.darkTheme||n;return t?r:n},N=n(754),T=n(58),E=n.n(T);const x=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},S=/(?:title=")(.*)(?:")/;function w({children:e,className:t,metastring:n}){const{prism:s}=Object(j.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,m]=Object(o.useState)(!1);Object(o.useEffect)((()=>{m(!0)}),[]);const b=Object(o.useRef)(null);let d=[],y="";const h=k(),O=Array.isArray(e)?e.join(""):e;if(n&&x.test(n)){const e=n.match(x)[1];d=g()(e).filter((e=>e>0))}n&&S.test(n)&&(y=n.match(S)[1]);let v=t&&t.replace(/language-/,"");!v&&s.defaultLanguage&&(v=s.defaultLanguage);let T=O.replace(/\n$/,"");if(0===d.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(v),n=O.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const a=o+1,c=n[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":r=a;break;case"highlight-end":e+=`${r}-${a-1},`}n.splice(o,1)}else o+=1}d=g()(e),T=n.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(T),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(r.a)({},l,{key:String(u),theme:h,code:T,language:v}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:s})=>a.a.createElement("div",{className:E.a.codeBlockContainer},y&&a.a.createElement("div",{style:t,className:E.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(c.a)(E.a.codeBlockContent,v)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,E.a.codeBlock,"thin-scrollbar",{[E.a.codeBlockWithTitle]:y})},a.a.createElement("div",{className:E.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return d.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:b,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(E.a.copyButton),onClick:w},i?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);