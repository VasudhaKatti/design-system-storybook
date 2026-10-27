import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,r,t as i}from"./Radio-Dk5CuZBG.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),a=t(),{expect:o,fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Radio`,component:n,tags:[`autodocs`],args:{legend:`Delivery method`,defaultValue:`standard`,orientation:`vertical`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{value:`standard`,label:`Standard`,description:`3–5 business days`}),(0,a.jsx)(i,{value:`express`,label:`Express`,description:`1–2 business days`}),(0,a.jsx)(i,{value:`pickup`,label:`Store pickup`})]}),onValueChange:s()},argTypes:{children:{control:!1}}},l={play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`radio`,{name:/Express/})),await o(e.onValueChange).toHaveBeenCalledWith(`express`),await n.keyboard(`{ArrowDown}`),await o(t.getByRole(`radio`,{name:`Store pickup`})).toBeChecked()}},u={args:{orientation:`horizontal`}},d={args:{helperText:`You can change this until the order ships.`}},f={args:{defaultValue:void 0,error:`Choose a delivery method.`,required:!0}},p={args:{warning:`Express is unavailable for some items.`}},m={args:{readOnly:!0,defaultValue:`express`}},h={args:{disabled:!0}},g={args:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{value:`standard`,label:`Standard`,labelPosition:`left`}),(0,a.jsx)(i,{value:`express`,label:`Express`,labelPosition:`left`})]})}},_={args:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{value:`a`,label:``,loading:!0}),(0,a.jsx)(i,{value:`b`,label:``,loading:!0})]})}},v=[`Default`,`Horizontal`,`WithHelper`,`Invalid`,`Warning`,`ReadOnly`,`Disabled`,`LabelLeft`,`Loading`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('radio', {
      name: /Express/
    }));
    await expect(args.onValueChange).toHaveBeenCalledWith('express');
    // Arrow keys move the selection within the group.
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Store pickup'
    })).toBeChecked();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'You can change this until the order ships.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    error: 'Choose a delivery method.',
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    warning: 'Express is unavailable for some items.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'express'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Radio value="standard" label="Standard" labelPosition="left" />
        <Radio value="express" label="Express" labelPosition="left" />
      </>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Radio value="a" label="" loading />
        <Radio value="b" label="" loading />
      </>
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{l as Default,h as Disabled,u as Horizontal,f as Invalid,g as LabelLeft,_ as Loading,m as ReadOnly,p as Warning,d as WithHelper,v as __namedExportsOrder,c as default};