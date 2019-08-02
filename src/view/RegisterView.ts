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

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/register.exml";
		}

		protected initUi(): void {
			this.resize();

			this.initCountry();

		}

		private initCountry(): void {
			var collection = new eui.ArrayCollection();
			var data = Global.countrys();
			for (var i = 0; i < data.length; i++) {
				collection.addItem(data[i]);
			}
			this.list.dataProvider = collection;
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
			if (this.country.text.length < 6) {

				return;
			}

			var obj = {
				username: this.account.text,
				password: this.password.text,
				phone: this.list.selectedItem.code + this.user_phone.text,
				invite_name: this.invitation_code.text,
				real_name: this.user_name.text,
				country: this.list.selectedItem.name
			}

			GetData.register(obj, (code, res) => {

				// utils.T.trace("register", code, res);
				if (code == 1) {
					res = JSON.parse(res);
					if (res.code == 20000) {
						this.getUserInfo(res);
					}
				}
			})
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

		private tapSle(e: egret.TouchEvent = null): void {
			this.slePane.visible = !this.slePane.visible;
			this.arrow.scaleY = -this.arrow.scaleY;
		}
		private changeCountry(e: egret.Event): void {
			utils.T.trace("changeCountry", this.list.selectedIndex, this.list.selectedItem);
			this.country.text = this.list.selectedItem.name + "(" + this.list.selectedItem.code + ")";

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