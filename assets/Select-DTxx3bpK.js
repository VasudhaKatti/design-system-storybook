import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b,u as x}from"./Select.stories-DWf8N5H7.js";function S(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,(0,w.jsx)(c,{of:y}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(i,{children:`A dropdown is a select control: a trigger field that opens a menu of options.`}),`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(a,{of:g}),`
`,(0,w.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,w.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,w.jsx)(t.p,{children:`Dropdown is built from three components: DropdownTrigger (the field), DropdownMenu (the option list, made of List item instances) and Dropdown (the two combined, collapsed or expanded).`}),`
`,(0,w.jsx)(t.h3,{id:`patterns`,children:`Patterns`}),`
`,(0,w.jsx)(t.p,{children:`These are example compositions on the Figma page, built from the trigger and menu — not variants of Dropdown.`}),`
`,(0,w.jsx)(s,{of:_}),`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(s,{of:b}),`
`,(0,w.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,w.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,w.jsxs)(t.ol,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Value`}),` — the selected option, or placeholder text.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Chevron`}),` — points down when closed and rotates 180° when open.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Menu`}),` — the option-list surface.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Option`}),` — a List item instance.`]}),`
`]}),`
`,(0,w.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,w.jsx)(t.p,{children:`The trigger is 320px wide at every size; the menu opens below it at the same width.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Value and placeholder`}),` — shows the selected option, or placeholder text ("Select an option") when nothing is selected.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Menu messages`}),` — Loading shows a loading message with a loading icon; Empty shows "No results found".`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,w.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Trigger`}),` — Default, Hover, Focused, Disabled, Error and Read-only (no chevron).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Expanded`}),` — the trigger takes the focus border and the chevron rotates 180°.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Menu`}),` — Default, Loading and Empty.`]}),`
`]}),`
`,(0,w.jsx)(s,{of:h}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`?path=/docs/components-list-item--docs`,children:`List item`}),` — each menu option is a List item instance.`]}),`
`]}),`
`,(0,w.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,w.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,w.jsx)(d,{head:[`Trigger state`,`Fill`,`Border`,`Value text`],rows:[[`Default`,`surface/bg/elevated`,`border/interactive/default`,`text/placeholder`],[`Hover`,`surface/bg/elevated`,`border/interactive/hover`,`text/placeholder`],[`Focused`,`surface/bg/elevated`,`border/interactive/focus`,`text/placeholder`],[`Disabled`,`surface/bg/subtle`,`border/interactive/disabled`,`text/disabled`],[`Error`,`surface/bg/elevated`,`border/interactive/error`,`text/placeholder`],[`Read-only`,`interactive/bg/readonly`,`interactive/border/readonly`,`interactive/fg/readonly`]]}),`
`,(0,w.jsxs)(t.p,{children:[`The chevron uses `,(0,w.jsx)(t.code,{children:`icon/color/default`}),`; Read-only has no chevron. The menu uses `,(0,w.jsx)(t.code,{children:`surface/bg/elevated`}),`, `,(0,w.jsx)(t.code,{children:`border/default`}),`, and `,(0,w.jsx)(t.code,{children:`text/secondary`}),` for group labels and messages.`]}),`
`,(0,w.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,w.jsx)(d,{head:[`Element`,`Token`,`Rendered size`],plain:[2],rows:[[`Trigger value`,`typography/size/md (primitive)`,`14px`],[`Group label`,`—`,`11px`]]}),`
`,(0,w.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,w.jsx)(d,{head:[`Property`,`Value`],rows:[[`Trigger height`,`size/control/sm · md · lg — 32 / 40 / 48`],[`Trigger width`,`320`],[`Trigger padding`,`space/inset/sm · 8`],[`Trigger radius`,`radius/control · 6`],[`Chevron`,`Icon/nav/chevron-down/16`],[`Menu radius`,`radius/surface · 8`]]}),`
`,(0,w.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,w.jsx)(t.p,{children:`DropdownTrigger — 21 variants: Size (3) × State (6) collapsed, plus one Expanded variant per size. DropdownMenu — 3 (Default, Loading, Empty). Dropdown — 6 (Size × Collapsed / Expanded).`}),`
`,(0,w.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`A Focused state with a focus border on the trigger.`}),`
`,(0,w.jsx)(t.li,{children:`Disabled, Error and Read-only trigger states.`}),`
`,(0,w.jsx)(t.li,{children:`Loading and Empty menu states with text messages.`}),`
`,(0,w.jsx)(t.li,{children:`Trigger heights of 32, 40 and 48px — all above the 24×24px AA target minimum (WCAG 2.5.8).`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`Placeholder text must not replace a visible label — pair the dropdown with a label.`}),`
`,(0,w.jsxs)(t.li,{children:[`In the Error state, give a text error message, not just a red border — and set `,(0,w.jsx)(t.code,{children:`aria-invalid`}),`.`]}),`
`,(0,w.jsx)(t.li,{children:`Disabled dropdowns must not receive keyboard focus.`}),`
`,(0,w.jsx)(t.li,{children:`The dropdown must be fully operable by keyboard.`}),`
`]}),`
`,(0,w.jsx)(s,{of:m})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=t(),r(),l(),u(),x()})))()}T();export{C as default};