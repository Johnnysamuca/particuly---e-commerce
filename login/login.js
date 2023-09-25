function Entrar(){
 let email = document.getElementById('mail')
 let senha = document.getElementById('senha')
 let msgE = document.getElementById('erroE')
 let msgS = document.getElementById('erroS')

 
 msgS.innerHTML = ''
 msgE.innerHTML = ''
 if (email.value == 0 ){
    msgE.innerHTML = ('* Campo vazio')
    
    }else if(senha.value == 0 || senha.length > 6 ){

      msgS.innerHTML = ('* Erro campo vazio ou execdeu o limite de digitos')
      
    }else{
      
    }
    }
    

    
 
