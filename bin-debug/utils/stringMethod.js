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
    var stringMethod = (function () {
        function stringMethod() {
        }
        stringMethod.numToString = function (value) {
            var aa = 10000;
            var bi = 0.0001;
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
                txt = "" + utils.stringMethod.getStrLen(String(value * 0.001), 3) + "千";
            }
            else {
                txt = "" + value;
            }
            return txt;
        };
        //	追加或获取指定长度的字符串
        stringMethod.getLenStr = function (str, len, a) {
            if (len === void 0) { len = 2; }
            if (a === void 0) { a = "0"; }
            var _str = str;
            while (_str.length < len) {
                _str = a + _str;
            }
            while (_str.length > len) {
                _str = _str.slice(0, len);
            }
            return _str;
        };
        /**
         * 保留数字的后几位有效数
         */
        stringMethod.getStrLen = function (str, len, aa) {
            if (len === void 0) { len = 2; }
            if (aa === void 0) { aa = "."; }
            var _str = str;
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
        };
        /**
             * 去除字符串手尾空白
             */
        stringMethod.delete_blank = function (str) {
            var reg_head = /^\W+/; //^\s*/g
            var reg_end = /\W+$/;
            var ss = str.replace(reg_head, "").replace(reg_end, "");
            // var ss: string = str.replace(/^\s*|\s*$/g,'');
            // var ss: string = str.replace(/^\s*(.*?)\s*$/,'$1');
            // T.trace("string:",ss);
            return ss;
        };
        /**
             * 随机函数
             * @param start 开始整数
             * @param end   结束整数
             * @param nums  返回整数的长度
             * @return
             *
             */
        stringMethod.randoms = function (start, end, nums) {
            if (nums === void 0) { nums = 0; }
            var arr = [];
            var min = start;
            var max = end;
            if (min > max) {
                min = end;
                max = start;
            }
            var len = max - min + 1;
            if (nums == 0 || nums > len)
                nums = len;
            var clone = [];
            for (var i = min; i < max + 1; i++) {
                clone.push(i);
            }
            for (i = 0; i < nums; i++) {
                var index = Math.random() * clone.length;
                arr.push(clone[index]);
                clone.splice(index, 1);
            }
            clone = null;
            return arr;
        };
        /**
         * 产生随机整数，包含下限值，包括上限值
         * @param {Number} start 下限
         * @param {Number} end 上限
         * @return {Number} 返回在下限到上限之间的一个随机整数
         */
        stringMethod.randomint = function (start, end) {
            return Math.floor(Math.random() * (end - start + 1)) + start;
        };
        stringMethod.formatDuring = function (mss) {
            //var days = parseInt(mss / (1000 * 60 * 60 * 24));
            var hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((mss % (1000 * 60)) / 1000);
            var _hours = "" + hours;
            var _minutes = "" + minutes;
            var _seconds = "" + seconds;
            if (hours < 10)
                _hours = '0' + hours;
            if (minutes < 10)
                _minutes = '0' + minutes;
            if (seconds < 10)
                _seconds = '0' + seconds;
            return _hours + ':' + _minutes + ':' + _seconds;
        };
        return stringMethod;
    }());
    utils.stringMethod = stringMethod;
    __reflect(stringMethod.prototype, "utils.stringMethod");
})(utils || (utils = {}));
//# sourceMappingURL=stringMethod.js.map