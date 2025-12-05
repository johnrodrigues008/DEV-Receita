import { obterRespostaReceita } from "../services/openai.service.js";

export const perguntarReceita = async (req, res) => {

    try {
    
        const { pergunta } = req.body;
        
        if (!pergunta) {
            return res.status(400).json({ erro: "Parâmetro 'pergunta' é obrigatório." });
        }

        const resposta = await obterRespostaReceita(pergunta);

        res.json({ resposta });
    
    } catch (error) {
        console.error("Erro ao obter receita:", error);
        res.status(500).json({ erro: "Erro ao obter receita." });
    }
}