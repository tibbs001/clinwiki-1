webpackJsonp([5],{"./app/containers/Study/constants.js":function(t,n,u){"use strict";u.d(n,"b",function(){return e}),u.d(n,"c",function(){return r}),u.d(n,"i",function(){return d}),u.d(n,"j",function(){return a}),u.d(n,"m",function(){return i}),u.d(n,"n",function(){return p}),u.d(n,"o",function(){return c}),u.d(n,"k",function(){return I}),u.d(n,"l",function(){return s}),u.d(n,"d",function(){return T}),u.d(n,"e",function(){return o}),u.d(n,"q",function(){return E}),u.d(n,"p",function(){return _}),u.d(n,"r",function(){return A}),u.d(n,"t",function(){return O}),u.d(n,"u",function(){return N}),u.d(n,"s",function(){return S}),u.d(n,"w",function(){return C}),u.d(n,"v",function(){return f}),u.d(n,"f",function(){return y}),u.d(n,"h",function(){return R}),u.d(n,"g",function(){return v}),u.d(n,"a",function(){return l}),u.d(n,"x",function(){return D}),u.d(n,"y",function(){return V}),u.d(n,"z",function(){return W});var e="app/Study/REQUEST_STUDY_ACTION",r="app/Study/RELOAD_STUDY_ACTION",d="app/Study/DEFAULT_ACTION",a="app/Study/CROWD_ACTION",i="app/Study/DESCRIPTIVE_ACTION",p="app/Study/ADMIN_ACTION",c="app/Study/RECRUITMENT_ACTION",I="app/Study/TRACKING_ACTION",s="app/Study/FACILITY_ACTION",T="app/Study/WIKI_ACTION",o="app/Study/WIKI_SUBMIT_ACTION",E="app/Study/TAG_SUBMIT_ACTION",_="app/Study/TAG_REMOVE_ACTION",A="app/Study/REVIEW_SUBMIT_ACTION",O="app/Study/REVIEWS_RECEIVE_ACTION",N="app/Study/REVIEW_RECEIVE_ACTION",S="app/Study/REVIEW_UPDATE_ACTION",C="app/Study/REVIEW_DELETE_ACTION",f="app/Study/GET_REVIEW_ACTION",y="app/Study/ANNOTATION_CREATE_ACTION",R="app/Study/ANNOTATION_DELETE_ACTION",v="app/Study/ANNOTATION_UPDATE_ACTION",l="app/Study/WIKI_OVERRIDE_ACTION",D="app/Study/WRITE_REVIEW_ACTION",V="app/Study/CLEAR_REVIEW_ACTION",W="app/Study/LOAD_ERROR_ACTION"},"./app/containers/Study/reducer.js":function(t,n,u){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments[1];switch(n.type){case a.i:return t.set("study",n.data);case a.j:return t.set("crowd",n.data);case a.k:return t.set("tracking",n.data);case a.l:return t.set("facility",n.data);case a.m:return t.set("descriptive",n.data);case a.n:return t.set("administrative",n.data);case a.o:return t.set("recruitment",n.data);case a.y:return t.set("review",{});case a.t:return t.set("reviews",n.data);case a.u:return t.set("review",n.data);case d.LOCATION_CHANGE:return t.set("review",{});case a.d:return t.set("wiki",u.i(r.fromJS)(n.data));case a.a:return t.set("wikiOverride",n.shouldOverride);default:return t}}Object.defineProperty(n,"__esModule",{value:!0});var r=u("./node_modules/immutable/dist/immutable.js"),d=(u.n(r),u("./node_modules/react-router-redux/lib/index.js")),a=(u.n(d),u("./app/containers/Study/constants.js")),i=u.i(r.fromJS)({wikiOverride:!0});n.default=e}});