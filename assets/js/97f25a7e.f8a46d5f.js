"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3127],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},l="NEO.UnclaimedGas Method",s={unversionedId:"n3/reference/scapi/framework/native/Neo/UnclaimedGas",id:"n3/reference/scapi/framework/native/Neo/UnclaimedGas",isDocsHomePage:!1,title:"NEO.UnclaimedGas Method",description:"Gets the number of unclaimed GAS.",source:"@site/docs/n3/reference/scapi/framework/native/Neo/UnclaimedGas.md",sourceDirName:"n3/reference/scapi/framework/native/Neo",slug:"/n3/reference/scapi/framework/native/Neo/UnclaimedGas",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo/UnclaimedGas",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Neo/UnclaimedGas.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"NEO.UnRegisterCandidate Method",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo/UnRegisterCandidate"},next:{title:"NEO.Vote Method",permalink:"/website/docs/n3/reference/scapi/framework/native/Neo/Vote"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neounclaimedgas-method"},"NEO.UnclaimedGas Method"),(0,o.kt)("p",null,"Gets the number of unclaimed GAS."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern BigInteger UnclaimedGas(UInt160 account, uint end);\n")),(0,o.kt)("p",null,"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"account: The script hash of the account to be queried;"),(0,o.kt)("li",{parentName:"ul"},"end: To which block height the query ends.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class Contract1 : SmartContract.Framework.SmartContract\n{\n    private static readonly UInt160 account = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();\n\n    public static object Test()\n    {\n        BigInteger result = NEO.UnclaimedGas(account, 100);\n        return result;\n    }\n}\n')),(0,o.kt)("p",null,"Response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type":"Integer",\n    "value":"100000"\n}\n')),(0,o.kt)("p",null,"Response description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Integer type: unclaimed GAS amount of this address is successfully requested.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others: failed."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/Neo"},"Back")))}m.isMDXComponent=!0}}]);