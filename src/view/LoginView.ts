module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class LoginView extends BasicView {


		public login: eui.Button;
		public account: eui.EditableText;
		public password: eui.EditableText;
		public back: eui.Label;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/login.exml";
		}

		protected initUi(): void {
			this.resize();
		}

		protected addEvents(): void {
			this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);

		}

		private tapBack(e: egret.TouchEvent): void {
			this.gc();
		}
		private onLogin(e: egret.TouchEvent): void {
			if (this.account.text.length >= 4 && this.password.text.length >= 4) {

				var obj = {
					username: this.account.text,
					password: this.password.text,
				}

				GetData.login(obj, (code, res) => {
					res = JSON.parse(res);
					// utils.T.trace("login", code == 1, code, res.code, res);

					if (code == 1 && res.code == 20000) {
						this.getUserInfo(res);
					} else {

					}
				})

			}
		}

		private getUserInfo(res): void {
			let _num = 0;
			Global.datas.token = res.data.token;
			window.localStorage.setItem("token", res.data.token + "as");

			GetData.getBalanceInfo({}, (code, res) => {
				res = JSON.parse(res);
				if (code == 1 && res.code == 20000) {
					Global.datas.balanceInfo = res.data;
					_num += 1;
					if (this.bf && _num >= 2) this.bf();
				} else {

				}
			})

			GetData.userInfo({}, (code, res) => {
				res = JSON.parse(res);
				utils.T.trace("userInfo", code == 1, code, res);

				if (code == 1 && res.code == 20000) {
					Global.datas.userInfo = res.data;
					_num += 1;
					if (this.bf && _num >= 2) this.bf();
				} else {

				}
			});
		}


		protected removeEvents(): void {

			this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
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