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
    var WhitePaperView = (function (_super) {
        __extends(WhitePaperView, _super);
        function WhitePaperView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/WhitePaperPage.exml";
            return _this;
        }
        WhitePaperView.prototype.initUi = function () {
            this.resize();
            this.initTitle();
        };
        WhitePaperView.prototype.initTitle = function () {
            this.title["back"].visible = true;
            this.title["label"].text = "白皮书";
        };
        WhitePaperView.prototype.tapBack = function (e) {
            if (this.bf)
                this.bf(this);
        };
        WhitePaperView.prototype.addEvents = function () {
            this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        WhitePaperView.prototype.removeEvents = function () {
            this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        WhitePaperView.prototype.gc = function (b) {
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
        return WhitePaperView;
    }(view.BasicView));
    view.WhitePaperView = WhitePaperView;
    __reflect(WhitePaperView.prototype, "view.WhitePaperView");
})(view || (view = {}));
