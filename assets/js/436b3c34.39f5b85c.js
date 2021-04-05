(window.webpackJsonp=window.webpackJsonp||[]).push([[182,460],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(0),n(751)),c=n(57),s={title:"ABSTRACT operator (action)"},l={unversionedId:"ABSTRACT_operator_action_",id:"version-1.0.0/ABSTRACT_operator_action_",isDocsHomePage:!1,title:"ABSTRACT operator (action)",description:"The\xa0ABSTRACT operator -\xa0creating an\xa0abstract action.",source:"@site/versioned_docs/version-1.0.0/ABSTRACT_operator_action_.md",slug:"/ABSTRACT_operator_action_",permalink:"/platform/docs/ABSTRACT_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/ABSTRACT_operator_action_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Operator{...}",permalink:"/platform/docs/Operator_..._"},next:{title:"ACTIVATE operator",permalink:"/platform/docs/ACTIVATE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator -\xa0creating an\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Action_extension"},"abstract action"),".\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract action, the implementation of which can be defined later (for example, in other\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Modules"},"modules")," dependent on the module containing the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0action). Implementations are added to the action using the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/ACTION+_instruction"},"instruction + ="),". When executing ",Object(r.b)("strong",{parentName:"p"},"MULTI")," or ",Object(r.b)("strong",{parentName:"p"},"CASE")," type abstract actions, their\xa0matching\xa0implementation is selected and executed. The selection of the matching implementation depends on the\xa0selection conditions that are defined when adding implementations, and on the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")," - a general case.**\xa0",Object(r.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using the\xa0["),"WHEN**\xa0block](/platform/docs/ACTION+_instruction)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI"),"\xa0- ",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Branching_CASE_IF_MULTI_#poly"},"a polymorphic form"),".\xa0The selection condition is that the parameters\xa0match the implementation\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/CLASS_operator"},"signature"),". This type is the default type and need not be explicitly specified.")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Branching_CASE_IF_MULTI_#exclusive"},"type of mutual exclusion"),"\xa0of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE\xa0"),"type indicates that implementation conditions cannot be met simultaneously. The\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(r.b)("strong",{parentName:"p"},"LAST"),"."),Object(r.b)("p",null,"When performing a\xa0",Object(r.b)("strong",{parentName:"p"},"LIST"),"\xa0abstract action, all implementations are executed sequentially.**\xa0",Object(r.b)("strong",{parentName:"p"},"The implementation order is determined by the keywords "),"FIRST",Object(r.b)("strong",{parentName:"p"}," and "),"LAST**."),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator cannot be used inside the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Operator_..._"},Object(r.b)("strong",{parentName:"a"},"{...}")," operator"),"."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"type")),Object(r.b)("p",null,"Type of abstract action. It is specified by one of these keywords:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST"))),Object(r.b)("p",null,"The default value is ",Object(r.b)("strong",{parentName:"p"},"MULTI"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"exclusionType")),Object(r.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a\xa0",Object(r.b)("strong",{parentName:"p"},"MULTI"),"\xa0abstract action the default type of mutual exclusion is\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),",\xa0and in a ",Object(r.b)("strong",{parentName:"p"},"CASE")," action\xa0the default type is\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". For a ",Object(r.b)("strong",{parentName:"p"},"LIST")," abstract action the type of mutual exclusion is not specified."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"FIRST")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"LAST")),Object(r.b)("p",null,"Keywords. When the word\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list; when ",Object(r.b)("strong",{parentName:"p"},"LAST"),"\xa0is specified, implementations will be added to the end of the implementations list.\xa0Unless specified, the default is\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," (except ",Object(r.b)("strong",{parentName:"p"},"LIST"),", where the default is ",Object(r.b)("strong",{parentName:"p"},"LAST"),")"),Object(r.b)("p",null,"For abstract actions such as ",Object(r.b)("strong",{parentName:"p"},"CASE"),"\xa0and ",Object(r.b)("strong",{parentName:"p"},"MULTI")," with the type of mutual exclusion ",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST")," will mean that of the matching implementations, the last one added will be executed. For actions such as ",Object(r.b)("strong",{parentName:"p"},"LIST"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0will mean that implementations will be executed in the reverse order of their addition.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CHECKED")),Object(r.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(r.b)("p",null,"List of class names of property arguments. Each name is defined by a ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/IDs#classid-broken"},"class ID"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=abstract",mdxType:"CodeSample"}),Object(r.b)("p",null,"**",Object(r.b)("br",{parentName:"p"}),"\n","**"))}m.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=n(0),c=n.n(r),s=n(751),l=n(754),i={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},m=[],u=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],i=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:m,CodeSample:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||r;return n?o.a.createElement(d,s(s({ref:t},i),{},{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(3),o=n(0),r=n.n(o),c=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?p({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var c=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,c=0,s=[],l=[s];c>-1;){for(;(r=a[c]++)<o[c];){var i=void 0,p=t[c],d=n[c][r];if("string"==typeof d?(p=c>0?p:["plain"],i=d):(p=b(p,d.type),d.alias&&(p=b(p,d.alias)),i=d.content),"string"==typeof i){var y=i.split(m),h=y.length;s.push({types:p,content:y[0]});for(var f=1;f<h;f++)u(s),l.push(s=[]),s.push({types:p,content:y[f]})}else c++,t.push(p),n.push(i),a.push(0),o.push(i.length)}c--,t.pop(),n.pop(),a.pop(),o.pop()}return u(s),l}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(753),g=n.n(f),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),v=n(752);var T=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||O,a=e.darkTheme||n;return t?a:n},N=n(756),k=n(58),S=n.n(k);const C=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},A=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:s}=Object(v.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[m,u]=Object(o.useState)(!1);Object(o.useEffect)((()=>{u(!0)}),[]);const b=Object(o.useRef)(null);let d=[],y="";const f=T(),O=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];d=g()(e).filter((e=>e>0))}n&&A.test(n)&&(y=n.match(A)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let k=O.replace(/\n$/,"");if(0===d.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(j),n=O.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,c=n[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}d=g()(e),k=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(k),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(h,Object(a.a)({},l,{key:String(m),theme:f,code:k,language:j}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:s})=>r.a.createElement("div",{className:S.a.codeBlockContainer},y&&r.a.createElement("div",{style:t,className:S.a.codeBlockTitle},y),r.a.createElement("div",{className:Object(c.a)(S.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:y})},r.a.createElement("div",{className:S.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return d.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),r.a.createElement("button",{ref:b,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(S.a.copyButton),onClick:E},i?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);