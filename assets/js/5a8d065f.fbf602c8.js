(window.webpackJsonp=window.webpackJsonp||[]).push([[253,460],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(751)),l=n(57),i={title:"Navigator design"},c={unversionedId:"Navigator_design",id:"version-1.0.0/Navigator_design",isDocsHomePage:!1,title:"Navigator design",description:"Navigator design\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0desktop).",source:"@site/versioned_docs/version-1.0.0/Navigator_design.md",slug:"/Navigator_design",permalink:"/platform/docs/Navigator_design",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Navigator_design.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Navigator: Overview",permalink:"/platform/docs/Navigator"},next:{title:"Physical model: Overview",permalink:"/platform/docs/Physical_model"}},s=[{value:"Navigator elements layout in windows",id:"navigator-elements-layout-in-windows",children:[]},{value:"Window layout on the desktop",id:"window-layout-on-the-desktop",children:[]},{value:"Selected folder",id:"selectedfolder",children:[]},{value:"Types",id:"types",children:[]},{value:"System windows",id:"system-windows",children:[]},{value:"Default layout",id:"default-layout",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Navigator design"),"\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0",Object(r.b)("em",{parentName:"p"},"desktop"),")."),Object(r.b)("p",null,"The navigator design consists of multiple ",Object(r.b)("em",{parentName:"p"},"windows"),", desktop components,*\xa0*each of which\xa0displays certain ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Navigator"},"navigator","\xa0"),"elements.\xa0"),Object(r.b)("p",null,"Each window must have a\xa0",Object(r.b)("em",{parentName:"p"},"caption")," which will be used when displaying the window in the user interface."),Object(r.b)("h3",{id:"navigator-elements-layout-in-windows"},"Navigator elements layout in windows"),Object(r.b)("p",null,"For each navigator element, you can specify the window in which its descendants should be displayed. If necessary, the element itself can be displayed there. Thus, the set of\xa0",Object(r.b)("em",{parentName:"p"},"subtrees")," (navigator ",Object(r.b)("em",{parentName:"p"},"elements"),") that is displayed in each window is uniquely determined. Graphically, this can be represented as follows:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(866).default})),Object(r.b)("h3",{id:"window-layout-on-the-desktop"},"Window layout on the desktop"),Object(r.b)("p",null,"Each window occupies a predefined section of the desktop. Graphically, this can be represented as follows:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("p",null,"Window 1"),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("br",null),Object(r.b)("br",null))))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("p",null,Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),"Window 2",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("br",null),Object(r.b)("br",null)))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null),"Window 3",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("br",null),Object(r.b)("br",null))))),Object(r.b)("p",null,"The entire desktop is 100x100 ",Object(r.b)("em",{parentName:"p"},"pixels")," in size. When creating a window, you must specify the window's upper left coordinate, width and height, expressed in ",Object(r.b)("em",{parentName:"p"},"pixels"),'. It is desirable that windows should "cover" the entire area of the desktop. If this does not happen, then the free area will be given to one of the windows (there is no guarantee as to which one). Two windows are allowed to have absolutely identical coordinates and sizes. In this case they will be displayed in the same place, but switching between them will be possible using tabs.'),Object(r.b)("h3",{id:"selectedfolder"},"Selected folder"),Object(r.b)("p",null,"At any moment in time in each window there can be one current user-",Object(r.b)("em",{parentName:"p"},"selected\xa0"),"navigator folder. Accordingly, if the element item belongs to a window other than the window of its parent folder, then this element is shown in its window if and only if its parent folder is selected in its window. The predefined ",Object(r.b)("strong",{parentName:"p"},"System.root")," folder is always considered to be selected. If at some point a window does not display any navigator element, then that window is automatically hidden."),Object(r.b)("h3",{id:"types"},"Types"),Object(r.b)("p",null,"There are several\xa0window\xa0",Object(r.b)("em",{parentName:"p"},"types")," that determine which component in the interface will be used to display\xa0navigator elements."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Toolbar"),": a container consisting of buttons, each of which corresponds to one element of the navigator. The vertical toolbar places all buttons from top to bottom, indenting each element from the left depending on its position in the tree. The horizontal toolbar shows the buttons from left to right, without indentation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Panel"),": a container in which the hierarchy of components corresponds to navigator elements, where for\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/docs/Forms"},"forms"),"\xa0and ",Object(r.b)("em",{parentName:"li"},Object(r.b)("a",{parentName:"em",href:"/platform/docs/Actions"},"actions")),"\xa0buttons are created, and for navigator folders \u2013 nested containers with the corresponding caption. The vertical panel places all the nested containers and their buttons from top to bottom, and the horizontal panel places them from left to right."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Tree"),": a tree in which each node corresponds to a navigator element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Menu"),": a menu in which a popup menu corresponds to each navigator folder, and the items on that menu correspond to the forms and actions.")),Object(r.b)("p",null,"By default, a UI component that displays navigator\xa0elements is wrapped into scrollbars. They appear when the component does not fit in the window. If necessary, this behavior can be disabled."),Object(r.b)("h3",{id:"system-windows"},"System windows"),Object(r.b)("p",null,"There are several predefined system windows that are necessary for the client application to work:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"forms"),": a window in which user forms open."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"log"),": a window in which messages to the user are displayed. If this window is invisible, messages will be shown to the user in the form of system dialog forms."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"status"),":\xa0a window in which various system information is displayed.")),Object(r.b)("p",null,"Also, three additional windows are automatically created for ease of development:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"root"),": a horizontal toolbar in which it is recommended to display navigator element*\xa0",Object(r.b)("strong",{parentName:"li"},"*root")," children. The navigator folder ",Object(r.b)("strong",{parentName:"li"},"System.root")," is displayed here by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"toolbar"),":\xa0a\xa0vertical\xa0toolbar\xa0in which it is recommended to display some of the descendants of the navigator elements that are displayed in the ",Object(r.b)("strong",{parentName:"li"},"root")," window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tree"),": a tree in\xa0which it is recommended to display some of the descendants\xa0of the navigator elements displayed in the*\xa0",Object(r.b)("strong",{parentName:"li"},"*root")," window")),Object(r.b)("h3",{id:"default-layout"},"Default layout"),Object(r.b)("p",null,"By default, the desktop has the following layout (the left coordinate, upper coordinate, width, and height are indicated in brackets):"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",null,"root")," (0, 0, 100, 6)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("p",null,Object(r.b)("strong",null,Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",null,"toolbar/tree")),Object(r.b)("br",null),Object(r.b)("p",null,"(0, 6, 20, 64)"),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("br",null),Object(r.b)("br",null)))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("p",null,Object(r.b)("strong",null,"log")),Object(r.b)("br",null),Object(r.b)("p",null,"(0, 70, 20, 29)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",null,"status")," (0, 99, 100, 1)")))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To manage windows, use the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/WINDOW_instruction"},Object(r.b)("strong",{parentName:"a"},"WINDOW")," instruction"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=window",mdxType:"CodeSample"}))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=n(0),l=n.n(r),i=n(751),c=n(754),s={},b={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],s=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),o?n?Object(i.b)(l.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(l.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},u={toc:p,CodeSample:d};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(3),o=n(0),r=n.n(o),l=n(755),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=b({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=b({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=b({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?b({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=b({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?b({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,i=[],c=[i];l>-1;){for(;(r=a[l]++)<o[l];){var s=void 0,b=t[l],m=n[l][r];if("string"==typeof m?(b=l>0?b:["plain"],s=m):(b=u(b,m.type),m.alias&&(b=u(b,m.alias)),s=m.content),"string"==typeof s){var h=s.split(p),y=h.length;i.push({types:b,content:h[0]});for(var g=1;g<y;g++)d(i),c.push(i=[]),i.push({types:b,content:h[g]})}else l++,t.push(b),n.push(s),a.push(0),o.push(s.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return d(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var g=n(753),f=n.n(g),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(757),v=n(752);var w=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||j,a=e.darkTheme||n;return t?a:n},N=n(756),k=n(58),T=n.n(k);const x=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},S=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:i}=Object(v.useThemeConfig)(),[s,b]=Object(o.useState)(!1),[p,d]=Object(o.useState)(!1);Object(o.useEffect)((()=>{d(!0)}),[]);const u=Object(o.useRef)(null);let m=[],h="";const g=w(),j=Array.isArray(e)?e.join(""):e;if(n&&x.test(n)){const e=n.match(x)[1];m=f()(e).filter((e=>e>0))}n&&S.test(n)&&(h=n.match(S)[1]);let O=t&&t.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);let k=j.replace(/\n$/,"");if(0===m.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(O),n=j.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const r=o+1,l=n[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(o,1)}else o+=1}m=f()(e),k=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(k),b(!0),setTimeout((()=>b(!1)),2e3)};return r.a.createElement(y,Object(a.a)({},c,{key:String(p),theme:g,code:k,language:O}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:i})=>r.a.createElement("div",{className:T.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(l.a)(T.a.codeBlockContent,O)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},i({token:e,key:t}))))))})))),r.a.createElement("button",{ref:u,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(T.a.copyButton),onClick:E},s?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}},866:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/86476284-b994267f287942113b1bef8fdf69aedf.png"}}]);