import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,r as i,t as a}from"./TextInput-BZhMU8RQ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{o=t(),i(),s=n(),{expect:c,fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Text Input`,component:r,tags:[`autodocs`],args:{label:`Email address`,placeholder:`name@company.com`,helperText:`We’ll never share your email.`,variant:`outlined`,size:`md`},decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:360},children:(0,s.jsx)(e,{})})]},d={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:`Email address`});await t.type(n,`ada@example.com`),await c(n).toHaveValue(`ada@example.com`),await c(n).toHaveAccessibleDescription(`We’ll never share your email.`)}},f={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(r,{...e,label:`Outlined`,variant:`outlined`}),(0,s.jsx)(r,{...e,label:`Filled`,variant:`filled`}),(0,s.jsx)(r,{...e,label:`Borderless`,variant:`borderless`}),(0,s.jsx)(r,{...e,label:`Inline`,variant:`inline`})]})},p={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(r,{...e,size:`sm`,label:`Small`,helperText:void 0}),(0,s.jsx)(r,{...e,size:`md`,label:`Medium`,helperText:void 0}),(0,s.jsx)(r,{...e,size:`lg`,label:`Large`,helperText:void 0})]})},m={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(r,{...e,defaultValue:`ada@`,error:`Enter a valid email address.`,helperText:void 0,required:!0}),(0,s.jsx)(r,{...e,defaultValue:`ada@mailinator.com`,warning:`Disposable addresses may not receive invoices.`,helperText:void 0}),(0,s.jsx)(r,{...e,defaultValue:`ada@example.com`,success:`Email verified.`,helperText:void 0})]})},h={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(r,{...e,label:`Disabled`,disabled:!0,defaultValue:`ada@example.com`}),(0,s.jsx)(r,{...e,label:`Read-only`,readOnly:!0,defaultValue:`ada@example.com`,helperText:`Managed by your organisation.`})]})},g={name:`Prefix & suffix`,render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(r,{...e,label:`Amount`,placeholder:`0.00`,prefix:`$`,suffix:`USD`,helperText:void 0,inputMode:`decimal`}),(0,s.jsx)(r,{...e,label:`Website`,placeholder:`example.com`,prefix:`action/link`,helperText:void 0}),(0,s.jsx)(r,{...e,label:`Weight`,placeholder:`0`,suffix:`kg`,helperText:void 0,inputMode:`numeric`})]})},_={args:{clearable:!0,defaultValue:`ada@example.com`,onClear:l()},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Clear`})),await c(t.getByRole(`textbox`)).toHaveValue(``),await c(t.getByRole(`textbox`)).toHaveFocus(),await c(e.onClear).toHaveBeenCalledOnce()}},v={args:{label:`Display name`,placeholder:void 0,helperText:void 0,showCount:!0,maxLength:20,defaultValue:`Ada Lovelace`}},y={args:{label:`Password`,type:`password`,placeholder:void 0,helperText:`At least 12 characters.`,defaultValue:`correct horse`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Show password`})),await c(e.getByLabelText(/^Password/)).toHaveAttribute(`type`,`text`)}},b={render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(r,{type:`search`,label:`Search projects`,hideLabel:!0,placeholder:`Search projects`,clearable:!0,loading:e,onSearch:()=>{t(!0),setTimeout(()=>t(!1),1200)}})}},x={name:`Text area`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,s.jsx)(a,{label:`Notes`,placeholder:`Anything we should know?`,helperText:`Optional.`}),(0,s.jsx)(a,{label:`Bio (autosize, counter)`,autosize:!0,minRows:2,maxRows:6,showCount:!0,maxLength:280,defaultValue:`Designer and occasional engineer.`}),(0,s.jsx)(a,{label:`Feedback`,error:`Tell us a little more (20 characters minimum).`,defaultValue:`Too short`})]})},S=[`Default`,`Types`,`Sizes`,`Status`,`States`,`PrefixSuffix`,`Clearable`,`CharacterCount`,`Password`,`Search`,`MultiLine`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Email address'
    });
    await userEvent.type(input, 'ada@example.com');
    await expect(input).toHaveValue('ada@example.com');
    await expect(input).toHaveAccessibleDescription('We’ll never share your email.');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextInput {...args} label="Outlined" variant="outlined" />
      <TextInput {...args} label="Filled" variant="filled" />
      <TextInput {...args} label="Borderless" variant="borderless" />
      <TextInput {...args} label="Inline" variant="inline" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextInput {...args} size="sm" label="Small" helperText={undefined} />
      <TextInput {...args} size="md" label="Medium" helperText={undefined} />
      <TextInput {...args} size="lg" label="Large" helperText={undefined} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextInput {...args} defaultValue="ada@" error="Enter a valid email address." helperText={undefined} required />
      <TextInput {...args} defaultValue="ada@mailinator.com" warning="Disposable addresses may not receive invoices." helperText={undefined} />
      <TextInput {...args} defaultValue="ada@example.com" success="Email verified." helperText={undefined} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextInput {...args} label="Disabled" disabled defaultValue="ada@example.com" />
      <TextInput {...args} label="Read-only" readOnly defaultValue="ada@example.com" helperText="Managed by your organisation." />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prefix & suffix',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextInput {...args} label="Amount" placeholder="0.00" prefix="$" suffix="USD" helperText={undefined} inputMode="decimal" />
      <TextInput {...args} label="Website" placeholder="example.com" prefix="action/link" helperText={undefined} />
      <TextInput {...args} label="Weight" placeholder="0" suffix="kg" helperText={undefined} inputMode="numeric" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: true,
    defaultValue: 'ada@example.com',
    onClear: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await expect(canvas.getByRole('textbox')).toHaveValue('');
    await expect(canvas.getByRole('textbox')).toHaveFocus();
    await expect(args.onClear).toHaveBeenCalledOnce();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Display name',
    placeholder: undefined,
    helperText: undefined,
    showCount: true,
    maxLength: 20,
    defaultValue: 'Ada Lovelace'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: undefined,
    helperText: 'At least 12 characters.',
    defaultValue: 'correct horse'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(canvas.getByLabelText(/^Password/)).toHaveAttribute('type', 'text');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    return <TextInput type="search" label="Search projects" hideLabel placeholder="Search projects" clearable loading={loading} onSearch={() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1200);
    }} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Text area',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <TextArea label="Notes" placeholder="Anything we should know?" helperText="Optional." />
      <TextArea label="Bio (autosize, counter)" autosize minRows={2} maxRows={6} showCount maxLength={280} defaultValue="Designer and occasional engineer." />
      <TextArea label="Feedback" error="Tell us a little more (20 characters minimum)." defaultValue="Too short" />
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as CharacterCount,_ as Clearable,d as Default,x as MultiLine,y as Password,g as PrefixSuffix,b as Search,p as Sizes,h as States,m as Status,f as Types,S as __namedExportsOrder,u as default};