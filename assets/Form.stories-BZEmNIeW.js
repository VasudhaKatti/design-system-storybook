import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{a as r,c as i,i as a,u as o}from"./helpers-CWmtU-9p.js";import{n as s,t as c}from"./Button-BRS-F2jz.js";import{n as l,t as u}from"./Alert-C9ngUj0p.js";import{n as d,r as f,t as p}from"./Checkbox-W7ccwl5D.js";import{n as m,t as h}from"./Select-CBqDM9dQ.js";import{n as g,t as _}from"./TextInput-CEYoIKub.js";var v=t({FormStates:()=>O,InputControlStates:()=>E,InputFieldStates:()=>D,MultiColumn:()=>k,__namedExportsOrder:()=>A,default:()=>T});function y({state:e}){let t=e===`Disabled`;return(0,b.jsxs)(`form`,{style:C,"aria-label":`Personal information, ${e}`,onSubmit:e=>e.preventDefault(),children:[e===`Success`&&(0,b.jsx)(u,{sentiment:`success`,title:`Form submitted`,description:`Thank you, we received your information.`}),e===`Error`&&(0,b.jsx)(u,{sentiment:`danger`,title:`Submission failed`,description:`Please fix the errors below and try again.`}),(0,b.jsx)(`h3`,{className:`text-heading-sm`,style:{margin:0},children:`Personal information`}),(0,b.jsx)(_,{label:`Full name`,required:!0,defaultValue:`Jordan Lee`,disabled:t}),(0,b.jsx)(_,{label:`Email address`,required:!0,placeholder:`Enter your email`,defaultValue:e===`Error`?`jordan@company.com`:void 0,error:e===`Error`?`Enter a valid email address`:void 0,disabled:t}),(0,b.jsx)(h,{label:`Country`,options:S,defaultValue:`us`,disabled:t}),(0,b.jsx)(d,{legend:`Label`,children:(0,b.jsx)(p,{label:`I agree to the terms and conditions`,disabled:t})}),(0,b.jsxs)(`div`,{style:w,children:[(0,b.jsx)(c,{variant:`secondary`,disabled:t||e===`Submitting`,children:`Cancel`}),(0,b.jsx)(c,{type:`submit`,disabled:t||e===`Submitting`,children:e===`Submitting`?`Submitting...`:`Submit`})]})]})}var b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l(),s(),f(),m(),g(),i(),b=n(),{expect:x}=__STORYBOOK_MODULE_TEST__,S=[{value:`us`,label:`United States`}],C={display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`,width:360},w={display:`flex`,gap:`var(--space-inline-md)`,justifyContent:`flex-end`},T={title:`Components/Form`,parameters:{docs:{description:{component:`Three separate component families on the Figma page — InputControl, InputField and a page-level Form wrapper.`}}}},E={name:`InputControl states`,parameters:{docs:{description:{story:`InputControl — the bare field.`}}},render:()=>(0,b.jsx)(r,{label:`InputControl states`,rows:[`Default`,`Filled`,`Disabled`,`Read-only`],cols:[`Field`],colWidth:`260px`,render:e=>(0,b.jsx)(_,{label:`Email address, ${e}`,hideLabel:!0,placeholder:`Enter your email`,defaultValue:e===`Filled`||e===`Read-only`?`jordan@company.com`:void 0,disabled:e===`Disabled`,readOnly:e===`Read-only`})})},D={name:`InputField states`,parameters:{docs:{description:{story:`InputField — adds a label, helper and validation message row: Default, Invalid, Success, Disabled, Read-only.`}}},render:()=>(0,b.jsxs)(`div`,{style:{...o,width:320},children:[(0,b.jsx)(_,{label:`Email address`,placeholder:`Enter your email`,helperText:`We'll never share your email`}),(0,b.jsx)(_,{label:`Email address`,defaultValue:`jordan@company.com`,error:`Enter a valid email address`}),(0,b.jsx)(_,{label:`Email address`,defaultValue:`jordan@company.com`,success:`Email verified`}),(0,b.jsx)(_,{label:`Email address`,placeholder:`Enter your email`,disabled:!0}),(0,b.jsx)(_,{label:`Email address`,placeholder:`Enter your email`,readOnly:!0})]})},O={name:`Form states`,parameters:{docs:{description:{story:`Form — page-level submission states: Default, Submitting, Success, Error, Disabled.`}}},render:()=>(0,b.jsx)(`div`,{style:{...o,gap:`var(--space-stack-xl)`},children:[`Default`,`Submitting`,`Success`,`Error`,`Disabled`].map(e=>(0,b.jsx)(a,{title:e,children:(0,b.jsx)(y,{state:e})},e))}),play:async({canvas:e})=>{await x(e.getByRole(`button`,{name:`Submitting...`})).toBeDisabled()}},k={name:`Multi-column example`,parameters:{docs:{description:{story:`Figma example: field rows grouped in multi-column rows (first / last name, city / state / ZIP) plus a full-width country field.`}}},render:()=>(0,b.jsxs)(`form`,{style:{...C,width:520},"aria-label":`Shipping address`,onSubmit:e=>e.preventDefault(),children:[(0,b.jsx)(`h3`,{className:`text-heading-sm`,style:{margin:0},children:`Shipping address`}),(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--space-inline-md)`},children:[(0,b.jsx)(_,{label:`First name`,required:!0,defaultValue:`Jordan`}),(0,b.jsx)(_,{label:`Last name`,required:!0,defaultValue:`Lee`})]}),(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`2fr 1fr 1fr`,gap:`var(--space-inline-md)`},children:[(0,b.jsx)(_,{label:`City`,required:!0,defaultValue:`San Francisco`}),(0,b.jsx)(_,{label:`State`,required:!0,defaultValue:`CA`}),(0,b.jsx)(_,{label:`ZIP code`,required:!0,defaultValue:`94103`})]}),(0,b.jsx)(h,{label:`Country`,options:S,defaultValue:`us`}),(0,b.jsxs)(`div`,{style:w,children:[(0,b.jsx)(c,{variant:`secondary`,children:`Cancel`}),(0,b.jsx)(c,{type:`submit`,children:`Submit`})]})]})},A=[`InputControlStates`,`InputFieldStates`,`FormStates`,`MultiColumn`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'InputControl states',
  parameters: {
    docs: {
      description: {
        story: 'InputControl — the bare field.'
      }
    }
  },
  render: () => <Matrix label="InputControl states" rows={['Default', 'Filled', 'Disabled', 'Read-only'] as const} cols={['Field'] as const} colWidth="260px" render={s => <TextInput label={\`Email address, \${s}\`} hideLabel placeholder="Enter your email" defaultValue={s === 'Filled' || s === 'Read-only' ? 'jordan@company.com' : undefined} disabled={s === 'Disabled'} readOnly={s === 'Read-only'} />} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'InputField states',
  parameters: {
    docs: {
      description: {
        story: 'InputField — adds a label, helper and validation message row: Default, Invalid, Success, Disabled, Read-only.'
      }
    }
  },
  render: () => <div style={{
    ...stack,
    width: 320
  }}>
      <TextInput label="Email address" placeholder="Enter your email" helperText="We'll never share your email" />
      <TextInput label="Email address" defaultValue="jordan@company.com" error="Enter a valid email address" />
      <TextInput label="Email address" defaultValue="jordan@company.com" success="Email verified" />
      <TextInput label="Email address" placeholder="Enter your email" disabled />
      <TextInput label="Email address" placeholder="Enter your email" readOnly />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Form states',
  parameters: {
    docs: {
      description: {
        story: 'Form — page-level submission states: Default, Submitting, Success, Error, Disabled.'
      }
    }
  },
  render: () => <div style={{
    ...stack,
    gap: 'var(--space-stack-xl)'
  }}>
      {(['Default', 'Submitting', 'Success', 'Error', 'Disabled'] as const).map(s => <Labelled key={s} title={s}>
          <PersonalInformation state={s} />
        </Labelled>)}
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Submitting...'
    })).toBeDisabled();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Multi-column example',
  parameters: {
    docs: {
      description: {
        story: 'Figma example: field rows grouped in multi-column rows (first / last name, city / state / ZIP) plus a full-width country field.'
      }
    }
  },
  render: () => <form style={{
    ...formStyle,
    width: 520
  }} aria-label="Shipping address" onSubmit={e => e.preventDefault()}>
      <h3 className="text-heading-sm" style={{
      margin: 0
    }}>Shipping address</h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-inline-md)'
    }}>
        <TextInput label="First name" required defaultValue="Jordan" />
        <TextInput label="Last name" required defaultValue="Lee" />
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 'var(--space-inline-md)'
    }}>
        <TextInput label="City" required defaultValue="San Francisco" />
        <TextInput label="State" required defaultValue="CA" />
        <TextInput label="ZIP code" required defaultValue="94103" />
      </div>
      <Select label="Country" options={COUNTRY} defaultValue="us" />
      <div style={actions}>
        <Button variant="secondary">Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
}`,...k.parameters?.docs?.source}}}})))()}export{k as a,D as i,v as n,j as o,E as r,O as t};