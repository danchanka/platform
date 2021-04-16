(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{497:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),c={title:"ACTIVE FORM operator"},p={unversionedId:"ACTIVE_FORM_operator",id:"version-v4/ACTIVE_FORM_operator",isDocsHomePage:!1,title:"ACTIVE FORM operator",description:"The ACTIVATE FORM operator creates an action that checks the activeness of a form.",source:"@site/versioned_docs/version-v4/ACTIVE_FORM_operator.md",slug:"/ACTIVE_FORM_operator",permalink:"/platform/ACTIVE_FORM_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ACTIVE_FORM_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"ACTIVATE operator",permalink:"/platform/ACTIVATE_operator"},next:{title:"APPLY operator",permalink:"/platform/APPLY_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTIVATE FORM")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that checks the ",Object(o.b)("a",{parentName:"p",href:"/platform/Activity_ACTIVE_"},"activeness")," of a ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ACTIVE FORM formName\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTIVE FORM")," operator creates an action that writes the activeness value of the specified form to the ",Object(o.b)("strong",{parentName:"p"},"System.isActiveForm ","[","]")," property. If the form is active, ",Object(o.b)("strong",{parentName:"p"},"TRUE")," is written."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exampleForm;\ntestActive  {\n    ACTIVE FORM exampleForm;\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\n}\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?a.a.createElement(f,p(p({ref:t},s),{},{components:r})):a.a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);