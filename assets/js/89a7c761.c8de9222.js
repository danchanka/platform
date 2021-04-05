(window.webpackJsonp=window.webpackJsonp||[]).push([[380,462],{452:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(751)),s=r(57),c={title:"Arithmetic operators"},i={unversionedId:"Arithmetic_operators",id:"version-1.0.0/Arithmetic_operators",isDocsHomePage:!1,title:"Arithmetic operators",description:"+, -, \\*, /, (+), (-) operators create properties responsible for arithmetic operations.",source:"@site/versioned_docs/version-1.0.0/Arithmetic_operators.md",slug:"/Arithmetic_operators",permalink:"/platform/docs/Arithmetic_operators",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Arithmetic_operators.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Property operators: Overview",permalink:"/platform/docs/Property_operators"},next:{title:"Operator \\[\\]",permalink:"/platform/docs/Operator_"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"+"),", ",Object(a.b)("strong",{parentName:"p"},"-"),", ",Object(a.b)("strong",{parentName:"p"},"*"),", ",Object(a.b)("strong",{parentName:"p"},"/"),", ",Object(a.b)("strong",{parentName:"p"},"(+)"),", ",Object(a.b)("strong",{parentName:"p"},"(-)")," operators create ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"properties")," responsible for ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Arithmetic_operators_+_-_..._"},"arithmetic operations"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"expression1 + expression2  \nexpression1 - expression2  \nexpression1 / expression2  \nexpression1 * expression2  \n-expression1\nexpression1 (+) expression2  \nexpression1 (-) expression2  \n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression1, expression2")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"Expressions"),"\xa0whose values will be arguments for arithmetic operators."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=arithmetic",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return m})),r.d(t,"default",(function(){return y}));var n=r(3),o=r(7),a=r(0),s=r.n(a),c=r(751),i=r(756),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],m=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function y(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(y,c(c({ref:t},l),{},{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},753:function(e,t,r){"use strict";var n=r(0),o=r(754);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,r){"use strict";var n=r(0),o=r.n(n).a.createContext(void 0);t.a=o},755:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},756:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n=r(3),o=r(0),a=r.n(o),s=r(757),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:r(23).a,theme:c};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},y=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var b=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?y(e.theme,e.language):void 0;return t.themeDict=r})),l(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var s=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,s=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s})),l(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=n[s]++)<o[s];){var l=void 0,p=t[s],y=r[s][a];if("string"==typeof y?(p=s>0?p:["plain"],l=y):(p=d(p,y.type),y.alias&&(p=d(p,y.alias)),l=y.content),"string"==typeof l){var f=l.split(u),b=f.length;c.push({types:p,content:f[0]});for(var h=1;h<b;h++)m(c),i.push(c=[]),c.push({types:p,content:f[h]})}else s++,t.push(p),r.push(l),n.push(0),o.push(l.length)}s--,t.pop(),r.pop(),n.pop(),o.pop()}return m(c),i}(void 0!==s?this.tokenize(t,n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=r(755),g=r.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=r(753),O=r(752),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,r=e.theme||v,n=e.darkTheme||r;return t?n:r},x=r(758),C=r(58),N=r.n(C),T=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+r+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},E=/(?:title=")(.*)(?:")/;function P(e){var t=e.children,r=e.className,c=e.metastring,l=Object(O.useThemeConfig)().prism,p=Object(o.useState)(!1),u=p[0],m=p[1],d=Object(o.useState)(!1),y=d[0],f=d[1];Object(o.useEffect)((function(){f(!0)}),[]);var h=Object(o.useRef)(null),v=[],j="",C=k(),P=Array.isArray(t)?t.join(""):t;if(c&&T.test(c)){var S=c.match(T)[1];v=g()(S).filter((function(e){return e>0}))}c&&E.test(c)&&(j=c.match(E)[1]);var D=r&&r.replace(/language-/,"");!D&&l.defaultLanguage&&(D=l.defaultLanguage);var _=P.replace(/\n$/,"");if(0===v.length&&void 0!==D){for(var B,A="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(D),I=P.replace(/\n$/,"").split("\n"),M=0;M<I.length;){var R=M+1,z=I[M].match(L);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=R+",";break;case"highlight-start":B=R;break;case"highlight-end":A+=B+"-"+(R-1)+","}I.splice(M,1)}else M+=1}v=g()(A),_=I.join("\n")}var F=function(){!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(_),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.a.createElement(b,Object(n.a)({},i,{key:String(y),theme:C,code:_,language:D}),(function(e){var t,r=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:N.a.codeBlockContainer},j&&a.a.createElement("div",{style:o,className:N.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(s.a)(N.a.codeBlockContent,D)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(r,N.a.codeBlock,"thin-scrollbar",(t={},t[N.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:N.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var r=i({line:e,key:t});return v.includes(t+1)&&(r.className=r.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(n.a)({key:t},r),e.map((function(e,t){return a.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(N.a.copyButton),onClick:F},u?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);