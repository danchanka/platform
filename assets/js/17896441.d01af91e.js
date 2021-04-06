(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{742:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(750),i=a(749);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(r.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(r.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(751),d=a(748);function m(e){var t=e.siteTitle,a=e.versionLabel;return l.a.createElement(i.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var t=e.siteTitle,a=e.versionLabel;return l.a.createElement(i.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(r.a,{to:a,onClick:n},l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){var e=Object(o.default)().siteConfig.title,t=Object(c.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(c.useActiveVersion)(t),r=Object(c.useDocVersionSuggestions)(t),i=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var p,b=null!=i?i:(p=s).docs.find((function(e){return e.id===p.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:s.label,to:b.path,onClick:function(){return a(s.name)}})))},b=a(756),g=a(130),E=a.n(g);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return l.a.createElement(i.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:E.a.lastUpdatedDate},a)}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return l.a.createElement(i.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(i.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?l.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?l.a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=a(759),_=a(762),U=a(747),w=a(131),T=a.n(w);t.default=function(e){var t,a=e.content,n=a.metadata,r=a.frontMatter,i=r.image,o=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,u=n.description,v=n.title,g=n.editUrl,E=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,f=n.lastUpdatedBy,w=Object(c.useActivePlugin)({failfast:!0}).pluginId,y=Object(c.useVersions)(w),k=Object(c.useActiveVersion)(w),A=y.length>1;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:v,description:u,keywords:o,image:i}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(U.a)("col",(t={},t[T.a.docItemCol]=!m,t))},l.a.createElement(p,null),l.a.createElement("div",{className:T.a.docItemContainer},l.a.createElement("article",null,A&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k.label)),!d&&l.a.createElement("header",null,l.a.createElement("h1",{className:T.a.docTitle},v)),l.a.createElement("div",{className:"markdown"},l.a.createElement(a,null))),(g||E||f)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},g&&l.a.createElement(_.a,{editUrl:g})),(E||f)&&l.a.createElement(N,{lastUpdatedAt:E,formattedLastUpdatedAt:h,lastUpdatedBy:f}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:n})))),!m&&a.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(L.a,{toc:a.toc}))))}},759:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(747);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(58),o=a.n(s),c="table-of-contents__link";function d(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(d,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return i(c,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(d,{toc:t}))}},762:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),l=a.n(n),r=a(749),i=a(3),s=a(7),o=a(747),c=a(60),d=a.n(c),m=function(e){var t=e.className,a=Object(s.a)(e,["className"]);return l.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(o.a)(d.a.iconEdit,t),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);