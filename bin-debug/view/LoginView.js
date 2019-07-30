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
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui/login.exml";
        return _this;
    }
    LoginView.prototype.initUi = function () {
        this.resize();
        this.title["title"].text = "新用户注册";
    };
    LoginView.prototype.addEvents = function () {
        this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
    };
    LoginView.prototype.tapBack = function (e) {
        this.gc();
    };
    LoginView.prototype.onLogin = function (e) {
        if (this.account.text.length >= 4 && this.password.text.length >= 4) {
            utils.T.trace("onLogin", this.password.text);
            var obj = {
                username: this.account.text,
                password: this.password.text,
            };
            GetData.login(obj, function (code, res) {
                utils.T.trace("login", code, res);
            });
            // RequestMethod.post("",{},(code,data)=>{
            // test_2_1
            // })
        }
    };
    LoginView.prototype.onRegister = function (e) {
        this.gc();
        var parent = this.parent;
        var ui = new RegisterView();
        parent.addChild(ui);
        ui.y = -30;
        ui.alpha = 0;
        utils.TweenMe.to(ui, { y: ui.y + 30, alpha: 1 }, 0.8);
    };
    LoginView.prototype.removeEvents = function () {
        this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
    };
    return LoginView;
}(BasicView));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map