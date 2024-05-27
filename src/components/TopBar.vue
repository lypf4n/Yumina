<template>
  <div id="topbar">
    <div id="topbar-header">
      <div id="topbar-left">Logo</div>
      <div id="topbar-center">
        <div class="topbar-center-item">
          <doc-detail theme="outline" size="24" fill="#333" />
          <span>全部文章</span>
        </div>
        <div class="topbar-center-item">
          <category-management theme="outline" size="24" fill="#333" />
          <span>分类</span>
        </div>
        <div class="topbar-center-item">
          <tag-one theme="outline" size="24" fill="#333" />
          <span>标签</span>
        </div>
        <div class="topbar-center-item">
          <notebook theme="outline" size="24" fill="#333" :strokeWidth="3" />
          <span>归档</span>
        </div>
        <div class="topbar-center-item">
          <icpk-picture theme="outline" size="24" fill="#333" />
          <span>看图</span>
        </div>
        <div class="topbar-center-item">
          <icpk-link theme="outline" size="24" fill="#333" :strokeWidth="3" />
          <span>友链</span>
        </div>
        <div class="topbar-center-item">
          <user-positioning theme="outline" size="24" fill="#333" :strokeWidth="3" />
          <span>关于</span>
        </div>
      </div>
      <div id="topbar-right">
        <div class="topbar-right-item media-large-screen">
          <translate theme="outline" size="24" fill="#333" />
        </div>
        <div class="topbar-right-item media-large-screen">
          <search theme="outline" size="24" fill="#333" />
        </div>
        <div class="topbar-right-item media-small-screen">
          <!-- <hamburger-button theme="outline" size="24" fill="#333" /> -->
          <svg
            class="hamburger hamburger-rotate"
            viewBox="0 0 100 100"
            width="40"
            onclick="this.classList.toggle('active')"
          >
            <path
              class="svg-line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path class="svg-line middle" d="m 30,50 h 40" />
            <path
              class="svg-line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DocDetail,
  CategoryManagement,
  TagOne,
  Notebook,
  Picture,
  Link,
  UserPositioning,
  Translate,
  Search,
  HamburgerButton,
} from "@icon-park/vue-next"
</script>

<style scoped lang="scss">
body {
  background: skyblue;
}
#topbar {
  position: fixed;
  height: 56px;
  width: 100%;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  overflow: hidden;

  #topbar-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    height: 56px;
    margin: auto;
    color: #000000;

    #topbar-left {
      font-weight: 500;
    }
    #topbar-center {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 56px;

      .topbar-center-item {
        padding: 0px 18px 0px;
        :deep(span) {
          vertical-align: middle;
        }
        :deep(span svg) {
          margin-right: 5px;
        }
      }
    }
    #topbar-right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 56px;
      :deep(span .hamburger) {
        vertical-align: middle;
      }
      .topbar-right-item {
        padding: 0px 5px 0px;
        .hamburger {
          cursor: pointer;
          transition: transform 400ms;
          .svg-line {
            fill: none;
            stroke: #000;
            stroke-width: 5.5;
            stroke-linecap: round;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
          }
          .top {
            stroke-dasharray: 40 160;
            transform-origin: 50%;
          }

          .middle {
            stroke-dasharray: 40 142;
            transform-origin: 50%;
            transition: transform 400ms;
          }
          .bottom {
            stroke-dasharray: 40 85;
            transform-origin: 50%;
            transition: transform 400ms, stroke-dashoffset 400ms;
          }
        }
        .hamburger-rotate.active {
          transform: rotate(45deg);
        }
        .hamburger.active .top {
          stroke-dashoffset: -64px;
        }
        .hamburger.active .middle {
          transform: rotate(90deg);
        }
        .hamburger.active .bottom {
          stroke-dashoffset: -64px;
        }
      }
      .media-small-screen {
        display: none;
      }
    }
  }
}

@keyframes stroke {
  to {
  }
}

@media screen and (max-width: 1400px) {
  #topbar {
    #topbar-header {
      width: 100%;
    }
  }
}

@media screen and (max-width: 900px) {
  #topbar {
    #topbar-header {
      #topbar-center {
        display: none;
      }
    }
  }
  #topbar {
    #topbar-header {
      #topbar-right {
        .media-small-screen {
          display: block;
        }
        .media-large-screen {
          display: none;
        }
      }
    }
  }
}
</style>
