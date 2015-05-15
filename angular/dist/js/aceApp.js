var angular,myApp=angular.module("aceApp",["ngAnimate","mgcrea.ngStrap","ui.router","ngSanitize","uiGmapgoogle-maps","angular-loading-bar","ngTable","ckeditor"]);myApp.config(function(e){angular.extend(e.defaults,{animation:"am-fadeAndSlideLeft",placement:"left",container:"body",html:!0})}),myApp.config(function(e){angular.extend(e.defaults,{dateFormat:"dd-MMMM-yyyy",startWeek:1})}),myApp.config(function(e,t){"use strict";t.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"partials/partial-home.html",controller:"homepage"}).state("about",{url:"/about",views:{"":{templateUrl:"partials/partial-about.html",controller:"aboutPage"},"columnOne@about":{templateUrl:"partials/about-page.html"},"columnTwo@about":{templateUrl:"partials/table-data.html",controller:"scotchController"}}}).state("home.list",{url:"/list",templateUrl:"partials/partial-home-list.html",controller:function(e){e.dogs=["Bernese","Husky","Goldendoodle"]}}).state("home.paragraph",{url:"/paragraph",template:"I could sure use a drink right now."}).state("contact",{url:"/contact",views:{"":{templateUrl:"partials/partial-contact.html",controller:"contactPage"},"columnOne@contact":{templateUrl:"partials/partial-google-map.html"},"columnTwo@contact":{templateUrl:"partials/partial-contact-form.html",controller:"formController"}}}).state("contact.profile",{url:"/profile",templateUrl:"partials/partial-form-profile.html"}).state("contact.interests",{url:"/interests",templateUrl:"partials/partial-contact-interests.html"}).state("contact.payment",{url:"/payment",templateUrl:"partials/partial-contact-payment.html"})}),myApp.controller("global",["$scope",function(e){e.aside={title:"Title",content:"Hello from the Aside <br />This is a sideline message!"},e.nestedViewTip={title:"Nestev View Tooltop",checked:!0},e.tooltip={title:"Hello Tooltip<br />This is a multiline message!",checked:!1},e.tabs=[{title:"Home",content:"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."},{title:"Profile",content:"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."},{title:"About",content:"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."}],e.tabs.activeTab=1}]),myApp.controller("homepage",["$scope",function(e){e.name="The Homey Page",e.images=[{src:"img1.png",title:"Pic 1"},{src:"img2.jpg",title:"Pic 2"},{src:"img3.jpg",title:"Pic 3"},{src:"img4.png",title:"Pic 4"},{src:"img5.png",title:"Pic 5"}],e.users=[{name:"Moroni",age:50},{name:"Tiancum",age:43},{name:"Jacob",age:27},{name:"Nephi",age:29},{name:"Enos",age:34}]}]),myApp.controller("aboutPage",["$scope",function(e){e.name="The About Page"}]),myApp.controller("scotchController",["$scope",function(e){e.message="a test message from inside of the inner controller",e.scotches=[{name:"Macallan 12",price:50},{name:"Chivas Regal Royal Salute",price:1e3},{name:"Glenfiddich 1937",price:2e3}]}]),myApp.controller("contactPage",["$scope",function(e){e.name="Contact Page",e.map={center:{latitude:-30.559482,longitude:22.937506},zoom:6},e.mapOptions={scrollwheel:!1},e.onReady=function(){},e.ckOptions={language:"en",allowedContent:!0,entities:!1}}]),myApp.controller("formController",["$scope",function(e){"use strict";e.formData={},e.processForm=function(){alert("awesome!")}}]),myApp.directive("slider",function(e){return{restrict:"AE",replace:!0,$scope:{images:"="},link:function(t){t.currentIndex=0,t.next=function(){t.currentIndex<t.images.length-1?t.currentIndex++:t.currentIndex=0},t.prev=function(){t.currentIndex>0?t.currentIndex--:t.currentIndex=t.images.length-1},t.$watch("currentIndex",function(){t.images.forEach(function(e){e.visible=!1}),t.images[t.currentIndex].visible=!0});var a,o=function(){a=e(function(){t.next(),a=e(o,3e3)},3e3)};o(),t.$on("$destroy",function(){e.cancel(a)})},templateUrl:"partials/home-slider.html"}});