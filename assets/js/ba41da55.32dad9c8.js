(window.webpackJsonp=window.webpackJsonp||[]).push([[505,462],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=n(0),i=n.n(r),s=n(751),c=n(756),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],m=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],l=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),a?n?Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},575:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(751)),i=n(57),s={title:"In an interactive view (SHOW, DIALOG)"},c={unversionedId:"In_an_interactive_view_SHOW_DIALOG_",id:"version-1.0.0/In_an_interactive_view_SHOW_DIALOG_",isDocsHomePage:!1,title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that\xa0opens a form\xa0in the interactive\xa0view.",source:"@site/versioned_docs/version-1.0.0/In_an_interactive_view_SHOW_DIALOG_.md",slug:"/In_an_interactive_view_SHOW_DIALOG_",permalink:"/platform/docs/In_an_interactive_view_SHOW_DIALOG_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/In_an_interactive_view_SHOW_DIALOG_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Open form: Overview",permalink:"/platform/docs/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/platform/docs/In_a_print_view_PRINT_"}},l=[{value:"Flow management",id:"flow",children:[]},{value:"Form location",id:"location",children:[]},{value:"System action management",id:"system-action-management",children:[]},{value:"Dialog form",id:"dialog",children:[]},{value:"Extra features",id:"extra",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This operator creates an action that\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Open_form"},"opens a form"),"\xa0in the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view"},"interactive"),"\xa0view."),Object(r.b)("h3",{id:"flow"},"Flow management"),Object(r.b)("p",null,"The operator works in two modes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Synchronous"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"WAIT"),") -\xa0waits for the user to\xa0",Object(r.b)("strong",{parentName:"li"},"close\xa0"),"the form, then saves the execution results and passes\xa0control to the next action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Asynchronous"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"NOWAIT"),") - passes control to the next action right after\xa0",Object(r.b)("strong",{parentName:"li"},"opening\xa0"),"a form on the client end.")),Object(r.b)("p",null,"By default, the operator works in the synchronous mode."),Object(r.b)("h3",{id:"location"},"Form location"),Object(r.b)("p",null,"A form being opened can be shown in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As a\xa0",Object(r.b)("em",{parentName:"li"},"window"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"FLOAT"),")-\xa0the form is shown as a floating window."),Object(r.b)("li",{parentName:"ul"},"As a\xa0",Object(r.b)("em",{parentName:"li"},"tab"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"DOCKED"),") -\xa0the form is opened as a tab in the system\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Navigator_design"},"window"),"\xa0",Object(r.b)("strong",{parentName:"li"},"System.forms"),".")),Object(r.b)("p",null,"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'))),Object(r.b)("h3",{id:"system-action-management"},"System action management"),Object(r.b)("p",null,"By default, when the interactive view is enabled, the platform\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#sysactions"},"automatically determines")," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set\xa0of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#anchor-broken"},"owner of the session")," in which it is opened or not."),Object(r.b)("h3",{id:"dialog"},"Dialog form"),Object(r.b)("p",null,"This operator also allows to return the latest ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Form_structure#currentObject-broken"},"current value")," of a specified object (or, if necessary, of several objects), thus, essentially, performing\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Value_input"},"value input"),". In this case, ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Value_input#result"},"input is considered to be canceled")," if the user closes the form using\xa0",Object(r.b)("strong",{parentName:"p"},"System.formClose ("),"not\xa0",Object(r.b)("strong",{parentName:"p"},"System.formOk"),")."),Object(r.b)("p",null,"While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",Object(r.b)("strong",{parentName:"p"},"NULL")," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",Object(r.b)("strong",{parentName:"p"},"System.formDrop"),") on the form. Calling this action closes the form and returns a ",Object(r.b)("strong",{parentName:"p"},"NULL")," value as a result."),Object(r.b)("p",null,"Similar to the other value input operators, the dialog form of this\xa0operator allows to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"specify\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Value_input#initial"},"initial object\xa0values")," (through the\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Open_form"},"passing objects"),"\xa0mechanism)."),Object(r.b)("li",{parentName:"ul"},"specify\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/platform/docs/Value_input#initial"},"change"),"\xa0a specified property.")),Object(r.b)("p",null,"In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate\xa0existing\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Constraints"},"constraints"),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."),Object(r.b)("p",null,"The operator dialog form is available in the synchronous mode only."),Object(r.b)("h3",{id:"extra"},"Extra features"),Object(r.b)("p",null,'When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each\xa0',Object(r.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#property"},"property view"),"."),Object(r.b)("p",null,"Also, when calling the form, you can specify that it will be opened in a ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/New_session_NEWSESSION_NESTEDSESSION_"},"new")," (nested) session. In this case, ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Open_form#params"},"passing objects")," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/New_session_NEWSESSION_NESTEDSESSION_"},"new session")," operator)."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To open a form in the interactive view, use the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/SHOW_operator"},Object(r.b)("strong",{parentName:"a"},"SHOW"),"\xa0operator"),". To show the form in the dialog mode, use the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/DIALOG_operator"},Object(r.b)("strong",{parentName:"a"},"DIALOG")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=show",mdxType:"CodeSample"}),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=dialog",mdxType:"CodeSample"}))}u.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var o=n(0),a=n(754);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var o=n(0),a=n.n(o).a.createContext(void 0);t.a=a},755:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n(3),a=n(0),r=n.n(a),i=n(757),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==a&&(r.style=void 0!==r.style?p({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,i=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?p({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,i=0,s=[],c=[s];i>-1;){for(;(r=o[i]++)<a[i];){var l=void 0,p=t[i],b=n[i][r];if("string"==typeof b?(p=i>0?p:["plain"],l=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),l=b.content),"string"==typeof l){var h=l.split(u),f=h.length;s.push({types:p,content:h[0]});for(var y=1;y<f;y++)m(s),c.push(s=[]),s.push({types:p,content:h[y]})}else i++,t.push(p),n.push(l),o.push(0),a.push(l.length)}i--,t.pop(),n.pop(),o.pop(),a.pop()}return m(s),c}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var y=n(755),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(752),w=function(){var e=Object(j.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},N=n(758),k=n(58),_=n.n(k),S=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},T=/(?:title=")(.*)(?:")/;function C(e){var t=e.children,n=e.className,s=e.metastring,l=Object(j.useThemeConfig)().prism,p=Object(a.useState)(!1),u=p[0],m=p[1],d=Object(a.useState)(!1),b=d[0],h=d[1];Object(a.useEffect)((function(){h(!0)}),[]);var y=Object(a.useRef)(null),v=[],O="",k=w(),C=Array.isArray(t)?t.join(""):t;if(s&&S.test(s)){var E=s.match(S)[1];v=g()(E).filter((function(e){return e>0}))}s&&T.test(s)&&(O=s.match(T)[1]);var I=n&&n.replace(/language-/,"");!I&&l.defaultLanguage&&(I=l.defaultLanguage);var D=C.replace(/\n$/,"");if(0===v.length&&void 0!==I){for(var L,A="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(I),B=C.replace(/\n$/,"").split("\n"),W=0;W<B.length;){var H=W+1,F=B[W].match(P);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=H+",";break;case"highlight-start":L=H;break;case"highlight-end":A+=L+"-"+(H-1)+","}B.splice(W,1)}else W+=1}v=g()(A),D=B.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(D),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.a.createElement(f,Object(o.a)({},c,{key:String(b),theme:k,code:D,language:I}),(function(e){var t,n=e.className,a=e.style,s=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:_.a.codeBlockContainer},O&&r.a.createElement("div",{style:a,className:_.a.codeBlockTitle},O),r.a.createElement("div",{className:Object(i.a)(_.a.codeBlockContent,I)},r.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,_.a.codeBlock,"thin-scrollbar",(t={},t[_.a.codeBlockWithTitle]=O,t))},r.a.createElement("div",{className:_.a.codeBlockLines,style:a},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(_.a.copyButton),onClick:M},u?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);