"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4410],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15654:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],s={},i="**GAS.Transfer Method**",l={unversionedId:"n3/reference/scapi/framework/native/Gas/Transfer",id:"n3/reference/scapi/framework/native/Gas/Transfer",isDocsHomePage:!1,title:"**GAS.Transfer Method**",description:"Transfers GAS",source:"@site/docs/n3/reference/scapi/framework/native/Gas/Transfer.md",sourceDirName:"n3/reference/scapi/framework/native/Gas",slug:"/n3/reference/scapi/framework/native/Gas/Transfer",permalink:"/website/docs/n3/reference/scapi/framework/native/Gas/Transfer",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Gas/Transfer.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"GAS.TotalSupply Method",permalink:"/website/docs/n3/reference/scapi/framework/native/Gas/TotalSupply"},next:{title:"Ledger Class",permalink:"/website/docs/n3/reference/scapi/framework/native/Ledger"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gastransfer-method"},(0,o.kt)("strong",{parentName:"h1"},"GAS.Transfer Method")),(0,o.kt)("p",null,"Transfers GAS"),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern bool Transfer(UInt160 from, UInt160 to, BigInteger amount, object data = null);\n")),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from: Script hash of the account you transfer from"),(0,o.kt)("li",{parentName:"ul"},"to: Script hash of the account you transfer to"),(0,o.kt)("li",{parentName:"ul"},"amount: The amount to be transferred."),(0,o.kt)("li",{parentName:"ul"},"data: An additional parameter, which will be passed as a parameter when the onNEP17Payment method of the receiver is called in the transfer method of NEP-17.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class Contract1 : SmartContract.Framework.SmartContract\n{\n    private static readonly UInt160 from = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();\n    private static readonly UInt160 to = "NXjtqYERuvSWGawjVux8UerNejvwdYg7eE".ToScriptHash();\n\n    public static object Test()\n    {\n        bool result = GAS.Transfer(from, to, 1000);\n        return result;\n    }\n}\n')),(0,o.kt)("p",null,"Respond:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type":"Boolean",\n    "value":"true"\n}\n')),(0,o.kt)("p",null,"Respond description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Boolean type: true means assets are transferred successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others: failed."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/Gas"},"Back")))}f.isMDXComponent=!0}}]);