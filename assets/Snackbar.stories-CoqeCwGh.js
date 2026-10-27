import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{i as a,n as o,r as s,t as c}from"./Snackbar-DH4Ctt3f.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),r(),s(),u=n(),{expect:d,fn:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Snackbar`,component:c,tags:[`autodocs`],args:{open:!0,message:`Message archived`,action:{label:`Undo`,onClick:f()},closable:!0,duration:0,onClose:f()},parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(`div`,{style:{minHeight:240},children:(0,u.jsx)(e,{})})]},g={play:async({args:e,canvasElement:t,userEvent:n})=>{let r=await m(t.ownerDocument.body).findByRole(`status`);await d(r).toHaveTextContent(`Message archived`),await n.click(m(r).getByRole(`button`,{name:`Undo`})),await d(e.action.onClick).toHaveBeenCalledOnce(),await d(e.onClose).toHaveBeenCalled()}},_={args:{message:`Your export is ready. It’ll stay available for 7 days from the Downloads page.`,action:{label:`Open downloads`,onClick:f()}}},v={args:{action:void 0,closable:!1,message:`Settings saved`}},y={name:`Queued via provider`,render:()=>{function e(){let e=a(),[t,n]=(0,l.useState)(1);return(0,u.jsx)(`div`,{style:{padding:`var(--space-inset-lg)`},children:(0,u.jsx)(i,{onClick:()=>{e({message:`Item ${t} added to cart`,action:{label:`Undo`,onClick:()=>{}},duration:2500}),n(e=>e+1)},children:`Add item`})})}return(0,u.jsx)(o,{children:(0,u.jsx)(e,{})})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Add item`})),await n.click(e.getByRole(`button`,{name:`Add item`}));let r=m(t.ownerDocument.body);await p(()=>d(r.getAllByRole(`status`)).toHaveLength(1)),await d(r.getByRole(`status`)).toHaveTextContent(`Item 1 added to cart`)}},b=[`Default`,`TwoLine`,`MessageOnly`,`Queue`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    userEvent
  }) => {
    const bar = await within(canvasElement.ownerDocument.body).findByRole('status');
    await expect(bar).toHaveTextContent('Message archived');
    await userEvent.click(within(bar).getByRole('button', {
      name: 'Undo'
    }));
    await expect(args.action!.onClick).toHaveBeenCalledOnce();
    await expect(args.onClose).toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Your export is ready. It’ll stay available for 7 days from the Downloads page.',
    action: {
      label: 'Open downloads',
      onClick: fn()
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    action: undefined,
    closable: false,
    message: 'Settings saved'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Queued via provider',
  render: () => {
    function Demo() {
      const show = useSnackbar();
      const [n, setN] = useState(1);
      return <div style={{
        padding: 'var(--space-inset-lg)'
      }}>
          <Button onClick={() => {
          show({
            message: \`Item \${n} added to cart\`,
            action: {
              label: 'Undo',
              onClick: () => {}
            },
            duration: 2500
          });
          setN(x => x + 1);
        }}>
            Add item
          </Button>
        </div>;
    }
    return <SnackbarProvider>
        <Demo />
      </SnackbarProvider>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add item'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add item'
    }));
    // Only one at a time: the second waits in the queue.
    const body = within(canvasElement.ownerDocument.body);
    await waitFor(() => expect(body.getAllByRole('status')).toHaveLength(1));
    await expect(body.getByRole('status')).toHaveTextContent('Item 1 added to cart');
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as Default,v as MessageOnly,y as Queue,_ as TwoLine,b as __namedExportsOrder,h as default};