<template>
    <div id="app">
        <div class="titleBox">
            <div class="viewTitle">
                视图
            </div>
            <svg class="settingIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" @click="openSettings">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <div class="table-container">
            <table>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                </tr>
                <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                </tr>
                <!-- Add more rows as needed -->
                </tbody>
            </table>
        </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <!-- 在这里添加设置界面的内容 -->
        <view-setting></view-setting>
        <button @click="closeSettings">确定</button>
      </div>
    </div>

    <!-- 背景遮罩 -->
    <div v-if="showModal" class="overlay"></div>
  </template>
  
  <script>
  import ViewSetting from '@/components/ViewSetting.vue';
  
  export default {
    components: {
      ViewSetting
    },
    data() {
      return {
        tags: ['Vue', 'JavaScript', 'Web Development', 'Frontend'],
        showModal: false,     
        data: {
            headers: [0,1,2,3,4,5,6,7,8,9],
            rows: Array.from({ length: 10 }, (_, index) => index),
            cols: Array.from({ length: 10 }, (_, index) => index),
        },
      };
    },
    methods: {
    openSettings() {
      this.showModal = true;
    },
    closeSettings() {
      this.showModal = false;
    },
  },
  };
  </script>
  
  <style>
  /* 根据需求定义样式 */
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

button {
  border-radius: 10px;
  border: 1px solid #ccc; /* 增加边框宽度 */
}

.titleBox {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
}

.viewTitle {
    display: block;
    width: fit-content;
    font-size: 25px;
    text-align: left;
    color: #000;
    margin-left: 30px;
}

.settingIcon {
    flex: 0;
    cursor: pointer;
    height: 25px;
    width: 25px;
    display: inline;
    color: #000000;
    min-width: 25px;
    margin-left: 5px;
}

.table-container {
    width: calc(100% - 40px);
    margin: 20px;
    height: 100%;
    background-color: #fff;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 75vw;
    height: 75vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    box-sizing: border-box;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
</style>
  