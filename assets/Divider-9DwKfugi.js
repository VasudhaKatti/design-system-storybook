import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./Divider.stories-BZX0ntKH.js";function v(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[`
`,(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(o,{}),`
`,(0,b.jsx)(i,{children:`A rule line with five variant axes — Orientation, Style, Size, Color and State.`}),`
`,(0,b.jsx)(s,{of:p}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,b.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,b.jsxs)(t.ol,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Line`}),` — a single line rendered with a stroke, for every Style value.`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:`The root hugs both axes at the Size-driven length (Sm = 24px, Md = 48px) and carries no fill of its own.`}),`
`,(0,b.jsx)(s,{of:m}),`
`,(0,b.jsx)(s,{of:f}),`
`,(0,b.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,b.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,b.jsx)(t.p,{children:`540 variants: Orientation (2) × Style (3) × Size (2) × Color (9) × State (5). The grid is a representative subset: Color × Style at Orientation=Horizontal, Size=Md, State=Default. A mid-grey backdrop is used because Light, Subtle and Transparent are intentionally pale.`}),`
`,(0,b.jsx)(s,{of:_}),`
`,(0,b.jsx)(t.h3,{id:`state`,children:`State`}),`
`,(0,b.jsx)(t.p,{children:`Focused and Selected render at the strong stroke width (2px); Default, Hover and Disabled render at 1px.`}),`
`,(0,b.jsx)(s,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`token-map`,children:`Token map`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`color/dark`}),` — Color=Dark stroke colour. The `,(0,b.jsx)(t.code,{children:`component.divider`}),` collection holds 9 colour variables (each aliasing a semantic border token), 9 colour-opacity values (only Transparent is 0), 5 state stroke widths (Focused / Selected alias the 2px "strong" width, the rest 1px "default"), 5 state opacities (only Disabled is 40) and 2 hug lengths (Sm 24px, Md 48px).`]}),`
`,(0,b.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsx)(t.p,{children:`The divider itself is not clickable — State is a visual signal set by the consumer, not user interaction. A List Item or Tabs component might use State=Selected or Focused to draw a heavier, tinted line next to an active row.`}),`
`,(0,b.jsxs)(t.p,{children:[`Decorative: use `,(0,b.jsx)(t.code,{children:`role="separator"`}),` when the divider is semantically meaningful, otherwise `,(0,b.jsx)(t.code,{children:`aria-hidden="true"`}),`.`]}),`
`,(0,b.jsx)(s,{of:u})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),l(),d()})))()}x();export{y as default};