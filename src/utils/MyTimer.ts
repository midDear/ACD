

module utils {
    /**
     * ...计时器
     * @author middear
     *
     */

    export class MyTimer {

        private timer: egret.Timer;
        private repeatCount: number;
        private delay: number;
        private count: number = 0;
        private callobj;
        private par: string;

            /**
             * ...计时器
             ** @param ths  计时作用域
            ** @param _delay  计时帧频 秒 0.02
            ** @param _repeat  重复次数
            ** @param param  执行的回调函数名
            */
        public constructor(ths, _delay: number = 1, _repeat: number = 0, param: string = "") {
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

        /**
        * @return  返回当前运行的次数
        */
        public get currentCount(): number {
            return this.count;
        }

        private addTimer(): void {
            this.removeTimer();
            this.timer = new egret.Timer(this.delay, this.repeatCount);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.handleTimerFuncton, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleTimeOver, this);
        }

        /**
        *  重置 计时器事件间的延迟时间（秒）
        * @param value 计时器事件间的延迟时间（秒）
        */
        public restdelay(value: number): void {
            this.rest();
            this.delay = value * 1000;
            this.timer.delay = this.delay;
            this.start();
        }
        /**
        * 暂停
        */
        public stop(): void {
            if (this.timer) {
                if (this.timer.running) {
                    this.timer.stop();
                }
            }
        }

        /**
        * 开始
        */
        public start(): void {
            if (!this.timer.running) {
                this.timer.start();
            }
            //trace("timer.currentCount="+timer.currentCount);
        }

        /**
        * 重置
        */
        public rest(): void {
            this.count = 0;
            this.timer.reset();
        }

        private handleTimeOver(e: egret.TimerEvent): void {
            //        this.dispatchEvent(new MyEvent(TIME_COMPLETE));
        }

        private handleTimerFuncton(e: egret.TimerEvent): void {
            this.count++;
            //        T.trace("MyTimer flag is ",this.callobj[this.par]);
            this.callobj[this.par](this.callobj);
            e.updateAfterEvent();
        }


        private removeTimer(): void {
            if (this.timer) {
                this.stop();
                if (this.timer.hasEventListener(egret.TimerEvent.TIMER)) {
                    this.timer.removeEventListener(egret.TimerEvent.TIMER, this.handleTimerFuncton, this);
                    this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleTimeOver, this);
                }
                this.timer = null;
                this.count = 0;
            }

        }
        /**
        * 销毁Timer
        */
        public GC(): void {
            this.removeTimer();
            this.timer = null;
            this.callobj = null;
        }

    }
}
