"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[2140],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25589:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c=["components"],o={},s="Runtime.CheckWitness Method",l={unversionedId:"n3/reference/scapi/framework/services/Runtime/CheckWitness",id:"n3/reference/scapi/framework/services/Runtime/CheckWitness",isDocsHomePage:!1,title:"Runtime.CheckWitness Method",description:"Verifies that the transactions / block of the calling contract has validated the required script hashes.",source:"@site/docs/n3/reference/scapi/framework/services/Runtime/CheckWitness.md",sourceDirName:"n3/reference/scapi/framework/services/Runtime",slug:"/n3/reference/scapi/framework/services/Runtime/CheckWitness",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/CheckWitness",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Runtime/CheckWitness.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Runtime Class",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime"},next:{title:"Runtime.GetNotifications Method",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/GetNotifications"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtimecheckwitness-method"},"Runtime.CheckWitness Method"),(0,a.kt)("p",null,"Verifies that the transactions / block of the calling contract has validated the required script hashes."),(0,a.kt)("p",null,"Namespace: ",(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,a.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern bool CheckWitness(UInt160 hash);\npublic static extern bool CheckWitness(ECPoint pubkey);\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hash: script hash"),(0,a.kt)("li",{parentName:"ul"},"Pubkey: public key as a byte array of length 33.")),(0,a.kt)("p",null,"Return value: Whether if the verification has been done, boolean."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class Contract1 : SmartContract\n{\n    public static void Main()\n    {\n        byte[] pubKey = { 2, 123, 48, 51, 62, 13, 14, 101, 82, 174, 109, 29, 169, 249, 64, 159, 85, 30, 53, 238, 151, 25, 48, 94, 148, 93, 196, 220, 186, 153, 132, 86, 202 };\n        bool result1 = Runtime.CheckWitness((ECPoint)pubKey);\n        byte[] scriptHash = { 36, 23, 241, 177, 228, 54, 109, 223, 27, 237, 139, 54, 207, 38, 132, 101, 172, 3, 10, 73 };\n        bool result2 = Runtime.CheckWitness((UInt160)scriptHash);\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services/Runtime"},"Back")))}m.isMDXComponent=!0}}]);