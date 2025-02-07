(async function() {
    try {
        // Obtém a URL do site onde o script está rodando
        let site = window.location.hostname;

        // Consulta o servidor para saber se o site está bloqueado
        let resposta = await fetch(`https://seusite.com/status.json`);
        let dados = await resposta.json();

        // Verifica se o site está na lista de bloqueio
        if (dados[site] && dados[site].bloqueado) {
            document.body.innerHTML = ""; // Apaga todo o conteúdo
            document.body.style.display = "none"; // Esconde a página
            alert("Acesso bloqueado! Entre em contato para liberação.");
        }
    } catch (error) {
        console.error("Erro ao verificar bloqueio:", error);
    }
})();
