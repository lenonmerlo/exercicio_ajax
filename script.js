document.addEventListener('DOMContentLoaded', async function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        const response = await fetch("https://api.github.com/users/lenonmerlo");

        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do GitHub');
        }

        const json = await response.json();

        // Preenche os dados na página
        nameElement.innerText = json.name;
        usernameElement.innerText = `@${json.login}`;
        avatarElement.src = json.avatar_url;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    } catch (error) {
        console.error("Erro na requisição:", error);
        // Você pode mostrar uma mensagem de erro na interface se quiser
        nameElement.innerText = "Erro ao carregar os dados";
    }
});
