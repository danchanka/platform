(window.webpackJsonp=window.webpackJsonp||[]).push([[139,462],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(751)),c=n(57),l={title:"Event block"},i={unversionedId:"Event_block",id:"version-1.0.0/Event_block",isDocsHomePage:!1,title:"Event block",description:"The event block of the \xa0FORM instruction\xa0- a set of constructions controlling events in an interactive form view.",source:"@site/versioned_docs/version-1.0.0/Event_block.md",slug:"/Event_block",permalink:"/platform/docs/Event_block",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Event_block.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Filters and sortings block",permalink:"/platform/docs/Filters_and_sortings_block"},next:{title:"DESIGN instruction",permalink:"/platform/docs/DESIGN_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters\xa0",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The event block of the \xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/FORM_instruction"},"FORM instruction"),"\xa0- a set of constructions controlling ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Form_events"},"events")," in an interactive form view."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"EVENTS\xa0formEventDecl1, ..., formEventDeclN\n")),Object(a.b)("p",null,"Where each ",Object(a.b)("em",{parentName:"p"},"formEventDecli")," has the following syntax:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The event block allows to define handlers for ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Form_events"},"form events")," that occur as the result of certain user actions. Each block can have an arbitrary number of comma-separated event handlers. If several handlers\xa0are defined for an event, they are guaranteed to be executed in the order they are defined.\xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"eventType")),Object(a.b)("p",null,"Type of form event. It is specified with one of the following keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"INIT"),"\xa0"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OK")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OK BEFORE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OK AFTER")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"APPLY")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"APPLY BEFORE"),"\xa0"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"APPLY AFTER"),"\xa0"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CANCEL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLOSE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DROP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CHANGE")," objName \u2013 specifies that the action will be executed when the object\xa0",Object(a.b)("em",{parentName:"li"},"objName")," is changed."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QUERYOK")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QUERYCANCEL"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"eventActionId")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"ID of the action"),",\xa0that will be the event handler."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"param1, ..., paramK")),Object(a.b)("p",null,"List of action parameters. Each parameter is specified with the\xa0object name on the form.\xa0The object\xa0name, in turn, is specified with a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/IDs#id-broken"},"simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"actionOperator")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/docs/Action_operator#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=events",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=n(0),c=n.n(a),l=n(751),i=n(756),s={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],s=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),o?n?Object(l.b)(c.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(l.b)("br",null)):Object(l.b)(c.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(l.b)("br",null)):Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},755:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(3),o=n(0),a=n.n(o),c=n(757),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:l};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),s(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,p=t[c],d=n[c][a];if("string"==typeof d?(p=c>0?p:["plain"],s=d):(p=m(p,d.type),d.alias&&(p=m(p,d.alias)),s=d.content),"string"==typeof s){var f=s.split(u),y=f.length;l.push({types:p,content:f[0]});for(var h=1;h<y;h++)b(l),i.push(l=[]),l.push({types:p,content:f[h]})}else c++,t.push(p),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return b(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(755),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(753),j=n(752),k=function(){var e=Object(j.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},N=n(758),E=n(58),x=n.n(E),C=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},w=/(?:title=")(.*)(?:")/;function P(e){var t=e.children,n=e.className,l=e.metastring,s=Object(j.useThemeConfig)().prism,p=Object(o.useState)(!1),u=p[0],b=p[1],m=Object(o.useState)(!1),d=m[0],f=m[1];Object(o.useEffect)((function(){f(!0)}),[]);var h=Object(o.useRef)(null),v=[],O="",E=k(),P=Array.isArray(t)?t.join(""):t;if(l&&C.test(l)){var S=l.match(C)[1];v=g()(S).filter((function(e){return e>0}))}l&&w.test(l)&&(O=l.match(w)[1]);var D=n&&n.replace(/language-/,"");!D&&s.defaultLanguage&&(D=s.defaultLanguage);var L=P.replace(/\n$/,"");if(0===v.length&&void 0!==D){for(var _,A="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(D),I=P.replace(/\n$/,"").split("\n"),F=0;F<I.length;){var R=F+1,M=I[F].match(B);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=R+",";break;case"highlight-start":_=R;break;case"highlight-end":A+=_+"-"+(R-1)+","}I.splice(F,1)}else F+=1}v=g()(A),L=I.join("\n")}var z=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(L),b(!0),setTimeout((function(){return b(!1)}),2e3)};return a.a.createElement(y,Object(r.a)({},i,{key:String(d),theme:E,code:L,language:D}),(function(e){var t,n=e.className,o=e.style,l=e.tokens,i=e.getLineProps,s=e.getTokenProps;return a.a.createElement("div",{className:x.a.codeBlockContainer},O&&a.a.createElement("div",{style:o,className:x.a.codeBlockTitle},O),a.a.createElement("div",{className:Object(c.a)(x.a.codeBlockContent,D)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=O,t))},a.a.createElement("div",{className:x.a.codeBlockLines,style:o},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(x.a.copyButton),onClick:z},u?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);