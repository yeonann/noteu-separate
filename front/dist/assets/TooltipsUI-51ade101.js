import{j as e,P as c,b as h,c as o,d as t,L as a}from"./index-95d4de05.js";import{O as s,T as r}from"./OverlayTrigger-90792078.js";import{B as n}from"./Button-106b053f.js";import"./useCallbackRef-c49852eb.js";import"./mergeOptionsWithPopperConfig-05ca3ed5.js";const m=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Examples"}),e.jsx("p",{className:"text-muted font-14",children:"Hover over the links below to see tooltips."}),e.jsxs("p",{className:"muted mb-0",children:["Tight pants next level keffiyeh",e.jsx(s,{placement:"top",overlay:e.jsx(r,{id:"overlay-example",children:" Default title "}),children:e.jsx(a,{to:"",children:" you probably "})}),"haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel",e.jsx(s,{placement:"top",overlay:e.jsx(r,{id:"overlay-example",children:" Another one "}),children:e.jsx(a,{to:"",children:" have a "})}),"terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan",e.jsx(s,{placement:"top",overlay:e.jsx(r,{id:"overlay-example",children:" Another one here too "}),children:e.jsx(a,{to:"",children:" whatever "})}),"keytar, scenester farm-to-table banksy Austin",e.jsx(s,{placement:"top",overlay:e.jsx(r,{id:"overlay-example",children:" The last tip! "}),children:e.jsx(a,{to:"",children:" twitter handle "})}),"freegan cred raw denim single-origin coffee viral."]})]})}),x=()=>{const i=[{placement:"top"},{placement:"bottom"},{placement:"right"},{placement:"left"}];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Four Directions"}),e.jsx("p",{className:"text-muted font-14",children:"Four options are available: top, right, bottom, and left aligned."}),i.map((l,d)=>e.jsx(s,{placement:l.placement,overlay:e.jsxs(r,{id:`tooltip-${l.placement}`,children:["Tooltip on ",e.jsx("strong",{children:l.placement}),"."]}),children:e.jsxs(n,{variant:"info",className:"me-1",children:["Tooltip on ",l.placement]})},d.toString()))]})})},p=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Disabled Elements"}),e.jsxs("p",{className:"text-muted font-14",children:["Elements with the ",e.jsx("code",{children:"disabled"})," attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper",e.jsx("code",{children:"<div>"})," or ",e.jsx("code",{children:"<span>"})," and override the",e.jsx("code",{children:"pointer-events"})," on the disabled element."]}),e.jsx(s,{overlay:e.jsx(r,{id:"tooltip-disabled",children:"Tooltip!"}),children:e.jsx("span",{className:"d-inline-block",children:e.jsx(n,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled button"})})})]})}),j=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Html Tags"}),e.jsx("p",{className:"text-muted font-14",children:"And with custom HTML added:"}),e.jsx(s,{placement:"top",overlay:e.jsxs(r,{children:[e.jsx("em",{children:"Tooltip"})," ",e.jsx("u",{children:"with"})," ",e.jsx("b",{children:"HTML"})]}),children:e.jsx(n,{variant:"secondary",children:"Tooltip with HTML"})})]})}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Tooltips",subName:"Base UI"}),e.jsxs(h,{children:[e.jsxs(o,{xl:6,children:[e.jsx(m,{}),e.jsx(p,{})]}),e.jsxs(o,{xl:6,children:[e.jsx(x,{}),e.jsx(j,{})]})]})]});export{f as default};
