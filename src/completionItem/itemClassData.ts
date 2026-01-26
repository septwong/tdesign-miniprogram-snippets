/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:19:58
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-26 18:58:17
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemClassData.ts
 * @Description:
 */
import { type CompletionClassObject } from "./types";

export const CompletionClassData: CompletionClassObject = {
  // 高阶
  "t-chat": {
    // AI Chat 对话 - 对话列表
    attrs: [],
  },
  "t-chat-sender": {
    // AI Chat 对话 - 对话输入
    attrs: [],
  },
  "t-chat-message": {
    // AI Chat 对话 - 对话消息体
    attrs: [],
  },
  "t-chat-actionbar": {
    // AI Chat 对话 - 对话操作
    attrs: [],
  },
  "t-chat-markdown": {
    // AI Chat 对话 - Markdown内容
    attrs: [],
  },
  "t-chat-thinking": {
    // AI Chat 对话 - 思考过程
    attrs: [],
  },
  "t-chat-loading": {
    // AI Chat 对话 - 对话加载
    attrs: [],
  },
  "t-attachments": {
    // AI Chat 对话 - 文件附件
    attrs: [],
  },
  "t-chat-content": {
    // AI Chat 对话 - 对话正文
    attrs: [],
  },
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
  "t-collapse": {
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
        className: "t-class-header",
        description: "头部样式类",
      },
    ],
  },
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
    attrs: [
      {
        className: "t-class",
        description: "根节点样式类",
      },
      {
        className: "t-class-cancel",
        description: "取消样式类",
      },
      {
        className: "t-class-content",
        description: "内容样式类",
      },
    ],
  },
  "t-popover": {
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
};
