export const navLinks = [
  { href: "#services", label: "服务项目" },
  { href: "#packages", label: "亲子套餐" },
  { href: "#process", label: "上门流程" },
  { href: "#store", label: "到店服务" },
];

export const heroFacts = [
  { title: "10km 上门", text: "服务范围为门店周边 10km" },
  { title: "满 299 免上门费", text: "未满 299 元收取 39 元" },
  { title: "大人孩子都可约", text: "一张表单完成亲子预约" },
];

export const services = [
  {
    icon: "polish",
    title: "成人美甲",
    text: "通勤裸色、节日亮片、亲子同款色系，适合日常与拍照场景。",
    tags: ["可上门", "可到店"],
  },
  {
    icon: "makeup",
    title: "成人发型妆造",
    text: "轻妆、盘发、汉服妆造和聚会造型，适合家庭活动前快速准备。",
    tags: ["妆发组合", "汉服适配"],
  },
  {
    icon: "kids",
    title: "儿童彩绘美甲",
    text: "面部彩绘、儿童友好美甲和亲子小造型，气氛轻松有仪式感。",
    tags: ["儿童友好", "派对适合"],
  },
  {
    icon: "hanfu",
    title: "亲子汉服造型",
    text: "成人与儿童汉服搭配、发饰和基础造型建议，适合节日与拍摄。",
    tags: ["成人儿童", "出片推荐"],
  },
];

export const packages = [
  {
    tag: "周末亲子日",
    title: "妈妈美甲 + 儿童彩绘",
    text: "适合轻松体验，时间短、互动感强，大人孩子都能参与。",
  },
  {
    tag: "节日出片",
    title: "汉服妆发 + 儿童汉服",
    text: "适合端午、中秋、生日照或家庭写真前的造型准备。",
  },
  {
    tag: "派对上门",
    title: "多人美甲 + 儿童造型",
    text: "适合生日、闺蜜聚会和社区活动，可按人数安排服务节奏。",
  },
];

export const processSteps = [
  {
    title: "填写预约",
    text: "选择上门或到店，填写时间、人数、项目和备注。",
  },
  {
    title: "客服确认",
    text: "核对门店周边 10km 范围、服务组合和上门费用规则。",
  },
  {
    title: "准备上门",
    text: "美妆师携带工具到达，建议提前准备明亮桌面和座位。",
  },
  {
    title: "完成造型",
    text: "按预约内容完成成人与儿童服务，并给出简单维护建议。",
  },
];

export const storeNotices = [
  {
    icon: "swatches",
    title: "现场选款",
    text: "美甲色卡、发饰、汉服搭配可当面确认，选择更直观。",
  },
  {
    icon: "clock",
    title: "时间更稳定",
    text: "到店不受上门路程影响，适合紧凑行程和多人连续服务。",
  },
  {
    icon: "clipboard",
    title: "适合试搭",
    text: "汉服、发饰和妆容可以现场微调，更适合正式拍摄前准备。",
  },
  {
    icon: "shield",
    title: "儿童友好",
    text: "儿童项目会尽量控制时长和步骤，减少等待和不适感。",
  },
];

export const prepNotices = [
  {
    icon: "spark",
    title: "准备明亮桌面",
    text: "美甲和彩绘需要稳定台面，建议提前清出一块光线好的位置。",
  },
  {
    icon: "note",
    title: "备注孩子年龄",
    text: "儿童服务会根据年龄调整沟通方式和服务时长，预约时写清更稳妥。",
  },
  {
    icon: "style",
    title: "提前说风格",
    text: "甜酷、温柔、国风、生日主题等，提前备注有助于准备材料。",
  },
  {
    icon: "message",
    title: "预约后再确认",
    text: "预约后会继续确认时间、地址、项目组合和服务时长，避免临时遗漏。",
  },
];

export const projectOptionsByAudience = {
  成人: ["成人美甲", "成人发型妆造", "成人汉服造型"],
  儿童: ["儿童彩绘", "儿童美甲/发型", "儿童汉服造型"],
  亲子一起: [
    "亲子组合套餐",
    "妈妈美甲 + 儿童彩绘",
    "汉服妆发 + 儿童汉服",
    "亲子同款美甲",
  ],
  多人派对: ["派对多人服务", "多人美甲 + 儿童造型", "生日派对彩绘", "社区活动造型"],
};
