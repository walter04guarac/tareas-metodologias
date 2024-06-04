'use strict';

function validateField(isVisible,show,hide){
   if(isVisible){
       show();
   }else{
       hide();
   }
}

let showField= function(){
    alert('campo visible')
};

let hideField=()=>alert('campo oculto');

validateField(false,showField,hideField);