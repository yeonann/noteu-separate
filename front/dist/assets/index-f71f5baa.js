import{j as e,d as a,b as l,c,e as m,L as s,b9 as h,r as x,P as u}from"./index-95d4de05.js";import{C as p}from"./CardTitle-5d46a8f8.js";import{u as d}from"./avatar-3-c5024d76.js";import{u as n}from"./avatar-4-6f552de6.js";import{u as j}from"./avatar-5-90acf0fe.js";import{p as N}from"./project-1-a2d51d21.js";import{a as r}from"./avatar-9-37cf6792.js";import"./Dropdown-b756b771.js";import"./import-815490c4.js";import"./useCallbackRef-c49852eb.js";import"./mergeOptionsWithPopperConfig-05ca3ed5.js";import"./InputGroupContext-e35a4b4e.js";import"./Button-106b053f.js";const f=({task:t})=>e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(p,{containerClass:"d-flex align-items-center justify-content-between",title:e.jsxs("div",{className:"form-check float-start",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:"completedCheck"}),e.jsx("label",{className:"form-check-label",htmlFor:"completedCheck",children:"Mark as completed"})]}),icon:"mdi mdi-dots-horizontal",menuItems:[{label:"Attachment",icon:"uil uil-file-upload"},{label:"Edit",icon:"uil uil-edit"},{label:"Mark as Duplicate",icon:"uil uil-file-copy-alt"},{label:"Delete",icon:"uil uil-trash-alt",variant:"text-danger",hasDivider:!0}]}),e.jsx("div",{className:"clearfix"}),e.jsx(l,{children:e.jsxs(c,{children:[e.jsx("h3",{className:"mt-3",children:t.title}),e.jsxs(l,{children:[e.jsxs(c,{children:[e.jsx("p",{className:"mt-2 mb-1 text-muted fw-bold font-12 text-uppercase",children:"Assigned To"}),e.jsxs("div",{className:"d-flex",children:[e.jsx("img",{src:t.assignee_avatar,alt:t.assigned_to,className:"rounded-circle me-2",height:"24"}),e.jsx("div",{children:e.jsx("h5",{className:"mt-1 font-14",children:t.assigned_to})})]})]}),e.jsxs(c,{children:[e.jsx("p",{className:"mt-2 mb-1 text-muted fw-bold font-12 text-uppercase",children:"Due Date"}),e.jsxs("div",{className:"d-flex",children:[e.jsx("i",{className:"uil uil-schedule font-18 text-success me-1"}),e.jsx("div",{children:e.jsx("h5",{className:"mt-1 font-14",children:t.due_date})})]})]})]}),e.jsx("h5",{className:"mt-3",children:"Overview:"}),e.jsx("p",{className:"text-muted mb-4",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up."}),e.jsx("h5",{className:"mt-4 mb-2 font-16",children:"Checklists/Sub-tasks"}),t.checklists.map((i,o)=>e.jsxs("div",{className:"form-check mt-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:`checklist-${i.id}`,defaultChecked:i.completed}),e.jsx("label",{className:m("form-check-label",{strikethrough:i.completed}),htmlFor:`checklist-${i.id}`,children:i.title})]},o.toString()))]})})]})}),b=()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h4",{className:"my-1",children:"Comments (51)"})}),e.jsxs(a.Body,{children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("img",{className:"me-2 rounded-circle",src:d,alt:"",height:"32"}),e.jsxs("div",{className:"w-100",children:[e.jsxs("h5",{className:"mt-0",children:["Jeremy Tomlinson",e.jsx("small",{className:"text-muted float-end",children:"5 hours ago"})]}),"Nice work, makes me think of The Money Pit.",e.jsx("br",{}),e.jsxs(s,{to:"",className:"text-muted font-13 d-inline-block mt-2",children:[e.jsx("i",{className:"mdi mdi-reply"})," Reply"]}),e.jsxs("div",{className:"d-flex mt-3",children:[e.jsx(s,{className:"pe-2",to:"",children:e.jsx("img",{src:n,className:"rounded-circle",alt:"",height:"32"})}),e.jsxs("div",{className:"w-100",children:[e.jsxs("h5",{className:"mt-0",children:["Thelma Fridley",e.jsx("small",{className:"text-muted float-end",children:"3 hours ago"})]}),"i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",e.jsx("br",{}),e.jsxs(s,{to:"",className:"text-muted font-13 d-inline-block mt-2",children:[e.jsx("i",{className:"mdi mdi-reply"})," Reply"]})]})]})]})]}),e.jsxs("div",{className:"d-flex mt-3",children:[e.jsx("img",{className:"me-2 rounded-circle",src:j,alt:"",height:"32"}),e.jsxs("div",{className:"w-100",children:[e.jsxs("h5",{className:"mt-0",children:["Kevin Martinez ",e.jsx("small",{className:"text-muted float-end",children:"1 day ago"})]}),"It would be very nice to have.",e.jsx("br",{}),e.jsxs(s,{to:"",className:"text-muted font-13 d-inline-block mt-2",children:[e.jsx("i",{className:"mdi mdi-reply"})," Reply"]})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsxs(s,{to:"",className:"text-danger",children:[e.jsx("i",{className:"mdi mdi-spin mdi-loading me-1"})," Load more"]})}),e.jsx("div",{className:"border rounded mt-4",children:e.jsxs("form",{className:"comment-area-box",children:[e.jsx("textarea",{rows:3,className:"form-control border-0 resize-none",placeholder:"Your comment..."}),e.jsxs("div",{className:"p-2 bg-light d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx(s,{to:"",className:"btn btn-sm px-1 btn-light",children:e.jsx("i",{className:"mdi mdi-upload"})}),e.jsx(s,{to:"",className:"btn btn-sm px-1 btn-light",children:e.jsx("i",{className:"uil uil-at"})})]}),e.jsxs("button",{type:"submit",className:"btn btn-sm btn-success",children:[e.jsx("i",{className:"uil uil-message me-1"}),"Submit"]})]})]})})]})]}),g=()=>e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx("h5",{className:"card-title mb-3",children:"Attachments"}),e.jsx(h,{}),e.jsx(a,{className:"my-1 shadow-none border",children:e.jsx("div",{className:"p-2",children:e.jsxs(l,{className:"align-items-center",children:[e.jsx("div",{className:"col-auto",children:e.jsx("div",{className:"avatar-sm",children:e.jsx("span",{className:"avatar-title rounded",children:".ZIP"})})}),e.jsxs("div",{className:"col ps-0",children:[e.jsx(s,{to:"",className:"text-muted fw-bold",children:"Hyper-admin-design.zip"}),e.jsx("p",{className:"mb-0",children:"2.3 MB"})]}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{to:"",className:"btn btn-link btn-lg text-muted",children:e.jsx("i",{className:"ri-download-2-line"})})})]})})}),e.jsx(a,{className:"mb-1 shadow-none border",children:e.jsx("div",{className:"p-2",children:e.jsxs(l,{className:"align-items-center",children:[e.jsx("div",{className:"col-auto",children:e.jsx("img",{src:N,className:"avatar-sm rounded",alt:""})}),e.jsxs("div",{className:"col ps-0",children:[e.jsx(s,{to:"",className:"text-muted fw-bold",children:"Dashboard-design.jpg"}),e.jsx("p",{className:"mb-0",children:"3.5 MB"})]}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{to:"",className:"btn btn-link btn-lg text-muted",children:e.jsx("i",{className:"ri-download-2-line"})})})]})})}),e.jsx(a,{className:"mb-0 shadow-none border",children:e.jsx("div",{className:"p-2",children:e.jsxs(l,{className:"align-items-center",children:[e.jsx("div",{className:"col-auto",children:e.jsx("div",{className:"avatar-sm",children:e.jsx("span",{className:"avatar-title bg-secondary rounded",children:".MP4"})})}),e.jsxs("div",{className:"col ps-0",children:[e.jsx(s,{to:"",className:"text-muted fw-bold",children:"Admin-bug-report.mp4"}),e.jsx("p",{className:"mb-0",children:"7.05 MB"})]}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{to:"",className:"btn btn-link btn-lg text-muted",children:e.jsx("i",{className:"ri-download-2-line"})})})]})})})]})}),v=[{id:1,title:"Draft the new contract document for sales team",assigned_to:"Arya Stark",assignee_avatar:r,due_date:"Today 10am",completed:!1,priority:"High",stage:"Todo",checklists:[{id:1,title:"Find out the old contract documents",completed:!0},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:r},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:d}]},{id:2,title:"iOS App home page",assigned_to:"James B",assignee_avatar:d,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"High",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:r},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:d}]},{id:3,title:"Write a release note",assigned_to:"Kevin C",assignee_avatar:n,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:r},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:d}]}],D=()=>{const[t]=x.useState(v[0]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Task Detail",subName:"Tasks"}),e.jsxs(l,{children:[e.jsxs(c,{xxl:8,xl:7,children:[e.jsx(f,{task:t}),e.jsx(b,{})]}),e.jsx(c,{xxl:4,xl:5,children:e.jsx(g,{})})]})]})};export{D as default};
