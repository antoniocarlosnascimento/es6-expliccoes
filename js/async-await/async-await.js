export const puxarDados = async () => {
    try {
        const dadosResponde = fetch('../doc/dados.json');
        const dadosJson = await (await dadosResponde).json();
        console.log(dadosJson);
    }
    catch (_a) {
        console.log(Error);
    }
};
