# Yayın usulü (üç görev için ortak)

Bu depo (barishp/yevmiye) Rehber Gündemi Yevmiye’nin tek kaynağıdır. Site `docs/` klasöründedir. `main` dalına gönderilen her değişiklik birkaç dakika içinde GitHub Pages ile https://barishp.github.io/yevmiye/ adresinde yayına çıkar.

1. **Önce oku:** kökteki `CLAUDE.md` ve `Rehber_Gundemi_Yevmiye_Tam_Talimat.md`. Görev metni ile talimat çelişirse görev metni geçerlidir.
2. **Dosya yolları:** Görev metninde geçen `yevmiye/…`, `haftalik/…`, `sayilar/…` ve `index.html` yolları depoda `docs/` altındadır (ör. `docs/yevmiye/liste.json`). `liste.json` içindeki `"dosya"` alanı ise `docs/` olmadan yazılır (ör. `"yevmiye/2026-11-28.html"`).
3. **Yalnızca kendi dosyalarına dokun:** yeni sayı dosyası ve ilgili `liste.json`. Kabuk dosyalarını (`docs/index.html`, `docs/css/`, `docs/js/`, `docs/img/`) değiştirme. Gündem’de görsel kullandıysan `docs/img/…` altına yeni dosya ekleyebilirsin.
4. **Yerel kontrol:** `cd docs && python3 -m http.server 8000`. Ardından Playwright ile `http://localhost:8000/index.html#<bölüm>-YYYY-MM-DD` sayfasını aç. Sayının yüklendiğini ve JS hatası olmadığını doğrula.
5. **Yayımla:**
   ```
   git add docs
   git commit -m "<Bölüm> YYYY-MM-DD"
   git pull --rebase origin main
   git push origin main
   ```
   `main`’e doğrudan gönder; ayrı dal ya da PR açma. Gönderim reddedilirse yeniden `git pull --rebase` yap ve tekrar dene. Yine olmazsa nedenini özetle yaz ve dur.
6. **Doğrula:** 2–3 dakika bekle. Ardından `curl -s https://barishp.github.io/yevmiye/<ilgili>/liste.json` ile yeni tarihin göründüğünü kontrol et. Görünmüyorsa birkaç dakika daha bekleyip bir kez daha dene.
7. **Künye ve imza:** Barış’ın adı ve kişisel e-postası hiçbir yerde künyeye yazılmaz. Yayını “yapay zekâ robotu Lâlâ” hazırlar; hedef kitle profesyonel turist rehberleri ve sektör paydaşlarıdır.
8. **Bitiş özeti:** Türkçe ve kısa olsun: yayımlanan tarih, öne çıkanlar, doğrulanamayanlar ve yayın adresi.
