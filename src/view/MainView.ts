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
		private teamV: TeamView;
		private earnRankV: EarnRankLevelView;

		private navConpane: NavConpane;

		private curView: BasicView;
		private curIndex: number;
		private preView: BasicView;

		private userInfo: any;

		public nav1: eui.Component;
		public nav2: eui.Component;
		public nav3: eui.Component;
		public nav4: eui.Component;
		public mnav: eui.Image;


		private nav_data: any;

		public constructor(_bf: Function = null) {
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
			this.addHome();

			this.initNavs();
		}

		private addHome(): void {
			utils.T.trace("addHome");
			this.curIndex = 0;
			this.homeV = new HomeView(() => { this.loginFinish(); });
			utils.OBJ.setposition(this, this.homeV, 0, 0, 1, 1);
			// utils.TweenMe.to(this.homeV, { y: 0, alpha: 1 }, 0.45);
		}

		private loginFinish(): void {
			this.homeV.gc();
			this.homeV = null;

			this.jumpPage(1);
			// utils.TweenMe.to(this.indexV, { y: 0, alpha: 1 }, 0.45);
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
			this.mnav.name = "101";
			this.selectNav(1);
		}

		protected addEvents(): void {
			for (var i = 1; i <= 4; i++) {
				this["nav" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
			}

			this.mnav.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
		}

		private tapNav(e: egret.TouchEvent): void {
			let id = Number(e.currentTarget.name);

			if (id === 101) {
				this.showNavp();
				return;
			}

			if (this.curIndex === id) {
				return;
			}
			this.curIndex = id;
			this.selectNav(id);
			this.jumpPage(id);
		}

		private jumpPage(id): void {

			utils.T.trace("jump-id=", id, this.curIndex);

			if (id < 1) return;
			this.mnav.visible = (id == 1 || id >= 5);

			if (id <= 4&&this.curIndex!=0) this.hideView(this.curView);

			if (id == 1) {
				if (!this.indexV) this.indexV = new IndexView();
				this.curView = this.indexV;

			} else if (id == 2) {
				if (!this.communityV) this.communityV = new CommunityView();
				this.curView = this.communityV;
			} else if (id == 3) {
				if (!this.teamV) this.teamV = new TeamView();
				this.curView = this.teamV;
			} else if (id == 4) {
				if (!this.earmV) this.earmV = new EarmView();
				this.curView = this.earmV;
			} else {

				if (id == 5) {
					if (!this.earnRankV) this.earnRankV = new EarnRankLevelView((ui: BasicView) => { this.preViewBack(ui) });
					this.preView = this.earnRankV;
				} else if (id == 6) {
					if (!this.whitePaperV) this.whitePaperV = new WhitePaperView((ui: BasicView) => { this.preViewBack(ui) });
					this.preView = this.whitePaperV;
				} else if (id == 7) {
					if (!this.faqV) this.faqV = new FAQView((ui: BasicView) => { this.preViewBack(ui) });
					this.preView = this.faqV;
				} else if (id == 8) {
					if (!this.userCenterV) this.userCenterV = new UserCenterView((ui: BasicView,res: any = null) => { this.preViewBack(ui,res) });
					this.preView = this.userCenterV;
				}

				this.showView(this.preView, true);
				return;
			}

			this.showView(this.curView);
		}

		private preViewBack(ui: BasicView, res: any = null): void {
			this.hideView(ui, true);
			this.curIndex = 1;
			this.selectNav(this.curIndex);

			if (res == "quit") {
				this.addHome();
			}
		}

		private hideView(v: BasicView, b: boolean = false): void {
			if (v) {
				let ui: BasicView = v;
				v = null;
				var fv = 1;

				if (b) fv = -1;
				utils.TweenMe.to(ui, { x: -this.stage.stageWidth * fv, alpha: 0 }, 0.25, 0, null, false, () => {
					if (ui.parent) {
						ui.parent.removeChild(ui);
					}
				});
			}
		}

		private showView(v: BasicView, b: boolean = false): void {
			if (v) {
				utils.OBJ.setposition(null, v, this.stage.stageWidth, 0, 1, 0);
				if (!b) {
					this.addChildAt(v, 1);
				} else {
					this.addChild(v);
				}
				utils.TweenMe.to(v, { x: 0, alpha: 1 }, 0.45);
				v.upData();
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

		private showNavp() {
			if (!this.navConpane) {
				this.navConpane = new NavConpane((id) => {

					this.hideNavp();
					if (this.curIndex != id) {
						this.curIndex = id;
						this.selectNav(id);
						this.jumpPage(id);
					}
				});
			}
			utils.OBJ.setposition(this, this.navConpane, -this.stage.stageWidth, 0, 1, 0);
			utils.TweenMe.to(this.navConpane, { x: 0, alpha: 1 }, 0.45);

		}

		private hideNavp(): void {
			this.hideView(this.navConpane);
		}

		protected removeEvents(): void {

			for (var i = 1; i <= 4; i++) {
				this["nav" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapNav, this);
			}
		}


		public resize(w: number = 0, h: number = 0): void {
			if (this.stage) {
				this.width = this.stage.stageWidth;
				this.height = this.stage.stageHeight;
			}
			if (w != 0) {
				this.width = w;
			}
			if (h != 0) {
				this.height = h;
			}
			if (this.curView) {
				if (this.curView.stage) {
					this.curView.resize(0, this.stage.stageHeight - 100);
				}
			}

			if (this.preView) {
				if (this.preView.stage) {
					this.preView.resize();
				}
			}
			if (this.navConpane) {
				if (this.navConpane.stage) {
					this.navConpane.resize();
				}
			}

			if (this.homeV) {
				if (this.homeV.stage) {
					this.homeV.resize();
				}
			}
		}
	}
}