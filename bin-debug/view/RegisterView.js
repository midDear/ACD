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
            this.initCountry();
        };
        RegisterView.prototype.initCountry = function () {
            var collection = new eui.ArrayCollection();
            var data = Global.countrys();
            for (var i = 0; i < data.length; i++) {
                collection.addItem(data[i]);
            }
            this.list.dataProvider = collection;
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
            if (this.country.text.length < 6) {
                return;
            }
            var obj = {
                username: this.account.text,
                password: this.password.text,
                phone: this.list.selectedItem.code + this.user_phone.text,
                invite_name: this.invitation_code.text,
                real_name: this.user_name.text,
                country: this.list.selectedItem.name
            };
            GetData.register(obj, function (code, res) {
                // utils.T.trace("register", code, res);
                if (code == 1) {
                    res = JSON.parse(res);
                    if (res.code == 2000) {
                        _this.getUserInfo(res);
                    }
                }
            });
        };
        RegisterView.prototype.getUserInfo = function (res) {
            var _this = this;
            var _num = 0;
            Global.datas.token = res.data.token;
            window.localStorage.setItem("token", res.data.token + "as");
            GetData.getBalanceInfo({}, function (code, res) {
                res = JSON.parse(res);
                if (code == 1 && res.code == 20000) {
                    Global.datas.balanceInfo = res.data;
                    _num += 1;
                    if (_this.bf && _num >= 2)
                        _this.bf();
                }
                else {
                }
            });
            GetData.userInfo({}, function (code, res) {
                res = JSON.parse(res);
                utils.T.trace("userInfo", code == 1, code, res);
                if (code == 1 && res.code == 20000) {
                    Global.datas.userInfo = res.data;
                    _num += 1;
                    if (_this.bf && _num >= 2)
                        _this.bf();
                }
                else {
                }
            });
        };
        RegisterView.prototype.tapSle = function (e) {
            if (e === void 0) { e = null; }
            this.slePane.visible = !this.slePane.visible;
            this.arrow.scaleY = -this.arrow.scaleY;
        };
        RegisterView.prototype.changeCountry = function (e) {
            utils.T.trace("changeCountry", this.list.selectedIndex, this.list.selectedItem);
            this.country.text = this.list.selectedItem.name + "(" + this.list.selectedItem.code + ")";
            this.tapSle();
        };
        RegisterView.prototype.addEvents = function () {
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
            this.input_country_pan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSle, this);
            this.list.addEventListener(egret.Event.CHANGE, this.changeCountry, this);
        };
        RegisterView.prototype.removeEvents = function () {
            this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
            this.input_country_pan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSle, this);
            this.list.removeEventListener(egret.Event.CHANGE, this.changeCountry, this);
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
