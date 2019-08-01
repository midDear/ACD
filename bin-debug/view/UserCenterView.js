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
    var UserCenterView = (function (_super) {
        __extends(UserCenterView, _super);
        function UserCenterView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.bf = _bf;
            _this.skinName = "resource/eui/UserCenterPage.exml";
            return _this;
        }
        UserCenterView.prototype.initUi = function () {
            this.resize(0, this.stage.stageHeight - 100);
        };
        UserCenterView.prototype.addEvents = function () {
        };
        UserCenterView.prototype.removeEvents = function () {
        };
        UserCenterView.prototype.gc = function (b) {
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
        return UserCenterView;
    }(view.BasicView));
    view.UserCenterView = UserCenterView;
    __reflect(UserCenterView.prototype, "view.UserCenterView");
})(view || (view = {}));
//# sourceMappingURL=UserCenterView.js.map