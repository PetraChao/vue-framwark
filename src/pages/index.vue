<template>
  <div class="main">
    <el-container>
      <el-header class="header">
        <el-row class="header-row" :gutter="20">
          <el-col :span="2"><div class="grid-content">金股棒</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple-dark">按月配资</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple-dark">按日配资</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple-dark">软件下载</div></el-col>
          <el-col :offset="5" :span="4"><div class="grid-content">欢迎来到金谷棒</div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple-dark">注册</div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple-dark">登录</div></el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="banner">
          <template>
            <el-carousel :interval="4000">
              <el-carousel-item v-for="item in 6" :key="item">
                <div class="banner-img"></div>
              </el-carousel-item>
            </el-carousel>
          </template>
          <section class="news-container">
            <div class="news-left">
              <img src="../assets/news.jpg" alt="">
              <p class="news-left-title">最新公告</p>
            </div>
            <el-card :body-style="{ padding: '0px' }" class="box-card">
              <div v-for="o in 4" :key="o" class="text item">
                关于春节管理费优惠活动的通知（2018-1-30）
                <!-- {{'列表内容 ' + o }} -->
              </div>
            </el-card>
          </section>

          <el-row type="flex" class="advantage" justify="space-between">
            <el-col :span="6">
              <div class="grid-content">
                <img src="../assets/mode.jpg" alt="">
                <h6>模式多</h6>
                <p>按天配资 按月配资</p>
                <p>灵活方便 按需配资</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <img src="../assets/bennis.jpg" alt="">                
                <h6>利息低</h6>
                <p>天配千1.5 月配1.5分</p>
                <p>按天7倍 按月5倍</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <img src="../assets/sage.jpg" alt="">                
                <h6>重安全</h6>
                <p>资金充沛保障</p>
                <p>第三方资金监管</p>
              </div>
            </el-col>
          </el-row>
          
          <h2>三步快速开始</h2>
          <el-row class="operation-steps">
            <el-col :span="6" :offset="0">
              <el-card :body-style="{ padding: '20px' }">
                <p>第一步</p>
                <p>注册/购买产品</p>
                <div style="padding: 14px;">
                  <p>注册账号</p>
                  <p>实名认证</p>
                  <p>绑定银行卡</p>
                  <p>购买产品</p>
                  <div class="bottom clearfix">
                    <el-button type="danger">购买产品</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-card :body-style="{ padding: '20px' }">
                <p>第二步</p>
                <p>下载客户端</p>
                <div style="padding: 14px;">
                  <p>可下载</p>
                  <p>Windows</p>
                  <p>苹果APP</p>
                  <p>安卓APP</p>
                  <div class="bottom clearfix">
                    <el-button type="danger">下载软件</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-card :body-style="{ padding: '20px' }">
                <p>第三步</p>
                <p>大展身手</p>
                <div style="padding: 14px;">
                  <p>客户端登录</p>
                  <p>可正常进行操作</p>
                  <p>在线支持</p>
                  <p>电话支持</p>
                  <div class="bottom clearfix">
                    <el-button type="danger">客服支持</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import * as api from "../api/index.js";

export default {
  name: "mainWorld",
  data() {
    return {
      msg: "Welcome pengchao"
    };
  },
  created: function() {
    api.getHomeInfo().then(res => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  border-top: solid 7px #ee4b67;
  padding-top: 7px;
}
.header-row {
  padding: 10px 0 7px;
  box-shadow: 0px 1px 1px 1px #888;
}
.banner-img {
  width: 100%;
  height: 100%;
  background: url("../assets/Banner.jpg");
  background-size: contain;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  vertical-align: middle;
  border-radius: 4px;
}
.advantage {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-carousel__item div {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.text {
  font-size: 14px;
}

.item {
  padding: 10px 0;
}
.news-container {
  overflow: hidden;
  margin: 20px auto;
  width: 800px;
}
.news-left {
  float: left;
  border-right: solid 1px #99a9bf;
  margin-right: 20px;
  padding-right: 40px;
  margin-top: 40px;
  position: relative;
}
.news-left-title {
  margin: 0;
}
.box-card {
  float: left;
  width: 600px;
}
.bottom {
    margin-top: 13px;
    line-height: 12px;
  }
.operation-steps{
  
}
.operation-steps-item{
  padding-top: 20px;
}
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 60px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both;
  }
  .advantage{
    margin-top: 30px;
    padding-top: 30px;
  }
</style>
