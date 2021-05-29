<template>
  <v-app dark>
    <v-app-bar fixed app elevation="0">
      <v-avatar size="50px" class="mr-4" v-if="$vuetify.breakpoint.mdAndUp">
        <v-img src="/logo.png"></v-img>
      </v-avatar>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-icon @click="changeTheme">mdi-moon-waxing-crescent</v-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Github Most Starred Repos'
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>
