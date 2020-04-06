(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "./src/app/layout/transaction/tansaction-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/transaction/tansaction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.component */ "./src/app/layout/transaction/transaction.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/layout/transaction/wallet/wallet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _transaction_component__WEBPACK_IMPORTED_MODULE_2__["TransactionComponent"],
    },
    {
        path: 'wallet', component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/transaction/transaction.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/transaction/transaction.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n</div>\n<br>\n    <div class=\"col-lg-5\">\n      <div class=\"card card-default mb-3\">\n          <div class=\"card-header\">\n              <i class=\"fa fa-bell fa-fw\"></i> Wallets\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"list-group\">\n                <a  class=\"list-group-item clearfix d-block\"*ngFor=\"let wallet of wallets\" (click)=\"open(content,wallet)\">\n                    <i class=\"fa fa-money fa-fw\"></i> {{wallet}}\n                </a>\n            </div>\n          </div>\n      </div>\n\n  </div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Login</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n            <div class=\"alert alert-danger\" *ngIf=\"!passwordvalid\">\n                    <strong>Wrong password!</strong> \n                </div>\n        <div class=\"form-group row\">\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\">Wallet Hash</label>\n            <div class=\"col-10\">\n              <p id=\"example-text-input\" class=\"col-10 col-form-label\">{{ selectedHash }}</p>\n            </div>\n          </div> <div class=\"form-group row\">\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\">Pass\n            </label>\n            <div class=\"col-10\">\n              <input id=\"example-text-input\" name=\"pass\" type=\"password\" class=\"col-10 col-form-label\" [(ngModel)]=\"pass\"/>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-secondary pull-right\" (click)=\"c('Close click')\">Close</button>\n\n          <button type=\"button\" class=\"btn btn-primary \" (click)=\"submit()\">Connect</button>\n\n\n    </div>\n    \n</ng-template>\n<div class=\"col-lg-12\">\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"open1(content1)\" >new wallet</button>\n</div>\n\n<ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">New wallet</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n            <div class=\"alert alert-danger\" *ngIf=\"!passwordvalid\">\n                    <strong>Wrong password!</strong> \n                </div>\n             <div class=\"form-group row\">\n            <label for=\"passw\" class=\"col-2 col-form-label\">Pass\n            </label>\n            <div class=\"col-10\">\n              <input id=\"passw\" name=\"pass\" type=\"password\" class=\"col-10 col-form-label\" [(ngModel)]=\"passw\"/>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"repass\" class=\"col-2 col-form-label\">repass\n            </label>\n            <div class=\"col-10\">\n              <input id=\"repass\" name=\"repass\" type=\"password\" class=\"col-10 col-form-label\" [(ngModel)]=\"repass\"/>\n            </div>\n          </div>\n\n          <button type=\"button\" class=\"btn btn-primary \"(click)=\"newaccount()\" >Create</button>\n\n\n    </div>\n    \n</ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/transaction/transaction.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/transaction/transaction.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/transaction/transaction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/transaction/transaction.component.ts ***!
  \*************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(commService, router, transactionService, modalService, flashMessage) {
        this.commService = commService;
        this.router = router;
        this.transactionService = transactionService;
        this.modalService = modalService;
        this.flashMessage = flashMessage;
        this.info = [];
        this.passwordvalid = true;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    TransactionComponent.prototype.open = function (content, hash) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        this.selectedHash = hash;
        console.log(this.selectedHash);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TransactionComponent.prototype.open1 = function (content) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        console.log(this.selectedHash);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TransactionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TransactionComponent.prototype.submit = function () {
        var _this = this;
        console.log('connect');
        console.log(this.selectedHash);
        console.log(this.pass);
        this.transactionService.getCreds(this.selectedHash.substring(2), this.pass).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                _this.passwordvalid = false;
                console.log("password invalid");
            }
            else {
                console.log("connected");
                _this.info.push(_this.selectedHash);
                _this.info.push(_this.pass);
                console.log(_this.info);
                _this.commService.sendInputs(_this.info);
                _this.modalRef.close();
                _this.router.navigate(['transaction/wallet']);
            }
        });
    };
    TransactionComponent.prototype.newaccount = function () {
        var _this = this;
        console.log(this.passw);
        this.transactionService.Newwallet(this.passw).subscribe(function (data) {
            console.log(data);
            _this.getAccounts();
        });
    };
    TransactionComponent.prototype.getAccounts = function () {
        var _this = this;
        this.transactionService.ethAccounts().subscribe(function (data) {
            _this.wallets = data;
            console.log(_this.wallets);
        });
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/layout/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/layout/transaction/transaction.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/layout/transaction/transaction.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/transaction/transaction.module.ts ***!
  \**********************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.component */ "./src/app/layout/transaction/transaction.component.ts");
/* harmony import */ var _tansaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tansaction-routing.module */ "./src/app/layout/transaction/tansaction-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/layout/transaction/wallet/wallet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tansaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransactionRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_transaction_component__WEBPACK_IMPORTED_MODULE_2__["TransactionComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_7__["WalletComponent"]],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]],
        })
    ], TransactionModule);
    return TransactionModule;
}());



/***/ }),

/***/ "./src/app/layout/transaction/wallet/wallet.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/transaction/wallet/wallet.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"col-sm-4\">\n        <div class=\"list-group\">\n            <a href=\"javascript:void(0)\" class=\"list-group-item active\">Ether</a>\n            <a href=\"javascript:void(0)\" class=\"list-group-item\">{{balance}}</a>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n  </div>\n  <br>\n      <div class=\"col-lg-5\">\n        <div class=\"card card-default mb-3\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-bell fa-fw\"></i> Wallets:\n            </div>\n  \n            <div class=\"card-body\">\n              <div class=\"list-group\">\n                  <form  #frm=\"ngForm\" (ngSubmit)=\"submitTransaction(frm)\">\n\n                      <div class=\"form-group\">\n                          <label for=\"disabledSelect\">To</label>\n                          <select name=\"to\" id=\"disabledSelect\" class=\"form-control\" [(ngModel)]=\"to\">\n                              <option value=\"{{wallet}}\" *ngFor=\"let wallet of wallets\">{{wallet}}</option>\n                          </select>\n                      </div>\n      \n                      <div class=\"form-group has-warning\">\n                          <label class=\"form-control-label\" for=\"inputWarning\">Ether</label>\n                          <input name=\"value\"type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\" [(ngModel)]=\"value\">\n                      </div>\n      \n                      <div>\n                          <button type=\"submit\" class=\"btn btn-primary col-lg-12\">Send</button>\n                      </div>\n                  </form>\n              </div>\n            </div>\n        </div>\n        \n        <div *ngIf=\"etat == 1\"class=\"alert alert-success\">\n            <strong>Well done!</strong> Transaction hash: {{hash}}\n        </div>\n        <div *ngIf=\"etat == 2\" class=\"alert alert-danger\">\n            <strong>Oh no!</strong> Error\n        </div>\n  \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/layout/transaction/wallet/wallet.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/transaction/wallet/wallet.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/transaction/wallet/wallet.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/transaction/wallet/wallet.component.ts ***!
  \***************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletComponent = /** @class */ (function () {
    function WalletComponent(commService, transactionService) {
        this.commService = commService;
        this.transactionService = transactionService;
        this.info = [];
        this.etat = 0;
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commService.receiveInputs().subscribe(function (data) {
            console.log("wallet");
            _this.info = data;
            console.log(_this.info);
            _this.getBalance();
        });
        this.transactionService.ethAccounts().subscribe(function (data) {
            _this.wallets = data;
        });
        this.transactionService.ethAccounts();
    };
    WalletComponent.prototype.submitTransaction = function (form) {
        var _this = this;
        console.log("submit transaction");
        console.log(this.info);
        console.log(form.value.to);
        console.log(form.value.value);
        this.transactionService.getTransactionHash(this.info[0].substring(2), form.value.to, this.info[1], form.value.value).subscribe(function (data) {
            console.log(data);
            _this.hash = data.transactionHash;
            _this.etat = 1;
            _this.getBalance();
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.etat = 2;
        });
    };
    WalletComponent.prototype.getBalance = function () {
        var _this = this;
        this.transactionService.ethBalance(this.info[0]).subscribe(function (data) { _this.balance = data; });
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/layout/transaction/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/layout/transaction/wallet/wallet.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module.js.map