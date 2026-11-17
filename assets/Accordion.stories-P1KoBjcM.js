import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{c as i,i as a,r as o,t as s,u as c}from"./helpers-CWmtU-9p.js";import{n as l,t as u}from"./cx-CRapKfbA.js";import{n as d,t as f}from"./Icon-C15sqzpV.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{p=`_accordion_mvlob_1`,m=`_bordered_mvlob_7`,h=`_item_mvlob_14`,g=`_borderless_mvlob_18`,_=`_heading_mvlob_22`,v=`_trigger_mvlob_27`,y=`_title_mvlob_59`,b=`_icon_mvlob_63`,x=`_open_mvlob_68`,S=`_disabled_mvlob_72`,C=`_panelWrap_mvlob_82`,w=`_panelInner_mvlob_96`,T=`_panel_mvlob_82`,E=`_complex_mvlob_107`,D={accordion:p,bordered:m,item:h,borderless:g,heading:_,trigger:v,title:y,icon:b,open:x,disabled:S,panelWrap:C,panelInner:w,panel:T,complex:E}})))()}function k(e){let{variant:t=`bordered`,headingLevel:n=3,hasIcon:r=!0,children:i,className:a}=e,o=e.expandMode===`multiple`,s=(0,j.useRef)(null),[c,l]=(0,j.useState)(e.defaultValue??(o?[]:null)),d=e.value===void 0?c:e.value;return(0,M.jsx)(N.Provider,{value:{isOpen:e=>Array.isArray(d)?d.includes(e):d===e,toggle:t=>{let n;if(o){let e=d??[];n=e.includes(t)?e.filter(e=>e!==t):[...e,t]}else{let r=e.collapsible??!0;n=d===t&&r?null:t}e.value===void 0&&l(n),e.onValueChange?.(n)},headingLevel:n,hasIcon:r},children:(0,M.jsx)(`div`,{ref:s,className:u(D.accordion,D[t],a),onKeyDown:e=>{let t=Array.from(s.current?.querySelectorAll(`.${D.trigger}:not(:disabled)`)??[]),n=t.indexOf(document.activeElement);if(n<0)return;let r={ArrowDown:n+1,ArrowUp:n-1,Home:0,End:t.length-1};e.key in r&&(e.preventDefault(),t[(r[e.key]+t.length)%t.length].focus())},children:i})})}function A({value:e,title:t,disabled:n,contentType:r=`text`,children:i}){let a=(0,j.useContext)(N),o=(0,j.useId)(),s=a.isOpen(e),c=`h${a.headingLevel}`;return(0,M.jsxs)(`div`,{className:u(D.item,s&&D.open,n&&D.disabled),children:[(0,M.jsx)(c,{className:D.heading,children:(0,M.jsxs)(`button`,{type:`button`,id:`${o}-trigger`,className:D.trigger,"aria-expanded":s,"aria-controls":`${o}-panel`,disabled:n,onClick:()=>a.toggle(e),children:[(0,M.jsx)(`span`,{className:D.title,children:t}),a.hasIcon&&(0,M.jsx)(f,{name:`nav/chevron-down`,size:`sm`,className:D.icon})]})}),(0,M.jsx)(`div`,{id:`${o}-panel`,role:`region`,"aria-labelledby":`${o}-trigger`,className:D.panelWrap,inert:!s||void 0,children:(0,M.jsx)(`div`,{className:D.panelInner,children:(0,M.jsx)(`div`,{className:u(D.panel,D[r]),children:i})})})]})}var j,M,N;function P(){return(P=e((()=>{j=r(),l(),d(),O(),M=n(),N=(0,j.createContext)(null),k.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'bordered' | 'borderless'`,elements:[{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'borderless'`}]},description:`bordered: outlined items · borderless: separated by spacing only.`},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``},hasIcon:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},A.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`,props:{value:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},contentType:{required:!1,tsType:{name:`union`,raw:`'text' | 'complex'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'complex'`}]},description:`complex = roomier panel padding for nested controls.`,defaultValue:{value:`'text'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}var F=t({Disabled:()=>K,DoDont:()=>J,Keyboard:()=>q,MultipleExpand:()=>W,SingleExpand:()=>U,Styles:()=>G,__namedExportsOrder:()=>Y,default:()=>H}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{i(),P(),I=n(),{expect:L}=__STORYBOOK_MODULE_TEST__,R=`Panel content goes here. This text explains the section in more detail once expanded.`,z=[[`returns`,`What is your return policy?`],[`shipping`,`How long does shipping take?`],[`international`,`Do you ship internationally?`]],B=e=>z.map(([t,n])=>(0,I.jsx)(A,{value:t,title:n,disabled:t===e,children:R},t)),V=({open:e,disabledItem:t,...n})=>n.expandMode===`multiple`?(0,I.jsx)(k,{variant:n.variant,headingLevel:n.headingLevel,expandMode:`multiple`,defaultValue:e,children:B(t)}):(0,I.jsx)(k,{variant:n.variant,headingLevel:n.headingLevel,expandMode:`single`,defaultValue:e[0]??null,children:B(t)}),H={title:`Components/Accordion`,render:V,args:{variant:`bordered`,expandMode:`single`,headingLevel:3,open:[`returns`]},argTypes:{variant:{description:`Figma: Style — Bordered · Borderless`,control:`inline-radio`,options:[`bordered`,`borderless`]},expandMode:{description:`Figma: Overview › Variants — single- vs multiple-expand (behaviour, not a variant)`,control:`inline-radio`,options:[`single`,`multiple`]},headingLevel:{description:`Figma: Content › Title — wrapped in a heading (h2–h4)`,control:`inline-radio`,options:[2,3,4]},open:{description:`Figma: Expanded — panels open on first render`},disabledItem:{description:`Figma: State=Disabled`,control:`select`,options:[void 0,...z.map(([e])=>e)]}},decorators:[e=>(0,I.jsx)(`div`,{style:{width:360},children:(0,I.jsx)(e,{})})]},U={name:`Single-expand`,parameters:{docs:{description:{story:`Only one panel open at a time; opening one closes the others.`}}},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`What is your return policy?`}),r=e.getByRole(`button`,{name:`How long does shipping take?`});await L(n).toHaveAttribute(`aria-expanded`,`true`),await t.click(r),await L(r).toHaveAttribute(`aria-expanded`,`true`),await L(n).toHaveAttribute(`aria-expanded`,`false`)}},W={name:`Multiple-expand`,args:{variant:`borderless`,expandMode:`multiple`,open:[`returns`,`shipping`]},parameters:{docs:{description:{story:`Any number of panels open independently. Figma example: Multiple-expand (Borderless).`}}}},G={args:{open:[]},parameters:{docs:{description:{story:`Style: Bordered — items separated by full dividers. Borderless — separated only by spacing; no outline.`}}},render:e=>(0,I.jsxs)(`div`,{style:c,children:[(0,I.jsx)(a,{title:`Bordered`,note:`Items separated by full dividers.`,children:V({...e,variant:`bordered`})}),(0,I.jsx)(a,{title:`Borderless`,note:`Items separated only by spacing; no outline.`,children:V({...e,variant:`borderless`})})]})},K={args:{open:[],disabledItem:`shipping`},parameters:{docs:{description:{story:`Disabled — dimmed, can’t change state, skipped in tab order.`}}}},q={args:{open:[]},parameters:{docs:{description:{story:`Enter / Space toggle; Tab, ↓ ↑, Home and End move between triggers.`}}},play:async({canvas:e,userEvent:t})=>{let[n,r,i]=z.map(([,t])=>e.getByRole(`button`,{name:t}));await t.tab(),await L(n).toHaveFocus(),await t.keyboard(`{Enter}`),await L(n).toHaveAttribute(`aria-expanded`,`true`),await t.keyboard(`{ArrowDown}`),await L(r).toHaveFocus(),await t.keyboard(`{End}`),await L(i).toHaveFocus(),await t.keyboard(`{Home}`),await L(n).toHaveFocus()}},J={name:`Do & don’t`,tags:[`!dev`],decorators:[e=>(0,I.jsx)(`div`,{style:{width:760},children:(0,I.jsx)(e,{})})],render:e=>(0,I.jsxs)(s,{children:[(0,I.jsx)(o,{kind:`Do`,note:`In single-expand mode, keep one panel open at a time.`,children:V(e)}),(0,I.jsx)(o,{kind:`Don’t`,note:`Don't allow two panels expanded at once in single-expand mode.`})]})},Y=[`SingleExpand`,`MultipleExpand`,`Styles`,`Disabled`,`Keyboard`,`DoDont`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Single-expand',
  parameters: {
    docs: {
      description: {
        story: 'Only one panel open at a time; opening one closes the others.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const first = canvas.getByRole('button', {
      name: 'What is your return policy?'
    });
    const second = canvas.getByRole('button', {
      name: 'How long does shipping take?'
    });
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(second);
    await expect(second).toHaveAttribute('aria-expanded', 'true');
    await expect(first).toHaveAttribute('aria-expanded', 'false');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Multiple-expand',
  args: {
    variant: 'borderless',
    expandMode: 'multiple',
    open: ['returns', 'shipping']
  },
  parameters: {
    docs: {
      description: {
        story: 'Any number of panels open independently. Figma example: Multiple-expand (Borderless).'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    open: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Style: Bordered — items separated by full dividers. Borderless — separated only by spacing; no outline.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Bordered" note="Items separated by full dividers.">
        {render({
        ...args,
        variant: 'bordered'
      })}
      </Labelled>
      <Labelled title="Borderless" note="Items separated only by spacing; no outline.">
        {render({
        ...args,
        variant: 'borderless'
      })}
      </Labelled>
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    open: [],
    disabledItem: 'shipping'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled — dimmed, can’t change state, skipped in tab order.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    open: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Enter / Space toggle; Tab, ↓ ↑, Home and End move between triggers.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const [a, b, c] = ITEMS.map(([, t]) => canvas.getByRole('button', {
      name: t
    }));
    await userEvent.tab();
    await expect(a).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(a).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{ArrowDown}');
    await expect(b).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(c).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(a).toHaveFocus();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  decorators: [Story => <div style={{
    width: 760
  }}><Story /></div>],
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="In single-expand mode, keep one panel open at a time.">
        {render(args)}
      </Guideline>
      <Guideline kind="Don’t" note="Don't allow two panels expanded at once in single-expand mode." />
    </DoDontGrid>
}`,...J.parameters?.docs?.source}}}})))()}export{W as a,X as c,q as i,K as n,U as o,J as r,G as s,F as t};