/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 15:59:15
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-26 18:54:07
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/wxmlCompletionProvider.ts
 * @Description:
 */

import * as vscode from "vscode";
import { Config } from "../config";
import { CompletionData } from "./itemData";
import { CompletionEventData } from "./itemEventData";
import { CompletionClassData } from "./itemClassData";
import { CompletionCssData } from "./itemCssData";
import { CompletionSlotData } from "./itemSlotData";
import { WxmlDataList } from "./wxmlData";
import { type Attributes, type ItemEvent, type ItemSlot, type ItemClass, type ItemCss } from "./types";

/**
 * 判断光标是否在指定标签内。
 */
// function isInsideTag(
//   document: vscode.TextDocument,
//   position: vscode.Position,
//   tagName: string
// ): boolean {
//   const text = document.getText();
//   const tagRegex = new RegExp(`<${tagName}[^>]*>`, 'g');
//   let match;
//   while ((match = tagRegex.exec(text)) !== null) {
//     const tagStart = document.positionAt(match.index);
//     const tagEnd = document.positionAt(match.index + match[0].length);
//     if (position.isAfter(tagStart) && position.isBefore(tagEnd)) {
//       // console.log(`Inside tag: ${tagName}`); // 打印日志
//       return true;
//     }
//   }
//   return false;
// }

/**
 * 判断光标是否在标签内。
 */
// function isInsideTag(
//   document: vscode.TextDocument,
//   position: vscode.Position,
// ): boolean {
//   const text = document.getText();
//   const tagRegex = /<([\w-]+)[^>]*>/g; // 匹配组件标签名
//   let match;
//   while ((match = tagRegex.exec(text)) !== null) {
//     const tagStart = document.positionAt(match.index);
//     const tagEnd = document.positionAt(match.index + match[0].length);
//     if (position.isAfter(tagStart) && position.isBefore(tagEnd)) {
//     // console.log(`Detected tag: ${match[1]}`); // 打印检测到的标签名
//       return true;
//     }
//   }
//   return false;
// }

/**
 * 判断光标是否在自定义组件标签内。
 */
function getTagNameAtPosition(document: vscode.TextDocument, position: vscode.Position): string | null {
  const text = document.getText();
  const tagRegex = /<([\w-]+)[^>]*>/g; // 匹配组件标签名
  let match;

  while ((match = tagRegex.exec(text)) !== null) {
    const tagStart = document.positionAt(match.index);
    const tagEnd = document.positionAt(match.index + match[0].length);

    if (position.isAfter(tagStart) && position.isBefore(tagEnd)) {
      // console.log(`Detected tag: ${match[1]}`); // 打印检测到的标签名
      return match[1]; // 返回标签名称
    }
  }
  return null;
}

/**
 * 创建 CompletionItem 实例。
 */
function createCompletionItem({
  name,
  type,
  default: defaultValue,
  description,
  required,
}: Attributes): vscode.CompletionItem {
  const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
  // 设置详细信息
  item.detail = `${type} ` + (defaultValue ? `(默认: ${defaultValue})` : "");
  item.documentation = new vscode.MarkdownString(description + (required ? "\n\n**是否必填**: " + required : ""));
  // 设置插入的文本
  const snippet = `${name}=${defaultValue === "-" ? "'${1}'" : `'${defaultValue}'`}`;
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

function createCompletionItemEvent({ name, params, description }: ItemEvent): vscode.CompletionItem {
  const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
  // 设置详细信息
  // item.detail = `${params}`;
  item.documentation = new vscode.MarkdownString(params + "\n\n" + description);
  // 设置插入的文本
  const snippet = `${name}=${"'${1}'"}`;
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

function createCompletionItemSlot({ name, description }: ItemSlot): vscode.CompletionItem {
  const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
  // 设置详细信息
  // item.detail = `${params}`;
  item.documentation = new vscode.MarkdownString(description);
  // 设置插入的文本
  const snippet = `${name}=${"'${1}'"}`;
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

function createCompletionItemClass({ className, description }: ItemClass): vscode.CompletionItem {
  const item = new vscode.CompletionItem(className, vscode.CompletionItemKind.Property);
  // 设置详细信息
  // item.detail = `${className}`;
  item.documentation = new vscode.MarkdownString(description);
  // 设置插入的文本
  const snippet = `${className}=${"'${1}'"}`;
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

function createCompletionItemCss({ name, defaultValue, description }: ItemCss): vscode.CompletionItem {
  const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
  // 设置详细信息
  item.detail = defaultValue ? `默认: ${defaultValue}` : "";
  item.documentation = new vscode.MarkdownString(description);
  // 设置插入的文本
  const snippet = `${name}: ${defaultValue === "-" ? "${1};" : `${defaultValue};`}`;
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

/**
 *
 * 创建 WXML CompletionItem 实例。
 */
function createWxmlCompletionItem({
  name,
  type,
  default: defaultValue,
  description,
  required,
  body,
}: Attributes): vscode.CompletionItem {
  const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
  // 设置详细信息
  item.detail = `${type} ` + (defaultValue ? `(默认: ${defaultValue})` : "");

  // 设置插入的文本
  let snippet = "";
  if (body) {
    let body_md = "```wxml\n" + body + "\n```";
    item.documentation = new vscode.MarkdownString(
      description + `\n\n${body_md}` + (required ? "\n\n**是否必填**: " + required : ""),
    );
    snippet = `${body}`;
  } else {
    item.documentation = new vscode.MarkdownString(description + (required ? "\n\n**是否必填**: " + required : ""));
    snippet = `${name}=${defaultValue === "-" ? "'${1}'" : `'${defaultValue}'`}`;
  }
  item.insertText = new vscode.SnippetString(snippet);
  return item;
}

/**
 * 提供 WXML 组件属性补全。
 */
export class WxmlCompletionProvider implements vscode.CompletionItemProvider {
  constructor(public config: Config) {}

  provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
    const tagName: string = getTagNameAtPosition(document, position) ?? "";
    const completionItems: vscode.CompletionItem[] = [];

    // 光标是否在标签内
    if (tagName) {
      // console.log(`Providing completion for: ${tagName}`); // 打印日志

      // 提供组件属性补全
      // Props
      if (tagName in CompletionData) {
        const tagData = CompletionData[tagName as keyof typeof CompletionData];
        for (const attrObj of tagData.attrs) {
          if (attrObj.name) {
            completionItems.push(createCompletionItem(attrObj));
          }
        }
      }
      // // Events
      // if (tagName in CompletionEventData) {
      //   const tagData = CompletionEventData[tagName as keyof typeof CompletionEventData];
      //   for (const attrObj of tagData.attrs) {
      //     if (attrObj.name) {
      //       completionItems.push(createCompletionItemEvent(attrObj));
      //     }
      //   }
      // }
      // // Slots
      // if (tagName in CompletionSlotData) {
      //   const tagData = CompletionSlotData[tagName as keyof typeof CompletionSlotData];
      //   for (const attrObj of tagData.attrs) {
      //     if (attrObj.name) {
      //       completionItems.push(createCompletionItemSlot(attrObj));
      //     }
      //   }
      // }
      // // External Classes
      // if (tagName in CompletionClassData) {
      //   const tagData = CompletionClassData[tagName as keyof typeof CompletionClassData];
      //   for (const attrObj of tagData.attrs) {
      //     if (attrObj.className) {
      //       completionItems.push(createCompletionItemClass(attrObj));
      //     }
      //   }
      // }
      // // CSS Variables
      // if (tagName in CompletionCssData) {
      //   const tagData = CompletionCssData[tagName as keyof typeof CompletionCssData];
      //   for (const attrObj of tagData.attrs) {
      //     if (attrObj.name) {
      //       completionItems.push(createCompletionItemCss(attrObj));
      //     }
      //   }
      // }

      // common: 微信小程序 WXML 语法参考
      for (const item of WxmlDataList) {
        completionItems.push(createWxmlCompletionItem(item));
      }
    }

    // console.log(`Providing ${completionItems.length} completion items`); // 打印日志
    return completionItems;
  }
}
