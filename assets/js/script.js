// class ValidaFormulario{

//     constructor(){

//         this.form = document.querySelector('.formulario')

//         this.events();
//     }

//     events(){
//         this.form.addEventListener('submit', e =>{
//             this.handleSubmit(e)
//         })
//     }

//     handleSubmit(e){

//         e.preventDefault()

//         const validFields = this.isValidFields();
//         const isPasswordsValids = this.isPasswordsValids();

//         if(validFields && isPasswordsValids){
//             alert("Enviado!")
//           }

//     }
    
//     isValidFields(){
        
//         let valid = true;

//         for (let errorText of this.form.querySelectorAll('span')){
//             errorText.remove()
//         }

//         for(let field of this.form.querySelectorAll('input')){
//             const label = field.previousElementSibling.innerHTML
//             if(!field.value){
//                 this.createError(field, `Campo ${label} não pode estar em branco`)
//                 valid = false;
//               }
//               else{
                  
//                 field.style.borderColor = 'black';
//               }
        
//               if(field.classList.contains('cpf')){
//                 if(!this.validaCPF(field)) valid = false;
//               }
        
             
//             }
        
//             return valid;
        

//     }

//     isPasswordsValids(){
//         let valid = true;
    
//         const password = this.form.querySelector('.password')
//         const passwordConfirm = this.form.querySelector('.confirm-password')
    
//         if(password.value !== passwordConfirm.value){
//           valid = false
//           this.createError(password, 'Senhas precisam ser iguais')
//           this.createError(passwordConfirm, 'Senhas precisam ser iguais')
//         }
    
//         if(password.value.length < 6 || password.value.length > 12){
//           valid = false
//           this.createError(password, 'A senha precisa ter entre 6 e 12 letras')
//         }
    
//         return valid
//       }


    
    

//     validaCPF(field){
//         const cpf = new ValidaCPF(field.value);

//         if(!cpf.valida()){
//         this.createError(field, 'Cpf inválido');
//         return false;
//         }
//         return true;
//     }


//     createError(field, msg){
//         const span = document.createElement('span')

//         span.classList.add('error-text')
//         span.innerHTML = msg
        
        
//         field.insertAdjacentElement('afterend', span)

        
        
        

//     }

// }

// const valid = new ValidaFormulario()

const form = document.querySelector('form')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const dateOfBirth = document.querySelector('.date-of-birth')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')

const cpf = document.querySelector('.cpf')

const labelGroup = form.querySelectorAll('.label-item')

const textError = form.querySelectorAll('.error-text')

textError.forEach(text => text.style.display = 'none'); 


form.addEventListener('submit', e =>{
    e.preventDefault()


        if(firstName.value === ''){
            textError.item(0).style.display ='block';
            firstName.style.borderColor = 'red'
        }else{
            
            textError.item(0).style.display ='none';
            firstName.style.borderColor = 'var(--stroke)'
        }
        if(lastName.value === ''){
            textError.item(1).style.display ='block';
            lastName.style.borderColor = 'red'
        }else{
            
            textError.item(1).style.display ='none';
            lastName.style.borderColor = 'var(--stroke)'
        }
        if(cpf.value === ''){
            textError.item(2).style.display ='block';
            cpf.style.borderColor = 'red'
        }else{
            
            textError.item(2).style.display ='none';
            cpf.style.borderColor = 'var(--stroke)'
        }
        if(dateOfBirth.value === ''){
            textError.item(3).style.display ='block';
            dateOfBirth.style.borderColor = 'red'
        }else{
            
            textError.item(3).style.display ='none';
            dateOfBirth.style.borderColor = 'var(--stroke)'
        }
        if(password.value === ''){
            textError.item(4).style.display ='block';
            password.style.borderColor = 'red'
        }else{
            
            textError.item(4).style.display ='none';
            password.style.borderColor = 'var(--stroke)'
        }
        if(confirmPassword.value !== password.value || confirmPassword.value === ''){
            textError.item(5).style.display = 'block';
            confirmPassword.style.borderColor = 'red'
        }else{
            textError.item(5).style.display = 'none';
            confirmPassword.style.borderColor = 'var(--stroke)'
        }
        
  
    
})

