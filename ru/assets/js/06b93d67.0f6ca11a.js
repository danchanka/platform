(window.webpackJsonp=window.webpackJsonp||[]).push([[21,417],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return y}));var r=n(3),o=n(7),a=n(0),c=n.n(a),s=n(751),l=n(756),i={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/ru/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],m=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],i=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:p,CodeSample:m};function y(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(y,s(s({ref:t},i),{},{components:n})):o.a.createElement(y,s({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},755:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(3),o=n(0),a=n.n(o),c=n(757),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=u({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?u({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],y=n[c][a];if("string"==typeof y?(u=c>0?u:["plain"],i=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),i=y.content),"string"==typeof i){var f=i.split(p),b=f.length;s.push({types:u,content:f[0]});for(var g=1;g<b;g++)m(s),l.push(s=[]),s.push({types:u,content:f[g]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return m(s),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var g=n(755),h=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(752),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},N=n(758),x=n(58),C=n.n(x),T=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},E=/(?:title=")(.*)(?:")/;function _(e){var t=e.children,n=e.className,s=e.metastring,i=Object(O.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],m=u[1],d=Object(o.useState)(!1),y=d[0],f=d[1];Object(o.useEffect)((function(){f(!0)}),[]);var g=Object(o.useRef)(null),v=[],j="",x=k(),_=Array.isArray(t)?t.join(""):t;if(s&&T.test(s)){var w=s.match(T)[1];v=h()(w).filter((function(e){return e>0}))}s&&E.test(s)&&(j=s.match(E)[1]);var P=n&&n.replace(/language-/,"");!P&&i.defaultLanguage&&(P=i.defaultLanguage);var L=_.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var M,A="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(P),D=_.replace(/\n$/,"").split("\n"),I=0;I<D.length;){var X=I+1,U=D[I].match(B);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=X+",";break;case"highlight-start":M=X;break;case"highlight-end":A+=M+"-"+(X-1)+","}D.splice(I,1)}else I+=1}v=h()(A),L=D.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(L),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.a.createElement(b,Object(r.a)({},l,{key:String(y),theme:x,code:L,language:P}),(function(e){var t,n=e.className,o=e.style,s=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.a.createElement("div",{className:C.a.codeBlockContainer},j&&a.a.createElement("div",{style:o,className:C.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(c.a)(C.a.codeBlockContent,P)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,C.a.codeBlock,"thin-scrollbar",(t={},t[C.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:C.a.codeBlockLines,style:o},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))})))})))),a.a.createElement("button",{ref:g,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(C.a.copyButton),onClick:R},p?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(751)),c=n(57),s={title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)"},l={unversionedId:"Extremum_MAX_MIN_",id:"version-1.0.0/Extremum_MAX_MIN_",isDocsHomePage:!1,title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u0440\u0435\u0434\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043a\u043e\u0433\u043e \u043b\u0438\u0431\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u043e\xa0NULL, \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u044b NULL, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0432\u043d\u043e NULL.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/Extremum_MAX_MIN_.md",slug:"/Extremum_MAX_MIN_",permalink:"/platform/ru/docs/Extremum_MAX_MIN_",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/Extremum_MAX_MIN_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f (=, \\>, <, ...)",permalink:"/platform/ru/docs/Comparison_operators_=_..._"},next:{title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, CONCAT, SUBSTRING)",permalink:"/platform/ru/docs/String_operators_+_CONCAT_SUBSTRING_"}},i=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0430")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/docs/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u0440\u0435\u0434\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043a\u043e\u0433\u043e \u043b\u0438\u0431\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u043e\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),", \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u044b ",Object(a.b)("strong",{parentName:"p"},"NULL"),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0432\u043d\u043e ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),Object(a.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c, \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/docs/MAX_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("strong",{parentName:"a"},"MAX")),", \xa0\u043c\u0438\u043d\u0438\u043c\u0443\u043c - \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/docs/MIN_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("strong",{parentName:"a"},"MIN")),"."),Object(a.b)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(a.b)(c.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=max",mdxType:"CodeSample"}),Object(a.b)(c.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=min",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}p.isMDXComponent=!0}}]);