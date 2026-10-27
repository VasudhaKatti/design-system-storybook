import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Breadcrumb-Df4uTgAu.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Breadcrumb`,component:n,tags:[`autodocs`],args:{separator:`chevron`,items:[{label:`Home`,href:`#home`,icon:`nav/home`},{label:`Projects`,href:`#projects`},{label:`Design system`,href:`#ds`},{label:`Tokens`}]}},a={play:async({canvas:e})=>{await r(e.getByText(`Tokens`).closest(`[aria-current]`)).toHaveAttribute(`aria-current`,`page`),await r(e.getAllByRole(`link`)).toHaveLength(3)}},o={args:{separator:`slash`}},s={args:{maxItems:4,items:[{label:`Home`,href:`#`},{label:`Org`,href:`#`},{label:`Teams`,href:`#`},{label:`Design`,href:`#`},{label:`Projects`,href:`#`},{label:`Tokens`,href:`#`},{label:`Colour`}]},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Show 4 more levels`})),await r(e.getByRole(`link`,{name:`Teams`})).toBeVisible()}},c={args:{items:[{label:`Home`,href:`#`},{label:`Archived`,disabled:!0},{label:`Report 2024`}]}},l=[`Default`,`Slash`,`Collapsed`,`WithDisabledAncestor`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Tokens').closest('[aria-current]')).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getAllByRole('link')).toHaveLength(3);
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'slash'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 4,
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Org',
      href: '#'
    }, {
      label: 'Teams',
      href: '#'
    }, {
      label: 'Design',
      href: '#'
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'Tokens',
      href: '#'
    }, {
      label: 'Colour'
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show 4 more levels'
    }));
    await expect(canvas.getByRole('link', {
      name: 'Teams'
    })).toBeVisible();
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Archived',
      disabled: true
    }, {
      label: 'Report 2024'
    }]
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Collapsed,a as Default,o as Slash,c as WithDisabledAncestor,l as __namedExportsOrder,i as default};