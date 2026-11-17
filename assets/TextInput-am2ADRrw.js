import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./TextInput.stories-DC2OIMzf.js";function x(e){let t={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(i,{children:`Captures a single line of user-entered text for form submission, search, or filtering.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,C.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,C.jsx)(s,{of:y}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Label`}),` — persistent, always paired with the field (with an optional required indicator).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Container`}),` — holds the value/placeholder text; visual treatment set by type (Outlined / Filled / Borderless / Inline).`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Helper text`}),` — optional supporting or validation message below the field.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`content-guidance`,children:`Content guidance`}),`
`,(0,C.jsx)(t.p,{children:`Whichever container type is chosen, the focus state must stay clearly visible — even Borderless needs a visible ring on focus. Validate on blur, not just at submit; clear the error the moment the value becomes valid again.`}),`
`,(0,C.jsx)(s,{of:u}),`
`,(0,C.jsx)(t.h2,{id:`dos-and-donts`,children:`Do's and don'ts`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Show the clear icon only once the field has content; if it would collide with a suffix icon, the clear icon takes precedence while content is present.`}),`
`,(0,C.jsx)(t.li,{children:`Match the mobile keyboard type to expected content.`}),`
`,(0,C.jsx)(t.li,{children:`Associate error/helper text via the field's accessible description so screen readers announce it on focus, not just visually beside the field.`}),`
`]}),`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,C.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,C.jsx)(t.p,{children:`60 variants total: Type (Outlined / Filled / Borderless / Inline) × Size (3) × State (Default / Hover / Focus / Disabled / Error). The grid shows Type × State at Size=Md.`}),`
`,(0,C.jsx)(s,{of:b}),`
`,(0,C.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,C.jsx)(s,{of:d}),`
`,(0,C.jsx)(t.h2,{id:`icons-and-character-count`,children:`Icons and character count`}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(s,{of:h}),`
`,(0,C.jsx)(t.h2,{id:`token-map`,children:`Token map`}),`
`,(0,C.jsxs)(`table`,{children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{children:`Token`}),(0,C.jsx)(`th`,{children:`Used for`})]})}),(0,C.jsx)(`tbody`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{children:(0,C.jsx)(`code`,{children:`color/border/focus`})}),(0,C.jsx)(`td`,{children:`Outlined / Md / Focus border`})]})})]}),`
`,(0,C.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Every type shows a visible focus indicator — Borderless included.`}),`
`,(0,C.jsx)(t.li,{children:`Helper and error text are the field's accessible description, announced on focus.`}),`
`,(0,C.jsx)(t.li,{children:`The required indicator is paired with the label.`}),`
`]}),`
`,(0,C.jsx)(s,{of:g})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),l(),f()})))()}w();export{S as default};