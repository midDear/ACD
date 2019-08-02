module view {
	export class ListContainer extends BasicView {
		public title: eui.Component;
		public list_container: eui.Group;

		private msg: any;
		private bf: Function;

		public constructor(_bf: Function = null, _msg: any = null) {
			super();
			this.bf = _bf;
			this.msg = _msg;
			this.skinName = "resource/eui/EarnPage.exml";
		}

		protected initUi(): void {
			this.resize();
			this.initTitle();

			this.upData();
		}

		private initTitle(): void {
			this.title["back"].visible = true;
			this.title["label"].text = this.msg.title;		//"Level 1 人数30"
		}

		private tapBack(e: egret.TouchEvent): void {
			// if (this.bf) this.bf(this);
			this.gc();
		}

		protected addEvents(): void {
			this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);

			for (var i = 0; i <= 9; i++) {
				if (this.childs.length > i) this["level" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapLevel, this);
			}
		}

		protected removeEvents(): void {
			this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			for (var i = 0; i <= 9; i++) {
				if (this.childs.length > i) this["level" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapLevel, this);
			}
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