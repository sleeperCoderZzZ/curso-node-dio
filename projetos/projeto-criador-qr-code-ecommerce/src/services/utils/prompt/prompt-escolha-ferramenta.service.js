import prompt from "prompt";

prompt.start();

const mainPrompt = async () => {
  const { escolha } = await prompt.get([
    {
      name: "escolha",
      description: "Escolha a ferramente que deseja utilizar para gerar o QR Code (1 - Gerador de QR Code, 2 - Gerador de senhas)",
      type: "string",
      pattern: /^[1-2]$/,
      message: "Escolha uma opção válida (1 ou 2)",
      required: true,
    },
  ]);

  return escolha;
};

export default mainPrompt;