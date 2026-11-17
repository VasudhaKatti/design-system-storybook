import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{n as r,t as i}from"./Alert-C9ngUj0p.js";var a=t({ActionAndKeyboard:()=>O,Configurations:()=>C,Default:()=>x,Densities:()=>E,Dismiss:()=>D,DoDont:()=>k,Sentiments:()=>S,SentimentsAndStates:()=>w,Sizes:()=>T,__namedExportsOrder:()=>A,default:()=>b});function o({title:e,note:t,children:n}){return(0,s.jsxs)(`figure`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xs)`,margin:0},children:[n,(0,s.jsxs)(`figcaption`,{style:v,children:[(0,s.jsx)(`strong`,{children:e}),t&&(0,s.jsxs)(s.Fragment,{children:[` — `,t]})]})]})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{r(),s=n(),{expect:c,fn:l}=__STORYBOOK_MODULE_TEST__,u={neutral:{title:`Draft saved`,description:`Your changes are stored locally.`,action:`Undo`},info:{title:`Update available`,description:`Version 4.2 is ready to install.`,action:`Update now`},success:{title:`Payment received`,description:`Invoice #4021 marked as paid.`,action:`View receipt`},warning:{title:`Storage almost full`,description:`92% of your quota is in use.`,action:`Manage storage`},danger:{title:`Sync failed`,description:`Check your connection and retry.`,action:`Retry`}},d=e=>({title:u[e].title,description:u[e].description}),f=[`neutral`,`info`,`success`,`warning`,`danger`],p=[`Default`,`With Action`,`With Close`,`With Action + Close`],m=e=>e[0].toUpperCase()+e.slice(1),h=(e,t)=>({...d(e),sentiment:e,action:t.includes(`Action`)?{label:u[e].action,onClick:l()}:void 0,onClose:t.includes(`Close`)?l():void 0}),g=400,_={display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`,width:g},v={fontFamily:`var(--text-style-body-sm-family)`,fontSize:`var(--text-style-body-sm-size)`,lineHeight:`var(--text-style-body-sm-line-height)`,color:`var(--text-secondary)`,margin:0},y={table:{disable:!0}},b={title:`Components/Alert`,component:i,args:{sentiment:`neutral`,size:`sm`,density:`comfortable`,...d(`neutral`)},argTypes:{sentiment:{description:`Figma: Sentiment`,control:`inline-radio`,options:f},size:{description:`Figma: Size`,control:`inline-radio`,options:[`sm`,`md`]},density:{description:`Figma: component.alert.density mode (Usage › Sizes)`,control:`inline-radio`,options:[`compact`,`comfortable`,`spacious`]},title:{description:`Figma: Headline (required)`},description:{description:`Figma: Supporting text (optional)`},action:{description:`Figma: State=With Action — a Ghost, Sm Button`},onClose:{description:`Figma: State=With Close — icon-only close Button`},truncate:y,hasIcon:y},decorators:[(e,{parameters:t})=>t.fixedWidth===!1?(0,s.jsx)(e,{}):(0,s.jsx)(`div`,{style:{width:g},children:(0,s.jsx)(e,{})})]},x={parameters:{docs:{description:{story:`Usage › Live demo: the default variant (Sentiment=Neutral, Size=Sm, State=Default).`}}}},S={args:{size:`md`},parameters:{docs:{description:{story:`Usage › Overview › Sentiments: each maps to its own background, border, text and icon tokens and its own status icon.`}}},render:e=>(0,s.jsx)(`div`,{style:_,children:f.map(t=>(0,s.jsx)(i,{...e,...d(t),sentiment:t},t))}),play:async({canvas:e})=>{await c(e.getAllByRole(`alert`)).toHaveLength(2),await c(e.getAllByRole(`status`)).toHaveLength(3)}},C={args:{size:`md`},parameters:{docs:{description:{story:`Usage › Overview › Configurations: Default, With Action, With Close, and With Action + Close.`}}},render:e=>(0,s.jsx)(`div`,{style:_,children:p.map(t=>(0,s.jsx)(o,{title:t,children:(0,s.jsx)(i,{...e,...h(`info`,t)})},t))})},w={name:`Sentiments & states`,args:{size:`md`},parameters:{fixedWidth:!1,docs:{description:{story:`Style › Variants & states: 40 variants — Sentiment (5) × Size (2) × State (4). Grid shows Sentiment × State at Size=Md.`}}},decorators:[e=>(0,s.jsx)(`div`,{role:`region`,"aria-label":`Sentiment by state grid`,tabIndex:0,style:{overflowX:`auto`,maxWidth:`100%`},children:(0,s.jsx)(e,{})})],render:e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`max-content repeat(4, ${g}px)`,gap:`var(--space-inline-md)`,alignItems:`start`},children:[(0,s.jsx)(`span`,{}),p.map(e=>(0,s.jsx)(`p`,{style:v,children:e},e)),f.map(t=>(0,s.jsxs)(`div`,{style:{display:`contents`},children:[(0,s.jsx)(`p`,{style:v,children:m(t)}),p.map(n=>(0,s.jsx)(i,{...e,...h(t,n)},n))]},t))]})},T={args:{sentiment:`info`,...d(`info`)},parameters:{docs:{description:{story:`Usage › Sizes.`}}},render:e=>(0,s.jsxs)(`div`,{style:_,children:[(0,s.jsx)(o,{title:`Small`,note:`Padding 12 / 8, 16px icon.`,children:(0,s.jsx)(i,{...e,size:`sm`})}),(0,s.jsx)(o,{title:`Medium`,note:`Padding 16 / 12, 20px icon.`,children:(0,s.jsx)(i,{...e,size:`md`})})]})},E={args:{sentiment:`info`,size:`md`,...d(`info`)},parameters:{docs:{description:{story:`Usage › Sizes: spacing comes from the component.alert.density variable collection, with Compact, Comfortable and Spacious modes.`}}},render:e=>(0,s.jsxs)(`div`,{style:_,children:[(0,s.jsx)(o,{title:`Compact`,children:(0,s.jsx)(i,{...e,density:`compact`})}),(0,s.jsx)(o,{title:`Comfortable`,children:(0,s.jsx)(i,{...e,density:`comfortable`})}),(0,s.jsx)(o,{title:`Spacious`,children:(0,s.jsx)(i,{...e,density:`spacious`})})]})},D={args:{size:`md`,...h(`danger`,`With Action + Close`)},parameters:{docs:{description:{story:`Usage › Interactions › Close: dismisses the alert, collapsing it out of the layout.`}}},play:async({args:e,canvas:t,userEvent:n})=>{await c(t.getByRole(`alert`)).toHaveTextContent(`Sync failed`),await n.click(t.getByRole(`button`,{name:`Dismiss`})),await c(e.onClose).toHaveBeenCalledOnce(),await c(t.queryByRole(`alert`)).toBeNull()}},O={name:`Action & keyboard`,args:{size:`md`,...h(`info`,`With Action + Close`)},parameters:{docs:{description:{story:`Accessibility › Keyboard interactions: Tab moves focus to the action button, then the close button; Enter or Space activates the focused button.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Update now`});await n.tab(),await c(r).toHaveFocus(),await n.tab(),await c(t.getByRole(`button`,{name:`Dismiss`})).toHaveFocus(),await n.tab({shift:!0}),await n.keyboard(`{Enter}`),await c(e.action?.onClick).toHaveBeenCalledOnce()}},k={name:`Do & don’t`,tags:[`!dev`],args:{size:`md`,...h(`info`,`With Action`)},parameters:{fixedWidth:!1,docs:{description:{story:`Usage › Formatting.`}}},render:e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, ${g}px)`,gap:`var(--space-inline-xl)`,alignItems:`start`},children:[(0,s.jsxs)(`figure`,{style:{margin:0,display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,s.jsx)(`div`,{style:{paddingTop:`var(--space-inline-lg)`,borderTop:`4px solid var(--border-success)`},children:(0,s.jsx)(i,{...e})}),(0,s.jsxs)(`figcaption`,{style:v,children:[(0,s.jsx)(`strong`,{children:`Do`}),` — Use a Ghost, Sm Button for the action — matching the alert's compact footprint.`]})]}),(0,s.jsxs)(`figure`,{style:{margin:0,display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,s.jsx)(`div`,{style:{paddingTop:`var(--space-inline-lg)`,borderTop:`4px solid var(--border-interactive-error)`}}),(0,s.jsxs)(`figcaption`,{style:v,children:[(0,s.jsx)(`strong`,{children:`Don’t`}),` — Don't use a large primary button — it overpowers the alert.`]})]})]})},A=[`Default`,`Sentiments`,`Configurations`,`SentimentsAndStates`,`Sizes`,`Densities`,`Dismiss`,`ActionAndKeyboard`,`DoDont`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Usage › Live demo: the default variant (Sentiment=Neutral, Size=Sm, State=Default).'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Overview › Sentiments: each maps to its own background, border, text and icon tokens and its own status icon.'
      }
    }
  },
  render: args => <div style={stack}>
      {SENTIMENTS.map(s => <Alert key={s} {...args} {...copy(s)} sentiment={s} />)}
    </div>,
  // Accessibility › Development considerations: role="alert" for urgent messages, role="status" for polite ones.
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('alert')).toHaveLength(2);
    await expect(canvas.getAllByRole('status')).toHaveLength(3);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Overview › Configurations: Default, With Action, With Close, and With Action + Close.'
      }
    }
  },
  render: args => <div style={stack}>
      {STATES.map(state => <Labelled key={state} title={state}>
          <Alert {...args} {...stateProps('info', state)} />
        </Labelled>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Sentiments & states',
  args: {
    size: 'md'
  },
  parameters: {
    fixedWidth: false,
    docs: {
      description: {
        story: 'Style › Variants & states: 40 variants — Sentiment (5) × Size (2) × State (4). Grid shows Sentiment × State at Size=Md.'
      }
    }
  },
  decorators: [Story => <div role="region" aria-label="Sentiment by state grid" tabIndex={0} style={{
    overflowX: 'auto',
    maxWidth: '100%'
  }}><Story /></div>],
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`max-content repeat(4, \${WIDTH}px)\`,
    gap: 'var(--space-inline-md)',
    alignItems: 'start'
  }}>
      <span />
      {STATES.map(state => <p key={state} style={caption}>{state}</p>)}
      {SENTIMENTS.map(s => <div key={s} style={{
      display: 'contents'
    }}>
          <p style={caption}>{label(s)}</p>
          {STATES.map(state => <Alert key={state} {...args} {...stateProps(s, state)} />)}
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sentiment: 'info',
    ...copy('info')
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Sizes.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Small" note="Padding 12 / 8, 16px icon.">
        <Alert {...args} size="sm" />
      </Labelled>
      <Labelled title="Medium" note="Padding 16 / 12, 20px icon.">
        <Alert {...args} size="md" />
      </Labelled>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sentiment: 'info',
    size: 'md',
    ...copy('info')
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Sizes: spacing comes from the component.alert.density variable collection, with Compact, Comfortable and Spacious modes.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Compact"><Alert {...args} density="compact" /></Labelled>
      <Labelled title="Comfortable"><Alert {...args} density="comfortable" /></Labelled>
      <Labelled title="Spacious"><Alert {...args} density="spacious" /></Labelled>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    ...stateProps('danger', 'With Action + Close')
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Interactions › Close: dismisses the alert, collapsing it out of the layout.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent('Sync failed');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dismiss'
    }));
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Action & keyboard',
  args: {
    size: 'md',
    ...stateProps('info', 'With Action + Close')
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility › Keyboard interactions: Tab moves focus to the action button, then the close button; Enter or Space activates the focused button.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const action = canvas.getByRole('button', {
      name: 'Update now'
    });
    await userEvent.tab();
    await expect(action).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Dismiss'
    })).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await userEvent.keyboard('{Enter}');
    await expect(args.action?.onClick).toHaveBeenCalledOnce();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  args: {
    size: 'md',
    ...stateProps('info', 'With Action')
  },
  parameters: {
    fixedWidth: false,
    docs: {
      description: {
        story: 'Usage › Formatting.'
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`repeat(2, \${WIDTH}px)\`,
    gap: 'var(--space-inline-xl)',
    alignItems: 'start'
  }}>
      <figure style={{
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-stack-sm)'
    }}>
        <div style={{
        paddingTop: 'var(--space-inline-lg)',
        borderTop: '4px solid var(--border-success)'
      }}>
          <Alert {...args} />
        </div>
        <figcaption style={caption}>
          <strong>Do</strong> — Use a Ghost, Sm Button for the action — matching the alert's compact footprint.
        </figcaption>
      </figure>
      <figure style={{
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-stack-sm)'
    }}>
        <div style={{
        paddingTop: 'var(--space-inline-lg)',
        borderTop: '4px solid var(--border-interactive-error)'
      }} />
        <figcaption style={caption}>
          <strong>Don’t</strong> — Don't use a large primary button — it overpowers the alert.
        </figcaption>
      </figure>
    </div>
}`,...k.parameters?.docs?.source}}}})))()}export{E as a,S as c,j as d,x as i,w as l,a as n,D as o,C as r,k as s,O as t,T as u};