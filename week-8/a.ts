
function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false; 
    }
}

isLegal({
    firstName:"Krishna",
    age:21
})