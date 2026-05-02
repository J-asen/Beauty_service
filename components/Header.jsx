import Icon from "./Icon";
import { navLinks } from "../data/content";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="花糖亲子美妆预约首页">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/brand-logo.png" alt="" />
          </span>
          <span className="brand-name">花糖亲子美妆预约</span>
        </a>

        <div className="nav-links" aria-label="页面分区">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#booking">
          <Icon name="calendar" />
          立即预约
        </a>
      </nav>
    </header>
  );
}
