"use strict";(self.webpackChunkuxid=self.webpackChunkuxid||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,o=new RegExp("^"+r.source),l=new RegExp(r.source+i.source,"gu"),s=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,n,i)=>{let r=!1,o=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];r&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),r=!1,l=o,o=!0,s++):o&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=o,o=!1,r=!0):(r=n(c)===c&&i(c)!==c,l=o,o=i(c)===c&&n(c)!==c)}return e})(e,r,c)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return S},S:function(){return z},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return s}});var n=a(7294),i=(a(3204),a(5697)),r=a.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,i){return void 0===i&&(i={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function u(e,t,a,n,i,r,l,s){const c={};r&&(c.backgroundColor=r,"fixed"===a?(c.width=n,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],h=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return n.createElement(n.Fragment,null,n.createElement(h,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:i,alt:r="",shouldLoad:s}=e,c=l(e,g);return n.createElement("img",o({},c,{decoding:"async",loading:i,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:r}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,r=l(e,f);const s=r.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},r,t,{sizes:s,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:s})})),c):c};var C;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const I=["fallback"],S=function(e){let{fallback:t}=e,a=l(e,I);return t?n.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};S.displayName="Placeholder",S.propTypes={fallback:i.string,sources:null==(C=b.propTypes)?void 0:C.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const w=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],v=["style","className"],x=e=>e.replace(/\n/g,""),A=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),o=3;o<n;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:r().object.isRequired,alt:A},M=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],P=new Set;let H,L;const U=function(e){let{as:t="div",image:i,style:r,backgroundColor:d,className:u,class:m,onStartLoad:h,onLoad:p,onError:g}=e,f=l(e,M);const{width:y,height:b,layout:C}=i,I=c(y,b,C),{style:S,className:E}=I,w=l(I,k),v=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);m&&(u=m);const A=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(C,y,b);return(0,n.useEffect)((()=>{H||(H=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==h||h({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==h||h({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(x);if(L&&P.has(x))return;let t,n;return H.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;v.current&&(v.current.innerHTML=a(o({isLoading:!0,isLoaded:P.has(x),image:i},f)),P.has(x)||(t=requestAnimationFrame((()=>{v.current&&(n=l(v.current,x,P,r,h,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{P.has(x)&&L&&(v.current.innerHTML=L(o({isLoading:P.has(x),isLoaded:P.has(x),image:i},f)),null==h||h({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(t,o({},w,{style:o({},S,r,{backgroundColor:d}),className:E+(u?" "+u:""),ref:v,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(U,e):null}));T.propTypes=N,T.displayName="GatsbyImage";const G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:i,__error:r}=t,s=l(t,G);return r&&console.warn(r),i?n.createElement(e,o({image:i},s)):(console.warn("Image not loaded",a),null)}}const F=D((function(e){let{as:t="div",className:a,class:i,style:r,image:s,loading:m="lazy",imgClassName:h,imgStyle:g,backgroundColor:f,objectFit:y,objectPosition:b}=e,C=l(e,w);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),g=o({objectFit:y,objectPosition:b,backgroundColor:f},g);const{width:I,height:A,layout:N,images:M,placeholder:k,backgroundColor:P}=s,H=c(I,A,N),{style:L,className:U}=H,T=l(H,v),G={fallback:void 0,sources:[]};return M.fallback&&(G.fallback=o({},M.fallback,{srcSet:M.fallback.srcSet?x(M.fallback.srcSet):void 0})),M.sources&&(G.sources=M.sources.map((e=>o({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,o({},T,{style:o({},L,r,{backgroundColor:f}),className:U+(a?" "+a:"")}),n.createElement(p,{layout:N,width:I,height:A},n.createElement(S,o({},u(k,!1,N,I,A,P,y,b))),n.createElement(E,o({"data-gatsby-image-ssr":"",className:h},C,d("eager"===m,!1,G,m,g)))))})),R=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),W={src:r().string.isRequired,alt:A,width:R,height:R,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=W;const z=D(T);z.displayName="StaticImage",z.propTypes=W},622:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return p}});var n=a(7294),i=a(8032);var r=()=>n.createElement("nav",{className:"flex justify-between items-center bg-gray p-2 shadow-md"},n.createElement(i.S,{src:"../images/uxid.png",alt:"UXID Lab Logo",height:50,__imageData:a(7712)}),n.createElement("div",null,n.createElement("a",{href:"#background",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Background"),n.createElement("a",{href:"#research_interests",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Research Interests"),n.createElement("a",{href:"#news",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"News"),n.createElement("a",{href:"#publications",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Publications"),n.createElement("a",{href:"#students",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Students"),n.createElement("a",{href:"#teaching",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Teaching"),n.createElement("a",{href:"#awards",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Awards"),n.createElement("a",{href:"#talks",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Talks"),n.createElement("a",{href:"#service",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Service"),n.createElement("a",{href:"#contact",className:"text-lightGray mx-4 font-bold no-underline hover:underline"},"Contact")));var o=e=>{let{id:t,title:a,children:i}=e;return n.createElement("section",{id:t,className:"p-8 bg-white m-5 rounded-lg shadow-custom"},n.createElement("h2",{className:"text-2xl font-bold mb-5 text-red-500"},a),i)};const l=[{title:"2024-08-16",description:"I am currently seeking Master's and Ph.D. students. If you are interested, please send your CV and transcript to my email: ali.neshati@ontariotechu.ca."}],s=[{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"IVA: An Empirical Investigation and Design of Intelligent Virtual Assistant for Online Meetings",description:"Ali Neshati, Ehsan Jahangirzadeh, Hanyu Xu, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2025), Hamburg, Germany. ACM. (Under review)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"In-Vehicle Performance and Distraction for Midair and Touch Directional Gestures",description:"Arman Hafizi, Ali Neshati, Jay Henderson, Wei Zhou, Edward Lank, Daniel Vogel. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Interaction Region Characteristics for Midair Barehand Targeting on a Television",description:"Jay Henderson, Ali Neshati, Sachi Mizobuchi, Wei Zhou, Daniel Vogel, Edward Lank. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"De-Stijl: Facilitating Graphics Design with Interactive 2D Color Palette Recommendation",description:"Xinyu Shi, Ziqi Zhou, Jiang Zhang, Ali Neshati, Anjul Tyagi, Ryan Rossi, Shunan Guo, Fan Du, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Slide4N: Creating Presentation Slides from Computational Notebooks with Human-AI Collaboration",description:"Fengjie Wang, Xuye Liu, Oujing Liu, Ali Neshati, Tengfei Ma, Min Zhu, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"EdgeSelect: Smartwatch Data Interaction with Minimal Screen Occlusion",description:"Ali Neshati, Aaron Salo, Ahmed Shariff Mohommed Faleel, Ziming Li, Hai-Ning Liang, Celine Latulipe, Pourang Irani. In Proceedings of the 24th International Conference on Multimodal Interaction (ICMI 2022), Bengaluru, India. (Best Paper Award)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Understanding and Adapting Bezel-to-Bezel Interactions for Circular Smartwatches in Mobile and Encumbered Scenarios",description:"Bradley Rey, Zhu Kening, Simon Perrault, Sandra Bardot, Ali Neshati, Pourang Irani. In Proceedings of the 25th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2022), Vancouver, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"BezelGlide: Interacting with Graphs on Smartwatches with Minimal Screen Occlusion",description:"Ali Neshati, Bradley Rey, Ahmed Shariff Mohommed Faleel, Sandra Bardot, Celine Latulipe, Pourang Irani. In Proceedings of the 39th International Conference on Human Factors in Computing Systems (CHI 2021), Yokohama, Japan. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"SF-LG: Space-Filling Line Graphs for Visualizing Interrelated Time-series Data on Smartwatches",description:"Ali Neshati, Fouad Allah, Bradley Rey, Yumiko Sakamoto, Marcos Serrano, Pourang Irani. In Proceedings of the 23rd International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2021), Toulouse, France. ACM. (Honorable Mention Award)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Using Guessability Framework: Age-related Differences in Hand Gesture Interaction",description:"Yurii Vasylkiv, Ali Neshati, Ahmed Shariff Mohommed Faleel, Yumiko Sakamoto, Pourang Irani. In Proceedings of the 11th International Conference on Augmented Human (AH 2020), Winnipeg, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Eyes-Free Graph Legibility: Using Skin-Dragging to Provide a Tactile Graph Visualization on the Arm",description:"Sandra Bardot, Sawyer Rempel, Bradley Rey, Ali Neshati, Yumiko Sakamoto, Carlo Menon, Pourang Irani. In Proceedings of the 11th International Conference on Augmented Human (AH 2020), Winnipeg, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"G-Sparks: Glanceable Sparklines on Smartwatches",description:"Ali Neshati, Yumiko Sakamoto, Launa Leboe-Mcgowan, Jason Leboe-Mcgowan, Marcos Serrano, Pourang Irani. In Proceedings of the 45th International Conference on Graphics Interface (GI 2019), Kingston, Canada"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"An Analytic Model for Time-Efficient Personal Hierarchies",description:"William Delamare, Ali Neshati, Pourang Irani, Xiangshi Ren. In Proceedings of the 37th International Conference on Human Factors in Computing Systems (CHI 2019), Glasgow, UK. ACM. (Honorable Mention Award)"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Smart Home Interactions for People with Reduced Hand Mobility Using Subtle EMG-Signal Gestures",description:"Yurii Vasylkiv, Ali Neshati, Yumiko Sakamoto, Randy Gomez, Keisuke Nakamura, Pourang Irani. In Proceedings of the 11th Conference on Information Technology and Communications in Health (ITCH 2019), Victoria, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Challenges in Displaying Health Data on Small Smartwatch Screens",description:"Ali Neshati, Yumiko Sakamoto, Pourang Irani. In Proceedings of the 11th Conference on Information Technology and Communications (ITCH 2019), Victoria, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Performer vs. Observer: Whose Comfort Level Should We Consider When Examining the Social Acceptability of Input Modalities for Head-Worn Display?",description:"Fouad Alallah, Ali Neshati, Yumiko Sakamoto, Andrea Bunt, Pourang Irani, Khalad Hasan. In Proceedings of the 24th International Conference on Virtual Reality Software and Technology (VRST 2018), Tokyo, Japan. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Crowdsourcing vs Laboratory-Style Social Acceptability Studies? Examining the Social Acceptability of Spatial User Interactions for Head-Worn Displays",description:"Fouad Alallah, Ali Neshati, Nima Sheibani, Yumiko Sakamoto, Khalad Hassan, Edward Lank, Andrea Bunt, Pourang Irani. In Proceedings of the 36th International Conference on Human Factors in Computing Systems (CHI 2018), Montréal, Canada. ACM"},{thumbnailUrl:"https://placehold.co/500x500?text=Placeholder",title:"Is Really NACK Protocol Secure to Be Employed in MANETs?",description:"Maryam Saeed, Ali Mackvandi, Mehdi Taghavi, Mohammad Zare Bidoki, Mehdi Ghasemi, Ali Neshati. In Proceedings of the 37th International Conference on Computational Science and Engineering (CSE 2014), Chengdu, China. IEEE"}],c=[{masters:[{thumbnail:"https://i.imgur.com/9dCnQoF.png",name:"Aron-Seth Cohen",status:"MSc Student (2024-Present)"},{thumbnail:"https://i.imgur.com/hG3AaSJ.jpeg",name:"Yasaman Ghasemi",status:"MSc Student (2024-Present)"}],undergraduates:[{thumbnail:"https://placehold.co/500x500?text=Placeholder",name:"Reese",status:"Undergraduate Student (2024-2025)"},{thumbnail:"https://i.imgur.com/zMdV97X.jpeg",name:"Makeal",status:"Undergraduate Student (2024-2025)"},{thumbnail:"https://i.imgur.com/LBuNQMT.jpeg",name:"Neel",status:"Undergraduate Student (2025-Present)"}]}],d=[{school:"School of Computer Science, University of Waterloo, Canada",year:"2022 – 2023",courses:[{semester:"Summer 2022",course:"[CS 449] Human-Computer Interaction"},{semester:"Winter 2023",course:"[CS 105] Introductory Computer Science"}]},{school:"Department of Computer Science, University of Manitoba, Canada",year:"2020 – 2022",courses:[{semester:"Winter 2022",course:"[Comp 1020] Introductory Computer Science 2"},{semester:"Winter 2022",course:"[Comp 2150] Object Orientation"},{semester:"Fall 2021",course:"[Comp 1010] Introductory Computer Science I"},{semester:"Summer 2021",course:"[Comp 2150] Object Orientation"},{semester:"Winter 2021",course:"[Comp 2150] Object Orientation"},{semester:"Fall 2020",course:"[Comp 1020] Introductory Computer Science II"},{semester:"Summer 2020",course:"[Comp 2150] Object Orientation"}]},{school:"Lecturer, Department of Computer Science, Yazd University, Iran",year:"2015 – 2016",courses:[{semester:"Winter 2016",course:"Introductory Computer Science I (Language: C)"},{semester:"Winter 2016",course:"Introductory Computer Science I Lab (Language: C)"},{semester:"Winter 2016",course:"Computer Networks"},{semester:"Winter 2016",course:"Computer Networks Lab"},{semester:"Fall 2015",course:"Introductory Computer Science I (Language: C)"},{semester:"Fall 2015",course:"Introductory Computer Science I Lab (Language: C)"},{semester:"Fall 2015",course:"Algorithm Design & Analysis"}]}],u=[{title:"University of Manitoba Graduate Fellowship (UMGF)",description:"University of Manitoba (3 Years - $18,000/year)",year:"2019 - 2021"},{title:"Mitacs Accelerate Program Scholarships",description:"Institutional Academic Scholarship (2 years - $45,000/year)",year:"2020 - 2021"},{title:"Visual and Automated Disease Analytics Program",description:"Institutional Academic Scholarship (2 years - $18,000/year)",year:"2017 - 2019"},{title:"Manitoba Graduate Scholarship (MGS)",description:"The Government of Manitoba ($7,000)",year:"2018"},{title:"International Graduate Student Scholarship (IGSS)",description:"University of Manitoba (3 years - $4,000/year)",year:"2017 – 2019"},{title:"Best Paper Award",description:"International Conference on Multimodal Interaction (ICMI 2022)",year:""},{title:"Honorable Mention Award",description:"International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2021)",year:""},{title:"Honorable Mention Award",description:"International Conference on Human Factors in Computing Systems (CHI 2019)",year:""}],m=[{title:"ICMI 2022",location:"Bengaluru, India",description:"EdgeSelect: Smartwatch Data Interaction with Minimal Screen Occlusion"},{title:"MobileHCI 2021",location:"Toulouse, France (remote)",description:"SF-LG: Space-Filling Line Graphs for Visualizing Interrelated Time-series Data on Smartwatches"},{title:"CHI 2021",location:"Yokohama, Japan (remote)",description:"BezelGlide: Interacting with Graphs on Smartwatches with Minimal Screen Occlusion"},{title:"GI 2019",location:"Kingston, Canada",description:"G-Sparks: Glanceable Sparklines on Smartwatches"},{title:"ITCH 2019",location:"Victoria, Canada",description:"Challenges in Displaying Health Data on Small Smartwatch Screens"}],h=[{title:"Program Committee Member",description:"ACM Conference on Augmented Human (AH 2020)"},{title:"Conference Reviewer",description:"Since 2018, I have served as an external reviewer for several peer-reviewed international conferences, including:"},{title:"ACM Conference on Human Factors in Computing Systems (CHI)"},{title:"ACM Symposium on User Interface Software & Technology (UIST)"},{title:"IEEE Information Visualization Conference (InfoVis / VIS)"},{title:"ACM Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI)"},{title:"ACM Symposium on Spatial User Interaction (SUI)"},{title:"ACM Conference on Computer-Human Interaction in Play (CHI PLAY)"},{title:"ACM Nordic Conference on Human-Computer Interaction (NordiCHI)"},{title:"International Journal of Human-Computer Studies (IJHCS)"}];var p=()=>n.createElement("main",null,n.createElement(r,null),n.createElement(o,{id:"background",title:"Background"},n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("p",null,"Dr. Ali Neshati is an Assistant Professor at Ontario Tech University, specializing in Human-Computer Interaction. His research focuses on user interaction and information visualization techniques, wearable technologies, and ubiquitous computing. Previously, Dr. Neshati completed a Postdoctoral Fellowship at the Cheriton School of Computer Science, University of Waterloo, where he worked on cutting-edge HCI projects under the supervision of Dr. Daniel Vogel and Dr. Jian Zhao. He holds a Ph.D. in Computer Science from the University of Manitoba, where his research centered on data visualization and interaction on smartwatch small screens, and an M.Sc. from Sharif University of Technology, where he investigated defining and critical sets in graphs and Latin squares."))),n.createElement(o,{id:"research_interests",title:"Research Interests"},n.createElement("p",null,"My primary research interest is in Human-Computer Interaction (HCI), where I explore users’ needs and design solutions to make an impact in their lives when it concerns efficient human-computer interactivity. My current research areas include:"),n.createElement("ul",{className:"list-disc"},n.createElement("li",{className:"font-bold"},"Input Devices and Interaction Techniques"),n.createElement("li",{className:"font-bold"},"Ubiquitous Analytics"),n.createElement("li",{className:"font-bold"},"Information Visualization"),n.createElement("li",{className:"font-bold"},"Mobile and Wearable User Interfaces"))),n.createElement(o,{id:"news",title:"News"},n.createElement("div",{className:"flex flex-col gap-4"},l.map((e=>n.createElement("ul",{className:"list-disc"},n.createElement("li",{key:e.title},n.createElement("p",{className:"font-bold"},e.title),n.createElement("p",null,e.description))))))),n.createElement(o,{id:"publications",title:"Publications"},n.createElement("div",{className:"flex flex-col gap-4"},s.map((e=>n.createElement("div",{key:e.title,className:"flex gap-4 bg-slate-100 p-4 rounded"},n.createElement("img",{className:"w-48 h-48 rounded",src:e.thumbnailUrl,alt:e.title}),n.createElement("div",null,n.createElement("p",{className:"font-bold"},e.title),n.createElement("p",null,e.description))))))),n.createElement(o,{id:"students",title:"Students"},n.createElement("div",{className:"flex flex-col gap-4"},c.map((e=>n.createElement("div",{key:e.masters[0].name},n.createElement("p",{className:"font-bold"},"Masters"),n.createElement("div",{className:"grid grid-cols-3 gap-4"},e.masters.map((e=>n.createElement("div",{key:e.name,className:"flex flex-col items-center"},n.createElement("img",{className:"w-48 h-48 rounded",src:e.thumbnail,alt:e.name}),n.createElement("p",null,e.name),n.createElement("p",null,e.status))))),n.createElement("p",{className:"font-bold"},"Undergraduates"),n.createElement("div",{className:"grid grid-cols-3 gap-4"},e.undergraduates.map((e=>n.createElement("div",{key:e.name,className:"flex flex-col items-center"},n.createElement("img",{className:"w-48 h-48 rounded",src:e.thumbnail,alt:e.name}),n.createElement("p",null,e.name),n.createElement("p",null,e.status)))))))))),n.createElement(o,{id:"teaching",title:"Teaching"},n.createElement("div",{className:"flex flex-col gap-4"},d.map((e=>n.createElement("div",{key:e.school},n.createElement("p",{className:"font-bold"},e.school),n.createElement("p",null,e.year),e.courses.map((e=>n.createElement("ul",{className:"list-disc"},n.createElement("li",{key:e.course},n.createElement("p",null,e.semester),n.createElement("p",null,e.course)))))))))),n.createElement(o,{id:"awards",title:"Scholarships, Awards, and Funding Resources"},n.createElement("div",{className:"flex flex-col gap-4"},u.map((e=>n.createElement("ul",{className:"list-disc"},n.createElement("li",{key:e.title},n.createElement("p",{className:"font-bold"},e.title),n.createElement("p",null,e.description),n.createElement("p",null,e.year))))))),n.createElement(o,{id:"talks",title:"Talks"},n.createElement("div",{className:"flex flex-col gap-4"},m.map((e=>n.createElement("ul",{className:"list-disc"},n.createElement("li",{key:e.title},n.createElement("p",{className:"font-bold"},e.title),n.createElement("p",null,e.location),n.createElement("p",null,e.description))))))),n.createElement(o,{id:"service",title:"Service"},n.createElement("div",{className:"flex flex-col gap-4"},h.map((e=>n.createElement("ul",{className:"list-disc"},n.createElement("li",{key:e.title},n.createElement("p",{className:"font-bold"},e.title),n.createElement("p",null,e.description))))))),n.createElement(o,{id:"contact",title:"Contact"},n.createElement("p",null,"Dr. Ali Neshati"),n.createElement("p",null,"Ontario Tech University - Science Building - UA 4041"),n.createElement("p",null,"Email:",n.createElement("a",{href:"mailto:ali.neshati@ontariotechu.ca"},"ali.neshati@ontariotechu.ca"))));const g=()=>n.createElement("title",null,"Home Page")},7712:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/b014f/uxid.png","srcSet":"/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/22ade/uxid.png 25w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/acd85/uxid.png 51w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/b014f/uxid.png 101w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/446f1/uxid.png 202w","sizes":"(min-width: 101px) 101px, 100vw"},"sources":[{"srcSet":"/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/2d358/uxid.webp 25w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/9864b/uxid.webp 51w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/afef7/uxid.webp 101w,\\n/uxid.ca/static/42b0aa99855640cad5f7752b3193cb17/d5fd2/uxid.webp 202w","type":"image/webp","sizes":"(min-width: 101px) 101px, 100vw"}]},"width":101,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2520303af97029c10242.js.map