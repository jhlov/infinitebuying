(this.webpackJsonpinfinitebuying=this.webpackJsonpinfinitebuying||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},160:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var a=n(27),c=n.n(a),r=n(0),s=n.n(r),i=n(18),l=n.n(i),o=n(5),d=n.n(o),j=n(12),b=n(85),u=n(11),m=(n(95),n(184)),h=n(183),O=(n(96),n(1)),x=function(){return Object(O.jsxs)(m.a,{bg:"light",expand:"md",children:[Object(O.jsx)(m.a.Brand,{href:"#lab",children:"\ubb34\ud55c\ub9e4\uc218\ubc95 \ubc31\ud14c\uc2a4\ud2b8"}),Object(O.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(h.a,{className:"mr-auto",children:[Object(O.jsx)(h.a.Link,{href:"#lab",children:"\uc5f0\uad6c\uc18c"}),Object(O.jsxs)(h.a.Link,{className:"position-relative",href:"#rsi",children:["RSI",Object(O.jsx)("span",{className:"new",children:"NEW"})]})]})})]})},p=n(16),f=n.n(p),y=n(23),g=n(7),v=n(24),C=n.n(v),N=n(41),T=n.n(N),L=n(49),S=n.n(L),k=n(177),F=n(178),I=n(34),_=n(19),M=n(30),D=n.n(M),R=n(175),U=n(81),w=n(182),B=n(176),A=n(82),P=(n(122),function(e){var t=e.startBacktest,n=Object(r.useState)("TQQQ"),a=Object(g.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),l=Object(g.a)(i,2),o=l[0],d=l[1],j=Object(r.useState)("2021-01-01"),b=Object(g.a)(j,2),u=b[0],m=b[1],h=Object(r.useState)(1e4),x=Object(g.a)(h,2),p=x[0],f=x[1],y=Object(r.useState)(40),v=Object(g.a)(y,2),C=v[0],N=v[1],T=Object(r.useState)("close"),L=Object(g.a)(T,2),S=L[0],k=L[1],F=Object(r.useState)({orderType:"loc",priceType:"avgPrice",rate:0}),M=Object(g.a)(F,2),P=M[0],E=M[1],W=Object(r.useState)({orderType:"loc",priceType:"avgPrice",rate:15}),G=Object(g.a)(W,2),Y=G[0],Q=G[1],z=Object(r.useState)({orderType:"limitOrder",priceType:"avgPrice",rate:10}),H=Object(g.a)(z,2),K=H[0],X=H[1],$={TECL:"2008-12-18",FAS:"2008-11-07",RETL:"2010-07-15",DPST:"2015-08-20",DUSL:"2017-05-04",NAIL:"2015-08-20",LABU:"2015-05-29",TQQQ:"2010-02-11",FNGU:"2018-01-24",BNKU:"2019-04-04",UPRO:"2009-06-26",TPOR:"2017-11-07",DFEN:"2017-05-04",WEBL:"2019-11-08",TNA:"2008-11-06",MIDU:"2009-01-09",HIBL:"2019-11-08",WANT:"2018-12-03",SOXL:"2010-03-12",CUSTOM:"2000-01-01"},q=Object(r.useMemo)((function(){return $[c]}),[c]),J=D()().add(-1,"d").format("YYYY-MM-DD"),Z=function(e,t){var n=t.target.value;E(Object(_.a)(Object(_.a)({},P),{},Object(I.a)({},e,n)))},V=function(e,t){var n=t.target.value;Q(Object(_.a)(Object(_.a)({},Y),{},Object(I.a)({},e,n)))},ee=function(e,t){var n=t.target.value;X(Object(_.a)(Object(_.a)({},K),{},Object(I.a)({},e,n)))},te=function(e){f(p+e)};return Object(O.jsxs)("div",{className:"condition p-4",children:[Object(O.jsxs)(R.a,{children:[Object(O.jsxs)(U.a,{md:12,lg:!0,children:[Object(O.jsxs)(w.a.Group,{controlId:"stock",children:[Object(O.jsx)(w.a.Label,{children:"\uc885\ubaa9"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(w.a.Control,{as:"select",onChange:function(e){var t=e.target.value;s(t),"CUSTOM"!==t&&d(""),u<$[t]&&m($[t])},value:c,children:[["TECL","TECL"],["FAS","FAS"],["RETL","RETL"],["DPST","DPST"],["DUSL","DUSL"],["NAIL","NAIL"],["LABU","LABU"],["TQQQ","TQQQ"],["FNGU","FNGU"],["BNKU","BNKU"],["UPRO","UPRO"],["TPOR","TPOR"],["DFEN","DFEN"],["WEBL","WEBL"],["TNA","TNA"],["MIDU","MIDU"],["HIBL","HIBL"],["WANT","WANT"],["SOXL","SOXL"],["\uc9c1\uc811\uc120\ud0dd","CUSTOM"]].map((function(e){return Object(O.jsx)("option",{value:e[1],children:e[0]},e[1])}))})}),Object(O.jsx)(U.a,{children:Object(O.jsx)(w.a.Control,{type:"text",value:o,onChange:function(e){var t=e.target.value;d(t)},readOnly:"CUSTOM"!==c})})]})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsxs)(U.a,{md:12,lg:!0,children:[Object(O.jsxs)(w.a.Group,{controlId:"money",className:"mb-1",children:[Object(O.jsxs)(w.a.Label,{children:["\ud22c\uc790\uae08($) ",Object(O.jsx)("small",{children:"(\ucd5c\uc18c $10,000)"})]}),Object(O.jsx)(w.a.Control,{type:"number",value:p,min:1e4,onChange:function(e){var t=Math.max(1e4,e.target.value);f(t)}})]}),Object(O.jsxs)(B.a,{size:"sm",className:"mb-3 d-flex",children:[Object(O.jsx)(A.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e5)},children:"+100,000"}),Object(O.jsx)(A.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e4)},children:"+10,000"}),Object(O.jsx)(A.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e3)},children:"+1,000"}),Object(O.jsx)(A.a,{className:"py-0",variant:"outline-secondary",onClick:function(){f(1e4)},children:"C"})]})]}),Object(O.jsx)(U.a,{md:12,lg:!0,children:Object(O.jsxs)(w.a.Group,{controlId:"total-days",children:[Object(O.jsxs)(w.a.Label,{children:["\ubd84\ud560 ",Object(O.jsx)("small",{children:"(1 ~ 100)"})]}),Object(O.jsx)(w.a.Control,{type:"number",value:C,min:"1",max:"100",onChange:function(e){var t=Math.min(100,Math.max(1,e.target.value));N(t)}})]})})]}),Object(O.jsxs)(w.a.Group,{controlId:"start-date",children:[Object(O.jsx)(w.a.Label,{children:"\uc2dc\uc791\uc77c"}),Object(O.jsx)(w.a.Control,{type:"date",value:u,min:q,max:J,onChange:function(e){m(e.target.value)}})]}),Object(O.jsxs)(w.a.Group,{controlId:"first-buying",children:[Object(O.jsx)(w.a.Label,{children:"\uccab\ub0a0 \ub9e4\uc218 \ub2e8\uac00"}),Object(O.jsx)(w.a.Control,{as:"select",onChange:function(e){k(e.target.value)},value:S,children:Object(O.jsx)("option",{value:"close",children:"\uc885\uac00"})})]})]}),Object(O.jsxs)(U.a,{md:12,lg:!0,children:[Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 1"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(w.a.Group,{controlId:"buying-1-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:P.orderType,onChange:function(e){return Z("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(w.a.Group,{controlId:"buying-1-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:P.priceType,onChange:function(e){return Z("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(w.a.Group,{controlId:"buying-1-rate",className:"mb-0",children:Object(O.jsx)(w.a.Control,{type:"number",value:P.rate,onChange:function(e){return Z("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 2"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(w.a.Group,{controlId:"buying-2-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:Y.orderType,onChange:function(e){return V("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(w.a.Group,{controlId:"buying-2-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:Y.priceType,onChange:function(e){return V("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(w.a.Group,{controlId:"buying-2-rate",className:"mb-0",children:Object(O.jsx)(w.a.Control,{type:"number",value:Y.rate,onChange:function(e){return V("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"\ub9e4\ub3c4 \uc870\uac74"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(w.a.Group,{controlId:"selling-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:K.orderType,onChange:function(e){return ee("orderType",e)},children:Object(O.jsx)("option",{value:"limitOrder",children:"\ubcf4\ud1b5\uac00(\uc9c0\uc815\uac00)"})})}),Object(O.jsx)(w.a.Group,{controlId:"selling-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(w.a.Control,{as:"select",value:K.priceType,onChange:function(e){return ee("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(w.a.Group,{controlId:"selling-rate",className:"mb-0",children:Object(O.jsx)(w.a.Control,{type:"number",value:K.rate,onChange:function(e){return ee("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]})]})]}),Object(O.jsx)(A.a,{onClick:function(){t({stock:"CUSTOM"!==c?c:o.trim(),startDate:u,money:p,totalDays:C,firstBuyingPriceType:S,buying1Condition:P,buying2Condition:Y,sellingCondition:K})},disabled:"CUSTOM"===c&&""===o.trim(),children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791"})]})}),E=(n(123),{intComma:function(e){"number"==typeof e&&(e=e.toString());for(var t=/(^[+-]?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}}),W=function(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(g.a)(s,2),l=i[0],o=i[1],j=function(){var e=Object(y.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buying1Condition.rate=Number(t.buying1Condition.rate),t.buying2Condition.rate=Number(t.buying2Condition.rate),t.sellingCondition.rate=Number(t.sellingCondition.rate),o(!0),a(null),e.prev=5,e.next=8,C.a.get("https://cr2lbm4puk.execute-api.ap-northeast-2.amazonaws.com/default/infinitebuying-v2",{params:{stock:t.stock,startDate:t.startDate,money:t.money,totalDays:t.totalDays,firstBuyingPriceType:t.firstBuyingPriceType,buying1OrderType:t.buying1Condition.orderType,buying1PriceType:t.buying1Condition.priceType,buying1Rate:t.buying1Condition.rate,buying2OrderType:t.buying2Condition.orderType,buying2PriceType:t.buying2Condition.priceType,buying2Rate:t.buying2Condition.rate,sellingOrderType:t.sellingCondition.orderType,sellingPriceType:t.sellingCondition.priceType,sellingRate:t.sellingCondition.rate}});case 8:200===(n=e.sent).status&&a(n.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),alert(e.t0.response.data.message);case 16:return e.prev=16,o(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[5,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(r.useMemo)((function(){return n?{title:{text:""},xAxis:{categories:n.buying_info.map((function(e){return e.date}))},yAxis:{title:{text:null}},plotOptions:{line:{dataLabels:{enabled:!0}}},series:[{type:"line",name:"\uc885\uac00",lineWidth:1.3,marker:{enabled:!1},states:{hover:{lineWidth:1.3}},data:n.buying_info.map((function(e){return Number(e.close.toFixed(2))}))},{type:"line",name:"\ud3c9\ub2e8\uac00",lineWidth:1.3,marker:{enabled:!1},states:{hover:{lineWidth:1.3}},data:n.buying_info.map((function(e){return Number(e.avg_price.toFixed(2))}))}]}:{}}),[n]);return Object(O.jsxs)("div",{className:"mt-3",children:[Object(O.jsx)(P,{startBacktest:j}),Object(O.jsx)(S.a.Google,{className:"my-2",style:{display:"inline-block",width:"100%",height:90},client:"ca-pub-7150456660061561",slot:"1671889334",format:""}),l&&Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsx)(k.a,{animation:"border"})}),null!==n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T.a,{highcharts:c.a,options:b}),Object(O.jsxs)(F.a,{className:"mt-5",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsxs)("th",{children:["\uc885\uac00",Object(O.jsx)("br",{}),"(\ub9e4\uc218\ub2e8\uac00)"]}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\ud3c9\ub2e8\uac00"}),Object(O.jsx)("th",{children:"\ubcf4\uc720\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ud3c9\uac00\uae08"}),Object(O.jsx)("th",{children:"\ucd1d\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),Object(O.jsx)("tbody",{children:n.buying_info.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[e.days,"\uc77c"]}),Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:E.intComma(e.close.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(e.buying_count)}),Object(O.jsx)("td",{children:E.intComma(e.buying_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(e.avg_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(e.total_count)}),Object(O.jsx)("td",{children:E.intComma(e.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(e.total_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(e.profits.toFixed(2))}),Object(O.jsxs)("td",{className:d()({"table-danger":(t=e.profits_rate,!!n&&n.buying_info.map((function(e){return e.profits_rate})).sort((function(e,t){return e-t}))[0]===t)}),children:[(100*e.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*e.total_money_profits_rate).toFixed(2),"%"]})]},e.days);var t}))}),null!==n.sell_info&&Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsx)("th",{children:"\uc885\uac00"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac00"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uae08"}),Object(O.jsxs)("th",{children:["\ub9e4\ub3c4\uc2dc\uc810",Object(O.jsx)("br",{}),"\ucd1d\ub9e4\uc218\uae08"]}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),null!==n.sell_info&&Object(O.jsx)("tbody",{className:"sell",children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[n.sell_info.days,"\uc77c"]}),Object(O.jsx)("td",{children:n.sell_info.date}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.close.toFixed(2))}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.sell_unit_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.sell_count)}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.total_price.toFixed(2))}),Object(O.jsx)("td",{children:E.intComma(n.sell_info.profits.toFixed(2))}),Object(O.jsxs)("td",{children:[(100*n.sell_info.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*n.sell_info.total_money_profits_rate).toFixed(2),"%"]})]})})]})]})]})},G=n(51),Y=n(50),Q=n.n(Y);n(160);function z(){return Object(O.jsx)("div",{className:"loading-layer",children:Object(O.jsx)(k.a,{animation:"border"})})}n(61);function H(e){var t=Object(r.useState)(""),n=Object(g.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(g.a)(s,2),l=i[0],o=i[1],b=Object(r.useState)([]),u=Object(g.a)(b,2),m=u[0],h=u[1],x=Object(r.useState)({}),p=Object(g.a)(x,2),v=p[0],N=p[1],T=Object(r.useState)({}),L=Object(g.a)(T,2),S=(L[0],L[1]),k=Object(r.useState)(!1),F=Object(g.a)(k,2),I=F[0],_=F[1],M={BNKU:35,BULZ:65,CURE:45,DFEN:40,DPST:35,DRN:40,DUSL:40,FAS:45,FNGU:55,HIBL:55,LABU:45,MIDU:45,NAIL:50,PILL:45,RETL:50,SOXL:65,TECL:60,TNA:50,TPOR:40,TQQQ:60,UDOW:50,UPRO:55,UTSL:35,WANT:55,WEBL:60};Object(r.useEffect)((function(){var e=D()().subtract(1,"months").add(1,"days").format("YYYY-MM-DD"),t=D()().format("YYYY-MM-DD");c(e),o(t),R(e,t,!0)}),[]);var R=function(){var t=Object(y.a)(f.a.mark((function t(n,a){var c,r,s=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s.length>2&&void 0!==s[2]&&s[2],_(!0),t.prev=2,t.next=5,C.a.get("https://61exw746vf.execute-api.ap-northeast-2.amazonaws.com/default/period_rsi?start_date=".concat(n,"&end_date=").concat(a));case 5:200===(r=t.sent).status?(h(r.data.timestamp),N(r.data.rsi),S(r.data.close),c&&e.setLastMonthRsiData(r.data)):alert(r.data.error);case 7:return t.prev=7,_(!1),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[2,,7,10]])})));return function(e,n){return t.apply(this,arguments)}}(),U=Object(r.useMemo)((function(){return[{dataField:"ticker",text:"Ticker",sort:!0,headerClasses:function(e,t){return"fixed-cell gray"},classes:function(e,t,n,a){return"fixed-cell ".concat(n%2===0?"gray":"white")}}].concat(Object(G.a)(m.map((function(e){return{dataField:e,text:e,classes:function(t,n,a,c){if(n[e]&&n[e]<n.recommendedRsi){var r=(n.recommendedRsi-n[e])/n.recommendedRsi*100;return r<10?"recommended_10":r<20?"recommended_20":r<30?"recommended_30":r<40?"recommended_40":"recommended"}return""}}}))))}),[m]),B=Object(r.useMemo)((function(){return Object.entries(v).map((function(e){var t={ticker:e[0]};return m.forEach((function(n,a){t[n]=e[1][a],t.recommendedRsi=M[e[0]]})),t})).filter((function(t){return"all"===e.showType||e.staredItemList.includes(t.ticker)}))}),[v,e.showType,e.staredItemList]);return Object(O.jsxs)("div",{className:"rsi period-rsi py-4",children:[Object(O.jsxs)("div",{className:d()("mb-2 d-flex d-flex justify-content-between",[j.isBrowser?"align-items-center":"align-items-end"]),children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(A.a,{className:d()({"mt-2":j.isMobile}),variant:"outline-secondary",onClick:function(){var e=document.querySelector(".period-rsi .react-bootstrap-table");e&&(e.scrollLeft=0)},children:"<"}),Object(O.jsx)(A.a,{className:d()({"mt-2":j.isMobile}),variant:"outline-secondary",onClick:function(){var e=document.querySelector(".period-rsi .react-bootstrap-table");e&&(e.scrollLeft=e.scrollWidth)},children:">"})]}),Object(O.jsxs)("div",{className:d()("d-flex justify-content-end align-items-center",{"flex-column":j.isMobile}),children:[Object(O.jsx)(w.a.Control,{className:"date-input mx-1",type:"date",value:a,max:D()().format("YYYY-MM-DD"),onChange:function(e){c(e.target.value)}})," ","~",Object(O.jsx)(w.a.Control,{className:"date-input mx-1",type:"date",value:l,max:D()().format("YYYY-MM-DD"),onChange:function(e){o(e.target.value)}}),Object(O.jsx)(A.a,{className:d()({"mt-2":j.isMobile}),variant:"outline-secondary",onClick:function(){R(a,l)},children:"\uc870\ud68c"})]})]}),0<m.length&&Object(O.jsx)(Q.a,{classes:d()({mobile:j.isMobile}),keyField:"ticker",data:B,columns:U,condensed:!0,noDataIndication:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),I&&Object(O.jsx)(z,{})]})}var K=n(84),X=n(83),$=n(179),q=n(181),J=n(180);function Z(e){var t=Object(r.useState)(""),n=Object(g.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(""),l=Object(g.a)(i,2),o=l[0],b=l[1],u=Object(r.useState)([]),m=Object(g.a)(u,2),h=m[0],x=m[1],p=Object(r.useState)(!1),v=Object(g.a)(p,2),N=v[0],L=v[1],S=Object(r.useState)("rsi"),k=Object(g.a)(S,2),F=k[0],I=k[1],M={BNKU:[35,"\uae08\uc735"],BULZ:[65,"\uae30\uc220"],CURE:[45,"\ubc14\uc774\uc624"],DFEN:[40,"\ud56d\uacf5\uc6b0\uc8fc"],DPST:[35,"\uae08\uc735"],DRN:[40,"\ubd80\ub3d9\uc0b0"],DUSL:[40,"\uc0b0\uc5c5\uc7ac"],FAS:[45,"\uae08\uc735"],FNGU:[55,"\uae30\uc220"],HIBL:[55,"S&P500"],LABU:[45,"\ubc14\uc774\uc624"],MIDU:[45,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],NAIL:[50,"\uac74\uc124"],PILL:[45,"\ubc14\uc774\uc624"],RETL:[50,"\uc18c\ub9e4\uc720\ud1b5"],SOXL:[65,"\uae30\uc220"],TECL:[60,"\uae30\uc220"],TNA:[50,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],TPOR:[40,"\uc6b4\uc1a1"],TQQQ:[60,"\uae30\uc220"],UDOW:[50,"\ub2e4\uc6b0\uc874\uc2a4"],UPRO:[55,"S&P500"],UTSL:[35,"\uc720\ud2f8\ub9ac\ud2f0"],WANT:[55,"\uc911\uc18c\ud615/\uc18c\ube44\uc7ac"],WEBL:[60,"\uae30\uc220"]},D=["BNKU","CURE","DRN","DUSL","HIBL","MIDU","NAIL","PILL","RETL","TPOR","UTSL","WANT","WEBL"];Object(r.useEffect)((function(){R()}),[]);var R=function(){var e=Object(y.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,C.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi");case 4:200===(t=e.sent).status?(b(t.data.date),s(t.data.date),x(t.data.data)):alert(t.data.error);case 6:return e.prev=6,L(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}(),U=Object(r.useMemo)((function(){return[{dataField:"isStared",text:"",formatter:function(t,n){return Object(O.jsx)("span",{className:d()("star",{stared:t}),onClick:function(){return e.onClickStaredItem(n.ticker)},children:t?"\u2605":"\u2606"})},formatExtraData:{staredItemList:e.staredItemList}},{dataField:"sector",text:"\uc139\ud130",sort:!0},{dataField:"ticker",text:"Ticker",sort:!0,formatter:function(e,t){return"".concat(e).concat(D.includes(e)?"*":"")}},{dataField:"rsi",text:"RSI(14)",formatter:function(e,t){return e.toFixed(2)},sort:!0},{dataField:"recommendedRsi",text:"\uad8c\uc7a5 RSI",sort:!0},{dataField:"gap",text:"RSI \uad34\ub9ac\uc728",sort:!0,formatter:function(e,t){return Object(O.jsxs)("span",{children:[e.toFixed(1)," %"]})},hidden:j.isMobile},{dataField:"close",text:"\ud604\uc7ac\uac00",formatter:function(e,t){return e.toFixed(2)},sort:!0},{dataField:"change",text:"\ub4f1\ub77d\ub960",formatter:function(e,t){return 0<e?Object(O.jsxs)("span",{className:"change red",children:[Object(O.jsx)("span",{className:"arrow",children:"\u25b2 "}),"".concat((100*e).toFixed(1)," %")]}):e<0?Object(O.jsxs)("span",{className:"change blue",children:[Object(O.jsx)("span",{className:"arrow",children:"\u25bc "}),"".concat((100*e).toFixed(1)," %")]}):Object(O.jsx)("span",{className:"change",children:(100*e).toFixed(1)+"%"})},sort:!0},{dataField:"last_year_close",text:"1\ub144\uc804\uc8fc\uac00",formatter:function(e,t){if(!e)return"";var n=(t.close-e)/e;return 0<n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"mr-1",children:E.intComma(e)}),Object(O.jsxs)("span",{className:"change red small",children:["(",Object(O.jsx)("span",{className:"arrow",children:"\u25b2 "}),"".concat((100*n).toFixed(1)," %"),")"]})]}):n<0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"mr-1",children:E.intComma(e)}),Object(O.jsxs)("span",{className:"change blue small",children:["(",Object(O.jsx)("span",{className:"arrow",children:"\u25bc "}),"".concat((100*n).toFixed(1)," %"),")"]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"mr-1",children:E.intComma(e)}),Object(O.jsxs)("span",{className:"change",children:["(",(100*n).toFixed(1)+"%",")"]})]})},sort:!0,hidden:j.isMobile},{dataField:"volume",text:"\uac70\ub798\ub7c9",formatter:function(e,t){return E.intComma(Math.round(e))},sort:!0,hidden:j.isMobile}]}),[j.isMobile,e.staredItemList]),P=Object(r.useMemo)((function(){return h.filter((function(t){return"all"===e.showType||e.staredItemList.includes(t.ticker)})).map((function(t){return Object(_.a)(Object(_.a)({},t),{},{recommendedRsi:M[t.ticker][0],sector:M[t.ticker][1],isStared:e.staredItemList.includes(t.ticker),gap:(t.rsi-M[t.ticker][0])/M[t.ticker][0]*100})}))}),[h,e.staredItemList,e.showType]),W=function(){var e=Object(y.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,C.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(o,"&prev=").concat(t));case 4:200===(n=e.sent).status?(b(n.data.date),x(n.data.data)):alert(n.data.error),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.response.data.message);case 12:return e.prev=12,L(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(y.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),b(t.target.value),e.prev=2,e.next=5,C.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(t.target.value));case 5:200===(n=e.sent).status?(b(n.data.date),x(n.data.data)):alert(n.data.error),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.response.data.message);case 13:return e.prev=13,L(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(t){e.setShowType(t),localStorage.setItem("show_type",t)},H={renderer:function(t){var n,a,r,s,i,l,o={title:{text:"".concat(t.ticker," \ucd5c\uadfc \ud55c\ub2ec \uc885\uac00"),align:"left"},xAxis:{categories:null===(n=e.lastMonthRsiData)||void 0===n?void 0:n.timestamp},yAxis:{title:{text:null}},plotOptions:{line:{dataLabels:{enabled:!0}}},series:[{type:"line",name:"\uc885\uac00",lineWidth:1.3,marker:{enabled:!1},states:{hover:{lineWidth:1.3}},data:null===(a=e.lastMonthRsiData)||void 0===a?void 0:a.close[t.ticker].map((function(e){return Number(e.toFixed(2))}))}]},d={title:{text:"".concat(t.ticker," \ucd5c\uadfc \ud55c\ub2ec RSI"),align:"left"},xAxis:{categories:null===(r=e.lastMonthRsiData)||void 0===r?void 0:r.timestamp},yAxis:{title:{text:null}},plotOptions:{line:{dataLabels:{enabled:!0}}},series:[{type:"line",name:"RSI",lineWidth:1.3,marker:{enabled:!1},states:{hover:{lineWidth:1.3}},data:null===(s=e.lastMonthRsiData)||void 0===s?void 0:s.rsi[t.ticker]},{type:"line",name:"\uad8c\uc7a5 RSI",lineWidth:1.3,enableMouseTracking:!1,marker:{enabled:!1},dataLabels:{enabled:!1},data:Array(null!==(i=null===(l=e.lastMonthRsiData)||void 0===l?void 0:l.timestamp.length)&&void 0!==i?i:0).fill(M[t.ticker][0]),color:"red"}]};return Object(O.jsxs)("div",{className:"position-relative",children:[Object(O.jsx)(B.a,{className:"graph-type-btn",size:"sm",children:["rsi","close"].map((function(e){return Object(O.jsx)(A.a,{variant:"outline-info",onClick:function(){return I(e)},active:F===e,children:e},e)}))}),"close"===F&&Object(O.jsx)(T.a,{highcharts:c.a,options:o}),"rsi"===F&&Object(O.jsx)(T.a,{highcharts:c.a,options:d})]})}};return Object(O.jsxs)("div",{className:"rsi py-4",children:[Object(O.jsxs)("div",{className:d()("mb-2 d-flex justify-content-between align-items-center",{"flex-column":j.isMobile}),children:[Object(O.jsxs)(B.a,{className:d()({"mb-2":j.isMobile}),toggle:!0,children:[Object(O.jsx)($.a,{type:"radio",name:"radio",variant:"outline-secondary",value:"\uc804\uccb4\ubcf4\uae30",checked:"all"===e.showType,onChange:function(){return Y("all")},children:"\uc804\uccb4\ubcf4\uae30"}),Object(O.jsx)($.a,{type:"radio",name:"radio",variant:"outline-secondary",value:"\uc804\uccb4\ubcf4\uae30",checked:"stared"===e.showType,onChange:function(){return Y("stared")},children:"\uc990\uaca8\ucc3e\uae30"})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)(A.a,{variant:"outline-secondary",onClick:function(){return W(!0)},children:j.isBrowser?"< \uc774\uc804\ub0a0\uc9dc":"<<"}),Object(O.jsx)(w.a.Control,{className:"date-input mx-1",type:"date",value:o,max:a,onChange:G}),Object(O.jsx)(A.a,{className:"mr-2",variant:"outline-secondary",onClick:function(){return W(!1)},disabled:o===a,children:j.isBrowser?"\ub2e4\uc74c\ub0a0\uc9dc >":">>"}),Object(O.jsx)(q.a,{placement:"top",overlay:Object(O.jsx)(J.a,{id:"tooltip",children:"\ub9e4\uc77c \uc624\uc804 8\uc2dc 5\ubd84\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4."}),children:Object(O.jsx)(X.a,{icon:K.a})})]})]}),0<U.length&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"mb-0 text-left",children:Object(O.jsxs)("small",{children:["*:"," ",Object(O.jsx)("a",{href:"https://cafe.naver.com/infinitebuying/23962",target:"_blank",children:"LOC \ub9e4\uc218 \uc720\uc758\uc885\ubaa9"})]})}),Object(O.jsx)("p",{className:"mb-0 text-left",children:Object(O.jsx)("small",{children:"- \ud14c\uc774\ube14\uc744 \ud074\ub9ad\ud558\uba74 \ucd5c\uadfc \ud55c\ub2ec \uc885\uac00, RSI \ub370\uc774\ud130\ub97c \uadf8\ub798\ud504\ub85c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),Object(O.jsx)(Q.a,{classes:d()({mobile:j.isMobile}),keyField:"ticker",data:P,columns:U,rowClasses:function(e,t){if(e.rsi<e.recommendedRsi){var n=Math.abs(e.gap);return n<10?"recommended_10":n<20?"recommended_20":n<30?"recommended_30":n<40?"recommended_40":"recommended"}return""},expandRow:H,condensed:!0,noDataIndication:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),N&&Object(O.jsx)(z,{})]})}function V(){var e,t=Object(r.useState)(null),n=Object(g.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(null!==(e=localStorage.getItem("show_type"))&&void 0!==e?e:"all"),i=Object(g.a)(s,2),l=i[0],o=i[1],d=Object(r.useState)([]),j=Object(g.a)(d,2),b=j[0],u=j[1];Object(r.useEffect)((function(){var e=localStorage.getItem("star_item_list");e&&u(e.split(","))}),[]),Object(r.useEffect)((function(){localStorage.setItem("star_item_list",b.join(","))}),[b]);return Object(O.jsxs)("div",{className:"rsi py-4",children:[Object(O.jsx)(Z,{showType:l,setShowType:o,staredItemList:b,onClickStaredItem:function(e){b.includes(e)?u(b.filter((function(t){return t!==e}))):u([].concat(Object(G.a)(b),[e]))},lastMonthRsiData:a}),Object(O.jsx)(S.a.Google,{className:"my-2",style:{display:"inline-block",width:"100%",height:90},client:"ca-pub-7150456660061561",slot:"1671889334",format:""}),Object(O.jsx)("hr",{}),Object(O.jsx)(H,{showType:l,staredItemList:b,setLastMonthRsiData:c})]})}var ee=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:d()(j.isMobile?"mobile-container":"container"),children:[Object(O.jsx)(x,{}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(u.b,{path:"/",exact:!0,children:Object(O.jsx)(u.a,{to:"/lab"})}),Object(O.jsx)(u.b,{path:"/lab",component:W}),Object(O.jsx)(u.b,{path:"/rsi",component:V})]})]})})},te=(n(169),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))});c.a.setOptions({lang:{thousandsSep:","},credits:{enabled:!1}}),l.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(ee,{})}),document.getElementById("root")),te()},61:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[170,1,2]]]);