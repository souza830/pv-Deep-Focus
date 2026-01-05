
import { GoogleGenAI, Type } from "@google/genai";
import { FocusArchetype, DiagnosticResult } from '../types';

export const getFocusDiagnostic = async (answers: string): Promise<DiagnosticResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analise as seguintes respostas de um usuário sobre seus hábitos de trabalho e foco: "${answers}".
    Com base nisso, classifique-o em um destes 4 arquétipos: Disperso Digital, Perfeccionista Paralisado, Executante Exausto ou Reator Constante.
    Retorne o resultado no formato JSON estrito.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          archetype: {
            type: Type.STRING,
            enum: ['Disperso Digital', 'Perfeccionista Paralisado', 'Executante Exausto', 'Reator Constante'],
            description: 'O nome do arquétipo de foco.'
          },
          description: {
            type: Type.STRING,
            description: 'Uma breve descrição de como esse arquétipo se comporta na era digital.'
          },
          advice: {
            type: Type.STRING,
            description: 'Um conselho prático rápido sobre como o Protocolo Deep Focus pode ajudar especificamente esse perfil.'
          }
        },
        required: ['archetype', 'description', 'advice']
      }
    }
  });

  const data = JSON.parse(response.text);
  return {
    archetype: data.archetype as FocusArchetype,
    description: data.description,
    advice: data.advice
  };
};
