function calcular(){
    let velocidade = Number(document.getElementById("velocidade").value)
    let aceleracao = Number(document.getElementById("aceleracao").value)
    let aceleracaomedia = velocidade/aceleracao
    document.getElementById("aceleracaomedia").innerText = "O valor da aceleração é de: "+aceleracaomedia+"m/s²"
}