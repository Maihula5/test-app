


function validate()

{

  
    var uname=document.getElementById('fname').value;
    var upass=document.getElementById('pass').value;
    var ucpass=document.getElementById('cpass').value;



       if (uname=='') {
            window.alert("Sorry username cant be empty");
       } 

       else
          if(upass=='') {
            window.alert("Password cant be empty");
          }    

          else
             if(ucpass==''){
              window.alert("Confirm Password cant be empty");
             } 

             else
             if(upass!=ucpass){
              window.alert("Password doesnt match");
             } 
       
       else
       if (uname=="Admin"  && upass=="1234") {
        

             window.alert("Welcome Admin");
         }

       else{
             window.alert("All details correctly inputed")
       } 

         

    

}






 //     alert("Thank You");

   //   window.confirm("Are you sure to delete")
      //document.write("Hello world");

/*
    window.alert("Thank You");
    window.prompt("Enter your details");
    window.confirm("Are you sure ?")
*/

