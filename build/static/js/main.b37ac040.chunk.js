(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),c=a.n(o),r=a(35),i=a(36),m=a(37),u=a(38),s=a(21),p=a.n(s),d=a(11),h=a(12),E=a(15),v=a(13),f=a(16),b=a(34),g=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={count:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){console.log("##### items will unmount #####")}},{key:"componentDidMount",value:function(){var e=this;console.log("##### items did mount #####"),window.scrollTo(0,0),setInterval(function(){e.setState({count:e.state.count+1})},200)}},{key:"render",value:function(){var e=Array(200).fill("").map(function(e,t){return l.a.createElement(b.a,{className:"item",to:"/item/".concat(t),key:t},l.a.createElement("div",null,"Item - ",t))}),t=l.a.createElement("h2",{className:"count"},"count: ",this.state.count),a=l.a.createElement("div",{className:"desc"},l.a.createElement("p",null,"This page of route is using ",l.a.createElement("code",null,"LiveRoute")," with"," ",l.a.createElement("code",null,"livePath"),"."),l.a.createElement("p",null,"In this page, the list page will not be unmounted on item detail page and will be unmounted when enter into other pages such as home page."),l.a.createElement("p",null,"The count number above is a sign of component live state. It will be reset to 0 when the component of Route unmounted. You can scroll the page and it will be restored when backing from item detail page."),l.a.createElement("p",null,"Feel free to try it."));return l.a.createElement("div",{className:"list"},t,a,e)}}]),t}(l.a.Component),w=function(e){return l.a.createElement("div",null,l.a.createElement(b.a,{to:"/items"},l.a.createElement("div",null,">> back to List")),l.a.createElement("div",{className:"detailContent"},"hello, I'm item - ".concat(e.match.params.id)),l.a.createElement(b.a,{className:"pagination",to:"/item/".concat(Number.parseInt(e.match.params.id)-1)},"Prev item"),l.a.createElement(b.a,{className:"pagination",to:"/item/".concat(Number.parseInt(e.match.params.id)+1)},"Next item"))},y=(a(17),function(e){return l.a.createElement("div",{className:"bar"},l.a.createElement(b.a,{to:"/"},"Home"),l.a.createElement(b.a,{to:"/items"},"Items"),l.a.createElement(b.a,{to:"/about"},"About"))}),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={count:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),setInterval(function(){e.setState({count:e.state.count+1})},200)}},{key:"render",value:function(){var e=l.a.createElement("h2",{className:"count"},"count: ",this.state.count),t=l.a.createElement("div",{className:"desc"},l.a.createElement("p",null,"This page of route is using ",l.a.createElement("code",null,"LiveRoute")," with"," ",l.a.createElement("code",null,"alwaysLive"),"."),l.a.createElement("p",null,"It will not unmount after mounted and that means it will only mount once.")),a=Array(60).fill("").map(function(e,t){return l.a.createElement("p",{className:"placeholder-text",key:t},t," - You can scroll the screen to test if react-live-route can restore scroll position.")});return l.a.createElement("div",{className:"about"},e,t,a)}}]),t}(l.a.Component),k=function(e){return l.a.createElement("div",null,l.a.createElement("a",{className:"detailContent",href:"https://github.com/fi3ework/react-live-route",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h1",null,"react-live-route")),l.a.createElement(b.a,{to:"/items"},l.a.createElement("div",{className:"entry"},"into items")))},j=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"[404]"),l.a.createElement(b.a,{to:"/"},"Home"))},I=Object(r.a)(p.a);var O=document.getElementById("root");c.a.render(l.a.createElement(u.a,null,l.a.createElement(function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:k}),l.a.createElement(m.a,{path:"/item/:id",component:w}),l.a.createElement(m.a,{path:"/items"}),l.a.createElement(m.a,{path:"/about"}),l.a.createElement(m.a,{path:"*",render:j})),l.a.createElement(I,{path:"/items",component:g,livePath:"/item/:id",name:"items",onHide:function(e,t,a,n,l){console.log("hide hook tiggered")},onReappear:function(e,t,a,n,l){console.log("reappear hook tiggered")}}),l.a.createElement(I,{path:"/about",alwaysLive:!0,component:N,name:"about"}),l.a.createElement(y,null))},null)),O),window.history,document.addEventListener("scrollTo",function(){console.log("document scrolled")})}},[[22,1,2]]]);
//# sourceMappingURL=main.b37ac040.chunk.js.map