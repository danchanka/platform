(window.webpackJsonp=window.webpackJsonp||[]).push([[39,462],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(751)),i=n(57),c={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},s={unversionedId:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",id:"version-1.0.0/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",isDocsHomePage:!1,title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of\xa0conditions\xa0which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/versioned_docs/version-1.0.0/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",permalink:"/platform/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Property signature (CLASS)",permalink:"/platform/docs/Property_signature_CLASS_"},next:{title:"Set operations: Overview",permalink:"/platform/docs/Set_operations"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of\xa0",Object(a.b)("em",{parentName:"p"},"conditions\xa0"),"which condition is met, and returns the value of the ",Object(a.b)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",Object(a.b)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("h3",{id:"poly"},"Polymorphic form"),Object(a.b)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_signature_CLASS_"},"signature"),",\xa0or the property itself. We will call this the",Object(a.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Note that the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Extremum_MAX_MIN_"},"extremum operator")," and logical operators basically are also varieties of the selection operator (and of\xa0its polymorphic form, i.e. the conditions and result are defined by one property)"))),Object(a.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(a.b)("p",null,"The selection operator lets you specify that all its conditions are ",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(a.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(a.b)("p",null,"This operator supports\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_extension"},"implicit definition"),"\xa0using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(a.b)("h3",{id:"single"},"Single form"),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"single\xa0"),"form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an\xa0",Object(a.b)("em",{parentName:"p"},"alternative result\xa0"),"which value is returned if the condition is not met."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(a.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(a.b)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/User_classes#commonparentclass"},"user-defined"),") of its operands."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To create a property implementing a general form of selection, the\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/docs/CASE_operator"},"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/docs/MULTI_operator"},"MULTI")),",\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/docs/OVERRIDE_operator"},"OVERRIDE"),"\xa0and ",Object(a.b)("a",{parentName:"strong",href:"/platform/docs/EXCLUSIVE_operator"},"EXCLUSIVE")),",",Object(a.b)("strong",{parentName:"p"},"\xa0operators; the"),"single form using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/docs/IF_operator"},"IF")),"\xa0and ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator (the only operator that allows the specification of an alternative result)."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=case",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=multi",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=override",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=exclusive",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=if",mdxType:"CodeSample"}),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=ifthen",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return h}));var o=n(3),r=n(7),a=n(0),i=n.n(a),c=n(751),s=n(756),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],m=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?n?Object(c.b)(i.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(i.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r},755:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var o=n(3),r=n(0),a=n.n(r),i=n(757),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var b=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=o[i]++)<r[i];){var l=void 0,p=t[i],h=n[i][a];if("string"==typeof h?(p=i>0?p:["plain"],l=h):(p=d(p,h.type),h.alias&&(p=d(p,h.alias)),l=h.content),"string"==typeof l){var f=l.split(u),b=f.length;c.push({types:p,content:f[0]});for(var y=1;y<b;y++)m(c),s.push(c=[]),c.push({types:p,content:f[y]})}else i++,t.push(p),n.push(l),o.push(0),r.push(l.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return m(c),s}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(755),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(752),k=function(){var e=Object(j.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},E=n(758),S=n(58),N=n.n(S),C=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},w=/(?:title=")(.*)(?:")/;function T(e){var t=e.children,n=e.className,c=e.metastring,l=Object(j.useThemeConfig)().prism,p=Object(r.useState)(!1),u=p[0],m=p[1],d=Object(r.useState)(!1),h=d[0],f=d[1];Object(r.useEffect)((function(){f(!0)}),[]);var y=Object(r.useRef)(null),v=[],O="",S=k(),T=Array.isArray(t)?t.join(""):t;if(c&&C.test(c)){var _=c.match(C)[1];v=g()(_).filter((function(e){return e>0}))}c&&w.test(c)&&(O=c.match(w)[1]);var I=n&&n.replace(/language-/,"");!I&&l.defaultLanguage&&(I=l.defaultLanguage);var L=T.replace(/\n$/,"");if(0===v.length&&void 0!==I){for(var P,D="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(I),R=T.replace(/\n$/,"").split("\n"),U=0;U<R.length;){var A=U+1,V=R[U].match(M);if(null!==V){switch(V.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":P=A;break;case"highlight-end":D+=P+"-"+(A-1)+","}R.splice(U,1)}else U+=1}v=g()(D),L=R.join("\n")}var B=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(L),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.a.createElement(b,Object(o.a)({},s,{key:String(h),theme:S,code:L,language:I}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,s=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:N.a.codeBlockContainer},O&&a.a.createElement("div",{style:r,className:N.a.codeBlockTitle},O),a.a.createElement("div",{className:Object(i.a)(N.a.codeBlockContent,I)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,N.a.codeBlock,"thin-scrollbar",(t={},t[N.a.codeBlockWithTitle]=O,t))},a.a.createElement("div",{className:N.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:y,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(N.a.copyButton),onClick:B},u?a.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);