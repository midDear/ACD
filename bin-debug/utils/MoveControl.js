var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    /**
     * @author middear
     * 移动控制类
     */
    var MoveControl = (function () {
        /**
         * 移动控制类
         * @param obj 添加控制的对象
         * @param backfunc 回调函数
         * @param ths 回调作用域
         * @param p 起始位置
         */
        function MoveControl(obj, backfunc, ths, p) {
            if (p === void 0) { p = null; }
            this.minmovex = 50; //最小移动距离
            this.minWid = 0;
            this.startx = 0;
            this.starty = 0;
            this.endx = 0;
            this.endy = 0;
            this.moveX = 0;
            this.moveY = 0;
            this.temp = 0;
            this.time = 150;
            this._fnLength = 6;
            this.isdown = false;
            this.moveobj = obj;
            this.backfunc = backfunc;
            this.ths = ths;
            this.startpoint = p;
            this.addevent();
        }
        MoveControl.prototype.addevent = function () {
            //        this.tap6 = new neoges.PanGesture(this.moveobj);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegan, this);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanUpdate, this);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            //        this.tap6.addEventListener(neoges.GestureEvent.BEGAN,this.onPanBegan,this);
            //        this.tap6.addEventListener(neoges.GestureEvent.UPDATE,this.onPanUpdate,this);
            //        this.tap6.addEventListener(neoges.GestureEvent.ENDED,this.onPanEnd,this);
        };
        /**pan*/
        MoveControl.prototype.onPanBegan = function (event) {
            this.isdown = true;
            //        T.trace("pan began on "+event.host.name);
            //        this.startPoint = new egret.Point(event.host.x,event.host.y);
            //        this.startPoint = new egret.Point(event.offsetX,event.offsetY);
            this.startx = event.stageX;
            this.starty = event.stageY;
            if (this.startpoint != null) {
                this.startx = this.startpoint.x;
                this.starty = this.startpoint.y;
            }
            utils.T.trace("move:", this.startx, this.starty);
            /*记录手指点击屏幕时,屏幕轮播图此时的位置 在这里初始化*/
            this.temp = 0;
            // this.backfunc(this.ths, this.temp, this.moveX, this.moveY, false);
            this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false);
        };
        /**pan*/
        MoveControl.prototype.onPanUpdate = function (event) {
            //                T.trace("rotation update ",event.value);
            if (!this.isdown)
                return;
            this.endx = event.stageX;
            this.endy = event.stageY;
            this.moveX = this.endx - this.startx;
            this.moveY = this.endx - this.starty;
            this.temp = 1;
            //        T.trace("rotation update ",this.endy);
            if (this.endy < 10) {
                this.isdown = false;
                this.temp = 2;
                this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
                // this.backfunc(this.ths, this.temp, this.moveX, this.moveY, true, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
            }
            else {
                // this.backfunc(this.ths,this.temp,{startx:this.startx,starty:this.starty,endx:this.endx,endy:this.endy,movex:this.moveX,movey:this.moveY},false);
                this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
            }
        };
        /**pan*/
        MoveControl.prototype.onPanEnd = function (event) {
            if (!this.isdown)
                return;
            this.endx = event.stageX;
            this.endy = event.stageY;
            this.moveX = this.endx - this.startx;
            this.moveY = this.endx - this.starty;
            this.isdown = false;
            /*手指离开之后，手开始到结束的距离*/
            this.temp = 2;
            /*这里就是方向问题判断 向右*/
            if (Math.abs(this.moveX) > this.minmovex) {
                if (this.moveX > 0) {
                }
                else {
                }
            }
            else {
            }
            if (Math.abs(this.moveX) > 10 && Math.abs(this.moveY) > 10) {
                this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
                // this.backfunc(this.ths, this.temp, this.moveX, this.moveY, true, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
            }
        };
        MoveControl.prototype._fnAnimate = function (tag, i) {
            tag.stop(true, false).animate({ "left": i }, this.time);
        };
        MoveControl.prototype.angleAndSize = function (start, end) {
            var diff_x = (end.x - start.x), diff_y = (end.y - start.y);
            var angle = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
            var size = Math.pow((diff_x * diff_x + diff_y * diff_y), 0.5);
            if (diff_y >= 0 && diff_x >= 0) {
                angle = 360 - angle;
            }
            else if (diff_y >= 0 && diff_x <= 0) {
                angle = 180 - angle;
            }
            else if (diff_y < 0 && diff_x <= 0) {
                angle = 180 - angle;
            }
            else if (diff_y < 0 && diff_x >= 0) {
                angle = Math.abs(angle);
            }
            //返回角度,不是弧度
            return { angle: angle, size: size };
        };
        MoveControl.prototype.gc = function () {
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegan, this);
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanUpdate, this);
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            //        this.tap6.removeEventListener(neoges.GestureEvent.BEGAN,this.onPanBegan,this);
            //        this.tap6.removeEventListener(neoges.GestureEvent.UPDATE,this.onPanUpdate,this);
            //        this.tap6.removeEventListener(neoges.GestureEvent.ENDED,this.onPanEnd,this);
        };
        return MoveControl;
    }());
    utils.MoveControl = MoveControl;
    __reflect(MoveControl.prototype, "utils.MoveControl");
})(utils || (utils = {}));
//# sourceMappingURL=MoveControl.js.map