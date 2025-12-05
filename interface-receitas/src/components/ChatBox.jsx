import { useState } from "react";

export const ChatBox = ( { onEnviarMensagem, desabilitado } ) => {
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onEnviarMensagem(mensagem);
        setMensagem("");
    }

    return (
        <div className="border-t border-gray-200 bg-gray-50/80 p-4">
            <form className="flex space-x-3" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={mensagem} 
                    onChange={ (e) => setMensagem(e.target.value) }
                    placeholder="Digite o ingrediente que deseja a receita"
                    className="flex-1 px-5 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:outline-none focus: ring-purple-500" />
                <button 
                    type="submit"
                    disabled={desabilitado}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-700 cursor-pointer rounded-full text-white disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed">Enviar</button>
            </form>
        </div>  
    );
}