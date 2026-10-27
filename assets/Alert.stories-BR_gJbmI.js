import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Alert-DpFgZJjC.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),{expect:a,fn:o}=__STORYBOOK_MODULE_TEST__,s=[`neutral`,`info`,`success`,`warning`,`danger`],c={title:`Components/Alert`,component:r,tags:[`autodocs`],args:{sentiment:`info`,size:`md`,density:`comfortable`,title:`Scheduled maintenance`,description:`The workspace will be read-only on Sunday from 02:00 to 03:00 UTC.`},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:640},children:(0,i.jsx)(e,{})})]},l={},u={render:e=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:s.map(t=>(0,i.jsx)(r,{...e,sentiment:t,title:`${t[0].toUpperCase()}${t.slice(1)} alert`},t))})},d={args:{sentiment:`danger`,title:`Payment failed`,description:`Your card was declined. Update the card to keep your plan.`,action:{label:`Update card`,onClick:o()},onClose:o()},play:async({args:e,canvas:t,userEvent:n})=>{await a(t.getByRole(`alert`)).toHaveTextContent(`Payment failed`),await n.click(t.getByRole(`button`,{name:`Dismiss`})),await a(e.onClose).toHaveBeenCalledOnce(),await a(t.queryByRole(`alert`)).toBeNull()}},f={args:{size:`sm`,description:void 0,title:`Changes saved`,sentiment:`success`,onClose:o()}},p={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,i.jsx)(r,{...e,density:`compact`,title:`Compact`}),(0,i.jsx)(r,{...e,density:`comfortable`,title:`Comfortable`}),(0,i.jsx)(r,{...e,density:`spacious`,title:`Spacious`})]})},m={args:{truncate:!0,title:`A very long alert title that keeps going well past the width of its container so it must be truncated`,description:void 0}},h=[`Default`,`Sentiments`,`WithActionAndClose`,`Small`,`Densities`,`Truncated`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)'
  }}>
      {SENTIMENTS.map(s => <Alert key={s} {...args} sentiment={s} title={\`\${s[0].toUpperCase()}\${s.slice(1)} alert\`} />)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sentiment: 'danger',
    title: 'Payment failed',
    description: 'Your card was declined. Update the card to keep your plan.',
    action: {
      label: 'Update card',
      onClick: fn()
    },
    onClose: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent('Payment failed');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dismiss'
    }));
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    description: undefined,
    title: 'Changes saved',
    sentiment: 'success',
    onClose: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)'
  }}>
      <Alert {...args} density="compact" title="Compact" />
      <Alert {...args} density="comfortable" title="Comfortable" />
      <Alert {...args} density="spacious" title="Spacious" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    title: 'A very long alert title that keeps going well past the width of its container so it must be truncated',
    description: undefined
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{l as Default,p as Densities,u as Sentiments,f as Small,m as Truncated,d as WithActionAndClose,h as __namedExportsOrder,c as default};