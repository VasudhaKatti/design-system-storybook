import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DQIYlc9s.js";import{i as n,r}from"./react-D_nWcOEc.js";import{c as i,i as a,l as o,n as s,s as c,u as l}from"./blocks-BHWXh_Dl.js";import{c as u,n as d}from"./helpers-CWmtU-9p.js";import{a as f,c as p,d as m,f as h,h as g,i as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as E}from"./Modal.stories-CeNu08Xs.js";function D(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[`
`,(0,k.jsx)(c,{of:v}),`
`,(0,k.jsx)(o,{}),`
`,(0,k.jsx)(i,{children:`A dialog is a focused window layered over the page that blocks interaction until a task or decision is resolved.`}),`
`,(0,k.jsx)(s,{of:b}),`
`,(0,k.jsx)(a,{of:b}),`
`,(0,k.jsx)(t.h1,{id:`usage`,children:`Usage`}),`
`,(0,k.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,k.jsx)(t.p,{children:`A dialog interrupts the page to focus the user on exactly one task or decision. It's the most disruptive surface available — it blocks everything else until it's resolved — so use it sparingly.`}),`
`,(0,k.jsx)(t.h3,{id:`types`,children:`Types`}),`
`,(0,k.jsx)(s,{of:T}),`
`,(0,k.jsx)(s,{of:_}),`
`,(0,k.jsx)(s,{of:x}),`
`,(0,k.jsx)(s,{of:S}),`
`,(0,k.jsx)(t.h3,{id:`footer-patterns`,children:`Footer patterns`}),`
`,(0,k.jsx)(d,{head:[`Pattern`,`Purpose`,`Footer`],plain:[1,2],rows:[[`Passive`,`Information to be aware of; no decision`,`No action buttons — dismiss only`],[`Transactional`,`An action is needed to complete and close`,`Cancel + one primary action`],[`Danger`,`A destructive or irreversible action`,`Cancel + a danger-styled primary action`],[`Acknowledgment`,`The user must actively acknowledge something`,`A single button (commonly OK)`],[`Progress`,`A task in several steps`,`Cancel + Previous + Next (or the completing action on the last step)`]]}),`
`,(0,k.jsx)(s,{of:C}),`
`,(0,k.jsx)(s,{of:E}),`
`,(0,k.jsx)(s,{of:m}),`
`,(0,k.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsx)(t.li,{children:`To get an immediate response needed to continue something the user just started.`}),`
`,(0,k.jsx)(t.li,{children:`To notify the user of urgent information tied to their current work.`}),`
`,(0,k.jsx)(t.li,{children:`To confirm a decision — especially a destructive or irreversible one.`}),`
`]}),`
`,(0,k.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[`For information that isn't urgent — use an inline `,(0,k.jsx)(t.a,{href:`?path=/docs/components-alert--docs`,children:`Alert`}),` instead.`]}),`
`,(0,k.jsx)(t.li,{children:`For tasks users repeat often — let them complete it on the page.`}),`
`,(0,k.jsx)(t.li,{children:`When even the largest size isn't enough room — use a full page.`}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,k.jsx)(t.h3,{id:`anatomy`,children:`Anatomy`}),`
`,(0,k.jsxs)(t.ol,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Title`}),` — a short, specific verb phrase naming the task.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Subtitle`}),` (optional) — short context for the title (Has subtitle).`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Close icon`}),` — always available for dismissal.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Body`}),` — message text and/or embedded content such as form fields.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Secondary action`}),` — e.g. Cancel, on the left.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Primary action`}),` — the one action that completes the task, on the right.`]}),`
`]}),`
`,(0,k.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,k.jsx)(t.p,{children:`Small · 400px, Medium · 480px, Large · 640px. Choose the size by content: brief text fits Small; complex embedded content needs Medium or Large. If content keeps scrolling, move up a size; if the largest isn't enough, use a full page.`}),`
`,(0,k.jsx)(s,{of:y}),`
`,(0,k.jsx)(t.h3,{id:`placement`,children:`Placement`}),`
`,(0,k.jsx)(t.p,{children:`Center the dialog vertically for short, predictable content, or pin it at a fixed offset from the top for longer or variable content. Use a dimmed backdrop by default. Clicking the backdrop may close passive dialogs, but never transactional or destructive ones. Avoid opening a dialog from inside another dialog.`}),`
`,(0,k.jsx)(t.h3,{id:`do-and-dont`,children:`Do and don't`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Do`}),` — secondary (Cancel) on the left, primary on the right — one clear emphasis. `,(0,k.jsx)(t.strong,{children:`Don't`}),` use two primary buttons — the user can't tell which action is safe.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Do`}),` — for destructive actions, name the action in the title and use a danger-styled, specific button. `,(0,k.jsx)(t.strong,{children:`Don't`}),` use vague titles or buttons like OK for a destructive action.`]}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`content`,children:`Content`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Title`}),` — a short, specific verb phrase that matches whatever opened the dialog. For a very short message, let the title carry it and skip the body.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Subtitle`}),` — only when the purpose isn't obvious from the title.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Body`}),` — brief; only the fields and content needed to complete the task.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Buttons`}),` — short, specific verbs (Delete, Save, Add), not vague labels like Done. OK is fine only for the acknowledgment pattern.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Overflow`}),` — when the body needs to scroll, the header and footer stay fixed and only the body scrolls. Content never scrolls horizontally — move up a size instead.`]}),`
`]}),`
`,(0,k.jsx)(s,{of:h}),`
`,(0,k.jsx)(t.h2,{id:`behaviors`,children:`Behaviors`}),`
`,(0,k.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Open`}),` — ready for input.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Loading`}),` — the footer buttons are disabled while the action runs, preventing a double submit.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Error`}),` — Form only: an error banner at the top of the body, with the fields to correct.`]}),`
`]}),`
`,(0,k.jsx)(s,{of:p}),`
`,(0,k.jsx)(s,{of:f}),`
`,(0,k.jsx)(t.h3,{id:`interactions`,children:`Interactions`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsx)(t.li,{children:`Opens only as the direct result of a user action — never unprompted.`}),`
`,(0,k.jsx)(t.li,{children:`Initial focus lands on the first form field, or on the primary button if there's no form.`}),`
`,(0,k.jsx)(t.li,{children:`Focus stays inside the dialog while it's open; on close it returns to the trigger.`}),`
`,(0,k.jsx)(t.li,{children:`Close with the close icon, Escape, or — for passive dialogs only — a click outside. Cancel reverts any staged changes.`}),`
`,(0,k.jsx)(t.li,{children:`Validate before closing on submit; keep the dialog open and mark fields in error.`}),`
`,(0,k.jsx)(t.li,{children:`Background page scroll is locked while the dialog is open.`}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`?path=/docs/components-alert--docs`,children:`Alert`}),` — for inline, non-urgent feedback that shouldn't interrupt the page.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),` — used for the footer actions.`]}),`
`]}),`
`,(0,k.jsx)(t.h1,{id:`style`,children:`Style`}),`
`,(0,k.jsx)(t.h2,{id:`color`,children:`Color`}),`
`,(0,k.jsx)(d,{head:[`Element`,`Token`],rows:[[`Container`,`surface/bg/elevated`],[`Title`,`text/primary`],[`Body and subtitle`,`text/secondary`],[`Close icon`,`icon/color/default`],[`Dividers (hidden by default)`,`border/default`]]}),`
`,(0,k.jsx)(t.p,{children:`Footer buttons are Button instances; their colors belong to the Button component.`}),`
`,(0,k.jsx)(t.h2,{id:`typography`,children:`Typography`}),`
`,(0,k.jsx)(d,{head:[`Element`,`Tokens`,`Rendered size`],plain:[2],rows:[[`Title`,`text-style/heading/sm/*`,`16px`],[`Body`,`text-style/body/md/*`,`14px`]]}),`
`,(0,k.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,k.jsx)(d,{head:[`Property`,`Value`],rows:[[`Width — Small / Medium / Large`,`400 / 480 / 640`],[`Full-screen`,`1280 × 800`],[`Side-drawer height`,`800`],[`Padding`,`space/inset/xl · 24`],[`Footer button gap`,`space/inline/md · 12`],[`Radius`,`radius/overlay · 12`],[`Close icon`,`Icon/action/close/20 · 20px`]]}),`
`,(0,k.jsx)(t.h2,{id:`variants--states`,children:`Variants & states`}),`
`,(0,k.jsx)(t.p,{children:`30 variants: Type (5) × Size × State. Confirmation, Alert and Side-drawer have Open and Loading at Small, Medium and Large; Form adds Error; Full-screen has one Full size.`}),`
`,(0,k.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,k.jsx)(t.h2,{id:`what-the-design-system-provides`,children:`What the design system provides`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsx)(t.li,{children:`A close icon on every type, alongside Escape.`}),`
`,(0,k.jsx)(t.li,{children:`Footer actions are real Buttons, with their focus and disabled states.`}),`
`,(0,k.jsx)(t.li,{children:`A Loading state that disables the footer buttons to prevent double submits.`}),`
`,(0,k.jsx)(t.li,{children:`A Form Error state with a text error banner, not color alone.`}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`development-considerations`,children:`Development considerations`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[`Use `,(0,k.jsx)(t.code,{children:`role="dialog"`}),` with `,(0,k.jsx)(t.code,{children:`aria-modal="true"`}),` and `,(0,k.jsx)(t.code,{children:`aria-labelledby`}),` pointing to the title.`]}),`
`,(0,k.jsx)(t.li,{children:`Trap focus inside the dialog; return focus to the trigger on close.`}),`
`,(0,k.jsx)(t.li,{children:`Exclude background content from the accessibility tree while a decision is required — not just dim it.`}),`
`,(0,k.jsx)(t.li,{children:`The close icon is icon-only — give it an accessible name.`}),`
`,(0,k.jsx)(t.li,{children:`Set initial focus on the first field, or the primary button when there's no form.`}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`keyboard-interactions`,children:`Keyboard interactions`}),`
`,(0,k.jsx)(d,{head:[`Key`,`Action`],plain:[1],rows:[[`Tab`,`Moves to the next control inside the dialog`],[`Shift + Tab`,`Moves to the previous control inside the dialog`],[`Esc`,`Closes the dialog`]]}),`
`,(0,k.jsx)(s,{of:w})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),r(),l(),u(),g()})))()}A();export{O as default};