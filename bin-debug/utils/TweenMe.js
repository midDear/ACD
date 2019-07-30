var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    /**
 *  缓动 类
 * @author middear
 *
 */
    var TweenMe = (function () {
        function TweenMe() {
        }
        /**
         * 给一个对象 添加缓动
         ** @param shape  添加缓动的对象
        ** @param params  添加缓动的参数
        ** @param time1  添加缓动的时间
        ** @param waittime  添加缓动的等待时间
        ** @param f  添加缓动效果函数
        ** @param loop  是否循环
        ** @param onComplete 缓动结束回调函数
        ** @param param1s 缓动结束回调函数的参数
        */
        TweenMe.to = function (shape, params, time1, waittime, f, loop, onComplete, param1s) {
            if (time1 === void 0) { time1 = 0.2; }
            if (waittime === void 0) { waittime = 0; }
            if (f === void 0) { f = egret.Ease.cubicOut; }
            if (loop === void 0) { loop = false; }
            if (onComplete === void 0) { onComplete = null; }
            if (param1s === void 0) { param1s = null; }
            if (!f)
                f = egret.Ease.cubicOut;
            TweenMe.tweenobjs.push(shape);
            var tw = egret.Tween.get(shape, {
                loop: loop,
                onChange: null,
                onChangeObj: TweenMe //更新函数作用域
            })
                .wait(waittime * 1000) //设置等待1000毫秒
                .to(params, time1 * 1000, f); //设置2000毫秒内 rotation 属性变为360
            if (onComplete != null) {
                tw.call(onComplete, TweenMe, param1s); //设置回调函数及作用域，可用于侦听动画完成
            }
            //.call(onComplete, TweenMe, param1s);//设置回调函数及作用域，可用于侦听动画完成
            // .call(onComplete, TweenMe, ["param1", { key: "key", value: 3 }]);//设置回调函数及作用域，可用于侦听动画完成
            //        egret.Ease.elasticOut   弹性缓动
            //        egret.Ease.cubicOut  三次曲线
            //        egret.Tween.removeTweens();// 删除一个对象上的全部 Tween 动画 
            //        egret.Tween.rns();  //删除所有 Tween
        };
        /**
         * Delete all Tween animations from an object 删除一个对象上的全部 Tween 动画
         */
        TweenMe.deltween = function (obj) {
            egret.Tween.removeTweens(obj);
        };
        /**
         * 删除全部 Tween 动画
         */
        TweenMe.deltweens = function () {
            egret.Tween.removeAllTweens();
        };
        TweenMe.tweenobjs = [];
        return TweenMe;
    }());
    utils.TweenMe = TweenMe;
    __reflect(TweenMe.prototype, "utils.TweenMe");
})(utils || (utils = {}));
//# sourceMappingURL=TweenMe.js.map