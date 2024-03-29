const URL = "https://dog.ceo/api/breeds/image/random";
const imagemCao = document.getElementById("cao-img");

async function buscarNovoCao() {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();

        if (data.status != "success") {
            throw new Error();
        }

        imagemCao.src = data.message;
    } catch {
        alert("Houve um erro no processamento.");
    }  
}

buscarNovoCao();