/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:17:21
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2026-02-04 16:27:56
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemEventData.ts
 * @Description:
 */
import { type CompletionEventObject } from "./types";

export const CompletionEventData: CompletionEventObject = {
  // 高阶
  "t-chat": {
    // AI Chat 对话 - 对话列表
    attrs: [
      {
        name: "scroll",
        params: "`(detail: {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})`",
        description: "滚动事件的回调",
      },
    ],
  },
  "t-chat-sender": {
    // AI Chat 对话 - 对话输入
    attrs: [
      {
        name: "blur",
        params: "`(value:string, context: { e: FocusEvent })`",
        description: "输入框聚焦时触发",
      },
      {
        name: "change",
        params: "`(value:string, context: { e: InputEvent | MouseEvent | KeyboardEvent })`",
        description: "输入框值发生变化时触发",
      },
      {
        name: "file-add",
        params: "\\-",
        description: "添加附件时触发",
      },
      {
        name: "file-change",
        params: "`(file:FileItem)`",
        description: "附件列表变化时触发",
      },
      {
        name: "file-click",
        params: "`(file:FileItem)`",
        description: "点击附件时触发",
      },
      {
        name: "file-delete",
        params: "`(file:FileItem)`",
        description: "删除附件时触发",
      },
      {
        name: "file-select",
        params: "`(detail: {files: FileList, name: UploadActionType})`",
        description: "选择文件（图片/微信文件）时触发",
      },
      {
        name: "focus",
        params: "`(value:string, context: { e: FocusEvent }) `",
        description: "输入框聚焦时触发",
      },
      {
        name: "keyboardheightchange",
        params: "`(detail: {height: number, duration: number})`",
        description: "选择文件（图片/微信文件）时触发",
      },
      {
        name: "send",
        params: "`(value:string, context: {| KeyboardEvent })`",
        description: "点击消息发送的回调方法",
      },
      {
        name: "stop",
        params: "`(value:string)`",
        description: "点击消息终止的回调方法",
      },
      {
        name: "upload-click",
        params: "\\-",
        description: "【实验】点击上传按钮时触发",
      },
    ],
  },
  "t-chat-message": {
    // AI Chat 对话 - 对话消息体
    attrs: [
      {
        name: "longpress",
        params: "`(detail: { id: string })`",
        description: "\\-",
      },
    ],
  },
  "t-chat-actionbar": {
    // AI Chat 对话 - 对话操作
    attrs: [
      {
        name: "actions",
        params: "`(detail: {name: string, active: boolean, chatId: string})`",
        description: "点击点赞，点踩，复制，分享，重新生成按钮时触发发",
      },
    ],
  },
  "t-chat-markdown": {
    // AI Chat 对话 - Markdown内容
    attrs: [
      {
        name: "click",
        params: "`(detail: {detail:{event, node}, currentTarget, target})`",
        description: "点击链接时触发",
      },
    ],
  },
  "t-chat-thinking": {
    // AI Chat 对话 - 思考过程
    attrs: [
      {
        name: "collapsed-change",
        params: "`(value: Boolean)`",
        description: "切换折叠面板时触发",
      },
    ],
  },
  "t-chat-loading": {
    // AI Chat 对话 - 对话加载
    attrs: [],
  },
  "t-attachments": {
    // AI Chat 对话 - 文件附件
    attrs: [
      {
        name: "add",
        params: "\\-",
        description: "点击添加按钮时触发",
      },
      {
        name: "file-click",
        params: "`(item: FileItem)`",
        description: "点击文件时触发",
      },
      {
        name: "remove",
        params: "`(item: FileItem, index: number)`",
        description: "点击删除按钮时触发",
      },
    ],
  },
  "t-chat-content": {
    // AI Chat 对话 - 对话正文
    attrs: [],
  },
  // 基础
  "t-button": {
    attrs: [
      {
        name: "agreeprivacyauthorization",
        params: "\\-",
        description:
          '原生按钮属性，用户同意隐私协议事件回调，open-type=agreePrivacyAuthorization时有效 （Tips: 如果使用 onNeedPrivacyAuthorization 接口，需要在 bindagreeprivacyauthorization 触发后再调用 resolve({ event: "agree", buttonId })）',
      },
      {
        name: "chooseavatar",
        params: "\\-",
        description:
          "原生按钮属性，获取用户头像回调，`open-type=chooseAvatar` 时有效。返回 `e.detail.avatarUrl` 为头像临时文件链接",
      },
      {
        name: "click",
        params: "`(e: MouseEvent)`",
        description: "点击时触发",
      },
      {
        name: "contact",
        params: "\\-",
        description: '原生按钮属性，客服消息回调，`open-type="contact"` 时有效',
      },
      {
        name: "createliveactivity",
        params: "\\-",
        description: "新的一次性订阅消息下发机制回调，`open-type=liveActivity` 时有效",
      },
      {
        name: "error",
        params: "\\-",
        description: "原生按钮属性，当使用开放能力时，发生错误的回调，`open-type=launchApp` 时有效",
      },
      {
        name: "getphonenumber",
        params: "\\-",
        description:
          "原生按钮属性，手机号快速验证回调，open-type=getPhoneNumber时有效。Tips：在触发 bindgetphonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用",
      },
      {
        name: "getrealtimephonenumber",
        params: "\\-",
        description:
          "原生按钮属性，手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效。Tips：在触发 bindgetrealtimephonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用",
      },
      {
        name: "getuserinfo",
        params: "\\-",
        description:
          '原生按钮属性，用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效',
      },
      {
        name: "launchapp",
        params: "\\-",
        description: "打开 APP 成功的回调，`open-type=launchApp` 时有效",
      },
      {
        name: "opensetting",
        params: "\\-",
        description: "原生按钮属性，在打开授权设置页后回调，open-type=openSetting时有效",
      },
      {
        name: "tap",
        params: "`event`",
        description: "点击按钮，当按钮不为加载或禁用状态时触发",
      },
    ],
  },
  "t-divider": {
    attrs: [],
  },
  "t-fab": {
    attrs: [
      {
        name: "click",
        params: "`({e: Event})`",
        description: "悬浮按钮点击事件",
      },
      {
        name: "drag-end",
        params: "`(e: TouchEvent)`",
        description: "结束拖拽时触发",
      },
      {
        name: "drag-start",
        params: "`(e: TouchEvent)`",
        description: "开始拖拽时触发",
      },
    ],
  },
  "t-icon": {
    attrs: [
      {
        name: "click",
        params: "\\-",
        description:
          "点击图标时触发。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)",
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
        name: "complete",
        params: "\\-",
        description: "页面链接执行完成后触发（失败或成功均会触发）",
      },
      {
        name: "fail",
        params: "\\-",
        description: "页面链接跳转失败后触发",
      },
      {
        name: "success",
        params: "\\-",
        description: "页面链接跳转成功后触发",
      },
    ],
  },
  // 导航
  "t-side-bar": {
    attrs: [
      {
        name: "change",
        params: "`(value: number | string, label: string)`",
        description: "选项值发生变化时触发",
      },
      {
        name: "click",
        params: "`(value: number | string, label: string)`",
        description: "点击选项时触发",
      },
    ],
  },
  // 输入
  "t-cascader": {
    attrs: [
      {
        name: "change",
        params: "`(value: string | number, selectedOptions: string[])`",
        description: "`1.0.1`。值发生变更时触发",
      },
      {
        name: "close",
        params: "`(trigger: CascaderTriggerSource)`",
        description:
          "`1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' | 'close-btn' | 'finish'`<br/>",
      },
      {
        name: "pick",
        params: "`(value: string | number, label: string, index: number, level: number)`",
        description: "`1.0.1`。选择后触发",
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
        name: "action-click",
        params: "`({})`",
        description: "点击右侧操作按钮文字时触发",
      },
      {
        name: "blur",
        params: "`({ value: string })`",
        description: "失去焦点时触发",
      },
      {
        name: "change",
        params: "`({ value: string, trigger: 'input-change' | 'option-click' | 'clear' })`",
        description: "值发生变化时触发",
      },
      {
        name: "clear",
        params: "`({ value: string })`",
        description: "点击清除时触发",
      },
      {
        name: "focus",
        params: "`({ value: string })`",
        description: "聚焦时触发",
      },
      {
        name: "submit",
        params: "`({ value: string })`",
        description: "提交时触发",
      },
    ],
  },
  "t-slider": {
    attrs: [],
  },
  "t-textarea": {
    attrs: [
      {
        name: "blur",
        params: "`(value: TextareaValue, cursor: number)`",
        description: "失去焦点时触发",
      },
      {
        name: "change",
        params: "`(value: TextareaValue, cursor: number)`",
        description: "输入内容变化时触发",
      },
      {
        name: "enter",
        params: "`(value: TextareaValue)`",
        description: "点击完成时触发",
      },
      {
        name: "focus",
        params: "`(value: TextareaValue)`",
        description: "获得焦点时触发",
      },
      {
        name: "keyboardheightchange",
        params: "`(height: number, duration: number)`",
        description: "键盘高度发生变化的时候触发此事件",
      },
      {
        name: "line-change",
        params: "`(value: TextareaValue)`",
        description: "行高发生变化时触发",
      },
    ],
  },
  // 数据展示
  "t-collapse": {
    attrs: [
      {
        name: "change",
        params: "`(value: CollapseValue)`",
        description: "切换面板时触发，返回变化的值",
      },
    ],
  },
  "t-qrcode": {
    attrs: [
      {
        name: "refresh",
        params: "\\-",
        description: "点击`点击刷新`的回调",
      },
    ],
  },
  "t-swiper": {
    attrs: [
      {
        name: "animationfinish",
        params: "`(current: number, source: SwiperChangeSource)`",
        description: "`1.11.0`。轮播切换时触发",
      },
      {
        name: "change",
        params: "`(current: number, source: SwiperChangeSource)`",
        description:
          "轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' | 'touch' | 'nav'`<br/>",
      },
      {
        name: "click",
        params: "`(index: number)`",
        description: "`0.34.0`。点击轮播项时触发",
      },
      {
        name: "image-load",
        params: "`(index: number)`",
        description: "`1.1.4`。图片加载时触发",
      },
    ],
  },
  "t-swiper-nav": {
    attrs: [],
  },
  // 反馈
  "t-action-sheet": {
    attrs: [
      {
        name: "cancel",
        params: "\\-",
        description: "点击取消按钮时触发",
      },
      {
        name: "close",
        params: "`(trigger: ActionSheetTriggerSource)`",
        description:
          "关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' | 'command' | 'select' `<br/>",
      },
      {
        name: "selected",
        params: "`(selected: ActionSheetItem | string, index: number)`",
        description: "选择菜单项时触发",
      },
    ],
  },
  "t-popover": {
    attrs: [
      {
        name: "visible-change",
        params: "`(visible: boolean)`",
        description: "确认框显示或隐藏时触发",
      },
    ],
  },
};
