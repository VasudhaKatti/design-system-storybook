import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Switch-DD_hIaFK.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Switch`,component:i,tags:[`autodocs`],args:{label:`Email notifications`,size:`md`,showInnerContent:!0,loading:!1,disabled:!1,onCheckedChange:c()}},u={play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`switch`,{name:`Email notifications`});await s(r).toHaveAttribute(`aria-checked`,`false`),await n.click(r),await s(r).toHaveAttribute(`aria-checked`,`true`),await s(e.onCheckedChange).toHaveBeenCalledWith(!0)}},d={args:{defaultChecked:!0}},f={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,o.jsx)(i,{...e,size:`md`,label:`Medium`,defaultChecked:!0}),(0,o.jsx)(i,{...e,size:`sm`,label:`Small`,defaultChecked:!0}),(0,o.jsx)(i,{...e,size:`sm`,label:`Small, no inner content`,showInnerContent:!1})]})},p={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,o.jsx)(i,{...e,label:`Disabled off`,disabled:!0}),(0,o.jsx)(i,{...e,label:`Disabled on`,disabled:!0,defaultChecked:!0}),(0,o.jsx)(i,{...e,label:`Saving…`,loading:!0,defaultChecked:!0}),(0,o.jsx)(i,{...e,label:`With helper`,helperText:`Applies immediately to all projects.`}),(0,o.jsx)(i,{...e,label:`Label on the left`,labelPosition:`left`})]})},m={name:`Async (reverts on failure)`,render:e=>{let[t,n]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(0),[u,d]=(0,a.useState)(``);return(0,o.jsx)(i,{...e,label:`Sync calendar`,checked:t,loading:r,helperText:u||`Every second request fails, so the switch stays where it was.`,onCheckedChange:e=>{s(!0),d(``),setTimeout(()=>{s(!1),l(e=>e+1),c%2==1?d(`Couldn’t reach the calendar service. Try again.`):n(e)},800)}})}},h=[`Default`,`On`,`Sizes`,`States`,`AsyncWithRevert`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const sw = canvas.getByRole('switch', {
      name: 'Email notifications'
    });
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Switch {...args} size="md" label="Medium" defaultChecked />
      <Switch {...args} size="sm" label="Small" defaultChecked />
      <Switch {...args} size="sm" label="Small, no inner content" showInnerContent={false} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Switch {...args} label="Disabled off" disabled />
      <Switch {...args} label="Disabled on" disabled defaultChecked />
      <Switch {...args} label="Saving…" loading defaultChecked />
      <Switch {...args} label="With helper" helperText="Applies immediately to all projects." />
      <Switch {...args} label="Label on the left" labelPosition="left" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Async (reverts on failure)',
  render: args => {
    const [on, setOn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState('');
    return <Switch {...args} label="Sync calendar" checked={on} loading={loading} helperText={error || 'Every second request fails, so the switch stays where it was.'} onCheckedChange={next => {
      setLoading(true);
      setError('');
      setTimeout(() => {
        setLoading(false);
        setAttempts(n => n + 1);
        if (attempts % 2 === 1) setError('Couldn’t reach the calendar service. Try again.');else setOn(next);
      }, 800);
    }} />;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as AsyncWithRevert,u as Default,d as On,f as Sizes,p as States,h as __namedExportsOrder,l as default};