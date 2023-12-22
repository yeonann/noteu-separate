import{a8 as i,r as k,j as e,P as K,b as j,c,d as n,L as T}from"./index-95d4de05.js";import{t as p}from"./toSentenceCase-054c1f41.js";import{c as u}from"./color-variants-32889d15.js";import{a as M,D as d}from"./DropdownButton-5ea68506.js";import{D as t}from"./Dropdown-b756b771.js";import{B as l}from"./ButtonGroup-9ced2dec.js";import{B as P}from"./Button-106b053f.js";import"./import-815490c4.js";import"./useCallbackRef-c49852eb.js";import"./mergeOptionsWithPopperConfig-05ca3ed5.js";import"./InputGroupContext-e35a4b4e.js";const C={id:i.string,toggleLabel:i.string,href:i.string,target:i.string,onClick:i.func,title:i.node.isRequired,type:i.string,disabled:i.bool,align:M,menuRole:i.string,renderMenuOnMount:i.bool,rootCloseEvent:i.string,flip:i.bool,bsPrefix:i.string,variant:i.string,size:i.string},m=k.forwardRef(({id:r,bsPrefix:s,size:o,variant:x,title:g,type:y="button",toggleLabel:v="Toggle dropdown",children:w,onClick:f,href:I,target:b,menuRole:N,renderMenuOnMount:D,rootCloseEvent:S,flip:A,...h},B)=>e.jsxs(t,{ref:B,...h,as:l,children:[e.jsx(P,{size:o,variant:x,disabled:h.disabled,bsPrefix:s,href:I,target:b,onClick:f,type:y,children:g}),e.jsx(t.Toggle,{split:!0,id:r,size:o,variant:x,disabled:h.disabled,childBsPrefix:s,children:e.jsx("span",{className:"visually-hidden",children:v})}),e.jsx(t.Menu,{role:N,renderOnMount:D,rootCloseEvent:S,flip:A,children:w})]}));m.propTypes=C;m.displayName="SplitButton";const a=m,F=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Single button dropdowns"}),e.jsxs("p",{className:"text-muted font-14",children:["You can use ",e.jsx("code",{children:"DropdownButton"})," to create a simple dropdown. Also, you can use prop ",e.jsx("code",{children:"as"})," to create custom element typeof dropdown."]}),e.jsxs(j,{children:[e.jsx(c,{className:"col-auto",children:e.jsxs(d,{variant:"light",title:"Dropdown button",children:[e.jsx(t.Item,{href:"",children:"Action"}),e.jsx(t.Item,{href:"",children:"Another action"}),e.jsx(t.Item,{href:"",children:"Something else here"})]})}),e.jsx(c,{className:"col-auto",children:e.jsxs(t,{children:[e.jsx(t.Toggle,{as:T,to:"",className:"btn btn-secondary",id:"dropdown-basic",children:"Dropdown link"}),e.jsxs(t.Menu,{children:[e.jsx(t.Item,{href:"",children:"Action"}),e.jsx(t.Item,{href:"",children:"Another action"}),e.jsx(t.Item,{href:"",children:"Something else here"})]})]})})]})]})}),R=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Menu alignment"}),e.jsxs("p",{className:"text-muted font-14",children:["Passing ",e.jsx("code",{children:"right"})," to the ",e.jsx("code",{children:"menuAlign"})," prop on the",e.jsx("code",{children:" DropdownButton"})," to right align the dropdown menu."]}),e.jsxs(d,{variant:"light",align:"end",title:"Right-aligned menu",children:[e.jsx(t.Item,{href:"",children:"Action"}),e.jsx(t.Item,{href:"",children:"Another action"}),e.jsx(t.Item,{href:"",children:"Something else here"})]})]})}),z=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Variant"}),e.jsx("p",{className:"text-muted font-14 mb-3",children:"The best part is you can do this with any button variant, too:"}),u.map((r,s)=>e.jsxs(t,{as:l,className:"me-1",children:[e.jsx(t.Toggle,{variant:r,children:p(r)}),e.jsxs(t.Menu,{children:[e.jsx(t.Item,{href:"",children:"Action"}),e.jsx(t.Item,{href:"",children:"Another action"}),e.jsx(t.Item,{href:"",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{href:"",children:"Separated link"})]})]},s.toString()))]})}),E=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Animated Dropdown"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:".dropdown-menu-animated"})," to a ",e.jsx("code",{children:"Dropdown.Menu"})," to have animated dropdown menu."]}),e.jsxs(t,{children:[e.jsx(t.Toggle,{variant:"light",children:"Animated Dropdown"}),e.jsxs(t.Menu,{className:"dropdown-menu-animated",children:[e.jsx(t.Item,{href:"",children:"Action"}),e.jsx(t.Item,{href:"",children:"Another action"}),e.jsx(t.Item,{href:"",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{href:"",children:"Separated link"})]})]})]})}),V=()=>{const r=[{type:d,name:"Dropup"},{type:a,name:"Split dropup"}];return e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus above of their toggle elements, with the",e.jsx("code",{children:"drop"})," prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:l,drop:"up",title:s.name,variant:"light",className:"me-1",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},H=()=>{const r=[{type:d,name:"Dropstart"},{type:a,name:"Split dropstart"}];return e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus left of their toggle elements, with the ",e.jsx("code",{children:"drop"}),"prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:l,drop:"start",title:s.name,variant:"secondary",className:"me-1",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},L=()=>{const r=[{type:d,name:"Dropend"},{type:a,name:"Split dropend"}];return e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus right of their toggle elements, with the",e.jsx("code",{children:"drop"})," prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:l,drop:"end",title:s.name,variant:"primary",className:"me-1",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},W=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Split button dropdowns"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["You can split button dropdowns by adding ",e.jsx("code",{children:"SplitButton"}),"."]}),u.map((r,s)=>e.jsxs(a,{variant:r,title:p(r),className:"me-1 mb-1",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},s.toString()))]})}),q=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Sizing"}),e.jsx("p",{className:"text-muted font-14",children:"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons."}),[d,a].map((r,s)=>e.jsxs(r,{as:l,className:"me-1",size:"lg",title:"Large button",variant:"light",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},s.toString())),[d,a].map((r,s)=>e.jsxs(r,{as:l,className:"me-1",size:"sm",title:"Small button",variant:"light",children:[e.jsx(t.Item,{eventKey:"1",children:"Action"}),e.jsx(t.Item,{eventKey:"2",children:"Another action"}),e.jsx(t.Item,{eventKey:"3",children:"Something else here"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"Separated link"})]},s.toString()))]})}),O=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Active Item"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"active"})," prop to item in the dropdown to",e.jsx("strong",{children:"style them as active"}),"."]}),e.jsxs(t,{children:[e.jsx(t.Toggle,{variant:"secondary",children:"Active Item"}),e.jsxs(t.Menu,{children:[e.jsx(t.Item,{children:"Regular link"}),e.jsx(t.Item,{active:!0,children:"Active link"}),e.jsx(t.Item,{children:"Another link"})]})]})]})}),U=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Disabled Item"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"disabled"})," prop to item in the dropdown to",e.jsx("strong",{children:"style them as disabled"}),"."]}),e.jsxs(t,{children:[e.jsx(t.Toggle,{children:"Active Item"}),e.jsxs(t.Menu,{children:[e.jsx(t.Item,{children:"Regular link"}),e.jsx(t.Item,{disabled:!0,children:"Disabled link"}),e.jsx(t.Item,{children:"Another link"})]})]})]})}),Y=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Headers"}),e.jsx("p",{className:"text-muted font-14",children:"Add a header to label sections of actions."}),e.jsxs(t,{children:[e.jsx(t.Toggle,{variant:"secondary",children:"Header"}),e.jsxs(t.Menu,{children:[e.jsx(t.Header,{children:"Dropdown header"}),e.jsx(t.Item,{children:"Action"}),e.jsx(t.Item,{children:"Another action"})]})]})]})}),G=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Text"}),e.jsx("p",{className:"text-muted font-14",children:"Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional sizing styles to constrain the menu width."}),e.jsxs(t,{children:[e.jsx(t.Toggle,{children:"Text Dropdown"}),e.jsxs(t.Menu,{className:"p-3 text-muted",style:{maxWidth:"200px"},children:[e.jsx("p",{children:"Some example text that's free-flowing within the dropdown menu."}),e.jsx("p",{className:"mb-0",children:"And this is more example text."})]})]})]})}),$=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Forms"}),e.jsx("p",{className:"text-muted font-14",children:"Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require."}),e.jsxs(t,{children:[e.jsx(t.Toggle,{variant:"secondary",children:"Form"}),e.jsxs(t.Menu,{children:[e.jsxs("form",{className:"px-4 py-3",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"exampleDropdownFormEmail1",className:"form-label",children:"Email address"}),e.jsx("input",{type:"email",className:"form-control",id:"exampleDropdownFormEmail1",placeholder:"email@example.com"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"exampleDropdownFormPassword1",className:"form-label",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",id:"exampleDropdownFormPassword1",placeholder:"Password"})]}),e.jsx("div",{className:"mb-2",children:e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:"dropdownCheck"}),e.jsx("label",{className:"form-check-label",htmlFor:"dropdownCheck",children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Sign in"})]}),e.jsx(t.Divider,{}),e.jsx(t.Item,{eventKey:"4",children:"New around here? Sign up"}),e.jsx(t.Item,{eventKey:"4",children:"Forgot password?"})]})]})]})}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(K,{title:"Dropdowns",subName:"Base UI"}),e.jsxs(j,{children:[e.jsxs(c,{lg:6,children:[e.jsx(F,{}),e.jsx(z,{}),e.jsx(E,{}),e.jsx(V,{}),e.jsx(L,{}),e.jsx(U,{}),e.jsx(G,{})]}),e.jsxs(c,{lg:6,children:[e.jsx(R,{}),e.jsx(W,{}),e.jsx(q,{}),e.jsx(H,{}),e.jsx(O,{}),e.jsx(Y,{}),e.jsx($,{})]})]})]});export{oe as default};
