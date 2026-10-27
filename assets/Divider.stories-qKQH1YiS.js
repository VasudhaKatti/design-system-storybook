import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Divider-Ci2qCukR.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o=[`light`,`dark`,`subtle`,`transparent`,`danger`,`success`,`neutral`,`warning`,`info`],s={title:`Components/Divider`,component:r,tags:[`autodocs`],args:{orientation:`horizontal`,lineStyle:`solid`,size:`sm`,color:`light`,state:`default`,length:`fill`},argTypes:{color:{control:`select`,options:o},state:{control:`select`,options:[`default`,`hover`,`focused`,`selected`,`disabled`]}},decorators:[e=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`,padding:`var(--space-inset-lg)`,background:`var(--surface-bg-elevated)`,borderRadius:`var(--radius-surface)`},children:(0,i.jsx)(e,{})})]},c={play:async({canvas:e})=>{await a(e.getByRole(`separator`)).toHaveAttribute(`aria-orientation`,`horizontal`)}},l={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{...e,lineStyle:`solid`}),(0,i.jsx)(r,{...e,lineStyle:`dotted`}),(0,i.jsx)(r,{...e,lineStyle:`dash`})]}),args:{color:`dark`}},u={render:e=>(0,i.jsx)(i.Fragment,{children:o.map(t=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px 1fr`,alignItems:`center`},children:[(0,i.jsx)(`span`,{className:`text-label-md`,children:t}),(0,i.jsx)(r,{...e,color:t,size:`md`})]},t))})},d={render:e=>(0,i.jsx)(i.Fragment,{children:[`default`,`hover`,`focused`,`selected`,`disabled`].map(t=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px 1fr`,alignItems:`center`},children:[(0,i.jsx)(`span`,{className:`text-label-md`,children:t}),(0,i.jsx)(r,{...e,state:t,color:`dark`})]},t))})},f={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-inline-md)`,height:`var(--size-8)`},children:[(0,i.jsx)(`span`,{children:`Edit`}),(0,i.jsx)(r,{...e,orientation:`vertical`}),(0,i.jsx)(`span`,{children:`View`}),(0,i.jsx)(r,{...e,orientation:`vertical`,lineStyle:`dotted`,color:`dark`}),(0,i.jsx)(`span`,{children:`Share`})]})},p=[`Default`,`Styles`,`Colors`,`States`,`Vertical`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Divider {...args} lineStyle="solid" />
      <Divider {...args} lineStyle="dotted" />
      <Divider {...args} lineStyle="dash" />
    </>,
  args: {
    color: 'dark'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
      {COLORS.map(color => <div key={color} style={{
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      alignItems: 'center'
    }}>
          <span className="text-label-md">{color}</span>
          <Divider {...args} color={color} size="md" />
        </div>)}
    </>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <>
      {(['default', 'hover', 'focused', 'selected', 'disabled'] as const).map(state => <div key={state} style={{
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      alignItems: 'center'
    }}>
          <span className="text-label-md">{state}</span>
          <Divider {...args} state={state} color="dark" />
        </div>)}
    </>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-inline-md)',
    height: 'var(--size-8)'
  }}>
      <span>Edit</span>
      <Divider {...args} orientation="vertical" />
      <span>View</span>
      <Divider {...args} orientation="vertical" lineStyle="dotted" color="dark" />
      <span>Share</span>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Colors,c as Default,d as States,l as Styles,f as Vertical,p as __namedExportsOrder,s as default};