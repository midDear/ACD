var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Global = (function () {
    function Global() {
    }
    Global.datas = {
        domain: "",
        login: "https://www.fastwin.io:9883/acd/login",
        register: "https://www.fastwin.io:9883/acd/register",
        UserInfo: "https://www.fastwin.io:9883/acd/getUserInfo",
        signIn: "https://www.fastwin.io:9883/acd/signIn",
        getBalanceInfo: "https://www.fastwin.io:9883/acd/getBalanceInfo",
        balanceInfo: null,
        token: null,
        userInfo: null,
        surplusTime: 0,
    };
    return Global;
}());
__reflect(Global.prototype, "Global");
//# sourceMappingURL=Global.js.map