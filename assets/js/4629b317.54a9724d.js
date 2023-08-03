"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[8033],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c="Differences between Neo N3 and Neo Legacy",s={unversionedId:"n3/develop/write/difference",id:"n3/develop/write/difference",isDocsHomePage:!1,title:"Differences between Neo N3 and Neo Legacy",description:"This document describes the main differences in writing smart contracts between Neo N3 and Neo Legacy. Developers who want to migrate Neo Legacy contracts to Neo N3 need to be aware of these changes. Since Neo N3 is still being updated, here we only list significant changes and the document will be updated continuously.",source:"@site/docs/n3/develop/write/difference.md",sourceDirName:"n3/develop/write",slug:"/n3/develop/write/difference",permalink:"/website/docs/n3/develop/write/difference",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/write/difference.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Smart Contract Writing Basics",permalink:"/website/docs/n3/develop/write/basics"},next:{title:"Smart Contract Framework (C",permalink:"/website/docs/n3/develop/write/framework"}},d=[{value:"Development Environment",id:"development-environment",children:[{value:".NET Core",id:"net-core",children:[]},{value:"Visual Studio Extension",id:"visual-studio-extension",children:[]},{value:"Compiler",id:"compiler",children:[]}]},{value:"Contract Template",id:"contract-template",children:[{value:"Namespace",id:"namespace",children:[]},{value:"Contract Feature",id:"contract-feature",children:[]},{value:"Declaration of static variables",id:"declaration-of-static-variables",children:[]},{value:"Methods and Events",id:"methods-and-events",children:[]},{value:"Permission",id:"permission",children:[]}]},{value:"Contract Framework",id:"contract-framework",children:[{value:"Native contracts",id:"native-contracts",children:[]},{value:"Class",id:"class",children:[]},{value:"Storage",id:"storage",children:[]},{value:"TokenSale Operations",id:"tokensale-operations",children:[]},{value:"Exception",id:"exception",children:[]},{value:"Static call",id:"static-call",children:[]},{value:"Dynamic call",id:"dynamic-call",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"differences-between-neo-n3-and-neo-legacy"},"Differences between Neo N3 and Neo Legacy"),(0,l.kt)("p",null,"This document describes the main differences in writing smart contracts between Neo N3 and Neo Legacy. Developers who want to migrate Neo Legacy contracts to Neo N3 need to be aware of these changes. Since Neo N3 is still being updated, here we only list significant changes and the document will be updated continuously."),(0,l.kt)("h2",{id:"development-environment"},"Development Environment"),(0,l.kt)("h3",{id:"net-core"},".NET Core"),(0,l.kt)("p",null,"In Neo N3, .NET Core version has been upgraded from 3.0 to 5.0. You need to update SDK."),(0,l.kt)("h3",{id:"visual-studio-extension"},"Visual Studio Extension"),(0,l.kt)("p",null,"In Neo N3, the Visual Studio extensions are updated. You need to uninstall the old NeoContractPlugin plugin, compile, and install the latest NeoContractPlugin."),(0,l.kt)("p",null,"The new contract templates have major updates. For more information refer to ",(0,l.kt)("a",{href:"#\u5408\u7ea6\u6a21\u677f"},"Contract\xa0Template"),"."),(0,l.kt)("h3",{id:"compiler"},"Compiler"),(0,l.kt)("p",null,"In Neo N3, the old neon (Neo.Compiler.MSIL) has been deprecated. You need to use the latest nccs (Neo.Compiler.CSharp) compiler, which has major changes as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Not support for the language Visual Basic."),(0,l.kt)("li",{parentName:"ul"},"Ability to directly compile the  C# code to smart contracts without the intermediate language IL. "),(0,l.kt)("li",{parentName:"ul"},"Ability to directly compile solutions, projects, and C# files."),(0,l.kt)("li",{parentName:"ul"},"Support for more C# features."),(0,l.kt)("li",{parentName:"ul"},"Deterministic compilation. If the code and compiler are deterministic, the compiled contract is deterministic."),(0,l.kt)("li",{parentName:"ul"},"abi files upgraded to manifest files."),(0,l.kt)("li",{parentName:"ul"},"nvm files upgraded to nef files."),(0,l.kt)("li",{parentName:"ul"},"Compile directory changed from ",(0,l.kt)("inlineCode",{parentName:"li"},"bin/debug")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"bin/sc"),".")),(0,l.kt)("h2",{id:"contract-template"},"Contract Template"),(0,l.kt)("h3",{id:"namespace"},"Namespace"),(0,l.kt)("p",null,"Neo Legacy\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"using Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Services.Neo;\nusing System;\n")),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"using Neo;\nusing Neo.SmartContract;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\nusing System;\n")),(0,l.kt)("h3",{id:"contract-feature"},"Contract Feature"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Neo Legacy"),(0,l.kt)("th",{parentName:"tr",align:null},"Neo N3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contract info"),(0,l.kt)("td",{parentName:"tr",align:null},"You need to fill in contract information such as the name, author, email, etc. when deploying the contract."),(0,l.kt)("td",{parentName:"tr",align:null},"Add the contract features to the contract file, written as ",(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/"},"C# Features"),", for example\uff1a",(0,l.kt)("br",null),'[ManifestExtra("Author", "Neo")]',(0,l.kt)("br",null),'[ManifestExtra("Email", "dev@neo.org")]',(0,l.kt)("br",null),'[ContractTrust("',"*",'")]',(0,l.kt)("br",null),'[ContractPermission("',"*",'", "',"*",'")]',(0,l.kt)("br",null),'[SupportedStandards("NEP-17")]',(0,l.kt)("br",null),'[ManifestExtra("Description", "This is a contract example")]',(0,l.kt)("br",null),"public class Contract1 : SmartContract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contract function"),(0,l.kt)("td",{parentName:"tr",align:null},"When deploying a contract, you need to declare contract features such as whether to use storage, whether it can be called dynamically, and whether to accept NEP-5 assets."),(0,l.kt)("td",{parentName:"tr",align:null},"All contracts can use the storage and dynamic calls by default. You can implement the OnNEP17Payment method to accept NEP-17 assets and implement the OnNEP11Payment method to accept NEP-11 (NFT standard) assets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Declare support for NEP"),(0,l.kt)("td",{parentName:"tr",align:null},"Code example:",(0,l.kt)("br",null),"public static string[] SupportedStandards()",(0,l.kt)("br",null),"{",(0,l.kt)("br",null),'    string[] result = { "NEP-5", "NEP-7", "NEP-10" };',(0,l.kt)("br",null),"    return result;",(0,l.kt)("br",null),"}"),(0,l.kt)("td",{parentName:"tr",align:null},"Directly add the feature to the contract class name ",(0,l.kt)("inlineCode",{parentName:"td"},'[SupportedStandards("NEP-17")]'))))),(0,l.kt)("h3",{id:"declaration-of-static-variables"},"Declaration of static variables"),(0,l.kt)("p",null,"Neo Legacy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'private static readonly byte[] InitialOwnerScriptHash = "AJhZmdHxW44FWMiMxD5bTiF7UgHcp3g2Fr".ToScriptHash();\n')),(0,l.kt)("p",null,"Neo N3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'[InitialValue("NiNmXL8FjEUEs1nfX9uHFBNaenxDHJtmuB", ContractParameterType.Hash160)]\nstatic readonly UInt160 Owner = default;\n')),(0,l.kt)("h3",{id:"methods-and-events"},"Methods and Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Neo Legacy"),(0,l.kt)("th",{parentName:"tr",align:null},"Neo N3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"main"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Removed. Developers no longer need to write the redundant main method for contract method jumping")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Determined in the Main method, for example\uff1a",(0,l.kt)("br",null),"public static object Main(string method, object[] args)",(0,l.kt)("br",null),"{",(0,l.kt)("br",null),"    if (Runtime.Trigger == TriggerType.Verification)",(0,l.kt)("br",null),"    {",(0,l.kt)("br",null),"    \treturn IsOwner();",(0,l.kt)("br",null),"    )",(0,l.kt)("br",null),"}"),(0,l.kt)("td",{parentName:"tr",align:null},"Independent method\uff1a",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"public static bool Verify() => IsOwner();"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("td",{parentName:"tr",align:null},"To make the method name conform to the smart contract naming rules, the method is declared like this: ",(0,l.kt)("br",null),'[DisplayName("balanceOf")]',(0,l.kt)("br",null),"public static BigInteger BalanceOf(byte[] account)"),(0,l.kt)("td",{parentName:"tr",align:null},"The first letter of the method name is automatically compiled to lowercase, so developers no longer have to use DisplayName, but DisplayName is still acceptable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"Initialization variables are placed into a separate method that is called manually after deployment."),(0,l.kt)("td",{parentName:"tr",align:null},"The method ",(0,l.kt)("inlineCode",{parentName:"td"},"_deploy")," is added, which is executed automatically after deployment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update and destroy"),(0,l.kt)("td",{parentName:"tr",align:null},"You need to write the Update and Destroy methods by yourself."),(0,l.kt)("td",{parentName:"tr",align:null},"Update and Destroy methods are built in the contract template")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer event name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transfer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Transfer"))))),(0,l.kt)("h3",{id:"permission"},"Permission"),(0,l.kt)("h4",{id:"users-signature"},"User's signature"),(0,l.kt)("p",null,"In Neo Legacy all contracts in the call chain can use user signatures by default."),(0,l.kt)("p",null,"Neo N3 adds the concept of WitnessScope, which by default allows only the entry contract to use the user signature and allows the user to modify it."),(0,l.kt)("h4",{id:"permission-and-trust"},"Permission and trust"),(0,l.kt)("p",null,"In Neo Legacy, contracts can call each other via dynamic invoking function. You need to set invoking permission in the code, but this way has limited effect."),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added restrictions on contract invoking permission. You need to declare Permission first and then invoke.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added the concept of contract Groups and Trusts to enable wallets to give security warnings.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added the concept of CallFlag to restrict the behavior of the called contract."))),(0,l.kt)("h4",{id:"security-method"},"Security method"),(0,l.kt)("p",null,"Neo N3 adds a new security method. You can execute the contract in a read-only manner by adding the ","[Safe]"," feature to the method."),(0,l.kt)("h2",{id:"contract-framework"},"Contract Framework"),(0,l.kt)("h3",{id:"native-contracts"},"Native contracts"),(0,l.kt)("p",null,"Neo N3 introduces a large number of native contracts, moving massive interoperable services from Neo Legacy to native contracts. The major changes are as follows."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upgraded the Blockchain class to a Ledger native contract, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Blockchain.GetBlock()")," changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Ledger.GetBlock()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added the ContractManagement native contract to query contracts and manage their updating and destruction.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Moved the contract part of the Blockchain class to the ContractManagement native contract, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Blockchain.GetContract()")," changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ContractManagement .GetContract()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added the CryptoLib native contract and moved Sha256, ripemd160, VerifyWithECDsa and other methods to this contract.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added the StdLib native contract and moved serialization, deserialization, data conversion and other methods from Helper class to this contract.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added native contracts such as NEO, GAS, Oracle, Policy, and RoleManagement.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Moved the functions election, voting, and GAS extraction from specific transactions to the NEO native contract."))),(0,l.kt)("h3",{id:"class"},"Class"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Runtime class has been extensively updated. More runtime states are added."),(0,l.kt)("li",{parentName:"ul"},"The Transaction class has been extensively updated to fit the data structure of Neo N3 transactions."),(0,l.kt)("li",{parentName:"ul"},"Added a new Crypto class and moved some of the methods provided by the SmartContract class to this class."),(0,l.kt)("li",{parentName:"ul"},"Moved a number of classes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Account"),(0,l.kt)("li",{parentName:"ul"},"Asset"),(0,l.kt)("li",{parentName:"ul"},"Header"),(0,l.kt)("li",{parentName:"ul"},"InvocationTransaction"),(0,l.kt)("li",{parentName:"ul"},"TransactionAttribute"),(0,l.kt)("li",{parentName:"ul"},"TransactionInput"),(0,l.kt)("li",{parentName:"ul"},"TransactionOutput")))),(0,l.kt)("h3",{id:"storage"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Neo Legacy"),(0,l.kt)("th",{parentName:"tr",align:null},"Neo N3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StorageMap"),(0,l.kt)("td",{parentName:"tr",align:null},"StorageMap cannot be used as static variable. It should be written to each method."),(0,l.kt)("td",{parentName:"tr",align:null},"Support for declaration of static StorageMap.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage search"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns byte[] if no corresponding key is found."),(0,l.kt)("td",{parentName:"tr",align:null},"Returns null if no corresponding key is found. You need to determine whether it is empty, otherwise a null reference exception may occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data conversion"),(0,l.kt)("td",{parentName:"tr",align:null},"Data is converted via the method ",(0,l.kt)("inlineCode",{parentName:"td"},"ToBigInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Data is compulsively converted via the method ",(0,l.kt)("inlineCode",{parentName:"td"},"(BigInteger)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"Storage.CurrentContext.CreateMap(string name)")," method"),(0,l.kt)("td",{parentName:"tr",align:null},"Changed to the construction method of StorageMap")))),(0,l.kt)("p",null,"Neo Legacy \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'public static readonly string mapName = "asset";\n\npublic static void Put(byte[] key, BigInteger value) => Storage.CurrentContext.CreateMap(mapName).Put(key, value);\n\npublic static BigInteger Get(byte[] key) => Storage.CurrentContext.CreateMap(mapName).Get(key).ToBigInteger();\n')),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'public static readonly string mapName = "asset";\n\npublic static void Put(UInt160 key, BigInteger value) => assetMap.Put(key, value);\n\npublic static BigInteger Get(UInt160 key)\n{\n    var value = assetMap.Get(key);\n    return value is null ? 0 : (BigInteger)value;\n}\n')),(0,l.kt)("h3",{id:"tokensale-operations"},"TokenSale Operations"),(0,l.kt)("h4",{id:"contract-writing"},"Contract writing"),(0,l.kt)("p",null,"Neo Legacy\uff1a"),(0,l.kt)("p",null,"It is very complicated to do Token Sale due to the deference between UTXO assets and contract assets. Generally, you have to write the mintTokens method, get the transaction that invokes the contract, then analyze the sender from the transaction input, analyze the transfer amount and asset name from the transaction output, and finally transfer the contract asset to the sender."),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("p",null,"TokenSale can be implemented via OnNEP17Payment. The sender and transfer amount no longer need to be analyzed from the transaction one by one and then summed up, but can be directly obtained from the parameters. Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void OnNEP17Payment(UInt160 from, BigInteger amount, object data)\n{\n    if (Runtime.CallingScriptHash == NEO.Hash)\n    {\n        Mint(amount * TokensPerNEO);\n    }\n    else if (Runtime.CallingScriptHash == GAS.Hash)\n    {\n        if (from != null) Mint(amount * TokensPerGAS);\n    }\n}\n")),(0,l.kt)("h4",{id:"user-operations"},"User operations"),(0,l.kt)("p",null,"Neo Legacy\uff1a"),(0,l.kt)("p",null,"The user initiates InvocationTransaction, constructs the transaction input and output, transfers the NEO/GAS to the contract address, and calls the mintTokens method of the contract address to complete TokenSale."),(0,l.kt)("p",null,"Neo N3 \uff1a"),(0,l.kt)("p",null,"The user just need to send NEO/GAS to the contract address, which triggers the OnNEP17Payment method of the contract to complete TokenSale."),(0,l.kt)("h3",{id:"exception"},"Exception"),(0,l.kt)("p",null,"Neo Legacy\uff1a"),(0,l.kt)("p",null,"When invoking a contract, if the contract execution encounters an exception, the exception message is not printed."),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("p",null,"When invoking a contract, the exception message is printed as the result of the call."),(0,l.kt)("h3",{id:"static-call"},"Static call"),(0,l.kt)("p",null,"Neo Legacy \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'[Appcall("XXXXXXXXXX")]//ScriptHash\npublic static extern int AnotherContract(string arg);\n\npublic static void Main()\n{\n    AnotherContract("Hello");    \n}\n')),(0,l.kt)("p",null,"Neo N3 \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'[Contract("0102030405060708090A0102030405060708090A")]\npublic class Contract1\n{\n    public static extern void MyMethod();\n}\n\npublic static void Call()\n{\n    Contract1.MyMethod();\n}\n')),(0,l.kt)("h3",{id:"dynamic-call"},"Dynamic call"),(0,l.kt)("p",null,"Neo Legacy\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"delegate object Dyncall(string method, object[] args);\npublic static object Main(string operation, object[] args)\n{\n    var dyncall = (Dyncall)target.ToDelegate();\n    var newArgs = new object[1];\n    var method = (string)args[0];\n    newArgs[0] = args[1];\n    dyncall(method, newArgs);\n}\n")),(0,l.kt)("p",null,"Neo N3\uff1a"),(0,l.kt)("p",null,"You can invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"Contract.Call()")," to complete the dynamic call of the contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'public static bool Transfer(UInt160 from, UInt160 to, BigInteger amount, object data)\n{\n    Contract.Call(to, "onNEP17Payment", CallFlags.All, new object[] { from, amount, data });\n}\n')))}p.isMDXComponent=!0}}]);