(this.webpackJsonpinfinitebuying=this.webpackJsonpinfinitebuying||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(17),a=n.n(i),s=n(4),l=n.n(s),j=n(46),o=n(6),d=(n(52),n(94)),b=n(96),u=(n(53),n(1)),O=function(){return Object(u.jsxs)(d.a,{bg:"light",expand:"md",children:[Object(u.jsx)(d.a.Brand,{href:"#lab",children:"\ubb34\ud55c\ub9e4\uc218\ubc95 \ubc31\ud14c\uc2a4\ud2b8"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsx)(b.a,{className:"mr-auto",children:Object(u.jsx)(b.a.Link,{href:"#lab",children:"\uc5f0\uad6c\uc18c"})})})]})},h=n(28),x=n.n(h),m=n(42),p=n(10),y=n(43),g=n.n(y),f=n(92),v=n(93),C=n(18),T=n(16),N=n(44),_=n.n(N),L=n(89),F=n(45),I=n(95),S=n(90),P=n(91),D=(n(78),function(e){var t=e.startBacktest,n=Object(c.useState)("TQQQ"),r=Object(p.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)("2021-01-01"),l=Object(p.a)(s,2),j=l[0],o=l[1],d=Object(c.useState)(1e4),b=Object(p.a)(d,2),O=b[0],h=b[1],x=Object(c.useState)(40),m=Object(p.a)(x,2),y=m[0],g=m[1],f=Object(c.useState)("close"),v=Object(p.a)(f,2),N=v[0],D=v[1],B=Object(c.useState)({orderType:"loc",priceType:"avgPrice",rate:0}),G=Object(p.a)(B,2),k=G[0],U=G[1],A=Object(c.useState)({orderType:"loc",priceType:"avgPrice",rate:15}),E=Object(p.a)(A,2),M=E[0],Q=E[1],R=Object(c.useState)({orderType:"limitOrder",priceType:"avgPrice",rate:10}),w=Object(p.a)(R,2),W=w[0],Y=w[1],$={TECL:"2008-12-18",FAS:"2008-11-07",RETL:"2010-07-15",DPST:"2015-08-20",DUSL:"2017-05-04",NAIL:"2015-08-20",LABU:"2015-05-29",TQQQ:"2010-02-11",FNGU:"2018-01-24",BNKU:"2019-04-04",UPRO:"2009-06-26",TPOR:"2017-11-07",DFEN:"2017-05-04",WEBL:"2019-11-08",TNA:"2008-11-06",MIDU:"2009-01-09",HIBL:"2019-11-08",WANT:"2018-12-03",SOXL:"2010-03-12"},z=Object(c.useMemo)((function(){return $[i]}),[i]),H=_()().add(-1,"d").format("YYYY-MM-DD"),J=function(e,t){var n=t.target.value;U(Object(T.a)(Object(T.a)({},k),{},Object(C.a)({},e,n)))},K=function(e,t){var n=t.target.value;Q(Object(T.a)(Object(T.a)({},M),{},Object(C.a)({},e,n)))},X=function(e,t){var n=t.target.value;Y(Object(T.a)(Object(T.a)({},W),{},Object(C.a)({},e,n)))},q=function(e){h(O+e)};return Object(u.jsxs)("div",{className:"condition p-4",children:[Object(u.jsxs)(L.a,{children:[Object(u.jsxs)(F.a,{md:12,lg:!0,children:[Object(u.jsxs)(I.a.Group,{controlId:"stock",children:[Object(u.jsx)(I.a.Label,{children:"\uc885\ubaa9"}),Object(u.jsx)(I.a.Control,{as:"select",onChange:function(e){var t=e.target.value;a(t),j<$[t]&&o($[t])},value:i,children:["TECL","FAS","RETL","DPST","DUSL","NAIL","LABU","TQQQ","FNGU","BNKU","UPRO","TPOR","DFEN","WEBL","TNA","MIDU","HIBL","WANT","SOXL"].map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})]}),Object(u.jsxs)(L.a,{children:[Object(u.jsxs)(F.a,{md:12,lg:!0,children:[Object(u.jsxs)(I.a.Group,{controlId:"money",className:"mb-1",children:[Object(u.jsxs)(I.a.Label,{children:["\ud22c\uc790\uae08($) ",Object(u.jsx)("small",{children:"(\ucd5c\uc18c $10,000)"})]}),Object(u.jsx)(I.a.Control,{type:"number",value:O,min:1e4,onChange:function(e){var t=Math.max(1e4,e.target.value);h(t)}})]}),Object(u.jsxs)(S.a,{size:"sm",className:"mb-3 d-flex",children:[Object(u.jsx)(P.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return q(1e5)},children:"+100,000"}),Object(u.jsx)(P.a,{className:"py-0",variant:"outline-secondary",onClick:function(){return q(1e4)},children:"+10,000"}),Object(u.jsx)(P.a,{className:"py-0",variant:"outline-secondary",onClick:function(){h(1e4)},children:"C"})]})]}),Object(u.jsx)(F.a,{md:12,lg:!0,children:Object(u.jsxs)(I.a.Group,{controlId:"total-days",children:[Object(u.jsxs)(I.a.Label,{children:["\ubd84\ud560 ",Object(u.jsx)("small",{children:"(1 ~ 100)"})]}),Object(u.jsx)(I.a.Control,{type:"number",value:y,min:"1",max:"100",onChange:function(e){var t=Math.min(100,Math.max(1,e.target.value));g(t)}})]})})]}),Object(u.jsxs)(I.a.Group,{controlId:"start-date",children:[Object(u.jsx)(I.a.Label,{children:"\uc2dc\uc791\uc77c"}),Object(u.jsx)(I.a.Control,{type:"date",value:j,min:z,max:H,onChange:function(e){o(e.target.value)}})]}),Object(u.jsxs)(I.a.Group,{controlId:"first-buying",children:[Object(u.jsx)(I.a.Label,{children:"\uccab\ub0a0 \ub9e4\uc218 \ub2e8\uac00"}),Object(u.jsx)(I.a.Control,{as:"select",onChange:function(e){D(e.target.value)},value:N,children:Object(u.jsx)("option",{value:"close",children:"\uc885\uac00"})})]})]}),Object(u.jsxs)(F.a,{md:12,lg:!0,children:[Object(u.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 1"}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)(I.a.Group,{controlId:"buying-1-ordertype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:k.orderType,onChange:function(e){return J("orderType",e)},children:Object(u.jsx)("option",{value:"loc",children:"LOC"})})}),Object(u.jsx)(I.a.Group,{controlId:"buying-1-pricetype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:k.priceType,onChange:function(e){return J("priceType",e)},children:Object(u.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(u.jsx)(I.a.Group,{controlId:"buying-1-rate",className:"mb-0",children:Object(u.jsx)(I.a.Control,{type:"number",value:k.rate,onChange:function(e){return J("rate",e)}})}),Object(u.jsx)("span",{children:"%"})]}),Object(u.jsx)("h2",{children:"\ub9e4\uc218 \uc870\uac74 2"}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)(I.a.Group,{controlId:"buying-2-ordertype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:M.orderType,onChange:function(e){return K("orderType",e)},children:Object(u.jsx)("option",{value:"loc",children:"LOC"})})}),Object(u.jsx)(I.a.Group,{controlId:"buying-2-pricetype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:M.priceType,onChange:function(e){return K("priceType",e)},children:Object(u.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(u.jsx)(I.a.Group,{controlId:"buying-2-rate",className:"mb-0",children:Object(u.jsx)(I.a.Control,{type:"number",value:M.rate,onChange:function(e){return K("rate",e)}})}),Object(u.jsx)("span",{children:"%"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{children:"\ub9e4\ub3c4 \uc870\uac74"}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)(I.a.Group,{controlId:"selling-ordertype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:W.orderType,onChange:function(e){return X("orderType",e)},children:Object(u.jsx)("option",{value:"limitOrder",children:"\ubcf4\ud1b5\uac00(\uc9c0\uc815\uac00)"})})}),Object(u.jsx)(I.a.Group,{controlId:"selling-pricetype",className:"mb-0 mr-1",children:Object(u.jsx)(I.a.Control,{as:"select",value:W.priceType,onChange:function(e){return X("priceType",e)},children:Object(u.jsx)("option",{value:"avgPrice",children:"\ud3c9\ub2e8\uac00"})})}),Object(u.jsx)(I.a.Group,{controlId:"selling-rate",className:"mb-0",children:Object(u.jsx)(I.a.Control,{type:"number",value:W.rate,onChange:function(e){return X("rate",e)}})}),Object(u.jsx)("span",{children:"%"})]})]})]}),Object(u.jsx)(P.a,{onClick:function(){t({stock:i,startDate:j,money:O,totalDays:y,firstBuyingPriceType:N,buying1Condition:k,buying2Condition:M,sellingCondition:W})},children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791"})]})}),B=(n(79),{intComma:function(e){"number"==typeof e&&(e=e.toString());for(var t=/(^[+-]?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}}),G=function(){var e=Object(c.useState)(null),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(p.a)(i,2),s=a[0],l=a[1],j=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buying1Condition.rate=Number(t.buying1Condition.rate),t.buying2Condition.rate=Number(t.buying2Condition.rate),t.sellingCondition.rate=Number(t.sellingCondition.rate),l(!0),r(null),e.prev=5,e.next=8,g.a.get("https://54o7jbyvz3.execute-api.ap-northeast-2.amazonaws.com/default/infinitebuying",{params:{stock:t.stock,startDate:t.startDate,money:t.money,totalDays:t.totalDays,firstBuyingPriceType:t.firstBuyingPriceType,buying1OrderType:t.buying1Condition.orderType,buying1PriceType:t.buying1Condition.priceType,buying1Rate:t.buying1Condition.rate,buying2OrderType:t.buying2Condition.orderType,buying2PriceType:t.buying2Condition.priceType,buying2Rate:t.buying2Condition.rate,sellingOrderType:t.sellingCondition.orderType,sellingPriceType:t.sellingCondition.priceType,sellingRate:t.sellingCondition.rate}});case 8:200===(n=e.sent).status&&r(n.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:return e.prev=15,l(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[5,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)(D,{startBacktest:j}),s&&Object(u.jsx)("div",{className:"mt-5",children:Object(u.jsx)(f.a,{animation:"border"})}),null!==n&&Object(u.jsxs)(v.a,{className:"mt-5",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\uc77c\ucc28"}),Object(u.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(u.jsxs)("th",{children:["\uc885\uac00",Object(u.jsx)("br",{}),"(\ub9e4\uc218\ub2e8\uac00)"]}),Object(u.jsx)("th",{children:"\ub9e4\uc218\uac1c\uc218"}),Object(u.jsx)("th",{children:"\ub9e4\uc218\uae08"}),Object(u.jsx)("th",{children:"\ud3c9\ub2e8\uac00"}),Object(u.jsx)("th",{children:"\ubcf4\uc720\uac1c\uc218"}),Object(u.jsx)("th",{children:"\ud3c9\uac00\uae08"}),Object(u.jsx)("th",{children:"\ucd1d\ub9e4\uc218\uae08"}),Object(u.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(u.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(u.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),Object(u.jsx)("tbody",{children:n.buying_info.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[e.days,"\uc77c"]}),Object(u.jsx)("td",{children:e.date}),Object(u.jsx)("td",{children:B.intComma(e.close)}),Object(u.jsx)("td",{children:B.intComma(e.buying_count)}),Object(u.jsx)("td",{children:B.intComma(e.buying_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(e.avg_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(e.total_count)}),Object(u.jsx)("td",{children:B.intComma(e.evaluated_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(e.total_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(e.profits.toFixed(2))}),Object(u.jsxs)("td",{children:[(100*e.profits_rate).toFixed(2),"%"]}),Object(u.jsxs)("td",{children:[(100*e.total_money_profits_rate).toFixed(2),"%"]})]},e.days)}))}),null!==n.sell_info&&Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\uc77c\ucc28"}),Object(u.jsx)("th",{children:"\ub0a0\uc9dc"}),Object(u.jsx)("th",{children:"\uc885\uac00"}),Object(u.jsx)("th",{}),Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"\ub9e4\ub3c4\uac00"}),Object(u.jsx)("th",{children:"\ub9e4\ub3c4\uac1c\uc218"}),Object(u.jsx)("th",{children:"\ub9e4\ub3c4\uae08"}),Object(u.jsxs)("th",{children:["\ub9e4\ub3c4\uc2dc\uc810",Object(u.jsx)("br",{}),"\ucd1d\ub9e4\uc218\uae08"]}),Object(u.jsx)("th",{children:"\uc218\uc775\uae08"}),Object(u.jsx)("th",{children:"\uc218\uc775\ub960"}),Object(u.jsx)("th",{children:"\uc6d0\uae08\ub300\ube44\uc218\uc775\ub960"})]})}),null!==n.sell_info&&Object(u.jsx)("tbody",{className:"sell",children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[n.sell_info.days,"\uc77c"]}),Object(u.jsx)("td",{children:n.sell_info.date}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.close)}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.sell_unit_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.sell_count)}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.evaluated_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.total_price.toFixed(2))}),Object(u.jsx)("td",{children:B.intComma(n.sell_info.profits.toFixed(2))}),Object(u.jsxs)("td",{children:[(100*n.sell_info.profits_rate).toFixed(2),"%"]}),Object(u.jsxs)("td",{children:[(100*n.sell_info.total_money_profits_rate).toFixed(2),"%"]})]})})]})]})},k=function(){return Object(u.jsx)("div",{className:"mt-3",children:"\uc885\ubaa9 \ucd94\ucc9c"})};var U=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:l()("container"),children:[Object(u.jsx)(O,{}),Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,children:Object(u.jsx)(o.a,{to:"/lab"})}),Object(u.jsx)(o.b,{path:"/lab",component:G}),Object(u.jsx)(o.b,{path:"/recommend",component:k})]})]})})},A=(n(86),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))});a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root")),A()}},[[87,1,2]]]);