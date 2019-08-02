class GetData {
	

	public static register(data,bf):void{
		var path = Global.datas.register;
		RequestMethod.post(path,(data),bf);

	}

	public static login(data,bf):void{
		var path = Global.datas.login;
		RequestMethod.post(path,(data),bf);
	}

	public static userInfo(data,bf):void{
		var path = Global.datas.UserInfo;
		RequestMethod.post(path,(data),bf);
	}


	public static signIn(data,bf):void{
		var path = Global.datas.signIn;
		RequestMethod.post(path,(data),bf);
	}

	public static getBalanceInfo(data,bf):void{
		var path = Global.datas.getBalanceInfo;
		RequestMethod.post(path,(data),bf);
	}


}