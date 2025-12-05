import { useEffect, useRef } from "react";
import { Mensagem } from "./Mensagem"

export const ListaMensagens = ({ mensagens, loading }) => {

    const mensagemRef =  useRef();

    const scrollToBaixo = () => {
        mensagemRef.current.scrollIntoView({  behavior: "smooth" });
    }

    useEffect( () => {
        scrollToBaixo();
    }, [mensagens]);

    return(
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-[20px]">
            {mensagens.map(mensagem => (
                <Mensagem key={mensagem.id} mensagem={mensagem} />
            ))}

            {loading && (
                <div className="rounded-2xl rounded-bl-none ">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                </div>
            )}

            <div ref={mensagemRef}></div>
        </div>
    )
}