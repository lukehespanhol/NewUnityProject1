#pragma strict

function Start () {

}

var playerSpeed : int;
var amtToMoveH : float;
var amtToMoveV : float;
static var playerScore : int;


function Update () {
//amount to move the player
amtToMoveH = (playerSpeed * Input.GetAxis("Horizontal")) * Time.deltaTime;
amtToMoveV = (playerSpeed * Input.GetAxis("Vertical")) * Time.deltaTime;

// transform

transform.Translate(Vector3.right * amtToMoveH);
transform.Translate(Vector3.up * amtToMoveV);

}

function OnGUI (){

GUI.Label(Rect(10,10,200,50),"Score:" + playerScore);

}

function OnTriggerEnter(otherObject:Collider){

otherObject.gameObject.tag == "PU";
otherObject.gameObject.transform.position.x = -7;
otherObject.gameObject.transform.position.y = Random.Range(-5,5);

playerScore ++;


}