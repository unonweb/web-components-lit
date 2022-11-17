var pt=Object.defineProperty;var mt=(o,t,e)=>t in o?pt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var $=(o,t,e)=>(mt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window,q=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),W=new WeakMap;class nt{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&W.set(e,t))}return t}toString(){return this.cssText}}const gt=o=>new nt(typeof o=="string"?o:o+"",void 0,V),ft=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new nt(e,o,V)},vt=(o,t)=>{q?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},G=q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return gt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N;const O=window,K=O.trustedTypes,$t=K?K.emptyScript:"",Z=O.reactiveElementPolyfillSupport,z={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ot=(o,t)=>t!==o&&(t==t||o==o),M={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:ot};class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=M){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=i.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:z;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:_}),((N=O.reactiveElementVersions)!==null&&N!==void 0?N:O.reactiveElementVersions=[]).push("1.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const H=window,w=H.trustedTypes,J=w?w.createPolicy("lit-html",{createHTML:o=>o}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+v,bt=`<${rt}>`,S=document,I=(o="")=>S.createComment(o),T=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,_t=o=>lt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,b=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,yt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=yt(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),et=new WeakMap,y=S.createTreeWalker(S,129,null,!1),wt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=x;for(let l=0;l<e;l++){const a=o[l];let f,h,u=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===x?h[1]==="!--"?r=Q:h[1]!==void 0?r=X:h[2]!==void 0?(at.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=b):h[3]!==void 0&&(r=b):r===b?h[0]===">"?(r=i!=null?i:x,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,f=h[1],r=h[3]===void 0?b:h[3]==='"'?tt:Y):r===tt||r===Y?r=b:r===Q||r===X?r=x:(r=b,i=void 0);const P=r===b&&o[l+1].startsWith("/>")?" ":"";n+=r===x?a+bt:u>=0?(s.push(f),a.slice(0,u)+"$lit$"+a.slice(u)+v+P):a+v+(u===-2?(s.push(void 0),l):P)}const d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[J!==void 0?J.createHTML(d):d,s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const d=t.length-1,l=this.parts,[a,f]=wt(t,e);if(this.el=C.createElement(a,s),y.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=y.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(v)){const m=f[r++];if(h.push(u),m!==void 0){const P=i.getAttribute(m.toLowerCase()+"$lit$").split(v),L=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:L[2],strings:P,ctor:L[1]==="."?At:L[1]==="?"?xt:L[1]==="@"?It:U})}else l.push({type:6,index:n})}for(const u of h)i.removeAttribute(u)}if(at.test(i.tagName)){const h=i.textContent.split(v),u=h.length-1;if(u>0){i.textContent=w?w.emptyScript:"";for(let m=0;m<u;m++)i.append(h[m],I()),y.nextNode(),l.push({type:2,index:++n});i.append(h[u],I())}}}else if(i.nodeType===8)if(i.data===rt)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:n}),h+=v.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function E(o,t,e=o,s){var i,n,r,d;if(t===A)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=E(o,l._$AS(o,t.values),l,s)),t}class St{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(s,!0);y.currentNode=n;let r=y.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let f;a.type===2?f=new k(r,r.nextSibling,this,t):a.type===1?f=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(f=new Tt(r,this,t)),this.u.push(f),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=y.nextNode(),d++)}return n}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_t(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(s);else{const r=new St(n,this),d=r.v(this.options);r.p(s),this.T(d),this._$AH=r}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new C(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new k(this.O(I()),this.O(I()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class U{constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=E(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const d=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=E(this,d[s+l],e,l),a===A&&(a=this._$AH[l]),r||(r=!T(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class At extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Et=w?w.emptyScript:"";class xt extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Et):this.element.removeAttribute(this.name)}}class It extends U{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:p)===A)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const st=H.litHtmlPolyfillSupport;st==null||st(C,k),((j=H.litHtmlVersions)!==null&&j!==void 0?j:H.litHtmlVersions=[]).push("2.4.0");const Ct=(o,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=n._$litPart$;if(r===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new k(t.insertBefore(I(),d),d,void 0,e!=null?e:{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,F;class g extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return A}}g.finalized=!0,g._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:g});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:g});((F=globalThis.litElementVersions)!==null&&F!==void 0?F:globalThis.litElementVersions=[]).push("3.2.0");class ht extends g{constructor(){super(),this.openOn="click",this.title="menu",this.overlay=!1}firstUpdated(){switch(this.button=this.shadowRoot.querySelector("button"),this.dropContent=this.shadowRoot.querySelector(".drop-content"),this.openOn){case"click":this.button.addEventListener("click",t=>this.dropContent.classList.toggle("active")),document.addEventListener("click",t=>{this.shadowRoot.host.contains(t.target)||this.dropContent.classList.remove("active")});break;case"hover":this.button.addEventListener("mouseover",t=>this.dropContent.classList.add("active")),this.shadowRoot.host.addEventListener("mouseleave",t=>this.dropContent.classList.remove("active"));break}}render(){return console.log("render()"),c`
			<link rel="stylesheet" href='/components/un-drop-down--core.css'>
			<link rel="stylesheet" href='/components/un-drop-down--add.css'>
			<button>${this.title}</button>
			<div class="drop-content" part="drop-content">
				<slot>default slot</slot>
				<slot></slot>
				<slot name="un-drop-last"></slot>
			</div>
		`}}$(ht,"properties",{openOn:{type:String,reflect:!0},title:{type:String,reflect:!0},overlay:{type:Boolean,reflect:!0}});customElements.define("un-drop-down",ht);class D extends g{constructor(){super()}render(){return c`
			${this.createLeft()}
			${this.createRight()}
		`}createLeft(){return this.shadowRoot.host.hasAttribute("left")?c`
		<button class="arrow left">
			<svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
				<polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
			</svg>  
		</button>
		`:""}createRight(){return this.shadowRoot.host.hasAttribute("right")?c`
			<button class="arrow right">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
					<polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
				</svg>
			</button>
		`:""}}$(D,"properties",{left:{type:Boolean,reflect:!0},right:{type:Boolean,reflect:!0}}),$(D,"styles",ft`
/* html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  background: rgb(17,123,189);
} */

button {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline:0;
}

svg {
  padding: 5px;
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -45px;
  margin-left: -35px;
  width: 70px;
  height: 90px;
}

.left {
  left: 42%;
}

.right {
  left: 58%;
}

.left:hover polyline,
.left:focus polyline {
  stroke-width: 3;
}

.left:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
  stroke-width: 3;
}

.right:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

polyline {
  transition: all 250ms ease-in-out;
}
`);customElements.define("un-arrow-two",D);class dt extends g{constructor(){super(),this.selectedImgIndex=0,this.thumbnailsCreated=!1,this.bulletsCreated=!1,this._firstThumbIndexShown=0,this._lastThumbIndexShown=5}get lastImgIndex(){return this.slottedElements.length-1}set firstThumbIndexShown(t){var s,i,n,r;let e=this.firstThumbIndexShown;console.log("setting firstThumbIndexShown to ",t),(i=(s=this.thumbnailElements[e-1])==null?void 0:s.classList)==null||i.remove("thumbnail-next-left"),(r=(n=this.thumbnailElements[t-1])==null?void 0:n.classList)==null||r.add("thumbnail-next-left"),this._firstThumbIndexShown=t}get firstThumbIndexShown(){return this._firstThumbIndexShown}set lastThumbIndexShown(t){var s,i,n,r;let e=this.lastThumbIndexShown;console.log("setting lastThumbIndexShown to ",t),(i=(s=this.thumbnailElements[e+1])==null?void 0:s.classList)==null||i.remove("thumbnail-next-right"),(r=(n=this.thumbnailElements[t+1])==null?void 0:n.classList)==null||r.add("thumbnail-next-right"),this._lastThumbIndexShown=t}get lastThumbIndexShown(){return this._lastThumbIndexShown}render(){return console.log("render()"),c`
			<link rel="stylesheet" href='/components/un-gallery--core.css'>
			<link rel="stylesheet" href='/components/un-gallery--add.css'>
			<div class="showcase" class="showcase">
				<un-arrow-two class="arrows left" left @click=${()=>this.setImgIndex(this.selectedImgIndex-1)}></un-arrow-two>
				<slot class="img"></slot>
				<un-arrow-two class="arrows right" right @click=${()=>this.setImgIndex(this.selectedImgIndex+1)}></un-arrow-two>
				${this._createBullets()}
			</div>
			${this._createThumbnails()}
		`}firstUpdated(){let t=this.shadowRoot.querySelector("slot");if(this.slottedElements=t.assignedElements({flatten:!0}),this.slottedElements.length===0&&console.error("this.slottedElements.length === 0"),this.slottedElements[0].classList.add("show"),this.shadowRoot.host.getAttribute("hover")==="swap"){console.log("adding event listener for hover=swap");let e=this.shadowRoot.querySelector(".showcase");e.addEventListener("mouseover",()=>this.setImgIndex(this.selectedImgIndex+1)),e.addEventListener("mouseout",()=>this.setImgIndex(this.selectedImgIndex-1))}}updated(){this.thumbnailsCreated||(this.thumbnailElements=Array.from(this.shadowRoot.querySelectorAll("#thumbnails img")),this.thumbnailElements.length>0&&(this.thumbnailsCreated=!0))}setImgIndex(t){let e=this.selectedImgIndex;t>this.slottedElements.length-1||t<0||(this.slottedElements[e].classList.remove("show"),this.slottedElements[t].classList.add("show"),typeof t<"u"&&(this.selectedImgIndex=t),this.bulletsCreated&&(this.shadowRoot.querySelector(`#bullet-${e}`).classList.remove("bullet-current"),this.shadowRoot.querySelector(`#bullet-${t}`).classList.add("bullet-current")),this.thumbnailsCreated&&(this.shadowRoot.querySelector(`#thumbnail-${e}`).classList.remove("thumbnail-current"),this.shadowRoot.querySelector(`#thumbnail-${t}`).classList.add("thumbnail-current"),this._updateThumbIndexShown(t,0,this.lastImgIndex,this.firstThumbIndexShown,this.lastThumbIndexShown)&&this.thumbnailElements.forEach((i,n)=>{n>=this.firstThumbIndexShown&&n<=this.lastThumbIndexShown?i.classList.remove("thumbnail-hide"):i.classList.add("thumbnail-hide")})))}_updateThumbIndexShown(t=0,e=0,s,i,n){if(t<n&&t>i||t===n&&t===s||t===i&&t===e)return!1;if(t===n&&(this.firstThumbIndexShown++,this.lastThumbIndexShown++),t===i&&(this.firstThumbIndexShown--,this.lastThumbIndexShown--),t>n){let r=t-n;this.firstThumbIndexShown=this.firstThumbIndexShown+r,this.lastThumbIndexShown=this.lastThumbIndexShown+r}if(t<i){let r=t-i;this.firstThumbIndexShown=this.firstThumbIndexShown+r,this.lastThumbIndexShown=this.lastThumbIndexShown+r}return console.log(`_updateThumbIndexShown(): pointer: ${t}, ${this.firstThumbIndexShown} - ${this.lastThumbIndexShown}`),!0}_createBullets(){if(!!this.shadowRoot.host.hasAttribute("bullets")&&this.shadowRoot.host.getAttribute("bullets")!=="0"&&this.shadowRoot.host.getAttribute("bullets")!=="false")return this.slottedElements?(this.bulletsCreated=!0,c`
			<div class="bullets">
				${this.slottedElements.map((t,e)=>{let s="";return s=e===this.selectedImgIndex?"bullet-current":"",c`
						<div 
							class="bullet ${s}"
							id="bullet-${e}"
							data-index=${e}
							@click=${i=>this.setImgIndex(Number(i.target.dataset.index))}>
						</div>
					`})}
			</div>
		`):""}_createThumbnails(){if(!!this.shadowRoot.host.hasAttribute("thumbnails")&&this.shadowRoot.host.getAttribute("thumbnails")!=="0"&&this.shadowRoot.host.getAttribute("thumbnails")!=="false")return this.slottedElements?(this.lastThumbIndexShown=this.thumbnails-1,c`
			<div id="thumbnails" class="thumbnails" class="thumbnails">
				${this.slottedElements.map((t,e)=>{let s="";return e===this.selectedImgIndex&&(s="thumbnail-current"),(e<this.firstThumbIndexShown||e>this.lastThumbIndexShown)&&(s=s.concat(" ","thumbnail-hide")),c`
						<img
							src=${t.src}
							srcset=${t.srcset}
							class="thumbnail"
							class="thumbnail ${s}"
							id="thumbnail-${e}"
							data-index=${e}
							@click=${i=>this.setImgIndex(Number(i.target.dataset.index))}>
					`})}
			</div>
		`):""}}$(dt,"properties",{slottedElements:{type:Array,attribute:!1},thumbnailsCreated:{type:Boolean,attribute:!1},hover:{type:String,attribute:!0},transfx:{type:String,attribute:!0},arrows:{type:Boolean,attribute:!0},bullets:{type:Boolean,attribute:!0},thumbnails:{type:Number,attribute:!0},orientation:{type:String,attribute:!0}});customElements.define("un-gallery",dt);class ut extends g{constructor(){super()}render(){return c`
			<link rel="stylesheet" href='/components/un-menu-bar--core.css'>
			<link rel="stylesheet" href='/components/un-menu-bar--add.css'>
			<div class="left">
				<slot name="left"></slot>
			</div>
			<div class="left">
				<slot name="right"></slot>
			</div>
        `}handleActive(t){this.aElements.forEach(e=>e.classList.remove("active")),t.target.classList.add("active")}}$(ut,"properties",{theme:{type:String,reflect:!0}});customElements.define("un-menu-bar",ut);class kt extends g{render(){return console.log("render()"),c`
			<link rel="stylesheet" href='/components/un-header--core.css'>
			<slot></slot>
    	`}}customElements.define("un-header",kt);class ct extends g{constructor(){super(),this.lang="en",this.imgs=[{original:"/assets/img/1dc1ece412f8a1230a063150dc997baf.jpg",img640:"/assets/img/1dc1ece412f8a1230a063150dc997baf-1-640x427.jpg",img1024:"/assets/img/1dc1ece412f8a1230a063150dc997baf-1-1024x683.jpg"},{original:"/assets/img/3a4c56cb79add79ba477782f08b4b2d4.jpg"},{original:"/assets/img/6b000fc5171d41ae20dd5197fba7b11a.jpg"},{original:"/assets/img/26790776ea56a73c66fe2fc92be597e6.jpg"},{original:"/assets/img/a9e68f346d3371e37d0ba8c51cf8c4ae.jpg"},{original:"/assets/img/3a4c56cb79add79ba477782f08b4b2d4.jpg",img640:"/assets/img/3a4c56cb79add79ba477782f08b4b2d4-640x427.jpg"},{original:"/assets/img/6b000fc5171d41ae20dd5197fba7b11a.jpg"},{original:"/assets/img/21d684ce18b9d0fea8ba45f4232f7b5c.jpg"}],this.products=[{name:"Fish",value:7,imgs:this.imgs},{name:"Bread",value:1,imgs:this.imgs},{name:"Water",value:2,imgs:this.imgs},{name:"Wood",value:8,imgs:this.imgs}],this.routes={404:{template:this._pageNotFound.bind(this),title:"404",description:"Page not found"},"/home":{template:this._pageHome.bind(this),title:"HOME",description:"This is the HOME page"},"/shop":{template:this._pageShop.bind(this),title:"Shop",description:"This is the SHOP page"},"/products":{template:this._pageProducts.bind(this),title:"Products",description:"This is the PROD page"}},this.location="/home"}connectedCallback(){super.connectedCallback(),this.lang=this._getBrowserLang(),window.addEventListener("click",t=>{if(console.log("evt.composedPath()[0]: ",t.composedPath()[0]),t!=null&&t.composedPath()[0].matches("nav a")){console.log("nav anchor clicked");let e=t==null?void 0:t.composedPath()[0];t.preventDefault(),window.history.pushState({},"",e.href),this.updateLocation()}}),window.addEventListener("popstate",()=>{console.log("popstate!"),this.updateLocation()})}createRenderRoot(){return this}render(){let t=this.routes[this.location]||this.routes[404];return document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),c`
		<header>
			<un-header>
				${this._createImgSrcSetEl(this.imgs[0])}
			</un-header>
		</header>
		<nav>
			<un-menu-bar>
				<a slot="left" href="/home">Home</a>
				<a slot="left" href="/shop">Shop</a>
				<a slot="left" href="/products">Products</a>
				<un-drop-down slot="right" overlay="true" openon="click">
					<a href="/home">Home</a>
					<a href="/shop">Shop</a>
					<a href="/products">Products</a>
					<hr>
					<a href="/home">Home</a>
				</un-drop-down>
			</un-menu-bar>
		</nav>
		<main>
			${t.template()}
		</main>
			
			
		`}_createImgSrcSetEl(t=[{original:"",img1920:"",img1366:"",img1024:"",img768:"",img640:""}]){let e=t.img1920?`${t.img1920} 1920w, `:"",s=t.img1600?`${t.img1600} 1600w, `:"",i=t.img1366?`${t.img1366} 1366w, `:"",n=t.img1024?`${t.img1024} 1024w, `:"",r=t.img768?`${t.img768} 768w, `:"",d=t.img640?`${t.img640} 640w, `:"";return c`
			<img
				src=${t.original}
				srcset="${e}${s}${i}${n}${r}${d}"
				sizes="
					(max-width: 640px) 640px, 
					(max-width: 768px) 768px, 
					(max-width: 1024px) 1024px,
					(max-width: 1366px) 1366px,
					(max-width: 1600px) 1600px,
					1920px"
			>
		`}_pageProducts(){return c`
			${this.products.map(t=>c`
					<h1>${t.name}</h1>
					<h3>${t.value}</h3>
					<un-gallery thumbnails="5" bullets="true" arrows="true" orientation="horizontal">
						${t.imgs.map(e=>this._createImgSrcSetEl(e))}
					</un-gallery>
				`)}
		`}_pageShop(){return c`
			<h1>SHOP PAGE</h1>	
		`}_pageHome(){return c`
			<h1>HOME PAGE</h1>	
		`}_pageNotFound(){return c`PAGE NOT FOUND`}_getBrowserLang(){let t;switch(navigator.language){case"en-us":case"en-US":case"en":t="en";break;case"de":t="de";break;default:t="de"}return console.log("_getBrowserLang(): ",t),t}updateLocation(){this.location=window.location.pathname,console.log("this._location: ",this.location)}}$(ct,"properties",{imgs:{type:Array,attribute:!1},routes:{type:Array,attribute:!1},location:{type:String,attribute:!1},lang:{type:String,attribute:!1}});customElements.define("un-app",ct);
