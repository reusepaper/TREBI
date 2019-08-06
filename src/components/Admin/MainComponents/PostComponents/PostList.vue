<template>
  <div>
    <div style="margin-top: 20px; padding-right: 40px; text-align: right;">
      <span>total Post: {{postsNums}}</span>
    </div>
    <table class="adminPostTable">
      <thead>
        <tr>
          <th scope="cols" style="width: 40px;">No</th>
          <th scope="cols">Category</th>
          <th scope="cols">Title</th>
          <th scope="cols">Writer</th>
          <th scope="cols">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(post, i) in Allposts">
        <tr style="border-bottom: solid 1px #ccc">
          <th scope="row">{{postsNums - i}}</th>
          <td style="text-align: center;">{{post.category}}</td>
          <td>{{post.title}}</td>
          <td style="text-align: center;">{{post.postWriter}}</td>
          <td style="text-align: center;">
            <img style="height: 25px; cursor:pointer;" @click="delete_event(post)" src="../../../../assets/delete.png" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
      Allposts: null,
      postsNums: 0
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.Allposts = await FirebaseService.getPosts();
      this.postsNums = this.Allposts.length;
    },
    async deletePost(deletePost){
      await FirebaseService.deletePost(deletePost.id);
      await FirebaseService.updateUserPostDOWN(deletePost.writerUid);
      await alert("삭제되었습니다.");
      this.Allposts = await FirebaseService.getPosts();
    },
    delete_event(deletePost) {
      if (confirm("정말 삭제하시겠습니까?") == true)
        this.deletePost(deletePost);
      else alert("삭제하지 않았습니다.");
    },
  }
};
</script>

<style>
.adminPostTable {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px;
  margin-top: 5px;
}
.adminPostTable thead th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #e7708d;
  margin: 20px 10px;
  text-align: center;
}
.adminPostTable tbody th {
  width: 150px;
  padding: 10px;
  text-align: center;
}

.adminPostTable tbody tr:hover {
  background: #ffddff;
}
.adminPostTable td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
}
</style>
