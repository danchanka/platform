(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{533:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(7),a=(n(0),n(747)),o={title:"Access from an internal system"},i={unversionedId:"Access_from_an_internal_system",id:"version-v4/Access_from_an_internal_system",isDocsHomePage:!1,title:"Access from an internal system",description:"Java interaction",source:"@site/versioned_docs/version-v4/Access_from_an_internal_system.md",slug:"/Access_from_an_internal_system",permalink:"/platform/Access_from_an_internal_system",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Access_from_an_internal_system.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Access from an external system",permalink:"/platform/Access_from_an_external_system"},next:{title:"Access to an external system (EXTERNAL)",permalink:"/platform/Access_to_an_external_system_EXTERNAL_"}},c=[{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Java interaction")),Object(a.b)("p",null,"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."),Object(a.b)("p",null,"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If the initial call comes from the lsFusion system via the ",Object(a.b)("a",{parentName:"li",href:"/platform/Access_to_an_internal_system_INTERNAL_FORMULA_#javato-broken"},"Java interaction"),' mechanism, the action object "through which" the call is done may be used as the "search object" (the class of this action must be inherited from ',Object(a.b)("strong",{parentName:"li"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),", which in turn has all the required interfaces)."),Object(a.b)("li",{parentName:"ol"},"If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called businessLogics).")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"SQL interaction")),Object(a.b)("p",null,"Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access ",Object(a.b)("a",{parentName:"p",href:"/platform/Tables"},"tables")," and ",Object(a.b)("a",{parentName:"p",href:"/platform/Materializations"},"fields")," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no ",Object(a.b)("a",{parentName:"p",href:"/platform/Events"},"events")," will be triggered (including all elements that use them - ",Object(a.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraints"),", ",Object(a.b)("a",{parentName:"p",href:"/platform/Aggregations"},"aggregations"),", etc.), and also no ",Object(a.b)("a",{parentName:"p",href:"/platform/Materializations"},"materializations")," will be recalculated. For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n')))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||a;return n?s.a.createElement(d,i(i({ref:t},l),{},{components:n})):s.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);