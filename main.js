const form = document.getElementById('form-cadastro')
let linhas = ''
const numeros = []

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizaTabela()

    nomePessoa.value = ''
    telPessoa.value = ''
})

function adicionarLinha(){
    const nomePessoa = document.getElementById('nome-pessoa')
    const telPessoa = document.getElementById('tel-pessoa')
    
    if(numeros.includes(telPessoa.value)){
        alert('Esse número já foi registrado')
    } else{
        numeros.push(telPessoa.value)

        let linha = '<tr>'
        linha += `<td>${nomePessoa.value}</td>`
        linha += `<td>${telPessoa.value}</td>`
        linha += '</tr>'
        linhas += linha
    }
}

function atualizaTabela(){
    const corpoTabela = document.getElementById('corpo-tabela')
    corpoTabela.innerHTML = linhas
}