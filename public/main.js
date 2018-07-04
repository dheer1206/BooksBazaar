(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _listings_item_listings_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listings-item/listings-item.component */ "./src/app/listings-item/listings-item.component.ts");
/* harmony import */ var _myfilter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myfilter.pipe */ "./src/app/myfilter.pipe.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/home/login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
        ] },
    { path: 'listings', component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"] },
    { path: 'listings/:id', component: _listings_item_listings_item_component__WEBPACK_IMPORTED_MODULE_10__["ListingsItemComponent"] },
    { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"],
                _listings_item_listings_item_component__WEBPACK_IMPORTED_MODULE_10__["ListingsItemComponent"],
                _myfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["MyFilterPipe"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n\n<nav class=\"navbar navbar-light bg-light\" style=\"display: inline block; text-align: center ;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"display: inline block; font-size: 25px\">\n        <i class=\"fas fa-book\" style=\"color: blue\"></i>\n        BooksBazaar\n  </a>\n</nav>\n\n<div class=\"container col-md-6\" style=\"margin-top: 50px\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item col\">\n                  <a [ngClass] = \"loginClassName\" routerLink=\"/home/login\" routerLinkActive='active'>Login</a>\n                </li>\n                <li class=\"nav-item col\">\n                  <a [ngClass] = \"signupClassName\" routerLink=\"/home/signup\" routerLinkActive='active'>SignUp</a>\n                </li>\n            </ul>\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    \n    \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userauthenticator.service */ "./src/app/userauthenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, userAuth) {
        this.route = route;
        this.router = router;
        this.userAuth = userAuth;
        this.loginClassName = 'nav-link active';
        this.signupClassName = 'nav-link';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuth.isLoggedIn().then(function (result) {
            if (!result) {
                _this.route.navigate(['home/login']);
            }
            else {
                _this.route.navigate(['listings']);
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__["UserauthenticatorService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listings-item/listings-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/listings-item/listings-item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listings-item/listings-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/listings-item/listings-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listings-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/listings-item/listings-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/listings-item/listings-item.component.ts ***!
  \**********************************************************/
/*! exports provided: ListingsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsItemComponent", function() { return ListingsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingsItemComponent = /** @class */ (function () {
    function ListingsItemComponent() {
    }
    ListingsItemComponent.prototype.ngOnInit = function () {
    };
    ListingsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings-item',
            template: __webpack_require__(/*! ./listings-item.component.html */ "./src/app/listings-item/listings-item.component.html"),
            styles: [__webpack_require__(/*! ./listings-item.component.css */ "./src/app/listings-item/listings-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingsItemComponent);
    return ListingsItemComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\");\r\ninput {\r\n\toutline: none;\r\n}\r\ninput[type=search] {\r\n\t-webkit-appearance: textfield;\r\n\t-webkit-box-sizing: content-box;\r\n\tfont-family: inherit;\r\n\tfont-size: 100%;\r\n}\r\ninput::-webkit-search-decoration,\r\ninput::-webkit-search-cancel-button {\r\n\tdisplay: none; \r\n}\r\ninput[type=search] {\r\n\tbackground: #fff url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\r\n\tborder: solid 1px #ccc;\r\n\tpadding: 9px 10px 9px 32px;\r\n\twidth: 50px;\r\n\tborder-radius: 10em;\r\n\ttransition: all .5s;\r\n}\r\ninput[type=search]:focus {\r\n\twidth: 300px;\r\n\tbackground-color: #fff;\r\n\tborder-color: #66CC75;\r\n\tbox-shadow: 0 0 5px rgba(109,207,246,.5);\r\n}\r\ninput:-moz-placeholder {\r\n\tcolor: #999;\r\n}\r\ninput::-webkit-input-placeholder {\r\n\tcolor: #999;\r\n}\r\n.badge-notify{\r\n    background : red;\r\n    color: white ;\r\n    position:relative;\r\n    top: -10px;\r\n    left: -15px;\r\n }\r\n.my-active {\r\n     background : royalblue;\r\n\t color: white ;\r\n\t border-radius: 2px ;\r\n }\r\n.card-link-my {\r\n        position: absolute;\r\n        top: 0; left: 0;\r\n        height: 100%; width: 100%;\r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\n        <a class=\"navbar-brand mr-auto\" href=\"listings\" style=\"display: inline block; font-size: 25px ; margin-left: 50px\">\n                <i class=\"fas fa-book\" ></i>\n                BooksBazaar\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse float-right\" id=\"navbarSupportedContent\">\n                <div class=\"mr-auto\">\n               \n                    </div>\n                <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 80px\">\n                        <li class=\"nav-item\">\n                                <form>\n                                        <input type=\"search\" placeholder=\"Search book by name or author\" [(ngModel)]=\"search_query\" [ngModelOptions]=\"{standalone: true}\" onkeyup=\"window.scrollTo(0,400)\">\n                                </form>\n                        </li>\n    \n                        <li class=\"nav-item ml-2\">\n                                <button class=\"btn btn-dark\" title=\"Wishlist\" style=\"font-size: 20px\" routerLink=\"/wishlist\">\n                                        <i class=\"fas fa-heart\" ></i>\n                                </button>\n                                <button class=\"btn btn-dark\" title=\"Messages\" style=\"font-size: 20px\">\n                                        <i class=\"fas fa-envelope\" ></i>\n                                </button>\n                                <span class=\"badge badge-notify\">3</span>\n        \n                        </li>\n                        <li class=\"nav-item\">\n                                <div class=\"nav-item dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: white ; font-size: 18px\">\n                                                <i class=\"fas fa-user\" ></i> {{user}}\n                                          </a>\n                                          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                            <a class=\"dropdown-item\" href=\"#\">My Account</a>\n                                            <a class=\"dropdown-item\" href=\"#\">Wishlist</a>\n                                            <a class=\"dropdown-item\" href=\"#\">Messages</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <button class=\"btn btn-light dropdown-item\">\n                                                    <a (click)=\"logout()\">Logout</a>\n                                            </button>\n                                            </div>\n                            </div>\n                        </li>\n                    </ul>\n            \n          \n        </div>\n      </nav>\n\n    \n\n      <div class=\"container col-m-10 col-sm-12\" style=\"margin-top : 63px ;\">\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"2000\" >\n                    <ol class=\"carousel-indicators\">\n                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\" style=\" margin : auto ;\">\n                      <div class=\"carousel-item active\">\n                        <img class=\"d-block w-100\" src=\"../../assets/images/image1.jpg\" alt=\"First slide\" height=\"400px\" >\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3> <strong> A place <br> to sell your old books </strong> </h3>\n                            \n                        </div>\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"d-block w-100\" src=\"../../assets/images/image4.jpg\" alt=\"Second slide\" height=\"400px\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                                <h3> <strong> A place <br> to sell your old books </strong> </h3>\n                                \n                            </div>\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"d-block w-100\" src=\"../../assets/images/image3.jpg\" alt=\"Third slide\" height=\"400px\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                                <h3> <strong> A place <br> to sell your old books </strong> </h3>\n                                \n                            </div>\n                      </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                  </div>      \n      </div>\n\n      <div class=\"container\" style=\"margin-top: 50px ;\" >\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n                    <div ></div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                          </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\n                      <ul class=\"navbar-nav\">\n                        <li class=\"nav-item\">\n                                \n                          <div class=\"btn-group\">\n                                <h6 style=\"margin-top: 6px ;\"> Sort By | </h6>\n                                <button [ngClass]=\"sort_button_classes[0]\" style=\"border-radius: 2px ; margin-left : 0.5rem\" id=\"sort-1\" (click) = \"sortClicked($event)\" > Newest First </button>\n                                <button [ngClass]=\"sort_button_classes[1]\" style=\"border-radius: 2px ;\" id=\"sort-2\" (click) = \"sortClicked($event)\"> Price: High to Low </button>\n    \n                          </div>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button [ngClass]=\"sort_button_classes[2]\" style=\"border-radius: 2px ;\" id=\"sort-3\" (click) = \"sortClicked($event)\"> Price: Low to High </button>\n                        </li>\n                        </ul>\n                        <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                \n                                        <div class=\"btn-group\">\n                                             <h6 style=\"margin-top: 9px ;\"> Filter By | </h6>\n                                             <div class=\"dropdown ml-2\">\n                                                    <a class=\"nav-link dropdown-toggle\" style = \"color:blue;\"href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                            Price\n                                                   </a>\n                                                   <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                                        <div class=\"container\">\n                                                                None\n                                                                <input type=\"radio\" name=\"radios\" (change)=\"onSelectionChange($event)\" [value]=\"1\" checked style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\">\n                                                            </div>\n                                                            <div class=\"dropdown-divider\"></div>\n                                                       <div class=\"container\">\n                                                           0-500\n                                                           <input type=\"radio\" name=\"radios\" (change)=\"onSelectionChange($event)\" [value]=\"2\"  style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\">\n                                                       </div>\n                                                       <div class=\"dropdown-divider\"></div>\n                                                       <div class=\"container\">\n                                                              500-1000\n                                                               <input type=\"radio\" name=\"radios\" (change)=\"onSelectionChange($event)\" [value]=\"3\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\">\n                                                       </div>\n                                                       <div class=\"dropdown-divider\"></div>\n                                                       <div class=\"container\">\n                                                               1000-2000\n                                                               <input type=\"radio\" name=\"radios\" (change)=\"onSelectionChange($event)\" [value]=\"4\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\">\n                                                           </div>\n                                                           <div class=\"dropdown-divider\"></div>\n                                                           <div class=\"container\">\n                                                                2000 or more\n                                                                <input type=\"radio\" name=\"radios\" (change)=\"onSelectionChange($event)\" [value]=\"5\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\">\n                                                            </div>\n                                                       \n                                       \n                                                   </div>\n                                            </div>\n\n                                             <div class=\"dropdown ml-2\">\n                                                    <a class=\"nav-link dropdown-toggle\" style = \"color:blue;\"href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                            Condition\n                                                   </a>\n                                                   <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                                       <div class=\"container\">\n                                                           New\n                                                           <input type=\"checkbox\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\" [(ngModel)]=\"conditon_checkboxes[0]\" (change) = \"conditionFilterClick()\">\n                                                       </div>\n                                                       <div class=\"dropdown-divider\"></div>\n                                                       <div class=\"container\">\n                                                               Almost New\n                                                               <input type=\"checkbox\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\" [(ngModel)]=\"conditon_checkboxes[1]\" (change) = \"conditionFilterClick()\">\n                                                       </div>\n                                                       <div class=\"dropdown-divider\"></div>\n                                                       <div class=\"container\">\n                                                               Slight Damage\n                                                               <input type=\"checkbox\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\" [(ngModel)]=\"conditon_checkboxes[2]\" (change) = \"conditionFilterClick()\">\n                                                           </div>\n                                                           <div class=\"dropdown-divider\"></div>\n                                                           <div class=\"container\">\n                                                                Worn\n                                                                <input type=\"checkbox\" style=\"float: right; margin-top: 5px ; width: 20px ; height: 20px;\" [(ngModel)]=\"conditon_checkboxes[3]\" (change) = \"conditionFilterClick()\">\n                                                            </div>\n                                                           \n                                       \n                                                   </div>\n                                            </div>\n                                            \n                                        </div>\n                                \n                         </li>\n                       </ul>\n                        \n                    </div>\n                  </nav>\n      </div>\n    \n      <div class=\"container\" style=\"margin-top: 50px ; text-align: center\" *ngIf = \" ( filteredListings !== undefined) && ( filteredListings | myfilter : search_query ).length === 0 \">\n            <h1> Oops ! We Found Nothing Here ... :( </h1>\n        </div>\n       \n      <div class=\"container\" style=\"margin-top: 50px\">\n            <div class=\"row\">\n\n                    <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor = \"let listing of ( filteredListings | myfilter : search_query ) \" >\n                            <div [ngClass]=\"card_class\">\n                                <a routerLink=\"/listings/{{listing.listing_id}}\" class=\"card-link-my\"></a>\n                              <!-- set a width on the image otherwise it will expand to full width       -->\n                              <div class=\"container mt-2\" style=\"height: 280px; width: 280px;\">\n                                    <img class=\"card-img-top img-fluid\" src=\"../../assets/images/books/{{listing.image}}\" alt=\"Card image cap\" style=\"max-width: 100%; max-height: 100%\">\n                              </div>\n                              <div class=\"card-body\">\n                                   \n                                <div class=\"container\" style=\"text-align: center\">\n                                      <h4 class=\"card-title\" >{{listing.book_name}}</h4>\n                                      <p> By {{listing.book_author}} <br> Condition : {{listing.book_condition}} </p>\n                                      <h4> <i class=\"fas fa-rupee-sign\"></i> {{listing.price}} </h4>\n                                </div>\n                              </div>\n                              <div class=\"container mb-2\">\n                                      <button class=\"btn btn-danger col-6\" style=\"background: red;\" id =\"wishlist-{{listing['listing_id']}}\" (click) = \"addToWishlist($event)\">\n                                              Add to Wishlist <i class=\"fas fa-heart\"></i>\n                                          </button>\n                                          <button class=\"btn col-6\" style=\"float: right; background: #ff9f00 ; color: white\">\n                                              Contact Seller <i class=\"fab fa-telegram-plane\"></i>\n                                          </button>\n                                        \n                               </div>\n                            </div>\n                            <!-- /.card -->\n                          </div>\n\n                </div>\n      </div>"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userauthenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userauthenticator.service */ "./src/app/userauthenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listingsservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listingsservice.service */ "./src/app/listingsservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(route, router, userAuth, listingService) {
        this.route = route;
        this.router = router;
        this.userAuth = userAuth;
        this.listingService = listingService;
        this.user = '';
        this.card_class = 'card mb-4 my-card';
        this.search_query = "";
        // Always use filter by price first
        // then filter by condition 
        // then sort
        // search is at real-time
        this.selected_price_filter = 1;
        this.price_filters = [{ l: 0, r: 0 }, { l: 0, r: 100000000 }, { l: 0, r: 500 }, { l: 500, r: 1000 }, { l: 1000, r: 2000 },
            { l: 2000, r: 100000000 }];
        this.selected_sort = 1;
        this.sort_button_classes = ['btn btn-light my-active', 'btn btn-light', 'btn btn-light'];
        this.conditon_checkboxes = [true, true, true, true];
    }
    ListingsComponent.prototype.getListings = function () {
        var _this = this;
        this.listingService.fetchListings().then(function (result) {
            if (result === true) {
                _this.listings = _this.listingService.listings;
                _this.filteredListings = JSON.parse(JSON.stringify(_this.listings));
                _this.sortListings(1);
            }
        });
    };
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuth.isLoggedIn().then(function (result) {
            _this.user = _this.userAuth.user_id;
            if (!result) {
                _this.route.navigate(['home/login']);
            }
            else {
                _this.getListings();
            }
        });
        this.search_query = '';
    };
    ListingsComponent.prototype.addToWishlist = function (event) {
        var id = +(event.target.id.split('-')[1]);
        this.listingService.addListingToWishlist(this.userAuth.user_id, id);
        alert("Item Added Successfully...");
    };
    ListingsComponent.prototype.sortListings = function (sort_id) {
        var tempListings = JSON.parse(JSON.stringify(this.filteredListings));
        if (sort_id === 1) {
            this.sort_button_classes = ['btn btn-light my-active', 'btn btn-light', 'btn btn-light'];
            tempListings.sort(function (a, b) { return (a['listing_id'] < b['listing_id']); });
        }
        else if (sort_id === 2) {
            this.sort_button_classes = ['btn btn-light', 'btn btn-light my-active', 'btn btn-light'];
            tempListings.sort(function (a, b) { return (a.price < b.price); });
        }
        else {
            this.sort_button_classes = ['btn btn-light', 'btn btn-light', 'btn btn-light my-active'];
            tempListings.sort(function (a, b) { return (a.price > b.price); });
        }
        this.filteredListings = JSON.parse(JSON.stringify(tempListings));
    };
    ListingsComponent.prototype.sortClicked = function (event) {
        var sort_id = +(event.target.id.split("-")[1]);
        this.sortListings(sort_id);
        this.selected_sort = sort_id;
    };
    // filter by price
    ListingsComponent.prototype.onSelectionChange = function (event) {
        this.filterbyPrice(+event.target.value);
        this.selected_price_filter = +(event.target.value);
        this.conditionFilter();
    };
    // filter by condition
    ListingsComponent.prototype.conditionFilterClick = function () {
        this.filterbyPrice(this.selected_price_filter);
        this.conditionFilter();
    };
    ListingsComponent.prototype.filterbyPrice = function (value) {
        var _this = this;
        var tempListings = this.listings.filter(function (listing) {
            return (listing['price'] >= _this.price_filters[value].l && listing['price'] <= _this.price_filters[value].r);
        });
        this.filteredListings = JSON.parse(JSON.stringify(tempListings));
    };
    ListingsComponent.prototype.conditionFilter = function () {
        var _this = this;
        var tempListings = this.filteredListings.filter(function (listing) {
            if (_this.conditon_checkboxes[0] === true && listing['book_condition'] === 'new') {
                return true;
            }
            if (_this.conditon_checkboxes[1] === true && listing['book_condition'] === 'almost new') {
                return true;
            }
            if (_this.conditon_checkboxes[2] === true && listing['book_condition'] === 'slight damage') {
                return true;
            }
            if (_this.conditon_checkboxes[3] === true && listing['book_condition'] === 'worn') {
                return true;
            }
            return false;
        });
        // console.log( tempListings ) ;
        this.filteredListings = JSON.parse(JSON.stringify(tempListings));
        this.sortListings(this.selected_sort);
    };
    ListingsComponent.prototype.mouseEnter = function () {
        this.card_class = 'card mb-4 my-card shadow p-3 mb-5 bg-white rounded';
    };
    ListingsComponent.prototype.mouseLeave = function () {
        this.card_class = 'card mb-4 my-card';
    };
    ListingsComponent.prototype.logout = function () {
        this.userAuth.logOut();
        this.route.navigate(['home/login']);
    };
    ListingsComponent.prototype.messages = function () {
        this.route.navigate(['messages']);
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _userauthenticator_service__WEBPACK_IMPORTED_MODULE_1__["UserauthenticatorService"],
            _listingsservice_service__WEBPACK_IMPORTED_MODULE_3__["ListingsserviceService"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/listingsservice.service.ts":
/*!********************************************!*\
  !*** ./src/app/listingsservice.service.ts ***!
  \********************************************/
/*! exports provided: ListingsserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsserviceService", function() { return ListingsserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingsserviceService = /** @class */ (function () {
    function ListingsserviceService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
    }
    ListingsserviceService.prototype.addListingToWishlist = function (user_id, listing_id) {
        this.http.post('/api/addListingToWishlist', { user_id: user_id, listing_id: listing_id }, {
            headers: this.headers
        })
            .subscribe(function (data) { });
    };
    ListingsserviceService.prototype.removefromWishlist = function (user_id, listing_id) {
        this.http.post('/api/removefromWishlist', { user_id: user_id, listing_id: listing_id }, {
            headers: this.headers
        })
            .subscribe(function (data) { });
    };
    ListingsserviceService.prototype.fetchWishlist = function (user_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/fetchWishlist', { user_id: user_id }, {
                headers: _this.headers
            })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ListingsserviceService.prototype.fetchListings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/fetchListings', {
                headers: _this.headers
            })
                .subscribe(function (data) {
                _this.listings = data;
                resolve(true);
            });
        });
    };
    ListingsserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingsserviceService);
    return ListingsserviceService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"margin-top: 15px\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)] = \"username\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)] = \"password\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\" style=\"text-align: center\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click) = \"loginClicked()\" >Login</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userauthenticator.service */ "./src/app/userauthenticator.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, route, router, userAuth) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.userAuth = userAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.route.navigate(['home/login']);
    };
    LoginComponent.prototype.doSomething = function (authData) {
        if (authData['statusCode'] === 200) {
            localStorage.setItem('authenticator', authData['jwt']);
            this.route.navigate(['listings']);
        }
        else if (authData['statusCode'] === 500) {
            alert('No such user found');
        }
        else {
            alert('Incorrect Password');
        }
    };
    LoginComponent.prototype.loginClicked = function () {
        var _this = this;
        this.userAuth.loginUser(this.username, this.password).then(function (result) {
            _this.doSomething(result);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__["UserauthenticatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myfilter.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/myfilter.pipe.ts ***!
  \**********************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, args) {
        if (args === '') {
            return items;
        }
        args = args.toLowerCase();
        return items.filter(function (item) {
            return (((item['book_name'].toLowerCase()).search(args) !== -1) ||
                ((item['book_author'].toLowerCase()).search(args) !== -1));
        });
    };
    MyFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'myfilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #companyForm=\"ngForm\" style=\"margin-top: 15px\">\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"exampleInputEmail1\">First Name</label>\n              <input type=\"text\" (input)=\"validateFirstname()\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"newUser.firstName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Last Name</label>\n              <input type=\"text\" (input)=\"validateLastname()\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"newUser.lastName\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" aria-describedby=\"emailHelp\" placeholder=\"Enter username\" [(ngModel)]=\"newUser.username\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)]=\"newUser.email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"newUser.password\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Re-enter Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"re-password\" placeholder=\"Password\" [(ngModel)]=\"newUser.repassword\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\" style=\"text-align: center\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitForm()\">Sign Up</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userauthenticator.service */ "./src/app/userauthenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, userAuth, route) {
        this.http = http;
        this.userAuth = userAuth;
        this.route = route;
        this.validForm = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignupComponent.prototype.resetForm = function () {
        this.newUser = { firstName: '', lastName: '', username: '', email: '', password: '', repassword: '' };
    };
    SignupComponent.prototype.validateFirstname = function () {
        console.log("I'm called");
        console.log(this.newUser.firstName);
        this.newUser.firstName = this.newUser.firstName.replace(/[^a-zA-Z0-9@]+/, '');
        console.log(this.newUser.firstName);
    };
    SignupComponent.prototype.validateLastname = function () {
        this.newUser.lastName = this.newUser.lastName.replace(/[^a-zA-Z0-9@]+/, '');
    };
    SignupComponent.prototype.validateForm = function (check) {
        if (!check) {
            this.newUser.password = null;
            this.newUser.repassword = null;
        }
        else {
            alert('Form Submitted');
            this.userAuth.registerUser(this.newUser);
            this.resetForm();
            this.route.navigate(['home/login']);
        }
    };
    SignupComponent.prototype.validateEmail = function () {
        var _this = this;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return new Promise(function (resolve, reject) {
            resolve(reg.test(_this.newUser.email) === false);
        });
    };
    SignupComponent.prototype.checkform = function () {
        var _this = this;
        // first name should not be empty
        this.newUser.firstName = this.newUser.firstName.trim();
        if (this.newUser.firstName.length === 0) {
            alert('First Name cannot be empty');
            this.validateForm(false);
            return;
        }
        // trim the last name
        this.newUser.lastName = this.newUser.lastName.trim();
        // trim the username
        this.newUser.username = this.newUser.username.trim();
        if (this.newUser.username.length === 0) {
            alert('Username cannot be empty');
            this.validateForm(false);
            return;
        }
        // check whether a username exists
        this.userAuth.checkUsername(this.newUser.username).then(function (result) {
            //console.log("Result of checkUsername = " + result) ;
            if (!result) {
                _this.newUser.username = '';
                alert("A user already exists with the same username");
                _this.validateForm(false);
            }
            else {
                // trim the email
                //console.log( this.newUser ) ;
                _this.newUser.email = _this.newUser.email.trim();
                if (_this.newUser.email.length === 0) {
                    alert('Email cannot be empty');
                    _this.validateForm(false);
                    return;
                }
                _this.validateEmail().then(function (result) {
                    //console.log(result) ;
                    if (result) {
                        alert("Please enter a valid email address");
                        _this.validateForm(false);
                    }
                    else {
                        // check whether a email exists
                        _this.userAuth.checkEmail(_this.newUser.email).then(function (result) {
                            if (!result) {
                                _this.newUser.email = '';
                                alert("A user already exists with the same email");
                                _this.validateForm(false);
                            }
                            else {
                                if (_this.newUser.password !== _this.newUser.repassword) {
                                    alert("Passwords do not match");
                                    _this.validateForm(false);
                                }
                                else {
                                    if (_this.newUser.password.trim() === '') {
                                        alert("Password can't be empty");
                                        _this.validateForm(false);
                                    }
                                    else {
                                        _this.validateForm(true);
                                    }
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    SignupComponent.prototype.submitForm = function () {
        this.checkform();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__["UserauthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/userauthenticator.service.ts":
/*!**********************************************!*\
  !*** ./src/app/userauthenticator.service.ts ***!
  \**********************************************/
/*! exports provided: UserauthenticatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserauthenticatorService", function() { return UserauthenticatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserauthenticatorService = /** @class */ (function () {
    function UserauthenticatorService(http) {
        this.http = http;
        this.user_id = null;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
    }
    UserauthenticatorService.prototype.registerUser = function (newUser) {
        this.http.post('/api/register', JSON.stringify(newUser), {
            headers: this.headers
        })
            .subscribe(function (data) { });
    };
    UserauthenticatorService.prototype.loginUser = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/login', JSON.stringify({ username: username, password: password }), { headers: _this.headers })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    UserauthenticatorService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (localStorage.getItem('authenticator') === null) {
                resolve(false);
            }
            else {
                var token = localStorage.getItem('authenticator');
                _this.http.post('/api/verifyToken', { token: token }, { headers: _this.headers })
                    .subscribe(function (data) {
                    if (data['statusCode'] === 200) {
                        _this.user_id = data['authData']['user_id'];
                        resolve(true);
                    }
                    else {
                        _this.user_id = null;
                        resolve(false);
                    }
                });
            }
        });
    };
    UserauthenticatorService.prototype.checkUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/verifyUser', JSON.stringify({ username: username }), { headers: _this.headers })
                .subscribe(function (data) {
                resolve(data['val']);
            });
        });
    };
    UserauthenticatorService.prototype.checkEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/verifyEmail', JSON.stringify({ email: email }), { headers: _this.headers })
                .subscribe(function (data) {
                resolve(data['val']);
            });
        });
    };
    UserauthenticatorService.prototype.logOut = function () {
        localStorage.removeItem('authenticator');
    };
    UserauthenticatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserauthenticatorService);
    return UserauthenticatorService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\");\r\ninput {\r\n\toutline: none;\r\n}\r\ninput[type=search] {\r\n\t-webkit-appearance: textfield;\r\n\t-webkit-box-sizing: content-box;\r\n\tfont-family: inherit;\r\n\tfont-size: 100%;\r\n}\r\ninput::-webkit-search-decoration,\r\ninput::-webkit-search-cancel-button {\r\n\tdisplay: none; \r\n}\r\ninput[type=search] {\r\n\tbackground: #fff url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\r\n\tborder: solid 1px #ccc;\r\n\tpadding: 9px 10px 9px 32px;\r\n\twidth: 50px;\r\n\tborder-radius: 10em;\r\n\ttransition: all .5s;\r\n}\r\ninput[type=search]:focus {\r\n\twidth: 300px;\r\n\tbackground-color: #fff;\r\n\tborder-color: #66CC75;\r\n\tbox-shadow: 0 0 5px rgba(109,207,246,.5);\r\n}\r\ninput:-moz-placeholder {\r\n\tcolor: #999;\r\n}\r\ninput::-webkit-input-placeholder {\r\n\tcolor: #999;\r\n}\r\n.badge-notify{\r\n    background : red;\r\n    color: white ;\r\n    position:relative;\r\n    top: -10px;\r\n    left: -15px;\r\n }\r\n.my-active {\r\n     background : royalblue;\r\n\t color: white ;\r\n\t border-radius: 2px ;\r\n }\r\n.card-link-my {\r\n        position: absolute;\r\n        top: 0; left: 0;\r\n        height: 100%; width: 100%;\r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand mr-auto\" href=\"listings\" style=\"display: inline block; font-size: 25px ; margin-left: 50px\">\n            <i class=\"fas fa-book\" ></i>\n            BooksBazaar\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse float-right\" id=\"navbarSupportedContent\">\n            <div class=\"mr-auto\">\n           \n                </div>\n            <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 80px\">\n                    <li class=\"nav-item\">\n                            \n                    </li>\n\n                    <li class=\"nav-item ml-2\">\n                            <button class=\"btn btn-dark\" title=\"Listings\" style=\"font-size: 20px\" routerLink=\"/listings\">\n                                <i class=\"fas fa-home\" ></i>\n                            </button>\n                          \n                            <button class=\"btn btn-dark\" title=\"Messages\" style=\"font-size: 20px\">\n                                    <i class=\"fas fa-envelope\" ></i>\n                            </button>\n                            <span class=\"badge badge-notify\">3</span>\n    \n                    </li>\n                    <li class=\"nav-item\">\n                            <div class=\"nav-item dropdown\">\n                                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: white ; font-size: 18px\">\n                                            <i class=\"fas fa-user\" ></i> {{user}}\n                                      </a>\n                                      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                        <a class=\"dropdown-item\" href=\"#\">My Account</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Wishlist</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Messages</a>\n                                        <div class=\"dropdown-divider\"></div>\n                                        <button class=\"btn btn-light dropdown-item\">\n                                                <a (click)=\"logout()\">Logout</a>\n                                        </button>\n                                        </div>\n                        </div>\n                    </li>\n                </ul>\n        \n      \n    </div>\n  </nav>\n\n  <div class=\"container col-md-8\" style=\"margin-top: 100px ; text-align: center\">\n    <h2> <i class=\"fas fa-heart\" style=\"color: red\"></i> My Wishlist <i class=\"fas fa-heart\" style=\"color: red\"></i> </h2>\n  </div>\n\n  <div class=\"container\" style=\"margin-top: 50px ; text-align: center\" *ngIf = \" ( myWishlist !== undefined) && ( myWishlist ).length === 0 \">\n      <h1> Oops ! We Found Nothing Here ... :( </h1>\n      <h1> Try adding some items to Wishlist <i class=\"fas fa-heart\" style=\"color: red\"></i> </h1>\n  </div>\n\n  <div class=\"container\" style=\"margin-top: 50px\" *ngIf = \"load_completed\">\n      <div class=\"row\">\n\n              <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor = \"let listing of ( myWishlist ) \" >\n                      <div class=\"card mb-4 my-card\">\n                          <a routerLink=\"/listings/{{listing.listing_id}}\" class=\"card-link-my\"></a>\n                        <!-- set a width on the image otherwise it will expand to full width       -->\n                        <div class=\"container mt-2\" style=\"height: 280px; width: 280px;\">\n                              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/books/{{listing.image}}\" alt=\"Card image cap\" style=\"max-width: 100%; max-height: 100%\">\n                        </div>\n                        <div class=\"card-body\">\n                             \n                          <div class=\"container\" style=\"text-align: center\">\n                                <h4 class=\"card-title\" >{{listing.book_name}}</h4>\n                                <p> By {{listing.book_author}} <br> Condition : {{listing.book_condition}} </p>\n                                <h4> <i class=\"fas fa-rupee-sign\"></i> {{listing.price}} </h4>\n                          </div>\n                        </div>\n                        <div class=\"container mb-2\">\n                                \n                                    <button class=\"btn col-6\" style=\"float: left; background: #ff9f00 ; color: white\">\n                                        Contact Seller <i class=\"fab fa-telegram-plane\"></i>\n                                    </button>\n                                    <button class=\"btn btn-danger col-6\" style=\"float: right; background: red;\" id =\"wishlist-{{listing['listing_id']}}\" (click) = \"removefromWishlist($event)\">\n                                        Remove <i class=\"fas fa-trash\"></i>\n                                    </button>\n                                  \n                         </div>\n                      </div>\n                      <!-- /.card -->\n                    </div>\n\n          </div>\n</div>\n\n\n    "

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userauthenticator.service */ "./src/app/userauthenticator.service.ts");
/* harmony import */ var _listingsservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listingsservice.service */ "./src/app/listingsservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(route, userAuth, listingService) {
        this.route = route;
        this.userAuth = userAuth;
        this.listingService = listingService;
        this.user = '';
    }
    WishlistComponent.prototype.removefromWishlist = function (event) {
        var id = +(event.target.id.split('-')[1]);
        this.listingService.removefromWishlist(this.user, id);
        var tempListings = this.myWishlist.filter(function (listing) {
            console.log(listing.listing_id !== id);
            return (listing.listing_id !== id);
        });
        this.myWishlist = JSON.parse(JSON.stringify(tempListings));
        alert("Item Removed Successfully...");
    };
    WishlistComponent.prototype.getWishlist = function () {
        var _this = this;
        this.listingService.fetchWishlist(this.user).then(function (result) {
            _this.myWishlist = result;
            _this.load_completed = true;
        });
    };
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load_completed = false;
        this.userAuth.isLoggedIn().then(function (result) {
            _this.user = _this.userAuth.user_id;
            if (!result) {
                _this.route.navigate(['home/login']);
            }
            else {
                _this.getWishlist();
            }
        });
    };
    WishlistComponent.prototype.logout = function () {
        this.userAuth.logOut();
        this.route.navigate(['home/login']);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _userauthenticator_service__WEBPACK_IMPORTED_MODULE_2__["UserauthenticatorService"], _listingsservice_service__WEBPACK_IMPORTED_MODULE_3__["ListingsserviceService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dheer\Desktop\nagarro\final-project\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map