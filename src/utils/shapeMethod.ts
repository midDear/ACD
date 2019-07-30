/**
 *
 * @author 
 *
 */
class shapeMethod {
	public constructor() {
	}
	
//    创建Sprite
	public static imgSprite(nam:string):egret.Sprite
	{
        var bit: egret.Bitmap = this.imgBitmap(name);
        var sprite: egret.Sprite = shapeMethod.NewSprite(bit.width,bit.height,0x0000000,0,0);
        sprite.addChild(bit);
        
        return sprite;
	}
	
//    创建Bitmap
	public static imgBitmap(name:string):egret.Bitmap
	{
        var bitmap:egret.Bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(name);
        if(bitmap.width < 1) utils.T.trace("资源文件不存在--> "+name);
//        console.log("bitmapSize-->",bitmap.width,bitmap.height);
        return bitmap;
	}

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
    public static newshape(wid:number=800,hei:number=600,alphas:number=1,color:number=0xffffff,roundRadius:number=0,align:number=0):egret.Shape
    {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color,alphas);
        if(align == 0)
        {
            shape.graphics.drawRoundRect(0,0,wid,hei,roundRadius);
        }
        
        else if(align == 1)
        {
            shape.graphics.drawRoundRect(-0.5*wid,-0.5*hei,wid,hei,roundRadius);
                
        }
        shape.graphics.endFill();
        
        //bd.dispose();
        
        shape.alpha = alphas;
        
        return shape;
    }
    
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
    public static newshapeFZ(wid: number = 800,hei: number = 600,alphas: number = 1,color: number = 0xffffff,roundRadius: number = 0,align: number = 0): egret.Shape {
        var shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color,alphas);
        
        shape.graphics.cubicCurveTo(0,0,wid,hei,wid * 0.1,hei - wid * 0.1);
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
    }
            
           
                
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
    public static newEllipseSprite(wid:number=800,hei:number=600,alphas:number=1,color:number=0xffffff,align:number=0):egret.Sprite
    {
        var shape:egret.Sprite = new egret.Sprite();
        shape.graphics.beginFill(color,alphas);
        if(align == 0)
        {
            shape.graphics.drawEllipse(0,0,wid,hei);
        }
        else if(align == 1)
        {
            shape.graphics.drawEllipse(-0.5*wid,-0.5*hei,wid,hei);
        }
        
        shape.graphics.endFill();
        
        //bd.dispose();
        shape.alpha = alphas;
        return shape;
    }
    
    public static newLoad(r1:number=10,r2:number=30,color:number=0xffaabb,fan:boolean=false,du:number = 320):egret.Shape
    {
        var shape:egret.Shape = new egret.Shape();
        var xx: number = 0;
        var yy: number = 0;
        for(var i:number=0;i<du;i++){
            xx = r2 * Math.sin(Math.PI * i / 180);
            yy = r2 * Math.cos(Math.PI * i / 180);
            if(fan)
            {
                shape.graphics.beginFill(color,(i) / 360);
            }else{
                shape.graphics.beginFill(color,(du - i) / 360);
            }
            shape.graphics.drawEllipse(-(0.5 * r1)+xx,-(0.5 * r1)+yy,r1,r1);
            shape.graphics.endFill();
        }
        return shape;
    }
    
    
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
    public static newEllipseCloseSP(wid: number = 60,hei: number = 60,align: number = 0,color1: number = 0xafafaf,color2: number = 0xffffff,alphas: number = 1): egret.Sprite {
        var shape: egret.Sprite = new egret.Sprite();
        shape.graphics.beginFill(color1,alphas);
        var line1: egret.Shape = this.drawLine(3,wid * 0.6,45,color2,1);
        var line2: egret.Shape = this.drawLine(3,wid * 0.6,-45,color2,1);
        shape.addChild(line1);
        shape.addChild(line2);
        var num: number = 3;
        if(align == 0) {
            shape.graphics.drawEllipse(0,0,wid,hei);
            line1.x = line2.x = wid * 0.5;
            line1.y = line2.y = hei * 0.5;
        }
        else if(align == 1) {
            shape.graphics.drawEllipse(-0.5 * wid,-0.5 * hei,wid,hei);
        }
        shape.graphics.endFill();
        //bd.dispose();
        shape.alpha = alphas;
        return shape;
    }

    /**
    * 绘制线条 
    * @param dess 线条粗细
    * @param color1 线条颜色
    * @param len 线条长度
    * @param rt 旋转度数
    * @param align 对齐0（左上角）1（中心）
    * @return 
    */		
    public static drawLine(dess: number = 1,len: number = 30,rt: number = 0,color1: number = 0xffffff,align: number = 0): egret.Shape 
    {
        var shape: egret.Shape = new egret.Shape();

        shape.graphics.beginFill(color1);
        shape.graphics.lineStyle(dess,color1);

        if(align == 0) {
            shape.graphics.lineTo(0,0);
            shape.graphics.lineTo(0,len);
        }
        else if(align == 1) {
            shape.graphics.lineTo(0,-len * 0.5);
            shape.graphics.lineTo(0,len * 0.5);
        }
        shape.graphics.endFill();
        shape.rotation = rt;
        return shape;
    }
                                        
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
    public static NewSprite(wid: number = 800,hei: number = 600,color: number = 0xffffff,alp: number = 0.3,align: number = 0): egret.Sprite {
        var shape: egret.Sprite = new egret.Sprite();

        shape.graphics.lineStyle(0,0xffffff,0);
        shape.graphics.beginFill(color,alp);
        if(align == 0) shape.graphics.drawRect(0,0,wid,hei);
        else if(align == 1) {
            shape.graphics.drawRect(-wid * 0.5,-hei * 0.5,wid,hei);
        }
        shape.graphics.endFill();
        return shape;
    }
        
    /**
    * 绘制指定大小的 边框
    * @param w  边框的宽
    * @param h  边框的高
    * @param color   边框的颜色 
    * @param thickness   边框的粗
    */		
    public static creatBord(w:number,h:number,color:number=0xff0000,thickness:number=2):egret.Shape
    {
        var shape:egret.Shape = new egret.Shape();
        
        shape.graphics.lineStyle(thickness,color);
        
        shape.graphics.beginFill(0xffffff,0);
        shape.graphics.drawRect(0,0,w,h);
        shape.graphics.endFill();
        
        return shape;
    }
    /**
     * 扇形绘制
     */ 
    public static drawSector(r:number=50,x:number=0,y:number=0):void{
//        绘制一段圆弧路径。圆弧路径的圆心在(x,y) 位置，半径为 r ，根据 anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
//    * @param x 圆弧中心（圆心）的 x 轴坐标。
//    * @param y 圆弧中心（圆心）的 y 轴坐标。
//    * @param radius 圆弧的半径。
//    * @param startAngle 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
//    * @param endAngle 圆弧的重点， 单位以弧度表示。
//    * @param anticlockwise 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
        
//        var r: number = 50;
        var shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.moveTo(r,r);//绘制点移动(r, r)点
        shape.graphics.lineTo(r * 2,r);//画线到弧的起始点
        shape.graphics.drawArc(50,50,50,0,260 * Math.PI / 180,false);//从起始点顺时针画弧到终点
        shape.graphics.lineTo(r,r);//从终点画线到圆形。到此扇形的封闭区域形成
        shape.graphics.endFill();

        
    }
    
    
                                                   
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
    public static drawGradientegretShape(wid: number = 30,hei: number = 30,ellipse: number = 0,c1: number = 0xFFFFFF,c2: number = 0xa5a5a5): egret.Shape {
        var shape: egret.Shape = new egret.Shape();
//        var fillType: String = GradientType.LINEAR;
        var fillType: string = egret.GradientType.LINEAR;
        
        var colors: Array<number> = [c1,c2];
        var alphas: Array<number> = [1,1];
        var ratios: Array<number> = [0x00,0xFF];
        var matr: egret.Matrix = new egret.Matrix();
        matr.createGradientBox(20,hei * 0.6,Math.PI / 2,0,0);//SpreadMethod.PAD;
//        var spreadMethod: String = SpreadMethod.PAD;
//        shape.graphics.beginGradientFill(fillType,colors,alphas,ratios,matr,spreadMethod);
        shape.graphics.beginGradientFill(fillType,colors,alphas,ratios,matr);        
        shape.graphics.drawRoundRect(0,0,wid,hei,ellipse);

        return shape;
    }
}
