"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6949],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],c={title:"neow3j - Implementing a NEP-17 Smart Contract in Java",description:"This tutorial describes an example implementation of a NEP-17 smart contract developed in Java using the neow3j library.",author:"AxLabs",tags:["NEP-17","JAVA","NEOW3J"],skill:"beginner",image:"./assets/neow3j-padded.png",source:"https://github.com/neow3j/neow3j-examples-java/blob/7000d804257f8d573ac8cc369aa2a3abb303a751/src/main/java/io/neow3j/examples/contractdevelopment/contracts/FungibleToken.java",sidebar:!0},s=void 0,l={permalink:"/website/tutorials/2023/05/16/neow3j-nep17",source:"@site/tutorials/2023-05-16-neow3j-nep17/index.md",title:"neow3j - Implementing a NEP-17 Smart Contract in Java",description:"This tutorial describes an example implementation of a NEP-17 smart contract developed in Java using the neow3j library.",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"NEP-17",permalink:"/website/tutorials/tags/nep-17"},{label:"JAVA",permalink:"/website/tutorials/tags/java"},{label:"NEOW3J",permalink:"/website/tutorials/tags/neow-3-j"}],readingTime:10.085,truncated:!1,authors:[{name:"AxLabs"}],prevItem:{title:"Neo3-boa - Writing a fungible token contract using Python",permalink:"/website/tutorials/2023/07/05/neo3-boa-writing-a-fungible-token-contract-using-python"},nextItem:{title:"neow3j - Java SDK Quickstart",permalink:"/website/tutorials/2023/05/16/neow3j-sdk-quickstart"}},p={image:n(91982).Z,authorsImageUrls:[void 0]},d=[{value:"1. Setup",id:"1-setup",children:[]},{value:"2. NEP-17 Overview",id:"2-nep-17-overview",children:[]},{value:"3. Example NEP-17 Contract",id:"3-example-nep-17-contract",children:[]},{value:"4. Contract Breakdown",id:"4-contract-breakdown",children:[{value:"Imports",id:"imports",children:[]},{value:"Contract-specific Information",id:"contract-specific-information",children:[]},{value:"Constants",id:"constants",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Update and Destroy",id:"update-and-destroy",children:[]},{value:"NEP-17 Methods",id:"nep-17-methods",children:[]},{value:"Events",id:"events",children:[]},{value:"Custom Methods",id:"custom-methods",children:[]},{value:"Private Helper Methods",id:"private-helper-methods",children:[]}]},{value:"5. Compile the Contract",id:"5-compile-the-contract",children:[]},{value:"About",id:"about",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{align:"center",style:{padding:"0% 25% 0% 25%"}},(0,r.kt)("img",{src:"/tooling/neow3j.png",alt:"neow3j",width:"75%",style:{padding:"0% 0% 5% 0%"}}),(0,r.kt)("h1",null," ",(0,r.kt)("a",{href:"https://github.com/neow3j/neow3j"},"neow3j")," ",(0,r.kt)("sub",null,(0,r.kt)("small",null,"v3.20.1")))),(0,r.kt)("p",null,"Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart Contracts using the\nJava platform (Java, Kotlin, Android). Check out ",(0,r.kt)("a",{parentName:"p",href:"https://neow3j.io"},"neow3j.io")," for more detailed information on neow3j\nand the technical documentation."),(0,r.kt)("h2",{id:"1-setup"},"1. Setup"),(0,r.kt)("p",null,"If you haven't already set up your environment to use the neow3j library, you can check out our tutorial about setting\nup a neow3j project ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/neow3j-smart-contract-quickstart"},"here"),"."),(0,r.kt)("h2",{id:"2-nep-17-overview"},"2. NEP-17 Overview"),(0,r.kt)("p",null,"The NEP-17 is the fungible token standard on Neo N3. Have a look at its official documentation\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neo-project/proposals/blob/master/nep-17.mediawiki"},"here"),"."),(0,r.kt)("h2",{id:"3-example-nep-17-contract"},"3. Example NEP-17 Contract"),(0,r.kt)("p",null,"The following example code represents a possible implementation for a token that supports the NEP-17 standard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.neow3j.examples.contractdevelopment.contracts;\n\nimport io.neow3j.devpack.ByteString;\nimport io.neow3j.devpack.Contract;\nimport io.neow3j.devpack.Hash160;\nimport io.neow3j.devpack.Runtime;\nimport io.neow3j.devpack.Storage;\nimport io.neow3j.devpack.StorageContext;\nimport io.neow3j.devpack.StorageMap;\nimport io.neow3j.devpack.annotations.DisplayName;\nimport io.neow3j.devpack.annotations.ManifestExtra;\nimport io.neow3j.devpack.annotations.OnDeployment;\nimport io.neow3j.devpack.annotations.Permission;\nimport io.neow3j.devpack.annotations.Safe;\nimport io.neow3j.devpack.annotations.SupportedStandard;\nimport io.neow3j.devpack.constants.CallFlags;\nimport io.neow3j.devpack.constants.NativeContract;\nimport io.neow3j.devpack.constants.NeoStandard;\nimport io.neow3j.devpack.contracts.ContractManagement;\nimport io.neow3j.devpack.events.Event3Args;\n\n@DisplayName("AxLabsToken")\n@ManifestExtra(key = "name", value = "AxLabsToken")\n@ManifestExtra(key = "author", value = "AxLabs")\n@SupportedStandard(neoStandard = NeoStandard.NEP_17)\n@Permission(nativeContract = NativeContract.ContractManagement)\npublic class FungibleToken {\n\n    static final int contractMapPrefix = 0;\n    static final byte[] contractOwnerKey = new byte[]{0x00};\n    static final byte[] totalSupplyKey = new byte[]{0x01};\n\n    static final int assetMapPrefix = 1;\n\n    // region deploy, update, destroy\n\n    @OnDeployment\n    public static void deploy(Object data, boolean update) {\n        if (!update) {\n            StorageContext ctx = Storage.getStorageContext();\n            // Set the contract owner.\n            Storage.put(ctx, contractOwnerKey, (Hash160) data);\n            // Initialize the supply.\n            int initialSupply = 200_000_000;\n            Storage.put(ctx, totalSupplyKey, initialSupply);\n            // Allocate all tokens to the contract owner.\n            new StorageMap(ctx, assetMapPrefix)\n                    .put(contractOwner(ctx).toByteArray(), initialSupply);\n        }\n    }\n\n    public static void update(ByteString script, String manifest) throws Exception {\n        if (!Runtime.checkWitness(contractOwner(Storage.getReadOnlyContext()))) {\n            throw new Exception("No authorization");\n        }\n        new ContractManagement().update(script, manifest);\n    }\n\n    public static void destroy() throws Exception {\n        if (!Runtime.checkWitness(contractOwner(Storage.getReadOnlyContext()))) {\n            throw new Exception("No authorization");\n        }\n        new ContractManagement().destroy();\n    }\n\n    // endregion deploy, update, destroy\n    // region NEP-17 methods\n\n    @Safe\n    public static String symbol() {\n        return "ALT";\n    }\n\n    @Safe\n    public static int decimals() {\n        return 2;\n    }\n\n    @Safe\n    public static int totalSupply() {\n        return Storage.getInt(Storage.getReadOnlyContext(), totalSupplyKey);\n    }\n\n    public static boolean transfer(Hash160 from, Hash160 to, int amount, Object[] data) throws Exception {\n        if (!Hash160.isValid(from) || !Hash160.isValid(to)) {\n            throw new Exception("The parameters \'from\' and \'to\' must be 20-byte addresses.");\n        }\n        if (amount < 0) {\n            throw new Exception("The parameter \'amount\' must be greater than or equal to 0.");\n        }\n        StorageContext ctx = Storage.getStorageContext();\n        if (amount > getBalance(ctx, from) || !Runtime.checkWitness(from)) {\n            return false;\n        }\n\n        if (from != to && amount != 0) {\n            deductFromBalance(ctx, from, amount);\n            addToBalance(ctx, to, amount);\n        }\n\n        onTransfer.fire(from, to, amount);\n        if (new ContractManagement().getContract(to) != null) {\n            Contract.call(to, "onNEP17Payment", CallFlags.All, data);\n        }\n        return true;\n    }\n\n    @Safe\n    public static int balanceOf(Hash160 account) throws Exception {\n        if (!Hash160.isValid(account)) {\n            throw new Exception("The parameter \'account\' must be a 20-byte address.");\n        }\n        return getBalance(Storage.getReadOnlyContext(), account);\n    }\n\n    // endregion NEP-17 methods\n    // region events\n\n    @DisplayName("Transfer")\n    static Event3Args<Hash160, Hash160, Integer> onTransfer;\n\n    // endregion events\n    // region custom methods\n\n    @Safe\n    public static Hash160 contractOwner() {\n        return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getHash160(contractOwnerKey);\n    }\n\n    // endregion custom methods\n    // region private helper methods\n\n    // When storage context is already loaded, this is a cheaper method than `contractOwner()`.\n    private static Hash160 contractOwner(StorageContext ctx) {\n        return new StorageMap(ctx, contractMapPrefix).getHash160(contractOwnerKey);\n    }\n\n    private static void addToBalance(StorageContext ctx, Hash160 key, int value) {\n        new StorageMap(ctx, assetMapPrefix).put(key.toByteArray(), getBalance(ctx, key) + value);\n    }\n\n    private static void deductFromBalance(StorageContext ctx, Hash160 key, int value) {\n        int oldValue = getBalance(ctx, key);\n        new StorageMap(ctx, assetMapPrefix).put(key.toByteArray(), oldValue - value);\n    }\n\n    private static int getBalance(StorageContext ctx, Hash160 key) {\n        return new StorageMap(ctx, assetMapPrefix).getIntOrZero(key.toByteArray());\n    }\n\n    // endregion private helper methods\n\n}\n')),(0,r.kt)("h2",{id:"4-contract-breakdown"},"4. Contract Breakdown"),(0,r.kt)("p",null,"In the following subsections, we'll be looking at each part of the NEP-17 example contract."),(0,r.kt)("h3",{id:"imports"},"Imports"),(0,r.kt)("p",null,"The imports show the neow3j devpack classes that are used in the example contract. Check out neow3j devpack's\n",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.neow3j/devpack/latest/index.html"},"javadoc")," for a full overview of classes and methods that\nare supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package io.neow3j.examples.contractdevelopment.contracts;\n\nimport io.neow3j.devpack.ByteString;\nimport io.neow3j.devpack.Contract;\nimport io.neow3j.devpack.Hash160;\nimport io.neow3j.devpack.Runtime;\nimport io.neow3j.devpack.Storage;\nimport io.neow3j.devpack.StorageContext;\nimport io.neow3j.devpack.StorageMap;\nimport io.neow3j.devpack.annotations.DisplayName;\nimport io.neow3j.devpack.annotations.ManifestExtra;\nimport io.neow3j.devpack.annotations.OnDeployment;\nimport io.neow3j.devpack.annotations.Permission;\nimport io.neow3j.devpack.annotations.Safe;\nimport io.neow3j.devpack.annotations.SupportedStandard;\nimport io.neow3j.devpack.constants.CallFlags;\nimport io.neow3j.devpack.constants.NativeContract;\nimport io.neow3j.devpack.constants.NeoStandard;\nimport io.neow3j.devpack.contracts.ContractManagement;\nimport io.neow3j.devpack.events.Event3Args;\n")),(0,r.kt)("h3",{id:"contract-specific-information"},"Contract-specific Information"),(0,r.kt)("p",null,"Annotations on top of the smart contract's class represent contract-specific information. The following annotations can\nbe used for in a smart contract:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"@DisplayName"))),(0,r.kt)("p",null,"It specifies the contract's name. If this annotation is not present, the class name is used for the contract's name."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"@ManifestExtra"))),(0,r.kt)("p",null,"Adds the provided key-value pair information in the manifest's ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," field. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManifestsExtras")," to\ngather multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManifestExtra")," annotations (results in the same as when using single ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManifestExtra")," annotations)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"@SupportedStandard"))),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"supportedStandards")," field in the manifest. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"neoStandard = ")," with the enum ",(0,r.kt)("inlineCode",{parentName:"p"},"NeoStandard")," to use an\nofficial standard (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neo-project/proposals#readme"},"here"),"), or ",(0,r.kt)("inlineCode",{parentName:"p"},"customStandard = ")," with a custom\nstring value."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"@Permission"))),(0,r.kt)("p",null,"Specifies, which third-party contracts and methods the smart contract is allowed to call. By default (i.e., if no\npermission annotation is set), the contract is not allowed to call any contract. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"contract = ")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"methods = ")," to\nspecify, respectively, which contracts and methods are allowed."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For example, if you want to allow transferring NEO tokens from the contract, you can add the annotation\n",(0,r.kt)("inlineCode",{parentName:"em"},'@Permission(nativeContract = NativeContract.NeoToken, methods = "transfer")'),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@DisplayName("AxLabsToken")\n@ManifestExtra(key = "name", value = "AxLabsToken")\n@ManifestExtra(key = "author", value = "AxLabs")\n@SupportedStandard(neoStandard = NeoStandard.NEP_17)\n@Permission(nativeContract = NativeContract.ContractManagement)\npublic class FungibleToken {\n')),(0,r.kt)("h3",{id:"constants"},"Constants"),(0,r.kt)("p",null,"You can set a constant value for the contract by using ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," variables. These values are always loaded when the\ncontract is called and cannot be changed once the contract is deployed. If a final value does not include a method call\n(e.g., raw types, or a final ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),' value, such as "name"), then these values are inlined during compilation.'),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All contract constants and all methods must be ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," (since the object-orientation of the JVM is different on the\nNeoVM)."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The contract owner of this example contract is fixed (i.e., it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," variable). If you intend to provide a way to\nchange such a variable, you should not store it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," variable. Rather, you would store it as a value in the\nstorage, which provides the possibility to be modified through a method."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static final int contractMapPrefix = 0;\nstatic final byte[] contractOwnerKey = new byte[]{0x00};\nstatic final byte[] totalSupplyKey = new byte[]{0x01};\n")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Once a deployment transaction is made (containing the contract and other parameters), the contract data is first stored\non the blockchain and then the native contract ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractManagement")," calls the smart contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy()")," method. In\nneow3j, that method is marked with the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@OnDeployment"),". In the example, when the smart contract is deployed,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"initialSupply")," is set to 200'000'000 and it is allocated to the smart contract's owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@OnDeployment\npublic static void deploy(Object data, boolean update) throws Exception {\n    if (!update) {\n        StorageContext ctx = Storage.getStorageContext();\n        // Set the contract owner.\n        Storage.put(ctx, contractOwnerKey, (Hash160) data);\n        // Initialize the supply.\n        int initialSupply = 200_000_000;\n        Storage.put(ctx, totalSupplyKey, initialSupply);\n        // Allocate all tokens to the contract owner.\n        new StorageMap(ctx, assetMapPrefix)\n                .put(contractOwner(ctx).toByteArray(), initialSupply);\n    }\n}\n")),(0,r.kt)("h3",{id:"update-and-destroy"},"Update and Destroy"),(0,r.kt)("p",null,"In order to update the contract, the following method first checks that the contract owner witnessed the transaction and\nthen the native ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractManagement.update()")," method is called. When updating a smart contract, you can change the smart\ncontract's code and its manifest. This means that you can update how the contract programmatically manages its storage\ncontext."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Additionally to changing the smart contract's script and manifest, the method ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractManagement.update()")," eventually\ncalls the smart contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy()")," method (shown above) with the boolean ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," set to true."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void update(ByteString script, String manifest) throws Exception {\n    if (!Runtime.checkWitness(contractOwner(Storage.getReadOnlyContext()))) {\n        throw new Exception("No authorization");\n    }\n    new ContractManagement().update(script, manifest);\n}\n')),(0,r.kt)("p",null,"The example contract also provides the option to destroy the smart contract. As well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," method, it first\nverifies that the contract owner witnessed the transaction and then calls the method ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractManagement.destroy()"),"\nmethod."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When the native method ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractManagement.destroy()")," is called from a smart contract, the whole smart contract's\nstorage context is erased, and the contract can no longer be used."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void destroy() throws Exception {\n    if (!Runtime.checkWitness(contractOwner(Storage.getReadOnlyContext()))) {\n        throw new Exception("No authorization");\n    }\n    new ContractManagement().destroy();\n}\n')),(0,r.kt)("h3",{id:"nep-17-methods"},"NEP-17 Methods"),(0,r.kt)("p",null,"The required NEP-17 methods are implemented as follows. If a method does not change the state of the contract (i.e., it\nis just used for reading), it can be annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Safe")," annotation. Out of the NEP-17 methods, only the\n",(0,r.kt)("inlineCode",{parentName:"p"},"transfer()")," method should be writing to the contract and is thus not annotated as safe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Safe\npublic static String symbol() {\n    return "ALT";\n}\n\n@Safe\npublic static int decimals() {\n    return 2;\n}\n\n@Safe\npublic static int totalSupply() {\n    return Storage.getInt(Storage.getReadOnlyContext(), totalSupplyKey);\n}\n\npublic static boolean transfer(Hash160 from, Hash160 to, int amount, Object[] data) throws Exception {\n    if (!Hash160.isValid(from) || !Hash160.isValid(to)) {\n        throw new Exception("The parameters \'from\' and \'to\' must be 20-byte addresses.");\n    }\n    if (amount < 0) {\n        throw new Exception("The parameter \'amount\' must be greater than or equal to 0.");\n    }\n    StorageContext ctx = Storage.getStorageContext();\n    if (amount > getBalance(ctx, from) || !Runtime.checkWitness(from)) {\n        return false;\n    }\n\n    if (from != to && amount != 0) {\n        deductFromBalance(ctx, from, amount);\n        addToBalance(ctx, to, amount);\n    }\n\n    onTransfer.fire(from, to, amount);\n    if (new ContractManagement().getContract(to) != null) {\n        Contract.call(to, "onNEP17Payment", CallFlags.All, data);\n    }\n    return true;\n}\n\n@Safe\npublic static int balanceOf(Hash160 account) throws Exception {\n    if (!Hash160.isValid(account)) {\n        throw new Exception("The parameter \'account\' must be a 20-byte address.");\n    }\n    return getBalance(Storage.getReadOnlyContext(), account);\n}\n')),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"The NEP-17 standard requires an event ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," that contains the values ",(0,r.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),". For this, the\nclass ",(0,r.kt)("inlineCode",{parentName:"p"},"Event3Args")," can be used with the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@DisplayName")," to set the event's name that will be shown in the\nmanifest and notifications when it has been fired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@DisplayName("Transfer")\n    static Event3Args<Hash160, Hash160, Integer> onTransfer;\n')),(0,r.kt)("p",null,"An event variable can effectively fire an event by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fire()")," method with the corresponding arguments. For\nexample, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," event (represented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransfer")," variable) should be fired whenever a transfer happens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"onTransfer.fire(from, to, amount);\n")),(0,r.kt)("h3",{id:"custom-methods"},"Custom Methods"),(0,r.kt)("p",null,"The example contract contains two custom methods that are not specified in the NEP-17 standard. The method\n",(0,r.kt)("inlineCode",{parentName:"p"},"contractOwner()")," simply returns the script hash of the contract owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Safe\npublic static Hash160 contractOwner() {\n    return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getHash160(contractOwnerKey);\n}\n")),(0,r.kt)("h3",{id:"private-helper-methods"},"Private Helper Methods"),(0,r.kt)("p",null,"Private methods can be used to simplify and make the smart contract more readable. The following private methods are\nused in the NEP-17 example contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// When storage context is already loaded, this is a cheaper method than `contractOwner()`.\nprivate static Hash160 contractOwner(StorageContext ctx) {\n    return new StorageMap(ctx, contractMapPrefix).getHash160(contractOwnerKey);\n}\n\nprivate static void addToBalance(StorageContext ctx, Hash160 key, int value) {\n    new StorageMap(ctx, assetMapPrefix).put(key.toByteArray(), getBalance(ctx, key) + value);\n}\n\nprivate static void deductFromBalance(StorageContext ctx, Hash160 key, int value) {\n    int oldValue = getBalance(ctx, key);\n    new StorageMap(ctx, assetMapPrefix).put(key.toByteArray(), oldValue - value);\n}\n\nprivate static int getBalance(StorageContext ctx, Hash160 key) {\n    return new StorageMap(ctx, assetMapPrefix).getIntOrZero(key.toByteArray());\n}\n")),(0,r.kt)("h2",{id:"5-compile-the-contract"},"5. Compile the Contract"),(0,r.kt)("p",null,"The contract can be compiled using the gradle plugin. First, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle.build")," to the\ncontract's class name. Then, the gradle task ",(0,r.kt)("inlineCode",{parentName:"p"},"neow3jCompile")," can be executed from the project's root path to compile the\ncontract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew neow3jCompile\n")),(0,r.kt)("p",null,"The output is then accessible in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"./build/neow3j"),", and should contain the following three files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"AxLabsToken.manifest.json\nAxLabsToken.nef\nAxLabsToken.nefdbgnfo\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The filenames can deviate according to what the contract's name is. See ",(0,r.kt)("a",{parentName:"p",href:"#contract-specific-information"},"here"),"."))),(0,r.kt)("p",null,"Now, the contract's ",(0,r.kt)("inlineCode",{parentName:"p"},".manifest.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".nef")," files can be used to deploy the contract. Neow3j's SDK can be used to do\nso. Check out the example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neow3j/neow3j-examples-java/blob/4d82df91c27bf9d4992c166e1ae98045bd24fbbd/src/main/java/io/neow3j/examples/contractdevelopment/DeployFromFiles.java"},"here"),"\nabout how to deploy a contract with its manifest and nef files."),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("p",null,"Feel free to report any issues that might arise. Open an issue\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neow3j/neow3j/issues/new/choose"},"here")," to help us directly including it in our backlog."))}h.isMDXComponent=!0},91982:function(e,t,n){t.Z=n.p+"assets/images/neow3j-padded-615b81c5d96703c064e509be65fee6ad.png"}}]);