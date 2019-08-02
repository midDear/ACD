module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class CommunityView extends BasicView {

		public title: eui.Component;
		public com1: eui.Component;
		public com2: eui.Component;
		public com3: eui.Component;
		public com4: eui.Component;
		public addCommunity: eui.Button;



		private bf: Function;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/CommunityView.exml";
		}

		protected initUi(): void {
			this.resize(0, this.stage.stageHeight - 100);

			this.initTitle();
		}
		private initTitle(): void {
			this.title["label"].text = "社区";
		}

		protected removeEvents(): void {

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