(() => {
  const analyticsId = String(window.BEEIT_ANALYTICS_ID || "").trim();

  function trackEvent(name, params = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }
    // Fallback an toàn khi chưa cấu hình GA4: không gửi dữ liệu đi đâu cả.
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      console.debug(`[BEEIT analytics] ${name}`, params);
    }
  }

  function loadGoogleAnalytics(id) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }

  if (/^G-[A-Z0-9]+$/i.test(analyticsId)) {
    loadGoogleAnalytics(analyticsId);
  }

  document.querySelectorAll("[data-event]").forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent(link.dataset.event, {
        channel: link.dataset.channel || "unknown",
        destination: link.href,
      });
    });
  });

  trackEvent("page_view", { page_title: document.title });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
