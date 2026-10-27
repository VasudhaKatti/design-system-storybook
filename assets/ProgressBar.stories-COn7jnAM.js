import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./ProgressBar-GI1lQCBs.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Progress Bar`,component:i,tags:[`autodocs`],args:{label:`Uploading report.pdf`,value:42,size:`lg`,status:`active`,layout:`default`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(e,{})})]},l={play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading report.pdf`});await s(t).toHaveAttribute(`aria-valuenow`,`42`)}},u={args:{value:void 0,label:`Preparing export`,helperText:`Fetching assets…`}},d={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,o.jsx)(i,{...e,size:`lg`,label:`Large (8px)`}),(0,o.jsx)(i,{...e,size:`sm`,label:`Small (4px)`})]})},f={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,o.jsx)(i,{...e,label:`Importing contacts`,helperText:`128/256 records`}),(0,o.jsx)(i,{...e,label:`Backup`,status:`success`,helperText:`Completed at 14:02`}),(0,o.jsx)(i,{...e,label:`Sync`,status:`error`,helperText:`Connection lost — retry from Settings.`})]})},p={args:{layout:`inline`,size:`sm`,label:`Storage`}},m={render:e=>{let[t,n]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>n(e=>e>=100?0:e+5),400);return()=>clearInterval(e)},[]),(0,o.jsx)(i,{...e,value:t,status:t>=100?`success`:`active`,label:`Downloading assets`})}},h=[`Determinate`,`Indeterminate`,`Sizes`,`Status`,`Inline`,`Live`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('progressbar', {
      name: 'Uploading report.pdf'
    });
    await expect(bar).toHaveAttribute('aria-valuenow', '42');
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined,
    label: 'Preparing export',
    helperText: 'Fetching assets…'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <ProgressBar {...args} size="lg" label="Large (8px)" />
      <ProgressBar {...args} size="sm" label="Small (4px)" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <ProgressBar {...args} label="Importing contacts" helperText="128/256 records" />
      <ProgressBar {...args} label="Backup" status="success" helperText="Completed at 14:02" />
      <ProgressBar {...args} label="Sync" status="error" helperText="Connection lost — retry from Settings." />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'inline',
    size: 'sm',
    label: 'Storage'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = useState(0);
    useEffect(() => {
      const t = setInterval(() => setV(x => x >= 100 ? 0 : x + 5), 400);
      return () => clearInterval(t);
    }, []);
    return <ProgressBar {...args} value={v} status={v >= 100 ? 'success' : 'active'} label="Downloading assets" />;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{l as Determinate,u as Indeterminate,p as Inline,m as Live,d as Sizes,f as Status,h as __namedExportsOrder,c as default};