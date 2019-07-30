class MeView extends BasicView {

    public acd: eui.Label;
    public arc: eui.Rect;
    public time: eui.Label;

    private startTime = 24*60*660*1000;

    private arcShape: egret.Shape;


    public constructor() {
        super();
        this.skinName = "resource/eui/Me.exml";
    }

    protected initUi(): void {
        this.resize();

        utils.T.trace("initUi");



        this.arcShape = new egret.Shape();
        var r = 140;
        this.arcShape.anchorOffsetX = r;
        this.arcShape.anchorOffsetY = r;

        utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 600);
        var dd = 0;
        setInterval(() => {

            this.startTime -= 1000;

            this.uptime(this.uptime);
            this.time.text = utils.stringMethod.formatDuring(this.startTime);
        }, 1000)


    }

    private uptime(t): void {
        var r = 140;
        var dd = 360*(1-(t/(24*60*60*1000)));
        this.arcShape.graphics.clear();
        this.arcShape.graphics.lineStyle(10, 0xff0000, 0.8, true);
        this.arcShape.graphics.drawArc(50, 50, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true);//从起始点顺时针画弧到终点

        
    }

    protected addEvents(): void {

    }




    protected removeEvents(): void {
    }
}