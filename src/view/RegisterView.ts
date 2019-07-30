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
		if (this.account.text.length >= 4 && this.password.text.length >= 4) {
			// RequestMethod.post("",{},(code,data)=>{

			// })
		}
	}


	protected removeEvents(): void {
		this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
		this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
	}
}