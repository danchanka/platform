(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{683:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),c=(t(0),t(746)),o={title:"Cancel changes (CANCEL)"},i={unversionedId:"Cancel_changes_CANCEL_",id:"version-v4/Cancel_changes_CANCEL_",isDocsHomePage:!1,title:"Cancel changes (CANCEL)",description:"The cancel changes operator completely clears the current change session.",source:"@site/versioned_docs/version-v4/Cancel_changes_CANCEL_.md",slug:"/Cancel_changes_CANCEL_",permalink:"/platform/Cancel_changes_CANCEL_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Cancel_changes_CANCEL_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Apply changes (APPLY)",permalink:"/platform/Apply_changes_APPLY_"},next:{title:"New session (NEWSESSION, NESTEDSESSION)",permalink:"/platform/New_session_NEWSESSION_NESTEDSESSION_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"cancel changes")," operator completely clears the current ",Object(c.b)("a",{parentName:"p",href:"/platform/Change_sessions"},"change session"),"."),Object(c.b)("p",null,"As with other session management operators, you can explicitly specify\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/Session_management#nested"},"nested local properties")," for the cancel operator."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"This operator works differently if executed inside ",Object(c.b)("a",{parentName:"p",href:"/platform/Events#change"},"events")," handling: in this case, it cancels\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/Apply_changes_APPLY_"},"applying the changes")," that led to this handling"))),Object(c.b)("h3",{id:"language"},"Language"),Object(c.b)("p",null,"To declare an action that implements cancellation, use the\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/CANCEL_operator"},Object(c.b)("strong",{parentName:"a"},"CANCEL")," operator"),"."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n")))}s.isMDXComponent=!0},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||c;return t?r.a.createElement(b,i(i({ref:n},p),{},{components:t})):r.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);