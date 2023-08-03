"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5263],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98882:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},l="Policy.GetStoragePrice Method",p={unversionedId:"n3/reference/scapi/framework/native/Policy/GetStoragePrice",id:"n3/reference/scapi/framework/native/Policy/GetStoragePrice",isDocsHomePage:!1,title:"Policy.GetStoragePrice Method",description:"Gets data storage fee per byte.",source:"@site/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice.md",sourceDirName:"n3/reference/scapi/framework/native/Policy",slug:"/n3/reference/scapi/framework/native/Policy/GetStoragePrice",permalink:"/website/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Policy.GetFeePerByte Method",permalink:"/website/docs/n3/reference/scapi/framework/native/Policy/GetFeePerByte"},next:{title:"Policy.IsBlocked Method",permalink:"/website/docs/n3/reference/scapi/framework/native/Policy/IsBlocked"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policygetstorageprice-method"},"Policy.GetStoragePrice Method"),(0,o.kt)("p",null,"Gets data storage fee per byte."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern uint GetStoragePrice();\n")),(0,o.kt)("p",null,"Return:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data storage fee per byte")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static void Test()\n{\n    var price = Policy.GetStoragePrice();\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/Policy"},"Back")))}f.isMDXComponent=!0}}]);