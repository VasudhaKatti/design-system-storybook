import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b,u as x}from"./Checkbox.stories-BxOKwdsV.js";function S(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,(0,w.jsx)(c,{of:b}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(i,{children:`A checkbox is a square control that users select or clear — used on its own, as a labeled field, or as a titled group of fields.`}),`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,w.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,w.jsx)(t.p,{children:`Checkbox is built as three layered components, from atom to organism:`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`CheckboxControl`}),` — the box alone: border, fill, focus ring and check or dash icon. No label.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`CheckboxField`}),` — label, control, value text, and optional description, helper and error or warning messages.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`CheckboxGroup`}),` — a group label with CheckboxFields, vertical or horizontal.`]}),`
`]}),`
`,(0,w.jsx)(t.h3,{id:`selection-types`,children:`Selection types`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,w.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,w.jsxs)(t.ol,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Label`}),` — the field label (Has label).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Description`}),` (optional) — text below the label (Has description).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Control`}),` — a CheckboxControl: box, border, focus ring, check or dash icon.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Value`}),` — the checkbox's own text, describing what checking it means.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Error or warning message`}),` — icon and text, shown in the Invalid and Warning states.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Helper text`}),` (optional) — supporting text below the field (Has helper).`]}),`
`]}),`
`,(0,w.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,w.jsx)(s,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Label`}),` — the field or group title.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Value`}),` — the checkbox's own text; describes what checking it means.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Description and helper text`}),` — optional supporting text; description sits under the label, helper text under the field.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Error and warning messages`}),` — shown as text with a status icon, so validation never relies on color alone.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Overflow`}),` — label and value text wrap.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,w.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,w.jsx)(t.p,{children:`Each field has a selection type — Unselected, Selected or Indeterminate — and a field state. Invalid switches the control to its Error type.`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Enabled`}),` — resting.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Focus`}),` — keyboard focus; the control shows a 3px focus ring (`,(0,w.jsx)(t.code,{children:`border/interactive/focus`}),`).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Invalid`}),` — error border and an error message.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Warning`}),` — a warning message.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Read-only`}),` — value text is dimmed and the value can't be changed.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Disabled`}),` — label, value and box are dimmed; the field is non-interactive.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Skeleton`}),` — placeholder shapes while content loads.`]}),`
`]}),`
`,(0,w.jsx)(t.p,{children:`CheckboxControl adds Hovered and Pressed pointer states.`}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(s,{of:_}),`
`,(0,w.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`?path=/docs/components-list-item--docs`,children:`List item`}),` — uses CheckboxControl as its leading or trailing control for multi-select lists.`]}),`
`]}),`
`,(0,w.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,w.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,w.jsx)(t.p,{children:`CheckboxControl box fill and border per type and state (Size=Md).`}),`
`,(0,w.jsx)(d,{head:[`Type · State`,`Box fill`,`Border`],rows:[[`Unselected · Enabled`,`surface/bg/default`,`border/interactive/default`],[`Unselected · Hovered / Pressed`,`surface/bg/default`,`border/interactive/hover`],[`Unselected · Focused`,`surface/bg/default`,`border/interactive/focus`],[`Unselected · Disabled`,`surface/bg/subtle`,`border/interactive/disabled`],[`Selected / Indeterminate · Enabled, Focused`,`interactive/bg/primary/default`,`interactive/bg/primary/default`],[`Selected / Indeterminate · Hovered`,`interactive/bg/primary/hover`,`interactive/bg/primary/hover`],[`Selected / Indeterminate · Pressed`,`interactive/bg/primary/pressed`,`interactive/bg/primary/pressed`],[`Selected / Indeterminate · Disabled`,`interactive/bg/primary/disabled`,`interactive/bg/primary/disabled`],[`Error-Unselected · Enabled → Focused`,`surface/bg/default`,`border/interactive/error`],[`Error-Selected · Enabled, Focused`,`interactive/bg/danger/default`,`border/interactive/error`],[`Error-Selected · Hovered`,`interactive/bg/danger/hover`,`border/interactive/error`],[`Error-Selected · Pressed`,`interactive/bg/danger/pressed`,`border/interactive/error`],[`Error-* · Disabled`,`surface/bg/subtle or interactive/bg/danger/disabled`,`border/interactive/disabled`]]}),`
`,(0,w.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,w.jsx)(t.p,{children:`CheckboxControl: Size (3) × Type (6) × State (5) — 90 variants. CheckboxField: Type (3) × State (6) — 18. CheckboxGroup: State (4) × Orientation (2) — 8.`}),`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`A Focus state with a 3px ring outside the box, on every type.`}),`
`,(0,w.jsx)(t.li,{children:`An Indeterminate type for mixed selection.`}),`
`,(0,w.jsx)(t.li,{children:`Error and warning messages as text with an icon, not color alone.`}),`
`,(0,w.jsx)(t.li,{children:`Disabled and Read-only states for the field.`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[`Use `,(0,w.jsx)(t.code,{children:`role="checkbox"`}),` (or a native checkbox) with `,(0,w.jsx)(t.code,{children:`aria-checked`}),` — `,(0,w.jsx)(t.code,{children:`"mixed"`}),` for Indeterminate.`]}),`
`,(0,w.jsxs)(t.li,{children:[`Group related checkboxes with `,(0,w.jsx)(t.code,{children:`role="group"`}),`, labelled by the group label.`]}),`
`,(0,w.jsxs)(t.li,{children:[`Set `,(0,w.jsx)(t.code,{children:`aria-invalid`}),` on fields in the Invalid state and associate the error message with the control.`]}),`
`,(0,w.jsx)(t.li,{children:`Disabled checkboxes must not receive keyboard focus.`}),`
`,(0,w.jsx)(t.li,{children:`Make the value text part of the clickable area — the box alone is 16–24px.`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,w.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves focus to the next checkbox`],[`Shift + Tab`,`Moves focus to the previous checkbox`]]}),`
`,(0,w.jsx)(s,{of:y})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=t(),r(),l(),u(),x()})))()}T();export{C as default};