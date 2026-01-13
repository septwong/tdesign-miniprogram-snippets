/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-11-06 11:39:45
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-13 22:49:10
 * @FilePath: /tdesign-miniprogram-snippets/src/config/index.ts
 * @Description: 配置项
 */
import * as vscode from "vscode";
import * as path from "path";
import { debounce } from "../utils";

let listener: vscode.Disposable;

const _onDidConfigChange = new vscode.EventEmitter<Config>();
export const onDidConfigChange: vscode.Event<Config> = _onDidConfigChange.event;

export interface Config {
  getResolveRoots: (doc: vscode.TextDocument) => string[];
  resolveRoots: string[]; // 解析自定义组件的根目录
  documentSelector: string[] /** 关联类型 */;
  enableFormatWxml: boolean;
  disableAutoConfig: boolean; // /** 默认在启动时会自动相关文件关联的配置项，配置成功后会将此配置自动设置成 true，避免下次启动再重新配置 */
  showSuggestionOnEnter: boolean /** 是否在按下 Enter 键后出自动补全 */;
  //
  enableHover: boolean; // 启用或禁用悬停提示
  //
  createPageSource: string;
  createComponentSource: string;
  enableCreatePage: boolean;
  enableCreateComponent: boolean;
  //
  enableJumpComponent: boolean;
  // 组件高亮
  enableHighlightComponent: boolean;
  editTagName: Record<string, string>;
  ignoreHighlightComponentArray: string[];
  cache: boolean;
}

const config: Config = {
  getResolveRoots,
  resolveRoots: [],
  documentSelector: ["wxml"],
  enableFormatWxml: false,
  disableAutoConfig: false,
  showSuggestionOnEnter: false,
  //
  enableHover: true,
  //
  createPageSource: "",
  createComponentSource: "",
  enableCreatePage: false,
  enableCreateComponent: false,
  //
  enableJumpComponent: false,
  // 组件高亮
  enableHighlightComponent: false,
  editTagName: {},
  ignoreHighlightComponentArray: [],
  cache: false,
  //
};

export function getActiveConfig(): Config {
  return config;
}

function getAllConfig(e?: vscode.ConfigurationChangeEvent) {
  if (e && !e.affectsConfiguration('tdesign-miniprogram-snippets')) {

    return;
  }
  const TMS = vscode.workspace.getConfiguration("tdesign-miniprogram-snippets");
  //
  config.resolveRoots = TMS.get("resolveRoots", ["src", "node_modules"]);
  config.documentSelector = TMS.get("documentSelector", ["wxml"]);
  config.enableFormatWxml = TMS.get("enableFormatWxml", false);
  config.disableAutoConfig = TMS.get("others.disableAutoConfig", false);
  config.showSuggestionOnEnter = TMS.get("others.showSuggestionOnEnter", false);
  //
  config.enableHover = TMS.get("enableHover", true);
  //
  config.createPageSource = TMS.get("createPageSource", "");
  config.createComponentSource = TMS.get("createComponentSource", "");
  config.enableCreatePage = TMS.get("enableCreatePage", false);
  config.enableCreateComponent = TMS.get("enableCreateComponent", false);
  //
  config.enableJumpComponent = TMS.get("enableJumpComponent", false);
  //
  config.enableHighlightComponent = TMS.get("highlightComponent.enableHighlightComponent", false);
  config.editTagName = TMS.get("highlightComponent.editTagName", {});
  config.ignoreHighlightComponentArray = TMS.get("highlightComponent.ignoreHighlightComponentArray", []);
  config.cache = false;


  _onDidConfigChange.fire(config);
}



function getResolveRoots(doc: vscode.TextDocument) {
  let root = vscode.workspace.getWorkspaceFolder(doc.uri) as vscode.WorkspaceFolder;
  return root ? config.resolveRoots.map((r) => path.resolve(root.uri.fsPath, r)) : [];
}

export function configActivate() {
  try {
    listener && listener.dispose();
    // 防抖
    listener = vscode.workspace.onDidChangeConfiguration(
      debounce((e: vscode.ConfigurationChangeEvent) => {
        getAllConfig(e);
      }, 150)
    );
    getAllConfig();
  } catch (error) {
    console.error("🚀 ~ Error in async operation:", error);
  }
}

export function configDeactivate() {
  listener.dispose();
}
