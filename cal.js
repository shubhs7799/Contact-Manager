users = [
    {user_id:"john"},
    {user_id:"david"},
    {user_id:"john1"},
    {user_id:"david1"}
]



for(var user of users){
    if(user.user_id == "john"){
  
        console.log("User ID Taken - Try another")
        break;
    }else{

        console.log("User Availble")
    }
}