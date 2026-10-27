import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{i as r,t as i}from"./Avatar-DpqFpdMW.js";import{n as a,t as o}from"./AppBar-D6dHVdOK.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s=t(),r(),a(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/App Bar`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{configuration:`small`,headline:`Projects`,leading:{icon:`action/menu`,label:`Open navigation`,onClick:u()},actions:[{icon:`action/search`,label:`Search`,onClick:u()},{icon:`feedback/bell`,label:`Notifications`,onClick:u()}],avatar:(0,c.jsx)(i,{name:`Alex Johnson`,size:`sm`})},argTypes:{avatar:{control:!1},brand:{control:!1}}},f={play:async({args:e,canvas:t,userEvent:n})=>{await l(t.getByRole(`heading`,{level:1,name:`Projects`})).toBeVisible(),await n.click(t.getByRole(`button`,{name:`Open navigation`})),await l(e.leading.onClick).toHaveBeenCalledOnce()}},p={args:{configuration:`small-centered`,leading:{icon:`nav/arrow-left`,label:`Back`,onClick:u()},supportingText:`12 active`}},m={name:`Small with image`,args:{brand:(0,c.jsxs)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 28 28`,role:`img`,"aria-label":`Acme`,children:[(0,c.jsx)(`rect`,{width:`28`,height:`28`,rx:`8`,fill:`var(--interactive-bg-primary-default)`}),(0,c.jsx)(`path`,{d:`M8 19l6-11 6 11`,stroke:`var(--interactive-fg-primary-default)`,strokeWidth:`2.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),headline:`Acme Design`}},h={args:{configuration:`medium`,headline:`Quarterly planning`,supportingText:`Updated 2 hours ago`}},g={args:{configuration:`large`,headline:`Good morning, Alex`}},_={args:{configuration:`search`,headline:void 0,actions:[{icon:`action/filter`,label:`Filters`,onClick:u()}],onSearch:u()}},v={render:e=>{let t=(0,s.useRef)(null);return(0,c.jsxs)(`div`,{ref:t,style:{height:320,overflow:`auto`},children:[(0,c.jsx)(o,{...e,elevation:`on-scroll`,scrollContainer:t}),(0,c.jsx)(`div`,{style:{padding:`var(--space-inset-lg)`},children:Array.from({length:20},(e,t)=>(0,c.jsxs)(`p`,{style:{marginBottom:`var(--space-stack-sm)`},children:[`Scroll to see the bar lift. Row `,t+1,`.`]},t))})]})}},y=[`Small`,`SmallCentered`,`WithBrand`,`Medium`,`Large`,`Search`,`ElevateOnScroll`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Projects'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open navigation'
    }));
    await expect(args.leading!.onClick).toHaveBeenCalledOnce();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'small-centered',
    leading: {
      icon: 'nav/arrow-left',
      label: 'Back',
      onClick: fn()
    },
    supportingText: '12 active'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Small with image',
  args: {
    brand: <svg width="28" height="28" viewBox="0 0 28 28" role="img" aria-label="Acme">
        <rect width="28" height="28" rx="8" fill="var(--interactive-bg-primary-default)" />
        <path d="M8 19l6-11 6 11" stroke="var(--interactive-fg-primary-default)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
    headline: 'Acme Design'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'medium',
    headline: 'Quarterly planning',
    supportingText: 'Updated 2 hours ago'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'large',
    headline: 'Good morning, Alex'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: 'search',
    headline: undefined,
    actions: [{
      icon: 'action/filter',
      label: 'Filters',
      onClick: fn()
    }],
    onSearch: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<HTMLDivElement>(null);
    return <div ref={ref} style={{
      height: 320,
      overflow: 'auto'
    }}>
        <AppBar {...args} elevation="on-scroll" scrollContainer={ref} />
        <div style={{
        padding: 'var(--space-inset-lg)'
      }}>
          {Array.from({
          length: 20
        }, (_, i) => <p key={i} style={{
          marginBottom: 'var(--space-stack-sm)'
        }}>
              Scroll to see the bar lift. Row {i + 1}.
            </p>)}
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as ElevateOnScroll,g as Large,h as Medium,_ as Search,f as Small,p as SmallCentered,m as WithBrand,y as __namedExportsOrder,d as default};