import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b,u as x}from"./Breadcrumb.stories-DDEfJmZ_.js";function S(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,(0,w.jsx)(c,{of:b}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(i,{children:`A breadcrumb shows where the current page sits in a content hierarchy and links back to each parent level.`}),`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(a,{of:g}),`
`,(0,w.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,w.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,w.jsx)(t.p,{children:`Breadcrumbs are secondary navigation. They show the user's current position in a hierarchy and give one-click access to every ancestor level.`}),`
`,(0,w.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(s,{of:h}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`To show the user's position within a content hierarchy.`}),`
`,(0,w.jsx)(t.li,{children:`To give quick, one-click navigation back to parent levels.`}),`
`]}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`As the primary navigation of the app.`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,w.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,w.jsxs)(t.ol,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Item (link)`}),` — a clickable ancestor level.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Separator`}),` — a decorative divider between items (chevron or slash).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Collapse trigger`}),` (optional) — an ellipsis that reveals hidden middle items.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Current page`}),` — the final item; the active location, not interactive.`]}),`
`]}),`
`,(0,w.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,w.jsx)(t.p,{children:`Items and separators sit on one horizontal line, with equal spacing around each separator. Use one separator style for the whole trail.`}),`
`,(0,w.jsx)(s,{of:y}),`
`,(0,w.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,w.jsx)(t.p,{children:`The trail never wraps and never causes horizontal page scroll. On small screens, collapse it to the root and the current page.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,w.jsx)(t.p,{children:(0,w.jsx)(t.strong,{children:`Item labels`})}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`Each item except the last names and links to its parent level.`}),`
`,(0,w.jsx)(t.li,{children:`Long labels truncate with an ellipsis; the full label stays available in a tooltip.`}),`
`]}),`
`,(0,w.jsxs)(t.p,{children:[(0,w.jsx)(t.strong,{children:`Current page`}),` — the final item names the page the user is on.`]}),`
`,(0,w.jsxs)(t.p,{children:[(0,w.jsx)(t.strong,{children:`Overflow content`}),` — When the trail has more items than maxItems, the middle items collapse behind the ellipsis trigger. The root and the current page always stay visible.`]}),`
`,(0,w.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,w.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Link`}),` — Default, Hover (underline), Focused (3px focus ring) and Disabled (rare: an ancestor with no valid target).`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Current`}),` — Default only; never interactive.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Collapse trigger`}),` — Default, Hover and Focused.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Separators`}),` have no states.`]}),`
`]}),`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,w.jsxs)(t.p,{children:[(0,w.jsx)(t.strong,{children:`Mouse`}),` — Clicking a link goes to that level. Clicking the collapse trigger reveals the hidden items. The current page and separators do nothing.`]}),`
`,(0,w.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves focus to the next link, left to right`],[`Enter`,`Opens the collapse trigger`],[`Space`,`Opens the collapse trigger`]]}),`
`,(0,w.jsx)(t.p,{children:`The current page and separators are skipped.`}),`
`,(0,w.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,w.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,w.jsx)(d,{head:[`Type · State`,`Label`,`Icon`,`Focus ring`],rows:[[`Link · Default`,`text/link`,`icon/default`,`—`],[`Link · Hover`,`text/link + underline`,`icon/default`,`—`],[`Link · Focused`,`text/link + underline`,`icon/default`,`border/interactive/focus (3px)`],[`Link · Disabled`,`text/disabled`,`—`,`—`],[`Current · Default`,`text/primary`,`icon/default`,`—`],[`Collapse · Default`,`—`,`icon/subtle`,`—`],[`Collapse · Hover`,`—`,`icon/default`,`—`],[`Collapse · Focused`,`—`,`icon/default`,`border/interactive/focus (3px)`],[`Separator · Slash`,`text/secondary`,`—`,`—`],[`Separator · Chevron`,`—`,`icon/subtle`,`—`]]}),`
`,(0,w.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,w.jsx)(d,{head:[`Element`,`Tokens`,`Rendered size`],plain:[2],rows:[[`Item label and slash`,`text-style/label/sm/{family, weight, size}`,`11px`]]}),`
`,(0,w.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,w.jsx)(d,{head:[`Property`,`Value`],rows:[[`Item height`,`24`],[`Item padding`,`space/inset/xs · 4`],[`Icon–label gap`,`space/inline/xs`],[`Focus ring radius`,`radius/sm`],[`Leading icon`,`Icon/nav/home/16 · 16px`],[`Separator`,`Slash 5 × 16 · Chevron 16 × 16`]]}),`
`,(0,w.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,w.jsx)(t.p,{children:`BreadcrumbItem has 8 variants: Link (Default, Hover, Focused, Disabled), Current (Default) and Collapse (Default, Hover, Focused). Separator has 2 (Slash, Chevron).`}),`
`,(0,w.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`A Focused state with a 3px ring on links and the collapse trigger.`}),`
`,(0,w.jsx)(t.li,{children:`Hover adds an underline, so the link affordance doesn't rely on color alone.`}),`
`,(0,w.jsxs)(t.li,{children:[`The current page is styled differently from links (`,(0,w.jsx)(t.code,{children:`text/primary`}),`, no underline).`]}),`
`,(0,w.jsx)(t.li,{children:`Items are 24px tall — meeting the 24×24px AA target minimum (WCAG 2.5.8).`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[`Wrap the trail in a `,(0,w.jsx)(t.code,{children:`<nav>`}),` landmark with `,(0,w.jsx)(t.code,{children:`aria-label="Breadcrumb"`}),`, containing an ordered list (`,(0,w.jsx)(t.code,{children:`<ol>`}),`).`]}),`
`,(0,w.jsxs)(t.li,{children:[`Each ancestor is an `,(0,w.jsx)(t.code,{children:`<a>`}),` inside an `,(0,w.jsx)(t.code,{children:`<li>`}),`.`]}),`
`,(0,w.jsxs)(t.li,{children:[`The current page is not a link and carries `,(0,w.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,w.jsxs)(t.li,{children:[`Separators are decorative: `,(0,w.jsx)(t.code,{children:`aria-hidden="true"`}),`, not focusable, not clickable.`]}),`
`,(0,w.jsx)(t.li,{children:`The collapse trigger is keyboard-operable and reveals the hidden items.`}),`
`,(0,w.jsx)(t.li,{children:`Truncated labels keep their full text available via a title or tooltip.`}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,w.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves focus to the next link, left to right`],[`Shift + Tab`,`Moves focus to the previous link`],[`Enter`,`Opens the collapse trigger`],[`Space`,`Opens the collapse trigger`]]}),`
`,(0,w.jsx)(s,{of:_}),`
`,(0,w.jsx)(t.p,{children:`Items and the collapse trigger are 24px tall, meeting the AA minimum but below the 44×44px touch target in the component rules — pad the hit area on touch screens.`})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=t(),r(),l(),u(),x()})))()}T();export{C as default};