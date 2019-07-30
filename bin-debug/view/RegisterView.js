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
var RegisterView = (function (_super) {
    __extends(RegisterView, _super);
    function RegisterView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui/register.exml";
        return _this;
    }
    RegisterView.prototype.initUi = function () {
        this.resize();
        this.title["title"].text = "账号登入";
    };
    RegisterView.prototype.addEvents = function () {
        this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
    };
    RegisterView.prototype.tapBack = function (e) {
        this.gc();
    };
    RegisterView.prototype.onLogin = function (e) {
        this.gc();
        var parent = this.parent;
        var ui = new LoginView();
        parent.addChild(ui);
        ui.y = -30;
        ui.alpha = 0;
        utils.TweenMe.to(ui, { y: ui.y + 30, alpha: 1 }, 0.8);
    };
    RegisterView.prototype.onRegister = function (e) {
        if (this.user_name.text.length < 2) {
            return;
        }
        if (this.password.text.length < 2) {
            return;
        }
        if (this.password.text != this.password_sure.text) {
            return;
        }
        if (this.user_phone.text.length < 2) {
            return;
        }
        if (this.invitation_code.text.length < 2) {
            return;
        }
        if (this.account.text.length < 2) {
            return;
        }
        if (this.country.text.length < 2) {
            return;
        }
        var obj = {
            username: this.user_name.text,
            password: this.password.text,
            phone: this.user_phone.text,
            invite_name: this.invitation_code.text,
            real_name: this.account.text,
            country: this.country.text,
        };
        GetData.register(obj, function (code, res) {
            utils.T.trace("register", code, res);
        });
    };
    RegisterView.prototype.removeEvents = function () {
        this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
    };
    return RegisterView;
}(BasicView));
__reflect(RegisterView.prototype, "RegisterView");
//# sourceMappingURL=RegisterView.js.map