const usuarios = [
    {
        login: 'victor',
        senha: 'victor'
    },
    {
        login: 'admin',
        senha: 'admin'
    }
]

function logar(){
 let pegaLogin = document.getElementById('nome do id do login').value
 let pegaSenha = document.getElementById('nome do id da senha').value 

 let validaLogin = false

    for (let i in usuarios){

        if(pegaLogin==usuarios[i].login && pegaSenha[i].senha ){
            validaLogin = true
            break
        }
    } 

        if (validaLogin==true){
            location.href='DIGITAR A HOME'

        }
        else {

            alert('Usuario ou Senha Incorretos')
        }
}

