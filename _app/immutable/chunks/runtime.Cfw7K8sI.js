var mn=Array.isArray,gn=Array.from,An=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Sn=Object.prototype,Rn=Array.prototype,Bt=Object.getPrototypeOf;const xn=()=>{};function Dn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,M=8,nt=16,y=32,$=64,x=128,B=256,p=512,S=1024,Y=2048,I=4096,j=8192,Gt=16384,vt=32768,On=65536,Kt=1<<18,pt=1<<19,at=Symbol("$state"),kn=Symbol("legacy props");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Cn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Fn(t){return tn(rt(t))}function qn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return a!==null&&a.f&T&&(d===null?pn([t]):d.push(t)),t}function Ln(t,n){return a!==null&&lt()&&a.f&(T|nt)&&(d===null||!d.includes(t))&&Xt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),yt(t,S),lt()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(E(u,S),z(u)):A===null?hn([t]):A.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&S||!e&&o===u||(E(o,n),i&(p|x)&&(i&T?yt(o,Y):z(o)))}}const Mn=1,Yn=2,jn=4,Hn=8,Un=16,Bn=1,Vn=2,rn="[",en="[!",sn="]",Et={},Gn=Symbol();function wt(t){console.warn("hydration_mismatch")}let N=!1;function Kn(t){N=t}let m;function F(t){if(t===null)throw wt(),Et;return m=t}function $n(){return F(P(m))}function Zn(t){if(N){if(P(m)!==null)throw wt(),Et;m=t}}function Wn(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=P(n);n.remove(),n=e}}var it,Tt,mt;function zn(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;Tt=ut(n,"firstChild").get,mt=ut(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return Tt.call(t)}function P(t){return mt.call(t)}function Jn(t,n){if(!N)return Q(t);var r=Q(m);if(r===null)r=m.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function Qn(t,n){if(!N){var r=Q(t);return r instanceof Comment&&r.data===""?P(r):r}return m}function Xn(t,n=1,r=!1){let e=N?m:t;for(;n--;)e=P(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),F(l),l}return F(e),e}function tr(t){t.textContent=""}function ln(t){var n=T|S;u===null?n|=x:u.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&T){var e=a;(e.children??(e.children=[])).push(r)}return r}function nr(t){const n=ln(t);return n.equals=dt,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):C(e)}}}function At(t){var n,r=u;K(t.parent);try{gt(t),n=Lt(t)}finally{K(r)}return n}function St(t){var n=At(t),r=(D||t.f&x)&&t.deps!==null?Y:p;E(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){gt(t),L(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){u===null&&a===null&&zt(),a!==null&&a.f&x&&Wt(),st&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),W(o),o.f|=Gt}catch(c){throw C(o),c}finally{ft(i)}}else n!==null&&z(o);var w=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!w&&!s&&e&&(l!==null&&on(o,l),a!==null&&a.f&T)){var g=a;(g.children??(g.children=[])).push(o)}return o}function rr(t){const n=b(M,null,!1);return E(n,p),n.teardown=t,n}function er(t){Rt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=xt(t);return e}}function sr(t){return Rt(),un(t)}function lr(t){const n=b($,t,!0);return()=>{C(n)}}function xt(t){return b(ct,t,!1)}function un(t){return b(M,t,!0)}function or(t){return an(t)}function an(t,n=0){return b(M|nt|n,t,!0)}function ur(t,n=!0){return b(M|y,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=st,e=a;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:P(e);e.remove(),e=l}r=!0}kt(t,n&&!r),Ot(t),L(t,0),E(t,j);var o=t.transitions;if(o!==null)for(const w of o)w.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];Nt(t,r,!0),_n(r,()=>{C(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&I)){if(t.f^=I,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&vt)!==0||(e.f&y)!==0;Nt(e,n,l?r:!1),e=s}}}function ir(t){Pt(t,!0)}function Pt(t,n){if(t.f&I){H(t)&&W(t),t.f^=I;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,X=[];function bt(){V=!1;const t=X.slice();X=[],Vt(t)}function fr(t){V||(V=!0,queueMicrotask(bt)),X.push(t)}function cn(){V&&bt()}const Ct=0,vn=1;let U=Ct,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let R=[],k=0;let a=null;function G(t){a=t}let u=null;function K(t){u=t}let d=null;function pn(t){d=t}let _=null,h=0,A=null;function hn(t){A=t}let Ft=0,D=!1,f=null;function qt(){return++Ft}function lt(){return!Z||f!==null&&f.l===null}function H(t){var o,i;var n=t.f;if(n&S)return!0;if(n&Y){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&St(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||E(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var ot;var n=_,r=h,e=A,s=a,l=D,o=d,i=f,w=t.f;_=null,h=0,A=null,a=w&(y|$)?null:t,D=!O&&(w&x)!==0,d=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return g}finally{_=n,h=r,A=e,a=s,D=l,d=o,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,Y),n.f&(x|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&nt?fn(t):kt(t),Ot(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{u=r}}}function Mt(){k>1e3&&(k=0,Jt()),k++}function Yt(t){var n=t.length;if(n!==0){Mt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),En(l)}}finally{O=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|I))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function wn(){if(q=!1,k>1001)return;const t=R;R=[],Yt(t),q||(k=0)}function z(t){U===Ct&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|y)){if(!(r&p))return;n.f^=p}}R.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,o=l&&(s&p)!==0;if(!o&&!(s&I))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Ht(t){var n=U,r=R;try{Mt();const s=[];U=vn,R=s,q=!1,Yt(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&Ht(),k=0,e}finally{U=n,R=r}}async function _r(){await Promise.resolve(),Ht()}function cr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=At(t);return et(t),e}if(a!==null){d!==null&&d.includes(t)&&Qt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&u!==null&&u.f&p&&!(u.f&y)&&A.includes(t)&&(E(u,S),z(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,H(l)&&St(l)),t.v}function vr(t){const n=a;try{return a=null,t()}finally{a=n}}const Tn=~(S|Y|p);function E(t,n){t.f=t.f&Tn|n}function pr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function hr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];K(l.effect),G(l.reaction),xt(l.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(at in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&at in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Sn as $,Q as A,u as B,Vn as C,F as D,vt as E,$n as F,An as G,G as H,K as I,mn as J,a as K,zn as L,rn as M,P as N,Et as O,Kn as P,sn as Q,wt as R,In as S,Bn as T,tr as U,gn as V,lr as W,rr as X,qn as Y,Ln as Z,at as _,Ut as a,Rn as a0,rt as a1,Pn as a2,Gn as a3,ut as a4,bn as a5,en as a6,Wn as a7,ir as a8,ar as a9,xt as aa,un as ab,fr as ac,Nn as ad,On as ae,jn as af,dt as ag,y as ah,$ as ai,Mn as aj,Z as ak,Yn as al,Hn as am,kn as an,nr as ao,Un as ap,Ht as aq,_r as ar,Fn as as,$t as at,an as b,Jn as c,ur as d,Cn as e,C as f,Bt as g,N as h,m as i,Qn as j,hr as k,er as l,f as m,xn as n,vr as o,pr as p,Vt as q,Zn as r,Xn as s,cr as t,sr as u,Dn as v,dr as w,ln as x,or as y,J as z};
