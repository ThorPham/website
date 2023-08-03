"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[1392],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95665:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={},o="API Reference",p={unversionedId:"n3/reference/rpc/latest-version/api",id:"n3/reference/rpc/latest-version/api",isDocsHomePage:!1,title:"API Reference",description:"Each NEO-CLI node provides an API interface for obtaining blockchain data from it, making it easy to develop blockchain applications. The interface is provided via JSON-RPC, and the underlying protocol uses HTTP/HTTPS for communication.",source:"@site/docs/n3/reference/rpc/latest-version/api.md",sourceDirName:"n3/reference/rpc/latest-version",slug:"/n3/reference/rpc/latest-version/api",permalink:"/website/docs/n3/reference/rpc/latest-version/api",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/rpc/latest-version/api.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",frontMatter:{},sidebar:"docs",previous:{title:"Neo Node Introduction",permalink:"/website/docs/n3/node/Introduction"},next:{title:"calculatenetworkfee Method",permalink:"/website/docs/n3/reference/rpc/latest-version/api/calculatenetworkfee"}},d=[{value:"Listening ports",id:"listening-ports",children:[]},{value:"Command Lists",id:"command-lists",children:[{value:"Blockchain",id:"blockchain",children:[]},{value:"Node",id:"node",children:[]},{value:"Smart Contract",id:"smart-contract",children:[]},{value:"Tool",id:"tool",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"ApplicationLogs plugin",id:"applicationlogs-plugin",children:[]},{value:"TokensTracker plugin",id:"tokenstracker-plugin",children:[]},{value:"StateService plugin",id:"stateservice-plugin",children:[]}]},{value:"GET request example",id:"get-request-example",children:[]},{value:"POST request example",id:"post-request-example",children:[]},{value:"Test tools",id:"test-tools",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-reference"},"API Reference"),(0,l.kt)("p",null,"Each NEO-CLI node provides an API interface for obtaining blockchain data from it, making it easy to develop blockchain applications. The interface is provided via ",(0,l.kt)("a",{parentName:"p",href:"http://wiki.geekdream.com/Specification/json-rpc_2.0.html"},"JSON-RPC"),", and the underlying protocol uses HTTP/HTTPS for communication. "),(0,l.kt)("p",null,"To start a node that provides an RPC service, you must install the plugin ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/releases"},"RpcServer"),". Refer to ",(0,l.kt)("a",{parentName:"p",href:"../../../node/cli/config.html#installing-plugins"},"Installing plugins")," for instructions. No need to add an argument when starting Neo-CLI."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the desired version of file is not found during installation, it is because the corresponding version of RpcServer plug-in has not been released yet. In that case, you can compile the project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules"},"neo-modules")," by yourself:"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Create the folder Plugins under the directory where neo-cli.dll locates."),(0,l.kt)("li",{parentName:"ol"},"Put the RpcServer file you has complied in the Plugins folder and then restart Neo-CLI.")))),(0,l.kt)("h2",{id:"listening-ports"},"Listening ports"),(0,l.kt)("p",null,"After the JSON-RPC server is started, it will listen to the TCP port. By default it is the port 10332 of the local address (127.0.0.1), which is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://127.0.0.1:10332/\n")),(0,l.kt)("p",null,"You can modify the port in config.json in the RpcServer folder."),(0,l.kt)("h2",{id:"command-lists"},"Command Lists"),(0,l.kt)("h3",{id:"blockchain"},"Blockchain"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getbestblockhash"},"getbestblockhash")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the hash of the latest block in the blockchain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getblock"},"getblock")),(0,l.kt)("td",{parentName:"tr",align:null},"<hash ","|"," index",">"," ","[verbose=0]"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the block information with the specified hash value or index.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getblockcount"},"getblockcount")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the block count of the blockchain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getblockhash"},"getblockhash")),(0,l.kt)("td",{parentName:"tr",align:null},"<index",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the block hash with the specified index.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getblockheader"},"getblockheader")),(0,l.kt)("td",{parentName:"tr",align:null},"<hash ","|"," index",">"," ","[verbose=0]"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the information of the block header with the specified script hash or index.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getcommittee"},"getcommittee")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the public key list of current Neo committee members.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnativecontracts"},"getnativecontracts")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the list of native contracts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnextblockvalidators"},"getnextblockvalidators")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the validators list of the next block.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getcontractstate"},"getcontractstate")),(0,l.kt)("td",{parentName:"tr",align:null},"<script_hash",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns information of the contract with the specified script hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getrawmempool"},"getrawmempool")),(0,l.kt)("td",{parentName:"tr",align:null},"[shouldGetUnverified=0]"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a list of confirmed transactions in memory. If the value is 1 it gets all the transactions including both confirmed and unconfirmed transactions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getrawtransaction"},"getrawtransaction")),(0,l.kt)("td",{parentName:"tr",align:null},"<txid",">"," ","[verbose=0]"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the transaction information with the specified hash value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getstorage"},"getstorage")),(0,l.kt)("td",{parentName:"tr",align:null},"<script_hash",">","  <key",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value with the contract script hash and the key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/gettransactionheight"},"gettransactionheight")),(0,l.kt)("td",{parentName:"tr",align:null},"<txid",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the transaction height with the specified transaction hash.")))),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getconnectioncount"},"getconnectioncount")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the current connection count of the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getpeers"},"getpeers")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a list of nodes that are currently connected/disconnected by this node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getversion"},"getversion")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the version information of the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/sendrawtransaction"},"sendrawtransaction")),(0,l.kt)("td",{parentName:"tr",align:null},"<hex",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Broadcasts a transaction over the network.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/submitblock"},"submitblock")),(0,l.kt)("td",{parentName:"tr",align:null},"<hex",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Submits a new block to the network.<br/",">",(0,l.kt)("strong",{parentName:"td"},"Note"),": Need to be a validator")))),(0,l.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getunclaimedgas"},"getunclaimedgas")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Get unclaimed gas of the specified address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/invokefunction"},"invokefunction")),(0,l.kt)("td",{parentName:"tr",align:null},"<script_hash",">","  <operation",">","  ","[","params] ","[","sender] ","[","signers]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invokes a smart contract with the specified script hash, passing in the method name and its params.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/invokescript"},"invokescript")),(0,l.kt)("td",{parentName:"tr",align:null},"<script",">"," ","[","sender] ","[","signers]"),(0,l.kt)("td",{parentName:"tr",align:null},"Runs a script through the virtual machine and returns the results.")))),(0,l.kt)("h3",{id:"tool"},"Tool"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/listplugins"},"listplugins")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list of plugins loaded by the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/validateaddress"},"validateaddress")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Verifies whether the address is a valid NEO address.")))),(0,l.kt)("h3",{id:"wallet"},"Wallet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/calculatenetworkfee"},"calculatenetworkfee")),(0,l.kt)("td",{parentName:"tr",align:null},"<tx",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates network fee for the specified transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/closewallet"},"closewallet")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Closes the current wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/dumpprivkey"},"dumpprivkey")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Exports the private key of the specified address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnewaddress"},"getnewaddress")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a new address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getwalletbalance"},"getwalletbalance")),(0,l.kt)("td",{parentName:"tr",align:null},"<asset_id",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the balance of the corresponding asset in the wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getwalletunclaimedgas"},"getwalletunclaimedgas")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the amount of unclaimed GAS in the wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/importprivkey"},"importprivkey")),(0,l.kt)("td",{parentName:"tr",align:null},"<key",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Imports the private key to the wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/invokecontractverify"},"invokecontractverify")),(0,l.kt)("td",{parentName:"tr",align:null},"<script_hash",">","   ","[","params] ","[","signers]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invokes the verification method of contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/listaddress"},"listaddress")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Lists all the addresses in the current wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/openwallet"},"openwallet")),(0,l.kt)("td",{parentName:"tr",align:null},"<path",">"," <password",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the specified wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/sendfrom"},"sendfrom")),(0,l.kt)("td",{parentName:"tr",align:null},"<asset_id",">","<from",">","<to",">","<value",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfers from the specified address to the destination address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/sendmany"},"sendmany")),(0,l.kt)("td",{parentName:"tr",align:null},"<outputs_array",">"," ","[","signers]"),(0,l.kt)("td",{parentName:"tr",align:null},"Initiates multiple transfers to multiple addresses in a transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/sendtoaddress"},"sendtoaddress")),(0,l.kt)("td",{parentName:"tr",align:null},"<asset_id",">","<address",">","<value",">"," ","[","signers]"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfers to the specified address.")))),(0,l.kt)("h3",{id:"applicationlogs-plugin"},"ApplicationLogs plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getapplicationlog"},"getapplicationlog")),(0,l.kt)("td",{parentName:"tr",align:null},"<txid",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the contract event information based on the specified txid.")))),(0,l.kt)("h3",{id:"tokenstracker-plugin"},"TokensTracker plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnep11balances"},"getnep11balances")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the balance of all NEP11 assets in the specified address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnep11properties"},"getnep11properties")),(0,l.kt)("td",{parentName:"tr",align:null},"<contract_hash",">","<tokenId",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the customized properties of NEP-11 assets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnep17transfers"},"getnep11transfers")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">","[timestamp]"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns all the NEP11 transaction information occurred in the specified address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnep17balances"},"getnep17balances")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the balance of all NEP17 assets in the specified address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getnep17transfers"},"getnep17transfers")),(0,l.kt)("td",{parentName:"tr",align:null},"<address",">","[timestamp]"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns all the NEP17 transaction information occurred in the specified address.")))),(0,l.kt)("h3",{id:"stateservice-plugin"},"StateService plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getstateroot"},"getstateroot")),(0,l.kt)("td",{parentName:"tr",align:null},"<index",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Queries the state root by the block height.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getproof"},"getproof")),(0,l.kt)("td",{parentName:"tr",align:null},"<roothash",">","<scripthash",">","<key",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets proof by querying root hash, contract hash, and storage key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/verifyproof"},"verifyproof")),(0,l.kt)("td",{parentName:"tr",align:null},"<roothash",">","<proof",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Verifies using the root hash and proof, and gets the value of the storage corresponding to the key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getstateheight"},"getstateheight")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Queries the stateroot height.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/getstate"},"getstate")),(0,l.kt)("td",{parentName:"tr",align:null},"<roothash",">","<scripthash",">","<key",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Queries ",(0,l.kt)("inlineCode",{parentName:"td"},"state")," with the ",(0,l.kt)("inlineCode",{parentName:"td"},"root hash"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"contract hash")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"storage key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/rpc/latest-version/api/findstates"},"findstates")),(0,l.kt)("td",{parentName:"tr",align:null},"<roothash",">","<scripthash",">","<prefix",">"," ","[key][count]"),(0,l.kt)("td",{parentName:"tr",align:null},"Queries ",(0,l.kt)("inlineCode",{parentName:"td"},"state")," with the prefix of ",(0,l.kt)("inlineCode",{parentName:"td"},"root hash"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"contract hash")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"storage key"),".")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For RPC API, all the return values related to the amount such as fees, NEP-17 asset balance, wallet balance, transfer amount, etc. are unsigned integer, which are automatically converted according to the asset decimal when requested by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/tree/master/src/RpcClient"},"RpcClient")," (C# light node SDK). If you write the request by yourselves, you need to convert the amount manually. For example, if the return value is 1234560 and the asset decimal is 8, the  actual amount is 0.0123456."))),(0,l.kt)("h2",{id:"get-request-example"},"GET request example"),(0,l.kt)("p",null,"The format of a typical JSON-RPC GET request is as follows:"),(0,l.kt)("p",null,"Here is an example of how to get the number of blocks in the block chain."),(0,l.kt)("p",null,"Request URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://127.0.0.1:10332?jsonrpc=2.0&method=getblockcount&params=[]&id=1\n")),(0,l.kt)("p",null,"After sending the request, you will get the following response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": 909129\n}\n')),(0,l.kt)("h2",{id:"post-request-example"},"POST request example"),(0,l.kt)("p",null,"The format of a typical JSON-RPC Post request is as follows:"),(0,l.kt)("p",null,"Here is an example of how to get the number of blocks in the block chain."),(0,l.kt)("p",null,"Request URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://127.0.0.1:10332\n")),(0,l.kt)("p",null,"Request Body\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getblockcount",\n  "params":[],\n  "id": 1\n}\n')),(0,l.kt)("p",null,"After sending the request, you will get the following response\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": 909122\n}\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To make sure you get the latest result synchronize your client to the latest block height before you use the API."))),(0,l.kt)("h2",{id:"test-tools"},"Test tools"),(0,l.kt)("p",null,"You can use the Chrome extension in Postman to facilitate the test (Installation of the Chrome extension requires Internet connection). A test screenshot is shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(52603).Z})),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chenzhitong/CSharp-JSON-RPC/blob/master/json_rpc/Program.cs"},"C# JSON-RPC Command List")))}m.isMDXComponent=!0},52603:function(e,t,a){t.Z=a.p+"assets/images/api_3-d533134bec903e170252dc5b5374039d.jpg"}}]);