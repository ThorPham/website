"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9822],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"How to transfer NFT using PROPS's SDK",description:"Transfer NFT on the Neo blockchain from one wallet to another wallet using props's SDK.",author:"Apisit",tags:["PROPS","REACT","JS"],skill:"beginner",sidebar:!0},c="How to transfer NFT using PROPS's SDK",l={permalink:"/website/tutorials/2022/06/18/transfer-nft-with-props-sdk",source:"@site/tutorials/2022-06-18-transfer-nft-with-props-sdk/index.md",title:"How to transfer NFT using PROPS's SDK",description:"Transfer NFT on the Neo blockchain from one wallet to another wallet using props's SDK.",date:"2022-06-18T00:00:00.000Z",formattedDate:"June 18, 2022",tags:[{label:"PROPS",permalink:"/website/tutorials/tags/props"},{label:"REACT",permalink:"/website/tutorials/tags/react"},{label:"JS",permalink:"/website/tutorials/tags/js"}],readingTime:.665,truncated:!1,authors:[{name:"Apisit"}],prevItem:{title:"How to transfer Neo, Gas or any NEP-17 token using neon-js",permalink:"/website/tutorials/2022/10/17/transfer-neo-or-gas-with-neon-js"},nextItem:{title:"NeoID, NeoOracle and NeoFS demo",permalink:"/website/tutorials/2021/12/07/demo-of-n3-core-components"}},p={authorsImageUrls:[void 0]},u=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Code",id:"code",children:[]}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this short tutorial, you will learn how to transfer any NFT on the Neo blockchain using Props's SDK."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/CityOfZion/neon-js"},"Neon.js")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"npm i @cityofzion/neon-js  "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://props.coz.io/d"},"Props SDK")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"npm install @cityofzion/props --save  ")))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//import these two libs\nimport * as PropsSDK from \'@cityofzion/props\'\nimport Neon from "@cityofzion/neon-js";\n\n\n\n//Code part to make a transfer\ntry {\n    const fromAccount = Neon.create.account("PUT YOUR WIF HERE")\n    const node = Neon.create.rpcClient(\'https://mainnet1.neo.coz.io:443\')\n    const assetHash = "" //smart contract hash\n    const toAddress = "" //N3 address\n    const tokenID = "" //A token Id of the NFT you want to transfer\n    const res = await PropsSDK.api.PuppetAPI.transfer(\n        node.url,\n        Neon.CONST.MAGIC_NUMBER.MainNet, //change this to match the network you are using.\n        assetHash,\n        toAddress,\n        tokenId,\n        fromAccount\n    )\n    console.log(res) //The response is published transaction ID.\n} catch (e) {\n    console.log(e)\n}\n')))}m.isMDXComponent=!0}}]);