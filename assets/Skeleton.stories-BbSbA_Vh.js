import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Skeleton-BceofBmH.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Components/Skeleton`,component:r,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `skeleton-skill.md` is a placeholder. Built from common practice (text/rect/circle/pill shapes, shimmer, reduced-motion safe); review before shipping."}}},args:{shape:`text`,animated:!0}},o={args:{width:240}},s={args:{lines:4}},c={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-lg)`,alignItems:`center`},children:[(0,i.jsx)(r,{...e,shape:`circle`}),(0,i.jsx)(r,{...e,shape:`pill`}),(0,i.jsx)(r,{...e,shape:`rect`,width:200,height:96})]})},l={render:e=>(0,i.jsxs)(`div`,{"aria-busy":`true`,style:{display:`flex`,gap:`var(--space-inline-md)`,width:360,padding:`var(--space-inset-lg)`,background:`var(--surface-bg-elevated)`,borderRadius:`var(--radius-surface)`},children:[(0,i.jsx)(`span`,{className:`visually-hidden`,children:`Loading profile`}),(0,i.jsx)(r,{...e,shape:`circle`}),(0,i.jsxs)(`div`,{style:{flex:1},children:[(0,i.jsx)(r,{...e,width:`50%`}),(0,i.jsx)(r,{...e,lines:2})]})]})},u=[`Default`,`Paragraph`,`Shapes`,`CardPlaceholder`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: 240
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 4
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-lg)',
    alignItems: 'center'
  }}>
      <Skeleton {...args} shape="circle" />
      <Skeleton {...args} shape="pill" />
      <Skeleton {...args} shape="rect" width={200} height={96} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div aria-busy="true" style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    width: 360,
    padding: 'var(--space-inset-lg)',
    background: 'var(--surface-bg-elevated)',
    borderRadius: 'var(--radius-surface)'
  }}>
      <span className="visually-hidden">Loading profile</span>
      <Skeleton {...args} shape="circle" />
      <div style={{
      flex: 1
    }}>
        <Skeleton {...args} width="50%" />
        <Skeleton {...args} lines={2} />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as CardPlaceholder,o as Default,s as Paragraph,c as Shapes,u as __namedExportsOrder,a as default};