"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6054],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(h,c(c({ref:t},p),{},{components:n})):o.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],r={},l="Getting Blockchain Information",s={unversionedId:"n3/develop/tool/sdk/monitor",id:"n3/develop/tool/sdk/monitor",isDocsHomePage:!1,title:"Getting Blockchain Information",description:"The RPC module provides methods to get basic information of blockchain data and status, such as block height, block content, transaction details, and contracts.",source:"@site/docs/n3/develop/tool/sdk/monitor.md",sourceDirName:"n3/develop/tool/sdk",slug:"/n3/develop/tool/sdk/monitor",permalink:"/website/docs/n3/develop/tool/sdk/monitor",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/tool/sdk/monitor.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"About RpcClient",permalink:"/website/docs/n3/develop/tool/sdk/introduction"},next:{title:"RPC Invocation Methods",permalink:"/website/docs/n3/develop/tool/sdk/rpc"}},p=[{value:"Getting blockchain data from RPC interfaces",id:"getting-blockchain-data-from-rpc-interfaces",children:[]},{value:"Getting policy information",id:"getting-policy-information",children:[]},{value:"Getting NEP-17 contract information",id:"getting-nep-17-contract-information",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-blockchain-information"},"Getting Blockchain Information"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC")," module provides methods to get basic information of blockchain data and status, such as block height, block content, transaction details, and contracts. "),(0,i.kt)("p",null,"For some specific information of contracts, such as the block maximum transaction number, system fee per byte, NEP-17 contract details, you need to invoke specific contract methods, which will be introduced in this document."),(0,i.kt)("h2",{id:"getting-blockchain-data-from-rpc-interfaces"},"Getting blockchain data from RPC interfaces"),(0,i.kt)("p",null,"Gets the latest block height or hash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// choose a neo node with rpc opened\nRpcClient client = new RpcClient(new Uri("http://localhost:20332"), null, null, ProtocolSettings.Load("config.json"));\n\n// get the hash of the tallest block in the main chain\nstring hash = await client.GetBestBlockHashAsync().ConfigureAwait(false);\n\n// get the number of blocks in the main chain\nuint count = await client.GetBlockCountAsync().ConfigureAwait(false);\n')),(0,i.kt)("p",null,"Gets the specific data inside a block, including transaction list, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// get the Base64 string of the block with block height\nstring blockHex = await client.GetBlockHexAsync("166396").ConfigureAwait(false);\n\n// get the Base64 string of the block with block hash\nstring blockHex = await client.GetBlockHexAsync("0x4e61cd9d76e30e9147ee0f5b9c92f4447decbe52c6c8b412d0382a14d3a0b408").ConfigureAwait(false);\n\n// get block data with block height\nRpcBlock block = await client.GetBlockAsync("166396").ConfigureAwait(false);\n\n// get block data with block hash\nRpcBlock block = await client.GetBlockAsync("0x4e61cd9d76e30e9147ee0f5b9c92f4447decbe52c6c8b412d0382a14d3a0b408").ConfigureAwait(false);\n')),(0,i.kt)("p",null,"Gets the contract script, hash, and manifest through ",(0,i.kt)("inlineCode",{parentName:"p"},"RpcClient"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// get NEO contract state\nContractState contractState = await client.GetContractStateAsync(NativeContract.NEO.Hash.ToString()).ConfigureAwait(false);\n")),(0,i.kt)("p",null,"For more information refer to ",(0,i.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/tool/sdk/rpc"},"RPC invocation methods"),"."),(0,i.kt)("h2",{id:"getting-policy-information"},"Getting policy information"),(0,i.kt)("p",null,"Invokes the method  ",(0,i.kt)("inlineCode",{parentName:"p"},"policyAPI")," in the native contract ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyContract")," to get the Policy related information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// choose a neo node with rpc opened\nPolicyAPI policyAPI = new PolicyAPI(new RpcClient(new Uri("http://localhost:20332"), null,null, ProtocolSettings.Load("config.json")));\n\n// get the system fee per byte\nlong feePerByte = await policyAPI.GetFeePerByteAsync().ConfigureAwait(false); // 1000, 0.00001000 GAS per byte\n\n// get the max size of one block\nuint maxBlockSize = await policyAPI.GetMaxBlockSizeAsync().ConfigureAwait(false); // 262144, (1024 * 256) bytes one block\n\n// get the max transaction count per block\nuint maxTransactionsPerBlock = await policyAPI.GetMaxTransactionsPerBlockAsync().ConfigureAwait(false); // 512, max 512 transactions one block\n\n// check if the account is blocked\nUInt160 account = Utility.GetScriptHash("NirHUAteaMr6CqWuAAMaEUScPcS3FDKebM");\nbool isBlocked = await policyAPI.IsBlockedAsync(account).ConfigureAwait(false);\n')),(0,i.kt)("h2",{id:"getting-nep-17-contract-information"},"Getting NEP-17 contract information"),(0,i.kt)("p",null,"NEP17 is an asset standard for Neo N3, such as NEO and GAS, both of which are assets based on NEP17 native contract. You can invoke  ",(0,i.kt)("inlineCode",{parentName:"p"},"Nep17API"),"  to get the name, mark, decimal place, and amount of the NEP17 contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// get nep17 token info\nNep17API nep17API = new Nep17API(new RpcClient(new Uri("http://localhost:20332"), null,null, ProtocolSettings.Load("config.json")));\nRpcNep17TokenInfo tokenInfo = await nep17API.GetTokenInfoAsync(NativeContract.NEO.Hash).ConfigureAwait(false);\n')))}u.isMDXComponent=!0}}]);