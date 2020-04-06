(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smart-contract-smart-contract-module"],{

/***/ "./src/app/layout/smart-contract/smart-contract-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/smart-contract/smart-contract-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SmartContractRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartContractRoutingModule", function() { return SmartContractRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smart_contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-contract.component */ "./src/app/layout/smart-contract/smart-contract.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _smart_contract_component__WEBPACK_IMPORTED_MODULE_2__["SmartContractComponent"]
    }
];
var SmartContractRoutingModule = /** @class */ (function () {
    function SmartContractRoutingModule() {
    }
    SmartContractRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SmartContractRoutingModule);
    return SmartContractRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/smart-contract/smart-contract.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/smart-contract/smart-contract.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div [@routerTransition]>\n<br>\n  <div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n          <h4 class=\"card-title\">Smart contract code</h4>\n        </div>\n        <div class=\"card-body\">\n          <div id=\"typography\">\n            <div class=\"row\">\n              <div class=\"tim-typo\">\n                <blockquote class=\"blockquote\">\n                  <p>\n                    pragma solidity ^0.4.16;\n                    <br> contract HelloWorld {{ '{' }}\n                    <br> uint256 counter = 5;\n                    <br> function add() public {{ '{' }}\n                    <br> counter++;\n                    <br> }\n                    <br> function subtract() public {{ '{' }}\n                    <br> counter--;\n                    <br> }\n                    <br> function getCounter() public constant returns (uint256) {{ '{' }}\n                    <br> return counter;\n                    <br> }\n                    <br> }\n                  </p>\n                </blockquote>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"open(content,wallet)\">Deploy</button>\n    <a (click)=\"get_counter()\" class=\"btn btn-info btn-round\" *ngIf=(ok)>Get_counter</a>\n    <a (click)=\"add_counter()\" class=\"btn btn-info btn-round\" *ngIf=(ok)>Add_counter</a>\n    <a (click)=\"substract_counter()\" class=\"btn btn-info btn-round\" *ngIf=(ok)>Substract_counter</a>\n    <br> <br>\n\n    <div>\n      <p class=\"btn btn-success btn-round\" *ngIf=(get)>Counter is : {{counter}}</p>\n    </div>\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Login</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n      </div>\n      <div class=\"modal-body\">\n              <div class=\"alert alert-danger\" *ngIf=\"!passwordvalid\">\n                      <strong>{{ errorLogin }}</strong> \n                  </div>\n          <div class=\"form-group row\">\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Wallet</label>\n              <div class=\"col-10\">\n                <select name=\"selectedHash\" id=\"disabledSelect\" class=\"form-control\"[(ngModel)]=\"selectedHash\">\n                  <option value=\"{{wallet}}\" *ngFor=\"let wallet of wallets\" >{{wallet}}</option>\n              </select>              \n            </div>\n            </div> <div class=\"form-group row\">\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Pass\n              </label>\n              <div class=\"col-10\">\n                <input id=\"example-text-input\" name=\"pass\" type=\"password\" class=\"col-10 col-form-label\" [(ngModel)]=\"pass\"/>\n              </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-secondary pull-right\" (click)=\"c('Close click')\">Close</button>\n  \n            <button type=\"button\" class=\"btn btn-primary \" (click)=\"submit()\">Deploy</button>\n  \n  \n      </div>\n      \n  </ng-template>\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/layout/smart-contract/smart-contract.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/smart-contract/smart-contract.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/smart-contract/smart-contract.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/smart-contract/smart-contract.component.ts ***!
  \*******************************************************************/
/*! exports provided: SmartContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartContractComponent", function() { return SmartContractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmartContractComponent = /** @class */ (function () {
    function SmartContractComponent(commService, smartContractService, modalService, flashMessage, transactionService) {
        this.commService = commService;
        this.smartContractService = smartContractService;
        this.modalService = modalService;
        this.flashMessage = flashMessage;
        this.transactionService = transactionService;
        this.passwordvalid = true;
        this.info = [];
        this.ok = false;
        this.get = false;
    }
    SmartContractComponent.prototype.ngOnInit = function () {
        this.get_counter;
    };
    SmartContractComponent.prototype.open = function (content, hash) {
        var _this = this;
        this.getAccounts();
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SmartContractComponent.prototype.getDismissReason = function (reason) {
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
    SmartContractComponent.prototype.getAccounts = function () {
        var _this = this;
        this.transactionService.ethAccounts().subscribe(function (data) {
            _this.wallets = data;
            console.log(_this.wallets);
        });
    };
    SmartContractComponent.prototype.submit = function () {
        var _this = this;
        console.log('connect');
        console.log(this.selectedHash);
        console.log(this.pass);
        this.transactionService.getCreds(this.selectedHash.substring(2), this.pass).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                _this.passwordvalid = false;
                _this.errorLogin = "Wrong password ! ";
                console.log("password invalid");
            }
            else {
                console.log("connected");
                _this.info.push(_this.selectedHash);
                _this.info.push(_this.pass);
                console.log(_this.info);
                _this.commService.sendInputs(_this.info);
                _this.smartContractService.deploy_contract(_this.selectedHash.substring(2), _this.pass).subscribe(function (data) {
                    console.log(data);
                    _this.smartContract = data;
                    _this.modalRef.close();
                    console.log("success");
                    _this.ok = true;
                }, function (error) {
                    _this.passwordvalid = false;
                    _this.errorLogin = "Not enough gas";
                    console.log("No gas fund");
                });
            }
        });
    };
    SmartContractComponent.prototype.get_counter = function () {
        var _this = this;
        this.smartContractService.getcounter(this.smartContract.contractAddress, this.selectedHash.substring(2), this.pass).subscribe(function (data) {
            _this.counter = data;
            _this.get = true;
        });
    };
    SmartContractComponent.prototype.add_counter = function () {
        var _this = this;
        this.smartContractService.add_counter(this.smartContract.contractAddress, this.selectedHash.substring(2), this.pass).subscribe(function (data) {
            _this.counter = data;
            _this.get_counter();
        });
    };
    SmartContractComponent.prototype.substract_counter = function () {
        var _this = this;
        this.smartContractService.substract_counter(this.smartContract.contractAddress, this.selectedHash.substring(2), this.pass).subscribe(function (data) {
            _this.counter = data;
            _this.get_counter();
        });
    };
    SmartContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-contract',
            template: __webpack_require__(/*! ./smart-contract.component.html */ "./src/app/layout/smart-contract/smart-contract.component.html"),
            styles: [__webpack_require__(/*! ./smart-contract.component.scss */ "./src/app/layout/smart-contract/smart-contract.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["SmartContractService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]])
    ], SmartContractComponent);
    return SmartContractComponent;
}());



/***/ }),

/***/ "./src/app/layout/smart-contract/smart-contract.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/smart-contract/smart-contract.module.ts ***!
  \****************************************************************/
/*! exports provided: SmartContractModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartContractModule", function() { return SmartContractModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _smart_contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-contract.component */ "./src/app/layout/smart-contract/smart-contract.component.ts");
/* harmony import */ var _smart_contract_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-contract-routing.module */ "./src/app/layout/smart-contract/smart-contract-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







;
var SmartContractModule = /** @class */ (function () {
    function SmartContractModule() {
    }
    SmartContractModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _smart_contract_routing_module__WEBPACK_IMPORTED_MODULE_3__["SmartContractRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot(),
            ],
            declarations: [_smart_contract_component__WEBPACK_IMPORTED_MODULE_2__["SmartContractComponent"]]
        })
    ], SmartContractModule);
    return SmartContractModule;
}());



/***/ })

}]);
//# sourceMappingURL=smart-contract-smart-contract-module.js.map