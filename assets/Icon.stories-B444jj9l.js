import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-DQIYlc9s.js";import{a as r,c as i,i as a,l as o,o as s}from"./helpers-CWmtU-9p.js";import{i as c,n as l,r as u,t as d}from"./Icon-C15sqzpV.js";var f=t({Colors:()=>C,Default:()=>b,Gallery:()=>T,Meaningful:()=>w,Representative:()=>x,Sizes:()=>S,__namedExportsOrder:()=>E,default:()=>y}),p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{i(),l(),c(),p=n(),{expect:m}=__STORYBOOK_MODULE_TEST__,h=[`sm`,`md`,`lg`],g={sm:`16px`,md:`20px`,lg:`24px`},_=[`default`,`subtle`,`inverse`,`on-brand`,`danger`,`success`,`warning`,`info`],v=[`action/add`,`nav/chevron-right`,`form/check`,`status/success`,`media/play`,`layout/grid`,`user/profile`,`feedback/heart`],y={title:`Components/Icon`,component:d,args:{name:`action/add`,size:`md`,color:`default`},argTypes:{name:{description:`Figma: Icon/{semantic}`,control:`select`,options:u},size:{description:`Figma: Icon/…/{size} — 16 · 20 · 24px`,control:`inline-radio`,options:h},color:{description:`Figma: icons › icon/color/*`,control:`select`,options:_},label:{description:`Figma: Behaviour & Accessibility — accessible name set by the consumer for meaningful icons`}}},b={},x={parameters:{docs:{description:{story:`Representative Icons: one icon per category at all 3 built sizes.`}}},render:e=>(0,p.jsx)(r,{label:`Icon by size grid`,rows:v,cols:h.map(e=>g[e]),render:(t,n)=>(0,p.jsx)(d,{...e,name:t,size:h.find(e=>g[e]===n)})})},S={render:e=>(0,p.jsx)(`div`,{style:o,children:h.map(t=>(0,p.jsx)(a,{title:g[t],children:(0,p.jsx)(d,{...e,size:t})},t))})},C={args:{name:`status/info`,size:`lg`},parameters:{docs:{description:{story:`Token Map: the icons collection’s icon/color tokens. Consuming components override the colour with their own component-level token.`}}},render:e=>(0,p.jsx)(`div`,{style:o,children:_.map(t=>(0,p.jsx)(a,{title:t,children:(0,p.jsx)(`span`,{style:{display:`inline-flex`,padding:`var(--space-inset-xs)`,background:t===`inverse`||t===`on-brand`?`var(--surface-bg-inverse)`:void 0},children:(0,p.jsx)(d,{...e,color:t})})},t))})},w={args:{name:`status/warning`,color:`warning`,label:`Warning`},parameters:{docs:{description:{story:`Icons are decorative by default (aria-hidden). Meaningful icons get an aria-label from the consuming component.`}}},play:async({canvas:e})=>{await m(e.getByRole(`img`,{name:`Warning`})).toBeInTheDocument()}},T={args:{size:`lg`},parameters:{controls:{include:[`size`,`color`]},docs:{description:{story:`Every semantic icon built on the Figma page.`}}},render:e=>(0,p.jsx)(`ul`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`var(--space-inline-md)`,padding:0,listStyle:`none`},children:u.map(t=>(0,p.jsxs)(`li`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-stack-xs)`,padding:`var(--space-inset-md)`},children:[(0,p.jsx)(d,{...e,name:t}),(0,p.jsx)(`code`,{style:s,children:t})]},t))})},E=[`Default`,`Representative`,`Sizes`,`Colors`,`Meaningful`,`Gallery`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Representative Icons: one icon per category at all 3 built sizes.'
      }
    }
  },
  render: args => <Matrix label="Icon by size grid" rows={REPRESENTATIVE} cols={SIZES.map(s => PX[s])} render={(name, px) => <Icon {...args} name={name} size={SIZES.find(s => PX[s] === px)} />} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {SIZES.map(s => <Labelled key={s} title={PX[s]}><Icon {...args} size={s} /></Labelled>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'status/info',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Token Map: the icons collection’s icon/color tokens. Consuming components override the colour with their own component-level token.'
      }
    }
  },
  render: args => <div style={row}>
      {COLORS.map(c => <Labelled key={c} title={c}>
          <span style={{
        display: 'inline-flex',
        padding: 'var(--space-inset-xs)',
        background: c === 'inverse' || c === 'on-brand' ? 'var(--surface-bg-inverse)' : undefined
      }}>
            <Icon {...args} color={c} />
          </span>
        </Labelled>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'status/warning',
    color: 'warning',
    label: 'Warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons are decorative by default (aria-hidden). Meaningful icons get an aria-label from the consuming component.'
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Warning'
    })).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  parameters: {
    controls: {
      include: ['size', 'color']
    },
    docs: {
      description: {
        story: 'Every semantic icon built on the Figma page.'
      }
    }
  },
  render: args => <ul style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: 'var(--space-inline-md)',
    padding: 0,
    listStyle: 'none'
  }}>
      {iconNames.map(name => <li key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-stack-xs)',
      padding: 'var(--space-inset-md)'
    }}>
          <Icon {...args} name={name} />
          <code style={caption}>{name}</code>
        </li>)}
    </ul>
}`,...T.parameters?.docs?.source}}}})))()}export{w as a,D as c,f as i,b as n,x as o,T as r,S as s,C as t};