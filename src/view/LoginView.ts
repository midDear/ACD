class LoginView extends BasicView {


	public register: eui.Label;
	public account: eui.TextInput;
	public password: eui.TextInput;
	public login: eui.Button;
	public title: eui.Component;

	public constructor() {
		super();
		this.skinName = "resource/eui/login.exml";
	}

	protected initUi(): void {
		this.resize();

		this.title["title"].text = "新用户注册";

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
		if (this.account.text.length >= 4 && this.password.text.length >= 4) {
			// RequestMethod.post("",{},(code,data)=>{

			// })
		}
	}
	private onRegister(e: egret.TouchEvent): void {

		this.gc();
		
		var parent = this.parent;
		var ui = new RegisterView();
		parent.addChild(ui);
		ui.y = -30;
		ui.alpha = 0;
		utils.TweenMe.to(ui, { y: ui.y + 30, alpha: 1 }, 0.8);


	}

	protected removeEvents(): void {

		this.title["back"].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
		this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
		this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
	}
}