import{f as _,h as d,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-5ad02603.js";import{N as S}from"./NoteViewer-53ad1136.js";import{u as V}from"./index-4841fc0d.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",j,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",z,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),k(S,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/home/andreock/Scrivania/Lezione3/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};