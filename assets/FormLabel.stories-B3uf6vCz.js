import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,r,t as i}from"./FormLabel-BE5izVt8.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a=t(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Form Label`,component:i,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `form-label-skill.md` is a placeholder. Label and helper text follow the Figma Input/Checkbox field anatomy and token sets; review before shipping."}}},args:{children:`Email address`,required:!1,optional:!1,disabled:!1,size:`md`}},c={},l={args:{required:!0},play:async({canvas:e})=>{await o(e.getByText(`Email address`).closest(`label`)).toHaveTextContent(`Email address* (required)`)}},u={args:{optional:!0}},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-xs)`},children:[(0,a.jsx)(n,{children:`We’ll never share your email.`}),(0,a.jsx)(n,{tone:`error`,children:`Enter a valid email address.`}),(0,a.jsx)(n,{tone:`warning`,children:`This domain often bounces.`}),(0,a.jsx)(n,{tone:`success`,children:`Email verified.`}),(0,a.jsx)(n,{disabled:!0,children:`Disabled helper text.`})]})},f=[`Default`,`Required`,`Optional`,`HelperTones`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Email address').closest('label')).toHaveTextContent('Email address* (required)');
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-xs)'
  }}>
      <HelperText>We’ll never share your email.</HelperText>
      <HelperText tone="error">Enter a valid email address.</HelperText>
      <HelperText tone="warning">This domain often bounces.</HelperText>
      <HelperText tone="success">Email verified.</HelperText>
      <HelperText disabled>Disabled helper text.</HelperText>
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as Default,d as HelperTones,u as Optional,l as Required,f as __namedExportsOrder,s as default};