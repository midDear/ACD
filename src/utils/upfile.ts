module utils {
	/**
	*  upfile 上传文件
	* @author middear
	*/

	class upfile extends egret.EventDispatcher {

		private static curselectid: any;
		private static ddshuju: any;

		private static backfunc: any;
		public constructor() {
			super();
		}

		public static selectPic(value: number = 0, backfunc: any = null): void {
			this.backfunc = backfunc;
			// var imgicon: eui.Image = this.ddshuju["selectbtn" + this.curselectid];
			// console.log("图片数据：", imgicon.$Bitmap[0]._sourceHeight, imgicon.$Bitmap[0]._sourceWidth);
			this.curselectid = value;
			var filesUpload = document.getElementById("files-upload");
			filesUpload.style.display = "block";
			// filesUpload.click();
			var self = this;
			//   filesUpload.addEventListener("change", function () {
			//     console.log("选择图片：");
			//     self.traverseFiles(this.files);
			// }, false);

			BC.addOnceEvent(this, filesUpload, "change", function () {
				console.log("选择图片：");
				self.traverseFiles(this.files);
			}, false);
		}
		protected static traverseFiles(files): void {
			if ((typeof files !== "undefined") && (files.length > 0)) {
				this.uploadFile(files[0]);
			} else {
				alert("抱歉！当前系统不支持此功能！");
			}
		}
		protected static uploadFile(file: Blob): void {
			// var ag: number = window["exifget"](file);

			var self = this;

			//获取文件的相关信息
			// MainControl.EXIF.getData(file, function () {
			// 	// alert(EXIF.pretty(this));
			// 	// T.trace(this);
			// 	MainControl.EXIF.getAllTags(this);  //设置作用域
			// 	//alert(EXIF.getTag(this, 'Orientation')); 
			// 	MainControl.Orientation = MainControl.EXIF.getTag(this, 'Orientation'); 	//获取图片的角度
			// 	//return;
			// 	//	alert("ag1--" + MainControl.Orientation);
			// 	if (self.backfunc != null) {
			// 		self.backfunc["func"](self.backfunc["ths"], file, MainControl.Orientation);
			// 	}
			// });

			//	alert("ag2--" + MainControl.Orientation);


			// var picsize: number = 165;


			// if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
			//     var reader: FileReader = new FileReader();
			//     var self = this;
			//     console.log("file:", file);
			//     reader.onload = (function () {

			//         var bitdata: egret.Texture = this.result;
			//         //   var sc: number = picsize / (Math.max(bitdata.bitmapData.width, bitdata.bitmapData.height));
			//         if (self.ddshuju["selectbtn" + self.curselectid]) {
			//             var imgicon: eui.Image = self.ddshuju["selectbtn" + self.curselectid];
			//             imgicon.source = this.result;
			//             imgicon.alpha = 0;
			// 			upscale(imgicon);

			//             function  upscale(imgicon: eui.Image): void {
			//                 if (imgicon.$Bitmap[0]._sourceWidth == picsize && imgicon.$Bitmap[0]._sourceHeight == picsize) {
			//                     setTimeout(upscale, 50, imgicon);
			//                 } else {

			//                     var sc: number = picsize / (Math.min(imgicon.$Bitmap[0]._sourceWidth, imgicon.$Bitmap[0]._sourceHeight));
			//                     imgicon.width = imgicon.$Bitmap[0]._sourceWidth * sc;
			//                     imgicon.height = imgicon.$Bitmap[0]._sourceHeight * sc;
			//                     imgicon.anchorOffsetX = imgicon.width * 0.5;
			//                     imgicon.anchorOffsetY = imgicon.height * 0.5;
			//                     // imgicon.scaleX = imgicon.scaleY = sc;
			//                     console.log("图片数据：", imgicon.$Bitmap[0]._sourceHeight, imgicon.$Bitmap[0]._sourceWidth, imgicon.width, imgicon.height);
			//                     var ag: number = window["curImgAlgin"];
			//                     if (ag == 6) imgicon.rotation = 90;
			//                     else if (ag == 8) imgicon.rotation = 90 * -1;
			//                     else if (ag == 3) imgicon.rotation = 90 * 2;
			//                     else imgicon.rotation = 0;
			//                     imgicon.alpha = 1;
			//                 }
			//             }
			//         }
			//     });
			//     reader.readAsDataURL(file);
			// }
		}
	}
}