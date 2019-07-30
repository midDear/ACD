module utils {
	/**
 * 输出语句
 * @author middear
 *
 */

	export class T {

		public static isoutput = false;
		public constructor() {
		}
		/**
		 * 输出语句
		 */
		public static trace(message?: any, ...optionalParams: any[]): void {
			console.log(message, ...optionalParams);
			if (T.isoutput) egret.log(message, ...optionalParams);
		}
		/**
		 * 弹出提示面板
		 */
		public static output(value): void {
			alert(value)
		}
	}
}
