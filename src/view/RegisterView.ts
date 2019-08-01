module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class RegisterView extends BasicView {

		public input_country_pan: eui.Group;
		public country: eui.Label;
		public arrow: eui.Image;
		public user_phone: eui.EditableText;
		public user_name: eui.EditableText;
		public account: eui.EditableText;
		public password: eui.EditableText;
		public invitation_code: eui.EditableText;
		public register: eui.Button;
		public back: eui.Label;
		public slePane: eui.Group;
		public list_pan: eui.Scroller;
		public list: eui.List;



		private bf: Function;
		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/register.exml";
		}

		protected initUi(): void {
			this.resize();

		}


		private tapBack(e: egret.TouchEvent): void {
			this.gc();
		}
		private onLogin(e: egret.TouchEvent): void {

			this.gc();

			var parent = this.parent;
			var ui = new LoginView();
			parent.addChild(ui);
			ui.y = -30;
			ui.alpha = 0;
			utils.TweenMe.to(ui, { y: ui.y + 30, alpha: 1 }, 0.8);

		}
		private onRegister(e: egret.TouchEvent): void {

			if (this.user_name.text.length < 2) {
				return;
			}
			if (this.password.text.length < 2) {

				return;
			}

			if (this.user_phone.text.length < 2) {

				return;
			}
			if (this.invitation_code.text.length < 2) {

				return;
			}
			if (this.account.text.length < 2) {

				return;
			}
			if (this.country.text.length < 2) {

				return;
			}


			var obj = {
				username: this.user_name.text,
				password: this.password.text,
				phone: this.user_phone.text,
				invite_name: this.invitation_code.text,
				real_name: this.account.text,
				country: this.country.text,
			}

			GetData.register(obj, (code, res) => {
				utils.T.trace("register", code, res);
				if (code == 1) {
					if (this.bf) this.bf();
				}
			})
		}

		private tapSle(e: egret.TouchEvent=null): void {
			this.slePane.visible = !this.slePane.visible;
			this.arrow.scaleY = -this.arrow.scaleY;
		}
		private changeCountry(e: egret.Event): void {
			utils.T.trace("changeCountry", this.list.selectedIndex, this.list.selectedItem);
			this.country.text = this.list.selectedItem.name;

			this.tapSle();
		}


		protected addEvents(): void {
			this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);

			this.input_country_pan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSle, this);

			this.list.addEventListener(egret.Event.CHANGE, this.changeCountry, this);
		}


		protected removeEvents(): void {
			this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
			this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
			this.input_country_pan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapSle, this);
			this.list.removeEventListener(egret.Event.CHANGE, this.changeCountry, this);
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