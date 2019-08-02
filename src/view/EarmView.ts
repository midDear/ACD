module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class EarmView extends BasicView {


		public title: eui.Component;
		public time: eui.Label;
		public shouyi: eui.Label;
		public shudu: eui.Label;

		private bf: Function;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/EarnPage.exml";
		}

		protected initUi(): void {
			this.resize(0, this.stage.stageHeight - 100);
			this.initTitle();

			this.upData();
		}

		private initTitle(): void {
			this.title["label"].text = "Earm ACD";
		}

		protected addEvents(): void {

		}

		protected removeEvents(): void {

		}

		public upData(): void {
			this.time.text = "剩余时间" + utils.stringMethod.formatDuring(Global.datas.surplusTime);
			this.shouyi.text = Global.datas.balanceInfo.base_profit+Global.datas.balanceInfo.extra_profit+"";
			this.shudu.text = Global.datas.balanceInfo.speed+"ACD/hr";
		}

		public gc(b: boolean = false): void {
			this.removeEvents();
			if (this.parent) {
				if (b) {
					if (this.parent) {
						this.parent.removeChild(this);
					}
				} else {
					utils.TweenMe.to(this, { x: this.stage.stageWidth, alpha: 0 }, 0.45, 0, null, false, () => {
						if (this.parent) {
							this.parent.removeChild(this);
						}
					});
				}

			}
		}
	}
}