module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class HomeView extends BasicView {
		public register: eui.Button;
		public login: eui.Button;

		private loginV: LoginView;
		private registerV: RegisterView;

		public constructor(_bf: Function = null) {
			super();
			this.skinName = "resource/eui/Home.exml";
			this.bf = _bf;
		}

		protected initUi(): void {
			this.resize();
			this.upData();
		}

		public upData(): void {
			var tk = window.localStorage.getItem("token");
			if (tk != null) {
				Global.datas.token = tk.slice(0, -2);

				let _num = 0;
				GetData.getBalanceInfo({}, (code, res) => {
					res = JSON.parse(res);

					if (code == 1 && res.code == 20000) {
						Global.datas.balanceInfo = res.data;
						_num += 1;
						if (this.bf && _num >= 2) this.bf();
					} else {
						Global.datas.token = null;
					}
				});

				GetData.userInfo({}, (code, res) => {
					res = JSON.parse(res);

					if (code == 1 && res.code == 20000) {
						Global.datas.userInfo = res.data;
						_num += 1;
						if (this.bf && _num >= 2) this.bf();
					} else {
						Global.datas.token = null;
					}
				});
			}
		}

		private setLevels(): void {

			var res = Global.datas.userInfo.children;;
			var jieguo = [];

			for (var i = 0; i < 10; i++) {
				var arr = [];
				var list;
				if (i == 0) {
					list = res;
				} else {
					list = jieguo[i - 1];
				}

				for (var j = 0; j < list.length; j++) {
					arr.push(res)
				}



				jieguo.push(arr);
			}

		}

		protected addEvents(): void {
			this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
			this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
		}

		private onLogin(e: egret.TouchEvent): void {
			this.addLogin();
		}
		private onRegister(e: egret.TouchEvent): void {
			this.addRegister();
		}

		private addLogin(): void {
			if (this.loginV) this.loginV.gc();
			this.loginV = new LoginView(() => { this.loginBF() });
			utils.OBJ.setposition(this, this.loginV, this.stage.stageWidth, 0, 1, 0);
			utils.TweenMe.to(this.loginV, { x: 0, alpha: 1 }, 0.45);
		}

		private addRegister(): void {
			if (this.registerV) this.registerV.gc();
			this.registerV = new RegisterView(() => { this.registerBF });
			// this.addChild(this.registerV);
			utils.OBJ.setposition(this, this.registerV, this.stage.stageWidth, 0, 1, 0);
			utils.TweenMe.to(this.registerV, { x: 0, alpha: 1 }, 0.45);
		}

		private loginBF(): void {		//登入成功
			if (this.bf) this.bf();
		}
		private registerBF(): void {		//注册成功
			if (this.bf) this.bf();
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

			if (this.loginV) {
				if (this.loginV.stage) {
					this.loginV.resize();
				}
			}
			if (this.registerV) {
				if (this.registerV.stage) {
					this.registerV.resize();
				}
			}
		}

		protected removeEvents(): void {
			if (this.loginV) this.loginV.gc(true);
			if (this.registerV) this.registerV.gc(true);
			this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
			this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
		}
	}
}