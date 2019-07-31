<template>
  <div>
    <table class="adminPostTable">
      <thead>
        <tr>
          <th scope="cols" style="width: 40px;">No</th>
          <th scope="cols">Category</th>
          <th scope="cols">Title</th>
          <th scope="cols">Writer</th>
          <th scope="cols">none</th>
        </tr>
      </thead>
      <tbody v-for="(post, i) in Allposts">
        <tr>
          <th scope="row">{{i+1}}</th>
          <td style="text-align: center;">{{post.category}}</td>
          <td>{{post.title}}</td>
          <td style="text-align: center;">{{post.postWriter}}</td>
          <td style="text-align: center;">
            <img src="../../../../assets/delete.png" />
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
      Allposts: null
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.Allposts = await FirebaseService.getPosts();
    }
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
  margin: 20px 10px;
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
