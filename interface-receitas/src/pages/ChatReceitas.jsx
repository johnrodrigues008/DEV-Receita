import { useState } from "react";
import { ListaMensagens } from "../components/ListaMensagens";
import { ChatBox } from "../components/ChatBox";
import { api } from "../services/api";

export const ChatReceitas = () => {
    // Código javaScript

    const [loading, setLoading] = useState(false);   
    
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            text: "Olá! Eu sou seu assistente de receitas. Como posso ajudar você hoje?",
            remetente: "bot"
        },
    ]);

    const onEnviarMensagem = async (mensagem) => {
        const novaMensagemUsuario = {
            id: Date.now(),
            text: mensagem,
            remetente: "usuario"
        }

        setMensagens( prev => [...prev, novaMensagemUsuario]);
        setLoading(true);

        try {
            const resposta = await api(mensagem);

            const novaMensagemBot = {
                id: Date.now() + 1,
                text: resposta,
                remetente: "bot"
            }
            setMensagens( prev => [...prev, novaMensagemBot]);
            console.log(resposta);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            const novaMensagemUsuario = {
                id: Date.now() + 1,
                text: "Falha ao obter resposta. Por favor, tente novamente mais tarde.",
                remetente: "bot"
            }
            setMensagens( prev => [...prev, novaMensagemUsuario]);
        } finally {
            setLoading(false);
        }
    };

    return (
        // Código html e css
        <div className="min-h-screen bg-linear-to-br from-purple-200 via-gray-50 to-emerald-200">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8 pt-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r to-emerald-600 text-transparent bg-clip-text mb-2">Dev Chef</h1>
                    <p className="text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas.</p>
                </header>
                <div className="bg-white/70 backdrop-blur-sm rounded-t-2xl overflow-hidden shadow-lg h-[70vh] border-gray-100 flex flex-col">
                    <ListaMensagens mensagens={mensagens} loading={loading} />
                    <ChatBox  onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
                </div>
            </div>
        </div>
    );
}