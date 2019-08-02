module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class UserCenterView extends BasicView {

		public title: eui.Component;
		public name: eui.Label;
		public country: eui.Label;
		public account: eui.Label;
		public editPassword: eui.Button;
		public quit: eui.Button;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/UserCenterPage.exml";
		}

		protected initUi(): void {
			this.resize();
			this.initTitle();
			this.upData();
		}

		private initTitle(): void {
			this.title["back"].visible = true;
			this.title["label"].text = "个人中心";
		}
		public upData(): void {
			this.name.text = Global.datas.userInfo.real_name;
			this.country.text = Global.datas.userInfo.country;
			this.account.text = Global.datas.userInfo.username;
		}

		private tapBack(e: egret.TouchEvent): void {
			if (e.currentTarget == this.title["back"]) {
				if (this.bf) this.bf(this);
			} else if (e.currentTarget == this.quit) {
				window.localStorage.removeItem("token");
				Global.datas.userInfo = null;
				if (this.bf) this.bf(this, "quit");
			}
		}

		protected addEvents(): void {
			this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		}

		protected removeEvents(): void {
			this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.quit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
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