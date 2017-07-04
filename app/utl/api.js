import axios from 'axios';

const id = 'fcb676561ad5ae9f63de';
const sec = '0532513f386e8a73719caf2b656e026e5018bd5d';
const params = `?client_id=${id}&client_secret=${sec}`;

function handleError(error) {
    console.warn(error);
    return null;
}

function getStarCount(repos) {
    return repos.data.reduce((count, repo) => {
        return count + repo.stargazers_count; 
    }, 0)
}

function calculateScore(profile, repos) {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}

function getProfile(username) {
    return axios.get(`https://api.github.com/users/${username}${params}`)
            .then(user => user.data);
}

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}   

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(data => {
        const profile = data[0];
        const repos = data[1];

        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    });
}

function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
}

function battle(players) {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
}

function fetchRepo(language) {
    let apiUrl = `https://api.github.com/search/repositories?q=${language}&sort=stars&order=desc`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.items);
}

export { battle, fetchRepo };
