import{S as H,i as z,s as L,I as B,J as R,K as T,L as U,q as d,o as h,U as Me,v as Pe,u as Ve,D as Ae,V as x,W as ye,w,x as k,y as D,X as Ie,B as E,e as S,c as C,a as G,d as _,b,P as O,f as oe,g as v,t as A,h as j,M as y,j as N,k as P,m as V,n as Q,p as X,T as je,E as q,l as W,z as qe,A as Ne,Y as He,C as ze,Z as Le,Q as F,R as Oe,O as Be}from"../../chunks/index-76fd046c.js";import{H as Re,S as J}from"../../chunks/HomepageHero-ebcb5add.js";import{R as Z,a as K}from"../../chunks/Column-94ec23f9.js";import{L as Se,b as Te}from"../../chunks/Link-b3e9f2d4.js";import"../../chunks/paths-4011c2ee.js";const Ue=r=>({intersecting:r&1,entry:r&2,observer:r&4}),ie=r=>({intersecting:r[0],entry:r[1],observer:r[2]});function Ke(r){let e;const n=r[9].default,t=B(n,r,r[8],ie);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,[l]){t&&t.p&&(!e||l&263)&&R(t,n,s,s[8],e?U(n,s[8],l,Ue):T(s[8]),ie)},i(s){e||(d(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function We(r,e,n){let{$$slots:t={},$$scope:s}=e,{element:l=null}=e,{once:o=!1}=e,{intersecting:f=!1}=e,{root:i=null}=e,{rootMargin:c="0px"}=e,{threshold:m=0}=e,{entry:u=null}=e,$=null;const p=Me();let I=null,a=null;const g=()=>{n(2,$=new IntersectionObserver(M=>{M.forEach(Y=>{n(1,u=Y),n(0,f=Y.isIntersecting)})},{root:i,rootMargin:c,threshold:m}))};return Pe(()=>(g(),()=>{$&&($.disconnect(),n(2,$=null))})),Ve(async()=>{u!==null&&(p("observe",u),u.isIntersecting&&(p("intersect",u),o&&$.unobserve(l))),await Ae(),l!==null&&l!==a&&($.observe(l),a!==null&&$.unobserve(a),a=l),I&&c!==I&&($.disconnect(),a=null,g()),I=c}),r.$$set=M=>{"element"in M&&n(3,l=M.element),"once"in M&&n(4,o=M.once),"intersecting"in M&&n(0,f=M.intersecting),"root"in M&&n(5,i=M.root),"rootMargin"in M&&n(6,c=M.rootMargin),"threshold"in M&&n(7,m=M.threshold),"entry"in M&&n(1,u=M.entry),"$$scope"in M&&n(8,s=M.$$scope)},[f,u,$,l,o,i,c,m,s,t]}class Ce extends H{constructor(e){super(),z(this,e,We,Ke,L,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1})}}function Ye(r){let e;return{c(){e=S("div"),this.h()},l(n){e=C(n,"DIV",{class:!0}),G(e).forEach(_),this.h()},h(){b(e,"class","stroke svelte-jgbwsw"),O(e,"intersecting",r[1]),oe(e,"width",`${r[0]}px`,!1)},m(n,t){v(n,e,t),r[3](e)},p(n,t){t&2&&O(e,"intersecting",n[1]),t&1&&oe(e,"width",`${n[0]}px`,!1)},d(n){n&&_(e),r[3](null)}}}function Je(r){let e,n,t;function s(o){r[4](o)}let l={element:r[2],$$slots:{default:[Ye]},$$scope:{ctx:r}};return r[1]!==void 0&&(l.intersecting=r[1]),e=new Ce({props:l}),x.push(()=>ye(e,"intersecting",s)),{c(){w(e.$$.fragment)},l(o){k(e.$$.fragment,o)},m(o,f){D(e,o,f),t=!0},p(o,[f]){const i={};f&4&&(i.element=o[2]),f&39&&(i.$$scope={dirty:f,ctx:o}),!n&&f&2&&(n=!0,i.intersecting=o[1],Ie(()=>n=!1)),e.$set(i)},i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){h(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function Qe(r,e,n){let{width:t=64}=e,s=!1,l;function o(i){x[i?"unshift":"push"](()=>{l=i,n(2,l)})}function f(i){s=i,n(1,s)}return r.$$set=i=>{"width"in i&&n(0,t=i.width)},[t,s,l,o,f]}class Ge extends H{constructor(e){super(),z(this,e,Qe,Je,L,{width:0})}}const Xe=r=>({}),fe=r=>({}),Ze=r=>({}),ae=r=>({}),Fe=r=>({}),ce=r=>({});function ue(r){let e,n;const t=r[4].image,s=B(t,r,r[3],ce);return{c(){e=S("div"),s&&s.c(),this.h()},l(l){e=C(l,"DIV",{class:!0});var o=G(e);s&&s.l(o),o.forEach(_),this.h()},h(){b(e,"class","image svelte-1xrkuak")},m(l,o){v(l,e,o),s&&s.m(e,null),n=!0},p(l,o){s&&s.p&&(!n||o&8)&&R(s,t,l,l[3],n?U(t,l[3],o,Fe):T(l[3]),ce)},i(l){n||(d(s,l),n=!0)},o(l){h(s,l),n=!1},d(l){l&&_(e),s&&s.d(l)}}}function _e(r){let e,n;return{c(){e=S("span"),n=A(r[0]),this.h()},l(t){e=C(t,"SPAN",{class:!0});var s=G(e);n=j(s,r[0]),s.forEach(_),this.h()},h(){b(e,"class","supertext")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&1&&N(n,t[0])},d(t){t&&_(e)}}}function me(r){let e,n;return{c(){e=S("h2"),n=A(r[1]),this.h()},l(t){e=C(t,"H2",{class:!0});var s=G(e);n=j(s,r[1]),s.forEach(_),this.h()},h(){b(e,"class","title svelte-1xrkuak")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&2&&N(n,t[1])},d(t){t&&_(e)}}}function $e(r){let e,n;const t=r[4].body,s=B(t,r,r[3],ae);return{c(){e=S("div"),s&&s.c(),this.h()},l(l){e=C(l,"DIV",{class:!0});var o=G(e);s&&s.l(o),o.forEach(_),this.h()},h(){b(e,"class","body")},m(l,o){v(l,e,o),s&&s.m(e,null),n=!0},p(l,o){s&&s.p&&(!n||o&8)&&R(s,t,l,l[3],n?U(t,l[3],o,Ze):T(l[3]),ae)},i(l){n||(d(s,l),n=!0)},o(l){h(s,l),n=!1},d(l){l&&_(e),s&&s.d(l)}}}function ge(r){let e,n;const t=r[4].footer,s=B(t,r,r[3],fe);return{c(){e=S("div"),s&&s.c(),this.h()},l(l){e=C(l,"DIV",{class:!0});var o=G(e);s&&s.l(o),o.forEach(_),this.h()},h(){b(e,"class","footer")},m(l,o){v(l,e,o),s&&s.m(e,null),n=!0},p(l,o){s&&s.p&&(!n||o&8)&&R(s,t,l,l[3],n?U(t,l[3],o,Xe):T(l[3]),fe)},i(l){n||(d(s,l),n=!0)},o(l){h(s,l),n=!1},d(l){l&&_(e),s&&s.d(l)}}}function xe(r){let e,n,t,s,l,o,f,i,c,m=r[2].image&&ue(r);t=new Ge({});let u=r[0]&&_e(r),$=r[1]&&me(r),p=r[2].body&&$e(r),I=r[2].footer&&ge(r);return{c(){e=S("div"),m&&m.c(),n=P(),w(t.$$.fragment),s=P(),l=S("div"),u&&u.c(),o=P(),$&&$.c(),f=P(),p&&p.c(),i=P(),I&&I.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var g=G(e);m&&m.l(g),n=V(g),k(t.$$.fragment,g),s=V(g),l=C(g,"DIV",{class:!0});var M=G(l);u&&u.l(M),o=V(M),$&&$.l(M),M.forEach(_),f=V(g),p&&p.l(g),i=V(g),I&&I.l(g),g.forEach(_),this.h()},h(){b(l,"class","upper svelte-1xrkuak"),b(e,"class","copy-block svelte-1xrkuak")},m(a,g){v(a,e,g),m&&m.m(e,null),y(e,n),D(t,e,null),y(e,s),y(e,l),u&&u.m(l,null),y(l,o),$&&$.m(l,null),y(e,f),p&&p.m(e,null),y(e,i),I&&I.m(e,null),c=!0},p(a,[g]){a[2].image?m?(m.p(a,g),g&4&&d(m,1)):(m=ue(a),m.c(),d(m,1),m.m(e,n)):m&&(Q(),h(m,1,1,()=>{m=null}),X()),a[0]?u?u.p(a,g):(u=_e(a),u.c(),u.m(l,o)):u&&(u.d(1),u=null),a[1]?$?$.p(a,g):($=me(a),$.c(),$.m(l,null)):$&&($.d(1),$=null),a[2].body?p?(p.p(a,g),g&4&&d(p,1)):(p=$e(a),p.c(),d(p,1),p.m(e,i)):p&&(Q(),h(p,1,1,()=>{p=null}),X()),a[2].footer?I?(I.p(a,g),g&4&&d(I,1)):(I=ge(a),I.c(),d(I,1),I.m(e,null)):I&&(Q(),h(I,1,1,()=>{I=null}),X())},i(a){c||(d(m),d(t.$$.fragment,a),d(p),d(I),c=!0)},o(a){h(m),h(t.$$.fragment,a),h(p),h(I),c=!1},d(a){a&&_(e),m&&m.d(),E(t),u&&u.d(),$&&$.d(),p&&p.d(),I&&I.d()}}}function et(r,e,n){let{$$slots:t={},$$scope:s}=e;const l=je(t);let{supertext:o}=e,{title:f}=e;return r.$$set=i=>{"supertext"in i&&n(0,o=i.supertext),"title"in i&&n(1,f=i.title),"$$scope"in i&&n(3,s=i.$$scope)},[o,f,l,s,t]}class ee extends H{constructor(e){super(),z(this,e,et,xe,L,{supertext:0,title:1})}}const tt=r=>({}),de=r=>({}),nt=r=>({}),pe=r=>({});function st(r){let e,n,t,s,l;const o=r[1].left,f=B(o,r,r[0],pe),i=r[1].right,c=B(i,r,r[0],de);return{c(){e=S("div"),n=S("div"),f&&f.c(),t=P(),s=S("div"),c&&c.c(),this.h()},l(m){e=C(m,"DIV",{class:!0});var u=G(e);n=C(u,"DIV",{class:!0});var $=G(n);f&&f.l($),$.forEach(_),t=V(u),s=C(u,"DIV",{class:!0});var p=G(s);c&&c.l(p),p.forEach(_),u.forEach(_),this.h()},h(){b(n,"class","left"),b(s,"class","right svelte-5zcqvx"),b(e,"class","wide-card svelte-5zcqvx")},m(m,u){v(m,e,u),y(e,n),f&&f.m(n,null),y(e,t),y(e,s),c&&c.m(s,null),l=!0},p(m,[u]){f&&f.p&&(!l||u&1)&&R(f,o,m,m[0],l?U(o,m[0],u,nt):T(m[0]),pe),c&&c.p&&(!l||u&1)&&R(c,i,m,m[0],l?U(i,m[0],u,tt):T(m[0]),de)},i(m){l||(d(f,m),d(c,m),l=!0)},o(m){h(f,m),h(c,m),l=!1},d(m){m&&_(e),f&&f.d(m),c&&c.d(m)}}}function lt(r,e,n){let{$$slots:t={},$$scope:s}=e;return r.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,t]}class rt extends H{constructor(e){super(),z(this,e,lt,st,L,{})}}function he(r){let e,n;return{c(){e=S("span"),n=A(r[3]),this.h()},l(t){e=C(t,"SPAN",{class:!0});var s=G(e);n=j(s,r[3]),s.forEach(_),this.h()},h(){b(e,"class","date text-sm")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&8&&N(n,t[3])},d(t){t&&_(e)}}}function be(r){let e,n;return{c(){e=S("h3"),n=A(r[0])},l(t){e=C(t,"H3",{});var s=G(e);n=j(s,r[0]),s.forEach(_)},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&1&&N(n,t[0])},d(t){t&&_(e)}}}function ve(r){let e,n;return{c(){e=S("p"),n=A(r[2]),this.h()},l(t){e=C(t,"P",{class:!0});var s=G(e);n=j(s,r[2]),s.forEach(_),this.h()},h(){b(e,"class","snippet svelte-w4trqy")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&4&&N(n,t[2])},d(t){t&&_(e)}}}function ot(r){let e,n,t,s,l=r[3]&&he(r),o=r[0]&&be(r),f=r[2]&&ve(r);return{c(){e=S("a"),n=S("div"),l&&l.c(),t=P(),o&&o.c(),s=P(),f&&f.c(),this.h()},l(i){e=C(i,"A",{class:!0,href:!0});var c=G(e);n=C(c,"DIV",{class:!0});var m=G(n);l&&l.l(m),m.forEach(_),t=V(c),o&&o.l(c),s=V(c),f&&f.l(c),c.forEach(_),this.h()},h(){b(n,"class","meta svelte-w4trqy"),b(e,"class","article-card svelte-w4trqy"),b(e,"href",r[1])},m(i,c){v(i,e,c),y(e,n),l&&l.m(n,null),y(e,t),o&&o.m(e,null),y(e,s),f&&f.m(e,null)},p(i,[c]){i[3]?l?l.p(i,c):(l=he(i),l.c(),l.m(n,null)):l&&(l.d(1),l=null),i[0]?o?o.p(i,c):(o=be(i),o.c(),o.m(e,s)):o&&(o.d(1),o=null),i[2]?f?f.p(i,c):(f=ve(i),f.c(),f.m(e,null)):f&&(f.d(1),f=null),c&2&&b(e,"href",i[1])},i:q,o:q,d(i){i&&_(e),l&&l.d(),o&&o.d(),f&&f.d()}}}function it(r,e,n){let t,{title:s=""}=e,{link:l=""}=e,{contentSnippet:o=""}=e,{isoDate:f=""}=e;return r.$$set=i=>{"title"in i&&n(0,s=i.title),"link"in i&&n(1,l=i.link),"contentSnippet"in i&&n(2,o=i.contentSnippet),"isoDate"in i&&n(4,f=i.isoDate)},r.$$.update=()=>{r.$$.dirty&16&&n(3,t=new Date(f).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}))},[s,l,o,t,f]}class ft extends H{constructor(e){super(),z(this,e,it,ot,L,{title:0,link:1,contentSnippet:2,isoDate:4})}}function we(r){let e,n;return{c(){e=S("span"),n=A(r[0]),this.h()},l(t){e=C(t,"SPAN",{class:!0});var s=G(e);n=j(s,r[0]),s.forEach(_),this.h()},h(){b(e,"class","supertext")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&1&&N(n,t[0])},d(t){t&&_(e)}}}function ke(r){let e,n;return{c(){e=S("h2"),n=A(r[1]),this.h()},l(t){e=C(t,"H2",{class:!0});var s=G(e);n=j(s,r[1]),s.forEach(_),this.h()},h(){b(e,"class","svelte-tuz5jg")},m(t,s){v(t,e,s),y(e,n)},p(t,s){s&2&&N(n,t[1])},d(t){t&&_(e)}}}function at(r){let e,n,t,s,l,o,f;n=new Ge({});let i=r[0]&&we(r),c=r[1]&&ke(r);const m=r[3].default,u=B(m,r,r[2],null);return{c(){e=S("div"),w(n.$$.fragment),t=P(),i&&i.c(),s=P(),c&&c.c(),l=P(),o=S("div"),u&&u.c(),this.h()},l($){e=C($,"DIV",{class:!0});var p=G(e);k(n.$$.fragment,p),t=V(p),i&&i.l(p),s=V(p),c&&c.l(p),l=V(p),o=C(p,"DIV",{class:!0});var I=G(o);u&&u.l(I),I.forEach(_),p.forEach(_),this.h()},h(){b(o,"class","cards svelte-tuz5jg"),b(e,"class","carousel svelte-tuz5jg")},m($,p){v($,e,p),D(n,e,null),y(e,t),i&&i.m(e,null),y(e,s),c&&c.m(e,null),y(e,l),y(e,o),u&&u.m(o,null),f=!0},p($,[p]){$[0]?i?i.p($,p):(i=we($),i.c(),i.m(e,s)):i&&(i.d(1),i=null),$[1]?c?c.p($,p):(c=ke($),c.c(),c.m(e,l)):c&&(c.d(1),c=null),u&&u.p&&(!f||p&4)&&R(u,m,$,$[2],f?U(m,$[2],p,null):T($[2]),null)},i($){f||(d(n.$$.fragment,$),d(u,$),f=!0)},o($){h(n.$$.fragment,$),h(u,$),f=!1},d($){$&&_(e),E(n),i&&i.d(),c&&c.d(),u&&u.d($)}}}function ct(r,e,n){let{$$slots:t={},$$scope:s}=e,{supertext:l=""}=e,{title:o=""}=e;return r.$$set=f=>{"supertext"in f&&n(0,l=f.supertext),"title"in f&&n(1,o=f.title),"$$scope"in f&&n(2,s=f.$$scope)},[l,o,s,t]}class ut extends H{constructor(e){super(),z(this,e,ct,at,L,{supertext:0,title:1})}}function De(r,e,n){const t=r.slice();return t[3]=e[n],t}function Ee(r,e){let n,t,s;const l=[e[3]];let o={};for(let f=0;f<l.length;f+=1)o=ze(o,l[f]);return t=new ft({props:o}),{key:r,first:null,c(){n=W(),w(t.$$.fragment),this.h()},l(f){n=W(),k(t.$$.fragment,f),this.h()},h(){this.first=n},m(f,i){v(f,n,i),D(t,f,i),s=!0},p(f,i){e=f;const c=i&4?qe(l,[Ne(e[3])]):{};t.$set(c)},i(f){s||(d(t.$$.fragment,f),s=!0)},o(f){h(t.$$.fragment,f),s=!1},d(f){f&&_(n),E(t,f)}}}function _t(r){let e=[],n=new Map,t,s,l=r[2];const o=f=>f[3].guid;for(let f=0;f<l.length;f+=1){let i=De(r,l,f),c=o(i);n.set(c,e[f]=Ee(c,i))}return{c(){for(let f=0;f<e.length;f+=1)e[f].c();t=W()},l(f){for(let i=0;i<e.length;i+=1)e[i].l(f);t=W()},m(f,i){for(let c=0;c<e.length;c+=1)e[c].m(f,i);v(f,t,i),s=!0},p(f,i){i&4&&(l=f[2],Q(),e=He(e,i,o,1,f,l,n,t.parentNode,Le,Ee,t,De),X())},i(f){if(!s){for(let i=0;i<l.length;i+=1)d(e[i]);s=!0}},o(f){for(let i=0;i<e.length;i+=1)h(e[i]);s=!1},d(f){for(let i=0;i<e.length;i+=1)e[i].d(f);f&&_(t)}}}function mt(r){let e,n;return e=new ut({props:{supertext:r[0],title:r[1],$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,[s]){const l={};s&1&&(l.supertext=t[0]),s&2&&(l.title=t[1]),s&68&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function $t(r,e,n){let{supertext:t=""}=e,{title:s=""}=e,{articles:l=[]}=e;return r.$$set=o=>{"supertext"in o&&n(0,t=o.supertext),"title"in o&&n(1,s=o.title),"articles"in o&&n(2,l=o.articles)},[t,s,l]}class gt extends H{constructor(e){super(),z(this,e,$t,mt,L,{supertext:0,title:1,articles:2})}}function dt(r){let e,n;return{c(){e=S("img"),this.h()},l(t){e=C(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,n=r[0])||b(e,"src",n),b(e,"alt",r[1]),b(e,"class","svelte-1s493hw"),O(e,"bordered",r[2])},m(t,s){v(t,e,s)},p(t,s){s&1&&!F(e.src,n=t[0])&&b(e,"src",n),s&2&&b(e,"alt",t[1]),s&4&&O(e,"bordered",t[2])},i:q,o:q,d(t){t&&_(e)}}}function pt(r){let e,n,t;function s(o){r[7](o)}let l={element:r[5],threshold:1,rootMargin:"100px",once:!0,$$slots:{default:[ht]},$$scope:{ctx:r}};return r[4]!==void 0&&(l.intersecting=r[4]),e=new Ce({props:l}),x.push(()=>ye(e,"intersecting",s)),{c(){w(e.$$.fragment)},l(o){k(e.$$.fragment,o)},m(o,f){D(e,o,f),t=!0},p(o,f){const i={};f&32&&(i.element=o[5]),f&311&&(i.$$scope={dirty:f,ctx:o}),!n&&f&16&&(n=!0,i.intersecting=o[4],Ie(()=>n=!1)),e.$set(i)},i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){h(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function ht(r){let e,n;return{c(){e=S("img"),this.h()},l(t){e=C(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){b(e,"class","animate svelte-1s493hw"),F(e.src,n=r[0])||b(e,"src",n),b(e,"alt",r[1]),O(e,"bordered",r[2]),O(e,"intersecting",r[4])},m(t,s){v(t,e,s),r[6](e)},p(t,s){s&1&&!F(e.src,n=t[0])&&b(e,"src",n),s&2&&b(e,"alt",t[1]),s&4&&O(e,"bordered",t[2]),s&16&&O(e,"intersecting",t[4])},d(t){t&&_(e),r[6](null)}}}function bt(r){let e,n,t,s;const l=[pt,dt],o=[];function f(i,c){return i[3]?0:1}return e=f(r),n=o[e]=l[e](r),{c(){n.c(),t=W()},l(i){n.l(i),t=W()},m(i,c){o[e].m(i,c),v(i,t,c),s=!0},p(i,[c]){let m=e;e=f(i),e===m?o[e].p(i,c):(Q(),h(o[m],1,1,()=>{o[m]=null}),X(),n=o[e],n?n.p(i,c):(n=o[e]=l[e](i),n.c()),d(n,1),n.m(t.parentNode,t))},i(i){s||(d(n),s=!0)},o(i){h(n),s=!1},d(i){o[e].d(i),i&&_(t)}}}function vt(r,e,n){let{src:t}=e,{alt:s}=e,{bordered:l=!1}=e,{animate:o=!1}=e,f=!1,i;function c(u){x[u?"unshift":"push"](()=>{i=u,n(5,i)})}function m(u){f=u,n(4,f)}return r.$$set=u=>{"src"in u&&n(0,t=u.src),"alt"in u&&n(1,s=u.alt),"bordered"in u&&n(2,l=u.bordered),"animate"in u&&n(3,o=u.animate)},[t,s,l,o,f,i,c,m]}class te extends H{constructor(e){super(),z(this,e,vt,bt,L,{src:0,alt:1,bordered:2,animate:3})}}var wt="/hello-sveltekit/_app/immutable/assets/tail-quest-defense-screenshot-d8bdd54b.png",kt="/hello-sveltekit/_app/immutable/assets/2d-5a0978ee.png",Dt="/hello-sveltekit/_app/immutable/assets/3d-bff7fb50.jpg",Et="/hello-sveltekit/_app/immutable/assets/language-6bae0f58.png";function yt(r){let e,n=r[1]("homepage.hero.body")+"",t;return{c(){e=S("p"),t=A(n),this.h()},l(s){e=C(s,"P",{slot:!0});var l=G(e);t=j(l,n),l.forEach(_),this.h()},h(){b(e,"slot","body")},m(s,l){v(s,e,l),y(e,t)},p(s,l){l&2&&n!==(n=s[1]("homepage.hero.body")+"")&&N(t,n)},d(s){s&&_(e)}}}function It(r){let e=r[1]("global.download")+"",n;return{c(){n=A(e)},l(t){n=j(t,e)},m(t,s){v(t,n,s)},p(t,s){s&2&&e!==(e=t[1]("global.download")+"")&&N(n,e)},d(t){t&&_(n)}}}function St(r){let e,n;return e=new Se({props:{slot:"footer",type:"button",href:"/download",$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&6&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Ct(r){let e,n=r[1]("homepage.powerful_tools.body")+"",t;return{c(){e=S("p"),t=A(n),this.h()},l(s){e=C(s,"P",{slot:!0});var l=G(e);t=j(l,n),l.forEach(_),this.h()},h(){b(e,"slot","body")},m(s,l){v(s,e,l),y(e,t)},p(s,l){l&2&&n!==(n=s[1]("homepage.powerful_tools.body")+"")&&N(t,n)},d(s){s&&_(e)}}}function Gt(r){let e,n;return e=new ee({props:{supertext:r[1]("homepage.powerful_tools.supertext"),title:r[1]("homepage.powerful_tools.title"),$$slots:{body:[Ct]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&2&&(l.supertext=t[1]("homepage.powerful_tools.supertext")),s&2&&(l.title=t[1]("homepage.powerful_tools.title")),s&6&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Mt(r){let e,n;return e=new K({props:{cols:"1 / span 2",$$slots:{default:[Gt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&6&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Pt(r){let e,n;return e=new Z({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&6&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Vt(r){let e,n;return e=new te({props:{slot:"image",src:kt,bordered:!0}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p:q,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function At(r){let e,n;return{c(){e=S("p"),n=A(`Build crisp and performant 2D games with Godot's dedicated 2D rendering engine with real
					2D pixel coordinates and 2D nodes. Don't settle for bolted on 2D.`),this.h()},l(t){e=C(t,"P",{slot:!0});var s=G(e);n=j(s,`Build crisp and performant 2D games with Godot's dedicated 2D rendering engine with real
					2D pixel coordinates and 2D nodes. Don't settle for bolted on 2D.`),s.forEach(_),this.h()},h(){b(e,"slot","body")},m(t,s){v(t,e,s),y(e,n)},p:q,d(t){t&&_(e)}}}function jt(r){let e,n;return e=new ee({props:{title:"Dedicated 2D engine",$$slots:{body:[At],image:[Vt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function qt(r){let e,n;return e=new te({props:{slot:"image",src:Dt,bordered:!0}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p:q,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Nt(r){let e,n;return{c(){e=S("p"),n=A(`Godot's 3D nodes give you everything you need to build, animate, and render your 3D worlds
					and characters.`),this.h()},l(t){e=C(t,"P",{slot:!0});var s=G(e);n=j(s,`Godot's 3D nodes give you everything you need to build, animate, and render your 3D worlds
					and characters.`),s.forEach(_),this.h()},h(){b(e,"slot","body")},m(t,s){v(t,e,s),y(e,n)},p:q,d(t){t&&_(e)}}}function Ht(r){let e,n;return e=new ee({props:{title:"Simple and powerful 3D",$$slots:{body:[Nt],image:[qt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function zt(r){let e,n,t,s;return e=new K({props:{cols:"1 / span 2",$$slots:{default:[jt]},$$scope:{ctx:r}}}),t=new K({props:{cols:"3 / span 2",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment),n=P(),w(t.$$.fragment)},l(l){k(e.$$.fragment,l),n=V(l),k(t.$$.fragment,l)},m(l,o){D(e,l,o),v(l,n,o),D(t,l,o),s=!0},p(l,o){const f={};o&4&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const i={};o&4&&(i.$$scope={dirty:o,ctx:l}),t.$set(i)},i(l){s||(d(e.$$.fragment,l),d(t.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),h(t.$$.fragment,l),s=!1},d(l){E(e,l),l&&_(n),E(t,l)}}}function Lt(r){let e,n;return e=new Z({props:{alignItems:"flex-start",$$slots:{default:[zt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Ot(r){let e,n;return{c(){e=S("p"),n=A(`Keep your code modular with an Object oriented API using Godot's own GDScript, C#, C++, or
					bring your own using GDNative.`),this.h()},l(t){e=C(t,"P",{slot:!0});var s=G(e);n=j(s,`Keep your code modular with an Object oriented API using Godot's own GDScript, C#, C++, or
					bring your own using GDNative.`),s.forEach(_),this.h()},h(){b(e,"slot","body")},m(t,s){v(t,e,s),y(e,n)},p:q,d(t){t&&_(e)}}}function Bt(r){let e,n;return e=new ee({props:{supertext:"Polyglot engine",title:"Use the right language for the job",$$slots:{body:[Ot]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Rt(r){let e,n;return e=new te({props:{src:Et,bordered:!0,animate:!0}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p:q,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Tt(r){let e,n,t,s;return e=new K({props:{cols:"1 / span 2",$$slots:{default:[Bt]},$$scope:{ctx:r}}}),t=new K({props:{cols:"3 / span 2",$$slots:{default:[Rt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment),n=P(),w(t.$$.fragment)},l(l){k(e.$$.fragment,l),n=V(l),k(t.$$.fragment,l)},m(l,o){D(e,l,o),v(l,n,o),D(t,l,o),s=!0},p(l,o){const f={};o&4&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const i={};o&4&&(i.$$scope={dirty:o,ctx:l}),t.$set(i)},i(l){s||(d(e.$$.fragment,l),d(t.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),h(t.$$.fragment,l),s=!1},d(l){E(e,l),l&&_(n),E(t,l)}}}function Ut(r){let e,n;return e=new Z({props:{$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Kt(r){let e,n;return{c(){e=S("h2"),n=A("Godot is 100% free and fully Open Source"),this.h()},l(t){e=C(t,"H2",{slot:!0});var s=G(e);n=j(s,"Godot is 100% free and fully Open Source"),s.forEach(_),this.h()},h(){b(e,"slot","left")},m(t,s){v(t,e,s),y(e,n)},p:q,d(t){t&&_(e)}}}function Wt(r){let e;return{c(){e=A("Learn more")},l(n){e=j(n,"Learn more")},m(n,t){v(n,e,t)},d(n){n&&_(e)}}}function Yt(r){let e,n,t,s,l,o;return l=new Se({props:{type:"button",$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){e=S("div"),n=S("p"),t=A(`Godot is completely free and open-source under the permissive MIT license. Your game is
						yours, down to the last line of engine code. No royalties, no strings attached.`),s=P(),w(l.$$.fragment),this.h()},l(f){e=C(f,"DIV",{slot:!0});var i=G(e);n=C(i,"P",{});var c=G(n);t=j(c,`Godot is completely free and open-source under the permissive MIT license. Your game is
						yours, down to the last line of engine code. No royalties, no strings attached.`),c.forEach(_),s=V(i),k(l.$$.fragment,i),i.forEach(_),this.h()},h(){b(e,"slot","right")},m(f,i){v(f,e,i),y(e,n),y(n,t),y(e,s),D(l,e,null),o=!0},p(f,i){const c={};i&4&&(c.$$scope={dirty:i,ctx:f}),l.$set(c)},i(f){o||(d(l.$$.fragment,f),o=!0)},o(f){h(l.$$.fragment,f),o=!1},d(f){f&&_(e),E(l)}}}function Jt(r){let e,n;return e=new rt({props:{$$slots:{right:[Yt],left:[Kt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Qt(r){let e,n;return e=new K({props:{cols:"1/span 4",$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Xt(r){let e,n;return e=new Z({props:{$$slots:{default:[Qt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Zt(r){let e,n;return e=new gt({props:{supertext:"News",title:"See what's new with Godot",articles:r[0]}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.articles=t[0]),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Ft(r){let e,n;return e=new K({props:{cols:"1/span 4",$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&5&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function xt(r){let e,n;return e=new Z({props:{$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const l={};s&5&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function en(r){let e,n,t,s,l,o,f,i,c,m,u,$,p,I;return t=new Re({props:{title:r[1]("homepage.hero.title"),backgroundImage:wt,$$slots:{footer:[St],body:[yt]},$$scope:{ctx:r}}}),l=new J({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),f=new J({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),c=new J({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),u=new J({props:{$$slots:{default:[Xt]},$$scope:{ctx:r}}}),p=new J({props:{$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){e=S("meta"),n=P(),w(t.$$.fragment),s=P(),w(l.$$.fragment),o=P(),w(f.$$.fragment),i=P(),w(c.$$.fragment),m=P(),w(u.$$.fragment),$=P(),w(p.$$.fragment),this.h()},l(a){const g=Oe('[data-svelte="svelte-t32ptj"]',document.head);e=C(g,"META",{name:!0,content:!0}),g.forEach(_),n=V(a),k(t.$$.fragment,a),s=V(a),k(l.$$.fragment,a),o=V(a),k(f.$$.fragment,a),i=V(a),k(c.$$.fragment,a),m=V(a),k(u.$$.fragment,a),$=V(a),k(p.$$.fragment,a),this.h()},h(){document.title="Home",b(e,"name","description"),b(e,"content","Svelte demo app")},m(a,g){y(document.head,e),v(a,n,g),D(t,a,g),v(a,s,g),D(l,a,g),v(a,o,g),D(f,a,g),v(a,i,g),D(c,a,g),v(a,m,g),D(u,a,g),v(a,$,g),D(p,a,g),I=!0},p(a,[g]){const M={};g&2&&(M.title=a[1]("homepage.hero.title")),g&6&&(M.$$scope={dirty:g,ctx:a}),t.$set(M);const Y={};g&6&&(Y.$$scope={dirty:g,ctx:a}),l.$set(Y);const ne={};g&4&&(ne.$$scope={dirty:g,ctx:a}),f.$set(ne);const se={};g&4&&(se.$$scope={dirty:g,ctx:a}),c.$set(se);const le={};g&4&&(le.$$scope={dirty:g,ctx:a}),u.$set(le);const re={};g&5&&(re.$$scope={dirty:g,ctx:a}),p.$set(re)},i(a){I||(d(t.$$.fragment,a),d(l.$$.fragment,a),d(f.$$.fragment,a),d(c.$$.fragment,a),d(u.$$.fragment,a),d(p.$$.fragment,a),I=!0)},o(a){h(t.$$.fragment,a),h(l.$$.fragment,a),h(f.$$.fragment,a),h(c.$$.fragment,a),h(u.$$.fragment,a),h(p.$$.fragment,a),I=!1},d(a){_(e),a&&_(n),E(t,a),a&&_(s),E(l,a),a&&_(o),E(f,a),a&&_(i),E(c,a),a&&_(m),E(u,a),a&&_($),E(p,a)}}}function tn(r,e,n){let t;Be(r,Te,l=>n(1,t=l));let{articles:s=[]}=e;return r.$$set=l=>{"articles"in l&&n(0,s=l.articles)},[s,t]}class fn extends H{constructor(e){super(),z(this,e,tn,en,L,{articles:0})}}export{fn as default};
