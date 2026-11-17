import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./Avatar.stories-DBHdjWFS.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(c,{of:b}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(i,{children:`An avatar represents a user or entity with an image, an icon or initials, optionally paired with a name and email.`}),`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsx)(t.p,{children:`Avatars represent people and entities at a glance. Use AvatarGlyph on its own, or AvatarIdentity to pair it with a name, email and optional trailing icon.`}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`To represent a person with their photo or initials.`}),`
`,(0,C.jsx)(t.li,{children:`To represent a system account, bot or non-person entity — Icon type.`}),`
`,(0,C.jsx)(t.li,{children:`To identify someone next to their name and email — AvatarIdentity.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,C.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Avatar`}),` — an AvatarGlyph (image, icon or initials).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Name`}),` — the person's or entity's name.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Email`}),` (optional) — secondary line.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Trailing icon`}),` (optional) — e.g. a chevron for a menu.`]}),`
`]}),`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(t.h3,{id:`sizes-and-colors`,children:`Sizes and colors`}),`
`,(0,C.jsx)(t.p,{children:`Derive an initials avatar's color from a hash of the user's name or ID, so the same person always gets the same color.`}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Initials`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`First letter of the first and last name — Jane Doe → JD.`}),`
`,(0,C.jsx)(t.li,{children:`If the initials don't fit, shrink the font to fit rather than clip.`}),`
`]}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`Image`})}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Needs alt text that names the person.`}),`
`,(0,C.jsx)(t.li,{children:`If the image fails to load, fall back to the icon (if configured), then to initials.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,C.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,C.jsxs)(t.p,{children:[`AvatarGlyph is static. AvatarIdentity has interactive states for when it opens a profile card or menu: Default, Hover (`,(0,C.jsx)(t.code,{children:`surface/bg/subtle`}),`), Focused (3px focus ring), Active (pressed), Selected (persistent highlight), Disabled.`]}),`
`,(0,C.jsx)(s,{of:y}),`
`,(0,C.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,C.jsx)(t.p,{children:`An avatar that opens a profile card or menu needs hover and focus states like a button. A purely decorative avatar has no hover styling, so it doesn't look clickable.`}),`
`,(0,C.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`?path=/docs/components-badge--docs`,children:`Badge`}),` — overlay a Dot or Numeric badge on an avatar for notifications. Keep it distinct from a presence dot, which signals identity state rather than action required.`]}),`
`]}),`
`,(0,C.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,C.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,C.jsx)(d,{head:[`AvatarGlyph · Type · Color`,`Background`,`Content`],rows:[...[1,2,3,4,5].map(e=>[`Text · ${e}`,`avatar/bg/${e}`,`text/inverse`]),[`Icon`,`avatar/bg/icon`,`icon/inverse`],[`Image`,`Image fill`,`—`]]}),`
`,(0,C.jsx)(d,{head:[`AvatarIdentity · State`,`Background`,`Name`,`Email`,`Focus ring`],rows:[[`Default`,`—`,`text/primary`,`text/secondary`,`—`],[`Hover`,`surface/bg/subtle`,`text/primary`,`text/secondary`,`—`],[`Focused`,`—`,`text/primary`,`text/secondary`,`border/interactive/focus (3px)`],[`Active`,`interactive/bg/secondary/pressed`,`text/primary`,`text/secondary`,`—`],[`Selected`,`interactive/bg/activated`,`text/primary`,`text/secondary`,`—`],[`Disabled`,`—`,`text/disabled`,`text/disabled`,`—`]]}),`
`,(0,C.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,C.jsx)(d,{head:[`Element`,`Tokens`,`Rendered size`],plain:[2],rows:[[`Initials (Md)`,`text-style/label/md/*`,`12px`],[`Name`,`text-style/label/md/*`,`12px`],[`Email`,`text-style/caption/md/*`,`12px`]]}),`
`,(0,C.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,C.jsx)(d,{head:[`Property`,`Value`],rows:[[`Glyph size`,`size/avatar/sm · 24 · md · 32 · lg · 40`],[`Glyph shape`,`radius/full (circle)`],[`Icon`,`Icon/user/profile/20 · 20px`],[`Identity padding`,`space/inset/xs · 4`],[`Identity gap`,`space/inline/sm · 8`],[`Identity radius`,`radius/md · 6`]]}),`
`,(0,C.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,C.jsx)(t.p,{children:`AvatarGlyph — 21 variants: Text Color (5) × Size (3); Icon and Image at Color 1 × Size (3). AvatarIdentity — 6 states.`}),`
`,(0,C.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`A Focused state with a 3px ring on AvatarIdentity.`}),`
`,(0,C.jsx)(t.li,{children:`Hover, Active, Selected and Disabled states for interactive avatars.`}),`
`,(0,C.jsx)(t.li,{children:`Sizes of 24, 32 and 40px — the smallest meets the 24×24px AA target minimum (WCAG 2.5.8).`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Image avatars need alt text that names the person — not "avatar" or "user photo".`}),`
`,(0,C.jsxs)(t.li,{children:[`Icon and initials avatars need an accessible name (`,(0,C.jsx)(t.code,{children:`aria-label`}),`); two letters alone aren't enough context.`]}),`
`,(0,C.jsx)(t.li,{children:`Interactive avatars need hover and focus states like a button; decorative avatars have none.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,C.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves focus to an interactive AvatarIdentity`],[`Shift + Tab`,`Moves focus to the previous focusable element`]]}),`
`,(0,C.jsx)(s,{of:p})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),l(),u(),h()})))()}w();export{S as default};