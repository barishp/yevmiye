/* Rehber Gündemi — sayı yükleyici.
   sayilar/liste.json: { "taslak": bool, "sayilar": [ {tarih, baslik, manset, dosya}, ... ] } (en yeni başta)
   arsiv/eski.json: eski Rehber Gündemi (rehbergundemi.com, 2010–2023) yazıları; arşivde yıllara göre gösterilir.
   yevmiye/liste.json: { "taslak": bool, "gunler": [ {tarih, baslik, dosya}, ... ] } (en yeni başta); sürmanşette gösterilir.
   haftalik/liste.json: { "taslak": bool, "haftalar": [ {tarih, baslik, konu, dosya}, ... ] } (en yeni başta); tarih = salı.
   Görünümler: #sayi-YYYY-MM-DD (o sayı), #yevmiye-YYYY-MM-DD (o günün Yevmiye'si), #haftalik-YYYY-MM-DD (o haftanın
   YEVMİYE Nostaljik'i), #arsiv (arşiv), #arsiv-yevmiye, #arsiv-haftalik (arşivde listeler), #arsiv-YYYY (arşivde o yıl açık),
   boş (en yeni sayı, en yeni Yevmiye ve en yeni YEVMİYE Nostaljik). */
(function () {
  "use strict";
  var main = document.getElementById("issue");
  var archive = document.getElementById("archive");
  var archiveList = document.getElementById("archive-list");
  var issueNav = document.getElementById("issue-nav");
  var dateEl = document.getElementById("issue-date");
  var banner = document.getElementById("draft-banner");
  var data = null, current = null, cache = {};
  var yvSection = document.getElementById("yevmiye");
  var yvBox = document.getElementById("yv-box");
  var yvToggle = document.getElementById("yv-toggle");
  var yvList = document.getElementById("yv-list");
  var yvArch = document.getElementById("yv-arch");
  var yv = { data: null, current: null };
  var hfSection = document.getElementById("haftalik");
  var hfBox = document.getElementById("hf-box");
  var hfToggle = document.getElementById("hf-toggle");
  var hfList = document.getElementById("hf-list");
  var hfArch = document.getElementById("hf-arch");
  var hf = { data: null, current: null };
  var eskiP = null;
  function eskiData() {
    if (!eskiP) eskiP = getJSON("arsiv/eski.json").catch(function (e) { eskiP = null; throw e; });
    return eskiP;
  }
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function getJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(url + " " + r.status);
      return r.json();
    });
  }
  function getText(url) {
    if (cache[url]) return Promise.resolve(cache[url]);
    return fetch(url, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(url + " " + r.status);
      return r.text();
    }).then(function (t) { cache[url] = t; return t; });
  }
  function showError(msg) {
    main.innerHTML = '<p class="error">' + esc(msg) + ' <button type="button" id="retry">Yeniden dene</button></p>';
    var b = document.getElementById("retry");
    if (b) b.addEventListener("click", start);
  }
  function renderIssueNav(i) {
    var list = data.sayilar, html = "";
    if (i < list.length - 1) html += '<a href="#sayi-' + list[i + 1].tarih + '">← Önceki sayı · ' + esc(list[i + 1].baslik) + "</a>";
    else html += "<span></span>";
    if (i > 0) html += '<a href="#sayi-' + list[i - 1].tarih + '">Sonraki sayı · ' + esc(list[i - 1].baslik) + " →</a>";
    else html += '<a href="#arsiv">Bütün sayılar →</a>';
    issueNav.innerHTML = html;
  }
  function renderArchive(year, anchor) {
    archiveList.innerHTML = data.sayilar.map(function (s, i) {
      return '<li><a href="#sayi-' + s.tarih + '"><span class="ad">' + esc(s.baslik) + (i === 0 ? ' <span class="cur">· en yeni sayı</span>' : "") +
        '</span><span class="am">' + esc(s.manset) + "</span></a></li>";
    }).join("");
    renderYvList();
    renderHfList();
    main.hidden = true; yvSection.hidden = true; hfSection.hidden = true; issueNav.innerHTML = ""; archive.hidden = false;
    document.title = anchor === "yv-arsiv" ? "Rehber Gündemi Yevmiye · Yevmiye arşivi" :
      anchor === "hf-arsiv" ? "Rehber Gündemi Yevmiye · YEVMİYE Nostaljik arşivi" : "Rehber Gündemi Yevmiye · Arşiv";
    if (anchor) { setTimeout(function () { jump(anchor); }, 0); }
    else if (!year) window.scrollTo(0, 0);
    loadOld().then(function () {
      if (anchor) { jump(anchor); return; }
      if (!year) return;
      for (var i = 0; i < old.groups.length; i++) {
        if (old.groups[i].year === year) {
          old.groups[i].el.open = true;
          old.groups[i].el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          break;
        }
      }
    });
  }

  /* ---------- Eski Rehber Gündemi (rehbergundemi.com, 2010–2023): arsiv/eski.json ---------- */
  var oldYears = document.getElementById("old-years");
  var oldStatus = document.getElementById("old-status");
  var oldSearch = document.getElementById("old-search");
  var oldToggle = document.getElementById("old-toggle");
  var oldPages = document.getElementById("old-pages");
  var old = { promise: null, groups: [], total: 0 };
  var AY = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  var KISMI = { ozet: "Arşivde başlık ve özet", baslik: "Arşivde yalnız başlık", rss: "RSS kaydı" };

  function fold(s) {
    s = String(s).toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
      .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c");
    if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
    return s.replace(/[’'`´]/g, "");
  }
  function oldItem(y) {
    var p = y.t.split("-");
    return '<li><span class="od">' + parseInt(p[2], 10) + " " + AY[parseInt(p[1], 10) - 1] + "</span>" +
      '<span class="ob"><a href="' + esc(y.u) + '" target="_blank" rel="noopener">' + esc(y.b) + "</a>" +
      (y.k ? ' <span class="ot">' + KISMI[y.k] + "</span>" : "") +
      (y.v ? ' <span class="ot ov">Farklı kayıtlı tarihler: ' + esc(y.v) + "</span>" : "") + "</span></li>";
  }
  function oldSummary() {
    var nYears = old.groups.length;
    oldStatus.textContent = old.total + " yazı ve haber · " + nYears + " yıl (" +
      old.groups[nYears - 1].year + "–" + old.groups[0].year + ")";
  }
  function loadOld() {
    if (old.promise) return old.promise;
    old.promise = eskiData().then(function (d) {
      var byYear = {}, years = [];
      d.yazilar.forEach(function (y) {
        var yr = y.t.slice(0, 4);
        if (!byYear[yr]) { byYear[yr] = []; years.push(yr); }
        byYear[yr].push(y);
      });
      years.sort(function (a, b) { return b - a; });
      oldYears.innerHTML = years.map(function (yr) {
        return '<details class="yr" data-year="' + yr + '"><summary><span class="yn">' + yr + '</span><span class="yc">' +
          byYear[yr].length + ' yazı</span></summary><ol class="old-list">' + byYear[yr].map(oldItem).join("") + "</ol></details>";
      }).join("");
      old.total = d.yazilar.length;
      old.groups = Array.prototype.map.call(oldYears.querySelectorAll("details.yr"), function (el) {
        var yr = el.getAttribute("data-year");
        var lis = el.querySelectorAll(".old-list li");
        return {
          year: yr, el: el, count: el.querySelector(".yc"), n: byYear[yr].length,
          items: byYear[yr].map(function (y, i) { return { li: lis[i], q: fold(y.b) }; })
        };
      });
      if (d.sayfalar && d.sayfalar.length) {
        oldPages.innerHTML = "<b>Eski sitenin tanıtım sayfaları:</b> " + d.sayfalar.map(function (s) {
          return '<a href="' + esc(s.u) + '" target="_blank" rel="noopener">' + esc(s.b) + "</a>";
        }).join(" · ");
      }
      oldSummary();
      if (oldSearch.value) filterOld();
    }).catch(function () {
      old.promise = null;
      oldYears.innerHTML = '<p class="error">Eski yazılar yüklenemedi. <button type="button" id="old-retry">Yeniden dene</button></p>';
      var b = document.getElementById("old-retry");
      if (b) b.addEventListener("click", function () { oldYears.innerHTML = '<p class="loading">Eski yazılar yükleniyor…</p>'; loadOld(); });
    });
    return old.promise;
  }
  function filterOld() {
    if (!old.groups.length) return;
    var words = fold(oldSearch.value).split(/\s+/).filter(Boolean);
    var found = 0;
    old.groups.forEach(function (g) {
      var m = 0;
      g.items.forEach(function (it) {
        var ok = words.every(function (w) { return it.q.indexOf(w) !== -1; });
        it.li.hidden = !ok;
        if (ok) m++;
      });
      g.el.hidden = words.length > 0 && m === 0;
      g.count.textContent = words.length ? m + " / " + g.n + " yazı" : g.n + " yazı";
      g.el.open = words.length > 0 && m > 0;
      found += m;
    });
    if (!words.length) { oldSummary(); oldToggle.textContent = "Bütün yılları aç"; return; }
    oldStatus.textContent = found ? found + " yazı bulundu" : "Bu aramayla eşleşen yazı yok.";
  }
  oldSearch.addEventListener("input", filterOld);
  oldYears.addEventListener("toggle", function () {
    var anyClosed = old.groups.some(function (g) { return !g.el.hidden && !g.el.open; });
    oldToggle.textContent = anyClosed ? "Bütün yılları aç" : "Bütün yılları kapat";
  }, true);
  oldToggle.addEventListener("click", function () {
    var anyClosed = old.groups.some(function (g) { return !g.el.hidden && !g.el.open; });
    old.groups.forEach(function (g) { if (!g.el.hidden) g.el.open = anyClosed; });
    oldToggle.textContent = anyClosed ? "Bütün yılları kapat" : "Bütün yılları aç";
  });
  /* Başlıktaki tarih: ziyaret günü (İstanbul saati). Sayının kendi tarihi manşetin üstündeki etikette durur. */
  function todayLabel() {
    try {
      var d = new Date();
      var f = function (o) { o.timeZone = "Europe/Istanbul"; return new Intl.DateTimeFormat("tr-TR", o).format(d); };
      var wd = f({ weekday: "long" });
      return f({ day: "numeric" }) + " " + f({ month: "long" }) + " " + f({ year: "numeric" }) + ", " + wd.charAt(0).toLocaleUpperCase("tr-TR") + wd.slice(1);
    } catch (e) { return ""; }
  }

  function showIssue(idx, scrollTarget, keepScroll) {
    var s = data.sayilar[idx];
    archive.hidden = true; main.hidden = false;
    if (yv.data) yvSection.hidden = false;
    if (hf.data) hfSection.hidden = false;
    if (current === s.tarih && main.querySelector("#s-manset")) {
      document.title = "Rehber Gündemi Yevmiye · " + s.baslik.replace(/,.*$/, "");
      jump(scrollTarget); return;
    }
    main.innerHTML = '<p class="loading">Sayı yükleniyor…</p>';
    getText(s.dosya).then(function (html) {
      main.innerHTML = html;
      insertArchiveStrip();
      current = s.tarih;
      dateEl.textContent = todayLabel();
      var lead = main.querySelector("#s-manset");
      if (lead) {
        var tag = document.createElement("p");
        tag.className = "issue-tag";
        tag.textContent = "YEVMİYE Gündem · " + s.baslik;
        lead.parentNode.insertBefore(tag, lead);
      }
      document.title = "Rehber Gündemi Yevmiye · " + s.baslik.replace(/,.*$/, "");
      renderIssueNav(idx);
      if (scrollTarget) jump(scrollTarget); else if (!keepScroll) window.scrollTo(0, 0);
    }).catch(function () { showError("Bu sayı yüklenemedi. Bağlantınızı kontrol edip yeniden deneyin."); });
  }
  function jump(id) {
    if (!id) return;
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  function route(scrollTarget) {
    if (!data) return;
    var h = (location.hash || "").slice(1);
    if (h === "arsiv") { renderArchive(); return; }
    if (h === "arsiv-yevmiye") { renderArchive(null, "yv-arsiv"); return; }
    if (h === "arsiv-haftalik") { renderArchive(null, "hf-arsiv"); return; }
    if (/^arsiv-\d{4}$/.test(h)) { renderArchive(h.slice(6)); return; }
    if (/^yevmiye-\d{4}-\d{2}-\d{2}$/.test(h)) {
      showYevmiye(h.slice(8), true);
      if (hf.data && hf.current !== hf.data.haftalar[0].tarih) showHaftalik(hf.data.haftalar[0].tarih, false);
      showIssue(0, null, true);
      return;
    }
    if (/^haftalik-\d{4}-\d{2}-\d{2}$/.test(h)) {
      if (yv.data && yv.current !== yv.data.gunler[0].tarih) showYevmiye(yv.data.gunler[0].tarih, false);
      showHaftalik(h.slice(9), true);
      showIssue(0, null, true);
      return;
    }
    if (yv.data && yv.current !== yv.data.gunler[0].tarih) showYevmiye(yv.data.gunler[0].tarih, false);
    if (hf.data && hf.current !== hf.data.haftalar[0].tarih) showHaftalik(hf.data.haftalar[0].tarih, false);
    var idx = 0;
    if (h.indexOf("sayi-") === 0) {
      var t = h.slice(5);
      for (var i = 0; i < data.sayilar.length; i++) if (data.sayilar[i].tarih === t) { idx = i; break; }
    }
    showIssue(idx, scrollTarget);
  }
  /* ---------- Yevmiye (sürmanşet, her gün) ---------- */
  function setYvOpen(open) {
    yvSection.classList.toggle("yv-open", open);
    yvToggle.setAttribute("aria-expanded", open ? "true" : "false");
    yvToggle.textContent = open ? "Kısalt" : "Yevmiye’nin tamamını oku · 4–5 dk";
  }
  function showYevmiye(tarih, scrollTo) {
    if (!yv.data) { yvSection.hidden = true; return; }
    var list = yv.data.gunler, g = list[0];
    for (var i = 0; i < list.length; i++) if (list[i].tarih === tarih) { g = list[i]; break; }
    yvSection.hidden = false;
    getText(g.dosya).then(function (html) {
      yvBox.innerHTML = html;
      yv.current = g.tarih;
      renderYvArch();
      yvSection.classList.toggle("yv-eski", g.tarih !== list[0].tarih);
      setYvOpen(g.tarih !== list[0].tarih);
      if (scrollTo) jump("yevmiye");
    }).catch(function () {
      yvBox.innerHTML = '<p class="error">Yevmiye yüklenemedi.</p>';
    });
  }
  function renderYvList() {
    if (!yv.data) { yvList.innerHTML = '<li class="empty">Henüz Yevmiye yok.</li>'; return; }
    yvList.innerHTML = yv.data.gunler.map(function (g, i) {
      return '<li><a href="#yevmiye-' + g.tarih + '"><span class="ad">' + esc(g.baslik) +
        (i === 0 ? ' <span class="cur">· en yeni</span>' : "") + '</span><span class="am">Yevmiye · günlük İstanbul rehber bülteni</span></a></li>';
    }).join("");
  }
  /* Sürmanşetin altında: önceki günlere kısa yollar ve Yevmiye arşivi bağlantısı */
  var GUN = { "Pazartesi": "Pzt", "Salı": "Sal", "Çarşamba": "Çar", "Perşembe": "Per", "Cuma": "Cum", "Cumartesi": "Cmt", "Pazar": "Paz" };
  function kisaTarih(g) {
    var p = g.tarih.split("-"), wd = (String(g.baslik).split(",")[1] || "").trim();
    return parseInt(p[2], 10) + " " + AY[parseInt(p[1], 10) - 1] + (GUN[wd] ? " " + GUN[wd] : "");
  }
  function renderYvArch() {
    if (!yvArch || !yv.data) return;
    var list = yv.data.gunler, html = "";
    if (yv.current && yv.current !== list[0].tarih) {
      html += '<a class="yv-arch-now" href="#yevmiye-' + list[0].tarih + '">← En yeni Yevmiye</a>';
    }
    var prev = list.filter(function (g) { return g.tarih !== yv.current && g.tarih !== list[0].tarih; }).slice(0, 5);
    if (prev.length) {
      html += '<span class="yv-arch-l">Önceki günler</span>' + prev.map(function (g) {
        return '<a href="#yevmiye-' + g.tarih + '" title="' + esc(g.baslik) + '">' + esc(kisaTarih(g)) + "</a>";
      }).join("");
    }
    html += '<a class="yv-arch-go" href="#arsiv-yevmiye" title="Arşivde ' + list.length + ' günlük Yevmiye">Yevmiye arşivi →</a>';
    yvArch.innerHTML = html;
  }
  yvToggle.addEventListener("click", function () { setYvOpen(!yvSection.classList.contains("yv-open")); });

  /* ---------- YEVMİYE Nostaljik (her salı; gelecek yedi gün) ---------- */
  function setHfOpen(open) {
    hfSection.classList.toggle("hf-open", open);
    hfToggle.setAttribute("aria-expanded", open ? "true" : "false");
    hfToggle.textContent = open ? "Kısalt" : "YEVMİYE Nostaljik’in tamamını oku · 12–15 dk";
  }
  /* Kısa görünüm: her bölümün başlığı ve maddelerinin başlıkları; tıklanınca tam metin açılır ve maddeye gidilir */
  function buildHfOzet() {
    var art = hfBox.querySelector(".hf");
    if (!art || art.querySelector(".hf-ozet")) return;
    var secs = art.querySelectorAll(".hf-sec"), n = 0, html = "";
    Array.prototype.forEach.call(secs, function (sec) {
      var h = sec.querySelector(".hf-h"), items = sec.querySelectorAll(".hf-item h5");
      if (!h) return;
      html += '<div class="hf-oz"><p class="hf-oz-h">' + esc(h.textContent) + "</p><ul>";
      Array.prototype.forEach.call(items, function (h5) {
        var it = h5.closest(".hf-item"); n++;
        if (!it.id) it.id = "hf-i-" + n;
        html += '<li><a href="#' + it.id + '" data-hf="' + it.id + '">' + esc(h5.textContent) + "</a></li>";
      });
      html += "</ul></div>";
    });
    var box = document.createElement("div");
    box.className = "hf-ozet";
    box.innerHTML = html;
    var body = art.querySelector(".hf-body"), first = body && body.querySelector(".hf-sec");
    if (first) body.insertBefore(box, first); else if (body) body.appendChild(box);
    box.addEventListener("click", function (e) {
      var a = e.target.closest("a[data-hf]");
      if (!a) return;
      e.preventDefault();
      setHfOpen(true);
      setTimeout(function () { jump(a.getAttribute("data-hf")); }, 30);
    });
  }
  function showHaftalik(tarih, scrollTo) {
    if (!hf.data) { hfSection.hidden = true; return; }
    var list = hf.data.haftalar, w = list[0];
    for (var i = 0; i < list.length; i++) if (list[i].tarih === tarih) { w = list[i]; break; }
    hfSection.hidden = false;
    getText(w.dosya).then(function (html) {
      hfBox.innerHTML = html;
      hf.current = w.tarih;
      buildHfOzet();
      renderHfArch();
      hfSection.classList.toggle("hf-eski", w.tarih !== list[0].tarih);
      setHfOpen(w.tarih !== list[0].tarih);
      if (scrollTo) jump("haftalik");
    }).catch(function () {
      hfBox.innerHTML = '<p class="error">YEVMİYE Nostaljik yüklenemedi.</p>';
    });
  }
  function renderHfList() {
    if (!hf.data) { hfList.innerHTML = '<li class="empty">Henüz YEVMİYE Nostaljik yok.</li>'; return; }
    hfList.innerHTML = hf.data.haftalar.map(function (w, i) {
      return '<li><a href="#haftalik-' + w.tarih + '"><span class="ad">' + esc(w.baslik) +
        (i === 0 ? ' <span class="cur">· en yeni</span>' : "") + '</span><span class="am">' +
        esc(w.konu ? "Dosya: " + w.konu : "Haftalık İstanbul tarih, mevsim ve araştırma bülteni") + "</span></a></li>";
    }).join("");
  }
  function renderHfArch() {
    if (!hfArch || !hf.data) return;
    var list = hf.data.haftalar, html = "";
    if (hf.current && hf.current !== list[0].tarih) {
      html += '<a class="hf-arch-now" href="#haftalik-' + list[0].tarih + '">← En yeni hafta</a>';
    }
    var prev = list.filter(function (w) { return w.tarih !== hf.current && w.tarih !== list[0].tarih; }).slice(0, 3);
    if (prev.length) {
      html += '<span class="hf-arch-l">Önceki haftalar</span>' + prev.map(function (w) {
        return '<a href="#haftalik-' + w.tarih + '" title="' + esc(w.baslik) + '">' + esc(String(w.baslik).replace(/ \d{4}$/, "")) + "</a>";
      }).join("");
    }
    html += '<a class="hf-arch-go" href="#arsiv-haftalik" title="Arşivde ' + list.length + ' YEVMİYE Nostaljik">Nostaljik arşivi →</a>';
    hfArch.innerHTML = html;
  }
  hfToggle.addEventListener("click", function () { setHfOpen(!hfSection.classList.contains("hf-open")); });

  /* ---------- Ön sayfadan arşive bağlantı (manşetin hemen altında) ---------- */
  function insertArchiveStrip() {
    var lead = main.querySelector("#s-manset");
    if (!lead || main.querySelector(".arsiv-seridi")) return;
    var box = document.createElement("aside");
    box.className = "arsiv-seridi";
    box.setAttribute("aria-label", "Rehber Gündemi arşivi");
    box.innerHTML = '<div class="as-text"><p class="as-k">Arşiv</p><p class="as-t">Rehber Gündemi 2010’dan bu yana</p>' +
      '<p class="as-d" id="as-d">rehbergundemi.com’da 2010–2023 arasında yayımlanan yazı ve haberler, yıllara göre.</p></div>' +
      '<div class="as-years" id="as-years"><a class="as-go" href="#arsiv">Arşive git →</a></div>';
    lead.insertAdjacentElement("afterend", box);
    eskiData().then(function (d) {
      var c = {}, ys = [];
      d.yazilar.forEach(function (y) { var k = y.t.slice(0, 4); if (!c[k]) { c[k] = 0; ys.push(k); } c[k]++; });
      ys.sort(function (a, b) { return b - a; });
      var el = document.getElementById("as-years"), dd = document.getElementById("as-d");
      if (dd) dd.textContent = "rehbergundemi.com’da " + ys[ys.length - 1] + "–" + ys[0] + " arasında yayımlanan " +
        d.yazilar.length + " yazı ve haber, yıllara göre.";
      if (el) el.innerHTML = ys.map(function (k) {
        return '<a class="as-y" href="#arsiv-' + k + '" title="' + c[k] + ' yazı">' + k + "</a>";
      }).join("") + '<a class="as-go" href="#arsiv">Arşive git →</a>';
    }).catch(function () {});
  }

  function start() {
    main.innerHTML = '<p class="loading">Sayı yükleniyor…</p>';
    var yvP = getJSON("yevmiye/liste.json").then(function (d) {
      if (d && d.gunler && d.gunler.length) yv.data = d;
    }).catch(function () { yv.data = null; });
    var hfP = getJSON("haftalik/liste.json").then(function (d) {
      if (d && d.haftalar && d.haftalar.length) hf.data = d;
    }).catch(function () { hf.data = null; });
    Promise.all([getJSON("sayilar/liste.json"), yvP, hfP]).then(function (r) {
      data = r[0];
      if (!data.sayilar || !data.sayilar.length) { showError("Henüz yayımlanmış sayı yok."); return; }
      banner.hidden = !(data.taslak || (yv.data && yv.data.taslak) || (hf.data && hf.data.taslak));
      document.querySelectorAll(".secnav .to-haftalik").forEach(function (b) { b.hidden = !hf.data; });
      route();
    }).catch(function () { showError("Sayı listesi yüklenemedi. Bağlantınızı kontrol edip yeniden deneyin."); });
  }

  document.querySelectorAll(".secnav button").forEach(function (b) {
    b.addEventListener("click", function () {
      var go = b.getAttribute("data-go");
      if (go === "arsiv") { if (location.hash === "#arsiv") renderArchive(); else location.hash = "arsiv"; return; }
      if (go === "yevmiye" && !yv.data) return;
      if (go === "haftalik" && !hf.data) return;
      if (!archive.hidden) {
        var target = current ? "sayi-" + current : "";
        if (target && location.hash !== "#" + target) { location.hash = target; setTimeout(function () { jump(go); }, 350); }
        else { route(go); }
        return;
      }
      jump(go);
    });
  });
  window.addEventListener("hashchange", function () { route(); });
  start();
})();
