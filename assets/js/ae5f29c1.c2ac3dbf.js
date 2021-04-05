(window.webpackJsonp=window.webpackJsonp||[]).push([[474,460],{547:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(751)),s=n(57),l={title:"Events: Overview",sidebar_label:"Overview"},c={unversionedId:"Events",id:"version-1.0.0/Events",isDocsHomePage:!1,title:"Events: Overview",description:"Events are a mechanism that allows to execute certain\xa0actions\xa0at certain points in time (these\xa0actions\xa0shall be called event\xa0handlers).",source:"@site/versioned_docs/version-1.0.0/Events.md",slug:"/Events",permalink:"/platform/docs/Events",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Events.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Send mail (EMAIL)",permalink:"/platform/docs/Send_mail_EMAIL_"},next:{title:"Simple event",permalink:"/platform/docs/Simple_event"}},i=[{value:"Event types",id:"type",children:[]},{value:"Change operators&#39; event mode",id:"change",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Events")," are a mechanism that allows to execute certain\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"actions"),"\xa0at certain points in time (these\xa0actions\xa0shall be called event\xa0",Object(r.b)("em",{parentName:"p"},"handlers"),")."),Object(r.b)("h3",{id:"type"},"Event types"),Object(r.b)("p",null,"There are two types of events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Synchronous")," -\xa0occur immediately after a data change."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Asynchronous"),"\xa0- occur at arbitrary points in time as the server manages to complete execution of all defined handlers, and/or after a certain period of time.")),Object(r.b)("p",null,"In turn, from the perspective of the scope of changes, events can be divided into:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Local")," - occur locally for each change session."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Global"),"\xa0- occur globally for the entire database.")),Object(r.b)("p",null,"Thus, events can be synchronous local, synchronous global, asynchronous local, and asynchronous global. Note that by default global\xa0events are synchronous and local events are asynchronous (as the most commonly used combinations). Also, by default, all events are global."),Object(r.b)("p",null,"Advantages of synchronous events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If necessary, you can cancel the changes in the handler if, for example, these changes do not meet the necessary conditions."),Object(r.b)("li",{parentName:"ul"},"They guarantee greater integrity, since after the changes have been written the user is guaranteed to be working with the updated data.")),Object(r.b)("p",null,"Advantages of asynchronous events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'You can release the user immediately and perform the handling "in the background". This improves system ergonomics; however, it is possible only when updating the data is not critical for the user\'s further work (for global events, for example,\xa0within the next 5-10 minutes, until the server has time to complete the next handling cycle).'),Object(r.b)("li",{parentName:"ul"},"Handlings are grouped for a large number of changes, including those made by different users (in the case of global events), and, accordingly, are performed fewer times, thereby improving the overall system performance.")),Object(r.b)("p",null,"Advantages of local events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The user sees the results of event handling immediately, not only after he has saved to the common database.")),Object(r.b)("p",null,"Advantages of global events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"They provide better performance and integrity, due both to the fact that the handling is performed only after the changes are saved to the common database (that is, significantly less often), and to the use of the numerous DBMS capabilities for working with transactions.")),Object(r.b)("p",null,"The platform also allows\xa0to additionally specify that the event will occur only if the change session belongs to one of the given forms. If this is not done, then it must be kept in mind that most of the described events occur\xa0very often, so their handling should not have side effects (for example, showing messages) if there are no changes in the session. Ideally, events should be\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Simple_event"},"simple")," and should generally be used only to optimize the performance of really complex cases."),Object(r.b)("h3",{id:"change"},"Change operators' event mode"),Object(r.b)("p",null,"When handling events, you can use a special mode of the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Previous_value_PREV_"},"previous value"),"\xa0operator (it shall be called ",Object(r.b)("em",{parentName:"p"},"event")," mode). In this mode, the previous value operator will return the property's values not at the beginning of the session, but at the time of the previous occurrence of this event (or rather, the end of its handling). A similar mode is supported for all ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Change_operators_SET_CHANGED_..._"},"change")," operators."),Object(r.b)("p",null,"Event mode is also supported for the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Cancel_changes_CANCEL_"},"cancel changes")," operator.\xa0In this case, when changes are canceled inside the global event handler, the session is not cleared, but ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Apply_changes_APPLY_"},"applying changes")," which led to the execution of this handler is canceled.\xa0The global event must be synchronous, otherwise the platform will throw an error."),Object(r.b)("p",null,"By default, the following modes are used in event handling:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for the previous value operator: standard mode (value at the beginning of the session)"),Object(r.b)("li",{parentName:"ul"},"for change operators - event (value at the time the previous event occurred).\xa0"),Object(r.b)("li",{parentName:"ul"},"for the cancel changes operator - event mode (canceling the application, not clearing the session).")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For change operators and the previous value operator, when executing global synchronous event handlers, these modes (standard and event) coincide"))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To create actions that handle events, use the ON instruction."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=on",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=n(0),s=n.n(r),l=n(751),c=n(754),i={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],i=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(l.b)(s.a.Fragment,null,Object(l.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(l.b)("br",null)):Object(l.b)(s.a.Fragment,null,Object(l.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(l.b)("br",null)):Object(l.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:u,CodeSample:d};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.a.createElement(m,l(l({ref:t},i),{},{components:n})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<r;i++)s[i]=n[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(3),o=n(0),r=n.n(o),s=n(755),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?p({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(l))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=p({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,l=[],c=[l];s>-1;){for(;(r=a[s]++)<o[s];){var i=void 0,p=t[s],m=n[s][r];if("string"==typeof m?(p=s>0?p:["plain"],i=m):(p=h(p,m.type),m.alias&&(p=h(p,m.alias)),i=m.content),"string"==typeof i){var b=i.split(u),f=b.length;l.push({types:p,content:b[0]});for(var y=1;y<f;y++)d(l),c.push(l=[]),l.push({types:p,content:b[y]})}else s++,t.push(p),n.push(i),a.push(0),o.push(i.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return d(l),c}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=n(753),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),O=n(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,a=e.darkTheme||n;return t?a:n},N=n(756),w=n(58),x=n.n(w);const E=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},T=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:n}){const{prism:l}=Object(O.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,d]=Object(o.useState)(!1);Object(o.useEffect)((()=>{d(!0)}),[]);const h=Object(o.useRef)(null);let m=[],b="";const y=k(),v=Array.isArray(e)?e.join(""):e;if(n&&E.test(n)){const e=n.match(E)[1];m=g()(e).filter((e=>e>0))}n&&T.test(n)&&(b=n.match(T)[1]);let j=t&&t.replace(/language-/,"");!j&&l.defaultLanguage&&(j=l.defaultLanguage);let w=v.replace(/\n$/,"");if(0===m.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(j),n=v.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,s=n[o].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}m=g()(e),w=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(w),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(f,Object(a.a)({},c,{key:String(u),theme:y,code:w,language:j}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:l})=>r.a.createElement("div",{className:x.a.codeBlockContainer},b&&r.a.createElement("div",{style:t,className:x.a.codeBlockTitle},b),r.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:b})},r.a.createElement("div",{className:x.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t}))))))})))),r.a.createElement("button",{ref:h,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:S},i?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);