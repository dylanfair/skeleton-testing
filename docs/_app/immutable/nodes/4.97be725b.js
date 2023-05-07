import{S as G,i as J,s as L,k as p,q as I,a as A,l as v,m,r as S,h as g,c as V,n as w,b as O,D as i,M as T,ac as z,X as R,K as W,u as F}from"../chunks/index.730b97bd.js";import{b as Y}from"../chunks/paths.dc7cd336.js";import{n as j}from"../chunks/stores.694c0ffb.js";import{m as Z,t as B}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.04c647c4.js";function C(c,e,l){const n=c.slice();return n[3]=e[l],n}function M(c,e,l){const n=c.slice();return n[6]=e[l],n}function Q(c){let e,l=c[6]+"",n;return{c(){e=p("span"),n=I(l),this.h()},l(d){e=v(d,"SPAN",{class:!0});var f=m(e);n=S(f,l),f.forEach(g),this.h()},h(){w(e,"class","badge variant-filled-secondary")},m(d,f){O(d,e,f),i(e,n)},p(d,f){f&1&&l!==(l=d[6]+"")&&F(n,l)},d(d){d&&g(e)}}}function U(c){let e,l,n,d,f,h=c[3].content+"",k,E,u,N,b,x;function P(){return c[2](c[3])}let y=c[3].tags,s=[];for(let r=0;r<y.length;r+=1)s[r]=Q(M(c,y,r));return{c(){e=p("div"),l=p("button"),n=I("X"),d=A(),f=p("div"),k=I(h),E=A(),u=p("div");for(let r=0;r<s.length;r+=1)s[r].c();N=A(),this.h()},l(r){e=v(r,"DIV",{class:!0});var a=m(e);l=v(a,"BUTTON",{class:!0});var t=m(l);n=S(t,"X"),t.forEach(g),d=V(a),f=v(a,"DIV",{});var _=m(f);k=S(_,h),_.forEach(g),E=V(a),u=v(a,"DIV",{class:!0});var o=m(u);for(let D=0;D<s.length;D+=1)s[D].l(o);o.forEach(g),N=V(a),a.forEach(g),this.h()},h(){w(l,"class","btn-icon btn-icon-sm variant-filled-error absolute -top-1.5 -right-1.5"),w(u,"class","flex gap-1 flex-wrap"),w(e,"class","card p-4 variant-ghost-warning flex flex-col gap-2 relative")},m(r,a){O(r,e,a),i(e,l),i(l,n),i(e,d),i(e,f),i(f,k),i(e,E),i(e,u);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(u,null);i(e,N),b||(x=W(l,"click",P),b=!0)},p(r,a){if(c=r,a&1&&h!==(h=c[3].content+"")&&F(k,h),a&1){y=c[3].tags;let t;for(t=0;t<y.length;t+=1){const _=M(c,y,t);s[t]?s[t].p(_,a):(s[t]=Q(_),s[t].c(),s[t].m(u,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=y.length}},d(r){r&&g(e),z(s,r),b=!1,x()}}}function ee(c){let e,l,n,d,f,h,k,E,u,N,b,x,P,y,s,r=c[0],a=[];for(let t=0;t<r.length;t+=1)a[t]=U(C(c,r,t));return{c(){e=p("div"),l=p("div"),n=p("h2"),d=I("Notes"),f=A(),h=p("a"),k=I("New Note"),E=A(),u=p("p"),N=I("On this page I wanted to implement the code from "),b=p("a"),x=I("Huntabyte's video"),P=I("."),y=A(),s=p("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var _=m(e);l=v(_,"DIV",{class:!0});var o=m(l);n=v(o,"H2",{});var D=m(n);d=S(D,"Notes"),D.forEach(g),f=V(o),h=v(o,"A",{href:!0,class:!0});var X=m(h);k=S(X,"New Note"),X.forEach(g),o.forEach(g),E=V(_),u=v(_,"P",{});var q=m(u);N=S(q,"On this page I wanted to implement the code from "),b=v(q,"A",{href:!0,target:!0});var $=m(b);x=S($,"Huntabyte's video"),$.forEach(g),P=S(q,"."),q.forEach(g),y=V(_),s=v(_,"DIV",{class:!0});var K=m(s);for(let H=0;H<a.length;H+=1)a[H].l(K);K.forEach(g),_.forEach(g),this.h()},h(){w(h,"href",Y+"/new"),w(h,"class","btn variant-ghost-primary"),w(l,"class","flex items-center justify-between"),w(b,"href","https://www.youtube.com/watch?v=P_A0qQ7AuK8"),w(b,"target","_blank"),w(s,"class","grid grid-cols-3 gap-4"),w(e,"class","container mx-auto p-8 space-y-8")},m(t,_){O(t,e,_),i(e,l),i(l,n),i(n,d),i(l,f),i(l,h),i(h,k),i(e,E),i(e,u),i(u,N),i(u,b),i(b,x),i(u,P),i(e,y),i(e,s);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(s,null)},p(t,[_]){if(_&3){r=t[0];let o;for(o=0;o<r.length;o+=1){const D=C(t,r,o);a[o]?a[o].p(D,_):(a[o]=U(D),a[o].c(),a[o].m(s,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},i:T,o:T,d(t){t&&g(e),z(a,t)}}}function te(c,e,l){let n;R(c,j,h=>l(0,n=h));function d(h){const k={type:"confirm",title:"Delete Note",body:"Are you sure you want to delete this note?",response:E=>{if(E){j.update(u=>u.filter(N=>N.id!==h)),B.trigger({message:"Note deleted successfully",background:"variant-filled-success"});return}B.trigger({message:"Note not deleted",background:"variant-ghost-error"})}};Z.trigger(k)}return[n,d,h=>d(h.id)]}class re extends G{constructor(e){super(),J(this,e,te,ee,L,{})}}export{re as component};