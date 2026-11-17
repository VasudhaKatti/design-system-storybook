import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{a as i,c as a,i as o,l as s,s as c,u as l}from"./helpers-CWmtU-9p.js";import{n as u,t as d}from"./cx-CRapKfbA.js";import{n as f,t as p}from"./Icon-C15sqzpV.js";import{n as m,t as h}from"./Loading-BbqOKyMF.js";import{n as g,r as _}from"./FormLabel-b0OFj9sK.js";var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{v=`_track_lwzck_2`,y=`_sm_lwzck_27`,b=`_on_lwzck_33`,x=`_handle_lwzck_45`,S=`_glyph_lwzck_68`,C=`_spinner_lwzck_79`,w=`_loading_lwzck_89`,T=`_field_lwzck_97`,E=`_row_lwzck_103`,D=`_reverse_lwzck_109`,O=`_label_lwzck_114`,k=`_disabled_lwzck_122`,A={track:v,sm:y,on:b,handle:x,glyph:S,spinner:C,loading:w,field:T,row:E,reverse:D,label:O,disabled:k}})))()}function M({label:e,checked:t,defaultChecked:n=!1,onCheckedChange:r,size:i=`md`,showInnerContent:a=!0,loading:o=!1,disabled:s,labelPosition:c=`right`,helperText:l,className:u,id:f,...m}){let _=(0,N.useId)(),v=f??_,[y,b]=(0,N.useState)(n),x=t??y;return(0,P.jsxs)(`div`,{className:d(A.field,u),children:[(0,P.jsxs)(`div`,{className:d(A.row,c===`left`&&A.reverse,s&&A.disabled),children:[(0,P.jsx)(`button`,{id:v,type:`button`,role:`switch`,"aria-checked":x,"aria-busy":o||void 0,"aria-describedby":l?`${v}-help`:void 0,disabled:s,className:d(A.track,A[i],x&&A.on,o&&A.loading),onClick:()=>{o||s||(t===void 0&&b(!x),r?.(!x))},...m,children:(0,P.jsx)(`span`,{className:A.handle,"aria-hidden":!0,children:o?(0,P.jsx)(h,{size:`sm`,className:A.spinner}):a&&(0,P.jsx)(p,{name:x?`form/check`:`form/minus`,size:`xs`,className:A.glyph})})}),e&&(0,P.jsx)(`label`,{htmlFor:v,className:A.label,children:e})]}),l&&(0,P.jsx)(g,{id:`${v}-help`,disabled:s,children:l})]})}var N,P;function F(){return(F=e((()=>{N=r(),u(),_(),f(),m(),j(),P=n(),M.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:`Name of the setting it controls, e.g. "Notifications" — not its state.`},checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Applies immediately — no separate save step.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},showInnerContent:{required:!1,tsType:{name:`boolean`},description:`Check / minus glyph inside the handle (Figma "Show Inner Content").`,defaultValue:{value:`true`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`An asynchronous change is in flight — shows a spinner and ignores clicks.`,defaultValue:{value:`false`,computed:!1}},labelPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},helperText:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})))()}var I=t({Default:()=>V,InnerContent:()=>W,Keyboard:()=>G,Loading:()=>K,SettingsList:()=>q,Sizes:()=>U,ValuesAndInteractions:()=>H,__namedExportsOrder:()=>J,default:()=>B}),L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{a(),F(),L=n(),{expect:R,fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/Switch`,component:M,args:{label:`Notifications`,defaultChecked:!1,size:`md`,showInnerContent:!0,disabled:!1,loading:!1,onCheckedChange:z()},argTypes:{label:{description:`Figma: Examples › Settings list — label by what the setting controls`},checked:{description:`Figma: Value (On / Off)`},defaultChecked:{description:`Figma: Value (On / Off)`},size:{description:`Figma: Size — Medium · Small`,control:`inline-radio`,options:[`md`,`sm`]},showInnerContent:{description:`Figma: Show Inner Content`},disabled:{description:`Figma: Interaction=Disabled`},loading:{description:`Figma: Interaction=Loading`},helperText:c,labelPosition:c}},V={parameters:{docs:{description:{story:`Behaviour & Accessibility: click anywhere on the track to toggle; implemented with role=switch and aria-checked.`}}},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`switch`,{name:`Notifications`});await R(r).toHaveAttribute(`aria-checked`,`false`),await n.click(r),await R(r).toHaveAttribute(`aria-checked`,`true`),await R(e.onCheckedChange).toHaveBeenLastCalledWith(!0)}},H={name:`Values & interactions`,parameters:{docs:{description:{story:`Variants & States: Value × Interaction at Size=Medium.`}}},render:e=>(0,L.jsx)(i,{label:`Value by interaction grid`,rows:[`Off`,`On`],cols:[`Default`,`Disabled`,`Loading`],render:(t,n)=>(0,L.jsx)(M,{...e,label:void 0,"aria-label":`${t}, ${n}`,defaultChecked:t===`On`,disabled:n===`Disabled`,loading:n===`Loading`})})},U={parameters:{docs:{description:{story:`Two sizes: Medium (default / general use) and Small (dense contexts).`}}},render:e=>(0,L.jsxs)(`div`,{style:s,children:[(0,L.jsx)(o,{title:`Medium`,children:(0,L.jsx)(M,{...e,size:`md`,label:void 0,"aria-label":`Medium`})}),(0,L.jsx)(o,{title:`Small`,children:(0,L.jsx)(M,{...e,size:`sm`,label:void 0,"aria-label":`Small`})})]})},W={name:`Inner content`,parameters:{docs:{description:{story:`The inner icon swaps between On / Off glyphs as the state changes, reinforcing the state rather than relying on handle position alone.`}}},render:e=>(0,L.jsxs)(`div`,{style:s,children:[(0,L.jsx)(o,{title:`Show Inner Content on`,children:(0,L.jsx)(M,{...e,label:void 0,"aria-label":`Show Inner Content on`,defaultChecked:!0})}),(0,L.jsx)(o,{title:`Show Inner Content off`,children:(0,L.jsx)(M,{...e,label:void 0,"aria-label":`Show Inner Content off`,defaultChecked:!0,showInnerContent:!1})})]})},G={parameters:{docs:{description:{story:`Keyboard: focusable, toggles via Space.`}}},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`switch`,{name:`Notifications`});await t.tab(),await R(n).toHaveFocus(),await t.keyboard(` `),await R(n).toHaveAttribute(`aria-checked`,`true`)}},K={args:{loading:!0},parameters:{docs:{description:{story:`Loading shows a pending indicator on the handle, distinct from Disabled.`}}},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`switch`,{name:`Notifications`})),await R(e.onCheckedChange).not.toHaveBeenCalled()}},q={name:`Settings list`,parameters:{docs:{description:{story:`Figma example: Settings list.`}}},render:e=>(0,L.jsxs)(`div`,{style:l,children:[(0,L.jsx)(M,{...e,label:`Notifications`,defaultChecked:!0}),(0,L.jsx)(M,{...e,label:`Dark mode`}),(0,L.jsx)(M,{...e,label:`Auto-save`,defaultChecked:!0,loading:!0}),(0,L.jsx)(M,{...e,label:`Beta features`,disabled:!0})]})},J=[`Default`,`ValuesAndInteractions`,`Sizes`,`InnerContent`,`Keyboard`,`Loading`,`SettingsList`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Behaviour & Accessibility: click anywhere on the track to toggle; implemented with role=switch and aria-checked.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const sw = canvas.getByRole('switch', {
      name: 'Notifications'
    });
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Values & interactions',
  parameters: {
    docs: {
      description: {
        story: 'Variants & States: Value × Interaction at Size=Medium.'
      }
    }
  },
  render: args => <Matrix label="Value by interaction grid" rows={['Off', 'On'] as const} cols={['Default', 'Disabled', 'Loading'] as const} render={(v, i) => <Switch {...args} label={undefined} aria-label={\`\${v}, \${i}\`} defaultChecked={v === 'On'} disabled={i === 'Disabled'} loading={i === 'Loading'} />} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Two sizes: Medium (default / general use) and Small (dense contexts).'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Medium"><Switch {...args} size="md" label={undefined} aria-label="Medium" /></Labelled>
      <Labelled title="Small"><Switch {...args} size="sm" label={undefined} aria-label="Small" /></Labelled>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Inner content',
  parameters: {
    docs: {
      description: {
        story: 'The inner icon swaps between On / Off glyphs as the state changes, reinforcing the state rather than relying on handle position alone.'
      }
    }
  },
  render: args => <div style={row}>
      <Labelled title="Show Inner Content on"><Switch {...args} label={undefined} aria-label="Show Inner Content on" defaultChecked /></Labelled>
      <Labelled title="Show Inner Content off"><Switch {...args} label={undefined} aria-label="Show Inner Content off" defaultChecked showInnerContent={false} /></Labelled>
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Keyboard: focusable, toggles via Space.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const sw = canvas.getByRole('switch', {
      name: 'Notifications'
    });
    await userEvent.tab();
    await expect(sw).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading shows a pending indicator on the handle, distinct from Disabled.'
      }
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Notifications'
    }));
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Settings list',
  parameters: {
    docs: {
      description: {
        story: 'Figma example: Settings list.'
      }
    }
  },
  render: args => <div style={stack}>
      <Switch {...args} label="Notifications" defaultChecked />
      <Switch {...args} label="Dark mode" />
      <Switch {...args} label="Auto-save" defaultChecked loading />
      <Switch {...args} label="Beta features" disabled />
    </div>
}`,...q.parameters?.docs?.source}}}})))()}export{U as a,Y as c,q as i,W as n,I as o,G as r,H as s,V as t};