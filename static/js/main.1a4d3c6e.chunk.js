(this.webpackJsonpinfinitebuying=this.webpackJsonpinfinitebuying||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},155:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),s=n.n(r),i=n(5),o=n.n(i),l=n(12),d=n(82),j=n(11),u=(n(92),n(179)),b=n(178),O=(n(93),n(1)),m=function(){return Object(O.jsxs)(u.a,{bg:"light",expand:"md",children:[Object(O.jsx)(u.a.Brand,{href:"#lab",children:"\ubb34\ud55c\ub9e4\uc218\ubc95 \ubc31\ud14c\uc2a4\ud2b8"}),Object(O.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(b.a,{className:"mr-auto",children:[Object(O.jsx)(b.a.Link,{href:"#lab",children:"\uc5f0\uad6c\uc18c"}),Object(O.jsxs)(b.a.Link,{className:"position-relative",href:"#rsi",children:["RSI",Object(O.jsx)("span",{className:"new",children:"NEW"})]})]})})]})},h=n(16),x=n.n(h),p=n(23),f=n(7),y=n(24),v=n.n(y),g=n(172),C=n(173),T=n(33),N=n(19),L=n(29),S=n.n(L),_=n(170),I=n(78),k=n(177),F=n(171),D=n(79),U=(n(117),function(e){var t=e.startBacktest,n=Object(a.useState)("TQQQ"),c=Object(f.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),l=o[0],d=o[1],j=Object(a.useState)("2021-01-01"),u=Object(f.a)(j,2),b=u[0],m=u[1],h=Object(a.useState)(1e4),x=Object(f.a)(h,2),p=x[0],y=x[1],v=Object(a.useState)(40),g=Object(f.a)(v,2),C=g[0],L=g[1],U=Object(a.useState)("close"),w=Object(f.a)(U,2),M=w[0],B=w[1],R=Object(a.useState)({orderType:"loc",priceType:"avgPrice",rate:0}),P=Object(f.a)(R,2),E=P[0],A=P[1],Y=Object(a.useState)({orderType:"loc",priceType:"avgPrice",rate:15}),G=Object(f.a)(Y,2),Q=G[0],W=G[1],z=Object(a.useState)({orderType:"limitOrder",priceType:"avgPrice",rate:10}),H=Object(f.a)(z,2),K=H[0],X=H[1],$={TECL:"2008-12-18",FAS:"2008-11-07",RETL:"2010-07-15",DPST:"2015-08-20",DUSL:"2017-05-04",NAIL:"2015-08-20",LABU:"2015-05-29",TQQQ:"2010-02-11",FNGU:"2018-01-24",BNKU:"2019-04-04",UPRO:"2009-06-26",TPOR:"2017-11-07",DFEN:"2017-05-04",WEBL:"2019-11-08",TNA:"2008-11-06",MIDU:"2009-01-09",HIBL:"2019-11-08",WANT:"2018-12-03",SOXL:"2010-03-12",CUSTOM:"2000-01-01"},q=Object(a.useMemo)((function(){return $[r]}),[r]),J=S()().add(-1,"d").format("YYYY-MM-DD"),Z=function(e,t){var n=t.target.value;A(Object(N.a)(Object(N.a)({},E),{},Object(T.a)({},e,n)))},V=function(e,t){var n=t.target.value;W(Object(N.a)(Object(N.a)({},Q),{},Object(T.a)({},e,n)))},ee=function(e,t){var n=t.target.value;X(Object(N.a)(Object(N.a)({},K),{},Object(T.a)({},e,n)))},te=function(e){y(p+e)};return Object(O.jsxs)("div",{className:"condition p-4",children:[Object(O.jsxs)(_.a,{children:[Object(O.jsxs)(I.a,{md:12,lg:!0,children:[Object(O.jsxs)(k.a.Group,{controlId:"stock",children:[Object(O.jsx)(k.a.Label,{children:"\uc885\ubaa9"}),Object(O.jsxs)(_.a,{children:[Object(O.jsx)(I.a,{children:Object(O.jsx)(k.a.Control,{as:"select",onChange:function(e){var t=e.target.value;s(t),"CUSTOM"!==t&&d(""),b<$[t]&&m($[t])},value:r,children:[["TECL","TECL"],["FAS","FAS"],["RETL","RETL"],["DPST","DPST"],["DUSL","DUSL"],["NAIL","NAIL"],["LABU","LABU"],["TQQQ","TQQQ"],["FNGU","FNGU"],["BNKU","BNKU"],["UPRO","UPRO"],["TPOR","TPOR"],["DFEN","DFEN"],["WEBL","WEBL"],["TNA","TNA"],["MIDU","MIDU"],["HIBL","HIBL"],["WANT","WANT"],["SOXL","SOXL"],["\uc9c1\uc811\uc120\ud0dd","CUSTOM"]].map((function(e){return Object(O.jsx)("option",{value:e[1],children:e[0]},e[1])}))})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(k.a.Control,{type:"text",value:l,onChange:function(e){var t=e.target.value;d(t)},readOnly:"CUSTOM"!==r})})]})]}),Object(O.jsxs)(_.a,{children:[Object(O.jsxs)(I.a,{md:12,lg:!0,children:[Object(O.jsxs)(k.a.Group,{controlId:"money",className:"mb-1",children:[Object(O.jsxs)(k.a.Label,{children:["\ud22c\uc790\uae08($) ",Object(O.jsx)("small",{children:"(\ucd5c\uc18c $10,000)"})]}),Object(O.jsx)(k.a.Control,{type:"number",value:p,min:1e4,onChange:function(e){var t=Math.max(1e4,e.target.value);y(t)}})]}),Object(O.jsxs)(F.a,{size:"sm",className:"mb-3 d-flex",children:[Object(O.jsx)(D.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e5)},children:"+100,000"}),Object(O.jsx)(D.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e4)},children:"+10,000"}),Object(O.jsx)(D.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e3)},children:"+1,000"}),Object(O.jsx)(D.a,{className:"py-0",variant:"outline-secondary",onClick:function(){y(1e4)},children:"C"})]})]}),Object(O.jsx)(I.a,{md:12,lg:!0,children:Object(O.jsxs)(k.a.Group,{controlId:"total-days",children:[Object(O.jsxs)(k.a.Label,{children:["\ubd84\ud560 ",Object(O.jsx)("small",{children:"(1 ~ 100)"})]}),Object(O.jsx)(k.a.Control,{type:"number",value:C,min:"1",max:"100",onChange:function(e){var t=Math.min(100,Math.max(1,e.target.value));L(t)}})]})})]}),Object(O.jsxs)(k.a.Group,{controlId:"start-date",children:[Object(O.jsx)(k.a.Label,{children:"\uc2dc\uc791\uc77c"}),Object(O.jsx)(k.a.Control,{type:"date",value:b,min:q,max:J,onChange:function(e){m(e.target.value)}})]}),Object(O.jsxs)(k.a.Group,{controlId:"first-buying",children:[Object(O.jsx)(k.a.Label,{children:"\uccab\ub0a0 \ub9e4\uc218 \ub2e8\uac00"}),Object(O.jsx)(k.a.Control,{as:"select",onChange:function(e){B(e.target.value)},value:M,children:Object(O.jsx)("option",{value:"close",children:"\uc885\uac00"})})]})]}),Object(O.jsxs)(I.a,{md:12,lg:!0,children:[Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 1"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(k.a.Group,{controlId:"buying-1-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:E.orderType,onChange:function(e){return Z("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(k.a.Group,{controlId:"buying-1-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:E.priceType,onChange:function(e){return Z("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(k.a.Group,{controlId:"buying-1-rate",className:"mb-0",children:Object(O.jsx)(k.a.Control,{type:"number",value:E.rate,onChange:function(e){return Z("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 2"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(k.a.Group,{controlId:"buying-2-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:Q.orderType,onChange:function(e){return V("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(k.a.Group,{controlId:"buying-2-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:Q.priceType,onChange:function(e){return V("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(k.a.Group,{controlId:"buying-2-rate",className:"mb-0",children:Object(O.jsx)(k.a.Control,{type:"number",value:Q.rate,onChange:function(e){return V("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"\ub9e4\ub3c4 \uc870\uac74"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(k.a.Group,{controlId:"selling-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:K.orderType,onChange:function(e){return ee("orderType",e)},children:Object(O.jsx)("option",{value:"limitOrder",children:"\ubcf4\ud1b5\uac00(\uc9c0\uc815\uac00)"})})}),Object(O.jsx)(k.a.Group,{controlId:"selling-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(k.a.Control,{as:"select",value:K.priceType,onChange:function(e){return ee("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(k.a.Group,{controlId:"selling-rate",className:"mb-0",children:Object(O.jsx)(k.a.Control,{type:"number",value:K.rate,onChange:function(e){return ee("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]})]})]}),Object(O.jsx)(D.a,{onClick:function(){t({stock:"CUSTOM"!==r?r:l.trim(),startDate:b,money:p,totalDays:C,firstBuyingPriceType:M,buying1Condition:E,buying2Condition:Q,sellingCondition:K})},disabled:"CUSTOM"===r&&""===l.trim(),children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791"})]})}),w=(n(118),{intComma:function(e){"number"==typeof e&&(e=e.toString());for(var t=/(^[+-]?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}}),M=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(f.a)(r,2),i=s[0],l=s[1],d=function(){var e=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buying1Condition.rate=Number(t.buying1Condition.rate),t.buying2Condition.rate=Number(t.buying2Condition.rate),t.sellingCondition.rate=Number(t.sellingCondition.rate),l(!0),c(null),e.prev=5,e.next=8,v.a.get("https://54o7jbyvz3.execute-api.ap-northeast-2.amazonaws.com/dev/infinitebuying-dev",{params:{stock:t.stock,startDate:t.startDate,money:t.money,totalDays:t.totalDays,firstBuyingPriceType:t.firstBuyingPriceType,buying1OrderType:t.buying1Condition.orderType,buying1PriceType:t.buying1Condition.priceType,buying1Rate:t.buying1Condition.rate,buying2OrderType:t.buying2Condition.orderType,buying2PriceType:t.buying2Condition.priceType,buying2Rate:t.buying2Condition.rate,sellingOrderType:t.sellingCondition.orderType,sellingPriceType:t.sellingCondition.priceType,sellingRate:t.sellingCondition.rate}});case 8:200===(n=e.sent).status&&c(n.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),alert(e.t0.response.data.message);case 16:return e.prev=16,l(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[5,12,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"mt-3",children:[Object(O.jsx)(U,{startBacktest:d}),i&&Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsx)(g.a,{animation:"border"})}),null!==n&&Object(O.jsxs)(C.a,{className:"mt-5",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsxs)("th",{children:["\uc885\uac00",Object(O.jsx)("br",{}),"(\ub9e4\uc218\ub2e8\uac00)"]}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\ud3c9\ub2e8\uac00"}),Object(O.jsx)("th",{children:"\ubcf4\uc720\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ud3c9\uac00\uae08"}),Object(O.jsx)("th",{children:"\ucd1d\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),Object(O.jsx)("tbody",{children:n.buying_info.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[e.days,"\uc77c"]}),Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:w.intComma(e.close)}),Object(O.jsx)("td",{children:w.intComma(e.buying_count)}),Object(O.jsx)("td",{children:w.intComma(e.buying_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(e.avg_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(e.total_count)}),Object(O.jsx)("td",{children:w.intComma(e.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(e.total_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(e.profits.toFixed(2))}),Object(O.jsxs)("td",{className:o()({"table-danger":(t=e.profits_rate,!!n&&n.buying_info.map((function(e){return e.profits_rate})).sort((function(e,t){return e-t}))[0]===t)}),children:[(100*e.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*e.total_money_profits_rate).toFixed(2),"%"]})]},e.days);var t}))}),null!==n.sell_info&&Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsx)("th",{children:"\uc885\uac00"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac00"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uae08"}),Object(O.jsxs)("th",{children:["\ub9e4\ub3c4\uc2dc\uc810",Object(O.jsx)("br",{}),"\ucd1d\ub9e4\uc218\uae08"]}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),null!==n.sell_info&&Object(O.jsx)("tbody",{className:"sell",children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[n.sell_info.days,"\uc77c"]}),Object(O.jsx)("td",{children:n.sell_info.date}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.close)}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.sell_unit_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.sell_count)}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.total_price.toFixed(2))}),Object(O.jsx)("td",{children:w.intComma(n.sell_info.profits.toFixed(2))}),Object(O.jsxs)("td",{children:[(100*n.sell_info.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*n.sell_info.total_money_profits_rate).toFixed(2),"%"]})]})})]})]})},B=n(48),R=n(47),P=n.n(R);n(155);function E(){return Object(O.jsx)("div",{className:"loading-layer",children:Object(O.jsx)(g.a,{animation:"border"})})}n(58);function A(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(f.a)(s,2),d=i[0],j=i[1],u=Object(a.useState)([]),b=Object(f.a)(u,2),m=b[0],h=b[1],y=Object(a.useState)({}),g=Object(f.a)(y,2),C=g[0],T=g[1],N=Object(a.useState)({}),L=Object(f.a)(N,2),_=(L[0],L[1]),I=Object(a.useState)(!1),F=Object(f.a)(I,2),U=F[0],w=F[1],M={BNKU:35,BULZ:65,CURE:45,DFEN:40,DPST:35,DRN:40,DUSL:40,FAS:45,FNGU:55,HIBL:55,LABU:45,MIDU:45,NAIL:50,PILL:45,RETL:50,SOXL:65,TECL:60,TNA:50,TPOR:40,TQQQ:60,UDOW:50,UPRO:55,UTSL:35,WANT:55,WEBL:60};Object(a.useEffect)((function(){var e=S()().subtract(1,"months").add(1,"days").format("YYYY-MM-DD"),t=S()().format("YYYY-MM-DD");r(e),j(t),R(e,t)}),[]);var R=function(){var e=Object(p.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,v.a.get("https://61exw746vf.execute-api.ap-northeast-2.amazonaws.com/default/period_rsi?start_date=".concat(t,"&end_date=").concat(n));case 4:200===(a=e.sent).status?(h(a.data.timestamp),T(a.data.rsi),_(a.data.close)):alert(a.data.error);case 6:return e.prev=6,w(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=Object(a.useMemo)((function(){return[{dataField:"ticker",text:"Ticker",sort:!0,headerClasses:function(e,t){return"fixed-cell gray"},classes:function(e,t,n,a){return"fixed-cell ".concat(n%2===0?"gray":"white")}}].concat(Object(B.a)(m.map((function(e){return{dataField:e,text:e,classes:function(t,n,a,c){if(n[e]&&n[e]<n.recommendedRsi){var r=(n.recommendedRsi-n[e])/n.recommendedRsi*100;return r<10?"recommended_10":r<20?"recommended_20":r<30?"recommended_30":r<40?"recommended_40":"recommended"}return""}}}))))}),[m]),Y=Object(a.useMemo)((function(){return Object.entries(C).map((function(e){var t={ticker:e[0]};return m.forEach((function(n,a){t[n]=e[1][a],t.recommendedRsi=M[e[0]]})),t})).filter((function(t){return"all"===e.showType||e.staredItemList.includes(t.ticker)}))}),[C,e.showType,e.staredItemList]);return Object(O.jsxs)("div",{className:"rsi period-rsi py-4",children:[Object(O.jsxs)("div",{className:o()("mb-2 d-flex d-flex justify-content-between",[l.isBrowser?"align-items-center":"align-items-end"]),children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(D.a,{className:o()({"mt-2":l.isMobile}),variant:"outline-secondary",onClick:function(){var e=document.querySelector(".period-rsi .react-bootstrap-table");e&&(e.scrollLeft=0)},children:"<"}),Object(O.jsx)(D.a,{className:o()({"mt-2":l.isMobile}),variant:"outline-secondary",onClick:function(){var e=document.querySelector(".period-rsi .react-bootstrap-table");e&&(e.scrollLeft=e.scrollWidth)},children:">"})]}),Object(O.jsxs)("div",{className:o()("d-flex justify-content-end align-items-center",{"flex-column":l.isMobile}),children:[Object(O.jsx)(k.a.Control,{className:"date-input mx-1",type:"date",value:c,max:S()().format("YYYY-MM-DD"),onChange:function(e){r(e.target.value)}})," ","~",Object(O.jsx)(k.a.Control,{className:"date-input mx-1",type:"date",value:d,max:S()().format("YYYY-MM-DD"),onChange:function(e){j(e.target.value)}}),Object(O.jsx)(D.a,{className:o()({"mt-2":l.isMobile}),variant:"outline-secondary",onClick:function(){R(c,d)},children:"\uc870\ud68c"})]})]}),0<m.length&&Object(O.jsx)(P.a,{classes:o()({mobile:l.isMobile}),keyField:"ticker",data:Y,columns:A,condensed:!0,noDataIndication:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),U&&Object(O.jsx)(E,{})]})}var Y=n(81),G=n(80),Q=n(174),W=n(176),z=n(175);function H(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(f.a)(s,2),d=i[0],j=i[1],u=Object(a.useState)([]),b=Object(f.a)(u,2),m=b[0],h=b[1],y=Object(a.useState)(!1),g=Object(f.a)(y,2),C=g[0],T=g[1],L={BNKU:[35,"\uae08\uc735"],BULZ:[65,"\uae30\uc220"],CURE:[45,"\ubc14\uc774\uc624"],DFEN:[40,"\ud56d\uacf5\uc6b0\uc8fc"],DPST:[35,"\uae08\uc735"],DRN:[40,"\ubd80\ub3d9\uc0b0"],DUSL:[40,"\uc0b0\uc5c5\uc7ac"],FAS:[45,"\uae08\uc735"],FNGU:[55,"\uae30\uc220"],HIBL:[55,"S&P500"],LABU:[45,"\ubc14\uc774\uc624"],MIDU:[45,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],NAIL:[50,"\uac74\uc124"],PILL:[45,"\ubc14\uc774\uc624"],RETL:[50,"\uc18c\ub9e4\uc720\ud1b5"],SOXL:[65,"\uae30\uc220"],TECL:[60,"\uae30\uc220"],TNA:[50,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],TPOR:[40,"\uc6b4\uc1a1"],TQQQ:[60,"\uae30\uc220"],UDOW:[50,"\ub2e4\uc6b0\uc874\uc2a4"],UPRO:[55,"S&P500"],UTSL:[35,"\uc720\ud2f8\ub9ac\ud2f0"],WANT:[55,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],WEBL:[60,"\uae30\uc220"]};Object(a.useEffect)((function(){S()}),[]);var S=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,v.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi");case 4:200===(t=e.sent).status?(j(t.data.date),r(t.data.date),h(t.data.data)):alert(t.data.error);case 6:return e.prev=6,T(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}(),_=Object(a.useMemo)((function(){var t=[{dataField:"isStared",text:"",formatter:function(t,n){return Object(O.jsx)("span",{className:o()("star",{stared:t}),onClick:function(){return e.onClickStaredItem(n.ticker)},children:t?"\u2605":"\u2606"})},formatExtraData:{staredItemList:e.staredItemList}},{dataField:"sector",text:"\uc139\ud130",sort:!0},{dataField:"ticker",text:"Ticker",sort:!0},{dataField:"rsi",text:"RSI",formatter:function(e,t){return e.toFixed(2)},sort:!0},{dataField:"recommendedRsi",text:"\uad8c\uc7a5 RSI",sort:!0},{dataField:"close",text:"\ud604\uc7ac\uac00",sort:!0},{dataField:"change",text:"\ub4f1\ub77d\ub960",formatter:function(e,t){return 0<e?Object(O.jsx)("span",{className:"change red",children:"\u25b2 ".concat((100*e).toFixed(1)," %")}):e<0?Object(O.jsx)("span",{className:"change blue",children:"\u25bc ".concat((100*e).toFixed(1)," %")}):Object(O.jsx)("span",{className:"change",children:(100*e).toFixed(1)+"%"})},sort:!0}];return l.isBrowser&&t.push({dataField:"volume",text:"\uac70\ub798\ub7c9",formatter:function(e,t){return w.intComma(Math.round(e))},sort:!0}),t}),[l.isBrowser,e.staredItemList]),I=Object(a.useMemo)((function(){return m.filter((function(t){return"all"===e.showType||e.staredItemList.includes(t.ticker)})).map((function(t){return Object(N.a)(Object(N.a)({},t),{},{recommendedRsi:L[t.ticker][0],sector:L[t.ticker][1],isStared:e.staredItemList.includes(t.ticker)})}))}),[m,e.staredItemList,e.showType]),U=function(){var e=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,v.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(d,"&prev=").concat(t));case 4:200===(n=e.sent).status?(j(n.data.date),h(n.data.data)):alert(n.data.error),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.response.data.message);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),j(t.target.value),e.prev=2,e.next=5,v.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(t.target.value));case 5:200===(n=e.sent).status?(j(n.data.date),h(n.data.data)):alert(n.data.error),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.response.data.message);case 13:return e.prev=13,T(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),B=function(t){e.setShowType(t),localStorage.setItem("show_type",t)};return Object(O.jsxs)("div",{className:"rsi py-4",children:[Object(O.jsxs)("div",{className:o()("mb-2 d-flex justify-content-between align-items-center",{"flex-column":l.isMobile}),children:[Object(O.jsxs)(F.a,{className:o()({"mb-2":l.isMobile}),toggle:!0,children:[Object(O.jsx)(Q.a,{type:"radio",name:"radio",variant:"outline-secondary",value:"\uc804\uccb4\ubcf4\uae30",checked:"all"===e.showType,onChange:function(){return B("all")},children:"\uc804\uccb4\ubcf4\uae30"}),Object(O.jsx)(Q.a,{type:"radio",name:"radio",variant:"outline-secondary",value:"\uc804\uccb4\ubcf4\uae30",checked:"stared"===e.showType,onChange:function(){return B("stared")},children:"\uc990\uaca8\ucc3e\uae30"})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)(D.a,{variant:"outline-secondary",onClick:function(){return U(!0)},children:l.isBrowser?"< \uc774\uc804\ub0a0\uc9dc":"<<"}),Object(O.jsx)(k.a.Control,{className:"date-input mx-1",type:"date",value:d,max:c,onChange:M}),Object(O.jsx)(D.a,{className:"mr-2",variant:"outline-secondary",onClick:function(){return U(!1)},disabled:d===c,children:l.isBrowser?"\ub2e4\uc74c\ub0a0\uc9dc >":">>"}),Object(O.jsx)(W.a,{placement:"top",overlay:Object(O.jsx)(z.a,{id:"tooltip",children:"\uc5c5\ub370\uc774\ud2b8 \uc2dc\uac04: \ub9e4\uc77c 9\uc2dc 10\ubd84"}),children:Object(O.jsx)(G.a,{icon:Y.a})})]})]}),0<_.length&&Object(O.jsx)(P.a,{classes:o()({mobile:l.isMobile}),keyField:"ticker",data:I,columns:_,rowClasses:function(e,t){if(e.rsi<e.recommendedRsi){var n=(e.recommendedRsi-e.rsi)/e.recommendedRsi*100;return n<10?"recommended_10":n<20?"recommended_20":n<30?"recommended_30":n<40?"recommended_40":"recommended"}return""},condensed:!0,noDataIndication:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),C&&Object(O.jsx)(E,{})]})}function K(){var e,t=Object(a.useState)(null!==(e=localStorage.getItem("show_type"))&&void 0!==e?e:"all"),n=Object(f.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(f.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("star_item_list");e&&l(e.split(","))}),[]),Object(a.useEffect)((function(){localStorage.setItem("star_item_list",o.join(","))}),[o]);return Object(O.jsxs)("div",{className:"rsi py-4",children:[Object(O.jsx)(H,{showType:c,setShowType:r,staredItemList:o,onClickStaredItem:function(e){o.includes(e)?l(o.filter((function(t){return t!==e}))):l([].concat(Object(B.a)(o),[e]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)(A,{showType:c,staredItemList:o})]})}var X=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:o()(l.isMobile?"mobile-container":"container"),children:[Object(O.jsx)(m,{}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.b,{path:"/",exact:!0,children:Object(O.jsx)(j.a,{to:"/lab"})}),Object(O.jsx)(j.b,{path:"/lab",component:M}),Object(O.jsx)(j.b,{path:"/rsi",component:K})]})]})})},$=(n(164),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))});s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root")),$()},58:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[165,1,2]]]);