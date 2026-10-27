import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{i as n,r}from"./Icon-B4LZwMa5.js";import{n as i,t as a}from"./IconButton-QIEFAujF.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Icon Button`,component:a,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `icon-button-skill.md` is a placeholder. Implemented as the Figma Button with *Show label* off: square, same variants/sizes/radius, required accessible label (shown as a tooltip)."}}},args:{icon:`action/settings`,label:`Settings`,variant:`ghost`,size:`md`,radius:`default`,onClick:c()},argTypes:{icon:{control:`select`,options:r}}},u={play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Settings`})),await s(e.onClick).toHaveBeenCalledOnce()}},d={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[(0,o.jsx)(a,{...e,variant:`primary`,icon:`action/add`,label:`Add`}),(0,o.jsx)(a,{...e,variant:`secondary`,icon:`action/edit`,label:`Edit`}),(0,o.jsx)(a,{...e,variant:`ghost`,icon:`action/more`,label:`More actions`}),(0,o.jsx)(a,{...e,variant:`danger`,icon:`action/delete`,label:`Delete`})]})},f={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,o.jsx)(a,{...e,variant:`secondary`,size:`sm`}),(0,o.jsx)(a,{...e,variant:`secondary`,size:`md`}),(0,o.jsx)(a,{...e,variant:`secondary`,size:`lg`}),(0,o.jsx)(a,{...e,variant:`secondary`,radius:`rounded`})]})},p={args:{disabled:!0,variant:`secondary`}},m=[`Default`,`Variants`,`Sizes`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Settings'
    }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      <IconButton {...args} variant="primary" icon="action/add" label="Add" />
      <IconButton {...args} variant="secondary" icon="action/edit" label="Edit" />
      <IconButton {...args} variant="ghost" icon="action/more" label="More actions" />
      <IconButton {...args} variant="danger" icon="action/delete" label="Delete" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <IconButton {...args} variant="secondary" size="sm" />
      <IconButton {...args} variant="secondary" size="md" />
      <IconButton {...args} variant="secondary" size="lg" />
      <IconButton {...args} variant="secondary" radius="rounded" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: 'secondary'
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Default,p as Disabled,f as Sizes,d as Variants,m as __namedExportsOrder,l as default};