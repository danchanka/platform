(window.webpackJsonp=window.webpackJsonp||[]).push([[235,441],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),r=(n(0),n(749)),o=n(57),c={title:"User classes"},l={unversionedId:"User_classes",id:"version-v4/User_classes",isDocsHomePage:!1,title:"User classes",description:"Classes that a developer can create and the instances of which a user can create\xa0are called custom classes.",source:"@site/versioned_docs/version-v4/User_classes.md",slug:"/User_classes",permalink:"/platform/User_classes",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/User_classes.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Static objects",permalink:"/platform/Static_objects"},next:{title:"Aggregations",permalink:"/platform/Aggregations"}},i=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Abstract classes",id:"abstract",children:[]},{value:"Class change",id:"class-change",children:[]},{value:"Common ancestor",id:"commonparentclass",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/platform/Classes"},"Classes")," that a developer can create and the instances of which a user can create\xa0are called ",Object(r.b)("em",{parentName:"p"},"custom classes"),".\xa0"),Object(r.b)("h3",{id:"inheritance"},"Inheritance"),Object(r.b)("p",null,"When creating custom class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0you can explicitly specify that its ",Object(r.b)("a",{parentName:"p",href:"/platform/Classes"},"parent")," is class\xa0",Object(r.b)("strong",{parentName:"p"},"A."),"\xa0In this case, class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),"\xa0shall be called the\xa0",Object(r.b)("em",{parentName:"p"},"parent class\xa0"),"of class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"."),Object(r.b)("p",null,"A parent class of a custom class can only be another custom class. Inheriting from ",Object(r.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes")," is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the\xa0",Object(r.b)("strong",{parentName:"p"},"Object"),"\xa0class (located in the ",Object(r.b)("strong",{parentName:"p"},"System")," ",Object(r.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),"). Thus, the\xa0",Object(r.b)("strong",{parentName:"p"},"System.Object"),"\xa0class is the parent object of all custom classes."),Object(r.b)("p",null,"The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes.\xa0"),Object(r.b)("h3",{id:"abstract"},"Abstract classes"),Object(r.b)("p",null,"Some custom classes in the system can be\xa0",Object(r.b)("em",{parentName:"p"},"abstract.\xa0"),"The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called ",Object(r.b)("em",{parentName:"p"},"concrete"),"."),Object(r.b)("h3",{id:"class-change"},"Class change"),Object(r.b)("p",null,"The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract."),Object(r.b)("h3",{id:"commonparentclass"},"Common ancestor"),Object(r.b)("p",null,'As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).'),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To add a new custom class to the system, use the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/CLASS_instruction"},Object(r.b)("strong",{parentName:"a"},"CLASS")," instruction"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=class",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(7),r=n(0),o=n.n(r),c=n(749),l=n(752),i={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),s=a[0],i=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),s?n?Object(c.b)(o.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(o.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),p=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return n?s.a.createElement(b,c(c({ref:t},i),{},{components:n})):s.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<r;i++)o[i]=n[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,s,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(3),s=n(0),r=n.n(s),o=n(753),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,a=Object.create(null),s=e.styles.reduce((function(e,n){var a=n.languages,s=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],s);e[t]=n})),e}),a);return s.root=n,s.plain=p({},n,{backgroundColor:null}),s};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,s=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==s&&(r.style=void 0!==r.style?p({},r.style,s):s),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===s&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,s=e.style,r=e.token,o=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(o.style=void 0!==o.style?p({},o.style,s):s),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"tokenize",(function(e,t,n,a){var s={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,s=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],a=[0],s=[e.length],r=0,o=0,c=[],l=[c];o>-1;){for(;(r=a[o]++)<s[o];){var i=void 0,p=t[o],b=n[o][r];if("string"==typeof b?(p=o>0?p:["plain"],i=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),i=b.content),"string"==typeof i){var h=i.split(u),y=h.length;c.push({types:p,content:h[0]});for(var f=1;f<y;f++)m(c),l.push(c=[]),c.push({types:p,content:h[f]})}else o++,t.push(p),n.push(i),a.push(0),s.push(i.length)}o--,t.pop(),n.pop(),a.pop(),s.pop()}return m(c),l}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component);var f=n(751),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(755),O=n(750);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,a=e.darkTheme||n;return t?a:n},C=n(754),x=n(58),N=n.n(x);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},w=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:c}=Object(O.useThemeConfig)(),[i,p]=Object(s.useState)(!1),[u,m]=Object(s.useState)(!1);Object(s.useEffect)((()=>{m(!0)}),[]);const d=Object(s.useRef)(null);let b=[],h="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];b=g()(e).filter((e=>e>0))}n&&w.test(n)&&(h=n.match(w)[1]);let j=t&&t.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);let x=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(j),n=v.replace(/\n$/,"").split("\n");let a;for(let s=0;s<n.length;){const r=s+1,o=n[s].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(s,1)}else s+=1}b=g()(e),x=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const s=document.getSelection();let r=!1;s.rangeCount>0&&(r=s.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),r&&(s.removeAllRanges(),s.addRange(r)),a&&a.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(y,Object(a.a)({},l,{key:String(u),theme:f,code:x,language:j}),(({className:e,style:t,tokens:n,getLineProps:s,getTokenProps:c})=>r.a.createElement("div",{className:N.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:N.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(o.a)(N.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,N.a.codeBlock,"thin-scrollbar",{[N.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:N.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=s({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t}))))))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(o.a)(N.a.copyButton),onClick:E},i?r.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);