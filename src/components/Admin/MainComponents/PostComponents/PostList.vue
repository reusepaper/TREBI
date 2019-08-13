<template>
  <div class="postlist">
    <!-- <PostPagination :listArray="Allposts" :pageSize="postsNums"/> -->
    <PostPagination :listArray="Allposts"/>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import PostPagination from './PostPagination';

export default {
  name: 'PostList',
  data() {
    return {
      Allposts: null
      // postsNums: 0
    };
  },
  components: {
    PostPagination
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.Allposts = await FirebaseService.getPosts();
      // this.postsNums = this.Allposts.length;
    }
  }
};
</script>

<style>
.postlist {
  height: 100%;
}
</style>
