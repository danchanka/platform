(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{147:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return b}));var n=i(3),r=i(7),s=(i(0),i(745)),o={title:"Security policy"},a={unversionedId:"Security_policy",id:"version-v4/Security_policy",isDocsHomePage:!1,title:"Security policy",description:"Customizing user roles",source:"@site/versioned_docs/version-v4/Security_policy.md",slug:"/Security_policy",permalink:"/platform/Security_policy",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Security_policy.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Interpreter",permalink:"/platform/Interpreter"},next:{title:"Process monitor",permalink:"/platform/Process_monitor"}},l=[{value:"Customizing user roles",id:"customizing-user-roles",children:[]},{value:"Setting access to system elements",id:"setting-access-to-system-elements",children:[]}],c={toc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"customizing-user-roles"},"Customizing user roles"),Object(s.b)("p",null,"The system uses the concept of User. A user is an object that contains information about one person working in the system. The system can store information about both its own employees and employees of other organizations."),Object(s.b)("p",null,"The functionality available to a User is determined by their Role or list of  Roles. The Role determines which forms, fields, and buttons are available."),Object(s.b)("p",null,"The User\u2019s card (Admin ","\\","\\"," Access ","\\","\\"," Users) indicates the Main role; if necessary, Additional roles are assigned (Fig. 1.)."),Object(s.b)("p",null,Object(s.b)("img",{src:i(795).default})),Object(s.b)("p",null,"Fig. 1. Assigning Employee Roles"),Object(s.b)("h3",{id:"setting-access-to-system-elements"},"Setting access to system elements"),Object(s.b)("p",null,"The security policy for each Role is configured in the Admin ","\\","\\"," Access ","\\","\\"," Security Policy ","\\","\\"," Roles tab. This is where the makeup of the Roles is determined, using the \xabAdd\xbb, \xabDelete\xbb, and \xabCopy\xbb buttons. When a Role is copied, all rights are copied too. If \xabdefault main role\xbb is specified, then when a new employee is saved without a primary role they will be assigned a role from this field."),Object(s.b)("p",null,Object(s.b)("img",{src:i(796).default})),Object(s.b)("p",null,"Fig. 2. Configuring security policy by role"),Object(s.b)("p",null,"For each Role, you can define some initial rights:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Enable / disable all elements of the navigator")," \u2013 serves for initial installation of access rights to all forms. For Roles with limited access to functionality, it is recommended that you set ",Object(s.b)("em",{parentName:"li"},"\xabDisable all navigation elements\xbb"),". This facilitates further customization of access to specific forms: you only need to list the forms to which the user has access."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Enable / disable viewing of all properties")," \u2013 serves for initial setting of rights to view all form elements: buttons, fields, \xabbirds\xbb , etc."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Enable / disable changing all properties")," \u2013 serves for initial installation of rights to use all form elements."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Prevent viewing / editing security policies")," \u2013 restricts access to security policy settings, i.e. an employee with this role will not be able to independently change access to form elements."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Disable password changes")," \u2013 employees with this role are not allowed to change their passwords. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Disable profile editing")," \u2013 employees with this role are not allowed to change their Login, First Name, Last Name, Email, or font size. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Open form once")," \u2013 if the user repeatedly opens an already open form (usually by accident), an additional window for the form is not created. If you do need to open the same form again, then hold down the Ctrl key when calling the form. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Forms when opened")," \u2013 for each role, you can define the Forms that will be opened immediately when the employee enters the program. To do this, use the \xabDisplay forms by default\xbb field; the number is then indicated for the forms in the \xab, Default number\xbb field in the \xabNavigator\xbb tab. Usually used for a cashier's workstation.")),Object(s.b)("p",null,"Tabs on the \xabSecurity policy\xbb","\\","\\"," tab \xabRoles\xbb form:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The \xabNavigator\xbb tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient for controlling access to them. In addition, a deeper the tree branch, the higher the priority set to ",Object(s.b)("em",{parentName:"li"},"Allow / Deny"),". For example, on the \xabDesktop\xbb, set the ",Object(s.b)("em",{parentName:"li"},"Deny")," flag for the entire Sales section but the ",Object(s.b)("em",{parentName:"li"},"Allow")," flag for the \xabInvoice\xbb form. (fig. 3.)")),Object(s.b)("p",null,Object(s.b)("img",{src:i(797).default})),Object(s.b)("p",null,"Fig. 3. Example of configuring access to forms"),Object(s.b)("p",null,"As a result, when a user logs in with this role, they will be able to access the \xabInvoice\xbb form but they will not see the \xabProcessing internal orders\xbb form. (fig. 4.)"),Object(s.b)("p",null,Object(s.b)("img",{src:i(798).default})),Object(s.b)("p",null,"Fig. 4. Result of setting access to forms"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The \xabProperties\xbb tab displays all the form elements available in the system: fields, buttons, \xabbirds\xbb, etc. Like the Forms themselves, Properties are presented in tree and table form. The functional content of the forms used can be set for a role by setting permissions / prohibitions on viewing and changing properties. As practice shows, using this tab is justified for setting access to the upper branches of the property tree, i.e. for whole property groups. To configure access by specific properties (on a specific form), it is better to use the context menu (right-click) on the form element of interest. For example, on the ",Object(s.b)("em",{parentName:"li"},"\xabInvoice (purchase)\xbb")," form we need to set constraints on closing documents for some roles. To do this, hover the mouse over the \xabClose\xbb button and right-click on ",Object(s.b)("em",{parentName:"li"},"\xabSecurity policy settings\xbb")," (fig. 5).")),Object(s.b)("p",null,Object(s.b)("img",{src:i(799).default})),Object(s.b)("p",null,"Fig. 5. How to configure access to an individual property"),Object(s.b)("p",null,"In the window that opens, check \xabDisable view\xbb. in the \xabAccess\xbb section. This means that for all roles, by default, this button in this form will not be visible. And further, by checking permit against certain roles, we enable employees of only these roles to use this button (Fig.7.7.)."),Object(s.b)("p",null,Object(s.b)("img",{src:i(800).default})),Object(s.b)("p",null,"Fig. 6. Option for configuring access to an individual property"),Object(s.b)("p",null,"In the same way, you can organize access to fields and columns on any form. All changes made when configuring access to an individual element of the Form are transmitted to the \xabProperties\xbb tab on the \xabSecurity policy\xbb form."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"On the tab \xabAdditional Security Policy\xbb, you can set the highest priority rights (bypassing those previously described) for some features in the program. This is done by entering the number 1 in the \xabOrder\xbb field (Fig. 7.).")),Object(s.b)("p",null,Object(s.b)("img",{src:i(801).default})),Object(s.b)("p",null,"Fig. 7. Setting an additional security policy"),Object(s.b)("p",null,"For Forms and Properties for which access rights have not been set (the enable / disable flags are not specified) at the role level, the rights specified in the \xabDefault\xbb are applied (Fig. 8.)."),Object(s.b)("p",null,Object(s.b)("img",{src:i(802).default})),Object(s.b)("p",null,"Fig. 8. Setting a default security policy"),Object(s.b)("p",null,"All changes made on the \xabSecurity policy\xbb form are activated after the next user login."))}b.isMDXComponent=!0},745:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return m}));var n=i(0),r=i.n(n);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(i),f=n,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return i?r.a.createElement(m,a(a({ref:t},c),{},{components:i})):r.a.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<s;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},795:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241092-c7a8f222d016b37246b80cbc2fc97e79.png"},796:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241093-07098bf16173e36043cfe86de4f098b5.png"},797:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241094-e22bfbc68ece6dbd097d4531d4503ea3.png"},798:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241095-e15960935673dd130913e5accf46b72e.png"},799:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241096-18953e9ac8febe5161c3ca0ea999014e.png"},800:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241097-5223bf8bbcb749143a1fae8edc88169e.png"},801:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241098-0c86de253ab4738e0978cb4787b4856a.png"},802:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241099-6e498f3567b3d2ae8ff5518704fc1a6f.png"}}]);