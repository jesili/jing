/* global SITE_DATA */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setTextById(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value ?? "";
}

function setHtmlById(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = value ?? "";
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.remove("show"), 1800);
}

function getLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "zh") return saved;
  return "zh";
}

function setLang(next) {
  localStorage.setItem("lang", next);
  document.documentElement.setAttribute("lang", next === "en" ? "en" : "zh-CN");
}

function pick(v, lang) {
  if (v && typeof v === "object" && ("zh" in v || "en" in v)) {
    return v[lang] ?? v.zh ?? v.en ?? "";
  }
  return v ?? "";
}

function setTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    setTheme(saved);
    return;
  }
  // follow system by default
  document.documentElement.removeAttribute("data-theme");
}

function fmtAuthors(authors, meNames) {
  const safe = (x) => escapeHtml(x);
  const norm = (s) => String(s || "").toLowerCase().replaceAll(/\s+/g, " ").trim();
  const meSet = new Set((Array.isArray(meNames) ? meNames : [meNames]).filter(Boolean).map(norm));
  return authors
    .map((a) => {
      if (!meSet.size) return safe(a);
      if (meSet.has(norm(a))) return `<b>${safe(a)}</b>`;
      return safe(a);
    })
    .join(", ");
}

function yearList(pubs) {
  const years = new Set(pubs.map((p) => p.year).filter(Boolean));
  return Array.from(years).sort((a, b) => b - a);
}

function normalize(str) {
  return String(str || "").toLowerCase();
}

function pubToSearchText(p) {
  const parts = [
    p.title,
    (p.authors || []).join(" "),
    p.venue,
    p.type,
    (p.tags || []).join(" "),
    (p.awards || []).join(" "),
    p.note,
  ];
  return normalize(parts.filter(Boolean).join(" | "));
}

function applyI18n(d, lang) {
  const dict = d?.i18n?.[lang] || {};
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = dict[key];
    if (typeof val === "string") el.textContent = val;
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (!key) return;
    const val = dict[key];
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });
}

function render() {
  const d = window.SITE_DATA;
  if (!d) return;
  const lang = getLang();
  setLang(lang);
  applyI18n(d, lang);

  // avatar
  const avatar = $("#avatarImg");
  if (avatar) {
    const url = pick(d.meta?.avatarUrl, lang) || pick(d.meta?.avatarUrl, "zh") || pick(d.meta?.avatarUrl, "en") || "";
    if (url) avatar.setAttribute("src", url);
  }

  // meta
  setTextById("name", pick(d.meta?.name, lang) || "Your Name");
  setTextById("affiliation", pick(d.meta?.affiliation, lang) || "");
  setTextById("heroTitle", pick(d.meta?.heroTitle, lang) || "");
  setTextById("heroSubtitle", pick(d.meta?.heroSubtitle, lang) || "");
  setTextById("aboutTagline", pick(d.meta?.aboutTagline, lang) || "");
  setHtmlById("bio", pick(d.meta?.bioHtml, lang) || "");

  const title = `${pick(d.meta?.name, lang) || "Your Name"} | ${lang === "en" ? "Academic Homepage" : "科研主页"}`;
  document.title = title;

  const cv = pick(d.meta?.cvUrl, lang) || "#";
  const cvBtn = $("#cvBtn");
  if (cvBtn) cvBtn.setAttribute("href", cv);

  // keywords chips
  const kw = $("#keywords");
  if (kw) {
    kw.innerHTML = "";
    (pick(d.meta?.keywords, lang) || d.meta?.keywords || d.keywords || []).forEach((k) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = k;
      kw.appendChild(span);
    });
  }

  // social links
  const links = $("#socialLinks");
  if (links) {
    links.innerHTML = "";
    (d.links || []).forEach((l) => {
      const label = pick(l.label, lang) || "Link";
      const hint = pick(l.hint, lang) || "";
      const a = document.createElement("a");
      a.className = "link-pill";
      a.href = l.url || "#";
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerHTML = `
        <span class="icon" aria-hidden="true">${escapeHtml(l.icon || "↗")}</span>
        <span>
          <span class="label">${escapeHtml(label)}</span>
          ${hint ? `<span class="hint"> · ${escapeHtml(hint)}</span>` : ""}
        </span>
      `;
      links.appendChild(a);
    });
  }

  // highlights
  const hl = $("#highlights");
  if (hl) {
    hl.innerHTML = "";
    (pick(d.highlights, lang) || d.highlights || []).forEach((h) => {
      const div = document.createElement("div");
      div.className = "stat";
      div.innerHTML = `
        <div class="k">${escapeHtml(h.k || "")}</div>
        <div class="v">${escapeHtml(h.v || "")}</div>
        <div class="s">${escapeHtml(h.s || "")}</div>
      `;
      hl.appendChild(div);
    });
  }

  // news
  const news = $("#news");
  if (news) {
    news.innerHTML = "";
    (pick(d.news, lang) || d.news || []).forEach((n) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="t">${escapeHtml(n.date || "")}</div>
        <div class="c">${n.contentHtml || escapeHtml(n.content || "")}</div>
      `;
      news.appendChild(li);
    });
  }

  // quick links
  const ql = $("#quickLinks");
  if (ql) {
    ql.innerHTML = "";
    (pick(d.quickLinks, lang) || d.quickLinks || []).forEach((q) => {
      const a = document.createElement("a");
      a.href = q.url || "#";
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = q.label || "Link";
      ql.appendChild(a);
    });
  }

  // interests
  const interests = $("#interests");
  if (interests) {
    interests.innerHTML = "";
    (pick(d.interests, lang) || d.interests || []).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = x;
      interests.appendChild(li);
    });
  }

  // research areas
  const areas = $("#researchAreas");
  if (areas) {
    areas.innerHTML = "";
    (pick(d.researchAreas, lang) || d.researchAreas || []).forEach((a) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-title">${escapeHtml(a.title || "")}</div>
        <div class="muted">${escapeHtml(a.desc || "")}</div>
        ${
          (a.bullets || []).length
            ? `<ul class="list">${a.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
            : ""
        }
      `;
      areas.appendChild(card);
    });
  }

  // teaching & service
  const t = $("#teachingList");
  if (t) {
    t.innerHTML = "";
    (pick(d.teaching, lang) || d.teaching || []).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = x;
      t.appendChild(li);
    });
  }
  const s = $("#serviceList");
  if (s) {
    s.innerHTML = "";
    (pick(d.service, lang) || d.service || []).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = x;
      s.appendChild(li);
    });
  }

  // honors
  const awardsList = $("#awardsList");
  if (awardsList) {
    awardsList.innerHTML = "";
    (pick(d.awards, lang) || d.awards || []).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = x;
      awardsList.appendChild(li);
    });
  }

  const grantsList = $("#grantsList");
  if (grantsList) {
    grantsList.innerHTML = "";
    (pick(d.grants, lang) || d.grants || []).forEach((x) => {
      const li = document.createElement("li");
      li.textContent = x;
      grantsList.appendChild(li);
    });
  }

  // contact
  const cc = $("#contactCard");
  if (cc) {
    cc.innerHTML = "";
    const c = pick(d.contact, lang) || d.contact || {};
    const rows = [
      [lang === "en" ? "Email" : "邮箱", c.email],
      [lang === "en" ? "Location" : "地点", c.location],
    ].filter(([, v]) => v);
    rows.forEach(([k, v]) => {
      const div = document.createElement("div");
      div.className = "kv";
      div.innerHTML = `<div class="k">${escapeHtml(k)}</div><div class="v">${escapeHtml(v)}</div>`;
      cc.appendChild(div);
    });
  }

  // downloads
  const dl = $("#downloads");
  if (dl) {
    dl.innerHTML = "";
    (pick(d.downloads, lang) || d.downloads || []).forEach((x) => {
      const a = document.createElement("a");
      a.href = x.url || "#";
      if (String(x.url || "").startsWith("http")) {
        a.target = "_blank";
        a.rel = "noreferrer";
      }
      a.innerHTML = `<span>${escapeHtml(x.label || "Download")}</span><span class="muted">${escapeHtml(
        x.right || "↗"
      )}</span>`;
      a.addEventListener("click", (e) => {
        if (x.url === "#bibtex-all" || x.url === "bibtex-all") {
          e.preventDefault();
          copyAllBibtex();
        }
      });
      dl.appendChild(a);
    });
  }

  // publications
  if ($("#pubList") && $("#pubYearFilters") && $("#pubSearch")) initPubs(d);

  // projects
  const pl = $("#projectsList");
  if (pl) {
    pl.innerHTML = "";
    (pick(d.projects, lang) || d.projects || []).forEach((p) => {
      const card = document.createElement("div");
      card.className = "card project";
      card.innerHTML = `
        <div class="pub-top">
          <h3>${escapeHtml(p.title || "")}</h3>
          ${p.highlight ? `<span class="badge badge-green">${escapeHtml(p.highlight)}</span>` : ""}
        </div>
        <p>${escapeHtml(p.desc || "")}</p>
        <div class="tags">${(p.tags || []).map((t2) => `<span class="tag">${escapeHtml(t2)}</span>`).join("")}</div>
        <div class="actions">
          ${(p.links || [])
            .map(
              (l) =>
                `<a href="${escapeHtml(l.url || "#")}" target="_blank" rel="noreferrer">${escapeHtml(
                  l.label || "Link"
                )}</a>`
            )
            .join("")}
        </div>
      `;
      pl.appendChild(card);
    });
  }

  // footer
  const footerLeft = $("#footerLeft");
  if (footerLeft) footerLeft.textContent = `© 2026 ${pick(d.meta?.name, "en") || "Jing Zhang"}`;
  const last = pick(d.meta?.lastUpdated, lang);
  const lu = $("#lastUpdated");
  if (lu) lu.textContent = last ? (lang === "en" ? `Last updated: ${last}` : `更新于：${last}`) : "";
}

function initPubs(d) {
  const pubs = Array.isArray(d.publications) ? d.publications.slice() : [];
  pubs.sort((a, b) => (b.year || 0) - (a.year || 0));
  pubs.forEach((p) => (p._search = pubToSearchText(p)));

  const years = yearList(pubs);
  const filters = $("#pubYearFilters");
  filters.innerHTML = "";

  const state = { year: "all", q: "" };

  const mkFilter = (id, label) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter";
    btn.setAttribute("aria-pressed", id === state.year ? "true" : "false");
    btn.textContent = label;
    btn.addEventListener("click", () => {
      state.year = id;
      $$("[data-year-filter]").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderPubList(pubs, d, state);
    });
    btn.dataset.yearFilter = "1";
    return btn;
  };

  const lang = getLang();
  filters.appendChild(mkFilter("all", lang === "en" ? "All" : "全部"));
  years.forEach((y) => filters.appendChild(mkFilter(String(y), String(y))));

  const search = $("#pubSearch");
  search.addEventListener("input", () => {
    state.q = search.value || "";
    renderPubList(pubs, d, state);
  });

  renderPubList(pubs, d, state);
}

function renderPubList(pubs, d, state) {
  const list = $("#pubList");
  list.innerHTML = "";

  const me = [
    pick(d.meta?.name, "zh"),
    pick(d.meta?.name, "en"),
    pick(d.meta?.name, getLang()),
  ].filter(Boolean);
  const q = normalize(state.q);
  const lang = getLang();

  const filtered = pubs.filter((p) => {
    const okYear = state.year === "all" ? true : String(p.year) === String(state.year);
    const okQ = q ? p._search.includes(q) : true;
    return okYear && okQ;
  });

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<div class="card-title">${lang === "en" ? "No results" : "没有匹配结果"}</div><div class="muted">${
      lang === "en" ? "Try another keyword or clear filters." : "换个关键词或清空筛选试试。"
    }</div>`;
    list.appendChild(empty);
    return;
  }

  filtered.forEach((p, idx) => {
    const el = document.createElement("article");
    el.className = "pub";
    const tags = (p.tags || [])
      .map((t) => {
        const fixed = /^CCF-[ABC]$/i.test(String(t || "").trim()) ? " badge-fixed" : "";
        return `<span class="badge${fixed}">${escapeHtml(t)}</span>`;
      })
      .join("");
    const awards = (p.awards || []).map((a) => `<span class="badge badge-accent">${escapeHtml(a)}</span>`).join("");
    const type = p.type ? `<span class="badge">${escapeHtml(p.type)}</span>` : "";

    const actions = [];
    const ln = p.links || {};
    if (ln.pdf) actions.push({ label: "PDF", url: ln.pdf });
    if (ln.arxiv) actions.push({ label: "arXiv", url: ln.arxiv });
    if (ln.project) actions.push({ label: "Project", url: ln.project });
    if (ln.code) actions.push({ label: "Code", url: ln.code });
    if (ln.scholar) actions.push({ label: "Scholar", url: ln.scholar });

    const absId = `abs-${idx}`;
    const bibId = `bib-${idx}`;

    el.innerHTML = `
      <div class="pub-top">
        <div>
          <h3 class="pub-title">${escapeHtml(p.title || "")}</h3>
          <div class="pub-meta">
            ${p.year ? `<span class="badge">${escapeHtml(p.year)}</span>` : ""}
            ${p.venue ? `<span class="badge badge-green">${escapeHtml(p.venue)}</span>` : ""}
            ${type}
            <span class="sep">·</span>
            <span>${fmtAuthors(p.authors || [], me)}</span>
          </div>
        </div>
        <div class="pub-badges">${awards}${tags}</div>
      </div>
      <div class="pub-actions">
        ${actions
          .map(
            (a) =>
              `<a href="${escapeHtml(a.url)}" target="_blank" rel="noreferrer">${escapeHtml(a.label)}</a>`
          )
          .join("")}
        ${p.abstract ? `<button type="button" data-toggle="${absId}">${lang === "en" ? "Abstract" : "摘要"}</button>` : ""}
        ${p.bibtex ? `<button type="button" data-copy="${bibId}">BibTeX</button>` : ""}
      </div>
      ${p.abstract ? `<div class="pub-abstract" id="${absId}" hidden>${escapeHtml(p.abstract)}</div>` : ""}
      ${p.bibtex ? `<pre class="sr-only" id="${bibId}">${escapeHtml(p.bibtex)}</pre>` : ""}
    `;

    list.appendChild(el);
  });

  // bind toggles & copy
  $$("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle");
      const box = document.getElementById(id);
      if (!box) return;
      const nextHidden = !box.hasAttribute("hidden");
      if (nextHidden) box.setAttribute("hidden", "");
      else box.removeAttribute("hidden");
      const l = getLang();
      btn.textContent = nextHidden ? (l === "en" ? "Abstract" : "摘要") : l === "en" ? "Hide" : "收起";
    });
  });

  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-copy");
      const pre = document.getElementById(id);
      const txt = pre ? pre.textContent : "";
      if (!txt) return;
      await copyText(txt);
      toast(getLang() === "en" ? "BibTeX copied" : "已复制 BibTeX");
    });
  });
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

function copyAllBibtex() {
  const d = window.SITE_DATA;
  const pubs = d?.publications || [];
  const all = pubs
    .map((p) => p.bibtex)
    .filter(Boolean)
    .join("\n\n");
  if (!all) {
    toast(getLang() === "en" ? "No BibTeX available" : "没有可复制的 BibTeX");
    return;
  }
  copyText(all).then(() => toast(getLang() === "en" ? "All BibTeX copied" : "已复制全部 BibTeX"));
}

function wireThemeToggle() {
  const btn = $("#themeToggle");
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    setTheme(next);
    toast(
      getLang() === "en"
        ? `Switched to ${next === "dark" ? "dark" : "light"} theme`
        : `已切换到${next === "dark" ? "深色" : "浅色"}主题`
    );
  });
}

function wireLangToggle() {
  const btn = $("#langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const cur = getLang();
    const next = cur === "zh" ? "en" : "zh";
    setLang(next);
    render();
    toast(next === "en" ? "Language: English" : "语言：中文");
  });
}

initTheme();
wireThemeToggle();
wireLangToggle();
render();

