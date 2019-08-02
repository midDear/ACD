module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class EarnRankLevelView extends BasicView {


		public title: eui.Component;
		public name: eui.Label;
		public country: eui.Label;
		public acd: eui.Label;
		public level0: eui.Component;
		public level1: eui.Component;
		public level2: eui.Component;
		public level3: eui.Component;
		public level4: eui.Component;
		public level5: eui.Component;
		public level6: eui.Component;
		public level7: eui.Component;
		public level8: eui.Component;
		public level9: eui.Component;

		private childs: any = [];

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/EarnRankLevelPage.exml";
		}

		protected initUi(): void {
			this.resize();

			this.initTitle();
			this.upData();
		}

		private initTitle(): void {
			this.title["back"].visible = true;
			this.title["label"].text = "等级";
		}

		public upData(): void {
			this.name.text = Global.datas.userInfo.real_name;
			this.country.text = Global.datas.userInfo.country;
			this.acd.text = "ACD: " + (Global.datas.balanceInfo.base_profit + Global.datas.balanceInfo.extra_profit);


			for (var i = 0; i <= 9; i++) {

				this["level" + i].level.text = "Level " + (i + 1);
				this["level" + i].name = "" + (i + 1);
				this["level" + i].touchEnabled = true;
				this["level" + i].touchChildren = false;
				if (this.childs.length > i) {
					//this["level" + i].tatal.text = this.childs[i].tatal + "";
				}
			}

		}

		private tapLevel(e: egret.TouchEvent): void {
			var id = Number(e.currentTarget.name);
			if (id >= 1) {
				var ui = new ListContainer();
				ui.setData(this.childs[id - 1]);
				this.addChild(ui);
				utils.OBJ.setposition(this, ui, this.stage.stageWidth, 0, 1, 0);
				utils.TweenMe.to(ui, { x: 0, alpha: 1 }, 0.45);
			}
		}

		private tapBack(e: egret.TouchEvent): void {
			if (this.bf) this.bf(this);
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