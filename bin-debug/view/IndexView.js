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
    var IndexView = (function (_super) {
        __extends(IndexView, _super);
        function IndexView() {
            var _this = _super.call(this) || this;
            _this.startTime = 24 * 60 * 660 * 1000;
            _this.timeT = 0;
            _this.skinName = "resource/eui/IndexView.exml";
            return _this;
        }
        IndexView.prototype.initUi = function () {
            var _this = this;
            this.resize(0, this.stage.stageHeight - 100);
            utils.T.trace("initUi");
            this.arcShape = new egret.Shape();
            var r = 140;
            this.arcShape.anchorOffsetX = r;
            this.arcShape.anchorOffsetY = r;
            utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 752 + r);
            var dd = 0;
            this.timeT = setInterval(function () {
                _this.startTime -= 1000;
                if (_this.startTime >= 0) {
                    _this.uptime(_this.startTime);
                    _this.time.text = utils.stringMethod.formatDuring(_this.startTime);
                }
                else {
                    clearInterval(_this.timeT);
                }
            }, 100);
        };
        IndexView.prototype.uptime = function (t) {
            var r = 140;
            var dd = 360 * (1 - (t / (24 * 60 * 60 * 1000)));
            this.arcShape.graphics.clear();
            this.arcShape.graphics.lineStyle(12, 0xffffff, 0.8, true);
            this.arcShape.graphics.drawArc(r, 0, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true); //从起始点顺时针画弧到终点
        };
        IndexView.prototype.addEvents = function () {
        };
        IndexView.prototype.removeEvents = function () {
            clearInterval(this.timeT);
        };
        return IndexView;
    }(view.BasicView));
    view.IndexView = IndexView;
    __reflect(IndexView.prototype, "view.IndexView");
})(view || (view = {}));
//# sourceMappingURL=IndexView.js.map