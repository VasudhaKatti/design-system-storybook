import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,n}from"./iframe-B-fyP6c6.js";import{i as r,t as i}from"./Avatar-DpqFpdMW.js";import{n as a,t as o}from"./Badge-r4utTqyD.js";import{n as s,t as c}from"./Switch-DD_hIaFK.js";import{i as l,r as u}from"./MenuButton-DL1HKy_k.js";import{n as d,t as f}from"./ProgressBar-GI1lQCBs.js";import{n as p,r as m,t as h}from"./Table-B5I_ajdS.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{g=t(),r(),a(),l(),d(),s(),m(),_=n(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b=[{id:`p1`,name:`Website redesign`,owner:`Alex Johnson`,status:`Active`,progress:72,budget:48e3,public:!0},{id:`p2`,name:`Mobile app`,owner:`Sam Lee`,status:`Active`,progress:35,budget:12e4,public:!1},{id:`p3`,name:`Brand refresh`,owner:`Riya Patel`,status:`Paused`,progress:10,budget:22e3,public:!1},{id:`p4`,name:`Design tokens`,owner:`Chen Wu`,status:`Active`,progress:95,budget:9e3,public:!0},{id:`p5`,name:`Help centre`,owner:`Maria Garcia`,status:`Archived`,progress:100,budget:15e3,public:!0}],x={Active:`success`,Paused:`warning`,Archived:`neutral`},S=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e),C={title:`Components/Table`,component:p,tags:[`autodocs`],args:{caption:`Projects`,columns:[{key:`name`,header:`Project`,sortable:!0},{key:`owner`,header:`Owner`,sortable:!0,render:e=>(0,_.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,_.jsx)(i,{name:e.owner,size:`sm`,"aria-hidden":!0,role:void 0,"aria-label":void 0}),e.owner]})},{key:`status`,header:`Status`,render:e=>(0,_.jsx)(o,{label:e.status,status:x[e.status],size:`sm`})},{key:`progress`,header:`Progress`,sortable:!0,width:160,render:e=>(0,_.jsx)(f,{label:`${e.name} progress`,hideLabel:!0,value:e.progress,size:`sm`,helperText:`${e.progress}%`,layout:`inline`})},{key:`budget`,header:`Budget`,align:`right`,sortable:!0,headerIcon:{name:`status/info`,position:`trailing`,label:`Approved budget in USD`},render:e=>S(e.budget)},{key:`actions`,header:`Actions`,align:`center`,width:64,render:e=>(0,_.jsx)(u,{label:`Actions for ${e.name}`,size:`sm`,items:[{id:`open`,label:`Open`},{id:`dup`,label:`Duplicate`},{type:`divider`},{id:`del`,label:`Delete`,danger:!0}]})}],rows:b,size:`md`},argTypes:{columns:{control:!1},rows:{control:!1}}},w={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`columnheader`,{name:/Budget/});await t.click(y(n).getByRole(`button`)),await v(n).toHaveAttribute(`aria-sort`,`ascending`);let r=e.getAllByRole(`row`)[1];await v(r).toHaveTextContent(`Design tokens`)}},T={args:{selectable:!0},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`checkbox`,{name:`Select row p2`})),await v(e.getByRole(`checkbox`,{name:`Select all rows`})).toHaveProperty(`indeterminate`,!0),await t.click(e.getByRole(`checkbox`,{name:`Select all rows`})),await v(e.getByRole(`checkbox`,{name:`Select row p5`})).toBeChecked()}},E={args:{renderExpanded:e=>(0,_.jsxs)(`p`,{children:[e.name,` is owned by `,e.owner,`. Budget `,S(e.budget),`, `,e.progress,`% complete.`]})}},D={render:e=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-stack-lg)`},children:[(0,_.jsx)(p,{...e,size:`sm`,caption:`Small (32px rows)`,rows:b.slice(0,2)}),(0,_.jsx)(p,{...e,size:`md`,caption:`Medium (40px rows)`,rows:b.slice(0,2)}),(0,_.jsx)(p,{...e,size:`lg`,caption:`Large (48px rows)`,rows:b.slice(0,2)})]})},O={render:()=>{let[e,t]=(0,g.useState)(b),n=(e,n)=>t(t=>t.map(t=>t.id===e?{...t,...n}:t));return(0,_.jsx)(p,{caption:`Budgets (click a value to edit)`,rows:e,columns:[{key:`name`,header:`Project`},{key:`budget`,header:`Budget`,align:`right`,render:e=>(0,_.jsx)(h,{label:`Budget for ${e.name}`,type:`number`,value:String(e.budget),validate:e=>Number(e)>0?null:`Must be greater than 0`,onCommit:t=>n(e.id,{budget:Number(t)})})},{key:`public`,header:`Public`,align:`center`,render:e=>(0,_.jsx)(c,{size:`sm`,"aria-label":`${e.name} is public`,checked:e.public,onCheckedChange:t=>n(e.id,{public:t})})}]})}},k={args:{stickyHeader:!0,maxHeight:220,rows:[...b,...b.map(e=>({...e,id:`${e.id}b`}))]}},A={args:{loading:!0}},j={args:{rows:[],empty:`No projects match your filters.`}},M=[`Default`,`Selectable`,`Expandable`,`Sizes`,`EditableCells`,`StickyHeader`,`Loading`,`Empty`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const budget = canvas.getByRole('columnheader', {
      name: /Budget/
    });
    await userEvent.click(within(budget).getByRole('button'));
    await expect(budget).toHaveAttribute('aria-sort', 'ascending');
    const firstRow = canvas.getAllByRole('row')[1];
    await expect(firstRow).toHaveTextContent('Design tokens');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select row p2'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Select all rows'
    })).toHaveProperty('indeterminate', true);
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select all rows'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Select row p5'
    })).toBeChecked();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    renderExpanded: (r: Project) => <p>{r.name} is owned by {r.owner}. Budget {money(r.budget)}, {r.progress}% complete.</p>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-lg)'
  }}>
      <Table {...args} size="sm" caption="Small (32px rows)" rows={DATA.slice(0, 2)} />
      <Table {...args} size="md" caption="Medium (40px rows)" rows={DATA.slice(0, 2)} />
      <Table {...args} size="lg" caption="Large (48px rows)" rows={DATA.slice(0, 2)} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rows, setRows] = useState(DATA);
    const update = (id: string, patch: Partial<Project>) => setRows(all => all.map(r => r.id === id ? {
      ...r,
      ...patch
    } : r));
    return <Table caption="Budgets (click a value to edit)" rows={rows} columns={[{
      key: 'name',
      header: 'Project'
    }, {
      key: 'budget',
      header: 'Budget',
      align: 'right',
      render: r => <EditableCell label={\`Budget for \${r.name}\`} type="number" value={String(r.budget)} validate={v => Number(v) > 0 ? null : 'Must be greater than 0'} onCommit={v => update(r.id, {
        budget: Number(v)
      })} />
    }, {
      key: 'public',
      header: 'Public',
      align: 'center',
      render: r => <Switch size="sm" aria-label={\`\${r.name} is public\`} checked={r.public} onCheckedChange={on => update(r.id, {
        public: on
      })} />
    }]} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    maxHeight: 220,
    rows: [...DATA, ...DATA.map(r => ({
      ...r,
      id: \`\${r.id}b\`
    }))]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    empty: 'No projects match your filters.'
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{w as Default,O as EditableCells,j as Empty,E as Expandable,A as Loading,T as Selectable,D as Sizes,k as StickyHeader,M as __namedExportsOrder,C as default};