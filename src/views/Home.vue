<template>
    <div class="mainBodyOfHome">
<!--    数据展示-->
        <div class="dataDisplayOfHome">
<!--          标题  -->
            <div class="headOfDataDisplay">
                <span style="flex: 9;font-size: 22px;font-weight: bold">Deer_small</span>
            </div>
<!--            数据具体展示-->
            <div class="detailedData">
                <!--            Rank榜-->
                <div class="demoOfDivInDetailedData" style="background-color: #E1F3D8">
                  <div class="sp-center" style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                    <span>Rank榜</span>
                  </div>
                </div>
                <!--            Map榜-->
                <div class="demoOfDivInDetailedData" style="background-color: #FAECD8">
                  <div class="sp-center" style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                    <span>Map榜</span>
                  </div>
                </div>
                <!--            Test-->
                <div class="demoOfDivInDetailedData" style="background-color:#FDE2E2">
                    <div class="sp-center" style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                        <span>Test</span>
                    </div>
                </div>
            </div>
        </div>
<!--        数据可视化区域-->
        <div class="visualizationOfHome">
          <ranks-list class="ranks-list"></ranks-list>

        </div>

    </div>
</template>

<script>
    import RanksList from "@/views/tableViews/RanksList";
    export default {
        name: "Home",
      components: {RanksList},
      data(){
            return {
                inforOfDaPeng:{},
            }
        },
        methods:{
            loadInforOfDaPeng(){
                this.request.get("http://localhost:9090/inforofdapeng/newData").then(res=>{
                    this.inforOfDaPeng = res.data
                })
            }
        },
        created() {
            // this.loadInforOfDaPeng()
        }
    }
</script>

<style lang="scss" scoped>
    .mainBodyOfHome{
        display: flex;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(circle farthest-side at 10% 90%, #FFE8EA, #EDF3FF 70%, #EDF2FB);
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dataDisplayOfHome{
        flex: 3;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 50px;
    }
    .visualizationOfHome{
        flex: 6;
        height: 100%;
        width: 95%;
        margin: 15px 0;
        border-radius: 20px;
        background-color: pink;

      .ranks-list {
        width: 100%;
        height: 100%;

      }
    }
    .dataTableOfHome{
        flex: 5;
        height: 100%;
        width: 100%;
        background-color: red;
    }
    .headOfDataDisplay{
        flex: 2;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
    }
    .detailedData{
        flex: 5;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .demoOfDivInDetailedData{
        flex: 1;
        width: 100%;
        height: 80%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;

        .sp-center{
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }

</style>