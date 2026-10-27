import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B-fyP6c6.js";import{n,t as r}from"./Card-EP2sZEau.js";import{n as i,t as a}from"./Carousel-Btspbn7F.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c=[`var(--surface-bg-info)`,`var(--surface-bg-success)`,`var(--surface-bg-warning)`,`var(--surface-bg-danger)`,`var(--interactive-bg-activated)`,`var(--surface-bg-neutral)`].map((e,t)=>(0,o.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,height:200,background:e,borderRadius:`var(--radius-surface)`},children:(0,o.jsxs)(`span`,{className:`text-heading-lg`,children:[`Slide `,t+1]})},t)),l={title:`Components/Carousel`,component:a,tags:[`autodocs`],args:{label:`Featured`,children:c,slidesPerView:1,infinite:!1,autoplay:!1,transition:`slide`},argTypes:{children:{control:!1}},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:640},children:(0,o.jsx)(e,{})})]},u={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Previous slide`});await s(n).toBeDisabled(),await t.click(e.getByRole(`button`,{name:`Next slide`})),await s(e.getByRole(`button`,{name:`Go to slide 2`})).toHaveAttribute(`aria-current`,`true`),await s(e.getByRole(`group`,{name:`2 of 6`})).not.toHaveAttribute(`aria-hidden`)}},d={args:{infinite:!0}},f={args:{autoplay:!0,infinite:!0,autoplayInterval:4e3}},p={args:{slidesPerView:3,children:[`Tokens`,`Components`,`Patterns`,`Accessibility`,`Theming`,`Docs`].map(e=>(0,o.jsx)(r,{variant:`outlined`,headline:e,body:`Short description of this part of the design system.`},e))}},m={args:{transition:`fade`,infinite:!0}},h=[`Finite`,`Infinite`,`Autoplay`,`MultiItem`,`Fade`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const prev = canvas.getByRole('button', {
      name: 'Previous slide'
    });
    await expect(prev).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next slide'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Go to slide 2'
    })).toHaveAttribute('aria-current', 'true');
    // Only the visible slide is reachable; others are hidden from assistive tech.
    await expect(canvas.getByRole('group', {
      name: '2 of 6'
    })).not.toHaveAttribute('aria-hidden');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    infinite: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    infinite: true,
    autoplayInterval: 4000
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    slidesPerView: 3,
    children: ['Tokens', 'Components', 'Patterns', 'Accessibility', 'Theming', 'Docs'].map(t => <Card key={t} variant="outlined" headline={t} body="Short description of this part of the design system." />)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    transition: 'fade',
    infinite: true
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Autoplay,m as Fade,u as Finite,d as Infinite,p as MultiItem,h as __namedExportsOrder,l as default};