import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Button-Cxz3wpGw.js";import{i,n as a,r as o,t as s}from"./Notification-BGtZEcPl.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),o(),c=t(),{expect:l,fn:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Notification`,component:s,tags:[`autodocs`],args:{variant:`inline`,status:`info`,title:`New version available`,children:`Reload to get the latest features.`},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:600},children:(0,c.jsx)(e,{})})]},p={},m={render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`},children:[(0,c.jsx)(s,{...e,status:`info`,title:`Heads up`,children:`Billing details changed yesterday.`}),(0,c.jsx)(s,{...e,status:`success`,title:`Project published`,children:`It’s live at acme.design/tokens.`}),(0,c.jsx)(s,{...e,status:`warning`,title:`Storage almost full`,children:`You’ve used 92% of 50 GB. Remove files or upgrade.`}),(0,c.jsx)(s,{...e,status:`error`,title:`Server instance unavailable`,onClose:u(),children:`Restart it from the Instances page, then try again.`})]})},h={args:{status:`error`,title:`Upload failed`,children:`2 of 14 files couldn’t be uploaded.`,action:{label:`Retry`,onClick:u()},onClose:u()},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Retry`})),await l(e.action.onClick).toHaveBeenCalledOnce()}},g={args:{variant:`callout`,status:`warning`,title:`Before you import`,children:`Columns are matched by header name, so check your CSV headers first.`,link:{label:`CSV import guide`,href:`#guide`}}},_={render:()=>{function e(){let e=i();return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-sm)`},children:[(0,c.jsx)(r,{onClick:()=>e({status:`success`,title:`Invite sent`,children:`sam.lee@acme.com will get an email shortly.`,timestamp:`Just now`}),children:`Success toast`}),(0,c.jsx)(r,{variant:`secondary`,onClick:()=>e({status:`error`,title:`Couldn’t save`,children:`Check your connection.`,action:{label:`Retry`,onClick:()=>{}},duration:0,timestamp:`Just now`}),children:`Persistent error toast`})]})}return(0,c.jsx)(a,{children:(0,c.jsx)(e,{})})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Success toast`}));let r=d(t.ownerDocument.body).getByRole(`region`,{name:`Notifications`});await l(d(r).getByRole(`status`)).toHaveTextContent(`Invite sent`)}},v=[`Inline`,`Statuses`,`Actionable`,`Callout`,`Toasts`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)'
  }}>
      <Notification {...args} status="info" title="Heads up">Billing details changed yesterday.</Notification>
      <Notification {...args} status="success" title="Project published">It’s live at acme.design/tokens.</Notification>
      <Notification {...args} status="warning" title="Storage almost full">You’ve used 92% of 50 GB. Remove files or upgrade.</Notification>
      <Notification {...args} status="error" title="Server instance unavailable" onClose={fn()}>
        Restart it from the Instances page, then try again.
      </Notification>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    title: 'Upload failed',
    children: '2 of 14 files couldn’t be uploaded.',
    action: {
      label: 'Retry',
      onClick: fn()
    },
    onClose: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Retry'
    }));
    await expect(args.action!.onClick).toHaveBeenCalledOnce();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'callout',
    status: 'warning',
    title: 'Before you import',
    children: 'Columns are matched by header name, so check your CSV headers first.',
    link: {
      label: 'CSV import guide',
      href: '#guide'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        gap: 'var(--space-inline-sm)'
      }}>
          <Button onClick={() => toast({
          status: 'success',
          title: 'Invite sent',
          children: 'sam.lee@acme.com will get an email shortly.',
          timestamp: 'Just now'
        })}>Success toast</Button>
          <Button variant="secondary" onClick={() => toast({
          status: 'error',
          title: 'Couldn’t save',
          children: 'Check your connection.',
          action: {
            label: 'Retry',
            onClick: () => {}
          },
          duration: 0,
          timestamp: 'Just now'
        })}>
            Persistent error toast
          </Button>
        </div>;
    }
    return <ToastProvider>
        <Demo />
      </ToastProvider>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Success toast'
    }));
    const region = within(canvasElement.ownerDocument.body).getByRole('region', {
      name: 'Notifications'
    });
    await expect(within(region).getByRole('status')).toHaveTextContent('Invite sent');
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Actionable,g as Callout,p as Inline,m as Statuses,_ as Toasts,v as __namedExportsOrder,f as default};