// const { response } = require("express");

/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const modalRegister = document.getElementById('modal-register');
    const btnRagister = modalRegister.querySelector('.btn-primary');

    btnRagister.addEventListener('click', (e)=>{
      e.preventDefault();
      User.register(data)

      App.setState('user-logged');          
      new Modal(modalRegister).close();
        
      });
      
    }

  }
