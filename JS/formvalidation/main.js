function displayTable()
{
    
    // document.getElementById("student-form").style.visibility=hidden;
    
    var displayTable=document.getElementById("student-display");
    displayTable.style.display="block";
    if(displayTable.style.display=="none")
    {
        displayTable.style.display="block";
        alert("hi");
    }
    else
    {
        displayTable.style.display="none";
        //alert("nonw");
    }
}