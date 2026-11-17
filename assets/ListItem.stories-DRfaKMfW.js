import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{c as i,i as ee,r as a,s as o,t as s,u as c}from"./helpers-CWmtU-9p.js";import{n as l,t as u}from"./cx-CRapKfbA.js";import{n as d,t as f}from"./Icon-C15sqzpV.js";import{n as p,t as m}from"./Skeleton-BQKAR9RF.js";import{r as h,t as g}from"./Checkbox-W7ccwl5D.js";import{r as te,t as _}from"./Radio-Btq9nXvg.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ne,re,z;function ie(){return(ie=e((()=>{v=`_list_oemzu_1`,y=`_item_oemzu_10`,b=`_dividers_oemzu_18`,x=`_row_oemzu_22`,S=`_sm_oemzu_47`,C=`_md_oemzu_48`,w=`_lg_oemzu_49`,T=`_selected_oemzu_73`,E=`_dragging_oemzu_81`,D=`_disabled_oemzu_86`,O=`_icon_oemzu_93`,k=`_grip_oemzu_94`,A=`_text_oemzu_102`,j=`_headline_oemzu_110`,M=`_supporting_oemzu_125`,N=`_truncate_oemzu_131`,P=`_metadata_oemzu_138`,F=`_control_oemzu_144`,I=`_controlRow_oemzu_149`,L=`_chevron_oemzu_153`,R=`_chevronOpen_oemzu_158`,ne=`_skeletonRow_oemzu_166`,re=`_skeletonLead_oemzu_170`,z={list:v,item:y,dividers:b,row:x,sm:S,md:C,lg:w,"list-sm":`_list-sm_oemzu_51`,"list-lg":`_list-lg_oemzu_52`,selected:T,dragging:E,disabled:D,icon:O,grip:k,text:A,headline:j,supporting:M,truncate:N,metadata:P,control:F,controlRow:I,chevron:L,chevronOpen:R,"type-menu":`_type-menu_oemzu_162`,skeletonRow:ne,skeletonLead:re}})))()}function ae({dividers:e,size:t,className:n,...r}){return(0,H.jsx)(`ul`,{role:`list`,className:u(z.list,e&&z.dividers,t&&z[`list-${t}`],n),...r})}function B({headline:e,supportingText:t,metadata:n,type:r=`default`,size:i=`md`,leadingIcon:ee,leading:a,trailing:o,control:s,controlPosition:c=`leading`,onClick:l,href:d,selected:p,activated:h,disabled:g,dragging:te,draggable:_,level:v=0,nested:y,expanded:b,defaultExpanded:x=!1,onExpandedChange:S,truncate:C,loading:w,className:T,...E}){let D=(0,V.useId)(),[O,k]=(0,V.useState)(x),A=b??O,j=ee??oe[r],M=u(z.row,z[i],z[`type-${r}`],(p||h)&&z.selected,te&&z.dragging,g&&z.disabled,C&&z.truncate);if(w)return(0,H.jsx)(`li`,{className:u(z.item,T),"aria-hidden":!0,...E,children:(0,H.jsxs)(`div`,{className:u(M,z.skeletonRow),style:{paddingInlineStart:`calc(var(--li-pad) + var(--li-indent-${v}))`},children:[(0,H.jsx)(m,{shape:`circle`,className:z.skeletonLead}),(0,H.jsxs)(`span`,{className:z.text,children:[(0,H.jsx)(m,{width:`40%`}),t!==void 0&&(0,H.jsx)(m,{width:`70%`})]})]})});let N=()=>{b===void 0&&k(!A),S?.(!A)},P=(0,H.jsxs)(H.Fragment,{children:[_&&(0,H.jsx)(f,{name:`action/menu`,size:`sm`,className:z.grip}),s&&c===`leading`&&(0,H.jsx)(`span`,{className:z.control,children:s}),j&&(0,H.jsx)(f,{name:j,size:i===`lg`?`md`:`sm`,className:z.icon}),a,(e||t)&&(0,H.jsxs)(`span`,{className:z.text,children:[(0,H.jsx)(`span`,{className:z.headline,children:e}),t&&(0,H.jsx)(`span`,{className:z.supporting,children:t})]}),s&&!e&&(0,H.jsx)(`span`,{className:z.text}),n&&(0,H.jsx)(`span`,{className:z.metadata,children:n}),o,s&&c===`trailing`&&(0,H.jsx)(`span`,{className:z.control,children:s}),y&&(0,H.jsx)(f,{name:`nav/chevron-right`,size:`sm`,className:u(z.chevron,A&&z.chevronOpen)})]}),F={paddingInlineStart:`calc(var(--li-pad) + var(--li-indent-${v}))`},I;return I=y?(0,H.jsx)(`button`,{type:`button`,className:M,style:F,"aria-expanded":A,"aria-controls":D,disabled:g,onClick:N,children:P}):s?(0,H.jsx)(`div`,{className:u(M,z.controlRow),style:F,children:P}):d?(0,H.jsx)(`a`,{className:M,style:F,href:g?void 0:d,"aria-current":h||p?`page`:void 0,"aria-disabled":g||void 0,onClick:l,children:P}):l?(0,H.jsx)(`button`,{type:`button`,className:M,style:F,"aria-pressed":p,"aria-current":h||void 0,disabled:g,onClick:l,children:P}):(0,H.jsx)(`div`,{className:M,style:F,children:P}),(0,H.jsxs)(`li`,{className:u(z.item,T),...E,children:[I,y&&(0,H.jsx)(`div`,{id:D,hidden:!A,children:y})]})}var V,H,oe;function se(){return(se=e((()=>{V=r(),l(),d(),p(),ie(),H=n(),oe={file:`layout/list`},ae.__docgenInfo={description:``,methods:[],displayName:`List`,props:{dividers:{required:!1,tsType:{name:`boolean`},description:`Divider between items.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``}},composes:[`HTMLAttributes`]},B.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{headline:{required:!0,tsType:{name:`ReactNode`},description:``},supportingText:{required:!1,tsType:{name:`ReactNode`},description:``},metadata:{required:!1,tsType:{name:`ReactNode`},description:`Trailing short text, e.g. a timestamp or count.`},type:{required:!1,tsType:{name:`union`,raw:`'default' | 'menu' | 'file' | 'setting'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'menu'`},{name:`literal`,value:`'file'`},{name:`literal`,value:`'setting'`}]},description:`Figma "Type": menu rows are compact, file rows show a file icon by default, setting rows expect a trailing control.`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},leadingIcon:{required:!1,tsType:{name:`unknown`},description:``},leading:{required:!1,tsType:{name:`ReactNode`},description:`Any leading element — an Avatar, an image.`},trailing:{required:!1,tsType:{name:`ReactNode`},description:`Any trailing element — a Badge, an IconButton. Interactive trailing elements are not allowed on clickable rows.`},control:{required:!1,tsType:{name:`ReactNode`},description:`A Checkbox/Radio/Switch control. The whole row becomes its label.`},controlPosition:{required:!1,tsType:{name:`union`,raw:`'leading' | 'trailing'`,elements:[{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`}]},description:``,defaultValue:{value:`'leading'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`e`}],return:{name:`void`}}},description:``},href:{required:!1,tsType:{name:`string`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:``},activated:{required:!1,tsType:{name:`boolean`},description:`Persistent "current" highlight, e.g. the open document in a sidebar.`},disabled:{required:!1,tsType:{name:`boolean`},description:``},dragging:{required:!1,tsType:{name:`boolean`},description:`Visual state while being dragged.`},draggable:{required:!1,tsType:{name:`boolean`},description:`Shows a drag handle.`},level:{required:!1,tsType:{name:`union`,raw:`0 | 1 | 2 | 3`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:`Nesting level 0–3 (indent).`,defaultValue:{value:`0`,computed:!1}},nested:{required:!1,tsType:{name:`ReactNode`},description:`A nested <List>. Makes the row expandable.`},expanded:{required:!1,tsType:{name:`boolean`},description:``},defaultExpanded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onExpandedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(expanded: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`expanded`}],return:{name:`void`}}},description:``},truncate:{required:!1,tsType:{name:`boolean`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`Omit`]}})))()}var ce=t({Controls:()=>Z,Default:()=>q,DoDont:()=>$,Keyboard:()=>Q,Sizes:()=>Y,States:()=>X,Types:()=>J,__namedExportsOrder:()=>de,default:()=>ue}),U,W,le,G,K,ue,q,J,Y,X,Z,Q,$,de;function fe(){return(fe=e((()=>{h(),te(),i(),se(),U=n(),{expect:W,fn:le}=__STORYBOOK_MODULE_TEST__,G={default:{headline:`List item`},menu:{headline:`Menu item`},file:{headline:`Document.pdf`,supportingText:`2.4 MB · Edited 2d ago`,metadata:`12`,leadingIcon:`layout/list`},setting:{headline:`Notifications`,supportingText:`Manage alert preferences`,leadingIcon:`action/settings`}},K=({children:e})=>(0,U.jsx)(ae,{children:e}),ue={title:`Components/List Item`,component:B,args:{type:`default`,size:`sm`,headline:`List item`,onClick:le()},argTypes:{type:{description:`Figma: Type`,control:`inline-radio`,options:[`default`,`menu`,`file`,`setting`]},size:{description:`Figma: Size — min 32 · 40 · 48px`,control:`inline-radio`,options:[`sm`,`md`,`lg`]},headline:{description:`Figma: Headline (required)`},supportingText:{description:`Figma: Supporting text — File and Setting types`},metadata:{description:`Figma: Metadata — File type`},leadingIcon:{description:`Figma: Leading icon — File and Setting types`},control:{description:`Figma: has-leading-control / has-trailing-control (Checkbox or Radio)`,control:!1},controlPosition:{description:`Figma: leading-control · trailing-control`,control:`inline-radio`,options:[`leading`,`trailing`]},selected:{description:`Figma: State=Selected`},activated:{description:`Figma: State=Activated`},disabled:{description:`Figma: State=Disabled`},dragging:{description:`Figma: State=Dragged`},loading:{description:`Figma: State=Skeleton`},leading:o,trailing:o,href:o,draggable:o,level:o,nested:o,expanded:o,defaultExpanded:o,onExpandedChange:o,truncate:o},decorators:[(e,{parameters:t})=>(0,U.jsx)(`div`,{style:{width:360},children:t.ownList?(0,U.jsx)(e,{}):(0,U.jsx)(K,{children:(0,U.jsx)(e,{})})})]},q={play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:/List item/})),await W(e.onClick).toHaveBeenCalledOnce()}},J={parameters:{docs:{description:{story:`Default — headline only. Menu — headline with a trailing chevron. File — leading icon, headline, supporting text and metadata. Setting — leading icon, headline and supporting text.`}}},render:e=>(0,U.jsx)(U.Fragment,{children:Object.keys(G).map(t=>(0,U.jsx)(B,{...e,type:t,...G[t],headline:G[t].headline},t))})},Y={parameters:{ownList:!0,docs:{description:{story:`Small · min 32px — dense lists and menus. Medium · min 40px — standard lists. Large · min 48px — spacious and touch-first lists.`}}},render:e=>(0,U.jsx)(`div`,{style:c,children:[`sm`,`md`,`lg`].map(t=>(0,U.jsx)(ee,{title:{sm:`Small · min 32px`,md:`Medium · min 40px`,lg:`Large · min 48px`}[t],children:(0,U.jsx)(K,{children:(0,U.jsx)(B,{...e,size:t,type:`file`,...G.file,headline:`Document.pdf`})})},t))})},X={args:{size:`md`},parameters:{docs:{description:{story:`Selected is a persistent highlight for chosen items; Activated a persistent indicator for the current navigation location.`}}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(B,{...e,headline:`Default`}),(0,U.jsx)(B,{...e,headline:`Selected`,selected:!0}),(0,U.jsx)(B,{...e,headline:`Activated`,activated:!0}),(0,U.jsx)(B,{...e,headline:`Disabled`,disabled:!0}),(0,U.jsx)(B,{...e,headline:`Dragged`,dragging:!0}),(0,U.jsx)(B,{...e,headline:`Skeleton`,loading:!0})]})},Z={name:`Leading & trailing controls`,args:{size:`md`,onClick:void 0},parameters:{docs:{description:{story:`Figma example: real Checkbox / Radio instances as leading or trailing controls.`}}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(B,{...e,headline:``,control:(0,U.jsx)(g,{label:`Invoice-2024-01.pdf`,defaultChecked:!0})}),(0,U.jsx)(B,{...e,headline:``,control:(0,U.jsx)(g,{label:`Invoice-2024-02.pdf`})}),(0,U.jsx)(B,{...e,headline:``,control:(0,U.jsx)(_,{name:`card`,value:`4242`,label:`Card ending 4242`,defaultChecked:!0})}),(0,U.jsx)(B,{...e,headline:``,control:(0,U.jsx)(_,{name:`card`,value:`8710`,label:`Card ending 8710`})}),(0,U.jsx)(B,{...e,headline:``,controlPosition:`trailing`,control:(0,U.jsx)(g,{label:`Auto-save drafts`,defaultChecked:!0})}),(0,U.jsx)(B,{...e,headline:``,controlPosition:`trailing`,control:(0,U.jsx)(g,{label:`Weekly digest email`})}),(0,U.jsx)(B,{...e,headline:``,controlPosition:`trailing`,control:(0,U.jsx)(_,{name:`channel`,value:`email`,label:`Email notifications`,defaultChecked:!0})}),(0,U.jsx)(B,{...e,headline:``,controlPosition:`trailing`,control:(0,U.jsx)(_,{name:`channel`,value:`sms`,label:`SMS notifications`})})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`Invoice-2024-02.pdf`)),await W(e.getByRole(`checkbox`,{name:`Invoice-2024-02.pdf`})).toBeChecked()}},Q={args:{size:`md`},parameters:{docs:{description:{story:`Tab moves between interactive elements.`}}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(B,{...e,headline:`List item`}),(0,U.jsx)(B,{...e,type:`menu`,headline:`Menu item`})]}),play:async({canvas:e,userEvent:t})=>{await t.tab(),await W(e.getByRole(`button`,{name:/List item/})).toHaveFocus(),await t.tab(),await W(e.getByRole(`button`,{name:/Menu item/})).toHaveFocus()}},$={name:`Do & don’t`,tags:[`!dev`],args:{size:`md`,onClick:void 0},parameters:{ownList:!0},decorators:[e=>(0,U.jsx)(`div`,{style:{width:760},children:(0,U.jsx)(e,{})})],render:e=>(0,U.jsxs)(s,{children:[(0,U.jsx)(a,{kind:`Do`,note:`Use either a leading icon or a leading control in a row.`,children:(0,U.jsx)(K,{children:(0,U.jsx)(B,{...e,type:`file`,...G.file,headline:`Document.pdf`})})}),(0,U.jsx)(a,{kind:`Don’t`,note:`Don't combine a leading control with the leading icon — they are mutually exclusive.`})]})},de=[`Default`,`Types`,`Sizes`,`States`,`Controls`,`Keyboard`,`DoDont`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /List item/
    }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default — headline only. Menu — headline with a trailing chevron. File — leading icon, headline, supporting text and metadata. Setting — leading icon, headline and supporting text.'
      }
    }
  },
  render: args => <>
      {(Object.keys(TYPES) as (keyof typeof TYPES)[]).map(t => <ListItem key={t} {...args} type={t} {...TYPES[t]} headline={TYPES[t].headline} />)}
    </>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    ownList: true,
    docs: {
      description: {
        story: 'Small · min 32px — dense lists and menus. Medium · min 40px — standard lists. Large · min 48px — spacious and touch-first lists.'
      }
    }
  },
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(s => <Labelled key={s} title={{
      sm: 'Small · min 32px',
      md: 'Medium · min 40px',
      lg: 'Large · min 48px'
    }[s]}>
          <InList><ListItem {...args} size={s} type="file" {...TYPES.file} headline="Document.pdf" /></InList>
        </Labelled>)}
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Selected is a persistent highlight for chosen items; Activated a persistent indicator for the current navigation location.'
      }
    }
  },
  render: args => <>
      <ListItem {...args} headline="Default" />
      <ListItem {...args} headline="Selected" selected />
      <ListItem {...args} headline="Activated" activated />
      <ListItem {...args} headline="Disabled" disabled />
      <ListItem {...args} headline="Dragged" dragging />
      <ListItem {...args} headline="Skeleton" loading />
    </>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Leading & trailing controls',
  args: {
    size: 'md',
    onClick: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma example: real Checkbox / Radio instances as leading or trailing controls.'
      }
    }
  },
  render: args => <>
      <ListItem {...args} headline="" control={<Checkbox label="Invoice-2024-01.pdf" defaultChecked />} />
      <ListItem {...args} headline="" control={<Checkbox label="Invoice-2024-02.pdf" />} />
      <ListItem {...args} headline="" control={<Radio name="card" value="4242" label="Card ending 4242" defaultChecked />} />
      <ListItem {...args} headline="" control={<Radio name="card" value="8710" label="Card ending 8710" />} />
      <ListItem {...args} headline="" controlPosition="trailing" control={<Checkbox label="Auto-save drafts" defaultChecked />} />
      <ListItem {...args} headline="" controlPosition="trailing" control={<Checkbox label="Weekly digest email" />} />
      <ListItem {...args} headline="" controlPosition="trailing" control={<Radio name="channel" value="email" label="Email notifications" defaultChecked />} />
      <ListItem {...args} headline="" controlPosition="trailing" control={<Radio name="channel" value="sms" label="SMS notifications" />} />
    </>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Invoice-2024-02.pdf'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Invoice-2024-02.pdf'
    })).toBeChecked();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab moves between interactive elements.'
      }
    }
  },
  render: args => <>
      <ListItem {...args} headline="List item" />
      <ListItem {...args} type="menu" headline="Menu item" />
    </>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: /List item/
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: /Menu item/
    })).toHaveFocus();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  args: {
    size: 'md',
    onClick: undefined
  },
  parameters: {
    ownList: true
  },
  decorators: [Story => <div style={{
    width: 760
  }}><Story /></div>],
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="Use either a leading icon or a leading control in a row.">
        <InList><ListItem {...args} type="file" {...TYPES.file} headline="Document.pdf" /></InList>
      </Guideline>
      <Guideline kind="Don’t" note="Don't combine a leading control with the leading icon — they are mutually exclusive." />
    </DoDontGrid>
}`,...$.parameters?.docs?.source}}}})))()}export{ce as a,J as c,Q as i,fe as l,q as n,Y as o,$ as r,X as s,Z as t};