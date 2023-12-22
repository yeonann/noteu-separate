import{W as O,r as a,j as h,ad as _,ae as we,af as J,ag as G,ah as he,ai as xe,aj as ye,ak as q,al as be,am as ve,S,e as M,an as Ce,ao as De,$ as Q,a5 as $e,ap as Ee,a3 as ke}from"./index-95d4de05.js";import{$ as je,u as Ne}from"./import-815490c4.js";import{u as Ie}from"./useCallbackRef-c49852eb.js";import{a as Pe,m as Re,u as Te}from"./mergeOptionsWithPopperConfig-05ca3ed5.js";import{I as X}from"./InputGroupContext-e35a4b4e.js";import{B as Se}from"./Button-106b053f.js";function Me(o,e,t,s=!1){const n=O(t);a.useEffect(()=>{const r=typeof o=="function"?o():o;return r.addEventListener(e,n,s),()=>r.removeEventListener(e,n,s)},[o])}const Oe=a.createContext(null),K=Oe,Ae=["children"];function We(o,e){if(o==null)return{};var t={},s=Object.keys(o),n,r;for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}const Fe=()=>{};function Y(o={}){const e=a.useContext(K),[t,s]=Ie(),n=a.useRef(!1),{flip:r,offset:u,rootCloseEvent:i,fixed:d=!1,placement:l,popperConfig:m={},enableEventListeners:c=!0,usePopper:x=!!e}=o,g=(e==null?void 0:e.show)==null?!!o.show:e.show;g&&!n.current&&(n.current=!0);const $=R=>{e==null||e.toggle(!1,R)},{placement:E,setMenu:C,menuElement:I,toggleElement:k}=e||{},w=Pe(k,I,Re({placement:l||E||"bottom-start",enabled:x,enableEvents:c??g,offset:u,flip:r,fixed:d,arrowElement:t,popperConfig:m})),P=Object.assign({ref:C||Fe,"aria-labelledby":k==null?void 0:k.id},w.attributes.popper,{style:w.styles.popper}),y={show:g,placement:E,hasShown:n.current,toggle:e==null?void 0:e.toggle,popper:x?w:null,arrowProps:x?Object.assign({ref:s},w.attributes.arrow,{style:w.styles.arrow}):{}};return Te(I,$,{clickTrigger:i,disabled:!g}),[P,y]}const Ke={usePopper:!0};function H(o){let{children:e}=o,t=We(o,Ae);const[s,n]=Y(t);return h.jsx(h.Fragment,{children:e(s,n)})}H.displayName="DropdownMenu";H.defaultProps=Ke;const Z=o=>{var e;return((e=o.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},V=()=>{};function ee(){const o=je(),{show:e=!1,toggle:t=V,setToggle:s,menuElement:n}=a.useContext(K)||{},r=a.useCallback(i=>{t(!e,i)},[e,t]),u={id:o,ref:s||V,onClick:r,"aria-expanded":!!e};return n&&Z(n)&&(u["aria-haspopup"]=!0),[u,{show:e,toggle:t}]}function te({children:o}){const[e,t]=ee();return h.jsx(h.Fragment,{children:o(e,t)})}te.displayName="DropdownToggle";const Ue=["eventKey","disabled","onClick","active","as"];function _e(o,e){if(o==null)return{};var t={},s=Object.keys(o),n,r;for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}function oe({key:o,href:e,active:t,disabled:s,onClick:n}){const r=a.useContext(_),u=a.useContext(we),{activeKey:i}=u||{},d=G(o,e),l=t==null&&o!=null?G(i)===d:t;return[{onClick:O(c=>{s||(n==null||n(c),r&&!c.isPropagationStopped()&&r(d,c))}),"aria-disabled":s||void 0,"aria-selected":l,[J("dropdown-item")]:""},{isActive:l}]}const ne=a.forwardRef((o,e)=>{let{eventKey:t,disabled:s,onClick:n,active:r,as:u=he}=o,i=_e(o,Ue);const[d]=oe({key:t,href:i.href,disabled:s,onClick:n,active:r});return h.jsx(u,Object.assign({},i,{ref:e},d))});ne.displayName="DropdownItem";function z(){const o=ve(),e=a.useRef(null),t=a.useCallback(s=>{e.current=s,o()},[o]);return[e,t]}function F({defaultShow:o,show:e,onSelect:t,onToggle:s,itemSelector:n=`* [${J("dropdown-item")}]`,focusFirstItemOnShow:r,placement:u="bottom-start",children:i}){const d=xe(),[l,m]=Ne(e,o,s),[c,x]=z(),g=c.current,[$,E]=z(),C=$.current,I=ye(l),k=a.useRef(null),w=a.useRef(!1),P=a.useContext(_),y=a.useCallback((p,f,b=f==null?void 0:f.type)=>{m(p,{originalEvent:f,source:b})},[m]),R=O((p,f)=>{t==null||t(p,f),y(!1,f,"select"),f.isPropagationStopped()||P==null||P(p,f)}),D=a.useMemo(()=>({toggle:y,placement:u,show:l,menuElement:g,toggleElement:C,setMenu:x,setToggle:E}),[y,u,l,g,C,x,E]);g&&I&&!l&&(w.current=g.contains(g.ownerDocument.activeElement));const v=O(()=>{C&&C.focus&&C.focus()}),A=O(()=>{const p=k.current;let f=r;if(f==null&&(f=c.current&&Z(c.current)?"keyboard":!1),f===!1||f==="keyboard"&&!/^key.+$/.test(p))return;const b=q(c.current,n)[0];b&&b.focus&&b.focus()});a.useEffect(()=>{l?A():w.current&&(w.current=!1,v())},[l,w,v,A]),a.useEffect(()=>{k.current=null});const W=(p,f)=>{if(!c.current)return null;const b=q(c.current,n);let N=b.indexOf(p)+f;return N=Math.max(0,Math.min(N,b.length)),b[N]};return Me(a.useCallback(()=>d.document,[d]),"keydown",p=>{var f,b;const{key:N}=p,T=p.target,L=(f=c.current)==null?void 0:f.contains(T),ge=(b=$.current)==null?void 0:b.contains(T);if(/input|textarea/i.test(T.tagName)&&(N===" "||N!=="Escape"&&L||N==="Escape"&&T.type==="search")||!L&&!ge||N==="Tab"&&(!c.current||!l))return;k.current=p.type;const U={originalEvent:p,source:p.type};switch(N){case"ArrowUp":{const j=W(T,-1);j&&j.focus&&j.focus(),p.preventDefault();return}case"ArrowDown":if(p.preventDefault(),!l)m(!0,U);else{const j=W(T,1);j&&j.focus&&j.focus()}return;case"Tab":be(T.ownerDocument,"keyup",j=>{var B;(j.key==="Tab"&&!j.target||!((B=c.current)!=null&&B.contains(j.target)))&&m(!1,U)},{once:!0});break;case"Escape":N==="Escape"&&(p.preventDefault(),p.stopPropagation()),m(!1,U);break}}),h.jsx(_.Provider,{value:R,children:h.jsx(K.Provider,{value:D,children:i})})}F.displayName="Dropdown";F.Menu=H;F.Toggle=te;F.Item=ne;const se=a.createContext({});se.displayName="DropdownContext";const re=se,ae=a.forwardRef(({className:o,bsPrefix:e,as:t="hr",role:s="separator",...n},r)=>(e=S(e,"dropdown-divider"),h.jsx(t,{ref:r,className:M(o,e),role:s,...n})));ae.displayName="DropdownDivider";const He=ae,ce=a.forwardRef(({className:o,bsPrefix:e,as:t="div",role:s="heading",...n},r)=>(e=S(e,"dropdown-header"),h.jsx(t,{ref:r,className:M(o,e),role:s,...n})));ce.displayName="DropdownHeader";const Le=ce,le=a.forwardRef(({bsPrefix:o,className:e,eventKey:t,disabled:s=!1,onClick:n,active:r,as:u=Ce,...i},d)=>{const l=S(o,"dropdown-item"),[m,c]=oe({key:t,href:i.href,disabled:s,onClick:n,active:r});return h.jsx(u,{...i,...m,ref:d,className:M(e,l,c.isActive&&"active",s&&"disabled")})});le.displayName="DropdownItem";const Be=le,ue=a.forwardRef(({className:o,bsPrefix:e,as:t="span",...s},n)=>(e=S(e,"dropdown-item-text"),h.jsx(t,{ref:n,className:M(o,e),...s})));ue.displayName="DropdownItemText";const Ge=ue;function ie(o,e){return o}function de(o,e,t){const s=t?"top-end":"top-start",n=t?"top-start":"top-end",r=t?"bottom-end":"bottom-start",u=t?"bottom-start":"bottom-end",i=t?"right-start":"left-start",d=t?"right-end":"left-end",l=t?"left-start":"right-start",m=t?"left-end":"right-end";let c=o?u:r;return e==="up"?c=o?n:s:e==="end"?c=o?m:l:e==="start"?c=o?d:i:e==="down-centered"?c="bottom":e==="up-centered"&&(c="top"),c}const pe=a.forwardRef(({bsPrefix:o,className:e,align:t,rootCloseEvent:s,flip:n=!0,show:r,renderOnMount:u,as:i="div",popperConfig:d,variant:l,...m},c)=>{let x=!1;const g=a.useContext(De),$=S(o,"dropdown-menu"),{align:E,drop:C,isRTL:I}=a.useContext(re);t=t||E;const k=a.useContext(X),w=[];if(t)if(typeof t=="object"){const p=Object.keys(t);if(p.length){const f=p[0],b=t[f];x=b==="start",w.push(`${$}-${f}-${b}`)}}else t==="end"&&(x=!0);const P=de(x,C,I),[y,{hasShown:R,popper:D,show:v,toggle:A}]=Y({flip:n,rootCloseEvent:s,show:r,usePopper:!g&&w.length===0,offset:[0,2],popperConfig:d,placement:P});if(y.ref=Q(ie(c),y.ref),$e(()=>{v&&(D==null||D.update())},[v]),!R&&!u&&!k)return null;typeof i!="string"&&(y.show=v,y.close=()=>A==null?void 0:A(!1),y.align=t);let W=m.style;return D!=null&&D.placement&&(W={...m.style,...y.style},m["x-placement"]=D.placement),h.jsx(i,{...m,...y,style:W,...(w.length||g)&&{"data-bs-popper":"static"},className:M(e,$,v&&"show",x&&`${$}-end`,l&&`${$}-${l}`,...w)})});pe.displayName="DropdownMenu";const qe=pe,fe=a.forwardRef(({bsPrefix:o,split:e,className:t,childBsPrefix:s,as:n=Se,...r},u)=>{const i=S(o,"dropdown-toggle"),d=a.useContext(K);s!==void 0&&(r.bsPrefix=s);const[l]=ee();return l.ref=Q(l.ref,ie(u)),h.jsx(n,{className:M(t,i,e&&`${i}-split`,(d==null?void 0:d.show)&&"show"),...l,...r})});fe.displayName="DropdownToggle";const Ve=fe,me=a.forwardRef((o,e)=>{const{bsPrefix:t,drop:s="down",show:n,className:r,align:u="start",onSelect:i,onToggle:d,focusFirstItemOnShow:l,as:m="div",navbar:c,autoClose:x=!0,...g}=Ee(o,{show:"onToggle"}),$=a.useContext(X),E=S(t,"dropdown"),C=ke(),I=D=>x===!1?D==="click":x==="inside"?D!=="rootClose":x==="outside"?D!=="select":!0,k=O((D,v)=>{v.originalEvent.currentTarget===document&&(v.source!=="keydown"||v.originalEvent.key==="Escape")&&(v.source="rootClose"),I(v.source)&&(d==null||d(D,v))}),P=de(u==="end",s,C),y=a.useMemo(()=>({align:u,drop:s,isRTL:C}),[u,s,C]),R={down:E,"down-centered":`${E}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return h.jsx(re.Provider,{value:y,children:h.jsx(F,{placement:P,show:n,onSelect:i,onToggle:k,focusFirstItemOnShow:l,itemSelector:`.${E}-item:not(.disabled):not(:disabled)`,children:$?g.children:h.jsx(m,{...g,ref:e,className:M(r,n&&"show",R[s])})})})});me.displayName="Dropdown";const tt=Object.assign(me,{Toggle:Ve,Menu:qe,Item:Be,ItemText:Ge,Divider:He,Header:Le});export{tt as D,Ve as a,qe as b};
