import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{n as r,t as i}from"./Button-Cxz3wpGw.js";import{n as a,t as o}from"./IconButton-QIEFAujF.js";import{n as s,t as c}from"./Badge-r4utTqyD.js";import{n as l,t as u}from"./Card-EP2sZEau.js";function d(){let[e,t]=(0,f.useState)(!1);return(0,p.jsx)(o,{icon:`feedback/heart`,label:e?`Unlike`:`Like`,"aria-pressed":e,size:`sm`,onClick:()=>t(e=>!e),showTooltip:!1})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{f=t(),s(),r(),a(),l(),p=n(),{expect:m,fn:h}=__STORYBOOK_MODULE_TEST__,g=e=>`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${e} 70% 70%)"/><stop offset="1" stop-color="hsl(${e+40} 60% 40%)"/></linearGradient></defs><rect width="300" height="200" fill="url(#g)"/><circle cx="220" cy="60" r="28" fill="hsl(${e} 90% 90%)"/></svg>`),_={title:`Components/Card`,component:u,tags:[`autodocs`],args:{variant:`elevated`,media:{src:g(230),alt:`Abstract blue gradient`,ratio:`3:2`},caption:`Design · 6 min read`,headline:`Building a token pipeline`,badges:(0,p.jsx)(c,{label:`New`,status:`info`,size:`sm`}),subheadline:`From Figma variables to CSS`,body:`How we export primitives and semantic tokens from Figma and turn them into theme-aware CSS custom properties that every component consumes.`,footerStart:(0,p.jsx)(i,{variant:`ghost`,size:`sm`,children:`Learn more`}),footerEnd:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{variant:`secondary`,size:`sm`,children:`Save`}),(0,p.jsx)(i,{size:`sm`,children:`Read`})]})},argTypes:{overlayActions:{control:!1},badges:{control:!1},footerStart:{control:!1},footerEnd:{control:!1}},decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:340},children:(0,p.jsx)(e,{})})]},v={},y={decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:`none`},children:(0,p.jsx)(e,{})})],render:e=>(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 260px)`,gap:`var(--space-inline-lg)`,alignItems:`start`},children:[(0,p.jsx)(u,{...e,variant:`elevated`,headline:`Elevated`,media:void 0}),(0,p.jsx)(u,{...e,variant:`filled`,headline:`Filled`,media:void 0}),(0,p.jsx)(u,{...e,variant:`outlined`,headline:`Outlined`,media:void 0})]})},b={args:{overlayActions:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{}),(0,p.jsx)(o,{icon:`action/external-link`,label:`Share`,size:`sm`,onClick:h(),showTooltip:!1})]})}},x={args:{media:{src:g(20),alt:`Orange product shot`,ratio:`1:1`},caption:void 0,headline:`Desk lamp`,badges:(0,p.jsx)(c,{label:`In stock`,status:`success`,size:`sm`}),subheadline:`$89`,body:void 0,footerStart:void 0,footerEnd:(0,p.jsx)(i,{size:`sm`,leadingIcon:`action/add`,children:`Add to cart`})}},S={args:{media:{src:g(300),alt:`Purple poster`,ratio:`1:2`},footerStart:void 0,footerEnd:void 0,subheadlineStyle:`italic`}},C={args:{href:`#article`,footerStart:void 0,footerEnd:void 0,badges:void 0},play:async({canvas:e})=>{await m(e.getByRole(`link`,{name:`Building a token pipeline`})).toHaveAttribute(`href`,`#article`)}},w={args:{media:void 0,variant:`outlined`}},T=[`Default`,`Variants`,`WithOverlayActions`,`ProductSquare`,`Portrait`,`ClickableCard`,`TextOnly`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 'none'
  }}><Story /></div>],
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 260px)',
    gap: 'var(--space-inline-lg)',
    alignItems: 'start'
  }}>
      <Card {...args} variant="elevated" headline="Elevated" media={undefined} />
      <Card {...args} variant="filled" headline="Filled" media={undefined} />
      <Card {...args} variant="outlined" headline="Outlined" media={undefined} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    overlayActions: <>
        <LikeButton />
        <IconButton icon="action/external-link" label="Share" size="sm" onClick={fn()} showTooltip={false} />
      </>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      src: img(20),
      alt: 'Orange product shot',
      ratio: '1:1'
    },
    caption: undefined,
    headline: 'Desk lamp',
    badges: <Badge label="In stock" status="success" size="sm" />,
    subheadline: '$89',
    body: undefined,
    footerStart: undefined,
    footerEnd: <Button size="sm" leadingIcon="action/add">Add to cart</Button>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      src: img(300),
      alt: 'Purple poster',
      ratio: '1:2'
    },
    footerStart: undefined,
    footerEnd: undefined,
    subheadlineStyle: 'italic'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#article',
    footerStart: undefined,
    footerEnd: undefined,
    badges: undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('link', {
      name: 'Building a token pipeline'
    })).toHaveAttribute('href', '#article');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    media: undefined,
    variant: 'outlined'
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as ClickableCard,v as Default,S as Portrait,x as ProductSquare,w as TextOnly,y as Variants,b as WithOverlayActions,T as __namedExportsOrder,_ as default};