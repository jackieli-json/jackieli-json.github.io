"use strict";!function(t){if(App.pager){var e={getBaseUrl:function(){var t="";return App.isHome?t=App.pager.dirIndex+"/":App.isCate?t=App.pager.dirCate+"/":App.isTag&&(t=App.pager.dirTag+"/"),t=App.root+App.pager.dir+"/"+t},getOffset:function(){var e=t("#sidebar"),a="none"===e.css("float"),p=t("#footer").outerHeight(!0)+50;return a&&(p+=e.outerHeight(!0)),p},init:function(){var e=this.getBaseUrl(),a=this.getOffset(),p=t("#spinnerPager"),r=t("#posts");t(window).scrollPager({heightOffset:a,url:function(t){return e+t.p+"/"},showLoading:function(){p.addClass("active")},hideLoading:function(){p.removeClass("active")},afterLoad:function(t,e){r.append(e)},pageData:{p:1,ps:App.pager.size,total:App.pager.total},ajaxOpts:{cache:!1,type:"GET",contentType:!1,dataType:"html",stringifyData:!1}})}};e.init()}}(jQuery);