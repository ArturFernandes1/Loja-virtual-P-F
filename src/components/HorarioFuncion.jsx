import React, { useState, useEffect } from "react";

export default function HorarioFuncionamento() {
    const [mensagem, setMensagem] = useState("");
    const [cor, setCor] = useState("");

    useEffect(() => {
        function HoraAtual() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
        
            const formattedTime = `${hours}:${minutes}:${seconds}`;
        
            // Atualiza o conteúdo do elemento com a hora atual
            document.getElementById('clock').textContent = formattedTime;

            // Verifica se a hora está entre 7h e 11h
            if ((hours >= 7 && hours <= 11) || (hours >= 13 && hours <= 17)){
                setMensagem("Loja Aberta");
                setCor("green");
            } else {
                setMensagem("Loja Fechada");
                setCor("red");
            }
        }
        
        // Atualiza a hora a cada segundo
        const intervalId = setInterval(HoraAtual, 1000);
        
        // Chama a função para definir a hora imediatamente ao carregar a página
        HoraAtual();

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="caixa-hr">
                <div id="clock"></div>
                <h2 className="msgm" style={{ color: cor }}>{mensagem}</h2>
            </section>
        </>
    );
}
