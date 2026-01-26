/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:17:21
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-26 18:57:04
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemSlotData.ts
 * @Description:
 */
import { type CompletionSlotObject } from "./types";

export const CompletionSlotData: CompletionSlotObject = {
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
  // 数据展示
  "t-collapse": {
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
};
