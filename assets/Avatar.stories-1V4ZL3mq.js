import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{i as n,n as r,r as i,t as a}from"./Avatar-DpqFpdMW.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23a5b4fc%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%234338ca%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2222%22%20rx%3D%2211%22%20fill%3D%22%234338ca%22%2F%3E%3C%2Fsvg%3E`,u={title:`Components/Avatar`,component:a,tags:[`autodocs`],args:{name:`Alex Johnson`,size:`md`,shape:`circle`},argTypes:{color:{control:`inline-radio`,options:[1,2,3,4,5]}}},d={play:async({canvas:e})=>{await s(e.getByRole(`img`,{name:`Alex Johnson`})).toHaveTextContent(`AJ`)}},f={args:{src:l}},p={name:`Icon`,args:{name:`Deploy bot`,icon:`action/settings`,shape:`square`}},m={args:{src:`/does-not-exist.png`,icon:`user/profile`}},h={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,o.jsx)(a,{...e,size:`sm`}),(0,o.jsx)(a,{...e,size:`md`}),(0,o.jsx)(a,{...e,size:`lg`})]})},g={render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[1,2,3,4,5].map(t=>(0,o.jsx)(a,{...e,color:t},t))})},_={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-xl)`,alignItems:`center`},children:[(0,o.jsx)(a,{...e,badge:!0}),(0,o.jsx)(a,{...e,src:l,badge:3}),(0,o.jsx)(a,{...e,name:`Sam Lee`,status:`online`}),(0,o.jsx)(a,{...e,name:`Riya Patel`,status:`away`})]})},v={render:()=>(0,o.jsx)(r,{max:4,"aria-label":`Assignees`,children:[`Alex Johnson`,`Sam Lee`,`Riya Patel`,`Chen Wu`,`Maria Garcia`,`Tom Brown`].map(e=>(0,o.jsx)(a,{name:e},e))}),play:async({canvas:e})=>{await s(e.getByRole(`img`,{name:/^2 more/})).toHaveTextContent(`+2`)}},y={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`,alignItems:`start`},children:[(0,o.jsx)(i,{name:`Alex Johnson`,email:`alex.johnson@acme.com`}),(0,o.jsx)(i,{name:`Alex Johnson`,email:`alex.johnson@acme.com`,onClick:c(),trailingIcon:`nav/chevron-down`}),(0,o.jsx)(i,{name:`Alex Johnson`,email:`alex.johnson@acme.com`,onClick:c(),selected:!0}),(0,o.jsx)(i,{name:`Alex Johnson`,email:`alex.johnson@acme.com`,onClick:c(),disabled:!0})]})},b=[`Initials`,`Image`,`IconType`,`BrokenImageFallsBack`,`Sizes`,`Colors`,`WithBadge`,`Group`,`Identity`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Alex Johnson'
    })).toHaveTextContent('AJ');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: PHOTO
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Icon',
  args: {
    name: 'Deploy bot',
    icon: 'action/settings',
    shape: 'square'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: '/does-not-exist.png',
    icon: 'user/profile'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      {([1, 2, 3, 4, 5] as const).map(color => <Avatar key={color} {...args} color={color} />)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-xl)',
    alignItems: 'center'
  }}>
      <Avatar {...args} badge />
      <Avatar {...args} src={PHOTO} badge={3} />
      <Avatar {...args} name="Sam Lee" status="online" />
      <Avatar {...args} name="Riya Patel" status="away" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4} aria-label="Assignees">
      {['Alex Johnson', 'Sam Lee', 'Riya Patel', 'Chen Wu', 'Maria Garcia', 'Tom Brown'].map(n => <Avatar key={n} name={n} />)}
    </AvatarGroup>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: /^2 more/
    })).toHaveTextContent('+2');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-sm)',
    alignItems: 'start'
  }}>
      <AvatarIdentity name="Alex Johnson" email="alex.johnson@acme.com" />
      <AvatarIdentity name="Alex Johnson" email="alex.johnson@acme.com" onClick={fn()} trailingIcon="nav/chevron-down" />
      <AvatarIdentity name="Alex Johnson" email="alex.johnson@acme.com" onClick={fn()} selected />
      <AvatarIdentity name="Alex Johnson" email="alex.johnson@acme.com" onClick={fn()} disabled />
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{m as BrokenImageFallsBack,g as Colors,v as Group,p as IconType,y as Identity,f as Image,d as Initials,h as Sizes,_ as WithBadge,b as __namedExportsOrder,u as default};