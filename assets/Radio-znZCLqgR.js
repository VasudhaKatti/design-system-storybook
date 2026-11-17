import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./Radio.stories-BfsdF7OA.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,(0,S.jsx)(c,{of:v}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(i,{children:`A radio button lets users pick exactly one option from a set — shown on its own, as a labeled field, or in a titled group.`}),`
`,(0,S.jsx)(s,{of:y}),`
`,(0,S.jsx)(a,{of:y}),`
`,(0,S.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsx)(t.p,{children:`Radio is built as three layered components, from atom to organism. Only one radio in a group can be selected at a time.`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioControl`}),` — the circle alone: outer ring and inner dot. No label.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioField`}),` — a control with its value text and optional error or warning row.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioGroup`}),` — a group label with RadioFields, vertical or horizontal.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,S.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Control`}),` — outer circle, inner dot when selected, focus ring when focused.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Value`}),` — the option's own text.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Status icon`}),` — error or warning icon, shown in the Invalid and Warning states.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Message`}),` — the error or warning text.`]}),`
`]}),`
`,(0,S.jsx)(t.p,{children:`In a RadioGroup, a group label sits above the fields.`}),`
`,(0,S.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Group label`}),` — required on every RadioGroup; names the choice being made.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Value`}),` — the text of each option.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Error and warning messages`}),` — text with a status icon, shown in the Invalid and Warning states.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,S.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,S.jsx)(t.p,{children:`Selecting a radio clears the other radios in its group. Read-only only ever shows an option that's already selected — it displays a prior choice, so there is no read-only radio with nothing selected.`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioControl`}),` — Enabled, Hovered, Focused, Pressed, Disabled, Skeleton, Read-Only, Invalid, Warning; each Selected or not.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioField`}),` — Enabled, Focused, Invalid, Warning, Read-Only, Disabled, Skeleton.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`RadioGroup`}),` — Enabled, Read-Only, Invalid, Warning.`]}),`
`]}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`?path=/docs/components-list-item--docs`,children:`List item`}),` — uses RadioControl as its control for single-select lists.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`?path=/docs/components-checkbox--docs`,children:`Checkbox`}),` — the equivalent control for multi-select lists.`]}),`
`]}),`
`,(0,S.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,S.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,S.jsxs)(t.p,{children:[`RadioControl tokens per state, from the `,(0,S.jsx)(t.code,{children:`component.radio`}),` collection.`]}),`
`,(0,S.jsx)(d,{head:[`State`,`Border`,`Dot`],rows:[`enabled`,`hovered`,`focused`,`pressed`,`disabled`,`skeleton`,`read-only`,`invalid`,`warning`].map(e=>[e[0].toUpperCase()+e.slice(1),`color/control/border/${e}`,e===`skeleton`?`color/control/border/skeleton`:`color/control/dot/${e}`])}),`
`,(0,S.jsxs)(t.p,{children:[`Focused adds a ring bound to `,(0,S.jsx)(t.code,{children:`color/focus-ring`}),`.`]}),`
`,(0,S.jsx)(d,{head:[`Element`,`Token`],rows:[[`Group label`,`color/label/enabled`],[`Value`,`color/value/enabled`],[`Value · Disabled`,`color/value/disabled`],[`Error message`,`color/error`],[`Warning message`,`color/warning`]]}),`
`,(0,S.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,S.jsx)(d,{head:[`Element`,`Rendered size`],plain:[1],rows:[[`Value`,`13px`],[`Group label`,`12px`],[`Error and warning messages`,`12px`]]}),`
`,(0,S.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,S.jsx)(d,{head:[`Property`,`Value`],rows:[[`RadioControl frame`,`28 × 28`],[`Border width`,`border/width (component.radio)`],[`Field gap`,`space/gap/items · 8`],[`Disabled`,`Control opacity 45% · field opacity 60%`]]}),`
`,(0,S.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,S.jsx)(t.p,{children:`RadioControl — 17 variants: State (9) × Selected (2), minus Read-Only unselected. RadioField — 14: State (7) × Position (2). RadioGroup — 8: State (4) × Horizontal (2).`}),`
`,(0,S.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`A Focused state with a focus ring on the control.`}),`
`,(0,S.jsx)(t.li,{children:`Invalid and Warning states with a text message and icon, not color alone.`}),`
`,(0,S.jsx)(t.li,{children:`Read-Only and Disabled states.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`Each option uses `,(0,S.jsx)(t.code,{children:`role="radio"`}),` (or a native radio) with `,(0,S.jsx)(t.code,{children:`aria-checked`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Wrap the options in `,(0,S.jsx)(t.code,{children:`role="radiogroup"`}),`, labelled by the group label.`]}),`
`,(0,S.jsx)(t.li,{children:`Only one option in a group can be checked.`}),`
`,(0,S.jsx)(t.li,{children:`Disabled radios must not receive keyboard focus.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,S.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`↑ ↓`,`Moves between options in the group`],[`← →`,`Moves between options in the group`]]}),`
`,(0,S.jsx)(s,{of:f})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=t(),r(),l(),u(),p()})))()}C();export{x as default};