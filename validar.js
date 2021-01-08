
let card = /^[0-9]{12,16}$/;
let cvc = /^[0-9]{3}$/;
let amount = /[0-9]+/;
let firstname = /[a-zA-Z]+/;
let lastname = /[a-zA-Z]+/;
let city = /[a-zA-Z]+/;

let postalcode = /[0-9]+/;
let message = /[a-zA-Z0-9]/
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let error= false;

    if (!card.test(form.card.value)){
        form.card.classList.add('is-invalid');
        form.card.classList.add('alert-danger');
        form.card.classList.remove('is-valid');
        error=true
          
        
    }        
    else{ 
        form.card.classList.remove('is-invalid');
        form.card.classList.add ('is-valid');
        form.card.classList.remove('alert-danger');
    }

   if (!cvc.test(form.cvc.value)){
        form.cvc.classList.add('is-invalid');
        form.cvc.classList.add('alert-danger');
        form.cvc.classList.remove('is-valid');
          
    }        
    else{ 
        form.cvc.classList.remove('is-invalid');
        form.cvc.classList.add ('is-valid');
        form.cvc.classList.remove('alert-danger');
          
    } 

    if (!amount.test(form.amount.value)){
        form.amount.classList.add('is-invalid');
        form.amount.classList.add('alert-danger');
        form.amount.classList.remove('is-valid');
          
    }        
    else{ 
        form.amount.classList.remove('is-invalid');
        form.amount.classList.add ('is-valid');
        form.amount.classList.remove('alert-danger');
    } 

    if (!firstname.test(form.firstname.value)){
        form.firstname.classList.add('is-invalid');
        form.firstname.classList.add('alert-danger');
        form.firstname.classList.remove('is-valid');
          
    }        
    else{ 
        form.firstname.classList.remove('is-invalid');
        form.firstname.classList.add ('is-valid');
        form.firstname.classList.remove('alert-danger');
    }

    if (!lastname.test(form.lastname.value)){
        form.lastname.classList.add('is-invalid');
        form.lastname.classList.add('alert-danger');
        form.lastname.classList.remove('is-valid');
          
    }        
    else{ 
        form.lastname.classList.remove('is-invalid');
        form.lastname.classList.add ('is-valid');
        form.lastname.classList.remove('alert-danger');
        
    } 

    if (!city.test(form.city.value)){
        form.city.classList.add('is-invalid');
        form.city.classList.add('alert-danger');
        form.city.classList.remove('is-valid');
          
    }        
    else{ 
        form.city.classList.remove('is-invalid')
        form.city.classList.add ('is-valid');
        form.city.classList.remove('alert-danger');
        
    } 

    if (!postalcode.test(form.postalcode.value)){
        form.postalcode.classList.add('is-invalid')
        form.postalcode.classList.add('alert-danger');
        form.postalcode.classList.remove('is-valid');
          
    }        
    else{ 
        form.postalcode.classList.remove('is-invalid');
        form.postalcode.classList.add ('is-valid');
        form.postalcode.classList.remove('alert-danger');
    } 

    if (!message.test(form.message.value)){
        form.message.classList.add('is-invalid');
        form.message.classList.add('alert-danger');
        form.message.classList.remove('is-valid');
          
    }        
    else{ 
        form.message.classList.remove('is-invalid');
        form.message.classList.add ('is-valid');
        form.message.classList.remove('alert-danger');
    }
    
    if(form.state.value === ""){
        form.state.classList.add('is-invalid');
        form.state.classList.add('alert-danger');
       form.state.classList.remove('is-valid');          
    }        
    else{ 
        form.state.classList.remove('is-invalid');
        form.state.classList.add ('is-valid');
        form.state.classList.remove('alert-danger');        
        }
    
    let alertmsg=document.querySelector(".alert")
    if( error) {       
       alertmsg.classList.remove('d-none')
       alertmsg.classList.add('d-block')
    }
    else{ 
        alertmsg.classList.add('d-none')
        alertmsg.classList.remove('d-block')
    }
})


       
    

   
   
   
