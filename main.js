function toggle_light_mode() {
      var app = document.getElementsByTagName("BODY")[0];
      if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
      } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
      }		
  }
var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
}


'use stritc'

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCEP = async() => {
    limparForm();

    const cep = document.getElementById('cep').value.replace("-","");
    
    const url = `https://viacep.com.br/ws/${cep}/json`;
    if(cepValido(cep)){
        
        const dados = await fetch(url); 
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = "CEP não encontrado"
        }else{
            preencherFormulario(endereco);
        }  
    } else {
        document.getElementById('endereco').value = "CEP Incorreto"

    }    
}

/*Cadastro*/ 

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCEP)

const limparForm = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}     
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}
const limparForm2 = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('email').value = '';
}     

function confirmar()
{ 
alert("Cadastro efetuado com sucesso!!");
limparForm2();
}
