var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    /**
 * 输出语句
 * @author middear
 *
 */
    var OBJ = (function () {
        function OBJ() {
        }
        /**
        * 设置显示对象属性 坐标 x y scale alpha
        ** @param container  显示对象容器
        ** @param bitmap  显示对象
        ** @param x  x 坐标
        ** @param y  y 坐标
        ** @param scale  缩放
        ** @param alpha  透明度
        */
        OBJ.setposition = function (container, bitmap, x, y, scale, alpha) {
            if (container === void 0) { container = null; }
            if (bitmap === void 0) { bitmap = null; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scale === void 0) { scale = 1; }
            if (alpha === void 0) { alpha = 1; }
            if (bitmap != null) {
                bitmap.x = x;
                bitmap.y = y;
                if (scale != 1) {
                    bitmap.scaleX = scale;
                    bitmap.scaleY = scale;
                }
                if (alpha != 1)
                    bitmap.alpha = alpha;
                if (container) {
                    container.addChild(bitmap);
                }
            }
        };
        /**
       * 设置显示对象 大小 坐标 x y
       ** @param bitmap  显示对象
       ** @param wid  宽
       ** @param hei  高
       ** @param obj  坐标 x y {x:5,y:5}
       */
        OBJ.setWH = function (bitmap, wid, hei, obj) {
            if (wid === void 0) { wid = 0; }
            if (hei === void 0) { hei = 0; }
            if (obj === void 0) { obj = null; }
            if (bitmap != null) {
                if (obj != null) {
                    if (obj["x"] != null)
                        bitmap.x = obj["x"];
                    if (obj["y"] != null)
                        bitmap.y = obj["y"];
                }
                bitmap.width = wid;
                bitmap.height = hei;
            }
        };
        OBJ.addToContainer = function (pan, e, x, y) {
            pan.addChild(e);
            e.x = x;
            e.y = y;
        };
        return OBJ;
    }());
    utils.OBJ = OBJ;
    __reflect(OBJ.prototype, "utils.OBJ");
})(utils || (utils = {}));
