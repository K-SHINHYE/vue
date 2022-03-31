<template>
  <div>
    <button @click="loadData">Data호출</button>
    <h1>List</h1>
    <ul>
      <li v-for="(name, index) in names" :key="index">
        {{ index + 1}}. {{name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {ref, onMounted} from 'vue'

export default{
  setup(){

    async function loadData(){
      // axios이용하니까 비동기 await를 쓰고 여기에 await를 쓰니까 function 앞에 async써줘야 함
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      console.log(result.data);
      names.value = result.data.map(comment => comment.name)
    }
    onMounted(loadData()); // 여기까지하면 비동기 함수를 넘겨주는 것
    const names = ref([]);
    return {
      names, loadData
    }
  }
}
</script>
