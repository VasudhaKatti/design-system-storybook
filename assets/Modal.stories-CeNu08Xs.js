import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{t as i}from"./react-dom-x5OSEsYT.js";import{c as a,s as o}from"./helpers-CWmtU-9p.js";import{n as s,t as c}from"./cx-CRapKfbA.js";import{n as l,t as u}from"./Icon-C15sqzpV.js";import{n as d,t as f}from"./Button-BRS-F2jz.js";import{n as p,t as m}from"./IconButton-B56Ei4Dm.js";import{n as h,t as g}from"./TextInput-CEYoIKub.js";function ee(e,t,{dismissible:n=!0,modal:r=!0}={}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&(r?t.showModal():t.show()),!e&&t.open&&t.close())},[e,r]),(0,_.useEffect)(()=>{let e=i.current;if(!e)return;let r=e=>{e.preventDefault(),n&&t()},a=e=>{e.key===`Escape`&&(e.preventDefault(),n&&t())},o=r=>{n&&r.target===e&&t()};return e.addEventListener(`cancel`,r),e.addEventListener(`keydown`,a),e.addEventListener(`click`,o),()=>{e.removeEventListener(`cancel`,r),e.removeEventListener(`keydown`,a),e.removeEventListener(`click`,o)}},[t,n]),i}var _;function v(){return(v=e((()=>{_=r()})))()}var y,b,x,S,C,w,T,te,ne,re,ie,ae,oe,se,ce,E;function le(){return(le=e((()=>{y=`_sheet_1mysl_1`,b=`_standard_1mysl_12`,x=`_end_1mysl_18`,S=`_start_1mysl_22`,C=`_modal_1mysl_27`,w=`_bottom_1mysl_58`,T=`_fade_1mysl_1`,te=`_header_1mysl_82`,ne=`_titles_1mysl_89`,re=`_headline_1mysl_96`,ie=`_subheadline_1mysl_104`,ae=`_description_1mysl_109`,oe=`_body_1mysl_117`,se=`_footer_1mysl_124`,ce=`_footerGroup_1mysl_133`,E={sheet:y,standard:b,end:x,start:S,modal:C,"from-end":`_from-end_1mysl_1`,"from-start":`_from-start_1mysl_1`,bottom:w,"from-bottom":`_from-bottom_1mysl_1`,fade:T,header:te,titles:ne,headline:re,subheadline:ie,description:ae,body:oe,footer:se,footerGroup:ce}})))()}function ue({open:e,onClose:t,mode:n=`modal`,side:r=`end`,width:i=360,headline:a,subheadline:o,description:s,onBack:l,footerStart:u,footerEnd:d,children:f,className:p}){let h=(0,de.useId)(),g=n===`modal`,_=ee(e,t,{modal:g}),v=(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`header`,{className:E.header,children:[l&&(0,D.jsx)(m,{icon:`nav/arrow-left`,label:`Back`,onClick:l,showTooltip:!1}),(0,D.jsxs)(`div`,{className:E.titles,children:[(0,D.jsx)(`h2`,{id:`${h}-title`,className:E.headline,children:a}),o&&(0,D.jsx)(`p`,{className:E.subheadline,children:o})]}),(0,D.jsx)(m,{icon:`action/close`,label:`Close`,onClick:t,showTooltip:!1})]}),s&&(0,D.jsx)(`p`,{className:E.description,children:s}),(0,D.jsx)(`div`,{className:E.body,children:f}),(u||d)&&(0,D.jsxs)(`footer`,{className:E.footer,children:[(0,D.jsx)(`div`,{className:E.footerGroup,children:u}),(0,D.jsx)(`div`,{className:E.footerGroup,children:d})]})]}),y=c(E.sheet,E[n],E[r],p),b=r===`bottom`?void 0:{width:i};return g?(0,D.jsx)(`dialog`,{ref:_,className:y,style:b,"aria-labelledby":`${h}-title`,children:v}):e?(0,D.jsx)(`aside`,{className:y,style:b,"aria-labelledby":`${h}-title`,children:v}):null}var de,D;function fe(){return(fe=e((()=>{de=r(),s(),p(),v(),le(),D=n(),ue.__docgenInfo={description:`Side sheet (Material 3). In standard mode, render it inside a flex row next to the main content.`,methods:[],displayName:`Sheet`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},mode:{required:!1,tsType:{name:`union`,raw:`'standard' | 'modal'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'modal'`}]},description:`standard: sits beside the content (no scrim) · modal: overlays the page with a scrim.`,defaultValue:{value:`'modal'`,computed:!1}},side:{required:!1,tsType:{name:`union`,raw:`'start' | 'end' | 'bottom'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`},{name:`literal`,value:`'bottom'`}]},description:"Edge it anchors to. `bottom` is a mobile-style bottom sheet.",defaultValue:{value:`'end'`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:`Width in px for side sheets (256–400 recommended).`,defaultValue:{value:`360`,computed:!1}},headline:{required:!0,tsType:{name:`string`},description:``},subheadline:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},onBack:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Shows a back button for navigation inside the sheet.`},footerStart:{required:!1,tsType:{name:`ReactNode`},description:``},footerEnd:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function pe({placement:e=`end`,width:t=400,...n}){return(0,me.jsx)(ue,{...n,mode:`modal`,side:e,width:t})}var me;function he(){return(he=e((()=>{fe(),me=n(),pe.__docgenInfo={description:`Temporary panel that slides over the page for a focused task (Figma Dialog Type=Side-drawer).
Always modal; for a persistent panel beside the content use Sheet mode="standard".`,methods:[],displayName:`Drawer`,props:{placement:{required:!1,tsType:{name:`union`,raw:`'start' | 'end' | 'bottom'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`},{name:`literal`,value:`'bottom'`}]},description:`Edge the drawer slides from.`,defaultValue:{value:`'end'`,computed:!1}},width:{defaultValue:{value:`400`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var ge,_e,ve,ye,be,xe,Se,Ce,we,O,k,Te,Ee,De,Oe,ke,Ae,je,Me,A;function Ne(){return(Ne=e((()=>{ge=`_notification_rliht_1`,_e=`_info_rliht_14`,ve=`_success_rliht_15`,ye=`_warning_rliht_16`,be=`_error_rliht_17`,xe=`_inline_rliht_20`,Se=`_toast_rliht_26`,Ce=`_callout_rliht_35`,we=`_icon_rliht_40`,O=`_content_rliht_46`,k=`_title_rliht_54`,Te=`_body_rliht_61`,Ee=`_link_rliht_66`,De=`_timestamp_rliht_73`,Oe=`_toastAction_rliht_79`,ke=`_inlineAction_rliht_83`,Ae=`_close_rliht_84`,je=`_toaster_rliht_94`,Me=`_toastSlot_rliht_105`,A={notification:ge,info:_e,success:ve,warning:ye,error:be,inline:xe,toast:Se,callout:Ce,icon:we,content:O,title:k,body:Te,link:Ee,timestamp:De,toastAction:Oe,inlineAction:ke,close:Ae,toaster:je,toastSlot:Me,"slide-in":`_slide-in_rliht_1`}})))()}function Pe({variant:e=`inline`,status:t=`info`,title:n,children:r,action:i,onClose:a,timestamp:o,link:s,className:l}){let d=e===`callout`,p=d&&(t===`success`||t===`error`)?`info`:t;return(0,j.jsxs)(`div`,{role:d?`note`:p===`error`||p===`warning`?`alert`:`status`,className:c(A.notification,A[e],A[p],l),children:[(0,j.jsx)(u,{name:Ie[p],size:`md`,className:A.icon}),(0,j.jsxs)(`div`,{className:A.content,children:[n&&(0,j.jsx)(`p`,{className:A.title,children:n}),r&&(0,j.jsx)(`div`,{className:A.body,children:r}),s&&d&&(0,j.jsx)(`a`,{className:A.link,href:s.href,children:s.label}),o&&e===`toast`&&(0,j.jsx)(`p`,{className:A.timestamp,children:o}),i&&!d&&e===`toast`&&(0,j.jsx)(`div`,{className:A.toastAction,children:(0,j.jsx)(f,{size:`sm`,variant:`secondary`,onClick:i.onClick,children:i.label})})]}),i&&!d&&e===`inline`&&(0,j.jsx)(f,{size:`sm`,variant:`ghost`,onClick:i.onClick,className:A.inlineAction,children:i.label}),a&&!d&&(0,j.jsx)(m,{icon:`action/close`,label:`Close notification`,size:`sm`,showTooltip:!1,onClick:a,className:A.close})]})}var Fe,j,Ie;function Le(){return(Le=e((()=>{Fe=r(),i(),s(),d(),l(),p(),Ne(),j=n(),Ie={info:`status/info`,success:`status/success`,warning:`status/warning`,error:`status/error`},(0,Fe.createContext)(null),Pe.__docgenInfo={description:``,methods:[],displayName:`Notification`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'inline' | 'toast' | 'callout'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'toast'`},{name:`literal`,value:`'callout'`}]},description:`inline: in the page flow · toast: floating, usually via useToast() · callout: persistent guidance (info/warning only).`,defaultValue:{value:`'inline'`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},action:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ label: string; onClick: () => void }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:`One action makes it "actionable".`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Shows a close button. Leave out when the user must resolve the issue. Never shown on callouts.`},timestamp:{required:!1,tsType:{name:`string`},description:`Toasts only.`},link:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ label: string; href: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}},description:`Callouts only: a self-describing link.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,M,Ze,Qe,$e,et,N;function tt(){return(tt=e((()=>{Re=`_modal_14wos_1`,ze=`_pop_14wos_1`,Be=`_xs_14wos_30`,Ve=`_sm_14wos_31`,He=`_md_14wos_32`,Ue=`_lg_14wos_33`,We=`_full_14wos_35`,Ge=`_header_14wos_56`,Ke=`_titles_14wos_63`,qe=`_label_14wos_70`,Je=`_title_14wos_63`,Ye=`_close_14wos_84`,Xe=`_body_14wos_88`,M=`_error_14wos_97`,Ze=`_footer_14wos_101`,Qe=`_half_14wos_110`,$e=`_pushEnd_14wos_114`,et=`_spacer_14wos_119`,N={modal:Re,pop:ze,xs:Be,sm:Ve,md:He,lg:Ue,full:We,"overlay-dim":`_overlay-dim_14wos_43`,"overlay-blur":`_overlay-blur_14wos_47`,"overlay-none":`_overlay-none_14wos_52`,header:Ge,titles:Ke,label:qe,title:Je,close:Ye,body:Xe,error:M,footer:Ze,half:Qe,pushEnd:$e,spacer:et}})))()}function P({open:e,onClose:t,title:n,label:r,children:i,variant:a=`transactional`,size:o=`sm`,overlay:s=`dim`,primaryLabel:l=`Save`,onPrimary:u,secondaryLabel:d=`Cancel`,loading:p,error:h,step:g=0,stepCount:_=1,onBack:v,onNext:y,dismissible:b=!0,hideCloseButton:x}){let S=(0,nt.useId)(),C=ee(e,t,{dismissible:b&&!p}),w=g>=_-1,T=null;return a===`transactional`||a===`danger`?T=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{variant:`secondary`,onClick:t,disabled:p,className:N.half,children:d}),(0,F.jsx)(f,{variant:a===`danger`?`danger`:`primary`,onClick:u,loading:p,className:N.half,children:l})]}):a===`acknowledgment`?T=(0,F.jsx)(f,{onClick:u??t,className:c(N.half,N.pushEnd),loading:p,children:l===`Save`?`OK`:l}):a===`progress`&&(T=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{variant:`ghost`,onClick:t,disabled:p,children:d}),(0,F.jsx)(`span`,{className:N.spacer}),(0,F.jsx)(f,{variant:`secondary`,onClick:v,disabled:g===0||p,children:`Previous`}),(0,F.jsx)(f,{onClick:w?u:y,loading:p,children:w?l:`Next`})]})),(0,F.jsxs)(`dialog`,{ref:C,className:c(N.modal,N[o],N[`overlay-${s}`]),"aria-labelledby":`${S}-title`,"aria-describedby":`${S}-body`,"aria-busy":p||void 0,children:[(0,F.jsxs)(`header`,{className:N.header,children:[(0,F.jsxs)(`div`,{className:N.titles,children:[r&&(0,F.jsx)(`p`,{className:N.label,children:r}),(0,F.jsx)(`h2`,{id:`${S}-title`,className:N.title,children:n}),a===`progress`&&_>1&&(0,F.jsxs)(`p`,{className:N.label,children:[`Step `,g+1,` of `,_]})]}),b&&!x&&(0,F.jsx)(m,{icon:`action/close`,label:`Close`,onClick:t,showTooltip:!1,disabled:p,className:N.close})]}),(0,F.jsxs)(`div`,{id:`${S}-body`,className:N.body,children:[h&&(0,F.jsx)(Pe,{status:`error`,title:`Something went wrong`,className:N.error,children:h}),i]}),T&&(0,F.jsx)(`footer`,{className:N.footer,children:T})]})}var nt,F;function rt(){return(rt=e((()=>{nt=r(),s(),d(),p(),Le(),tt(),v(),F=n(),P.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:`Short context above the title, e.g. which record the action applies to.`},children:{required:!0,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'passive' | 'transactional' | 'danger' | 'acknowledgment' | 'progress'`,elements:[{name:`literal`,value:`'passive'`},{name:`literal`,value:`'transactional'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'acknowledgment'`},{name:`literal`,value:`'progress'`}]},description:``,defaultValue:{value:`'transactional'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'full'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'full'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},overlay:{required:!1,tsType:{name:`union`,raw:`'dim' | 'blur' | 'none'`,elements:[{name:`literal`,value:`'dim'`},{name:`literal`,value:`'blur'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'dim'`,computed:!1}},primaryLabel:{required:!1,tsType:{name:`string`},description:`Primary action label (transactional / danger / acknowledgment).`,defaultValue:{value:`'Save'`,computed:!1}},onPrimary:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},secondaryLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cancel'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Primary action in progress (Figma State=Loading).`},error:{required:!1,tsType:{name:`ReactNode`},description:`Error shown at the top of the body (Figma State=Error).`},step:{required:!1,tsType:{name:`number`},description:`Progress variant: current step (0-based) and step count.`,defaultValue:{value:`0`,computed:!1}},stepCount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},onBack:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNext:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:`Hide the close icon and block Escape/backdrop dismissal (use for required acknowledgments only).`,defaultValue:{value:`true`,computed:!1}},hideCloseButton:{required:!1,tsType:{name:`boolean`},description:`Hide the visual header close button but keep Escape dismissal.`}}}})))()}var it=t({Alert:()=>H,Confirmation:()=>V,Danger:()=>K,Form:()=>U,FormError:()=>W,FullScreen:()=>X,Keyboard:()=>$,Loading:()=>G,Passive:()=>q,Progress:()=>J,ScrollableContent:()=>Q,SideDrawer:()=>Z,Sizes:()=>Y,__namedExportsOrder:()=>lt,default:()=>ct});function at({initialOpen:e=!0,trigger:t=`Open dialog`,...n}){let[r,i]=(0,I.useState)(e);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{variant:`secondary`,onClick:()=>i(!0),children:t}),(0,L.jsx)(P,{title:`Dialog title`,...n,open:r,onClose:()=>i(!1),onPrimary:()=>n.onPrimary?.(),children:n.children})]})}var I,L,R,z,B,ot,st,ct,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,lt;function ut(){return(ut=e((()=>{I=r(),d(),he(),h(),a(),rt(),L=n(),{expect:R,fn:z,screen:B,waitFor:ot}=__STORYBOOK_MODULE_TEST__,st=(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-md)`},children:[(0,L.jsx)(g,{label:`Full name`,defaultValue:`Jordan Lee`}),(0,L.jsx)(g,{label:`Email address`,defaultValue:`jordan@company.com`})]}),ct={title:`Components/Dialog`,component:P,parameters:{docs:{story:{inline:!1,iframeHeight:460}}},args:{open:!0,onClose:z(),title:`Dialog title`,children:`Dialog body copy goes here.`,variant:`transactional`,size:`sm`,primaryLabel:`Confirm`,secondaryLabel:`Cancel`,onPrimary:z(),loading:!1},argTypes:{title:{description:`Figma: Title`},label:{description:`Figma: Has subtitle / Subtitle (code renders it above the title)`},children:{description:`Figma: Body content`,control:`text`},variant:{description:`Figma: Footer patterns — passive · transactional · danger · acknowledgment · progress`,control:`select`,options:[`passive`,`transactional`,`danger`,`acknowledgment`,`progress`]},size:{description:`Figma: Size — Small 400 · Medium 480 · Large 640 · Full (Full-screen)`,control:`inline-radio`,options:[`sm`,`md`,`lg`,`full`]},primaryLabel:{description:`Figma: primary action`},secondaryLabel:{description:`Figma: Has secondary action`},loading:{description:`Figma: State=Loading — footer buttons disabled`},error:{description:`Figma: State=Error (Form type only)`},open:{control:!1},onClose:{control:!1},overlay:o,dismissible:o,hideCloseButton:o},render:({open:e,onClose:t,...n})=>(0,L.jsx)(at,{...n})},V={parameters:{docs:{description:{story:`Type=Confirmation — the transactional footer: Cancel + one primary action.`}}},play:async()=>{await R(await B.findByRole(`dialog`,{name:`Dialog title`})).toHaveAttribute(`open`)}},H={args:{variant:`acknowledgment`,title:`Storage limit reached`,children:`You've used 95% of your available storage. Free up space or upgrade your plan to continue uploading files.`,primaryLabel:`Got it`},parameters:{docs:{description:{story:`Type=Alert — the acknowledgment footer: a single button.`}}}},U={args:{title:`Edit profile`,label:`Update your personal information below.`,children:st,primaryLabel:`Save changes`},parameters:{docs:{description:{story:`Type=Form — embedded form fields. Initial focus lands on the first form field.`}}}},W={name:`Form · Error`,args:{...U.args,error:`Please correct the errors below and try again.`},parameters:{docs:{description:{story:`State=Error — Form only: an error banner at the top of the body, with the fields to correct.`}}}},G={args:{...U.args,loading:!0},parameters:{docs:{description:{story:`State=Loading — the footer buttons are disabled while the action runs, preventing a double submit.`}}}},K={args:{variant:`danger`,title:`Delete this file?`,children:`This will permanently remove "Q3-report.pdf" from your workspace. This action cannot be undone.`,primaryLabel:`Delete`},parameters:{docs:{description:{story:`Footer pattern: Danger — Cancel + a danger-styled primary action. Name the action in the title.`}}}},q={args:{variant:`passive`},parameters:{docs:{description:{story:`Footer pattern: Passive — no action buttons, dismiss only.`}}}},J={args:{variant:`progress`,step:0,stepCount:3,primaryLabel:`Finish`,onNext:z(),onBack:z()},parameters:{docs:{description:{story:`Footer pattern: Progress — Cancel + Previous + Next (or the completing action on the last step).`}}}},Y={args:{size:`md`},parameters:{docs:{description:{story:`Small · 400px, Medium · 480px, Large · 640px.`}}}},X={name:`Full-screen`,args:{size:`full`,title:`Create new project`,children:`Set up your project details, invite teammates, and configure initial settings. You can change all of this later from project settings.`,primaryLabel:`Create project`},parameters:{docs:{description:{story:`Type=Full-screen — fills the viewport.`}}}},Z={name:`Side-drawer`,parameters:{docs:{description:{story:`Type=Side-drawer — a full-height panel in three widths (400 / 480 / 640). Rendered with the Drawer component.`}}},render:()=>{let[e,t]=(0,I.useState)(!0);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{variant:`secondary`,onClick:()=>t(!0),children:`Open dialog`}),(0,L.jsx)(pe,{open:e,onClose:()=>t(!1),width:400,headline:`Notification settings`,footerEnd:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,L.jsx)(f,{onClick:()=>t(!1),children:`Save`})]}),children:`Choose which notifications you want to receive and how you want to be notified about account activity.`})]})}},Q={name:`Scrollable content`,args:{children:Array.from({length:12},(e,t)=>(0,L.jsx)(`p`,{children:`Dialog body copy goes here.`},t))},parameters:{docs:{description:{story:`Scrollable content — the header and footer stay fixed and only the body scrolls.`}}}},$={render:({open:e,onClose:t,...n})=>(0,L.jsx)(at,{...n,initialOpen:!1}),parameters:{docs:{description:{story:`Focus stays inside the dialog while it’s open; Esc closes it and focus returns to the trigger.`}}},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Open dialog`});await t.click(n),await B.findByRole(`dialog`,{name:`Dialog title`}),await t.keyboard(`{Escape}`),await ot(()=>R(B.queryByRole(`dialog`)).toBeNull()),await R(n).toHaveFocus()}},lt=[`Confirmation`,`Alert`,`Form`,`FormError`,`Loading`,`Danger`,`Passive`,`Progress`,`Sizes`,`FullScreen`,`SideDrawer`,`ScrollableContent`,`Keyboard`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Type=Confirmation — the transactional footer: Cancel + one primary action.'
      }
    }
  },
  play: async () => {
    // Native <dialog> opened with showModal() — modal without an aria-modal attribute.
    await expect(await screen.findByRole('dialog', {
      name: 'Dialog title'
    })).toHaveAttribute('open');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'acknowledgment',
    title: 'Storage limit reached',
    children: "You've used 95% of your available storage. Free up space or upgrade your plan to continue uploading files.",
    primaryLabel: 'Got it'
  },
  parameters: {
    docs: {
      description: {
        story: 'Type=Alert — the acknowledgment footer: a single button.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Edit profile',
    label: 'Update your personal information below.',
    children: FORM,
    primaryLabel: 'Save changes'
  },
  parameters: {
    docs: {
      description: {
        story: 'Type=Form — embedded form fields. Initial focus lands on the first form field.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Form · Error',
  args: {
    ...Form.args,
    error: 'Please correct the errors below and try again.'
  },
  parameters: {
    docs: {
      description: {
        story: 'State=Error — Form only: an error banner at the top of the body, with the fields to correct.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Form.args,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'State=Loading — the footer buttons are disabled while the action runs, preventing a double submit.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Delete this file?',
    children: 'This will permanently remove "Q3-report.pdf" from your workspace. This action cannot be undone.',
    primaryLabel: 'Delete'
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer pattern: Danger — Cancel + a danger-styled primary action. Name the action in the title.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'passive'
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer pattern: Passive — no action buttons, dismiss only.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'progress',
    step: 0,
    stepCount: 3,
    primaryLabel: 'Finish',
    onNext: fn(),
    onBack: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer pattern: Progress — Cancel + Previous + Next (or the completing action on the last step).'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small · 400px, Medium · 480px, Large · 640px.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Full-screen',
  args: {
    size: 'full',
    title: 'Create new project',
    children: 'Set up your project details, invite teammates, and configure initial settings. You can change all of this later from project settings.',
    primaryLabel: 'Create project'
  },
  parameters: {
    docs: {
      description: {
        story: 'Type=Full-screen — fills the viewport.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Side-drawer',
  parameters: {
    docs: {
      description: {
        story: 'Type=Side-drawer — a full-height panel in three widths (400 / 480 / 640). Rendered with the Drawer component.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Open dialog</Button>
        <Drawer open={open} onClose={() => setOpen(false)} width={400} headline="Notification settings" footerEnd={<>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>}>
          Choose which notifications you want to receive and how you want to be notified about account activity.
        </Drawer>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Scrollable content',
  args: {
    children: Array.from({
      length: 12
    }, (_, i) => <p key={i}>Dialog body copy goes here.</p>)
  },
  parameters: {
    docs: {
      description: {
        story: 'Scrollable content — the header and footer stay fixed and only the body scrolls.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: ({
    open: _open,
    onClose: _onClose,
    ...args
  }) => <Demo {...args} initialOpen={false} />,
  parameters: {
    docs: {
      description: {
        story: 'Focus stays inside the dialog while it’s open; Esc closes it and focus returns to the trigger.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Open dialog'
    });
    await userEvent.click(trigger);
    await screen.findByRole('dialog', {
      name: 'Dialog title'
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...$.parameters?.docs?.source}}}})))()}export{W as a,G as c,J as d,Q as f,ut as h,U as i,it as l,Y as m,V as n,X as o,Z as p,K as r,$ as s,H as t,q as u};