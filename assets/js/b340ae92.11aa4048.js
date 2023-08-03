"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[7192],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86404:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},l="**NEO.BalanceOf** Method (UInt160)",p={unversionedId:"n3/reference/scapi/framework/native/Neo/BalanceOf",id:"n3/reference/scapi/framework/native/Neo/BalanceOf",isDocsHomePage:!1,title:"**NEO.BalanceOf** Method (UInt160)",description:"Gets the NEO balance in the account.",source:"@site/docs/n3/reference/scapi/framework/native/Neo/BalanceOf.md",sourceDirName:"n3/reference/scapi/framework/native/Neo",slug:"/n3/reference/scapi/framework/native/Neo/BalanceOf",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo/BalanceOf",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Neo/BalanceOf.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Neo Class",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo"},next:{title:"NEO.GetAccountState Method ()",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo/GetAccountState"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neobalanceof-method-uint160"},(0,o.kt)("strong",{parentName:"h1"},"NEO.BalanceOf")," Method (UInt160)"),(0,o.kt)("p",null,"Gets the NEO balance in the account."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern BigInteger BalanceOf(UInt160 account);\n")),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"account: Script hash of the account")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class Contract1 : SmartContract.Framework.SmartContract\n{\n    private static readonly UInt160 account = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();\n\n    public static object Test()\n    {\n        BigInteger result = NEO.BalanceOf(account);\n        return result;\n    }\n}\n')),(0,o.kt)("p",null,"Response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type":"Integer",\n    "value":"100000000"\n}\n')),(0,o.kt)("p",null,"Response description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Integer type: The account balance is obtained successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others: failed."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/Neo"},"Back")))}f.isMDXComponent=!0}}]);