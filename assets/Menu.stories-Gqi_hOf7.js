import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{n as a,t as o}from"./Badge-r4utTqyD.js";import{n as s,t as c}from"./Menu-Bdy4-6bq.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),a(),r(),s(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=[{key:`home`,label:`Dashboard`,icon:`nav/home`},{key:`inbox`,label:`Inbox`,icon:`feedback/bell`,extra:(0,u.jsx)(o,{type:`numeric`,count:12,status:`info`,variant:`filled`,size:`sm`,"aria-label":`12 unread`})},{type:`submenu`,key:`projects`,label:`Projects`,icon:`layout/grid`,children:[{key:`web`,label:`Website`},{key:`mobile`,label:`Mobile app`},{key:`brand`,label:`Brand refresh`,disabled:!0}]},{type:`submenu`,key:`settings`,label:`Settings`,icon:`action/settings`,children:[{type:`group`,key:`account`,label:`Account`,children:[{key:`profile`,label:`Profile`},{key:`security`,label:`Security`}]},{type:`divider`,key:`d1`},{key:`delete`,label:`Delete account`,danger:!0}]},{type:`divider`,key:`d2`},{key:`archive`,label:`Archived`,icon:`action/download`,disabled:!0}],p={title:`Components/Menu`,component:c,tags:[`autodocs`],args:{items:f,mode:`inline`,"aria-label":`Main`,defaultOpenKeys:[`projects`],accordion:!0},render:e=>{let[t,n]=(0,l.useState)(`web`);return(0,u.jsx)(c,{...e,selectedKey:t,onSelect:n})}},m={play:async({canvas:e,userEvent:t})=>{await d(e.getByRole(`button`,{name:`Website`})).toHaveAttribute(`aria-current`,`page`),await t.click(e.getByRole(`button`,{name:`Settings`})),await d(e.getByRole(`button`,{name:`Projects`})).toHaveAttribute(`aria-expanded`,`false`),await t.click(e.getByRole(`button`,{name:`Profile`})),await d(e.getByRole(`button`,{name:`Profile`})).toHaveAttribute(`aria-current`,`page`)}},h={render:e=>{let[t,n]=(0,l.useState)(!0),[r,a]=(0,l.useState)(`home`);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-sm)`,alignItems:`start`},children:[(0,u.jsx)(i,{size:`sm`,variant:`secondary`,onClick:()=>n(e=>!e),children:t?`Expand`:`Collapse`}),(0,u.jsx)(c,{...e,collapsed:t,selectedKey:r,onSelect:a})]})}},g={args:{mode:`horizontal`,items:f.filter(e=>e.type!==`divider`&&e.key!==`archive`)},decorators:[e=>(0,u.jsx)(`div`,{style:{minHeight:240},children:(0,u.jsx)(e,{})})]},_=[`Inline`,`CollapsedRail`,`Horizontal`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Website'
    })).toHaveAttribute('aria-current', 'page');
    // Accordion: opening Settings closes Projects.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Settings'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Projects'
    })).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Profile'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Profile'
    })).toHaveAttribute('aria-current', 'page');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [collapsed, setCollapsed] = useState(true);
    const [selected, setSelected] = useState('home');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-stack-sm)',
      alignItems: 'start'
    }}>
        <Button size="sm" variant="secondary" onClick={() => setCollapsed(c => !c)}>
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
        <Menu {...args} collapsed={collapsed} selectedKey={selected} onSelect={setSelected} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'horizontal',
    items: ITEMS.filter(i => i.type !== 'divider' && i.key !== 'archive')
  },
  decorators: [Story => <div style={{
    minHeight: 240
  }}><Story /></div>]
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as CollapsedRail,g as Horizontal,m as Inline,_ as __namedExportsOrder,p as default};