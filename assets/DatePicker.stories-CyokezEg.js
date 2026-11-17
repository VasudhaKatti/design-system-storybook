import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{t as i}from"./react-dom-x5OSEsYT.js";import{c as a,i as o,u as s}from"./helpers-CWmtU-9p.js";import{n as ee,t as c}from"./cx-CRapKfbA.js";import{n as te,t as ne}from"./Icon-C15sqzpV.js";import{n as l,t as re}from"./Button-BRS-F2jz.js";import{i as ie,n as ae,r as u,t as oe}from"./useFloating-DBT2YYgS.js";import{n as se,r as d,t as ce}from"./FormLabel-b0OFj9sK.js";import{n as le,t as f}from"./useClickOutside-Bpy5E7GL.js";function ue(e){let t=/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2}))?$/.exec(e.trim());if(!t)return null;let[,n,r,i,a=`0`,o=`0`]=t,s=new Date(Number(n),Number(r)-1,Number(i),Number(a),Number(o));return s.getMonth()!==Number(r)-1||s.getDate()!==Number(i)||Number(a)>23?null:s}function de(e,t){let n=new Date(e.getFullYear(),e.getMonth(),1),r=(n.getDay()-t+7)%7,i=m(n,-r);return Array.from({length:6},(e,t)=>Array.from({length:7},(e,n)=>m(i,t*7+n)))}var p,m,h,g,fe,pe,_,v,me;function y(){return(y=e((()=>{p=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),m=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),h=(e,t)=>{let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r),e.getHours(),e.getMinutes())},g=(e,t)=>!!e&&!!t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),fe=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth(),pe=(e,t,n)=>{let[r,i]=t<=n?[t,n]:[n,t];return e>p(r)&&e<p(i)},_=e=>String(e).padStart(2,`0`),v=e=>e?`${e.getFullYear()}-${_(e.getMonth()+1)}-${_(e.getDate())}`:``,me=e=>e?`${v(e)} ${_(e.getHours())}:${_(e.getMinutes())}`:``})))()}var b,he,ge,_e,x,S,C,w,ve,T,E,D,O,k,A,j,M,N,P,ye,F,I,be,L,R,z,B,V,xe,Se,Ce,we,Te,H,Ee,De,Oe,U;function ke(){return(ke=e((()=>{b=`_field_3i91t_2`,he=`_control_3i91t_9`,ge=`_disabled_3i91t_24`,_e=`_readOnly_3i91t_24`,x=`_open_3i91t_28`,S=`_filled_3i91t_35`,C=`_error_3i91t_39`,w=`_inputWrap_3i91t_61`,ve=`_input_3i91t_61`,T=`_sep_3i91t_87`,E=`_calendarButton_3i91t_91`,D=`_messages_3i91t_111`,O=`_panel_3i91t_118`,k=`_panelVisible_3i91t_131`,A=`_panelBody_3i91t_135`,j=`_presets_3i91t_140`,M=`_preset_3i91t_140`,N=`_month_3i91t_167`,P=`_header_3i91t_171`,ye=`_nav_3i91t_178`,F=`_title_3i91t_179`,I=`_grid_3i91t_210`,be=`_row_3i91t_216`,L=`_weekday_3i91t_222`,R=`_day_3i91t_230`,z=`_outside_3i91t_231`,B=`_blocked_3i91t_254`,V=`_selected_3i91t_254`,xe=`_today_3i91t_258`,Se=`_inRange_3i91t_269`,Ce=`_cell_3i91t_276`,we=`_picker_3i91t_292`,Te=`_time_3i91t_312`,H=`_timeLabel_3i91t_321`,Ee=`_timeSelect_3i91t_329`,De=`_footer_3i91t_339`,Oe=`_hint_3i91t_347`,U={field:b,control:he,disabled:ge,readOnly:_e,open:x,filled:S,error:C,inputWrap:w,input:ve,sep:T,calendarButton:E,messages:D,panel:O,panelVisible:k,panelBody:A,presets:j,preset:M,month:N,header:P,nav:ye,title:F,grid:I,row:be,weekday:L,day:R,outside:z,blocked:B,selected:V,today:xe,inRange:Se,cell:Ce,picker:we,time:Te,timeLabel:H,timeSelect:Ee,footer:De,hint:Oe}})))()}function Ae(e){let{label:t,helperText:n,error:r,disabled:i,readOnly:a,required:o,min:s,max:ee,isDateDisabled:te,weekStartsOn:l=1,locale:u,className:oe}=e,d=e.type??`single`,f=(0,W.useId)(),_=(0,W.useRef)(null),y=(0,W.useRef)(null),b=(0,W.useRef)(null),he=e.value??e.defaultValue??(d===`range`?[null,null]:null),[ge,_e]=(0,W.useState)(he),x=e.value===void 0?ge:e.value,S=d===`range`?x:null,C=d===`range`?null:x,[w,ve]=(0,W.useState)(!1),[T,E]=(0,W.useState)(`days`),[D,O]=(0,W.useState)(p(C??S?.[0]??new Date)),[k,A]=(0,W.useState)(null),[j,M]=(0,W.useState)(null),[N,P]=(0,W.useState)([``,``]),[ye,F]=(0,W.useState)(``),{pos:I}=ae(_,y,{open:w,placement:`bottom-start`,offset:4}),be=d===`datetime`?me:v;(0,W.useEffect)(()=>{P(S?[v(S[0]),v(S[1])]:[be(C),``])},[S?.[0]?.getTime(),S?.[1]?.getTime(),C?.getTime()]);let L=t=>{e.value===void 0&&_e(t),e.onValueChange?.(t)},R=e=>s&&e<p(s)||ee&&e>p(ee)||!!te?.(e),z=(e=!0)=>{ve(!1),E(`days`),M(null),A(null),e&&_.current?.querySelector(`button`)?.focus()};le([_,y],()=>w&&z(!1),w);let B=()=>{i||a||(O(p(C??S?.[0]??new Date)),M(d===`datetime`?C??p(new Date):null),ve(!0))};(0,W.useEffect)(()=>{w&&T===`days`&&I&&b.current?.querySelector(`[data-date="${v(D)}"]`)?.focus()},[D,w,T,I]);let V=e=>{if(!R(e)){if(d===`range`){let[t,n]=S;!t||n?L([e,null]):(L(e<t?[e,t]:[t,e]),z())}else if(d===`datetime`){let t=j??e;M(new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()))}else L(e),z()}},xe=e=>{let t={ArrowLeft:()=>m(D,-1),ArrowRight:()=>m(D,1),ArrowUp:()=>m(D,-7),ArrowDown:()=>m(D,7),PageUp:()=>h(D,e.shiftKey?-12:-1),PageDown:()=>h(D,e.shiftKey?12:1),Home:()=>m(D,-((D.getDay()-l+7)%7)),End:()=>m(D,6-(D.getDay()-l+7)%7)};e.key in t?(e.preventDefault(),O(t[e.key]())):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),V(D))},Se=(0,W.useMemo)(()=>{let e=new Intl.DateTimeFormat(u,{weekday:`short`});return Array.from({length:7},(t,n)=>e.format(new Date(2024,0,7+(n+l)%7)))},[u,l]),Ce=e=>new Intl.DateTimeFormat(u,{month:`long`,year:`numeric`}).format(e),we=e=>new Intl.DateTimeFormat(u,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}).format(e),Te=e=>{let t=N[e].trim();if(!t){F(``),L(S?e===0?[null,S[1]]:[S[0],null]:null);return}let n=ue(t);if(!n||R(p(n)))F(`Enter a valid date as YYYY-MM-DD${d===`datetime`?` HH:mm`:``}.`);else if(F(``),S){let t=e===0?[n,S[1]]:[S[0],n];if(t[0]&&t[1]&&t[1]<t[0])return F(`End date must be after the start date.`);L(t)}else L(d===`datetime`?n:p(n))},H=r??(ye||void 0),Ee=d===`range`?[D,h(D,1)]:[D],De=d===`datetime`?`YYYY-MM-DD HH:mm`:`YYYY-MM-DD`,Oe=(e,r)=>(0,G.jsx)(`div`,{className:U.inputWrap,children:(0,G.jsx)(`input`,{id:`${f}-in${e}`,className:U.input,value:N[e],placeholder:De,onChange:t=>P(n=>e===0?[t.target.value,n[1]]:[n[0],t.target.value]),onBlur:()=>Te(e),onKeyDown:e=>e.key===`ArrowDown`&&(e.preventDefault(),B()),disabled:i,readOnly:a,required:o,"aria-label":d===`range`?`${t} ${r}`:void 0,"aria-labelledby":d===`range`?void 0:`${f}-label`,"aria-invalid":!!H||void 0,"aria-describedby":H||n?`${f}-msg`:void 0,autoComplete:`off`})}),ke=(()=>{let e=p(new Date);return[[`Last 7 days`,[m(e,-6),e]],[`Last 30 days`,[m(e,-29),e]],[`This month`,[new Date(e.getFullYear(),e.getMonth(),1),new Date(e.getFullYear(),e.getMonth()+1,0)]]]})();return(0,G.jsxs)(`div`,{className:c(U.field,oe),children:[(0,G.jsx)(ce,{id:`${f}-label`,htmlFor:d===`range`?void 0:`${f}-in0`,as:d===`range`?`span`:`label`,required:o,disabled:i,children:t}),(0,G.jsxs)(`div`,{ref:_,className:c(U.control,w&&U.open,!!H&&U.error,i&&U.disabled,a&&U.readOnly,(C||S?.[0])&&U.filled),children:[Oe(0,`start date`),d===`range`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ne,{name:`nav/arrow-right`,size:`sm`,className:U.sep}),Oe(1,`end date`)]}),(0,G.jsx)(`button`,{type:`button`,className:U.calendarButton,"aria-label":`Choose ${t.toLowerCase()}`,"aria-haspopup":`dialog`,"aria-expanded":w,onClick:()=>w?z():B(),disabled:i||a,children:(0,G.jsx)(ne,{name:H?`status/error`:`form/calendar`,size:`sm`})})]}),(H||n)&&(0,G.jsxs)(`div`,{id:`${f}-msg`,className:U.messages,children:[H&&(0,G.jsx)(se,{tone:`error`,children:H}),n&&(0,G.jsx)(se,{disabled:i,children:n})]}),w&&(0,je.createPortal)((0,G.jsxs)(`div`,{ref:y,role:`dialog`,"aria-modal":`false`,"aria-label":`${t} calendar`,className:c(U.panel,I&&U.panelVisible),style:{top:I?.top??-9999,left:I?.left??-9999},onKeyDown:e=>e.key===`Escape`&&(e.stopPropagation(),z()),children:[(0,G.jsxs)(`div`,{className:U.panelBody,children:[d===`range`&&(0,G.jsx)(`ul`,{className:U.presets,"aria-label":`Presets`,children:ke.map(([e,t])=>(0,G.jsx)(`li`,{children:(0,G.jsx)(`button`,{type:`button`,className:U.preset,onClick:()=>{L(t),z()},children:e})},e))}),Ee.map((e,t)=>(0,G.jsxs)(`div`,{className:U.month,children:[(0,G.jsxs)(`div`,{className:U.header,children:[t===0&&(0,G.jsx)(`button`,{type:`button`,className:U.nav,"aria-label":`Previous month`,onClick:()=>O(h(D,T===`years`?-144:T===`months`?-12:-1)),children:(0,G.jsx)(ne,{name:`nav/chevron-left`,size:`sm`})}),(0,G.jsx)(`button`,{type:`button`,className:U.title,"aria-live":`polite`,onClick:()=>E(T===`days`?`months`:T===`months`?`years`:`days`),disabled:d===`range`,children:T===`years`?`${D.getFullYear()-5} – ${D.getFullYear()+6}`:T===`months`?D.getFullYear():Ce(e)}),t===Ee.length-1&&(0,G.jsx)(`button`,{type:`button`,className:U.nav,"aria-label":`Next month`,onClick:()=>O(h(D,T===`years`?144:T===`months`?12:1)),children:(0,G.jsx)(ne,{name:`nav/chevron-right`,size:`sm`})})]}),T===`days`&&(0,G.jsxs)(`div`,{ref:t===0?b:void 0,role:`grid`,"aria-label":Ce(e),className:U.grid,onKeyDown:xe,children:[(0,G.jsx)(`div`,{role:`row`,className:U.row,children:Se.map(e=>(0,G.jsx)(`span`,{role:`columnheader`,className:U.weekday,"aria-label":e,children:e.slice(0,2)},e))}),de(e,l).map((t,n)=>(0,G.jsx)(`div`,{role:`row`,className:U.row,children:t.map(t=>{let n=!fe(t,e),r=S?g(t,S[0])||g(t,S[1]):g(t,j??C),i=S?.[0]&&!S[1]&&k?k:S?.[1],a=!!S?.[0]&&!!i&&pe(t,S[0],i),o=R(t);return(0,G.jsx)(`span`,{role:`gridcell`,"aria-selected":r||void 0,children:n?(0,G.jsx)(`span`,{className:U.outside,"aria-hidden":!0,children:t.getDate()}):(0,G.jsx)(`button`,{type:`button`,"data-date":v(t),tabIndex:g(t,D)?0:-1,"aria-label":we(t),"aria-current":g(t,new Date)?`date`:void 0,"aria-disabled":o||void 0,className:c(U.day,r&&U.selected,a&&U.inRange,g(t,new Date)&&U.today,o&&U.blocked),onClick:()=>{O(t),V(t)},onPointerEnter:()=>S&&A(t),children:t.getDate()})},t.toISOString())})},n))]}),T===`months`&&(0,G.jsx)(`div`,{className:U.picker,children:Array.from({length:12},(e,t)=>(0,G.jsx)(`button`,{type:`button`,className:c(U.cell,t===D.getMonth()&&U.selected),onClick:()=>{O(new Date(D.getFullYear(),t,Math.min(D.getDate(),28))),E(`days`)},children:new Intl.DateTimeFormat(u,{month:`short`}).format(new Date(2024,t,1))},t))}),T===`years`&&(0,G.jsx)(`div`,{className:U.picker,children:Array.from({length:12},(e,t)=>D.getFullYear()-5+t).map(e=>(0,G.jsx)(`button`,{type:`button`,className:c(U.cell,e===D.getFullYear()&&U.selected),onClick:()=>{O(new Date(e,D.getMonth(),Math.min(D.getDate(),28))),E(`months`)},children:e},e))})]},t))]}),d===`datetime`&&(0,G.jsxs)(`div`,{className:U.time,children:[(0,G.jsxs)(`label`,{className:U.timeLabel,children:[`Hour`,(0,G.jsx)(`select`,{className:U.timeSelect,value:(j??new Date).getHours(),onChange:e=>M(t=>t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),Number(e.target.value),t.getMinutes())),children:Array.from({length:24},(e,t)=>(0,G.jsx)(`option`,{value:t,children:String(t).padStart(2,`0`)},t))})]}),(0,G.jsxs)(`label`,{className:U.timeLabel,children:[`Minute`,(0,G.jsx)(`select`,{className:U.timeSelect,value:Math.round((j??new Date).getMinutes()/5)*5%60,onChange:e=>M(t=>t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),Number(e.target.value))),children:Array.from({length:12},(e,t)=>t*5).map(e=>(0,G.jsx)(`option`,{value:e,children:String(e).padStart(2,`0`)},e))})]})]}),d!==`single`&&(0,G.jsxs)(`div`,{className:U.footer,children:[d===`range`&&(0,G.jsx)(`span`,{className:U.hint,children:S?.[0]&&!S[1]?`Select an end date`:`Select a start date`}),(0,G.jsx)(re,{variant:`ghost`,size:`sm`,onClick:()=>z(),children:`Cancel`}),d===`datetime`&&(0,G.jsx)(re,{size:`sm`,onClick:()=>{L(j),z()},children:`Apply`})]})]}),ie(_.current))]})}var W,je,G;function Me(){return(Me=e((()=>{W=r(),je=i(),ee(),u(),f(),oe(),l(),d(),te(),y(),ke(),G=n(),Ae.__docgenInfo={description:``,methods:[],displayName:`DatePicker`,props:{label:{required:!0,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},min:{required:!1,tsType:{name:`Date`},description:``},max:{required:!1,tsType:{name:`Date`},description:``},isDateDisabled:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(d: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`d`}],return:{name:`boolean`}}},description:`Return true to disable a specific date.`},weekStartsOn:{required:!1,tsType:{name:`union`,raw:`0 | 1`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`}]},description:`0 = Sunday, 1 = Monday (default).`},locale:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Ne=t({Default:()=>Y,Keyboard:()=>$,ShowCalendar:()=>Q,States:()=>Z,Types:()=>X,__namedExportsOrder:()=>ze,default:()=>Re}),K,q,Pe,Fe,Ie,Le,J,Re,Y,X,Z,Q,$,ze;function Be(){return(Be=e((()=>{a(),Me(),K=n(),{expect:q,screen:Pe}=__STORYBOOK_MODULE_TEST__,Fe=new Date(2026,6,30),Ie=new Date(2026,6,30,14,30),Le=[new Date(2026,6,20),new Date(2026,7,5)],J=({type:e,filled:t,...n})=>e===`range`?(0,K.jsx)(Ae,{...n,type:`range`,defaultValue:t?Le:void 0}):e===`datetime`?(0,K.jsx)(Ae,{...n,type:`datetime`,defaultValue:t?Ie:void 0}):(0,K.jsx)(Ae,{...n,type:`single`,defaultValue:t?Fe:void 0}),Re={title:`Components/Date Picker`,render:J,args:{label:`Date`,type:`single`,filled:!1,disabled:!1,readOnly:!1},argTypes:{label:{description:`Field label`},type:{description:`Figma: Type — Single · Range · DateTime`,control:`inline-radio`,options:[`single`,`range`,`datetime`]},filled:{description:`Figma: State=Filled`},disabled:{description:`Figma: State=Disabled`},readOnly:{description:`Figma: State=Read-only`},error:{description:`Figma: State=Error`}},decorators:[e=>(0,K.jsx)(`div`,{style:{minHeight:120},children:(0,K.jsx)(e,{})})]},Y={},X={parameters:{docs:{description:{story:`Type: Single, Range and DateTime. A range field renders two fields side by side sharing one popover.`}}},render:e=>(0,K.jsxs)(`div`,{style:s,children:[(0,K.jsx)(o,{title:`Single`,children:J({...e,type:`single`,label:`Date`,filled:!0})}),(0,K.jsx)(o,{title:`Range`,children:J({...e,type:`range`,label:`Dates`,filled:!0})}),(0,K.jsx)(o,{title:`DateTime`,children:J({...e,type:`datetime`,label:`Date and time`,filled:!0})})]})},Z={parameters:{docs:{description:{story:`State: Default, Filled, Disabled, Read-only and Error (the invalid value 13/45/2026).`}}},render:e=>(0,K.jsxs)(`div`,{style:s,children:[J({...e,label:`Default`}),J({...e,label:`Filled`,filled:!0}),J({...e,label:`Disabled`,disabled:!0}),J({...e,label:`Read-only`,readOnly:!0,filled:!0}),J({...e,label:`Error`})]}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`textbox`,{name:/^Error/});await t.type(n,`13/45/2026`),await t.tab(),await q(n).toHaveAttribute(`aria-invalid`,`true`)}},Q={name:`Show calendar`,args:{type:`range`,label:`Dates`,filled:!0},parameters:{docs:{description:{story:`Show Calendar: the panel with presets, month grids and Clear / Cancel / Apply footer.`},story:{inline:!1,iframeHeight:520}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/Choose dates/i})),await q(await Pe.findByRole(`dialog`,{name:/calendar/i})).toBeInTheDocument()}},$={args:{filled:!0},parameters:{docs:{description:{story:`Arrow keys move focus day-to-day (←→ ±1, ↑↓ ±7); Enter / Space selects; Escape closes without committing.`},story:{inline:!1,iframeHeight:460}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/Choose date/i}));let n=await Pe.findByRole(`dialog`,{name:/calendar/i});await q(n).toBeInTheDocument(),await t.keyboard(`{Escape}`),await q(Pe.queryByRole(`dialog`,{name:/calendar/i})).toBeNull()}},ze=[`Default`,`Types`,`States`,`ShowCalendar`,`Keyboard`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Type: Single, Range and DateTime. A range field renders two fields side by side sharing one popover.'
      }
    }
  },
  render: args => <div style={stack}>
      <Labelled title="Single">{render({
        ...args,
        type: 'single',
        label: 'Date',
        filled: true
      })}</Labelled>
      <Labelled title="Range">{render({
        ...args,
        type: 'range',
        label: 'Dates',
        filled: true
      })}</Labelled>
      <Labelled title="DateTime">{render({
        ...args,
        type: 'datetime',
        label: 'Date and time',
        filled: true
      })}</Labelled>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'State: Default, Filled, Disabled, Read-only and Error (the invalid value 13/45/2026).'
      }
    }
  },
  render: args => <div style={stack}>
      {render({
      ...args,
      label: 'Default'
    })}
      {render({
      ...args,
      label: 'Filled',
      filled: true
    })}
      {render({
      ...args,
      label: 'Disabled',
      disabled: true
    })}
      {render({
      ...args,
      label: 'Read-only',
      readOnly: true,
      filled: true
    })}
      {render({
      ...args,
      label: 'Error'
    })}
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const field = canvas.getByRole('textbox', {
      name: /^Error/
    });
    await userEvent.type(field, '13/45/2026');
    await userEvent.tab();
    await expect(field).toHaveAttribute('aria-invalid', 'true');
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Show calendar',
  args: {
    type: 'range',
    label: 'Dates',
    filled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Show Calendar: the panel with presets, month grids and Clear / Cancel / Apply footer.'
      },
      story: {
        inline: false,
        iframeHeight: 520
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose dates/i
    }));
    await expect(await screen.findByRole('dialog', {
      name: /calendar/i
    })).toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    filled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Arrow keys move focus day-to-day (←→ ±1, ↑↓ ±7); Enter / Space selects; Escape closes without committing.'
      },
      story: {
        inline: false,
        iframeHeight: 460
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose date/i
    }));
    const dialog = await screen.findByRole('dialog', {
      name: /calendar/i
    });
    await expect(dialog).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(screen.queryByRole('dialog', {
      name: /calendar/i
    })).toBeNull();
  }
}`,...$.parameters?.docs?.source}}}})))()}export{Z as a,Q as i,Y as n,X as o,$ as r,Be as s,Ne as t};