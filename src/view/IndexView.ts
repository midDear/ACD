module view {
	/**
 * 输出语句
 * @author middear
 *
 */
    export class IndexView extends BasicView {

        public acd: eui.Label;
        public time: eui.Label;

        private startTime = 24 * 60 * 660 * 1000;
        private timeT: number = 0;

        private arcShape: egret.Shape;


        public constructor() {
            super();
            this.skinName = "resource/eui/IndexView.exml";
        }

        protected initUi(): void {
            this.resize(0,this.stage.stageHeight-100);

            utils.T.trace("initUi");



            this.arcShape = new egret.Shape();
            var r = 140;
            this.arcShape.anchorOffsetX = r;
            this.arcShape.anchorOffsetY = r;

            utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 752 + r);
            var dd = 0;
            this.timeT = setInterval(() => {

                this.startTime -= 1000;
                if (this.startTime >= 0) {
                    this.uptime(this.startTime);
                    this.time.text = utils.stringMethod.formatDuring(this.startTime);
                } else {
                    clearInterval(this.timeT);
                }

            }, 100);
        }

        private uptime(t): void {
            var r = 140;
            var dd = 360 * (1 - (t / (24 * 60 * 60 * 1000)));
            this.arcShape.graphics.clear();
            this.arcShape.graphics.lineStyle(12, 0xffffff, 0.8, true);
            this.arcShape.graphics.drawArc(r, 0, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true);//从起始点顺时针画弧到终点


        }

        protected addEvents(): void {

        }




        protected removeEvents(): void {

            clearInterval(this.timeT);
        }
    }
}