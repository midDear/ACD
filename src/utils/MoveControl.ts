module utils {
    /**
     * @author middear
     * 移动控制类
     */
    export class MoveControl {

        private moveobj: egret.DisplayObject;  //需要移动的对象
        private minmovex: number = 50;   //最小移动距离
        private minWid: number = 0;
        private startx: number = 0;
        private starty: number = 0;
        private endx: number = 0;
        private endy: number = 0;
        private moveX: number = 0;
        private moveY: number = 0;
        private temp: number = 0;

        private time: number = 150;
        private _fnLength: number = 6;
        private isdown = false;
        private backfunc: Function;

        //    private tap6: neoges.PanGesture;
        //    private startPoint: egret.Point;

        private ths: any;
        private startpoint: egret.Point;

        /**
         * 移动控制类
         * @param obj 添加控制的对象
         * @param backfunc 回调函数
         * @param ths 回调作用域
         * @param p 起始位置
         */
        public constructor(obj: egret.DisplayObject, backfunc: Function, ths: any, p: egret.Point = null) {
            this.moveobj = obj;
            this.backfunc = backfunc;
            this.ths = ths;
            this.startpoint = p;
            this.addevent();
        }

        private addevent() {

            //        this.tap6 = new neoges.PanGesture(this.moveobj);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegan, this);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanUpdate, this);
            this.moveobj.addEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);

            //        this.tap6.addEventListener(neoges.GestureEvent.BEGAN,this.onPanBegan,this);
            //        this.tap6.addEventListener(neoges.GestureEvent.UPDATE,this.onPanUpdate,this);
            //        this.tap6.addEventListener(neoges.GestureEvent.ENDED,this.onPanEnd,this);
        }
        /**pan*/
        private onPanBegan(event: egret.TouchEvent): void {

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
            T.trace("move:", this.startx, this.starty);
            /*记录手指点击屏幕时,屏幕轮播图此时的位置 在这里初始化*/
            this.temp = 0;
            // this.backfunc(this.ths, this.temp, this.moveX, this.moveY, false);
            this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false);
        }
        /**pan*/
        private onPanUpdate(event: egret.TouchEvent): void {
            //                T.trace("rotation update ",event.value);
            if (!this.isdown) return;
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
            } else {
                // this.backfunc(this.ths,this.temp,{startx:this.startx,starty:this.starty,endx:this.endx,endy:this.endy,movex:this.moveX,movey:this.moveY},false);
                this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
            }
        }
        /**pan*/
        private onPanEnd(event: egret.TouchEvent): void {
            if (!this.isdown) return;
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
                } else {    /*这里就是方向问题判断 向左*/
                }
            }
            else {
            }
            if (Math.abs(this.moveX) > 10 && Math.abs(this.moveY) > 10) {
                this.backfunc(this.ths, this.temp, { stageX: event.stageX, stageY: event.stageY, startx: this.startx, starty: this.starty, endx: this.endx, endy: this.endy, movex: this.moveX, movey: this.moveY }, false, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
                // this.backfunc(this.ths, this.temp, this.moveX, this.moveY, true, this.angleAndSize({ x: this.startx, y: this.starty }, { x: this.endx, y: this.endy }));
            }
        }

        private _fnAnimate(tag, i) {
            tag.stop(true, false).animate({ "left": i }, this.time);
        }
        public angleAndSize(start, end): Object {
            var diff_x: number = (end.x - start.x),
                diff_y: number = (end.y - start.y);
            var angle: number = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
            var size: number = Math.pow((diff_x * diff_x + diff_y * diff_y), 0.5);
            if (diff_y >= 0 && diff_x >= 0) {
                angle = 360 - angle;
            } else if (diff_y >= 0 && diff_x <= 0) {
                angle = 180 - angle;
            } else if (diff_y < 0 && diff_x <= 0) {
                angle = 180 - angle;
            } else if (diff_y < 0 && diff_x >= 0) {
                angle = Math.abs(angle);
            }
            //返回角度,不是弧度
            return { angle: angle, size: size };
        }

        public gc(): void {
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegan, this);
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanUpdate, this);
            this.moveobj.removeEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);

            //        this.tap6.removeEventListener(neoges.GestureEvent.BEGAN,this.onPanBegan,this);
            //        this.tap6.removeEventListener(neoges.GestureEvent.UPDATE,this.onPanUpdate,this);
            //        this.tap6.removeEventListener(neoges.GestureEvent.ENDED,this.onPanEnd,this);
        }
    }
}