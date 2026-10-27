import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{i as n,n as r,r as i,t as a}from"./MenuButton-DL1HKy_k.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),o=t(),{expect:s,fn:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d=[{id:`doc`,label:`Document`,icon:`action/edit`,onSelect:c()},{id:`folder`,label:`Folder`,icon:`layout/grid`},{id:`template`,label:`Template`,icon:`action/copy`,disabled:!0}],f=[{type:`group`,label:`File`},{id:`rename`,label:`Rename`,shortcut:`F2`},{id:`duplicate`,label:`Duplicate`,shortcut:`⌘D`},{id:`download`,label:`Download`,icon:`action/download`},{type:`divider`},{id:`delete`,label:`Delete`,icon:`action/delete`,danger:!0}],p={title:`Components/Menu Buttons`,component:r,tags:[`autodocs`],args:{label:`Create`,items:d,variant:`secondary`,size:`md`},decorators:[e=>(0,o.jsx)(`div`,{style:{minHeight:260},children:(0,o.jsx)(e,{})})]},m={name:`Menu button`,play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Create`});await n.click(r);let i=await u(t.ownerDocument.body).findByRole(`menu`);await l(()=>s(u(i).getByRole(`menuitem`,{name:`Document`})).toHaveFocus()),await n.keyboard(`{ArrowDown}`),await s(u(i).getByRole(`menuitem`,{name:`Folder`})).toHaveFocus(),await n.keyboard(`{Escape}`),await l(()=>s(r).toHaveFocus())}},h={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,o.jsx)(r,{...e,size:`xs`}),(0,o.jsx)(r,{...e,size:`sm`}),(0,o.jsx)(r,{...e,size:`md`}),(0,o.jsx)(r,{...e,size:`lg`})]})},g={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[(0,o.jsx)(r,{...e,variant:`primary`,icon:`action/add`}),(0,o.jsx)(r,{...e,variant:`secondary`}),(0,o.jsx)(r,{...e,variant:`ghost`,label:`Actions`})]})},_={name:`Combo button`,render:()=>(0,o.jsx)(a,{label:`Save`,onClick:c(),items:[{id:`save-as`,label:`Save as…`},{id:`save-template`,label:`Save as template`},{id:`export`,label:`Export PDF`,icon:`action/download`}]})},v={name:`Overflow menu`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,maxWidth:360,padding:`var(--space-inset-sm) var(--space-inset-md)`,background:`var(--surface-bg-elevated)`,borderRadius:`var(--radius-surface)`},children:[(0,o.jsx)(`span`,{children:`Quarterly report.pdf`}),(0,o.jsx)(i,{label:`Actions for Quarterly report`,items:f})]})},y={args:{disabled:!0}},b=[`Menu`,`Sizes`,`Styles`,`Combo`,`Overflow`,`Disabled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Menu button',
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Create'
    });
    await userEvent.click(trigger);
    const body = within(canvasElement.ownerDocument.body);
    const menu = await body.findByRole('menu');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: 'Document'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Folder'
    })).toHaveFocus();
    // Disabled items are skipped; Escape returns focus to the trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <MenuButton {...args} size="xs" />
      <MenuButton {...args} size="sm" />
      <MenuButton {...args} size="md" />
      <MenuButton {...args} size="lg" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      <MenuButton {...args} variant="primary" icon="action/add" />
      <MenuButton {...args} variant="secondary" />
      <MenuButton {...args} variant="ghost" label="Actions" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Combo button',
  render: () => <ComboButton label="Save" onClick={fn()} items={[{
    id: 'save-as',
    label: 'Save as…'
  }, {
    id: 'save-template',
    label: 'Save as template'
  }, {
    id: 'export',
    label: 'Export PDF',
    icon: 'action/download'
  }]} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Overflow menu',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 360,
    padding: 'var(--space-inset-sm) var(--space-inset-md)',
    background: 'var(--surface-bg-elevated)',
    borderRadius: 'var(--radius-surface)'
  }}>
      <span>Quarterly report.pdf</span>
      <OverflowMenu label="Actions for Quarterly report" items={ROW} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Combo,y as Disabled,m as Menu,v as Overflow,h as Sizes,g as Styles,b as __namedExportsOrder,p as default};