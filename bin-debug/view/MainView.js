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
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui/MainView.exml";
            return _this;
            // this.addEventListener(egret.Event.ADDED_TO_STAGE,this.childrenCreated,this);
        }
        // protected childrenCreated(e:egret.Event=null): void {
        // 	if(e) this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.childrenCreated,this);
        // 	this.initUi();
        // 	this.addEvents();
        // }
        MainView.prototype.initUi = function () {
            var _this = this;
            this.resize();
            this.homeV = new view.HomeView(function () { _this.loginFinish(); });
            utils.OBJ.setposition(this, this.homeV, 0, 30, 1, 0);
            utils.TweenMe.to(this.homeV, { y: 0, alpha: 1 }, 0.45);
            this.initNavs();
        };
        MainView.prototype.loginFinish = function () {
            utils.T.trace("loginFinish");
            this.homeV.gc();
            this.homeV = null;
            this.jumpPage(1);
            utils.TweenMe.to(this.indexV, { y: 0, alpha: 1 }, 0.45);
        };
        MainView.prototype.initNavs = function () {
            this.nav_data = [
                { icon: "icon_home_png", icon_off: "icon_home_off_png", label: "首页" },
                { icon: "icon_chat_png", icon_off: "icon_chat_off_png", label: "社区" },
                { icon: "icon_peo_png", icon_off: "icon_peo_off_png", label: "团队" },
                { icon: "icon_acd_png", icon_off: "icon_acd_off_png", label: "Earn" }
            ];
            for (var i = 1; i <= 4; i++) {
                this["nav" + i].icon.source = this.nav_data[i - 1].icon;
                this["nav" + i].label.text = this.nav_data[i - 1].label;
                this["nav" + i].touchChildren = false;
                this["nav" + i].touchEnabled = true;
                this["nav" + i].name = i;
            }
            this.selectNav(1);
        };
        MainView.prototype.addEvents = function () {
            for (var i = 1; i <= 4; i++) {
                this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
            }
        };
        MainView.prototype.tapNav = function (e) {
            var id = Number(e.currentTarget.name);
            if (this.curIndex === id) {
                return;
            }
            this.curIndex = id;
            this.selectNav(id);
            this.jumpPage(id);
        };
        MainView.prototype.jumpPage = function (id) {
            this.hideCurView();
            if (id == 1) {
                if (!this.indexV)
                    this.indexV = new view.IndexView();
                this.curView = this.indexV;
            }
            else if (id == 2) {
            }
            else if (id == 3) {
            }
            else if (id == 4) {
                if (!this.earmV)
                    this.earmV = new view.EarmView();
                this.curView = this.earmV;
            }
            else if (id == 5) {
            }
            else if (id == 6) {
            }
            else if (id == 7) {
                if (!this.faqV)
                    this.faqV = new view.FAQView();
                this.curView = this.faqV;
            }
            else if (id == 8) {
            }
            this.showCurView();
        };
        MainView.prototype.hideCurView = function () {
            if (this.curView) {
                var ui_1 = this.curView;
                this.curView = null;
                utils.TweenMe.to(ui_1, { x: -this.stage.stageWidth, alpha: 0 }, 0.25, 0, null, false, function () {
                    if (ui_1.parent) {
                        ui_1.parent.removeChild(ui_1);
                    }
                });
            }
        };
        MainView.prototype.showCurView = function () {
            if (this.curView) {
                utils.OBJ.setposition(null, this.curView, this.stage.stageWidth, 0, 1, 0);
                this.addChildAt(this.curView, 1);
                utils.TweenMe.to(this.curView, { x: 0, alpha: 1 }, 0.45);
            }
        };
        MainView.prototype.selectNav = function (index) {
            if (index === void 0) { index = 1; }
            for (var i = 1; i <= 4; i++) {
                if (i == index) {
                    this["nav" + i].icon.source = this.nav_data[i - 1].icon;
                    this["nav" + i].label.textColor = "0xFFD000";
                }
                else {
                    this["nav" + i].icon.source = this.nav_data[i - 1].icon_off;
                    this["nav" + i].label.textColor = "0xC0C0C0";
                }
            }
        };
        MainView.prototype.removeEvents = function () {
            for (var i = 1; i <= 4; i++) {
                this["nav" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
            }
        };
        return MainView;
    }(view.BasicView));
    view.MainView = MainView;
    __reflect(MainView.prototype, "view.MainView");
})(view || (view = {}));
//# sourceMappingURL=MainView.js.map