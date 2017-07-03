function battle(players) {
    console.log(players);
}

function fetchRepo(language) {
    let apiUrl = `https://api.github.com/search/repositories?q=${language}&sort=stars&order=desc`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.items);
}

export { battle, fetchRepo };
