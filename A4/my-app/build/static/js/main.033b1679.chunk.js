(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),s=(a(22),a(1)),o=a(2),i=a(4),m=a(3),u=a(5),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{className:"navbar-brand",href:"/"},this.props.title))))}}]),t}(n.Component),d=a(6),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-sm-3 col-md-2  sidebar"},l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Overview"===this.props.highight?"active":""},l.a.createElement(d.a,{to:"/"},"Overview ",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("ul",{className:"nav nav-sidebar"},l.a.createElement("li",{className:"Projects"===this.props.highlight?"active":""},l.a.createElement(d.a,{to:"/projects"},"Projects")),l.a.createElement("li",{className:"Teams"===this.props.highlight?"active":""},l.a.createElement(d.a,{to:"/teams"},"Teams")),l.a.createElement("li",{className:"Employees"===this.props.highlight?"active":""},l.a.createElement(d.a,{to:"/employees"},"Employees"))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement(h,{highlight:this.props.sidebar}),l.a.createElement("div",{className:" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},this.props.children))))}}]),t}(n.Component),v=a(11),E=a.n(v),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={projects:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://thawing-dawn-70314.herokuapp.com/projects").then((function(e){return e.json()})).then((function(t){e.setState({projects:t})})).catch((function(e){console.log("error")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Projects")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"table-responsive overview-table"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("tbody",null,this.state.projects.map((function(e){var t=E()().diff(E()(e.ProjectStartDate),"days");return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.ProjectName),l.a.createElement("td",null,"Active "+t+" days"))}))))),l.a.createElement(d.a,{to:"/projects",className:"btn btn-primary form-control"},"View All Project Data>")))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={teams:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://thawing-dawn-70314.herokuapp.com/teams").then((function(e){return e.json()})).then((function(t){e.setState({teams:t})})).catch((function(e){console.log("error")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Teams")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"table-responsive overview-table"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("tbody",null,this.state.teams.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.TeamName),l.a.createElement("td",null,e.Employees.length+" Employees"))}))))),l.a.createElement(d.a,{to:"/teams",className:"btn btn-primary form-control"},"View All Team Data>")))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={employees:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://thawing-dawn-70314.herokuapp.com/employees").then((function(e){return e.json()})).then((function(t){e.setState({employees:t})})).catch((function(e){console.log("error")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Employees")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"table-responsive overview-table"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("tbody",null,this.state.employees.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.FirstName+" "+e.LastName),l.a.createElement("td",null,e.Position.PositionName))}))))),l.a.createElement(d.a,{to:"/employees",className:"btn btn-primary form-control"},"View All Employee Data>")))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(b,{sidebar:"Overview"},l.a.createElement("h1",{className:"page-header"},"Overview"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(f,null)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(j,null)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(y,null))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(N,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.033b1679.chunk.js.map