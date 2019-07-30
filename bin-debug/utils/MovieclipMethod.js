var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
*  MovieClip 静态创建 类
* @author middear
*
*/
var utils;
(function (utils) {
    var MovieclipMethod = (function () {
        function MovieclipMethod() {
        }
        /**
             * 创建一个新的 MovieClip
               ** @param jsonstr  json资源
                ** @param texturestr  纹理资源
                 创建movieclip a(JSON)  b("stay_png")
                 */
        MovieclipMethod.newMC = function (jsonstr, texturestr) {
            var data = RES.getRes(jsonstr); //JSON  
            var texture = RES.getRes(texturestr); //Texture  
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
            //        mc.frameRate = 50;//每秒帧序列次数  
            //        mc.gotoAndPlay(0);  
            return mc;
        };
        return MovieclipMethod;
    }());
    utils.MovieclipMethod = MovieclipMethod;
    __reflect(MovieclipMethod.prototype, "utils.MovieclipMethod");
})(utils || (utils = {}));
//# sourceMappingURL=MovieclipMethod.js.map