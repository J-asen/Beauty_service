const paths = {
  calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  calendarDots: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  plusArrow: (
    <>
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M18 6l-6 6-6-6" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </>
  ),
  polish: (
    <>
      <path d="M7 21h10" />
      <path d="M12 21V7" />
      <path d="M8 7h8l-1-4H9L8 7z" />
      <path d="M9 11h6" />
    </>
  ),
  makeup: (
    <>
      <path d="M4 20c3-7 13-7 16 0" />
      <path d="M8 14c-2-2-2-7 4-10 6 3 6 8 4 10" />
      <path d="M9 12c2 2 4 2 6 0" />
    </>
  ),
  kids: (
    <>
      <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M17 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      <path d="M4 21c.5-4 3-6 6-6s5.5 2 6 6" />
      <path d="M14 18c.8-1.7 2.2-2.6 4-2.6 2 0 3.4 1.1 4 3.1" />
    </>
  ),
  hanfu: (
    <>
      <path d="M6 3h12l-2 6 2 12H6L8 9 6 3z" />
      <path d="M9 3c0 3 6 3 6 0" />
      <path d="M8 9h8" />
    </>
  ),
  gift: (
    <>
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 2-4c.8 1 2.5 4 2.5 4z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0-2-4c-.8 1-2.5 4-2.5 4z" />
    </>
  ),
  process: (
    <>
      <path d="M3 6h18" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </>
  ),
  store: (
    <>
      <path d="M6 2h12l2 7H4l2-7z" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  money: (
    <>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
    </>
  ),
  swatches: (
    <>
      <path d="M4 19h16" />
      <path d="M4 15h16" />
      <path d="M4 11h16" />
      <path d="M4 7h16" />
    </>
  ),
  clock: (
    <>
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14H4V6a2 2 0 0 1 2-2h2" />
      <path d="M9 2h6v6H9z" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  warning: (
    <>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0z" />
    </>
  ),
  spark: (
    <>
      <path d="M3 12h18" />
      <path d="M12 3v18" />
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </>
  ),
  note: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </>
  ),
  style: (
    <>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10l2 8a7 7 0 0 1-14 0l2-8z" />
    </>
  ),
  message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </>
  ),
};

export default function Icon({ name, className = "icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
