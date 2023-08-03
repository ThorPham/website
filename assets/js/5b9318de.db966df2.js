"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[1143],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:3},l="Contract",p={unversionedId:"n3/node/gui/contract",id:"n3/node/gui/contract",isDocsHomePage:!1,title:"Contract",description:"In the Neo-GUI homepage click Contract to enter the contract page, where you can quickly search, deploy, or invoke a contract.",source:"@site/docs/n3/node/gui/contract.md",sourceDirName:"n3/node/gui",slug:"/n3/node/gui/contract",permalink:"/website/docs/n3/node/gui/contract",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/node/gui/contract.md",tags:[],version:"current",lastUpdatedBy:"Apisit",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Wallet",permalink:"/website/docs/n3/node/gui/wallet"},next:{title:"Advanced Functions",permalink:"/website/docs/n3/node/gui/advanced"}},s=[{value:"Searching a contract",id:"searching-a-contract",children:[]},{value:"Deploying a contract",id:"deploying-a-contract",children:[]},{value:"Invoking a contract",id:"invoking-a-contract",children:[]}],d={toc:s};function u(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract"},"Contract"),(0,o.kt)("p",null,"In the Neo-GUI homepage click ",(0,o.kt)("strong",{parentName:"p"},"Contract")," to enter the contract page, where you can quickly search, deploy, or invoke a contract."),(0,o.kt)("h2",{id:"searching-a-contract"},"Searching a contract"),(0,o.kt)("p",null,"In the search box, you can search for a contract by its contract hash."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16768).Z})),(0,o.kt)("p",null,"Upon searching the contract details page is displayed, where you can view the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Contract Hash"),": The hash generated by the contract script using the RIPEMD-160 algorithm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ID"),"\uff1aThe serial number of the contract, where negative numbers represent native contracts and positive numbers represent ordinary smart contracts."),(0,o.kt)("li",{parentName:"ul"},"Contract methods & notifications: methods and events/notifications included in the contract, including the method name, parameter, and returned value details.")),(0,o.kt)("h2",{id:"deploying-a-contract"},"Deploying a contract"),(0,o.kt)("p",null,"To deploy a contract on the blockchain, open a wallet first and then do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Deploy Contract")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the nef and manifest files compiled along with the contract previously."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(27267).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Trial Run")," to test running and check the result."),(0,o.kt)("p",{parentName:"li"},"If something goes wrong, there may be these reasons:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The contract already exists"),(0,o.kt)("li",{parentName:"ul"},"nef file and manifest file do not match"),(0,o.kt)("li",{parentName:"ul"},"Nef file or manifest error"),(0,o.kt)("li",{parentName:"ul"},"Insufficient handling fee"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the trial run goes successfully, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," to confirm the deployment."))),(0,o.kt)("p",null,"After the contract is deployed on the blockchain successfully, you can search and invoke the contract with the contract hash."),(0,o.kt)("p",null,"For more information refer to ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/deploy/deploy"},"Deploying Smart Contracts"),"."),(0,o.kt)("h2",{id:"invoking-a-contract"},"Invoking a contract"),(0,o.kt)("p",null,"After the contract deployed on the blockchain you can enter the ",(0,o.kt)("strong",{parentName:"p"},"Invoke")," page to invoke the contract."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the contract script hash in the search box and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Search")," ."),(0,o.kt)("p",{parentName:"li"},"The methods and parameters included in the current contract are displayed. These information was obtained from the contract manifest file on the blockchain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the desired method and fill in the parameters. Suppose we invoke a transfer method in the nep17 standard, fill in the following\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"from"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"to"),": Addresses you transfer assets from and to. You can select one of the following data types and enter corresponding string:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Address - standard address"),(0,o.kt)("li",{parentName:"ul"},"Hash160 - endian hash of the address"),(0,o.kt)("li",{parentName:"ul"},"ByteArray - little endian hash (Base64-encoding) of the address")),(0,o.kt)("p",{parentName:"li"},"You can use the Data Transform tool built in Neo-GUI to convert the wallet address into required string."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(44831).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"amount"),"\uff1a1*10000 (accuracy)"),(0,o.kt)("p",{parentName:"li"},"When invoking the tranfer method in the nep17 standard, the amount filled in needs to be multiplied by the nep17 accuracy."))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(50433).Z})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cosigners"),": (Optional) In case that cosigners are required by some methods when invoked, you need to add one or multiple standard accounts in the Cosigners field."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Invoke")," to test running and check the result."),(0,o.kt)("p",{parentName:"li"},"A trial run just creates a NeoVM locally and simulates execution. It does not affect the blockchain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the trial run goes successfully, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke"),"."))),(0,o.kt)("p",null,"For more information refer to ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/deploy/invoke"},"Invoking Smart Contracts"),"."))}u.isMDXComponent=!0},44831:function(e,t,n){t.Z=n.p+"assets/images/datatransf_1-e1ee58bdda591217b3e7effe21553b54.png"},27267:function(e,t,n){t.Z=n.p+"assets/images/guiDeployContract-1a50fb5ce1a9e6f8345051e89d32daf7.png"},50433:function(e,t,n){t.Z=n.p+"assets/images/guiInvokeContract-46be6347c7e1479d9ee2dab28cc67c5c.png"},16768:function(e,t,n){t.Z=n.p+"assets/images/guiSearchContract-fb9d4e3ae1f16ee9764dd052dac97b63.png"}}]);