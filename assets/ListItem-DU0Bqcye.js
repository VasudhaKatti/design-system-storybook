import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./ListItem.stories-DRfaKMfW.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(c,{of:f}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(i,{children:`A list item is a single row in a list, menu or file browser that shows a headline and, depending on its type, an icon, supporting text, metadata or a selection control.`}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsx)(t.p,{children:`List items are the rows that make up a list. Each type has a fixed set of content, so choose the type that matches what the row represents. Any type can also hold a Checkbox or Radio at its start or end, for multi-select or single-select lists.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`To show a vertical set of related items — Default.`}),`
`,(0,C.jsx)(t.li,{children:`To list actions or destinations in a menu — Menu.`}),`
`,(0,C.jsx)(t.li,{children:`To show files with an icon, details and metadata — File.`}),`
`,(0,C.jsx)(t.li,{children:`To show a setting with a short description — Setting.`}),`
`,(0,C.jsx)(t.li,{children:`To let users pick one or several items — add a Radio or Checkbox as a leading or trailing control.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,C.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Container`}),` — the row's visual container; carries state colors, padding and radius.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Leading icon`}),` — File and Setting types only.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Headline`}),` — required title text, on every type.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Supporting text`}),` — File and Setting types only.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Metadata`}),` — trailing text such as a count or file size; File type only.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,C.jsx)(t.p,{children:`Each size has its own minimum height, padding, gap, icon size and type size.`}),`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,C.jsx)(s,{of:b}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Headline`}),` — required on every type and always visible.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Supporting text`}),` — secondary detail under the headline; File and Setting types.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Metadata`}),` — short trailing text such as a timestamp, size or count; File type.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,C.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,C.jsx)(t.p,{children:`Items start unselected (Default). Selected is a persistent highlight for chosen items; Activated is a persistent indicator for the current navigation location. Both are token swaps on the container.`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Hover and Pressed`}),` — pointer feedback.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Focused`}),` — keyboard focus, shown with a 2px border (`,(0,C.jsx)(t.code,{children:`color/border/focused`}),`).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Disabled`}),` — non-interactive.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Dragged`}),` — the item is being moved; 2px border (`,(0,C.jsx)(t.code,{children:`color/border/dragged`}),`).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Skeleton`}),` — placeholder shapes while content loads.`]}),`
`]}),`
`,(0,C.jsx)(s,{of:y}),`
`,(0,C.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`Mouse`}),` — hovering and pressing a row show the Hover and Pressed states. A leading or trailing control is a real Checkbox or Radio and keeps its own interaction.`]}),`
`,(0,C.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`?path=/docs/components-checkbox--docs`,children:`Checkbox`}),` — the box used as a leading or trailing control in multi-select lists.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`?path=/docs/components-radio--docs`,children:`Radio`}),` — the radio circle used as a control in single-select lists.`]}),`
`]}),`
`,(0,C.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,C.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,C.jsxs)(t.p,{children:[`Each state aliases its own `,(0,C.jsx)(t.code,{children:`component.list-item`}),` token.`]}),`
`,(0,C.jsx)(d,{head:[`State`,`Background`,`Headline`,`Supporting text`,`Border`],rows:[`default`,`hover`,`pressed`,`focused`,`disabled`,`selected`,`activated`,`dragged`].map(e=>[e[0].toUpperCase()+e.slice(1),`color/bg/${e}`,`color/label/${e}`,`color/supporting-text/${e}`,e===`focused`||e===`dragged`?`color/border/${e} (2px)`:`—`])}),`
`,(0,C.jsxs)(t.p,{children:[`Icon color follows the same pattern: `,(0,C.jsx)(t.code,{children:`color/icon/{state}`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,C.jsx)(d,{head:[`Size`,`Headline`,`Supporting text · metadata`],plain:[1,2],rows:[[`Sm`,`12px`,`11px`],[`Md`,`13px`,`12px`],[`Lg`,`14px`,`13px`]]}),`
`,(0,C.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,C.jsx)(d,{head:[`Size`,`Min height`,`Padding`,`Gap`,`Radius`,`Leading icon`],rows:[[`Sm`,`size/height/sm · 32`,`space/padding/sm · 8`,`space/gap/sm · 4`,`radius · 6`,`icon/size/sm · 16`],[`Md`,`size/height/md · 40`,`space/padding/md · 12`,`space/gap/md · 8`,`radius · 6`,`icon/size/md · 20`],[`Lg`,`size/height/lg · 48`,`space/padding/lg · 16`,`space/gap/lg · 8`,`radius · 6`,`icon/size/lg · 24`]]}),`
`,(0,C.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,C.jsx)(t.p,{children:`108 variants: Type (4) × State (9) × Size (3).`}),`
`,(0,C.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`A Focused state on every type, with a 2px border bound to `,(0,C.jsx)(t.code,{children:`color/border/focused`}),`.`]}),`
`,(0,C.jsx)(t.li,{children:`Disabled, Selected, Activated, Dragged and Skeleton states, each a token swap on the container.`}),`
`,(0,C.jsx)(t.li,{children:`Selection controls are real Checkbox / Radio instances, so they inherit those components' accessibility.`}),`
`,(0,C.jsx)(t.li,{children:`Minimum heights of 32, 40 and 48px — above the 24×24px target-size minimum (WCAG 2.5.8).`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Use `,(0,C.jsx)(t.code,{children:`role="list"`}),` on the container and `,(0,C.jsx)(t.code,{children:`role="listitem"`}),` on each item.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Expose selection with `,(0,C.jsx)(t.code,{children:`aria-selected`}),`.`]}),`
`,(0,C.jsx)(t.li,{children:`Dragging must have a non-drag alternative.`}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,C.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`↑ ↓`,`Move between items at the same level`],[`Tab`,`Move between interactive elements`]]}),`
`,(0,C.jsx)(s,{of:m})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),l(),u(),h()})))()}w();export{S as default};