module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class WhitePaperView extends BasicView {


		public title: eui.Component;


		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/WhitePaperPage.exml";
		}

		protected initUi(): void {
			this.resize();
			this.initTitle();
		}

		private initTitle(): void {
			this.title["back"].visible = true;
			this.title["label"].text = "白皮书";
		}

		private tapBack(e: egret.TouchEvent): void {
			if (this.bf) this.bf(this);
		}

		protected addEvents(): void {
			this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		}

		protected removeEvents(): void {
			this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
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