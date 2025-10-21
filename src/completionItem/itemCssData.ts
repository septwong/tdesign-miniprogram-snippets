/*
 * @Author: Wong septwong@foxmail.com
 * @Date: 2024-12-31 10:19:00
 * @LastEditors: Wong septwong@foxmail.com
 * @LastEditTime: 2025-10-21 18:33:11
 * @FilePath: /tdesign-miniprogram-snippets/src/completionItem/itemCssData.ts
 * @Description:
 */
import { type CompletionCssObject } from "./types";

export const CompletionCssData: CompletionCssObject = {
  // 基础
  "t-button": {
    attrs: [
      {
        name: "--td-button-border-radius",
        defaultValue: "@radius-default",
        description: "-",
      },
      {
        name: "--td-button-border-width",
        defaultValue: "4rpx",
        description: "-",
      },
      {
        name: "--td-button-danger-active-bg-color",
        defaultValue: "@error-color-active",
        description: "-",
      },
      {
        name: "--td-button-danger-active-border-color",
        defaultValue: "@error-color-active",
        description: "-",
      },
      {
        name: "--td-button-danger-bg-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-danger-border-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-danger-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-button-danger-dashed-border-color",
        defaultValue: "@button-danger-dashed-color",
        description: "-",
      },
      {
        name: "--td-button-danger-dashed-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-danger-dashed-disabled-color",
        defaultValue: "@button-danger-disabled-color",
        description: "-",
      },
      {
        name: "--td-button-danger-disabled-bg",
        defaultValue: "@error-color-3",
        description: "-",
      },
      {
        name: "--td-button-danger-disabled-border-color",
        defaultValue: "@error-color-3",
        description: "-",
      },
      {
        name: "--td-button-danger-disabled-color",
        defaultValue: "@font-white-1",
        description: "-",
      },
      {
        name: "--td-button-danger-outline-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-danger-outline-active-border-color",
        defaultValue: "@error-color-active",
        description: "-",
      },
      {
        name: "--td-button-danger-outline-border-color",
        defaultValue: "@button-danger-outline-color",
        description: "-",
      },
      {
        name: "--td-button-danger-outline-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-danger-outline-disabled-color",
        defaultValue: "@error-color-3",
        description: "-",
      },
      {
        name: "--td-button-danger-text-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-danger-text-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-danger-text-disabled-color",
        defaultValue: "@button-danger-disabled-color",
        description: "-",
      },
      {
        name: "--td-button-default-active-bg-color",
        defaultValue: "@bg-color-component-active",
        description: "-",
      },
      {
        name: "--td-button-default-active-border-color",
        defaultValue: "@bg-color-component-active",
        description: "-",
      },
      {
        name: "--td-button-default-bg-color",
        defaultValue: "@bg-color-component",
        description: "-",
      },
      {
        name: "--td-button-default-border-color",
        defaultValue: "@bg-color-component",
        description: "-",
      },
      {
        name: "--td-button-default-color",
        defaultValue: "@text-color-primary",
        description: "-",
      },
      {
        name: "--td-button-default-disabled-bg",
        defaultValue: "@bg-color-component-disabled",
        description: "-",
      },
      {
        name: "--td-button-default-disabled-border-color",
        defaultValue: "@bg-color-component-disabled",
        description: "-",
      },
      {
        name: "--td-button-default-disabled-color",
        defaultValue: "@text-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-default-outline-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-default-outline-active-border-color",
        defaultValue: "@component-border",
        description: "-",
      },
      {
        name: "--td-button-default-outline-border-color",
        defaultValue: "@component-border",
        description: "-",
      },
      {
        name: "--td-button-default-outline-color",
        defaultValue: "@text-color-primary",
        description: "-",
      },
      {
        name: "--td-button-default-outline-disabled-color",
        defaultValue: "@component-border",
        description: "-",
      },
      {
        name: "--td-button-default-text-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-extra-small-font-size",
        defaultValue: "@font-size-base",
        description: "-",
      },
      {
        name: "--td-button-extra-small-height",
        defaultValue: "56rpx",
        description: "-",
      },
      {
        name: "--td-button-extra-small-icon-font-size",
        defaultValue: "36rpx",
        description: "-",
      },
      {
        name: "--td-button-extra-small-padding-horizontal",
        defaultValue: "16rpx",
        description: "-",
      },
      {
        name: "--td-button-font-weight",
        defaultValue: "600",
        description: "-",
      },
      {
        name: "--td-button-ghost-border-color",
        defaultValue: "@button-ghost-color",
        description: "-",
      },
      {
        name: "--td-button-ghost-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-button-ghost-danger-border-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-ghost-danger-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-button-ghost-danger-hover-color",
        defaultValue: "@error-color-active",
        description: "-",
      },
      {
        name: "--td-button-ghost-disabled-color",
        defaultValue: "@font-white-4",
        description: "-",
      },
      {
        name: "--td-button-ghost-hover-color",
        defaultValue: "@font-white-2",
        description: "-",
      },
      {
        name: "--td-button-ghost-primary-border-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-ghost-primary-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-ghost-primary-hover-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-button-icon-border-radius",
        defaultValue: "8rpx",
        description: "-",
      },
      {
        name: "--td-button-icon-spacer",
        defaultValue: "@spacer",
        description: "-",
      },
      {
        name: "--td-button-large-font-size",
        defaultValue: "@font-size-m",
        description: "-",
      },
      {
        name: "--td-button-large-height",
        defaultValue: "96rpx",
        description: "-",
      },
      {
        name: "--td-button-large-icon-font-size",
        defaultValue: "48rpx",
        description: "-",
      },
      {
        name: "--td-button-large-padding-horizontal",
        defaultValue: "40rpx",
        description: "-",
      },
      {
        name: "--td-button-light-active-bg-color",
        defaultValue: "@brand-color-light-active",
        description: "-",
      },
      {
        name: "--td-button-light-active-border-color",
        defaultValue: "@brand-color-light-active",
        description: "-",
      },
      {
        name: "--td-button-light-bg-color",
        defaultValue: "@brand-color-light",
        description: "-",
      },
      {
        name: "--td-button-light-border-color",
        defaultValue: "@brand-color-light",
        description: "-",
      },
      {
        name: "--td-button-light-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-light-disabled-bg",
        defaultValue: "@brand-color-light",
        description: "-",
      },
      {
        name: "--td-button-light-disabled-border-color",
        defaultValue: "@brand-color-light",
        description: "-",
      },
      {
        name: "--td-button-light-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-light-outline-active-bg-color",
        defaultValue: "@brand-color-light-active",
        description: "-",
      },
      {
        name: "--td-button-light-outline-active-border-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-button-light-outline-bg-color",
        defaultValue: "@brand-color-light",
        description: "-",
      },
      {
        name: "--td-button-light-outline-border-color",
        defaultValue: "@button-light-outline-color",
        description: "-",
      },
      {
        name: "--td-button-light-outline-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-light-outline-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-light-text-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-light-text-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-medium-font-size",
        defaultValue: "@font-size-m",
        description: "-",
      },
      {
        name: "--td-button-medium-height",
        defaultValue: "80rpx",
        description: "-",
      },
      {
        name: "--td-button-medium-icon-font-size",
        defaultValue: "40rpx",
        description: "-",
      },
      {
        name: "--td-button-medium-padding-horizontal",
        defaultValue: "32rpx",
        description: "-",
      },
      {
        name: "--td-button-primary-active-bg-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-button-primary-active-border-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-button-primary-bg-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-primary-border-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-primary-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-button-primary-dashed-border-color",
        defaultValue: "@button-primary-dashed-color",
        description: "-",
      },
      {
        name: "--td-button-primary-dashed-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-primary-dashed-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-primary-disabled-bg",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-primary-disabled-border-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-primary-disabled-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-button-primary-outline-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-primary-outline-active-border-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-button-primary-outline-border-color",
        defaultValue: "@button-primary-outline-color",
        description: "-",
      },
      {
        name: "--td-button-primary-outline-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-primary-outline-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-primary-text-active-bg-color",
        defaultValue: "@bg-color-container-active",
        description: "-",
      },
      {
        name: "--td-button-primary-text-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-button-primary-text-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-button-small-font-size",
        defaultValue: "@font-size-base",
        description: "-",
      },
      {
        name: "--td-button-small-height",
        defaultValue: "64rpx",
        description: "-",
      },
      {
        name: "--td-button-small-icon-font-size",
        defaultValue: "36rpx",
        description: "-",
      },
      {
        name: "--td-button-small-padding-horizontal",
        defaultValue: "24rpx",
        description: "-",
      },
    ],
  },
  "t-divider": {
    attrs: [
      {
        name: "--td-divider-color",
        defaultValue: "@bg-color-component",
        description: "-",
      },
      {
        name: "--td-divider-content-color",
        defaultValue: "@font-gray-3",
        description: "-",
      },
      {
        name: "--td-divider-content-font-size",
        defaultValue: "24rpx",
        description: "-",
      },
      {
        name: "--td-divider-content-line-height",
        defaultValue: "40rpx",
        description: "-",
      },
      {
        name: "--td-divider-content-line-style",
        defaultValue: "solid",
        description: "-",
      },
    ],
  },
  "t-fab": {
    attrs: [
      {
        name: "--td-fab-shadow",
        defaultValue: "@shadow-2",
        description: "-",
      },
    ],
  },
  "t-icon": {
    attrs: [],
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
        name: "--td-link-danger-active-color",
        defaultValue: "@error-color-active",
        description: "-",
      },
      {
        name: "--td-link-danger-color",
        defaultValue: "@error-color",
        description: "-",
      },
      {
        name: "--td-link-danger-disabled-color",
        defaultValue: "@error-color-disabled",
        description: "-",
      },
      {
        name: "--td-link-default-active-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-link-default-color",
        defaultValue: "@font-gray-1",
        description: "-",
      },
      {
        name: "--td-link-default-disabled-color",
        defaultValue: "@text-color-disabled",
        description: "-",
      },
      {
        name: "--td-link-primary-active-color",
        defaultValue: "@brand-color-active",
        description: "-",
      },
      {
        name: "--td-link-primary-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-link-primary-disabled-color",
        defaultValue: "@brand-color-disabled",
        description: "-",
      },
      {
        name: "--td-link-success-active-color",
        defaultValue: "@success-color-active",
        description: "-",
      },
      {
        name: "--td-link-success-color",
        defaultValue: "@success-color",
        description: "-",
      },
      {
        name: "--td-link-success-disabled-color",
        defaultValue: "@success-color-disabled",
        description: "-",
      },
      {
        name: "--td-link-warning-active-color",
        defaultValue: "@warning-color-active",
        description: "-",
      },
      {
        name: "--td-link-warning-color",
        defaultValue: "@warning-color",
        description: "-",
      },
      {
        name: "--td-link-warning-disabled-color",
        defaultValue: "@warning-color-disabled",
        description: "-",
      },
    ],
  },
  // 导航
  "t-side-bar": {
    attrs: [
      {
        name: "--td-side-bar-bg-color",
        defaultValue: "@bg-color-secondarycontainer",
        description: "-",
      },
      {
        name: "--td-side-bar-height",
        defaultValue: "100%",
        description: "-",
      },
      {
        name: "--td-side-bar-width",
        defaultValue: "206rpx",
        description: "-",
      },
      {
        name: "--td-side-bar-active-color",
        defaultValue: "@brand-color",
        description: "-",
      },
      {
        name: "--td-side-bar-border-radius",
        defaultValue: "18rpx",
        description: "-",
      },
      {
        name: "--td-side-bar-color",
        defaultValue: "@text-color-primary",
        description: "-",
      },
      {
        name: "--td-side-bar-disabled-color",
        defaultValue: "@text-color-disabled",
        description: "-",
      },
      {
        name: "--td-side-bar-font-size",
        defaultValue: "32rpx",
        description: "-",
      },
      {
        name: "--td-side-bar-icon-size",
        defaultValue: "40rpx",
        description: "-",
      },
      {
        name: "--td-side-bar-item-height",
        defaultValue: "auto",
        description: "-",
      },
      {
        name: "--td-side-bar-item-line-height",
        defaultValue: "48rpx",
        description: "-",
      },
    ],
  },
  // 输入
  "t-textarea": {
    attrs: [
      {
        name: "--td-textarea-background-color",
        defaultValue: "@bg-color-container",
        description: "-",
      },
      {
        name: "--td-textarea-border-color",
        defaultValue: "@component-border",
        description: "-",
      },
      {
        name: "--td-textarea-border-radius",
        defaultValue: "@radius-default",
        description: "-",
      },
      {
        name: "--td-textarea-disabled-text-color",
        defaultValue: "@text-color-disabled",
        description: "-",
      },
      {
        name: "--td-textarea-indicator-text-color",
        defaultValue: "@text-color-placeholder",
        description: "-",
      },
      {
        name: "--td-textarea-label-color",
        defaultValue: "@text-color-primary",
        description: "-",
      },
      {
        name: "--td-textarea-padding",
        defaultValue: "32rpx",
        description: "-",
      },
      {
        name: "--td-textarea-placeholder-color",
        defaultValue: "@text-color-placeholder",
        description: "-",
      },
      {
        name: "--td-textarea-text-color",
        defaultValue: "@text-color-primary",
        description: "-",
      },
    ],
  },
  // 数据展示
  "t-qrcode": {
    attrs: [
      {
        name: "--td-font-size-title-small",
        defaultValue: "--td-font-size-title-small",
        description: "-",
      },
      {
        name: "--td-brand-color-hover",
        defaultValue: "--td-brand-color-hover",
        description: "-",
      },
      {
        name: "--td-success-color",
        defaultValue: "--td-success-color",
        description: "-",
      },
    ],
  },
  "t-swiper": {
    attrs: [
      {
        name: "--td-swiper-item-padding",
        defaultValue: "0",
        description: "-",
      },
      {
        name: "--td-swiper-radius",
        defaultValue: "@radius-large",
        description: "-",
      },
      {
        name: "--td-swiper-nav-btn-bg-color",
        defaultValue: "@font-gray-3",
        description: "-",
      },
      {
        name: "--td-swiper-nav-btn-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-swiper-nav-btn-size",
        defaultValue: "48rpx",
        description: "-",
      },
      {
        name: "--td-swiper-nav-dot-active-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-swiper-nav-dot-color",
        defaultValue: "@font-white-2",
        description: "-",
      },
      {
        name: "--td-swiper-nav-dot-size",
        defaultValue: "12rpx",
        description: "-",
      },
      {
        name: "--td-swiper-nav-dots-bar-active-width",
        defaultValue: "40rpx",
        description: "-",
      },
      {
        name: "--td-swiper-nav-fraction-bg-color",
        defaultValue: "@font-gray-3",
        description: "-",
      },
      {
        name: "--td-swiper-nav-fraction-color",
        defaultValue: "@text-color-anti",
        description: "-",
      },
      {
        name: "--td-swiper-nav-fraction-font-size",
        defaultValue: "24rpx",
        description: "-",
      },
      {
        name: "--td-swiper-nav-fraction-height",
        defaultValue: "48rpx",
        description: "-",
      },
    ],
  },
  // 反馈
  "t-action-sheet": {
    attrs: [],
  },
};
