import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./Alert.stories-X_nJqJcK.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(i,{children:`An alert shows a short, sentiment-coded message inline on the page, with an optional action and close button.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsx)(t.p,{children:`Alerts surface feedback inline on the page. Each sentiment has its own colors and icon. The action and close buttons are real Button instances, and the icon is a real Icon instance.`}),`
`,(0,C.jsx)(t.h3,{id:`sentiments`,children:`Sentiments`}),`
`,(0,C.jsx)(t.p,{children:`Neutral, Info, Success, Warning and Danger — each maps to its own background, border, text and icon tokens and its own status icon.`}),`
`,(0,C.jsx)(s,{of:d}),`
`,(0,C.jsx)(t.h3,{id:`configurations`,children:`Configurations`}),`
`,(0,C.jsx)(t.p,{children:`Default, With Action, With Close, and With Action + Close.`}),`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,C.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Container`}),` — carries the sentiment background, border, padding and radius.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Leading icon`}),` — the sentiment's status icon (an Icon instance).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Headline`}),` — required title.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Supporting text`}),` — optional description.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Action button`}),` — a Button instance (Ghost, Sm).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Close button`}),` — a Button instance with its label hidden (icon only).`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,C.jsx)(s,{of:b}),`
`,(0,C.jsxs)(t.p,{children:[`Spacing comes from the `,(0,C.jsx)(t.code,{children:`component.alert.density`}),` variable collection, with Compact, Comfortable and Spacious modes.`]}),`
`,(0,C.jsx)(s,{of:u}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Headline`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Required on every alert.`}),`
`]}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Supporting text`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Optional description below the headline.`}),`
`]}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`Overflow content`}),` — Text wraps.`]}),`
`,(0,C.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,C.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,C.jsxs)(t.p,{children:[`The alert itself has no interactive states — sentiment changes swap its background, border, icon and text tokens. The action and close buttons inherit Default, Hover, Pressed, Focused and Disabled from `,(0,C.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),`.`]}),`
`,(0,C.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Close`}),` — dismisses the alert, collapsing it out of the layout.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Action`}),` — runs the alert's action.`]}),`
`]}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(t.h3,{id:`keyboard`,children:`Keyboard`}),`
`,(0,C.jsx)(w,{head:[`Key`,`Action`],rows:[[`Tab`,`Moves focus to the action button, then the close button`],[`Enter`,`Activates the focused button`],[`Space`,`Activates the focused button`]]}),`
`,(0,C.jsx)(t.p,{children:`Button behavior is inherited from the Button component.`}),`
`,(0,C.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),` — used for the action and close controls.`]}),`
`,(0,C.jsx)(t.li,{children:`Dialog — for urgent messages that must interrupt the page; alerts stay inline.`}),`
`]}),`
`,(0,C.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,C.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,C.jsxs)(t.p,{children:[`Each sentiment aliases its own `,(0,C.jsx)(t.code,{children:`component.alert`}),` tokens.`]}),`
`,(0,C.jsx)(w,{head:[`Sentiment`,`Background`,`Text`,`Icon`,`Border`],rows:T}),`
`,(0,C.jsx)(t.p,{children:`Headline and supporting text share one label token per sentiment. Button colors belong to the Button component.`}),`
`,(0,C.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,C.jsx)(w,{head:[`Element`,`Rendered size`],rows:[[`Headline`,`13px`],[`Supporting text`,`12px`]]}),`
`,(0,C.jsx)(t.p,{children:`Text isn't bound to typography tokens yet (raw values).`}),`
`,(0,C.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,C.jsx)(w,{head:[`Size`,`Padding (h)`,`Padding (v)`,`Gap`,`Radius`,`Icon`],rows:[[`Sm`,`space/padding/h/sm · 12`,`space/padding/v/sm · 8`,`space/gap/sm · 8`,`radius/default · 8`,`16`],[`Md`,`space/padding/h/md · 16`,`space/padding/v/md · 12`,`space/gap/md · 12`,`radius/default · 8`,`20`]]}),`
`,(0,C.jsx)(t.p,{children:`Width 400. Border 1px on all sides.`}),`
`,(0,C.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,C.jsx)(t.p,{children:`40 variants: Sentiment (5) × Size (2) × State (4). Grid shows Sentiment × State at Size=Md.`}),`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(t.h2,{id:`icons`,children:`Icons`}),`
`,(0,C.jsxs)(t.p,{children:[`Neutral and Info use `,(0,C.jsx)(t.code,{children:`Icon/status/info`}),`, Success uses `,(0,C.jsx)(t.code,{children:`Icon/status/success`}),`, Warning uses `,(0,C.jsx)(t.code,{children:`Icon/status/warning`}),` and Danger uses `,(0,C.jsx)(t.code,{children:`Icon/status/error`}),` — 16px at Sm, 20px at Md.`]}),`
`,(0,C.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Each sentiment pairs its color with a distinct status icon, so meaning doesn't rely on color alone.`}),`
`,(0,C.jsx)(t.li,{children:`Action and close controls are real Buttons, with Button's focus and disabled states.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Use `,(0,C.jsx)(t.code,{children:`role="alert"`}),` for assertive, urgent messages and `,(0,C.jsx)(t.code,{children:`role="status"`}),` for polite ones.`]}),`
`,(0,C.jsx)(t.li,{children:`The close button is icon-only — give it an accessible name (e.g. "Dismiss").`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,C.jsx)(w,{head:[`Key`,`Action`],rows:[[`Tab`,`Moves focus to the action button, then the close button`],[`Shift + Tab`,`Moves focus back`],[`Enter`,`Activates the focused button`],[`Space`,`Activates the focused button`]]}),`
`,(0,C.jsx)(s,{of:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C,w,T;function E(){return(E=e((()=>{C=t(),r(),l(),f(),w=({head:e,rows:t})=>(0,C.jsxs)(`table`,{children:[(0,C.jsx)(`thead`,{children:(0,C.jsx)(`tr`,{children:e.map(e=>(0,C.jsx)(`th`,{children:e},e))})}),(0,C.jsx)(`tbody`,{children:t.map((e,t)=>(0,C.jsx)(`tr`,{children:e.map((e,t)=>(0,C.jsx)(`td`,{children:t===0?e:(0,C.jsx)(`code`,{children:e})},t))},t))})]}),T=[`Neutral`,`Info`,`Success`,`Warning`,`Danger`].map(e=>{let t=e.toLowerCase();return[e,`color/bg/${t}`,`color/label/${t}`,`color/icon/${t}`,`color/border/${t}`]})})))()}E();export{T as COLOR_ROWS,w as Table,S as default};