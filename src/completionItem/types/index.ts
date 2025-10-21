/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-05 11:32:19
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2025-10-21 16:29:31
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/types/index.ts
 * @Description:
 */

// Props
export interface Attributes {
  name: string;
  type: string;
  default: string;
  description:string;
  required: string;
  body?: string; // 可选 属性片段
}

export interface CompletionObject {
  [key: string]: {
    // name?: string; // 可选属性
    attrs: Attributes[];
  };
}

// Events
export interface ItemEvent {
  name: string; // 名称
  params: string; // 参数
  description: string; // 描述
}

export interface CompletionEventObject {
  [key: string]: {
    attrs: ItemEvent[];
  };
}

// External Classes
export interface ItemClass {
  className: string; // 类名
  description: string; // 描述
}

export interface CompletionClassObject {
  [key: string]: {
    attrs: ItemClass[];
  };
}

// CSS Variables
export interface ItemCss {
  name: string; // 名称
  defaultValue: string; // 默认值
  description: string; // 描述
}

export interface CompletionCssObject {
  [key: string]: {
    attrs: ItemCss[];
  };
}
