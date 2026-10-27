import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Tabs-by0blJ8q.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o=[{value:`overview`,label:`Overview`,content:(0,i.jsx)(`p`,{children:`Project summary, owners and recent activity.`})},{value:`tasks`,label:`Tasks`,icon:`form/check`,content:(0,i.jsx)(`p`,{children:`12 open tasks, 3 due this week.`})},{value:`files`,label:`Files`,content:(0,i.jsx)(`p`,{children:`24 files · 1.2 GB`})},{value:`billing`,label:`Billing`,disabled:!0,content:(0,i.jsx)(`p`,{children:`Billing`})}],s=Array.from({length:14},(e,t)=>({value:`t${t}`,label:`Section ${t+1}`,content:(0,i.jsxs)(`p`,{children:[`Content for section `,t+1]})})),c={title:`Components/Tabs`,component:r,tags:[`autodocs`],args:{items:o,variant:`line`,activation:`automatic`,"aria-label":`Project`},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:640},children:(0,i.jsx)(e,{})})]},l={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`tab`,{name:`Overview`})),await t.keyboard(`{ArrowRight}`);let n=e.getByRole(`tab`,{name:`Tasks`});await a(n).toHaveAttribute(`aria-selected`,`true`),await a(e.getByRole(`tabpanel`)).toHaveTextContent(`12 open tasks`),await t.keyboard(`{End}`),await a(e.getByRole(`tab`,{name:`Files`})).toHaveFocus()}},u={args:{variant:`contained`}},d={args:{variant:`contained`,equalWidth:!0,items:[{value:`monthly`,label:`Monthly`,secondaryLabel:`$12 / seat`,content:(0,i.jsx)(`p`,{children:`Billed every month.`})},{value:`annual`,label:`Annual`,secondaryLabel:`$10 / seat`,content:(0,i.jsx)(`p`,{children:`Billed once a year — save 17%.`})}]}},f={args:{variant:`vertical`}},p={args:{activation:`manual`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`tab`,{name:`Overview`})),await t.keyboard(`{ArrowRight}`),await a(e.getByRole(`tab`,{name:`Overview`})).toHaveAttribute(`aria-selected`,`true`),await t.keyboard(`{Enter}`),await a(e.getByRole(`tab`,{name:`Tasks`})).toHaveAttribute(`aria-selected`,`true`)}},m={args:{items:s}},h=[`Line`,`Contained`,`ContainedEqualWidth`,`Vertical`,`ManualActivation`,`Overflow`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Overview'
    }));
    await userEvent.keyboard('{ArrowRight}');
    const tasks = canvas.getByRole('tab', {
      name: 'Tasks'
    });
    await expect(tasks).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('12 open tasks');
    // Disabled tabs are skipped; End wraps to the last enabled tab.
    await userEvent.keyboard('{End}');
    await expect(canvas.getByRole('tab', {
      name: 'Files'
    })).toHaveFocus();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    equalWidth: true,
    items: [{
      value: 'monthly',
      label: 'Monthly',
      secondaryLabel: '$12 / seat',
      content: <p>Billed every month.</p>
    }, {
      value: 'annual',
      label: 'Annual',
      secondaryLabel: '$10 / seat',
      content: <p>Billed once a year — save 17%.</p>
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'vertical'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activation: 'manual'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Overview'
    }));
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('tab', {
      name: 'Overview'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('tab', {
      name: 'Tasks'
    })).toHaveAttribute('aria-selected', 'true');
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: MANY
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{u as Contained,d as ContainedEqualWidth,l as Line,p as ManualActivation,m as Overflow,f as Vertical,h as __namedExportsOrder,c as default};