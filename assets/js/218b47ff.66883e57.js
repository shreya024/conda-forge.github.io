"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4508],{51882:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var i=s(85893),t=s(11151);const a={title:"2020-02-19"},l="2020-02-19 conda-forge core meeting",o={id:"orga/minutes/2020-02-19",title:"2020-02-19",description:"Attendees",source:"@site/docs/orga/minutes/2020-02-19.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2020-02-19",permalink:"/docs/orga/minutes/2020-02-19",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"2020-02-19"},sidebar:"defaultSidebar",previous:{title:"2020-03-04",permalink:"/docs/orga/minutes/2020-03-04"},next:{title:"2020-02-05",permalink:"/docs/orga/minutes/2020-02-05"}},c={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2020-02-19-conda-forge-core-meeting",children:"2020-02-19 conda-forge core meeting"}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(ED) Recurring Anaconda update on what's going on on our side."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CF summit this year: Scipy?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Anaconda can help cover travel costs"}),"\n",(0,i.jsx)(n.li,{children:"scheduling challenges to work through."}),"\n",(0,i.jsx)(n.li,{children:"overlapping tutorials or overlapping sprints?"}),"\n",(0,i.jsx)(n.li,{children:"maybe one day at the start and a half day at the end?"}),"\n",(0,i.jsx)(n.li,{children:"Second day of sprints not too many people show up anyway."}),"\n",(0,i.jsx)(n.li,{children:"proposal: full-day meeting second tutorial day, half day meeting second day of sprints."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"conda / conda-build update, if any\n*"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(ED) Thread about .conda package format on twitter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://twitter.com/mrocklin/status/1228750299373817856",children:"https://twitter.com/mrocklin/status/1228750299373817856"})}),"\n",(0,i.jsx)(n.li,{children:"Eric: Set up follow-on chat to figure out how to move this forward."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Miniforge installers for platforms where Anaconda, Inc provides Miniconda"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/miniforge/releases/tag/4.8.2-",children:"https://github.com/conda-forge/miniforge/releases/tag/4.8.2-"})}),"\n",(0,i.jsxs)(n.li,{children:["As CF core we had voted to NOT to x64. They're doing nice work, so it's not like we're mad at them. The biggest question is that it seems like there are parts of the CF ecosystem that are operating outside of the decisions we make as core.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'We had proposed using conda-pack for standalone CI usage. Host the conda-pack\'d conda-forge x86 "miniconda" on azure / s3 somewhere.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Eric TODO: Work with Scopatz to get the right people in the room to talk through these concerns."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TODO: Track votes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Eric to sync with Marius on some github strategies for tracking who participates in the voting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(Eric) Do we need further discussion of Automerging?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Tradeoff discussion from last meeting was "increase risk of bad packages and increasing throughput"'}),"\n",(0,i.jsxs)(n.li,{children:["(CJ) Discussion of what we can do to minimize risk of bad packages, what is the spectrum of risk tolerance among us (eg. if we had X capability I would feel comfortable with automerge)\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Attempt at using pip check, issues with that approach"}),"\n",(0,i.jsx)(n.li,{children:"Advanced conda skeleton?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(AS) dynamodb + keybase.io\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"terraform in shared, encrypted git repo on keybase.io"}),"\n",(0,i.jsx)(n.li,{children:"pieces of bot moving to dynamodb"}),"\n",(0,i.jsx)(n.li,{children:"pieces of other bits of infrastructure can move to keybase w/ terraform as well (herkou, keys in repos, etc)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(n.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PyPy is almost ready.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Blockers,\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda/conda-build/pull/3868",children:"https://github.com/conda/conda-build/pull/3868"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/repodata-hotfixes/pull/71",children:"https://github.com/AnacondaRecipes/repodata-hotfixes/pull/71"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Need a migrator to use only feedstocks that have migrated in py38 and arch_rebuild migrators"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(n.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsx)(n.li,{children:"Remove conda forge readthedocs."}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{children:["Open up a CFEP about what to do about Python 2.7.\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/issues/20",children:"cfep issue #20"})}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Someone volunteer to drive this CFEP to completion"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support."]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (Eric) Change meeting cadence\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We're not going to change the meeting cadence. Too much momentum for us on this every-other-wednesday schedule."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," cfep-11 next steps: Merge PR and ping staged-recipes team they can implement if they want?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(67294);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);