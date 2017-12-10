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

module.exports = "<div class=\"page-wrapper\" *ngIf=\"client\">\n  <div class=\"container-fluid\">\n    <div class=\"sidebar\">\n      <app-client-detail></app-client-detail>\n    </div>\n    \n    <div class=\"main-content\">\n      <div class=\"row row-30\">\n        <div class=\"col panel shadow\">\n          <span class=\"title\">\n            <i class=\"fa fa-check-square\" aria-hidden=\"true\"></i> ÚLTIMOS PEDIDOS\n          </span>\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">PEDIDO</th>\n                <th scope=\"col\">STATUS</th>\n                <th scope=\"col\">TIPO</th>\n                <th scope=\"col\">VALOR</th>\n                <th scope=\"col\">DATA</th>\n                <th scope=\"col\">CANAL</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let item of clients.selected.pedidos\">\n              <tr>\n                <th scope=\"row\">{{item.pedido}}</th>\n                <td>{{item.status}}</td>\n                <td>{{item.tipo}}</td>\n                <td>{{item.valor}}</td>\n                <td>{{item.data}}</td>\n                <td>{{item.canal}}</td>\n                <td><button type=\"button\" class=\"btn btn-warning btn-sm\">Recomprar</button></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col panel shadow \">\n          <span class=\"title\">\n            <i class=\"fa fa-compress\" aria-hidden=\"true\"></i> COMPARATIVO DE VENDAS\n          </span>\n          \n        </div>\n      </div>\n      <div class=\"row row-35\">\n        <div class=\"col-6 panel shadow\">\n          <span class=\"title\">\n            <i class=\"fa fa-ticket\" aria-hidden=\"true\"></i> FICHAS DE OCORRÊNCIAS (TICKETS)\n          </span>\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">TICKET</th>\n                <th scope=\"col\">STATUS</th>\n                <th scope=\"col\">TIPO</th>\n                <th scope=\"col\">MOTIVO</th>\n                <th scope=\"col\">DATA</th>\n                <th scope=\"col\">CANAL</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>2</td>\n                <td>3</td>\n                <td>4</td>\n              </tr>\n              \n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-3 panel shadow\">\n          <span class=\"title\">\n            <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> CANAL PREFERIDO\n          </span>\n        </div>\n        <div class=\"col-3 panel shadow\">\n          <span class=\"title\">\n            <i class=\"fa fa-money\" aria-hidden=\"true\"></i> FATURAMENTO\n          </span>\n        </div>\n        \n      </div>\n      <div class=\"row row-30\">\n        <div class=\"col panel shadow\">\n          \n          <span class=\"title\">\n            <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> ÚLTIMAS INTERAÇÕES\n          </span>\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">INTERAÇÃO</th>\n                <th scope=\"col\">CANAL</th>\n                <th scope=\"col\">ASSUNTO</th>\n                <th scope=\"col\">DATA</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>2</td>\n                <td>3</td>\n                <td>4</td>\n              </tr>\n              \n            </tbody>\n          </table>\n        </div>\n        <div class=\"col panel shadow\">\n          <span class=\"title\">\n            <i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> PARTIDAS EM ABERTO\n          </span>\n        </div>\n      </div>\n      \n      <div class=\"tabs\">\n        <div class=\"tab\">Visão 360º</div>\n        <div class=\"tab\">PESQUISAS E ENCERRAMENTO</div>\n        <div class=\"tab\">VENDA ASSISTIDA</div>\n      </div>\n      \n      \n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  height: 100%;\n  margin: 0px;\n  /* background: #fff; */ }\n\n.page-wrapper .row {\n  padding-bottom: 5px; }\n\n.sidebar {\n  padding: 0;\n  min-height: calc(100% - 10px);\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background: #fff;\n  width: 25%; }\n\n.main-content {\n  padding: 0 15px 0 10px;\n  position: fixed;\n  right: 0;\n  height: calc(100% - 5px);\n  width: calc(75% - 5px); }\n\n.row-30 {\n  height: 30%; }\n\n.row-40 {\n  height: calc(40% + 5px); }\n\n.row-35 {\n  height: calc(35% + 5px); }\n\n.row-50 {\n  height: calc(50% + 2.5px); }\n\n.panel {\n  background: #fff;\n  margin-left: 5px;\n  min-height: 160px; }\n\n.panel.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(50% - 5px);\n          flex: 0 0 calc(50% - 5px);\n  max-width: calc(50% - 5px); }\n\n.panel.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(50% - 5px);\n          flex: 0 0 calc(50% - 5px);\n  max-width: calc(25% - 5px); }\n\n.panel .title {\n  color: #0275d8;\n  padding: 10px 0px;\n  display: block;\n  font-weight: 600; }\n\n.panel .title i {\n  font-size: 1.6em;\n  opacity: .4;\n  margin-right: 10px; }\n\n.panel .table td,\n.panel .table th {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: .8em; }\n\n@media (max-width: 576px) {\n  .sidebar {\n    position: static; } }\n\n.tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(5% - 5px);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.tabs .tab {\n  background: #F4DD51;\n  padding: 5px 30px;\n  font-size: 1.2em;\n  position: relative;\n  margin-right: 30px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6); }\n\n.tabs .tab:first-child {\n  margin-left: 10px; }\n\n.tabs .tab:before {\n  content: \"\";\n  position: absolute;\n  border-bottom: 2.2vh solid transparent;\n  border-left: 20px solid #f1e028;\n  border-top: 2.2vh solid transparent;\n  height: 0px;\n  width: 0px;\n  right: -20px;\n  top: 0; }\n\n.btn-sm {\n  padding: .05rem .5rem;\n  font-size: .8rem; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_minigraph_minigraph_component__ = __webpack_require__("../../../../../src/app/components/minigraph/minigraph.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_minigraph_minigraph_component__["a" /* MinigraphComponent */]
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

module.exports = "<div class=\"client \">\n\n    <!-- <div class=\"title\">\n      <i class=\"fa fa-building\" aria-hidden=\"true\"></i> {{clients.selected.name}}\n    </div> -->\n\n    <div class=\"data\">\n        <div class=\"col shadow\">\n            <span class=\"cap\">RAZÃO:</span>{{clients.selected.razao}}\n          </div>\n        <div class=\"col shadow\">\n          <span class=\"cap\">CNPJ:</span>{{clients.selected.cnpj}}\n        </div>\n    </div>\n\n    <div class=\"data\">\n      <div class=\"col shadow\">\n          <span class=\"cap\">Email:</span>{{clients.selected.email}}\n      </div>\n      <div class=\"col shadow\">\n          <span class=\"cap\">FONE:</span>{{clients.selected.fone}}\n      </div>\n    </div>\n<!--     \n    <span class=\"detail\" >Detalhes\n      <i class=\"fa fa-chevron-circle-right\"></i>\n    </span> -->\n</div>\n\n\n<div class=\"line\">\n\n  \n  <app-minigraph *ngFor=\"let item of graphs\" [item]=\"item\" [ngStyle]=\"{'background-color': item.color}\">\n    \n  </app-minigraph>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client {\n  color: rgba(0, 0, 0, 0.6); }\n\n.client .title {\n  background: #fff;\n  padding: 0px;\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: 600; }\n\n.client .data {\n  font-size: .7em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.client .data .col {\n  padding: 2px 5px;\n  background: #fff;\n  margin-bottom: 4px; }\n\n.client .data .col:first-child {\n  margin-right: 4px; }\n\n.client .data .col .cap {\n  font-weight: 600;\n  display: block; }\n\n.client .detail {\n  cursor: pointer;\n  color: #666;\n  background: rgba(255, 255, 255, 0.5);\n  display: block;\n  text-align: center;\n  padding: 5px;\n  margin-top: 4px;\n  font-size: .9em; }\n\n.client .detail:hover {\n  background: white;\n  font-weight: 600; }\n\n.line {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-bottom: 5px; }\n\napp-minigraph {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: 30%;\n  margin: 5px 0px 0px;\n  border: 1px solid #eeeeee; }\n\napp-minigraph:nth-child(3n + 2) {\n  margin: 5px 5px 0; }\n\n.teste {\n  background: #BF4D28;\n  color: #fff; }\n", ""]);

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
        this.graphs = [];
        this.graphs = [
            {
                title: "Pedidos",
                icon: "fa-th-list",
                value: clients.selected.info.pedidos,
                color: "#FDFFD9"
            },
            {
                title: "Pedidos R$",
                icon: "fa-usd",
                value: clients.selected.info.pedidosValor,
                color: ""
            },
            {
                title: "Entregas Pendentes",
                icon: "fa-truck",
                value: clients.selected.info.entregas,
                color: ""
            },
            {
                title: "RFV Geral",
                icon: "fa-calendar",
                value: clients.selected.info.rfv,
                color: ""
            },
            {
                title: "Ofertas ativas",
                icon: "fa-gift",
                value: clients.selected.info.facilidades,
                color: ""
            },
            {
                title: "Cotações Pendentes",
                icon: "fa-exclamation-circle",
                value: clients.selected.info.cotacoesPendentes,
                color: "#E6F9BC"
            },
            {
                title: "Risco Crédito",
                icon: "fa-credit-card-alt",
                value: clients.selected.info.riscoCredito,
                color: ""
            },
            {
                title: "Mercantil",
                icon: "fa-credit-card",
                value: clients.selected.info.mercantil,
                color: ""
            },
            {
                title: "Facilidades",
                icon: "fa-globe",
                value: clients.selected.info.facilidades,
                color: "#C4FFEB"
            },
            {
                title: "Tickets Abertos",
                icon: "fa-ticket",
                value: clients.selected.info.ticketsAbertos,
                color: ""
            },
            {
                title: "Ligações Suzano",
                icon: "fa-phone",
                value: clients.selected.info.ligacoes,
                color: "#D5DED9"
            },
            {
                title: "Ligações Cliente",
                icon: "fa-volume-control-phone",
                value: clients.selected.info.ligacoesCliente,
                color: ""
            }
        ];
        if (clients.selected.info.riscoCredito == "alto") {
            this.graphs[6].color = "#FFD8D8";
        }
        else if (clients.selected.info.riscoCredito == "médio") {
            this.graphs[6].color = "#FFD6A3";
        }
        else if (clients.selected.info.riscoCredito == "baixo") {
            this.graphs[6].color = "#E4F5B1";
        }
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

/***/ "../../../../../src/app/components/minigraph/minigraph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <span class=\"title\" >\n    <span>{{item.title}}</span>\n  </span>\n  \n  <span class=\"graph\">\n    <i class=\"fa {{item.icon}} fa-3x\" aria-hidden=\"true\"></i>\n  </span>\n  \n\n  <span class=\"value\">\n      <span class=\"{{fontSize}}\">{{item.value}}</span>\n  </span>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/minigraph/minigraph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\n  display: block;\n  padding: 10px 0 0;\n  opacity: .6;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s ease; }\n\n.item:hover {\n  opacity: 1; }\n\n.title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  line-height: 1.2em;\n  min-height: 2.5em;\n  padding: 0 2px;\n  font-weight: 600; }\n\n.graph {\n  display: block;\n  text-align: center;\n  opacity: .3; }\n\n.value {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  font-weight: 600;\n  min-height: 2em; }\n\n.value .font1 {\n  font-size: 1.6em; }\n\n.value .font2 {\n  font-size: 1.1em; }\n\n.value .font3 {\n  font-size: .9em; }\n\n.value span,\n.title span {\n  display: block;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/minigraph/minigraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinigraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinigraphComponent = (function () {
    function MinigraphComponent() {
        this.fontSize = "font1";
    }
    MinigraphComponent.prototype.ngOnInit = function () {
        var len = this.item.value.length;
        if (len > 2 && len <= 7) {
            this.fontSize = "font2";
        }
        else if (len > 7) {
            this.fontSize = "font3";
        }
    };
    return MinigraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MinigraphComponent.prototype, "item", void 0);
MinigraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-minigraph',
        template: __webpack_require__("../../../../../src/app/components/minigraph/minigraph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/minigraph/minigraph.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MinigraphComponent);

//# sourceMappingURL=minigraph.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    Object.defineProperty(Client.prototype, "pedidos", {
        get: function () {
            return this._pedidos;
        },
        set: function (value) {
            this._pedidos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "info", {
        get: function () {
            return this._info;
        },
        set: function (value) {
            this._info = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "razao", {
        get: function () {
            return this._razao;
        },
        set: function (value) {
            this._razao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "cnpj", {
        get: function () {
            return this._cnpj;
        },
        set: function (value) {
            this._cnpj = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "fone", {
        get: function () {
            return this._fone;
        },
        set: function (value) {
            this._fone = value;
        },
        enumerable: true,
        configurable: true
    });
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
        // TICKET		STATUS			TIPO			MOTIVO					DATA				CANAL
        // 456		ENCERRADO			RECLAMAÇÃO			NÃO ENTREGUE					7/12/2017				SOCIAL
        // 342		ABERTO			RECLAMAÇÃO			QUALIDADE					28/10/2017				CHAT
        // 123		ENCERRADO			SUGESTÃO			TRANSPORTADORA					15/9/2017				URA
        this.clients = [];
        var pedidos1 = [
            {
                pedido: "7897",
                status: "ABERTO",
                tipo: "ZVIN",
                valor: "R$4.500,00",
                data: "7/12/2017",
                canal: "COMMERCE"
            },
            {
                pedido: "4348",
                status: "FATURADO",
                tipo: "ZVOR",
                valor: "R$2.250,00",
                data: "28/10/2017",
                canal: "TELEVENDAS"
            },
            {
                pedido: "2198",
                status: "ENTREGUE",
                tipo: "ZVOR",
                valor: "R$3.400,00",
                data: "15/9/2017",
                canal: "TELEVENDAS"
            }
        ];
        var cliente1 = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        cliente1.id = "1005632";
        cliente1.name = "OPEN FLOW";
        cliente1.razao = "OPENFLOW LTDA";
        cliente1.cnpj = "45.645.193/001-98";
        cliente1.fone = "11 98888-5555";
        cliente1.email = "PH@OPENFLOW.COM.BR";
        cliente1.info = {
            pedidos: "3",
            pedidosValor: "80.000,00",
            entregas: "2",
            rfv: "45 dias",
            ofertasAtivas: "4",
            cotacoesPendentes: "2",
            riscoCredito: "médio",
            mercantil: "56.432,67",
            facilidades: "3",
            ticketsAbertos: "3",
            ligacoes: "30",
            ligacoesCliente: "5"
        };
        cliente1.pedidos = pedidos1;
        var cliente2 = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        cliente2.id = "1005629";
        cliente2.name = "Partners Consulting";
        cliente2.razao = "Partners Consulting LTDA";
        cliente2.cnpj = "45.888.999/001-98";
        cliente2.fone = "11 3544-7788";
        cliente2.email = "victor.serra@partners.srv.br";
        cliente2.info = {
            pedidos: "12",
            pedidosValor: "190.564,00",
            entregas: "8",
            rfv: "60 dias",
            ofertasAtivas: "6",
            cotacoesPendentes: "5",
            riscoCredito: "baixo",
            mercantil: "96.555,30",
            facilidades: "4",
            ticketsAbertos: "1",
            ligacoes: "22",
            ligacoesCliente: "15"
        };
        cliente2.pedidos = pedidos1;
        this.clients.push(cliente1);
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