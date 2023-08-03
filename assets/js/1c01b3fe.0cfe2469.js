"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4094],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},p="Contract Update and Destroy",l={unversionedId:"n3/develop/write/update",id:"n3/develop/write/update",isDocsHomePage:!1,title:"Contract Update and Destroy",description:"Smart contracts support to be updated or destroyed after release. Before you can do that you need to implement the Update and Destroy interfaces in the old contracts.",source:"@site/docs/n3/develop/write/update.md",sourceDirName:"n3/develop/write",slug:"/n3/develop/write/update",permalink:"/website/docs/n3/develop/write/update",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/write/update.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"NEP-17",permalink:"/website/docs/n3/develop/write/nep17"},next:{title:"Deploying Smart Contracts",permalink:"/website/docs/n3/develop/deploy/deploy"}},d=[{value:"Contract Update",id:"contract-update",children:[{value:"Implementing the Update interface",id:"implementing-the-update-interface",children:[]},{value:"Updating the contract",id:"updating-the-contract",children:[]}]},{value:"Contract Destruction",id:"contract-destruction",children:[]}],s={toc:d};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-update-and-destroy"},"Contract Update and Destroy"),(0,a.kt)("p",null,"Smart contracts support to be updated or destroyed after release. Before you can do that you need to implement the Update and Destroy interfaces in the old contracts."),(0,a.kt)("h2",{id:"contract-update"},"Contract Update"),(0,a.kt)("p",null,"In some cases you want to upgrade the smart contracts deployed on the blockchain or migrate the storage of a contract into another new contract, you need to update smart contracts. Neither the contract hash nor the storage is changed when the contract is upgraded."),(0,a.kt)("h3",{id:"implementing-the-update-interface"},"Implementing the Update interface"),(0,a.kt)("p",null,"To enable the update function, you need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," method in the contract. In the contract template this method has been implemented by default, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public static bool Verify() => IsOwner();\n\npublic static void Update(ByteString nefFile, string manifest)\n{\n    if (!IsOwner()) throw new Exception("No authorization.");\n    ContractManagement.Update(nefFile, manifest, null);\n}\n')),(0,a.kt)("p",null,"If you want to update the contract later, you must implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method in the contract prior to deployment. For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/deploy/deploy"},"Deploying and Invoking Smart Contracts"),"."),(0,a.kt)("h3",{id:"updating-the-contract"},"Updating the contract"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get the compiled NEF file and Manifest file of the new contract ready")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Base64-encode the NEF file with the tool like ",(0,a.kt)("a",{parentName:"p",href:"https://www.hitoy.org/tool/file_base64.php"},"File to Base64 online"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compress and escape the Manifest file with the tool like ",(0,a.kt)("a",{parentName:"p",href:"http://www.bejson.com/zhuanyi/"},"JSON compressed and escaped online"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the invoke command to call the update method of the contract"))),(0,a.kt)("p",null,"For information about invoking the contract, refer to ",(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/deploy/invoke"},"Invoking contracts"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66150).Z})),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method is executed, the contract is upgraded and neither the contract hash nor the storage area is changed."),(0,a.kt)("h2",{id:"contract-destruction"},"Contract Destruction"),(0,a.kt)("p",null,"To destroy a contract, you need to reserve the destruction method in the contract."),(0,a.kt)("p",null,"To use the contract destroy feature, you need to implement the destroy method in the original contract. The ",(0,a.kt)("inlineCode",{parentName:"p"},"destroy")," method has been implemented by default in the contract template as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public static bool Verify() => IsOwner();\n\npublic static void Destroy()\n{\n    if (!IsOwner()) throw new Exception("No authorization.");\n    ContractManagement.Destroy();\n}\n')),(0,a.kt)("p",null,"The Destroy method takes no arguments. When it is invoked, the contract and its storage, if any, are deleted. Then the contract is no longer available."))}u.isMDXComponent=!0},66150:function(e,t,n){t.Z=n.p+"assets/images/update-417d3956822af4c6f371b153ed77f22c.png"}}]);