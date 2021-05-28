<template>
  <v-app dark>
    <v-app-bar fixed app elevation="0">
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-icon @click="changeTheme">mdi-moon-waxing-crescent</v-icon>
    </v-app-bar>

    <v-main>
      <v-container>
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
