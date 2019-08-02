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
/**
*  Bitmap 创建 类
* @author middear
*
*/
var utils;
(function (utils) {
    var MyBitmap = (function (_super) {
        __extends(MyBitmap, _super);
        function MyBitmap(url, func, ths) {
            var _this = _super.call(this) || this;
            _this.path = url;
            _this.backfunc = func;
            _this.backths = ths;
            _this.init();
            return _this;
        }
        MyBitmap.prototype.init = function () {
            this.imageLoader = new egret.ImageLoader();
            this.imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
            this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.loadERROR, this);
            this.imageLoader.load(this.path);
        };
        MyBitmap.prototype.loadCompleteHandler = function (event) {
            var imageLoader = event.currentTarget;
            // var bitmap: egret.Bitmap = new egret.Bitmap(imageLoader.data);
            // this.addChild(bitmap);
            // this.bitmapData = imageLoader.data;
            var texture = new egret.Texture();
            texture.bitmapData = imageLoader.data;
            this.texture = texture;
            if (this.backfunc) {
                this.backfunc(this.backths, 1, this);
            }
            this.smoothing = true;
            this.gc();
        };
        MyBitmap.prototype.loadERROR = function (e) {
            if (this.backfunc) {
                this.backfunc(this.backths, 0, this);
            }
        };
        MyBitmap.prototype.gc = function () {
            if (this && this.imageLoader) {
                this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
                this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadERROR, this);
                this.imageLoader = null;
            }
        };
        return MyBitmap;
    }(egret.Bitmap));
    utils.MyBitmap = MyBitmap;
    __reflect(MyBitmap.prototype, "utils.MyBitmap");
})(utils || (utils = {}));
