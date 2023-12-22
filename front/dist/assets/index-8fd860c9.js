import{j as e,P as N,b as h,c as a,d as c,I as t}from"./index-95d4de05.js";let o=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46];function n(s){let r=s.slice(),i=r.length,d,l;for(;i!==0;)l=Math.floor(Math.random()*i),i-=1,d=r[i],r[i]=r[l],r[l]=d;return r}const x={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Attex Sales ",data:n(o)}],yaxis:{min:0},colors:["#DCE6EC"],title:{text:"$424,652",offsetX:20,style:{fontSize:"24px"}},subtitle:{text:"Sales",offsetX:20,style:{fontSize:"14px"}}},p={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Attex Expenses ",data:n(o)}],yaxis:{min:0},colors:["#DCE6EC"],title:{text:"$235,312",offsetX:20,style:{fontSize:"24px"}},subtitle:{text:"Expenses",offsetX:20,style:{fontSize:"14px"}}},f={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Net Profits ",data:n(o)}],xaxis:{crosshairs:{width:1}},yaxis:{min:0},colors:["#0acf97"],title:{text:"$135,965",offsetX:20,style:{fontSize:"24px"}},subtitle:{text:"Profits",offsetX:20,style:{fontSize:"14px"}}},m={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0}},series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],stroke:{width:2,curve:"smooth"},markers:{size:0},colors:["#727cf5"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},j={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0}},colors:["#0acf97"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},u={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0}},colors:["#ffbc00"],series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},b={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0}},colors:["#fa5c7c"],series:[{data:[15,75,47,65,14,2,41,54,4,27,15]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},y={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#727cf5"],series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],labels:["1","2","3","4","5","6","7","8","9","10","11"],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},w={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#0acf97"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],labels:["1","2","3","4","5","6","7","8","9","10","11"],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},k={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#ffbc00"],series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],labels:["1","2","3","4","5","6","7","8","9","10","11"],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},g={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#fa5c7c"],series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],labels:["1","2","3","4","5","6","7","8","9","10","11"],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}}},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Sparklines",subName:"Apex"}),e.jsx(h,{children:e.jsx(a,{children:e.jsx(c,{children:e.jsxs(c.Body,{children:[e.jsxs(h,{dir:"ltr",children:[e.jsx(a,{md:4,children:e.jsx(t,{className:"apex-charts",options:x,height:160,series:x.series,type:"area"})}),e.jsx(a,{md:4,children:e.jsx(t,{className:"apex-charts",options:p,height:160,series:p.series,type:"area"})}),e.jsx(a,{md:4,children:e.jsx(t,{className:"apex-charts",options:f,height:160,series:f.series,type:"area"})})]}),e.jsx(h,{className:"mt-3",children:e.jsx(a,{children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-centered mb-0",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Total Value"}),e.jsx("th",{children:"Percentage of Portfolio"}),e.jsx("th",{children:"Last 10 days"}),e.jsx("th",{children:"Volume"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"$32,554"}),e.jsx("td",{children:"15%"}),e.jsx("td",{children:e.jsx(t,{options:m,series:m.series,type:"line",width:140,height:60})}),e.jsx("td",{children:e.jsx(t,{options:y,series:y.series,type:"bar",width:100,height:60})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"$23,533"}),e.jsx("td",{children:"7%"}),e.jsx("td",{children:e.jsx(t,{options:j,series:j.series,type:"line",width:140,height:60})}),e.jsx("td",{children:e.jsx(t,{options:w,series:w.series,type:"bar",width:100,height:60})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"$54,276"}),e.jsx("td",{children:"9%"}),e.jsx("td",{children:e.jsx(t,{options:u,series:u.series,type:"line",width:140,height:60})}),e.jsx("td",{children:e.jsx(t,{options:k,series:k.series,type:"bar",width:100,height:60})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"$11,533"}),e.jsx("td",{children:"2%"}),e.jsx("td",{children:e.jsx(t,{options:b,series:b.series,type:"line",width:140,height:60})}),e.jsx("td",{children:e.jsx(t,{options:g,series:g.series,type:"bar",width:100,height:60})})]})]})]})})})})]})})})})]});export{C as default};
