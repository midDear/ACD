var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Config = (function () {
    function Config() {
    }
    Config.init = function (pan) {
        if (pan) {
            Config.con = pan;
            Config.stageWidth = pan.stage.stageWidth;
            Config.stageHeight = pan.stage.stageHeight;
            utils.T.trace(Config.stageWidth, Config.stageHeight);
            Config.setmode(pan);
        }
    };
    /**
    *  设置舞台模式
    */
    Config.setmode = function (pan) {
        pan.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
        pan.stage.frameRate = 30; //获取并设置舞台的帧速率。NO_BORDER
        pan.stage.maxTouches = 5; //设置屏幕同时可以触摸的数量。
        pan.stage.orientation = egret.OrientationMode.LANDSCAPE; //应用始终保持竖屏模式，即横屏看时，屏幕由左往右看。
        // GlobalValue.stage.setContentSize(400,800);  //应用始终保持竖屏模式，即横屏看时，屏幕由左往右看。
        pan.stage.addEventListener(egret.Event.RESIZE, Config.resize, Config);
    };
    /**
    *  重置舞台大小
    * @param e
    */
    Config.resize = function (e) {
        Config.stageWidth = Config.con.stage.stageWidth;
        Config.stageHeight = Config.con.stage.stageHeight;
        if (Config.con["upSize"])
            Config.con["upSize"]();
        utils.T.trace("changeSize:", Config.stageWidth, Config.stageHeight);
    };
    Config.tweenTo = function (shape, params, t, t2, f, loop, onComplete) {
        if (t === void 0) { t = 0.2; }
        if (t2 === void 0) { t2 = 0; }
        if (f === void 0) { f = egret.Ease.cubicOut; }
        if (loop === void 0) { loop = false; }
        if (onComplete === void 0) { onComplete = null; }
        if (!f)
            f = egret.Ease.cubicOut;
        Config.tweenobjs.push(shape);
        var tw = egret.Tween.get(shape, {
            loop: loop,
            onChange: null,
            onChangeObj: Config //更新函数作用域
        })
            .to(params, t * 1000, f) //设置2000毫秒内 rotation 属性变为360
            .wait(t2 * 1000); //设置等待1000毫秒
        if (onComplete != null)
            tw.call(onComplete, Config, [shape, { key: "key", value: 3 }]); //设置回调函数及作用域，可用于侦听动画完成
        //        egret.Ease.elasticOut   弹性缓动
        //        egret.Ease.cubicOut  三次曲线
        //        egret.Tween.removeTweens();// 删除一个对象上的全部 Tween 动画 
        //        egret.Tween.rns();  //删除所有 Tween
        function deltween() {
            // for(var i: number = 0;i < MainControl.tweenobjs.length;i++) {
            //     if(!MainControl.tweenobjs[i]) {
            //     MainControl.tweenobjs.splice(i,1);
            // } else
            //  {
            //     if(!MainControl.tweenobjs[i].stage) {
            //         egret.Tween.removeTweens(MainControl.tweenobjs[i]);
            //         MainControl.tweenobjs.splice(i,1);
            //     }
            // }   
        }
        //        egret.Tween.removeTweens();  // 删除一个对象上的全部 Tween 动画 
        //       
    };
    Config.stageWidth = 1080;
    Config.stageHeight = 640;
    Config.tweenobjs = [];
    return Config;
}());
__reflect(Config.prototype, "Config");
