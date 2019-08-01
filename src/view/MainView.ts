module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class MainView extends BasicView {

		private homeV: HomeView;
		private indexV: IndexView;
		private earmV: EarmView;
		private faqV: FAQView;
		private whitePaperV: WhitePaperView;
		private userCenterV: UserCenterView;
		private communityV: CommunityView;

		private curView: BasicView;
		private curIndex: number;

		private mnav: any;

		private userInfo: any;

		public nav1: eui.Component;
		public nav2: eui.Component;
		public nav3: eui.Component;
		public nav4: eui.Component;

		private nav_data: any;

		public constructor() {
			super();
			this.skinName = "resource/eui/MainView.exml";

			// this.addEventListener(egret.Event.ADDED_TO_STAGE,this.childrenCreated,this);
		}

		// protected childrenCreated(e:egret.Event=null): void {

		// 	if(e) this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.childrenCreated,this);
		// 	this.initUi();
		// 	this.addEvents();
		// }

		protected initUi(): void {
			this.resize();
			this.homeV = new HomeView(() => { this.loginFinish(); });
			utils.OBJ.setposition(this, this.homeV, 0, 30, 1, 0);
			utils.TweenMe.to(this.homeV, { y: 0, alpha: 1 }, 0.45);

			this.initNavs();
		}

		private loginFinish(): void {
			utils.T.trace("loginFinish")
			this.homeV.gc();
			this.homeV = null;

			this.jumpPage(1);

			utils.TweenMe.to(this.indexV, { y: 0, alpha: 1 }, 0.45);

		}

		private initNavs(): void {
			this.nav_data = [
				{ icon: "icon_home_png", icon_off: "icon_home_off_png", label: "首页" },
				{ icon: "icon_chat_png", icon_off: "icon_chat_off_png", label: "社区" },
				{ icon: "icon_peo_png", icon_off: "icon_peo_off_png", label: "团队" },
				{ icon: "icon_acd_png", icon_off: "icon_acd_off_png", label: "Earn" }
			];
			for (var i = 1; i <= 4; i++) {
				this["nav" + i].icon.source = this.nav_data[i - 1].icon;
				this["nav" + i].label.text = this.nav_data[i - 1].label;
				this["nav" + i].touchChildren = false;
				this["nav" + i].touchEnabled = true;
				this["nav" + i].name = i;
			}
			this.selectNav(1);
		}

		protected addEvents(): void {
			for (var i = 1; i <= 4; i++) {
				this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
			}
		}

		private tapNav(e: egret.TouchEvent): void {
			let id = Number(e.currentTarget.name);

			if (this.curIndex === id) {
				return;
			}
			this.curIndex = id;
			this.selectNav(id);
			this.jumpPage(id);
		}

		private jumpPage(id): void {

			this.hideCurView();

			if (id == 1) {
				if (!this.indexV) this.indexV = new IndexView();
				this.curView = this.indexV;
			} else if (id == 2) {
				if (!this.communityV) this.communityV = new CommunityView();
				this.curView = this.communityV;
			} else if (id == 3) {

			} else if (id == 4) {
				if (!this.earmV) this.earmV = new EarmView();
				this.curView = this.earmV;
			}
			else if (id == 5) {
			} else if (id == 6) {
				if (!this.whitePaperV) this.whitePaperV = new WhitePaperView();
				this.curView = this.whitePaperV;
			} else if (id == 7) {
				if (!this.faqV) this.faqV = new FAQView();
				this.curView = this.faqV;
			} else if (id == 8) {
				if (!this.userCenterV) this.userCenterV = new UserCenterView();
				this.curView = this.userCenterV;
			}



			this.showCurView();
		}

		private hideCurView(): void {
			if (this.curView) {
				let ui: BasicView = this.curView;
				this.curView = null;
				utils.TweenMe.to(ui, { x: -this.stage.stageWidth, alpha: 0 }, 0.25, 0, null, false, () => {
					if (ui.parent) {
						ui.parent.removeChild(ui);
					}
				});
			}
		}

		private showCurView(): void {
			if (this.curView) {
				utils.OBJ.setposition(null, this.curView, this.stage.stageWidth, 0, 1, 0);
				this.addChildAt(this.curView, 1);
				utils.TweenMe.to(this.curView, { x: 0, alpha: 1 }, 0.45);
			}
		}

		private selectNav(index: number = 1): void {
			for (var i = 1; i <= 4; i++) {
				if (i == index) {
					this["nav" + i].icon.source = this.nav_data[i - 1].icon;
					this["nav" + i].label.textColor = "0xFFD000";
				} else {
					this["nav" + i].icon.source = this.nav_data[i - 1].icon_off;
					this["nav" + i].label.textColor = "0xC0C0C0";
				}

			}
		}





		protected removeEvents(): void {

			for (var i = 1; i <= 4; i++) {
				this["nav" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
			}
		}
	}
}