<template>
  <div>
    <div style="margin-top: 20px; padding-right: 40px; text-align: right;">
      <span>total Post: {{listArray.length}}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Category</th>
          <th>Title</th>
          <th>Writer</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in paginatedData">
          <td><b>{{listArray.length - (pageNum*pageSize) - i}}</b></td>
          <!-- <td><b>{{pageSize - i}}</b></td> -->
          <td>{{p.category}}</td>
          <td>{{p.title}}</td>
          <td>{{p.postWriter}}</td>
          <td>
            <img style="height: 25px; cursor:pointer;" @click="delete_event(p)" src="../../../../assets/delete.png" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: 'PostPagination',
  data() {
    return {
      pageNum : 0
    };
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 7
    }
  },
  methods: {
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
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }
  },
  computed: {
    pageCount () {
      let listLeng = this.listArray.length;
      let listSize = this.pageSize;
      let page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) {
        page += 1;
      }
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize;
      const end = start + this.pageSize;
      console.log(start);
      console.log(end);
      
      return this.listArray.slice(start, end);
    }
  }
};
</script>

<style>
table {
  margin: 50px 0px;
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px;
  margin-top: 5px;
}

table thead th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #e7708d;
  margin: 20px 10px;
  text-align: center;
}

table tbody tr:hover {
  background: #ffddff;
}

table td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  text-align: center;
}


.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
</style>
