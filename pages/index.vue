<template>
  <v-row>
    <v-col cols="12">
      <template v-if="isLoading">
        <div class="text-center">
          <v-progress-circular class="mx-auto" :size="50" :width="3" indeterminate/>
        </div>
      </template>
      <template v-else>
        <template v-if="getStarredReposList.length">
          <v-list three-line class="py-0">
            <template v-for="(item, index) in getStarredReposList">
              <repo-item :key="index" :item="item"></repo-item>
            </template>
            <v-list-item v-intersect="triggerPagination">
              <div v-if="isPaginating" class="text-center">
                <v-progress-circular class="mx-auto" :size="50" :width="3" indeterminate/>
              </div>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <v-card elevation="0" flat class="py-6">
            <v-card-title class="justify-center">
              <h2>No Starred repos were found !</h2>
            </v-card-title>
          </v-card>
        </template>
      </template>
    </v-col>
  </v-row>
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
      isPaginating: false,
      form: {
        created: {
          operator: '>',
          value: this.$moment().subtract(7, 'days').format('YYYY-MM-DD')
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
    getReposFromApi(paginate) {
      if(paginate) {
        this.isPaginating = true;
      } else {
        this.isLoading = true;
      }
      let params = {...this.form};
      this.getStarredReposAction(params)
        .finally(() => {
          if(paginate) {
            this.isPaginating = false;
          } else {
            this.isLoading = false;
          }
        })
    },
    triggerPagination() {
      this.form.page++;
      this.getReposFromApi(true);
    }
  },
  mounted() {
    this.getReposFromApi();
  }
}
</script>
