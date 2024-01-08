function Entrar(){
 let email = document.getElementById('mail')
 let senha = document.getElementById('senha')

 if (email.value === 0 ){

    email.placeholder = '*Campo vazio'

    email.style.border = '2px solid red'

    }else if(senha.value == 0 || senha.length > 6 ){

      senha.placeholder = '*Campo vazio ou valor acima do limite'
      
      senha.style.border = '2px solid red'
    }else{
      
    }
    }


    
   
    
      
    
    
    
    
   

    
 
