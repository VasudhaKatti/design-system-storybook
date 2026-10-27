import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,r as i,t as a}from"./Tag-BSL947mn.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o=t(),i(),s=n(),{expect:c,fn:l}=__STORYBOOK_MODULE_TEST__,u=[`gray`,`brand`,`success`,`warning`,`danger`,`info`],d={title:`Components/Tag`,component:a,tags:[`autodocs`],args:{label:`Design`,size:`md`,color:`brand`}},f={},p={render:e=>(0,s.jsx)(r,{"aria-label":`Categories`,children:u.map(t=>(0,s.jsx)(a,{...e,color:t,label:t},t))})},m={render:e=>(0,s.jsxs)(r,{"aria-label":`Sizes`,children:[(0,s.jsx)(a,{...e,size:`sm`,label:`Small`}),(0,s.jsx)(a,{...e,size:`md`,label:`Medium`,icon:`feedback/star`}),(0,s.jsx)(a,{...e,size:`lg`,label:`Large`,icon:`feedback/star`})]})},h={render:()=>{let[e,t]=(0,o.useState)([`Open`,`Assigned to me`,`High priority`]);return e.length?(0,s.jsx)(r,{"aria-label":`Active filters`,children:e.map(e=>(0,s.jsx)(a,{variant:`dismissible`,label:e,color:`info`,onDismiss:()=>t(t=>t.filter(t=>t!==e))},e))}):(0,s.jsx)(`p`,{className:`text-body-sm`,style:{color:`var(--text-secondary)`},children:`No filters applied`})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Remove Open`})),await c(e.queryByText(`Open`)).toBeNull()}},g={render:()=>{let[e,t]=(0,o.useState)([`React`]);return(0,s.jsx)(r,{"aria-label":`Frameworks`,children:[`React`,`Vue`,`Svelte`,`Angular`].map(n=>(0,s.jsx)(a,{variant:`selectable`,label:n,selected:e.includes(n),onSelectedChange:e=>t(t=>e?[...t,n]:t.filter(e=>e!==n))},n))})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Vue`});await t.click(n),await c(n).toHaveAttribute(`aria-pressed`,`true`)}},_={render:()=>(0,s.jsxs)(r,{"aria-label":`Labels`,children:[(0,s.jsx)(a,{label:`Design`,color:`brand`}),(0,s.jsx)(a,{label:`Research`,color:`success`}),(0,s.jsx)(a,{variant:`operational`,label:`+3`,"aria-haspopup":`dialog`,"aria-label":`Show 3 more labels`,onClick:l()})]})},v={args:{disabled:!0}},y={render:e=>(0,s.jsxs)(r,{"aria-label":`Loading tags`,children:[(0,s.jsx)(a,{...e,loading:!0,size:`sm`}),(0,s.jsx)(a,{...e,loading:!0}),(0,s.jsx)(a,{...e,loading:!0,size:`lg`})]})},b=[`ReadOnly`,`Colors`,`Sizes`,`Dismissible`,`Selectable`,`Operational`,`Disabled`,`Loading`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup aria-label="Categories">
      {COLORS.map(color => <Tag key={color} {...args} color={color} label={color} />)}
    </TagGroup>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup aria-label="Sizes">
      <Tag {...args} size="sm" label="Small" />
      <Tag {...args} size="md" label="Medium" icon="feedback/star" />
      <Tag {...args} size="lg" label="Large" icon="feedback/star" />
    </TagGroup>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState(['Open', 'Assigned to me', 'High priority']);
    return filters.length ? <TagGroup aria-label="Active filters">
        {filters.map(f => <Tag key={f} variant="dismissible" label={f} color="info" onDismiss={() => setFilters(all => all.filter(x => x !== f))} />)}
      </TagGroup> : <p className="text-body-sm" style={{
      color: 'var(--text-secondary)'
    }}>
        No filters applied
      </p>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Open'
    }));
    await expect(canvas.queryByText('Open')).toBeNull();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['React']);
    return <TagGroup aria-label="Frameworks">
        {['React', 'Vue', 'Svelte', 'Angular'].map(f => <Tag key={f} variant="selectable" label={f} selected={selected.includes(f)} onSelectedChange={on => setSelected(all => on ? [...all, f] : all.filter(x => x !== f))} />)}
      </TagGroup>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const vue = canvas.getByRole('button', {
      name: 'Vue'
    });
    await userEvent.click(vue);
    await expect(vue).toHaveAttribute('aria-pressed', 'true');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TagGroup aria-label="Labels">
      <Tag label="Design" color="brand" />
      <Tag label="Research" color="success" />
      <Tag variant="operational" label="+3" aria-haspopup="dialog" aria-label="Show 3 more labels" onClick={fn()} />
    </TagGroup>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup aria-label="Loading tags">
      <Tag {...args} loading size="sm" />
      <Tag {...args} loading />
      <Tag {...args} loading size="lg" />
    </TagGroup>
}`,...y.parameters?.docs?.source}}}})))()}x();export{p as Colors,v as Disabled,h as Dismissible,y as Loading,_ as Operational,f as ReadOnly,g as Selectable,m as Sizes,b as __namedExportsOrder,d as default};