module utils {
	/**
 * 输出语句
 * @author middear
 *
 */

    export class OBJ {
        /**
        * 设置显示对象属性 坐标 x y scale alpha
        ** @param container  显示对象容器
        ** @param bitmap  显示对象
        ** @param x  x 坐标
        ** @param y  y 坐标
        ** @param scale  缩放
        ** @param alpha  透明度
        */
        public static setposition(container: egret.DisplayObjectContainer=null,bitmap: egret.DisplayObject=null, x: number = 0, y: number = 0, scale: number = 1, alpha: number = 1) {
            if (bitmap != null) {
                bitmap.x = x;
                bitmap.y = y;
                if (scale != 1) {
                    bitmap.scaleX = scale;
                    bitmap.scaleY = scale;
                }
                if (alpha != 1) bitmap.alpha = alpha;
                if(container){
                    container.addChild(bitmap);
                }
            }
        }
         /**
        * 设置显示对象 大小 坐标 x y 
        ** @param bitmap  显示对象
        ** @param wid  宽
        ** @param hei  高
        ** @param obj  坐标 x y {x:5,y:5}
        */
        public static setWH(bitmap: egret.DisplayObject, wid: number = 0, hei: number = 0, obj: Object = null) {
            if (bitmap != null) {
                if (obj != null) {
                    if (obj["x"] != null) bitmap.x = obj["x"];
                    if (obj["y"] != null) bitmap.y = obj["y"];
                }
                bitmap.width = wid;
                bitmap.height = hei;
            }
        }
        public static addToContainer(pan: egret.DisplayObjectContainer, e: egret.DisplayObject, x: number, y: number): void {
            pan.addChild(e);
            e.x = x;
            e.y = y;
        }
    }
}