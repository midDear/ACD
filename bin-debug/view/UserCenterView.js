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
    var UserCenterView = (function (_super) {
        __extends(UserCenterView, _super);
        function UserCenterView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/UserCenterPage.exml";
            return _this;
        }
        UserCenterView.prototype.initUi = function () {
            this.resize();
            this.initTitle();
            this.upData();
        };
        UserCenterView.prototype.initTitle = function () {
            this.title["back"].visible = true;
            this.title["label"].text = "个人中心";
        };
        UserCenterView.prototype.upData = function () {
            this.name.text = Global.datas.userInfo.real_name;
            this.country.text = Global.datas.userInfo.country;
            this.account.text = Global.datas.userInfo.username;
        };
        UserCenterView.prototype.tapBack = function (e) {
            if (e.currentTarget == this.title["back"]) {
                if (this.bf)
                    this.bf(this);
            }
            else if (e.currentTarget == this.quit) {
                window.localStorage.removeItem("token");
                Global.datas.userInfo = null;
                if (this.bf)
                    this.bf(this, "quit");
            }
        };
        UserCenterView.prototype.addEvents = function () {
            this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        UserCenterView.prototype.removeEvents = function () {
            this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            this.quit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        UserCenterView.prototype.gc = function (b) {
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
        return UserCenterView;
    }(view.BasicView));
    view.UserCenterView = UserCenterView;
    __reflect(UserCenterView.prototype, "view.UserCenterView");
})(view || (view = {}));
//# sourceMappingURL=UserCenterView.js.map