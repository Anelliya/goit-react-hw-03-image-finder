(this.webpackJsonp1components=this.webpackJsonp1components||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(18),o=a.n(c),s=(a(25),a(9)),l=a(4),i=a(5),u=a(7),h=a(6),d=a(19),m=a.n(d),g=a(0),p=a.n(g),f=a(1),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryValue:""},e.handleSearchQuery=function(t){e.setState({queryValue:t.target.value})},e.heandleSendValue=function(t){t.preventDefault(),""!==e.state.queryValue&&(e.props.onSendQuery(e.state.queryValue),e.setState({queryValue:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",onClick:this.heandleSendValue,children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{value:this.state.queryValue,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleSearchQuery})]})})}}]),a}(n.Component);y.protoType={heandleSendValue:p.a.func,handleSearchQuery:p.a.func};var j=y,b=a.p+"static/media/image.c05431f6.jpg",v=function(e){var t=e.images,a=e.onImageClick,n=function(e){a(e.target.srcset)};return t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.id,c=e.tags;return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:t,srcSet:a,alt:c,className:"ImageGalleryItem-image",onClick:n})},r)}))};v.defaultProps={images:[],src:b,srcSet:b,alt:"photo"},v.protoType={images:p.a.arrayOf(p.a.exact({src:p.a.string,srcSet:p.a.string,tags:p.a.string})),onImageClick:p.a.func};var O=v,S=function(e){var t=e.images,a=e.onImageClick;return Object(f.jsx)("ul",{className:"ImageGallery",children:Object(f.jsx)(O,{images:t,onImageClick:a})})};S.protoType={images:p.a.array,onImageClick:p.a.func,ImageGalleryItem:p.a.elementType};var k=S,C=a(20),x=a.n(C),I=function(e){var t=e.q,a=e.page,n=void 0===a?1:a;return x.a.get("https://pixabay.com/api?q=".concat(t,"&page=").concat(n,"&key=").concat("19685928-f191ac91b9da632ea9a4b744f","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};I.propTypes={queryResult:p.a.string,page:p.a.number};var q=I,N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleEscClick=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscClick)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(f.jsx)("div",{className:"Modal",children:this.props.children})})}}]),a}(n.Component);N.protoType={handleEscClick:p.a.func,toggleModal:p.a.func};var w=N,M=function(e){var t=e.onClickBtn;return Object(f.jsx)("button",{className:"Button",onClick:t,children:"Load more..."})};M.protoType={onClickBtn:p.a.func};var T=M,B=(a(65),a(66),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryResult:"",images:[],page:1,imageUrl:"",modalStatus:!1,loaderStatus:!1,error:!1},e.scrollToBottom=function(){var e=document.documentElement.clientWidth;window.scrollBy(0,e)},e.toggleModal=function(){e.setState((function(e){return{modalStatus:!e.modalStatus}}))},e.fetchImages=function(){var t=e.state,a={q:t.queryResult,page:t.page};e.setState((function(e){return{page:e.page+1,loaderStatus:!0}})),q(a).then((function(t){t.length>0?e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t))}})):e.setState({error:!0})})).catch((function(){return e.setState({error:!0})})).finally((function(){return e.setState({loaderStatus:!1})}))},e.handleQuery=function(t){t!==e.state.queryResult?e.setState({queryResult:t,page:1,images:[],error:!1}):alert("this request has already been completed")},e.openModal=function(t){e.setState({imageUrl:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.queryResult!==this.state.queryResult&&this.fetchImages(),this.state.images.length>12&&this.scrollToBottom()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.imageUrl,n=e.modalStatus,r=e.loaderStatus,c=e.error,o=t.length>=12&&!r;return Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)(j,{onSendQuery:this.handleQuery}),c&&Object(f.jsx)("h1",{className:"ErrorMessage",children:"No result found!"}),t.length>0&&Object(f.jsx)(k,{images:t,onImageClick:this.openModal}),r&&Object(f.jsx)(m.a,{type:"Circles",color:" #3f51b5",height:100,width:100,className:"Loader"}),o&&Object(f.jsx)(T,{type:"button",onClickBtn:this.fetchImages,className:"Button"}),!!n&&Object(f.jsx)(w,{toggleModal:this.toggleModal,children:Object(f.jsx)("img",{src:a,alt:"pic"})})]})}}]),a}(n.Component)),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};a(67);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.08367088.chunk.js.map