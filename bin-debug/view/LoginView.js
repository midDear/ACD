var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView(_bf) {
        if (_bf === void 0) { _bf = null; }
        var _this = _super.call(this) || this;
        _this.bf = _bf;
        _this.skinName = "resource/eui/login.exml";
        return _this;
    }
    LoginView.prototype.initUi = function () {
        this.resize();
    };
    LoginView.prototype.addEvents = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    LoginView.prototype.tapBack = function (e) {
        this.gc();
    };
    LoginView.prototype.onLogin = function (e) {
        var _this = this;
        if (this.account.text.length >= 4 && this.password.text.length >= 4) {
            utils.T.trace("onLogin", this.password.text);
            var obj = {
                username: this.account.text,
                password: this.password.text,
            };
            GetData.login(obj, function (code, res) {
                utils.T.trace("login", code, res);
                if (code == 1) {
                    if (_this.bf)
                        _this.bf();
                }
            });
        }
    };
    LoginView.prototype.removeEvents = function () {
        this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    LoginView.prototype.gc = function (b) {
        var _this = this;
        if (b === void 0) { b = false; }
        this.removeEvents();
        if (this.parent) {
            if (b) {
                if (this.parent) {
                    this.parent.removeChild(this);
                }
            }
            else {
                utils.TweenMe.to(this, { x: this.stage.stageWidth, alpha: 0 }, 0.45, 0, null, false, function () {
                    if (_this.parent) {
                        _this.parent.removeChild(_this);
                    }
                });
            }
        }
    };
    return LoginView;
}(BasicView));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map