(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{544:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(747)),i={title:"Report design"},p={unversionedId:"Report_design",id:"version-v4/Report_design",isDocsHomePage:!1,title:"Report design",description:"For each report you need to specify a special file (template) which will be used to build the result document. The name of the template for a specific\xa0report is \\*. Anempty\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the \\_ postfix).",source:"@site/versioned_docs/version-v4/Report_design.md",slug:"/Report_design",permalink:"/platform/Report_design",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Report_design.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Print view: Overview",permalink:"/platform/Print_view"},next:{title:"Structured view",permalink:"/platform/Structured_view"}},s=[],c={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For each report you need to specify a special file (",Object(a.b)("em",{parentName:"p"},"template)")," which will be used to build the result document. The name of the template for a specific\xa0report is <name\xa0",Object(a.b)("em",{parentName:"p"},"of form",">","_"),"<name of the first\xa0",Object(a.b)("em",{parentName:"p"},"group of objects"),">",". An",Object(a.b)("a",{parentName:"p",href:"/platform/Static_view#empty"},"empty"),"\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the ","_"," postfix)."),Object(a.b)("p",null,"When developing a template, the developer can use the object group properties that are included in the corresponding report or ancestor reports as fields. The names and types of fields will be equal to the names and types of properties on the form.\xa0If one report is a child of another report, then it should be inserted into the template as a subreport. In this case, the properties and filters in it will use the current values of the objects of the upper report as the values of their upper objects."),Object(a.b)("p",null,"If at least one of the templates cannot be found when generating reports, an automatic template generation mechanism\xa0starts based on the current hierarchy: it creates a separate template for each report and adds all the necessary properties and subreports to it. At the same time, if several object groups are included in one report\xa0then the lowest group in the list will be used for detail, and a separate report group will be created with its own block for each upper group in the template, to which all the properties from this group will be added."),Object(a.b)("p",null,"The LGPL technology\xa0",Object(a.b)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jasperreports-library"},"JasperReports")," is used as a specific implementation of the document generation mechanism. Accordingly, templates are jrxml format files, which can be edited using the ",Object(a.b)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jaspersoft-studio"},"JasperSoft Studio")," application. At the time of generating the report, template files with the name <template name",">",".jrxml are searched for in the server's current\xa0",Object(a.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"},"classpath")," (including all subdirectories). If no template file is found, the platform will generate an automatic design. When starting the server from the IDE and generating a report in\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_#interactive"},"preview mode"),", you can use the corresponding buttons\xa0to save this design to the launch directory (and the source directory), and then edit it in line with the requirements of the task (in this case, the platform will automatically sync files in the launch directory and source directory)."))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?o.a.createElement(h,p(p({ref:t},c),{},{components:r})):o.a.createElement(h,p({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);