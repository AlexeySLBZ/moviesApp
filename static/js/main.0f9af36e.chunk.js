(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{100:function(e,t,r){},102:function(e,t,r){},103:function(e,t,r){},112:function(e,t,r){},113:function(e,t,r){},114:function(e,t,r){},115:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(0),s=r.n(n),o=r(20),c=r.n(o),i=r(27),u=r(31),l=r(33),v=r(32),h=(r(94),r(95),r(121)),d=(r(96),r(125)),g=(r(97),r(98),r(73)),p=(r(100),r(122));var j=function(e){var t=e.total,r=e.onChange,n=e.current,s=e.error;return 0===t||!0===s?null:Object(a.jsx)(p.a,{size:"small",pageSize:"1",total:t,showSizeChanger:!1,onChange:r,current:n,className:"page-controller"})},m=r(88),f=(r(102),r(124)),b=r(46),O=(r(103),r(123)),x=r(85),y=r(127),M=r(126),w=r(87),k=s.a.createContext(),N=k.Provider,S=k.Consumer;function C(e){try{var t=new Date(e);return Object(O.a)({locale:x.a},"MMMM d, yyyy")(t)}catch(r){return e}}function B(e){for(var t,r=225,a=e.slice(0,r),n=!1;!n;)(t=a[r-1])>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"?r-=1:n=!0;return(a=a.slice(0,r))+(e.length!==a.length?"...":"")}function D(e){var t,r=e.value;return""===r||"0"===r?null:Object(a.jsx)("div",{className:"vote ".concat((t=r,t>7?"vote-higher-7":t>5?"vote-higher-5":t>3?"vote-higher-3":"vote-lower-3")),children:r})}function I(e){var t=e.img,r=""===t?Object(a.jsx)(b.a,{}):Object(a.jsx)("img",{src:t,alt:""});return Object(a.jsx)("div",{className:"movie-poster",children:Object(a.jsx)("div",{className:"movie-poster__img-wrapper",children:r})})}function _(e){var t=e.genreList,r=e.genreIds;return Object(a.jsx)("div",{className:"tags",children:r.reduce((function(e,r){var n=t.get(r);return n&&e.push(Object(a.jsx)(y.a,{children:n},r)),e}),[])})}var K=function(e){var t=e.data,r=e.rateMovie,n=t.img,s=t.title,o=t.date,c=t.overview,i=t.vote,u=t.rating,l=t.genreIds;return Object(a.jsxs)("div",{className:"movie-block",children:[Object(a.jsx)(I,{img:n}),Object(a.jsxs)("div",{className:"movie-description",children:[Object(a.jsxs)("div",{className:"col-1",children:[Object(a.jsx)("div",{className:"description-img-wrapper",children:Object(a.jsx)("img",{src:n,alt:""})}),Object(a.jsxs)("div",{className:"main-info-wrapper",children:[Object(a.jsx)("div",{className:"title",children:s}),Object(a.jsx)("div",{className:"date",children:C(o)}),Object(a.jsx)(S,{children:function(e){return Object(a.jsx)(_,{genreList:e,genreIds:l})}})]}),Object(a.jsx)(D,{value:i})]}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("span",{className:"overview",children:B(c)})}),Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)(M.a,{allowHalf:!0,count:10,defaultValue:"number"===typeof u?u:0,character:Object(a.jsx)(w.a,{className:"star-filled"}),onChange:r})})]})]})};function P(e){var t=e.movieBlocksData,r=e.loading,n=e.error,s=e.errorMessage,o=e.rateMovie;return Object(a.jsx)("div",{className:"movies",children:function(){if(n){var e="Failed to fetch"===s?"No internet connection":"Server error";return Object(a.jsx)(f.a,{style:{marginTop:"50px",marginBottom:"100px"},message:"Error:",description:e,type:"error",showIcon:!0})}return r?Object(a.jsx)(h.a,{tip:"loading...",style:{marginTop:"60px",marginBottom:"100px"}}):t.length?t.map((function(e){var t=e.id,r=Object(m.a)(e,["id"]);return Object(a.jsx)(K,{data:r,rateMovie:function(e){o(t,e)}},t)})):Object(a.jsx)(b.a,{style:{marginTop:"60px",marginBottom:"100px"}})}()})}P.defaultProps={movieBlocksData:[],loading:!1,error:!1,errorMessage:"",rateMovie:function(){}};var L=P,R=function(e){Object(l.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movieBlocksData:[],totalPages:0,query:"",page:1,loading:!1,error:!1,errorMessage:""},e.debouncedMoviesServiceGetMovies=Object(g.debounce)((function(t){var r=e.state,a=r.query,n=r.page,s=e.props.getMovies;t.query===a&&t.page===n||(e.setState({loading:!0}),s(a,n).then((function(t){var r=t.movieBlocksData,a=t.totalPages;e.setState({movieBlocksData:r,totalPages:a,loading:!1})})).catch((function(t){e.setState({error:!0,errorMessage:t.message})})))}),500),e.onChangePage=function(t){t>0&&e.setState({page:t})},e.onChangeQuery=function(t){var r=t.target.value.trimLeft();e.setState({query:r,page:1})},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){this.debouncedMoviesServiceGetMovies(t)}},{key:"render",value:function(){var e=this.state,t=e.totalPages,r=e.query,n=e.page,s=e.movieBlocksData,o=e.loading,c=e.error,i=e.errorMessage,u=this.onChangeQuery,l=this.onChangePage,v=this.props,h=v.className,d=v.rateMovie;return Object(a.jsxs)("div",{className:"movie-page-search ".concat(h),children:[Object(a.jsx)("input",{type:"search",className:"movie-search",placeholder:"Type to search...",onChange:u,value:r}),Object(a.jsx)(L,{movieBlocksData:s,loading:o,error:c,errorMessage:i,rateMovie:d}),Object(a.jsx)(j,{total:t,onChange:l,current:n,error:c})]})}}]),r}(s.a.Component),q=(r(112),function(e){Object(l.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movieBlocksData:[],loading:!0,error:!1,errorMessage:""},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e){var t=this,r=this.props,a=r.getRatedMovies,n=r.className;e.className!==n&&a().then((function(e){var r=e.movieBlocksData;return t.setState({loading:!1,error:!1,movieBlocksData:r})})).catch((function(e){return t.setState({error:!0,errorMessage:e.message})}))}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.rateMovie,n=this.state,s=n.movieBlocksData,o=n.loading,c=n.error,i=n.errorMessage;return Object(a.jsx)("div",{className:"movie-page-rated ".concat(t),children:Object(a.jsx)(L,{movieBlocksData:s,loading:o,error:c,errorMessage:i,rateMovie:r})})}}]),r}(s.a.Component)),G=r(26),J=r.n(G),T=r(45),z=new function e(){var t=this;Object(i.a)(this,e),this.apiKey="3948d9a57f99991d20df72892016a965",this.url="https://api.themoviedb.org/3",this.urlImageDB="https://image.tmdb.org/t/p/w500",this.createSearchMoviesURL=function(e,r){var a="".concat(t.url,"/search/movie?api_key=").concat(t.apiKey),n=encodeURIComponent(e);return"".concat(a,"&query=").concat(n,"&page=").concat(r)},this.prepareMoviesJson=function(e){var r=e.results,a=e.total_pages;return{movieBlocksData:r.map((function(e){var r=null==e.poster_path?"":t.urlImageDB+e.poster_path;return{id:e.id,title:e.title,overview:e.overview,date:e.release_date,img:r,vote:"".concat(e.vote_average),rating:e.rating,genreIds:e.genre_ids}})),totalPages:a}},this.getMovies=function(){var e=Object(T.a)(J.a.mark((function e(r){var a,n=arguments;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.length>1&&void 0!==n[1]?n[1]:1,!(("string"===typeof r||r instanceof String)&&r.length>0)){e.next=3;break}return e.abrupt("return",fetch(t.createSearchMoviesURL(r,a)).then((function(e){return e.json()})).then((function(e){return t.prepareMoviesJson(e)})));case 3:return e.abrupt("return",{movieBlocksData:[],totalPages:0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.createGuestSession=Object(T.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.url,"/authentication/guest_session/new?api_key=").concat(t.apiKey)).then((function(e){return e.json()})).then((function(e){return e.guest_session_id})));case 1:case"end":return e.stop()}}),e)}))),this.rateMovie=function(){var e=Object(T.a)(J.a.mark((function e(r,a,n){var s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s="".concat(t.url,"/movie/").concat(a,"/rating?api_key=").concat(t.apiKey),fetch("".concat(s,"&guest_session_id=").concat(r),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({value:Number(n)})});case 2:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),this.getRatedMovies=function(){var e=Object(T.a)(J.a.mark((function e(r){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.url,"/guest_session/").concat(r,"/rated/movies?api_key=").concat(t.apiKey)).then((function(e){return e.json()})).then((function(e){return t.prepareMoviesJson(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getGenreList=Object(T.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.url,"/genre/movie/list?api_key=").concat(t.apiKey)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))};var A=function(e){var t=e.switchKeys,r=e.guestSessionId,n=function(e){return t.some((function(t){return t===e}))?"":"hidden"};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{className:n("search"),getMovies:z.getMovies,rateMovie:function(e,t){return z.rateMovie(r,e,t)}}),Object(a.jsx)(q,{className:n("rated"),rateMovie:function(e,t){return z.rateMovie(r,e,t)},getRatedMovies:function(){return z.getRatedMovies(r)}})]})},U=function(e){Object(l.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={switchKeys:["search"]},e.onClickMenu=function(t){e.setState({switchKeys:[t.key]})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.guestSessionId,t=this.state.switchKeys,r=this.onClickMenu;return Object(a.jsxs)("div",{className:"movie-page",children:[Object(a.jsx)("div",{className:"switch",children:Object(a.jsxs)(d.a,{onClick:r,selectedKeys:t,mode:"horizontal",children:[Object(a.jsx)(d.a.Item,{children:"Search"},"search"),Object(a.jsx)(d.a.Item,{children:"Rated"},"rated")]})}),Object(a.jsx)(A,{guestSessionId:e,switchKeys:t})]})}}]),r}(s.a.Component);r(113);var E=function(e){var t="Failed to fetch"===e.message?"No internet connection":"Server error";return Object(a.jsx)("div",{className:"error-alert-wrapper",children:Object(a.jsx)(f.a,{className:"error-alert",message:"Error:",description:t,type:"error",showIcon:!0})})},F=function(e){Object(l.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,guestSessionId:"",error:!1,errorMessage:"",genreList:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;Promise.all([z.createGuestSession().then((function(t){return e.setState({guestSessionId:t})})),z.getGenreList().then((function(t){var r=t.genres.reduce((function(e,t){var r=t.id,a=t.name;return e.set(r,a)}),new Map);e.setState({genreList:r})}))]).catch((function(t){return e.setState({error:!0,errorMessage:t.message})})).finally((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,r=e.guestSessionId,n=e.error,s=e.errorMessage,o=e.genreList;return n?Object(a.jsx)(E,{message:s}):t?Object(a.jsx)("div",{className:"loading-wrapper",children:Object(a.jsx)(h.a,{tip:"loading..."})}):Object(a.jsx)("div",{className:"main-wrapper",children:Object(a.jsx)(N,{value:o,children:Object(a.jsx)(U,{guestSessionId:r})})})}}]),r}(s.a.Component);r(114);c.a.render(Object(a.jsx)(F,{}),document.getElementById("root"))},94:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){}},[[115,1,2]]]);
//# sourceMappingURL=main.0f9af36e.chunk.js.map