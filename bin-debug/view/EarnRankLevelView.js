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
    var EarnRankLevelView = (function (_super) {
        __extends(EarnRankLevelView, _super);
        function EarnRankLevelView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.childs = [];
            _this.bf = _bf;
            _this.skinName = "resource/eui/EarnRankLevelPage.exml";
            return _this;
        }
        EarnRankLevelView.prototype.initUi = function () {
            this.resize();
            this.initTitle();
            this.upData();
        };
        EarnRankLevelView.prototype.initTitle = function () {
            this.title["back"].visible = true;
            this.title["label"].text = "等级";
        };
        EarnRankLevelView.prototype.upData = function () {
            this.name.text = Global.datas.userInfo.real_name;
            this.country.text = Global.datas.userInfo.country;
            this.acd.text = "ACD: " + (Global.datas.balanceInfo.base_profit + Global.datas.balanceInfo.extra_profit);
            for (var i = 0; i <= 9; i++) {
                this["level" + i].level.text = "Level " + (i + 1);
                this["level" + i].name = "" + (i + 1);
                this["level" + i].touchEnabled = true;
                this["level" + i].touchChildren = false;
                if (this.childs.length > i) {
                    this["level" + i].tatal.text = this.childs[i].tatal + "";
                }
            }
        };
        EarnRankLevelView.prototype.tapLevel = function (e) {
            var id = Number(e.currentTarget.name);
            if (id >= 1) {
                var ui = new view.ListContainer(null, this.childs[id - 1]);
                this.addChild(ui);
                utils.OBJ.setposition(this, ui, this.stage.stageWidth, 0, 1, 0);
                utils.TweenMe.to(ui, { x: 0, alpha: 1 }, 0.45);
            }
        };
        EarnRankLevelView.prototype.tapBack = function (e) {
            if (this.bf)
                this.bf(this);
        };
        EarnRankLevelView.prototype.addEvents = function () {
            this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            for (var i = 0; i <= 9; i++) {
                if (this.childs.length > i)
                    this["level" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapLevel, this);
            }
        };
        EarnRankLevelView.prototype.removeEvents = function () {
            this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
            for (var i = 0; i <= 9; i++) {
                if (this.childs.length > i)
                    this["level" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapLevel, this);
            }
        };
        EarnRankLevelView.prototype.gc = function (b) {
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
        return EarnRankLevelView;
    }(view.BasicView));
    view.EarnRankLevelView = EarnRankLevelView;
    __reflect(EarnRankLevelView.prototype, "view.EarnRankLevelView");
})(view || (view = {}));
//# sourceMappingURL=EarnRankLevelView.js.map