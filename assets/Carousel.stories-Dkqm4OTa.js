import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,p as r}from"./iframe-DQIYlc9s.js";import{c as i,r as a,s as o,t as s}from"./helpers-CWmtU-9p.js";import{n as c,t as l}from"./cx-CRapKfbA.js";import{n as u,t as d}from"./Icon-C15sqzpV.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f=`_carousel_mtuhd_1`,p=`_frame_mtuhd_8`,m=`_viewport_mtuhd_12`,h=`_track_mtuhd_18`,g=`_dragging_mtuhd_23`,_=`_slide_mtuhd_28`,v=`_fade_mtuhd_33`,y=`_active_mtuhd_43`,b=`_nav_mtuhd_47`,x=`_prev_mtuhd_80`,S=`_next_mtuhd_81`,C=`_controls_mtuhd_83`,w=`_dots_mtuhd_90`,T=`_dot_mtuhd_90`,E=`_dotActive_mtuhd_118`,D=`_autoplay_mtuhd_123`,O={carousel:f,frame:p,viewport:m,track:h,dragging:g,slide:_,fade:v,active:y,nav:b,prev:x,next:S,controls:C,dots:w,dot:T,dotActive:E,autoplay:D}})))()}function A({label:e,children:t,slidesPerView:n=1,spacing:r=16,infinite:i=!1,autoplay:a=!1,autoplayInterval:o=5e3,showNavigation:s=!0,showPagination:c=!0,transition:u=`slide`,className:f}){let p=(0,j.useId)(),m=j.Children.toArray(t),h=u===`fade`?1:Math.max(1,n),g=Math.max(1,Math.ceil(m.length/h)),[_,v]=(0,j.useState)(0),[y,b]=(0,j.useState)(a),[x,S]=(0,j.useState)(!1),[C,w]=(0,j.useState)(null),T=(0,j.useRef)(null),E=(0,j.useRef)(null),D=(e,t=!0)=>{t&&b(!1),v(i?(e+g)%g:Math.min(Math.max(e,0),g-1))};(0,j.useEffect)(()=>{if(!y||x)return;let e=setInterval(()=>v(e=>(e+1)%g),Math.max(4e3,o)),t=()=>document.hidden&&S(!0);return document.addEventListener(`visibilitychange`,t),()=>{clearInterval(e),document.removeEventListener(`visibilitychange`,t)}},[y,x,g,o]);let k=e=>{let t={ArrowLeft:_-1,ArrowRight:_+1,Home:0,End:g-1};e.key in t&&!e.target.closest(`input,textarea,select`)&&(e.preventDefault(),D(t[e.key]))},A=e=>{(e.pointerType!==`mouse`||e.button===0)&&(T.current={x:e.clientX,y:e.clientY,t:Date.now()})},N=e=>{let t=T.current;if(!t)return;let n=e.clientX-t.x;C===null&&Math.abs(e.clientY-t.y)>Math.abs(n)?T.current=null:Math.abs(n)>4&&w(n)},P=()=>{let e=T.current;if(T.current=null,!e||C===null)return w(null);let t=E.current?.clientWidth??1,n=Math.abs(C)/(Date.now()-e.t)>.5;(Math.abs(C)>t*.25||n)&&D(_+(C<0?1:-1)),w(null)},F=100/h,I=`calc(${-_*100}% - ${_*r}px + ${C??0}px)`;return(0,M.jsxs)(`section`,{className:l(O.carousel,f),"aria-roledescription":`carousel`,"aria-label":e,onKeyDown:k,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),onFocus:()=>S(!0),onBlur:e=>!e.currentTarget.contains(e.relatedTarget)&&S(!1),children:[(0,M.jsxs)(`div`,{className:O.frame,children:[(0,M.jsx)(`div`,{ref:E,className:O.viewport,id:`${p}-slides`,"aria-live":y&&!x?`off`:`polite`,onPointerDown:A,onPointerMove:N,onPointerUp:P,onPointerCancel:P,children:(0,M.jsx)(`div`,{className:l(O.track,u===`fade`&&O.fade,C!==null&&O.dragging),style:u===`slide`?{transform:`translateX(${I})`,gap:r}:void 0,children:m.map((e,t)=>{let n=Math.floor(t/h)===_;return(0,M.jsx)(`div`,{role:`group`,"aria-roledescription":`slide`,"aria-label":`${t+1} of ${m.length}`,className:l(O.slide,u===`fade`&&n&&O.active),style:u===`slide`?{flex:`0 0 calc(${F}% - ${r*(h-1)/h}px)`}:void 0,inert:!n||void 0,"aria-hidden":!n||void 0,children:e},t)})})}),s&&g>1&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`button`,{type:`button`,className:l(O.nav,O.prev),"aria-label":`Previous slide`,"aria-controls":`${p}-slides`,disabled:!i&&_===0,onClick:()=>D(_-1),children:(0,M.jsx)(d,{name:`nav/chevron-left`,size:`md`})}),(0,M.jsx)(`button`,{type:`button`,className:l(O.nav,O.next),"aria-label":`Next slide`,"aria-controls":`${p}-slides`,disabled:!i&&_===g-1,onClick:()=>D(_+1),children:(0,M.jsx)(d,{name:`nav/chevron-right`,size:`md`})})]})]}),(0,M.jsxs)(`div`,{className:O.controls,children:[a&&(0,M.jsx)(`button`,{type:`button`,className:O.autoplay,"aria-label":y?`Pause slideshow`:`Play slideshow`,onClick:()=>b(e=>!e),children:(0,M.jsx)(d,{name:y?`media/pause`:`media/play`,size:`sm`})}),c&&g>1&&(0,M.jsx)(`div`,{className:O.dots,role:`group`,"aria-label":`Choose slide`,children:Array.from({length:g},(e,t)=>(0,M.jsx)(`button`,{type:`button`,className:l(O.dot,t===_&&O.dotActive),"aria-label":`Go to slide ${t+1}`,"aria-current":t===_||void 0,onClick:()=>D(t)},t))})]})]})}var j,M;function N(){return(N=e((()=>{j=r(),c(),u(),k(),M=n(),A.__docgenInfo={description:``,methods:[],displayName:`Carousel`,props:{label:{required:!0,tsType:{name:`string`},description:`Accessible name, e.g. "Featured articles".`},children:{required:!0,tsType:{name:`ReactNode`},description:``},slidesPerView:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},spacing:{required:!1,tsType:{name:`number`},description:`Gap between slides in px.`,defaultValue:{value:`16`,computed:!1}},infinite:{required:!1,tsType:{name:`boolean`},description:`Wrap from last to first instead of stopping at the edges.`,defaultValue:{value:`false`,computed:!1}},autoplay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},autoplayInterval:{required:!1,tsType:{name:`number`},description:`ms, minimum 4000.`,defaultValue:{value:`5000`,computed:!1}},showNavigation:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showPagination:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},transition:{required:!1,tsType:{name:`union`,raw:`'slide' | 'fade'`,elements:[{name:`literal`,value:`'slide'`},{name:`literal`,value:`'fade'`}]},description:``,defaultValue:{value:`'slide'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var P=t({Autoplay:()=>V,DoDont:()=>K,Fade:()=>W,Infinite:()=>U,Keyboard:()=>G,MultiItem:()=>H,Standard:()=>B,__namedExportsOrder:()=>q,default:()=>z}),F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{i(),N(),F=n(),{expect:I}=__STORYBOOK_MODULE_TEST__,L=e=>(0,F.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,height:160,background:`var(--surface-bg-subtle)`,borderRadius:`var(--radius-surface)`},children:(0,F.jsx)(`span`,{className:`text-heading-sm`,children:e})},e),R=[`Slide 1 of 3`,`Slide 2 of 3`,`Slide 3 of 3`].map(L),z={title:`Components/Carousel`,component:A,args:{label:`Featured`,children:R,slidesPerView:1,infinite:!1,autoplay:!1,autoplayInterval:5e3,transition:`slide`},argTypes:{label:{description:`Figma: Accessibility — the carousel’s accessible name`},slidesPerView:{description:`Figma: Multi-item (slidesPerView)`},infinite:{description:`Figma: Behavior option — infinite (wraps) or finite (stops at the edges)`},autoplay:{description:`Figma: Autoplay — always paired with the AutoplayToggle pause control`},autoplayInterval:{description:`Figma: Content › Autoplay interval — at least 4000ms, default 5000ms`},transition:{description:`Figma: Behavior option — slide or fade`,control:`inline-radio`,options:[`slide`,`fade`]},children:o,spacing:o,showNavigation:o,showPagination:o,className:o},decorators:[e=>(0,F.jsx)(`div`,{style:{width:480},children:(0,F.jsx)(e,{})})]},B={parameters:{docs:{description:{story:`Manual advance, finite — the edge control disables at the first and last slide.`}}},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Previous slide`}),r=e.getByRole(`button`,{name:`Next slide`});await I(n).toBeDisabled(),await t.click(r),await t.click(r),await I(r).toBeDisabled()}},V={args:{autoplay:!0},parameters:{docs:{description:{story:`Advances on a timer, always paired with a visible pause control. Autoplay stops for good once the user interacts with any control.`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Pause slideshow`})),await I(e.getByRole(`button`,{name:`Play slideshow`})).toBeInTheDocument()}},H={name:`Multi-item`,args:{slidesPerView:2,children:[`Item A`,`Item B`].map(L)},parameters:{docs:{description:{story:`Several slides per view (slidesPerView). Prev and Next advance by one page.`}}}},U={args:{infinite:!0},parameters:{docs:{description:{story:`Behavior option: infinite — wraps from last to first.`}}},play:async({canvas:e})=>{await I(e.getByRole(`button`,{name:`Previous slide`})).toBeEnabled()}},W={args:{transition:`fade`},parameters:{docs:{description:{story:`Transition: slide or fade, animating transform or opacity only (default 300ms).`}}}},G={parameters:{docs:{description:{story:`Tab moves through the controls, including pagination dots; ← → move between slides; Home / End jump to the first / last slide.`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Next slide`})),await I(e.getByRole(`button`,{name:`Previous slide`})).toBeEnabled()}},K={name:`Do & don’t`,tags:[`!dev`],decorators:[e=>(0,F.jsx)(`div`,{style:{width:960},children:(0,F.jsx)(e,{})})],parameters:{a11y:{config:{rules:[{id:`landmark-unique`,enabled:!1}]}}},render:e=>(0,F.jsxs)(s,{children:[(0,F.jsx)(a,{kind:`Do`,note:`Always pair autoplay with a visible, reachable pause control.`,children:(0,F.jsx)(`div`,{style:{width:`100%`},children:(0,F.jsx)(A,{...e,label:`Autoplay example`,autoplay:!0})})}),(0,F.jsx)(a,{kind:`Don’t`,note:`Don't autoplay without a pause control.`}),(0,F.jsx)(a,{kind:`Do`,note:`Give users a way to advance — controls, pagination or swipe.`,children:(0,F.jsx)(`div`,{style:{width:`100%`},children:(0,F.jsx)(A,{...e,label:`Navigable example`})})}),(0,F.jsx)(a,{kind:`Don’t`,note:`Don't hide navigation with no alternative way to advance.`,children:(0,F.jsx)(`div`,{style:{width:`100%`},children:(0,F.jsx)(A,{...e,label:`No navigation example`,showNavigation:!1,showPagination:!1})})})]})},q=[`Standard`,`Autoplay`,`MultiItem`,`Infinite`,`Fade`,`Keyboard`,`DoDont`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Manual advance, finite — the edge control disables at the first and last slide.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const prev = canvas.getByRole('button', {
      name: 'Previous slide'
    });
    const next = canvas.getByRole('button', {
      name: 'Next slide'
    });
    await expect(prev).toBeDisabled();
    await userEvent.click(next);
    await userEvent.click(next);
    await expect(next).toBeDisabled();
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    autoplay: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Advances on a timer, always paired with a visible pause control. Autoplay stops for good once the user interacts with any control.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Pause slideshow'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Play slideshow'
    })).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Multi-item',
  args: {
    slidesPerView: 2,
    children: ['Item A', 'Item B'].map(slide)
  },
  parameters: {
    docs: {
      description: {
        story: 'Several slides per view (slidesPerView). Prev and Next advance by one page.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    infinite: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Behavior option: infinite — wraps from last to first.'
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Previous slide'
    })).toBeEnabled();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    transition: 'fade'
  },
  parameters: {
    docs: {
      description: {
        story: 'Transition: slide or fade, animating transform or opacity only (default 300ms).'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tab moves through the controls, including pagination dots; ← → move between slides; Home / End jump to the first / last slide.'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next slide'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Previous slide'
    })).toBeEnabled();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Do & don’t',
  tags: ['!dev'],
  decorators: [Story => <div style={{
    width: 960
  }}><Story /></div>],
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: args => <DoDontGrid>
      <Guideline kind="Do" note="Always pair autoplay with a visible, reachable pause control.">
        <div style={{
        width: '100%'
      }}><Carousel {...args} label="Autoplay example" autoplay /></div>
      </Guideline>
      <Guideline kind="Don’t" note="Don't autoplay without a pause control." />
      <Guideline kind="Do" note="Give users a way to advance — controls, pagination or swipe.">
        <div style={{
        width: '100%'
      }}><Carousel {...args} label="Navigable example" /></div>
      </Guideline>
      <Guideline kind="Don’t" note="Don't hide navigation with no alternative way to advance.">
        <div style={{
        width: '100%'
      }}><Carousel {...args} label="No navigation example" showNavigation={false} showPagination={false} /></div>
      </Guideline>
    </DoDontGrid>
}`,...K.parameters?.docs?.source}}}})))()}export{U as a,B as c,W as i,J as l,P as n,G as o,K as r,H as s,V as t};