import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{c as r,i,l as a,s as o,u as s}from"./helpers-CWmtU-9p.js";import{n as c,r as l,t as u}from"./Radio-Btq9nXvg.js";var d=t({Default:()=>_,FieldStates:()=>x,GroupStates:()=>b,Horizontal:()=>v,Keyboard:()=>S,Position:()=>y,__namedExportsOrder:()=>C,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),l(),f=n(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h=(e={})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u,{value:`standard`,label:`Standard (5-7 days)`,...e}),(0,f.jsx)(u,{value:`express`,label:`Express (2-3 days)`,...e}),(0,f.jsx)(u,{value:`overnight`,label:`Overnight`,...e})]}),g={title:`Components/Radio`,component:c,args:{legend:`Delivery speed`,orientation:`vertical`,disabled:!1,readOnly:!1,onValueChange:m(),children:h()},argTypes:{legend:{description:`Figma: RadioGroup › group label (required)`},orientation:{description:`Figma: RadioGroup › Horizontal`,control:`inline-radio`,options:[`vertical`,`horizontal`]},readOnly:{description:`Figma: State=Read-Only — shows a prior choice`},error:{description:`Figma: State=Invalid`},warning:{description:`Figma: State=Warning`},disabled:{description:`Figma: State=Disabled`},value:{description:`Figma: Selected`},defaultValue:{description:`Figma: Selected`},children:o,helperText:o,required:o,className:o}},_={parameters:{docs:{description:{story:`Selecting a radio clears the other radios in its group.`}}},play:async({args:e,canvas:t,userEvent:n})=>{await p(t.getByRole(`radiogroup`,{name:`Delivery speed`})).toBeInTheDocument(),await n.click(t.getByText(`Express (2-3 days)`)),await n.click(t.getByText(`Overnight`)),await p(t.getByRole(`radio`,{name:`Overnight`})).toBeChecked(),await p(t.getByRole(`radio`,{name:`Express (2-3 days)`})).not.toBeChecked(),await p(e.onValueChange).toHaveBeenLastCalledWith(`overnight`)}},v={args:{orientation:`horizontal`},parameters:{docs:{description:{story:`Horizontal group: fields sit in one row.`}}}},y={parameters:{docs:{description:{story:`RadioField › Position: Left (control before the value) or Right (value before the control).`}}},render:e=>(0,f.jsxs)(`div`,{style:a,children:[(0,f.jsx)(i,{title:`Position · Left`,note:`Control before the value.`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,children:(0,f.jsx)(u,{value:`a`,label:`Radio label`})})}),(0,f.jsx)(i,{title:`Position · Right`,note:`Value before the control.`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,children:(0,f.jsx)(u,{value:`a`,label:`Radio label`,labelPosition:`left`})})})]})},b={name:`Group states`,parameters:{docs:{description:{story:`RadioGroup: Enabled, Read-Only, Invalid, Warning. Read-only only ever shows an option that’s already selected — it displays a prior choice.`}}},render:e=>(0,f.jsxs)(`div`,{style:s,children:[(0,f.jsx)(i,{title:`Read-only`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,readOnly:!0,defaultValue:`express`,children:h()})}),(0,f.jsx)(i,{title:`Invalid`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,error:`Please select an option`,children:h()})}),(0,f.jsx)(i,{title:`Warning`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,warning:`This selection may need review`,defaultValue:`overnight`,children:h()})})]})},x={name:`Field states`,parameters:{docs:{description:{story:`RadioField: Disabled and Skeleton.`}}},render:e=>(0,f.jsxs)(`div`,{style:s,children:[(0,f.jsx)(i,{title:`Disabled`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,disabled:!0,defaultValue:`standard`,children:h()})}),(0,f.jsx)(i,{title:`Skeleton`,children:(0,f.jsx)(c,{...e,legend:`Delivery speed`,children:h({loading:!0})})})]})},S={args:{defaultValue:`standard`},parameters:{docs:{description:{story:`Arrow keys move between options in the group.`}}},play:async({canvas:e,userEvent:t})=>{await t.tab(),await p(e.getByRole(`radio`,{name:`Standard (5-7 days)`})).toHaveFocus(),await t.keyboard(`{ArrowDown}`),await p(e.getByRole(`radio`,{name:`Express (2-3 days)`})).toBeChecked()}},C=[`Default`,`Horizontal`,`Position`,`GroupStates`,`FieldStates`,`Keyboard`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Selecting a radio clears the other radios in its group.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('radiogroup', {
      name: 'Delivery speed'
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByText('Express (2-3 days)'));
    await userEvent.click(canvas.getByText('Overnight'));
    await expect(canvas.getByRole('radio', {
      name: 'Overnight'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Express (2-3 days)'
    })).not.toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('overnight');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal group: fields sit in one row.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'RadioField › Position: Left (control before the value) or Right (value before the control).'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Position · Left" note="Control before the value.">
        <RadioGroup {...args} legend="Delivery speed">
          <Radio value="a" label="Radio label" />
        </RadioGroup>
      </Labelled>
      <Labelled title="Position · Right" note="Value before the control.">
        <RadioGroup {...args} legend="Delivery speed">
          <Radio value="a" label="Radio label" labelPosition="left" />
        </RadioGroup>
      </Labelled>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Group states',
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup: Enabled, Read-Only, Invalid, Warning. Read-only only ever shows an option that’s already selected — it displays a prior choice.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Read-only"><RadioGroup {...args} legend="Delivery speed" readOnly defaultValue="express">{options()}</RadioGroup></Labelled>
      <Labelled title="Invalid"><RadioGroup {...args} legend="Delivery speed" error="Please select an option">{options()}</RadioGroup></Labelled>
      <Labelled title="Warning"><RadioGroup {...args} legend="Delivery speed" warning="This selection may need review" defaultValue="overnight">{options()}</RadioGroup></Labelled>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Field states',
  parameters: {
    docs: {
      description: {
        story: 'RadioField: Disabled and Skeleton.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Disabled"><RadioGroup {...args} legend="Delivery speed" disabled defaultValue="standard">{options()}</RadioGroup></Labelled>
      <Labelled title="Skeleton"><RadioGroup {...args} legend="Delivery speed">{options({
          loading: true
        })}</RadioGroup></Labelled>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'standard'
  },
  parameters: {
    docs: {
      description: {
        story: 'Arrow keys move between options in the group.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Standard (5-7 days)'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Express (2-3 days)'
    })).toBeChecked();
  }
}`,...S.parameters?.docs?.source}}}})))()}export{S as a,w as c,v as i,x as n,y as o,b as r,d as s,_ as t};