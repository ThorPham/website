"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3608,5478],{63012:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(67294),r=n(98590),l=n(36742),o=n(24973);function i(e){var t=e.year,n=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,n.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function c(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(i,e))})))))}function s(e){var t,n,l=e.archive,i=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(t=l.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],a=e.get(n)||[];return e.set(n,[t].concat(a))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(r.Z,{title:i,description:s},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},i),a.createElement("p",{className:"hero__subtitle"},s))),a.createElement("main",null,m.length>0&&a.createElement(c,{years:m})))}},98590:function(e,t,n){n.d(t,{Z:function(){return A}});var a=n(67294),r=n(86010),l=n(33946),o=n(81261),i=n(87462),c=n(24973),s=n(81036),m=n(29189),d=n(85350),u=n(941),C=n(55662),f=n(31839),v=n(93783),h=n(80907),p=n(67892),b=n(55537),g=n(84478),E=n(62670),w="toggle_2xs0",Z="navbarHideable_1VR7",N="navbarHidden_1FmO",_="navbarSidebarToggle_nWi-",x="navbarSidebarCloseSvg_fJdH",k="right";function L(){return(0,u.LU)().navbar.items}function y(){var e=(0,u.LU)().colorMode.disableSwitch,t=(0,d.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function M(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,f.Z)(t);var l=L(),o=y(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,u.g8)())?void 0:t({toggleSidebar:r}),o=(0,u.D9)(l),i=(0,a.useState)((function(){return!1})),c=i[0],s=i[1];(0,a.useEffect)((function(){l&&!o&&s(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||s(!0):s(!1)}),[n,m]),{shown:c,hide:(0,a.useCallback)((function(){s(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand "},a.createElement(b.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&a.createElement(m.Z,{className:_,checked:o.isDarkTheme,onChange:o.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(E.Z,{width:20,height:20,className:x}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(p.Z,(0,i.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(c.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var V=function(){var e,t=(0,u.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,v.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,u.Rb)((function(){r&&l(!1)}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),c=y(),d=(0,h.gA)(),f=(0,C.Z)(n),E=f.navbarRef,_=f.isNavbarVisible,x=L(),V=x.some((function(e){return"search"===e.type})),I=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:k)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:k)}))}}(x),D=I.leftItems,R=I.rightItems;return a.createElement("nav",{ref:E,style:{borderBottom:"1px solid #EDEEF0",height:"65px"},className:(0,r.Z)("navbar shadow-none","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[Z]=n,e[N]=n&&!_,e))},a.createElement("div",{className:"navbar__inner  max-w-6xl twcontainer mx-auto"},a.createElement("div",{className:"navbar__items"},((null==x?void 0:x.length)>0||d)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(g.Z,null)),a.createElement(b.Z,{className:"navbar__brand",imageClassName:"navbar__logo h-7",titleClassName:"navbar__title"}),D.map((function(e,t){return a.createElement(p.Z,(0,i.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return a.createElement(p.Z,(0,i.Z)({},e,{key:t}))})),!c.disabled&&a.createElement(m.Z,{className:w,checked:c.isDarkTheme,onChange:c.toggle}),!V&&a.createElement(s.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(M,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},I=(n(36742),n(44996));n(98465),n(18617);var D=function(){var e=(0,u.LU)().footer,t=e||{},n=t.copyright,r=(t.links,t.logo),l=void 0===r?{}:r;return(0,I.Z)(l.src),(0,I.Z)(l.srcDark||l.src),e?a.createElement("footer",{className:"border-t"},a.createElement("div",{className:"twcontainer mx-auto max-w-6xl px-4 lg:px-0 py-12"},a.createElement("div",{className:"flex items-start justify-between gap-6 flex-col lg:flex-row"},a.createElement("div",{className:""},a.createElement("svg",{width:"100",height:"39",viewBox:"0 0 100 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M54.3909 12.1082C55.7362 13.2934 56.4089 15.0552 56.4089 17.3295V29.1494H53.4619V18.3545C53.4619 16.4326 53.0455 15.0232 52.2127 14.1583C51.3798 13.2934 50.2907 12.877 48.9133 12.877C47.9478 12.8756 46.9946 13.0947 46.1265 13.5176C45.2285 13.9981 44.4929 14.7338 44.0124 15.6318C43.4358 16.5927 43.1796 17.842 43.1796 19.3155V29.1494H40.2006V11.2113L42.9233 12.3324L42.9874 13.5497C43.5512 12.4711 44.4507 11.6054 45.55 11.0832C46.6861 10.5296 47.938 10.255 49.2016 10.2824C51.2944 10.2824 53.0242 10.891 54.3909 12.1082Z",fill:"#000033"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M63.52 21.0131H77.4541C77.5552 20.3236 77.6087 19.6279 77.6143 18.931C77.6346 17.4139 77.3058 15.9124 76.6533 14.5426C76.0245 13.2523 75.034 12.1727 73.8024 11.4355C72.4446 10.6397 70.8911 10.2403 69.3179 10.2823C66.5311 10.2823 64.417 11.1472 62.8794 12.8449C61.3418 14.5426 60.6051 16.881 60.6051 19.892C60.6051 22.903 61.3739 25.2734 62.9755 26.9711C64.5771 28.6688 66.7553 29.5337 69.5421 29.5337C71.4641 29.5337 73.0657 29.1814 74.2829 28.4767C75.534 27.7913 76.5581 26.7561 77.2299 25.4977L74.7634 24.1843C74.4417 25.0774 73.7876 25.8118 72.9376 26.2344C71.876 26.7303 70.7134 26.9717 69.5421 26.9391C67.8444 26.9391 66.435 26.3946 65.3779 25.3695C64.3209 24.3445 63.6802 22.903 63.52 21.0131ZM63.5521 18.3865C63.7763 16.6247 64.3849 15.2794 65.3779 14.3184C66.3709 13.3574 67.7483 12.8769 69.3179 12.8769C70.8875 12.8769 72.1367 13.3895 73.0657 14.3504C73.9946 15.3114 74.5712 16.6568 74.7634 18.3865H63.5521Z",fill:"#000033"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M99.5885 19.8922C99.5885 16.8811 98.7877 14.5428 97.186 12.8451C95.6165 11.1473 93.4062 10.2825 90.6194 10.2825C87.8326 10.2825 85.6224 11.1473 84.0528 12.8451C82.4832 14.5428 81.6824 16.8811 81.6824 19.8922C81.6824 22.9032 82.4512 25.2736 84.0528 26.9713C85.6544 28.669 87.8326 29.5339 90.6194 29.5339C93.4062 29.5339 95.5844 28.669 97.186 26.9713C98.7877 25.2736 99.5885 22.9032 99.5885 19.8922ZM84.6294 19.8922C84.6294 17.714 85.1739 15.9842 86.231 14.735C87.288 13.4537 88.7295 12.8451 90.6194 12.8451C92.5093 12.8451 93.9828 13.4857 95.0399 14.735C96.0969 15.9842 96.6094 17.6819 96.6094 19.8922C96.6094 22.1024 96.0969 23.8321 95.0399 25.0814C93.9828 26.3306 92.4773 26.9713 90.6194 26.9713C88.7615 26.9713 87.288 26.3306 86.231 25.0814C85.1739 23.8321 84.6294 22.0703 84.6294 19.8922Z",fill:"#000033"}),a.createElement("path",{d:"M0 6.72678V32.4487L16.7209 38.4388V12.4926L34.7551 5.86191L18.3866 0L0 6.72678Z",fill:"#00E599"}),a.createElement("path",{d:"M18.0662 13.4535V27.3235L34.7551 33.2815V7.27124L18.0662 13.4535Z",fill:"#00AF92"}))),a.createElement("div",{className:"flex flex-col gap-2 font-semibold"},a.createElement("p",{className:"font-bold mb-2"},"Learn"),a.createElement("a",{href:"/docs/n3/foundation/Native%20tokens"},"What is NEO?"),a.createElement("a",{href:"/docs/n3/foundation/Native%20tokens"},"What is GAS?"),a.createElement("a",{href:"/docs/n3/foundation/introduction"},"NEO N3"),a.createElement("a",{href:"/docs/n3/foundation/governance"},"Governance"),a.createElement("a",{href:"/tutorials/tags/smart-contract"},"Smart Contracts")),a.createElement("div",{className:"flex flex-col gap-2  font-semibold"},a.createElement("p",{className:"font-bold mb-2"},"Developers"),a.createElement("a",{href:"/docs/n3/foundation/introduction"},"Fundamentals"),a.createElement("a",{href:"/tutorials/2021/05/27/getting-started-with-the-neo-blockchain-toolkit"},"Set Up Local Environment"),a.createElement("a",{href:"/docs"},"Documentation"),a.createElement("a",{href:"/tutorials"},"Tutorials"),a.createElement("a",{href:"/contribute"},"Contribute"),a.createElement("a",{href:"https://docs.neo.org/v2/docs/en-us/index.html",target:"_blank"},"Neo Legacy"),a.createElement("a",{href:"https://github.com/neo-project/neo-dev-portal",target:"_blank"},"Help Improve This Website")),a.createElement("div",{className:"flex flex-col gap-2  font-semibold"},a.createElement("p",{className:"font-bold mb-2"},"Ecosystem"),a.createElement("a",{href:"https://neo.org/contributors#communities"},"Community"),a.createElement("a",{href:"https://neo.org/eco#core-developer-grants"},"Grant Programs"),a.createElement("a",{href:"https://neo.org/contributors#core-developers"},"Contributors"),a.createElement("a",{href:"https://neo.org/gov"},"Neo Governance")),a.createElement("div",{className:"flex flex-col gap-2  font-semibold"},a.createElement("p",{className:"font-bold mb-2"},"About Us"),a.createElement("a",{href:"https://neo.org/about"},"About Us"),a.createElement("a",{href:"https://neo.org/presskit"},"Press Kit"),a.createElement("a",{href:"https://neo.org/news"},"Blog"),a.createElement("a",{href:"mailto:about@neo.org?subject=Developers"},"Contact")))),a.createElement("div",{className:"twcontainer mx-auto max-w-6xl px-4 lg:px-0 border-t py-6 grid lg:grid-cols-2 gap-4"},a.createElement("div",{className:"text-gray-500 font-semibold text-center lg:text-left"},n),a.createElement("div",{className:"flex items-center justify-center lg:justify-end gap-6 text-right"},a.createElement("a",{href:"https://www.facebook.com/NeoBlockchainOfficial"},a.createElement("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.06922 17.414V10.8333H6.85722V8.26734H9.06922V6.37607C9.06922 4.18619 10.4185 2.99171 12.3762 2.99171C13.3052 2.99171 14.1126 3.05807 14.3449 3.09125V5.38067L12.9955 5.39173C11.9227 5.39173 11.7236 5.88943 11.7236 6.63045V8.26734H14.2564L13.9246 10.8333H11.7236V17.414H16.0481C16.5679 17.414 16.9882 16.9937 16.9882 16.4739V1.36588C16.9882 0.846062 16.5679 0.425781 16.0481 0.425781H0.940103C0.420281 0.425781 0 0.846062 0 1.36588V16.4739C0 16.9937 0.420281 17.414 0.940103 17.414H9.06922Z",fill:"#000033"}))),a.createElement("a",{href:"https://weibo.com/neosmarteconomy"},a.createElement("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.49313 12.3497C8.76799 11.685 8.63818 10.9415 8.12231 10.4667C7.6104 9.99607 6.99514 9.81216 6.32299 9.91554C5.60224 10.0261 5.01639 10.3891 4.62018 11.0545C4.25162 11.6717 4.3391 12.5048 4.81151 13.0313C5.22804 13.4959 5.74955 13.6786 6.3862 13.702C6.49739 13.6906 6.65881 13.687 6.81571 13.6551C6.97657 13.6221 7.13799 13.5758 7.29038 13.5115C7.82543 13.2843 8.25495 12.9255 8.49313 12.3497ZM12.0596 12.8437C11.5099 13.7038 10.7536 14.2712 9.85949 14.6594C9.0897 14.9936 8.29727 15.2209 7.46929 15.2989C7.28191 15.3164 7.09227 15.3013 6.9037 15.3013C5.8889 15.3224 4.91367 15.1162 3.99708 14.6499C3.45299 14.3733 2.95462 14.0134 2.58832 13.491C2.01489 12.6748 1.91047 11.7883 2.29427 10.8489C2.53978 10.2479 2.95857 9.79533 3.42872 9.39144C4.31596 8.62934 5.35221 8.25135 6.46008 8.04514C7.4168 7.86784 8.36782 7.89789 9.31433 8.1059C10.2518 8.312 11.0894 8.73091 11.7734 9.46657C12.668 10.4288 12.7775 11.7204 12.0596 12.8437ZM12.6003 5.79069C12.3982 5.69693 12.164 5.64765 11.9428 5.64043C11.1023 5.61519 10.2998 5.8532 9.49946 6.09006C9.27934 6.15551 9.06712 6.25348 8.82104 6.34844C8.84023 6.19699 8.86168 6.07558 8.87014 5.95297C8.90113 5.49318 8.96722 5.03099 8.9469 4.57301C8.91699 3.90767 8.43386 3.44729 7.81019 3.43346C7.20679 3.42084 6.62827 3.55313 6.08198 3.82714C5.3381 4.20037 4.63711 4.65235 3.98291 5.18371C3.34406 5.70294 2.7678 6.29435 2.25701 6.95488C1.79138 7.55651 1.39065 8.20628 1.05201 8.898C0.781093 9.451 0.533319 10.0141 0.437935 10.6374C0.413101 10.8003 0.387139 10.9631 0.362305 11.1254V11.9399C0.373593 11.9927 0.388267 12.0456 0.395605 12.0991C0.522596 13.0787 0.987101 13.8631 1.68019 14.4869C2.70515 15.4095 3.89661 15.9968 5.19017 16.3585C6.24679 16.6542 7.32255 16.7372 8.40507 16.6314C9.6225 16.5131 10.806 16.2281 11.927 15.686C12.6979 15.3134 13.3966 14.8277 14.0023 14.1966C14.5131 13.6635 14.9708 13.0848 15.2592 12.3767C15.7463 11.1814 15.5267 9.94499 14.4662 9.16425C14.1434 8.92685 13.7731 8.76157 13.4221 8.56864C13.1737 8.4322 13.1179 8.3138 13.1732 8.02357C13.2188 7.7879 13.264 7.5517 13.299 7.31369C13.4029 6.61115 13.1562 6.04853 12.6003 5.79069ZM12.2582 4.10186C12.4225 4.24365 12.6443 4.31877 12.8498 4.39751C13.4582 4.63071 13.9238 5.03219 14.1947 5.66507C14.298 5.90609 14.3629 6.16633 14.4713 6.40434C14.6062 6.69944 14.8697 6.80342 15.1757 6.71567C15.4454 6.63874 15.6069 6.40079 15.6328 6.07678C15.5747 5.86642 15.5245 5.65365 15.4579 5.44636C15.3111 4.99078 15.0898 4.57722 14.7874 4.22021C14.333 3.68289 13.7709 3.32053 13.1241 3.1017C12.9028 3.02657 12.6849 2.99231 12.4609 3.07886C12.0963 3.2189 11.9586 3.84156 12.2582 4.10186ZM18.0891 6.12005V5.63743C18.0801 5.60377 18.0665 5.57072 18.0632 5.53706C17.9853 4.68005 17.7454 3.87943 17.3277 3.14076C16.9372 2.45139 16.4292 1.87807 15.8101 1.42123C15.1581 0.940406 14.4385 0.619458 13.654 0.490838C13.3171 0.435604 12.9711 0.418715 12.6302 0.428331C12.4134 0.434342 12.2391 0.583396 12.1713 0.817196C12.0985 1.07023 12.1047 1.31665 12.3085 1.51078C12.4598 1.65509 12.6522 1.68448 12.8441 1.71759C13.2155 1.78184 13.5925 1.82452 13.9543 1.92849C14.7399 2.15448 15.3913 2.62388 15.9077 3.29048C16.4507 3.99122 16.7475 4.80441 16.8226 5.70961C16.8435 5.95838 16.8451 6.21141 16.9801 6.43439C17.1494 6.71507 17.523 6.80108 17.7905 6.62792C17.9745 6.50892 18.0242 6.31238 18.0891 6.12005Z",fill:"#000033"}))),a.createElement("a",{href:"https://twitter.com/neo_blockchain"},a.createElement("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.3603 2.34857C18.6531 2.67124 17.8979 2.89279 17.0941 2.99534C17.9137 2.48479 18.5409 1.68466 18.8298 0.714697C18.0746 1.19148 17.2227 1.53122 16.3227 1.71917C15.616 0.918959 14.5875 0.425781 13.4461 0.425781C11.2767 0.425781 9.50945 2.26324 9.50945 4.52599C9.50945 4.84926 9.55745 5.15622 9.62192 5.4616C6.34336 5.29162 3.43445 3.65842 1.50601 1.17427C1.16896 1.7872 0.959718 2.48479 0.959718 3.23328C0.959718 4.66214 1.66655 5.9211 2.7115 6.65319C2.0685 6.6359 1.45802 6.44878 0.927483 6.14265V6.19437C0.927483 6.7213 1.0239 7.21456 1.2012 7.67405C1.68338 8.96751 2.77569 9.93673 4.09357 10.2093C3.75616 10.3118 3.41833 10.3626 3.04897 10.3626C2.80757 10.3626 2.55068 10.3289 2.30991 10.2774C2.82368 11.9113 4.27022 13.1021 5.99012 13.1358C4.63958 14.242 2.95262 14.8888 1.10414 14.8888C0.783133 14.8888 0.477538 14.8716 0.15625 14.8378C1.90796 15.995 3.98075 16.6754 6.19859 16.6754C12.3535 16.6754 16.1462 12.1665 17.1424 7.48693C17.319 6.65319 17.3996 5.8193 17.3996 5.00278V4.47584C18.1548 3.89652 18.8298 3.16517 19.3603 2.34857",fill:"#000033"}))),a.createElement("a",{href:"https://discord.gg/rvZFQ5382k"},a.createElement("svg",{width:"19",height:"15",viewBox:"0 0 19 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.191 0.902344L11.9729 1.1562C13.4075 1.53934 14.7452 2.22361 15.8978 3.16397C14.434 2.33916 12.8239 1.80999 11.1581 1.60622C10.1023 1.47844 9.03501 1.47844 7.97917 1.60622H7.70374C6.46978 1.74754 5.26546 2.08239 4.13459 2.59857C3.5493 2.8755 3.20501 3.06012 3.20501 3.06012C4.41449 2.1176 5.81196 1.44851 7.30206 1.09851L7.1414 0.902344C5.53292 0.982411 3.98893 1.56305 2.723 2.56395C1.2709 5.42592 0.48597 8.58276 0.427734 11.7951C1.5366 13.3462 3.33713 14.2449 5.23632 14.1952L6.28067 12.8798C5.17405 12.5982 4.1999 11.9371 3.52635 11.0104C3.52635 11.0104 3.68702 11.1258 3.97392 11.2874H4.03131L4.1805 11.3682C4.54923 11.5738 4.93287 11.7513 5.32813 11.8989C6.07072 12.1965 6.83908 12.4244 7.6234 12.5797C8.97338 12.8356 10.359 12.8356 11.709 12.5797C12.4981 12.4445 13.2685 12.216 14.0042 11.8989C14.6416 11.6567 15.2498 11.3432 15.8175 10.9643C15.1482 11.922 14.165 12.6124 13.0402 12.9144C13.5108 13.5144 14.0731 14.1952 14.0731 14.1952C15.9763 14.2487 17.782 13.3496 18.8932 11.7951C18.8321 8.58313 18.0474 5.42691 16.5979 2.56395C15.3336 1.56794 13.7949 0.987754 12.191 0.902344ZM12.4894 10.3181C11.6694 10.1524 11.0795 9.42819 11.0795 8.58727C11.0795 7.74635 11.6694 7.02214 12.4894 6.85643C13.3093 7.02214 13.8992 7.74635 13.8992 8.58727C13.8992 9.42819 13.3093 10.1524 12.4894 10.3181ZM6.75119 6.81027C6.02643 6.74832 5.33871 7.14208 5.02188 7.8004C4.70506 8.45872 4.82473 9.2453 5.3228 9.77828C5.82088 10.3113 6.59422 10.4803 7.26742 10.2033C7.94062 9.92636 8.37427 9.26073 8.35787 8.52957C8.37739 7.61216 7.66307 6.84777 6.75119 6.81027Z",fill:"#000033"}))),a.createElement("a",{href:"https://neo3.azureedge.net/images/qrcode.jpg"},a.createElement("svg",{width:"19",height:"16",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0976 4.70991C10.0976 5.23267 9.6764 5.65626 9.15728 5.65626C8.63753 5.65626 8.21643 5.23267 8.21643 4.70991C8.21643 4.1871 8.63753 3.76334 9.15728 3.76334C9.6764 3.76334 10.0976 4.1871 10.0976 4.70991ZM5.91304 4.70991C5.91304 5.23267 5.49188 5.65626 4.9727 5.65626C4.45307 5.65626 4.03192 5.23267 4.03192 4.70991C4.03192 4.1871 4.45307 3.76334 4.9727 3.76334C5.49188 3.76334 5.91304 4.1871 5.91304 4.70991ZM13.1487 5.62225C13.3047 5.62225 13.4589 5.62905 13.6121 5.63982C13.1695 2.93161 10.4652 0.847656 7.19339 0.847656C3.61239 0.847656 0.709961 3.34376 0.709961 6.42297C0.709961 8.09127 1.56353 9.58786 2.91427 10.6096C2.85403 10.7206 2.84445 10.8493 2.84445 10.8493L2.74761 12.2076C2.70257 12.831 3.2262 12.4949 3.2262 12.4949L4.39676 11.7424C4.50819 11.671 4.5713 11.6001 4.60171 11.5333C5.3956 11.8313 6.27169 11.9979 7.19339 11.9979C7.3797 11.9979 7.56331 11.9894 7.74517 11.9764C7.57288 11.5095 7.47886 11.0131 7.47886 10.4974C7.47886 7.80453 10.017 5.62225 13.1487 5.62225ZM15.5743 9.08012C15.5743 9.49607 15.2387 9.83324 14.8254 9.83324C14.4122 9.83324 14.0766 9.49607 14.0766 9.08012C14.0766 8.66361 14.4122 8.32644 14.8254 8.32644C15.2387 8.32644 15.5743 8.66361 15.5743 9.08012ZM12.2433 9.08012C12.2433 9.49607 11.9077 9.83324 11.4945 9.83324C11.0812 9.83324 10.7457 9.49607 10.7457 9.08012C10.7457 8.66361 11.0812 8.32644 11.4945 8.32644C11.9077 8.32644 12.2433 8.66361 12.2433 9.08012ZM18.4368 10.4974C18.4368 7.98587 16.0692 5.9498 13.1487 5.9498C10.2276 5.9498 7.86003 7.98587 7.86003 10.4974C7.86003 13.0083 10.2276 15.0444 13.1487 15.0444C13.848 15.0444 14.5158 14.926 15.1266 14.714C15.152 14.735 15.1807 14.756 15.2134 14.7769L16.3845 15.5295C16.3845 15.5295 16.9076 15.8655 16.8631 15.2427L16.7657 13.8838C16.7657 13.8838 16.7639 13.8583 16.7567 13.8198C17.7898 12.9902 18.4368 11.8087 18.4368 10.4974Z",fill:"#000033"}))),a.createElement("a",{href:"https://t.me/NEO_EN"},a.createElement("svg",{width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.2839 3.29115L7.06759 9.54909C6.99512 9.61134 6.94961 9.69778 6.93889 9.7912L6.66096 12.2132C6.65198 12.2923 6.53945 12.3028 6.51544 12.2269L5.37167 8.6147C5.31951 8.44945 5.38778 8.27023 5.53809 8.17904L14.0599 2.99601C14.2563 2.87692 14.4569 3.14123 14.2839 3.29115ZM16.232 0.531374L0.695096 6.46828C0.191513 6.66071 0.221935 7.36878 0.74067 7.5187L4.68837 8.66179L6.16217 13.2465C6.31602 13.7254 6.93464 13.8704 7.29276 13.5118L9.33434 11.468L13.3395 14.3508C13.8293 14.7035 14.5276 14.4413 14.6522 13.8579L17.3045 1.42208C17.4345 0.812831 16.8237 0.305352 16.232 0.531374Z",fill:"#000033"}))),a.createElement("a",{href:"https://www.reddit.com/r/NEO/"},a.createElement("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.3637 9.7124C14.3494 10.496 13.7567 11.0614 12.9631 11.0473C12.225 11.0337 11.5679 10.3651 11.5893 9.64855C11.6104 8.93437 12.3125 8.27193 13.0263 8.29221C13.7968 8.31427 14.3779 8.93129 14.3637 9.7124M12.6727 13.0329C12.8027 12.9413 13.0414 12.9997 13.2299 12.9881C13.1575 13.1835 13.1444 13.4546 13.0034 13.5608C12.0677 14.2651 10.9664 14.4121 9.79258 14.5325C8.94542 14.329 8.09352 14.1422 7.25402 13.9111C7.01661 13.846 6.77882 13.6856 6.61051 13.5056C6.49784 13.3851 6.5075 13.1534 6.46245 12.9714C6.63481 12.9801 6.85472 12.9229 6.97212 13.0065C7.89823 13.6647 8.95875 13.7901 10.0436 13.7624C10.9722 13.7391 11.8804 13.5922 12.6727 13.0329M8.0863 9.68844C8.07807 10.413 7.41305 11.0515 6.67033 11.0479C5.8843 11.0436 5.30715 10.4597 5.31064 9.67184C5.31407 8.89995 5.93004 8.28292 6.68872 8.29159C7.41037 8.30019 8.09427 8.98359 8.0863 9.68844M18.7557 7.1718C18.1415 6.24503 17.0386 6.00596 15.9733 6.50997C15.7595 6.61131 15.4185 6.57081 15.1808 6.48041C14.4415 6.20078 13.7449 5.79769 12.9919 5.5703C12.1593 5.31956 11.2828 5.2101 10.3337 5.0202C10.609 3.71487 10.8915 2.3764 11.1884 0.969601C11.9983 1.12515 12.7356 1.26459 13.4717 1.40963C13.8357 1.48153 14.1097 1.594 14.2464 2.02856C14.4354 2.62893 15.1433 2.98722 15.7391 2.91839C16.3553 2.84648 16.9096 2.34807 17.0403 1.74887C17.1681 1.16325 16.8836 0.527114 16.3552 0.218049C15.7765 -0.120638 15.0547 -0.07516 14.5792 0.427555C14.2885 0.734837 14.0077 0.735513 13.6577 0.661151C12.8386 0.487229 12.0126 0.34213 11.1998 0.144301C10.7224 0.0274725 10.5306 0.192852 10.4376 0.63958C10.1608 1.96766 9.84014 3.28651 9.57804 4.61772C9.50221 5.00238 9.36549 5.15848 8.96101 5.16893C7.33355 5.2101 5.8428 5.70667 4.43918 6.50936C4.25136 6.6169 3.90533 6.60953 3.70306 6.51243C2.64029 6.00234 1.53633 6.24503 0.921848 7.17241C0.345192 8.04202 0.577562 9.19378 1.45002 9.9079C1.59011 10.0228 1.74246 10.2336 1.73654 10.394C1.6789 11.9667 2.38075 13.1786 3.54434 14.1687C6.53331 16.7123 12.0575 16.9631 15.4092 14.7051C16.9672 13.6555 18.017 12.3121 17.9263 10.3257C17.9201 10.1893 18.0937 10.013 18.2262 9.90661C19.0979 9.20914 19.3311 8.04018 18.7557 7.1718",fill:"#000033"}))),a.createElement("a",{href:"https://medium.com/neo-smart-economy"},a.createElement("svg",{width:"19",height:"16",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1457 0.768255L11.8367 1.28701L8.90717 6.20959L12.4352 13.2632L12.9789 12.3498L18.3041 3.40296C18.3222 3.37237 18.3113 3.33532 18.2842 3.31464C18.2829 3.31349 18.2821 3.31201 18.2813 3.31056C18.2803 3.30874 18.2794 3.30698 18.2775 3.30602L18.2724 3.30344C18.2722 3.30344 18.2721 3.30327 18.2719 3.30304L18.2716 3.30257L12.924 0.538606C12.8847 0.518356 12.8467 0.504999 12.81 0.496382C12.7623 0.483887 12.7138 0.476562 12.6648 0.476562C12.4601 0.476562 12.2563 0.582985 12.1457 0.768255ZM6.03795 15.988C6.32369 15.988 6.52417 15.7592 6.52417 15.3754V3.34876L6.51968 3.34366C6.51458 3.33774 6.50941 3.33175 6.50222 3.32808L1.4332 0.708019L1.43109 0.707157L1.26986 0.624001C1.17574 0.575314 1.08584 0.552048 1.00438 0.552048C0.77562 0.552048 0.615234 0.734732 0.615234 1.04194V12.6993C0.615234 13.0112 0.835975 13.3809 1.1061 13.5205L5.7062 15.8984C5.82438 15.9592 5.93665 15.988 6.03795 15.988ZM7.3683 10.6479V5.02816L11.1593 12.6078L7.74943 10.8452L7.3683 10.6479ZM17.8238 15.941C18.1323 15.941 18.3421 15.7359 18.3421 15.3748V4.99844L13.1886 13.6566L16.5981 15.4192L17.3603 15.8135C17.5279 15.9001 17.6858 15.941 17.8238 15.941Z",fill:"#000033"})))))):null},R=n(86482),B=n(83194),S=n(38245);var A=function(e){var t=e.children,n=e.noFooter,i=e.wrapperClassName,c=e.pageClassName;return(0,S.Z)(),a.createElement(R.Z,null,a.createElement(B.Z,e),a.createElement(l.Z,null),a.createElement(o.Z,null),a.createElement(V,null),a.createElement("div",{className:(0,r.Z)(u.kM.wrapper.main,i,c)},t),!n&&a.createElement(D,null))}},48219:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(36742),c=n(44996),s=n(18617),m=n(13919),d=n(67892),u=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],C=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,d=e.to,C=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"":v,p=e.prependBaseUrlToHref,b=(0,r.Z)(e,u),g=(0,c.Z)(d),E=(0,c.Z)(n),w=(0,c.Z)(C,{forcePrependBaseUrl:!0}),Z=f&&C&&!(0,m.Z)(C),N="dropdown__link--active"===h;return l.createElement(i.Z,(0,a.Z)({},C?{href:p?w:C}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:g},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(E)}}:null),b),Z?l.createElement("span",{className:"inline-flex items-center"},f,l.createElement(s.Z,N&&{width:12,height:12})):f)}function p(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,C),s=l.createElement(h,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link text-secondary  hover:text-primary font-semibold w-full":"navbar__item navbar__link text-secondary  hover:text-primary font-semibold",t)},c));return i?l.createElement("li",null,s):s}function b(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(h,(0,a.Z)({className:(0,o.Z)("menu__link text-secondary font-semibold",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,v)),c=o?b:p;return l.createElement(c,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,d.E)(o)}))}},48729:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(87462),r=n(63366),l=n(67294),o=n(48219),i=n(80907),c=n(86010),s=n(67892),m=n(941),d=n(18780),u=["docId","label","docsPluginId"];function C(e){var t,n=e.docId,C=e.label,f=e.docsPluginId,v=(0,r.Z)(e,u),h=(0,i.Iw)(f),p=h.activeVersion,b=h.activeDoc,g=(0,m.J)(f).preferredVersion,E=(0,i.yW)(f),w=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,d.uniq)([p,g,E].filter(Boolean)),n),Z=(0,s.E)(v.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},v,{className:(0,c.Z)(v.className,(t={},t[Z]=(null==b?void 0:b.sidebar)&&b.sidebar===w.sidebar,t)),activeClassName:Z,label:null!=C?C:w.id,to:w.path}))}},15391:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(87462),r=n(63366),l=n(67294),o=n(48219),i=n(70609),c=n(80907),s=n(941),m=n(24973),d=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function C(e){var t,n,C=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,p=e.dropdownItemsAfter,b=(0,r.Z)(e,d),g=(0,c.Iw)(f),E=(0,c.gB)(f),w=(0,c.yW)(f),Z=(0,s.J)(f),N=Z.preferredVersion,_=Z.savePreferredVersionName;var x,k=(x=E.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){_(e.name)}}})),[].concat(h,x,p)),L=null!=(t=null!=(n=g.activeVersion)?n:N)?t:w,y=C&&k?(0,m.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):L.label,M=C&&k?void 0:u(L).path;return k.length<=1?l.createElement(o.Z,(0,a.Z)({},b,{mobile:C,label:y,to:M,isActive:v?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},b,{mobile:C,label:y,to:M,items:k,isActive:v?function(){return!1}:void 0}))}},81555:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),o=n(48219),i=n(80907),c=n(941),s=["label","to","docsPluginId"];function m(e){var t,n=e.label,m=e.to,d=e.docsPluginId,u=(0,r.Z)(e,s),C=(0,i.zu)(d),f=(0,c.J)(d).preferredVersion,v=(0,i.yW)(d),h=null!=(t=null!=C?C:f)?t:v,p=null!=n?n:h.label,b=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,a.Z)({},u,{label:p,to:b}))}},70609:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(941),c=n(48219),s=n(67892),m=["items","position","className"],d=["items","className","position"],u=["mobile"];function C(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function f(e){var t,n=e.items,i=e.position,d=e.className,u=(0,r.Z)(e,m),C=(0,l.useRef)(null),f=(0,l.useRef)(null),v=(0,l.useState)(!1),h=v[0],p=v[1];return(0,l.useEffect)((function(){var e=function(e){C.current&&!C.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[C]),l.createElement("div",{ref:C,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__link flex items-center",d)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p(!h))}}),null!=(t=u.children)?t:u.label),l.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);var a=C.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,n=e.items,m=e.className,u=(e.position,(0,r.Z)(e,d)),f=(0,i.be)(),v=C(n,f),h=(0,i.uR)({initialState:function(){return!v}}),p=h.collapsed,b=h.toggleCollapsed,g=h.setCollapsed;return(0,l.useEffect)((function(){v&&g(!v)}),[f,v]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",m)},u,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=u.children)?t:u.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"text-primary"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,u),o=n?v:f;return l.createElement(o,a)}},67892:function(e,t,n){n.d(t,{Z:function(){return g},E:function(){return b}});var a=n(63366),r=n(67294),l=n(48219),o=n(70609),i=n(87462),c=n(23264),s=n(52263),m=n(941),d="iconLanguage_17ys",u=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function C(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,C=(0,a.Z)(e,u),f=(0,s.Z)().i18n,v=f.currentLocale,h=f.locales,p=f.localeConfigs,b=(0,m.l5)();function g(e){return p[e].label}var E=h.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),w=[].concat(n,E,l),Z=t?"Languages":g(v);return r.createElement(o.Z,(0,i.Z)({},C,{href:"#",mobile:t,label:r.createElement("span",{className:"flex items-center"},r.createElement(c.Z,{className:d}),r.createElement("span",null,Z)),items:w}))}var f=n(81036);function v(e){return e.mobile?null:r.createElement(f.Z,null)}var h=["type"],p={default:function(){return l.Z},localeDropdown:function(){return C},search:function(){return v},dropdown:function(){return o.Z},docsVersion:function(){return n(81555).Z},docsVersionDropdown:function(){return n(15391).Z},doc:function(){return n(48729).Z}};var b=function(e){return"text-primary font-semibold"};function g(e){var t=e.type,n=(0,a.Z)(e,h),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}}}]);