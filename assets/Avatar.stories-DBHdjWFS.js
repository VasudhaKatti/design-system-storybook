import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{a as i,c as a,i as o,l as s,r as c,s as l,t as u,u as d}from"./helpers-CWmtU-9p.js";import{n as f,t as p}from"./cx-CRapKfbA.js";import{n as m,t as ee}from"./Icon-C15sqzpV.js";var h,te,ne,re,g,_,v,y,b,x,S,C,w,T,E,ie,ae,oe,D,O,k,A,j,M;function N(){return(N=e((()=>{h=`_avatar_1b810_1`,te=`_sm_1b810_22`,ne=`_md_1b810_23`,re=`_lg_1b810_24`,g=`_square_1b810_26`,_=`_image_1b810_35`,v=`_initials_1b810_42`,y=`_badge_1b810_49`,b=`_count_1b810_60`,x=`_status_1b810_73`,S=`_online_1b810_83`,C=`_away_1b810_84`,w=`_busy_1b810_85`,T=`_offline_1b810_86`,E=`_group_1b810_88`,ie=`_stacked_1b810_93`,ae=`_overflow_1b810_102`,oe=`_identity_1b810_110`,D=`_interactive_1b810_122`,O=`_selected_1b810_134`,k=`_identityText_1b810_143`,A=`_identityName_1b810_149`,j=`_identityEmail_1b810_156`,M={avatar:h,sm:te,md:ne,lg:re,square:g,"color-1":`_color-1_1b810_28`,"color-2":`_color-2_1b810_29`,"color-3":`_color-3_1b810_30`,"color-4":`_color-4_1b810_31`,"color-5":`_color-5_1b810_32`,"color-icon":`_color-icon_1b810_33`,image:_,initials:v,badge:y,count:b,status:x,online:S,away:C,busy:w,offline:T,group:E,stacked:ie,overflow:ae,identity:oe,interactive:D,selected:O,identityText:k,identityName:A,identityEmail:j}})))()}function P({name:e,src:t,icon:n,size:r=`md`,shape:i=`circle`,color:a,badge:o,status:s,className:c,...l}){let[u,d]=(0,I.useState)(!1),f=t&&!u,m=typeof o==`number`?o>9?`9+`:String(o):void 0,h=[e,typeof o==`number`&&o>0?`${o} notifications`:o===!0?`new activity`:``,s??``].filter(Boolean).join(`, `);return(0,L.jsxs)(`span`,{role:`img`,"aria-label":h,className:p(M.avatar,M[r],M[i],!f&&M[`color-${n&&!f?`icon`:a??z(e)}`],c),...l,children:[f?(0,L.jsx)(`img`,{src:t,alt:``,className:M.image,onError:()=>d(!0)}):n?(0,L.jsx)(ee,{name:n,size:r===`lg`?`lg`:r===`md`?`md`:`sm`}):(0,L.jsx)(`span`,{className:M.initials,"aria-hidden":!0,children:R(e)}),o!==void 0&&o!==!1&&o!==0&&(0,L.jsx)(`span`,{className:p(M.badge,m&&M.count),children:m}),s&&(0,L.jsx)(`span`,{className:p(M.status,M[s])})]})}function F({name:e,email:t,onClick:n,selected:r,disabled:i,trailingIcon:a,className:o,size:s=`md`,...c}){let l=(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P,{name:e,size:s,...c,"aria-hidden":!0,role:void 0,"aria-label":void 0}),(0,L.jsxs)(`span`,{className:M.identityText,children:[(0,L.jsx)(`span`,{className:M.identityName,children:e}),t&&(0,L.jsx)(`span`,{className:M.identityEmail,children:t})]}),a&&(0,L.jsx)(ee,{name:a,size:`sm`,color:`subtle`})]});return n?(0,L.jsx)(`button`,{type:`button`,className:p(M.identity,M.interactive,r&&M.selected,o),onClick:n,disabled:i,"aria-pressed":r,children:l}):(0,L.jsx)(`div`,{className:p(M.identity,o),children:l})}var I,L,R,z;function B(){return(B=e((()=>{I=r(),f(),m(),N(),L=n(),R=e=>{let t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?`?`:((t[0][0]??``)+(t.length>1?t[t.length-1][0]:``)).toUpperCase()},z=e=>{let t=0;for(let n of e)t=t*31+n.charCodeAt(0)>>>0;return t%5+1},P.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{name:{required:!0,tsType:{name:`string`},description:`Person or entity name — used for initials, colour and the accessible name.`},src:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`unknown`},description:`Icon shown for non-person entities, and as the first fallback when the image fails.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},shape:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`}]},description:`circle for people, square for things (teams, bots, files).`,defaultValue:{value:`'circle'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Background colour 1–5. Defaults to a colour derived from the name so a person is always the same colour.`},badge:{required:!1,tsType:{name:`union`,raw:`boolean | number`,elements:[{name:`boolean`},{name:`number`}]},description:'"Needs attention" indicator: `true` for a dot, a number for a count.'},status:{required:!1,tsType:{name:`union`,raw:`'online' | 'away' | 'busy' | 'offline'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'away'`},{name:`literal`,value:`'busy'`},{name:`literal`,value:`'offline'`}]},description:`Presence — a separate signal from the notification badge.`}},composes:[`Omit`]},F.__docgenInfo={description:`Avatar with name and optional email — Figma "AvatarIdentity".`,methods:[],displayName:`AvatarIdentity`,props:{email:{required:!1,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Makes the whole identity a button (e.g. opens a profile menu).`},selected:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},trailingIcon:{required:!1,tsType:{name:`unknown`},description:``},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var se=t({ColorsAndSizes:()=>Y,ContentTypes:()=>J,Default:()=>q,DoDont:()=>$,Identity:()=>X,IdentityStates:()=>Z,Keyboard:()=>Q,__namedExportsOrder:()=>le,default:()=>ce}),V,H,U,W,G,K,ce,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{a(),B(),V=n(),{expect:H,fn:U}=__STORYBOOK_MODULE_TEST__,W=[`sm`,`md`,`lg`],G={sm:`24px`,md:`32px`,lg:`40px`},K=[1,2,3,4,5],ce={title:`Components/Avatar`,component:P,args:{name:`Alex Johnson`,size:`sm`,color:1},argTypes:{name:{description:`Figma: initials (Type=Text) and accessible name`},src:{description:`Figma: Type=Image`},icon:{description:`Figma: Type=Icon › Icon (default Icon/user/profile)`},size:{description:`Figma: Size — 24 · 32 · 40px`,control:`inline-radio`,options:W},color:{description:`Figma: Color 1–5`,control:`inline-radio`,options:K},shape:l,badge:l,status:l}},q={play:async({canvas:e})=>{await H(e.getByRole(`img`,{name:/Alex Johnson/})).toBeInTheDocument()}},J={name:`Content types`,args:{size:`md`},parameters:{docs:{description:{story:`Icon — for system or bot accounts, placeholders and entities that aren’t people. Text — initials.`}}},render:e=>(0,V.jsxs)(`div`,{style:s,children:[(0,V.jsx)(o,{title:`Icon`,children:(0,V.jsx)(P,{...e,icon:`user/profile`})}),(0,V.jsx)(o,{title:`Text`,children:(0,V.jsx)(P,{...e})})]})},Y={name:`Colors & sizes`,parameters:{docs:{description:{story:`AvatarGlyph: Text — Color (5) × Size (3).`}}},render:e=>(0,V.jsx)(i,{label:`Color by size grid`,rows:K.map(String),cols:W.map(e=>G[e]),render:(t,n)=>(0,V.jsx)(P,{...e,color:Number(t),size:W.find(e=>G[e]===n)})})},X={parameters:{docs:{description:{story:`AvatarIdentity: an AvatarGlyph with name, optional email and optional trailing icon.`}}},render:e=>(0,V.jsxs)(`div`,{style:d,children:[(0,V.jsx)(F,{name:e.name,size:`md`}),(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`}),(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`,trailingIcon:`nav/chevron-down`,onClick:U()})]})},Z={name:`Identity states`,parameters:{docs:{description:{story:`AvatarIdentity has interactive states for when it opens a profile card or menu: Default, Hover, Focused, Active, Selected, Disabled.`}}},render:e=>(0,V.jsxs)(`div`,{style:d,children:[(0,V.jsx)(o,{title:`Default`,children:(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`,onClick:U()})}),(0,V.jsx)(o,{title:`Selected`,children:(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`,onClick:U(),selected:!0})}),(0,V.jsx)(o,{title:`Disabled`,children:(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`,onClick:U(),disabled:!0})})]})},Q={parameters:{docs:{description:{story:`Tab moves focus to an interactive AvatarIdentity.`}}},render:e=>(0,V.jsx)(F,{name:e.name,size:`md`,email:`alex.johnson@acme.com`,onClick:U()}),play:async({canvas:e,userEvent:t})=>{await t.tab(),await H(e.getByRole(`button`)).toHaveFocus()}},$={name:`Do & don’t`,tags:[`!dev`],args:{name:`Jane Doe`,size:`md`,color:void 0},render:e=>(0,V.jsxs)(u,{children:[(0,V.jsxs)(c,{kind:`Do`,note:`The same person gets the same color everywhere.`,children:[(0,V.jsx)(P,{...e}),(0,V.jsx)(P,{...e})]}),(0,V.jsxs)(c,{kind:`Don’t`,note:`Don't assign a random color on each render.`,children:[(0,V.jsx)(P,{...e,color:1}),(0,V.jsx)(P,{...e,color:3})]})]})},le=[`Default`,`ContentTypes`,`ColorsAndSizes`,`Identity`,`IdentityStates`,`Keyboard`,`DoDont`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: /Alex Johnson/
    })).toBeInTheDocument();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Content types',
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon — for system or bot accounts, placeholders and entities that aren’t people. Text — initials.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Icon"><Avatar {...args} icon="user/profile" /></Labelled>
      <Labelled title="Text"><Avatar {...args} /></Labelled>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Colors & sizes',
  parameters: {
    docs: {
      description: {
        story: 'AvatarGlyph: Text — Color (5) × Size (3).'
      }
    }
  },
  render: args => <Matrix label="Color by size grid" rows={COLORS.map(String)} cols={SIZES.map(s => PX[s])} render={(c, px) => <Avatar {...args} color={Number(c) as AvatarColor} size={SIZES.find(s => PX[s] === px)} />} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'AvatarIdentity: an AvatarGlyph with name, optional email and optional trailing icon.'
      }
    }
  },
  render: args => <div style={stack}>
      <AvatarIdentity name={args.name} size="md" />
      <AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" />
      <AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" trailingIcon="nav/chevron-down" onClick={fn()} />
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Identity states',
  parameters: {
    docs: {
      description: {
        story: 'AvatarIdentity has interactive states for when it opens a profile card or menu: Default, Hover, Focused, Active, Selected, Disabled.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Default"><AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" onClick={fn()} /></Labelled>
      <Labelled title="Selected"><AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" onClick={fn()} selected /></Labelled>
      <Labelled title="Disabled"><AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" onClick={fn()} disabled /></Labelled>
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tab moves focus to an interactive AvatarIdentity.'
      }
    }
  },
  render: args => <AvatarIdentity name={args.name} size="md" email="alex.johnson@acme.com" onClick={fn()} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button')).toHaveFocus();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  args: {
    name: 'Jane Doe',
    size: 'md',
    color: undefined
  },
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="The same person gets the same color everywhere.">
        <Avatar {...args} />
        <Avatar {...args} />
      </Guideline>
      <Guideline kind="Don’t" note="Don't assign a random color on each render.">
        <Avatar {...args} color={1} />
        <Avatar {...args} color={3} />
      </Guideline>
    </DoDontGrid>
}`,...$.parameters?.docs?.source}}}})))()}export{$ as a,Q as c,q as i,ue as l,Y as n,X as o,J as r,Z as s,se as t};