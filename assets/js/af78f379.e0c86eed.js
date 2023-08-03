"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3394],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55470:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={},l="Main Net and Test Net",p={unversionedId:"n3/develop/network/testnet",id:"n3/develop/network/testnet",isDocsHomePage:!1,title:"Main Net and Test Net",description:"The Neo node runs on the main net by default. The Main net is a block chain network that has been officially launched and operates independently.",source:"@site/docs/n3/develop/network/testnet.md",sourceDirName:"n3/develop/network",slug:"/n3/develop/network/testnet",permalink:"/website/docs/n3/develop/network/testnet",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/network/testnet.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",frontMatter:{},sidebar:"docs",previous:{title:"Build a private chain with one node",permalink:"/website/docs/n3/develop/network/private-chain/solo"},next:{title:"Smart Contract Writing Basics",permalink:"/website/docs/n3/develop/write/basics"}},c=[{value:"Test net features",id:"test-net-features",children:[]},{value:"Connecting to test net",id:"connecting-to-test-net",children:[]},{value:"Applying for Test GAS and Test NEO",id:"applying-for-test-gas-and-test-neo",children:[{value:"Obtaining test coin automatically",id:"obtaining-test-coin-automatically",children:[]},{value:"Applying for test coin from Neo website",id:"applying-for-test-coin-from-neo-website",children:[]}]},{value:"Alternatives to the TestNet",id:"alternatives-to-the-testnet",children:[]}],d={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"main-net-and-test-net"},"Main Net and Test Net"),(0,a.kt)("p",null,"The Neo node runs on the main net by default. The Main net is a block chain network that has been officially launched and operates independently.  "),(0,a.kt)("p",null,"Neo also provides the Test net where developers can develop, debug, and test their programs. Testing programs on the testnet incurs the network fee of test GAS (not real GAS). Test net NEO and GAS can be applied free of charge on the official website (see detailed instructions below)."),(0,a.kt)("p",null,"All the block data of the test net are independent of the main net. If you want to develop some simple smart contracts or try to register assets, test net is sufficient. After the testing is complete, the development can be moved into the Neo mainnet."),(0,a.kt)("h2",{id:"test-net-features"},"Test net features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Asset registration, asset distribution, contract execution, etc. (Does not consume real money)"),(0,a.kt)("li",{parentName:"ul"},"Globalized network that is deployed on Internet."),(0,a.kt)("li",{parentName:"ul"},"Blocks, transactions, and other information in the test net can be easily viewed in the blockchain browser."),(0,a.kt)("li",{parentName:"ul"},"Smart contracts deployed in the test net can be invoked by anyone in the world."),(0,a.kt)("li",{parentName:"ul"},"Test net can not be used as a real environment for commercial applications.")),(0,a.kt)("h2",{id:"connecting-to-test-net"},"Connecting to test net"),(0,a.kt)("p",null,"For Neo-GUI, go to any page and click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," in the lower left corner. Then check ",(0,a.kt)("strong",{parentName:"p"},"Testnet")," in the popped-up page."),(0,a.kt)("p",null,"For Neo-CLI, replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file with the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"config.testnet.json")," under CLI directory."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(76454).Z})),(0,a.kt)("h2",{id:"applying-for-test-gas-and-test-neo"},"Applying for Test GAS and Test NEO"),(0,a.kt)("p",null,"If you are a developer, you can ask for Neo and GAS on the TestNet. You will need a certain amount of test GAS to deploy or invoke a contract in the TestNet.  "),(0,a.kt)("h3",{id:"obtaining-test-coin-automatically"},"Obtaining test coin automatically"),(0,a.kt)("p",null,"You can request up to 500 GAS per day via ",(0,a.kt)("a",{parentName:"p",href:"https://neowish.ngd.network/neo3/"},"NGD faucet"),". "),(0,a.kt)("h3",{id:"applying-for-test-coin-from-neo-website"},"Applying for test coin from Neo website"),(0,a.kt)("p",null,"If you need more than that, you'll have to request it from Neo website manually."),(0,a.kt)("h4",{id:"step-1---look-up-your-public-key"},"Step 1 - Look up your public key"),(0,a.kt)("p",null,"In Neo the address and PUBLIC key are different. "),(0,a.kt)("p",null,"The PUBLIC KEY is shown when you view the PRIVATE KEY. (Never share your PRIVATE key.)  "),(0,a.kt)("h4",{id:"step-2---fill-in-the-request"},"Step 2 - Fill in the request"),(0,a.kt)("p",null,"Complete the form here: ",(0,a.kt)("a",{parentName:"p",href:"https://neo.org/testcoin/apply"},"https://neo.org/testcoin/apply"),". Note that you need to change ",(0,a.kt)("inlineCode",{parentName:"p"},"Neo Version")," to Neo N3."),(0,a.kt)("p",null,'After a day or so you will be sent an email containing a "Multi-party signed address" and the PUBLIC key of the sender. See ',(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/node/gui/advanced"},"Signature"),"."),(0,a.kt)("h4",{id:"step-3---create-a-multi-party-signed-address"},"Step 3 - Create a multi-party signed address"),(0,a.kt)("p",null,'To access the assets, in your Neo-gui you will create a "Multi-party signed address" in your wallet using '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "Multi-party signed address" (from the email) '),(0,a.kt)("li",{parentName:"ul"},"The PUBLIC KEY of the sender (from the email)"),(0,a.kt)("li",{parentName:"ul"},"Your PUBLIC KEY (from STEP 1 above) ")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From Neo-CLI command line, enter the command  ",(0,a.kt)("inlineCode",{parentName:"p"},"import multisigaddress m pubkeys")," to create a multi-party signed address, where:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"m")," is 1 as the minimal signature number and ",(0,a.kt)("inlineCode",{parentName:"p"},"pubkeys")," are the public key used for signing (PUB Key of sender and your PUB key) ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"list asset"),"\uff0cthen you should see the quantity of Neo and/or GAS shown")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"send gas <address> <amount>")," to send a certain amount of GAS to the desired account address."))),(0,a.kt)("h2",{id:"alternatives-to-the-testnet"},"Alternatives to the TestNet"),(0,a.kt)("p",null,"Testing your Smart Contract on the TestNet is a good idea before publishing it on the live network but earlier in your development cycle you should consider using other methods to test your Smart Contacts such as running you own private chain, for more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/network/private-chain/solo"},"Setting up private chain"),"."))}u.isMDXComponent=!0},76454:function(e,t,n){t.Z=n.p+"assets/images/testnet_2_v2-5db9f8b38ae8ab1aab2694fcf31a1048.png"}}]);