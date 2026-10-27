import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,r,t as i}from"./Toggle-CeTp2h0J.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a=t(),{expect:o,fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Toggle`,component:i,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `toggle-skill.md` is a placeholder. Implemented as a *toggle button* (stays pressed, `aria-pressed`) and a segmented *toggle group*, distinct from Switch (which applies a setting immediately). Review before shipping."}}},args:{children:`Bold`,icon:void 0,size:`md`,onPressedChange:s()}},l={play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Bold`});await n.click(r),await o(r).toHaveAttribute(`aria-pressed`,`true`),await o(e.onPressedChange).toHaveBeenCalledWith(!0)}},u={args:{children:void 0,icon:`feedback/star`,"aria-label":`Favourite`}},d={render:e=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-inline-md)`,alignItems:`center`},children:[(0,a.jsx)(i,{...e,size:`sm`}),(0,a.jsx)(i,{...e,size:`md`,defaultPressed:!0}),(0,a.jsx)(i,{...e,size:`lg`}),(0,a.jsx)(i,{...e,disabled:!0})]})},f={render:()=>(0,a.jsxs)(n,{type:`single`,"aria-label":`View`,defaultValue:`list`,children:[(0,a.jsx)(i,{value:`list`,icon:`layout/list`,children:`List`}),(0,a.jsx)(i,{value:`grid`,icon:`layout/grid`,children:`Grid`}),(0,a.jsx)(i,{value:`calendar`,icon:`form/calendar`,children:`Calendar`})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Grid`})),await o(e.getByRole(`button`,{name:`Grid`})).toHaveAttribute(`aria-pressed`,`true`),await o(e.getByRole(`button`,{name:`List`})).toHaveAttribute(`aria-pressed`,`false`)}},p={render:()=>(0,a.jsxs)(n,{type:`multiple`,"aria-label":`Text style`,defaultValue:[`bold`],size:`sm`,children:[(0,a.jsx)(i,{value:`bold`,children:`B`}),(0,a.jsx)(i,{value:`italic`,children:`I`}),(0,a.jsx)(i,{value:`underline`,children:`U`})]})},m=[`Default`,`IconOnly`,`Sizes`,`SingleSelectGroup`,`MultiSelectGroup`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const t = canvas.getByRole('button', {
      name: 'Bold'
    });
    await userEvent.click(t);
    await expect(t).toHaveAttribute('aria-pressed', 'true');
    await expect(args.onPressedChange).toHaveBeenCalledWith(true);
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    icon: 'feedback/star',
    'aria-label': 'Favourite'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-md)',
    alignItems: 'center'
  }}>
      <Toggle {...args} size="sm" />
      <Toggle {...args} size="md" defaultPressed />
      <Toggle {...args} size="lg" />
      <Toggle {...args} disabled />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" aria-label="View" defaultValue="list">
      <Toggle value="list" icon="layout/list">
        List
      </Toggle>
      <Toggle value="grid" icon="layout/grid">
        Grid
      </Toggle>
      <Toggle value="calendar" icon="form/calendar">
        Calendar
      </Toggle>
    </ToggleGroup>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Grid'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Grid'
    })).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', {
      name: 'List'
    })).toHaveAttribute('aria-pressed', 'false');
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" aria-label="Text style" defaultValue={['bold']} size="sm">
      <Toggle value="bold">B</Toggle>
      <Toggle value="italic">I</Toggle>
      <Toggle value="underline">U</Toggle>
    </ToggleGroup>
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as Default,u as IconOnly,p as MultiSelectGroup,f as SingleSelectGroup,d as Sizes,m as __namedExportsOrder,c as default};