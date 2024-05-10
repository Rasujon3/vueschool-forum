<template>
    <!-- style start -->
    <div v-for="thread in threads" 
        :key="thread.id" 
        class="col-large push-top">
        <h1>{{ thread.title }}</h1>
        <div class="post-list">
            <div class="post" v-for="postId in thread.posts" :key="postId">
                <div class="user-info">
                    <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>
                    <a href="#">
                        <img class="avatar-large" :src="userById(postById(postId).userId).avatar" :alt="userById(postById(postId).userId).name">
                    </a>
                    <p class="desktop-only text-small">107 posts</p>
                </div>
                <div class="post-content">
                    <div>
                        <p>
                            {{ postById(postId).text }}
                        </p>
                    </div>
                </div>
                <div class="post-date text-faded">
                    {{ postById(postId).publishedAt }}
                </div>
            </div>
        </div>

    </div>
    <!-- style end -->
    <!-- <div>Hello from page home</div>
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{ thread.title }}</h2>
        <div v-for="postId in thread.posts" :key="postId">
        <p>{{ userById(postById(postId).userId).name }}</p>
        <p>{{ postById(postId).text }}</p>
    </div>
    </div> -->
</template>

<script>
import sourceData from '@/data.json';
// console.log('sourceData',sourceData.users);
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
</script>
<!-- <script setup>
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
</script> -->

<style scoped>

</style>