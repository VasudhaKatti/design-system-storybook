import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{i as r,r as i}from"./Icon-C15sqzpV.js";import{n as a,t as o}from"./TextInput-CEYoIKub.js";var s=t({Anatomy:()=>S,CharacterCount:()=>A,Clearable:()=>k,Default:()=>x,Disabled:()=>E,Error:()=>T,FocusVisible:()=>D,Icons:()=>O,Sizes:()=>w,TypesAndStates:()=>C,__namedExportsOrder:()=>j,default:()=>b});function c({title:e,children:t}){return(0,l.jsxs)(`figure`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xs)`,margin:0},children:[(0,l.jsx)(`figcaption`,{style:_,children:(0,l.jsx)(`strong`,{children:e})}),t]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),a(),l=n(),{expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,f=[`outlined`,`filled`,`borderless`,`inline`],p=e=>e[0].toUpperCase()+e.slice(1),m=/^Label/,h=260,g={display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`,width:h},_={fontFamily:`var(--text-style-body-sm-family)`,fontSize:`var(--text-style-body-sm-size)`,lineHeight:`var(--text-style-body-sm-line-height)`,color:`var(--text-secondary)`,margin:0},v={table:{disable:!0}},y={control:`select`,options:[void 0,...i]},b={title:`Components/Input`,component:o,args:{variant:`outlined`,size:`sm`,label:`Label`,placeholder:`Placeholder text`,helperText:`We’ll never share this.`,required:!0,prefix:`action/search`,disabled:!1},argTypes:{variant:{description:`Figma: Type`,control:`inline-radio`,options:f},size:{description:`Figma: Size`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},label:{description:`Figma: Label`},placeholder:{description:`Figma: Placeholder`},helperText:{description:`Figma: Helper text`},required:{description:`Figma: Required`},prefix:{description:`Figma: Show leading icon + Leading icon`,...y},suffix:{description:`Figma: Show trailing icon + Trailing icon`,...y},clearable:{description:`Figma: Clearable`},showCount:{description:`Figma: Show character count (pair with maxLength)`},maxLength:{description:`Figma: Character count — the "/100" limit`},disabled:{description:`Figma: State=Disabled`},error:{description:`Figma: State=Error — the message shows in the helper-text slot`},warning:v,success:v,readOnly:v,loading:v,onSearch:v,hideLabel:v,type:v,ref:v},decorators:[(e,{parameters:t})=>t.fixedWidth===!1?(0,l.jsx)(e,{}):(0,l.jsx)(`div`,{style:{width:h},children:(0,l.jsx)(e,{})})]},x={parameters:{docs:{description:{story:`The Figma default variant. Do’s and Don’ts: helper text is associated via the field’s accessible description, so screen readers announce it on focus.`}}},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:m});await t.type(n,`jordan@company.com`),await u(n).toHaveValue(`jordan@company.com`),await u(n).toHaveAccessibleDescription(`We’ll never share this.`)}},S={tags:[`!dev`],args:{size:`md`,label:`Email address`,defaultValue:`jordan@company.com`,placeholder:void 0,prefix:void 0,helperText:`We’ll send a confirmation to this address.`},parameters:{docs:{description:{story:`Documentation › Anatomy — the real Input Field example.`}}}},C={name:`Types & states`,args:{size:`md`},parameters:{fixedWidth:!1,docs:{description:{story:`Documentation › Variants & States: Type × State at Size=Md.`}}},decorators:[e=>(0,l.jsx)(`div`,{role:`region`,"aria-label":`Type by state grid`,tabIndex:0,style:{overflowX:`auto`,maxWidth:`100%`},children:(0,l.jsx)(e,{})})],render:e=>(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`max-content repeat(3, ${h}px)`,gap:`var(--space-inline-lg)`,alignItems:`start`},children:[(0,l.jsx)(`span`,{}),[`Default`,`Disabled`,`Error`].map(e=>(0,l.jsx)(`p`,{style:_,children:e},e)),f.map(t=>{let n=t===`inline`?void 0:e.helperText;return(0,l.jsxs)(`div`,{style:{display:`contents`},children:[(0,l.jsx)(`p`,{style:_,children:p(t)}),(0,l.jsx)(o,{...e,variant:t,helperText:n}),(0,l.jsx)(o,{...e,variant:t,helperText:n,disabled:!0}),(0,l.jsx)(o,{...e,variant:t,helperText:void 0,error:n??`Required.`})]},t)})]})},w={render:e=>(0,l.jsxs)(`div`,{style:g,children:[(0,l.jsx)(c,{title:`Sm`,children:(0,l.jsx)(o,{...e,size:`sm`})}),(0,l.jsx)(c,{title:`Md`,children:(0,l.jsx)(o,{...e,size:`md`})}),(0,l.jsx)(c,{title:`Lg`,children:(0,l.jsx)(o,{...e,size:`lg`})})]})},T={args:{size:`md`,helperText:void 0,error:`We’ll never share this.`},parameters:{docs:{description:{story:`Content Guidance: validate on blur, not just at submit; clear the error the moment the value becomes valid again.`}}},play:async({canvas:e})=>{let t=e.getByRole(`textbox`,{name:m});await u(t).toHaveAttribute(`aria-invalid`,`true`),await u(t).toHaveAccessibleDescription(`We’ll never share this.`)}},E={args:{size:`md`,disabled:!0,defaultValue:`jordan@company.com`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:m});await u(n).toBeDisabled(),await t.type(n,`x`),await u(n).toHaveValue(`jordan@company.com`)}},D={name:`Focus visible`,args:{size:`md`,helperText:void 0},parameters:{docs:{description:{story:`Content Guidance: whichever type is chosen, the focus state must stay clearly visible — even Borderless.`}}},render:e=>(0,l.jsx)(`div`,{style:g,children:f.map(t=>(0,l.jsx)(o,{...e,variant:t,label:p(t)},t))}),play:async({canvas:e,userEvent:t})=>{for(let n of f)await t.tab(),await u(e.getByRole(`textbox`,{name:RegExp(`^${p(n)}`)})).toHaveFocus()}},O={args:{size:`md`,helperText:void 0},parameters:{docs:{description:{story:`Show leading icon / Show trailing icon, each with an instance-swap icon.`}}},render:e=>(0,l.jsxs)(`div`,{style:g,children:[(0,l.jsx)(o,{...e,label:`Leading icon`,prefix:`action/search`}),(0,l.jsx)(o,{...e,label:`Trailing icon`,prefix:void 0,suffix:`action/search`}),(0,l.jsx)(o,{...e,label:`Both`,prefix:`action/search`,suffix:`action/search`})]})},k={args:{size:`md`,clearable:!0,onClear:d()},parameters:{docs:{description:{story:`Do’s and Don’ts: show the clear icon only once the field has content; if it would collide with a suffix icon, the clear icon takes precedence while content is present.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`textbox`,{name:m});await u(t.queryByRole(`button`,{name:`Clear`})).toBeNull(),await n.type(r,`jordan`),await n.click(t.getByRole(`button`,{name:`Clear`})),await u(r).toHaveValue(``),await u(r).toHaveFocus(),await u(e.onClear).toHaveBeenCalledOnce()}},A={name:`Character count`,args:{size:`md`,showCount:!0,maxLength:100,helperText:void 0},parameters:{docs:{description:{story:`Show character count — Figma’s sample "0/100".`}}},play:async({canvas:e,userEvent:t})=>{await u(e.getByText(`0/100`)).toBeInTheDocument(),await t.type(e.getByRole(`textbox`,{name:m}),`Ada`),await u(e.getByText(`3/100`)).toBeInTheDocument()}},j=[`Default`,`Anatomy`,`TypesAndStates`,`Sizes`,`Error`,`Disabled`,`FocusVisible`,`Icons`,`Clearable`,`CharacterCount`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The Figma default variant. Do’s and Don’ts: helper text is associated via the field’s accessible description, so screen readers announce it on focus.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox', {
      name: LABEL
    });
    await userEvent.type(input, 'jordan@company.com');
    await expect(input).toHaveValue('jordan@company.com');
    await expect(input).toHaveAccessibleDescription('We’ll never share this.');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'md',
    label: 'Email address',
    defaultValue: 'jordan@company.com',
    placeholder: undefined,
    prefix: undefined,
    helperText: 'We’ll send a confirmation to this address.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Documentation › Anatomy — the real Input Field example.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Types & states',
  args: {
    size: 'md'
  },
  parameters: {
    fixedWidth: false,
    docs: {
      description: {
        story: 'Documentation › Variants & States: Type × State at Size=Md.'
      }
    }
  },
  decorators: [Story => <div role="region" aria-label="Type by state grid" tabIndex={0} style={{
    overflowX: 'auto',
    maxWidth: '100%'
  }}><Story /></div>],
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`max-content repeat(3, \${WIDTH}px)\`,
    gap: 'var(--space-inline-lg)',
    alignItems: 'start'
  }}>
      <span />
      {['Default', 'Disabled', 'Error'].map(s => <p key={s} style={caption}>{s}</p>)}
      {TYPES.map(t => {
      // Inline has no helper text in Figma.
      const helper = t === 'inline' ? undefined : args.helperText;
      return <div key={t} style={{
        display: 'contents'
      }}>
            <p style={caption}>{label(t)}</p>
            <TextInput {...args} variant={t} helperText={helper} />
            <TextInput {...args} variant={t} helperText={helper} disabled />
            <TextInput {...args} variant={t} helperText={undefined} error={helper ?? 'Required.'} />
          </div>;
    })}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Labelled title="Sm"><TextInput {...args} size="sm" /></Labelled>
      <Labelled title="Md"><TextInput {...args} size="md" /></Labelled>
      <Labelled title="Lg"><TextInput {...args} size="lg" /></Labelled>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    helperText: undefined,
    error: 'We’ll never share this.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Content Guidance: validate on blur, not just at submit; clear the error the moment the value becomes valid again.'
      }
    }
  },
  play: async ({
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: LABEL
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('We’ll never share this.');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true,
    defaultValue: 'jordan@company.com'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox', {
      name: LABEL
    });
    await expect(input).toBeDisabled();
    await userEvent.type(input, 'x');
    await expect(input).toHaveValue('jordan@company.com');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Focus visible',
  args: {
    size: 'md',
    helperText: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Content Guidance: whichever type is chosen, the focus state must stay clearly visible — even Borderless.'
      }
    }
  },
  render: args => <div style={stack}>
      {TYPES.map(t => <TextInput key={t} {...args} variant={t} label={label(t)} />)}
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    for (const t of TYPES) {
      await userEvent.tab();
      await expect(canvas.getByRole('textbox', {
        name: new RegExp(\`^\${label(t)}\`)
      })).toHaveFocus();
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    helperText: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Show leading icon / Show trailing icon, each with an instance-swap icon.'
      }
    }
  },
  render: args => <div style={stack}>
      <TextInput {...args} label="Leading icon" prefix="action/search" />
      <TextInput {...args} label="Trailing icon" prefix={undefined} suffix="action/search" />
      <TextInput {...args} label="Both" prefix="action/search" suffix="action/search" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    clearable: true,
    onClear: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Do’s and Don’ts: show the clear icon only once the field has content; if it would collide with a suffix icon, the clear icon takes precedence while content is present.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox', {
      name: LABEL
    });
    await expect(canvas.queryByRole('button', {
      name: 'Clear'
    })).toBeNull();
    await userEvent.type(input, 'jordan');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await expect(args.onClear).toHaveBeenCalledOnce();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Character count',
  args: {
    size: 'md',
    showCount: true,
    maxLength: 100,
    helperText: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Show character count — Figma’s sample "0/100".'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText('0/100')).toBeInTheDocument();
    await userEvent.type(canvas.getByRole('textbox', {
      name: LABEL
    }), 'Ada');
    await expect(canvas.getByText('3/100')).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}}})))()}export{T as a,w as c,M as d,x as i,s as l,A as n,D as o,k as r,O as s,S as t,C as u};