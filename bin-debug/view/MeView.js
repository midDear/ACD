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
var MeView = (function (_super) {
    __extends(MeView, _super);
    function MeView() {
        var _this = _super.call(this) || this;
        _this.startTime = 24 * 60 * 660 * 1000;
        _this.skinName = "resource/eui/Me.exml";
        return _this;
    }
    MeView.prototype.initUi = function () {
        var _this = this;
        this.resize();
        utils.T.trace("initUi");
        this.arcShape = new egret.Shape();
        var r = 140;
        this.arcShape.anchorOffsetX = r;
        this.arcShape.anchorOffsetY = r;
        utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 600);
        var dd = 0;
        setInterval(function () {
            _this.startTime -= 1000;
            _this.uptime(_this.uptime);
            _this.time.text = utils.stringMethod.formatDuring(_this.startTime);
        }, 1000);
    };
    MeView.prototype.uptime = function (t) {
        var r = 140;
        var dd = 360 * (1 - (t / (24 * 60 * 60 * 1000)));
        this.arcShape.graphics.clear();
        this.arcShape.graphics.lineStyle(10, 0xff0000, 0.8, true);
        this.arcShape.graphics.drawArc(50, 50, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true); //从起始点顺时针画弧到终点
    };
    MeView.prototype.addEvents = function () {
    };
    MeView.prototype.removeEvents = function () {
    };
    return MeView;
}(BasicView));
__reflect(MeView.prototype, "MeView");
//# sourceMappingURL=MeView.js.map