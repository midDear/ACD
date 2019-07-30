var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var shapeMethod = (function () {
    function shapeMethod() {
    }
    //    创建Sprite
    shapeMethod.imgSprite = function (nam) {
        var bit = this.imgBitmap(name);
        var sprite = shapeMethod.NewSprite(bit.width, bit.height, 0x0000000, 0, 0);
        sprite.addChild(bit);
        return sprite;
    };
    //    创建Bitmap
    shapeMethod.imgBitmap = function (name) {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(name);
        if (bitmap.width < 1)
            utils.T.trace("资源文件不存在--> " + name);
        //        console.log("bitmapSize-->",bitmap.width,bitmap.height);
        return bitmap;
    };
    /**
    * 绘制指定大小的矩形egret.Shape
    * @param wid  宽
    * @param hei  高
    * @param alphas 透明度
    * @param color  颜色
    * @param roundRadius  圆角大小
    * @param align  0（左上角）1（中心）
    * @return Shape
    */
    shapeMethod.newshape = function (wid, hei, alphas, color, roundRadius, align) {
        if (wid === void 0) { wid = 800; }
        if (hei === void 0) { hei = 600; }
        if (alphas === void 0) { alphas = 1; }
        if (color === void 0) { color = 0xffffff; }
        if (roundRadius === void 0) { roundRadius = 0; }
        if (align === void 0) { align = 0; }
        var shape = new egret.Shape();
        shape.graphics.beginFill(color, alphas);
        if (align == 0) {
            shape.graphics.drawRoundRect(0, 0, wid, hei, roundRadius);
        }
        else if (align == 1) {
            shape.graphics.drawRoundRect(-0.5 * wid, -0.5 * hei, wid, hei, roundRadius);
        }
        shape.graphics.endFill();
        //bd.dispose();
        shape.alpha = alphas;
        return shape;
    };
    /**
   * 绘制指定大小的矩形egret.Shape
   * @param wid  宽
   * @param hei  高
   * @param alphas 透明度
   * @param color  颜色
   * @param roundRadius  圆角大小
   * @param align  0（左上角）1（中心）
   * @return Shape
   */
    shapeMethod.newshapeFZ = function (wid, hei, alphas, color, roundRadius, align) {
        if (wid === void 0) { wid = 800; }
        if (hei === void 0) { hei = 600; }
        if (alphas === void 0) { alphas = 1; }
        if (color === void 0) { color = 0xffffff; }
        if (roundRadius === void 0) { roundRadius = 0; }
        if (align === void 0) { align = 0; }
        var shape = new egret.Shape();
        shape.graphics.beginFill(color, alphas);
        shape.graphics.cubicCurveTo(0, 0, wid, hei, wid * 0.1, hei - wid * 0.1);
        //        if(align == 0) {
        //            shape.graphics.drawRoundRect(0,0,wid,hei,roundRadius);
        //        }
        //
        //        else if(align == 1) {
        //            shape.graphics.drawRoundRect(-0.5 * wid,-0.5 * hei,wid,hei,roundRadius);
        //
        //        }
        shape.graphics.endFill();
        return shape;
    };
    /**
    * 绘制指定大小的椭圆Sprite
    * @wid  宽
    * @hei  高
    * @alphas 透明度
    * @color  颜色
    * @roundRadius  圆角大小
    * @align  0（左上角）1（中心）
    * @return egret.Shape
    */
    shapeMethod.newEllipseSprite = function (wid, hei, alphas, color, align) {
        if (wid === void 0) { wid = 800; }
        if (hei === void 0) { hei = 600; }
        if (alphas === void 0) { alphas = 1; }
        if (color === void 0) { color = 0xffffff; }
        if (align === void 0) { align = 0; }
        var shape = new egret.Sprite();
        shape.graphics.beginFill(color, alphas);
        if (align == 0) {
            shape.graphics.drawEllipse(0, 0, wid, hei);
        }
        else if (align == 1) {
            shape.graphics.drawEllipse(-0.5 * wid, -0.5 * hei, wid, hei);
        }
        shape.graphics.endFill();
        //bd.dispose();
        shape.alpha = alphas;
        return shape;
    };
    shapeMethod.newLoad = function (r1, r2, color, fan, du) {
        if (r1 === void 0) { r1 = 10; }
        if (r2 === void 0) { r2 = 30; }
        if (color === void 0) { color = 0xffaabb; }
        if (fan === void 0) { fan = false; }
        if (du === void 0) { du = 320; }
        var shape = new egret.Shape();
        var xx = 0;
        var yy = 0;
        for (var i = 0; i < du; i++) {
            xx = r2 * Math.sin(Math.PI * i / 180);
            yy = r2 * Math.cos(Math.PI * i / 180);
            if (fan) {
                shape.graphics.beginFill(color, (i) / 360);
            }
            else {
                shape.graphics.beginFill(color, (du - i) / 360);
            }
            shape.graphics.drawEllipse(-(0.5 * r1) + xx, -(0.5 * r1) + yy, r1, r1);
            shape.graphics.endFill();
        }
        return shape;
    };
    /**
    * 绘制指定大小的CloseSprite
    * @param wid      宽
    * @param hei      高
    * @param align    对齐方式 0（左上角）1（中心）
    * @param color1        背景颜色
    * @param color2        线条颜色
    * @param alphas    透明度
    * @return
    */
    shapeMethod.newEllipseCloseSP = function (wid, hei, align, color1, color2, alphas) {
        if (wid === void 0) { wid = 60; }
        if (hei === void 0) { hei = 60; }
        if (align === void 0) { align = 0; }
        if (color1 === void 0) { color1 = 0xafafaf; }
        if (color2 === void 0) { color2 = 0xffffff; }
        if (alphas === void 0) { alphas = 1; }
        var shape = new egret.Sprite();
        shape.graphics.beginFill(color1, alphas);
        var line1 = this.drawLine(3, wid * 0.6, 45, color2, 1);
        var line2 = this.drawLine(3, wid * 0.6, -45, color2, 1);
        shape.addChild(line1);
        shape.addChild(line2);
        var num = 3;
        if (align == 0) {
            shape.graphics.drawEllipse(0, 0, wid, hei);
            line1.x = line2.x = wid * 0.5;
            line1.y = line2.y = hei * 0.5;
        }
        else if (align == 1) {
            shape.graphics.drawEllipse(-0.5 * wid, -0.5 * hei, wid, hei);
        }
        shape.graphics.endFill();
        //bd.dispose();
        shape.alpha = alphas;
        return shape;
    };
    /**
    * 绘制线条
    * @param dess 线条粗细
    * @param color1 线条颜色
    * @param len 线条长度
    * @param rt 旋转度数
    * @param align 对齐0（左上角）1（中心）
    * @return
    */
    shapeMethod.drawLine = function (dess, len, rt, color1, align) {
        if (dess === void 0) { dess = 1; }
        if (len === void 0) { len = 30; }
        if (rt === void 0) { rt = 0; }
        if (color1 === void 0) { color1 = 0xffffff; }
        if (align === void 0) { align = 0; }
        var shape = new egret.Shape();
        shape.graphics.beginFill(color1);
        shape.graphics.lineStyle(dess, color1);
        if (align == 0) {
            shape.graphics.lineTo(0, 0);
            shape.graphics.lineTo(0, len);
        }
        else if (align == 1) {
            shape.graphics.lineTo(0, -len * 0.5);
            shape.graphics.lineTo(0, len * 0.5);
        }
        shape.graphics.endFill();
        shape.rotation = rt;
        return shape;
    };
    /**
    * 绘制指定大小的Sprite
    * @param wid
    * @param hei
    * @param color
    * @param alp
    * @param align 0（左上角）1（中心）
    * @return
    *
    */
    shapeMethod.NewSprite = function (wid, hei, color, alp, align) {
        if (wid === void 0) { wid = 800; }
        if (hei === void 0) { hei = 600; }
        if (color === void 0) { color = 0xffffff; }
        if (alp === void 0) { alp = 0.3; }
        if (align === void 0) { align = 0; }
        var shape = new egret.Sprite();
        shape.graphics.lineStyle(0, 0xffffff, 0);
        shape.graphics.beginFill(color, alp);
        if (align == 0)
            shape.graphics.drawRect(0, 0, wid, hei);
        else if (align == 1) {
            shape.graphics.drawRect(-wid * 0.5, -hei * 0.5, wid, hei);
        }
        shape.graphics.endFill();
        return shape;
    };
    /**
    * 绘制指定大小的 边框
    * @param w  边框的宽
    * @param h  边框的高
    * @param color   边框的颜色
    * @param thickness   边框的粗
    */
    shapeMethod.creatBord = function (w, h, color, thickness) {
        if (color === void 0) { color = 0xff0000; }
        if (thickness === void 0) { thickness = 2; }
        var shape = new egret.Shape();
        shape.graphics.lineStyle(thickness, color);
        shape.graphics.beginFill(0xffffff, 0);
        shape.graphics.drawRect(0, 0, w, h);
        shape.graphics.endFill();
        return shape;
    };
    /**
     * 扇形绘制
     */
    shapeMethod.drawSector = function (r, x, y) {
        //        绘制一段圆弧路径。圆弧路径的圆心在(x,y) 位置，半径为 r ，根据 anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
        //    * @param x 圆弧中心（圆心）的 x 轴坐标。
        //    * @param y 圆弧中心（圆心）的 y 轴坐标。
        //    * @param radius 圆弧的半径。
        //    * @param startAngle 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
        //    * @param endAngle 圆弧的重点， 单位以弧度表示。
        //    * @param anticlockwise 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
        if (r === void 0) { r = 50; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        //        var r: number = 50;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.moveTo(r, r); //绘制点移动(r, r)点
        shape.graphics.lineTo(r * 2, r); //画线到弧的起始点
        shape.graphics.drawArc(50, 50, 50, 0, 260 * Math.PI / 180, false); //从起始点顺时针画弧到终点
        shape.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成
        shape.graphics.endFill();
    };
    /**
    * 将显示对象分割成多个sprite
    * @param obj 显示对象
    * @param col 列数
    * @param row 行数
    * @param align 对齐方式 0(左上角) 1(中心)
    * @param bu 补全像素
    * @return Array
    */
    //    public static toshapes(obj: egret.DisplayObject,col: number = 3,row: number = 3,align: number = 0,bu: number = 0.05): Array<egret.DisplayObject> {
    //        var bunum: number = bu;
    //
    //        var arr: Array<egret.DisplayObject> = new Array();
    //        var wid: number = obj.width;
    //        var hei: number = obj.height;
    //        var minw: number = NumberMethod.numbehind(wid / col,2);
    //        var minh: number = NumberMethod.numbehind(hei / row,2);
    //        var bitmapdata: BitmapData = newBitmapFormCon(obj).bitmapData.clone();
    //        var shape: Sprite;
    //        var tx: number;
    //        var ty: number;
    //
    //        var minwb: number = numberMethod.numbehind(minw * 0.5,3);
    //        var minhb: number = numberMethod.numbehind(minh * 0.5,3);
    //
    //        for(var i: number = 0;i < row;i++) {
    //            ty = -i * minh;
    //            for(var j: number = 0;j < col;j++) {
    //                tx = -j * minw;
    //                shape = new idsprite();
    //
    //                if(align == 0) {
    //                    shape.graphics.beginBitmapFill(bitmapdata,new egret.Matrix(1,0,0,1,tx,ty),false,true);
    //                    shape.graphics.drawRect(0,0,minw,minh);
    //                }
    //                else if(align == 1) {
    //                    shape.graphics.beginBitmapFill(bitmapdata,new egret.Matrix(1,0,0,1,tx - minwb,ty - minhb),false,true);
    //                    shape.graphics.drawRect(-minwb,-minhb,minw + bunum,minh + bunum);
    //                }
    //                shape.graphics.endFill();
    //
    //                shape.x = -tx;
    //                shape.y = -ty;
    //                //					trace(tx,ty,shape.width,shape.height,minw,minh);
    //                arr.push(shape);
    //            }
    //        }
    //        return arr;
    //    }                                       
    /**
    *绘制渐变矩形
    * @param wid 矩形的宽
    * @param hei 矩形的高
    * @param ellipse 圆角
    * @param c1   渐变颜色1
    * @param c2   渐变颜色2
    * @return
    */
    shapeMethod.drawGradientegretShape = function (wid, hei, ellipse, c1, c2) {
        if (wid === void 0) { wid = 30; }
        if (hei === void 0) { hei = 30; }
        if (ellipse === void 0) { ellipse = 0; }
        if (c1 === void 0) { c1 = 0xFFFFFF; }
        if (c2 === void 0) { c2 = 0xa5a5a5; }
        var shape = new egret.Shape();
        //        var fillType: String = GradientType.LINEAR;
        var fillType = egret.GradientType.LINEAR;
        var colors = [c1, c2];
        var alphas = [1, 1];
        var ratios = [0x00, 0xFF];
        var matr = new egret.Matrix();
        matr.createGradientBox(20, hei * 0.6, Math.PI / 2, 0, 0); //SpreadMethod.PAD;
        //        var spreadMethod: String = SpreadMethod.PAD;
        //        shape.graphics.beginGradientFill(fillType,colors,alphas,ratios,matr,spreadMethod);
        shape.graphics.beginGradientFill(fillType, colors, alphas, ratios, matr);
        shape.graphics.drawRoundRect(0, 0, wid, hei, ellipse);
        return shape;
    };
    return shapeMethod;
}());
__reflect(shapeMethod.prototype, "shapeMethod");
//# sourceMappingURL=shapeMethod.js.map