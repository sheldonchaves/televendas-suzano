webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" *ngIf=\"client\">\n  <div class=\"container-fluid\">\n    <div class=\"sidebar\">\n      <app-client-detail></app-client-detail>\n      Cliente:\n     \n    </div>\n    \n    <div class=\"main-content\">\n       <div class=\"row row-30\">\n        <div class=\"col panel\">painel1</div>\n        <div class=\"col panel \">painel3</div>\n      </div>\n      <div class=\"row row-40\">\n          <div class=\"col panel\">painel1</div>\n          <div class=\"col panel\">painel2</div>\n        </div>\n      <div class=\"row row-30\">\n          <div class=\"col panel\">painel3</div>\n          <div class=\"col panel\">painel4</div>\n       </div>\n\n     \n\n\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  height: 100%;\n  margin: 5px;\n  /* background: #fff; */ }\n\n.page-wrapper .row {\n  padding-bottom: 5px; }\n\n.sidebar {\n  padding: 20px 0;\n  min-height: calc(100% - 10px);\n  position: fixed;\n  top: 5px;\n  left: 5px;\n  background: #fff;\n  width: 25%; }\n\n.main-content {\n  padding: 0 15px 0 10px;\n  position: fixed;\n  right: 5px;\n  height: calc(100% - 10px);\n  width: calc(75% - 15px); }\n\n.row-30 {\n  height: 30%; }\n\n.row-40 {\n  height: calc(40% + 5px); }\n\n.row-50 {\n  height: calc(50% + 2.5px); }\n\n.panel {\n  background: #fff;\n  margin-left: 5px;\n  min-height: 160px; }\n\n@media (max-width: 576px) {\n  .sidebar {\n    position: static; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(activatedRoute, clients) {
        this.activatedRoute = activatedRoute;
        this.clients = clients;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clientId;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['cli'] != undefined) {
                clientId = params['cli'];
                _this.client = _this.clients.getClientById(clientId);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["a" /* ClientsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_client_detail_client_detail_component__ = __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_clients_service__["a" /* ClientsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"circle-tile \">\n    <a href=\"#\">\n      <div class=\"circle-tile-heading orange\">\n        <i class=\"fa fa-users fa-fw fa-3x\"></i>\n      </div>\n    </a>\n    <div class=\"circle-tile-content dark-blue\">\n      <div class=\"circle-tile-description text-faded\">  {{clients.selected.name}}</div>\n      <div class=\"circle-tile-number text-faded \">265</div>\n      <a class=\"circle-tile-footer\" href=\"#\">Detalhes <i class=\"fa fa-chevron-circle-right\"></i></a>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".circle-tile {\n  margin-bottom: 15px;\n  text-align: center; }\n\n.circle-tile-heading {\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-radius: 100%;\n  color: #FFFFFF;\n  height: 80px;\n  margin: 0 auto -40px;\n  position: relative;\n  transition: all 0.3s ease-in-out 0s;\n  width: 80px; }\n\n.circle-tile-heading .fa {\n  line-height: 80px; }\n\n.circle-tile-content {\n  padding-top: 50px; }\n\n.circle-tile-number {\n  font-size: 26px;\n  font-weight: 700;\n  line-height: 1;\n  padding: 5px 0 15px; }\n\n.circle-tile-description {\n  text-transform: uppercase; }\n\n.circle-tile-footer {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  display: block;\n  padding: 5px;\n  transition: all 0.3s ease-in-out 0s; }\n\n.circle-tile-footer:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none; }\n\n.circle-tile-heading.dark-blue:hover {\n  background-color: #2E4154; }\n\n.circle-tile-heading.green:hover {\n  background-color: #138F77; }\n\n.circle-tile-heading.orange:hover {\n  background-color: #DA8C10; }\n\n.circle-tile-heading.blue:hover {\n  background-color: #2473A6; }\n\n.circle-tile-heading.red:hover {\n  background-color: #CF4435; }\n\n.circle-tile-heading.purple:hover {\n  background-color: #7F3D9B; }\n\n.tile-img {\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9); }\n\n.dark-blue {\n  background-color: #34495E; }\n\n.green {\n  background-color: #16A085; }\n\n.blue {\n  background-color: #2980B9; }\n\n.orange {\n  background-color: #F39C12; }\n\n.red {\n  background-color: #E74C3C; }\n\n.purple {\n  background-color: #8E44AD; }\n\n.dark-gray {\n  background-color: #7F8C8D; }\n\n.gray {\n  background-color: #95A5A6; }\n\n.light-gray {\n  background-color: #BDC3C7; }\n\n.yellow {\n  background-color: #F1C40F; }\n\n.text-dark-blue {\n  color: #34495E; }\n\n.text-green {\n  color: #16A085; }\n\n.text-blue {\n  color: #2980B9; }\n\n.text-orange {\n  color: #F39C12; }\n\n.text-red {\n  color: #E74C3C; }\n\n.text-purple {\n  color: #8E44AD; }\n\n.text-faded {\n  color: rgba(255, 255, 255, 0.7); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientDetailComponent = (function () {
    function ClientDetailComponent(clients) {
        this.clients = clients;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-detail',
        template: __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clients_service__["a" /* ClientsService */]) === "function" && _a || Object])
], ClientDetailComponent);

var _a;
//# sourceMappingURL=client-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    Object.defineProperty(Client.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/services/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsService = (function () {
    function ClientsService() {
        this.clients = [];
        var cliente1 = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        cliente1.id = "0100001";
        cliente1.name = "nome1";
        this.clients.push(cliente1);
        var cliente2 = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        cliente2.id = "0100002";
        cliente2.name = "nome2";
        this.clients.push(cliente2);
    }
    ClientsService.prototype.getClientById = function (id) {
        this.selected = this.clients.filter(function (client) { return client.id === id; })[0];
        return this.selected;
    };
    return ClientsService;
}());
ClientsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClientsService);

//# sourceMappingURL=clients.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map