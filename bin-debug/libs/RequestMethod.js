var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RequestMethod = (function () {
    function RequestMethod() {
    }
    RequestMethod.get = function (path, backfunc) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        // request.timeout = 1500;
        // request.withCredentials = true;
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.open(path, egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);
        function onGetComplete(event) {
            // egret.log("get data : ", request.response);
            if (backfunc)
                backfunc(1, request.response);
        }
        function onGetIOError(event) {
            // egret.log("get error : " + event);
            if (backfunc)
                backfunc(-1, request.response);
        }
        function onGetProgress(event) {
            // egret.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
        }
    };
    RequestMethod.post = function (path, data, backfunc) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.timeout = 1500;
        request.open(path, egret.HttpMethod.POST);
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);
        function onGetComplete(event) {
            // egret.log("post data : ", request.response);
            if (backfunc)
                backfunc(1, request.response);
        }
        function onGetIOError(event) {
            // egret.log("post error : " + event);
            if (backfunc)
                backfunc(-1, request.response);
        }
        function onGetProgress(event) {
            // egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
        }
    };
    return RequestMethod;
}());
__reflect(RequestMethod.prototype, "RequestMethod");
//# sourceMappingURL=RequestMethod.js.map