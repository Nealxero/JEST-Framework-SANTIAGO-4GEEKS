function removeOddValues(obj) {//BEgin
    // your code here
    for ( var key in obj){//begin de for
        if (obj[key] %2 > 0)
        delete obj[key];
     
    }//end de for

}//END