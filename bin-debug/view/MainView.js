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
            this.mnav.name = "101";
            this.selectNav(1);
        };
        MainView.prototype.addEvents = function () {
            for (var i = 1; i <= 4; i++) {
                this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
            }
            this.mnav.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
        };
        MainView.prototype.tapNav = function (e) {
            var id = Number(e.currentTarget.name);
            if (id === 101) {
                this.showNavp();
                return;
            }
            if (this.curIndex === id) {
                return;
            }
            this.curIndex = id;
            this.selectNav(id);
            this.jumpPage(id);
        };
        MainView.prototype.jumpPage = function (id) {
            var _this = this;
            utils.T.trace("jump-id=", id, this.curIndex);
            if (id < 1)
                return;
            this.mnav.visible = (id == 1 || id >= 5);
            if (id <= 4)
                this.hideView(this.curView);
            if (id == 1) {
                if (!this.indexV)
                    this.indexV = new view.IndexView();
                this.curView = this.indexV;
            }
            else if (id == 2) {
                if (!this.communityV)
                    this.communityV = new view.CommunityView();
                this.curView = this.communityV;
            }
            else if (id == 3) {
                if (!this.teamV)
                    this.teamV = new view.TeamView();
                this.curView = this.teamV;
            }
            else if (id == 4) {
                if (!this.earmV)
                    this.earmV = new view.EarmView();
                this.curView = this.earmV;
            }
            else {
                var preV;
                if (id == 5) {
                    if (!this.earnRankV)
                        this.earnRankV = new view.EarnRankLevelView(function (ui) { _this.preViewBack(ui); });
                    preV = this.earnRankV;
                }
                else if (id == 6) {
                    if (!this.whitePaperV)
                        this.whitePaperV = new view.WhitePaperView(function (ui) { _this.preViewBack(ui); });
                    preV = this.whitePaperV;
                }
                else if (id == 7) {
                    if (!this.faqV)
                        this.faqV = new view.FAQView(function (ui) { _this.preViewBack(ui); });
                    preV = this.faqV;
                }
                else if (id == 8) {
                    if (!this.userCenterV)
                        this.userCenterV = new view.UserCenterView(function (ui) { _this.preViewBack(ui); });
                    preV = this.userCenterV;
                }
                this.showView(preV, true);
                return;
            }
            this.showView(this.curView);
        };
        MainView.prototype.preViewBack = function (ui) {
            this.hideView(ui, true);
        };
        MainView.prototype.hideView = function (v, b) {
            if (b === void 0) { b = false; }
            if (v) {
                var ui_1 = v;
                v = null;
                var fv = 1;
                if (b)
                    fv = -1;
                utils.TweenMe.to(ui_1, { x: -this.stage.stageWidth * fv, alpha: 0 }, 0.25, 0, null, false, function () {
                    if (ui_1.parent) {
                        ui_1.parent.removeChild(ui_1);
                    }
                });
            }
        };
        MainView.prototype.showView = function (v, b) {
            if (b === void 0) { b = false; }
            if (v) {
                utils.OBJ.setposition(null, v, this.stage.stageWidth, 0, 1, 0);
                if (!b) {
                    this.addChildAt(v, 1);
                }
                else {
                    this.addChild(v);
                }
                utils.TweenMe.to(v, { x: 0, alpha: 1 }, 0.45);
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
        MainView.prototype.showNavp = function () {
            var _this = this;
            if (!this.navConpane) {
                this.navConpane = new view.NavConpane(function (id) {
                    _this.hideNavp();
                    if (_this.curIndex != id) {
                        _this.curIndex = id;
                        _this.selectNav(id);
                        _this.jumpPage(id);
                    }
                });
            }
            utils.OBJ.setposition(this, this.navConpane, -this.stage.stageWidth, 0, 1, 0);
            utils.TweenMe.to(this.navConpane, { x: 0, alpha: 1 }, 0.45);
        };
        MainView.prototype.hideNavp = function () {
            this.hideView(this.navConpane);
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