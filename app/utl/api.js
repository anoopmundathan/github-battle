const fetchRepo = (apiUrl) => {
    return fetch(apiUrl)
        .then(response => response.json());
}

export default fetchRepo;