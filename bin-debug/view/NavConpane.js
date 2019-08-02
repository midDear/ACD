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
    var NavConpane = (function (_super) {
        __extends(NavConpane, _super);
        function NavConpane(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/NavConpane.exml";
            return _this;
        }
        NavConpane.prototype.initUi = function () {
            this.resize();
            this.nav_data = [
                { icon: "icon_chat_png", label: "社区" },
                { icon: "icon_peo_png", label: "团队" },
                { icon: "icon_grade_png", label: "等级" },
                { icon: "icon_white_png", label: "白皮书" },
                { icon: "icon_faq_png", label: "FAQ" },
                { icon: "icon_usercenter_png", label: "个人中心" },
            ];
            this.nav0.touchEnabled = true;
            for (var i = 0, j = 0; i <= 8; i++) {
                if (this["nav" + i]) {
                    this["nav" + i].name = i + "";
                    if (this["nav" + i].icon) {
                        this["nav" + i].icon.source = this.nav_data[j].icon;
                        this["nav" + i].label.text = this.nav_data[j].label;
                        j += 1;
                    }
                }
            }
            this.upData();
        };
        NavConpane.prototype.upData = function () {
            this.user["account"].text = Global.datas.userInfo.username + "(" + Global.datas.userInfo.country + ")";
            this.user["phone"].text = Global.datas.userInfo.phone;
        };
        NavConpane.prototype.addEvents = function () {
            for (var i = 0; i <= 8; i++) {
                if (this["nav" + i])
                    this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
            }
        };
        NavConpane.prototype.tapNav = function (e) {
            var id = Number(e.currentTarget.name);
            if (id >= 0) {
                if (this.bf)
                    this.bf(id);
            }
        };
        NavConpane.prototype.removeEvents = function () {
        };
        NavConpane.prototype.gc = function (b) {
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
        return NavConpane;
    }(view.BasicView));
    view.NavConpane = NavConpane;
    __reflect(NavConpane.prototype, "view.NavConpane");
})(view || (view = {}));
