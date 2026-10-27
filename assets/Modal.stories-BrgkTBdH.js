import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{n as a,r as o}from"./TextInput-BZhMU8RQ.js";import{n as s,t as c}from"./Modal-BObrf_Ad.js";function l({trigger:e=`Open modal`,...t}){let[n,r]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{onClick:()=>r(!0),children:e}),(0,d.jsx)(c,{title:`Rename project`,...t,open:n,onClose:()=>r(!1),onPrimary:()=>{t.onPrimary?.(),r(!1)},children:t.children??(0,d.jsx)(a,{label:`Project name`,defaultValue:`Website redesign`})})]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u=t(),r(),o(),s(),d=n(),{expect:f,fn:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Modal`,component:c,tags:[`autodocs`],parameters:{docs:{story:{inline:!1,iframeHeight:420}}},args:{open:!1,onClose:p(),title:`Rename project`,children:null,variant:`transactional`,size:`sm`,overlay:`dim`},argTypes:{children:{control:!1},open:{control:!1}},render:({open:e,onClose:t,children:n,...r})=>(0,d.jsx)(l,{...r})},_={args:{primaryLabel:`Rename`},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Open modal`});await n.click(r);let i=await h(t.ownerDocument.body).findByRole(`dialog`,{name:`Rename project`});await m(()=>f(i.contains(document.activeElement)).toBe(!0)),await n.keyboard(`{Escape}`),await m(()=>f(i).not.toBeVisible()),await f(r).toHaveFocus()}},v={args:{variant:`danger`,title:`Delete “Website redesign”?`,label:`Project`,primaryLabel:`Delete project`,children:(0,d.jsx)(`p`,{children:`This permanently deletes the project, its 24 files and all comments. This can’t be undone.`})}},y={args:{variant:`passive`,title:`What’s new in 4.2`,children:(0,d.jsx)(`p`,{children:`Dark mode for every component, a faster token export, and keyboard shortcuts for the canvas.`})}},b={args:{variant:`acknowledgment`,size:`xs`,title:`Session expired`,dismissible:!1,primaryLabel:`Sign in again`,children:(0,d.jsx)(`p`,{children:`For your security you’ve been signed out after 30 minutes of inactivity.`})}},x={render:()=>{let[e,t]=(0,u.useState)(!1),[n,r]=(0,u.useState)(0),a=[`Choose a template`,`Name your project`,`Invite teammates`];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{onClick:()=>(r(0),t(!0)),children:`New project`}),(0,d.jsx)(c,{open:e,onClose:()=>t(!1),variant:`progress`,size:`md`,title:a[n],step:n,stepCount:a.length,onBack:()=>r(e=>e-1),onNext:()=>r(e=>e+1),primaryLabel:`Create project`,onPrimary:()=>t(!1),children:(0,d.jsxs)(`p`,{children:[`Content for “`,a[n],`”.`]})})]})}},S={args:{loading:!0,primaryLabel:`Saving…`}},C={args:{error:`That name is already used by another project in this workspace.`}},w={render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-inline-sm)`},children:[`xs`,`sm`,`md`,`lg`,`full`].map(e=>(0,d.jsx)(l,{size:e,trigger:`Open ${e}`,title:`Size ${e}`,variant:`passive`,children:(0,d.jsx)(`p`,{children:`Modal content.`})},e))})},T={args:{overlay:`blur`,variant:`passive`,children:(0,d.jsx)(`p`,{children:`Softer separation for less severe interruptions.`})}},E=[`Transactional`,`Danger`,`Passive`,`Acknowledgment`,`Progress`,`Loading`,`WithError`,`Sizes`,`BlurredOverlay`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    primaryLabel: 'Rename'
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Open modal'
    });
    await userEvent.click(trigger);
    const dialog = await within(canvasElement.ownerDocument.body).findByRole('dialog', {
      name: 'Rename project'
    });
    // Focus moves into the dialog; Escape closes it and returns focus to the trigger.
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).not.toBeVisible());
    await expect(trigger).toHaveFocus();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Delete “Website redesign”?',
    label: 'Project',
    primaryLabel: 'Delete project',
    children: <p>This permanently deletes the project, its 24 files and all comments. This can’t be undone.</p>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'passive',
    title: 'What’s new in 4.2',
    children: <p>Dark mode for every component, a faster token export, and keyboard shortcuts for the canvas.</p>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'acknowledgment',
    size: 'xs',
    title: 'Session expired',
    dismissible: false,
    primaryLabel: 'Sign in again',
    children: <p>For your security you’ve been signed out after 30 minutes of inactivity.</p>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const steps = ['Choose a template', 'Name your project', 'Invite teammates'];
    return <>
        <Button onClick={() => (setStep(0), setOpen(true))}>New project</Button>
        <Modal open={open} onClose={() => setOpen(false)} variant="progress" size="md" title={steps[step]} step={step} stepCount={steps.length} onBack={() => setStep(s => s - 1)} onNext={() => setStep(s => s + 1)} primaryLabel="Create project" onPrimary={() => setOpen(false)}>
          <p>Content for “{steps[step]}”.</p>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    primaryLabel: 'Saving…'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'That name is already used by another project in this workspace.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-inline-sm)'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'full'] as const).map(s => <Demo key={s} size={s} trigger={\`Open \${s}\`} title={\`Size \${s}\`} variant="passive">
          <p>Modal content.</p>
        </Demo>)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    overlay: 'blur',
    variant: 'passive',
    children: <p>Softer separation for less severe interruptions.</p>
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{b as Acknowledgment,T as BlurredOverlay,v as Danger,S as Loading,y as Passive,x as Progress,w as Sizes,_ as Transactional,C as WithError,E as __namedExportsOrder,g as default};