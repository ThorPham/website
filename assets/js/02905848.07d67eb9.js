"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[1749],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={},s="Runtime.GetNotifications Method",l={unversionedId:"n3/reference/scapi/framework/services/Runtime/GetNotifications",id:"n3/reference/scapi/framework/services/Runtime/GetNotifications",isDocsHomePage:!1,title:"Runtime.GetNotifications Method",description:"Gets all notifications of the given contract execution.",source:"@site/docs/n3/reference/scapi/framework/services/Runtime/GetNotifications.md",sourceDirName:"n3/reference/scapi/framework/services/Runtime",slug:"/n3/reference/scapi/framework/services/Runtime/GetNotifications",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/GetNotifications",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Runtime/GetNotifications.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Runtime.CheckWitness Method",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/CheckWitness"},next:{title:"Runtime.Log Method",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/Log"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtimegetnotifications-method"},"Runtime.GetNotifications Method"),(0,o.kt)("p",null,"Gets all notifications of the given contract execution."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern Notification[] GetNotifications(UInt160 hash = null)\n")),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hash: Contract script hash as a byte array of length 20. When the array values are all 0, all notifications that currently exists are returned. ")),(0,o.kt)("p",null,"Return value: All notifications during the contract execution."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public class Contract1 : SmartContract.Framework.SmartContract\n{\n    public static void Main()\n    {\n        Notification[] result1 = Runtime.GetNotifications();\n        byte[] hash = { 2, 123, 48, 51, 62, 13, 14, 101, 82, 174, 109, 29, 169, 249, 64, 159, 85, 30, 53, 238};\n        Notification[] result2 = Runtime.GetNotifications((UInt160)hash);\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services/Runtime"},"Back")))}f.isMDXComponent=!0}}]);