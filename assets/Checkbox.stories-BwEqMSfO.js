import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,r as i,t as a}from"./Checkbox-CPoTExZs.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o=t(),i(),s=n(),{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Checkbox`,component:a,tags:[`autodocs`],args:{label:`Email me product updates`,size:`md`}},u={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`checkbox`,{name:`Email me product updates`});await t.click(e.getByText(`Email me product updates`)),await c(n).toBeChecked(),await t.keyboard(` `),await c(n).not.toBeChecked()}},d={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,s.jsx)(a,{...e,label:`Unselected`}),(0,s.jsx)(a,{...e,label:`Selected`,defaultChecked:!0}),(0,s.jsx)(a,{...e,label:`Indeterminate`,indeterminate:!0,defaultChecked:!0}),(0,s.jsx)(a,{...e,label:`Error unselected`,error:`Required`}),(0,s.jsx)(a,{...e,label:`Error selected`,error:`Not allowed`,defaultChecked:!0})]})},f={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,s.jsx)(a,{...e,size:`sm`,label:`Small`,defaultChecked:!0}),(0,s.jsx)(a,{...e,size:`md`,label:`Medium`,defaultChecked:!0}),(0,s.jsx)(a,{...e,size:`lg`,label:`Large`,defaultChecked:!0})]})},p={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,s.jsx)(a,{...e,label:`With description`,description:`We send at most one email a month.`}),(0,s.jsx)(a,{...e,label:`With helper`,helperText:`You can change this later in settings.`}),(0,s.jsx)(a,{...e,label:`Warning`,warning:`Unchecking will stop invoices too.`,defaultChecked:!0}),(0,s.jsx)(a,{...e,label:`Read-only`,readOnly:!0,defaultChecked:!0}),(0,s.jsx)(a,{...e,label:`Disabled`,disabled:!0}),(0,s.jsx)(a,{...e,label:`Disabled selected`,disabled:!0,defaultChecked:!0}),(0,s.jsx)(a,{...e,loading:!0})]})},m={render:()=>{let e=[`Design`,`Engineering`,`Marketing`],[t,n]=(0,o.useState)([`Design`]),i=t.length===e.length;return(0,s.jsxs)(r,{legend:`Teams`,children:[(0,s.jsx)(a,{label:`All teams`,checked:i,indeterminate:!i&&t.length>0,onChange:()=>n(i?[]:e)}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xs)`,paddingInlineStart:`var(--space-indent-level-1)`},children:e.map(e=>(0,s.jsx)(a,{label:e,checked:t.includes(e),onChange:t=>n(n=>t.target.checked?[...n,e]:n.filter(t=>t!==e))},e))})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`checkbox`,{name:`All teams`})),await c(e.getByRole(`checkbox`,{name:`Marketing`})).toBeChecked()}},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xl)`},children:[(0,s.jsxs)(r,{legend:`Notifications`,helperText:`Choose how we contact you.`,children:[(0,s.jsx)(a,{label:`Email`,defaultChecked:!0}),(0,s.jsx)(a,{label:`SMS`}),(0,s.jsx)(a,{label:`Push`})]}),(0,s.jsxs)(r,{legend:`Horizontal, invalid`,orientation:`horizontal`,error:`Select at least one option.`,required:!0,children:[(0,s.jsx)(a,{label:`One`}),(0,s.jsx)(a,{label:`Two`}),(0,s.jsx)(a,{label:`Three`})]})]})},g=[`Default`,`Types`,`Sizes`,`States`,`SelectAll`,`Group`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const box = canvas.getByRole('checkbox', {
      name: 'Email me product updates'
    });
    await userEvent.click(canvas.getByText('Email me product updates'));
    await expect(box).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(box).not.toBeChecked();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)'
  }}>
      <Checkbox {...args} label="Unselected" />
      <Checkbox {...args} label="Selected" defaultChecked />
      <Checkbox {...args} label="Indeterminate" indeterminate defaultChecked />
      <Checkbox {...args} label="Error unselected" error="Required" />
      <Checkbox {...args} label="Error selected" error="Not allowed" defaultChecked />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)'
  }}>
      <Checkbox {...args} size="sm" label="Small" defaultChecked />
      <Checkbox {...args} size="md" label="Medium" defaultChecked />
      <Checkbox {...args} size="lg" label="Large" defaultChecked />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Checkbox {...args} label="With description" description="We send at most one email a month." />
      <Checkbox {...args} label="With helper" helperText="You can change this later in settings." />
      <Checkbox {...args} label="Warning" warning="Unchecking will stop invoices too." defaultChecked />
      <Checkbox {...args} label="Read-only" readOnly defaultChecked />
      <Checkbox {...args} label="Disabled" disabled />
      <Checkbox {...args} label="Disabled selected" disabled defaultChecked />
      <Checkbox {...args} loading />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ['Design', 'Engineering', 'Marketing'];
    const [checked, setChecked] = useState<string[]>(['Design']);
    const all = checked.length === items.length;
    return <CheckboxGroup legend="Teams">
        <Checkbox label="All teams" checked={all} indeterminate={!all && checked.length > 0} onChange={() => setChecked(all ? [] : items)} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-stack-xs)',
        paddingInlineStart: 'var(--space-indent-level-1)'
      }}>
          {items.map(item => <Checkbox key={item} label={item} checked={checked.includes(item)} onChange={e => setChecked(c => e.target.checked ? [...c, item] : c.filter(x => x !== item))} />)}
        </div>
      </CheckboxGroup>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'All teams'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Marketing'
    })).toBeChecked();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-xl)'
  }}>
      <CheckboxGroup legend="Notifications" helperText="Choose how we contact you.">
        <Checkbox label="Email" defaultChecked />
        <Checkbox label="SMS" />
        <Checkbox label="Push" />
      </CheckboxGroup>
      <CheckboxGroup legend="Horizontal, invalid" orientation="horizontal" error="Select at least one option." required>
        <Checkbox label="One" />
        <Checkbox label="Two" />
        <Checkbox label="Three" />
      </CheckboxGroup>
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{u as Default,h as Group,m as SelectAll,f as Sizes,p as States,d as Types,g as __namedExportsOrder,l as default};