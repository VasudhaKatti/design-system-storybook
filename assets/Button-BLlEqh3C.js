import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./Button.stories-CtkZP_2R.js";function b(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,(0,S.jsx)(c,{of:v}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(i,{children:`A button triggers an immediate action, such as submit, confirm, open or delete.`}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsx)(t.p,{children:`A button triggers an immediate action in the current context — submitting a form, confirming a choice, opening something or deleting an item. Four emphasis levels (Primary, Secondary, Ghost, Danger) keep the most important action on a screen the easiest one to find.`}),`
`,(0,S.jsx)(t.p,{children:`Use buttons for actions only. If activating it takes the user to another page or location, it is navigation and must not be a button.`}),`
`,(0,S.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`To let users submit, confirm, open or delete something immediately.`}),`
`,(0,S.jsxs)(t.li,{children:[`To mark the single most important action in a context — `,(0,S.jsx)(t.strong,{children:`Primary`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`To offer supporting actions of lower weight next to a primary one — `,(0,S.jsx)(t.strong,{children:`Secondary`}),` or `,(0,S.jsx)(t.strong,{children:`Ghost`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`To trigger destructive or irreversible actions such as delete or remove — `,(0,S.jsx)(t.strong,{children:`Danger`}),`.`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`When the action navigates to another page or location — use a text link instead.`}),`
`,(0,S.jsx)(t.li,{children:`Don't use Danger styling for actions that aren't destructive — use Primary, Secondary or Ghost.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,S.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Container`}),` — the interactive wrapper; owns variant, size and state.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Icon`}),` (optional) — leading or trailing, never both. Vertically centred with the label. Decorative icons are hidden from assistive technology.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Label`}),` — text describing the action. Required unless the button is icon-only.`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,S.jsx)(t.p,{children:`Every variant shares the same size scale. Each size defines its own height, horizontal padding, font size and icon size.`}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,S.jsx)(t.p,{children:`Content is always centred horizontally and vertically. The icon sits on the side set by the icon property and is vertically centred with the label; the icon–label gap is the same across variants.`}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,S.jsx)(t.p,{children:`Buttons hug their content within the size's padding and are not stretched.`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Label`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`Use a verb that describes the action, e.g. Save, Delete, Open.`}),`
`,(0,S.jsx)(t.li,{children:`Required on every button unless it is icon-only.`}),`
`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Icon`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`Optional — leading or trailing, never both.`}),`
`,(0,S.jsx)(t.li,{children:`Decorative icons must be hidden from assistive technology.`}),`
`,(0,S.jsxs)(t.li,{children:[`Icon-only buttons must have an accessible label (`,(0,S.jsx)(t.code,{children:`aria-label`}),`).`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,S.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,S.jsx)(t.p,{children:`A button has no persistent on/off state: it runs its action and returns to rest. Every variant starts in the Default state.`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Default`}),` — resting.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Hover`}),` — the pointer is over the button.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Pressed`}),` — during a press; gives immediate visual feedback so the press registers.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Focused`}),` — keyboard focus; always shows a visible focus indicator.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Disabled`}),` — non-interactive, with reduced emphasis.`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.strong,{children:`Mouse`}),` — Clicking anywhere on the button runs its action. Disabled buttons ignore clicks.`]}),`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`Keyboard`})}),`
`,(0,S.jsx)(C,{head:[`Key`,`Action`],rows:[[`Tab`,`Moves focus to the button`],[`Enter`,`Activates the button`],[`Space`,`Activates the button`]]}),`
`,(0,S.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,S.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,S.jsx)(t.p,{children:`Each variant and state maps to a semantic interactive token.`}),`
`,(0,S.jsx)(C,{head:[`Variant · State`,`Background`,`Label`,`Border`],rows:D}),`
`,(0,S.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,S.jsx)(t.p,{children:`The label binds all five typography properties (family, weight, size, line height in px, letter spacing) to the label text-style tokens for its size.`}),`
`,(0,S.jsx)(C,{head:[`Size`,`Tokens`,`Rendered size`],rows:[[`Sm`,`text-style/label/sm/{family, weight, size, line-height-px, letter-spacing}`,`11px`],[`Md`,`text-style/label/md/{family, weight, size, line-height-px, letter-spacing}`,`12px`],[`Lg`,`text-style/label/lg/{family, weight, size, line-height-px, letter-spacing}`,`14px`]]}),`
`,(0,S.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,S.jsx)(C,{head:[`Size`,`Min height`,`Horizontal padding`,`Icon–label gap`,`Radius`],rows:[[`Sm`,`size/control/sm · 32`,`space/inline/md · 12`,`space/inline/sm · 8`,`radius/control · 6`],[`Md`,`size/control/md · 40`,`space/inline/lg · 16`,`space/inline/sm · 8`,`radius/control · 6`],[`Lg`,`size/control/lg · 48`,`space/inline/xl · 24`,`space/inline/sm · 8`,`radius/control · 6`]]}),`
`,(0,S.jsx)(t.h3,{id:`radius`,children:`Radius`}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,S.jsx)(t.p,{children:`180 variants: Variant (4) × Size (3) × State (5) × Radius (3). The grid shows Variant × State at Size=Md, Radius=Default.`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(t.h3,{id:`focus`,children:`Focus`}),`
`,(0,S.jsxs)(t.p,{children:[`Every variant's Focused state adds a 3px ring bound to `,(0,S.jsx)(t.code,{children:`border/interactive/focus`}),`.`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`icons`,children:`Icons`}),`
`,(0,S.jsx)(t.p,{children:`Leading and trailing icon slots are 20px at Size=Md, with width bound to an icon size token. Turn them on with Has leading icon / Has trailing icon.`}),`
`,(0,S.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`A Focused state on every variant, with a 3px ring bound to `,(0,S.jsx)(t.code,{children:`border/interactive/focus`}),`.`]}),`
`,(0,S.jsx)(t.li,{children:`A Disabled state on every variant.`}),`
`,(0,S.jsx)(t.li,{children:`Label typography bound to all five label text-style tokens for each size.`}),`
`,(0,S.jsx)(t.li,{children:`Minimum heights of 32, 40 and 48px — all above the 24×24px target-size minimum (WCAG 2.5.8).`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`Use a native `,(0,S.jsx)(t.code,{children:`<button>`}),` element. Default to `,(0,S.jsx)(t.code,{children:`type="button"`}),` to avoid accidental form submits; use `,(0,S.jsx)(t.code,{children:`submit`}),` or `,(0,S.jsx)(t.code,{children:`reset`}),` only when intended.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Disabled: use the `,(0,S.jsx)(t.code,{children:`disabled`}),` attribute or `,(0,S.jsx)(t.code,{children:`aria-disabled="true"`}),`. Disabled buttons must block clicks, keypresses and focus-triggered actions.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Icon-only buttons need an accessible name via `,(0,S.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,S.jsxs)(t.li,{children:[`Decorative icons get `,(0,S.jsx)(t.code,{children:`aria-hidden="true"`}),`.`]}),`
`,(0,S.jsx)(t.li,{children:`Never convey state through color alone.`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,S.jsx)(C,{head:[`Key`,`Action`],rows:[[`Tab`,`Moves focus to the next focusable element`],[`Shift + Tab`,`Moves focus to the previous focusable element`],[`Enter`,`Activates the button`],[`Space`,`Activates the button`]]}),`
`,(0,S.jsx)(t.p,{children:`Keyboard focus must always be visible. Pointer focus may hide the ring (focus-visible only).`}),`
`,(0,S.jsx)(s,{of:u})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S,C,w,T,E,D;function O(){return(O=e((()=>{S=t(),r(),l(),y(),C=({head:e,rows:t})=>(0,S.jsxs)(`table`,{children:[(0,S.jsx)(`thead`,{children:(0,S.jsx)(`tr`,{children:e.map(e=>(0,S.jsx)(`th`,{children:e},e))})}),(0,S.jsx)(`tbody`,{children:t.map((e,t)=>(0,S.jsx)(`tr`,{children:e.map((e,t)=>(0,S.jsx)(`td`,{children:t===0?e:(0,S.jsx)(`code`,{children:e})},t))},t))})]}),w=[`Primary`,`Secondary`,`Ghost`,`Danger`],T=[`Default`,`Hover`,`Pressed`,`Focused`,`Disabled`],E=(e,t)=>t===`Focused`?`border/interactive/focus (3px)`:e===`Secondary`?t===`Default`?`border/interactive/default`:t===`Disabled`?`border/interactive/disabled`:`border/interactive/hover`:`—`,D=w.flatMap(e=>T.map(t=>{let n=`${e.toLowerCase()}/${t.toLowerCase()}`;return[`${e} · ${t}`,`interactive/bg/${n}`,`interactive/fg/${n}`,E(e,t)]}))})))()}O();export{D as COLOR_ROWS,T as STATES,C as Table,w as VARIANTS,E as border,x as default};