/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-10-14 17:59:26
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-13 22:48:35
 * @FilePath: /tdesign-miniprogram-snippets/src/extension.ts
 * @Description:
 */
import * as vscode from "vscode";
import { autoConfig, schemes } from "./utils";
import { Config, getActiveConfig, onDidConfigChange, configActivate, configDeactivate } from "./config";
import { hoverListener } from "./hover/hoverProvider";
import { WxmlCompletionProvider } from "./completionItem/wxmlCompletionProvider";
import { createPageListener, createComponentListener } from "./commands/index";
import { jumpCompListener } from "./jumpComponent/jumpComponentProvider";
import { highlightCompListener } from "./highlightComponent";

const { languages } = vscode;



export function activate(context: vscode.ExtensionContext) {
  const wxml = getActiveConfig().documentSelector.map((l) => schemes(l));

  const enter_flag = getActiveConfig().showSuggestionOnEnter ? ["\n"] : [];

  // wxml 自动补全
  const wxmlCompletionProvider = languages.registerCompletionItemProvider(
    wxml,
    new WxmlCompletionProvider(getActiveConfig()),
    "<",
    " ",
    ...enter_flag
  ); // 在 < 和 空格 等处触发补全

  // 将注册的 功能 加入插件上下文
  context.subscriptions.push(wxmlCompletionProvider);

  configActivate(); // 激活配置模块，初始化监听器

  // 订阅配置更改事件
  context.subscriptions.push(onDidConfigChange((configs) => listenFunc(configs)));
  
  // 首次激活时，手动调用 listenFunc 加载当前配置
  listenFunc(getActiveConfig());

  if (!getActiveConfig().disableAutoConfig) {
    autoConfig();
  }
  // listener 监听
  function listenFunc(configs: Config) {
    const { enableHover, enableCreatePage, enableCreateComponent, enableJumpComponent, enableHighlightComponent } =
      configs;
    // hover 悬停
    hoverListener(enableHover, context);
    // 注册创建页面命令
    createPageListener(enableCreatePage, context);
    // 注册创建组件命令
    createComponentListener(enableCreateComponent, context);
    // 在 wxml 页面，'alt + 点击自定义组件的标签名'跳转到对应的组件页面
    jumpCompListener(enableJumpComponent, context);
    // 高亮组件
    highlightCompListener(enableHighlightComponent, context);
  }
}

// This method is called when your extension is deactivated
export function deactivate() {
  configDeactivate();
}
