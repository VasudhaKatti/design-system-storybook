import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{r as n,t as r}from"./Loading-C15Or_ge.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Loading`,component:r,tags:[`autodocs`],args:{spinning:!0,size:`md`,delay:0}},s={play:async({canvas:e})=>{await a(e.getByRole(`status`)).toHaveTextContent(`Loading`)}},c={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-xl)`,alignItems:`center`},children:[(0,i.jsx)(r,{...e,size:`sm`}),(0,i.jsx)(r,{...e,size:`md`}),(0,i.jsx)(r,{...e,size:`lg`})]})},l={args:{tip:`Fetching results…`}},u={args:{tip:`Uploading`,percent:42}},d={render:e=>(0,i.jsx)(r,{...e,tip:`Refreshing…`,children:(0,i.jsxs)(`div`,{style:{padding:`var(--space-inset-lg)`,background:`var(--surface-bg-elevated)`,borderRadius:`var(--radius-surface)`,boxShadow:`var(--elevation-raised)`},children:[(0,i.jsx)(`h3`,{className:`text-heading-sm`,children:`Quarterly revenue`}),(0,i.jsx)(`p`,{children:`Content stays visible but can’t be clicked while it reloads.`}),(0,i.jsx)(`button`,{type:`button`,children:`Action behind the overlay`})]})}),play:async({canvasElement:e})=>{await a(e.querySelector(`[aria-busy="true"]`)).not.toBeNull()}},f={args:{fullscreen:!0,tip:`Loading workspace…`},parameters:{layout:`fullscreen`}},p=[`Default`,`Sizes`,`WithTip`,`WithProgress`,`WrappingContent`,`Fullscreen`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading');
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-xl)',
    alignItems: 'center'
  }}>
      <Loading {...args} size="sm" />
      <Loading {...args} size="md" />
      <Loading {...args} size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'Fetching results…'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'Uploading',
    percent: 42
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Loading {...args} tip="Refreshing…">
      <div style={{
      padding: 'var(--space-inset-lg)',
      background: 'var(--surface-bg-elevated)',
      borderRadius: 'var(--radius-surface)',
      boxShadow: 'var(--elevation-raised)'
    }}>
        <h3 className="text-heading-sm">Quarterly revenue</h3>
        <p>Content stays visible but can’t be clicked while it reloads.</p>
        <button type="button">Action behind the overlay</button>
      </div>
    </Loading>,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[aria-busy="true"]')).not.toBeNull();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    fullscreen: true,
    tip: 'Loading workspace…'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{s as Default,f as Fullscreen,c as Sizes,u as WithProgress,l as WithTip,d as WrappingContent,p as __namedExportsOrder,o as default};