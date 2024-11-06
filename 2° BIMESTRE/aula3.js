function calcular() {
    let altura = Number(document.getElementById("alturacaixa").value)
    let peso = Number(document.getElementById("pesocaixa").value)
    let altura2 = altura * altura
    let imc = peso/altura2
    document.getElementById("valorimc").innerText = "Seu IMC é: "+imc

    if (imc < 22){
        document.getElementById("classificacao").innerText = "Abaixo do peso"
    }else if (imc >= 22 && imc <= 27){
        document.getElementById("classificacao").innerText = "Normal"
    }else if (imc >= 27 && imc <= 29.99){
        document.getElementById("classificacao").innerText = "Sobrepeso"
    }
    else if (imc >= 30){
        document.getElementById("classificacao").innerText = "Obesidade"
    }
    else{
        document.getElementById("classificacao").innerText = "Invalido"
    }
    }
