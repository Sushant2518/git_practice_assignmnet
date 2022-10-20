   let rev="";
    for(let i=N-1; i>=0; i++){
        rev=rev+str[i];
    }
   if(str==rev){
       console.log("Yes");
   }
   else{
       console.log("No");
   }