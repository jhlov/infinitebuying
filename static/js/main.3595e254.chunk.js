(this.webpackJsonpinfinitebuying=this.webpackJsonpinfinitebuying||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},141:function(e,t,n){},147:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),s=n(4),o=n.n(s),l=n(23),j=n(67),d=n(10),b=(n(77),n(155)),u=n(157),O=(n(78),n(1)),h=function(){return Object(O.jsxs)(b.a,{bg:"light",expand:"md",children:[Object(O.jsx)(b.a.Brand,{href:"#lab",children:"\ubb34\ud55c\ub9e4\uc218\ubc95 \ubc31\ud14c\uc2a4\ud2b8"}),Object(O.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(u.a,{className:"mr-auto",children:[Object(O.jsx)(u.a.Link,{href:"#lab",children:"\uc5f0\uad6c\uc18c"}),Object(O.jsx)(u.a.Link,{href:"#rsi",children:"RSI"})]})})]})},x=n(16),p=n.n(x),m=n(24),f=n(11),y=n(25),g=n.n(y),v=n(153),C=n(154),T=n(26),N=n(17),L=n(64),S=n.n(L),F=n(150),_=n(65),U=n(156),I=n(151),k=n(152),B=(n(103),function(e){var t=e.startBacktest,n=Object(c.useState)("TQQQ"),a=Object(f.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(f.a)(s,2),l=o[0],j=o[1],d=Object(c.useState)("2021-01-01"),b=Object(f.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)(1e4),p=Object(f.a)(x,2),m=p[0],y=p[1],g=Object(c.useState)(40),v=Object(f.a)(g,2),C=v[0],L=v[1],B=Object(c.useState)("close"),D=Object(f.a)(B,2),P=D[0],R=D[1],A=Object(c.useState)({orderType:"loc",priceType:"avgPrice",rate:0}),M=Object(f.a)(A,2),w=M[0],E=M[1],G=Object(c.useState)({orderType:"loc",priceType:"avgPrice",rate:15}),Q=Object(f.a)(G,2),z=Q[0],W=Q[1],H=Object(c.useState)({orderType:"limitOrder",priceType:"avgPrice",rate:10}),K=Object(f.a)(H,2),X=K[0],Y=K[1],$={TECL:"2008-12-18",FAS:"2008-11-07",RETL:"2010-07-15",DPST:"2015-08-20",DUSL:"2017-05-04",NAIL:"2015-08-20",LABU:"2015-05-29",TQQQ:"2010-02-11",FNGU:"2018-01-24",BNKU:"2019-04-04",UPRO:"2009-06-26",TPOR:"2017-11-07",DFEN:"2017-05-04",WEBL:"2019-11-08",TNA:"2008-11-06",MIDU:"2009-01-09",HIBL:"2019-11-08",WANT:"2018-12-03",SOXL:"2010-03-12",CUSTOM:"2000-01-01"},J=Object(c.useMemo)((function(){return $[r]}),[r]),Z=S()().add(-1,"d").format("YYYY-MM-DD"),q=function(e,t){var n=t.target.value;E(Object(N.a)(Object(N.a)({},w),{},Object(T.a)({},e,n)))},V=function(e,t){var n=t.target.value;W(Object(N.a)(Object(N.a)({},z),{},Object(T.a)({},e,n)))},ee=function(e,t){var n=t.target.value;Y(Object(N.a)(Object(N.a)({},X),{},Object(T.a)({},e,n)))},te=function(e){y(m+e)};return Object(O.jsxs)("div",{className:"condition p-4",children:[Object(O.jsxs)(F.a,{children:[Object(O.jsxs)(_.a,{md:12,lg:!0,children:[Object(O.jsxs)(U.a.Group,{controlId:"stock",children:[Object(O.jsx)(U.a.Label,{children:"\uc885\ubaa9"}),Object(O.jsxs)(F.a,{children:[Object(O.jsx)(_.a,{children:Object(O.jsx)(U.a.Control,{as:"select",onChange:function(e){var t=e.target.value;i(t),"CUSTOM"!==t&&j(""),u<$[t]&&h($[t])},value:r,children:[["TECL","TECL"],["FAS","FAS"],["RETL","RETL"],["DPST","DPST"],["DUSL","DUSL"],["NAIL","NAIL"],["LABU","LABU"],["TQQQ","TQQQ"],["FNGU","FNGU"],["BNKU","BNKU"],["UPRO","UPRO"],["TPOR","TPOR"],["DFEN","DFEN"],["WEBL","WEBL"],["TNA","TNA"],["MIDU","MIDU"],["HIBL","HIBL"],["WANT","WANT"],["SOXL","SOXL"],["\uc9c1\uc811\uc120\ud0dd","CUSTOM"]].map((function(e){return Object(O.jsx)("option",{value:e[1],children:e[0]},e[1])}))})}),Object(O.jsx)(_.a,{children:Object(O.jsx)(U.a.Control,{type:"text",value:l,onChange:function(e){var t=e.target.value;j(t)},readOnly:"CUSTOM"!==r})})]})]}),Object(O.jsxs)(F.a,{children:[Object(O.jsxs)(_.a,{md:12,lg:!0,children:[Object(O.jsxs)(U.a.Group,{controlId:"money",className:"mb-1",children:[Object(O.jsxs)(U.a.Label,{children:["\ud22c\uc790\uae08($) ",Object(O.jsx)("small",{children:"(\ucd5c\uc18c $10,000)"})]}),Object(O.jsx)(U.a.Control,{type:"number",value:m,min:1e4,onChange:function(e){var t=Math.max(1e4,e.target.value);y(t)}})]}),Object(O.jsxs)(I.a,{size:"sm",className:"mb-3 d-flex",children:[Object(O.jsx)(k.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e5)},children:"+100,000"}),Object(O.jsx)(k.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e4)},children:"+10,000"}),Object(O.jsx)(k.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return te(1e3)},children:"+1,000"}),Object(O.jsx)(k.a,{className:"py-0",variant:"outline-secondary",onClick:function(){y(1e4)},children:"C"})]})]}),Object(O.jsx)(_.a,{md:12,lg:!0,children:Object(O.jsxs)(U.a.Group,{controlId:"total-days",children:[Object(O.jsxs)(U.a.Label,{children:["\ubd84\ud560 ",Object(O.jsx)("small",{children:"(1 ~ 100)"})]}),Object(O.jsx)(U.a.Control,{type:"number",value:C,min:"1",max:"100",onChange:function(e){var t=Math.min(100,Math.max(1,e.target.value));L(t)}})]})})]}),Object(O.jsxs)(U.a.Group,{controlId:"start-date",children:[Object(O.jsx)(U.a.Label,{children:"\uc2dc\uc791\uc77c"}),Object(O.jsx)(U.a.Control,{type:"date",value:u,min:J,max:Z,onChange:function(e){h(e.target.value)}})]}),Object(O.jsxs)(U.a.Group,{controlId:"first-buying",children:[Object(O.jsx)(U.a.Label,{children:"\uccab\ub0a0 \ub9e4\uc218 \ub2e8\uac00"}),Object(O.jsx)(U.a.Control,{as:"select",onChange:function(e){R(e.target.value)},value:P,children:Object(O.jsx)("option",{value:"close",children:"\uc885\uac00"})})]})]}),Object(O.jsxs)(_.a,{md:12,lg:!0,children:[Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 1"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(U.a.Group,{controlId:"buying-1-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:w.orderType,onChange:function(e){return q("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(U.a.Group,{controlId:"buying-1-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:w.priceType,onChange:function(e){return q("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(U.a.Group,{controlId:"buying-1-rate",className:"mb-0",children:Object(O.jsx)(U.a.Control,{type:"number",value:w.rate,onChange:function(e){return q("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 2"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(U.a.Group,{controlId:"buying-2-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:z.orderType,onChange:function(e){return V("orderType",e)},children:Object(O.jsx)("option",{value:"loc",children:"LOC"})})}),Object(O.jsx)(U.a.Group,{controlId:"buying-2-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:z.priceType,onChange:function(e){return V("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(U.a.Group,{controlId:"buying-2-rate",className:"mb-0",children:Object(O.jsx)(U.a.Control,{type:"number",value:z.rate,onChange:function(e){return V("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"\ub9e4\ub3c4 \uc870\uac74"}),Object(O.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(O.jsx)(U.a.Group,{controlId:"selling-ordertype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:X.orderType,onChange:function(e){return ee("orderType",e)},children:Object(O.jsx)("option",{value:"limitOrder",children:"\ubcf4\ud1b5\uac00(\uc9c0\uc815\uac00)"})})}),Object(O.jsx)(U.a.Group,{controlId:"selling-pricetype",className:"mb-0 mr-1",children:Object(O.jsx)(U.a.Control,{as:"select",value:X.priceType,onChange:function(e){return ee("priceType",e)},children:Object(O.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(O.jsx)(U.a.Group,{controlId:"selling-rate",className:"mb-0",children:Object(O.jsx)(U.a.Control,{type:"number",value:X.rate,onChange:function(e){return ee("rate",e)}})}),Object(O.jsx)("span",{children:"%"})]})]})]}),Object(O.jsx)(k.a,{onClick:function(){t({stock:"CUSTOM"!==r?r:l.trim(),startDate:u,money:m,totalDays:C,firstBuyingPriceType:P,buying1Condition:w,buying2Condition:z,sellingCondition:X})},disabled:"CUSTOM"===r&&""===l.trim(),children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791"})]})}),D=(n(104),{intComma:function(e){"number"==typeof e&&(e=e.toString());for(var t=/(^[+-]?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}}),P=function(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(f.a)(r,2),s=i[0],l=i[1],j=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buying1Condition.rate=Number(t.buying1Condition.rate),t.buying2Condition.rate=Number(t.buying2Condition.rate),t.sellingCondition.rate=Number(t.sellingCondition.rate),l(!0),a(null),e.prev=5,e.next=8,g.a.get("https://54o7jbyvz3.execute-api.ap-northeast-2.amazonaws.com/dev/infinitebuying-dev",{params:{stock:t.stock,startDate:t.startDate,money:t.money,totalDays:t.totalDays,firstBuyingPriceType:t.firstBuyingPriceType,buying1OrderType:t.buying1Condition.orderType,buying1PriceType:t.buying1Condition.priceType,buying1Rate:t.buying1Condition.rate,buying2OrderType:t.buying2Condition.orderType,buying2PriceType:t.buying2Condition.priceType,buying2Rate:t.buying2Condition.rate,sellingOrderType:t.sellingCondition.orderType,sellingPriceType:t.sellingCondition.priceType,sellingRate:t.sellingCondition.rate}});case 8:200===(n=e.sent).status&&a(n.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),alert(e.t0.response.data.message);case 16:return e.prev=16,l(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[5,12,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"mt-3",children:[Object(O.jsx)(B,{startBacktest:j}),s&&Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsx)(v.a,{animation:"border"})}),null!==n&&Object(O.jsxs)(C.a,{className:"mt-5",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsxs)("th",{children:["\uc885\uac00",Object(O.jsx)("br",{}),"(\ub9e4\uc218\ub2e8\uac00)"]}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\ud3c9\ub2e8\uac00"}),Object(O.jsx)("th",{children:"\ubcf4\uc720\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ud3c9\uac00\uae08"}),Object(O.jsx)("th",{children:"\ucd1d\ub9e4\uc218\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),Object(O.jsx)("tbody",{children:n.buying_info.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[e.days,"\uc77c"]}),Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:D.intComma(e.close)}),Object(O.jsx)("td",{children:D.intComma(e.buying_count)}),Object(O.jsx)("td",{children:D.intComma(e.buying_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(e.avg_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(e.total_count)}),Object(O.jsx)("td",{children:D.intComma(e.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(e.total_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(e.profits.toFixed(2))}),Object(O.jsxs)("td",{className:o()({"table-danger":(t=e.profits_rate,!!n&&n.buying_info.map((function(e){return e.profits_rate})).sort((function(e,t){return e-t}))[0]===t)}),children:[(100*e.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*e.total_money_profits_rate).toFixed(2),"%"]})]},e.days);var t}))}),null!==n.sell_info&&Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\uc77c\ucc28"}),Object(O.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(O.jsx)("th",{children:"\uc885\uac00"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac00"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uac1c\uc218"}),Object(O.jsx)("th",{children:"\ub9e4\ub3c4\uae08"}),Object(O.jsxs)("th",{children:["\ub9e4\ub3c4\uc2dc\uc810",Object(O.jsx)("br",{}),"\ucd1d\ub9e4\uc218\uae08"]}),Object(O.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(O.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(O.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),null!==n.sell_info&&Object(O.jsx)("tbody",{className:"sell",children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[n.sell_info.days,"\uc77c"]}),Object(O.jsx)("td",{children:n.sell_info.date}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.close)}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.sell_unit_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.sell_count)}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.evaluated_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.total_price.toFixed(2))}),Object(O.jsx)("td",{children:D.intComma(n.sell_info.profits.toFixed(2))}),Object(O.jsxs)("td",{children:[(100*n.sell_info.profits_rate).toFixed(2),"%"]}),Object(O.jsxs)("td",{children:[(100*n.sell_info.total_money_profits_rate).toFixed(2),"%"]})]})})]})]})},R=n(66),A=n.n(R);n(141);function M(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(f.a)(r,2),s=i[0],j=i[1],d=Object(c.useState)([]),b=Object(f.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)([]),y=Object(f.a)(x,2),v=y[0],C=y[1],T={BNKU:35,DFEN:40,DPST:35,DUSL:40,FAS:45,FNGU:55,HIBL:55,LABU:45,MIDU:45,NAIL:50,RETL:50,SOXL:65,TECL:60,TNA:50,TPOR:40,TQQQ:60,UPRO:55,WANT:55,WEBL:60,BULZ:65,UDOW:50,PILL:45,CURE:45,DRN:40,UTSL:35};Object(c.useEffect)((function(){L(),S()}),[]),Object(c.useEffect)((function(){S()}),[l.isBrowser]);var L=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi");case 2:200===(t=e.sent).status?(j(t.data.date),a(t.data.date),h(t.data.data)):alert(t.data.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=[{dataField:"ticker",text:"Ticker",sort:!0},{dataField:"rsi",text:"RSI",formatter:function(e,t){return e.toFixed(2)},sort:!0},{dataField:"recommendedRsi",text:"\uad8c\uc7a5 RSI",sort:!0},{dataField:"close",text:"\ud604\uc7ac\uac00",sort:!0},{dataField:"change",text:"\ub4f1\ub77d\ub960",formatter:function(e,t){return 0<e?Object(O.jsx)("span",{className:"red",children:"\u25b2 ".concat((100*e).toFixed(1)," %")}):e<0?Object(O.jsx)("span",{className:"blue",children:"\u25bc ".concat((100*e).toFixed(1)," %")}):(100*e).toFixed(1)+"%"},sort:!0}];l.isBrowser&&e.push({dataField:"volume",text:"\uac70\ub798\ub7c9",formatter:function(e,t){return D.intComma(Math.round(e))},sort:!0}),C(e)},F=Object(c.useMemo)((function(){return u.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{recommendedRsi:T[e.ticker]})}))}),[u]),_=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(s,"&prev=").concat(t));case 3:200===(n=e.sent).status?(j(n.data.date),h(n.data.data)):alert(n.data.error),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(t.target.value),e.prev=1,e.next=4,g.a.get("https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=".concat(t.target.value));case 4:200===(n=e.sent).status?(j(n.data.date),h(n.data.data)):alert(n.data.error),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"rsi py-4",children:[Object(O.jsxs)("div",{className:"mb-2 d-flex justify-content-end",children:[Object(O.jsx)(k.a,{variant:"outline-secondary",size:"sm",onClick:function(){return _(!0)},children:"< \uc774\uc804\ub0a0\uc9dc"}),Object(O.jsx)(U.a.Control,{className:"date-input mx-1",type:"date",value:s,max:n,onChange:I}),Object(O.jsx)(k.a,{variant:"outline-secondary",size:"sm",onClick:function(){return _(!1)},disabled:s===n,children:"\ub2e4\uc74c\ub0a0\uc9dc >"})]}),0<v.length&&Object(O.jsx)(A.a,{classes:o()({mobile:l.isMobile}),keyField:"ticker",sort:{dataField:"ticker",order:"asc"},data:F,columns:v,rowClasses:function(e,t){return e.rsi<e.recommendedRsi?"recommended":""},striped:!0,condensed:!0}),0===u.length&&Object(O.jsx)("p",{children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]})}var w=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:o()(l.isMobile?"mobile-container":"container"),children:[Object(O.jsx)(h,{}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(d.b,{path:"/",exact:!0,children:Object(O.jsx)(d.a,{to:"/lab"})}),Object(O.jsx)(d.b,{path:"/lab",component:P}),Object(O.jsx)(d.b,{path:"/rsi",component:M})]})]})})},E=(n(147),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),E()},77:function(e,t,n){},78:function(e,t,n){}},[[149,1,2]]]);