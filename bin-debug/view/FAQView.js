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
    var FAQView = (function (_super) {
        __extends(FAQView, _super);
        function FAQView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/FAQPage.exml";
            return _this;
        }
        FAQView.prototype.initUi = function () {
            this.resize();
            this.initTitle();
        };
        FAQView.prototype.initTitle = function () {
            this.title["back"].visible = true;
            this.title["label"].text = "FAQ";
        };
        FAQView.prototype.tapBack = function (e) {
            if (this.bf)
                this.bf(this);
        };
        FAQView.prototype.addEvents = function () {
            this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        FAQView.prototype.removeEvents = function () {
            this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        };
        FAQView.prototype.gc = function (b) {
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
        return FAQView;
    }(view.BasicView));
    view.FAQView = FAQView;
    __reflect(FAQView.prototype, "view.FAQView");
})(view || (view = {}));
