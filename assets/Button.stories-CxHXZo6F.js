import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{i as n,r}from"./Icon-B4LZwMa5.js";import{n as i,t as a}from"./Button-Cxz3wpGw.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l=[`primary`,`secondary`,`ghost`,`danger`],u={title:`Components/Button`,component:a,tags:[`autodocs`],args:{children:`Save changes`,variant:`primary`,size:`md`,radius:`default`,loading:!1,disabled:!1,fullWidth:!1,onClick:c()},argTypes:{leadingIcon:{control:`select`,options:[void 0,...r]},trailingIcon:{control:`select`,options:[void 0,...r]}}},d={play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Save changes`})),await s(e.onClick).toHaveBeenCalledOnce()}},f={args:{variant:`secondary`}},p={args:{variant:`ghost`}},m={args:{variant:`danger`,children:`Delete project`,leadingIcon:`action/delete`}},h={render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, max-content)`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[l.map(t=>(0,o.jsx)(a,{...e,variant:t,children:t},t)),l.map(t=>(0,o.jsx)(a,{...e,variant:t,disabled:!0,children:t},t))]})},g={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,o.jsx)(a,{...e,size:`sm`}),(0,o.jsx)(a,{...e,size:`md`}),(0,o.jsx)(a,{...e,size:`lg`})]})},_={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[(0,o.jsx)(a,{...e,radius:`default`,children:`Default`}),(0,o.jsx)(a,{...e,radius:`rounded`,children:`Rounded`}),(0,o.jsx)(a,{...e,radius:`none`,children:`None`})]})},v={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[(0,o.jsx)(a,{...e,leadingIcon:`action/add`,children:`Create`}),(0,o.jsx)(a,{...e,variant:`secondary`,trailingIcon:`nav/arrow-right`,children:`Next`}),(0,o.jsx)(a,{...e,variant:`ghost`,trailingIcon:`action/external-link`,children:`Open docs`})]})},y={args:{loading:!0,children:`Saving…`},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Saving…`});await s(r).toHaveAttribute(`aria-busy`,`true`),await n.click(r),await s(e.onClick).not.toHaveBeenCalled()}},b={args:{disabled:!0}},x={args:{fullWidth:!0},decorators:[e=>(0,o.jsx)(`div`,{style:{width:320},children:(0,o.jsx)(e,{})})]},S=[`Primary`,`Secondary`,`Ghost`,`Danger`,`Variants`,`Sizes`,`Radius`,`WithIcons`,`Loading`,`Disabled`,`FullWidth`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete project',
    leadingIcon: 'action/delete'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, max-content)',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      {VARIANTS.map(v => <Button key={v} {...args} variant={v}>
          {v}
        </Button>)}
      {VARIANTS.map(v => <Button key={v} {...args} variant={v} disabled>
          {v}
        </Button>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      <Button {...args} radius="default">Default</Button>
      <Button {...args} radius="rounded">Rounded</Button>
      <Button {...args} radius="none">None</Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      <Button {...args} leadingIcon="action/add">Create</Button>
      <Button {...args} variant="secondary" trailingIcon="nav/arrow-right">Next</Button>
      <Button {...args} variant="ghost" trailingIcon="action/external-link">Open docs</Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Saving…'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Saving…'
    });
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...x.parameters?.docs?.source}}}})))()}C();export{m as Danger,b as Disabled,x as FullWidth,p as Ghost,y as Loading,d as Primary,_ as Radius,f as Secondary,g as Sizes,h as Variants,v as WithIcons,S as __namedExportsOrder,u as default};