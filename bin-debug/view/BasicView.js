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
var BasicView = (function (_super) {
    __extends(BasicView, _super);
    function BasicView() {
        return _super.call(this) || this;
        // this.childrenCreated();
    }
    BasicView.prototype.resize = function (w, h) {
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        if (this.stage) {
            this.width = this.stage.stageWidth;
            this.height = this.stage.stageHeight;
        }
        if (w != 0) {
            this.width = w;
        }
        if (h != 0) {
            this.height = h;
        }
    };
    BasicView.prototype.childrenCreated = function () {
        this.initUi();
        this.addEvents();
    };
    BasicView.prototype.initUi = function () {
    };
    BasicView.prototype.addEvents = function () {
    };
    BasicView.prototype.removeEvents = function () {
    };
    BasicView.prototype.gc = function () {
        var _this = this;
        this.removeEvents();
        if (this.parent) {
            utils.TweenMe.to(this, { y: 50, alpha: 0 }, 0.45, 0, null, false, function () {
                if (_this.parent) {
                    _this.parent.removeChild(_this);
                }
            });
        }
    };
    return BasicView;
}(eui.Component));
__reflect(BasicView.prototype, "BasicView");
//# sourceMappingURL=BasicView.js.map