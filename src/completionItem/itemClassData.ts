/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:19:58
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2024-12-31 11:44:27
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemClassData.ts
 * @Description:
 */
import { type CompletionClassObject } from "./types";

export const CompletionClassData: CompletionClassObject = {
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
};
