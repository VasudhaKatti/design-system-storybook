import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./DatePicker.stories-CyokezEg.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,(0,y.jsx)(c,{of:g}),`
`,(0,y.jsx)(o,{}),`
`,(0,y.jsx)(i,{children:`A single component covering single-date, date-range and date + time selection, with the calendar panel shown on demand.`}),`
`,(0,y.jsx)(s,{of:f}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Date field(s)`}),` — every field carries a trailing calendar icon, never leading. A range field renders two side by side sharing one popover.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Presets`}),` — a side list next to the calendar.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Calendar`}),` — month grid(s) with Default, Selected, In-range and Today day cells.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Footer actions`}),` — Clear / Cancel / Apply, so a stray click never commits a half-made range selection.`]}),`
`]}),`
`,(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(s,{of:p}),`
`,(0,y.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,y.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,y.jsx)(t.p,{children:`21 variants: Type (Single / Range / DateTime) × State (Default / Hover / Focused / Filled / Disabled / Read-only / Error).`}),`
`,(0,y.jsx)(s,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`token-map`,children:`Token map`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`color/field/border/focused`}),` — Single / Focused field border. The `,(0,y.jsx)(t.code,{children:`component.date-picker`}),` collection holds `,(0,y.jsx)(t.code,{children:`color/field/border/{default|hover|focused|disabled|read-only|error}`}),`, `,(0,y.jsx)(t.code,{children:`color/field/text/error`}),`, `,(0,y.jsx)(t.code,{children:`color/field/icon/error`}),`, `,(0,y.jsx)(t.code,{children:`color/calendar/border`}),`, and equivalents for the calendar day-cell states.`]}),`
`,(0,y.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`The month grid always renders 42 cells (6 full weeks) so grid height never jumps between months.`}),`
`,(0,y.jsx)(t.li,{children:`Range selection: the first click sets the start, the second sets the end, a third click starts a new range; clicking before the current start moves the start instead of erroring.`}),`
`,(0,y.jsx)(t.li,{children:`Arrow keys move focus day-to-day (← → ±1, ↑ ↓ ±7); Enter / Space selects; Escape closes without committing.`}),`
`,(0,y.jsx)(t.li,{children:`Each day announces weekday, full date and active state to assistive tech.`}),`
`]}),`
`,(0,y.jsx)(s,{of:m})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),l(),h()})))()}b();export{v as default};