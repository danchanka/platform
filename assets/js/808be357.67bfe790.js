(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{420:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(749)),i={title:"Groups of properties and actions"},p={unversionedId:"Groups_of_properties_and_actions",id:"Groups_of_properties_and_actions",isDocsHomePage:!1,title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/docs/Groups_of_properties_and_actions.md",slug:"/Groups_of_properties_and_actions",permalink:"/platform/next/Groups_of_properties_and_actions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Groups_of_properties_and_actions.md",version:"current",sidebar:"learn",previous:{title:"Form structure: Overview",permalink:"/platform/next/Form_structure"},next:{title:"Form views: Overview",permalink:"/platform/next/Form_views"}},c=[{value:"Builtin property groups",id:"builtin",children:[]},{value:"Property groups usage",id:"property-groups-usage",children:[]},{value:"Language",id:"language",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),Object(o.b)("p",null,"All ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"p"),"roperties in the system are divided into ",Object(o.b)("em",{parentName:"p"},"property groups.\xa0")," In this case, all groups form a hierarchy in which each group can contain both properties and other property groups.\xa0The root group in this hierarchy is the ",Object(o.b)("strong",{parentName:"p"},"System.root group.")," All other groups are contained*\xa0",Object(o.b)("em",{parentName:"p"},"in some\xa0"),"parent group.*"),Object(o.b)("p",null,"Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",Object(o.b)("strong",{parentName:"p"},"System.root")," group."),Object(o.b)("h3",{id:"builtin"},"Builtin property groups"),Object(o.b)("p",null,"In addition to ",Object(o.b)("strong",{parentName:"p"},"root")," in the\xa0",Object(o.b)("strong",{parentName:"p"},"System"),"\xa0module, the following groups of properties and actions are created automatically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"root"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"public"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"base"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"id")))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"private"))))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All these groups (including ",Object(o.b)("strong",{parentName:"p"},"root"),") are not used in form display mechanisms (i.e. containers in the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_design#defaultDesign"},"default form design")," and elements of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#hierarchy"},"hierarchical")," import / export hierarchy are not created for them)."))),Object(o.b)("h3",{id:"property-groups-usage"},"Property groups usage"),Object(o.b)("p",null,"Property groups are currently used in the following mechanisms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When displaying forms:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"in the ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Interactive_view"},"interactive"),"\xa0view: you\xa0can specify for each group that a\xa0separate container must be created in the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_design#defaultDesign"},"default design"),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) \xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(o.b)("strong",{parentName:"li"},"B"),"\xa0that a container must be created, and group (or property)\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(o.b)("strong",{parentName:"li"},"B"),", then the container of group (component of property)\xa0",Object(o.b)("strong",{parentName:"li"},"A")," will be the descendant of the container of group ",Object(o.b)("strong",{parentName:"li"},"B"),"."),Object(o.b)("li",{parentName:"ul"},"in the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Structured_view#hierarchy"},"hierarchical"),"\xa0view\xa0:you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) \xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(o.b)("strong",{parentName:"li"},"B"),"\xa0that a tag needs to be created, and group (or property)\xa0",Object(o.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(o.b)("strong",{parentName:"li"},"B"),", then group (property)\xa0",Object(o.b)("strong",{parentName:"li"},"A")," will be enclosed in the tag of group\xa0",Object(o.b)("strong",{parentName:"li"},"B"),".\xa0"))),Object(o.b)("li",{parentName:"ul"},"When automatically creating forms:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(o.b)("strong",{parentName:"li"},"System.base")," group will be displayed in the automatically generated dialog forms for\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Interactive_view#edtClass"},"selecting/editing"),"\xa0objects.\xa0"),Object(o.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(o.b)("strong",{parentName:"li"},"System.id")," group will be displayed in automatically generated ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Constraints#message"},"message display forms")," on\xa0constraint violation."))),Object(o.b)("li",{parentName:"ul"},"In the security policy:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can set a security policy for a group as a whole (and not for each property individually).")))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To add a new property/action group to the system, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/GROUP_instruction"},Object(o.b)("strong",{parentName:"a"},"GROUP")," instruction"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}s.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?n.a.createElement(d,p(p({ref:t},l),{},{components:r})):n.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);