import Icon from "./Icon";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <strong>花糖亲子美妆预约</strong>
          <span>上门服务范围：门店周边 10km；满 299 元免上门费。</span>
        </div>
      </footer>

      <a className="mobile-cta" href="#booking">
        <Icon name="calendar" />
        立即预约上门
      </a>
    </>
  );
}
