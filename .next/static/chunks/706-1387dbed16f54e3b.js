"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{4487:(t,e,o)=>{o.d(e,{A:()=>i});var r=o(2115),n=o(149),a=o(8741);let i=t=>{let{space:e,form:o,children:i}=t;if(null==i)return null;let l=i;return o&&(l=r.createElement(n.XB,{override:!0,status:!0},l)),e&&(l=r.createElement(a.K6,null,l)),l}},9023:(t,e,o)=>{o.d(e,{aB:()=>g,nF:()=>a});var r=o(7548),n=o(9698);let a=new r.Mo("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),i=new r.Mo("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),l=new r.Mo("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),c=new r.Mo("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),s=new r.Mo("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),f=new r.Mo("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),u=new r.Mo("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),p=new r.Mo("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),m=new r.Mo("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),d={zoom:{inKeyframes:a,outKeyframes:i},"zoom-big":{inKeyframes:l,outKeyframes:c},"zoom-big-fast":{inKeyframes:l,outKeyframes:c},"zoom-left":{inKeyframes:u,outKeyframes:p},"zoom-right":{inKeyframes:m,outKeyframes:new r.Mo("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:s,outKeyframes:f},"zoom-down":{inKeyframes:new r.Mo("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new r.Mo("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},g=(t,e)=>{let{antCls:o}=t,r="".concat(o,"-").concat(e),{inKeyframes:a,outKeyframes:i}=d[e];return[(0,n.b)(r,a,i,"zoom-big-fast"===e?t.motionDurationFast:t.motionDurationMid),{["\n        ".concat(r,"-enter,\n        ").concat(r,"-appear\n      ")]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},["".concat(r,"-leave")]:{animationTimingFunction:t.motionEaseInOutCirc}}]}},3116:(t,e,o)=>{o.d(e,{A:()=>F});var r=o(2115),n=o(4617),a=o.n(n);function i(t){var e=t.children,o=t.prefixCls,n=t.id,i=t.overlayInnerStyle,l=t.className,c=t.style;return r.createElement("div",{className:a()("".concat(o,"-content"),l),style:c},r.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:i},"function"==typeof e?e():e))}var l=o(5407),c=o(5268),s=o(4406),f=o(8288),u={shiftX:64,adjustY:1},p={adjustX:1,shiftY:!0},m=[0,0],d={left:{points:["cr","cl"],overflow:p,offset:[-4,0],targetOffset:m},right:{points:["cl","cr"],overflow:p,offset:[4,0],targetOffset:m},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:m},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:m},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:m},leftTop:{points:["tr","tl"],overflow:p,offset:[-4,0],targetOffset:m},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:m},rightTop:{points:["tl","tr"],overflow:p,offset:[4,0],targetOffset:m},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:m},rightBottom:{points:["bl","br"],overflow:p,offset:[4,0],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:m},leftBottom:{points:["br","bl"],overflow:p,offset:[-4,0],targetOffset:m}},g=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"];let b=(0,r.forwardRef)(function(t,e){var o=t.overlayClassName,n=t.trigger,a=t.mouseEnterDelay,u=t.mouseLeaveDelay,p=t.overlayStyle,m=t.prefixCls,b=void 0===m?"rc-tooltip":m,h=t.children,y=t.onVisibleChange,v=t.afterVisibleChange,w=t.transitionName,O=t.animation,j=t.motion,_=t.placement,C=t.align,k=t.destroyTooltipOnHide,P=t.defaultVisible,E=t.getTooltipContainer,x=t.overlayInnerStyle,M=(t.arrowContent,t.overlay),R=t.id,A=t.showArrow,I=(0,s.A)(t,g),T=(0,r.useRef)(null);(0,r.useImperativeHandle)(e,function(){return T.current});var S=(0,c.A)({},I);return"visible"in t&&(S.popupVisible=t.visible),r.createElement(f.A,(0,l.A)({popupClassName:o,prefixCls:b,popup:function(){return r.createElement(i,{key:"content",prefixCls:b,id:R,overlayInnerStyle:x},M)},action:void 0===n?["hover"]:n,builtinPlacements:d,popupPlacement:void 0===_?"right":_,ref:T,popupAlign:void 0===C?{}:C,getPopupContainer:E,onPopupVisibleChange:y,afterPopupVisibleChange:v,popupTransitionName:w,popupAnimation:O,popupMotion:j,defaultPopupVisible:P,autoDestroy:void 0!==k&&k,mouseLeaveDelay:void 0===u?.1:u,popupStyle:p,mouseEnterDelay:void 0===a?0:a,arrow:void 0===A||A},S),h)});var h=o(5015),y=o(4487),v=o(8877),w=o(9635),O=o(7548);let j=(t,e,o)=>{let{sizePopupArrow:r,arrowPolygon:n,arrowPath:a,arrowShadowWidth:i,borderRadiusXS:l,calc:c}=t;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:c(r).div(2).equal(),background:e,clipPath:{_multi_value_:!0,value:[n,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:i,height:i,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:"0 0 ".concat((0,O.zA)(l)," 0")},transform:"translateY(50%) rotate(-135deg)",boxShadow:o,zIndex:0,background:"transparent"}}};function _(t){let{contentRadius:e,limitVerticalRadius:o}=t,r=e>12?e+2:12;return{arrowOffsetHorizontal:r,arrowOffsetVertical:o?8:r}}let C={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},k={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},P=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);var E=o(8292),x=o(8415),M=o(8430),R=o(1049),A=o(335),I=o(695),T=o(9023),S=o(6258),N=o(6204),z=o(1086);let L=t=>{let{calc:e,componentCls:o,tooltipMaxWidth:r,tooltipColor:n,tooltipBg:a,tooltipBorderRadius:i,zIndexPopup:l,controlHeight:c,boxShadowSecondary:s,paddingSM:f,paddingXS:u,arrowOffsetHorizontal:p,sizePopupArrow:m}=t,d=e(i).add(m).add(p).equal(),g=e(i).mul(2).add(m).equal();return[{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,I.dF)(t)),{position:"absolute",zIndex:l,display:"block",width:"max-content",maxWidth:r,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:"var(--valid-offset-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":a,["".concat(o,"-inner")]:{minWidth:g,minHeight:c,padding:"".concat((0,O.zA)(t.calc(f).div(2).equal())," ").concat((0,O.zA)(u)),color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:i,boxShadow:s,boxSizing:"border-box"},"&-placement-topLeft,&-placement-topRight,&-placement-bottomLeft,&-placement-bottomRight":{minWidth:d},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{["".concat(o,"-inner")]:{borderRadius:t.min(i,8)}},["".concat(o,"-content")]:{position:"relative"}}),(0,S.A)(t,(t,e)=>{let{darkColor:r}=e;return{["&".concat(o,"-").concat(t)]:{["".concat(o,"-inner")]:{backgroundColor:r},["".concat(o,"-arrow")]:{"--antd-arrow-background-color":r}}}})),{"&-rtl":{direction:"rtl"}})},function(t,e,o){var r,n,a,i,l,c,s,f;let{componentCls:u,boxShadowPopoverArrow:p,arrowOffsetVertical:m,arrowOffsetHorizontal:d}=t,{arrowDistance:g=0,arrowPlacement:b={left:!0,right:!0,top:!0,bottom:!0}}={};return{[u]:Object.assign(Object.assign(Object.assign(Object.assign({["".concat(u,"-arrow")]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},j(t,e,p)),{"&:before":{background:e}})]},(r=!!b.top,n={[["&-placement-top > ".concat(u,"-arrow"),"&-placement-topLeft > ".concat(u,"-arrow"),"&-placement-topRight > ".concat(u,"-arrow")].join(",")]:{bottom:g,transform:"translateY(100%) rotate(180deg)"},["&-placement-top > ".concat(u,"-arrow")]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":d,["> ".concat(u,"-arrow")]:{left:{_skip_check_:!0,value:d}}},"&-placement-topRight":{"--arrow-offset-horizontal":"calc(100% - ".concat((0,O.zA)(d),")"),["> ".concat(u,"-arrow")]:{right:{_skip_check_:!0,value:d}}}},r?n:{})),(a=!!b.bottom,i={[["&-placement-bottom > ".concat(u,"-arrow"),"&-placement-bottomLeft > ".concat(u,"-arrow"),"&-placement-bottomRight > ".concat(u,"-arrow")].join(",")]:{top:g,transform:"translateY(-100%)"},["&-placement-bottom > ".concat(u,"-arrow")]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":d,["> ".concat(u,"-arrow")]:{left:{_skip_check_:!0,value:d}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":"calc(100% - ".concat((0,O.zA)(d),")"),["> ".concat(u,"-arrow")]:{right:{_skip_check_:!0,value:d}}}},a?i:{})),(l=!!b.left,c={[["&-placement-left > ".concat(u,"-arrow"),"&-placement-leftTop > ".concat(u,"-arrow"),"&-placement-leftBottom > ".concat(u,"-arrow")].join(",")]:{right:{_skip_check_:!0,value:g},transform:"translateX(100%) rotate(90deg)"},["&-placement-left > ".concat(u,"-arrow")]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},["&-placement-leftTop > ".concat(u,"-arrow")]:{top:m},["&-placement-leftBottom > ".concat(u,"-arrow")]:{bottom:m}},l?c:{})),(s=!!b.right,f={[["&-placement-right > ".concat(u,"-arrow"),"&-placement-rightTop > ".concat(u,"-arrow"),"&-placement-rightBottom > ".concat(u,"-arrow")].join(",")]:{left:{_skip_check_:!0,value:g},transform:"translateX(-100%) rotate(-90deg)"},["&-placement-right > ".concat(u,"-arrow")]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},["&-placement-rightTop > ".concat(u,"-arrow")]:{top:m},["&-placement-rightBottom > ".concat(u,"-arrow")]:{bottom:m}},s?f:{}))}}(t,"var(--antd-arrow-background-color)"),{["".concat(o,"-pure")]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},B=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},_({contentRadius:t.borderRadius,limitVerticalRadius:!0})),function(t){let{sizePopupArrow:e,borderRadiusXS:o,borderRadiusOuter:r}=t,n=e/2,a=1*r/Math.sqrt(2),i=n-r*(1-1/Math.sqrt(2)),l=n-1/Math.sqrt(2)*o,c=r*(Math.sqrt(2)-1)+1/Math.sqrt(2)*o,s=2*n-l,f=2*n-a,u=2*n-0,p=n*Math.sqrt(2)+r*(Math.sqrt(2)-2),m=r*(Math.sqrt(2)-1),d="polygon(".concat(m,"px 100%, 50% ").concat(m,"px, ").concat(2*n-m,"px 100%, ").concat(m,"px 100%)");return{arrowShadowWidth:p,arrowPath:"path('M ".concat(0," ").concat(n," A ").concat(r," ").concat(r," 0 0 0 ").concat(a," ").concat(i," L ").concat(l," ").concat(c," A ").concat(o," ").concat(o," 0 0 1 ").concat(s," ").concat(c," L ").concat(f," ").concat(i," A ").concat(r," ").concat(r," 0 0 0 ").concat(u," ").concat(n," Z')"),arrowPolygon:d}}((0,N.oX)(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)})));function D(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(0,z.OF)("Tooltip",t=>{let{borderRadius:e,colorTextLightSolid:o,colorBgSpotlight:r}=t;return[L((0,N.oX)(t,{tooltipMaxWidth:250,tooltipColor:o,tooltipBorderRadius:e,tooltipBg:r})),(0,T.aB)(t,"zoom-big-fast")]},B,{resetStyle:!1,injectStyle:e})(t)}var K=o(8673);function V(t,e){let o=(0,K.nP)(e),r=a()({["".concat(t,"-").concat(e)]:e&&o}),n={},i={};return e&&!o&&(n.background=e,i["--antd-arrow-background-color"]=e),{className:r,overlayStyle:n,arrowStyle:i}}var X=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o};let q=r.forwardRef((t,e)=>{var o,n;let{prefixCls:i,openClassName:l,getTooltipContainer:c,overlayClassName:s,color:f,overlayInnerStyle:u,children:p,afterOpenChange:m,afterVisibleChange:d,destroyTooltipOnHide:g,arrow:O=!0,title:j,overlay:I,builtinPlacements:T,arrowPointAtCenter:S=!1,autoAdjustOverflow:N=!0}=t,z=!!O,[,L]=(0,A.Ay)(),{getPopupContainer:B,getPrefixCls:K,direction:q}=r.useContext(R.QO),F=(0,x.rJ)("Tooltip"),Y=r.useRef(null),U=()=>{var t;null===(t=Y.current)||void 0===t||t.forceAlign()};r.useImperativeHandle(e,()=>{var t;return{forceAlign:U,forcePopupAlign:()=>{F.deprecated(!1,"forcePopupAlign","forceAlign"),U()},nativeElement:null===(t=Y.current)||void 0===t?void 0:t.nativeElement}});let[Z,H]=(0,h.A)(!1,{value:null!==(o=t.open)&&void 0!==o?o:t.visible,defaultValue:null!==(n=t.defaultOpen)&&void 0!==n?n:t.defaultVisible}),W=!j&&!I&&0!==j,Q=r.useMemo(()=>{var t,e;let o=S;return"object"==typeof O&&(o=null!==(e=null!==(t=O.pointAtCenter)&&void 0!==t?t:O.arrowPointAtCenter)&&void 0!==e?e:S),T||function(t){let{arrowWidth:e,autoAdjustOverflow:o,arrowPointAtCenter:r,offset:n,borderRadius:a,visibleFirst:i}=t,l=e/2,c={};return Object.keys(C).forEach(t=>{let s=Object.assign(Object.assign({},r&&k[t]||C[t]),{offset:[0,0],dynamicInset:!0});switch(c[t]=s,P.has(t)&&(s.autoArrow=!1),t){case"top":case"topLeft":case"topRight":s.offset[1]=-l-n;break;case"bottom":case"bottomLeft":case"bottomRight":s.offset[1]=l+n;break;case"left":case"leftTop":case"leftBottom":s.offset[0]=-l-n;break;case"right":case"rightTop":case"rightBottom":s.offset[0]=l+n}let f=_({contentRadius:a,limitVerticalRadius:!0});if(r)switch(t){case"topLeft":case"bottomLeft":s.offset[0]=-f.arrowOffsetHorizontal-l;break;case"topRight":case"bottomRight":s.offset[0]=f.arrowOffsetHorizontal+l;break;case"leftTop":case"rightTop":s.offset[1]=-(2*f.arrowOffsetHorizontal)+l;break;case"leftBottom":case"rightBottom":s.offset[1]=2*f.arrowOffsetHorizontal-l}s.overflow=function(t,e,o,r){if(!1===r)return{adjustX:!1,adjustY:!1};let n={};switch(t){case"top":case"bottom":n.shiftX=2*e.arrowOffsetHorizontal+o,n.shiftY=!0,n.adjustY=!0;break;case"left":case"right":n.shiftY=2*e.arrowOffsetVertical+o,n.shiftX=!0,n.adjustX=!0}let a=Object.assign(Object.assign({},n),r&&"object"==typeof r?r:{});return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}(t,f,e,o),i&&(s.htmlRegion="visibleFirst")}),c}({arrowPointAtCenter:o,autoAdjustOverflow:N,arrowWidth:z?L.sizePopupArrow:0,borderRadius:L.borderRadius,offset:L.marginXXS,visibleFirst:!0})},[S,O,T,L]),J=r.useMemo(()=>0===j?j:I||j||"",[I,j]),G=r.createElement(y.A,{space:!0},"function"==typeof J?J():J),{getPopupContainer:$,placement:tt="top",mouseEnterDelay:te=.1,mouseLeaveDelay:to=.1,overlayStyle:tr,rootClassName:tn}=t,ta=X(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),ti=K("tooltip",i),tl=K(),tc=t["data-popover-inject"],ts=Z;"open"in t||"visible"in t||!W||(ts=!1);let tf=r.isValidElement(p)&&!(0,E.zv)(p)?p:r.createElement("span",null,p),tu=tf.props,tp=tu.className&&"string"!=typeof tu.className?tu.className:a()(tu.className,l||"".concat(ti,"-open")),[tm,td,tg]=D(ti,!tc),tb=V(ti,f),th=tb.arrowStyle,ty=Object.assign(Object.assign({},u),tb.overlayStyle),tv=a()(s,{["".concat(ti,"-rtl")]:"rtl"===q},tb.className,tn,td,tg),[tw,tO]=(0,v.YK)("Tooltip",ta.zIndex),tj=r.createElement(b,Object.assign({},ta,{zIndex:tw,showArrow:z,placement:tt,mouseEnterDelay:te,mouseLeaveDelay:to,prefixCls:ti,overlayClassName:tv,overlayStyle:Object.assign(Object.assign({},th),tr),getTooltipContainer:$||c||B,ref:Y,builtinPlacements:Q,overlay:G,visible:ts,onVisibleChange:e=>{var o,r;H(!W&&e),W||(null===(o=t.onOpenChange)||void 0===o||o.call(t,e),null===(r=t.onVisibleChange)||void 0===r||r.call(t,e))},afterVisibleChange:null!=m?m:d,overlayInnerStyle:ty,arrowContent:r.createElement("span",{className:"".concat(ti,"-arrow-content")}),motion:{motionName:(0,w.b)(tl,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!g}),ts?(0,E.Ob)(tf,{className:tp}):tf);return tm(r.createElement(M.A.Provider,{value:tO},tj))});q._InternalPanelDoNotUseOrYouWillBeFired=t=>{let{prefixCls:e,className:o,placement:n="top",title:l,color:c,overlayInnerStyle:s}=t,{getPrefixCls:f}=r.useContext(R.QO),u=f("tooltip",e),[p,m,d]=D(u),g=V(u,c),b=g.arrowStyle,h=Object.assign(Object.assign({},s),g.overlayStyle),y=a()(m,d,u,"".concat(u,"-pure"),"".concat(u,"-placement-").concat(n),o,g.className);return p(r.createElement("div",{className:y,style:b},r.createElement("div",{className:"".concat(u,"-arrow")}),r.createElement(i,Object.assign({},t,{className:m,prefixCls:u,overlayInnerStyle:h}),l)))};let F=q},8173:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return g}});let r=o(306),n=o(5155),a=r._(o(2115)),i=o(180),l=o(1394),c=o(4116),s=o(4445),f=o(5353),u=o(2170),p=o(9544);function m(t,e,o){"undefined"!=typeof window&&(async()=>t.prefetch(e,o))().catch(t=>{})}function d(t){return"string"==typeof t?t:(0,i.formatUrl)(t)}o(2363);let g=a.default.forwardRef(function(t,e){let o,r;let{href:i,as:g,children:b,prefetch:h=null,passHref:y,replace:v,shallow:w,scroll:O,onClick:j,onMouseEnter:_,onTouchStart:C,legacyBehavior:k=!1,...P}=t;o=b,k&&("string"==typeof o||"number"==typeof o)&&(o=(0,n.jsx)("a",{children:o}));let E=a.default.useContext(l.AppRouterContext),x=!1!==h,M=null===h?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:R,as:A}=a.default.useMemo(()=>{let t=d(i);return{href:t,as:g?d(g):t}},[i,g]),I=a.default.useRef(R),T=a.default.useRef(A);k&&(r=a.default.Children.only(o));let S=k?r&&"object"==typeof r&&r.ref:e,[N,z,L]=(0,c.useIntersection)({rootMargin:"200px"}),B=a.default.useCallback(t=>{(T.current!==A||I.current!==R)&&(L(),T.current=A,I.current=R),N(t)},[A,R,L,N]),D=(0,f.useMergedRef)(B,S);a.default.useEffect(()=>{E&&z&&x&&m(E,R,{kind:M})},[A,R,z,x,E,M]);let K={ref:D,onClick(t){k||"function"!=typeof j||j(t),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),E&&!t.defaultPrevented&&function(t,e,o,r,n,i,l){let{nodeName:c}=t.currentTarget;"A"===c.toUpperCase()&&function(t){let e=t.currentTarget.getAttribute("target");return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)||(t.preventDefault(),a.default.startTransition(()=>{let t=null==l||l;"beforePopState"in e?e[n?"replace":"push"](o,r,{shallow:i,scroll:t}):e[n?"replace":"push"](r||o,{scroll:t})}))}(t,E,R,A,v,w,O)},onMouseEnter(t){k||"function"!=typeof _||_(t),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),E&&x&&m(E,R,{kind:M})},onTouchStart:function(t){k||"function"!=typeof C||C(t),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),E&&x&&m(E,R,{kind:M})}};return(0,u.isAbsoluteUrl)(A)?K.href=A:k&&!y&&("a"!==r.type||"href"in r.props)||(K.href=(0,p.addBasePath)(A)),k?a.default.cloneElement(r,K):(0,n.jsx)("a",{...P,...K,children:o})});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},8571:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return o}});let o="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){let e=Date.now();return self.setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(t){return clearTimeout(t)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4116:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return c}});let r=o(2115),n=o(8571),a="function"==typeof IntersectionObserver,i=new Map,l=[];function c(t){let{rootRef:e,rootMargin:o,disabled:c}=t,s=c||!a,[f,u]=(0,r.useState)(!1),p=(0,r.useRef)(null),m=(0,r.useCallback)(t=>{p.current=t},[]);return(0,r.useEffect)(()=>{if(a){if(s||f)return;let t=p.current;if(t&&t.tagName)return function(t,e,o){let{id:r,observer:n,elements:a}=function(t){let e;let o={root:t.root||null,margin:t.rootMargin||""},r=l.find(t=>t.root===o.root&&t.margin===o.margin);if(r&&(e=i.get(r)))return e;let n=new Map;return e={id:o,observer:new IntersectionObserver(t=>{t.forEach(t=>{let e=n.get(t.target),o=t.isIntersecting||t.intersectionRatio>0;e&&o&&e(o)})},t),elements:n},l.push(o),i.set(o,e),e}(o);return a.set(t,e),n.observe(t),function(){if(a.delete(t),n.unobserve(t),0===a.size){n.disconnect(),i.delete(r);let t=l.findIndex(t=>t.root===r.root&&t.margin===r.margin);t>-1&&l.splice(t,1)}}}(t,t=>t&&u(t),{root:null==e?void 0:e.current,rootMargin:o})}else if(!f){let t=(0,n.requestIdleCallback)(()=>u(!0));return()=>(0,n.cancelIdleCallback)(t)}},[s,o,e,f,p.current]),[m,f,(0,r.useCallback)(()=>{u(!1)},[])]}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},5353:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=o(2115);function n(t,e){let o=(0,r.useRef)(()=>{}),n=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>t&&e?r=>{null===r?(o.current(),n.current()):(o.current=a(t,r),n.current=a(e,r))}:t||e,[t,e])}function a(t,e){if("function"!=typeof t)return t.current=e,()=>{t.current=null};{let o=t(e);return"function"==typeof o?o:()=>t(null)}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},180:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{formatUrl:function(){return a},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let r=o(9955)._(o(4156)),n=/https?|ftp|gopher|file/;function a(t){let{auth:e,hostname:o}=t,a=t.protocol||"",i=t.pathname||"",l=t.hash||"",c=t.query||"",s=!1;e=e?encodeURIComponent(e).replace(/%3A/i,":")+"@":"",t.host?s=e+t.host:o&&(s=e+(~o.indexOf(":")?"["+o+"]":o),t.port&&(s+=":"+t.port)),c&&"object"==typeof c&&(c=String(r.urlQueryToSearchParams(c)));let f=t.search||c&&"?"+c||"";return a&&!a.endsWith(":")&&(a+=":"),t.slashes||(!a||n.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),f&&"?"!==f[0]&&(f="?"+f),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(t){return a(t)}},4156:(t,e)=>{function o(t){let e={};return t.forEach((t,o)=>{void 0===e[o]?e[o]=t:Array.isArray(e[o])?e[o].push(t):e[o]=[e[o],t]}),e}function r(t){return"string"!=typeof t&&("number"!=typeof t||isNaN(t))&&"boolean"!=typeof t?"":String(t)}function n(t){let e=new URLSearchParams;return Object.entries(t).forEach(t=>{let[o,n]=t;Array.isArray(n)?n.forEach(t=>e.append(o,r(t))):e.set(o,r(n))}),e}function a(t){for(var e=arguments.length,o=Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return o.forEach(e=>{Array.from(e.keys()).forEach(e=>t.delete(e)),e.forEach((e,o)=>t.append(o,e))}),t}Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{assign:function(){return a},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return n}})},2170:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{DecodeError:function(){return d},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return h},NormalizeError:function(){return g},PageNotFoundError:function(){return b},SP:function(){return p},ST:function(){return m},WEB_VITALS:function(){return o},execOnce:function(){return r},getDisplayName:function(){return c},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return u},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function r(t){let e,o=!1;return function(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return o||(o=!0,e=t(...n)),e}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=t=>n.test(t);function i(){let{protocol:t,hostname:e,port:o}=window.location;return t+"//"+e+(o?":"+o:"")}function l(){let{href:t}=window.location,e=i();return t.substring(e.length)}function c(t){return"string"==typeof t?t:t.displayName||t.name||"Unknown"}function s(t){return t.finished||t.headersSent}function f(t){let e=t.split("?");return e[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(e[1]?"?"+e.slice(1).join("?"):"")}async function u(t,e){let o=e.res||e.ctx&&e.ctx.res;if(!t.getInitialProps)return e.ctx&&e.Component?{pageProps:await u(e.Component,e.ctx)}:{};let r=await t.getInitialProps(e);if(o&&s(o))return r;if(!r)throw Error('"'+c(t)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let p="undefined"!=typeof performance,m=p&&["mark","measure","getEntriesByName"].every(t=>"function"==typeof performance[t]);class d extends Error{}class g extends Error{}class b extends Error{constructor(t){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+t}}class h extends Error{constructor(t,e){super(),this.message="Failed to load static file for page: "+t+" "+e}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(t){return JSON.stringify({message:t.message,stack:t.stack})}}}]);