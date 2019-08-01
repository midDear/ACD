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
            this.upData();
            this.arcShape = new egret.Shape();
            var r = 140;
            this.arcShape.anchorOffsetX = r;
            this.arcShape.anchorOffsetY = r;
            this.uptime(this.startTime);
            utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 752 + r);
            this.timeT = setInterval(function () {
                if (_this.startTime >= 0) {
                    if (_this.startTime % 100000 == 0)
                        _this.uptime(_this.startTime);
                    _this.time.text = utils.stringMethod.formatDuring(_this.startTime);
                }
                else {
                    clearInterval(_this.timeT);
                }
                _this.startTime -= 1000;
                Global.datas.surplusTime = _this.startTime;
            }, 1000);
        };
        IndexView.prototype.upData = function () {
            this.acd.text = Global.datas.userInfo.balance;
        };
        IndexView.prototype.uptime = function (t) {
            var r = 140;
            var dd = 360 * (1 - (t / (24 * 60 * 60 * 1000)));
            this.arcShape.graphics.clear();
            this.arcShape.graphics.lineStyle(12, 0xffffff, 0.8, true);
            this.arcShape.graphics.drawArc(r, 0, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true); //从起始点顺时针画弧到终点
        };
        IndexView.prototype.tapSignIn_btn = function (e) {
            GetData.signIn({}, function (code, res) {
                res = JSON.parse(res);
                if (code == 1 && res.code == 20000) {
                    utils.T.trace("signIn-", res);
                }
            });
        };
        IndexView.prototype.addEvents = function () {
            this.signIn_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSignIn_btn, this);
        };
        IndexView.prototype.removeEvents = function () {
            clearInterval(this.timeT);
            this.signIn_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSignIn_btn, this);
        };
        return IndexView;
    }(view.BasicView));
    view.IndexView = IndexView;
    __reflect(IndexView.prototype, "view.IndexView");
})(view || (view = {}));
//# sourceMappingURL=IndexView.js.map