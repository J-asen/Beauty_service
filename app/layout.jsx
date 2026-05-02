import "./globals.css";

export const metadata = {
  title: "花糖亲子美妆预约 | 上门美甲发型妆造汉服",
  description:
    "成人美甲、发型、妆造、汉服造型，搭配儿童彩绘、美甲、发型和儿童汉服的亲子美妆预约服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
