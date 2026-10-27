import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Select-B0Tm-T6W.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i=t(),{expect:a,fn:o,waitFor:s,within:c}=__STORYBOOK_MODULE_TEST__,l=[{value:`de`,label:`Germany`,group:`Europe`},{value:`fr`,label:`France`,group:`Europe`},{value:`pl`,label:`Poland`,group:`Europe`},{value:`in`,label:`India`,group:`Asia`},{value:`jp`,label:`Japan`,group:`Asia`},{value:`kp`,label:`North Korea`,group:`Asia`,disabled:!0},{value:`us`,label:`United States`,group:`Americas`},{value:`br`,label:`Brazil`,group:`Americas`}],u={title:`Components/Select`,component:r,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `select-skill.md` is a placeholder. Built from the Figma *Dropdown* sets (trigger sizes/states, clearable, menu with search, groups, loading and empty states) using the ARIA select-only combobox pattern."}}},args:{label:`Role`,options:[{value:`viewer`,label:`Viewer`,description:`Can view and comment`,icon:`form/eye`},{value:`editor`,label:`Editor`,description:`Can edit content`,icon:`action/edit`},{value:`admin`,label:`Admin`,description:`Full access`,icon:`action/settings`}],size:`md`,onValueChange:o()},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:320,minHeight:280},children:(0,i.jsx)(e,{})})]},d={play:async({args:e,canvas:t,canvasElement:n,userEvent:r})=>{let i=t.getByRole(`combobox`,{name:/Role/});i.focus(),await r.keyboard(`{ArrowDown}`);let o=c(n.ownerDocument.body),l=await o.findByRole(`listbox`);await s(()=>a(l).toBeVisible()),await a(c(l).getAllByRole(`option`)).toHaveLength(3),await r.keyboard(`{ArrowDown}{Enter}`),await a(e.onValueChange).toHaveBeenCalledWith(`editor`),await s(()=>a(o.queryByRole(`listbox`)).toBeNull()),await a(i).toHaveTextContent(`Editor`)}},f={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,i.jsx)(r,{...e,size:`sm`,label:`Small`}),(0,i.jsx)(r,{...e,size:`md`,label:`Medium`}),(0,i.jsx)(r,{...e,size:`lg`,label:`Large`})]})},p={args:{label:`Country`,options:l,searchable:!0,clearable:!0,defaultValue:`fr`}},m={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,i.jsx)(r,{...e,label:`Error`,error:`Choose a role.`,required:!0}),(0,i.jsx)(r,{...e,label:`Disabled`,disabled:!0,defaultValue:`viewer`}),(0,i.jsx)(r,{...e,label:`Read-only`,readOnly:!0,defaultValue:`admin`,helperText:`Set by your organisation.`})]})},h={args:{loading:!0,label:`Owner`}},g={args:{options:[],emptyText:`No teams yet`,label:`Team`}},_=[`Default`,`Sizes`,`GroupedAndSearchable`,`States`,`LoadingMenu`,`EmptyMenu`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    canvasElement,
    userEvent
  }) => {
    const trigger = canvas.getByRole('combobox', {
      name: /Role/
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const body = within(canvasElement.ownerDocument.body);
    const listbox = await body.findByRole('listbox');
    await waitFor(() => expect(listbox).toBeVisible()); // fades in
    await expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(args.onValueChange).toHaveBeenCalledWith('editor');
    await waitFor(() => expect(body.queryByRole('listbox')).toBeNull());
    await expect(trigger).toHaveTextContent('Editor');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Select {...args} size="sm" label="Small" />
      <Select {...args} size="md" label="Medium" />
      <Select {...args} size="lg" label="Large" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: COUNTRIES,
    searchable: true,
    clearable: true,
    defaultValue: 'fr'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Select {...args} label="Error" error="Choose a role." required />
      <Select {...args} label="Disabled" disabled defaultValue="viewer" />
      <Select {...args} label="Read-only" readOnly defaultValue="admin" helperText="Set by your organisation." />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Owner'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    emptyText: 'No teams yet',
    label: 'Team'
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as Default,g as EmptyMenu,p as GroupedAndSearchable,h as LoadingMenu,f as Sizes,m as States,_ as __namedExportsOrder,u as default};