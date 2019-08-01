module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class NavConpane extends BasicView {

		public nav0: eui.Rect;
		public user: eui.Component;
		public nav2: eui.Component;
		public nav3: eui.Component;
		public nav5: eui.Component;
		public nav6: eui.Component;
		public nav7: eui.Component;
		public nav8: eui.Component;

		private nav_data: any;


		private bf: Function;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/NavConpane.exml";
		}

		protected initUi(): void {
			this.resize();

			this.nav_data = [
				{ icon: "icon_chat_png", label: "社区" },
				{ icon: "icon_peo_png", label: "团队" },
				{ icon: "icon_grade_png", label: "等级" },

				{ icon: "icon_white_png", label: "白皮书" },
				{ icon: "icon_faq_png", label: "FAQ" },
				{ icon: "icon_usercenter_png", label: "个人中心" },
			]

			this.nav0.touchEnabled = true;
			for (var i = 0, j = 0; i <= 8; i++) {
				if (this["nav" + i]) {
					this["nav" + i].name = i + "";
					if (this["nav" + i].icon){
						this["nav" + i].icon.source = this.nav_data[j].icon;
						this["nav" + i].label.text = this.nav_data[j].label;
						j += 1;
					}
				}
			}

			this.upData();
		}

		private upData():void{
			this.user["account"].text = Global.datas.username+"("+Global.datas.country+")";
			this.user["phone"].text = Global.datas.phone;
		}

		protected addEvents(): void {
			for (var i = 0; i <= 8; i++) {
				if (this["nav" + i]) this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
			}
		}

		private tapNav(e: egret.TouchEvent): void {
			let id = Number(e.currentTarget.name);

			if (id >= 0) {
				if (this.bf) this.bf(id);
			}
		}

		protected removeEvents(): void {

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