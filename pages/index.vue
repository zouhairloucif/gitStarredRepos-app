<template>
  <div>
    <v-container>
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
                <div :key="index">
                  <v-list-item :href="item.url" target="_blank">
                    <v-list-item-avatar size="110px">
                      <v-img :src="item.owner.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                      <v-list-item-group>
                        <v-item-group>
                          <v-item>
                            <span>Stars: {{item.stars | numberFormatter}}</span>
                          </v-item>
                          <v-item>
                            <span>Issues: {{item.issues | numberFormatter}}</span>
                          </v-item>
                          <v-item>
                            <span>Submitted {{$moment(item.created_at).fromNow() }} by {{item.owner.name}}</span>
                          </v-item>
                        </v-item-group>
                      </v-list-item-group>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </template>
            </v-list>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
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
  created() {
    this.getReposFromApi();
  }
}
</script>
