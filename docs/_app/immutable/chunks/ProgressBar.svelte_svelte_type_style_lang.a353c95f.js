import{w as c}from"./paths.22635fa3.js";import{ai as h}from"./index.730b97bd.js";c(void 0);c(void 0);function v(){const{subscribe:t,set:o,update:r}=c({});return{subscribe:t,set:o,update:r,open:e=>r(()=>({open:!0,...e})),close:()=>r(e=>(e.open=!1,e))}}v();function I(){const{subscribe:t,set:o,update:r}=c([]);return{subscribe:t,set:o,update:r,trigger:e=>r(s=>(s.push(e),s)),close:()=>r(e=>(e.length>0&&e.shift(),e)),clear:()=>o([])}}const z=I(),_={message:"Missing Toast Message",autohide:!0,timeout:5e3};function S(){const t=Math.random();return Number(t).toString(32)}function T(t){if(t.autohide===!0)return setTimeout(()=>{x.close(t.id)},t.timeout)}function M(){const{subscribe:t,set:o,update:r}=c([]);return{subscribe:t,trigger:e=>r(s=>{const a=S();e&&e.callback&&e.callback({id:a,status:"queued"});const n={..._,...e,id:a};return n.timeoutId=T(n),s.push(n),s}),close:e=>r(s=>{if(s.length>0){const a=s.findIndex(i=>i.id===e),n=s[a];n&&(n.callback&&n.callback({id:e,status:"closed"}),n.timeoutId&&clearTimeout(n.timeoutId),s.splice(a,1))}return s}),clear:()=>o([])}}const x=M(),g={};function p(t){return t==="local"?localStorage:sessionStorage}function m(t,o,r){const e=(r==null?void 0:r.serializer)??JSON,s=(r==null?void 0:r.storage)??"local",a=typeof window<"u"&&typeof document<"u";function n(i,d){a&&p(s).setItem(i,e.stringify(d))}if(!g[t]){const i=c(o,u=>{const l=a?p(s).getItem(t):null;if(l&&u(e.parse(l)),a){const w=f=>{f.key===t&&u(f.newValue?e.parse(f.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:d,set:b}=i;g[t]={set(u){n(t,u),b(u)},update(u){const l=u(h(i));n(t,l),b(l)},subscribe:d}}return g[t]}m("modeOsPrefers",!1);m("modeUserPrefers",void 0);m("modeCurrent",!1);export{m as l,z as m,x as t};
