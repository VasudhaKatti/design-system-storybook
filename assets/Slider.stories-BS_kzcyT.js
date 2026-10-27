import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,r as i}from"./TextInput-BZhMU8RQ.js";import{n as a,t as o}from"./Slider-CbFArCut.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s=t(),i(),a(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Slider`,component:o,tags:[`autodocs`],args:{label:`Volume`,defaultValue:40,min:0,max:100,step:1,showValue:`auto`,onValueChange:u(),onValueCommit:u()},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:420},children:(0,c.jsx)(e,{})})]},f={play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`slider`,{name:`Volume`});r.focus(),await n.keyboard(`{ArrowRight}{ArrowRight}`),await l(r).toHaveAttribute(`aria-valuenow`,`42`),await n.keyboard(`{End}`),await l(r).toHaveAttribute(`aria-valuenow`,`100`),await l(e.onValueCommit).toHaveBeenCalled()}},p={args:{startIcon:`form/minus`,endIcon:`action/add`,format:e=>`${e}%`}},m={args:{label:`Price`,defaultValue:[20,80],format:e=>`$${e}`,showValue:`always`,handleLabels:[`Minimum price`,`Maximum price`]},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`slider`,{name:`Minimum price`});n.focus(),await t.keyboard(`{End}`),await l(n).toHaveAttribute(`aria-valuenow`,`80`)}},h={args:{label:`Quality`,defaultValue:50,snapToMarks:!0,marks:[{value:0,label:`Low`},{value:50,label:`Medium`},{value:100,label:`High`}]}},g={args:{label:`Seats`,step:10,defaultValue:30,marks:[0,10,20,30,40,50,60,70,80,90,100].map(e=>({value:e}))}},_={name:`Paired with a number input`,render:()=>{let[e,t]=(0,s.useState)(25);return(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-lg)`,alignItems:`end`},children:[(0,c.jsx)(`div`,{style:{flex:1},children:(0,c.jsx)(o,{label:`Opacity`,value:e,onValueChange:t,format:e=>`${e}%`})}),(0,c.jsx)(`div`,{style:{width:96},children:(0,c.jsx)(r,{label:`Opacity value`,hideLabel:!0,type:`number`,min:0,max:100,suffix:`%`,value:e,onChange:e=>t(Math.max(0,Math.min(100,Number(e.target.value))))})})]})}},v={args:{disabled:!0}},y=[`Default`,`WithIcons`,`Range`,`Marks`,`Stepped`,`WithNumberInput`,`Disabled`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const handle = canvas.getByRole('slider', {
      name: 'Volume'
    });
    handle.focus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await expect(handle).toHaveAttribute('aria-valuenow', '42');
    await userEvent.keyboard('{End}');
    await expect(handle).toHaveAttribute('aria-valuenow', '100');
    await expect(args.onValueCommit).toHaveBeenCalled();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: 'form/minus',
    endIcon: 'action/add',
    format: (v: number) => \`\${v}%\`
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    defaultValue: [20, 80],
    format: (v: number) => \`$\${v}\`,
    showValue: 'always',
    handleLabels: ['Minimum price', 'Maximum price']
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const minHandle = canvas.getByRole('slider', {
      name: 'Minimum price'
    });
    minHandle.focus();
    // Handles can't cross: the minimum stops at the maximum.
    await userEvent.keyboard('{End}');
    await expect(minHandle).toHaveAttribute('aria-valuenow', '80');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Quality',
    defaultValue: 50,
    snapToMarks: true,
    marks: [{
      value: 0,
      label: 'Low'
    }, {
      value: 50,
      label: 'Medium'
    }, {
      value: 100,
      label: 'High'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Seats',
    step: 10,
    defaultValue: 30,
    marks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(value => ({
      value
    }))
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Paired with a number input',
  render: () => {
    const [v, setV] = useState(25);
    return <div style={{
      display: 'flex',
      gap: 'var(--space-inline-lg)',
      alignItems: 'end'
    }}>
        <div style={{
        flex: 1
      }}>
          <Slider label="Opacity" value={v} onValueChange={setV} format={x => \`\${x}%\`} />
        </div>
        <div style={{
        width: 96
      }}>
          <TextInput label="Opacity value" hideLabel type="number" min={0} max={100} suffix="%" value={v} onChange={e => setV(Math.max(0, Math.min(100, Number(e.target.value))))} />
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{f as Default,v as Disabled,h as Marks,m as Range,g as Stepped,p as WithIcons,_ as WithNumberInput,y as __namedExportsOrder,d as default};