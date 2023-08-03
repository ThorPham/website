"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4298],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96320:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={},s="Notification Class",l={unversionedId:"n3/reference/scapi/framework/services/Notification",id:"n3/reference/scapi/framework/services/Notification",isDocsHomePage:!1,title:"Notification Class",description:"Represents the notification sent when the smart contract executes.",source:"@site/docs/n3/reference/scapi/framework/services/Notification.md",sourceDirName:"n3/reference/scapi/framework/services",slug:"/n3/reference/scapi/framework/services/Notification",permalink:"/website/docs/n3/reference/scapi/framework/services/Notification",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Notification.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Iterator<TKey, TValue>.Value Property",permalink:"/website/docs/n3/reference/scapi/framework/services/Iterator/Value"},next:{title:"Runtime Class",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Constructor",id:"constructor",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notification-class"},"Notification Class"),(0,i.kt)("p",null,"Represents the notification sent when the smart contract executes."),(0,i.kt)("p",null,"Namespace\uff1a",(0,i.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,i.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class Notification : IApiInterface\n")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ScriptHash"),(0,i.kt)("td",{parentName:"tr",align:null},"The script hash of the notification sender")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EventName"),(0,i.kt)("td",{parentName:"tr",align:null},"The event name of the notification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"State"),(0,i.kt)("td",{parentName:"tr",align:null},"The object representing the notification content, which can be of any type such as value, string, array, etc.")))),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("p",null,"Gets Notification objects from ",(0,i.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services/Runtime/GetNotifications"},"Runtime.GetNotifications(UInt160 hash = null)"),"."))}f.isMDXComponent=!0}}]);