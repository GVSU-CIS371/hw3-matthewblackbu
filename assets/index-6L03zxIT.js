(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Za(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const wt={},Ir=[],Fe=()=>{},$g=()=>!1,so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tl=e=>e.startsWith("onUpdate:"),ce=Object.assign,el=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jg=Object.prototype.hasOwnProperty,_t=(e,t)=>jg.call(e,t),nt=Array.isArray,wr=e=>Ls(e)==="[object Map]",jh=e=>Ls(e)==="[object Set]",zc=e=>Ls(e)==="[object Date]",at=e=>typeof e=="function",Ft=e=>typeof e=="string",De=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",Hh=e=>(Ct(e)||at(e))&&at(e.then)&&at(e.catch),qh=Object.prototype.toString,Ls=e=>qh.call(e),Hg=e=>Ls(e).slice(8,-1),zh=e=>Ls(e)==="[object Object]",nl=e=>Ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fs=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qg=/-(\w)/g,In=io(e=>e.replace(qg,(t,n)=>n?n.toUpperCase():"")),zg=/\B([A-Z])/g,nr=io(e=>e.replace(zg,"-$1").toLowerCase()),Kh=io(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qo=io(e=>e?`on${Kh(e)}`:""),gn=(e,t)=>!Object.is(e,t),Ei=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Wh=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_a=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kc;const oo=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(e){if(nt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ft(r)?Qg(r):Mr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ft(e)||Ct(e))return e}const Kg=/;(?![^(]*\))/g,Wg=/:([^]+)/,Gg=/\/\*[^]*?\*\//g;function Qg(e){const t={};return e.replace(Gg,"").split(Kg).forEach(n=>{if(n){const r=n.split(Wg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function rl(e){let t="";if(Ft(e))t=e;else if(nt(e))for(let n=0;n<e.length;n++){const r=rl(e[n]);r&&(t+=r+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xg=Za(Yg);function Gh(e){return!!e||e===""}function Jg(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Di(e[r],t[r]);return n}function Di(e,t){if(e===t)return!0;let n=zc(e),r=zc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=De(e),r=De(t),n||r)return e===t;if(n=nt(e),r=nt(t),n||r)return n&&r?Jg(e,t):!1;if(n=Ct(e),r=Ct(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!Di(e[a],t[a]))return!1}}return String(e)===String(t)}const Qh=e=>!!(e&&e.__v_isRef===!0),gr=e=>Ft(e)?e:e==null?"":nt(e)||Ct(e)&&(e.toString===qh||!at(e.toString))?Qh(e)?gr(e.value):JSON.stringify(e,Yh,2):String(e),Yh=(e,t)=>Qh(t)?Yh(e,t.value):wr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Yo(r,i)+" =>"]=s,n),{})}:jh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Yo(n))}:De(t)?Yo(t):Ct(t)&&!nt(t)&&!zh(t)?String(t):t,Yo=(e,t="")=>{var n;return De(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class Xh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=de;try{return de=this,t()}finally{de=n}}}on(){de=this}off(){de=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jh(e){return new Xh(e)}function Zh(){return de}function Zg(e,t=!1){de&&de.cleanups.push(e)}let At;const Xo=new WeakSet;class tf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xo.has(this)&&(Xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wc(this),rf(this);const t=At,n=Pe;At=this,Pe=!0;try{return this.fn()}finally{sf(this),At=t,Pe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ol(t);this.deps=this.depsTail=void 0,Wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ya(this)&&this.run()}get dirty(){return ya(this)}}let ef=0,ds,ps;function nf(e,t=!1){if(e.flags|=8,t){e.next=ps,ps=e;return}e.next=ds,ds=e}function sl(){ef++}function il(){if(--ef>0)return;if(ps){let t=ps;for(ps=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ds;){let t=ds;for(ds=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function rf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ol(r),tm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ya(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(of(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function of(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===As))return;e.globalVersion=As;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ya(e)){e.flags&=-3;return}const n=At,r=Pe;At=e,Pe=!0;try{rf(e);const s=e.fn(e._value);(t.version===0||gn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{At=n,Pe=r,sf(e),e.flags&=-3}}function ol(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ol(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function tm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Pe=!0;const af=[];function Dn(){af.push(Pe),Pe=!1}function xn(){const e=af.pop();Pe=e===void 0?!0:e}function Wc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=At;At=void 0;try{t()}finally{At=n}}}let As=0;class em{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class al{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!At||!Pe||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new em(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,lf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=r)}return n}trigger(t){this.version++,As++,this.notify(t)}notify(t){sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{il()}}}function lf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)lf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xi=new WeakMap,Gn=Symbol(""),va=Symbol(""),bs=Symbol("");function ie(e,t,n){if(Pe&&At){let r=xi.get(e);r||xi.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new al),s.map=r,s.key=n),s.track()}}function Xe(e,t,n,r,s,i){const a=xi.get(e);if(!a){As++;return}const l=u=>{u&&u.trigger()};if(sl(),t==="clear")a.forEach(l);else{const u=nt(e),f=u&&nl(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,I)=>{(I==="length"||I===bs||!De(I)&&I>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(bs)),t){case"add":u?f&&l(a.get("length")):(l(a.get(Gn)),wr(e)&&l(a.get(va)));break;case"delete":u||(l(a.get(Gn)),wr(e)&&l(a.get(va)));break;case"set":wr(e)&&l(a.get(Gn));break}}il()}function nm(e,t){const n=xi.get(e);return n&&n.get(t)}function fr(e){const t=mt(e);return t===e?t:(ie(t,"iterate",bs),be(e)?t:t.map(oe))}function ao(e){return ie(e=mt(e),"iterate",bs),e}const rm={__proto__:null,[Symbol.iterator](){return Jo(this,Symbol.iterator,oe)},concat(...e){return fr(this).concat(...e.map(t=>nt(t)?fr(t):t))},entries(){return Jo(this,"entries",e=>(e[1]=oe(e[1]),e))},every(e,t){return Qe(this,"every",e,t,void 0,arguments)},filter(e,t){return Qe(this,"filter",e,t,n=>n.map(oe),arguments)},find(e,t){return Qe(this,"find",e,t,oe,arguments)},findIndex(e,t){return Qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Qe(this,"findLast",e,t,oe,arguments)},findLastIndex(e,t){return Qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Zo(this,"includes",e)},indexOf(...e){return Zo(this,"indexOf",e)},join(e){return fr(this).join(e)},lastIndexOf(...e){return Zo(this,"lastIndexOf",e)},map(e,t){return Qe(this,"map",e,t,void 0,arguments)},pop(){return ns(this,"pop")},push(...e){return ns(this,"push",e)},reduce(e,...t){return Gc(this,"reduce",e,t)},reduceRight(e,...t){return Gc(this,"reduceRight",e,t)},shift(){return ns(this,"shift")},some(e,t){return Qe(this,"some",e,t,void 0,arguments)},splice(...e){return ns(this,"splice",e)},toReversed(){return fr(this).toReversed()},toSorted(e){return fr(this).toSorted(e)},toSpliced(...e){return fr(this).toSpliced(...e)},unshift(...e){return ns(this,"unshift",e)},values(){return Jo(this,"values",oe)}};function Jo(e,t,n){const r=ao(e),s=r[t]();return r!==e&&!be(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const sm=Array.prototype;function Qe(e,t,n,r,s,i){const a=ao(e),l=a!==e&&!be(e),u=a[t];if(u!==sm[t]){const g=u.apply(e,i);return l?oe(g):g}let f=n;a!==e&&(l?f=function(g,I){return n.call(this,oe(g),I,e)}:n.length>2&&(f=function(g,I){return n.call(this,g,I,e)}));const d=u.call(a,f,r);return l&&s?s(d):d}function Gc(e,t,n,r){const s=ao(e);let i=n;return s!==e&&(be(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,oe(l),u,e)}),s[t](i,...r)}function Zo(e,t,n){const r=mt(e);ie(r,"iterate",bs);const s=r[t](...n);return(s===-1||s===!1)&&ul(n[0])?(n[0]=mt(n[0]),r[t](...n)):s}function ns(e,t,n=[]){Dn(),sl();const r=mt(e)[t].apply(e,n);return il(),xn(),r}const im=Za("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(De));function om(e){De(e)||(e=String(e));const t=mt(this);return ie(t,"has",e),t.hasOwnProperty(e)}class uf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?mm:pf:i?df:ff).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=nt(t);if(!s){let u;if(a&&(u=rm[n]))return u;if(n==="hasOwnProperty")return om}const l=Reflect.get(t,n,kt(t)?t:r);return(De(n)?cf.has(n):im(n))||(s||ie(t,"get",n),i)?l:kt(l)?a&&nl(n)?l:l.value:Ct(l)?s?gf(l):lo(l):l}}class hf extends uf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Yn(i);if(!be(r)&&!Yn(r)&&(i=mt(i),r=mt(r)),!nt(t)&&kt(i)&&!kt(r))return u?!1:(i.value=r,!0)}const a=nt(t)&&nl(n)?Number(n)<t.length:_t(t,n),l=Reflect.set(t,n,r,kt(t)?t:s);return t===mt(s)&&(a?gn(r,i)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),l}deleteProperty(t,n){const r=_t(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Xe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!De(n)||!cf.has(n))&&ie(t,"has",n),r}ownKeys(t){return ie(t,"iterate",nt(t)?"length":Gn),Reflect.ownKeys(t)}}class am extends uf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const lm=new hf,cm=new am,um=new hf(!0);const Ea=e=>e,ui=e=>Reflect.getPrototypeOf(e);function hm(e,t,n){return function(...r){const s=this.__v_raw,i=mt(s),a=wr(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?Ea:t?Ta:oe;return!t&&ie(i,"iterate",u?va:Gn),{next(){const{value:g,done:I}=f.next();return I?{value:g,done:I}:{value:l?[d(g[0]),d(g[1])]:d(g),done:I}},[Symbol.iterator](){return this}}}}function hi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fm(e,t){const n={get(s){const i=this.__v_raw,a=mt(i),l=mt(s);e||(gn(s,l)&&ie(a,"get",s),ie(a,"get",l));const{has:u}=ui(a),f=t?Ea:e?Ta:oe;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ie(mt(s),"iterate",Gn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=mt(i),l=mt(s);return e||(gn(s,l)&&ie(a,"has",s),ie(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=mt(l),f=t?Ea:e?Ta:oe;return!e&&ie(u,"iterate",Gn),l.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return ce(n,e?{add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear")}:{add(s){!t&&!be(s)&&!Yn(s)&&(s=mt(s));const i=mt(this);return ui(i).has.call(i,s)||(i.add(s),Xe(i,"add",s,s)),this},set(s,i){!t&&!be(i)&&!Yn(i)&&(i=mt(i));const a=mt(this),{has:l,get:u}=ui(a);let f=l.call(a,s);f||(s=mt(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?gn(i,d)&&Xe(a,"set",s,i):Xe(a,"add",s,i),this},delete(s){const i=mt(this),{has:a,get:l}=ui(i);let u=a.call(i,s);u||(s=mt(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&Xe(i,"delete",s,void 0),f},clear(){const s=mt(this),i=s.size!==0,a=s.clear();return i&&Xe(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hm(s,e,t)}),n}function ll(e,t){const n=fm(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(_t(n,s)&&s in r?n:r,s,i)}const dm={get:ll(!1,!1)},pm={get:ll(!1,!0)},gm={get:ll(!0,!1)};const ff=new WeakMap,df=new WeakMap,pf=new WeakMap,mm=new WeakMap;function _m(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(e){return e.__v_skip||!Object.isExtensible(e)?0:_m(Hg(e))}function lo(e){return Yn(e)?e:cl(e,!1,lm,dm,ff)}function vm(e){return cl(e,!1,um,pm,df)}function gf(e){return cl(e,!0,cm,gm,pf)}function cl(e,t,n,r,s){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=ym(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function mn(e){return Yn(e)?mn(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function be(e){return!!(e&&e.__v_isShallow)}function ul(e){return e?!!e.__v_raw:!1}function mt(e){const t=e&&e.__v_raw;return t?mt(t):e}function hl(e){return!_t(e,"__v_skip")&&Object.isExtensible(e)&&Wh(e,"__v_skip",!0),e}const oe=e=>Ct(e)?lo(e):e,Ta=e=>Ct(e)?gf(e):e;function kt(e){return e?e.__v_isRef===!0:!1}function mf(e){return Em(e,!1)}function Em(e,t){return kt(e)?e:new Tm(e,t)}class Tm{constructor(t,n){this.dep=new al,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:mt(t),this._value=n?t:oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||be(t)||Yn(t);t=r?t:mt(t),gn(t,n)&&(this._rawValue=t,this._value=r?t:oe(t),this.dep.trigger())}}function It(e){return kt(e)?e.value:e}const Im={get:(e,t,n)=>t==="__v_raw"?e:It(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function _f(e){return mn(e)?e:new Proxy(e,Im)}function wm(e){const t=nt(e)?new Array(e.length):{};for(const n in e)t[n]=bm(e,n);return t}class Am{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return nm(mt(this._object),this._key)}}function bm(e,t,n){const r=e[t];return kt(r)?r:new Am(e,t,n)}class Rm{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new al(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return nf(this,!0),!0}get value(){const t=this.dep.track();return of(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sm(e,t,n=!1){let r,s;return at(e)?r=e:(r=e.get,s=e.set),new Rm(r,s,n)}const fi={},Ni=new WeakMap;let Hn;function Cm(e,t=!1,n=Hn){if(n){let r=Ni.get(n);r||Ni.set(n,r=[]),r.push(e)}}function Pm(e,t,n=wt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=z=>s?z:be(z)||s===!1||s===0?Je(z,1):Je(z);let d,g,I,R,D=!1,L=!1;if(kt(e)?(g=()=>e.value,D=be(e)):mn(e)?(g=()=>f(e),D=!0):nt(e)?(L=!0,D=e.some(z=>mn(z)||be(z)),g=()=>e.map(z=>{if(kt(z))return z.value;if(mn(z))return f(z);if(at(z))return u?u(z,2):z()})):at(e)?t?g=u?()=>u(e,2):e:g=()=>{if(I){Dn();try{I()}finally{xn()}}const z=Hn;Hn=d;try{return u?u(e,3,[R]):e(R)}finally{Hn=z}}:g=Fe,t&&s){const z=g,lt=s===!0?1/0:s;g=()=>Je(z(),lt)}const F=Zh(),K=()=>{d.stop(),F&&F.active&&el(F.effects,d)};if(i&&t){const z=t;t=(...lt)=>{z(...lt),K()}}let G=L?new Array(e.length).fill(fi):fi;const Q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const lt=d.run();if(s||D||(L?lt.some((Et,w)=>gn(Et,G[w])):gn(lt,G))){I&&I();const Et=Hn;Hn=d;try{const w=[lt,G===fi?void 0:L&&G[0]===fi?[]:G,R];u?u(t,3,w):t(...w),G=lt}finally{Hn=Et}}}else d.run()};return l&&l(Q),d=new tf(g),d.scheduler=a?()=>a(Q,!1):Q,R=z=>Cm(z,!1,d),I=d.onStop=()=>{const z=Ni.get(d);if(z){if(u)u(z,4);else for(const lt of z)lt();Ni.delete(d)}},t?r?Q(!0):G=d.run():a?a(Q.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function Je(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,kt(e))Je(e.value,t,n);else if(nt(e))for(let r=0;r<e.length;r++)Je(e[r],t,n);else if(jh(e)||wr(e))e.forEach(r=>{Je(r,t,n)});else if(zh(e)){for(const r in e)Je(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Je(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e,t,n,r){try{return r?e(...r):e()}catch(s){co(s,t,n)}}function je(e,t,n,r){if(at(e)){const s=Fs(e,t,n,r);return s&&Hh(s)&&s.catch(i=>{co(i,t,n)}),s}if(nt(e)){const s=[];for(let i=0;i<e.length;i++)s.push(je(e[i],t,n,r));return s}}function co(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||wt;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,u,f)===!1)return}l=l.parent}if(i){Dn(),Fs(i,null,10,[e,u,f]),xn();return}}Vm(e,n,s,r,a)}function Vm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const pe=[];let ke=-1;const Ar=[];let un=null,mr=0;const yf=Promise.resolve();let Oi=null;function vf(e){const t=Oi||yf;return e?t.then(this?e.bind(this):e):t}function Dm(e){let t=ke+1,n=pe.length;for(;t<n;){const r=t+n>>>1,s=pe[r],i=Rs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function fl(e){if(!(e.flags&1)){const t=Rs(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=Rs(n)?pe.push(e):pe.splice(Dm(t),0,e),e.flags|=1,Ef()}}function Ef(){Oi||(Oi=yf.then(If))}function xm(e){nt(e)?Ar.push(...e):un&&e.id===-1?un.splice(mr+1,0,e):e.flags&1||(Ar.push(e),e.flags|=1),Ef()}function Qc(e,t,n=ke+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Tf(e){if(Ar.length){const t=[...new Set(Ar)].sort((n,r)=>Rs(n)-Rs(r));if(Ar.length=0,un){un.push(...t);return}for(un=t,mr=0;mr<un.length;mr++){const n=un[mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}un=null,mr=0}}const Rs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function If(e){try{for(ke=0;ke<pe.length;ke++){const t=pe[ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ke<pe.length;ke++){const t=pe[ke];t&&(t.flags&=-2)}ke=-1,pe.length=0,Tf(),Oi=null,(pe.length||Ar.length)&&If()}}let Yt=null,wf=null;function ki(e){const t=Yt;return Yt=e,wf=e&&e.type.__scopeId||null,t}function as(e,t=Yt,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&su(-1);const i=ki(t);let a;try{a=e(...s)}finally{ki(i),r._d&&su(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e,t){if(Yt===null)return e;const n=po(Yt),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=wt]=t[s];i&&(at(i)&&(i={mounted:i,updated:i}),i.deep&&Je(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function $n(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Dn(),je(u,n,8,[e.el,l,e,t]),xn())}}const Nm=Symbol("_vte"),Om=e=>e.__isTeleport;function dl(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dl(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Us(e,t){return at(e)?ce({name:e.name},t,{setup:e}):e}function Af(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Mi(e,t,n,r,s=!1){if(nt(e)){e.forEach((D,L)=>Mi(D,t&&(nt(t)?t[L]:t),n,r,s));return}if(br(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mi(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?po(r.component):r.el,a=s?null:i,{i:l,r:u}=e,f=t&&t.r,d=l.refs===wt?l.refs={}:l.refs,g=l.setupState,I=mt(g),R=g===wt?()=>!1:D=>_t(I,D);if(f!=null&&f!==u&&(Ft(f)?(d[f]=null,R(f)&&(g[f]=null)):kt(f)&&(f.value=null)),at(u))Fs(u,l,12,[a,d]);else{const D=Ft(u),L=kt(u);if(D||L){const F=()=>{if(e.f){const K=D?R(u)?g[u]:d[u]:u.value;s?nt(K)&&el(K,i):nt(K)?K.includes(i)||K.push(i):D?(d[u]=[i],R(u)&&(g[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else D?(d[u]=a,R(u)&&(g[u]=a)):L&&(u.value=a,e.k&&(d[e.k]=a))};a?(F.id=-1,ye(F,n)):F()}}}oo().requestIdleCallback;oo().cancelIdleCallback;const br=e=>!!e.type.__asyncLoader,bf=e=>e.type.__isKeepAlive;function km(e,t){Rf(e,"a",t)}function Mm(e,t){Rf(e,"da",t)}function Rf(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(uo(t,r,n),n){let s=n.parent;for(;s&&s.parent;)bf(s.parent.vnode)&&Lm(r,t,n,s),s=s.parent}}function Lm(e,t,n,r){const s=uo(t,e,r,!0);Cf(()=>{el(r[t],s)},n)}function uo(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Dn();const l=Bs(n),u=je(t,n,e,a);return l(),xn(),u});return r?s.unshift(i):s.push(i),i}}const rn=e=>(t,n=le)=>{(!Cs||e==="sp")&&uo(e,(...r)=>t(...r),n)},Fm=rn("bm"),Sf=rn("m"),Um=rn("bu"),Bm=rn("u"),$m=rn("bum"),Cf=rn("um"),jm=rn("sp"),Hm=rn("rtg"),qm=rn("rtc");function zm(e,t=le){uo("ec",e,t)}const Km=Symbol.for("v-ndc");function fn(e,t,n,r){let s;const i=n,a=nt(e);if(a||Ft(e)){const l=a&&mn(e);let u=!1;l&&(u=!be(e),e=ao(e)),s=new Array(e.length);for(let f=0,d=e.length;f<d;f++)s[f]=t(u?oe(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Ct(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}function Ti(e,t,n={},r,s){if(Yt.ce||Yt.parent&&br(Yt.parent)&&Yt.parent.ce)return t!=="default"&&(n.name=t),yt(),dn(Lt,null,[Ee("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),yt();const a=i&&Pf(i(n)),l=n.key||a&&a.key,u=dn(Lt,{key:(l&&!De(l)?l:`_${t}`)+""},a||[],a&&e._===1?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),i&&i._c&&(i._d=!0),u}function Pf(e){return e.some(t=>gl(t)?!(t.type===wn||t.type===Lt&&!Pf(t.children)):!0)?e:null}const Ia=e=>e?Yf(e)?po(e):Ia(e.parent):null,gs=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ia(e.parent),$root:e=>Ia(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Df(e),$forceUpdate:e=>e.f||(e.f=()=>{fl(e.update)}),$nextTick:e=>e.n||(e.n=vf.bind(e.proxy)),$watch:e=>g_.bind(e)}),ta=(e,t)=>e!==wt&&!e.__isScriptSetup&&_t(e,t),Wm={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ta(r,t))return a[t]=1,r[t];if(s!==wt&&_t(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&_t(f,t))return a[t]=3,i[t];if(n!==wt&&_t(n,t))return a[t]=4,n[t];wa&&(a[t]=0)}}const d=gs[t];let g,I;if(d)return t==="$attrs"&&ie(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==wt&&_t(n,t))return a[t]=4,n[t];if(I=u.config.globalProperties,_t(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ta(s,t)?(s[t]=n,!0):r!==wt&&_t(r,t)?(r[t]=n,!0):_t(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==wt&&_t(e,a)||ta(t,a)||(l=i[0])&&_t(l,a)||_t(r,a)||_t(gs,a)||_t(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_t(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Yc(e){return nt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wa=!0;function Gm(e){const t=Df(e),n=e.proxy,r=e.ctx;wa=!1,t.beforeCreate&&Xc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:I,beforeUpdate:R,updated:D,activated:L,deactivated:F,beforeDestroy:K,beforeUnmount:G,destroyed:Q,unmounted:z,render:lt,renderTracked:Et,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:E,inheritAttrs:A,components:b,directives:y,filters:ue}=t;if(f&&Qm(f,r,null),a)for(const it in a){const pt=a[it];at(pt)&&(r[it]=pt.bind(n))}if(s){const it=s.call(n,n);Ct(it)&&(e.data=lo(it))}if(wa=!0,i)for(const it in i){const pt=i[it],Re=at(pt)?pt.bind(n,n):at(pt.get)?pt.get.bind(n,n):Fe,On=!at(pt)&&at(pt.set)?pt.set.bind(n):Fe,ze=Jf({get:Re,set:On});Object.defineProperty(r,it,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ut=>ze.value=Ut})}if(l)for(const it in l)Vf(l[it],r,n,it);if(u){const it=at(u)?u.call(n):u;Reflect.ownKeys(it).forEach(pt=>{e_(pt,it[pt])})}d&&Xc(d,e,"c");function Vt(it,pt){nt(pt)?pt.forEach(Re=>it(Re.bind(n))):pt&&it(pt.bind(n))}if(Vt(Fm,g),Vt(Sf,I),Vt(Um,R),Vt(Bm,D),Vt(km,L),Vt(Mm,F),Vt(zm,m),Vt(qm,Et),Vt(Hm,w),Vt($m,G),Vt(Cf,z),Vt(jm,_),nt(E))if(E.length){const it=e.exposed||(e.exposed={});E.forEach(pt=>{Object.defineProperty(it,pt,{get:()=>n[pt],set:Re=>n[pt]=Re})})}else e.exposed||(e.exposed={});lt&&e.render===Fe&&(e.render=lt),A!=null&&(e.inheritAttrs=A),b&&(e.components=b),y&&(e.directives=y),_&&Af(e)}function Qm(e,t,n=Fe){nt(e)&&(e=Aa(e));for(const r in e){const s=e[r];let i;Ct(s)?"default"in s?i=ms(s.from||r,s.default,!0):i=ms(s.from||r):i=ms(s),kt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Xc(e,t,n){je(nt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vf(e,t,n,r){let s=r.includes(".")?zf(n,r):()=>n[r];if(Ft(e)){const i=t[e];at(i)&&Ii(s,i)}else if(at(e))Ii(s,e.bind(n));else if(Ct(e))if(nt(e))e.forEach(i=>Vf(i,t,n,r));else{const i=at(e.handler)?e.handler.bind(n):t[e.handler];at(i)&&Ii(s,i,e)}}function Df(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>Li(u,f,a,!0)),Li(u,t,a)),Ct(t)&&i.set(t,u),u}function Li(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Li(e,i,n,!0),s&&s.forEach(a=>Li(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=Ym[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Ym={data:Jc,props:Zc,emits:Zc,methods:ls,computed:ls,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ls,directives:ls,watch:Jm,provide:Jc,inject:Xm};function Jc(e,t){return t?e?function(){return ce(at(e)?e.call(this,this):e,at(t)?t.call(this,this):t)}:t:e}function Xm(e,t){return ls(Aa(e),Aa(t))}function Aa(e){if(nt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function ls(e,t){return e?ce(Object.create(null),e,t):t}function Zc(e,t){return e?nt(e)&&nt(t)?[...new Set([...e,...t])]:ce(Object.create(null),Yc(e),Yc(t??{})):t}function Jm(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function xf(){return{app:null,config:{isNativeTag:$g,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function t_(e,t){return function(r,s=null){at(r)||(r=ce({},r)),s!=null&&!Ct(s)&&(s=null);const i=xf(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:Zm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:k_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&at(d.install)?(a.add(d),d.install(f,...g)):at(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,I){if(!u){const R=f._ceVNode||Ee(r,s);return R.appContext=i,I===!0?I="svg":I===!1&&(I=void 0),e(R,d,I),u=!0,f._container=d,d.__vue_app__=f,po(R.component)}},onUnmount(d){l.push(d)},unmount(){u&&(je(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=Qn;Qn=f;try{return d()}finally{Qn=g}}};return f}}let Qn=null;function e_(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function ms(e,t,n=!1){const r=le||Yt;if(r||Qn){const s=Qn?Qn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&at(t)?t.call(r&&r.proxy):t}}function n_(){return!!(le||Yt||Qn)}const Nf={},Of=()=>Object.create(Nf),kf=e=>Object.getPrototypeOf(e)===Nf;function r_(e,t,n,r=!1){const s={},i=Of();e.propsDefaults=Object.create(null),Mf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:vm(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function s_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=mt(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let I=d[g];if(ho(e.emitsOptions,I))continue;const R=t[I];if(u)if(_t(i,I))R!==i[I]&&(i[I]=R,f=!0);else{const D=In(I);s[D]=ba(u,l,D,R,e,!1)}else R!==i[I]&&(i[I]=R,f=!0)}}}else{Mf(e,t,s,i)&&(f=!0);let d;for(const g in l)(!t||!_t(t,g)&&((d=nr(g))===g||!_t(t,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=ba(u,l,g,void 0,e,!0)):delete s[g]);if(i!==l)for(const g in i)(!t||!_t(t,g))&&(delete i[g],f=!0)}f&&Xe(e.attrs,"set","")}function Mf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(fs(u))continue;const f=t[u];let d;s&&_t(s,d=In(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:ho(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=mt(n),f=l||wt;for(let d=0;d<i.length;d++){const g=i[d];n[g]=ba(s,u,g,f[g],e,!_t(f,g))}}return a}function ba(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=_t(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&at(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Bs(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===nr(n))&&(r=!0))}return r}const i_=new WeakMap;function Lf(e,t,n=!1){const r=n?i_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!at(e)){const d=g=>{u=!0;const[I,R]=Lf(g,t,!0);ce(a,I),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ct(e)&&r.set(e,Ir),Ir;if(nt(i))for(let d=0;d<i.length;d++){const g=In(i[d]);tu(g)&&(a[g]=wt)}else if(i)for(const d in i){const g=In(d);if(tu(g)){const I=i[d],R=a[g]=nt(I)||at(I)?{type:I}:ce({},I),D=R.type;let L=!1,F=!0;if(nt(D))for(let K=0;K<D.length;++K){const G=D[K],Q=at(G)&&G.name;if(Q==="Boolean"){L=!0;break}else Q==="String"&&(F=!1)}else L=at(D)&&D.name==="Boolean";R[0]=L,R[1]=F,(L||_t(R,"default"))&&l.push(g)}}const f=[a,l];return Ct(e)&&r.set(e,f),f}function tu(e){return e[0]!=="$"&&!fs(e)}const Ff=e=>e[0]==="_"||e==="$stable",pl=e=>nt(e)?e.map(Le):[Le(e)],o_=(e,t,n)=>{if(t._n)return t;const r=as((...s)=>pl(t(...s)),n);return r._c=!1,r},Uf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ff(s))continue;const i=e[s];if(at(i))t[s]=o_(s,i,r);else if(i!=null){const a=pl(i);t[s]=()=>a}}},Bf=(e,t)=>{const n=pl(t);e.slots.default=()=>n},$f=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},a_=(e,t,n)=>{const r=e.slots=Of();if(e.vnode.shapeFlag&32){const s=t._;s?($f(r,t,n),n&&Wh(r,"_",s,!0)):Uf(t,r)}else t&&Bf(e,t)},l_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=wt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:$f(s,t,n):(i=!t.$stable,Uf(t,s)),a=t}else t&&(Bf(e,t),a={default:1});if(i)for(const l in s)!Ff(l)&&a[l]==null&&delete s[l]},ye=I_;function c_(e){return u_(e)}function u_(e,t){const n=oo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:I,setScopeId:R=Fe,insertStaticContent:D}=e,L=(v,T,P,O=null,x=null,k=null,j=void 0,B=null,U=!!T.dynamicChildren)=>{if(v===T)return;v&&!rs(v,T)&&(O=Ke(v),Ut(v,x,k,!0),v=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:M,ref:J,shapeFlag:H}=T;switch(M){case fo:F(v,T,P,O);break;case wn:K(v,T,P,O);break;case na:v==null&&G(T,P,O,j);break;case Lt:b(v,T,P,O,x,k,j,B,U);break;default:H&1?lt(v,T,P,O,x,k,j,B,U):H&6?y(v,T,P,O,x,k,j,B,U):(H&64||H&128)&&M.process(v,T,P,O,x,k,j,B,U,Ne)}J!=null&&x&&Mi(J,v&&v.ref,k,T||v,!T)},F=(v,T,P,O)=>{if(v==null)r(T.el=l(T.children),P,O);else{const x=T.el=v.el;T.children!==v.children&&f(x,T.children)}},K=(v,T,P,O)=>{v==null?r(T.el=u(T.children||""),P,O):T.el=v.el},G=(v,T,P,O)=>{[v.el,v.anchor]=D(v.children,T,P,O,v.el,v.anchor)},Q=({el:v,anchor:T},P,O)=>{let x;for(;v&&v!==T;)x=I(v),r(v,P,O),v=x;r(T,P,O)},z=({el:v,anchor:T})=>{let P;for(;v&&v!==T;)P=I(v),s(v),v=P;s(T)},lt=(v,T,P,O,x,k,j,B,U)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),v==null?Et(T,P,O,x,k,j,B,U):_(v,T,x,k,j,B,U)},Et=(v,T,P,O,x,k,j,B)=>{let U,M;const{props:J,shapeFlag:H,transition:W,dirs:tt}=v;if(U=v.el=a(v.type,k,J&&J.is,J),H&8?d(U,v.children):H&16&&m(v.children,U,null,O,x,ea(v,k),j,B),tt&&$n(v,null,O,"created"),w(U,v,v.scopeId,j,O),J){for(const ot in J)ot!=="value"&&!fs(ot)&&i(U,ot,null,J[ot],k,O);"value"in J&&i(U,"value",null,J.value,k),(M=J.onVnodeBeforeMount)&&Oe(M,O,v)}tt&&$n(v,null,O,"beforeMount");const Z=h_(x,W);Z&&W.beforeEnter(U),r(U,T,P),((M=J&&J.onVnodeMounted)||Z||tt)&&ye(()=>{M&&Oe(M,O,v),Z&&W.enter(U),tt&&$n(v,null,O,"mounted")},x)},w=(v,T,P,O,x)=>{if(P&&R(v,P),O)for(let k=0;k<O.length;k++)R(v,O[k]);if(x){let k=x.subTree;if(T===k||Wf(k.type)&&(k.ssContent===T||k.ssFallback===T)){const j=x.vnode;w(v,j,j.scopeId,j.slotScopeIds,x.parent)}}},m=(v,T,P,O,x,k,j,B,U=0)=>{for(let M=U;M<v.length;M++){const J=v[M]=B?hn(v[M]):Le(v[M]);L(null,J,T,P,O,x,k,j,B)}},_=(v,T,P,O,x,k,j)=>{const B=T.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:J}=T;U|=v.patchFlag&16;const H=v.props||wt,W=T.props||wt;let tt;if(P&&jn(P,!1),(tt=W.onVnodeBeforeUpdate)&&Oe(tt,P,T,v),J&&$n(T,v,P,"beforeUpdate"),P&&jn(P,!0),(H.innerHTML&&W.innerHTML==null||H.textContent&&W.textContent==null)&&d(B,""),M?E(v.dynamicChildren,M,B,P,O,ea(T,x),k):j||pt(v,T,B,null,P,O,ea(T,x),k,!1),U>0){if(U&16)A(B,H,W,P,x);else if(U&2&&H.class!==W.class&&i(B,"class",null,W.class,x),U&4&&i(B,"style",H.style,W.style,x),U&8){const Z=T.dynamicProps;for(let ot=0;ot<Z.length;ot++){const ht=Z[ot],Jt=H[ht],zt=W[ht];(zt!==Jt||ht==="value")&&i(B,ht,Jt,zt,x,P)}}U&1&&v.children!==T.children&&d(B,T.children)}else!j&&M==null&&A(B,H,W,P,x);((tt=W.onVnodeUpdated)||J)&&ye(()=>{tt&&Oe(tt,P,T,v),J&&$n(T,v,P,"updated")},O)},E=(v,T,P,O,x,k,j)=>{for(let B=0;B<T.length;B++){const U=v[B],M=T[B],J=U.el&&(U.type===Lt||!rs(U,M)||U.shapeFlag&70)?g(U.el):P;L(U,M,J,null,O,x,k,j,!0)}},A=(v,T,P,O,x)=>{if(T!==P){if(T!==wt)for(const k in T)!fs(k)&&!(k in P)&&i(v,k,T[k],null,x,O);for(const k in P){if(fs(k))continue;const j=P[k],B=T[k];j!==B&&k!=="value"&&i(v,k,B,j,x,O)}"value"in P&&i(v,"value",T.value,P.value,x)}},b=(v,T,P,O,x,k,j,B,U)=>{const M=T.el=v?v.el:l(""),J=T.anchor=v?v.anchor:l("");let{patchFlag:H,dynamicChildren:W,slotScopeIds:tt}=T;tt&&(B=B?B.concat(tt):tt),v==null?(r(M,P,O),r(J,P,O),m(T.children||[],P,J,x,k,j,B,U)):H>0&&H&64&&W&&v.dynamicChildren?(E(v.dynamicChildren,W,P,x,k,j,B),(T.key!=null||x&&T===x.subTree)&&jf(v,T,!0)):pt(v,T,P,J,x,k,j,B,U)},y=(v,T,P,O,x,k,j,B,U)=>{T.slotScopeIds=B,v==null?T.shapeFlag&512?x.ctx.activate(T,P,O,j,U):ue(T,P,O,x,k,j,U):xe(v,T,U)},ue=(v,T,P,O,x,k,j)=>{const B=v.component=P_(v,O,x);if(bf(v)&&(B.ctx.renderer=Ne),V_(B,!1,j),B.asyncDep){if(x&&x.registerDep(B,Vt,j),!v.el){const U=B.subTree=Ee(wn);K(null,U,T,P)}}else Vt(B,v,T,P,x,k,j)},xe=(v,T,P)=>{const O=T.component=v.component;if(E_(v,T,P))if(O.asyncDep&&!O.asyncResolved){it(O,T,P);return}else O.next=T,O.update();else T.el=v.el,O.vnode=T},Vt=(v,T,P,O,x,k,j)=>{const B=()=>{if(v.isMounted){let{next:H,bu:W,u:tt,parent:Z,vnode:ot}=v;{const Zt=Hf(v);if(Zt){H&&(H.el=ot.el,it(v,H,j)),Zt.asyncDep.then(()=>{v.isUnmounted||B()});return}}let ht=H,Jt;jn(v,!1),H?(H.el=ot.el,it(v,H,j)):H=ot,W&&Ei(W),(Jt=H.props&&H.props.onVnodeBeforeUpdate)&&Oe(Jt,Z,H,ot),jn(v,!0);const zt=nu(v),Ie=v.subTree;v.subTree=zt,L(Ie,zt,g(Ie.el),Ke(Ie),v,x,k),H.el=zt.el,ht===null&&T_(v,zt.el),tt&&ye(tt,x),(Jt=H.props&&H.props.onVnodeUpdated)&&ye(()=>Oe(Jt,Z,H,ot),x)}else{let H;const{el:W,props:tt}=T,{bm:Z,m:ot,parent:ht,root:Jt,type:zt}=v,Ie=br(T);jn(v,!1),Z&&Ei(Z),!Ie&&(H=tt&&tt.onVnodeBeforeMount)&&Oe(H,ht,T),jn(v,!0);{Jt.ce&&Jt.ce._injectChildStyle(zt);const Zt=v.subTree=nu(v);L(null,Zt,P,O,v,x,k),T.el=Zt.el}if(ot&&ye(ot,x),!Ie&&(H=tt&&tt.onVnodeMounted)){const Zt=T;ye(()=>Oe(H,ht,Zt),x)}(T.shapeFlag&256||ht&&br(ht.vnode)&&ht.vnode.shapeFlag&256)&&v.a&&ye(v.a,x),v.isMounted=!0,T=P=O=null}};v.scope.on();const U=v.effect=new tf(B);v.scope.off();const M=v.update=U.run.bind(U),J=v.job=U.runIfDirty.bind(U);J.i=v,J.id=v.uid,U.scheduler=()=>fl(J),jn(v,!0),M()},it=(v,T,P)=>{T.component=v;const O=v.vnode.props;v.vnode=T,v.next=null,s_(v,T.props,O,P),l_(v,T.children,P),Dn(),Qc(v),xn()},pt=(v,T,P,O,x,k,j,B,U=!1)=>{const M=v&&v.children,J=v?v.shapeFlag:0,H=T.children,{patchFlag:W,shapeFlag:tt}=T;if(W>0){if(W&128){On(M,H,P,O,x,k,j,B,U);return}else if(W&256){Re(M,H,P,O,x,k,j,B,U);return}}tt&8?(J&16&&Mn(M,x,k),H!==M&&d(P,H)):J&16?tt&16?On(M,H,P,O,x,k,j,B,U):Mn(M,x,k,!0):(J&8&&d(P,""),tt&16&&m(H,P,O,x,k,j,B,U))},Re=(v,T,P,O,x,k,j,B,U)=>{v=v||Ir,T=T||Ir;const M=v.length,J=T.length,H=Math.min(M,J);let W;for(W=0;W<H;W++){const tt=T[W]=U?hn(T[W]):Le(T[W]);L(v[W],tt,P,null,x,k,j,B,U)}M>J?Mn(v,x,k,!0,!1,H):m(T,P,O,x,k,j,B,U,H)},On=(v,T,P,O,x,k,j,B,U)=>{let M=0;const J=T.length;let H=v.length-1,W=J-1;for(;M<=H&&M<=W;){const tt=v[M],Z=T[M]=U?hn(T[M]):Le(T[M]);if(rs(tt,Z))L(tt,Z,P,null,x,k,j,B,U);else break;M++}for(;M<=H&&M<=W;){const tt=v[H],Z=T[W]=U?hn(T[W]):Le(T[W]);if(rs(tt,Z))L(tt,Z,P,null,x,k,j,B,U);else break;H--,W--}if(M>H){if(M<=W){const tt=W+1,Z=tt<J?T[tt].el:O;for(;M<=W;)L(null,T[M]=U?hn(T[M]):Le(T[M]),P,Z,x,k,j,B,U),M++}}else if(M>W)for(;M<=H;)Ut(v[M],x,k,!0),M++;else{const tt=M,Z=M,ot=new Map;for(M=Z;M<=W;M++){const Kt=T[M]=U?hn(T[M]):Le(T[M]);Kt.key!=null&&ot.set(Kt.key,M)}let ht,Jt=0;const zt=W-Z+1;let Ie=!1,Zt=0;const sn=new Array(zt);for(M=0;M<zt;M++)sn[M]=0;for(M=tt;M<=H;M++){const Kt=v[M];if(Jt>=zt){Ut(Kt,x,k,!0);continue}let we;if(Kt.key!=null)we=ot.get(Kt.key);else for(ht=Z;ht<=W;ht++)if(sn[ht-Z]===0&&rs(Kt,T[ht])){we=ht;break}we===void 0?Ut(Kt,x,k,!0):(sn[we-Z]=M+1,we>=Zt?Zt=we:Ie=!0,L(Kt,T[we],P,null,x,k,j,B,U),Jt++)}const Hr=Ie?f_(sn):Ir;for(ht=Hr.length-1,M=zt-1;M>=0;M--){const Kt=Z+M,we=T[Kt],Gs=Kt+1<J?T[Kt+1].el:O;sn[M]===0?L(null,we,P,Gs,x,k,j,B,U):Ie&&(ht<0||M!==Hr[ht]?ze(we,P,Gs,2):ht--)}}},ze=(v,T,P,O,x=null)=>{const{el:k,type:j,transition:B,children:U,shapeFlag:M}=v;if(M&6){ze(v.component.subTree,T,P,O);return}if(M&128){v.suspense.move(T,P,O);return}if(M&64){j.move(v,T,P,Ne);return}if(j===Lt){r(k,T,P);for(let H=0;H<U.length;H++)ze(U[H],T,P,O);r(v.anchor,T,P);return}if(j===na){Q(v,T,P);return}if(O!==2&&M&1&&B)if(O===0)B.beforeEnter(k),r(k,T,P),ye(()=>B.enter(k),x);else{const{leave:H,delayLeave:W,afterLeave:tt}=B,Z=()=>r(k,T,P),ot=()=>{H(k,()=>{Z(),tt&&tt()})};W?W(k,Z,ot):ot()}else r(k,T,P)},Ut=(v,T,P,O=!1,x=!1)=>{const{type:k,props:j,ref:B,children:U,dynamicChildren:M,shapeFlag:J,patchFlag:H,dirs:W,cacheIndex:tt}=v;if(H===-2&&(x=!1),B!=null&&Mi(B,null,P,v,!0),tt!=null&&(T.renderCache[tt]=void 0),J&256){T.ctx.deactivate(v);return}const Z=J&1&&W,ot=!br(v);let ht;if(ot&&(ht=j&&j.onVnodeBeforeUnmount)&&Oe(ht,T,v),J&6)kn(v.component,P,O);else{if(J&128){v.suspense.unmount(P,O);return}Z&&$n(v,null,T,"beforeUnmount"),J&64?v.type.remove(v,T,P,Ne,O):M&&!M.hasOnce&&(k!==Lt||H>0&&H&64)?Mn(M,T,P,!1,!0):(k===Lt&&H&384||!x&&J&16)&&Mn(U,T,P),O&&Bt(v)}(ot&&(ht=j&&j.onVnodeUnmounted)||Z)&&ye(()=>{ht&&Oe(ht,T,v),Z&&$n(v,null,T,"unmounted")},P)},Bt=v=>{const{type:T,el:P,anchor:O,transition:x}=v;if(T===Lt){No(P,O);return}if(T===na){z(v);return}const k=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:j,delayLeave:B}=x,U=()=>j(P,k);B?B(v.el,k,U):U()}else k()},No=(v,T)=>{let P;for(;v!==T;)P=I(v),s(v),v=P;s(T)},kn=(v,T,P)=>{const{bum:O,scope:x,job:k,subTree:j,um:B,m:U,a:M}=v;eu(U),eu(M),O&&Ei(O),x.stop(),k&&(k.flags|=8,Ut(j,v,T,P)),B&&ye(B,T),ye(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Mn=(v,T,P,O=!1,x=!1,k=0)=>{for(let j=k;j<v.length;j++)Ut(v[j],T,P,O,x)},Ke=v=>{if(v.shapeFlag&6)return Ke(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=I(v.anchor||v.el),P=T&&T[Nm];return P?I(P):T};let $r=!1;const Ws=(v,T,P)=>{v==null?T._vnode&&Ut(T._vnode,null,null,!0):L(T._vnode||null,v,T,null,null,null,P),T._vnode=v,$r||($r=!0,Qc(),Tf(),$r=!1)},Ne={p:L,um:Ut,m:ze,r:Bt,mt:ue,mc:m,pc:pt,pbc:E,n:Ke,o:e};return{render:Ws,hydrate:void 0,createApp:t_(Ws)}}function ea({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function h_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function jf(e,t,n=!1){const r=e.children,s=t.children;if(nt(r)&&nt(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=hn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&jf(a,l)),l.type===fo&&(l.el=a.el)}}function f_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Hf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hf(t)}function eu(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const d_=Symbol.for("v-scx"),p_=()=>ms(d_);function Ii(e,t,n){return qf(e,t,n)}function qf(e,t,n=wt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ce({},n),u=t&&r||!t&&i!=="post";let f;if(Cs){if(i==="sync"){const R=p_();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=Fe,R.resume=Fe,R.pause=Fe,R}}const d=le;l.call=(R,D,L)=>je(R,d,D,L);let g=!1;i==="post"?l.scheduler=R=>{ye(R,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,D)=>{D?R():fl(R)}),l.augmentJob=R=>{t&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const I=Pm(e,t,l);return Cs&&(f?f.push(I):u&&I()),I}function g_(e,t,n){const r=this.proxy,s=Ft(e)?e.includes(".")?zf(r,e):()=>r[e]:e.bind(r,r);let i;at(t)?i=t:(i=t.handler,n=t);const a=Bs(this),l=qf(s,i.bind(r),n);return a(),l}function zf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const m_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${In(t)}Modifiers`]||e[`${nr(t)}Modifiers`];function __(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||wt;let s=n;const i=t.startsWith("update:"),a=i&&m_(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ft(d)?d.trim():d)),a.number&&(s=n.map(_a)));let l,u=r[l=Qo(t)]||r[l=Qo(In(t))];!u&&i&&(u=r[l=Qo(nr(t))]),u&&je(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,je(f,e,6,s)}}function Kf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!at(e)){const u=f=>{const d=Kf(f,t,!0);d&&(l=!0,ce(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(Ct(e)&&r.set(e,null),null):(nt(i)?i.forEach(u=>a[u]=null):ce(a,i),Ct(e)&&r.set(e,a),a)}function ho(e,t){return!e||!so(t)?!1:(t=t.slice(2).replace(/Once$/,""),_t(e,t[0].toLowerCase()+t.slice(1))||_t(e,nr(t))||_t(e,t))}function nu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:I,setupState:R,ctx:D,inheritAttrs:L}=e,F=ki(e);let K,G;try{if(n.shapeFlag&4){const z=s||r,lt=z;K=Le(f.call(lt,z,d,g,R,I,D)),G=l}else{const z=t;K=Le(z.length>1?z(g,{attrs:l,slots:a,emit:u}):z(g,null)),G=t.props?l:y_(l)}}catch(z){_s.length=0,co(z,e,1),K=Ee(wn)}let Q=K;if(G&&L!==!1){const z=Object.keys(G),{shapeFlag:lt}=Q;z.length&&lt&7&&(i&&z.some(tl)&&(G=v_(G,i)),Q=Cr(Q,G,!1,!0))}return n.dirs&&(Q=Cr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&dl(Q,n.transition),K=Q,ki(F),K}const y_=e=>{let t;for(const n in e)(n==="class"||n==="style"||so(n))&&((t||(t={}))[n]=e[n]);return t},v_=(e,t)=>{const n={};for(const r in e)(!tl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function E_(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?ru(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const I=d[g];if(a[I]!==r[I]&&!ho(f,I))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ru(r,a,f):!0:!!a;return!1}function ru(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ho(n,i))return!0}return!1}function T_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Wf=e=>e.__isSuspense;function I_(e,t){t&&t.pendingBranch?nt(e)?t.effects.push(...e):t.effects.push(e):xm(e)}const Lt=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),_s=[];let ve=null;function yt(e=!1){_s.push(ve=e?null:[])}function w_(){_s.pop(),ve=_s[_s.length-1]||null}let Ss=1;function su(e,t=!1){Ss+=e,e<0&&ve&&t&&(ve.hasOnce=!0)}function Gf(e){return e.dynamicChildren=Ss>0?ve||Ir:null,w_(),Ss>0&&ve&&ve.push(e),e}function Nt(e,t,n,r,s,i){return Gf(re(e,t,n,r,s,i,!0))}function dn(e,t,n,r,s){return Gf(Ee(e,t,n,r,s,!0))}function gl(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const Qf=({key:e})=>e??null,wi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ft(e)||kt(e)||at(e)?{i:Yt,r:e,k:t,f:!!n}:e:null);function re(e,t=null,n=null,r=0,s=null,i=e===Lt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qf(t),ref:t&&wi(t),scopeId:wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Yt};return l?(ml(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Ft(n)?8:16),Ss>0&&!a&&ve&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&ve.push(u),u}const Ee=A_;function A_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Km)&&(e=wn),gl(e)){const l=Cr(e,t,!0);return n&&ml(l,n),Ss>0&&!i&&ve&&(l.shapeFlag&6?ve[ve.indexOf(e)]=l:ve.push(l)),l.patchFlag=-2,l}if(O_(e)&&(e=e.__vccOpts),t){t=b_(t);let{class:l,style:u}=t;l&&!Ft(l)&&(t.class=rl(l)),Ct(u)&&(ul(u)&&!nt(u)&&(u=ce({},u)),t.style=Mr(u))}const a=Ft(e)?1:Wf(e)?128:Om(e)?64:Ct(e)?4:at(e)?2:0;return re(e,t,n,r,s,a,i,!0)}function b_(e){return e?ul(e)||kf(e)?ce({},e):e:null}function Cr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,f=t?R_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Qf(f),ref:t&&t.ref?n&&i?nt(i)?i.concat(wi(t)):[i,wi(t)]:wi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cr(e.ssContent),ssFallback:e.ssFallback&&Cr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&dl(d,u.clone(d)),d}function _r(e=" ",t=0){return Ee(fo,null,e,t)}function Ra(e="",t=!1){return t?(yt(),dn(wn,null,e)):Ee(wn,null,e)}function Le(e){return e==null||typeof e=="boolean"?Ee(wn):nt(e)?Ee(Lt,null,e.slice()):gl(e)?hn(e):Ee(fo,null,String(e))}function hn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cr(e)}function ml(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(nt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ml(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!kf(t)?t._ctx=Yt:s===3&&Yt&&(Yt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else at(t)?(t={default:t,_ctx:Yt},n=32):(t=String(t),r&64?(n=16,t=[_r(t)]):n=8);e.children=t,e.shapeFlag|=n}function R_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=rl([t.class,r.class]));else if(s==="style")t.style=Mr([t.style,r.style]);else if(so(s)){const i=t[s],a=r[s];a&&i!==a&&!(nt(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Oe(e,t,n,r=null){je(e,t,7,[n,r])}const S_=xf();let C_=0;function P_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||S_,i={uid:C_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lf(r,s),emitsOptions:Kf(r,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:r.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=__.bind(null,i),e.ce&&e.ce(i),i}let le=null,Fi,Sa;{const e=oo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Fi=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Sa=t("__VUE_SSR_SETTERS__",n=>Cs=n)}const Bs=e=>{const t=le;return Fi(e),e.scope.on(),()=>{e.scope.off(),Fi(t)}},iu=()=>{le&&le.scope.off(),Fi(null)};function Yf(e){return e.vnode.shapeFlag&4}let Cs=!1;function V_(e,t=!1,n=!1){t&&Sa(t);const{props:r,children:s}=e.vnode,i=Yf(e);r_(e,r,i,t),a_(e,s,n);const a=i?D_(e,t):void 0;return t&&Sa(!1),a}function D_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wm);const{setup:r}=n;if(r){Dn();const s=e.setupContext=r.length>1?N_(e):null,i=Bs(e),a=Fs(r,e,0,[e.props,s]),l=Hh(a);if(xn(),i(),(l||e.sp)&&!br(e)&&Af(e),l){if(a.then(iu,iu),t)return a.then(u=>{ou(e,u)}).catch(u=>{co(u,e,0)});e.asyncDep=a}else ou(e,a)}else Xf(e)}function ou(e,t,n){at(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=_f(t)),Xf(e)}function Xf(e,t,n){const r=e.type;e.render||(e.render=r.render||Fe);{const s=Bs(e);Dn();try{Gm(e)}finally{xn(),s()}}}const x_={get(e,t){return ie(e,"get",""),e[t]}};function N_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,x_),slots:e.slots,emit:e.emit,expose:t}}function po(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_f(hl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}})):e.proxy}function O_(e){return at(e)&&"__vccOpts"in e}const Jf=(e,t)=>Sm(e,t,Cs),k_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ca;const au=typeof window<"u"&&window.trustedTypes;if(au)try{Ca=au.createPolicy("vue",{createHTML:e=>e})}catch{}const Zf=Ca?e=>Ca.createHTML(e):e=>e,M_="http://www.w3.org/2000/svg",L_="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,lu=Ye&&Ye.createElement("template"),F_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Ye.createElementNS(M_,e):t==="mathml"?Ye.createElementNS(L_,e):n?Ye.createElement(e,{is:n}):Ye.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ye.createTextNode(e),createComment:e=>Ye.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ye.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{lu.innerHTML=Zf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=lu.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},U_=Symbol("_vtc");function B_(e,t,n){const r=e[U_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const cu=Symbol("_vod"),$_=Symbol("_vsh"),j_=Symbol(""),H_=/(^|;)\s*display\s*:/;function q_(e,t,n){const r=e.style,s=Ft(n);let i=!1;if(n&&!s){if(t)if(Ft(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ai(r,l,"")}else for(const a in t)n[a]==null&&Ai(r,a,"");for(const a in n)a==="display"&&(i=!0),Ai(r,a,n[a])}else if(s){if(t!==n){const a=r[j_];a&&(n+=";"+a),r.cssText=n,i=H_.test(n)}}else t&&e.removeAttribute("style");cu in e&&(e[cu]=i?r.display:"",e[$_]&&(r.display="none"))}const uu=/\s*!important$/;function Ai(e,t,n){if(nt(n))n.forEach(r=>Ai(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=z_(e,t);uu.test(n)?e.setProperty(nr(r),n.replace(uu,""),"important"):e[r]=n}}const hu=["Webkit","Moz","ms"],ra={};function z_(e,t){const n=ra[t];if(n)return n;let r=In(t);if(r!=="filter"&&r in e)return ra[t]=r;r=Kh(r);for(let s=0;s<hu.length;s++){const i=hu[s]+r;if(i in e)return ra[t]=i}return t}const fu="http://www.w3.org/1999/xlink";function du(e,t,n,r,s,i=Xg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fu,t.slice(6,t.length)):e.setAttributeNS(fu,t,n):n==null||i&&!Gh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":De(n)?String(n):n)}function pu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zf(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Gh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function zn(e,t,n,r){e.addEventListener(t,n,r)}function K_(e,t,n,r){e.removeEventListener(t,n,r)}const gu=Symbol("_vei");function W_(e,t,n,r,s=null){const i=e[gu]||(e[gu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=G_(t);if(r){const f=i[t]=X_(r,s);zn(e,l,f,u)}else a&&(K_(e,l,a,u),i[t]=void 0)}}const mu=/(?:Once|Passive|Capture)$/;function G_(e){let t;if(mu.test(e)){t={};let r;for(;r=e.match(mu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nr(e.slice(2)),t]}let sa=0;const Q_=Promise.resolve(),Y_=()=>sa||(Q_.then(()=>sa=0),sa=Date.now());function X_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(J_(r,n.value),t,5,[r])};return n.value=e,n.attached=Y_(),n}function J_(e,t){if(nt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const _u=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Z_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?B_(e,r,a):t==="style"?q_(e,n,r):so(t)?tl(t)||W_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ty(e,t,r,a))?(pu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&du(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ft(r))?pu(e,In(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),du(e,t,r,a))};function ty(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&_u(t)&&at(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _u(t)&&Ft(n)?!1:t in e}const Ui=e=>{const t=e.props["onUpdate:modelValue"]||!1;return nt(t)?n=>Ei(t,n):t};function ey(e){e.target.composing=!0}function yu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rr=Symbol("_assign"),ny={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Rr]=Ui(s);const i=r||s.props&&s.props.type==="number";zn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=_a(l)),e[Rr](l)}),n&&zn(e,"change",()=>{e.value=e.value.trim()}),t||(zn(e,"compositionstart",ey),zn(e,"compositionend",yu),zn(e,"change",yu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[Rr]=Ui(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?_a(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===u)||(e.value=u))}},ss={created(e,{value:t},n){e.checked=Di(t,n.props.value),e[Rr]=Ui(n),zn(e,"change",()=>{e[Rr](ry(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Rr]=Ui(r),t!==n&&(e.checked=Di(t,r.props.value))}};function ry(e){return"_value"in e?e._value:e.value}const sy=ce({patchProp:Z_},F_);let vu;function iy(){return vu||(vu=c_(sy))}const oy=(...e)=>{const t=iy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ly(r);if(!s)return;const i=t._component;!at(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,ay(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function ay(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ly(e){return Ft(e)?document.querySelector(e):e}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let td;const go=e=>td=e,ed=Symbol();function Pa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ys;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ys||(ys={}));function cy(){const e=Jh(!0),t=e.run(()=>mf({}));let n=[],r=[];const s=hl({install(i){go(s),s._a=i,i.provide(ed,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const nd=()=>{};function Eu(e,t,n,r=nd){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Zh()&&Zg(s),s}function pr(e,...t){e.slice().forEach(n=>{n(...t)})}const uy=e=>e(),Tu=Symbol(),ia=Symbol();function Va(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Pa(s)&&Pa(r)&&e.hasOwnProperty(n)&&!kt(r)&&!mn(r)?e[n]=Va(s,r):e[n]=r}return e}const hy=Symbol();function fy(e){return!Pa(e)||!Object.prototype.hasOwnProperty.call(e,hy)}const{assign:cn}=Object;function dy(e){return!!(kt(e)&&e.effect)}function py(e,t,n,r){const{state:s,actions:i,getters:a}=t,l=n.state.value[e];let u;function f(){l||(n.state.value[e]=s?s():{});const d=wm(n.state.value[e]);return cn(d,i,Object.keys(a||{}).reduce((g,I)=>(g[I]=hl(Jf(()=>{go(n);const R=n._s.get(e);return a[I].call(R,R)})),g),{}))}return u=rd(e,f,t,n,r,!0),u}function rd(e,t,n={},r,s,i){let a;const l=cn({actions:{}},n),u={deep:!0};let f,d,g=[],I=[],R;const D=r.state.value[e];!i&&!D&&(r.state.value[e]={}),mf({});let L;function F(m){let _;f=d=!1,typeof m=="function"?(m(r.state.value[e]),_={type:ys.patchFunction,storeId:e,events:R}):(Va(r.state.value[e],m),_={type:ys.patchObject,payload:m,storeId:e,events:R});const E=L=Symbol();vf().then(()=>{L===E&&(f=!0)}),d=!0,pr(g,_,r.state.value[e])}const K=i?function(){const{state:_}=n,E=_?_():{};this.$patch(A=>{cn(A,E)})}:nd;function G(){a.stop(),g=[],I=[],r._s.delete(e)}const Q=(m,_="")=>{if(Tu in m)return m[ia]=_,m;const E=function(){go(r);const A=Array.from(arguments),b=[],y=[];function ue(it){b.push(it)}function xe(it){y.push(it)}pr(I,{args:A,name:E[ia],store:lt,after:ue,onError:xe});let Vt;try{Vt=m.apply(this&&this.$id===e?this:lt,A)}catch(it){throw pr(y,it),it}return Vt instanceof Promise?Vt.then(it=>(pr(b,it),it)).catch(it=>(pr(y,it),Promise.reject(it))):(pr(b,Vt),Vt)};return E[Tu]=!0,E[ia]=_,E},z={_p:r,$id:e,$onAction:Eu.bind(null,I),$patch:F,$reset:K,$subscribe(m,_={}){const E=Eu(g,m,_.detached,()=>A()),A=a.run(()=>Ii(()=>r.state.value[e],b=>{(_.flush==="sync"?d:f)&&m({storeId:e,type:ys.direct,events:R},b)},cn({},u,_)));return E},$dispose:G},lt=lo(z);r._s.set(e,lt);const w=(r._a&&r._a.runWithContext||uy)(()=>r._e.run(()=>(a=Jh()).run(()=>t({action:Q}))));for(const m in w){const _=w[m];if(kt(_)&&!dy(_)||mn(_))i||(D&&fy(_)&&(kt(_)?_.value=D[m]:Va(_,D[m])),r.state.value[e][m]=_);else if(typeof _=="function"){const E=Q(_,m);w[m]=E,l.actions[m]=_}}return cn(lt,w),cn(mt(lt),w),Object.defineProperty(lt,"$state",{get:()=>r.state.value[e],set:m=>{F(_=>{cn(_,m)})}}),r._p.forEach(m=>{cn(lt,a.run(()=>m({store:lt,app:r._a,pinia:r,options:l})))}),D&&i&&n.hydrate&&n.hydrate(lt.$state,D),f=!0,d=!0,lt}/*! #__NO_SIDE_EFFECTS__ */function gy(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(a,l){const u=n_();return a=a||(u?ms(ed,null):null),a&&go(a),a=td,a._s.has(e)||(s?rd(e,t,r,a):py(e,r,a)),a._s.get(e)}return i.$id=e,i}const my=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,_y=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,yy=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function vy(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Ey(e);return}return t}function Ey(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Ty(e,t={}){if(typeof e!="string")return e;if(e[0]==='"'&&e[e.length-1]==='"'&&e.indexOf("\\")===-1)return e.slice(1,-1);const n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!yy.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(my.test(e)||_y.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,vy)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function Iy(e,t){if(e==null)return;let n=e;for(let r=0;r<t.length;r++){if(n==null||n[t[r]]==null)return;n=n[t[r]]}return n}function _l(e,t,n){if(n.length===0)return t;const r=n[0];return n.length>1&&(t=_l(typeof e!="object"||e===null||!Object.prototype.hasOwnProperty.call(e,r)?Number.isInteger(Number(n[1]))?[]:{}:e[r],t,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(e)?e.slice()[r]:Object.assign({},e,{[r]:t})}function sd(e,t){if(e==null||t.length===0)return e;if(t.length===1){if(e==null)return e;if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(t[0],1);const n={};for(const r in e)n[r]=e[r];return delete n[t[0]],n}if(e[t[0]]==null){if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const n={};for(const r in e)n[r]=e[r];return n}return _l(e,sd(e[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function id(e,t){return t.map(n=>n.split(".")).map(n=>[n,Iy(e,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>_l(n,r[1],r[0]),{})}function od(e,t){return t.map(n=>n.split(".")).reduce((n,r)=>sd(n,r),e)}function Iu(e,{storage:t,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:l,afterHydrate:u},f,d=!0){try{d&&(l==null||l(f));const g=t.getItem(r);if(g){const I=n.deserialize(g),R=i?id(I,i):I,D=a?od(R,a):R;e.$patch(D)}d&&(u==null||u(f))}catch(g){s&&console.error("[pinia-plugin-persistedstate]",g)}}function wu(e,{storage:t,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const l=i?id(e,i):e,u=a?od(l,a):l,f=n.serialize(u);t.setItem(r,f)}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function wy(e,t,n){const{pinia:r,store:s,options:{persist:i=n}}=e;if(!i)return;if(!(s.$id in r.state.value)){const u=r._s.get(s.$id.replace("__hot:",""));u&&Promise.resolve().then(()=>u.$persist());return}const l=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(t);s.$hydrate=({runHooks:u=!0}={})=>{l.forEach(f=>{Iu(s,f,e,u)})},s.$persist=()=>{l.forEach(u=>{wu(s.$state,u)})},l.forEach(u=>{Iu(s,u,e),s.$subscribe((f,d)=>wu(d,u),{detached:!0})})}function Ay(e={}){return function(t){wy(t,n=>({key:(e.key?e.key:r=>r)(n.key??t.store.$id),debug:n.debug??e.debug??!1,serializer:n.serializer??e.serializer??{serialize:r=>JSON.stringify(r),deserialize:r=>Ty(r)},storage:n.storage??e.storage??window.localStorage,beforeHydrate:n.beforeHydrate,afterHydrate:n.afterHydrate,pick:n.pick,omit:n.omit}),e.auto??!1)}}var by=Ay();const rr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ry={},Sy={class:"carafe"};function Cy(e,t){return yt(),Nt("div",Sy,[Ti(e.$slots,"top",{},void 0,!0),Ti(e.$slots,"mid",{},void 0,!0),Ti(e.$slots,"bottom",{},void 0,!0)])}const Py=rr(Ry,[["render",Cy],["__scopeId","data-v-43d2bfc5"]]),Vy={},Dy={class:"mug"};function xy(e,t){return yt(),Nt("div",Dy,[Ti(e.$slots,"default")])}const Ny=rr(Vy,[["render",xy]]),Au=["Hot","Cold"];/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=()=>{};var bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ky=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let I=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(I=64)),r.push(n[d],n[g],n[I],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ad(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ky(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new My;const I=i<<2|l>>4;if(r.push(I),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const D=f<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ly=function(e){const t=ad(e);return ld.encodeByteArray(t,!0)},Bi=function(e){return Ly(e).replace(/\./g,"")},Fy=function(e){try{return ld.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=()=>Uy().__FIREBASE_DEFAULTS__,$y=()=>{if(typeof process>"u"||typeof bu>"u")return;const e=bu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fy(e[1]);return t&&JSON.parse(t)},yl=()=>{try{return Oy()||By()||$y()||jy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hy=e=>{var t,n;return(n=(t=yl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qy=e=>{const t=Hy(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},cd=()=>{var e;return(e=yl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Bi(JSON.stringify(n)),Bi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){var e;const t=(e=yl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yy(){return!Gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Xy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="FirebaseError";class Nn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jy,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Zy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Nn(s,l,r)}}function Zy(e,t){return e.replace(tv,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const tv=/\{\$([^}]+)}/g;function Ps(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Ru(i)&&Ru(a)){if(!Ps(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ru(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=1e3,nv=2,rv=4*60*60*1e3,sv=.5;function Su(e,t=ev,n=nv){const r=t*Math.pow(n,e),s=Math.round(sv*r*(Math.random()-.5)*2);return Math.min(rv,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){return e&&e._delegate?e._delegate:e}let $i=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(av(t))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qn){return this.instances.has(t)}getOptions(t=qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ov(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qn){return this.component?this.component.multipleInstances?t:qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ov(e){return e===qn?void 0:e}function av(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new iv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Rt||(Rt={}));const cv={debug:Rt.DEBUG,verbose:Rt.VERBOSE,info:Rt.INFO,warn:Rt.WARN,error:Rt.ERROR,silent:Rt.SILENT},uv=Rt.INFO,hv={[Rt.DEBUG]:"log",[Rt.VERBOSE]:"log",[Rt.INFO]:"info",[Rt.WARN]:"warn",[Rt.ERROR]:"error"},fv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=hv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let dv=class{constructor(t){this.name=t,this._logLevel=uv,this._logHandler=fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Rt.DEBUG,...t),this._logHandler(this,Rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Rt.VERBOSE,...t),this._logHandler(this,Rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Rt.INFO,...t),this._logHandler(this,Rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Rt.WARN,...t),this._logHandler(this,Rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Rt.ERROR,...t),this._logHandler(this,Rt.ERROR,...t)}};const pv=(e,t)=>t.some(n=>e instanceof n);let Cu,Pu;function gv(){return Cu||(Cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mv(){return Pu||(Pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,Da=new WeakMap,dd=new WeakMap,oa=new WeakMap,vl=new WeakMap;function _v(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(_n(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&fd.set(n,e)}).catch(()=>{}),vl.set(t,e),t}function yv(e){if(Da.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Da.set(e,t)}let xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Da.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vv(e){xa=e(xa)}function Ev(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(aa(this),t,...n);return dd.set(r,t.sort?t.sort():[t]),_n(r)}:mv().includes(e)?function(...t){return e.apply(aa(this),t),_n(fd.get(this))}:function(...t){return _n(e.apply(aa(this),t))}}function Tv(e){return typeof e=="function"?Ev(e):(e instanceof IDBTransaction&&yv(e),pv(e,gv())?new Proxy(e,xa):e)}function _n(e){if(e instanceof IDBRequest)return _v(e);if(oa.has(e))return oa.get(e);const t=Tv(e);return t!==e&&(oa.set(e,t),vl.set(t,e)),t}const aa=e=>vl.get(e);function pd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=_n(a);return r&&a.addEventListener("upgradeneeded",u=>{r(_n(a.result),u.oldVersion,u.newVersion,_n(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Iv=["get","getKey","getAll","getAllKeys","count"],wv=["put","add","delete","clear"],la=new Map;function Vu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(la.get(t))return la.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=wv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Iv.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return la.set(t,i),i}vv(e=>({...e,get:(t,n,r)=>Vu(t,n)||e.get(t,n,r),has:(t,n)=>!!Vu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Na="@firebase/app",Du="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new dv("@firebase/app"),Rv="@firebase/app-compat",Sv="@firebase/analytics-compat",Cv="@firebase/analytics",Pv="@firebase/app-check-compat",Vv="@firebase/app-check",Dv="@firebase/auth",xv="@firebase/auth-compat",Nv="@firebase/database",Ov="@firebase/data-connect",kv="@firebase/database-compat",Mv="@firebase/functions",Lv="@firebase/functions-compat",Fv="@firebase/installations",Uv="@firebase/installations-compat",Bv="@firebase/messaging",$v="@firebase/messaging-compat",jv="@firebase/performance",Hv="@firebase/performance-compat",qv="@firebase/remote-config",zv="@firebase/remote-config-compat",Kv="@firebase/storage",Wv="@firebase/storage-compat",Gv="@firebase/firestore",Qv="@firebase/vertexai",Yv="@firebase/firestore-compat",Xv="firebase",Jv="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="[DEFAULT]",Zv={[Na]:"fire-core",[Rv]:"fire-core-compat",[Cv]:"fire-analytics",[Sv]:"fire-analytics-compat",[Vv]:"fire-app-check",[Pv]:"fire-app-check-compat",[Dv]:"fire-auth",[xv]:"fire-auth-compat",[Nv]:"fire-rtdb",[Ov]:"fire-data-connect",[kv]:"fire-rtdb-compat",[Mv]:"fire-fn",[Lv]:"fire-fn-compat",[Fv]:"fire-iid",[Uv]:"fire-iid-compat",[Bv]:"fire-fcm",[$v]:"fire-fcm-compat",[jv]:"fire-perf",[Hv]:"fire-perf-compat",[qv]:"fire-rc",[zv]:"fire-rc-compat",[Kv]:"fire-gcs",[Wv]:"fire-gcs-compat",[Gv]:"fire-fst",[Yv]:"fire-fst-compat",[Qv]:"fire-vertex","fire-js":"fire-js",[Xv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map,tE=new Map,ka=new Map;function xu(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(ka.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;ka.set(t,e);for(const n of ji.values())xu(n,e);for(const n of tE.values())xu(n,e);return!0}function $s(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function eE(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new mo("app","Firebase",nE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=Jv;function gd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oa,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(n||(n=cd()),!n)throw yn.create("no-options");const i=ji.get(s);if(i){if(Ps(n,i.options)&&Ps(r,i.config))return i;throw yn.create("duplicate-app",{appName:s})}const a=new lv(s);for(const u of ka.values())a.addComponent(u);const l=new rE(n,r,a);return ji.set(s,l),l}function md(e=Oa){const t=ji.get(e);if(!t&&e===Oa&&cd())return gd();if(!t)throw yn.create("no-app",{appName:e});return t}function Ue(e,t,n){var r;let s=(r=Zv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}An(new $i(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",oE=1,Vs="firebase-heartbeat-store";let ca=null;function _d(){return ca||(ca=pd(iE,oE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw yn.create("idb-open",{originalErrorMessage:e.message})})),ca}async function aE(e){try{const n=(await _d()).transaction(Vs),r=await n.objectStore(Vs).get(yd(e));return await n.done,r}catch(t){if(t instanceof Nn)tn.warn(t.message);else{const n=yn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tn.warn(n.message)}}}async function Nu(e,t){try{const r=(await _d()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(t,yd(e)),await r.done}catch(n){if(n instanceof Nn)tn.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function yd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=1024,cE=30;class uE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ou();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cE){const a=dE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ou(),{heartbeatsToSend:r,unsentEntries:s}=hE(this._heartbeatsCache.heartbeats),i=Bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return tn.warn(n),""}}}function Ou(){return new Date().toISOString().substring(0,10)}function hE(e,t=lE){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ku(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ku(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ku(e){return Bi(JSON.stringify({version:2,heartbeats:e})).length}function dE(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(e){An(new $i("platform-logger",t=>new Av(t),"PRIVATE")),An(new $i("heartbeat",t=>new uE(t),"PRIVATE")),Ue(Na,Du,e),Ue(Na,Du,"esm2017"),Ue("fire-js","")}pE("");var gE="firebase",mE="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(gE,mE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(St||(St={}));const _E={debug:St.DEBUG,verbose:St.VERBOSE,info:St.INFO,warn:St.WARN,error:St.ERROR,silent:St.SILENT},yE=St.INFO,vE={[St.DEBUG]:"log",[St.VERBOSE]:"log",[St.INFO]:"info",[St.WARN]:"warn",[St.ERROR]:"error"},EE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=vE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let TE=class{constructor(t){this.name=t,this._logLevel=yE,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in St))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_E[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,St.DEBUG,...t),this._logHandler(this,St.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,St.VERBOSE,...t),this._logHandler(this,St.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,St.INFO,...t),this._logHandler(this,St.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,St.WARN,...t),this._logHandler(this,St.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,St.ERROR,...t),this._logHandler(this,St.ERROR,...t)}},Mu=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}},Lu=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};const vd="@firebase/installations",El="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=1e4,Td=`w:${El}`,Id="FIS_v2",IE="https://firebaseinstallations.googleapis.com/v1",wE=60*60*1e3,AE="installations",bE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jn=new mo(AE,bE,RE);function wd(e){return e instanceof Nn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad({projectId:e}){return`${IE}/projects/${e}/installations`}function bd(e){return{token:e.token,requestStatus:2,expiresIn:CE(e.expiresIn),creationTime:Date.now()}}async function Rd(e,t){const r=(await t.json()).error;return Jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function SE(e,{refreshToken:t}){const n=Sd(e);return n.append("Authorization",PE(t)),n}async function Cd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function CE(e){return Number(e.replace("s","000"))}function PE(e){return`${Id} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ad(e),s=Sd(e),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Id,appId:e.appId,sdkVersion:Td},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Cd(()=>fetch(r,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:bd(f.authToken)}}else throw await Rd("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=/^[cdef][\w-]{21}$/,Ma="";function NE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=OE(e);return xE.test(n)?n:Ma}catch{return Ma}}function OE(e){return DE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;function Dd(e,t){const n=_o(e);xd(n,t),kE(n,t)}function xd(e,t){const n=Vd.get(e);if(n)for(const r of n)r(t)}function kE(e,t){const n=ME();n&&n.postMessage({key:e,fid:t}),LE()}let Kn=null;function ME(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=e=>{xd(e.data.key,e.data.fid)}),Kn}function LE(){Vd.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebase-installations-database",UE=1,Zn="firebase-installations-store";let ua=null;function Tl(){return ua||(ua=pd(FE,UE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zn)}}})),ua}async function Hi(e,t){const n=_o(e),s=(await Tl()).transaction(Zn,"readwrite"),i=s.objectStore(Zn),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Dd(e,t.fid),t}async function Nd(e){const t=_o(e),r=(await Tl()).transaction(Zn,"readwrite");await r.objectStore(Zn).delete(t),await r.done}async function yo(e,t){const n=_o(e),s=(await Tl()).transaction(Zn,"readwrite"),i=s.objectStore(Zn),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Dd(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(e){let t;const n=await yo(e.appConfig,r=>{const s=BE(r),i=$E(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ma?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function BE(e){const t=e||{fid:NE(),registrationStatus:0};return Od(t)}function $E(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=jE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:HE(e)}:{installationEntry:t}}async function jE(e,t){try{const n=await VE(e,t);return Hi(e.appConfig,n)}catch(n){throw wd(n)&&n.customData.serverCode===409?await Nd(e.appConfig):await Hi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function HE(e){let t=await Fu(e.appConfig);for(;t.registrationStatus===1;)await Pd(100),t=await Fu(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Il(e);return r||n}return t}function Fu(e){return yo(e,t=>{if(!t)throw Jn.create("installation-not-found");return Od(t)})}function Od(e){return qE(e)?{fid:e.fid,registrationStatus:0}:e}function qE(e){return e.registrationStatus===1&&e.registrationTime+Ed<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE({appConfig:e,heartbeatServiceProvider:t},n){const r=KE(e,n),s=SE(e,n),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Td,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Cd(()=>fetch(r,l));if(u.ok){const f=await u.json();return bd(f)}else throw await Rd("Generate Auth Token",u)}function KE(e,{fid:t}){return`${Ad(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(e,t=!1){let n;const r=await yo(e.appConfig,i=>{if(!kd(i))throw Jn.create("not-registered");const a=i.authToken;if(!t&&QE(a))return i;if(a.requestStatus===1)return n=WE(e,t),i;{if(!navigator.onLine)throw Jn.create("app-offline");const l=XE(i);return n=GE(e,l),l}});return n?await n:r.authToken}async function WE(e,t){let n=await Uu(e.appConfig);for(;n.authToken.requestStatus===1;)await Pd(100),n=await Uu(e.appConfig);const r=n.authToken;return r.requestStatus===0?wl(e,t):r}function Uu(e){return yo(e,t=>{if(!kd(t))throw Jn.create("not-registered");const n=t.authToken;return JE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function GE(e,t){try{const n=await zE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Hi(e.appConfig,r),n}catch(n){if(wd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hi(e.appConfig,r)}throw n}}function kd(e){return e!==void 0&&e.registrationStatus===2}function QE(e){return e.requestStatus===2&&!YE(e)}function YE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+wE}function XE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function JE(e){return e.requestStatus===1&&e.requestTime+Ed<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(e){const t=e,{installationEntry:n,registrationPromise:r}=await Il(t);return r?r.catch(console.error):wl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(e,t=!1){const n=e;return await eT(n),(await wl(n,t)).token}async function eT(e){const{registrationPromise:t}=await Il(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(e){if(!e||!e.options)throw ha("App Configuration");if(!e.name)throw ha("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ha(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ha(e){return Jn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="installations",rT="installations-internal",sT=e=>{const t=e.getProvider("app").getImmediate(),n=nT(t),r=$s(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iT=e=>{const t=e.getProvider("app").getImmediate(),n=$s(t,Md).getImmediate();return{getId:()=>ZE(n),getToken:s=>tT(n,s)}};function oT(){An(new Lu(Md,sT,"PUBLIC")),An(new Lu(rT,iT,"PRIVATE"))}oT();Ue(vd,El);Ue(vd,El,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="analytics",aT="firebase_id",lT="origin",cT=60*1e3,uT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Al="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new TE("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new mo("analytics","Analytics",hT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e){if(!e.startsWith(Al)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return me.warn(t.message),""}return e}function Ld(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function dT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function pT(e,t){const n=dT("firebase-js-sdk-policy",{createScriptURL:fT}),r=document.createElement("script"),s=`${Al}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function gT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function mT(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const u=(await Ld(n)).find(f=>f.measurementId===s);u&&await t[u.appId]}}catch(l){me.error(l)}e("config",s,i)}async function _T(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Ld(n);for(const u of a){const f=l.find(g=>g.measurementId===u),d=f&&t[f.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){me.error(i)}}function yT(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await _T(e,t,n,l,u)}else if(i==="config"){const[l,u]=a;await mT(e,t,n,r,l,u)}else if(i==="consent"){const[l,u]=a;e("consent",l,u)}else if(i==="get"){const[l,u,f]=a;e("get",l,u,f)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){me.error(l)}}return s}function vT(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=yT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function ET(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Al)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=30,IT=1e3;class wT{constructor(t={},n=IT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Fd=new wT;function AT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:AT(r)},i=uT.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((t=u.error)===null||t===void 0)&&t.message&&(l=u.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function RT(e,t=Fd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Te.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Te.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new PT;return setTimeout(async()=>{l.abort()},cT),Ud({appId:r,apiKey:s,measurementId:i},a,l,t)}async function Ud(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Fd){var i;const{appId:a,measurementId:l}=e;try{await ST(r,t)}catch(u){if(l)return me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await bT(e);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!CT(f)){if(s.deleteThrottleMetadata(a),l)return me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw u}const d=Number((i=f==null?void 0:f.customData)===null||i===void 0?void 0:i.httpStatus)===503?Su(n,s.intervalMillis,TT):Su(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,g),me.debug(`Calling attemptFetch again in ${d} millis`),Ud(e,g,r,s)}}function ST(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function CT(e){if(!(e instanceof Nn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class PT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function VT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(){if(ud())try{await hd()}catch(e){return me.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return me.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xT(e,t,n,r,s,i,a){var l;const u=RT(e);u.then(R=>{n[R.measurementId]=R.appId,e.options.measurementId&&R.measurementId!==e.options.measurementId&&me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>me.error(R)),t.push(u);const f=DT().then(R=>{if(R)return r.getId()}),[d,g]=await Promise.all([u,f]);ET(i)||pT(i,d.measurementId),s("js",new Date);const I=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return I[lT]="firebase",I.update=!0,g!=null&&(I[aT]=g),s("config",d.measurementId,I),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t){this.app=t}_delete(){return delete vs[this.app.options.appId],Promise.resolve()}}let vs={},Bu=[];const $u={};let fa="dataLayer",OT="gtag",ju,Bd,Hu=!1;function kT(){const e=[];if(Qy()&&e.push("This is a browser extension environment."),Xy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});me.warn(n.message)}}function MT(e,t,n){kT();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(vs[r]!=null)throw Te.create("already-exists",{id:r});if(!Hu){gT(fa);const{wrappedGtag:i,gtagCore:a}=vT(vs,Bu,$u,fa,OT);Bd=i,ju=a,Hu=!0}return vs[r]=xT(e,Bu,$u,t,ju,fa,n),new NT(e)}function LT(e=md()){e=Xn(e);const t=$s(e,qi);return t.isInitialized()?t.getImmediate():FT(e)}function FT(e,t={}){const n=$s(e,qi);if(n.isInitialized()){const s=n.getImmediate();if(Ps(t,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:t})}function UT(e,t,n,r){e=Xn(e),VT(Bd,vs[e.app.options.appId],t,n,r).catch(s=>me.error(s))}const qu="@firebase/analytics",zu="0.10.12";function BT(){An(new Mu(qi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return MT(r,s,n)},"PUBLIC")),An(new Mu("analytics-internal",e,"PRIVATE")),Ue(qu,zu),Ue(qu,zu,"esm2017");function e(t){try{const n=t.getProvider(qi).getImmediate();return{logEvent:(r,s,i)=>UT(n,r,s,i)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}BT();class $T{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(dt||(dt={}));const jT={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},HT=dt.INFO,qT={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},zT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=qT[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class KT{constructor(t){this.name=t,this._logLevel=HT,this._logHandler=zT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,$d;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,A,b){for(var y=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)y[ue-2]=arguments[ue];return m.prototype[A].apply(E,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)E[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)E[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var b=w.g[3],y=m+(b^_&(A^b))+E[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=b+(A^m&(_^A))+E[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(_^b&(m^_))+E[2]+606105819&4294967295,A=b+(y<<17&4294967295|y>>>15),y=_+(m^A&(b^m))+E[3]+3250441966&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(b^_&(A^b))+E[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(A^m&(_^A))+E[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(_^b&(m^_))+E[6]+2821735955&4294967295,A=b+(y<<17&4294967295|y>>>15),y=_+(m^A&(b^m))+E[7]+4249261313&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(b^_&(A^b))+E[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(A^m&(_^A))+E[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(_^b&(m^_))+E[10]+4294925233&4294967295,A=b+(y<<17&4294967295|y>>>15),y=_+(m^A&(b^m))+E[11]+2304563134&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(b^_&(A^b))+E[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(A^m&(_^A))+E[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=A+(_^b&(m^_))+E[14]+2792965006&4294967295,A=b+(y<<17&4294967295|y>>>15),y=_+(m^A&(b^m))+E[15]+1236535329&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(A^b&(_^A))+E[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^A&(m^_))+E[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(b^m))+E[11]+643717713&4294967295,A=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(A^b))+E[0]+3921069994&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(_^A))+E[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^A&(m^_))+E[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(b^m))+E[15]+3634488961&4294967295,A=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(A^b))+E[4]+3889429448&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(_^A))+E[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^A&(m^_))+E[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(b^m))+E[3]+4107603335&4294967295,A=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(A^b))+E[8]+1163531501&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^b&(_^A))+E[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^A&(m^_))+E[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(b^m))+E[7]+1735328473&4294967295,A=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(A^b))+E[12]+2368359562&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(_^A^b)+E[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^A)+E[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^_)+E[11]+1839030562&4294967295,A=b+(y<<16&4294967295|y>>>16),y=_+(A^b^m)+E[14]+4259657740&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^b)+E[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^A)+E[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^_)+E[7]+4139469664&4294967295,A=b+(y<<16&4294967295|y>>>16),y=_+(A^b^m)+E[10]+3200236656&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^b)+E[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^A)+E[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^_)+E[3]+3572445317&4294967295,A=b+(y<<16&4294967295|y>>>16),y=_+(A^b^m)+E[6]+76029189&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^b)+E[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^A)+E[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=A+(b^m^_)+E[15]+530742520&4294967295,A=b+(y<<16&4294967295|y>>>16),y=_+(A^b^m)+E[2]+3299628645&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(A^(_|~b))+E[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~A))+E[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~_))+E[14]+2878612391&4294967295,A=b+(y<<15&4294967295|y>>>17),y=_+(b^(A|~m))+E[5]+4237533241&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~b))+E[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~A))+E[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~_))+E[10]+4293915773&4294967295,A=b+(y<<15&4294967295|y>>>17),y=_+(b^(A|~m))+E[1]+2240044497&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~b))+E[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~A))+E[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~_))+E[6]+2734768916&4294967295,A=b+(y<<15&4294967295|y>>>17),y=_+(b^(A|~m))+E[13]+1309151649&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~b))+E[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~A))+E[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=A+(m^(b|~_))+E[2]+718787259&4294967295,A=b+(y<<15&4294967295|y>>>17),y=_+(b^(A|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,E=this.B,A=this.h,b=0;b<m;){if(A==0)for(;b<=_;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(E[A++]=w.charCodeAt(b++),A==this.blockSize){s(this,E),A=0;break}}else for(;b<m;)if(E[A++]=w[b++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)w[_++]=this.g[m]>>>E&255;return w};function i(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],E=!0,A=w.length-1;0<=A;A--){var b=w[A]|0;E&&b==m||(_[A]=b,E=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(f(-w));for(var m=[],_=1,E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),E=g,A=0;A<w.length;A+=8){var b=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+b),m);8>b?(b=f(Math.pow(m,b)),E=E.j(b).add(f(y))):(E=E.j(_),E=E.add(f(y)))}return E}var g=u(0),I=u(1),R=u(16777216);e=a.prototype,e.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=f(Math.pow(w,6)),_=this,E="";;){var A=z(_,m).g;_=K(_,A.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,D(_))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}e.l=function(w){return w=K(this,w),L(w)?-1:D(w)?0:1};function F(w){for(var m=w.g.length,_=[],E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(I)}e.abs=function(){return L(this)?F(this):this},e.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0,A=0;A<=m;A++){var b=E+(this.i(A)&65535)+(w.i(A)&65535),y=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);E=y>>>16,b&=65535,y&=65535,_[A]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(w,m){return w.add(F(m))}e.j=function(w){if(D(this)||D(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(R)&&0>w.l(R))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<w.g.length;A++){var b=this.i(E)>>>16,y=this.i(E)&65535,ue=w.i(A)>>>16,xe=w.i(A)&65535;_[2*E+2*A]+=y*xe,G(_,2*E+2*A),_[2*E+2*A+1]+=b*xe,G(_,2*E+2*A+1),_[2*E+2*A+1]+=y*ue,G(_,2*E+2*A+1),_[2*E+2*A+2]+=b*ue,G(_,2*E+2*A+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function G(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Q(w,m){this.g=w,this.h=m}function z(w,m){if(D(m))throw Error("division by zero");if(D(w))return new Q(g,g);if(L(w))return m=z(F(w),m),new Q(F(m.g),F(m.h));if(L(m))return m=z(w,F(m)),new Q(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=m;0>=E.l(w);)_=lt(_),E=lt(E);var A=Et(_,1),b=Et(E,1);for(E=Et(E,2),_=Et(_,2);!D(E);){var y=b.add(E);0>=y.l(w)&&(A=A.add(_),b=y),E=Et(E,1),_=Et(_,1)}return m=K(w,A.j(m)),new Q(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(_),y=b.j(m);L(y)||0<y.l(w);)_-=E,b=f(_),y=b.j(m);D(b)&&(b=I),A=A.add(b),w=K(w,y)}return new Q(A,w)}e.A=function(w){return z(this,w).h},e.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},e.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},e.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function lt(w){for(var m=w.g.length+1,_=[],E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function Et(w,m){var _=m>>5;m%=32;for(var E=w.g.length-_,A=[],b=0;b<E;b++)A[b]=0<m?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$d=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,vn=a}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jd,cs,Hd,bi,La,qd,zd,Kd;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break t;h=h[S]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,I.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var $=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)$[Tt-2]=arguments[Tt];return c.prototype[S].apply(p,$)}}function L(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let $=0;$<C;$++)o[S+$]=p[$]}else o.push(p)}}class K{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var lt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Et(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Re;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ue{constructor(){this.h=this.g=null}add(c,h){const p=xe.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var xe=new K(()=>new Vt,o=>o.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let it,pt=!1,Re=new ue,On=()=>{const o=l.Promise.resolve(void 0);it=()=>{o.then(ze)}};var ze=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var c=xe;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}pt=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var No=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function kn(o,c){if(Bt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(lt){t:{try{z(c.nodeName);var S=!0;break t}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Mn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&kn.aa.h.call(this)}}D(kn,Bt);var Mn={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),$r=0;function Ws(o,c,h,p,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=S,this.key=++$r,this.da=this.fa=!1}function Ne(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jr(o){this.src=o,this.g={},this.h=0}jr.prototype.add=function(o,c,h,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var $=T(o,c,p,S);return-1<$?(c=o[$],h||(c.fa=!1)):(c=new Ws(c,this.src,C,!!p,S),c.fa=h,o.push(c)),c};function v(o,c){var h=c.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Ne(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function T(o,c,h,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return S}return-1}var P="closure_lm_"+(1e6*Math.random()|0),O={};function x(o,c,h,p,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)x(o,c[C],h,p,S);return null}return h=tt(h),o&&o[Ke]?o.K(c,h,f(p)?!!p.capture:!1,S):k(o,c,h,!1,p,S)}function k(o,c,h,p,S,C){if(!c)throw Error("Invalid event type");var $=f(S)?!!S.capture:!!S,Tt=H(o);if(Tt||(o[P]=Tt=new jr(o)),h=Tt.add(c,h,p,$,C),h.proxy)return h;if(p=j(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)No||(S=$),S===void 0&&(S=!1),o.addEventListener(c.toString(),p,S);else if(o.attachEvent)o.attachEvent(M(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function j(){function o(h){return c.call(o.src,o.listener,h)}const c=J;return o}function B(o,c,h,p,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)B(o,c[C],h,p,S);else p=f(p)?!!p.capture:!!p,h=tt(h),o&&o[Ke]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=T(C,h,p,S),-1<h&&(Ne(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=H(o))&&(c=o.g[c.toString()],o=-1,c&&(o=T(c,h,p,S)),(h=-1<o?c[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ke])v(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(M(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=H(c))?(v(h,o),h.h==0&&(h.src=null,c[P]=null)):Ne(o)}}}function M(o){return o in O?O[o]:O[o]="on"+o}function J(o,c){if(o.da)o=!0;else{c=new kn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,c)}return o}function H(o){return o=o[P],o instanceof jr?o:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function tt(o){return typeof o=="function"?o:(o[W]||(o[W]=function(c){return o.handleEvent(c)}),o[W])}function Z(){Ut.call(this),this.i=new jr(this),this.M=this,this.F=null}D(Z,Ut),Z.prototype[Ke]=!0,Z.prototype.removeEventListener=function(o,c,h,p){B(this,o,c,h,p)};function ot(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Bt(c,o);else if(c instanceof Bt)c.target=c.target||o;else{var S=c;c=new Bt(p,o),E(c,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var $=c.g=h[C];S=ht($,p,!0,c)&&S}if($=c.g=o,S=ht($,p,!0,c)&&S,S=ht($,p,!1,c)&&S,h)for(C=0;C<h.length;C++)$=c.g=h[C],S=ht($,p,!1,c)&&S}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Ne(h[p]);delete o.g[c],o.h--}}this.F=null},Z.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Z.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function ht(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var $=c[C];if($&&!$.da&&$.capture==h){var Tt=$.listener,Wt=$.ha||$.src;$.fa&&v(o.i,$),S=Tt.call(Wt,p)!==!1&&S}}return S&&!p.defaultPrevented}function Jt(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function zt(o){o.g=Jt(()=>{o.g=null,o.i&&(o.i=!1,zt(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ie extends Ut{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:zt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(o){Ut.call(this),this.h=o,this.g={}}D(Zt,Ut);var sn=[];function Hr(o){Et(o.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},o),o.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),Hr(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kt=l.JSON.stringify,we=l.JSON.parse,Gs=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Oo(){}Oo.prototype.h=null;function tc(o){return o.h||(o.h=o.i())}function ec(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ko(){Bt.call(this,"d")}D(ko,Bt);function Mo(){Bt.call(this,"c")}D(Mo,Bt);var Ln={},nc=null;function Qs(){return nc=nc||new Z}Ln.La="serverreachability";function rc(o){Bt.call(this,Ln.La,o)}D(rc,Bt);function zr(o){const c=Qs();ot(c,new rc(c))}Ln.STAT_EVENT="statevent";function sc(o,c){Bt.call(this,Ln.STAT_EVENT,o),this.stat=c}D(sc,Bt);function he(o){const c=Qs();ot(c,new sc(c,o))}Ln.Ma="timingevent";function ic(o,c){Bt.call(this,Ln.Ma,o),this.size=c}D(ic,Bt);function Kr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function yg(o,c,h,p,S,C){o.info(function(){if(o.g)if(C)for(var $="",Tt=C.split("&"),Wt=0;Wt<Tt.length;Wt++){var gt=Tt[Wt].split("=");if(1<gt.length){var te=gt[0];gt=gt[1];var ee=te.split("_");$=2<=ee.length&&ee[1]=="type"?$+(te+"="+gt+"&"):$+(te+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+c+`
`+h+`
`+$})}function vg(o,c,h,p,S,C,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+$})}function lr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tg(o,h)+(p?" "+p:"")})}function Eg(o,c){o.info(function(){return"TIMEOUT: "+c})}Wr.prototype.info=function(){};function Tg(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<S.length;$++)S[$]=""}}}}return Kt(h)}catch{return c}}var Ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lo;function Xs(){}D(Xs,Oo),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},Lo=new Xs;function on(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var lc={},Fo={};function Uo(o,c,h){o.L=1,o.v=ei(We(c)),o.m=h,o.P=!0,cc(o,null)}function cc(o,c){o.F=Date.now(),Js(o),o.A=We(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),wc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new ac,o.g=$c(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ie(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(sn[0]=S.toString()),S=sn);for(var C=0;C<S.length;C++){var $=x(h,S[C],p||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),zr(),yg(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ge(o)==3?c.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)t:{const ee=Ge(this.g);var c=this.g.Ba();const hr=this.g.Z();if(!(3>ee)&&(ee!=3||this.g&&(this.h.h||this.g.oa()||Vc(this.g)))){this.J||ee!=4||c==7||(c==8||0>=hr?zr(3):zr(2)),Bo(this);var h=this.g.Z();this.X=h;e:if(uc(this)){var p=Vc(this.g);o="";var S=p.length,C=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Gr(this);var $="";break e}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==S-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,vg(this.i,this.u,this.A,this.l,this.R,ee,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Tt,Wt=this.g;if((Tt=Wt.g?Wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Tt)){var gt=Tt;break e}}gt=null}if(h=gt)lr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$o(this,h);else{this.o=!1,this.s=3,he(12),Fn(this),Gr(this);break t}}if(this.P){h=!0;let Se;for(;!this.J&&this.C<$.length;)if(Se=Ig(this,$),Se==Fo){ee==4&&(this.s=4,he(14),h=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==lc){this.s=4,he(15),lr(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else lr(this.i,this.l,Se,null),$o(this,Se);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||$.length!=0||this.h.h||(this.s=1,he(16),h=!1),this.o=this.o&&h,!h)lr(this.i,this.l,$,"[Invalid Chunked Response]"),Fn(this),Gr(this);else if(0<$.length&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.ba&&!te.M&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Wo(te),te.M=!0,he(11))}}else lr(this.i,this.l,$,null),$o(this,$);ee==4&&Fn(this),this.o&&!this.J&&(ee==4?Lc(this.j,this):(this.o=!1,Js(this)))}else Ug(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,he(12)):(this.s=0,he(13)),Fn(this),Gr(this)}}}catch{}finally{}};function uc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ig(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Fo:(h=Number(c.substring(h,p)),isNaN(h)?lc:(p+=1,p+h>c.length?Fo:(c=c.slice(p,p+h),o.C=p+h,c)))}on.prototype.cancel=function(){this.J=!0,Fn(this)};function Js(o){o.S=Date.now()+o.I,hc(o,o.I)}function hc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Kr(I(o.ba,o),c)}function Bo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Eg(this.i,this.A),this.L!=2&&(zr(),he(17)),Fn(this),this.s=2,Gr(this)):hc(this,this.S-o)};function Gr(o){o.j.G==0||o.J||Lc(o.j,o)}function Fn(o){Bo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Hr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function $o(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||jo(h.h,o))){if(!o.K&&jo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ai(h),ii(h);else break t;Ko(h),he(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kr(I(h.Za,h),6e3));if(1>=pc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Bn(h,11)}else if((o.K||h.g==o)&&ai(h),!G(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let gt=S[c];if(h.T=gt[0],gt=gt[1],h.G==2)if(gt[0]=="c"){h.K=gt[1],h.ia=gt[2];const te=gt[3];te!=null&&(h.la=te,h.j.info("VER="+h.la));const ee=gt[4];ee!=null&&(h.Aa=ee,h.j.info("SVER="+h.Aa));const hr=gt[5];hr!=null&&typeof hr=="number"&&0<hr&&(p=1.5*hr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Se=o.g;if(Se){const ci=Se.g?Se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var C=p.h;C.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ho(C,C.h),C.h=null))}if(p.D){const Go=Se.g?Se.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(p.ya=Go,bt(p.I,p.D,Go))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=o;if(p.qa=Bc(p,p.J?p.ia:null,p.W),$.K){gc(p.h,$);var Tt=$,Wt=p.L;Wt&&(Tt.I=Wt),Tt.B&&(Bo(Tt),Js(Tt)),p.g=$}else kc(p);0<h.i.length&&oi(h)}else gt[0]!="stop"&&gt[0]!="close"||Bn(h,7);else h.G==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?Bn(h,7):zo(h):gt[0]!="noop"&&h.l&&h.l.ta(gt),h.v=0)}}zr(4)}catch{}}var wg=class{constructor(o,c){this.g=o,this.map=c}};function fc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pc(o){return o.h?1:o.g?o.g.size:0}function jo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ho(o,c){o.g?o.g.add(c):o.h=c}function gc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}fc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return L(o.i)}function Ag(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function bg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function _c(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=bg(o),p=Ag(o),S=p.length,C=0;C<S;C++)c.call(void 0,p[C],h&&h[C],o)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rg(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var C=o[h].substring(0,p);S=o[h].substring(p+1)}else C=o[h];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Un){this.h=o.h,Zs(this,o.j),this.o=o.o,this.g=o.g,ti(this,o.s),this.l=o.l;var c=o.i,h=new Xr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),vc(this,h),this.m=o.m}else o&&(c=String(o).match(yc))?(this.h=!1,Zs(this,c[1]||"",!0),this.o=Qr(c[2]||""),this.g=Qr(c[3]||"",!0),ti(this,c[4]),this.l=Qr(c[5]||"",!0),vc(this,c[6]||"",!0),this.m=Qr(c[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}Un.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Yr(c,Ec,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Yr(c,Ec,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Yr(h,h.charAt(0)=="/"?Pg:Cg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Yr(h,Dg)),o.join("")};function We(o){return new Un(o)}function Zs(o,c,h){o.j=h?Qr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ti(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function vc(o,c,h){c instanceof Xr?(o.i=c,xg(o.i,o.h)):(h||(c=Yr(c,Vg)),o.i=new Xr(c,o.h))}function bt(o,c,h){o.i.set(c,h)}function ei(o){return bt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Sg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ec=/[#\/\?@]/g,Cg=/[#\?:]/g,Pg=/[#\?]/g,Vg=/[#\?@]/g,Dg=/#/g;function Xr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&Rg(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}e=Xr.prototype,e.add=function(o,c){an(this),this.i=null,o=cr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Tc(o,c){an(o),c=cr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ic(o,c){return an(o),c=cr(o,c),o.g.has(c)}e.forEach=function(o,c){an(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(c,S,p,this)},this)},this)},e.na=function(){an(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const S=o[p];for(let C=0;C<S.length;C++)h.push(c[p])}return h},e.V=function(o){an(this);let c=[];if(typeof o=="string")Ic(this,o)&&(c=c.concat(this.g.get(cr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},e.set=function(o,c){return an(this),this.i=null,o=cr(this,o),Ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function wc(o,c,h){Tc(o,c),0<h.length&&(o.i=null,o.g.set(cr(o,c),L(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var S=C;$[p]!==""&&(S+="="+encodeURIComponent(String($[p]))),o.push(S)}}return this.i=o.join("&")};function cr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function xg(o,c){c&&!o.j&&(an(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(Tc(this,p),wc(this,S,h))},o)),o.j=c}function Ng(o,c){const h=new Wr;if(l.Image){const p=new Image;p.onload=R(ln,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(ln,h,"TestLoadImage: error",!1,c,p),p.onabort=R(ln,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(ln,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Og(o,c){const h=new Wr,p=new AbortController,S=setTimeout(()=>{p.abort(),ln(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?ln(h,"TestPingServer: ok",!0,c):ln(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),ln(h,"TestPingServer: error",!1,c)})}function ln(o,c,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function kg(){this.g=new Gs}function Mg(o,c,h){const p=h||"";try{_c(o,function(S,C){let $=S;f(S)&&($=Kt(S)),c.push(p+C+"="+encodeURIComponent($))})}catch(S){throw c.push(p+"type="+encodeURIComponent("_badmap")),S}}function ni(o){this.l=o.Ub||null,this.j=o.eb||!1}D(ni,Oo),ni.prototype.g=function(){return new ri(this.l,this.j)},ni.prototype.i=function(o){return function(){return o}}({});function ri(o,c){Z.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ri,Z),e=ri.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Zr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ac(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ac(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Jr(this):Zr(this),this.readyState==3&&Ac(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},e.Qa=function(o){this.g&&(this.response=o,Jr(this))},e.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Zr(o)}e.setRequestHeader=function(o,c){this.u.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bc(o){let c="";return Et(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function qo(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=bc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):bt(o,c,h))}function xt(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(xt,Z);var Lg=/^https?$/i,Fg=["POST","PUT"];e=xt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?tc(this.o):tc(Lo),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Rc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Fg,c,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of h)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Rc(this,C)}};function Rc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Sc(o),si(o)}function Sc(o){o.A||(o.A=!0,ot(o,"complete"),ot(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ot(this,"complete"),ot(this,"abort"),si(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),xt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Cc(this):this.bb())},e.bb=function(){Cc(this)};function Cc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)Jt(o.Ea,0,o);else if(ot(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const $=o.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=$===0){var S=String(o.D).match(yc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Lg.test(S?S.toLowerCase():"")}h=p}if(h)ot(o,"complete"),ot(o,"success");else{o.m=6;try{var C=2<Ge(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Sc(o)}}finally{si(o)}}}}function si(o,c){if(o.g){Pc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ot(o,"ready");try{h.onreadystatechange=p}catch{}}}function Pc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),we(c)}};function Vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ug(o){const c={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var h=A(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[S]||[];c[S]=C,C.push(h)}w(c,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Dc(o){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ts("baseRetryDelayMs",5e3,o),this.cb=ts("retryDelaySeedMs",1e4,o),this.Wa=ts("forwardChannelMaxRetries",2,o),this.wa=ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fc(o&&o.concurrentRequestLimit),this.Da=new kg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Dc.prototype,e.la=8,e.G=1,e.connect=function(o,c,h,p){he(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Bc(this,null,this.W),oi(this)};function zo(o){if(xc(o),o.G==3){var c=o.U++,h=We(o.I);if(bt(h,"SID",o.K),bt(h,"RID",c),bt(h,"TYPE","terminate"),es(o,h),c=new on(o,o.j,c),c.L=2,c.v=ei(We(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=$c(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Js(c)}Uc(o)}function ii(o){o.g&&(Wo(o),o.g.cancel(),o.g=null)}function xc(o){ii(o),o.u&&(l.clearTimeout(o.u),o.u=null),ai(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function oi(o){if(!dc(o.h)&&!o.s){o.s=!0;var c=o.Ga;it||On(),pt||(it(),pt=!0),Re.add(c,o),o.B=0}}function Bg(o,c){return pc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Kr(I(o.Ga,o,c),Fc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new on(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Oc(this,S,c),h=We(this.I),bt(h,"RID",o),bt(h,"CVER",22),this.D&&bt(h,"X-HTTP-Session-Id",this.D),es(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(bc(C)))+"&"+c:this.m&&qo(h,this.m,C)),Ho(this.h,S),this.Ua&&bt(h,"TYPE","init"),this.P?(bt(h,"$req",c),bt(h,"SID","null"),S.T=!0,Uo(S,h,null)):Uo(S,h,c),this.G=2}}else this.G==3&&(o?Nc(this,o):this.i.length==0||dc(this.h)||Nc(this))};function Nc(o,c){var h;c?h=c.l:h=o.U++;const p=We(o.I);bt(p,"SID",o.K),bt(p,"RID",h),bt(p,"AID",o.T),es(o,p),o.m&&o.o&&qo(p,o.m,o.o),h=new on(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Oc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ho(o.h,h),Uo(h,p,c)}function es(o,c){o.H&&Et(o.H,function(h,p){bt(c,p,h)}),o.l&&_c({},function(h,p){bt(c,p,h)})}function Oc(o,c,h){h=Math.min(o.i.length,h);var p=o.l?I(o.l.Na,o.l,o):null;t:{var S=o.i;let C=-1;for(;;){const $=["count="+h];C==-1?0<h?(C=S[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let Tt=!0;for(let Wt=0;Wt<h;Wt++){let gt=S[Wt].g;const te=S[Wt].map;if(gt-=C,0>gt)C=Math.max(0,S[Wt].g-100),Tt=!1;else try{Mg(te,$,"req"+gt+"_")}catch{p&&p(te)}}if(Tt){p=$.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function kc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;it||On(),pt||(it(),pt=!0),Re.add(c,o),o.v=0}}function Ko(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Kr(I(o.Fa,o),Fc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Kr(I(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,he(10),ii(this),Mc(this))};function Wo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Mc(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=We(o.qa);bt(c,"RID","rpc"),bt(c,"SID",o.K),bt(c,"AID",o.T),bt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&bt(c,"TO",o.ja),bt(c,"TYPE","xmlhttp"),es(o,c),o.m&&o.o&&qo(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ei(We(c)),h.m=null,h.P=!0,cc(h,o)}e.Za=function(){this.C!=null&&(this.C=null,ii(this),Ko(this),he(19))};function ai(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Lc(o,c){var h=null;if(o.g==c){ai(o),Wo(o),o.g=null;var p=2}else if(jo(o.h,c))h=c.D,gc(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;p=Qs(),ot(p,new ic(p,h)),oi(o)}else kc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(p==1&&Bg(o,c)||p==2&&Ko(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function Fc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Bn(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),p=o.Xa;const S=!p;p=new Un(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zs(p,"https"),ei(p),S?Ng(p.toString(),h):Og(p.toString(),h)}else he(2);o.G=0,o.l&&o.l.sa(c),Uc(o),xc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function Uc(o){if(o.G=0,o.ka=[],o.l){const c=mc(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Bc(o,c,h){var p=h instanceof Un?We(h):new Un(h);if(p.g!="")c&&(p.g=c+"."+p.g),ti(p,p.s);else{var S=l.location;p=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new Un(null);p&&Zs(C,p),c&&(C.g=c),S&&ti(C,S),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&bt(p,h,c),bt(p,"VER",o.la),es(o,p),p}function $c(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new xt(new ni({eb:h})):new xt(o.pa),c.Ha(o.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}e=jc.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function li(){}li.prototype.g=function(o,c){return new _e(o,c)};function _e(o,c){Z.call(this),this.g=new Dc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!G(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ur(this)}D(_e,Z),_e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_e.prototype.close=function(){zo(this.g)},_e.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Kt(o),o=h);c.i.push(new wg(c.Ya++,o)),c.G==3&&oi(c)},_e.prototype.N=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,_e.aa.N.call(this)};function Hc(o){ko.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(Hc,ko);function qc(){Mo.call(this),this.status=1}D(qc,Mo);function ur(o){this.g=o}D(ur,jc),ur.prototype.ua=function(){ot(this.g,"a")},ur.prototype.ta=function(o){ot(this.g,new Hc(o))},ur.prototype.sa=function(o){ot(this.g,new qc)},ur.prototype.ra=function(){ot(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,_e.prototype.send=_e.prototype.o,_e.prototype.open=_e.prototype.m,_e.prototype.close=_e.prototype.close,Kd=function(){return new li},zd=function(){return Qs()},qd=Ln,La={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,bi=Ys,oc.COMPLETE="complete",Hd=oc,ec.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",Z.prototype.listen=Z.prototype.K,cs=ec,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha,jd=xt}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const Wu="@firebase/firestore",Gu="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new KT("@firebase/firestore");function yr(){return tr.logLevel}function q(e,...t){if(tr.logLevel<=dt.DEBUG){const n=t.map(bl);tr.debug(`Firestore (${Lr}): ${e}`,...n)}}function en(e,...t){if(tr.logLevel<=dt.ERROR){const n=t.map(bl);tr.error(`Firestore (${Lr}): ${e}`,...n)}}function Pr(e,...t){if(tr.logLevel<=dt.WARN){const n=t.map(bl);tr.warn(`Firestore (${Lr}): ${e}`,...n)}}function bl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e="Unexpected state"){const t=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+e;throw en(t),new Error(t)}function vt(e,t){e||et()}function st(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Nn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class WT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class GT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QT{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){vt(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string"),new Wd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string"),new se(t)}}class YT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class XT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new YT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JT{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,eE(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){vt(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Qu(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(vt(typeof n.token=="string"),this.R=n.token,new Qu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ZT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ct(e,t){return e<t?-1:e>t?1:0}function Fa(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return ct(r,s);{const i=Gd(),a=tI(i.encode(Yu(e,n)),i.encode(Yu(t,n)));return a!==0?a:ct(r,s)}}n+=r>65535?2:1}return ct(e.length,t.length)}function Yu(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function tI(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ct(e[n],t[n]);return ct(e.length,t.length)}function Vr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=-62135596800,Ju=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(t){return jt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Ju);return new jt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Xu)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ju}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Xu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static fromTimestamp(t){return new rt(t)}static min(){return new rt(new jt(0,0))}static max(){return new rt(new jt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="__name__";class Me{constructor(t,n,r){n===void 0?n=0:n>t.length&&et(),r===void 0?r=t.length-n:r>t.length-n&&et(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Me.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Me?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Me.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ct(t.length,n.length)}static compareSegments(t,n){const r=Me.isNumericId(t),s=Me.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Me.extractNumericId(t).compare(Me.extractNumericId(n)):Fa(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return vn.fromString(t.substring(4,t.length-2))}}class Pt extends Me{construct(t,n,r){return new Pt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Y(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const eI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Me{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return eI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zu}static keyField(){return new Qt([Zu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Y(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.path=t}static fromPath(t){return new X(Pt.fromString(t))}static fromName(t){return new X(Pt.fromString(t).popFirst(5))}static empty(){return new X(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new Pt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function nI(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(r===1e9?new jt(n+1,0):new jt(n,r));return new bn(s,X.empty(),t)}function rI(e){return new bn(e.readTime,e.key,Ds)}class bn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bn(rt.min(),X.empty(),Ds)}static max(){return new bn(rt.max(),X.empty(),Ds)}}function sI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=X.comparator(e.documentKey,t.documentKey),n!==0?n:ct(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==iI)throw e;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):V.reject(n)}static resolve(t){return new V((n,r)=>{n(t)})}static reject(t){return new V((n,r)=>{r(t)})}static waitFor(t){return new V((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new V((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new V((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function aI(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ur(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}vo.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=-1;function Eo(e){return e==null}function zi(e){return e===0&&1/e==-1/0}function lI(e){return typeof e=="number"&&Number.isInteger(e)&&!zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="";function cI(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=th(t)),t=uI(e.get(n),t);return th(t)}function uI(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Yd:n+="";break;default:n+=i}}return n}function th(e){return e+Yd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Xd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n){this.comparator=t,this.root=n||Gt.EMPTY}insert(t,n){return new Dt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pi(this.root,t,this.comparator,!0)}}class pi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Gt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Gt.RED,this.left=s??Gt.EMPTY,this.right=i??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Gt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw et();const t=this.left.check();if(t!==this.right.check())throw et();return t+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw et()}get value(){throw et()}get color(){throw et()}get left(){throw et()}get right(){throw et()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Gt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new nh(this.data.getIterator())}getIteratorFrom(t){return new nh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ht(this.comparator);return n.data=t,n}}class nh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new Ce([])}unionWith(t){let n=new Ht(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ce(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jd("Invalid base64 string: "+i):i}}(t);return new Xt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Xt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const hI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(e){if(vt(!!e),typeof e=="string"){let t=0;const n=hI.exec(e);if(vt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(e.seconds),nanos:Ot(e.nanos)}}function Ot(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Sn(e){return typeof e=="string"?Xt.fromBase64String(e):Xt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="server_timestamp",tp="__type__",ep="__previous_value__",np="__local_write_time__";function Sl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[tp])===null||n===void 0?void 0:n.stringValue)===Zd}function To(e){const t=e.mapValue.fields[ep];return Sl(t)?To(t):t}function xs(e){const t=Rn(e.mapValue.fields[np].timestampValue);return new jt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t,n,r,s,i,a,l,u,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}const Ki="(default)";class Ns{constructor(t,n){this.projectId=t,this.database=n||Ki}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(t){return t instanceof Ns&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="__type__",dI="__max__",gi={mapValue:{}},sp="__vector__",Wi="value";function Cn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Sl(e)?4:gI(e)?9007199254740991:pI(e)?10:11:et()}function He(e,t){if(e===t)return!0;const n=Cn(e);if(n!==Cn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Rn(s.timestampValue),l=Rn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Sn(s.bytesValue).isEqual(Sn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ot(s.geoPointValue.latitude)===Ot(i.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ot(s.integerValue)===Ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ot(s.doubleValue),l=Ot(i.doubleValue);return a===l?zi(a)===zi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Vr(e.arrayValue.values||[],t.arrayValue.values||[],He);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(eh(a)!==eh(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!He(a[u],l[u])))return!1;return!0}(e,t);default:return et()}}function Os(e,t){return(e.values||[]).find(n=>He(n,t))!==void 0}function Dr(e,t){if(e===t)return 0;const n=Cn(e),r=Cn(t);if(n!==r)return ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Ot(i.integerValue||i.doubleValue),u=Ot(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return rh(e.timestampValue,t.timestampValue);case 4:return rh(xs(e),xs(t));case 5:return Fa(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Sn(i),u=Sn(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=ct(l[f],u[f]);if(d!==0)return d}return ct(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ct(Ot(i.latitude),Ot(a.latitude));return l!==0?l:ct(Ot(i.longitude),Ot(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return sh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,u,f,d;const g=i.fields||{},I=a.fields||{},R=(l=g[Wi])===null||l===void 0?void 0:l.arrayValue,D=(u=I[Wi])===null||u===void 0?void 0:u.arrayValue,L=ct(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0);return L!==0?L:sh(R,D)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===gi.mapValue&&a===gi.mapValue)return 0;if(i===gi.mapValue)return 1;if(a===gi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const I=Fa(u[g],d[g]);if(I!==0)return I;const R=Dr(l[u[g]],f[d[g]]);if(R!==0)return R}return ct(u.length,d.length)}(e.mapValue,t.mapValue);default:throw et()}}function rh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ct(e,t);const n=Rn(e),r=Rn(t),s=ct(n.seconds,r.seconds);return s!==0?s:ct(n.nanos,r.nanos)}function sh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Dr(n[s],r[s]);if(i)return i}return ct(n.length,r.length)}function xr(e){return Ua(e)}function Ua(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Rn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Sn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return X.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ua(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ua(n.fields[a])}`;return s+"}"}(e.mapValue):et()}function Ri(e){switch(Cn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=To(e);return t?16+Ri(t):16;case 5:return 2*e.stringValue.length;case 6:return Sn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ri(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return sr(r.fields,(i,a)=>{s+=i.length+Ri(a)}),s}(e.mapValue);default:throw et()}}function Ba(e){return!!e&&"integerValue"in e}function Cl(e){return!!e&&"arrayValue"in e}function ih(e){return!!e&&"nullValue"in e}function oh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Si(e){return!!e&&"mapValue"in e}function pI(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[rp])===null||n===void 0?void 0:n.stringValue)===sp}function Es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return sr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Es(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function gI(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===dI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.value=t}static empty(){return new Ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Si(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(n)}setAll(t){let n=Qt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Es(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Si(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return He(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Si(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){sr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ae(Es(this.value))}}function ip(e){const t=[];return sr(e.fields,(n,r)=>{const s=new Qt([n]);if(Si(r)){const i=ip(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ce(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ae(t,0,rt.min(),rt.min(),rt.min(),Ae.empty(),0)}static newFoundDocument(t,n,r,s){return new ae(t,1,n,rt.min(),r,s,0)}static newNoDocument(t,n){return new ae(t,2,n,rt.min(),rt.min(),Ae.empty(),0)}static newUnknownDocument(t,n){return new ae(t,3,n,rt.min(),rt.min(),Ae.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.position=t,this.inclusive=n}}function ah(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=Dr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!He(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n="asc"){this.field=t,this.dir=n}}function mI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{}class $t extends op{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new yI(t,n,r):n==="array-contains"?new TI(t,r):n==="in"?new II(t,r):n==="not-in"?new wI(t,r):n==="array-contains-any"?new AI(t,r):new $t(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new vI(t,r):new EI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Dr(n,this.value)):n!==null&&Cn(this.value)===Cn(n)&&this.matchesComparison(Dr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends op{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new qe(t,n)}matches(t){return ap(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ap(e){return e.op==="and"}function lp(e){return _I(e)&&ap(e)}function _I(e){for(const t of e.filters)if(t instanceof qe)return!1;return!0}function $a(e){if(e instanceof $t)return e.field.canonicalString()+e.op.toString()+xr(e.value);if(lp(e))return e.filters.map(t=>$a(t)).join(",");{const t=e.filters.map(n=>$a(n)).join(",");return`${e.op}(${t})`}}function cp(e,t){return e instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.field.isEqual(s.field)&&He(r.value,s.value)}(e,t):e instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&cp(a,s.filters[l]),!0):!1}(e,t):void et()}function up(e){return e instanceof $t?function(n){return`${n.field.canonicalString()} ${n.op} ${xr(n.value)}`}(e):e instanceof qe?function(n){return n.op.toString()+" {"+n.getFilters().map(up).join(" ,")+"}"}(e):"Filter"}class yI extends $t{constructor(t,n,r){super(t,n,r),this.key=X.fromName(r.referenceValue)}matches(t){const n=X.comparator(t.key,this.key);return this.matchesComparison(n)}}class vI extends $t{constructor(t,n){super(t,"in",n),this.keys=hp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class EI extends $t{constructor(t,n){super(t,"not-in",n),this.keys=hp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function hp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class TI extends $t{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Cl(n)&&Os(n.arrayValue,this.value)}}class II extends $t{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Os(this.value.arrayValue,n)}}class wI extends $t{constructor(t,n){super(t,"not-in",n)}matches(t){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Os(this.value.arrayValue,n)}}class AI extends $t{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Os(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function ch(e,t=null,n=[],r=[],s=null,i=null,a=null){return new bI(e,t,n,r,s,i,a)}function Pl(e){const t=st(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$a(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>xr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>xr(r)).join(",")),t.le=n}return t.le}function Vl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!mI(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!cp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lh(e.startAt,t.startAt)&&lh(e.endAt,t.endAt)}function ja(e){return X.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function RI(e,t,n,r,s,i,a,l){return new Io(e,t,n,r,s,i,a,l)}function fp(e){return new Io(e)}function uh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function SI(e){return e.collectionGroup!==null}function Ts(e){const t=st(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ht(Qt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new Qi(i,r))}),n.has(Qt.keyField().canonicalString())||t.he.push(new Qi(Qt.keyField(),r))}return t.he}function Be(e){const t=st(e);return t.Pe||(t.Pe=CI(t,Ts(e))),t.Pe}function CI(e,t){if(e.limitType==="F")return ch(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qi(s.field,i)});const n=e.endAt?new Gi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gi(e.startAt.position,e.startAt.inclusive):null;return ch(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ha(e,t,n){return new Io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wo(e,t){return Vl(Be(e),Be(t))&&e.limitType===t.limitType}function dp(e){return`${Pl(Be(e))}|lt:${e.limitType}`}function vr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>up(s)).join(", ")}]`),Eo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(Be(e))}; limitType=${e.limitType})`}function Ao(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=ah(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,Ts(r),s)||r.endAt&&!function(a,l,u){const f=ah(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,Ts(r),s))}(e,t)}function PI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function pp(e){return(t,n)=>{let r=!1;for(const s of Ts(e)){const i=VI(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VI(e,t,n){const r=e.field.isKeyField()?X.comparator(t.key,n.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?Dr(u,f):et()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return et()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Xd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new Dt(X.comparator);function nn(){return DI}const gp=new Dt(X.comparator);function us(...e){let t=gp;for(const n of e)t=t.insert(n.key,n);return t}function mp(e){let t=gp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Wn(){return Is()}function _p(){return Is()}function Is(){return new ir(e=>e.toString(),(e,t)=>e.isEqual(t))}const xI=new Dt(X.comparator),NI=new Ht(X.comparator);function ut(...e){let t=NI;for(const n of e)t=t.add(n);return t}const OI=new Ht(ct);function kI(){return OI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function yp(e){return{integerValue:""+e}}function MI(e,t){return lI(t)?yp(t):Dl(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this._=void 0}}function LI(e,t,n){return e instanceof Yi?function(s,i){const a={fields:{[tp]:{stringValue:Zd},[np]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=To(i)),i&&(a.fields[ep]=i),{mapValue:a}}(n,t):e instanceof ks?Ep(e,t):e instanceof Ms?Tp(e,t):function(s,i){const a=vp(s,i),l=hh(a)+hh(s.Ie);return Ba(a)&&Ba(s.Ie)?yp(l):Dl(s.serializer,l)}(e,t)}function FI(e,t,n){return e instanceof ks?Ep(e,t):e instanceof Ms?Tp(e,t):n}function vp(e,t){return e instanceof Xi?function(r){return Ba(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Yi extends bo{}class ks extends bo{constructor(t){super(),this.elements=t}}function Ep(e,t){const n=Ip(t);for(const r of e.elements)n.some(s=>He(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ms extends bo{constructor(t){super(),this.elements=t}}function Tp(e,t){let n=Ip(t);for(const r of e.elements)n=n.filter(s=>!He(s,r));return{arrayValue:{values:n}}}class Xi extends bo{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function hh(e){return Ot(e.integerValue||e.doubleValue)}function Ip(e){return Cl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function UI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof ks&&s instanceof ks||r instanceof Ms&&s instanceof Ms?Vr(r.elements,s.elements,He):r instanceof Xi&&s instanceof Xi?He(r.Ie,s.Ie):r instanceof Yi&&s instanceof Yi}(e.transform,t.transform)}class BI{constructor(t,n){this.version=t,this.transformResults=n}}class Ze{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ze}static exists(t){return new Ze(void 0,t)}static updateTime(t){return new Ze(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ci(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ro{}function wp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new bp(e.key,Ze.none()):new js(e.key,e.data,Ze.none());{const n=e.data,r=Ae.empty();let s=new Ht(Qt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new or(e.key,r,new Ce(s.toArray()),Ze.none())}}function $I(e,t,n){e instanceof js?function(s,i,a){const l=s.value.clone(),u=dh(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof or?function(s,i,a){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=dh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ap(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ws(e,t,n,r){return e instanceof js?function(i,a,l,u){if(!Ci(i.precondition,a))return l;const f=i.value.clone(),d=ph(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof or?function(i,a,l,u){if(!Ci(i.precondition,a))return l;const f=ph(i.fieldTransforms,u,a),d=a.data;return d.setAll(Ap(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,l){return Ci(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function jI(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=vp(r.transform,s||null);i!=null&&(n===null&&(n=Ae.empty()),n.set(r.field,i))}return n||null}function fh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vr(r,s,(i,a)=>UI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class js extends Ro{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends Ro{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function dh(e,t,n){const r=new Map;vt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,FI(a,l,n[s]))}return r}function ph(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,LI(i,a,t))}return r}class bp extends Ro{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HI extends Ro{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&$I(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=_p();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=wp(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(rt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ut())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,(n,r)=>fh(n,r))&&Vr(this.baseMutations,t.baseMutations,(n,r)=>fh(n,r))}}class xl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){vt(t.mutations.length===r.length);let s=function(){return xI}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xl(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,ft;function WI(e){switch(e){case N.OK:return et();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return et()}}function Rp(e){if(e===void 0)return en("GRPC error has no .code"),N.UNKNOWN;switch(e){case Mt.OK:return N.OK;case Mt.CANCELLED:return N.CANCELLED;case Mt.UNKNOWN:return N.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return N.INTERNAL;case Mt.UNAVAILABLE:return N.UNAVAILABLE;case Mt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Mt.NOT_FOUND:return N.NOT_FOUND;case Mt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Mt.ABORTED:return N.ABORTED;case Mt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Mt.DATA_LOSS:return N.DATA_LOSS;default:return et()}}(ft=Mt||(Mt={}))[ft.OK=0]="OK",ft[ft.CANCELLED=1]="CANCELLED",ft[ft.UNKNOWN=2]="UNKNOWN",ft[ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ft[ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ft[ft.NOT_FOUND=5]="NOT_FOUND",ft[ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",ft[ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",ft[ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",ft[ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ft[ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ft[ft.ABORTED=10]="ABORTED",ft[ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",ft[ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",ft[ft.INTERNAL=13]="INTERNAL",ft[ft.UNAVAILABLE=14]="UNAVAILABLE",ft[ft.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new vn([4294967295,4294967295],0);function gh(e){const t=Gd().encode(e),n=new $d;return n.update(t),new Uint8Array(n.digest())}function mh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new vn([n,r],0),new vn([s,i],0)]}class Nl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hs(`Invalid padding: ${n}`);if(r<0)throw new hs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=vn.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(vn.fromNumber(r)));return s.compare(GI)===1&&(s=new vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=gh(t),[r,s]=mh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Nl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=gh(t),[r,s]=mh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Hs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new So(rt.min(),s,new Dt(ct),nn(),ut())}}class Hs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Hs(r,n,ut(),ut(),ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class Sp{constructor(t,n){this.targetId=t,this.ge=n}}class Cp{constructor(t,n,r=Xt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _h{constructor(){this.pe=0,this.ye=yh(),this.we=Xt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=ut(),n=ut(),r=ut();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:et()}}),new Hs(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=yh()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,vt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class QI{constructor(t){this.ke=t,this.qe=new Map,this.Qe=nn(),this.$e=mi(),this.Ue=mi(),this.Ke=new Dt(ct)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:et()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(ja(i))if(r===0){const a=new X(i.path);this.ze(n,a,ae.newNoDocument(a,rt.min()))}else vt(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),u=l?this.nt(l,t,a):1;if(u!==0){this.Ye(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,f)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Sn(r).toUint8Array()}catch(u){if(u instanceof Jd)return Pr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Nl(a,s,i)}catch(u){return Pr(u instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&ja(l.target)){const u=new X(l.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,ae.newNoDocument(u,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=ut();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Xe(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new So(t,n,this.Ke,this.Qe,r);return this.Qe=nn(),this.$e=mi(),this.Ue=mi(),this.Ke=new Dt(ct),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new _h,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Ht(ct),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ht(ct),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||q("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new _h),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function mi(){return new Dt(X.comparator)}function yh(){return new Dt(X.comparator)}const YI={asc:"ASCENDING",desc:"DESCENDING"},XI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JI={and:"AND",or:"OR"};class ZI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function qa(e,t){return e.useProto3Json||Eo(t)?t:{value:t}}function Ji(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Pp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function tw(e,t){return Ji(e,t.toTimestamp())}function $e(e){return vt(!!e),rt.fromTimestamp(function(n){const r=Rn(n);return new jt(r.seconds,r.nanos)}(e))}function Ol(e,t){return za(e,t).canonicalString()}function za(e,t){const n=function(s){return new Pt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Vp(e){const t=Pt.fromString(e);return vt(kp(t)),t}function Ka(e,t){return Ol(e.databaseId,t.path)}function da(e,t){const n=Vp(t);if(n.get(1)!==e.databaseId.projectId)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new X(xp(n))}function Dp(e,t){return Ol(e.databaseId,t)}function ew(e){const t=Vp(e);return t.length===4?Pt.emptyPath():xp(t)}function Wa(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xp(e){return vt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function vh(e,t,n){return{name:Ka(e,t),fields:n.value.mapValue.fields}}function nw(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:et()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(vt(d===void 0||typeof d=="string"),Xt.fromBase64String(d||"")):(vt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?N.UNKNOWN:Rp(f.code);return new Y(d,f.message||"")}(a);n=new Cp(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=da(e,r.document.name),i=$e(r.document.updateTime),a=r.document.createTime?$e(r.document.createTime):rt.min(),l=new Ae({mapValue:{fields:r.document.fields}}),u=ae.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new Pi(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=da(e,r.document),i=r.readTime?$e(r.readTime):rt.min(),a=ae.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Pi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=da(e,r.document),i=r.removedTargetIds||[];n=new Pi([],i,s,null)}else{if(!("filter"in t))return et();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new KI(s,i),l=r.targetId;n=new Sp(l,a)}}return n}function rw(e,t){let n;if(t instanceof js)n={update:vh(e,t.key,t.value)};else if(t instanceof bp)n={delete:Ka(e,t.key)};else if(t instanceof or)n={update:vh(e,t.key,t.data),updateMask:fw(t.fieldMask)};else{if(!(t instanceof HI))return et();n={verify:Ka(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ks)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ms)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw et()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:et()}(e,t.precondition)),n}function sw(e,t){return e&&e.length>0?(vt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?$e(s.updateTime):$e(i);return a.isEqual(rt.min())&&(a=$e(i)),new BI(a,s.transformResults||[])}(n,t))):[]}function iw(e,t){return{documents:[Dp(e,t.path)]}}function ow(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dp(e,s);const i=function(f){if(f.length!==0)return Op(qe.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(I){return{field:Er(I.field),direction:cw(I.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=qa(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:n,parent:s}}function aw(e){let t=ew(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){vt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const I=Np(g);return I instanceof qe&&lp(I)?I.getFilters():[I]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(I=>function(D){return new Qi(Tr(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(I))}(n.orderBy));let l=null;n.limit&&(l=function(g){let I;return I=typeof g=="object"?g.value:g,Eo(I)?null:I}(n.limit));let u=null;n.startAt&&(u=function(g){const I=!!g.before,R=g.values||[];return new Gi(R,I)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const I=!g.before,R=g.values||[];return new Gi(R,I)}(n.endAt)),RI(t,s,a,i,l,"F",u,f)}function lw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Np(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Tr(n.unaryFilter.field);return $t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(n.unaryFilter.field);return $t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(n.unaryFilter.field);return $t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tr(n.unaryFilter.field);return $t.create(a,"!=",{nullValue:"NULL_VALUE"});default:return et()}}(e):e.fieldFilter!==void 0?function(n){return $t.create(Tr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return et()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return qe.create(n.compositeFilter.filters.map(r=>Np(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return et()}}(n.compositeFilter.op))}(e):et()}function cw(e){return YI[e]}function uw(e){return XI[e]}function hw(e){return JI[e]}function Er(e){return{fieldPath:e.canonicalString()}}function Tr(e){return Qt.fromServerFormat(e.fieldPath)}function Op(e){return e instanceof $t?function(n){if(n.op==="=="){if(oh(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NAN"}};if(ih(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oh(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NAN"}};if(ih(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(n.field),op:uw(n.op),value:n.value}}}(e):e instanceof qe?function(n){const r=n.getFilters().map(s=>Op(s));return r.length===1?r[0]:{compositeFilter:{op:hw(n.op),filters:r}}}(e):et()}function fw(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function kp(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,n,r,s,i=rt.min(),a=rt.min(),l=Xt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new pn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t){this.Tt=t}}function pw(e){const t=aw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ha(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.Tn=new mw}addToCollectionParentIndex(t,n){return this.Tn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(bn.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(bn.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class mw{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ht(Pt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ht(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mp=41943040;class ge{static withCacheSize(t){return new ge(t,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.DEFAULT_COLLECTION_PERCENTILE=10,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ge.DEFAULT=new ge(Mp,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ge.DISABLED=new ge(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Nr(0)}static Kn(){return new Nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="LruGarbageCollector",_w=1048576;function Ih([e,t],[n,r]){const s=ct(e,n);return s===0?ct(t,r):s}class yw{constructor(t){this.Hn=t,this.buffer=new Ht(Ih),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ih(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vw{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){q(Th,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ur(n)?q(Th,"Ignoring IndexedDB error during garbage collection: ",n):await Fr(n)}await this.er(3e5)})}}class Ew{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return V.resolve(vo.ae);const r=new yw(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Eh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eh):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(t,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(f=Date.now(),yr()<=dt.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Tw(e,t){return new Ew(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.changes=new ir(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ws(r.mutation,s,Ce.empty(),jt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ut()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ut()){const s=Wn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=us();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Wn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ut()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=nn();const a=Is(),l=function(){return Is()}();return n.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof or)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),ws(d.mutation,f,d.mutation.getFieldMask(),jt.now())):a.set(f.key,Ce.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var g;return l.set(f,new ww(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Is();let s=new Dt((a,l)=>a-l),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||Ce.empty();d=l.applyToLocalView(f,d),r.set(u,d);const g=(s.get(l.batchId)||ut()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,g=_p();d.forEach(I=>{if(!i.has(I)){const R=wp(n.get(I),r.get(I));R!==null&&g.set(I,R),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):SI(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(Wn());let l=Ds,u=i;return a.next(f=>V.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(I=>{u=u.insert(d,I)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,u,f,ut())).next(d=>({batchId:l,changes:mp(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new X(n)).next(r=>{let s=us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=us();return this.indexManager.getCollectionParents(t,i).next(l=>V.forEach(l,u=>{const f=function(g,I){return new Io(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,ae.newInvalidDocument(d)))});let l=us();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&ws(d.mutation,f,Ce.empty(),jt.now()),Ao(n,f)&&(l=l.insert(u,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$e(s.createTime)}}(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:pw(s.bundledQuery),readTime:$e(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.overlays=new Dt(X.comparator),this.Rr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Wn();return V.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=Wn(),i=n.length+1,a=new X(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Dt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Wn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Wn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return V.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zI(n,r));let i=this.Rr.get(n);i===void 0&&(i=ut(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Vr=new Ht(qt.mr),this.gr=new Ht(qt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new qt(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new qt(t,n))}Sr(t,n){t.forEach(r=>this.removeReference(r,n))}br(t){const n=new X(new Pt([])),r=new qt(n,t),s=new qt(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new X(new Pt([])),r=new qt(n,t),s=new qt(n,t+1);let i=ut();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new qt(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class qt{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return X.comparator(t.key,n.key)||ct(t.Cr,n.Cr)}static pr(t,n){return ct(t.Cr,n.Cr)||X.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ht(qt.mr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new qt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Rl:this.Fr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new qt(n,0),s=new qt(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ht(ct);return n.forEach(s=>{const i=new qt(s,0),a=new qt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new qt(new X(i),0);let l=new Ht(ct);return this.Mr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Cr)),!0)},a),V.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){vt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,s=>{const i=new qt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new qt(n,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t){this.kr=t,this.docs=function(){return new Dt(X.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(t,n){let r=nn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ae.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=nn();const a=n.path,l=new X(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||sI(rI(d),r)<=0||(s.has(d.key)||Ao(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){et()}qr(t,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Vw(this)}getSize(t){return V.resolve(this.size)}}class Vw extends Iw{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t){this.persistence=t,this.Qr=new ir(n=>Pl(n),Vl),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.$r=0,this.Ur=new kl,this.targetCount=0,this.Kr=Nr.Un()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new Nr(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.zn(n),V.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this.Ur.yr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ur.vr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new vo(0),this.zr=!1,this.zr=!0,this.jr=new Sw,this.referenceDelegate=t(this),this.Hr=new Dw(this),this.indexManager=new gw,this.remoteDocumentCache=function(s){return new Pw(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new dw(n),this.Yr=new bw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Rw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new Cw(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){q("MemoryPersistence","Starting transaction:",t);const s=new xw(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class xw extends oI{constructor(t){super(),this.currentSequenceNumber=t}}class Ml{constructor(t){this.persistence=t,this.ti=new kl,this.ni=null}static ri(t){return new Ml(t)}get ii(){if(this.ni)return this.ni;throw et()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=X.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,rt.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Zi{constructor(t,n){this.persistence=t,this.oi=new ir(r=>cI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Tw(this,n)}static ri(t,n){return new Zi(t,n)}Zr(){}Xr(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return V.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,rt.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ri(t.data.value)),n}ar(t,n,r){return V.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=ut(),s=ut();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Yy()?8:aI(Wy())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Nw;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(yr()<=dt.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(yr()<=dt.DEBUG&&q("QueryEngine","Query:",vr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(yr()<=dt.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Be(n))):V.resolve())}rs(t,n){if(uh(n))return V.resolve(null);let r=Be(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ha(n,null,"F"),r=Be(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ut(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.cs(n,l);return this.ls(n,f,a,u.readTime)?this.rs(t,Ha(n,null,"F")):this.hs(t,f,n,u)}))})))}ss(t,n,r,s){return uh(n)||s.isEqual(rt.min())?V.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?V.resolve(null):(yr()<=dt.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vr(n)),this.hs(t,a,n,nI(s,Ds)).next(l=>l))})}cs(t,n){let r=new Ht(pp(t));return n.forEach((s,i)=>{Ao(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return yr()<=dt.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vr(n)),this.ns.getDocumentsMatchingQuery(t,n,bn.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="LocalStore",kw=3e8;class Mw{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Dt(ct),this.Is=new ir(i=>Pl(i),Vl),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Aw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function Lw(e,t,n,r){return new Mw(e,t,n,r)}async function Fp(e,t){const n=st(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ut();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function Fw(e,t){const n=st(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,f,d){const g=f.batch,I=g.keys();let R=V.resolve();return I.forEach(D=>{R=R.next(()=>d.getEntry(u,D)).next(L=>{const F=f.docVersions.get(D);vt(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),d.addEntry(L)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ut();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Up(e){const t=st(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function Uw(e,t){const n=st(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((d,g)=>{const I=s.get(g);if(!I)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,g)));let R=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(Xt.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(L,F,K){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=kw?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(I,R,d)&&l.push(n.Hr.updateTargetData(i,R))});let u=nn(),f=ut();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Bw(i,a,t.documentUpdates).next(d=>{u=d.Vs,f=d.fs})),!r.isEqual(rt.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(g=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(n.Ts=s,i))}function Bw(e,t,n){let r=ut(),s=ut();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=nn();return n.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(rt.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):q(Fl,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function $w(e,t){const n=st(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Rl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jw(e,t){const n=st(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new pn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function Ga(e,t,n){const r=st(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ur(a))throw a;q(Fl,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function wh(e,t,n){const r=st(e);let s=rt.min(),i=ut();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const g=st(u),I=g.Is.get(d);return I!==void 0?V.resolve(g.Ts.get(I)):g.Hr.getTargetData(f,d)}(r,a,Be(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:rt.min(),n?i:ut())).next(l=>(Hw(r,PI(t),l),{documents:l,gs:i})))}function Hw(e,t,n){let r=e.Es.get(t)||rt.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class Ah{constructor(){this.activeTargetIds=kI()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qw{constructor(){this.ho=new Ah,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ah,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="ConnectivityMonitor";class Rh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){q(bh,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){q(bh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i=null;function Qa(){return _i===null?_i=function(){return 268435456+Math.round(2147483648*Math.random())}():_i++,"0x"+_i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RestConnection",Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ww{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,n,r,s,i){const a=Qa(),l=this.bo(t,n.toUriEncodedString());q(pa,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(t,l,u,r).then(f=>(q(pa,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Pr(pa,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,n,r,s,i,a){return this.So(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}bo(t,n){const r=Kw[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="WebChannelConnection";class Qw extends Ww{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=Qa();return new Promise((a,l)=>{const u=new jd;u.setWithCredentials(!0),u.listenOnce(Hd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bi.NO_ERROR:const d=u.getResponseJson();q(ne,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case bi.TIMEOUT:q(ne,`RPC '${t}' ${i} timed out`),l(new Y(N.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const g=u.getStatus();if(q(ne,`RPC '${t}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const D=function(F){const K=F.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(K)>=0?K:N.UNKNOWN}(R.status);l(new Y(D,R.message))}else l(new Y(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(N.UNAVAILABLE,"Connection failed."));break;default:et()}}finally{q(ne,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);q(ne,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",f,r,15)})}Wo(t,n,r){const s=Qa(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Kd(),l=zd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");q(ne,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);let I=!1,R=!1;const D=new Gw({Fo:F=>{R?q(ne,`Not sending because RPC '${t}' stream ${s} is closed:`,F):(I||(q(ne,`Opening RPC '${t}' stream ${s} transport.`),g.open(),I=!0),q(ne,`RPC '${t}' stream ${s} sending:`,F),g.send(F))},Mo:()=>g.close()}),L=(F,K,G)=>{F.listen(K,Q=>{try{G(Q)}catch(z){setTimeout(()=>{throw z},0)}})};return L(g,cs.EventType.OPEN,()=>{R||(q(ne,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),L(g,cs.EventType.CLOSE,()=>{R||(R=!0,q(ne,`RPC '${t}' stream ${s} transport closed`),D.Uo())}),L(g,cs.EventType.ERROR,F=>{R||(R=!0,Pr(ne,`RPC '${t}' stream ${s} transport errored:`,F),D.Uo(new Y(N.UNAVAILABLE,"The operation could not be completed")))}),L(g,cs.EventType.MESSAGE,F=>{var K;if(!R){const G=F.data[0];vt(!!G);const Q=G,z=(Q==null?void 0:Q.error)||((K=Q[0])===null||K===void 0?void 0:K.error);if(z){q(ne,`RPC '${t}' stream ${s} received error:`,z);const lt=z.status;let Et=function(_){const E=Mt[_];if(E!==void 0)return Rp(E)}(lt),w=z.message;Et===void 0&&(Et=N.INTERNAL,w="Unknown error status: "+lt+" with message "+z.message),R=!0,D.Uo(new Y(Et,w)),g.close()}else q(ne,`RPC '${t}' stream ${s} received:`,G),D.Ko(G)}}),L(l,qd.STAT_EVENT,F=>{F.stat===La.PROXY?q(ne,`RPC '${t}' stream ${s} detected buffering proxy`):F.stat===La.NOPROXY&&q(ne,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e){return new ZI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="PersistentStream";class $p{constructor(t,n,r,s,i,a,l,u){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Bp(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new Y(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return q(Sh,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(q(Sh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yw extends $p{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=nw(this.serializer,t),r=function(i){if(!("targetChange"in i))return rt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?rt.min():a.readTime?$e(a.readTime):rt.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=Wa(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=ja(u)?{documents:iw(i,u)}:{query:ow(i,u).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Pp(i,a.resumeToken);const f=qa(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(rt.min())>0){l.readTime=Ji(i,a.snapshotVersion.toTimestamp());const f=qa(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=lw(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=Wa(this.serializer),n.removeTarget=t,this.I_(n)}}class Xw extends $p{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return vt(!!t.streamToken),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=sw(t.writeResults,t.commitTime),r=$e(t.commitTime);return this.listener.v_(r,n)}C_(){const t={};t.database=Wa(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>rw(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{}class Zw extends Jw{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(t,za(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(N.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,za(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(N.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class tA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(en(n),this.N_=!1):q("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="RemoteStore";class eA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{ar(this)&&(q(er,"Restarting streams for network reachability change."),await async function(u){const f=st(u);f.W_.add(4),await qs(f),f.j_.set("Unknown"),f.W_.delete(4),await Po(f)}(this))})}),this.j_=new tA(r,s)}}async function Po(e){if(ar(e))for(const t of e.G_)await t(!0)}async function qs(e){for(const t of e.G_)await t(!1)}function jp(e,t){const n=st(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),jl(n)?$l(n):Br(n).c_()&&Bl(n,t))}function Ul(e,t){const n=st(e),r=Br(n);n.K_.delete(t),r.c_()&&Hp(n,t),n.K_.size===0&&(r.c_()?r.P_():ar(n)&&n.j_.set("Unknown"))}function Bl(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Br(e).y_(t)}function Hp(e,t){e.H_.Ne(t),Br(e).w_(t)}function $l(e){e.H_=new QI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),Br(e).start(),e.j_.B_()}function jl(e){return ar(e)&&!Br(e).u_()&&e.K_.size>0}function ar(e){return st(e).W_.size===0}function qp(e){e.H_=void 0}async function nA(e){e.j_.set("Online")}async function rA(e){e.K_.forEach((t,n)=>{Bl(e,t)})}async function sA(e,t){qp(e),jl(e)?(e.j_.q_(t),$l(e)):e.j_.set("Unknown")}async function iA(e,t,n){if(e.j_.set("Online"),t instanceof Cp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){q(er,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await to(e,r)}else if(t instanceof Pi?e.H_.We(t):t instanceof Sp?e.H_.Ze(t):e.H_.je(t),!n.isEqual(rt.min()))try{const r=await Up(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.K_.get(f);d&&i.K_.set(f,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const d=i.K_.get(u);if(!d)return;i.K_.set(u,d.withResumeToken(Xt.EMPTY_BYTE_STRING,d.snapshotVersion)),Hp(i,u);const g=new pn(d.target,u,f,d.sequenceNumber);Bl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){q(er,"Failed to raise snapshot:",r),await to(e,r)}}async function to(e,t,n){if(!Ur(t))throw t;e.W_.add(1),await qs(e),e.j_.set("Offline"),n||(n=()=>Up(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{q(er,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Po(e)})}function zp(e,t){return t().catch(n=>to(e,n,t))}async function Vo(e){const t=st(e),n=Pn(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Rl;for(;oA(t);)try{const s=await $w(t.localStore,r);if(s===null){t.U_.length===0&&n.P_();break}r=s.batchId,aA(t,s)}catch(s){await to(t,s)}Kp(t)&&Wp(t)}function oA(e){return ar(e)&&e.U_.length<10}function aA(e,t){e.U_.push(t);const n=Pn(e);n.c_()&&n.S_&&n.b_(t.mutations)}function Kp(e){return ar(e)&&!Pn(e).u_()&&e.U_.length>0}function Wp(e){Pn(e).start()}async function lA(e){Pn(e).C_()}async function cA(e){const t=Pn(e);for(const n of e.U_)t.b_(n.mutations)}async function uA(e,t,n){const r=e.U_.shift(),s=xl.from(r,t,n);await zp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Vo(e)}async function hA(e,t){t&&Pn(e).S_&&await async function(r,s){if(function(a){return WI(a)&&a!==N.ABORTED}(s.code)){const i=r.U_.shift();Pn(r).h_(),await zp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vo(r)}}(e,t),Kp(e)&&Wp(e)}async function Ch(e,t){const n=st(e);n.asyncQueue.verifyOperationInProgress(),q(er,"RemoteStore received new credentials");const r=ar(n);n.W_.add(3),await qs(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Po(n)}async function fA(e,t){const n=st(e);t?(n.W_.delete(2),await Po(n)):t||(n.W_.add(2),await qs(n),n.j_.set("Unknown"))}function Br(e){return e.J_||(e.J_=function(n,r,s){const i=st(n);return i.M_(),new Yw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:nA.bind(null,e),No:rA.bind(null,e),Lo:sA.bind(null,e),p_:iA.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),jl(e)?$l(e):e.j_.set("Unknown")):(await e.J_.stop(),qp(e))})),e.J_}function Pn(e){return e.Y_||(e.Y_=function(n,r,s){const i=st(n);return i.M_(),new Xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:lA.bind(null,e),Lo:hA.bind(null,e),D_:cA.bind(null,e),v_:uA.bind(null,e)}),e.G_.push(async t=>{t?(e.Y_.h_(),await Vo(e)):(await e.Y_.stop(),e.U_.length>0&&(q(er,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Hl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(e,t){if(en("AsyncQueue",`${t}: ${e}`),Ur(e))return new Y(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static emptySet(t){return new Sr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=us(),this.sortedSet=new Dt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Sr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.Z_=new Dt(X.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):et():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Or{constructor(t,n,r,s,i,a,l,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Or(t,n,Sr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class pA{constructor(){this.queries=Vh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=st(n),i=s.queries;s.queries=Vh(),i.forEach((a,l)=>{for(const u of l.ta)u.onError(r)})})(this,new Y(N.ABORTED,"Firestore shutting down"))}}function Vh(){return new ir(e=>dp(e),wo)}async function gA(e,t){const n=st(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new dA,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=ql(a,`Initialization of query '${vr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&zl(n)}async function mA(e,t){const n=st(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _A(e,t){const n=st(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&zl(n)}function yA(e,t,n){const r=st(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function zl(e){e.ia.forEach(t=>{t.next()})}var Ya,Dh;(Dh=Ya||(Ya={}))._a="default",Dh.Cache="cache";class vA{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Or(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Or.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ya.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.key=t}}class Qp{constructor(t){this.key=t}}class EA{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ut(),this.mutatedKeys=ut(),this.ya=pp(t),this.wa=new Sr(this.ya)}get Sa(){return this.fa}ba(t,n){const r=n?n.Da:new Ph,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const I=s.get(d),R=Ao(this.query,g)?g:null,D=!!I&&this.mutatedKeys.has(I.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;I&&R?I.data.isEqual(R.data)?D!==L&&(r.track({type:3,doc:R}),F=!0):this.va(I,R)||(r.track({type:2,doc:R}),F=!0,(u&&this.ya(R,u)>0||f&&this.ya(R,f)<0)&&(l=!0)):!I&&R?(r.track({type:0,doc:R}),F=!0):I&&!R&&(r.track({type:1,doc:I}),F=!0,(u||f)&&(l=!0)),F&&(R?(a=a.add(R),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((d,g)=>function(R,D){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et()}};return L(R)-L(D)}(d.type,g.type)||this.ya(d.doc,g.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,f=u!==this.ga;return this.ga=u,a.length!==0||f?{snapshot:new Or(this.query,t.wa,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Ph,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=ut(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new Qp(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new Gp(r))}),n}Oa(t){this.fa=t.gs,this.pa=ut();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Or.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Kl="SyncEngine";class TA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class IA{constructor(t){this.key=t,this.Ba=!1}}class wA{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ir(l=>dp(l),wo),this.qa=new Map,this.Qa=new Set,this.$a=new Dt(X.comparator),this.Ua=new Map,this.Ka=new kl,this.Wa={},this.Ga=new Map,this.za=Nr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function AA(e,t,n=!0){const r=eg(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Yp(r,t,n,!0),s}async function bA(e,t){const n=eg(e);await Yp(n,t,!0,!1)}async function Yp(e,t,n,r){const s=await jw(e.localStore,Be(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await RA(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&jp(e.remoteStore,s),l}async function RA(e,t,n,r,s){e.Ha=(g,I,R)=>async function(L,F,K,G){let Q=F.view.ba(K);Q.ls&&(Q=await wh(L.localStore,F.query,!1).then(({documents:w})=>F.view.ba(w,Q)));const z=G&&G.targetChanges.get(F.targetId),lt=G&&G.targetMismatches.get(F.targetId)!=null,Et=F.view.applyChanges(Q,L.isPrimaryClient,z,lt);return Nh(L,F.targetId,Et.Ma),Et.snapshot}(e,g,I,R);const i=await wh(e.localStore,t,!0),a=new EA(t,i.gs),l=a.ba(i.documents),u=Hs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,u);Nh(e,n,f.Ma);const d=new TA(t,n,a);return e.ka.set(t,d),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),f.snapshot}async function SA(e,t,n){const r=st(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!wo(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ga(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ul(r.remoteStore,s.targetId),Xa(r,s.targetId)}).catch(Fr)):(Xa(r,s.targetId),await Ga(r.localStore,s.targetId,!0))}async function CA(e,t){const n=st(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ul(n.remoteStore,r.targetId))}async function PA(e,t,n){const r=MA(e);try{const s=await function(a,l){const u=st(a),f=jt.now(),d=l.reduce((R,D)=>R.add(D.key),ut());let g,I;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=nn(),L=ut();return u.ds.getEntries(R,d).next(F=>{D=F,D.forEach((K,G)=>{G.isValidDocument()||(L=L.add(K))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(F=>{g=F;const K=[];for(const G of l){const Q=jI(G,g.get(G.key).overlayedDocument);Q!=null&&K.push(new or(G.key,Q,ip(Q.value.mapValue),Ze.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,K,l)}).next(F=>{I=F;const K=F.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(R,F.batchId,K)})}).then(()=>({batchId:I.batchId,changes:mp(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.Wa[a.currentUser.toKey()];f||(f=new Dt(ct)),f=f.insert(l,u),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,n),await zs(r,s.changes),await Vo(r.remoteStore)}catch(s){const i=ql(s,"Failed to persist write");n.reject(i)}}async function Xp(e,t){const n=st(e);try{const r=await Uw(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?vt(a.Ba):s.removedDocuments.size>0&&(vt(a.Ba),a.Ba=!1))}),await zs(n,r,t)}catch(r){await Fr(r)}}function xh(e,t,n){const r=st(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=st(a);u.onlineState=l;let f=!1;u.queries.forEach((d,g)=>{for(const I of g.ta)I.sa(l)&&(f=!0)}),f&&zl(u)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function VA(e,t,n){const r=st(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let a=new Dt(X.comparator);a=a.insert(i,ae.newNoDocument(i,rt.min()));const l=ut().add(i),u=new So(rt.min(),new Map,new Dt(ct),a,l);await Xp(r,u),r.$a=r.$a.remove(i),r.Ua.delete(t),Wl(r)}else await Ga(r.localStore,t,!1).then(()=>Xa(r,t,n)).catch(Fr)}async function DA(e,t){const n=st(e),r=t.batch.batchId;try{const s=await Fw(n.localStore,t);Zp(n,r,null),Jp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zs(n,s)}catch(s){await Fr(s)}}async function xA(e,t,n){const r=st(e);try{const s=await function(a,l){const u=st(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next(g=>(vt(g!==null),d=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,t);Zp(r,t,n),Jp(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zs(r,s)}catch(s){await Fr(s)}}function Jp(e,t){(e.Ga.get(t)||[]).forEach(n=>{n.resolve()}),e.Ga.delete(t)}function Zp(e,t,n){const r=st(e);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function Xa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(r=>{e.Ka.containsKey(r)||tg(e,r)})}function tg(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(Ul(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),Wl(e))}function Nh(e,t,n){for(const r of n)r instanceof Gp?(e.Ka.addReference(r.key,t),NA(e,r)):r instanceof Qp?(q(Kl,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||tg(e,r.key)):et()}function NA(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(q(Kl,"New document in limbo: "+n),e.Qa.add(r),Wl(e))}function Wl(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new X(Pt.fromString(t)),r=e.za.next();e.Ua.set(r,new IA(n)),e.$a=e.$a.insert(n,r),jp(e.remoteStore,new pn(Be(fp(n.path)),r,"TargetPurposeLimboResolution",vo.ae))}}async function zs(e,t,n){const r=st(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{a.push(r.Ha(u,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Ll.Yi(u.targetId,f);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,f){const d=st(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,I=>V.forEach(I.Hi,R=>d.persistence.referenceDelegate.addReference(g,I.targetId,R)).next(()=>V.forEach(I.Ji,R=>d.persistence.referenceDelegate.removeReference(g,I.targetId,R)))))}catch(g){if(!Ur(g))throw g;q(Fl,"Failed to update sequence numbers: "+g)}for(const g of f){const I=g.targetId;if(!g.fromCache){const R=d.Ts.get(I),D=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(D);d.Ts=d.Ts.insert(I,L)}}}(r.localStore,i))}async function OA(e,t){const n=st(e);if(!n.currentUser.isEqual(t)){q(Kl,"User change. New user:",t.toKey());const r=await Fp(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(u=>{u.reject(new Y(N.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zs(n,r.Rs)}}function kA(e,t){const n=st(e),r=n.Ua.get(t);if(r&&r.Ba)return ut().add(r.key);{let s=ut();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function eg(e){const t=st(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=kA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=VA.bind(null,t),t.La.p_=_A.bind(null,t.eventManager),t.La.Ja=yA.bind(null,t.eventManager),t}function MA(e){const t=st(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=DA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xA.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Co(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return Lw(this.persistence,new Ow,t.initialUser,this.serializer)}Xa(t){return new Lp(Ml.ri,this.serializer)}Za(t){return new qw}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class LA extends eo{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){vt(this.persistence.referenceDelegate instanceof Zi);const r=this.persistence.referenceDelegate.garbageCollector;return new vw(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ge.withCacheSize(this.cacheSizeBytes):ge.DEFAULT;return new Lp(r=>Zi.ri(r,n),this.serializer)}}class Ja{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OA.bind(null,this.syncEngine),await fA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pA}()}createDatastore(t){const n=Co(t.databaseInfo.databaseId),r=function(i){return new Qw(i)}(t.databaseInfo);return function(i,a,l,u){return new Zw(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new eA(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>xh(this.syncEngine,n,0),function(){return Rh.D()?new Rh:new zw}())}createSyncEngine(t,n){return function(s,i,a,l,u,f,d){const g=new wA(s,i,a,l,u,f);return d&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=st(s);q(er,"RemoteStore shutting down."),i.W_.add(5),await qs(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ja.provider={build:()=>new Ja};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):en("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class UA{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q(Vn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(Vn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ql(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ma(e,t){e.asyncQueue.verifyOperationInProgress(),q(Vn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Oh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await BA(e);q(Vn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Ch(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Ch(t.remoteStore,s)),e._onlineComponents=t}async function BA(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){q(Vn,"Using user provided OfflineComponentProvider");try{await ma(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await ma(e,new eo)}}else q(Vn,"Using default OfflineComponentProvider"),await ma(e,new LA(void 0));return e._offlineComponents}async function ng(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(q(Vn,"Using user provided OnlineComponentProvider"),await Oh(e,e._uninitializedComponentsProvider._online)):(q(Vn,"Using default OnlineComponentProvider"),await Oh(e,new Ja))),e._onlineComponents}function $A(e){return ng(e).then(t=>t.syncEngine)}async function jA(e){const t=await ng(e),n=t.eventManager;return n.onListen=AA.bind(null,t.syncEngine),n.onUnlisten=SA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=bA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=CA.bind(null,t.syncEngine),n}function HA(e,t,n={}){const r=new En;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const d=new FA({next:I=>{d.su(),a.enqueueAndForget(()=>mA(i,g)),I.fromCache&&u.source==="server"?f.reject(new Y(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(I)},error:I=>f.reject(I)}),g=new vA(l,d,{includeMetadataChanges:!0,Ta:!0});return gA(i,g)}(await jA(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e,t,n){if(!n)throw new Y(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qA(e,t,n,r){if(t===!0&&r===!0)throw new Y(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Mh(e){if(!X.isDocumentKey(e))throw new Y(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Lh(e){if(X.isDocumentKey(e))throw new Y(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Gl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":et()}function no(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Y(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(e);throw new Y(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="firestore.googleapis.com",Fh=!0;class Uh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Y(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ig,this.ssl=Fh}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Fh;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Mp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_w)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Do{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WT;switch(r.type){case"firstParty":return new XT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kh.get(n);r&&(q("ComponentProvider","Removing Datastore"),kh.delete(n),r.terminate())}(this),Promise.resolve()}}function zA(e,t,n,r={}){var s;const i=(e=no(e,Do))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;i.host!==ig&&i.host!==l&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ps(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=se.MOCK_USER;else{f=Ky(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new se(g)}e._authCredentials=new GT(new Wd(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xo(this.firestore,t,this._query)}}class Ve{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ve(this.firestore,t,this._key)}}class Tn extends xo{constructor(t,n,r){super(t,n,fp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ve(this.firestore,null,new X(t))}withConverter(t){return new Tn(this.firestore,t,this._path)}}function is(e,t,...n){if(e=Xn(e),sg("collection","path",t),e instanceof Do){const r=Pt.fromString(t,...n);return Lh(r),new Tn(e,null,r)}{if(!(e instanceof Ve||e instanceof Tn))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return Lh(r),new Tn(e.firestore,null,r)}}function KA(e,t,...n){if(e=Xn(e),arguments.length===1&&(t=Qd.newId()),sg("doc","path",t),e instanceof Do){const r=Pt.fromString(t,...n);return Mh(r),new Ve(e,null,new X(r))}{if(!(e instanceof Ve||e instanceof Tn))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return Mh(r),new Ve(e.firestore,e instanceof Tn?e.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="AsyncQueue";class $h{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Bp(this,"async_queue_retry"),this.Su=()=>{const r=ga();r&&q(Bh,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const n=ga();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=ga();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new En;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ur(t))throw t;q(Bh,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw en("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=Hl.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&et()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Ql extends Do{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new $h,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $h(t),this._firestoreClient=void 0,await t}}}function WA(e,t){const n=typeof e=="object"?e:md(),r=typeof e=="string"?e:Ki,s=$s(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qy("firestore");i&&zA(s,...i)}return s}function og(e){if(e._terminated)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||GA(e),e._firestoreClient}function GA(e){var t,n,r;const s=e._freezeSettings(),i=function(l,u,f,d){return new fI(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,rg(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new UA(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kr(Xt.fromBase64String(t))}catch(n){throw new Y(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new kr(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Y(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Y(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Y(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=/^__.*__$/;class YA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new or(t,this.data,this.fieldMask,n,this.fieldTransforms):new js(t,this.data,n,this.fieldTransforms)}}function lg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et()}}class Zl{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Zl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return ro(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(lg(this.Lu)&&QA.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class XA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Co(t)}ju(t,n,r,s=!1){return new Zl({Lu:t,methodName:n,zu:r,path:Qt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JA(e){const t=e._freezeSettings(),n=Co(e._databaseId);return new XA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ZA(e,t,n,r,s,i={}){const a=e.ju(i.merge||i.mergeFields?2:0,t,n,s);fg("Data must be an object, but it was:",a,r);const l=ug(r,a);let u,f;if(i.merge)u=new Ce(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const I=t0(t,g,n);if(!a.contains(I))throw new Y(N.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);n0(d,I)||d.push(I)}u=new Ce(d),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new YA(new Ae(l),u,f)}function cg(e,t){if(hg(e=Xn(e)))return fg("Unsupported field value:",t,e),ug(e,t);if(e instanceof ag)return function(r,s){if(!lg(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=cg(l,s.Ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Xn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=jt.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof jt){const i=new jt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof Xl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kr)return{bytesValue:Pp(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ol(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jl)return function(a,l){return{mapValue:{fields:{[rp]:{stringValue:sp},[Wi]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Wu("VectorValues must only contain numeric values.");return Dl(l.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Gl(r)}`)}(e,t)}function ug(e,t){const n={};return Xd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sr(e,(r,s)=>{const i=cg(s,t.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof jt||e instanceof Xl||e instanceof kr||e instanceof Ve||e instanceof ag||e instanceof Jl)}function fg(e,t,n){if(!hg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gl(n);throw r==="an object"?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function t0(e,t,n){if((t=Xn(t))instanceof Yl)return t._internalPath;if(typeof t=="string")return dg(e,t);throw ro("Field path arguments must be of type string or ",e,!1,void 0,n)}const e0=new RegExp("[~\\*/\\[\\]]");function dg(e,t,n){if(t.search(e0)>=0)throw ro(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yl(...t.split("."))._internalPath}catch{throw ro(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ro(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Y(N.INVALID_ARGUMENT,l+e+u)}function n0(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new r0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class r0 extends pg{data(){return super.data()}}function gg(e,t){return typeof t=="string"?dg(e,t):t instanceof Yl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Y(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i0{convertValue(t,n="none"){switch(Cn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Sn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw et()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return sr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[Wi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ot(a.doubleValue));return new Jl(i)}convertGeoPoint(t){return new Xl(Ot(t.latitude),Ot(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=To(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=Rn(t);return new jt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Pt.fromString(t);vt(kp(r));const s=new Ns(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||en(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class a0 extends pg{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(gg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vi extends a0{data(t={}){return super.data(t)}}class l0{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Vi(this._firestore,this._userDataWriter,r.key,r,new yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:c0(l.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function c0(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return et()}}class u0 extends i0{constructor(t){super(),this.firestore=t}convertBytes(t){return new kr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function vi(e){e=no(e,xo);const t=no(e.firestore,Ql),n=og(t),r=new u0(t);return s0(e._query),HA(n,e._query).then(s=>new l0(t,r,e,s))}function h0(e,t){const n=no(e.firestore,Ql),r=KA(e),s=o0(e.converter,t);return f0(n,[ZA(JA(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then(()=>r)}function f0(e,t){return function(r,s){const i=new En;return r.asyncQueue.enqueueAndForget(async()=>PA(await $A(r),s,i)),i.promise}(og(e),t)}(function(t,n=!0){(function(s){Lr=s})(sE),An(new $T("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ql(new QT(r.getProvider("auth-internal")),new JT(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Y(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ue(Wu,Gu,t),Ue(Wu,Gu,"esm2017")})();const d0={apiKey:"AIzaSyAaE8Y1XHoKdYsTHW1J242KnUxl3Qwcx5M",authDomain:"brew-and-save.firebaseapp.com",projectId:"brew-and-save",storageBucket:"brew-and-save.appspot.com",messagingSenderId:"441433611054",appId:"1:441433611054:web:3c17a604a48b1df2f9f8bf",measurementId:"G-MN9J98HL7F"},mg=gd(d0);LT(mg);const os=WA(mg),Ks=gy("BeverageStore",{state:()=>({temps:Au,currentTemp:Au[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",savedBeverages:[]}),actions:{async init(){try{const e=await vi(is(os,"bases")),t=await vi(is(os,"creamers")),n=await vi(is(os,"syrups"));this.bases=e.docs.map(r=>({id:r.id,...r.data()})),this.creamers=t.docs.map(r=>({id:r.id,...r.data()})),this.syrups=n.docs.map(r=>({id:r.id,...r.data()})),this.currentBase=this.bases[0]||null,this.currentCreamer=this.creamers[0]||null,this.currentSyrup=this.syrups[0]||null}catch(e){console.error("Error initializing beverage store:",e)}},async makeBeverage(){const e={id:crypto.randomUUID(),name:this.currentName,base:this.currentBase,syrup:this.currentSyrup,creamer:this.currentCreamer,temp:this.currentTemp};try{const t=await h0(is(os,"beverages"),e);e.id=t.id,this.savedBeverages.push(e),this.currentBeverage=e}catch(t){console.error("Error adding document: ",t)}},async fetchBeverages(){try{const e=await vi(is(os,"beverages"));this.savedBeverages=e.docs.map(t=>({id:t.id,...t.data()}))}catch(e){console.error("Error fetching beverages:",e)}},showBeverage(e){this.currentBeverage=e,this.currentName=e.name,this.currentBase=e.base,this.currentSyrup=e.syrup,this.currentCreamer=e.creamer,this.currentTemp=e.temp},resetStore(){this.$reset()}}}),p0=Us({__name:"Syrup",setup(e){const t=Ks();return(n,r)=>{var s;return yt(),Nt("div",{class:"syrup",style:Mr({"--texture-color":(s=It(t).currentSyrup)==null?void 0:s.color})},null,4)}}}),g0=rr(p0,[["__scopeId","data-v-969d30c3"]]),m0=Us({__name:"Base",setup(e){const t=Ks();return(n,r)=>{var s;return yt(),Nt("div",{class:"baseBeverage",style:Mr({backgroundColor:(s=It(t).currentBase)==null?void 0:s.color})},null,4)}}}),_0=rr(m0,[["__scopeId","data-v-f853ce7d"]]),y0={class:"froth"},v0=Us({__name:"Creamer",setup(e){const t=Ks();return(n,r)=>(yt(),Nt("div",y0,[(yt(),Nt(Lt,null,fn(5,()=>{var s;return re("div",{class:"foam",style:Mr({backgroundColor:(s=It(t).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),E0=rr(v0,[["__scopeId","data-v-416a324e"]]),T0={},I0={id:"steam"},w0={class:"stream"};function A0(e,t){return yt(),Nt("div",I0,[(yt(),Nt(Lt,null,fn(3,()=>re("div",w0)),64))])}const b0=rr(T0,[["render",A0]]),R0={},S0={id:"condensation"},C0={class:"flake"};function P0(e,t){return yt(),Nt("div",S0,[(yt(),Nt(Lt,null,fn(3,()=>re("div",C0)),64))])}const V0=rr(R0,[["render",P0]]),D0=Us({__name:"Beverage",props:{isIced:{type:Boolean}},setup(e){const t=Ks();return(n,r)=>(yt(),dn(Ny,null,{default:as(()=>[n.isIced?(yt(),dn(V0,{key:0})):(yt(),dn(b0,{key:1})),Ee(Py,null,{top:as(()=>{var s;return[((s=It(t).currentCreamer)==null?void 0:s.color)!=="transparent"?(yt(),dn(E0,{key:0})):Ra("",!0)]}),mid:as(()=>{var s;return[((s=It(t).currentSyrup)==null?void 0:s.color)!=="transparent"?(yt(),dn(g0,{key:0})):Ra("",!0)]}),bottom:as(()=>[Ee(_0)]),_:1})]),_:1}))}}),x0=["id","value"],N0=["id","value"],O0=["id","value"],k0=["id","value"],M0={key:0,id:"beverage-container"},L0=["id","value","onClick"],F0=Us({__name:"App",setup(e){const t=Ks();return Sf(()=>{t.init(),t.fetchBeverages()}),(n,r)=>(yt(),Nt("div",null,[Ee(D0,{isIced:It(t).currentTemp==="Cold"},null,8,["isIced"]),re("ul",null,[(yt(!0),Nt(Lt,null,fn(It(t).temps,s=>(yt(),Nt("label",{key:s},[dr(re("input",{type:"radio",name:"temperature",id:`r${s}`,value:s,"onUpdate:modelValue":r[0]||(r[0]=i=>It(t).currentTemp=i)},null,8,x0),[[ss,It(t).currentTemp]]),_r(" "+gr(s),1)]))),128))]),re("ul",null,[(yt(!0),Nt(Lt,null,fn(It(t).bases,s=>(yt(),Nt("label",{key:s.id},[dr(re("input",{type:"radio",name:"bases",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[1]||(r[1]=i=>It(t).currentBase=i)},null,8,N0),[[ss,It(t).currentBase]]),_r(" "+gr(s.name),1)]))),128))]),re("ul",null,[(yt(!0),Nt(Lt,null,fn(It(t).syrups,s=>(yt(),Nt("label",{key:s.id},[dr(re("input",{type:"radio",name:"syrups",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[2]||(r[2]=i=>It(t).currentSyrup=i)},null,8,O0),[[ss,It(t).currentSyrup]]),_r(" "+gr(s.name),1)]))),128))]),re("ul",null,[(yt(!0),Nt(Lt,null,fn(It(t).creamers,s=>(yt(),Nt("label",{key:s.id},[dr(re("input",{type:"radio",name:"creamers",id:`r${s.id}`,value:s,"onUpdate:modelValue":r[3]||(r[3]=i=>It(t).currentCreamer=i)},null,8,k0),[[ss,It(t).currentCreamer]]),_r(" "+gr(s.name),1)]))),128))]),dr(re("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":r[4]||(r[4]=s=>It(t).currentName=s)},null,512),[[ny,It(t).currentName]]),re("button",{onClick:r[5]||(r[5]=s=>It(t).makeBeverage())},"🍺 Make Beverage"),It(t).savedBeverages.length>0?(yt(),Nt("div",M0,[(yt(!0),Nt(Lt,null,fn(It(t).savedBeverages,s=>(yt(),Nt("label",{key:s.id},[dr(re("input",{type:"radio",name:"options",id:`r${s.name}`,value:s,"onUpdate:modelValue":r[6]||(r[6]=i=>It(t).currentBeverage=i),onClick:i=>It(t).showBeverage(s)},null,8,L0),[[ss,It(t).currentBeverage]]),_r(" "+gr(s.name),1)]))),128))])):Ra("",!0)]))}}),_g=cy();_g.use(by);oy(F0).use(_g).mount("#app");
