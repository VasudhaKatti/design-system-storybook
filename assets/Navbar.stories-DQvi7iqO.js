import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{i as r,r as i,t as a}from"./Avatar-DpqFpdMW.js";import{n as o,t as s}from"./Navbar-dav5Khts.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),r(),o(),l=n(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Navbar`,component:s,tags:[`autodocs`,`needs-spec`],parameters:{layout:`fullscreen`,docs:{description:{component:"⚠️ **No approved spec yet** — `navbar-skill.md` is a placeholder. Implemented as a sidebar shell (brand header, inline Menu, footer) that collapses to an icon rail with tooltips. Review before shipping."}}},args:{items:[{key:`home`,label:`Dashboard`,icon:`nav/home`},{key:`projects`,label:`Projects`,icon:`layout/grid`},{key:`tasks`,label:`Tasks`,icon:`form/check`},{key:`team`,label:`Team`,icon:`user/group`},{type:`submenu`,key:`settings`,label:`Settings`,icon:`action/settings`,children:[{key:`profile`,label:`Profile`},{key:`billing`,label:`Billing`}]}],"aria-label":`Main`},render:e=>{let[t,n]=(0,c.useState)(`projects`),[r,o]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{style:{height:520,display:`flex`},children:(0,l.jsx)(s,{...e,selectedKey:t,onSelect:n,collapsed:r,onCollapsedChange:o,header:(0,l.jsx)(`strong`,{className:`text-heading-sm`,children:`Acme`}),footer:r?(0,l.jsx)(a,{name:`Alex Johnson`,size:`sm`}):(0,l.jsx)(i,{name:`Alex Johnson`,email:`alex@acme.com`,size:`sm`})})})}},f={play:async({canvas:e,userEvent:t})=>{await u(e.getByRole(`button`,{name:`Projects`})).toHaveAttribute(`aria-current`,`page`),await t.click(e.getByRole(`button`,{name:`Collapse sidebar`})),await u(e.getByRole(`button`,{name:`Expand sidebar`})).toHaveAttribute(`aria-expanded`,`false`)}},p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Projects'
    })).toHaveAttribute('aria-current', 'page');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Collapse sidebar'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Expand sidebar'
    })).toHaveAttribute('aria-expanded', 'false');
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Default,p as __namedExportsOrder,d as default};