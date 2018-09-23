!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===l)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";n.r(t);const{__:r,sprintf:o}=wp.i18n,{Component:l,Fragment:a}=wp.element,{PanelBody:c,Toolbar:s}=wp.components,{createBlock:i}=wp.blocks,{RichText:p,BlockControls:u,InspectorControls:m,AlignmentToolbar:d}=wp.editor;class g extends l{static getDerivedStateFromProps(e,t){return void 0===e.attributes.nodeName&&(e.attributes.nodeName=gutenbergBasicsSettings.headings[0].toUpperCase()),t}render(){const{attributes:e,setAttributes:t,mergeBlocks:n,insertBlocksAfter:l,onReplace:g,className:b}=this.props,{align:f,content:h,level:w,placeholder:v}=e,{headings:y}=gutenbergBasicsSettings,k=y.map(e=>Number(e.substr(1))),C="h"+w,E=wp.element.createElement(s,{controls:k.map(e=>({icon:"heading",title:o(r("Heading %s"),e),isActive:e===w,onClick:()=>t({level:e}),subscript:e}))});return wp.element.createElement(a,null,wp.element.createElement(u,null,E),wp.element.createElement(m,null,wp.element.createElement(c,{title:r("Heading Settings")},wp.element.createElement("p",null,r("Level")),E,wp.element.createElement("p",null,r("Text Alignment")),wp.element.createElement(d,{value:f,onChange:e=>{t({align:e})}}))),wp.element.createElement(p,{wrapperClassName:"wp-block-heading",tagName:C,value:h,onChange:e=>t({content:e}),onMerge:n,onSplit:l?(e,n,...r)=>{t({content:e}),l([...r,i("core/paragraph",{content:n})])}:void 0,onRemove:()=>g([]),style:{textAlign:f},className:b,placeholder:v||r("Write heading…")}))}}var b=n(0),f=n.n(b);function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{__:v}=wp.i18n,{Component:y,Fragment:k}=wp.element,{createBlock:C}=wp.blocks,{AlignmentToolbar:E,BlockControls:x,RichText:B}=wp.editor;class R extends y{constructor(){super(...arguments),this.onReplace=this.onReplace.bind(this)}onReplace(e){const{attributes:t,onReplace:n}=this.props;n(e.map((e,n)=>0===n&&"core/paragraph"===e.name?h({},e,{attributes:h({},t,e.attributes)}):e))}render(){const{attributes:e,setAttributes:t,insertBlocksAfter:n,mergeBlocks:r,onReplace:o,className:l}=this.props,{align:a,content:c,placeholder:s}=e;return wp.element.createElement(k,null,wp.element.createElement(x,null,wp.element.createElement(E,{value:a,onChange:e=>{t({align:e})}})),wp.element.createElement("div",null,wp.element.createElement(B,{tagName:"p",className:f()("wp-block-paragraph",l),style:{textAlign:a},value:c,onChange:e=>{t({content:e})},onSplit:n?(e,r,...l)=>{r&&l.push(C("core/paragraph",{content:r})),n(l),e?t({content:e}):o([])}:void 0,onMerge:r,onReplace:this.onReplace,onRemove:()=>o([]),placeholder:s||v("Add text or type / to add content")})))}}const{__:S}=wp.i18n,{Component:O,Fragment:A}=wp.element,{compose:_}=wp.compose,{Dashicon:P,IconButton:j}=wp.components,{URLInput:N,RichText:T,InspectorControls:F,withColors:M,PanelColorSettings:D}=wp.editor;var I=_([M("backgroundColor",{textColor:"color"})])(class extends O{constructor(){super(...arguments),this.nodeRef=null,this.bindRef=this.bindRef.bind(this)}bindRef(e){e&&(this.nodeRef=e)}render(){const{attributes:e,backgroundColor:t,textColor:n,setBackgroundColor:r,setTextColor:o,setAttributes:l,isSelected:a}=this.props,{text:c,url:s,title:i}=e;return wp.element.createElement(A,null,wp.element.createElement("div",{className:"wp-block-button",title:i,ref:this.bindRef},wp.element.createElement(T,{placeholder:S("Add text…"),value:c,onChange:e=>l({text:e}),formattingControls:["bold","italic","strikethrough"],className:f()("wp-block-button__link",{"has-background":t.color,[t.class]:t.class,"has-text-color":n.color,[n.class]:n.class}),style:{backgroundColor:t.color,color:n.color},keepPlaceholderOnFocus:!0}),wp.element.createElement(F,null,wp.element.createElement(D,{title:S("Color Settings"),colorSettings:[{value:t.color,onChange:r,label:S("Background Color")}]}))),a&&wp.element.createElement("form",{className:"block-library-button__inline-link",onSubmit:e=>e.preventDefault()},wp.element.createElement(P,{icon:"admin-links"}),wp.element.createElement(N,{value:s,onChange:e=>l({url:e})}),wp.element.createElement(j,{icon:"editor-break",label:S("Apply"),type:"submit"})))}});const{addFilter:H}=wp.hooks,{unregisterBlockType:L,getBlockTypes:U}=wp.blocks;window.onload=(()=>{const{whitelistedBlocks:e}=gutenbergBasicsSettings,t=wp.data.select("core/editor").getCurrentPost().type;void 0!==e[t]&&U().forEach(n=>{-1===e[t].indexOf(n.name)&&L(n.name)})}),H("blocks.registerBlockType","gutenberg-basics/remove-html-supports",e=>(void 0===e.supports&&(e.supports={}),e.supports.html=!1,e)),H("editor.BlockEdit","gutenberg-basics/overrides",e=>t=>"core/heading"===t.name?wp.element.createElement(g,t):"core/paragraph"===t.name?wp.element.createElement(R,t):"core/button"===t.name?wp.element.createElement(I,t):wp.element.createElement(e,t))}]);
//# sourceMappingURL=app.js.map