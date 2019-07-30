
module utils {
	/**
 *  缓动 类
 * @author middear
 *
 */

	export class TweenMe {

		public static tweenobjs: Array<egret.DisplayObject> = [];
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
		public static to(shape: egret.DisplayObject, params: Object, time1: number = 0.2, waittime: number = 0, f: Function = egret.Ease.cubicOut, loop: boolean = false, onComplete: Function = null, param1s: any = null): void {
			if (!f) f = egret.Ease.cubicOut;
			
			TweenMe.tweenobjs.push(shape);
			var tw = egret.Tween.get(shape, {
				loop: loop,//设置循环播放
				onChange: null,//设置更新函数onChange
				onChangeObj: TweenMe//更新函数作用域
			})
				.wait(waittime * 1000)//设置等待1000毫秒
				.to(params, time1 * 1000, f);//设置2000毫秒内 rotation 属性变为360
			if (onComplete != null) {
				tw.call(onComplete, TweenMe, param1s);//设置回调函数及作用域，可用于侦听动画完成
			}
			//.call(onComplete, TweenMe, param1s);//设置回调函数及作用域，可用于侦听动画完成
			// .call(onComplete, TweenMe, ["param1", { key: "key", value: 3 }]);//设置回调函数及作用域，可用于侦听动画完成

			//        egret.Ease.elasticOut   弹性缓动
			//        egret.Ease.cubicOut  三次曲线
			//        egret.Tween.removeTweens();// 删除一个对象上的全部 Tween 动画 

			//        egret.Tween.rns();  //删除所有 Tween

			
		}

		/**
		 * Delete all Tween animations from an object 删除一个对象上的全部 Tween 动画
		 */
		public static deltween(obj) {
			egret.Tween.removeTweens(obj);
		}

		/**
		 * 删除全部 Tween 动画
		 */
		public static deltweens() {
			egret.Tween.removeAllTweens();
		}
	}
}