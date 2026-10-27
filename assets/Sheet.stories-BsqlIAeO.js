import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{n as a,r as o,t as s}from"./Checkbox-CPoTExZs.js";import{n as c,t as l}from"./Sheet-V7c6Ix2S.js";function u(e){let[t,n]=(0,d.useState)(e.mode===`standard`);return(0,f.jsxs)(`div`,{style:{display:`flex`,minHeight:420,border:`1px solid var(--border-subtle)`,borderRadius:`var(--radius-surface)`,overflow:`hidden`},children:[(0,f.jsxs)(`main`,{style:{flex:1,padding:`var(--space-inset-lg)`},children:[(0,f.jsx)(i,{onClick:()=>n(e=>!e),children:t?`Close filters`:`Filters`}),(0,f.jsx)(`p`,{style:{marginTop:`var(--space-stack-md)`,color:`var(--text-secondary)`},children:`Main page content.`})]}),(0,f.jsx)(l,{headline:`Filters`,subheadline:`12 results`,footerStart:(0,f.jsx)(i,{variant:`ghost`,children:`Reset`}),footerEnd:(0,f.jsx)(i,{onClick:()=>n(!1),children:`Apply`}),...e,open:t,onClose:()=>n(!1),children:_})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{d=t(),r(),o(),c(),f=n(),{expect:p,fn:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_=(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,f.jsxs)(a,{legend:`Status`,children:[(0,f.jsx)(s,{label:`Open`,defaultChecked:!0}),(0,f.jsx)(s,{label:`In review`}),(0,f.jsx)(s,{label:`Closed`})]}),(0,f.jsxs)(a,{legend:`Priority`,children:[(0,f.jsx)(s,{label:`High`}),(0,f.jsx)(s,{label:`Medium`}),(0,f.jsx)(s,{label:`Low`})]})]}),v={title:`Components/Sheet`,component:l,tags:[`autodocs`],args:{open:!1,onClose:m(),headline:`Filters`,children:null,mode:`modal`,side:`end`,width:360},argTypes:{children:{control:!1},open:{control:!1}},render:({open:e,onClose:t,children:n,...r})=>(0,f.jsx)(u,{...r})},y={play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Filters`}));let r=await g(t.ownerDocument.body).findByRole(`dialog`,{name:`Filters`});await n.click(g(r).getByRole(`button`,{name:`Close`})),await h(()=>p(r).not.toBeVisible())}},b={args:{mode:`standard`}},x={args:{side:`start`}},S={args:{side:`bottom`,description:`Bottom sheets suit compact, touch-first layouts.`}},C={args:{onBack:m(),headline:`Priority`,subheadline:`Filters › Priority`}},w=[`Modal`,`Standard`,`StartEdge`,`BottomSheet`,`WithBackNavigation`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Filters'
    }));
    const sheet = await within(canvasElement.ownerDocument.body).findByRole('dialog', {
      name: 'Filters'
    });
    await userEvent.click(within(sheet).getByRole('button', {
      name: 'Close'
    }));
    await waitFor(() => expect(sheet).not.toBeVisible());
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'standard'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'start'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    description: 'Bottom sheets suit compact, touch-first layouts.'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onBack: fn(),
    headline: 'Priority',
    subheadline: 'Filters › Priority'
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{S as BottomSheet,y as Modal,b as Standard,x as StartEdge,C as WithBackNavigation,w as __namedExportsOrder,v as default};