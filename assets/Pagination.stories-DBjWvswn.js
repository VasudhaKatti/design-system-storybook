import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Pagination-Dcu4DuOh.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),{expect:a,fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Pagination`,component:r,tags:[`autodocs`],args:{total:485,defaultPage:6,size:`md`,align:`start`,onPageChange:o()},decorators:[e=>(0,i.jsx)(`div`,{style:{minHeight:220},children:(0,i.jsx)(e,{})})]},c={args:{showSizeChanger:!1},play:async({args:e,canvas:t,userEvent:n})=>{await a(t.getByRole(`button`,{name:`Page 6`})).toHaveAttribute(`aria-current`,`page`),await n.click(t.getByRole(`button`,{name:`Next page`})),await a(e.onPageChange).toHaveBeenCalledWith(7),await a(t.getByRole(`button`,{name:`Page 7`})).toHaveAttribute(`aria-current`,`page`)}},l={args:{showTotal:!0,showSizeChanger:!0,showQuickJumper:!0}},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,i.jsx)(r,{...e,size:`sm`,showSizeChanger:!1,"aria-label":`Small pagination`}),(0,i.jsx)(r,{...e,size:`md`,showSizeChanger:!1,"aria-label":`Medium pagination`}),(0,i.jsx)(r,{...e,size:`lg`,showSizeChanger:!1,"aria-label":`Large pagination`})]})},d={args:{simple:!0}},f={args:{showLessItems:!0,textControls:!0,showSizeChanger:!1}},p={args:{disabled:!0,showSizeChanger:!1}},m={args:{total:42,defaultPage:1}},h=[`Default`,`FullFeatured`,`Sizes`,`Simple`,`LessItemsWithText`,`Disabled`,`FewPages`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showSizeChanger: false
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Page 6'
    })).toHaveAttribute('aria-current', 'page');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next page'
    }));
    await expect(args.onPageChange).toHaveBeenCalledWith(7);
    await expect(canvas.getByRole('button', {
      name: 'Page 7'
    })).toHaveAttribute('aria-current', 'page');
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showTotal: true,
    showSizeChanger: true,
    showQuickJumper: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-md)'
  }}>
      <Pagination {...args} size="sm" showSizeChanger={false} aria-label="Small pagination" />
      <Pagination {...args} size="md" showSizeChanger={false} aria-label="Medium pagination" />
      <Pagination {...args} size="lg" showSizeChanger={false} aria-label="Large pagination" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    simple: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showLessItems: true,
    textControls: true,
    showSizeChanger: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showSizeChanger: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    total: 42,
    defaultPage: 1
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{c as Default,p as Disabled,m as FewPages,l as FullFeatured,f as LessItemsWithText,d as Simple,u as Sizes,h as __namedExportsOrder,s as default};