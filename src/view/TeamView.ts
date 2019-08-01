module view {
	/**
 * 输出语句
 * @author middear
 *
 */
	export class TeamView extends BasicView {


		public label: eui.Component;
		public time: eui.Label;
		public shoyi: eui.Label;
		public shudu: eui.Label;


		private bf: Function;

		public constructor(_bf: Function = null) {
			super();
			this.bf = _bf;
			this.skinName = "resource/eui/TeamPage.exml";
		}

		protected initUi(): void {
			this.resize(0, this.stage.stageHeight - 100);
		}

		protected addEvents(): void {

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