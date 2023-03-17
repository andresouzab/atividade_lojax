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

function cadastrar(){
    var produto = [];
    var codigo = document.getElementById("codigo").value;
    var nome = document.getElementById("n_produto").value;
    var preco = document.getElementById("preco").value;
    var categoria = document.getElementById("categoria").value;
    var ativo = document.getElementById("ativo").value;
    
    if(sessionStorage.getItem("vetor_produto")){
        produto = JSON.parse(sessionStorage.getItem("vetor_produto"));
    }

    var produtos = {};
    produtos = {
        Codigo: codigo,
        Nome: nome,
        Preco: preco,
        Categoria: categoria,
        Ativo: ativo,   
    };

    var tamanho = []; // vetor
    var estrutura = {}; // estrutura
    tamanho = document.getElementsByName("tamanho");
    for (var i = 0; i < tamanho.length; i++) {
        if (tamanho[i].checked) {
            estrutura["tam"] = tamanho[i].value;            
        }
    }
    console.log(estrutura);
    produtos["Tamanhos"] = estrutura["tam"];


    produto.push(produtos);
    sessionStorage.setItem("vetor_produto",  JSON.stringify(produto));
        return true;

}

function listar(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    var produto = JSON.parse(sessionStorage.getItem("vetor_produto"));
    for(var i = 0; i < produto.length; i++){
        var novaLinha = document.createElement("tr");
        registros.appendChild(novaLinha);
        novaLinha.innerHTML = dados.innerHTML;

        for(var indice in novaLinha.childNodes){
            var celula = novaLinha.childNodes[indice];
            if(celula.nodeName == "TD"){           
            switch(celula.dataset.column){
                case "Codigo":
                    celula.innerHTML = produto[i]["Codigo"];
                    break;
                case "Nome":
                    celula.innerHTML = produto[i]["Nome"];
                    break;
                case "Preco":
                    celula.innerHTML = produto[i]["Preco"];
                    break;
                case "Categoria":
                    celula.innerHTML = produto[i]["Categoria"];
                    break;
                case "Ativo":
                    celula.innerHTML = produto[i]["Ativo"];
                    break;
                case "Tamanho":
                    celula.innerHTML = produto[i]["Tamanho"];
                    break;
            }

            }



        }
    }
}

function cadastrarCliente(){
    var cliente = [];
    var codigo_cliente = document.getElementById("codigo_cliente").value;
    var nome_cliente = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var nascimento = document.getElementById("nascimento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    
    if(sessionStorage.getItem("vetor_clientes")){
        produto = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    }

    var clientes = {};
    clientes = {
        Codigo_cliente: codigo_cliente,
        Nome_cliente: nome_cliente,
        CPF: cpf,
        Nascimento: nascimento,
        Telefone: telefone,  
        Email: email, 
    };

    cliente.push(clientes);
    sessionStorage.setItem("vetor_clientes",  JSON.stringify(cliente));
        return true;

}

function listarCliente(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    var cliente = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    for(var i = 0; i < cliente.length; i++){
        var novaLinha = document.createElement("tr");
        registros.appendChild(novaLinha);
        novaLinha.innerHTML = dados.innerHTML;

        for(var indice in novaLinha.childNodes){
            var celula = novaLinha.childNodes[indice];
            if(celula.nodeName == "TD"){           
            switch(celula.dataset.column){
                case "Codigo_cliente":
                    celula.innerHTML = cliente[i]["Codigo_cliente"];
                    break;
                case "Nome_cliente":
                    celula.innerHTML = cliente[i]["Nome_cliente"];
                    break;
                case "CPF":
                    celula.innerHTML = cliente[i]["CPF"];
                    break;
                case "Nascimento":
                    celula.innerHTML = cliente[i]["Nascimento"];
                    break;
                case "Telefone":
                    celula.innerHTML = cliente[i]["Telefone"];
                    break;
                case "Email":
                    celula.innerHTML = cliente[i]["Email"];
                    break;
            }

            }



        }
    }
}