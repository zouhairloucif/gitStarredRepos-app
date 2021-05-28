<template>
  <div>
      <v-row>
        <v-col cols="12">
          <template v-if="isLoading">
            <div class="text-center">
              <v-progress-circular class="mx-auto" :size="50" :width="3" indeterminate/>
            </div>
          </template>
          <template v-else>
            <v-list three-line>
              <template v-for="(item, index) in getStarredReposList">
                <repo-item :key="index" :item="item"></repo-item>
              </template>
            </v-list>
          </template>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import repoItem from "@/components/repoItem";

export default {
  components: {
    repoItem,
  },
  data() {
    return {
      isLoading: false,
      form: {
        created: {
          operator: '<',
          value: this.$moment().format('YYYY-MM-DD')
        },
        sort: "stars",
        order: "desc",
        page: 1,
      }
    }
  },
  computed: {
    ...mapGetters('reposService', [
      'getStarredReposList',
    ])
  },
  methods: {
    ...mapActions('reposService', {
      getStarredReposAction: 'getStarredRepos',
    }),
    getReposFromApi() {
      this.isLoading = true;
      let params = {...this.form};
      this.getStarredReposAction(params)
        .finally(() => {
          this.isLoading = false;
        })
    }
  },
  mounted() {
    this.getReposFromApi();
  }
}
</script>
