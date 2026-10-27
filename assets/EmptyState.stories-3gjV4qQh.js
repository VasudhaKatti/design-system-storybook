import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Button-Cxz3wpGw.js";import{n as i,t as a}from"./EmptyState-BtSx0V3P.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Empty State`,component:a,tags:[`autodocs`,`needs-spec`],parameters:{docs:{description:{component:"⚠️ **No approved spec yet** — `empty-state-skill.md` is a placeholder. Built from common practice: four kinds (first use, no results, error, cleared), one primary next step, optional secondary action. Review before shipping."}}},args:{kind:`first-use`,title:`No projects yet`,description:`Projects group your files, tokens and components. Create one to get started.`,primaryAction:(0,o.jsx)(r,{leadingIcon:`action/add`,children:`Create project`}),size:`md`},argTypes:{primaryAction:{control:!1},secondaryAction:{control:!1}}},l={play:async({canvas:e})=>{await s(e.getByRole(`heading`,{name:`No projects yet`})).toBeVisible()}},u={args:{kind:`no-results`,title:`No matches for “tokns”`,description:`Check the spelling or try fewer filters.`,primaryAction:(0,o.jsx)(r,{variant:`secondary`,children:`Clear filters`})}},d={args:{kind:`error`,title:`Couldn’t load activity`,description:`The server didn’t respond. Your data is safe.`,primaryAction:(0,o.jsx)(r,{variant:`secondary`,leadingIcon:`action/refresh`,children:`Try again`})}},f={args:{kind:`cleared`,title:`All caught up`,description:`You’ve reviewed every request.`,primaryAction:void 0}},p={args:{size:`sm`,primaryAction:(0,o.jsx)(r,{size:`sm`,children:`Create project`})}},m=[`FirstUse`,`NoResults`,`Error`,`Cleared`,`Small`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      name: 'No projects yet'
    })).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'no-results',
    title: 'No matches for “tokns”',
    description: 'Check the spelling or try fewer filters.',
    primaryAction: <Button variant="secondary">Clear filters</Button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'error',
    title: 'Couldn’t load activity',
    description: 'The server didn’t respond. Your data is safe.',
    primaryAction: <Button variant="secondary" leadingIcon="action/refresh">Try again</Button>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'cleared',
    title: 'All caught up',
    description: 'You’ve reviewed every request.',
    primaryAction: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    primaryAction: <Button size="sm">Create project</Button>
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Cleared,d as Error,l as FirstUse,u as NoResults,p as Small,m as __namedExportsOrder,c as default};