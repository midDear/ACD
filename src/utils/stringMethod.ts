module utils {
    /**
     * ...计时器
     * @author middear
     *
     */
    export class stringMethod {
        public constructor() {
        }

        public static numToString(value: number): string {
            var aa: number = 10000;
            var bi: number = 0.0001;
            var txt = "";

            // if (value > aa * 10000) {
            //     txt = "" + utils.stringMethod.getStrLen(String(value * bi * bi), 3) + "亿";kw
            // }else

            if (value >= aa * 1000) {
                txt = "" + utils.stringMethod.getStrLen(String(value * bi * 0.001), 3) + "千万";
            }
            else if (value >= aa) {
                txt = "" + utils.stringMethod.getStrLen(String(value * bi), 3) + "万";
            }
            else if (value >= 1000) {
                txt = "" + utils.stringMethod.getStrLen(String(value * 0.001),  3) + "千";
            } else {
                txt = "" + value;
            }
            return txt;
        }

        //	追加或获取指定长度的字符串
        public static getLenStr(str: string, len: number = 2, a: string = "0"): string {
            var _str: string = str;

            while (_str.length < len) {
                _str = a + _str;
            }

            while (_str.length > len) {
                _str = _str.slice(0, len);
            }

            return _str;
        }
        /**
         * 保留数字的后几位有效数
         */
        public static getStrLen(str: string, len: number = 2, aa: string = "."): string {
            var _str: string = str
            if (str.indexOf(aa) >= 0) {
                _str = str.slice(0, str.indexOf(aa) + len);

                while (_str.slice(-1) == "0") {
                    _str = _str.slice(0, -1);
                }
                while (_str.slice(-1) == ".") {
                    _str = _str.slice(0, -1);
                }
            }
            return _str;
        }

        /**
             * 去除字符串手尾空白
             */
        public static delete_blank(str: string): string {
            var reg_head: RegExp = /^\W+/;  //^\s*/g
            var reg_end: RegExp = /\W+$/;
            var ss: string = str.replace(reg_head, "").replace(reg_end, "");
            // var ss: string = str.replace(/^\s*|\s*$/g,'');
            // var ss: string = str.replace(/^\s*(.*?)\s*$/,'$1');
            // T.trace("string:",ss);
            return ss;
        }
        /**
             * 随机函数
             * @param start 开始整数
             * @param end   结束整数
             * @param nums  返回整数的长度
             * @return 
             * 
             */
        public static randoms(start: number, end: number, nums: number = 0): number[] {
            var arr: number[] = [];
            var min: number = start;
            var max: number = end;
            if (min > max) {
                min = end;
                max = start;
            }
            var len: number = max - min + 1;
            if (nums == 0 || nums > len) nums = len;

            var clone: number[] = [];
            for (var i: number = min; i < max + 1; i++) {
                clone.push(i);
            }

            for (i = 0; i < nums; i++) {
                var index: number = Math.random() * clone.length;
                arr.push(clone[index]);
                clone.splice(index, 1);
            }
            clone = null;
            return arr;
        }


        /**
         * 产生随机整数，包含下限值，包括上限值
         * @param {Number} start 下限
         * @param {Number} end 上限
         * @return {Number} 返回在下限到上限之间的一个随机整数
         */
        public static randomint(start, end): number {
            return Math.floor(Math.random() * (end - start + 1)) + start;
        }

        public static formatDuring (mss:number) {
			//var days = parseInt(mss / (1000 * 60 * 60 * 24));
			var hours = Math.floor(( mss % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ))
			var minutes = Math.floor(( mss % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ))
			var seconds = Math.floor(( mss % ( 1000 * 60 ) ) / 1000)

            var _hours = ""+hours;
            var _minutes = ""+minutes;
            var _seconds = ""+seconds;

			if (hours < 10) _hours = '0' + hours
			if (minutes < 10) _minutes = '0' + minutes
			if (seconds < 10) _seconds = '0' + seconds
			return _hours + ':' + _minutes + ':' + _seconds;
		}



    }    

}
