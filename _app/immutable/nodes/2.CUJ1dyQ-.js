import{a as _,t as c}from"../chunks/disclose-version.Bh1bQGh1.js";import"../chunks/legacy.CHCMGyC7.js";import{g as p,h as g,a as v,c as d,s as h,r as u}from"../chunks/runtime.Cfw7K8sI.js";import{b as f}from"../chunks/paths.BY5MglRy.js";function n(s,r,a,o){var t=s.__attributes??(s.__attributes={});g&&(t[r]=s.getAttribute(r),s.nodeName==="LINK")||t[r]!==(t[r]=a)&&(a==null?s.removeAttribute(r):typeof a!="string"&&m(s).includes(r)?s[r]=a:s.setAttribute(r,a))}var e=new Map;function m(s){var r=e.get(s.nodeName);if(r)return r;e.set(s.nodeName,r=[]);for(var a,o=p(s),t=Element.prototype;t!==o;){a=v(o);for(var i in a)a[i].set&&r.push(i);o=p(o)}return r}var A=c("<nav><a>Home</a> <a>About</a></nav>");function $(s){var r=A(),a=d(r);n(a,"href",`${f??""}/`);var o=h(a,2);n(o,"href",`${f??""}/`),u(r),_(s,r)}export{$ as component};
