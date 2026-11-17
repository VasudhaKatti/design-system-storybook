import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{c as i,i as a,r as o,s,t as c,u as l}from"./helpers-CWmtU-9p.js";import{n as u,t as d}from"./cx-CRapKfbA.js";import{n as f,t as p}from"./Icon-C15sqzpV.js";var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{m=`_list_13ix7_1`,h=`_item_13ix7_12`,g=`_separator_13ix7_18`,_=`_link_13ix7_25`,v=`_disabled_13ix7_39`,y=`_collapse_13ix7_44`,b=`_current_13ix7_54`,x={list:m,item:h,separator:g,link:_,disabled:v,collapse:y,current:b}})))()}function C({items:e,separator:t=`chevron`,maxItems:n=5,itemsBeforeCollapse:r=1,itemsAfterCollapse:i=2,renderLink:a,className:o}){let[s,c]=(0,w.useState)(!1),l=!s&&e.length>n?[...e.slice(0,r),`collapse`,...e.slice(e.length-i)]:e,u=e.length-r-i,f=(0,T.jsx)(`span`,{className:x.separator,"aria-hidden":!0,children:t===`slash`?`/`:(0,T.jsx)(p,{name:`nav/chevron-right`,size:`xs`})});return(0,T.jsx)(`nav`,{"aria-label":`Breadcrumb`,className:o,children:(0,T.jsx)(`ol`,{className:x.list,children:l.map((e,t)=>{let n=t===l.length-1;if(e===`collapse`)return(0,T.jsxs)(`li`,{className:x.item,children:[(0,T.jsx)(`button`,{type:`button`,className:d(x.link,x.collapse),"aria-label":`Show ${u} more levels`,onClick:()=>c(!0),children:`…`}),f]},`collapse`);let r=(0,T.jsxs)(T.Fragment,{children:[e.icon&&(0,T.jsx)(p,{name:e.icon,size:`sm`}),(0,T.jsx)(`span`,{children:e.label})]});return(0,T.jsxs)(`li`,{className:x.item,children:[n?(0,T.jsx)(`span`,{className:x.current,"aria-current":`page`,children:r}):e.disabled||!e.href?(0,T.jsx)(`span`,{className:d(x.link,x.disabled),"aria-disabled":`true`,children:r}):a?a(e,r):(0,T.jsx)(`a`,{className:x.link,href:e.href,children:r}),!n&&f]},`${e.label}-${t}`)})})})}var w,T;function E(){return(E=e((()=>{w=r(),u(),f(),S(),T=n(),C.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:`Ancestors first; the last item is the current page.`},separator:{required:!1,tsType:{name:`union`,raw:`'slash' | 'chevron'`,elements:[{name:`literal`,value:`'slash'`},{name:`literal`,value:`'chevron'`}]},description:``,defaultValue:{value:`'chevron'`,computed:!1}},maxItems:{required:!1,tsType:{name:`number`},description:`Collapse the middle once there are more items than this.`,defaultValue:{value:`5`,computed:!1}},itemsBeforeCollapse:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},itemsAfterCollapse:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},renderLink:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BreadcrumbItem, children: ReactNode) => ReactNode`,signature:{arguments:[{type:{name:`BreadcrumbItem`},name:`item`},{type:{name:`ReactNode`},name:`children`}],return:{name:`ReactNode`}}},description:`Render a custom link element (e.g. a router Link).`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var D=t({Default:()=>N,DisabledLink:()=>R,DoDont:()=>B,IconBased:()=>F,Keyboard:()=>z,Separators:()=>I,SmallScreens:()=>L,Truncated:()=>P,__namedExportsOrder:()=>V,default:()=>M}),O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{i(),E(),O=n(),{expect:k}=__STORYBOOK_MODULE_TEST__,A=[{label:`Home`,href:`#`},{label:`Products`,href:`#`},{label:`Laptops`,href:`#`},{label:`ThinkPad X1`}],j={a11y:{config:{rules:[{id:`landmark-unique`,enabled:!1}]}}},M={title:`Components/Breadcrumb`,component:C,args:{items:A,separator:`chevron`,maxItems:5},argTypes:{items:{description:`Figma: BreadcrumbItem — Link items, then the Current page last`},separator:{description:`Figma: Separator — Chevron · Slash`,control:`inline-radio`,options:[`chevron`,`slash`]},maxItems:{description:`Figma: Content › Overflow — middle items collapse beyond maxItems`},itemsBeforeCollapse:{description:`Figma: Overflow — the root always stays visible`},itemsAfterCollapse:{description:`Figma: Overflow — the current page always stays visible`},renderLink:s,className:s}},N={name:`Standard`,parameters:{docs:{description:{story:`Standard: all levels shown inline.`}}},play:async({canvas:e})=>{await k(e.getByRole(`navigation`,{name:`Breadcrumb`})).toBeInTheDocument(),await k(e.getByText(`ThinkPad X1`).closest(`[aria-current="page"]`)).not.toBeNull()}},P={args:{maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:2},parameters:{docs:{description:{story:`Truncated: middle levels collapse behind a trigger when the trail exceeds maxItems.`}}},play:async({canvas:e,userEvent:t})=>{await k(e.queryByText(`Products`)).toBeNull(),await t.click(e.getByRole(`button`,{name:/more levels/})),await k(e.getByRole(`link`,{name:`Products`})).toBeInTheDocument()}},F={name:`Icon-based`,args:{items:[{label:`Home`,href:`#`,icon:`nav/home`},...A.slice(1,3),A[3]]},parameters:{docs:{description:{story:`Icon-based: items pair an icon with their label (Has icon; leading icon Icon/nav/home/16).`}}}},I={parameters:{...j,docs:{description:{story:`Usage › Alignment: use one separator style for the whole trail.`}}},render:e=>(0,O.jsxs)(`div`,{style:l,children:[(0,O.jsx)(a,{title:`Chevron separator`,children:(0,O.jsx)(C,{...e,separator:`chevron`})}),(0,O.jsx)(a,{title:`Slash separator`,children:(0,O.jsx)(C,{...e,items:A.slice(0,3).map((e,t)=>t===2?{label:e.label}:e),separator:`slash`})})]})},L={name:`Small screens`,args:{maxItems:2,itemsBeforeCollapse:1,itemsAfterCollapse:1},parameters:{docs:{description:{story:`Usage › Placement: on small screens, collapse the trail to the root and the current page.`}}}},R={name:`Disabled link`,args:{items:[A[0],{label:`Products`,disabled:!0},A[2],A[3]]},parameters:{docs:{description:{story:`Behaviors › States: Disabled is rare — an ancestor with no valid target.`}}}},z={args:{maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:2},parameters:{docs:{description:{story:`Keyboard: Tab moves focus left to right; Enter or Space opens the collapse trigger. The current page and separators are skipped.`}}},play:async({canvas:e,userEvent:t})=>{await t.tab(),await k(e.getByRole(`link`,{name:`Home`})).toHaveFocus(),await t.tab(),await k(e.getByRole(`button`,{name:/more levels/})).toHaveFocus(),await t.keyboard(`{Enter}`),await k(e.getByRole(`link`,{name:`Products`})).toBeInTheDocument()}},B={name:`Do & don’t`,tags:[`!dev`],parameters:j,render:e=>(0,O.jsxs)(c,{children:[(0,O.jsx)(o,{kind:`Do`,note:`Show the current page as plain, non-interactive text.`,children:(0,O.jsx)(C,{...e,items:A.slice(0,3).map((e,t)=>t===2?{label:e.label}:e)})}),(0,O.jsx)(o,{kind:`Don’t`,note:`Don't style the current page as a link — it implies it's still clickable.`}),(0,O.jsx)(o,{kind:`Do`,note:`Use one separator style per trail.`,children:(0,O.jsx)(C,{...e,items:A.slice(0,3).map((e,t)=>t===2?{label:e.label}:e)})}),(0,O.jsx)(o,{kind:`Don’t`,note:`Don't mix separator styles within one trail.`}),(0,O.jsx)(o,{kind:`Do`,note:`Collapse the middle of deep trails, keeping the root and current page.`,children:(0,O.jsx)(C,{...e,maxItems:3,items:[`Home`,`Shop`,`Tech`,`Audio`,`Headphones`].map((e,t,n)=>t===n.length-1?{label:e}:{label:e,href:`#`})})}),(0,O.jsx)(o,{kind:`Don’t`,note:`Don't show many deep levels without collapsing the middle.`,children:(0,O.jsx)(C,{...e,maxItems:10,items:[`Home`,`Shop`,`Tech`,`Audio`,`Headphones`].map((e,t,n)=>t===n.length-1?{label:e}:{label:e,href:`#`})})})]})},V=[`Default`,`Truncated`,`IconBased`,`Separators`,`SmallScreens`,`DisabledLink`,`Keyboard`,`DoDont`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Standard',
  parameters: {
    docs: {
      description: {
        story: 'Standard: all levels shown inline.'
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('navigation', {
      name: 'Breadcrumb'
    })).toBeInTheDocument();
    await expect(canvas.getByText('ThinkPad X1').closest('[aria-current="page"]')).not.toBeNull();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Truncated: middle levels collapse behind a trigger when the trail exceeds maxItems.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.queryByText('Products')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: /more levels/
    }));
    await expect(canvas.getByRole('link', {
      name: 'Products'
    })).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Icon-based',
  args: {
    items: [{
      label: 'Home',
      href: '#',
      icon: 'nav/home'
    }, ...TRAIL.slice(1, 3), TRAIL[3]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-based: items pair an icon with their label (Has icon; leading icon Icon/nav/home/16).'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...multipleTrails,
    docs: {
      description: {
        story: 'Usage › Alignment: use one separator style for the whole trail.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Chevron separator"><Breadcrumb {...args} separator="chevron" /></Labelled>
      <Labelled title="Slash separator"><Breadcrumb {...args} items={TRAIL.slice(0, 3).map((i, n) => n === 2 ? {
        label: i.label
      } : i)} separator="slash" /></Labelled>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Small screens',
  args: {
    maxItems: 2,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Placement: on small screens, collapse the trail to the root and the current page.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Disabled link',
  args: {
    items: [TRAIL[0], {
      label: 'Products',
      disabled: true
    }, TRAIL[2], TRAIL[3]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Behaviors › States: Disabled is rare — an ancestor with no valid target.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Keyboard: Tab moves focus left to right; Enter or Space opens the collapse trigger. The current page and separators are skipped.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Home'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: /more levels/
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('link', {
      name: 'Products'
    })).toBeInTheDocument();
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  parameters: multipleTrails,
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="Show the current page as plain, non-interactive text.">
        <Breadcrumb {...args} items={TRAIL.slice(0, 3).map((i, n) => n === 2 ? {
        label: i.label
      } : i)} />
      </Guideline>
      <Guideline kind="Don’t" note="Don't style the current page as a link — it implies it's still clickable." />
      <Guideline kind="Do" note="Use one separator style per trail.">
        <Breadcrumb {...args} items={TRAIL.slice(0, 3).map((i, n) => n === 2 ? {
        label: i.label
      } : i)} />
      </Guideline>
      <Guideline kind="Don’t" note="Don't mix separator styles within one trail." />
      <Guideline kind="Do" note="Collapse the middle of deep trails, keeping the root and current page.">
        <Breadcrumb {...args} maxItems={3} items={['Home', 'Shop', 'Tech', 'Audio', 'Headphones'].map((label, n, a) => n === a.length - 1 ? {
        label
      } : {
        label,
        href: '#'
      })} />
      </Guideline>
      <Guideline kind="Don’t" note="Don't show many deep levels without collapsing the middle.">
        <Breadcrumb {...args} maxItems={10} items={['Home', 'Shop', 'Tech', 'Audio', 'Headphones'].map((label, n, a) => n === a.length - 1 ? {
        label
      } : {
        label,
        href: '#'
      })} />
      </Guideline>
    </DoDontGrid>
}`,...B.parameters?.docs?.source}}}})))()}export{F as a,L as c,B as i,P as l,N as n,z as o,R as r,I as s,D as t,H as u};