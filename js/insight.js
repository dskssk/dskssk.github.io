(function(n,t){var e=n(".ins-search");var r=e.find(".ins-search-input");var a=e.find(".ins-section-wrapper");var i=e.find(".ins-section-container");e.parent().remove(".ins-search");n("body").append(e);function s(n){var t=document.createElement("textarea");t.innerHTML=n;return t.value}function o(t){return n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(t))}function c(e,r,a,i,o){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("fa").addClass("fa-"+e)).append(r!=null&&r!=""?r:t.TRANSLATION["UNTITLED"]).append(a?n("<span>").addClass("ins-slug").text(a):null)).append(i?n("<p>").addClass("ins-search-preview").text(s(i)):null).attr("data-url",o)}function u(n,e){var r;var a;if(e.length===0)return null;r=t.TRANSLATION[n];switch(n){case"POSTS":case"PAGES":a=e.map(function(n){return c("file",n.title,null,n.text.slice(0,150),t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":a=e.map(function(t){return c(n==="CATEGORIES"?"folder":"tag",t.name,t.slug,null,t.permalink)});break;default:return null}return o(r).append(a)}function l(n,t){var e={};var r=n.pages.concat(n.posts);r.forEach(function(n){if(n[t]){n[t].forEach(function(n){e[n.name]=n})}});var a=[];for(var t in e){a.push(e[t])}return a}function f(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function p(n,t,e){var r=false;var a=f(n);var i=a.filter(function(n){var r=e.filter(function(e){if(!t.hasOwnProperty(e))return false;if(t[e].toUpperCase().indexOf(n)>-1)return true});if(r.length>0)return true;return false});return i.length===a.length}function d(n){return{POST:function(t){return p(n,t,["title","text"])},PAGE:function(t){return p(n,t,["title","text"])},CATEGORY:function(t){return p(n,t,["name","slug"])},TAG:function(t){return p(n,t,["name","slug"])}}}function h(n,t,e,r){var a=0;f(n).forEach(function(n){var i=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(i);a+=s?s.length*r[e]:0}})});return a}function v(n){return{POST:function(t){return h(n,t,["title","text"],[3,1])},PAGE:function(t){return h(n,t,["title","text"],[3,1])},CATEGORY:function(t){return h(n,t,["name","slug"],[1,1])},TAG:function(t){return h(n,t,["name","slug"],[1,1])}}}function T(n,t){var e=v(t);var r=d(t);var a=n.posts;var i=n.pages;var s=l(n,"tags");var o=l(n,"categories");return{posts:a.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}).slice(0,5),pages:i.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}).slice(0,5),categories:o.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}).slice(0,5),tags:s.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)}).slice(0,5)}}function g(n){i.empty();for(var t in n){i.append(u(t.toUpperCase(),n[t]))}}function C(n){if(n.length===0)return;var t=a[0].clientHeight;var e=n.position().top-a.scrollTop();var r=n[0].clientHeight+n.position().top;if(r>t+a.scrollTop()){a.scrollTop(r-a[0].clientHeight)}if(e<0){a.scrollTop(n.position().top)}}function m(t){var e=n.makeArray(i.find(".ins-selectable"));var r=-1;e.forEach(function(t,e){if(n(t).hasClass("active")){r=e;return}});var a=(e.length+r+t)%e.length;n(e[r]).removeClass("active");n(e[a]).addClass("active");C(n(e[a]))}function A(n){if(n&&n.length){location.href=n.attr("data-url")}}n.getJSON(t.CONTENT_URL,function(t){if(location.hash.trim()==="#ins-search"){e.addClass("show")}r.on("input",function(){var e=n(this).val();g(T(t,e))});r.trigger("input")});n(document).on("click focus",".search-form-input",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){A(n(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(!e.hasClass("show"))return;switch(n.keyCode){case 27:e.removeClass("show");break;case 38:m(-1);break;case 40:m(1);break;case 13:A(i.find(".ins-selectable.active").eq(0));break}})})(jQuery,window.INSIGHT_CONFIG);