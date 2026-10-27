import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,r,t as i}from"./Accordion-CCzWE06j.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a=t(),{expect:o}=__STORYBOOK_MODULE_TEST__,s=(0,a.jsxs)(a.Fragment,{children:[[{value:`billing`,title:`How does billing work?`,body:`You’re billed monthly per active seat. Seats added mid-cycle are prorated.`},{value:`cancel`,title:`Can I cancel at any time?`,body:`Yes — cancel from Settings → Billing. Your workspace stays read-only for 30 days.`},{value:`export`,title:`Can I export my data?`,body:`Export everything as JSON or CSV from Settings → Data.`}].map(e=>(0,a.jsx)(n,{value:e.value,title:e.title,children:e.body},e.value)),(0,a.jsx)(n,{value:`sso`,title:`Single sign-on (Enterprise only)`,disabled:!0,children:`Contact sales.`})]}),c={title:`Components/Accordion`,component:i,tags:[`autodocs`],args:{variant:`bordered`,defaultValue:`billing`,children:s},argTypes:{children:{control:!1},variant:{control:`inline-radio`,options:[`bordered`,`borderless`]}},render:e=>(0,a.jsx)(i,{...e}),decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:560},children:(0,a.jsx)(e,{})})]},l={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`How does billing work?`}),r=e.getByRole(`button`,{name:`Can I cancel at any time?`});await o(n).toHaveAttribute(`aria-expanded`,`true`),await t.click(r),await o(r).toHaveAttribute(`aria-expanded`,`true`),await o(n).toHaveAttribute(`aria-expanded`,`false`),await t.keyboard(`{ArrowDown}`),await o(e.getByRole(`button`,{name:`Can I export my data?`})).toHaveFocus()}},u={render:()=>(0,a.jsx)(i,{expandMode:`multiple`,defaultValue:[`billing`,`export`],children:s})},d={args:{variant:`borderless`}},f=[`SingleExpand`,`MultipleExpand`,`Borderless`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const billing = canvas.getByRole('button', {
      name: 'How does billing work?'
    });
    const cancel = canvas.getByRole('button', {
      name: 'Can I cancel at any time?'
    });
    await expect(billing).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(cancel);
    await expect(cancel).toHaveAttribute('aria-expanded', 'true');
    await expect(billing).toHaveAttribute('aria-expanded', 'false');
    // Arrow keys move between headers.
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: 'Can I export my data?'
    })).toHaveFocus();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion expandMode="multiple" defaultValue={['billing', 'export']}>
      {items}
    </Accordion>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'borderless'
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Borderless,u as MultipleExpand,l as SingleExpand,f as __namedExportsOrder,c as default};