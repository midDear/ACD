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
        function IndexView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.startTime = 24 * 60 * 660 * 1000;
            _this.timeT = 0;
            _this.skinName = "resource/eui/IndexView.exml";
            _this.bf = _bf;
            return _this;
        }
        IndexView.prototype.initUi = function () {
            this.resize(0, this.stage.stageHeight - 100);
            utils.T.trace("initUi");
            this.upData();
            this.arcShape = new egret.Shape();
            var r = 140;
            this.arcShape.anchorOffsetX = r;
            this.arcShape.anchorOffsetY = r;
            this.uptime(this.startTime);
            utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 752 + r);
        };
        IndexView.prototype.upData = function () {
            var str = Global.datas.balanceInfo.base_profit + Global.datas.balanceInfo.extra_profit + "";
            this.acd.text = str.slice(0, str.indexOf(".") + 3);
            this.startTime = parseInt("" + Global.datas.balanceInfo.remain_time * 0.001) * 1000;
            this.initTime();
        };
        IndexView.prototype.initTime = function () {
            var _this = this;
            if (this.startTime > 0) {
                this.signIn_btn.visible = false;
                this.time.text = utils.stringMethod.formatDuring(this.startTime);
                clearInterval(this.timeT);
                this.timeT = setInterval(function () {
                    _this.upacd();
                }, 1000);
            }
            else {
            }
        };
        IndexView.prototype.upacd = function () {
            var _this = this;
            if (this.startTime >= 0) {
                if (this.startTime % 100000 == 0)
                    this.uptime(this.startTime);
                this.time.text = utils.stringMethod.formatDuring(this.startTime);
            }
            else {
                clearInterval(this.timeT);
            }
            this.startTime -= 1000;
            Global.datas.surplusTime = this.startTime;
            GetData.getBalanceInfo({}, function (code, res) {
                res = JSON.parse(res);
                if (code == 1 && res.code == 20000) {
                    Global.datas.balanceInfo = res.data;
                    _this.upData();
                }
            });
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