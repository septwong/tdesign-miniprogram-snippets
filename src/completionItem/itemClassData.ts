/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:19:58
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2025-10-21 18:38:49
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemClassData.ts
 * @Description:
 */
import { type CompletionClassObject } from "./types";

export const CompletionClassData: CompletionClassObject = {
  // 基础
  "t-button": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-icon",
        description: "图标样式类",
      },
      {
        className: "t-class-loading",
        description: "加载样式类",
      },
    ],
  },
  "t-divider": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-content",
        description: "内容样式类",
      },
    ],
  },
  "t-fab": {
    attrs: [],
  },
  "t-icon": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
    ],
  },
  "t-row": {
    attrs: [],
  },
  "t-col": {
    attrs: [],
  },
  "t-link": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-content",
        description: "内容样式类",
      },
      {
        className: "t-class-hover",
        description: "悬停样式类",
      },
      {
        className: "t-class-prefix-icon",
        description: "前置图标样式类",
      },
      {
        className: "t-class-suffix-icon",
        description: "后置图标样式类",
      },
    ],
  },
  // 导航
  "t-side-bar": {
    attrs: [],
  },
  // 输入
  "t-textarea": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-indicator",
        description: "计数器样式类",
      },
      {
        className: "t-class-label",
        description: "左侧文本样式类",
      },
      {
        className: "t-class-textarea",
        description: "多行文本框样式类",
      },
    ],
  },
  // 数据展示
  "t-qrcode": {
    attrs: [],
  },
  "t-swiper": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-image",
        description: "当前图片样式类",
      },
      {
        className: "t-class-nav",
        description: "导航样式类",
      },
      {
        className: "t-class-next-image",
        description: "下一图片样式类",
      },
      {
        className: "t-class-prev-image",
        description: "上一图片样式类",
      },
    ],
  },
  "t-swiper-nav": {
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
    ],
  },
  // 反馈
  "t-action-sheet": {
    attrs: [],
  },
};
