<template>
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