function buttonClick()
{
    document.getElementById("heading1").innerHTML="Ramakrishna";
}
function textDisplay()
{
    var username=document.getElementById("text1").value;
    var password=document.getElementById("password1").value;
    if(password==username)
    {
        alert("Username and password matches");
    }
    else
    {
        alert("Username and password does not match")
    }
    
}
function selectedValue()
{
    var value1=document.getElementById("rd1");
    var value2=document.getElementById("rd2");
    if(value1.checked==true)
    {
        alert("The name selected is: "+value1.value);
    }
    else if(value2.checked==true)
    {
        alert("The name selected is: "+value2.value);
    }
    else
    {
        alert("No name selected ");
    }
}
function selectSelectedValue()
{
    var select=document.getElementById("select-box");
    alert(select.options[select.selectedIndex].value);
}
function changeStyle()
{
    var para=document.getElementsByTagName("p");
    para[0].style.fontFamily="Arial";
    para[1].style.color="red";
    para[2].style.fontWeight="bold";
    para[3].style.fontStyle="italic";
    for(var i=0;i<para.length;i++)
    {
        para[i].style.fontSize= 35 ;
    }
}
function changeStyleForClass()
{
    var para=document.getElementsByClassName("paragraph");
    para[0].style.color="green";
    para[1].style.color="crimson";
    for(var i=0;i<para.length;i++)
    {
        para[i].style.fontSize= 35 ;
    }
}

function setNewImage()
{
    document.getElementById("img1").src="carrot.jpg";
}
function setOldImage()
{
    document.getElementById("img1").src="tomato.jpg";
}
function validate()
{
    var username=document.getElementById("uname").value;
    var regx=/E00/;
    if(regx.test(username)){
        alert("valid");
    }
    else{
        alert("inavlid");
        document.getElementById("lbluser").style.visibility="visible";
    }
}