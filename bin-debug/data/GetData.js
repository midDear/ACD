var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GetData = (function () {
    function GetData() {
    }
    GetData.register = function (data, bf) {
        var path = Global.datas.register;
        RequestMethod.post(path, (data), bf);
    };
    GetData.login = function (data, bf) {
        var path = Global.datas.login;
        RequestMethod.post(path, (data), bf);
    };
    GetData.userInfo = function (data, bf) {
        var path = Global.datas.UserInfo;
        RequestMethod.post(path, (data), bf);
    };
    GetData.signIn = function (data, bf) {
        var path = Global.datas.signIn;
        RequestMethod.post(path, (data), bf);
    };
    GetData.getBalanceInfo = function (data, bf) {
        var path = Global.datas.getBalanceInfo;
        RequestMethod.post(path, (data), bf);
    };
    return GetData;
}());
__reflect(GetData.prototype, "GetData");
