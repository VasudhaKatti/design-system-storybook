import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{n as a,r as o,t as s}from"./TextInput-BZhMU8RQ.js";import{n as c,t as l}from"./Drawer-BRz-JxUa.js";function u(e){let[t,n]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{leadingIcon:`action/add`,onClick:()=>n(!0),children:`New issue`}),(0,f.jsx)(l,{headline:`Create issue`,description:`Issues are visible to everyone in the project.`,footerEnd:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{variant:`secondary`,onClick:()=>n(!1),children:`Cancel`}),(0,f.jsx)(i,{onClick:()=>n(!1),children:`Create`})]}),...e,open:t,onClose:()=>n(!1),children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,f.jsx)(a,{label:`Title`,required:!0}),(0,f.jsx)(s,{label:`Description`,autosize:!0})]})})]})}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{d=t(),r(),o(),c(),f=n(),{expect:p,fn:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Drawer`,component:l,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `drawer-skill.md` is a placeholder. Implemented as an always-modal Sheet (Figma Dialog *Side-drawer*) that slides from the start, end or bottom edge. Review before shipping."}}},args:{open:!1,onClose:m(),headline:`Create issue`,children:null,placement:`end`},argTypes:{children:{control:!1},open:{control:!1}},render:({open:e,onClose:t,children:n,...r})=>(0,f.jsx)(u,{...r})},_={play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`New issue`}));let r=await h(t.ownerDocument.body).findByRole(`dialog`,{name:`Create issue`});await p(h(r).getByRole(`textbox`,{name:/Title/})).toBeInTheDocument()}},v={args:{placement:`start`}},y={args:{placement:`bottom`}},b=[`End`,`Start`,`Bottom`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'New issue'
    }));
    const drawer = await within(canvasElement.ownerDocument.body).findByRole('dialog', {
      name: 'Create issue'
    });
    await expect(within(drawer).getByRole('textbox', {
      name: /Title/
    })).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'start'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom'
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Bottom,_ as End,v as Start,b as __namedExportsOrder,g as default};