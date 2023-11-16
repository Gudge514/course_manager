<template>
  <div class="drag-drop-container">
    <div class="title">视图属性设置</div>
    <div class="plain">设置视图的过滤属性与展示属性</div>
    <div class="container">
      <div
        v-for="attribute in attributes"
        :key="attribute"
        class="attribute"
        draggable="true"
        @dragstart="handleDragStart(attribute)"
      >
        {{ attribute }}
      </div>
    </div>

    <div class="attribute-hint">过滤属性</div>
    <div class="container" @dragover.prevent @drop="handleDrop('filteredAttributes')">
      <div v-for="(attribute, index) in filteredAttributes" :key="index" class="selected-attribute wrapper">
        <select v-model="selectedFilteredTags[index]" @change="showValues(attribute)" class="select">
          <option value="" disabled hidden>{{ attribute }}</option>
          <option v-for="(value, i) in tagValueMap[attribute]" :key="i" :value="value">{{ value }}</option>
        </select>
        <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" @click="removeAttribute('filteredAttributes', 'selectedFilteredTags', attribute)">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <div class="attribute-hint">展示属性</div>
    <div></div>

    <div class="container" @dragover.prevent @drop="handleDrop('displayedAttributes')">
      <div v-for="(attribute, index) in displayedAttributes" :key="attribute" class="selected-attribute">
        <div>{{ tags[index] }} :&nbsp;&nbsp;</div>
        <div class="wrapper">
          <div class="select">
            {{ attribute }}
          </div>
          <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" @click="removeAttribute('displayedAttributes', 'selectedDisplayedTags', attribute)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </div>
        
      </div>
    </div>

    <div class="plain">{{ filteredAttributes }}</div>
    <div class="plain">{{ selectedFilteredTags }}</div>
    <div class="plain">{{ displayedAttributes }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagValueMap: {
        日期: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        课程节次: ['1-2', '3-4', '5-6', '7-8', '9-10', '9-11'],
        院系: [
        '新生学院', '文学院', '历史学院', '哲学系（宗教学系）', '新闻传播学院', '法学院', '商学院', '外国语学院',
        '政府管理学院', '国际关系学院', '信息管理学院', '社会学院', '数学系', '物理学院', '天文与空间科学学院',
        '化学化工学院', '计算机科学与技术系', '软件学院', '人工智能学院', '电子科学与工程学院', '现代工程与应用科学学院',
        '环境学院', '地球科学与工程学院', '地理与海洋科学学院', '大气科学学院', '南京赫尔辛基大气与地球系统',
        '科学学院', '生命科学学院', '医学院', '工程管理学院', '匡亚明学院', '海外教育学院', '建筑与城市规划学院',
        '马克思主义学院', '艺术学院', '智能科学与技术学院', '智能软件与工程学院', '集成电路学院', '数字经济与管理学院',
        '能源与资源学院',
        ],
        教室: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        年级: [2020, 2021, 2022, 2023],
        教师: ['王金庆','贝佳','冯桂焕','伏晓','刘钦','刘峰','刘嘉','汤恩义','邵栋','葛季栋','潘敏学'],
      },
      tags: ['X', 'Y', 'Value'],
      selectedFilteredTags: [],
      filteredAttributes: [],
      selectedDisplayedTags: [],
      displayedAttributes: [],
    };
  },
  created() {
    // for (const [key, values] of Object.entries(this.tagValueMap)) {
    // 在每个值的前面添加键作为第一个元素
        // this.tagValueMap[key] = [key, ...values];
    // }
    this.attributes = Object.keys(this.tagValueMap);
    this.selectedFilteredTags = Array(Object.keys(this.tagValueMap).length).fill(''); // 为每个 tag 维护一个选中值
  },
  methods: {
    showValues(tag) {
      setTimeout(() => {
        this.selectedTagValues = this.getValuesForTag(tag);
        this.showValuesList = true;
      }, 300);
    },
    getValuesForTag(tag) {
      // 直接从字典中获取属性值
      return this.tagValueMap[tag] || [];
    },
    selectValue(value) {
      this.showValuesList = false;
      console.log(`Selected value: ${value}`);
    },
    handleDragStart(attribute) {
      this.draggedAttribute = attribute;
    },
    handleDrop(targetList) {
      if (this.draggedAttribute && !this.filteredAttributes.includes(this.draggedAttribute) && !this.displayedAttributes.includes(this.draggedAttribute)) {
        if (targetList === 'filteredAttributes') {
          this[targetList].push(this.draggedAttribute);
          this.draggedAttribute = null;
        }
        if (targetList === 'displayedAttributes' && this[targetList].length<3) {
          this[targetList].push(this.draggedAttribute);
          this.draggedAttribute = null;
        }
      }
    },
    removeAttribute(targetList, selectedTags, attribute) {
      const index = this[targetList].indexOf(attribute);
      if (index !== -1) {
        this[targetList].splice(index, 1);
        this[selectedTags].splice(index, 1);
        this[selectedTags].push('');
      }
    },
  },
};
</script>

<style>
select {
  cursor: pointer;
}

.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px; /* 可选，增加一些内边距以美化外观 */
  width: fit-content;
  font-size: 14px;
  color: #000;
}

.title {
  display: block;
  width: auto;
  font-size: 25px;
  padding-bottom: 8px;
  height: 16px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  color: #000;
  margin-left: 30px;
}

.plain {
  margin-left: 30px;
}

.deleteIcon {
  flex: 0;
  cursor: pointer;
  height: 15px;
  width: 15px;
  display: inline;
  color: #000000;
  min-width: 15px;
  margin-left: 5px;
}

.attribute-hint {  
  display: block;
  width: auto;
  font-size: 18px;
  padding-bottom: 8px;
  height: 16px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  color: #000;
  margin-left: 30px;
}

.drag-drop-container {
  display: block;
  width: 100%;
  height: 100%;
  gap: 20px;
  text-align: left;
}

.container {
  display: flex;
  position: relative;
  flex-direction: row;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.attribute {
  border-radius: 10px;
  border: 1px solid #ccc; /* 增加边框宽度 */
  cursor: pointer;
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  display: flex;
  width: fit-content;
  align-items: center;
  align-content: center;
  padding: 10px;
  margin-right: 10px;
}

.wrapper {
  border-radius: 10px;
  border: 1px solid #ccc; /* 增加边框宽度 */
  display: flex;
  width: fit-content;
  height: 10px;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
}

.selected-attribute {
  display: flex;
  width: fit-content;
  align-items: center;
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
}

h2 {
  text-align: left;
}

div {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"ヒラギノ角ゴ Pro W3","メイリオ",Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif;
}
</style>
