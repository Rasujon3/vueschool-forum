<template>
    <div>Hello from page home</div>
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{ thread.title }}</h2>
        <div v-for="postId in thread.posts" :key="postId">
        <p>{{ userById(postById(postId).userId).name }}</p>
        <p>{{ postById(postId).text }}</p>
    </div>
    </div>
</template>

<!-- <script>
import sourceData from '@/data.json';
console.log('sourceData',sourceData.users);
export default {
    data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
        return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
        return this.users.find(u => u.id === userId)
    }
  }
}
</script> -->
<script setup>
import sourceData from '@/data.json';
import { ref} from 'vue';

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);

function postById (postId) {
        return posts.value.find(p => p.id === postId)
    }
function userById (userId) {
        return users.value.find(u => u.id === userId)
    }
</script>

<style scoped>

</style>