import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,d as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./Badge.stories-eg-C7GLn.js";function C(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,(0,T.jsx)(c,{of:x}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(i,{children:`A badge is a small element that communicates a status, a count, a label or a notification on another element.`}),`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(a,{of:y}),`
`,(0,T.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,T.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,T.jsx)(t.p,{children:`A badge annotates another element with a status, a count or a short label. It never stands alone as a primary control.`}),`
`,(0,T.jsx)(s,{of:g}),`
`,(0,T.jsx)(t.p,{children:`Each status color maps to exactly one meaning and is never reused for another.`}),`
`,(0,T.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsx)(t.li,{children:`To show the status of an item — success, warning, error, info or neutral.`}),`
`,(0,T.jsx)(t.li,{children:`To show a count, such as unread notifications — Numeric.`}),`
`,(0,T.jsx)(t.li,{children:`To show that something needs attention without a count — Dot.`}),`
`,(0,T.jsx)(t.li,{children:`To tag an item with a short label — Text; a dismissible badge lets users remove it.`}),`
`]}),`
`,(0,T.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`As a primary action, button or main navigation target — use a `,(0,T.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),`.`]}),`
`,(0,T.jsx)(t.li,{children:`For more than a short label, a single count or one icon — no paragraphs, multiple icons or nested badges.`}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,T.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,T.jsxs)(t.ol,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Container`}),` — the pill-shaped container that wraps all content.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Icon`}),` (optional) — leading and vertically centred with the label; text badges only.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Label`}),` — text or a number; omitted on dot badges.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.strong,{children:`Dismiss`}),` (optional) — trailing close control, shown only when the badge is dismissible; text badges only.`]}),`
`]}),`
`,(0,T.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,T.jsx)(s,{of:b}),`
`,(0,T.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,T.jsxs)(t.p,{children:[`Content is centred in the container. The icon is always leading and vertically centred with the label, with a fixed gap (`,(0,T.jsx)(t.code,{children:`space/inline/xs`}),`).`]}),`
`,(0,T.jsx)(s,{of:v}),`
`,(0,T.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,T.jsx)(t.p,{children:`Place a badge next to or on the element it describes. Content must never overflow, break or expand the parent layout.`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`Label`}),` — a short label or a single count — nothing longer.`]}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`Count`})}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`If the count is above max-count (default 99), show `,(0,T.jsx)(t.code,{children:`{max-count}+`}),`.`]}),`
`,(0,T.jsx)(t.li,{children:`A count of 0 doesn't render unless explicitly forced.`}),`
`,(0,T.jsx)(t.li,{children:`Dot badges ignore the count and label.`}),`
`]}),`
`,(0,T.jsx)(s,{of:_}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`Overflow content`}),` — Text badges truncate with an ellipsis at their maximum width and never wrap to a second line.`]}),`
`,(0,T.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,T.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,T.jsx)(t.p,{children:`Badges are static by default and have no hover, focus or disabled states.`}),`
`,(0,T.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,T.jsx)(t.p,{children:`A dismissible badge's close control is separately focusable and emits a dismiss event.`}),`
`,(0,T.jsx)(d,{head:[`Key`,`Action`],rows:[[`Tab`,`Moves focus to the dismiss control (dismissible badges only)`]],plain:[1]}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),` — use for actions; a badge must never act as a primary action.`]}),`
`]}),`
`,(0,T.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,T.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,T.jsx)(t.p,{children:`Each Status × Style pair binds a semantic surface, text and border token.`}),`
`,(0,T.jsx)(d,{head:[`Status · Style`,`Fill`,`Label`,`Border`],rows:E}),`
`,(0,T.jsx)(t.p,{children:`Dot badges use the same fill (Filled, Subtle) or border (Outlined) tokens.`}),`
`,(0,T.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,T.jsx)(d,{head:[`Size`,`Tokens`,`Rendered size`],plain:[2],rows:[[`Sm`,`text-style/caption/sm/*`,`11px`],[`Md`,`text-style/caption/md/*`,`12px`],[`Lg`,`text-style/label/sm/*`,`11px`]]}),`
`,(0,T.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,T.jsx)(d,{head:[`Size`,`Height`,`Horizontal padding`,`Icon gap`,`Radius`,`Dot`],plain:[1,5],rows:[[`Sm`,`24`,`space/inline/xs · 4`,`space/inline/xs`,`radius/full`,`6 × 6`],[`Md`,`26`,`space/inline/sm · 8`,`space/inline/xs`,`radius/full`,`8 × 8`],[`Lg`,`24`,`space/inline/md · 12`,`space/inline/xs`,`radius/full`,`10 × 10`]]}),`
`,(0,T.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,T.jsx)(t.p,{children:`135 variants: Status (5) × Style (3) × Type (3) × Size (3). No interactive states — badges are static.`}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(s,{of:S}),`
`,(0,T.jsx)(t.h2,{id:`icons`,children:`Icons`}),`
`,(0,T.jsxs)(t.p,{children:[`The leading icon (default `,(0,T.jsx)(t.code,{children:`Icon/feedback/star`}),`) and dismiss icon (`,(0,T.jsx)(t.code,{children:`Icon/action/close`}),`) render at 12px at Size=Md. Turn them on with Has leading icon and Is dismissible.`]}),`
`,(0,T.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsx)(t.li,{children:`Static badges have no focusable states, so they never add stray tab stops.`}),`
`,(0,T.jsx)(t.li,{children:`Each status color maps to one meaning.`}),`
`,(0,T.jsx)(t.li,{children:`Text badges carry their meaning in the label, not in color alone.`}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsx)(t.li,{children:`A static badge is not interactive — don't give it a button role.`}),`
`,(0,T.jsx)(t.li,{children:`Dot badges have no text: expose the status they signal on the element they annotate, so meaning never relies on color alone.`}),`
`,(0,T.jsx)(t.li,{children:`The dismiss control needs its own accessible name and must be separately focusable.`}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,T.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves focus to the dismiss control (dismissible badges only)`],[`Shift + Tab`,`Moves focus to the previous focusable element`]]})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T,E;function D(){return(D=e((()=>{T=t(),r(),l(),u(),m(),E=[[`Success`,`surface/bg/success/strong`,`surface/bg/success`,`border/success`,`text/success`],[`Warning`,`surface/bg/warning/strong`,`surface/bg/warning`,`border/warning`,`text/warning`],[`Error`,`interactive/bg/danger/default`,`surface/bg/danger`,`border/interactive/error`,`text/danger`],[`Info`,`surface/bg/info/strong`,`surface/bg/info`,`border/info`,`text/info`],[`Neutral`,`surface/bg/neutral/strong`,`surface/bg/neutral`,`border/neutral`,`text/neutral`]].flatMap(([e,t,n,r,i])=>[[`${e} · Filled`,t,`text/inverse`,`—`],[`${e} · Outlined`,`—`,i,r],[`${e} · Subtle`,n,i,`—`]])})))()}D();export{E as COLOR_ROWS,w as default};