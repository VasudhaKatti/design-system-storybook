import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{c as r,i,s as a,u as o}from"./helpers-CWmtU-9p.js";import{n as s,t as c}from"./Select-CBqDM9dQ.js";var l=t({Clearable:()=>x,Default:()=>g,Grouped:()=>b,Keyboard:()=>C,MenuStates:()=>S,Searchable:()=>y,Sizes:()=>_,TriggerStates:()=>v,__namedExportsOrder:()=>w,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),s(),u=n(),{expect:d,fn:f,screen:p}=__STORYBOOK_MODULE_TEST__,m=[{value:`bubble-tea`,label:`Bubble tea`},{value:`iced-coffee`,label:`Iced coffee`},{value:`green-tea`,label:`Green tea`},{value:`hot-chocolate`,label:`Hot chocolate (sold out)`,disabled:!0}],h={title:`Components/Dropdown`,component:c,args:{label:`Select an option`,hideLabel:!0,options:m,placeholder:`Select an option`,size:`sm`,emptyText:`No results found`,disabled:!1,readOnly:!1,clearable:!1,searchable:!1,loading:!1,onValueChange:f()},argTypes:{label:{description:`Accessible name (Figma triggers show no visible label)`},hideLabel:{description:`Figma: the trigger has no visible label`},options:{description:`Figma: DropdownMenu options (List item instances)`,control:!1},placeholder:{description:`Figma: Value and placeholder`},size:{description:`Figma: Size — Small 32 · Medium 40 · Large 48`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},clearable:{description:`Figma: DropdownTrigger › Clearable`},searchable:{description:`Figma: DropdownMenu › Show Search`},loading:{description:`Figma: DropdownMenu › State=Loading`},emptyText:{description:`Figma: DropdownMenu › State=Empty — "No results found"`},error:{description:`Figma: DropdownTrigger › State=Error`},disabled:{description:`Figma: DropdownTrigger › State=Disabled`},readOnly:{description:`Figma: DropdownTrigger › State=Read-only (no chevron)`},helperText:a,required:a,className:a},decorators:[e=>(0,u.jsx)(`div`,{style:{width:320,minHeight:240},children:(0,u.jsx)(e,{})})]},g={parameters:{docs:{description:{story:`Dropdown: trigger and menu together. Expanded — the trigger takes the focus border and the chevron rotates 180°.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`combobox`);await n.click(r),await d(r).toHaveAttribute(`aria-expanded`,`true`),await n.click(await p.findByRole(`option`,{name:`Iced coffee`})),await d(e.onValueChange).toHaveBeenCalledWith(`iced-coffee`),await d(r).toHaveTextContent(`Iced coffee`)}},_={parameters:{docs:{description:{story:`The trigger is 320px wide at every size; the menu opens below it at the same width.`}}},render:e=>(0,u.jsxs)(`div`,{style:o,children:[(0,u.jsx)(i,{title:`Small · 32px`,children:(0,u.jsx)(c,{...e,size:`sm`})}),(0,u.jsx)(i,{title:`Medium · 40px`,children:(0,u.jsx)(c,{...e,size:`md`})}),(0,u.jsx)(i,{title:`Large · 48px`,children:(0,u.jsx)(c,{...e,size:`lg`})})]})},v={name:`Trigger states`,parameters:{docs:{description:{story:`Trigger: Default, Disabled and Read-only (no chevron).`}}},render:e=>(0,u.jsxs)(`div`,{style:o,children:[(0,u.jsx)(i,{title:`Default`,children:(0,u.jsx)(c,{...e})}),(0,u.jsx)(i,{title:`Disabled`,children:(0,u.jsx)(c,{...e,disabled:!0})}),(0,u.jsx)(i,{title:`Read-only`,children:(0,u.jsx)(c,{...e,readOnly:!0,defaultValue:`green-tea`})})]})},y={args:{searchable:!0,label:`Select a fruit`,placeholder:`Select a fruit`},parameters:{docs:{description:{story:`Pattern: a search row at the top of the menu (Show Search).`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await t.type(await p.findByRole(`textbox`,{name:/Search/}),`tea`),await d(p.getAllByRole(`option`)).toHaveLength(2)}},b={args:{label:`Select a city`,placeholder:`Select a city`,options:m.map(e=>({...e,group:`Popular cities`}))},parameters:{docs:{description:{story:`Pattern: options under a group label (Grouped).`}}}},x={args:{clearable:!0,options:[{value:`vanilla`,label:`Vanilla`},...m],defaultValue:`vanilla`},parameters:{docs:{description:{story:`Pattern: a clear icon in the trigger (Clearable).`}}},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Clear Select an option`})),await d(e.onValueChange).toHaveBeenCalledWith(null)}},S={name:`Menu states`,parameters:{docs:{description:{story:`Menu: Loading — a loading message; Empty — "No results found".`}}},render:e=>(0,u.jsxs)(`div`,{style:o,children:[(0,u.jsx)(i,{title:`Loading`,children:(0,u.jsx)(c,{...e,loading:!0})}),(0,u.jsx)(i,{title:`Empty`,children:(0,u.jsx)(c,{...e,options:[]})})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getAllByRole(`combobox`)[1]),await d(await p.findByText(`No results found`)).toBeInTheDocument()}},C={parameters:{docs:{description:{story:`The dropdown must be fully operable by keyboard.`}}},play:async({args:e,canvas:t,userEvent:n})=>{await n.tab(),await d(t.getByRole(`combobox`)).toHaveFocus(),await n.keyboard(`{ArrowDown}`),await p.findByRole(`listbox`),await n.keyboard(`{Enter}`),await d(e.onValueChange).toHaveBeenCalled()}},w=[`Default`,`Sizes`,`TriggerStates`,`Searchable`,`Grouped`,`Clearable`,`MenuStates`,`Keyboard`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dropdown: trigger and menu together. Expanded — the trigger takes the focus border and the chevron rotates 180°.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(await screen.findByRole('option', {
      name: 'Iced coffee'
    }));
    await expect(args.onValueChange).toHaveBeenCalledWith('iced-coffee');
    await expect(trigger).toHaveTextContent('Iced coffee');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The trigger is 320px wide at every size; the menu opens below it at the same width.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Small · 32px"><Select {...args} size="sm" /></Labelled>
      <Labelled title="Medium · 40px"><Select {...args} size="md" /></Labelled>
      <Labelled title="Large · 48px"><Select {...args} size="lg" /></Labelled>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Trigger states',
  parameters: {
    docs: {
      description: {
        story: 'Trigger: Default, Disabled and Read-only (no chevron).'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Default"><Select {...args} /></Labelled>
      <Labelled title="Disabled"><Select {...args} disabled /></Labelled>
      <Labelled title="Read-only"><Select {...args} readOnly defaultValue="green-tea" /></Labelled>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    label: 'Select a fruit',
    placeholder: 'Select a fruit'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pattern: a search row at the top of the menu (Show Search).'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('combobox'));
    await userEvent.type(await screen.findByRole('textbox', {
      name: /Search/
    }), 'tea');
    await expect(screen.getAllByRole('option')).toHaveLength(2);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a city',
    placeholder: 'Select a city',
    options: OPTIONS.map(o => ({
      ...o,
      group: 'Popular cities'
    }))
  },
  parameters: {
    docs: {
      description: {
        story: 'Pattern: options under a group label (Grouped).'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: true,
    options: [{
      value: 'vanilla',
      label: 'Vanilla'
    }, ...OPTIONS],
    defaultValue: 'vanilla'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pattern: a clear icon in the trigger (Clearable).'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear Select an option'
    }));
    await expect(args.onValueChange).toHaveBeenCalledWith(null);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Menu states',
  parameters: {
    docs: {
      description: {
        story: 'Menu: Loading — a loading message; Empty — "No results found".'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Loading"><Select {...args} loading /></Labelled>
      <Labelled title="Empty"><Select {...args} options={[]} /></Labelled>
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getAllByRole('combobox')[1]);
    await expect(await screen.findByText('No results found')).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The dropdown must be fully operable by keyboard.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('combobox')).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await screen.findByRole('listbox');
    await userEvent.keyboard('{Enter}');
    await expect(args.onValueChange).toHaveBeenCalled();
  }
}`,...C.parameters?.docs?.source}}}})))()}export{S as a,_ as c,C as i,v as l,g as n,y as o,b as r,l as s,x as t,T as u};