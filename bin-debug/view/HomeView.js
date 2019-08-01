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
    var HomeView = (function (_super) {
        __extends(HomeView, _super);
        function HomeView(_bf) {
            if (_bf === void 0) { _bf = null; }
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui/Home.exml";
            _this.bf = _bf;
            return _this;
        }
        HomeView.prototype.initUi = function () {
            this.resize();
        };
        HomeView.prototype.addEvents = function () {
            this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
            this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
        };
        HomeView.prototype.onLogin = function (e) {
            this.addLogin();
        };
        HomeView.prototype.onRegister = function (e) {
            this.addRegister();
        };
        HomeView.prototype.addLogin = function () {
            var _this = this;
            if (this.loginV)
                this.loginV.gc();
            this.loginV = new view.LoginView(function () { _this.loginBF(); });
            utils.OBJ.setposition(this, this.loginV, this.stage.stageWidth, 0, 1, 0);
            utils.TweenMe.to(this.loginV, { x: 0, alpha: 1 }, 0.45);
        };
        HomeView.prototype.addRegister = function () {
            var _this = this;
            if (this.registerV)
                this.registerV.gc();
            this.registerV = new view.RegisterView(function () { _this.registerBF; });
            // this.addChild(this.registerV);
            utils.OBJ.setposition(this, this.registerV, this.stage.stageWidth, 0, 1, 0);
            utils.TweenMe.to(this.registerV, { x: 0, alpha: 1 }, 0.45);
        };
        HomeView.prototype.loginBF = function () {
            if (this.bf)
                this.bf();
        };
        HomeView.prototype.registerBF = function () {
        };
        HomeView.prototype.resize = function (w, h) {
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
            if (this.loginV) {
                if (this.loginV.stage) {
                    this.loginV.resize();
                }
            }
            if (this.registerV) {
                if (this.registerV.stage) {
                    this.registerV.resize();
                }
            }
        };
        HomeView.prototype.removeEvents = function () {
            if (this.loginV)
                this.loginV.gc(true);
            if (this.registerV)
                this.registerV.gc(true);
            this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
            this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
        };
        return HomeView;
    }(view.BasicView));
    view.HomeView = HomeView;
    __reflect(HomeView.prototype, "view.HomeView");
})(view || (view = {}));
//# sourceMappingURL=HomeView.js.map