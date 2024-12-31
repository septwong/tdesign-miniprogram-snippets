/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-27 14:17:21
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2024-12-31 10:17:55
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemEventData.ts
 * @Description: 
 */
import { type CompletionEventObject } from "./types";

export const CompletionEventData: CompletionEventObject = {
  "t-button": {
    attrs: [
      {
        "name": "agreeprivacyauthorization",
        "params": "\\-",
        "description": "原生按钮属性，用户同意隐私协议事件回调，open-type=agreePrivacyAuthorization时有效 （Tips: 如果使用 onNeedPrivacyAuthorization 接口，需要在 bindagreeprivacyauthorization 触发后再调用 resolve({ event: \"agree\", buttonId })）"
      },
      {
        "name": "chooseavatar",
        "params": "\\-",
        "description": "原生按钮属性，获取用户头像回调，`open-type=chooseAvatar` 时有效。返回 `e.detail.avatarUrl` 为头像临时文件链接"
      },
      {
        "name": "contact",
        "params": "\\-",
        "description": "原生按钮属性，客服消息回调，`open-type=\"contact\"` 时有效"
      },
      {
        "name": "createliveactivity",
        "params": "\\-",
        "description": "新的一次性订阅消息下发机制回调，`open-type=liveActivity` 时有效"
      },
      {
        "name": "error",
        "params": "\\-",
        "description": "原生按钮属性，当使用开放能力时，发生错误的回调，`open-type=launchApp` 时有效"
      },
      {
        "name": "getphonenumber",
        "params": "\\-",
        "description": "原生按钮属性，手机号快速验证回调，open-type=getPhoneNumber时有效。Tips：在触发 bindgetphonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用"
      },
      {
        "name": "getrealtimephonenumber",
        "params": "\\-",
        "description": "原生按钮属性，手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效。Tips：在触发 bindgetrealtimephonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用"
      },
      {
        "name": "getuserinfo",
        "params": "\\-",
        "description": "原生按钮属性，用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type=\"getUserInfo\"时有效"
      },
      {
        "name": "launchapp",
        "params": "\\-",
        "description": "打开 APP 成功的回调，`open-type=launchApp` 时有效"
      },
      {
        "name": "opensetting",
        "params": "\\-",
        "description": "原生按钮属性，在打开授权设置页后回调，open-type=openSetting时有效"
      },
      {
        "name": "tap",
        "params": "`event`",
        "description": "点击按钮，当按钮不为加载或禁用状态时触发"
      }
    ],
  },
  "t-divider": {
    attrs: [],
  }
};