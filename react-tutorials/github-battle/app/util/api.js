import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=" + id + '&client_secret=' + sec

const getProfile = (username) => {
    return axios.get('https://api.github.com/users/' + username + params)
            .then((user) => {
                return user.data
            })
}

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

const getStarCount = (repos) => {
    return repos.data.reduce((count,repo) => {
        return count + repo.stargazers_count
    }, 0)
}

const calculateScore = (profile, repos) => {
    let followers = profile.followers
    let totalStars = getStarCount(repos)

    return( followers * 3) + totalStars
}

const handleErrors = (errors) => {
    console.warn(errors)
    return null;
}

const getUserData = (player) => {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
        let profile = data[0];
        let repos = data[1];

        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = (players) => {
    return players.sort((a,b) => {
        return b.score - a.score
    })

}




export const fetchPopularRepos = (language) => {

    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
        .then((response) => {
            return response.data.items
        })
}

export const battle = (players) => {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleErrors)

}