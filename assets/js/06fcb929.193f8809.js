"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3011],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||c;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67562:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],l={},i="Contract.GetCallFlags Method",s={unversionedId:"n3/reference/scapi/framework/services/Contract/GetCallFlags",id:"n3/reference/scapi/framework/services/Contract/GetCallFlags",isDocsHomePage:!1,title:"Contract.GetCallFlags Method",description:"Gets the call privilege of the contract.",source:"@site/docs/n3/reference/scapi/framework/services/Contract/GetCallFlags.md",sourceDirName:"n3/reference/scapi/framework/services/Contract",slug:"/n3/reference/scapi/framework/services/Contract/GetCallFlags",permalink:"/website/docs/n3/reference/scapi/framework/services/Contract/GetCallFlags",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Contract/GetCallFlags.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Contract.CreateStandardAccount Method",permalink:"/website/docs/n3/reference/scapi/framework/services/Contract/CreateStandardAccount"},next:{title:"Contract.IsPayable",permalink:"/website/docs/n3/reference/scapi/framework/services/Contract/IsPayable"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"contractgetcallflags-method"},"Contract.GetCallFlags Method"),(0,c.kt)("p",null,"Gets the call privilege of the contract."),(0,c.kt)("p",null,"Namespace: ",(0,c.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,c.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,c.kt)("h2",{id:"syntax"},"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern byte GetCallFlags();\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cs"},"public class Contract1 : SmartContract.Framework.SmartContract\n{\n        public static int GetCallFlags()\n        {\n            return Contract.GetCallFlags();\n        }\n}\n")))}f.isMDXComponent=!0}}]);