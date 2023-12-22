import{r as C,j as e,P as v,b as r,c as l,d as t}from"./index-95d4de05.js";import{h as o}from"./auto-cc8fee6d.js";import{C as i}from"./chart-4d87ace3.js";const a=["#727cf5","#0acf97"],d=[0,20,20,60,60,120,NaN,180,120,125,105,110,170];function c(s,n){return s.p0.skip||s.p1.skip?n:void 0}function D(s,n){return s.p0.parsed.y>s.p1.parsed.y?n:void 0}const R={type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],datasets:[{label:"Fully Rounded",data:d,borderColor:a[0],fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"Small Radius",data:d,borderColor:a[1],fill:!1,tension:.4},{label:"Small Radius",data:d,borderColor:a[2],fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1},plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1},suggestedMin:-10,suggestedMax:200}}}},N={type:"line",data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Fully Rounded",data:[32,42,42,62,52,75,62],borderColor:a[0],fill:!0,backgroundColor:o(a[0],.3),tension:.3},{label:"Small Radius",data:[42,58,66,93,82,105,92],fill:!0,backgroundColor:"transparent",borderColor:a[1],borderDash:[5,5],tension:.3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},S={type:"line",data:{labels:["Jan","Feb","March","April","May","June","July"],datasets:[{label:"Fully Rounded",data:[12,-19,14,-15,18,-14,-7],borderColor:a[0],backgroundColor:o(a[0],.3),borderWidth:1.5,yAxisID:"y",tension:.2},{label:"Small Radius",data:[-10,19,-15,-8,-17,12,8],backgroundColor:o(a[1],.3),borderColor:a[1],borderWidth:1.5,yAxisID:"y1",tension:.2}]},options:{interaction:{mode:"index",intersect:!1},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{type:"linear",display:!0,position:"left",grid:{display:!1}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}}},A={type:"line",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15,14,-8],borderColor:a[0],pointStyle:"circle",pointRadius:10,pointHoverRadius:15}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}},B={type:"line",data:{labels:["Jan","Feb","March","April","May","June","July"],datasets:[{label:"Dataset 1",data:[65,59,NaN,48,56,57,40],borderColor:a[0],spanGaps:!0,segment:{borderColor:function(s){return c(s,"rgb(0,0,0,0.2)")||D(s,"rgb(192,75,75)")},borderDash:function(s){return c(s,[6,6])}}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}},k={type:"line",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15,14,-8],borderColor:a[0],fill:!1,stepped:!0}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,axis:"x"},plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},M=()=>(C.useEffect(()=>{const s=document.getElementById("interpolation-example"),n=new i(s,R),p=document.getElementById("line-example"),h=new i(p,N),y=document.getElementById("multi-axes-example"),x=new i(y,S),m=document.getElementById("point-styling-example"),u=new i(m,A),g=document.getElementById("line-segment-example"),f=new i(g,B),j=document.getElementById("stepped-example"),b=new i(j,k);return()=>{n.destroy(),h.destroy(),x.destroy(),u.destroy(),f.destroy(),b.destroy()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Line Chartjs",subName:"Chartjs"}),e.jsxs(r,{children:[e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Interpolation"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"interpolation-example","data-colors":"#727cf5,#0acf97"})})})]})})}),e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Line"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"line-example","data-colors":"#727cf5,#0acf97"})})})]})})})]}),e.jsxs(r,{children:[e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Multi-Axes"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"multi-axes-example","data-colors":"#727cf5,#0acf97"})})})]})})}),e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Point Styling"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"point-styling-example","data-colors":"#727cf5,#0acf97"})})})]})})})]}),e.jsxs(r,{children:[e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Line Segment"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"line-segment-example","data-colors":"#727cf5,#0acf97"})})})]})})}),e.jsx(l,{xl:6,children:e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title mb-4",children:"Stepped"}),e.jsx("div",{dir:"ltr",children:e.jsx("div",{className:"mt-3 chartjs-chart",style:{height:320},children:e.jsx("canvas",{id:"stepped-example","data-colors":"#727cf5,#0acf97"})})})]})})})]})]}));export{M as default};
