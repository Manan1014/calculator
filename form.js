function submit(){
    document.getElementById("mySubmit").formTarget = "_self";
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    let data = "/r First Name is" + fname.value + "/r LAst Name is" + lname.value;
    
    console.log(data);

    document.getElementById("demo").innerHTML="Your Form is Succesfully submitted";
}
    
    
