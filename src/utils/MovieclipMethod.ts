/**
*  MovieClip 静态创建 类
* @author middear
*
*/
module utils {


        export class MovieclipMethod {
                /**
                     * 创建一个新的 MovieClip
                       ** @param jsonstr  json资源
                        ** @param texturestr  纹理资源
                         创建movieclip a(JSON)  b("stay_png")
                         */
                public static newMC(jsonstr: string, texturestr: string): egret.MovieClip {
                        var data = RES.getRes(jsonstr);//JSON  
                        var texture: egret.Texture = RES.getRes(texturestr);//Texture  
                        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
                        var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData());
                        //        mc.frameRate = 50;//每秒帧序列次数  
                        //        mc.gotoAndPlay(0);  
                        return mc;
                }
        }
}
