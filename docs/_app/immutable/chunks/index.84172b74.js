function x(){}const K=t=>t;function Tt(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function ot(){return Object.create(null)}function T(t){t.forEach(ut)}function O(t){return typeof t=="function"}function se(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let W;function re(t,e){return W||(W=document.createElement("a")),W.href=e,t===W.href}function Nt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function oe(t){let e;return ft(t,n=>e=n)(),e}function ce(t,e,n){t.$$.on_destroy.push(ft(e,n))}function le(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?Tt(n.ctx.slice(),t[1](i(e))):n.ctx}function ae(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ue(t,e,n,i,s,l){if(s){const r=_t(e,n,i,l);t.p(r,s)}}function fe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _e(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function de(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function he(t){const e={};for(const n in t)e[n]=!0;return e}function me(t,e,n){return t.set(n),e}function pe(t){return t&&O(t.destroy)?t.destroy:x}function ye(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const dt=typeof window<"u";let Q=dt?()=>window.performance.now():()=>Date.now(),et=dt?t=>requestAnimationFrame(t):x;const S=new Set;function ht(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&et(ht)}function U(t){let e;return S.size===0&&et(ht),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}const At=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in At;let V=!1;function Mt(){V=!0}function St(){V=!1}function Ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function jt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function Ot(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=nt("style");return Pt(mt(t),e),e.sheet}function Pt(t,e){return Ot(t.head||t,e),e.sheet}function Rt(t,e){if(V){for(jt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function qt(t,e,n){t.insertBefore(e,n||null)}function Bt(t,e,n){V&&!n?Rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function be(){return it(" ")}function xe(){return it("")}function $e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Dt=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Dt.indexOf(i)===-1?t[i]=e[i]:yt(t,i,e[i])}function zt(t,e){Object.keys(e).forEach(n=>{Ft(t,n,e[n])})}function Ft(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:yt(t,e,n)}function we(t){return/-/.test(t)?zt:Ht}function Wt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function bt(t,e,n,i,s=!1){gt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function xt(t,e,n,i){return bt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ve(t,e,n){return xt(t,e,n,nt)}function ke(t,e,n){return xt(t,e,n,pt)}function Gt(t,e){return bt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>it(e),!0)}function Ee(t){return Gt(t," ")}function ct(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Te(t,e){const n=ct(t,"HTML_TAG_START",0),i=ct(t,"HTML_TAG_END",n);if(n===i)return new lt(void 0,e);gt(t);const s=t.splice(n,i-n+1);R(s[0]),R(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new lt(l,e)}function Ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function Me(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Se(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Ce(t){return[].map.call(t.querySelectorAll(":checked"),e=>e.__value)}function je(t,e,n){t.classList[n?"add":"remove"](e)}function $t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class It{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=nt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)qt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}class lt extends It{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}}function Oe(t,e){return new t(e)}const I=new Map;let J=0;function Jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Kt(t,e){const n={stylesheet:Lt(e),rules:{}};return I.set(t,n),n}function q(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);a+=m*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Jt(f)}_${o}`,h=mt(t),{stylesheet:u,rules:d}=I.get(h)||Kt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,J+=1,_}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),J-=s,J||Qt())}function Qt(){et(()=>{J||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&R(e)}),I.clear())})}function Le(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:l=0,duration:r=300,easing:o=K,start:c=Q()+l,end:a=c+r,tick:f=x,css:_}=n(t,{from:e,to:s},i);let h=!0,u=!1,d;function p(){_&&(d=q(t,0,1,r,l,o,_)),l||(u=!0)}function m(){_&&B(t,d),h=!1}return U(y=>{if(!u&&y>=c&&(u=!0),u&&y>=a&&(f(1,0),m()),!h)return!1;if(u){const $=y-c,b=0+1*o($/r);f(b,1-b)}return!0}),p(),f(0,1),m}function Pe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ut(t,s)}}function Ut(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function P(t){D=t}function H(){if(!D)throw new Error("Function called outside component initialization");return D}function Re(t){H().$$.on_mount.push(t)}function qe(t){H().$$.after_update.push(t)}function Be(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=$t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function De(t,e){return H().$$.context.set(t,e),e}function He(t){return H().$$.context.get(t)}function ze(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],at=[];let C=[];const Z=[],wt=Promise.resolve();let tt=!1;function vt(){tt||(tt=!0,wt.then(kt))}function Fe(){return vt(),wt}function j(t){C.push(t)}function We(t){Z.push(t)}const Y=new Set;let A=0;function kt(){if(A!==0)return;const t=D;do{try{for(;A<M.length;){const e=M[A];A++,P(e),Vt(e.$$)}}catch(e){throw M.length=0,A=0,e}for(P(null),M.length=0,A=0;at.length;)at.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];Y.has(n)||(Y.add(n),n())}C.length=0}while(M.length);for(;Z.length;)Z.pop()();tt=!1,Y.clear(),P(t)}function Vt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function Xt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let L;function st(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function N(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const G=new Set;let E;function Ge(){E={r:0,c:[],p:E}}function Ie(){E.r||T(E.c),E=E.p}function Et(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Yt(t,e,n,i){if(t&&t.o){if(G.has(t))return;G.add(t),E.c.push(()=>{G.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt={duration:0};function Je(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function a(){r&&B(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=K,tick:p=x,css:m}=s||rt;m&&(r=q(t,0,1,u,h,d,m,c++)),p(0,1);const y=Q()+h,$=y+u;o&&o.abort(),l=!0,j(()=>N(t,!0,"start")),o=U(b=>{if(l){if(b>=$)return p(1,0),N(t,!0,"end"),a(),l=!1;if(b>=y){const w=d((b-y)/u);p(w,1-w)}}return l})}let _=!1;return{start(){_||(_=!0,B(t),O(s)?(s=s(i),st().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function Ke(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const o=E;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:_=K,tick:h=x,css:u}=s||rt;u&&(r=q(t,1,0,f,a,_,u));const d=Q()+a,p=d+f;j(()=>N(t,!1,"start")),U(m=>{if(l){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||T(o.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return l})}return O(s)?st().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),l&&(r&&B(t,r),l=!1)}}}function Qe(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&B(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=K,tick:y=x,css:$}=l||rt,b={start:Q()+d,b:u};u||(b.group=E,E.r+=1),o||c?c=b:($&&(f(),a=q(t,r,u,p,d,m,$)),u&&y(0,1),o=_(b,p),j(()=>N(t,u,"start")),U(w=>{if(c&&w>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),$&&(f(),a=q(t,r,o.b,o.duration,0,m,l.css))),o){if(w>=o.end)y(r=o.b,1-r),N(t,o.b,"end"),c||(o.b?f():--o.group.r||T(o.group.c)),o=null;else if(w>=o.start){const z=w-o.start;r=o.a+o.d*m(z/o.duration),y(r,1-r)}}return!!(o||c)}))}return{run(u){O(l)?st().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Zt(t,e){Yt(t,1,1,()=>{e.delete(t.key)})}function Ue(t,e){t.f(),Zt(t,e)}function Ve(t,e,n,i,s,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,$=new Map,b=[];for(d=u;d--;){const g=_(s,l,d),v=n(g);let k=r.get(v);k?i&&b.push(()=>k.p(g,e)):(k=a(v,g),k.c()),y.set(v,m[d]=k),v in p&&$.set(v,Math.abs(d-p[v]))}const w=new Set,z=new Set;function X(g){Et(g,1),g.m(o,f),r.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],k=g.key,F=v.key;g===v?(f=g.first,h--,u--):y.has(F)?!r.has(k)||w.has(k)?X(g):z.has(F)?h--:$.get(k)>$.get(F)?(z.add(k),X(g)):(w.add(F),h--):(c(v,r),h--)}for(;h--;){const g=t[h];y.has(g.key)||c(g,r)}for(;u;)X(m[u-1]);return T(b),m}function Xe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ye(t){return typeof t=="object"&&t!==null?t:{}}const te=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...te];function Ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function tn(t){t&&t.c()}function en(t,e){t&&t.l(e)}function ee(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||j(()=>{const r=t.$$.on_mount.map(ut).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),l.forEach(j)}function ne(t,e){const n=t.$$;n.fragment!==null&&(Xt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(t,e){t.$$.dirty[0]===-1&&(M.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nn(t,e,n,i,s,l,r,o=[-1]){const c=D;P(t);const a=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ot(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&ie(t,_)),h}):[],a.update(),f=!0,T(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Mt();const _=Wt(e.target);a.fragment&&a.fragment.l(_),_.forEach(R)}else a.fragment&&a.fragment.c();e.intro&&Et(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),St(),kt()}P(c)}class sn{$destroy(){ne(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as $,ee as A,ne as B,le as C,Rt as D,ue as E,fe as F,ae as G,he as H,Tt as I,_e as J,De as K,$e as L,T as M,de as N,Be as O,He as P,we as Q,Xe as R,sn as S,x as T,ft as U,me as V,ze as W,pt as X,ke as Y,Ht as Z,pe as _,be as a,O as a0,ce as a1,j as a2,Qe as a3,Ye as a4,Ae as a5,lt as a6,Te as a7,Ve as a8,Pe as a9,Ut as aa,Le as ab,Je as ac,Ke as ad,Ue as ae,ge as af,je as ag,Se as ah,Ce as ai,Ze as aj,We as ak,K as al,ye as am,oe as an,Bt as b,Ee as c,Yt as d,xe as e,Ie as f,Et as g,R as h,nn as i,qe as j,nt as k,ve as l,Wt as m,yt as n,Re as o,Me as p,it as q,Gt as r,se as s,Fe as t,Ne as u,Ge as v,at as w,Oe as x,tn as y,en as z};