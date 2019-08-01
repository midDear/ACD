class RequestMethod {

	public static get(path, backfunc): void {

		var request: egret.HttpRequest = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.timeout = 1500;
		// request.withCredentials = true;


		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		if (Global.datas.token) {
			request.setRequestHeader("x-token", Global.datas.token);
		}
		request.open(path, egret.HttpMethod.GET);
		request.send();
		request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);



		function onGetComplete(event: egret.Event): void {
			// egret.log("get data : ", request.response);
			if (backfunc) backfunc(1, request.response);
		}


		function onGetIOError(event: egret.IOErrorEvent): void {
			// egret.log("get error : " + event);
			if (backfunc) backfunc(-1, request.response);
		}

		function onGetProgress(event: egret.ProgressEvent): void {
			// egret.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
		}
	}

	public static post(path, data, backfunc): void {
		let str = "";
		if (data) {
			for (let key in data) {
				str += key + "=";
				str += data[key] + "&";
			}

			data = str.slice(0, -1);
		}

		var request: egret.HttpRequest = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.timeout = 1500;
		// request.withCredentials = true;
		// utils.T.trace("post-data",data);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		if (Global.datas.token) {
			request.setRequestHeader("x-token", Global.datas.token);
		}
		request.open(path, egret.HttpMethod.POST);
		request.send(data);
		request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);



		function onGetComplete(event: egret.Event): void {
			// egret.log("post data : ", request.response);
			if (backfunc) backfunc(1, request.response);
		}


		function onGetIOError(event: egret.IOErrorEvent): void {
			// egret.log("post error : " + event);
			if (backfunc) backfunc(-1, request.response);
		}



		function onGetProgress(event: egret.ProgressEvent): void {
			// egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
		}
	}
}