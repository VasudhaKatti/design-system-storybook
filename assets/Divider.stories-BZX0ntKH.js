import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{a as r,c as i,i as a,l as o,s}from"./helpers-CWmtU-9p.js";import{n as c,t as l}from"./cx-CRapKfbA.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{u=`_divider_1xm6w_1`,d=`_horizontal_1xm6w_12`,f=`_vertical_1xm6w_22`,p=`_solid_1xm6w_33`,m=`_dotted_1xm6w_34`,h=`_dash_1xm6w_35`,g={divider:u,horizontal:d,vertical:f,solid:p,dotted:m,dash:h,"size-sm":`_size-sm_1xm6w_37`,"size-md":`_size-md_1xm6w_38`,"length-sm":`_length-sm_1xm6w_40`,"length-md":`_length-md_1xm6w_41`,"color-light":`_color-light_1xm6w_43`,"color-dark":`_color-dark_1xm6w_44`,"color-subtle":`_color-subtle_1xm6w_45`,"color-transparent":`_color-transparent_1xm6w_46`,"color-danger":`_color-danger_1xm6w_47`,"color-success":`_color-success_1xm6w_48`,"color-neutral":`_color-neutral_1xm6w_49`,"color-warning":`_color-warning_1xm6w_50`,"color-info":`_color-info_1xm6w_51`,"state-focused":`_state-focused_1xm6w_53`,"state-selected":`_state-selected_1xm6w_54`,"state-disabled":`_state-disabled_1xm6w_58`}})))()}function v({orientation:e=`horizontal`,lineStyle:t=`solid`,size:n=`sm`,color:r=`light`,state:i=`default`,length:a=`fill`,decorative:o=!1,className:s,...c}){return(0,y.jsx)(`div`,{role:o?void 0:`separator`,"aria-orientation":o?void 0:e,"aria-hidden":o||void 0,className:l(g.divider,g[e],g[t],g[`size-${n}`],g[`color-${r}`],g[`state-${i}`],g[`length-${a}`],s),...c})}var y;function b(){return(b=e((()=>{c(),_(),y=n(),v.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},lineStyle:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dotted' | 'dash'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dotted'`},{name:`literal`,value:`'dash'`}]},description:`Solid, dotted (1 on / 3 off) or dash (6 on / 4 off) — matches the Figma dash patterns.`,defaultValue:{value:`'solid'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`sm = 1px line, md = 2px line.`,defaultValue:{value:`'sm'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark' | 'subtle' | 'transparent' | 'danger' | 'success' | 'neutral' | 'warning' | 'info'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'transparent'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'hover' | 'focused' | 'selected' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focused'`},{name:`literal`,value:`'selected'`},{name:`literal`,value:`'disabled'`}]},description:`Visual signal set by the consumer (e.g. next to a selected row). Focused/selected draw a heavier line.`,defaultValue:{value:`'default'`,computed:!1}},length:{required:!1,tsType:{name:`union`,raw:`'fill' | 'sm' | 'md'`,elements:[{name:`literal`,value:`'fill'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:"`fill` stretches to the container (default); `sm` 24px and `md` 48px are the Figma hug lengths.",defaultValue:{value:`'fill'`,computed:!1}},decorative:{required:!1,tsType:{name:`boolean`},description:`Decorative dividers are hidden from assistive tech; semantic ones are exposed as role="separator".`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var x=t({ColorsAndStyles:()=>j,Default:()=>A,Orientation:()=>P,Semantics:()=>F,Sizes:()=>N,States:()=>M,__namedExportsOrder:()=>I,default:()=>k}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{i(),b(),S=n(),{expect:C}=__STORYBOOK_MODULE_TEST__,w=[`light`,`dark`,`subtle`,`transparent`,`danger`,`success`,`neutral`,`warning`,`info`],T=[`solid`,`dotted`,`dash`],E=[`default`,`hover`,`focused`,`selected`,`disabled`],D=e=>e[0].toUpperCase()+e.slice(1),O=e=>(0,S.jsx)(`div`,{style:{display:`inline-flex`,background:`var(--color-gray-400)`,padding:`var(--space-inset-md)`},children:(0,S.jsx)(v,{...e})}),k={title:`Components/Divider`,component:v,args:{orientation:`horizontal`,lineStyle:`solid`,length:`sm`,color:`light`,state:`default`,decorative:!1},argTypes:{orientation:{description:`Figma: Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},lineStyle:{description:`Figma: Style`,control:`inline-radio`,options:T},length:{description:`Figma: Size — hug length Sm 24px · Md 48px`,control:`inline-radio`,options:[`sm`,`md`]},color:{description:`Figma: Color`,control:`select`,options:w},state:{description:`Figma: State — a visual signal set by the consumer`,control:`select`,options:E},decorative:{description:`Figma: Behaviour & Accessibility — aria-hidden when decorative, role=separator otherwise`},size:s}},A={render:e=>(0,S.jsx)(O,{...e})},j={name:`Colors & styles`,args:{length:`md`},parameters:{docs:{description:{story:`Variants & States: Color × Style at Orientation=Horizontal, Size=Md, State=Default.`}}},render:e=>(0,S.jsx)(r,{label:`Color by style grid`,rows:w.map(D),cols:T.map(D),render:(t,n)=>(0,S.jsx)(O,{...e,color:t.toLowerCase(),lineStyle:n.toLowerCase()})})},M={args:{color:`dark`,length:`md`},parameters:{docs:{description:{story:`State — zoomed callout: Focused/Selected render at the strong stroke width (2px); Default/Hover/Disabled render at 1px. Shown at Color=Dark, Style=Solid, Size=Md.`}}},render:e=>(0,S.jsx)(`div`,{style:o,children:E.map(t=>(0,S.jsx)(a,{title:D(t),children:(0,S.jsx)(O,{...e,state:t})},t))})},N={args:{color:`dark`},parameters:{docs:{description:{story:`Root hugs both axes at the Size-driven length (Sm=24px, Md=48px).`}}},render:e=>(0,S.jsxs)(`div`,{style:o,children:[(0,S.jsx)(a,{title:`Sm`,note:`24px`,children:(0,S.jsx)(O,{...e,length:`sm`})}),(0,S.jsx)(a,{title:`Md`,note:`48px`,children:(0,S.jsx)(O,{...e,length:`md`})})]})},P={args:{color:`dark`,length:`md`},render:e=>(0,S.jsxs)(`div`,{style:{...o,alignItems:`flex-start`},children:[(0,S.jsx)(a,{title:`Horizontal`,children:(0,S.jsx)(O,{...e,orientation:`horizontal`})}),(0,S.jsx)(a,{title:`Vertical`,children:(0,S.jsx)(O,{...e,orientation:`vertical`})})]})},F={args:{color:`dark`,length:`md`},parameters:{docs:{description:{story:`Behaviour & Accessibility: decorative — use role=separator when semantically meaningful, otherwise aria-hidden=true.`}}},render:e=>(0,S.jsxs)(`div`,{style:o,children:[(0,S.jsx)(a,{title:`Semantic`,note:`role=separator`,children:(0,S.jsx)(O,{...e,decorative:!1})}),(0,S.jsx)(a,{title:`Decorative`,note:`aria-hidden`,children:(0,S.jsx)(O,{...e,decorative:!0})})]}),play:async({canvas:e})=>{await C(e.getAllByRole(`separator`)).toHaveLength(1)}},I=[`Default`,`ColorsAndStyles`,`States`,`Sizes`,`Orientation`,`Semantics`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <Band {...args} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Colors & styles',
  args: {
    length: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Variants & States: Color × Style at Orientation=Horizontal, Size=Md, State=Default.'
      }
    }
  },
  render: args => <Matrix label="Color by style grid" rows={COLORS.map(label)} cols={STYLES.map(label)} render={(c, s) => <Band {...args} color={c.toLowerCase() as DividerColor} lineStyle={s.toLowerCase() as (typeof STYLES)[number]} />} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dark',
    length: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'State — zoomed callout: Focused/Selected render at the strong stroke width (2px); Default/Hover/Disabled render at 1px. Shown at Color=Dark, Style=Solid, Size=Md.'
      }
    }
  },
  render: args => <div style={row}>
      {STATES.map(s => <Labelled key={s} title={label(s)}>
          <Band {...args} state={s} />
        </Labelled>)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Root hugs both axes at the Size-driven length (Sm=24px, Md=48px).'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Sm" note="24px"><Band {...args} length="sm" /></Labelled>
      <Labelled title="Md" note="48px"><Band {...args} length="md" /></Labelled>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dark',
    length: 'md'
  },
  render: args => <div style={{
    ...row,
    alignItems: 'flex-start'
  }}>
      <Labelled title="Horizontal"><Band {...args} orientation="horizontal" /></Labelled>
      <Labelled title="Vertical"><Band {...args} orientation="vertical" /></Labelled>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dark',
    length: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Behaviour & Accessibility: decorative — use role=separator when semantically meaningful, otherwise aria-hidden=true.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Semantic" note="role=separator"><Band {...args} decorative={false} /></Labelled>
      <Labelled title="Decorative" note="aria-hidden"><Band {...args} decorative /></Labelled>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1);
  }
}`,...F.parameters?.docs?.source}}}})))()}export{F as a,L as c,P as i,A as n,N as o,x as r,M as s,j as t};