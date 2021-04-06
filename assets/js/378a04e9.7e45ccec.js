(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"Open form: Overview",sidebar_label:"Overview"},c={unversionedId:"Open_form",id:"version-v4/Open_form",isDocsHomePage:!1,title:"Open form: Overview",description:"The open form operator creates an action that opens the specified form.",source:"@site/versioned_docs/version-v4/Open_form.md",slug:"/Open_form",permalink:"/platform/Open_form",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Open_form.md",version:"v4",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Structured view",permalink:"/platform/Structured_view"},next:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/platform/In_an_interactive_view_SHOW_DIALOG_"}},p=[{value:"Form selection",id:"form",children:[]},{value:"View type",id:"view-type",children:[]},{value:"Passing objects",id:"params",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"open form")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that opens the specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),"."),Object(o.b)("h3",{id:"form"},"Form selection"),Object(o.b)("p",null,"In addition to explicitly specifying the form to be opened, the platform also allows to open the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#edtClass"},"list/edit")," form for objects of the specified class.\xa0In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."),Object(o.b)("h3",{id:"view-type"},"View type"),Object(o.b)("p",null,"When a form is opened, the ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_views"},"view"),"\xa0type which will be used to display the form needs to be specified:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/In_an_interactive_view_SHOW_DIALOG_"},"In an interactive view (SHOW, DIALOG)")),Object(o.b)("li",{parentName:"ul"},"In a static view:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/In_a_print_view_PRINT_"},"In a print view (PRINT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/In_a_structured_view_EXPORT_IMPORT_"},"In a structured view (EXPORT, IMPORT)"))))),Object(o.b)("h3",{id:"params"},"Passing objects"),Object(o.b)("p",null,"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In interactive view: the passed value is set as the ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#currentObject-broken"},"current")," object."),Object(o.b)("li",{parentName:"ul"},"In a static view: an additional ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#filters"},"filter")," will be set so that the object must be ",Object(o.b)("a",{parentName:"li",href:"/platform/Comparison_operators_=_..._"},"equal")," to the passed value.")),Object(o.b)("p",null,"By default, all passed values of objects must be defined (not ",Object(o.b)("strong",{parentName:"p"},"NULL"),");**\xa0",Object(o.b)("strong",{parentName:"p"},"otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing\xa0"),"NULL** values). In this case (as in the case when no object is passed at all), the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultobject"},"default object")," will be selected as the current object.\xa0"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is worth noting that passing objects in the interactive view is basically the same as the ",Object(o.b)("a",{parentName:"p",href:"/platform/Search_SEEK_"},"object seek")," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",Object(o.b)("a",{parentName:"p",href:"/platform/Search_SEEK_#direction"},"seek direction")," is determined by the default object type (",Object(o.b)("strong",{parentName:"p"},"PREV")," here is equivalent to ",Object(o.b)("strong",{parentName:"p"},"FIRST"),")."))))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,u=b["".concat(i,".").concat(f)]||b[f]||m[f]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);