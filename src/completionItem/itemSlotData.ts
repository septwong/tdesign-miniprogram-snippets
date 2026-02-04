/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:17:21
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-02-04 16:28:14
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemSlotData.ts
 * @Description:
 */
import { type CompletionSlotObject } from "./types";

export const CompletionSlotData: CompletionSlotObject = {
  // 基础
  "t-button": {
    attrs: [
      {
        name: "\\-",
        description: "默认插槽，作用同 `content` 插槽",
      },
      {
        name: "content",
        description: "自定义 `content` 显示内容",
      },
      {
        name: "suffix",
        description: "右侧内容，可用于定义右侧图标",
      },
    ],
  },
  "t-icon": {
    attrs: [],
  },
  // 输入
  "t-cascader": {
    attrs: [
      {
        name: "close-btn",
        description: "自定义`close-btn`显示内容",
      },
      {
        name: "header",
        description: "`1.9.1`。头部",
      },
      {
        name: "middle-content",
        description: "`1.12.2`。中间内容",
      },
      {
        name: "title",
        description: "自定义 title 显示内容",
      },
    ],
  },
  "t-radio": {
    attrs: [],
  },
  "t-radio-group": {
    attrs: [],
  },
  "t-rate": {
    attrs: [],
  },
  "t-search": {
    attrs: [
      {
        name: "action",
        description: "自定义 `action` 显示内容",
      },
      {
        name: "left-icon",
        description: "左侧图标",
      },
      {
        name: "right-icon",
        description: "已废弃。自定义 `right-icon` 显示内容",
      },
    ],
  },
  "t-slider": {
    attrs: [],
  },
  "t-textarea": {
    attrs: [],
  },
  // 数据展示
  "t-collapse": {
    attrs: [
      {
        name: "\\-",
        description: "默认插槽，自定义内容区域内容",
      },
    ],
  },
  "t-qrcode": {
    attrs: [
      {
        name: "status-render",
        description: "自定义状态渲染器",
      },
    ],
  },
  "t-collapse-panel": {
    attrs: [
      {
        name: "\\-",
        description: "默认插槽，作用同 `content` 插槽",
      },
      {
        name: "content",
        description: "自定义 `content` 显示内容",
      },
      {
        name: "expand-icon",
        description: "自定义 `expand-icon` 显示内容",
      },
      {
        name: "header",
        description: "自定义 `header` 显示内容",
      },
      {
        name: "header-left-icon",
        description: "自定义 `header-left-icon` 显示内容",
      },
      {
        name: "header-right-content",
        description: "自定义 `header-right-content` 显示内容",
      },
    ],
  },
  // 反馈
  "t-popover": {
    attrs: [
      {
        name: "\\-",
        description: "默认插槽，用于自定义触发元素",
      },
      {
        name: "content",
        description: "自定义 `content` 显示内容",
      },
    ],
  },
};
