(window.webpackJsonp=window.webpackJsonp||[]).push([[335,460],{410:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(751)),i=o(57),s={title:"Print view: Overview",sidebar_label:"Overview"},c={unversionedId:"Print_view",id:"version-1.0.0/Print_view",isDocsHomePage:!1,title:"Print view: Overview",description:"Print view of the form\xa0consists of a set of templates (reports). When data is substituted in these templates, a document is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format.",source:"@site/versioned_docs/version-1.0.0/Print_view.md",slug:"/Print_view",permalink:"/platform/docs/Print_view",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Print_view.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Static view: Overview",permalink:"/platform/docs/Static_view"},next:{title:"Report design",permalink:"/platform/docs/Report_design"}},l=[{value:"Report hierarchy",id:"report-hierarchy",children:[]},{value:"Building report hierarchy",id:"buildhierarchy",children:[]},{value:"Report hierarchy example",id:"report-hierarchy-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Print view of the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Forms"},"form"),"\xa0consists of a set of templates (",Object(a.b)("em",{parentName:"p"},"reports"),"). When data is substituted in these templates, a ",Object(a.b)("em",{parentName:"p"},"document")," is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format."),Object(a.b)("p",null,"For each report, a set of the form ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Form_structure#objects"},"object groups")," that it will display is determined."),Object(a.b)("h3",{id:"report-hierarchy"},"Report hierarchy"),Object(a.b)("p",null,"Similar to an object group, each report has a ",Object(a.b)("em",{parentName:"p"},"parent")," report, so all reports form a hierarchy. The report hierarchy should:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"include ",Object(a.b)("a",{parentName:"li",href:"/platform/docs/Static_view"},"the hierarchy of object groups"),", i.e. if a group of objects of one report is a child of a group of objects of the other report,\xa0then the first report must match the second one or be its child as well"),Object(a.b)("li",{parentName:"ul"},"within one report, each group of objects must have exactly one child.")),Object(a.b)("h3",{id:"buildhierarchy"},"Building report hierarchy"),Object(a.b)("p",null,'Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn,\xa0where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one)\xa0or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (',Object(a.b)("strong",{parentName:"p"},"SUBREPORT"),") for a child object group."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Using this option comes down to whether to display data for a parent object group when the child object group has no data."))),Object(a.b)("h3",{id:"report-hierarchy-example"},"Report hierarchy example"),Object(a.b)("p",null,"The form is similar to the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Static_view#hierarchysample-broken"},"example of building an object group hierarchy"),":"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=GroupHierarchySample",mdxType:"CodeSample"}),Object(a.b)("p",null,"The report hierarchy for this form is built as follows:"),Object(a.b)("p",null,Object(a.b)("img",{src:o(880).default})),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(a.b)("h3",{id:"open-form"},"Open form"),Object(a.b)("p",null,"To display the form in print view, the corresponding\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Open_form"},"open form"),"\xa0in the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/In_a_print_view_PRINT_"},"print view")," operator is used."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=print",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return d})),o.d(t,"default",(function(){return m}));var n=o(3),r=o(7),a=o(0),i=o.n(a),s=o(751),c=o(754),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),r=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?o?Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:u,CodeSample:d};function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},h,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},751:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),h=n,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||a;return o?r.a.createElement(m,s(s({ref:t},l),{},{components:o})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},753:function(e,t){function o(e){let t,o=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))o.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=n;t!==a;t+=e)o.push(t)}}return o}t.default=o,e.exports=o},754:function(e,t,o){"use strict";o.d(t,"a",(function(){return S}));var n=o(3),r=o(0),a=o.n(r),i=o(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:o(23).a,theme:s};function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},m=function(e,t){var o=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,o){var n=o.languages,r=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=p({},e[t],r);e[t]=o})),e}),n);return r.root=o,r.plain=p({},o,{backgroundColor:null}),r};function b(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}var f=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?m(e.theme,e.language):void 0;return t.themeDict=o})),l(this,"getLineProps",(function(e){var o=e.key,n=e.className,r=e.style,a=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,r=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return a[o[0]];var i=n?{display:"inline-block"}:{},s=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),l(this,"getTokenProps",(function(e){var o=e.key,n=e.className,r=e.style,a=e.token,i=p({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==o&&(i.key=o),n&&(i.className+=" "+n),i})),l(this,"tokenize",(function(e,t,o,n){var r={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[o];return r({tokens:function(e){for(var t=[[]],o=[e],n=[0],r=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=n[i]++)<r[i];){var l=void 0,p=t[i],m=o[i][a];if("string"==typeof m?(p=i>0?p:["plain"],l=m):(p=h(p,m.type),m.alias&&(p=h(p,m.alias)),l=m.content),"string"==typeof l){var b=l.split(u),f=b.length;s.push({types:p,content:b[0]});for(var y=1;y<f;y++)d(s),c.push(s=[]),s.push({types:p,content:b[y]})}else i++,t.push(p),o.push(l),n.push(0),r.push(l.length)}i--,t.pop(),o.pop(),n.pop(),r.pop()}return d(s),c}(void 0!==i?this.tokenize(t,n,i,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=o(753),g=o.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=o(757),O=o(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),o=e.theme||v,n=e.darkTheme||o;return t?n:o},w=o(756),x=o(58),N=o.n(x);const T=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},o=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${o})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},C=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:o}){const{prism:s}=Object(O.useThemeConfig)(),[l,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const h=Object(r.useRef)(null);let m=[],b="";const y=k(),v=Array.isArray(e)?e.join(""):e;if(o&&T.test(o)){const e=o.match(T)[1];m=g()(e).filter((e=>e>0))}o&&C.test(o)&&(b=o.match(C)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let x=v.replace(/\n$/,"");if(0===m.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(j),o=v.replace(/\n$/,"").split("\n");let n;for(let r=0;r<o.length;){const a=r+1,i=o[r].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}o.splice(r,1)}else r+=1}m=g()(e),x=o.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const o=document.createElement("textarea"),n=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}o.remove(),a&&(r.removeAllRanges(),r.addRange(a)),n&&n.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(n.a)({},c,{key:String(u),theme:y,code:x,language:j}),(({className:e,style:t,tokens:o,getLineProps:r,getTokenProps:s})=>a.a.createElement("div",{className:N.a.codeBlockContainer},b&&a.a.createElement("div",{style:t,className:N.a.codeBlockTitle},b),a.a.createElement("div",{className:Object(i.a)(N.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,N.a.codeBlock,"thin-scrollbar",{[N.a.codeBlockWithTitle]:b})},a.a.createElement("div",{className:N.a.codeBlockLines,style:t},o.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const o=r({line:e,key:t});return m.includes(t+1)&&(o.className=`${o.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},o),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(N.a.copyButton),onClick:S},l?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}},880:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/svgout8892903451953158670-30675fbf8253097a05c03fa725206aa5.png"}}]);