<template>
  <v-lazy transition="fade-transition">
    <v-list-item :href="item.url" target="_blank">
      <v-list-item-avatar size="110px">
        <v-img :src="item.owner.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="item.name"></v-list-item-title>
        <v-list-item-subtitle v-if="item.description" v-html="item.description"></v-list-item-subtitle>
        <v-list-item-group>
          <v-chip-group>
            <v-chip color="primary--lighten-1" label outlined>
              Stars: {{item.stars | numberFormatter}}
            </v-chip>
            <v-chip outlined>
              Issues: {{item.issues | numberFormatter}}
            </v-chip>
            <v-chip outlined>
              Submitted {{$moment(item.created_at).fromNow() }} by {{item.owner.name}}
            </v-chip>
          </v-chip-group>
        </v-list-item-group>
      </v-list-item-content>
    </v-list-item>
  </v-lazy>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>