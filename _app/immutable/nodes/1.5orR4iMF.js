import{a as d,t as v}from"../chunks/disclose-version.Cf113ikx.js";import"../chunks/legacy.C_H96vc7.js";import{u as h,m as f,o as x,q as $,t as u,v as _,w as k,x as y,y as q,p as w,f as z,z as E,l as S,c as l,r as g,s as j}from"../chunks/runtime.Bb40ngOF.js";import{s as A,a as b,b as B}from"../chunks/store.Bip2pVSi.js";import{s as C}from"../chunks/entry.DiU9w8j4.js";function D(s=!1){const t=x,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const p=q(()=>{let i=!1;const c=t.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(p)}e.b.length&&h(()=>{m(t,n),u(e.b)}),f(()=>{const a=$(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{m(t,n),u(e.a)})}function m(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function N(s,t){w(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=z(a),p=l(r,!0);g(r);var i=j(r,2),c=l(i,!0);g(i),E(()=>{var o;b(p,n().status),b(c,(o=n().error)==null?void 0:o.message)}),d(s,a),S()}export{N as component};