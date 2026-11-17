import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{a as r,c as i,i as a,l as o,u as s}from"./helpers-CWmtU-9p.js";import{n as c,r as l,t as u}from"./Checkbox-W7ccwl5D.js";var d=t({ControlTypesAndStates:()=>b,Default:()=>v,FieldStates:()=>S,Group:()=>C,GroupStates:()=>w,Keyboard:()=>T,SelectionTypes:()=>y,Sizes:()=>x,__namedExportsOrder:()=>E,default:()=>_}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{i(),l(),f=n(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h=[`Unselected`,`Selected`,`Indeterminate`,`Error-Unselected`,`Error-Selected`,`Error-Indeterminate`],g=e=>({defaultChecked:e.endsWith(`Selected`)&&!e.endsWith(`Unselected`),indeterminate:e.endsWith(`Indeterminate`),"aria-invalid":e.startsWith(`Error`)||void 0}),_={title:`Components/Checkbox`,component:u,args:{label:`Checkbox label`,size:`md`,disabled:!1,readOnly:!1,indeterminate:!1,onChange:m()},argTypes:{label:{description:`Figma: CheckboxField › Value`},description:{description:`Figma: CheckboxField › Has description`},helperText:{description:`Figma: CheckboxField › Has helper`},size:{description:`Figma: CheckboxControl › Size — 16 · 20 · 24px`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},indeterminate:{description:`Figma: Type=Indeterminate`},error:{description:`Figma: CheckboxField State=Invalid`},warning:{description:`Figma: CheckboxField State=Warning`},readOnly:{description:`Figma: CheckboxField State=Read-Only`},disabled:{description:`Figma: State=Disabled`},loading:{description:`Figma: Behaviors › States — Skeleton`}}},v={play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`checkbox`,{name:`Checkbox label`});await n.click(t.getByText(`Checkbox label`)),await p(r).toBeChecked(),await p(e.onChange).toHaveBeenCalledOnce()}},y={name:`Selection types`,parameters:{docs:{description:{story:`Unselected — not chosen. Selected — chosen, shows a check. Indeterminate — mixed, shows a dash; exposed as aria-checked="mixed".`}}},render:e=>(0,f.jsxs)(`div`,{style:o,children:[(0,f.jsx)(u,{...e,label:`Unselected`}),(0,f.jsx)(u,{...e,label:`Selected`,defaultChecked:!0}),(0,f.jsx)(u,{...e,label:`Indeterminate`,indeterminate:!0})]}),play:async({canvas:e})=>{await p(e.getByRole(`checkbox`,{name:`Indeterminate`})).toBePartiallyChecked()}},b={name:`Control types & states`,parameters:{docs:{description:{story:`CheckboxControl: Type × State at Size=Md.`}}},render:e=>(0,f.jsx)(r,{label:`Checkbox type by state grid`,rows:h,cols:[`Enabled`,`Disabled`],render:(t,n)=>(0,f.jsx)(u,{...e,label:void 0,"aria-label":`${t}, ${n}`,...g(t),disabled:n===`Disabled`})})},x={parameters:{docs:{description:{story:`Sizes apply to CheckboxControl.`}}},render:e=>(0,f.jsxs)(`div`,{style:o,children:[(0,f.jsx)(a,{title:`Small`,note:`16px`,children:(0,f.jsx)(u,{...e,size:`sm`,label:`Small`,defaultChecked:!0})}),(0,f.jsx)(a,{title:`Medium`,note:`20px`,children:(0,f.jsx)(u,{...e,size:`md`,label:`Medium`,defaultChecked:!0})}),(0,f.jsx)(a,{title:`Large`,note:`24px`,children:(0,f.jsx)(u,{...e,size:`lg`,label:`Large`,defaultChecked:!0})})]})},S={name:`Field states`,parameters:{docs:{description:{story:`CheckboxField states. Invalid switches the control to its Error type; error and warning messages show text with a status icon.`}}},render:e=>(0,f.jsxs)(`div`,{style:s,children:[(0,f.jsx)(u,{...e,label:`Enabled`,description:`Description text`,helperText:`Helper text`}),(0,f.jsx)(u,{...e,label:`Invalid`,error:`Error message goes here`}),(0,f.jsx)(u,{...e,label:`Warning`,warning:`Warning message goes here`}),(0,f.jsx)(u,{...e,label:`Read-only`,readOnly:!0,defaultChecked:!0}),(0,f.jsx)(u,{...e,label:`Disabled`,disabled:!0}),(0,f.jsx)(u,{...e,label:`Skeleton`,loading:!0})]})},C={parameters:{docs:{description:{story:`CheckboxGroup: a group label with CheckboxFields, vertical (default) or horizontal.`}}},render:e=>(0,f.jsx)(`div`,{style:s,children:[`vertical`,`horizontal`].map(t=>(0,f.jsxs)(c,{legend:`Group label`,orientation:t,children:[(0,f.jsx)(u,{...e,label:`Option 1`,defaultChecked:!0}),(0,f.jsx)(u,{...e,label:`Option 2`}),(0,f.jsx)(u,{...e,label:`Option 3`})]},t))}),play:async({canvas:e})=>{await p(e.getAllByRole(`group`)).toHaveLength(2)}},w={name:`Group states`,parameters:{docs:{description:{story:`CheckboxGroup states: Enabled, Invalid, Warning, Read-Only.`}}},render:e=>(0,f.jsxs)(`div`,{style:s,children:[(0,f.jsx)(a,{title:`Invalid`,children:(0,f.jsxs)(c,{legend:`Group label`,error:`Please select at least one option`,children:[(0,f.jsx)(u,{...e,label:`Option 1`}),(0,f.jsx)(u,{...e,label:`Option 2`})]})}),(0,f.jsx)(a,{title:`Warning`,children:(0,f.jsxs)(c,{legend:`Group label`,warning:`Some options may not apply`,children:[(0,f.jsx)(u,{...e,label:`Option 1`,defaultChecked:!0}),(0,f.jsx)(u,{...e,label:`Option 2`})]})}),(0,f.jsx)(a,{title:`Read-only`,children:(0,f.jsxs)(c,{legend:`Group label`,children:[(0,f.jsx)(u,{...e,label:`Option 1`,defaultChecked:!0,readOnly:!0}),(0,f.jsx)(u,{...e,label:`Option 2`,readOnly:!0})]})})]})},T={parameters:{docs:{description:{story:`Tab moves focus to the next checkbox; disabled checkboxes don’t receive keyboard focus. Space toggles.`}}},render:e=>(0,f.jsxs)(`div`,{style:s,children:[(0,f.jsx)(u,{...e,label:`Option 1`}),(0,f.jsx)(u,{...e,label:`Option 2`,disabled:!0}),(0,f.jsx)(u,{...e,label:`Option 3`})]}),play:async({canvas:e,userEvent:t})=>{await t.tab(),await p(e.getByRole(`checkbox`,{name:`Option 1`})).toHaveFocus(),await t.keyboard(` `),await p(e.getByRole(`checkbox`,{name:`Option 1`})).toBeChecked(),await t.tab(),await p(e.getByRole(`checkbox`,{name:`Option 3`})).toHaveFocus()}},E=[`Default`,`SelectionTypes`,`ControlTypesAndStates`,`Sizes`,`FieldStates`,`Group`,`GroupStates`,`Keyboard`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const box = canvas.getByRole('checkbox', {
      name: 'Checkbox label'
    });
    await userEvent.click(canvas.getByText('Checkbox label'));
    await expect(box).toBeChecked();
    await expect(args.onChange).toHaveBeenCalledOnce();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Selection types',
  parameters: {
    docs: {
      description: {
        story: 'Unselected — not chosen. Selected — chosen, shows a check. Indeterminate — mixed, shows a dash; exposed as aria-checked="mixed".'
      }
    }
  },
  render: args => <div style={row}>
      <Checkbox {...args} label="Unselected" />
      <Checkbox {...args} label="Selected" defaultChecked />
      <Checkbox {...args} label="Indeterminate" indeterminate />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox', {
      name: 'Indeterminate'
    })).toBePartiallyChecked();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Control types & states',
  parameters: {
    docs: {
      description: {
        story: 'CheckboxControl: Type × State at Size=Md.'
      }
    }
  },
  render: args => <Matrix label="Checkbox type by state grid" rows={TYPES} cols={['Enabled', 'Disabled'] as const} render={(t, s) => <Checkbox {...args} label={undefined} aria-label={\`\${t}, \${s}\`} {...typeProps(t)} disabled={s === 'Disabled'} />} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Sizes apply to CheckboxControl.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Small" note="16px"><Checkbox {...args} size="sm" label="Small" defaultChecked /></Labelled>
      <Labelled title="Medium" note="20px"><Checkbox {...args} size="md" label="Medium" defaultChecked /></Labelled>
      <Labelled title="Large" note="24px"><Checkbox {...args} size="lg" label="Large" defaultChecked /></Labelled>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Field states',
  parameters: {
    docs: {
      description: {
        story: 'CheckboxField states. Invalid switches the control to its Error type; error and warning messages show text with a status icon.'
      }
    }
  },
  render: args => <div style={stack}>
      <Checkbox {...args} label="Enabled" description="Description text" helperText="Helper text" />
      <Checkbox {...args} label="Invalid" error="Error message goes here" />
      <Checkbox {...args} label="Warning" warning="Warning message goes here" />
      <Checkbox {...args} label="Read-only" readOnly defaultChecked />
      <Checkbox {...args} label="Disabled" disabled />
      <Checkbox {...args} label="Skeleton" loading />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup: a group label with CheckboxFields, vertical (default) or horizontal.'
      }
    }
  },
  render: args => <div style={stack}>
      {(['vertical', 'horizontal'] as const).map(o => <CheckboxGroup key={o} legend="Group label" orientation={o}>
          <Checkbox {...args} label="Option 1" defaultChecked />
          <Checkbox {...args} label="Option 2" />
          <Checkbox {...args} label="Option 3" />
        </CheckboxGroup>)}
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('group')).toHaveLength(2);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Group states',
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup states: Enabled, Invalid, Warning, Read-Only.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Invalid"><CheckboxGroup legend="Group label" error="Please select at least one option">
        <Checkbox {...args} label="Option 1" />
        <Checkbox {...args} label="Option 2" />
      </CheckboxGroup></Labelled>
      <Labelled title="Warning"><CheckboxGroup legend="Group label" warning="Some options may not apply">
        <Checkbox {...args} label="Option 1" defaultChecked />
        <Checkbox {...args} label="Option 2" />
      </CheckboxGroup></Labelled>
      <Labelled title="Read-only"><CheckboxGroup legend="Group label">
        <Checkbox {...args} label="Option 1" defaultChecked readOnly />
        <Checkbox {...args} label="Option 2" readOnly />
      </CheckboxGroup></Labelled>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tab moves focus to the next checkbox; disabled checkboxes don’t receive keyboard focus. Space toggles.'
      }
    }
  },
  render: args => <div style={stack}>
      <Checkbox {...args} label="Option 1" />
      <Checkbox {...args} label="Option 2" disabled />
      <Checkbox {...args} label="Option 3" />
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('checkbox', {
      name: 'Option 1'
    })).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('checkbox', {
      name: 'Option 1'
    })).toBeChecked();
    await userEvent.tab();
    await expect(canvas.getByRole('checkbox', {
      name: 'Option 3'
    })).toHaveFocus();
  }
}`,...T.parameters?.docs?.source}}}})))()}export{C as a,y as c,S as i,x as l,b as n,w as o,v as r,T as s,d as t,D as u};