class GetData {
	

	public static register(data,bf):void{
		var path = Global.datas.register;
		RequestMethod.post(path,JSON.stringify(data),bf);

	}

	public static login(data,bf):void{
		var path = Global.datas.login;
		RequestMethod.post(path,JSON.stringify(data),bf);
	}

	public static userInfo(data,bf):void{
		var path = Global.datas.userInfo;
		RequestMethod.post(path,JSON.stringify(data),bf);
	}


}