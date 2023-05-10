import{S as $,i as ee,s as te,k as p,q as v,a as S,l as m,m as x,r as g,h as u,c as R,n as P,b as M,D as l,L,aa as Q}from"../chunks/index.1de07fe7.js";const le=async({fetch:o})=>{const e=async()=>(await(await o("https://dummyjson.com/products?limit=10")).json()).products,a=async()=>(await(await o("https://dummyjson.com/users?limit=10")).json()).users;return{products:e(),users:a()}},re=Object.freeze(Object.defineProperty({__proto__:null,load:le},Symbol.toStringTag,{value:"Module"}));function W(o,e,a){const r=o.slice();return r[3]=e[a],r}function X(o,e,a){const r=o.slice();return r[6]=e[a],r}function Y(o){let e,a,r=o[6].title+"",f,n,_,y=o[6].description+"",j,i;return{c(){e=p("div"),a=p("h4"),f=v(r),n=S(),_=p("p"),j=v(y),i=S(),this.h()},l(k){e=m(k,"DIV",{class:!0});var D=x(e);a=m(D,"H4",{});var T=x(a);f=g(T,r),T.forEach(u),n=R(D),_=m(D,"P",{});var E=x(_);j=g(E,y),E.forEach(u),i=R(D),D.forEach(u),this.h()},h(){P(e,"class","logo-item flex flex-col pad-4")},m(k,D){M(k,e,D),l(e,a),l(a,f),l(e,n),l(e,_),l(_,j),l(e,i)},p:L,d(k){k&&u(e)}}}function Z(o){let e,a,r=o[3].firstName+"",f,n,_=o[3].lastName+"",y,j,i,k,D=o[3].age+"",T,E,C=o[3].eyeColor+"",O,I,A;return{c(){e=p("div"),a=p("h4"),f=v(r),n=S(),y=v(_),j=S(),i=p("p"),k=v("Age "),T=v(D),E=v(" with "),O=v(C),I=v(" eyes."),A=S(),this.h()},l(H){e=m(H,"DIV",{class:!0});var w=x(e);a=m(w,"H4",{});var N=x(a);f=g(N,r),n=R(N),y=g(N,_),N.forEach(u),j=R(w),i=m(w,"P",{});var b=x(i);k=g(b,"Age "),T=g(b,D),E=g(b," with "),O=g(b,C),I=g(b," eyes."),b.forEach(u),A=R(w),w.forEach(u),this.h()},h(){P(e,"class","logo-item flex flex-col pad-4")},m(H,w){M(H,e,w),l(e,a),l(a,f),l(a,n),l(a,y),l(e,j),l(e,i),l(i,k),l(i,T),l(i,E),l(i,O),l(i,I),l(e,A)},p:L,d(H){H&&u(e)}}}function se(o){let e,a,r,f,n,_,y,j,i,k,D,T,E,C,O,I,A,H,w,N,b,J=o[0],h=[];for(let s=0;s<J.length;s+=1)h[s]=Y(X(o,J,s));let z=o[1],d=[];for(let s=0;s<z.length;s+=1)d[s]=Z(W(o,z,s));return{c(){e=p("div"),a=p("h1"),r=v("Data section"),f=S(),n=p("p"),_=v("Here I make a call for some data (from "),y=p("a"),j=v("DummyJSON"),i=v(") and display it on the screen."),k=S(),D=p("hr"),T=S(),E=p("h2"),C=v("Top products"),O=S(),I=p("div");for(let s=0;s<h.length;s+=1)h[s].c();A=S(),H=p("h2"),w=v("Top users"),N=S(),b=p("div");for(let s=0;s<d.length;s+=1)d[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var c=x(e);a=m(c,"H1",{});var t=x(a);r=g(t,"Data section"),t.forEach(u),f=R(c),n=m(c,"P",{});var V=x(n);_=g(V,"Here I make a call for some data (from "),y=m(V,"A",{href:!0,target:!0});var U=x(y);j=g(U,"DummyJSON"),U.forEach(u),i=g(V,") and display it on the screen."),V.forEach(u),k=R(c),D=m(c,"HR",{}),T=R(c),E=m(c,"H2",{class:!0,id:!0});var B=x(E);C=g(B,"Top products"),B.forEach(u),O=R(c),I=m(c,"DIV",{class:!0});var F=x(I);for(let q=0;q<h.length;q+=1)h[q].l(F);F.forEach(u),A=R(c),H=m(c,"H2",{class:!0,id:!0});var G=x(H);w=g(G,"Top users"),G.forEach(u),N=R(c),b=m(c,"DIV",{class:!0});var K=x(b);for(let q=0;q<d.length;q+=1)d[q].l(K);K.forEach(u),c.forEach(u),this.h()},h(){P(y,"href","https://dummyjson.com/"),P(y,"target","_blank"),P(E,"class","underline"),P(E,"id","products"),P(I,"class","logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-0.5"),P(H,"class","underline"),P(H,"id","users"),P(b,"class","logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-0.5"),P(e,"class","container mx-auto p-8 space-y-8")},m(s,c){M(s,e,c),l(e,a),l(a,r),l(e,f),l(e,n),l(n,_),l(n,y),l(y,j),l(n,i),l(e,k),l(e,D),l(e,T),l(e,E),l(E,C),l(e,O),l(e,I);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(I,null);l(e,A),l(e,H),l(H,w),l(e,N),l(e,b);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(b,null)},p(s,[c]){if(c&1){J=s[0];let t;for(t=0;t<J.length;t+=1){const V=X(s,J,t);h[t]?h[t].p(V,c):(h[t]=Y(V),h[t].c(),h[t].m(I,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=J.length}if(c&2){z=s[1];let t;for(t=0;t<z.length;t+=1){const V=W(s,z,t);d[t]?d[t].p(V,c):(d[t]=Z(V),d[t].c(),d[t].m(b,null))}for(;t<d.length;t+=1)d[t].d(1);d.length=z.length}},i:L,o:L,d(s){s&&u(e),Q(h,s),Q(d,s)}}}function ae(o,e,a){let{data:r}=e;const{products:f,users:n}=r;return console.log(r),o.$$set=_=>{"data"in _&&a(2,r=_.data)},[f,n,r]}class ce extends ${constructor(e){super(),ee(this,e,ae,se,te,{data:2})}}export{ce as component,re as universal};
