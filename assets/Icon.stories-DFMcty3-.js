import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{i as n,n as r,r as i,t as a}from"./Icon-B4LZwMa5.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),n(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Icon`,component:a,tags:[`autodocs`],args:{name:`action/search`,size:`md`,color:`default`},argTypes:{name:{control:`select`,options:i},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},color:{control:`select`,options:[`current`,`default`,`subtle`,`inverse`,`on-brand`,`danger`,`success`,`warning`,`info`]}}},l={},u={args:{name:`status/warning`,color:`warning`,label:`Warning`},play:async({canvas:e})=>{await s(e.getByRole(`img`,{name:`Warning`})).toBeInTheDocument()}},d={render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-inline-lg)`,alignItems:`end`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,o.jsx)(a,{...e,size:t},t))})},f={render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-inline-lg)`},children:[`default`,`subtle`,`danger`,`success`,`warning`,`info`].map(t=>(0,o.jsx)(a,{...e,name:`status/info`,color:t,size:`lg`},t))})},p={parameters:{controls:{include:[`size`,`color`]}},render:e=>(0,o.jsx)(`ul`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`var(--space-inline-md)`,padding:0,listStyle:`none`},children:i.map(t=>(0,o.jsxs)(`li`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-stack-xs)`,padding:`var(--space-inset-md)`,borderRadius:`var(--radius-control)`,background:`var(--surface-bg-elevated)`},children:[(0,o.jsx)(a,{...e,name:t,size:`lg`}),(0,o.jsx)(`code`,{className:`text-caption-sm`,style:{color:`var(--text-secondary)`},children:t})]},t))})},m=[`Default`,`Meaningful`,`Sizes`,`Colors`,`Gallery`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'status/warning',
    color: 'warning',
    label: 'Warning'
  },
  play: async ({
    canvas
  }) => {
    // A labelled icon is exposed as an image; a decorative one is hidden.
    await expect(canvas.getByRole('img', {
      name: 'Warning'
    })).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-lg)',
    alignItems: 'end'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Icon key={size} {...args} size={size} />)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-lg)'
  }}>
      {(['default', 'subtle', 'danger', 'success', 'warning', 'info'] as const).map(color => <Icon key={color} {...args} name="status/info" color={color} size="lg" />)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['size', 'color']
    }
  },
  render: args => <ul style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: 'var(--space-inline-md)',
    padding: 0,
    listStyle: 'none'
  }}>
      {iconNames.map(name => <li key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-stack-xs)',
      padding: 'var(--space-inset-md)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-bg-elevated)'
    }}>
          <Icon {...args} name={name} size="lg" />
          <code className="text-caption-sm" style={{
        color: 'var(--text-secondary)'
      }}>
            {name}
          </code>
        </li>)}
    </ul>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Colors,l as Default,p as Gallery,u as Meaningful,d as Sizes,m as __namedExportsOrder,c as default};