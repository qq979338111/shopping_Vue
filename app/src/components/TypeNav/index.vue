<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{ cur: currentIndex == index }">
              <h3 @mouseenter="changeIndex(index)">
                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
              </h3>
              <!-- 二级，三级分类 -->
              <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入方式  ：是引入了 lodash 全部功能---  应该按需引入
import throttle from 'lodash/throttle';

export default {
  name: "TypeNav"
  //当组件挂载完毕，就向服务器发请求,
  ,
  data () {
    return {
      currentIndex: -1,
      show: true
    }
  },
  mounted () {
    this.$store.dispatch('categoryList')
    // 当组件挂载完毕，让show属性变为false
    // 如果不是home组件，则将typeNav 隐藏
    if (this.$route.path !== '/home') {
      this.show = false
    }

  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList
      }
    })
  },
  methods: {
    //鼠标进去修改响应式数据   currentIndex 

    changeIndex: throttle(function (index) {
      this.currentIndex = index
      // console.log('鼠标进入' + index);
    }, 50),

    leaveIndex () {
      this.currentIndex = -1
    }
    ,

    goSearch (event) {
      // 路由跳转最好的解决方案是：编程式导航+事件委派（存在问题1：点击一定是a标签/2:如何获取参数呢？[1,2,3级，产品的名字，id]）
      //   1 点击a标签 进行路由跳转， 怎么能确定点击一定是 a 标签  ~~~把子节点 a 标签 加上自定义属性  其余没有  由此区分。
      //   2  即使确定了a 标签  如何区分是一级 二级 三级分类?

      let element = event.target;
      console.log('element', element.dataset);//element.dataset 获取当前自定义属性与属性值
      let { categoryname, category1id, category2id, category3id } = element.dataset

      if (categoryname) {
        //一级分类-二级分类-三级分类-
        // 整理路由 跳转的参数
        let location = { name: 'search' };
        let query = { categoryName: categoryname }

        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else if (category3id) {
          query.category3id = category3id;
        }
        // console.log(location, query);
        location.query = query;
        this.$router.push(location)

      }


      // this.$router.push('/search')
    }
  }
}
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: skyblue;
        }
        // .item :hover {
        //   background: skyblue;
        // }   点击一级分类更改背景颜色
      }
    }
  }
}
</style>