function verificar() {
    let mensagem = document.getElementById("mensagem").value.toLowerCase(); // Captura o valor e converte para minúsculo
    let resultado = document.getElementById("resultado"); // Onde o resultado será exibido

    if (mensagem === "boca") {
        resultado.textContent = "A sua boca é a parte que eu mais gosto em você! nunca escondi isso de você, eu espero que eu nunca pare de ver você sorrindo e ou até pare de te beijar ou pare de sentir sua boca em cada parte do meu corpo. <3";
    } else if (mensagem === "braços") { 
        resultado.textContent = "Eu amo seus braços por conta do seu abraço, do seu toque, tudo !!! obrigada por o toque mais gostoso e o abraço mais maravilhoso e confortavel da terra !!!";
    } else if (mensagem === "unhas") {
        resultado.textContent = "eu amo quando você faz as unhas, eu sempre penso como você ficaria com uma aliança, quem sabe esse momento esteja chegando... ksksksksks";
    } else if (mensagem === "canada") {
        resultado.textContent = "simplesmente o nosso sonho, ir morar lá, ter filhos e ficar muuuuuito ricos ksksksk, sonhar com isso deixa tão bem ksksksks";
    } else if (mensagem === "") {
        resultado.textContent = "";
    }
}