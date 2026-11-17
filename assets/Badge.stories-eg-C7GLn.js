import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{a as r,c as i,i as a,l as o,r as s,t as c}from"./helpers-CWmtU-9p.js";import{n as l,t as ee}from"./cx-CRapKfbA.js";import{i as u,n as d,r as f,t as p}from"./Icon-C15sqzpV.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m=`_badge_14cwa_1`,h=`_sm_14cwa_29`,g=`_md_14cwa_35`,_=`_lg_14cwa_39`,v=`_numeric_14cwa_45`,y=`_dot_14cwa_50`,b=`_label_14cwa_62`,x=`_filled_14cwa_68`,S=`_success_14cwa_68`,C=`_warning_14cwa_69`,w=`_error_14cwa_70`,T=`_info_14cwa_71`,E=`_neutral_14cwa_72`,D=`_subtle_14cwa_75`,O=`_outlined_14cwa_82`,k=`_dismiss_14cwa_95`,A={badge:m,sm:h,md:g,lg:_,numeric:v,dot:y,label:b,filled:x,success:S,warning:C,error:w,info:T,neutral:E,subtle:D,outlined:O,dismiss:k}})))()}function M({type:e=`text`,status:t=`neutral`,variant:n=`subtle`,size:r=`md`,label:i=`Label`,count:a=0,maxCount:o=99,showZero:s=!1,icon:c,onDismiss:l,className:u,...d}){if(e===`numeric`&&a===0&&!s)return null;let f=ee(A.badge,A[e],A[t],A[n],A[r],u);if(e===`dot`)return(0,N.jsx)(`span`,{className:f,role:d[`aria-label`]?`img`:void 0,"aria-hidden":!d[`aria-label`]||void 0,...d});if(e===`numeric`){let e=a>o?`${o}+`:String(a);return(0,N.jsx)(`span`,{className:f,...d,children:e})}return(0,N.jsxs)(`span`,{className:f,...d,children:[c&&(0,N.jsx)(p,{name:c,size:r===`lg`?`sm`:`xs`}),(0,N.jsx)(`span`,{className:A.label,title:i,children:i}),l&&(0,N.jsx)(`button`,{type:`button`,className:A.dismiss,onClick:l,"aria-label":`Remove ${i}`,children:(0,N.jsx)(p,{name:`action/close`,size:`xs`})})]})}var N;function P(){return(P=e((()=>{l(),d(),j(),N=n(),M.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{type:{required:!1,tsType:{name:`union`,raw:`'text' | 'numeric' | 'dot'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'numeric'`},{name:`literal`,value:`'dot'`}]},description:`text = label · numeric = count · dot = indicator only.`,defaultValue:{value:`'text'`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`'success' | 'warning' | 'error' | 'info' | 'neutral'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined' | 'subtle'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'subtle'`}]},description:`Visual weight. Figma property "Style".`,defaultValue:{value:`'subtle'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},count:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},maxCount:{required:!1,tsType:{name:`number`},description:`Counts above this render as "{maxCount}+".`,defaultValue:{value:`99`,computed:!1}},showZero:{required:!1,tsType:{name:`boolean`},description:`Render a zero count instead of hiding the badge.`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`unknown`},description:`Leading icon (text badges only).`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Shows a separately-focusable remove button (text badges only).`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible description for numeric and dot badges, e.g. "3 unread messages".`}},composes:[`Omit`]}})))()}var te=t({Counts:()=>Z,Default:()=>W,Dismiss:()=>X,DoDont:()=>Q,IconAndDismiss:()=>Y,Sizes:()=>J,StatusesAndStyles:()=>K,Types:()=>G,TypesAndStatuses:()=>q,__namedExportsOrder:()=>$,default:()=>U}),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function ne(){return(ne=e((()=>{u(),i(),P(),F=n(),{expect:I,fn:L}=__STORYBOOK_MODULE_TEST__,R=[`success`,`warning`,`error`,`info`,`neutral`],z=[`filled`,`outlined`,`subtle`],B=[`text`,`numeric`,`dot`],V=e=>e[0].toUpperCase()+e.slice(1),H=e=>e.toLowerCase(),U={title:`Components/Badge`,component:M,args:{type:`text`,status:`success`,variant:`filled`,size:`sm`,label:`Label`,count:3,maxCount:99,showZero:!1},argTypes:{type:{description:`Figma: Type`,control:`inline-radio`,options:B},status:{description:`Figma: Status`,control:`inline-radio`,options:R},variant:{description:`Figma: Style`,control:`inline-radio`,options:z},size:{description:`Figma: Size`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},label:{description:`Figma: Label`},icon:{description:`Figma: Has leading icon (default Icon/feedback/star) — text badges only`,control:`select`,options:[void 0,...f]},onDismiss:{description:`Figma: Is dismissible — text badges only`},count:{description:`Figma: Content › Count (Type=Numeric)`},maxCount:{description:`Figma: Content › Count — above max-count shows {max-count}+`},showZero:{description:`Figma: Content › Count — a count of 0 renders only when forced`},"aria-label":{description:`Figma: Accessibility — numeric and dot badges expose their meaning here`}}},W={},G={args:{size:`md`},parameters:{docs:{description:{story:`Overview › Types: Text (a short label), Numeric (a count only), Dot (no content — a pure indicator).`}}},render:e=>(0,F.jsxs)(`div`,{style:o,children:[(0,F.jsx)(a,{title:`Text`,note:`A short label.`,children:(0,F.jsx)(M,{...e,type:`text`})}),(0,F.jsx)(a,{title:`Numeric`,note:`A count only.`,children:(0,F.jsx)(M,{...e,type:`numeric`})}),(0,F.jsx)(a,{title:`Dot`,note:`No content — a pure indicator.`,children:(0,F.jsx)(M,{...e,type:`dot`})})]})},K={name:`Statuses & styles`,args:{size:`md`},parameters:{docs:{description:{story:`Style › Variants & states: Status × Style at Type=Text, Size=Md.`}}},render:e=>(0,F.jsx)(r,{label:`Status by style grid`,rows:R.map(V),cols:z.map(V),render:(t,n)=>(0,F.jsx)(M,{...e,status:H(t),variant:H(n)})})},q={name:`Types & statuses`,args:{size:`md`,variant:`filled`},parameters:{docs:{description:{story:`Style › Variants & states: Type × Status at Style=Filled, Size=Md.`}}},render:e=>(0,F.jsx)(r,{label:`Type by status grid`,rows:B.map(V),cols:R.map(V),render:(t,n)=>(0,F.jsx)(M,{...e,type:H(t),status:H(n)})})},J={parameters:{docs:{description:{story:`Usage › Sizes: height is fixed per size; horizontal padding scales with size.`}}},render:e=>(0,F.jsxs)(`div`,{style:o,children:[(0,F.jsx)(a,{title:`Small`,note:`space/inline/xs · dot 6px`,children:(0,F.jsx)(M,{...e,size:`sm`})}),(0,F.jsx)(a,{title:`Medium`,note:`space/inline/sm · dot 8px`,children:(0,F.jsx)(M,{...e,size:`md`})}),(0,F.jsx)(a,{title:`Large`,note:`space/inline/md · dot 10px`,children:(0,F.jsx)(M,{...e,size:`lg`})})]})},Y={name:`Icon & dismiss`,args:{size:`md`,onDismiss:void 0},parameters:{docs:{description:{story:`Usage › Alignment: the icon is always leading and vertically centred with the label; the dismiss control sits after the label.`}}},render:e=>(0,F.jsxs)(`div`,{style:o,children:[(0,F.jsx)(a,{title:`Leading icon`,note:`Icon before the label.`,children:(0,F.jsx)(M,{...e,label:`Approved`,icon:`feedback/star`})}),(0,F.jsx)(a,{title:`Dismissible`,note:`Close control after the label.`,children:(0,F.jsx)(M,{...e,label:`Design`,onDismiss:L()})})]})},X={args:{size:`md`,label:`Design`,onDismiss:L()},parameters:{docs:{description:{story:`Behaviors › Interactions: a dismissible badge’s close control is separately focusable and emits a dismiss event.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:`Remove Design`});await n.tab(),await I(r).toHaveFocus(),await n.keyboard(`{Enter}`),await I(e.onDismiss).toHaveBeenCalledOnce()}},Z={args:{size:`md`,type:`numeric`,status:`error`},parameters:{docs:{description:{story:`Content › Count: above max-count (default 99) shows {max-count}+; a count of 0 doesn’t render unless explicitly forced.`}}},render:e=>(0,F.jsxs)(`div`,{style:o,children:[(0,F.jsx)(a,{title:`3`,children:(0,F.jsx)(M,{...e,count:3})}),(0,F.jsx)(a,{title:`1284 → 99+`,children:(0,F.jsx)(M,{...e,count:1284})}),(0,F.jsx)(a,{title:`0, forced`,children:(0,F.jsx)(M,{...e,count:0,showZero:!0})})]}),play:async({canvas:e})=>{await I(e.getByText(`99+`)).toBeInTheDocument()}},Q={name:`Do & don’t`,tags:[`!dev`],args:{size:`md`},render:e=>(0,F.jsxs)(c,{children:[(0,F.jsxs)(s,{kind:`Do`,note:`Use one style for badges of the same status in a view.`,children:[(0,F.jsx)(M,{...e,variant:`subtle`,label:`Paid`}),(0,F.jsx)(M,{...e,variant:`subtle`,label:`Sent`})]}),(0,F.jsxs)(s,{kind:`Don’t`,note:`Don't mix styles within the same status group.`,children:[(0,F.jsx)(M,{...e,variant:`filled`,label:`Paid`}),(0,F.jsx)(M,{...e,variant:`outlined`,label:`Sent`})]}),(0,F.jsx)(s,{kind:`Do`,note:`Cap large counts: show {max-count}+ (e.g. 99+).`,children:(0,F.jsx)(M,{...e,type:`numeric`,status:`error`,count:1284})}),(0,F.jsx)(s,{kind:`Don’t`,note:`Don't render a wider raw count.`,children:(0,F.jsx)(M,{...e,type:`numeric`,status:`error`,count:1284,maxCount:9999})}),(0,F.jsx)(s,{kind:`Do`,note:`Use a status color only for its meaning.`,children:(0,F.jsx)(M,{...e,status:`error`,label:`Failed`})}),(0,F.jsx)(s,{kind:`Don’t`,note:`Don't reuse a status color for an unrelated meaning.`,children:(0,F.jsx)(M,{...e,status:`error`,label:`New`})})]})},$=[`Default`,`Types`,`StatusesAndStyles`,`TypesAndStatuses`,`Sizes`,`IconAndDismiss`,`Dismiss`,`Counts`,`DoDont`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview › Types: Text (a short label), Numeric (a count only), Dot (no content — a pure indicator).'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Text" note="A short label."><Badge {...args} type="text" /></Labelled>
      <Labelled title="Numeric" note="A count only."><Badge {...args} type="numeric" /></Labelled>
      <Labelled title="Dot" note="No content — a pure indicator."><Badge {...args} type="dot" /></Labelled>
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Statuses & styles',
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Style › Variants & states: Status × Style at Type=Text, Size=Md.'
      }
    }
  },
  render: args => <Matrix label="Status by style grid" rows={STATUSES.map(label)} cols={STYLES.map(label)} render={(st, sy) => <Badge {...args} status={lower<BadgeStatus>(st)} variant={lower<(typeof STYLES)[number]>(sy)} />} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Types & statuses',
  args: {
    size: 'md',
    variant: 'filled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Style › Variants & states: Type × Status at Style=Filled, Size=Md.'
      }
    }
  },
  render: args => <Matrix label="Type by status grid" rows={TYPES.map(label)} cols={STATUSES.map(label)} render={(t, st) => <Badge {...args} type={lower<(typeof TYPES)[number]>(t)} status={lower<BadgeStatus>(st)} />} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Usage › Sizes: height is fixed per size; horizontal padding scales with size.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Small" note="space/inline/xs · dot 6px"><Badge {...args} size="sm" /></Labelled>
      <Labelled title="Medium" note="space/inline/sm · dot 8px"><Badge {...args} size="md" /></Labelled>
      <Labelled title="Large" note="space/inline/md · dot 10px"><Badge {...args} size="lg" /></Labelled>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Icon & dismiss',
  args: {
    size: 'md',
    onDismiss: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Usage › Alignment: the icon is always leading and vertically centred with the label; the dismiss control sits after the label.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Leading icon" note="Icon before the label."><Badge {...args} label="Approved" icon="feedback/star" /></Labelled>
      <Labelled title="Dismissible" note="Close control after the label."><Badge {...args} label="Design" onDismiss={fn()} /></Labelled>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Design',
    onDismiss: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Behaviors › Interactions: a dismissible badge’s close control is separately focusable and emits a dismiss event.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const dismiss = canvas.getByRole('button', {
      name: 'Remove Design'
    });
    await userEvent.tab();
    await expect(dismiss).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    type: 'numeric',
    status: 'error'
  },
  parameters: {
    docs: {
      description: {
        story: 'Content › Count: above max-count (default 99) shows {max-count}+; a count of 0 doesn’t render unless explicitly forced.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="3"><Badge {...args} count={3} /></Labelled>
      <Labelled title="1284 → 99+"><Badge {...args} count={1284} /></Labelled>
      <Labelled title="0, forced"><Badge {...args} count={0} showZero /></Labelled>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('99+')).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="Use one style for badges of the same status in a view.">
        <Badge {...args} variant="subtle" label="Paid" />
        <Badge {...args} variant="subtle" label="Sent" />
      </Guideline>
      <Guideline kind="Don’t" note="Don't mix styles within the same status group.">
        <Badge {...args} variant="filled" label="Paid" />
        <Badge {...args} variant="outlined" label="Sent" />
      </Guideline>
      <Guideline kind="Do" note="Cap large counts: show {max-count}+ (e.g. 99+).">
        <Badge {...args} type="numeric" status="error" count={1284} />
      </Guideline>
      <Guideline kind="Don’t" note="Don't render a wider raw count.">
        <Badge {...args} type="numeric" status="error" count={1284} maxCount={9999} />
      </Guideline>
      <Guideline kind="Do" note="Use a status color only for its meaning.">
        <Badge {...args} status="error" label="Failed" />
      </Guideline>
      <Guideline kind="Don’t" note="Don't reuse a status color for an unrelated meaning.">
        <Badge {...args} status="error" label="New" />
      </Guideline>
    </DoDontGrid>
}`,...Q.parameters?.docs?.source}}}})))()}export{Q as a,K as c,ne as d,X as i,G as l,Z as n,Y as o,W as r,J as s,te as t,q as u};