class MyButton extends eui.Button {
	public bg: eui.Rect;
	public labelDisplay: eui.Label;
	public iconDisplay: eui.Image;

	public _lable_txt:string;

	

	public constructor() {
		super();
		this.skinName = "resource/eui/MyButtonSkin.exml";
	}

	public get lable_txt():string{

		return this._lable_txt;
	}

	public set lable_txt(value:string){

		this._lable_txt = value;
		this.labelDisplay.text = value;
	}
	
}