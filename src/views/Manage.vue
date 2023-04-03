<template>
    <div class="mainBody">
<!--        左侧边栏-->
        <div class="leftBar">
            <LeftNavBar/>
        </div>
<!--        数据可视化部分-->
        <div class="dataView">
            <transition
                    name="animate__animated animate__bounce router_view"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
            <router-view style="transition: all 0.1s" />
            </transition>
            <!--        右侧个人中心组件-->
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__bounceInRight"
                    leave-active-class="animate__fadeOutRight"
                    appear
            >
            <div v-show="false" class="personalCenter">
                <PersonalView/>
            </div>
            </transition>
        </div>
<!--        小幽灵-->

          <div class="container">
            <div class="ghost">
              <div class="ghostEyes"></div>
              <div class="ghostDimples"></div>
              <div class="ghostFeet">
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>
    </div>
</template>
<script>
    import LeftNavBar from "../components/LeftNavBar";
    import PersonalView from "../components/PersonalView";

    export default {
        name: "Manage",
        components:{LeftNavBar,PersonalView},
        data(){
            return{
                personalViewFlag:true
            }
          },
        mounted() {
            // this.$bus.$on('personalCenterChange',(data)=>{
            //     this.personalViewFlag=data
            // })

        }
    }
</script>

<style scoped>
.mainBody{
    height: 100vh;
    background-color: #257B5E;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: linear-gradient(to right, rgb(247, 209, 215), rgb(191, 227, 241));
    background-size: 100%;
    position: relative;
}
    .dataView{
        width: 1650px;
        height: 850px;
        background-color:#FDFFFD ;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;
        overflow: hidden;
        position: relative;
    }
    .personalCenter{
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .router_view-leave-active {
        opacity: 0;
    }


.container .ghost {
  margin-top: 800px;
  margin-left: 100px;
  /* 相对定位 */
  position: relative;
  width: 110px;
  height: 120px;
  /* 圆角属性 左上角和右上角为圆角 */
  border-radius: 75px 75px 0 0;
  background-color: #fff;
  /* 盒子阴影 inset是内阴影 啥都不加就是默认的外阴影(outset) */
  box-shadow: -14px 0 0 #dbdbdb inset, 0 0 50px #b3acfd;
  animation: ghost 2s infinite;
}
/* 眼睛 start */
.container .ghost .ghostEyes {
  /* 弹性布局 */
  display: flex;
  /* 让元素平均分配宽度 */
  justify-content: space-around;
  width: 50px;
  padding-top: 70px;
  margin: 0 auto;
}
/* 利用两个伪元素做出卡姿兰大眼睛 */
.container .ghost .ghostEyes::before,
.container .ghost .ghostEyes::after {
  content: "";
  width: 10px;
  height: 15px;
  border-radius: 50%;
  background-color: #00034b;
}
/* 眼睛 end */

/* 腮红 start  */
/* 逻辑跟眼睛一样 */
.container .ghost .ghostDimples {
  display: flex;
  justify-content: space-around;
  width: 100px;
  padding-top: 8px;
  margin: 0 auto;
}
.container .ghost .ghostDimples::before,
.container .ghost .ghostDimples::after {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffbeff;
}
/* 腮红 end */

/* 脚 start  */
.container .ghost .ghostFeet {
  /* 这个主要是向让四只脚水平排列  */
  display: flex;
  /* 绝对定位 */
  position: absolute;
  bottom: -13px;
  width: 100%;
}
.container .ghost .ghostFeet .ghostFoot {
  width: 25%;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
}
/* 设置一下最后一个 让它跟身体的内阴影一样 */
.container .ghost .ghostFeet .ghostFoot:last-child {
  /* 利用背景渐变色实现 to right 是从做到右 */
  background-image: linear-gradient(to right, #fff 50%, #dbdbdb 50%);
}
/* 脚 end */

/* 阴影 start */
.container .shadow {
  width: 150px;
  height: 40px;
  margin-top: 50px;
  margin-left: 80px;
  border-radius: 50%;
  background-color: #000232;
  /* 动画  名称 时长 infinite是无限次播放 */
  animation: shadow 2s infinite;
}
/* 阴影 end */
/* 然后制作漂浮的动画 */
@keyframes ghost {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    /* 2D位移 -15px 是向上走 */
    transform: translateY(-15px);
  }
}
@keyframes shadow {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    /* 缩放 .9比1小一点点 */
    transform: scale(0.9);
  }
}

</style>