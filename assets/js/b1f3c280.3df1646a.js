(window.webpackJsonp=window.webpackJsonp||[]).push([[487,462],{557:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(751)),s=n(57),c={title:"RECURSION operator"},i={unversionedId:"RECURSION_operator",id:"version-1.0.0/RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION\xa0operator\xa0creates a\xa0property that implements\xa0recursion.",source:"@site/versioned_docs/version-1.0.0/RECURSION_operator.md",slug:"/RECURSION_operator",permalink:"/platform/docs/RECURSION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/RECURSION_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"PREV operator",permalink:"/platform/docs/PREV_operator"},next:{title:"STRUCT operator",permalink:"/platform/docs/STRUCT_operator"}},l=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION\xa0"),"operator\xa0creates a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property")," that implements\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Recursion_RECURSION_"},"recursion"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",Object(a.b)("strong",{parentName:"p"},"$name"),", where ",Object(a.b)("strong",{parentName:"p"},"name")," is the name of the parameter."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"initialExpr")),Object(a.b)("p",null,"An expression whose value is the initial property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"stepExpr")),Object(a.b)("p",null,"An expression whose value is a property of a recursion step. Allows a special syntax (",Object(a.b)("strong",{parentName:"p"},"$name"),") to access the value of the ",Object(a.b)("strong",{parentName:"p"},"name")," parameter in the previous step."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES YES")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are allowed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES NO")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not allowed. This option is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES IMPOSSIBLE")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not possible."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"),Object(a.b)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion2",mdxType:"CodeSample"}),Object(a.b)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own,\xa0artificially\xa0creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",Object(a.b)("strong",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed\xa0into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=n(0),s=n.n(a),c=n(751),i=n(756),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],m=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],l=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},755:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(3),o=n(0),a=n.n(o),s=n(757),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),l(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=r[s]++)<o[s];){var l=void 0,p=t[s],b=n[s][a];if("string"==typeof b?(p=s>0?p:["plain"],l=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),l=b.content),"string"==typeof l){var y=l.split(u),f=y.length;c.push({types:p,content:y[0]});for(var h=1;h<f;h++)m(c),i.push(c=[]),c.push({types:p,content:y[h]})}else s++,t.push(p),n.push(l),r.push(0),o.push(l.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return m(c),i}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(755),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(752),k=function(){var e=Object(j.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},C=n(758),S=n(58),E=n.n(S),x=/{([\d,-]+)}/,N=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},T=/(?:title=")(.*)(?:")/;function w(e){var t=e.children,n=e.className,c=e.metastring,l=Object(j.useThemeConfig)().prism,p=Object(o.useState)(!1),u=p[0],m=p[1],d=Object(o.useState)(!1),b=d[0],y=d[1];Object(o.useEffect)((function(){y(!0)}),[]);var h=Object(o.useRef)(null),v=[],O="",S=k(),w=Array.isArray(t)?t.join(""):t;if(c&&x.test(c)){var P=c.match(x)[1];v=g()(P).filter((function(e){return e>0}))}c&&T.test(c)&&(O=c.match(T)[1]);var R=n&&n.replace(/language-/,"");!R&&l.defaultLanguage&&(R=l.defaultLanguage);var I=w.replace(/\n$/,"");if(0===v.length&&void 0!==R){for(var L,D="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"]);case"jsx":case"tsx":return N(["js","jsBlock","jsx"]);case"html":return N(["js","jsBlock","html"]);case"python":case"py":return N(["python"]);default:return N()}}(R),U=w.replace(/\n$/,"").split("\n"),_=0;_<U.length;){var A=_+1,M=U[_].match(B);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":L=A;break;case"highlight-end":D+=L+"-"+(A-1)+","}U.splice(_,1)}else _+=1}v=g()(D),I=U.join("\n")}var Y=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(I),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.a.createElement(f,Object(r.a)({},i,{key:String(b),theme:S,code:I,language:R}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:E.a.codeBlockContainer},O&&a.a.createElement("div",{style:o,className:E.a.codeBlockTitle},O),a.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,R)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=O,t))},a.a.createElement("div",{className:E.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:Y},u?a.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);