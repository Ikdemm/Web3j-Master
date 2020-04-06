(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/angular2-flash-messages/module/flash-message.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-message.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FlashMessage = /** @class */ (function () {
    function FlashMessage(text, cssClass, closeOnClick, showCloseBtn) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.closeOnClick = false;
        this.showCloseBtn = false;
        if (text)
            this.text = text;
        if (cssClass)
            this.cssClass = cssClass;
        if (closeOnClick)
            this.closeOnClick = closeOnClick;
        if (showCloseBtn)
            this.showCloseBtn = showCloseBtn;
    }
    FlashMessage.nextId = 0;
    return FlashMessage;
}());
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/flash-messages.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-messages.component.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var flash_message_1 = __webpack_require__(/*! ./flash-message */ "./node_modules/angular2-flash-messages/module/flash-message.js");
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
var FlashMessagesComponent = /** @class */ (function () {
    function FlashMessagesComponent(_flashMessagesService, _cdRef) {
        this._flashMessagesService = _flashMessagesService;
        this._cdRef = _cdRef;
        this._defaults = {
            text: 'default message',
            closeOnClick: false,
            showCloseBtn: false,
            cssClass: ''
        };
        this.messages = [];
        this.classes = '';
        this._grayOut = false;
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }
    FlashMessagesComponent.prototype.ngOnInit = function () { };
    FlashMessagesComponent.prototype.show = function (text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var defaults = {
            timeout: 2500,
            closeOnClick: false,
            showCloseBtn: false,
            cssClass: '',
            text: "default message"
        };
        for (var attrname in options) {
            defaults[attrname] = options[attrname];
        }
        var message = new flash_message_1.FlashMessage(text, defaults.cssClass, defaults.closeOnClick, defaults.showCloseBtn);
        message.timer = window.setTimeout(function () {
            _this._remove(message);
            _this._cdRef.detectChanges();
        }, defaults.timeout);
        this.messages.push(message);
        this._cdRef.detectChanges();
    };
    FlashMessagesComponent.prototype.close = function (message) {
        clearTimeout(message.timer);
        this._remove(message);
        this._cdRef.detectChanges();
    };
    FlashMessagesComponent.prototype.alertClicked = function (message) {
        if (message.closeOnClick) {
            this.close(message);
        }
    };
    FlashMessagesComponent.prototype.grayOut = function (value) {
        if (value === void 0) { value = false; }
        this._grayOut = value;
    };
    FlashMessagesComponent.prototype._remove = function (message) {
        this.messages = this.messages.filter(function (msg) { return msg.id !== message.id; });
    };
    FlashMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'flash-messages',
                    template: "\n      <div id=\"flashMessages\" class=\"flash-messages\">\n          <div id=\"grayOutDiv\" *ngIf='_grayOut && messages.length'></div>\n          <div class=\"alert flash-message {{message.cssClass}}\" [ngClass]=\"{'alert-dismissible':message.showCloseBtn}\" [style.cursor]=\"message.closeOnClick?'pointer':'inherit'\" *ngFor='let message of messages' (click)=\"alertClicked(message)\">\n              <button *ngIf=\"message.showCloseBtn\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"close(message)\"><span aria-hidden=\"true\">&times;</span></button>\n              <div [innerHTML]=\"message.text\"></div>\n          </div> \n      </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FlashMessagesComponent.ctorParameters = function () { return [
        { type: flash_messages_service_1.FlashMessagesService },
        { type: core_1.ChangeDetectorRef }
    ]; };
    return FlashMessagesComponent;
}());
exports.FlashMessagesComponent = FlashMessagesComponent;
//# sourceMappingURL=flash-messages.component.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/flash-messages.service.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-messages.service.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FlashMessagesService = /** @class */ (function () {
    function FlashMessagesService() {
    }
    FlashMessagesService.decorators = [
        { type: core_1.Injectable },
    ];
    return FlashMessagesService;
}());
exports.FlashMessagesService = FlashMessagesService;
//# sourceMappingURL=flash-messages.service.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(/*! ./module */ "./node_modules/angular2-flash-messages/module/module.js");
exports.FlashMessagesModule = module_1.FlashMessagesModule;
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
exports.FlashMessagesService = flash_messages_service_1.FlashMessagesService;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/module.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var flash_messages_component_1 = __webpack_require__(/*! ./flash-messages.component */ "./node_modules/angular2-flash-messages/module/flash-messages.component.js");
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
var FlashMessagesModule = /** @class */ (function () {
    function FlashMessagesModule() {
    }
    FlashMessagesModule.forRoot = function () {
        return {
            ngModule: FlashMessagesModule,
            providers: [flash_messages_service_1.FlashMessagesService]
        };
    };
    FlashMessagesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [flash_messages_component_1.FlashMessagesComponent],
                    exports: [flash_messages_component_1.FlashMessagesComponent],
                    providers: []
                },] },
    ];
    return FlashMessagesModule;
}());
exports.FlashMessagesModule = FlashMessagesModule;
//# sourceMappingURL=module.js.map

/***/ })

}]);
//# sourceMappingURL=common.js.map