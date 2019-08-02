module view {
	/**
 * 输出语句
 * @author middear
 *
 */
    export class IndexView extends BasicView {

        public acd: eui.Label;
        public time: eui.Label;
        public signIn_btn: eui.Image;


        private startTime = 24 * 60 * 660 * 1000;
        private timeT: number = 0;

        private arcShape: egret.Shape;


        public constructor(_bf: Function = null) {
            super();
            this.skinName = "resource/eui/IndexView.exml";
            this.bf = _bf;
        }

        protected initUi(): void {
            this.resize(0, this.stage.stageHeight - 100);

            utils.T.trace("initUi");

            this.upData();

            this.arcShape = new egret.Shape();
            var r = 140;
            this.arcShape.anchorOffsetX = r;
            this.arcShape.anchorOffsetY = r;
            this.uptime(this.startTime);

            utils.OBJ.addToContainer(this, this.arcShape, this.width * 0.5, 752 + r);
        }

        public upData(): void {
            var str = Global.datas.balanceInfo.base_profit + Global.datas.balanceInfo.extra_profit+"";
            this.acd.text = str.slice(0,str.indexOf(".")+3);
            this.startTime = parseInt("" + Global.datas.balanceInfo.remain_time * 0.001) * 1000;

            this.initTime();
        }

        private initTime(): void {
            if (this.startTime > 0) {
                this.signIn_btn.visible = false;

                this.time.text = utils.stringMethod.formatDuring(this.startTime);
                clearInterval(this.timeT);
                this.timeT = setInterval(() => {
                    this.upacd();
                }, 1000);

            } else {

            }
        }

        private upacd(): void {
            if (this.startTime >= 0) {
                if (this.startTime % 100000 == 0) this.uptime(this.startTime);
                this.time.text = utils.stringMethod.formatDuring(this.startTime);
            } else {
                clearInterval(this.timeT);
            }
            this.startTime -= 1000;
            Global.datas.surplusTime = this.startTime;

            GetData.getBalanceInfo({}, (code, res) => {
					res = JSON.parse(res);
					if (code == 1 && res.code == 20000) {
						Global.datas.balanceInfo = res.data;
                        this.upData();
					}
				});
        }

        private uptime(t): void {
            var r = 140;
            var dd = 360 * (1 - (t / (24 * 60 * 60 * 1000)));
            this.arcShape.graphics.clear();
            this.arcShape.graphics.lineStyle(12, 0xffffff, 0.8, true);
            this.arcShape.graphics.drawArc(r, 0, r, -180 * Math.PI / 180, (dd - 180) * Math.PI / 180, true);//从起始点顺时针画弧到终点
        }

        private tapSignIn_btn(e: egret.TouchEvent): void {
            GetData.signIn({}, (code, res) => {
                res = JSON.parse(res);
                if (code == 1 && res.code == 20000) {
                    utils.T.trace("signIn-", res);
                }
            });
        }

        protected addEvents(): void {
            this.signIn_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSignIn_btn, this);
        }




        protected removeEvents(): void {

            clearInterval(this.timeT);

            this.signIn_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSignIn_btn, this);
        }
    }
}