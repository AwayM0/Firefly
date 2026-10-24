import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage:
		"您的打赏将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	// 模板自带的收款码和链接属于模板作者，已全部删除，请按下方格式添加你自己的打赏方式
	// 示例：
	// {
	// 	name: "支付宝",
	// 	icon: "fa7-brands:alipay",
	// 	// 收款码图片需放在 public 目录下
	// 	qrCode: "/assets/images/sponsor/alipay.png",
	// 	link: "",
	// 	description: "使用 支付宝 扫码打赏",
	// 	enabled: true,
	// },
	methods: [],

	// 打赏者列表（可选），按上方示例自行添加
	sponsors: [],
};
