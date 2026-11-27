/* Rehber Gündemi Yevmiye · dil penceresi
   Tarayıcı dili Türkçe olmayan okura, siteyi kendi dilinde okumak isteyip istemediğini kendi dilinde sorar.
   Çeviriyi tarayıcının yerleşik çevirmeni (Translator API, cihaz üzerinde) yapar; desteklemeyen tarayıcıda
   okura tarayıcısının çeviri özelliğini önerir. Özgün metin değişmez; "Türkçe" düğmesi her şeyi geri alır. */
(function () {
  "use strict";

  var DILLER = [["en","English"],["de","Deutsch"],["fr","Français"],["es","Español"],["it","Italiano"],["pt","Português"],["nl","Nederlands"],["ru","Русский"],["uk","Українська"],["pl","Polski"],["el","Ελληνικά"],["bg","Български"],["ro","Română"],["hu","Magyar"],["cs","Čeština"],["sv","Svenska"],["da","Dansk"],["no","Norsk"],["fi","Suomi"],["ar","العربية"],["fa","فارسی"],["iw","עברית"],["az","Azərbaycanca"],["ka","ქართული"],["zh-CN","中文（简体）"],["zh-TW","中文（繁體）"],["ja","日本語"],["ko","한국어"],["id","Bahasa Indonesia"],["hi","हिन्दी"]];

  // [soru, evet, hayır, dil etiketi, not, desteklenmiyor]
  var T = {
    tr: ["Siteyi hangi dilde okumak istersiniz?","Çevir","Kapat","Dil","Çeviriyi tarayıcınız kendi cihazınızda yapar. Özgün metin Türkçedir.","Tarayıcınız bu sayfayı kendiliğinden çeviremiyor. Tarayıcınızın çeviri özelliğini kullanabilirsiniz."],
    en: ["Would you like to read this website in English?","Yes, translate","No, thanks","Language","The translation is done by your browser, on your device. The original text is in Turkish.","Your browser cannot translate this page automatically. Please use your browser's built-in translation feature."],
    de: ["Möchten Sie diese Website auf Deutsch lesen?","Ja, übersetzen","Nein, danke","Sprache","Die Übersetzung erfolgt durch Ihren Browser auf Ihrem Gerät. Der Originaltext ist auf Türkisch.","Ihr Browser kann diese Seite nicht automatisch übersetzen. Bitte nutzen Sie die Übersetzungsfunktion Ihres Browsers."],
    fr: ["Souhaitez-vous lire ce site en français ?","Oui, traduire","Non, merci","Langue","La traduction est effectuée par votre navigateur, sur votre appareil. Le texte original est en turc.","Votre navigateur ne peut pas traduire cette page automatiquement. Utilisez la fonction de traduction de votre navigateur."],
    es: ["¿Desea leer este sitio en español?","Sí, traducir","No, gracias","Idioma","La traducción la realiza su navegador, en su dispositivo. El texto original está en turco.","Su navegador no puede traducir esta página automáticamente. Utilice la función de traducción de su navegador."],
    it: ["Desidera leggere questo sito in italiano?","Sì, traduci","No, grazie","Lingua","La traduzione è eseguita dal browser, sul suo dispositivo. Il testo originale è in turco.","Il suo browser non può tradurre automaticamente questa pagina. Usi la funzione di traduzione del browser."],
    pt: ["Deseja ler este site em português?","Sim, traduzir","Não, obrigado","Idioma","A tradução é feita pelo seu navegador, no seu dispositivo. O texto original está em turco.","O seu navegador não consegue traduzir esta página automaticamente. Use a função de tradução do navegador."],
    nl: ["Wilt u deze website in het Nederlands lezen?","Ja, vertalen","Nee, bedankt","Taal","De vertaling gebeurt door uw browser, op uw apparaat. De oorspronkelijke tekst is in het Turks.","Uw browser kan deze pagina niet automatisch vertalen. Gebruik de vertaalfunctie van uw browser."],
    ru: ["Хотите читать этот сайт на русском языке?","Да, перевести","Нет, спасибо","Язык","Перевод выполняет ваш браузер на вашем устройстве. Оригинальный текст — на турецком языке.","Ваш браузер не может автоматически перевести эту страницу. Воспользуйтесь функцией перевода в браузере."],
    uk: ["Бажаєте читати цей сайт українською мовою?","Так, перекласти","Ні, дякую","Мова","Переклад виконує ваш браузер на вашому пристрої. Оригінальний текст — турецькою мовою.","Ваш браузер не може автоматично перекласти цю сторінку. Скористайтеся функцією перекладу в браузері."],
    pl: ["Czy chcesz czytać tę stronę po polsku?","Tak, przetłumacz","Nie, dziękuję","Język","Tłumaczenie wykonuje przeglądarka na Twoim urządzeniu. Oryginalny tekst jest po turecku.","Twoja przeglądarka nie może automatycznie przetłumaczyć tej strony. Użyj funkcji tłumaczenia w przeglądarce."],
    el: ["Θέλετε να διαβάσετε αυτόν τον ιστότοπο στα ελληνικά;","Ναι, μετάφραση","Όχι, ευχαριστώ","Γλώσσα","Η μετάφραση γίνεται από το πρόγραμμα περιήγησης, στη συσκευή σας. Το αρχικό κείμενο είναι στα τουρκικά.","Το πρόγραμμα περιήγησής σας δεν μπορεί να μεταφράσει αυτόματα αυτή τη σελίδα. Χρησιμοποιήστε τη λειτουργία μετάφρασης του προγράμματος περιήγησης."],
    bg: ["Искате ли да четете този сайт на български?","Да, преведи","Не, благодаря","Език","Преводът се извършва от браузъра ви, на вашето устройство. Оригиналният текст е на турски.","Браузърът ви не може да преведе тази страница автоматично. Използвайте функцията за превод на браузъра."],
    ro: ["Doriți să citiți acest site în limba română?","Da, traduceți","Nu, mulțumesc","Limba","Traducerea este făcută de browser, pe dispozitivul dvs. Textul original este în limba turcă.","Browserul dvs. nu poate traduce automat această pagină. Folosiți funcția de traducere a browserului."],
    hu: ["Szeretné magyarul olvasni ezt az oldalt?","Igen, fordítás","Nem, köszönöm","Nyelv","A fordítást a böngészője végzi az Ön eszközén. Az eredeti szöveg török nyelvű.","A böngészője nem tudja automatikusan lefordítani ezt az oldalt. Használja a böngésző fordítás funkcióját."],
    cs: ["Chcete číst tento web v češtině?","Ano, přeložit","Ne, děkuji","Jazyk","Překlad provádí váš prohlížeč ve vašem zařízení. Původní text je v turečtině.","Váš prohlížeč nemůže tuto stránku přeložit automaticky. Použijte funkci překladu v prohlížeči."],
    sv: ["Vill du läsa den här webbplatsen på svenska?","Ja, översätt","Nej tack","Språk","Översättningen görs av din webbläsare, på din enhet. Originaltexten är på turkiska.","Din webbläsare kan inte översätta sidan automatiskt. Använd webbläsarens översättningsfunktion."],
    da: ["Vil du læse dette websted på dansk?","Ja, oversæt","Nej tak","Sprog","Oversættelsen foretages af din browser på din enhed. Originalteksten er på tyrkisk.","Din browser kan ikke oversætte siden automatisk. Brug browserens oversættelsesfunktion."],
    no: ["Vil du lese dette nettstedet på norsk?","Ja, oversett","Nei takk","Språk","Oversettelsen gjøres av nettleseren din, på enheten din. Originalteksten er på tyrkisk.","Nettleseren din kan ikke oversette siden automatisk. Bruk oversettelsesfunksjonen i nettleseren."],
    fi: ["Haluatko lukea tämän sivuston suomeksi?","Kyllä, käännä","Ei kiitos","Kieli","Käännöksen tekee selaimesi laitteellasi. Alkuperäinen teksti on turkiksi.","Selaimesi ei voi kääntää tätä sivua automaattisesti. Käytä selaimen käännöstoimintoa."],
    ar: ["هل ترغب في قراءة هذا الموقع باللغة العربية؟","نعم، ترجم","لا، شكرًا","اللغة","يقوم متصفحك بالترجمة على جهازك. النص الأصلي باللغة التركية.","لا يستطيع متصفحك ترجمة هذه الصفحة تلقائيًا. استخدم ميزة الترجمة في متصفحك."],
    fa: ["آیا مایلید این وب‌سایت را به زبان فارسی بخوانید؟","بله، ترجمه کن","نه، متشکرم","زبان","ترجمه را مرورگر شما روی دستگاه خودتان انجام می‌دهد. متن اصلی به زبان ترکی است.","مرورگر شما نمی‌تواند این صفحه را خودکار ترجمه کند. از قابلیت ترجمهٔ مرورگر استفاده کنید."],
    iw: ["האם תרצו לקרוא את האתר בעברית?","כן, לתרגם","לא, תודה","שפה","התרגום מתבצע בדפדפן, במכשיר שלך. הטקסט המקורי בטורקית.","הדפדפן שלך אינו יכול לתרגם דף זה באופן אוטומטי. השתמשו באפשרות התרגום של הדפדפן."],
    az: ["Bu saytı Azərbaycan dilində oxumaq istəyirsiniz?","Bəli, tərcümə et","Xeyr, təşəkkürlər","Dil","Tərcüməni brauzeriniz öz cihazınızda edir. Orijinal mətn türk dilindədir.","Brauzeriniz bu səhifəni avtomatik tərcümə edə bilmir. Brauzerin tərcümə funksiyasından istifadə edin."],
    ka: ["გსურთ ამ საიტის ქართულად წაკითხვა?","დიახ, თარგმნე","არა, გმადლობთ","ენა","თარგმნას თქვენი ბრაუზერი ასრულებს თქვენს მოწყობილობაზე. ორიგინალი ტექსტი თურქულ ენაზეა.","თქვენი ბრაუზერი ამ გვერდს ავტომატურად ვერ თარგმნის. გამოიყენეთ ბრაუზერის თარგმნის ფუნქცია."],
    "zh-CN": ["您想用中文阅读本网站吗？","是，翻译","不用了，谢谢","语言","翻译由您的浏览器在本机完成。原文为土耳其语。","您的浏览器无法自动翻译此页面。请使用浏览器自带的翻译功能。"],
    "zh-TW": ["您想用中文閱讀本網站嗎？","是，翻譯","不用了，謝謝","語言","翻譯由您的瀏覽器在本機完成。原文為土耳其語。","您的瀏覽器無法自動翻譯此頁面。請使用瀏覽器內建的翻譯功能。"],
    ja: ["このサイトを日本語で読みますか？","はい、翻訳する","いいえ、結構です","言語","翻訳はお使いのブラウザが端末上で行います。原文はトルコ語です。","お使いのブラウザではこのページを自動翻訳できません。ブラウザの翻訳機能をご利用ください。"],
    ko: ["이 사이트를 한국어로 읽으시겠습니까?","예, 번역하기","아니요, 괜찮습니다","언어","번역은 브라우저가 기기에서 직접 수행합니다. 원문은 터키어입니다.","브라우저에서 이 페이지를 자동으로 번역할 수 없습니다. 브라우저의 번역 기능을 사용해 주세요."],
    id: ["Apakah Anda ingin membaca situs ini dalam bahasa Indonesia?","Ya, terjemahkan","Tidak, terima kasih","Bahasa","Terjemahan dilakukan oleh browser Anda di perangkat Anda. Teks asli dalam bahasa Turki.","Browser Anda tidak dapat menerjemahkan halaman ini secara otomatis. Gunakan fitur terjemahan browser Anda."],
    hi: ["क्या आप यह वेबसाइट हिन्दी में पढ़ना चाहेंगे?","हाँ, अनुवाद करें","नहीं, धन्यवाद","भाषा","अनुवाद आपका ब्राउज़र आपके डिवाइस पर करता है। मूल पाठ तुर्की में है।","आपका ब्राउज़र इस पेज का अपने आप अनुवाद नहीं कर सकता। कृपया ब्राउज़र की अनुवाद सुविधा का उपयोग करें।"]
  };
  var RTL = { ar: 1, fa: 1, iw: 1 };
  var API = { iw: "he", "zh-CN": "zh", "zh-TW": "zh-Hant" };
  var ANAHTAR = "yevmiye-dil";
  var GLOBE = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"></path></svg>';

  function kod(l) {
    l = String(l || "").toLowerCase();
    if (!l) return "en";
    if (/^zh-(tw|hk|mo)|^zh-hant/.test(l)) return "zh-TW";
    if (/^zh/.test(l)) return "zh-CN";
    if (/^(he|iw)/.test(l)) return "iw";
    if (/^(nb|nn|no)/.test(l)) return "no";
    return l.split("-")[0];
  }
  function varMi(k) { for (var i = 0; i < DILLER.length; i++) if (DILLER[i][0] === k) return true; return false; }
  function oku() { try { return localStorage.getItem(ANAHTAR); } catch (e) { return null; } }
  function yaz(v) { try { localStorage.setItem(ANAHTAR, v); } catch (e) {} }
  function destek() { return typeof self !== "undefined" && "Translator" in self; }

  var tarayici = kod((navigator.languages && navigator.languages[0]) || navigator.language);

  // ---------- Stil ----------
  var css = document.createElement("style");
  css.textContent =
    ".ydil-yuzen{position:fixed;left:16px;bottom:16px;z-index:9998;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:44px;height:44px;padding:0 12px;border:0;border-radius:999px;background:#0E1C38;color:#fff;font:600 14px/1 Inter,'Helvetica Neue',Arial,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(14,28,56,.3)}" +
    ".ydil-yuzen:hover,.ydil-yuzen:focus-visible{background:#1E5AA8}" +
    ".ydil{position:fixed;right:20px;bottom:20px;z-index:9999;width:360px;max-width:calc(100vw - 24px);background:#fff;color:#1C2430;border-top:4px solid #F2A900;border-radius:8px;box-shadow:0 12px 40px rgba(14,28,56,.28);padding:22px 22px 16px;font-family:Inter,'Helvetica Neue',Arial,sans-serif;box-sizing:border-box}" +
    ".ydil *{box-sizing:border-box}" +
    ".ydil-q{font-family:Lora,Georgia,serif;font-size:20px;line-height:1.3;font-weight:700;color:#0E1C38;margin:0 30px 14px 0}" +
    ".ydil[dir=rtl] .ydil-q{margin:0 0 14px 30px;font-family:Inter,Arial,sans-serif}" +
    ".ydil-x{position:absolute;top:8px;right:8px;width:36px;height:36px;border:0;background:none;font-size:24px;line-height:1;color:#4E5A68;cursor:pointer;border-radius:50%;padding:0}" +
    ".ydil[dir=rtl] .ydil-x{right:auto;left:8px}" +
    ".ydil-x:hover,.ydil-x:focus-visible{background:#F1F6FC}" +
    ".ydil-etiket{display:block;margin:0}" +
    ".ydil-o{display:block;font-size:13px;font-weight:600;color:#4E5A68;margin:0 0 6px}" +
    ".ydil select{width:100%;height:42px;border:1px solid #D5DDE6;border-radius:6px;padding:0 10px;font-size:16px;background:#fff;color:#1C2430;margin:0 0 14px}" +
    ".ydil-dugmeler{display:flex;gap:8px;flex-wrap:wrap}" +
    ".ydil-dugmeler button{height:42px;padding:0 18px;border-radius:999px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;line-height:1}" +
    ".ydil-evet{background:#0E1C38;color:#fff;border:0}" +
    ".ydil-evet:hover,.ydil-evet:focus-visible{background:#1E5AA8}" +
    ".ydil-evet[disabled]{opacity:.75;cursor:progress}" +
    ".ydil-hayir{background:#fff;color:#0E1C38;border:1px solid #D5DDE6}" +
    ".ydil-hayir:hover,.ydil-hayir:focus-visible{border-color:#0E1C38}" +
    ".ydil-not{font-size:12.5px;line-height:1.45;color:#4E5A68;margin:12px 0 0}" +
    ".ydil-uyari{font-size:14px;line-height:1.45;color:#8A5E00;background:#FFF5DC;border-radius:6px;padding:10px 12px;margin:0 0 12px}" +
    "@media (max-width:600px){.ydil{left:12px;right:12px;bottom:12px;width:auto;max-width:none}.ydil-yuzen{left:12px;bottom:12px}}" +
    "@media print{.ydil,.ydil-yuzen{display:none!important}}";
  document.head.appendChild(css);

  // ---------- Çeviri ----------
  var cevirmen = null, hedef = null;
  var asil = new Map();        // metin düğümü -> özgün metin
  var sirada = new WeakSet();  // çevrilmekte ya da çevrilmiş düğümler
  var bellek = new Map();      // özgün metin -> çeviri
  var gozlemci = null, bekleyen = null, calisiyor = false;
  var HARF = /[A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû]/;

  function uygun(n) {
    var p = n.parentElement;
    if (!p || sirada.has(n)) return false;
    if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CODE|PRE|SVG|TITLE)$/i.test(p.tagName)) return false;
    if (p.closest(".ydil,.ydil-yuzen,.notranslate,[translate='no']")) return false;
    return HARF.test(n.nodeValue);
  }
  function gorunur(el) {
    var r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return false;
    var h = window.innerHeight || 800;
    return r.bottom > -h && r.top < 2.5 * h;
  }
  function adaylar(max) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n, liste = [];
    while ((n = w.nextNode())) {
      if (!uygun(n)) continue;
      if (!gorunur(n.parentElement)) continue;
      liste.push(n);
      if (liste.length >= max) break;
    }
    return liste;
  }
  function cevirDugum(n) {
    var s = n.nodeValue, bas = s.match(/^\s*/)[0], son = s.match(/\s*$/)[0], cekirdek = s.trim();
    sirada.add(n);
    if (bellek.has(cekirdek)) { asil.set(n, s); n.nodeValue = bas + bellek.get(cekirdek) + son; return Promise.resolve(); }
    return cevirmen.translate(cekirdek).then(function (t) {
      if (!cevirmen) return;
      bellek.set(cekirdek, t);
      if (n.nodeValue === s) { asil.set(n, s); n.nodeValue = bas + t + son; }
    }).catch(function () {});
  }
  function tara() {
    if (!cevirmen || calisiyor) return;
    var liste = adaylar(120);
    if (!liste.length) return;
    calisiyor = true;
    var i = 0;
    function isci() { if (!cevirmen || i >= liste.length) return Promise.resolve(); var n = liste[i++]; return cevirDugum(n).then(isci); }
    Promise.all([isci(), isci(), isci(), isci()]).then(function () { calisiyor = false; if (cevirmen) planla(50); });
  }
  function planla(ms) { if (!cevirmen) return; clearTimeout(bekleyen); bekleyen = setTimeout(tara, ms || 250); }

  function baslat(dil, ilerleme) {
    var ayar = { sourceLanguage: "tr", targetLanguage: API[dil] || dil };
    return Translator.availability(ayar).then(function (d) {
      if (d === "unavailable") throw new Error("unavailable");
      if (ilerleme) ayar.monitor = function (m) { m.addEventListener("downloadprogress", function (e) { ilerleme(Math.round((e.loaded || 0) * 100)); }); };
      return Translator.create(ayar);
    }).then(function (t) {
      cevirmen = t; hedef = dil;
      document.documentElement.setAttribute("lang", dil === "iw" ? "he" : (API[dil] || dil));
      gozlemci = new MutationObserver(function () { planla(300); });
      gozlemci.observe(document.body, { childList: true, subtree: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      window.addEventListener("hashchange", onScroll);
      document.addEventListener("click", onScroll, true);
      dugme();
      tara();
    });
  }
  function onScroll() { planla(200); }
  function geriAl() {
    if (cevirmen && cevirmen.destroy) { try { cevirmen.destroy(); } catch (e) {} }
    cevirmen = null; hedef = null;
    if (gozlemci) gozlemci.disconnect();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    window.removeEventListener("hashchange", onScroll);
    document.removeEventListener("click", onScroll, true);
    asil.forEach(function (s, n) { if (n.isConnected) n.nodeValue = s; });
    asil = new Map(); sirada = new WeakSet();
    document.documentElement.setAttribute("lang", "tr");
    yaz("hayir");
    dugme();
  }

  // ---------- Pencere ----------
  var kutu = null;
  function esc(e) { if (e.key === "Escape") kapat(true); }
  function kapat(kayit) { if (kayit) yaz("hayir"); if (kutu) { kutu.remove(); kutu = null; } document.removeEventListener("keydown", esc); }
  function ac(metinDili, secili, odak) {
    if (kutu) kutu.remove();
    kutu = document.createElement("div");
    kutu.className = "ydil notranslate";
    kutu.setAttribute("translate", "no");
    kutu.setAttribute("role", "dialog");
    kutu.setAttribute("aria-labelledby", "ydil-q");
    var sec = "";
    for (var i = 0; i < DILLER.length; i++) sec += '<option value="' + DILLER[i][0] + '"' + (DILLER[i][0] === secili ? " selected" : "") + ">" + DILLER[i][1] + "</option>";
    kutu.innerHTML = '<button type="button" class="ydil-x"><span aria-hidden="true">×</span></button><p class="ydil-q" id="ydil-q"></p><p class="ydil-uyari" hidden></p><label class="ydil-etiket"><span class="ydil-o"></span><select>' + sec + '</select></label><div class="ydil-dugmeler"><button type="button" class="ydil-evet"></button><button type="button" class="ydil-hayir"></button></div><p class="ydil-not"></p>';
    document.body.appendChild(kutu);
    var s = kutu.querySelector("select"), evet = kutu.querySelector(".ydil-evet"), uyari = kutu.querySelector(".ydil-uyari");
    var aktifMetin = metinDili;
    function yazdir(m) {
      aktifMetin = T[m] ? m : "en";
      var t = T[aktifMetin];
      kutu.setAttribute("lang", m === "iw" ? "he" : m);
      kutu.setAttribute("dir", RTL[m] ? "rtl" : "ltr");
      kutu.querySelector(".ydil-q").textContent = t[0];
      evet.textContent = t[1];
      kutu.querySelector(".ydil-hayir").textContent = t[2];
      kutu.querySelector(".ydil-x").setAttribute("aria-label", t[2]);
      kutu.querySelector(".ydil-o").textContent = t[3];
      kutu.querySelector(".ydil-not").textContent = t[4];
      if (!uyari.hidden) uyari.textContent = t[5];
    }
    function desteklenmiyor() {
      uyari.hidden = false; uyari.textContent = T[aktifMetin][5];
      evet.hidden = true;
    }
    yazdir(metinDili);
    if (!destek()) desteklenmiyor();
    s.addEventListener("change", function () { if (metinDili !== "tr") yazdir(s.value); uyari.hidden = true; evet.hidden = !destek(); if (!destek()) desteklenmiyor(); });
    evet.addEventListener("click", function () {
      var dil = s.value, etiket = evet.textContent;
      evet.disabled = true; evet.textContent = "…";
      if (cevirmen) geriAl();
      baslat(dil, function (y) { evet.textContent = "… " + y + "%"; }).then(function () {
        yaz("cevir:" + dil); kapat(false);
      }).catch(function () {
        evet.disabled = false; evet.textContent = etiket; desteklenmiyor();
      });
    });
    kutu.querySelector(".ydil-hayir").addEventListener("click", function () { kapat(true); });
    kutu.querySelector(".ydil-x").addEventListener("click", function () { kapat(true); });
    document.addEventListener("keydown", esc);
    if (odak) s.focus();
  }

  // ---------- Yüzen düğme ----------
  var yuzen = document.createElement("button");
  yuzen.type = "button";
  yuzen.className = "ydil-yuzen notranslate";
  yuzen.setAttribute("translate", "no");
  function dugme() {
    if (cevirmen) {
      yuzen.innerHTML = GLOBE + "<span>Türkçe</span>";
      yuzen.setAttribute("aria-label", "Türkçe (orijinal)");
      yuzen.title = "Türkçe (orijinal)";
    } else {
      yuzen.innerHTML = GLOBE;
      yuzen.setAttribute("aria-label", "Dil · Language");
      yuzen.title = "Dil · Language";
    }
  }
  yuzen.addEventListener("click", function () {
    if (cevirmen) { geriAl(); return; }
    if (tarayici === "tr" || !varMi(tarayici)) ac(tarayici === "tr" ? "tr" : "en", "en", true);
    else ac(tarayici, tarayici, true);
  });
  dugme();
  document.body.appendChild(yuzen);

  // ---------- Açılış ----------
  var karar = oku();
  if (karar && karar.indexOf("cevir:") === 0 && destek()) {
    var dil = karar.slice(6);
    Translator.availability({ sourceLanguage: "tr", targetLanguage: API[dil] || dil }).then(function (d) {
      if (d === "available") baslat(dil).catch(function () {});
      else ac(T[dil] ? dil : "en", dil, false);
    }).catch(function () {});
  } else if (!karar && tarayici !== "tr") {
    setTimeout(function () { ac(T[tarayici] ? tarayici : "en", varMi(tarayici) ? tarayici : "en", false); }, 1200);
  }
})();
