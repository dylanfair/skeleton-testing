import{C as Be,S as $,i as ee,s as te,D as z,k as C,a as U,l as M,m as A,c as y,h as _,n as f,b as V,E as T,g as E,v as q,d as I,f as J,F as G,G as N,H as j,I as Ve,J as w,K as Q,L as Z,M as p,q as W,r as X,N as x,O as Oe,P as ne,Q as ue,R as ce,u as Ue,T as de,U as ye,V as ze,W as Ge,X as Ne,y as ae,z as se,A as ie,B as re}from"../chunks/index.753aac04.js";import{w as Y}from"../chunks/index.6e97cd35.js";const je=!0,zt=Object.freeze(Object.defineProperty({__proto__:null,prerender:je},Symbol.toStringTag,{value:"Module"}));Y(void 0);Y(void 0);function qe(){const{subscribe:i,set:e,update:t}=Y({});return{subscribe:i,set:e,update:t,open:l=>t(()=>({open:!0,...l})),close:()=>t(l=>(l.open=!1,l))}}qe();function Je(){const{subscribe:i,set:e,update:t}=Y([]);return{subscribe:i,set:e,update:t,trigger:l=>t(r=>(r.push(l),r)),close:()=>t(l=>(l.length>0&&l.shift(),l)),clear:()=>e([])}}Je();const We={message:"Missing Toast Message",autohide:!0,timeout:5e3};function Xe(){const i=Math.random();return Number(i).toString(32)}function we(i){if(i.autohide===!0)return setTimeout(()=>{Qe.close(i.id)},i.timeout)}function Ke(){const{subscribe:i,set:e,update:t}=Y([]);return{subscribe:i,trigger:l=>t(r=>{const a=Xe();l&&l.callback&&l.callback({id:a,status:"queued"});const s={...We,...l,id:a};return s.timeoutId=we(s),r.push(s),r}),close:l=>t(r=>{if(r.length>0){const a=r.findIndex(o=>o.id===l),s=r[a];s&&(s.callback&&s.callback({id:l,status:"closed"}),s.timeoutId&&clearTimeout(s.timeoutId),r.splice(a,1))}return r}),clear:()=>e([])}}const Qe=Ke(),le={};function he(i){return i==="local"?localStorage:sessionStorage}function oe(i,e,t){const l=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local",a=typeof window<"u"&&typeof document<"u";function s(o,n){a&&he(r).setItem(o,l.stringify(n))}if(!le[i]){const o=Y(e,g=>{const u=a?he(r).getItem(i):null;if(u&&g(l.parse(u)),a){const d=m=>{m.key===i&&g(m.newValue?l.parse(m.newValue):null)};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}}),{subscribe:n,set:k}=o;le[i]={set(g){s(i,g),k(g)},update(g){const u=g(Be(o));s(i,u),k(u)},subscribe:n}}return le[i]}oe("modeOsPrefers",!1);oe("modeUserPrefers",void 0);oe("modeCurrent",!1);const Ye=i=>({}),_e=i=>({}),Ze=i=>({}),ge=i=>({}),pe=i=>({}),me=i=>({});function be(i){let e,t,l;const r=i[22].lead,a=z(r,i,i[21],me);return{c(){e=C("div"),a&&a.c(),this.h()},l(s){e=M(s,"DIV",{class:!0});var o=A(e);a&&a.l(o),o.forEach(_),this.h()},h(){f(e,"class",t="app-bar-slot-lead "+i[4])},m(s,o){V(s,e,o),a&&a.m(e,null),l=!0},p(s,o){a&&a.p&&(!l||o&2097152)&&G(a,r,s,s[21],l?j(r,s[21],o,pe):N(s[21]),me),(!l||o&16&&t!==(t="app-bar-slot-lead "+s[4]))&&f(e,"class",t)},i(s){l||(E(a,s),l=!0)},o(s){I(a,s),l=!1},d(s){s&&_(e),a&&a.d(s)}}}function ve(i){let e,t,l;const r=i[22].trail,a=z(r,i,i[21],ge);return{c(){e=C("div"),a&&a.c(),this.h()},l(s){e=M(s,"DIV",{class:!0});var o=A(e);a&&a.l(o),o.forEach(_),this.h()},h(){f(e,"class",t="app-bar-slot-trail "+i[2])},m(s,o){V(s,e,o),a&&a.m(e,null),l=!0},p(s,o){a&&a.p&&(!l||o&2097152)&&G(a,r,s,s[21],l?j(r,s[21],o,Ze):N(s[21]),ge),(!l||o&4&&t!==(t="app-bar-slot-trail "+s[2]))&&f(e,"class",t)},i(s){l||(E(a,s),l=!0)},o(s){I(a,s),l=!1},d(s){s&&_(e),a&&a.d(s)}}}function ke(i){let e,t,l;const r=i[22].headline,a=z(r,i,i[21],_e);return{c(){e=C("div"),a&&a.c(),this.h()},l(s){e=M(s,"DIV",{class:!0});var o=A(e);a&&a.l(o),o.forEach(_),this.h()},h(){f(e,"class",t="app-bar-row-headline "+i[5])},m(s,o){V(s,e,o),a&&a.m(e,null),l=!0},p(s,o){a&&a.p&&(!l||o&2097152)&&G(a,r,s,s[21],l?j(r,s[21],o,Ye):N(s[21]),_e),(!l||o&32&&t!==(t="app-bar-row-headline "+s[5]))&&f(e,"class",t)},i(s){l||(E(a,s),l=!0)},o(s){I(a,s),l=!1},d(s){s&&_(e),a&&a.d(s)}}}function xe(i){let e,t,l,r,a,s,o,n,k,g,u=i[8].lead&&be(i);const d=i[22].default,m=z(d,i,i[21],null);let S=i[8].trail&&ve(i),R=i[8].headline&&ke(i);return{c(){e=C("div"),t=C("div"),u&&u.c(),l=U(),r=C("div"),m&&m.c(),s=U(),S&&S.c(),n=U(),R&&R.c(),this.h()},l(c){e=M(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var b=A(e);t=M(b,"DIV",{class:!0});var L=A(t);u&&u.l(L),l=y(L),r=M(L,"DIV",{class:!0});var O=A(r);m&&m.l(O),O.forEach(_),s=y(L),S&&S.l(L),L.forEach(_),n=y(b),R&&R.l(b),b.forEach(_),this.h()},h(){f(r,"class",a="app-bar-slot-default "+i[3]),f(t,"class",o="app-bar-row-main "+i[6]),f(e,"class",k="app-bar "+i[7]),f(e,"data-testid","app-bar"),f(e,"role","toolbar"),f(e,"aria-label",i[0]),f(e,"aria-labelledby",i[1])},m(c,b){V(c,e,b),T(e,t),u&&u.m(t,null),T(t,l),T(t,r),m&&m.m(r,null),T(t,s),S&&S.m(t,null),T(e,n),R&&R.m(e,null),g=!0},p(c,[b]){c[8].lead?u?(u.p(c,b),b&256&&E(u,1)):(u=be(c),u.c(),E(u,1),u.m(t,l)):u&&(q(),I(u,1,1,()=>{u=null}),J()),m&&m.p&&(!g||b&2097152)&&G(m,d,c,c[21],g?j(d,c[21],b,null):N(c[21]),null),(!g||b&8&&a!==(a="app-bar-slot-default "+c[3]))&&f(r,"class",a),c[8].trail?S?(S.p(c,b),b&256&&E(S,1)):(S=ve(c),S.c(),E(S,1),S.m(t,null)):S&&(q(),I(S,1,1,()=>{S=null}),J()),(!g||b&64&&o!==(o="app-bar-row-main "+c[6]))&&f(t,"class",o),c[8].headline?R?(R.p(c,b),b&256&&E(R,1)):(R=ke(c),R.c(),E(R,1),R.m(e,null)):R&&(q(),I(R,1,1,()=>{R=null}),J()),(!g||b&128&&k!==(k="app-bar "+c[7]))&&f(e,"class",k),(!g||b&1)&&f(e,"aria-label",c[0]),(!g||b&2)&&f(e,"aria-labelledby",c[1])},i(c){g||(E(u),E(m,c),E(S),E(R),g=!0)},o(c){I(u),I(m,c),I(S),I(R),g=!1},d(c){c&&_(e),u&&u.d(),m&&m.d(c),S&&S.d(),R&&R.d()}}}const $e="flex flex-col",et="grid items-center",tt="",lt="flex-none flex justify-between items-center",at="flex-auto",st="flex-none flex items-center space-x-4";function it(i,e,t){let l,r,a,s,o,n,{$$slots:k={},$$scope:g}=e;const u=Ve(k);let{background:d="bg-surface-100-800-token"}=e,{border:m=""}=e,{padding:S="p-4"}=e,{shadow:R=""}=e,{spacing:c="space-y-4"}=e,{gridColumns:b="grid-cols-[auto_1fr_auto]"}=e,{gap:L="gap-4"}=e,{regionRowMain:O=""}=e,{regionRowHeadline:B=""}=e,{slotLead:D=""}=e,{slotDefault:h=""}=e,{slotTrail:v=""}=e,{label:H=""}=e,{labelledby:F=""}=e;return i.$$set=P=>{t(23,e=w(w({},e),Q(P))),"background"in P&&t(9,d=P.background),"border"in P&&t(10,m=P.border),"padding"in P&&t(11,S=P.padding),"shadow"in P&&t(12,R=P.shadow),"spacing"in P&&t(13,c=P.spacing),"gridColumns"in P&&t(14,b=P.gridColumns),"gap"in P&&t(15,L=P.gap),"regionRowMain"in P&&t(16,O=P.regionRowMain),"regionRowHeadline"in P&&t(17,B=P.regionRowHeadline),"slotLead"in P&&t(18,D=P.slotLead),"slotDefault"in P&&t(19,h=P.slotDefault),"slotTrail"in P&&t(20,v=P.slotTrail),"label"in P&&t(0,H=P.label),"labelledby"in P&&t(1,F=P.labelledby),"$$scope"in P&&t(21,g=P.$$scope)},i.$$.update=()=>{t(7,l=`${$e} ${d} ${m} ${c} ${S} ${R} ${e.class??""}`),i.$$.dirty&114688&&t(6,r=`${et} ${b} ${L} ${O}`),i.$$.dirty&131072&&t(5,a=`${tt} ${B}`),i.$$.dirty&262144&&t(4,s=`${lt} ${D}`),i.$$.dirty&524288&&t(3,o=`${at} ${h}`),i.$$.dirty&1048576&&t(2,n=`${st} ${v}`)},e=Q(e),[H,F,n,o,s,a,r,l,u,d,m,S,R,c,b,L,O,B,D,h,v,g,k]}class rt extends ${constructor(e){super(),ee(this,e,it,xe,te,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const ot=i=>({}),Ee=i=>({}),ft=i=>({}),Se=i=>({}),nt=i=>({}),Re=i=>({}),ut=i=>({}),He=i=>({}),ct=i=>({}),Pe=i=>({}),dt=i=>({}),Le=i=>({});function Ie(i){let e,t,l;const r=i[18].header,a=z(r,i,i[17],Le);return{c(){e=C("header"),a&&a.c(),this.h()},l(s){e=M(s,"HEADER",{id:!0,class:!0});var o=A(e);a&&a.l(o),o.forEach(_),this.h()},h(){f(e,"id","shell-header"),f(e,"class",t="flex-none "+i[7])},m(s,o){V(s,e,o),a&&a.m(e,null),l=!0},p(s,o){a&&a.p&&(!l||o&131072)&&G(a,r,s,s[17],l?j(r,s[17],o,dt):N(s[17]),Le),(!l||o&128&&t!==(t="flex-none "+s[7]))&&f(e,"class",t)},i(s){l||(E(a,s),l=!0)},o(s){I(a,s),l=!1},d(s){s&&_(e),a&&a.d(s)}}}function De(i){let e,t;const l=i[18].sidebarLeft,r=z(l,i,i[17],Pe);return{c(){e=C("aside"),r&&r.c(),this.h()},l(a){e=M(a,"ASIDE",{id:!0,class:!0});var s=A(e);r&&r.l(s),s.forEach(_),this.h()},h(){f(e,"id","sidebar-left"),f(e,"class",i[6])},m(a,s){V(a,e,s),r&&r.m(e,null),t=!0},p(a,s){r&&r.p&&(!t||s&131072)&&G(r,l,a,a[17],t?j(l,a[17],s,ct):N(a[17]),Pe),(!t||s&64)&&f(e,"class",a[6])},i(a){t||(E(r,a),t=!0)},o(a){I(r,a),t=!1},d(a){a&&_(e),r&&r.d(a)}}}function Fe(i){let e,t,l;const r=i[18].pageHeader,a=z(r,i,i[17],He),s=a||ht();return{c(){e=C("header"),s&&s.c(),this.h()},l(o){e=M(o,"HEADER",{id:!0,class:!0});var n=A(e);s&&s.l(n),n.forEach(_),this.h()},h(){f(e,"id","page-header"),f(e,"class",t="flex-none "+i[4])},m(o,n){V(o,e,n),s&&s.m(e,null),l=!0},p(o,n){a&&a.p&&(!l||n&131072)&&G(a,r,o,o[17],l?j(r,o[17],n,ut):N(o[17]),He),(!l||n&16&&t!==(t="flex-none "+o[4]))&&f(e,"class",t)},i(o){l||(E(s,o),l=!0)},o(o){I(s,o),l=!1},d(o){o&&_(e),s&&s.d(o)}}}function ht(i){let e;return{c(){e=W("(slot:header)")},l(t){e=X(t,"(slot:header)")},m(t,l){V(t,e,l)},d(t){t&&_(e)}}}function Ae(i){let e,t,l;const r=i[18].pageFooter,a=z(r,i,i[17],Re),s=a||_t();return{c(){e=C("footer"),s&&s.c(),this.h()},l(o){e=M(o,"FOOTER",{id:!0,class:!0});var n=A(e);s&&s.l(n),n.forEach(_),this.h()},h(){f(e,"id","page-footer"),f(e,"class",t="flex-none "+i[2])},m(o,n){V(o,e,n),s&&s.m(e,null),l=!0},p(o,n){a&&a.p&&(!l||n&131072)&&G(a,r,o,o[17],l?j(r,o[17],n,nt):N(o[17]),Re),(!l||n&4&&t!==(t="flex-none "+o[2]))&&f(e,"class",t)},i(o){l||(E(s,o),l=!0)},o(o){I(s,o),l=!1},d(o){o&&_(e),s&&s.d(o)}}}function _t(i){let e;return{c(){e=W("(slot:footer)")},l(t){e=X(t,"(slot:footer)")},m(t,l){V(t,e,l)},d(t){t&&_(e)}}}function Te(i){let e,t;const l=i[18].sidebarRight,r=z(l,i,i[17],Se);return{c(){e=C("aside"),r&&r.c(),this.h()},l(a){e=M(a,"ASIDE",{id:!0,class:!0});var s=A(e);r&&r.l(s),s.forEach(_),this.h()},h(){f(e,"id","sidebar-right"),f(e,"class",i[5])},m(a,s){V(a,e,s),r&&r.m(e,null),t=!0},p(a,s){r&&r.p&&(!t||s&131072)&&G(r,l,a,a[17],t?j(l,a[17],s,ft):N(a[17]),Se),(!t||s&32)&&f(e,"class",a[5])},i(a){t||(E(r,a),t=!0)},o(a){I(r,a),t=!1},d(a){a&&_(e),r&&r.d(a)}}}function Ce(i){let e,t,l;const r=i[18].footer,a=z(r,i,i[17],Ee);return{c(){e=C("footer"),a&&a.c(),this.h()},l(s){e=M(s,"FOOTER",{id:!0,class:!0});var o=A(e);a&&a.l(o),o.forEach(_),this.h()},h(){f(e,"id","shell-footer"),f(e,"class",t="flex-none "+i[1])},m(s,o){V(s,e,o),a&&a.m(e,null),l=!0},p(s,o){a&&a.p&&(!l||o&131072)&&G(a,r,s,s[17],l?j(r,s[17],o,ot):N(s[17]),Ee),(!l||o&2&&t!==(t="flex-none "+s[1]))&&f(e,"class",t)},i(s){l||(E(a,s),l=!0)},o(s){I(a,s),l=!1},d(s){s&&_(e),a&&a.d(s)}}}function gt(i){let e,t,l,r,a,s,o,n,k,g,u,d,m,S,R,c=i[9].header&&Ie(i),b=i[9].sidebarLeft&&De(i),L=i[9].pageHeader&&Fe(i);const O=i[18].default,B=z(O,i,i[17],null);let D=i[9].pageFooter&&Ae(i),h=i[9].sidebarRight&&Te(i),v=i[9].footer&&Ce(i);return{c(){e=C("div"),c&&c.c(),t=U(),l=C("div"),b&&b.c(),r=U(),a=C("div"),L&&L.c(),s=U(),o=C("main"),B&&B.c(),k=U(),D&&D.c(),u=U(),h&&h.c(),d=U(),v&&v.c(),this.h()},l(H){e=M(H,"DIV",{id:!0,class:!0,"data-testid":!0});var F=A(e);c&&c.l(F),t=y(F),l=M(F,"DIV",{class:!0});var P=A(l);b&&b.l(P),r=y(P),a=M(P,"DIV",{id:!0,class:!0});var K=A(a);L&&L.l(K),s=y(K),o=M(K,"MAIN",{id:!0,class:!0});var fe=A(o);B&&B.l(fe),fe.forEach(_),k=y(K),D&&D.l(K),K.forEach(_),u=y(P),h&&h.l(P),P.forEach(_),d=y(F),v&&v.l(F),F.forEach(_),this.h()},h(){f(o,"id","page-content"),f(o,"class",n="flex-auto "+i[3]),f(a,"id","page"),f(a,"class",g=i[0]+" "+Me),f(l,"class","flex-auto "+bt),f(e,"id","appShell"),f(e,"class",i[8]),f(e,"data-testid","app-shell")},m(H,F){V(H,e,F),c&&c.m(e,null),T(e,t),T(e,l),b&&b.m(l,null),T(l,r),T(l,a),L&&L.m(a,null),T(a,s),T(a,o),B&&B.m(o,null),T(a,k),D&&D.m(a,null),T(l,u),h&&h.m(l,null),T(e,d),v&&v.m(e,null),m=!0,S||(R=Z(a,"scroll",i[19]),S=!0)},p(H,[F]){H[9].header?c?(c.p(H,F),F&512&&E(c,1)):(c=Ie(H),c.c(),E(c,1),c.m(e,t)):c&&(q(),I(c,1,1,()=>{c=null}),J()),H[9].sidebarLeft?b?(b.p(H,F),F&512&&E(b,1)):(b=De(H),b.c(),E(b,1),b.m(l,r)):b&&(q(),I(b,1,1,()=>{b=null}),J()),H[9].pageHeader?L?(L.p(H,F),F&512&&E(L,1)):(L=Fe(H),L.c(),E(L,1),L.m(a,s)):L&&(q(),I(L,1,1,()=>{L=null}),J()),B&&B.p&&(!m||F&131072)&&G(B,O,H,H[17],m?j(O,H[17],F,null):N(H[17]),null),(!m||F&8&&n!==(n="flex-auto "+H[3]))&&f(o,"class",n),H[9].pageFooter?D?(D.p(H,F),F&512&&E(D,1)):(D=Ae(H),D.c(),E(D,1),D.m(a,null)):D&&(q(),I(D,1,1,()=>{D=null}),J()),(!m||F&1&&g!==(g=H[0]+" "+Me))&&f(a,"class",g),H[9].sidebarRight?h?(h.p(H,F),F&512&&E(h,1)):(h=Te(H),h.c(),E(h,1),h.m(l,null)):h&&(q(),I(h,1,1,()=>{h=null}),J()),H[9].footer?v?(v.p(H,F),F&512&&E(v,1)):(v=Ce(H),v.c(),E(v,1),v.m(e,null)):v&&(q(),I(v,1,1,()=>{v=null}),J()),(!m||F&256)&&f(e,"class",H[8])},i(H){m||(E(c),E(b),E(L),E(B,H),E(D),E(h),E(v),m=!0)},o(H){I(c),I(b),I(L),I(B,H),I(D),I(h),I(v),m=!1},d(H){H&&_(e),c&&c.d(),b&&b.d(),L&&L.d(),B&&B.d(H),D&&D.d(),h&&h.d(),v&&v.d(),S=!1,R()}}}const mt="w-full h-full flex flex-col overflow-hidden",bt="w-full h-full flex overflow-hidden",Me="flex-1 overflow-x-hidden flex flex-col",vt="flex-none overflow-x-hidden overflow-y-auto",kt="flex-none overflow-x-hidden overflow-y-auto";function Et(i,e,t){let l,r,a,s,o,n,k,g,{$$slots:u={},$$scope:d}=e;const m=Ve(u);let{regionPage:S=""}=e,{slotHeader:R="z-10"}=e,{slotSidebarLeft:c="w-auto"}=e,{slotSidebarRight:b="w-auto"}=e,{slotPageHeader:L=""}=e,{slotPageContent:O=""}=e,{slotPageFooter:B=""}=e,{slotFooter:D=""}=e;function h(v){p.call(this,i,v)}return i.$$set=v=>{t(20,e=w(w({},e),Q(v))),"regionPage"in v&&t(0,S=v.regionPage),"slotHeader"in v&&t(10,R=v.slotHeader),"slotSidebarLeft"in v&&t(11,c=v.slotSidebarLeft),"slotSidebarRight"in v&&t(12,b=v.slotSidebarRight),"slotPageHeader"in v&&t(13,L=v.slotPageHeader),"slotPageContent"in v&&t(14,O=v.slotPageContent),"slotPageFooter"in v&&t(15,B=v.slotPageFooter),"slotFooter"in v&&t(16,D=v.slotFooter),"$$scope"in v&&t(17,d=v.$$scope)},i.$$.update=()=>{t(8,l=`${mt} ${e.class??""}`),i.$$.dirty&1024&&t(7,r=`${R}`),i.$$.dirty&2048&&t(6,a=`${vt} ${c}`),i.$$.dirty&4096&&t(5,s=`${kt} ${b}`),i.$$.dirty&8192&&t(4,o=`${L}`),i.$$.dirty&16384&&t(3,n=`${O}`),i.$$.dirty&32768&&t(2,k=`${B}`),i.$$.dirty&65536&&t(1,g=`${D}`)},e=Q(e),[S,g,k,n,o,s,a,r,l,m,R,c,b,L,O,B,D,d,u,h]}class St extends ${constructor(e){super(),ee(this,e,Et,gt,te,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Rt(i){let e,t,l=String(i[0]).substring(0,2).toUpperCase()+"",r,a;return{c(){e=ue("svg"),t=ue("text"),r=W(l),this.h()},l(s){e=ce(s,"svg",{class:!0,viewBox:!0});var o=A(e);t=ce(o,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var n=A(t);r=X(n,l),n.forEach(_),o.forEach(_),this.h()},h(){f(t,"x","50%"),f(t,"y","50%"),f(t,"dominant-baseline","central"),f(t,"text-anchor","middle"),f(t,"font-weight","bold"),f(t,"font-size",150),f(t,"class",a="avatar-text "+i[1]),f(e,"class","avatar-initials w-full h-full"),f(e,"viewBox","0 0 512 512")},m(s,o){V(s,e,o),T(e,t),T(t,r)},p(s,o){o&1&&l!==(l=String(s[0]).substring(0,2).toUpperCase()+"")&&Ue(r,l),o&2&&a!==(a="avatar-text "+s[1])&&f(t,"class",a)},d(s){s&&_(e)}}}function Ht(i){let e,t,l,r,a,s,o,n,k=[{class:t="avatar-image "+It},{style:l=i[7].style??""},{src:r=i[2]},{alt:a=i[7].alt||""},i[6]()],g={};for(let u=0;u<k.length;u+=1)g=w(g,k[u]);return{c(){e=C("img"),this.h()},l(u){e=M(u,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){de(e,g)},m(u,d){V(u,e,d),o||(n=ye(s=i[3].call(null,e,i[4])),o=!0)},p(u,d){de(e,g=ze(k,[{class:t},d&128&&l!==(l=u[7].style??"")&&{style:l},d&4&&!Ge(e.src,r=u[2])&&{src:r},d&128&&a!==(a=u[7].alt||"")&&{alt:a},u[6]()])),s&&Ne(s.update)&&d&16&&s.update.call(null,u[4])},d(u){u&&_(e),o=!1,n()}}}function Pt(i){let e,t,l,r;function a(n,k){return n[2]?Ht:Rt}let s=a(i),o=s(i);return{c(){e=C("figure"),o.c(),this.h()},l(n){e=M(n,"FIGURE",{class:!0,"data-testid":!0});var k=A(e);o.l(k),k.forEach(_),this.h()},h(){f(e,"class",t="avatar "+i[5]),f(e,"data-testid","avatar")},m(n,k){V(n,e,k),o.m(e,null),l||(r=[Z(e,"click",i[14]),Z(e,"keydown",i[15]),Z(e,"keyup",i[16]),Z(e,"keypress",i[17])],l=!0)},p(n,[k]){s===(s=a(n))&&o?o.p(n,k):(o.d(1),o=s(n),o&&(o.c(),o.m(e,null))),k&32&&t!==(t="avatar "+n[5])&&f(e,"class",t)},i:x,o:x,d(n){n&&_(e),o.d(),l=!1,Oe(r)}}}let Lt="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",It="w-full h-full object-cover";function Dt(i,e,t){let l;const r=["initials","fill","src","action","actionParams","background","width","border","rounded","shadow","cursor"];let a=ne(e,r),{initials:s="AB"}=e,{fill:o="fill-token"}=e,{src:n=""}=e,{action:k=()=>{}}=e,{actionParams:g=""}=e,{background:u="bg-surface-400-500-token"}=e,{width:d="w-16"}=e,{border:m=""}=e,{rounded:S="rounded-full"}=e,{shadow:R=""}=e,{cursor:c=""}=e;function b(){return delete a.class,a}function L(h){p.call(this,i,h)}function O(h){p.call(this,i,h)}function B(h){p.call(this,i,h)}function D(h){p.call(this,i,h)}return i.$$set=h=>{t(7,e=w(w({},e),Q(h))),t(18,a=ne(e,r)),"initials"in h&&t(0,s=h.initials),"fill"in h&&t(1,o=h.fill),"src"in h&&t(2,n=h.src),"action"in h&&t(3,k=h.action),"actionParams"in h&&t(4,g=h.actionParams),"background"in h&&t(8,u=h.background),"width"in h&&t(9,d=h.width),"border"in h&&t(10,m=h.border),"rounded"in h&&t(11,S=h.rounded),"shadow"in h&&t(12,R=h.shadow),"cursor"in h&&t(13,c=h.cursor)},i.$$.update=()=>{t(5,l=`${Lt} ${u} ${d} ${m} ${S} ${R} ${c} ${e.class??""}`)},e=Q(e),[s,o,n,k,g,l,b,e,u,d,m,S,R,c,L,O,B,D]}class Ft extends ${constructor(e){super(),ee(this,e,Dt,Pt,te,{initials:0,fill:1,src:2,action:3,actionParams:4,background:8,width:9,border:10,rounded:11,shadow:12,cursor:13})}}function At(i){let e;const t=i[0].default,l=z(t,i,i[1],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,a){l&&l.m(r,a),e=!0},p(r,a){l&&l.p&&(!e||a&2)&&G(l,t,r,r[1],e?j(t,r[1],a,null):N(r[1]),null)},i(r){e||(E(l,r),e=!0)},o(r){I(l,r),e=!1},d(r){l&&l.d(r)}}}function Tt(i){let e,t,l,r,a,s,o,n,k;return{c(){e=C("nav"),t=C("ul"),l=C("li"),r=C("a"),a=W("Home"),s=U(),o=C("li"),n=C("a"),k=W("About"),this.h()},l(g){e=M(g,"NAV",{class:!0});var u=A(e);t=M(u,"UL",{});var d=A(t);l=M(d,"LI",{});var m=A(l);r=M(m,"A",{href:!0});var S=A(r);a=X(S,"Home"),S.forEach(_),m.forEach(_),s=y(d),o=M(d,"LI",{});var R=A(o);n=M(R,"A",{href:!0});var c=A(n);k=X(c,"About"),c.forEach(_),R.forEach(_),d.forEach(_),u.forEach(_),this.h()},h(){f(r,"href","./"),f(n,"href","./about"),f(e,"class","list-nav")},m(g,u){V(g,e,u),T(e,t),T(t,l),T(l,r),T(r,a),T(t,s),T(t,o),T(o,n),T(n,k)},p:x,d(g){g&&_(e)}}}function Ct(i){let e,t;return{c(){e=C("strong"),t=W("Skeleton"),this.h()},l(l){e=M(l,"STRONG",{class:!0});var r=A(e);t=X(r,"Skeleton"),r.forEach(_),this.h()},h(){f(e,"class","text-xl uppercase")},m(l,r){V(l,e,r),T(e,t)},p:x,d(l){l&&_(e)}}}function Mt(i){let e,t,l,r,a,s,o,n,k,g,u;return g=new Ft({props:{src:"https://i.pravatar.cc/"}}),{c(){e=C("a"),t=W("Discord"),l=U(),r=C("a"),a=W("Twitter"),s=U(),o=C("a"),n=W("GitHub"),k=U(),ae(g.$$.fragment),this.h()},l(d){e=M(d,"A",{class:!0,href:!0,target:!0,rel:!0});var m=A(e);t=X(m,"Discord"),m.forEach(_),l=y(d),r=M(d,"A",{class:!0,href:!0,target:!0,rel:!0});var S=A(r);a=X(S,"Twitter"),S.forEach(_),s=y(d),o=M(d,"A",{class:!0,href:!0,target:!0,rel:!0});var R=A(o);n=X(R,"GitHub"),R.forEach(_),k=y(d),se(g.$$.fragment,d),this.h()},h(){f(e,"class","btn btn-sm variant-ghost-surface"),f(e,"href","https://discord.gg/EXqV7W8MtY"),f(e,"target","_blank"),f(e,"rel","noreferrer"),f(r,"class","btn btn-sm variant-ghost-surface"),f(r,"href","https://twitter.com/SkeletonUI"),f(r,"target","_blank"),f(r,"rel","noreferrer"),f(o,"class","btn btn-sm variant-ghost-surface"),f(o,"href","https://github.com/skeletonlabs/skeleton"),f(o,"target","_blank"),f(o,"rel","noreferrer")},m(d,m){V(d,e,m),T(e,t),V(d,l,m),V(d,r,m),T(r,a),V(d,s,m),V(d,o,m),T(o,n),V(d,k,m),ie(g,d,m),u=!0},p:x,i(d){u||(E(g.$$.fragment,d),u=!0)},o(d){I(g.$$.fragment,d),u=!1},d(d){d&&_(e),d&&_(l),d&&_(r),d&&_(s),d&&_(o),d&&_(k),re(g,d)}}}function Vt(i){let e,t;return e=new rt({props:{$$slots:{trail:[Mt],lead:[Ct]},$$scope:{ctx:i}}}),{c(){ae(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,r){ie(e,l,r),t=!0},p(l,r){const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){re(e,l)}}}function Bt(i){let e,t;return e=new St({props:{slotSidebarLeft:"bg-surface-500/5 w-56 p-4",$$slots:{header:[Vt],sidebarLeft:[Tt],default:[At]},$$scope:{ctx:i}}}),{c(){ae(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,r){ie(e,l,r),t=!0},p(l,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){re(e,l)}}}function Ot(i,e,t){let{$$slots:l={},$$scope:r}=e;return i.$$set=a=>{"$$scope"in a&&t(1,r=a.$$scope)},[l,r]}class Gt extends ${constructor(e){super(),ee(this,e,Ot,Bt,te,{})}}export{Gt as component,zt as universal};
