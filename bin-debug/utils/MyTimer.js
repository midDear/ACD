var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    /**
     * ...计时器
     * @author middear
     *
     */
    var MyTimer = (function () {
        /**
         * ...计时器
         ** @param ths  计时作用域
        ** @param _delay  计时帧频 秒 0.02
        ** @param _repeat  重复次数
        ** @param param  执行的回调函数名
        */
        function MyTimer(ths, _delay, _repeat, param) {
            if (_delay === void 0) { _delay = 1; }
            if (_repeat === void 0) { _repeat = 0; }
            if (param === void 0) { param = ""; }
            this.count = 0;
            //        T.trace("callBack-->"+f);
            this.callobj = ths;
            this.delay = _delay * 1000;
            this.par = param;
            // if (param.length > 0) {
            //     //        	T.trace("MyTimer flag is "+ flag);
            // }
            this.repeatCount = _repeat;
            this.addTimer();
            this.start();
        }
        Object.defineProperty(MyTimer.prototype, "currentCount", {
            /**
            * @return  返回当前运行的次数
            */
            get: function () {
                return this.count;
            },
            enumerable: true,
            configurable: true
        });
        MyTimer.prototype.addTimer = function () {
            this.removeTimer();
            this.timer = new egret.Timer(this.delay, this.repeatCount);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.handleTimerFuncton, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleTimeOver, this);
        };
        /**
        *  重置 计时器事件间的延迟时间（秒）
        * @param value 计时器事件间的延迟时间（秒）
        */
        MyTimer.prototype.restdelay = function (value) {
            this.rest();
            this.delay = value * 1000;
            this.timer.delay = this.delay;
            this.start();
        };
        /**
        * 暂停
        */
        MyTimer.prototype.stop = function () {
            if (this.timer) {
                if (this.timer.running) {
                    this.timer.stop();
                }
            }
        };
        /**
        * 开始
        */
        MyTimer.prototype.start = function () {
            if (!this.timer.running) {
                this.timer.start();
            }
            //trace("timer.currentCount="+timer.currentCount);
        };
        /**
        * 重置
        */
        MyTimer.prototype.rest = function () {
            this.count = 0;
            this.timer.reset();
        };
        MyTimer.prototype.handleTimeOver = function (e) {
            //        this.dispatchEvent(new MyEvent(TIME_COMPLETE));
        };
        MyTimer.prototype.handleTimerFuncton = function (e) {
            this.count++;
            //        T.trace("MyTimer flag is ",this.callobj[this.par]);
            this.callobj[this.par](this.callobj);
            e.updateAfterEvent();
        };
        MyTimer.prototype.removeTimer = function () {
            if (this.timer) {
                this.stop();
                if (this.timer.hasEventListener(egret.TimerEvent.TIMER)) {
                    this.timer.removeEventListener(egret.TimerEvent.TIMER, this.handleTimerFuncton, this);
                    this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleTimeOver, this);
                }
                this.timer = null;
                this.count = 0;
            }
        };
        /**
        * 销毁Timer
        */
        MyTimer.prototype.GC = function () {
            this.removeTimer();
            this.timer = null;
            this.callobj = null;
        };
        return MyTimer;
    }());
    utils.MyTimer = MyTimer;
    __reflect(MyTimer.prototype, "utils.MyTimer");
})(utils || (utils = {}));
