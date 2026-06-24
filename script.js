
function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    let ini = Number(inicio.value)
    let final = Number(txtfim.value)
    let pas = Number(passo.value)
    res.innerHTML = 'Contando: '
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Por favor, preencha todos os campos!')
        return
    }if (pas <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1.')
        pas = 1
    }if (ini < final) {
        for (let c = ini; c <= final; c += pas) {
            res.innerHTML += `${c} 👉`
        }
    }else {
        for (let c = ini; c >= final; c -= pas) {
            res.innerHTML += `${c} 👉`
        }
    }
}



