(this.webpackJsonp1components=this.webpackJsonp1components||[]).push([[0],{28:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(21),l=a.n(c),o=(a(28),a(12)),s=a(4),i=a(5),u=a(7),d=a(6),m=a(22),h=a.n(m),g=a(0),p=a.n(g),f=a(1),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryValue:""},e.handleSearchQuery=function(t){e.setState({queryValue:t.target.value})},e.heandleSendValue=function(t){t.preventDefault(),""!==e.state.queryValue&&(e.props.onSendQuery(e.state.queryValue),e.setState({queryValue:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",onClick:this.heandleSendValue,children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{value:this.state.queryValue,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleSearchQuery})]})})}}]),a}(n.Component);j.protoType={heandleSendValue:p.a.func,handleSearchQuery:p.a.func};var b=j,y=a(23),v=function(e){var t=e.handleClickBtn,a=e.className,n=e.id;return Object(f.jsx)("button",{className:a,onClick:t,id:n,children:"X"})};v.protoType={onClickBtn:p.a.func};var O=v,k=a.p+"static/media/image.c05431f6.jpg",S=function(e){var t=e.image,a=e.onImageClick,r=e.handleClickBtn,c=Object(n.useState)(!1),l=Object(y.a)(c,2),o=l[0],s=l[1],i=t.webformatURL,u=t.largeImageURL,d=t.id,m=t.tags,h=function(){s(!o)};return Object(f.jsx)("li",{className:"ImageGalleryItem",id:d,onMouseOver:h,onMouseLeave:h,children:Object(f.jsxs)("div",{className:"img_gallery_overlay",children:[Object(f.jsx)("img",{src:i,srcSet:u,alt:m,className:"ImageGalleryItem-image",onClick:function(e){a(e.target.srcset)}}),o&&Object(f.jsx)(O,{className:"close_modal_btn",id:d,handleClickBtn:function(e){r(e.target.id)}})]})},d)};S.defaultProps={images:[],src:k,srcSet:k,alt:"photo"},S.protoType={images:p.a.arrayOf(p.a.exact({src:p.a.string,srcSet:p.a.string,tags:p.a.string})),onImageClick:p.a.func};var C=S,x=function(e){var t=e.images,a=e.onImageClick,n=e.handleClickBtn;return Object(f.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(f.jsx)(C,{image:e,onImageClick:a,handleClickBtn:n},e.id)}))})};x.protoType={images:p.a.array,onImageClick:p.a.func,ImageGalleryItem:p.a.elementType};var N=x,I=a(10),q=a.n(I);q.a.defaults.baseURL="https://pixabay.com/api/",q.a.defaults.params={key:"19685928-f191ac91b9da632ea9a4b744f",image_type:"photo",orientation:"horizontal",per_page:12};var B=function(e){var t=e.q,a=e.page,n=void 0===a?1:a;return q.a.get("",{params:{q:t,page:n}}).then((function(e){return e.data.hits}))};B.propTypes={queryResult:p.a.string,page:p.a.number};var M=B,w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleEscClick=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscClick)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(f.jsx)("div",{className:"Modal",children:this.props.children})})}}]),a}(n.Component);w.protoType={handleEscClick:p.a.func,toggleModal:p.a.func};var T=w,E=function(e){var t=e.onClickBtn;return Object(f.jsx)("button",{className:"Button",onClick:t,children:"Load more..."})};E.protoType={onClickBtn:p.a.func};var R=E,V=(a(68),a(69),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryResult:"",images:[],page:1,imageUrl:"",modalStatus:!1,loaderStatus:!1,error:!1},e.scrollToBottom=function(){var e=document.documentElement.clientWidth;window.scrollBy(0,e)},e.toggleModal=function(){e.setState((function(e){return{modalStatus:!e.modalStatus}}))},e.fetchImages=function(){var t=e.state,a={q:t.queryResult,page:t.page};e.setState((function(e){return{page:e.page+1,loaderStatus:!0}})),M(a).then((function(t){t.length>0?e.setState((function(e){return{images:[].concat(Object(o.a)(e.images),Object(o.a)(t))}})):e.setState({error:!0})})).catch((function(){return e.setState({error:!0})})).finally((function(){return e.setState({loaderStatus:!1})}))},e.handleQuery=function(t){t!==e.state.queryResult?e.setState({queryResult:t,page:1,images:[],error:!1}):alert("this request has already been completed")},e.openModal=function(t){e.setState({imageUrl:t}),e.toggleModal()},e.deleteImg=function(t){console.log("id",t),console.log(e.state.images);var a=e.state.images.filter((function(e){return e.id!=t}));console.log("filteredImages",a),e.setState({images:a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.queryResult!==this.state.queryResult&&this.fetchImages(),this.state.images.length>12&&this.scrollToBottom()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.imageUrl,n=e.modalStatus,r=e.loaderStatus,c=e.error,l=t.length>=12&&!r;return Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)(b,{onSendQuery:this.handleQuery}),c&&Object(f.jsx)("h1",{className:"ErrorMessage",children:"No result found!"}),t.length>0&&Object(f.jsx)(N,{images:t,onImageClick:this.openModal,handleClickBtn:this.deleteImg}),r&&Object(f.jsx)(h.a,{type:"Circles",color:" #3f51b5",height:100,width:100,className:"Loader"}),l&&Object(f.jsx)(R,{type:"button",onClickBtn:this.fetchImages,className:"Button"}),!!n&&Object(f.jsx)(T,{toggleModal:this.toggleModal,children:Object(f.jsxs)("div",{className:"modal",children:[Object(f.jsx)("img",{src:a,alt:"pic",className:"modal_img"}),Object(f.jsx)(O,{handleClickBtn:this.openModal,id:a,className:"close_modal_btn"})]})})]})}}]),a}(n.Component));a(70);l.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9e2f4f30.chunk.js.map