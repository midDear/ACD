class RegisterView extends BasicView {

	public login: eui.Label;
	public country: eui.TextInput;
	public user_name: eui.TextInput;
	public user_phone: eui.TextInput;
	public account: eui.TextInput;
	public invitation_code: eui.TextInput;
	public password: eui.TextInput;
	public password_sure: eui.TextInput;
	public register: eui.Button;
	public guojia: eui.Scroller;
	public list: eui.List;
	public title: eui.Component;

	public constructor() {
		super();
		this.skinName = "resource/eui/register.exml";
	}

	protected initUi(): void {
		this.resize();

		this.title["title"].text = "账号登入";

	}

	protected addEvents(): void {
		this.title["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
		this.register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
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
		if (this.password.text!=this.password_sure.text) {

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

		GetData.register(obj,(code,res)=>{
			utils.T.trace("register", code, res);
		})
	}


	protected removeEvents(): void {
		this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
		this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
	}
}