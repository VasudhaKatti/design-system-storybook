import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Badge-r4utTqyD.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i=t(),{expect:a,fn:o}=__STORYBOOK_MODULE_TEST__,s=[`success`,`warning`,`error`,`info`,`neutral`],c=[`filled`,`subtle`,`outlined`],l={title:`Components/Badge`,component:r,tags:[`autodocs`],args:{type:`text`,status:`success`,variant:`subtle`,size:`md`,label:`Active`}},u={},d={render:e=>(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, max-content)`,gap:`var(--space-inline-md)`},children:c.flatMap(t=>s.map(n=>(0,i.jsx)(r,{...e,variant:t,status:n,label:n},t+n)))})},f={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,i.jsx)(r,{...e,size:`sm`}),(0,i.jsx)(r,{...e,size:`md`}),(0,i.jsx)(r,{...e,size:`lg`})]})},p={args:{icon:`status/success`}},m={args:{type:`numeric`,status:`error`,variant:`filled`,count:120,"aria-label":`120 unread notifications`},play:async({canvas:e})=>{await a(e.getByText(`99+`)).toBeVisible()}},h={args:{type:`dot`,status:`error`,"aria-label":`New activity`}},g={args:{label:`Design`,status:`info`,onDismiss:o()},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Remove Design`})),await a(e.onDismiss).toHaveBeenCalledOnce()}},_={args:{label:`A very long label that will not fit inside the badge`}},v=[`Default`,`Matrix`,`Sizes`,`WithIcon`,`Numeric`,`Dot`,`Dismissible`,`Truncated`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, max-content)',
    gap: 'var(--space-inline-md)'
  }}>
      {VARIANTS.flatMap(variant => STATUSES.map(status => <Badge key={variant + status} {...args} variant={variant} status={status} label={status} />))}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'status/success'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'numeric',
    status: 'error',
    variant: 'filled',
    count: 120,
    'aria-label': '120 unread notifications'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('99+')).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dot',
    status: 'error',
    'aria-label': 'New activity'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Design',
    status: 'info',
    onDismiss: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Design'
    }));
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'A very long label that will not fit inside the badge'
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{u as Default,g as Dismissible,h as Dot,d as Matrix,m as Numeric,f as Sizes,_ as Truncated,p as WithIcon,v as __namedExportsOrder,l as default};