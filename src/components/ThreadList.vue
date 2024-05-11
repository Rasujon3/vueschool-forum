<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p>
                        <a href="thread.html">{{ thread.title }}</a>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="#">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt }}
                    </p>
                </div>

                <div class="activity">
                    <p class="replies-count">
                        {{ thread.posts.length }} replies
                    </p>
                    <img :src="userById(thread.userId).avatar" alt="" class="avatar-medium">
                    <div>
                        <p class="text-xsmall">
                            <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<!-- <script>
import sourceData from '@/data.json';
// console.log('sourceData',sourceData.users);
export default {
    props: {
        threads: {
            type: Array,
            required: true
        }
    },
    data () {
    return {
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
import { reactive, defineProps } from 'vue';
// console.log('sourceData',sourceData.users);
// const posts = reactive(sourceData.posts);
const users = reactive(sourceData.users);

defineProps({
    threads: {
            type: Array,
            required: true
        }
})

// function postById (postId) {
//         return posts.find(p => p.id === postId)
//     }
function userById (userId) {
        return users.find(u => u.id === userId)
    }
</script>

<!-- <script>
export default {
    props: {
        threads: {
            type: Array,
            required: true
        }
    }
}
</script> -->

<style scoped>

</style>