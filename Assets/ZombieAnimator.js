#pragma strict

public var sprites:Sprite[];
public var framesPerSecond:float;
private var spriteRenderer:SpriteRenderer;
function Start () {
//初始化变量
	spriteRenderer = renderer as SpriteRenderer;
	

}

function Update () {
	/*
	关卡载入到当前的时间秒数和每秒渲染的帧数相乘.
	如果动画帧是存储在一个无限长的数组里,得出的数就是数组中成员的索引数.
	*/
	var index:int=Time.timeSinceLevelLoad*framesPerSecond;
	index =index%sprites.Length;//通过取余实现循环
	spriteRenderer.sprite=sprites[index];
	
}