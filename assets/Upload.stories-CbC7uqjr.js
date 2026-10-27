import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Upload-D0Nh3AoA.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i=t(),{expect:a,waitFor:o}=__STORYBOOK_MODULE_TEST__,s=(e,t)=>new Promise((n,r)=>{let i=0,a=setInterval(()=>{i+=25,t(Math.min(i,100)),i>=100&&(clearInterval(a),e.name.includes(`fail`)?r(Error(`Server error 500 — try again`)):n())},150)}),c=[{id:`a`,name:`brand-guidelines.pdf`,size:24e5,status:`done`},{id:`b`,name:`tokens-export.json`,size:48e3,status:`uploading`,percent:60},{id:`c`,name:`hero-video.mov`,size:12e7,status:`error`,error:`File too large — the limit is 50 MB`}],l={title:`Components/Upload`,component:r,tags:[`autodocs`],args:{label:`Upload files`,hint:`Supports PDF, PNG, JPG up to 5 MB`,accept:`.pdf,.png,.jpg,.jpeg,image/*`,maxSize:5242880,onUpload:s,listType:`text`},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:480},children:(0,i.jsx)(e,{})})]},u={play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=t.querySelector(`input[type="file"]`),i=new File([new Uint8Array(6291456)],`banner.png`,{type:`image/png`});await n.upload(r,[new File([`%PDF`],`report.pdf`,{type:`application/pdf`}),i]),await a(e.getByText(/banner\.png: larger than 5\.0 MB/)).toBeVisible(),await o(()=>a(e.getByRole(`img`,{name:`Uploaded`})).toBeVisible(),{timeout:3e3})}},d={args:{defaultFiles:c}},f={args:{trigger:`button`,label:`Attach file`,defaultFiles:c.slice(0,1)}},p={args:{listType:`picture`,defaultFiles:c}},m={args:{listType:`picture-card`,label:`Add photo`,maxCount:4,accept:`image/*`,hint:`Up to 4 images`}},h={args:{disabled:!0}},g=[`DropZone`,`States`,`ButtonTrigger`,`Picture`,`PictureCard`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')!;
    const big = new File([new Uint8Array(6 * 1024 * 1024)], 'banner.png', {
      type: 'image/png'
    });
    await userEvent.upload(input, [new File(['%PDF'], 'report.pdf', {
      type: 'application/pdf'
    }), big]);
    // The oversized file is rejected before it's queued.
    await expect(canvas.getByText(/banner\\.png: larger than 5\\.0 MB/)).toBeVisible();
    await waitFor(() => expect(canvas.getByRole('img', {
      name: 'Uploaded'
    })).toBeVisible(), {
      timeout: 3000
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFiles: SAMPLE
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'button',
    label: 'Attach file',
    defaultFiles: SAMPLE.slice(0, 1)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    listType: 'picture',
    defaultFiles: SAMPLE
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    listType: 'picture-card',
    label: 'Add photo',
    maxCount: 4,
    accept: 'image/*',
    hint: 'Up to 4 images'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as ButtonTrigger,h as Disabled,u as DropZone,p as Picture,m as PictureCard,d as States,g as __namedExportsOrder,l as default};