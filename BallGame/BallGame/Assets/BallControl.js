#pragma strict
//3b
//Vars for movement.
var rotationSpeed = 100;
var jumpHeight = 800;

private var isFalling = false;

function Update () {
	//Handle ball rotation.
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	
	rotation *= Time.deltaTime;
	//originally: rigigdbody.AddRelativeTorque(vector3.back * rotation);
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	if(Input.GetKeyDown(KeyCode.W) && isFalling == false){
		 //Originally rigidbody.velocity.y = jumpheight;.
		 GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
	

	isFalling = true;
}

function OnCollisionStay(){
	isFalling = false;
}