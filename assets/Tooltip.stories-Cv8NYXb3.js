import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Icon-B4LZwMa5.js";import{n as i,t as a}from"./Tooltip-YsTnscf_.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o=t(),{expect:s,waitFor:c,within:l}=__STORYBOOK_MODULE_TEST__,u=e=>(0,o.jsx)(`button`,{type:`button`,"aria-label":e,style:{display:`inline-grid`,placeItems:`center`,width:40,height:40,borderRadius:`var(--radius-control)`,border:`1px solid var(--border-interactive-default)`,background:`var(--surface-bg-elevated)`,color:`var(--icon-default)`,cursor:`pointer`},children:(0,o.jsx)(r,{name:`action/settings`,size:`md`})}),d={title:`Components/Tooltip`,component:a,tags:[`autodocs`],args:{content:`Workspace settings`,placement:`top`,tone:`neutral`,arrow:!0,children:u(`Settings`)},argTypes:{placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]},children:{control:!1}},decorators:[e=>(0,o.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,minHeight:200},children:(0,o.jsx)(e,{})})]},f={play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.tab();let r=await l(t.ownerDocument.body).findByRole(`tooltip`);await s(r).toHaveTextContent(`Workspace settings`),await s(e.getByRole(`button`,{name:`Settings`})).toHaveAttribute(`aria-describedby`,r.id),await n.keyboard(`{Escape}`),await c(()=>s(l(t.ownerDocument.body).queryByRole(`tooltip`)).toBeNull())}},p={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`},children:[`neutral`,`brand`,`danger`,`warning`,`success`,`info`].map(e=>(0,o.jsx)(a,{content:`${e} tooltip`,tone:e,children:u(e)},e))})},m={name:`Toolbar (single tooltip at a time)`,render:()=>(0,o.jsx)(`div`,{role:`toolbar`,"aria-label":`Formatting`,style:{display:`flex`,gap:`var(--space-inline-xs)`},children:[`Bold`,`Italic`,`Underline`,`Link`].map(e=>(0,o.jsx)(a,{content:e,placement:`bottom`,children:u(e)},e))})},h={args:{content:`Tooltips wrap at 250px. If an explanation needs more room than this, move it into inline help text or a popover instead.`}},g={args:{arrow:!1,placement:`right`}},_=[`Default`,`Tones`,`Toolbar`,`LongText`,`NoArrow`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    // Keyboard focus opens it immediately and links it to the trigger; Escape closes it.
    await userEvent.tab();
    const tip = await within(canvasElement.ownerDocument.body).findByRole('tooltip');
    await expect(tip).toHaveTextContent('Workspace settings');
    await expect(canvas.getByRole('button', {
      name: 'Settings'
    })).toHaveAttribute('aria-describedby', tip.id);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).toBeNull());
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)'
  }}>
      {(['neutral', 'brand', 'danger', 'warning', 'success', 'info'] as const).map(tone => <Tooltip key={tone} content={\`\${tone} tooltip\`} tone={tone}>
          {trigger(tone)}
        </Tooltip>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar (single tooltip at a time)',
  render: () => <div role="toolbar" aria-label="Formatting" style={{
    display: 'flex',
    gap: 'var(--space-inline-xs)'
  }}>
      {['Bold', 'Italic', 'Underline', 'Link'].map(t => <Tooltip key={t} content={t} placement="bottom">
          {trigger(t)}
        </Tooltip>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltips wrap at 250px. If an explanation needs more room than this, move it into inline help text or a popover instead.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: false,
    placement: 'right'
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as Default,h as LongText,g as NoArrow,p as Tones,m as Toolbar,_ as __namedExportsOrder,d as default};