class BasicView extends eui.Component {
	public constructor() {
		super();
		// this.childrenCreated();
	}

	protected resize(w: number = 0, h: number = 0): void {
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
	}

	protected childrenCreated(): void {
		this.initUi();
		this.addEvents();
	}

	protected initUi(): void {

	}

	protected addEvents(): void {

	}

	protected removeEvents(): void {

	}

	public gc(): void {
		this.removeEvents();
		if (this.parent) {
			utils.TweenMe.to(this, { y:  50, alpha: 0 }, 0.45, 0,null,false, () => {
				if (this.parent) {
					this.parent.removeChild(this);
				}
			});
		}
	}


}