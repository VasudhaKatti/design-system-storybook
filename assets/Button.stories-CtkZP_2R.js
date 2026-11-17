import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{i as r,r as i}from"./Icon-C15sqzpV.js";import{n as a,t as o}from"./Button-BRS-F2jz.js";import{n as s,t as c}from"./IconButton-B56Ei4Dm.js";var l=t({Default:()=>x,Disabled:()=>D,DoDont:()=>k,Focused:()=>C,KeyboardActivation:()=>O,Radius:()=>T,Sizes:()=>w,VariantsAndStates:()=>S,WithIcons:()=>E,__namedExportsOrder:()=>A,default:()=>b});function u({title:e,note:t,children:n}){return(0,f.jsxs)(`figure`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xs)`,margin:0},children:[n,(0,f.jsxs)(`figcaption`,{style:v,children:[(0,f.jsx)(`strong`,{children:e}),t&&(0,f.jsxs)(f.Fragment,{children:[` — `,t]})]})]})}function d({kind:e,note:t,children:n}){let r=e===`Do`?`var(--border-success)`:`var(--border-interactive-error)`;return(0,f.jsxs)(`figure`,{style:{margin:0,display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,f.jsx)(`div`,{style:{..._,padding:`var(--space-inline-lg)`,borderTop:`4px solid ${r}`},children:n}),(0,f.jsxs)(`figcaption`,{style:v,children:[(0,f.jsx)(`strong`,{children:e}),` — `,t]})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),r(),a(),f=n(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h=[`primary`,`secondary`,`ghost`,`danger`],g=e=>e[0].toUpperCase()+e.slice(1),_={display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},v={fontFamily:`var(--text-style-body-sm-family)`,fontSize:`var(--text-style-body-sm-size)`,lineHeight:`var(--text-style-body-sm-line-height)`,color:`var(--text-secondary)`,margin:0},y={table:{disable:!0}},b={title:`Components/Button`,component:o,args:{children:`Button`,variant:`primary`,size:`sm`,radius:`default`,disabled:!1,onClick:m()},argTypes:{variant:{description:`Figma: Variant`,control:`inline-radio`,options:h},size:{description:`Figma: Size`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},radius:{description:`Figma: Radius`,control:`inline-radio`,options:[`default`,`rounded`,`none`]},disabled:{description:`Figma: State=Disabled`},leadingIcon:{description:`Figma: Has leading icon`,control:`select`,options:[void 0,...i]},trailingIcon:{description:`Figma: Has trailing icon`,control:`select`,options:[void 0,...i]},children:{description:`Figma: Label`},loading:y,fullWidth:y,type:y,ref:y}},x={parameters:{docs:{description:{story:`Usage › Interactions › Mouse: clicking anywhere on the button runs its action.`}}},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Button`})),await p(e.onClick).toHaveBeenCalledOnce()}},S={name:`Variants & states`,args:{size:`md`},parameters:{docs:{description:{story:`Style › Variants & states: Variant × State at Size=Md, Radius=Default.`}}},render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`max-content repeat(2, max-content)`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,f.jsx)(`span`,{}),(0,f.jsx)(`p`,{style:v,children:`Default`}),(0,f.jsx)(`p`,{style:v,children:`Disabled`}),h.map(t=>(0,f.jsxs)(`div`,{style:{display:`contents`},children:[(0,f.jsx)(`p`,{style:v,children:g(t)}),(0,f.jsx)(o,{...e,variant:t}),(0,f.jsx)(o,{...e,variant:t,disabled:!0})]},t))]})},C={args:{size:`md`},parameters:{docs:{description:{story:`Style › Focus: every variant’s Focused state adds a 3px ring bound to border/interactive/focus. Keyboard focus only (focus-visible).`}}},play:async({canvas:e,userEvent:t})=>{await t.tab(),await p(e.getByRole(`button`,{name:`Button`})).toHaveFocus()}},w={parameters:{docs:{description:{story:`Usage › Sizes: every variant shares the same size scale.`}}},render:e=>(0,f.jsxs)(`div`,{style:{..._,alignItems:`flex-start`,gap:`var(--space-inline-xl)`},children:[(0,f.jsx)(u,{title:`Small · 32px`,note:`Dense UIs, toolbars and table rows.`,children:(0,f.jsx)(o,{...e,size:`sm`})}),(0,f.jsx)(u,{title:`Medium · 40px`,note:`The default size for most buttons.`,children:(0,f.jsx)(o,{...e,size:`md`})}),(0,f.jsx)(u,{title:`Large · 48px`,note:`Primary page calls to action and touch-first screens.`,children:(0,f.jsx)(o,{...e,size:`lg`})})]})},T={args:{size:`md`},parameters:{docs:{description:{story:`Style › Radius.`}}},render:e=>(0,f.jsxs)(`div`,{style:{..._,alignItems:`flex-start`,gap:`var(--space-inline-xl)`},children:[(0,f.jsx)(u,{title:`Default`,note:`radius/control · 6px`,children:(0,f.jsx)(o,{...e,radius:`default`})}),(0,f.jsx)(u,{title:`Rounded`,note:`radius/full · pill`,children:(0,f.jsx)(o,{...e,radius:`rounded`})}),(0,f.jsx)(u,{title:`None`,note:`radius/none · 0px`,children:(0,f.jsx)(o,{...e,radius:`none`})})]})},E={name:`With icons`,args:{size:`md`},parameters:{docs:{description:{story:`Usage › Alignment: the icon sits on the side set by the icon property and is vertically centred with the label. Leading or trailing, never both.`}}},render:e=>(0,f.jsxs)(`div`,{style:{..._,alignItems:`flex-start`,gap:`var(--space-inline-xl)`},children:[(0,f.jsx)(u,{title:`Leading icon`,note:`Icon before the label.`,children:(0,f.jsx)(o,{...e,leadingIcon:`action/add`})}),(0,f.jsx)(u,{title:`Trailing icon`,note:`Icon after the label.`,children:(0,f.jsx)(o,{...e,trailingIcon:`nav/chevron-down`})}),(0,f.jsx)(u,{title:`Icon only`,note:`Label hidden (Show label = off). Must have an accessible label.`,children:(0,f.jsx)(c,{icon:`action/add`,label:`Add`,variant:e.variant,size:e.size,radius:e.radius})})]})},D={args:{disabled:!0},parameters:{docs:{description:{story:`Usage › Interactions › Mouse: disabled buttons ignore clicks.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Button`});await p(r).toBeDisabled(),await n.click(r),await p(e.onClick).not.toHaveBeenCalled()}},O={name:`Keyboard activation`,parameters:{docs:{description:{story:`Accessibility › Keyboard interactions: Tab moves focus to the button; Enter and Space activate it.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Button`});await n.tab(),await p(r).toHaveFocus(),await n.keyboard(`{Enter}`),await p(e.onClick).toHaveBeenCalledTimes(1),await n.keyboard(` `),await p(e.onClick).toHaveBeenCalledTimes(2)}},k={name:`Do & don’t`,tags:[`!dev`],args:{size:`md`},parameters:{docs:{description:{story:`Usage › Placement.`}}},render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`var(--space-inline-xl)`},children:[(0,f.jsxs)(d,{kind:`Do`,note:`Use one primary action, paired with lower-emphasis actions.`,children:[(0,f.jsx)(o,{...e,children:`Save`}),(0,f.jsx)(o,{...e,variant:`secondary`,children:`Cancel`})]}),(0,f.jsxs)(d,{kind:`Don’t`,note:`Don't place two primary buttons in the same context — they read as equally important.`,children:[(0,f.jsx)(o,{...e,children:`Save`}),(0,f.jsx)(o,{...e,children:`Publish`})]}),(0,f.jsxs)(d,{kind:`Do`,note:`Keep every button in a group the same size.`,children:[(0,f.jsx)(o,{...e,variant:`secondary`,children:`Cancel`}),(0,f.jsx)(o,{...e,children:`Save`})]}),(0,f.jsxs)(d,{kind:`Don’t`,note:`Don't mix sizes in one group.`,children:[(0,f.jsx)(o,{...e,variant:`secondary`,size:`sm`,children:`Cancel`}),(0,f.jsx)(o,{...e,size:`lg`,children:`Save`})]}),(0,f.jsx)(d,{kind:`Do`,note:`Use Danger only for destructive or irreversible actions.`,children:(0,f.jsx)(o,{...e,variant:`danger`,children:`Delete`})}),(0,f.jsx)(d,{kind:`Don’t`,note:`Don't use Danger styling for a non-destructive action.`,children:(0,f.jsx)(o,{...e,variant:`danger`,children:`Save`})})]})},A=[`Default`,`VariantsAndStates`,`Focused`,`Sizes`,`Radius`,`WithIcons`,`Disabled`,`KeyboardActivation`,`DoDont`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Usage › Interactions › Mouse: clicking anywhere on the button runs its action.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Button'
    }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Variants & states',
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Style › Variants & states: Variant × State at Size=Md, Radius=Default.'
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'max-content repeat(2, max-content)',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <span />
      <p style={caption}>Default</p>
      <p style={caption}>Disabled</p>
      {VARIANTS.map(v => <div key={v} style={{
      display: 'contents'
    }}>
          <p style={caption}>{label(v)}</p>
          <Button {...args} variant={v} />
          <Button {...args} variant={v} disabled />
        </div>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Style › Focus: every variant’s Focused state adds a 3px ring bound to border/interactive/focus. Keyboard focus only (focus-visible).'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Button'
    })).toHaveFocus();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Usage › Sizes: every variant shares the same size scale.'
      }
    }
  },
  render: args => <div style={{
    ...row,
    alignItems: 'flex-start',
    gap: 'var(--space-inline-xl)'
  }}>
      <Labelled title="Small · 32px" note="Dense UIs, toolbars and table rows.">
        <Button {...args} size="sm" />
      </Labelled>
      <Labelled title="Medium · 40px" note="The default size for most buttons.">
        <Button {...args} size="md" />
      </Labelled>
      <Labelled title="Large · 48px" note="Primary page calls to action and touch-first screens.">
        <Button {...args} size="lg" />
      </Labelled>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Style › Radius.'
      }
    }
  },
  render: args => <div style={{
    ...row,
    alignItems: 'flex-start',
    gap: 'var(--space-inline-xl)'
  }}>
      <Labelled title="Default" note="radius/control · 6px">
        <Button {...args} radius="default" />
      </Labelled>
      <Labelled title="Rounded" note="radius/full · pill">
        <Button {...args} radius="rounded" />
      </Labelled>
      <Labelled title="None" note="radius/none · 0px">
        <Button {...args} radius="none" />
      </Labelled>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With icons',
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Alignment: the icon sits on the side set by the icon property and is vertically centred with the label. Leading or trailing, never both.'
      }
    }
  },
  render: args => <div style={{
    ...row,
    alignItems: 'flex-start',
    gap: 'var(--space-inline-xl)'
  }}>
      <Labelled title="Leading icon" note="Icon before the label.">
        <Button {...args} leadingIcon="action/add" />
      </Labelled>
      <Labelled title="Trailing icon" note="Icon after the label.">
        <Button {...args} trailingIcon="nav/chevron-down" />
      </Labelled>
      <Labelled title="Icon only" note="Label hidden (Show label = off). Must have an accessible label.">
        <IconButton icon="action/add" label="Add" variant={args.variant} size={args.size} radius={args.radius} />
      </Labelled>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Interactions › Mouse: disabled buttons ignore clicks.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Button'
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard activation',
  parameters: {
    docs: {
      description: {
        story: 'Accessibility › Keyboard interactions: Tab moves focus to the button; Enter and Space activate it.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Button'
    });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Placement.'
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'var(--space-inline-xl)'
  }}>
      <Guideline kind="Do" note="Use one primary action, paired with lower-emphasis actions.">
        <Button {...args}>Save</Button>
        <Button {...args} variant="secondary">Cancel</Button>
      </Guideline>
      <Guideline kind="Don’t" note="Don't place two primary buttons in the same context — they read as equally important.">
        <Button {...args}>Save</Button>
        <Button {...args}>Publish</Button>
      </Guideline>
      <Guideline kind="Do" note="Keep every button in a group the same size.">
        <Button {...args} variant="secondary">Cancel</Button>
        <Button {...args}>Save</Button>
      </Guideline>
      <Guideline kind="Don’t" note="Don't mix sizes in one group.">
        <Button {...args} variant="secondary" size="sm">Cancel</Button>
        <Button {...args} size="lg">Save</Button>
      </Guideline>
      <Guideline kind="Do" note="Use Danger only for destructive or irreversible actions.">
        <Button {...args} variant="danger">Delete</Button>
      </Guideline>
      <Guideline kind="Don’t" note="Don't use Danger styling for a non-destructive action.">
        <Button {...args} variant="danger">Save</Button>
      </Guideline>
    </div>
}`,...k.parameters?.docs?.source}}}})))()}export{O as a,S as c,C as i,E as l,x as n,T as o,k as r,w as s,l as t,j as u};