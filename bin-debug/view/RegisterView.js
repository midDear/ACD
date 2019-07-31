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
var view;
(function (view) {
    /**
 * 输出语句
 * @author middear
 *
 */
    var RegisterView = (function (_super) {
        __extends(RegisterView, _super);
        function RegisterView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/register.exml";
            return _this;
        }
        RegisterView.prototype.initUi = function () {
            this.resize();
        };
        RegisterView.prototype.addEvents = function () {
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
        };
        RegisterView.prototype.tapBack = function (e) {
            this.gc();
        };
        RegisterView.prototype.onLogin = function (e) {
            this.gc();
            var parent = this.parent;
            var ui = new view.LoginView();
            parent.addChild(ui);
            ui.y = -30;
            ui.alpha = 0;
            utils.TweenMe.to(ui, { y: ui.y + 30, alpha: 1 }, 0.8);
        };
        RegisterView.prototype.onRegister = function (e) {
            var _this = this;
            if (this.user_name.text.length < 2) {
                return;
            }
            if (this.password.text.length < 2) {
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
                if (code == 1) {
                    if (_this.bf)
                        _this.bf();
                }
            });
        };
        RegisterView.prototype.removeEvents = function () {
            this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
        };
        RegisterView.prototype.gc = function (b) {
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
        return RegisterView;
    }(view.BasicView));
    view.RegisterView = RegisterView;
    __reflect(RegisterView.prototype, "view.RegisterView");
})(view || (view = {}));
//# sourceMappingURL=RegisterView.js.map