import {searchRepos} from "@/global/routes";
import {Repo} from "@/models/repo";
import {Owner} from "@/models/owner";

export const namespaced = true;
export const state = () => ({
  starredReposList: [],
})
export const getters = {
  getStarredReposList: state => state.starredReposList,
};

export const mutations = {
  GET_STARRED_REPOS_LIST(state, data) {
    state.starredReposList = state.starredReposList.concat(data);
  }
}

export const actions = {
  async getStarredRepos({commit}, params) {
    return new Promise((resolve, reject) => {
      this.$api.request(searchRepos, params)
        .then((response) => {
          let data = [];
          response.items.map(({name, description, owner: {avatar_url, login}, stargazers_count, open_issues_count, created_at, svn_url}) => {
            const owner = new Owner(avatar_url, login);
            const repo = new Repo(owner, name, description, stargazers_count, open_issues_count, created_at, svn_url);
            data.push(repo);
          })
          commit('GET_STARRED_REPOS_LIST', data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
}
