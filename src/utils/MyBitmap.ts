/**
*  Bitmap 创建 类
* @author middear
*
*/
module utils {
	export class MyBitmap extends egret.Bitmap {

		private path: string;
		private backfunc: Function;
		private backths: any;
		private imageLoader: egret.ImageLoader;
		public constructor(url: string, func: Function, ths) {
			super();
			this.path = url;
			this.backfunc = func;
			this.backths = ths;
			this.init();
		}
		private init(): void {
			this.imageLoader = new egret.ImageLoader();
			this.imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
			this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.loadERROR, this);
			this.imageLoader.load(this.path);
		}
		private loadCompleteHandler(event: egret.Event): void {
			var imageLoader = <egret.ImageLoader>event.currentTarget;
			// var bitmap: egret.Bitmap = new egret.Bitmap(imageLoader.data);
			// this.addChild(bitmap);
			// this.bitmapData = imageLoader.data;
			var texture: egret.Texture = new egret.Texture();
			texture.bitmapData = imageLoader.data;
			this.texture = texture;
			if (this.backfunc) {
				this.backfunc(this.backths, 1, this);
			}
			this.smoothing = true;
			this.gc();
		}

		private loadERROR(e: egret.IOErrorEvent): void {
			if (this.backfunc) {
				this.backfunc(this.backths, 0, this);
			}
		}

		public gc(): void {
			if (this && this.imageLoader) {
				this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
				this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadERROR, this);
				this.imageLoader = null;
			}
		}
	}
}