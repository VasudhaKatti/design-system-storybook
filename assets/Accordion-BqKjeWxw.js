import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./Accordion.stories-P1KoBjcM.js";function b(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,(0,S.jsx)(c,{of:y}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(i,{children:`An accordion is a vertical stack of collapsible sections that condenses long content into scannable headers.`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsx)(t.p,{children:`An accordion condenses long content into scannable headers. Users reveal one or more panels on demand — which also means content stays hidden until they open it.`}),`
`,(0,S.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(s,{of:v}),`
`,(0,S.jsxs)(t.p,{children:[`Single- vs multiple-expand is behavior (`,(0,S.jsx)(t.code,{children:`expandMode`}),`), not a Figma variant. Bordered and Borderless are the Style variant.`]}),`
`,(0,S.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`To condense long content into scannable headers that users open on demand.`}),`
`,(0,S.jsx)(t.li,{children:`For FAQ-style content, where users pick the questions they need.`}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`For primary navigation.`}),`
`,(0,S.jsx)(t.li,{children:`For content users must read in full.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,S.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Header`}),` — a heading element wrapping the trigger button; the whole row is the hit target.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Title`}),` — start-aligned label for the section.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Icon`}),` — chevron showing collapsed or expanded; decorative.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Content panel`}),` — revealed on expand.`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,S.jsx)(t.p,{children:`The title is start-aligned and the icon end-aligned on the same row. The trigger spans the full header width.`}),`
`,(0,S.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,S.jsx)(t.p,{children:`Items stack vertically at full width — never side by side. Spacing between items is consistent; borderless accordions rely on it as their only separator. Avoid nesting accordions; if you must, indent and limit to one level.`}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Title`}),` — wrapped in a heading (h2–h4) that fits the page outline.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Panel content`}),` — every collapsed panel shows its icon, so hidden content always has a visible cue.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,S.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,S.jsx)(t.p,{children:`Items start collapsed (Default). Activating the trigger toggles its own panel; in single-expand mode, opening a panel collapses the one that was open.`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Default`}),` — collapsed, resting.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Hover`}),` — the header background shifts (`,(0,S.jsx)(t.code,{children:`surface/bg/subtle`}),`).`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Focused`}),` — 3px focus ring on the header; never suppressed.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Expanded`}),` — panel visible, chevron rotated 180°.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Disabled`}),` — dimmed, can't change state, skipped in tab order.`]}),`
`]}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.strong,{children:`Mouse`}),` — clicking anywhere in the header toggles the panel.`]}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.strong,{children:`Motion`}),` — panels animate height and opacity (about 200ms, ease-out) and the chevron rotates 0° → 180° in sync. With prefers-reduced-motion, toggling is instant.`]}),`
`,(0,S.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,S.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,S.jsx)(d,{head:[`Style · State`,`Header fill`,`Title`,`Icon`,`Border`],rows:[[`Bordered · Default / Expanded`,`surface/bg/default`,`text/primary`,`icon/default`,`border/strong (bottom, 1px)`],[`Bordered · Hover`,`surface/bg/subtle`,`text/primary`,`icon/default`,`border/strong (bottom, 1px)`],[`Bordered · Focused`,`surface/bg/default`,`text/primary`,`icon/default`,`border/interactive/focus (3px)`],[`Bordered · Disabled`,`surface/bg/default`,`text/disabled`,`icon/subtle`,`border/strong (bottom, 1px)`],[`Borderless · Default / Expanded`,`surface/bg/default`,`text/primary`,`icon/default`,`—`],[`Borderless · Hover`,`surface/bg/subtle`,`text/primary`,`icon/default`,`—`],[`Borderless · Focused`,`surface/bg/default`,`text/primary`,`icon/default`,`border/interactive/focus (3px)`],[`Borderless · Disabled`,`surface/bg/default`,`text/disabled`,`icon/subtle`,`—`]]}),`
`,(0,S.jsxs)(t.p,{children:[`Panel fill `,(0,S.jsx)(t.code,{children:`surface/bg/default`}),`; body text `,(0,S.jsx)(t.code,{children:`text/secondary`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,S.jsx)(d,{head:[`Element`,`Tokens`,`Rendered size`],plain:[2],rows:[[`Title`,`text-style/heading/xs/*`,`14px`],[`Body`,`text-style/body/sm/*`,`12px`]]}),`
`,(0,S.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,S.jsx)(d,{head:[`Property`,`Value`],rows:[[`Header and panel padding (horizontal)`,`space/inset/md · 12`],[`Header and panel padding (vertical)`,`space/inset/sm · 8`],[`Chevron`,`Icon/nav/chevron-down/20 · 20px`],[`Item width`,`360 (fixed)`]]}),`
`,(0,S.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,S.jsx)(t.p,{children:`10 variants: Style (2) × State (5).`}),`
`,(0,S.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`A Focused state with a 3px ring on the header, on both styles.`}),`
`,(0,S.jsx)(t.li,{children:`A chevron on every item, so collapsed panels always have a visible cue.`}),`
`,(0,S.jsx)(t.li,{children:`A Disabled state for triggers that can't change.`}),`
`,(0,S.jsx)(t.li,{children:`A full-width header, so the whole row is the hit target.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`Wrap each trigger `,(0,S.jsx)(t.code,{children:`<button>`}),` in a heading (h2–h4). Never place the button outside the heading.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Set `,(0,S.jsx)(t.code,{children:`aria-expanded`}),` on the trigger and `,(0,S.jsx)(t.code,{children:`aria-controls`}),` pointing to its panel.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Give the panel `,(0,S.jsx)(t.code,{children:`role="region"`}),` and `,(0,S.jsx)(t.code,{children:`aria-labelledby`}),` pointing to the trigger; use the `,(0,S.jsx)(t.code,{children:`hidden`}),` attribute when collapsed.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Mark the chevron `,(0,S.jsx)(t.code,{children:`aria-hidden="true"`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Disabled triggers use `,(0,S.jsx)(t.code,{children:`disabled`}),` and are skipped in tab order.`]}),`
`,(0,S.jsx)(t.li,{children:`Respect prefers-reduced-motion — remove height and rotation animation.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,S.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Enter`,`Toggles the focused panel`],[`Space`,`Toggles the focused panel`],[`Tab`,`Moves between triggers`],[`↓`,`Moves focus to the next trigger`],[`↑`,`Moves focus to the previous trigger`],[`Home`,`Moves focus to the first trigger`],[`End`,`Moves focus to the last trigger`]]}),`
`,(0,S.jsx)(s,{of:m})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=t(),r(),l(),u(),p()})))()}C();export{x as default};