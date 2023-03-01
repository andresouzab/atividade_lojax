function validarEmail(){
    const email = "loja01@lojax.com";
    const password = "x1x2x3"

    if(document.login.email.value.trim() == "" || document.login.password.value.trim() == ""){
        alert("Você precisa preencher o E-mail e Senha");
        //document.login.email.setfocus();
        return false;
    }
    else if(document.login.email.value.trim() != email || document.login.password.value.trim() != password){  
        alert("O E-mail ou senha está incorreto");
        //document.login.email.setfocus();
        return false;
    }
    else{
        return true;
    }
      
}