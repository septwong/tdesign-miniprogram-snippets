/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:19:58
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2024-12-31 10:20:16
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
};
