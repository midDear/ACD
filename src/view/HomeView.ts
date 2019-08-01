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

		private bf:Function;

		public constructor(_bf:Function=null) {
			super();
			this.skinName = "resource/eui/Home.exml";
			this.bf = _bf;
		}

		protected initUi(): void {
			this.resize();
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
			this.loginV = new LoginView(()=>{this.loginBF()});
			utils.OBJ.setposition(this, this.loginV, this.stage.stageWidth, 0, 1, 0);
			utils.TweenMe.to(this.loginV, { x: 0, alpha: 1 }, 0.45);
		}

		private addRegister(): void {
			if (this.registerV) this.registerV.gc();
			this.registerV = new RegisterView(()=>{this.registerBF});
			// this.addChild(this.registerV);
			utils.OBJ.setposition(this, this.registerV, this.stage.stageWidth, 0, 1, 0);
			utils.TweenMe.to(this.registerV, { x: 0, alpha: 1 }, 0.45);
		}

		private loginBF(): void {		//登入成功
			if(this.bf) this.bf();
		}
		private registerBF(): void {		//注册成功

		}

		protected removeEvents(): void {
			if (this.loginV) this.loginV.gc(true);
			if (this.registerV) this.registerV.gc(true);
			this.login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
			this.register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
		}
	}
}