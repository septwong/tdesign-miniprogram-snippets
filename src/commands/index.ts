/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-11-05 18:26:31
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-01-13 22:48:28
 * @FilePath: /tdesign-miniprogram-snippets/src/commands/index.ts
 * @Description: 指令
 */
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs-extra";
import { config } from "../config";

let createPageCommand: vscode.Disposable | undefined;
let createComponentCommand: vscode.Disposable | undefined;

const types = {
  page: "页面",
  component: "组件",
};

type Type = keyof typeof types;

async function copyFile(pageDir: string, pageSource: string, type: Type) {
  // 目录不存在时，使用默认模板
  if (!fs.pathExistsSync(pageDir)) {
    vscode.window.showErrorMessage(`${types[type]}所在目录不存在！`);
    return;
  }

  if (!fs.pathExistsSync(pageSource)) {
    vscode.window.showErrorMessage(`${types[type]}模板不存在！`);
    return;
  }

  // 预设路径为当前目录
  const pageName = await vscode.window.showInputBox({
    placeHolder: `请输入${types[type]}目录名称`,
    prompt: `请输入${types[type]}目录名称`,
  });

  if (pageName) {
    const targetPath = path.join(pageDir, pageName);
    fs.ensureDirSync(targetPath);
    fs.copySync(pageSource, targetPath);
  } else {
    vscode.window.showErrorMessage("名称不能为空！");
  }
}

async function createPage(type: Type, url: vscode.Uri | undefined) {
  let pageSource = type === "page" ? config.createPageSource : config.createComponentSource;

  // 目录不存在时，使用默认模板
  if (!fs.pathExistsSync(pageSource)) {
    pageSource = path.join(__dirname, `../../templates/${type}`);
  }

  if (url?.fsPath) {
    await copyFile(url.fsPath, pageSource, type);
    return;
  }

  let rootPath = "";
  if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
    rootPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
  } else {
    vscode.window.showErrorMessage("请先打开一个工作区！");
    return;
  }

  let currentFileDir = "";
  const { activeTextEditor } = vscode.window;
  if (activeTextEditor) {
    currentFileDir = path.dirname(activeTextEditor.document.fileName);
  }

  const pageDir = await vscode.window.showInputBox({
    placeHolder: `请输入${types[type]}所在目录路径`,
    prompt: `请输入${types[type]}所在目录路径`,
    value: currentFileDir || rootPath,
  });

  if (pageDir) {
    await copyFile(pageDir, pageSource, type);
  } else {
    vscode.window.showErrorMessage("路径不能为空！");
  }
}

export const Commands = {
  page: function (url: vscode.Uri | undefined) {
    return createPage("page", url);
  },
  component: function (url: vscode.Uri | undefined) {
    return createPage("component", url);
  },
};

function updateCommandRegistration(
  context: vscode.ExtensionContext,
  e: vscode.ConfigurationChangeEvent | undefined,
  isEnabled: boolean,
  configKey: string,
  commandKey: "createPage" | "createComponent",
  commandImpl: (url?: vscode.Uri) => void,
  getCommand: () => vscode.Disposable | undefined,
  setCommand: (disposable: vscode.Disposable | undefined) => void
) {
  if (e && !e.affectsConfiguration(`tdesign-miniprogram-snippets.${configKey}`)) {
    return;
  }

  const showContextKey = `tdesign-miniprogram-snippets.show${
    commandKey.charAt(0).toUpperCase() + commandKey.slice(1)
  }Command`;
  const commandId = `tdesign-miniprogram-snippets.${commandKey}`;
  const commandDisposable = getCommand();

  if (isEnabled) {
    if (!commandDisposable) {
      vscode.commands.executeCommand("setContext", showContextKey, true);
      const newCommand = vscode.commands.registerCommand(commandId, commandImpl);
      context.subscriptions.push(newCommand);
      setCommand(newCommand);
    }
  } else {
    vscode.commands.executeCommand("setContext", showContextKey, false);
    if (commandDisposable) {
      commandDisposable.dispose();
      setCommand(undefined);
    }
  }
}

export function createPageListener(
  enableCreatePage: boolean,
  context: vscode.ExtensionContext,
  e?: vscode.ConfigurationChangeEvent
) {
  updateCommandRegistration(
    context,
    e,
    enableCreatePage,
    "enableCreatePage",
    "createPage",
    Commands.page,
    () => createPageCommand,
    (d) => {
      createPageCommand = d;
    }
  );
}

export function createComponentListener(
  enableCreateComponent: boolean,
  context: vscode.ExtensionContext,
  e?: vscode.ConfigurationChangeEvent
) {
  updateCommandRegistration(
    context,
    e,
    enableCreateComponent,
    "enableCreateComponent",
    "createComponent",
    Commands.component,
    () => createComponentCommand,
    (d) => {
      createComponentCommand = d;
    }
  );
}
