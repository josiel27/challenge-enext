(this["webpackJsonpchallenge-enext"]=this["webpackJsonpchallenge-enext"]||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/defaultDog.319bc19d.jpg"},22:function(e,t,a){e.exports=a(42)},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),r=a.n(l),c=(a(27),a(28),a(29),a(3)),i=a(4),s=a(6),u=a(5),h=a(9),m=a(7),g=a(46),d=a(44),p=a(47),f=a(45),b=a(20),v=a.n(b),y=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("label",{style:this.props.style},this.props.value)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=e.params,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getFormattedDate",value:function(e){return("00"+e.getDate()).slice(-2)+"/"+("00"+(e.getMonth()+1)).slice(-2)+"/"+("0000"+e.getFullYear()).slice(-4)}},{key:"getgetFormattedHours",value:function(e){return("00"+e.getHours()).slice(-2)+":"+("00"+e.getMinutes()).slice(-2)}},{key:"render",value:function(){var e=new Date(this.props.params.dateTime),t=this.getFormattedDate(e),a=this.getgetFormattedHours(e);return o.a.createElement("div",{className:"div-img-label"},this.props.params.registered?o.a.createElement("div",{className:"label-name"},o.a.createElement(y,{style:this.props.params.fontStyle,value:"Nome: ".concat(this.props.params.nameDog)}),o.a.createElement(y,{style:this.props.params.fontStyle,value:"Ra\xe7a: ".concat(this.props.params.breedSelected)}),o.a.createElement(y,{style:this.props.params.fontStyle,value:"Hora: ".concat(a)}),o.a.createElement(y,{style:this.props.params.fontStyle,value:"Data: ".concat(t)})):null,o.a.createElement("img",{className:"dog-img",src:this.props.params.imgDogSelected,alt:"A cool dog"}))}}]),t}(n.Component),S=(a(30),a(31),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).reloadPage=function(){window.location.reload()},a.deleteLocalStorage=function(){localStorage.clear(),window.location.reload()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"buttons-config"},o.a.createElement("button",{className:"btn btn-secondary ml-1 mt-1 col-12",onClick:function(){e.reloadPage()}},"Reload Page"),o.a.createElement("button",{className:"btn btn-secondary ml-1 mt-1 col-12",onClick:function(){e.deleteLocalStorage()}},"Delete Local Storage"))}}]),t}(n.Component)),E=(a(14),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{className:"select custom-select",value:this.props.value,onChange:this.props.onChange,required:!0},this.props.option)}}]),t}(n.Component)),j=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{className:"input-name form-control",value:this.props.value,onChange:this.props.onChange,placeholder:"Digite o nome do cachorro",required:!0})}}]),t}(n.Component),C=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{type:"submit",className:"button-save btn btn-info"},this.props.value)}}]),t}(n.Component),D=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();try{a.setState({dateTime:new Date,registered:!0,nameDog:a.state.nameDog},(function(){for(var e in a.state)localStorage.setItem("@challenge-enext/".concat(e),JSON.stringify(a.state[e]));a.onShowAlert("success","Registrado com sucesso!")}))}catch(t){a.onShowAlert("danger","Erro: ".concat(t))}},a.onShowAlert=function(e,t){a.setState({alertOptions:{visibleAlert:!0,text:t,color:e}},(function(){window.setTimeout((function(){a.setState({alertOptions:{visibleAlert:!1,text:"",color:"info"}})}),2e3)}))},a.state={listDogAPI:[],nameDog:"",imgDogSelected:v.a,alertOptions:{visibleAlert:!1,text:"",color:"info"},breedSelected:"defaultValue",dateTime:Date(),registered:void 0,fontStyle:{color:"defaultValue",fontFamily:"defaultValue"},listColorFonts:["Blue","Red","Purple","Green","Black"],listFonts:["Acme","Anton","Josefin Sans","Notable","Roboto"]};var n=new Object;for(var o in a.state)n[o]=JSON.parse(localStorage.getItem("@challenge-enext/".concat(o)));return localStorage.getItem("@challenge-enext/registered")?a.state=n:console.log("Registro Limpo"),a.getDogApiLIst=a.getDogApiLIst.bind(Object(h.a)(a)),a.handleChangeBreed=a.handleChangeBreed.bind(Object(h.a)(a)),a.handleChangeFontFamily=a.handleChangeFontFamily.bind(Object(h.a)(a)),a.handleChangeFontColor=a.handleChangeFontColor.bind(Object(h.a)(a)),a.handleChangeNameDog=a.handleChangeNameDog.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDogApiLIst()}},{key:"getImgDogApi",value:function(e){var t=this;if(e){var a="https://dog.ceo/api/breed/".concat(e,"/images/random");fetch(a).then((function(e){return e.json()})).then((function(e){t.setState({imgDogSelected:e.message})})).catch((function(e){t.onShowAlert("danger","Erro: ".concat(e))}))}}},{key:"getDogApiLIst",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/list/all").then((function(e){return e.json()})).then((function(t){var a=[t.message];e.setState({listDogAPI:a})})).catch((function(t){e.onShowAlert("danger","Erro: ".concat(t))}))}},{key:"handleChangeBreed",value:function(e){this.getImgDogApi(e.target.value),this.setState({breedSelected:e.target.value})}},{key:"handleChangeFontFamily",value:function(e){this.setState({fontStyle:{fontFamily:e.target.value,color:this.state.fontStyle.color}})}},{key:"handleChangeFontColor",value:function(e){this.setState({fontStyle:{fontFamily:this.state.fontStyle.fontFamily,color:e.target.value}})}},{key:"handleChangeNameDog",value:function(e){this.setState({nameDog:e.target.value})}},{key:"render",value:function(){var e=this,t=[],a=[],n=[];return this.state.listDogAPI.map((function(e){for(var a in t.push(o.a.createElement("option",{key:"defaultValue",value:""},"Selecione uma ra\xe7a")),e)t.push(o.a.createElement("option",{key:a,value:a},a));return t})),a.push(o.a.createElement("option",{key:"defaultValue",value:""},"Selecione uma fonte de texto")),this.state.listFonts.forEach((function(e){a.push(o.a.createElement("option",{key:e,value:e},e))})),n.push(o.a.createElement("option",{key:"defaultValue",value:""},"Selecione uma cor para o texto")),this.state.listColorFonts.forEach((function(e){n.push(o.a.createElement("option",{key:e,value:e},e))})),o.a.createElement("div",null,o.a.createElement(S,null)," ",o.a.createElement(g.a,{className:"alert",color:this.state.alertOptions.color,isOpen:this.state.alertOptions.visibleAlert},this.state.alertOptions.text)," ",o.a.createElement(d.a,null,o.a.createElement(O,{params:this.state})," ",o.a.createElement(p.a,{onSubmit:function(t){e.handleSubmit(t)}}," ",o.a.createElement(f.a,null,o.a.createElement(E,{value:this.state.breedSelected,onChange:this.handleChangeBreed,option:t})),o.a.createElement(f.a,null,o.a.createElement(j,{value:this.state.nameDog,onChange:this.handleChangeNameDog})),o.a.createElement(f.a,null,o.a.createElement(E,{value:this.state.fontStyle.fontFamily,onChange:this.handleChangeFontFamily,option:a})),o.a.createElement(f.a,null,o.a.createElement(E,{value:this.state.fontStyle.color,onChange:this.handleChangeFontColor,option:n})),o.a.createElement(f.a,null,o.a.createElement(C,{value:"Salvar"})))))}}]),t}(n.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b69a7640.chunk.js.map