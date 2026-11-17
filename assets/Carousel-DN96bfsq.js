import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./Carousel.stories-Dkqm4OTa.js";function x(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(c,{of:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(i,{children:`A carousel shows a set of items one view at a time inside a fixed viewport, advanced with controls, swipe or autoplay.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsx)(t.p,{children:`A carousel shows a subset of items at once when they exceed the available space. It's assembled from three components — NavControl, PaginationDot and AutoplayToggle — around the viewport and slides.`}),`
`,(0,C.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(s,{of:b}),`
`,(0,C.jsx)(s,{of:y}),`
`,(0,C.jsx)(t.p,{children:`Behavior options: infinite (wraps from last to first) or finite (stops at the edges); single-item or multi-item; slide or fade transition.`}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`When items exceed the available space and only a subset should be visible at once.`}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`For content users need to compare side by side.`}),`
`,(0,C.jsx)(t.li,{children:`For content users need to read in full.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,C.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Container`}),` — the root; owns state and bounds.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Navigation controls`}),` — Prev and Next NavControl buttons.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Viewport`}),` — clips overflow and shows the current slide.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Pagination`}),` — PaginationDots showing position and count; the active dot is larger.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`alignment-and-placement`,children:`Alignment and placement`}),`
`,(0,C.jsx)(t.p,{children:`All slides share identical dimensions within a breakpoint. The gap between slides is consistent, and the first and last slides align flush to the viewport edges. Reserve the viewport height up front so loading media doesn't shift the layout. Don't nest a horizontal carousel inside another on the same axis.`}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Slides`}),` — every slide in a breakpoint has the same size; off-screen slides are inert, not reachable by Tab.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Pagination`}),` — dots show position and count; the active dot is larger.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Autoplay interval`}),` — at least 4000ms (default 5000ms) so content stays readable.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,C.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Active slide`}),` — its pagination dot is marked current.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Disabled navigation`}),` — in finite mode, Prev or Next disables at the edges.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Hover`}),` — controls become more prominent and autoplay pauses.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Focus`}),` — visible 3px focus ring on the focused control.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Autoplay`}),` — Playing or Paused.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,C.jsx)(t.p,{children:`Prev and Next advance by one slide, or one page when several slides are in view, and the pagination updates with the slide. Autoplay advances on the interval and pauses on hover, when focus is inside the carousel and when the tab is hidden. It stops for good once the user interacts with any control.`}),`
`,(0,C.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,C.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,C.jsx)(d,{head:[`Component · State`,`Fill`,`Icon`,`Focus ring`],rows:[[`NavControl · Default`,`surface/bg/elevated`,`icon/default`,`—`],[`NavControl · Hover`,`surface/bg/subtle`,`icon/default`,`—`],[`NavControl · Focused`,`surface/bg/elevated`,`icon/default`,`border/interactive/focus (3px)`],[`NavControl · Disabled`,`surface/bg/elevated`,`icon/subtle`,`—`],[`PaginationDot · Default`,`border/strong`,`—`,`—`],[`PaginationDot · Active`,`interactive/bg/primary/default`,`—`,`—`],[`AutoplayToggle · Playing`,`surface/bg/elevated`,`icon/default (pause)`,`—`],[`AutoplayToggle · Paused`,`surface/bg/elevated`,`icon/default (play)`,`—`]]}),`
`,(0,C.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,C.jsx)(d,{head:[`Component`,`Size`,`Radius`,`Icon`],plain:[1],rows:[[`NavControl`,`36 × 36`,`radius/full`,`Icon/nav/chevron-left|right/20`],[`AutoplayToggle`,`32 × 32`,`radius/full`,`Icon/media/pause|play/16`],[`PaginationDot · Default`,`8 × 8`,`radius/full`,`—`],[`PaginationDot · Active`,`10 × 10`,`radius/full`,`—`]]}),`
`,(0,C.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,C.jsx)(t.p,{children:`NavControl — 8 variants: Direction (Prev, Next) × State (Default, Hover, Focused, Disabled). PaginationDot and AutoplayToggle — 2 variants each.`}),`
`,(0,C.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`A Focused state with a 3px ring on NavControl.`}),`
`,(0,C.jsx)(t.li,{children:`A Disabled NavControl state for the edges of finite carousels.`}),`
`,(0,C.jsx)(t.li,{children:`An AutoplayToggle with Playing and Paused states, so autoplay can always be stopped.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Wrap the slides in a live region (`,(0,C.jsx)(t.code,{children:`aria-live="polite"`}),`), turned off during autoplay, so slide changes are announced.`]}),`
`,(0,C.jsx)(t.li,{children:`Make off-screen slides inert so they can't be reached by Tab.`}),`
`,(0,C.jsx)(t.li,{children:`Don't move focus when the slide changes unless the user triggered it by keyboard.`}),`
`,(0,C.jsx)(t.li,{children:`Pagination dots must be reachable and operable by keyboard.`}),`
`,(0,C.jsx)(t.li,{children:`Prev, Next, pause and dot controls are icon-only — each needs an accessible name.`}),`
`,(0,C.jsx)(t.li,{children:`Pause autoplay on hover, focus-within and a hidden tab; stop it after any interaction.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,C.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`← →`,`Move to the previous or next slide`],[`Home`,`Jump to the first slide`],[`End`,`Jump to the last slide`],[`Tab`,`Move through the controls, including pagination dots`]]}),`
`,(0,C.jsx)(s,{of:_})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),l(),u(),h()})))()}w();export{S as default};