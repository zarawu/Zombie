#pragma strict
public var moveSpeed:float;//moveSpeed将存储一个units数,这个单位不是像素,而是僵尸每秒移动的速度.
						//因为现在精灵是一个单位为100个像素,所以这个值可能需要相当小.
private var moveDirection:Vector3;

public var turnSpeed:float;//控制僵尸定位自己方向的响应速度
function Start () {
	moveDirection = Vector3.right;
}

function Update () {
//有输入时间时更新moveDirection
	var currentPosition:Vector3=transform.position;
	print("currentPosition="+currentPosition);
	if(Input.GetButton("Fire1")){//FIre1:鼠标左键
	print("Fire1 on click");
		var moveToward:Vector3=Camera.main.ScreenToWorldPoint(Input.mousePosition);
		print("Fire1 moveToward="+moveToward);
		moveDirection=moveToward-currentPosition;
		print("Fire1 moveDirection="+moveDirection);
		moveDirection.z=0;
		moveDirection.Normalize();
	}
	
//僵尸跟随鼠标走路的效果:
	var target:Vector3=moveDirection*moveSpeed+currentPosition;
	transform.position=Vector3.Lerp(currentPosition,target,Time.deltaTime);
	
	var targetAngle=Mathf.Atan2(moveDirection.y,moveDirection.x)*Mathf.Rad2Deg;
	transform.rotation=Quaternion.Slerp(transform.rotation,
	Quaternion.Euler(0,0,targetAngle),
	turnSpeed*Time.deltaTime);

}


























