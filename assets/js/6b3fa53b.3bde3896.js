(window.webpackJsonp=window.webpackJsonp||[]).push([[290,440],{365:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(747)),i=r(57),c={title:"Groups of properties and actions"},s={unversionedId:"Groups_of_properties_and_actions",id:"version-v4/Groups_of_properties_and_actions",isDocsHomePage:!1,title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/versioned_docs/version-v4/Groups_of_properties_and_actions.md",slug:"/Groups_of_properties_and_actions",permalink:"/platform/Groups_of_properties_and_actions",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Groups_of_properties_and_actions.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Form structure: Overview",permalink:"/platform/Form_structure"},next:{title:"Form views: Overview",permalink:"/platform/Form_views"}},l=[{value:"Builtin property groups",id:"builtin",children:[]},{value:"Property groups usage",id:"property-groups-usage",children:[]},{value:"Language",id:"language",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),Object(a.b)("p",null,"All ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"p"),"roperties in the system are divided into ",Object(a.b)("em",{parentName:"p"},"property groups.\xa0")," In this case, all groups form a hierarchy in which each group can contain both properties and other property groups.\xa0The root group in this hierarchy is the ",Object(a.b)("strong",{parentName:"p"},"System.root group.")," All other groups are contained*\xa0",Object(a.b)("em",{parentName:"p"},"in some\xa0"),"parent group.*"),Object(a.b)("p",null,"Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",Object(a.b)("strong",{parentName:"p"},"System.root")," group."),Object(a.b)("h3",{id:"builtin"},"Builtin property groups"),Object(a.b)("p",null,"In addition to ",Object(a.b)("strong",{parentName:"p"},"root")," in the\xa0",Object(a.b)("strong",{parentName:"p"},"System"),"\xa0module, the following groups of properties and actions are created automatically:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"root"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"public"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"base"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"id")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"private"))))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"All these groups (including ",Object(a.b)("strong",{parentName:"p"},"root"),") are not used in form display mechanisms (i.e. containers in the ",Object(a.b)("a",{parentName:"p",href:"/platform/Form_design#defaultDesign"},"default form design")," and elements of the ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view#hierarchy"},"hierarchical")," import / export hierarchy are not created for them)."))),Object(a.b)("h3",{id:"property-groups-usage"},"Property groups usage"),Object(a.b)("p",null,"Property groups are currently used in the following mechanisms:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When displaying forms:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"in the ",Object(a.b)("a",{parentName:"li",href:"/platform/Interactive_view"},"interactive"),"\xa0view: you\xa0can specify for each group that a\xa0separate container must be created in the\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Form_design#defaultDesign"},"default design"),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) \xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(a.b)("strong",{parentName:"li"},"B"),"\xa0that a container must be created, and group (or property)\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(a.b)("strong",{parentName:"li"},"B"),", then the container of group (component of property)\xa0",Object(a.b)("strong",{parentName:"li"},"A")," will be the descendant of the container of group ",Object(a.b)("strong",{parentName:"li"},"B"),"."),Object(a.b)("li",{parentName:"ul"},"in the\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Structured_view#hierarchy"},"hierarchical"),"\xa0view\xa0:you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) \xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(a.b)("strong",{parentName:"li"},"B"),"\xa0that a tag needs to be created, and group (or property)\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(a.b)("strong",{parentName:"li"},"B"),", then group (property)\xa0",Object(a.b)("strong",{parentName:"li"},"A")," will be enclosed in the tag of group\xa0",Object(a.b)("strong",{parentName:"li"},"B"),".\xa0"))),Object(a.b)("li",{parentName:"ul"},"When automatically creating forms:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(a.b)("strong",{parentName:"li"},"System.base")," group will be displayed in the automatically generated dialog forms for\xa0",Object(a.b)("a",{parentName:"li",href:"/platform/Interactive_view#edtClass"},"selecting/editing"),"\xa0objects.\xa0"),Object(a.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(a.b)("strong",{parentName:"li"},"System.id")," group will be displayed in automatically generated ",Object(a.b)("a",{parentName:"li",href:"/platform/Constraints#message"},"message display forms")," on\xa0constraint violation."))),Object(a.b)("li",{parentName:"ul"},"In the security policy:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You can set a security policy for a group as a whole (and not for each property individually).")))),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To add a new property/action group to the system, use the ",Object(a.b)("a",{parentName:"p",href:"/platform/GROUP_instruction"},Object(a.b)("strong",{parentName:"a"},"GROUP")," instruction"),"."),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=group",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return m})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=r(0),i=r.n(a),c=r(747),s=r(750),l={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},u=[],m=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?r?Object(c.b)(i.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:m};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},749:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r(3),o=r(0),a=r.n(o),i=r(751),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:r(23).a,theme:c};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},b=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function h(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var g=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?b(e.theme,e.language):void 0;return t.themeDict=r})),l(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),l(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,i=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?p({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i})),l(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=n[i]++)<o[i];){var l=void 0,p=t[i],b=r[i][a];if("string"==typeof b?(p=i>0?p:["plain"],l=b):(p=d(p,b.type),b.alias&&(p=d(p,b.alias)),l=b.content),"string"==typeof l){var h=l.split(u),g=h.length;c.push({types:p,content:h[0]});for(var y=1;y<g;y++)m(c),s.push(c=[]),c.push({types:p,content:h[y]})}else i++,t.push(p),r.push(l),n.push(0),o.push(l.length)}i--,t.pop(),r.pop(),n.pop(),o.pop()}return m(c),s}(void 0!==i?this.tokenize(t,n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=r(749),f=r.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=r(753),O=r(748);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),r=e.theme||v,n=e.darkTheme||r;return t?n:r},k=r(752),w=r(58),x=r.n(w);const T=/{([\d,-]+)}/,_=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},C=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:r}){const{prism:c}=Object(O.useThemeConfig)(),[l,p]=Object(o.useState)(!1),[u,m]=Object(o.useState)(!1);Object(o.useEffect)((()=>{m(!0)}),[]);const d=Object(o.useRef)(null);let b=[],h="";const y=N(),v=Array.isArray(e)?e.join(""):e;if(r&&T.test(r)){const e=r.match(T)[1];b=f()(e).filter((e=>e>0))}r&&C.test(r)&&(h=r.match(C)[1]);let j=t&&t.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);let w=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}})(j),r=v.replace(/\n$/,"").split("\n");let n;for(let o=0;o<r.length;){const a=o+1,i=r[o].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}r.splice(o,1)}else o+=1}b=f()(e),w=r.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(w),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(g,Object(n.a)({},s,{key:String(u),theme:y,code:w,language:j}),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:c})=>a.a.createElement("div",{className:x.a.codeBlockContainer},h&&a.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),a.a.createElement("div",{className:Object(i.a)(x.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:h})},a.a.createElement("div",{className:x.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return b.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},r),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t}))))))})))),a.a.createElement("button",{ref:d,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(x.a.copyButton),onClick:S},l?a.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);