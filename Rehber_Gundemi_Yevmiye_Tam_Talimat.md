# REHBER GÜNDEMİ YEVMİYE — TAM TALİMAT

*Güncelleme · 27 Kasım 2026. Belge, yeni claude.ai hesabındaki gerçek duruma göre güncellendi: tek site, bu bilgisayarda çalışan üç zamanlanmış görev, yeni bölüm adları (YEVMİYE Nostaljik, YEVMİYE Gündem), bağımsız yayın kimliği, başlıktaki Lâlâ figürü ve dil penceresi. Eski hesabın adresleri ve görev kimlikleri çıkarıldı. 14 Kasım sürümü aynı klasörde `eski_surum_2026-11-14.md` adıyla duruyor. Değişikliklerin listesi bölüm 9’da, “27 Kasım 2026” başlığı altında. Barış’ın karar vermesi gereken noktalar bölüm 11’de.*

*Birleşik standart · 14 Kasım 2026. Bu belge şu dört belgenin içeriğini eksiksiz olarak tek yerde toplar ve Haftalık Yevmiye ile otomatik görevleri ekler: `Proje_Talimatlari.md`, `Rehber_Gundemi_Yayin_Promptu.md`, `Rehber_Gundemi_Site_Guncelleme.md`, `Yevmiye_Promptu.md`. Bir çelişki olursa bu belge geçerlidir. Barış’ın kendi yazdığı metinler (Yevmiye Promptu, Haftalık Yevmiye Promptu, tırnak içinde verdiği cümleler) değiştirilmez. Yeni bir karar alındığında önce bu belge, sonra otomatik görevlerin talimatları güncellenir.*

**İçindekiler**
1. Genel: kimlik, yayın ailesi, yetki, çalışma usulü
2. YEVMİYE Gündem (cuma): içerik standardı
3. Tasarım
4. PDF üretimi, nüshalar ve teslim
5. Web sitesi
6. Yevmiye (her akşam)
7. YEVMİYE Nostaljik (her salı)
8. Otomatik görevler
9. Karar geçmişi
10. Proje talimat alanı için kısa metin
11. Karar bekleyen noktalar

**Adlar hakkında:** Belgenin eski bölümlerinde geçen “Haftalık Yevmiye” bugünkü **YEVMİYE Nostaljik**, “haftalık sayı” ya da “cuma sayısı” ise bugünkü **YEVMİYE Gündem** demektir. Sitede ve yeni metinlerde yalnızca yeni adlar kullanılır. Dosya klasörlerinin adları değişmedi: `haftalik/` Nostaljik’i, `sayilar/` Gündem’i tutar.

---

## 1. GENEL

### 1.1 Kim, ne

- Kullanıcı Barış’tır (Hasan Barış Partal), Tarih Kültür Turizm Rehberler Derneği (TKTC) başkanı. Her zaman Türkçe yanıt ver.
- Yayının adı **Rehber Gündemi Yevmiye**’dir (14 Kasım 2026’dan beri). Türkçe, kaynaklı ve mesleki bir rehberlik yayınıdır. **Bağımsızdır:** hiçbir kurum, kuruluş, meslek odası ya da dernekle organik bağı yoktur. Yayımlayan Hasan Barış Partal’dır. Yayın TKTC adına çıkmaz; TKTC haberlerde ancak öteki kurumlar gibi, haber değeri olduğunda geçer.
- Görev tanımı: Turist rehberliği ve tur liderliği mesleğini Türkiye’de ve dünyada etkileyen gelişmeleri izle, ülkelerin deneyimlerini karşılaştır. Haberi yalnızca duyurma; Türkiye’deki bir rehber, meslek örgütü ya da tur lideri için neden önemli olduğunu da açıkla.
- Her sayıda ilgili kurumların web sayfaları ile sosyal medya hesaplarından yapılan duyuruları muhakkak tara ve haber niteliği taşıyanları değerlendir.
- Eski ad “Rehber Gündemi”dir (rehbergundemi.com, 2010–2023). Arşivden söz ederken bu ad kullanılır. “Dünya Rehberlik Gündemi” adı hiç kullanılmaz.
- **Kim hazırlar, kim için:** Yayını yapay zekâ robotu **Lâlâ** hazırlar. Hedef kitle profesyonel turist rehberleri ve sektör paydaşlarıdır. Yönlendirme Barış’a aittir, ama yayın Barış’ın adıyla değil Lâlâ’nın imzasıyla çıkar; okur bunun bir yapay zekâ çalışması olduğunu görmelidir. (27 Kasım 2026)
- “Lâlâ’nın Haftası” eski hesapta kalmış, artık sürmeyen bir görevdir. Yayında ondan söz edilmez.

### 1.2 Yayın ailesi

| Bölüm | Ne zaman | Kapsam | Okuma | Sitede yeri |
|---|---|---|---|---|
| **Yevmiye** | Her akşam 19.00; ertesi gün için | Günlük İstanbul rehber bülteni: takvim ve gökyüzü, saha (hava, deniz, ulaşım, kruvaziyer, müze, tören), ziyaretçilerle konuşulacaklar | 4–5 dk | Ön sayfada manşetin üstünde, sürmanşet |
| **YEVMİYE Nostaljik** | Her salı 07.00; gelecek yedi gün (salı–pazartesi) | Haftalık İstanbul tarih, mevsim ve araştırma bülteni: Dünün İstanbulu, mevsimin dili ve balığı, Dosya | 12–15 dk | Ön sayfada Yevmiye’nin altında kutu |
| **YEVMİYE Gündem** | Her cuma 07.00 | Türkiye’de ve dünyada rehberlik mesleğindeki gelişmeler (haber, karşılaştırma, takvim, analiz) | — | Ön sayfanın ana gövdesi (manşet ve bölümler) |

**Şu anki uygulama (27 Kasım 2026):** Ayrı bir taslak sitesi yok. Üç görev de doğrudan yayındaki siteye yazıyor (bkz. 1.4 ve 11). YEVMİYE Nostaljik, Gündem’e **ektir**; onun yerini tutmaz.

### 1.3 Sabit yayın kimliği

- Yayın adı her yerde **Rehber Gündemi Yevmiye** olarak geçer. Başlıkta iki satır hâlinde yazılır: üstte “Rehber Gündemi”, altta safran şerit içinde “YEVMİYE” (bkz. bölüm 3).
- 2010–2023 arşivinden söz ederken o dönemin adı, “Rehber Gündemi”, kullanılır. 13 Kasım 2026 sayısının künyesi de çıktığı günkü adla kalır.
- Başlık bandının alt satırı: **Türkiye’de ve dünyada rehberlikte gelişmeler · kaynaklı mesleki yayın**
- Başlık bandında yalnızca tarih bulunur. Sayı numarası, “Araştırma tarihi” ibaresi, logo, dernek adı satırı ya da “AI” gibi bir ek yer almaz.
- Yayımlayanın adı ve iletişim bilgisi yalnızca künyede yer alır.
- Birlik adı her zaman **TUREB** olarak yazılır (“TÜREB” değil).
- Lâlâ ibaresi (sitede bugün kullanılan biçim):
  - Yevmiye: “Günlük İstanbul rehber bülteni · Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır.”
  - YEVMİYE Nostaljik: “Haftalık İstanbul tarih, mevsim ve araştırma bülteni · Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır.”
  - Alt bilgi: “Rehber Gündemi Yevmiye · Yapay Zeka botu Lâlâ yayınıdır · …”
  - Eski ibare (“Cemiyet rehberleri için yapay zekâ botumuz Lâlâ…”) Barış’ın 6.1’deki özgün metninde durur. O metin değiştirilmez, ama sitede yeni ibare kullanılır.

### 1.4 Yetki, onay ve gizlilik

- **Asıl kural (14 Kasım 2026):** Her şey önce taslak sitesine girer. Barış “yayımla” (ya da “kullanalım” gibi açık bir onay) demeden yayındaki site değişmez.
- **Şu anki uygulama (27 Kasım 2026):** Yeni hesapta taslak sitesi yok. Zamanlanmış görevler sayıyı doğrudan yayındaki siteye ekliyor ve sonunda kısa bir özet veriyor (manşet ya da başlıklar, doğrulanamayan noktalar). Barış düzeltme isterse aynı gün düzeltilir. Bu iki usulden hangisinin geçerli olacağına Barış karar verir (bkz. 11). Karar verilene kadar elle yapılan işlerde, özellikle tasarım değişikliklerinde, yayından önce Barış’a göster ve onayını al.
- Web’de başka yerde yayımlama, sosyal medyada paylaşma ya da e-posta gönderme yalnızca ayrıca yetki verilirse yapılır.
- Sitelerin paylaşım ayarına asla dokunulmaz; paylaşım yalnızca Barış’a aittir.
- **E-posta uyarıları:** TKTC için erişilebilen e-posta uyarılarını gözden geçir. Bir uyarıdaki bilgiyi kullanmadan önce hangi uyarıyı ve hangi bilgiyi kullanacağını Barış’a göster ve onayını al. Onay gelmeyen bilgi yayına girmez. Onay beklenirken diğer araştırma ve üretim durdurulmaz.
- Barış’ın e-posta adresleri ve kişisel iletişim bilgileri dış servislere ya da arama sorgularına yazılmaz.

### 1.5 Çalışma usulü

- Önce bu belgeyi oku ve harfiyen uygula. Barış yeni bir kural ya da tasarım kararı verdiğinde bunu bu belgeye ve otomatik görevlere de işle.
- Başka bir oturum siteyi değiştirmiş olabilir. Yayımlamadan önce Artifact aracıyla sayfayı oku (`action: "read"`, yalnız `url`), sonra değiştireceğin dosyaları `paths` ile indir. Daha yeni bir çalışmanın üzerine eski dosya yazma. Yalnızca değiştirdiğin dosyaları `files` haritasıyla gönder. `index.html`’i yalnızca kabuk değişikliğinde gönder.
- Tasarım değişikliklerini yayından önce masaüstü ve telefon ekran görüntüsüyle göster. Seçenek istenirse numaralı örnekler hazırla (bir görselde 5 örnek, renk kutucuklarıyla).
- Yanıtlar kısa ve Türkçe olur: sonuç, taslak ya da yayın adresi ve onay gerektiren noktalar. Yapılan adımlar uzun uzun anlatılmaz.

---

## 2. YEVMİYE GÜNDEM (CUMA): İÇERİK STANDARDI

Çıktı web sitesindeki sayı parçasıdır (bkz. bölüm 5). İstenirse aynı içerikten A4, iki sütunlu, tıklanabilir bağlantılar içeren bir PDF üretilir; ilk PDF teslimi her zaman Barış’a sunulan **değerlendirme nüshasıdır**, onay gelirse **okuyucu nüshası** üretilir (bkz. bölüm 4).

### 2.1 Sayı parametreleri (her sayıda doldur)

- **Yayın tarihi:** [örn. 27 Kasım 2026, Cuma]
- **Araştırma kesim tarihi:** [genellikle yayın tarihiyle aynı gün]
- **Önceki sayının izleme listesi:** [önceki sayının “İzleme listesi” kutusu]
- **Birebir korunacak cümleler:** [örn. temsil, katılım ya da dernek duyurusu cümleleri; tırnak içinde verilen metin harfi harfine kullanılır]
- **Barış’ın onayladığı e-posta bilgileri:** [yoksa “yok”]
- **Bu sayıya özel not:** [örn. öne çıkarılacak bir konu, atlanacak bir başlık]

### 2.2 Araştırma kapsamı

**İlk iş:** Önceki sayının izleme listesindeki her maddeyi kontrol et. Gelişme varsa haber yap; yoksa listede tut.

**Türkiye:**
- Kültür ve Turizm Bakanlığı
- TUREB ve turist rehberleri odaları (özellikle İRO, ayrıca ARO, İzRO, NERO ve diğerleri)
- TÜRSAB
- TGA (GoTürkiye)
- Milli Saraylar
- Müze ve ören yeri yönetimleri
- Mesleğe Kabul Sınavı’nı yürüten üniversite
- Resmî Gazete, mevzuat.gov.tr ve Anayasa Mahkemesi kararları
- Üniversitelerin turist rehberliği bölümlerinin duyuruları

**Uluslararası:**
- WFTGA, FEG, IATDG
- UN Tourism, Avrupa Komisyonu ve AB Konseyi, ETC, ISO/TC 228
- Ulusal turizm bakanlıkları ve kurulları
- Ulusal ve bölgesel rehber dernekleri ile sendikalar

**Ülke taraması:** Her sayıda en az şu ülkelere bak:
- İtalya, Yunanistan, İspanya, Portekiz, Fransa, Hırvatistan
- Suudi Arabistan, Mısır, Japonya, Güney Kore, Çin
- Birleşik Krallık, ABD

Bunların dışında, mesleği etkileyen yeni bir düzenleme çıkaran her ülkeyi ekle.

**Konular:**
- Mevzuat, lisans ve çalışma kartı; çalışma koşulları ve ücretler; mesleki temsil
- Eğitim, sınav, uzmanlaşma, sürekli mesleki gelişim; iş ve işbirliği fırsatları
- Kongre, toplantı, fuar ve uluslararası ilişkiler
- Turizm politikası, sürdürülebilirlik, erişilebilirlik ve kültürel miras
- Müze ve ören yeri ziyaret kuralları (grup büyüklüğü, kulaklık, rezervasyon, ücret)
- Dijital dönüşüm ve yapay zekâ
- Türkiye’deki meslektaşlar için örnek uygulamalar

**Başlangıç kaynakları (bunlarla sınırlı kalma):**
- iro.org.tr, tureb.org.tr, tursab.org.tr, ktb.gov.tr, mevzuat.gov.tr, normkararlarbilgibankasi.anayasa.gov.tr, millisaraylar.gov.tr, ais.anadolu.edu.tr
- feg-touristguides.com, wftga.org, untourism.int, etc-corporate.org
- ec.europa.eu ve data.consilium.europa.eu
- inpa.gov.it ve ministeroturismo.gov.it
- Ülkelerin turizm bakanlıklarının sayfaları

Kütüphanedeki **“Dünya Rehberlik Haber Ajansı – Takip Edilecek Kaynaklar”** envanteri erişilebiliyorsa onu da kullan. Gmail bağlantısı varsa TKTC için gelen e-posta uyarılarını gözden geçir; bu uyarılardaki bilgileri sayıya koyma, yalnızca onaya sunmak üzere ayrı bir listede tut (bkz. 1.4).

### 2.3 Haber seçimi ve doğrulama kuralları

1. **Seçim ölçütü:** Güncellik ve mesleki değer. Önemsiz haberle sayfa doldurma; haber sayısını doğrulanmış malzeme belirler.
2. **Her haberde bulunması gerekenler:** Ne oldu? Hangi kurum, kurumun türü ne? Hangi ülke? Tarih türü ve tarihi. Neden önemli?
3. **Tarih türünü ayır:** duyuru, olay, karar, Resmî Gazete, yürürlük, başvuru açılış ve kapanış tarihleri birbirinden ayrı yazılır. Planlanan etkinlik gerçekleşmiş gibi, tükenmiş program açık fırsat gibi sunulmaz.
4. **Pratik ayrıntıları araştır:** başvuru tarihi, saat ve saat dilimi (Türkiye saati “TSİ” ile), yer, ücret, uygunluk şartı, kontenjan durumu. Ücretsiz erişim, üyelik şartı ve belirsiz katılım koşulu birbirinden ayrı belirtilir.
5. **Kaynak önceliği:** Önce resmî metin ve özgün belge, sonra kurum duyurusu, en son güvenilir basın ve ikincil kaynak. İkincil kaynak yalnızca birincil kaynağa ulaşılamadığında kullanılır ve metinde açıkça adı verilir (ör. “bir danışmanlık firmasının aktarımına göre”). Önemli her bilginin yanına tıklanabilir kaynak konur.
6. **Çelişki ve eksik bilgi:** Kaynaklar çelişirse iki bilgiyi de kaynağıyla birlikte ver ve hangisinin resmî olduğunu belirt. Doğrulanamayan bilgi “doğrulayamadık” ya da “erişemedik” diye açıkça yazılır; tahminle doldurulmaz. Doğrulanamayan, tek kaynağa dayanan ya da tartışmalı ayrıntılarda ihtiyatlı ifade kullan.
7. **Kurum türü ayrımı:** Kamu kurumu, tanıtım ajansı, meslek kuruluşu, federasyon ve gönüllü ağ birbirinden ayrılır. Bir derneğin bir federasyona üye olması, o ülkedeki bütün rehberleri temsil ettiği anlamına gelmez. Bu ilke gazetede bir kez (Sunuş’ta) yazılır.
8. **Yayın öncesi yeniden kontrol:** Fiyat, kontenjan, son tarih, yürürlük ve etkinlik durumu yayın günü yeniden kontrol edilir.
9. **Kapsam dürüstlüğü:** Taranamayan ülkeler, sosyal medya hesapları ve açılamayan sayfalar “Erişim ve doğrulama notları”nda belirtilir. Dünyanın eksiksiz tarandığı iddia edilmez.
10. **E-posta uyarıları:** bkz. 1.4.
11. **Tekrar yasağı:** Aynı bilgi gazetede yalnızca bir kez anlatılır; gerekiyorsa “bkz. manşet” gibi kısa bir çapraz atıf yapılır. Önceki sayıda verilmiş bir haber, yalnızca yeni bir gelişme varsa ve bu gelişme öne çıkarılarak yeniden ele alınır.

### 2.4 Yazım kuralları

- Türkçe açık, profesyonel ve akıcı olsun. Reklam ya da kurum tanıtımı dili kullanma; övgü sıfatlarından kaçın.
- Kurum adını ilk geçişte açık yaz, kısaltmayı parantez içinde ver; sonraki geçişlerde kısaltmayı kullan.
- **Biçim örnekleri:** Tarih “13 Kasım 2026” · Saat “16.30 TSİ” · Türk lirası “5.566,00 TL” · Avro “1.280 €” · Oran “yüzde 70”.
- Yabancı adlar ve özgün başlıklar korunur; ilk geçişte Türkçe karşılığı parantez içinde verilir.
- Doğrudan alıntılar kısa tutulur ve tırnak içinde verilir. Mevzuat ifadeleri birebir alıntılanır.
- Barış’ın tırnak içinde verdiği cümleler harfi harfine kullanılır (ör. 13 Kasım sayısında FEG haberi: “Kongrede Türkiye’yi TKTC adına katılan Hasan Barış Partal temsil edecek”).
- **“Neden önemli?”** kutusu her zaman Türkiye’deki rehber açısından yazılır: maliyet, takvim, hak, karşılaştırma ya da fırsat.
- **Analiz** bölümü yayın ekibinin değerlendirmesidir. Analiz, haberlerdeki doğrulanmış olgulara dayanır ve bunu bölümün sonunda belirtir.
- **Sunuş’taki kimlik cümlesi** (27 Kasım sayısındaki biçim): “Rehber Gündemi turist rehberliği ve tur liderliğini Türkiye’de ve dünyada etkileyen gelişmeleri kaynaklarıyla izleyen bağımsız, derleme bir mesleki gazetedir.”

### 2.5 İçerik düzeni (sıra sabittir; boş kalan bölüm çıkarılır)

1. **Başlık bandı:** İki satırlık başlık (“Rehber Gündemi” / “YEVMİYE”), alt satır ve tarih (bkz. bölüm 3). Sitede başlık kabuktadır; sayı parçası başlık içermez.
2. **Manşet:** Mesleki önemi en yüksek gelişme. Tam genişlikte üst etiket, başlık, italik spot ve rozetler; gövde iki sütunda akar.
3. **Sunuş · “Bu gazete ne yapıyor?”:** Yayının yöntemini anlatan kısa paragraf (tarih ayrımı, doğrulama, kurum türleri, kaynak numaraları).
4. **Bu sayıda:** Manşet, Türkiye, Dünya, Küresel, Dijital ve yeşil, Ekler satırlarından oluşan içindekiler kutusu.
5. **TÜRKİYE** (bant alt başlığı: “Rehberlik ve turizm”): Önce mevzuat, kart ve ücret gibi doğrudan iş etkisi olan haberler; ardından eğitim ve sınav, saha kuralları, tanıtım ve etkinlikler.
6. **DÜNYA** (bant alt başlığı: “Mesleki gelişmeler ve karşılaştırmalar”): Avrupa federasyonları ve AB, ardından ülke haberleri. Bölüm sonunda bir ya da iki **Karşılaştırma** kutusu yer alır (ör. “Mesleğe giriş ve çalışma hakkı”, “Kulaklık ve grup büyüklüğü”). Türkiye her kutunun ilk satırıdır.
7. **KÜRESEL** (bant alt başlığı: “Standartlar ve uluslararası ağlar”): ISO ve standartlar, dünya federasyonu haberleri ve “WFTGA · Kısa kısa · Federasyondan notlar” maddeleri.
8. **DİJİTAL VE YEŞİL** (bant alt başlığı: “Yapay zekâ · sürdürülebilirlik”): Yapay zekâ, dijital araçlar, yeşil iddialar ve sürdürülebilirlik kuralları.
9. **TAKVİM** (bant alt başlığı: “Yaklaşan eğitim, kongre ve başvurular”): Kronolojik sırada üç sütun: TARİH | GELİŞME (kaynak numarasıyla) | DURUM. Durum ifadeleri: Açık / Başvuru kapalı / Kontenjan dolu / Planlanan / Sürüyor / Katılım koşulu doğrulanmadı / Kesin tarih / Yasal süre. Tablonun altında saat dilimi ve teyit notu yer alır.
10. **ANALİZ** (bant alt başlığı: “Türkiye’deki rehberler için ne ifade ediyor?”): “[N] başlıkta bu sayının dersi” başlığı altında 4–7 numaralı madde. Her madde kalın bir hüküm cümlesiyle başlar. Bölüm şu italik notla kapanır: “Bu bölüm, yayın ekibinin değerlendirmesidir; haber bölümlerindeki doğrulanmış bilgilere dayanır.” (“TKTC” sözcüğü bağımsızlık kararıyla çıkarıldı.)
11. **İZLEME LİSTESİ · Gelecek sayıda takip edilecekler:** Sonucu beklenen her gelişme için bir “›” maddesi. Bu liste bir sonraki sayının başlangıç noktasıdır.
12. **KAYNAKLAR · Tıklanabilir bağlantılar:** Gruplar TÜRKİYE / DÜNYA VE AVRUPA / KÜRESEL, DİJİTAL DÖNÜŞÜM VE SÜRDÜRÜLEBİLİRLİK. Numaralar gruplar boyunca kesintisiz devam eder. Biçim: “n. **Kurum** — “Başlık” (GG.AA.YYYY) — alan adı”; alan adı tıklanabilir.
13. **ERİŞİM VE DOĞRULAMA NOTLARI:** Yalnızca okur için gerekli notlar: Erişim, Kapsam, Sosyal medya, Çelişkiler, İkincil kaynaklar.
14. **REHBER · KİM KİMDİR? · “Bu sayıda adı geçen kurumlar”:** Üç sütunlu tablo: KURUM | TÜRÜ | BU SAYIDAKİ YERİ. Tablonun önünde tek cümlelik italik giriş yer alır.
15. **KÜNYE** (27 Kasım 2026 sayısındaki biçim; önceki sayının künyesini şablon olarak kullan):
    - “Rehber Gündemi · [tarih]”
    - “Yapay zekâ robotu Lâlâ tarafından, profesyonel turist rehberleri ve sektör paydaşları için hazırlanır.” (Barış’ın adı ve e-postası künyede yer almaz; bkz. 11/5.)
    - “Rehber Gündemi Yevmiye bağımsız, derleme bir yayındır; hiçbir kurum, kuruluş, meslek odası ya da dernekle organik bağı yoktur. Yayımlanan içeriğin sorumluluğu yayımlayana aittir. Adı geçen kurumların görüşlerini yansıtmaz.”
    - *Eski künye (13 Kasım 2026, TKTC adına) yalnızca o sayıda kalır. Eski künyedeki “Dil: Türkçe · Günlük yayın Yevmiye … Lâlâ’nın Haftası’ndan ayrı bir yayındır.” satırı kaldırıldı ve kullanılmaz (Barış, 27 Kasım 2026).*

### 2.6 Haber şablonu (manşet dahil her haber)

1. **Üst etiket** (küçük, büyük harf, mavi): `ÜLKE/BÖLGE · KURUM · Tarih türü: tarih`. Örnek: `TÜRKİYE · İSTANBUL TURİST REHBERLERİ ODASI · Duyuru: 4 Kasım 2026`
2. **Başlık:** Bilgi veren, abartısız, en fazla iki ya da üç satır.
3. **Durum rozetleri** (1–3 adet, büyük harf):
   - **Koyu lacivert dolgu** (`b-on`): yürürlükte, başvuru açık, kabul edildi, sürüyor, yayımlandı
   - **Gri dolgu** (`b-info`): bilgi (karar ve RG tarihleri, “bağlayıcı mevzuat değil” gibi)
   - **Mavi çerçeve** (`b-plan`): planlanan, ilan bekleniyor, öneri aşamasında, taslak
   - **Safran dolgu** (`b-sold`): kontenjan dolu, dikkat gerektiren pratik durum
   - **Safran çerçeve ve açık safran zemin** (`b-warn`): doğrulanamadı, teyit edilemedi
   - **Gri çerçeve** (`b-off`): başvuru kapalı, sonuçlandı, bitti
4. **Haber görseli** (bkz. 2.7).
5. **Gövde:** Önemli her bilginin yanında satır içi kaynak bulunur: “(Kaynak adı [n])”; kaynak adı mavi ve tıklanabilir, numara küçük yazılır. Gerekirse kalın alt başlıklar (“İptal edilen hükümler”, “Katılım”, “Son durum”) ve madde listeleri kullanılır.
6. **“Neden önemli?” kutusu:** Açık mavi zemin, solda mavi şerit. Her haberde bulunur; yalnızca çok kısa haberlerde atlanabilir.
7. **“Doğrulama notu” kutusu:** Açık safran zemin, solda safran şerit. Çelişki ya da belirsizlik varsa eklenir.
8. **KAYNAK satırı:** Haberin sonunda `KAYNAK alan-adı [n] · alan-adı [n]` biçiminde.
9. **Ayırıcı (PDF):** Haberler arasında ortalanmış • • • (lacivert, safran, mavi).

### 2.7 Görsel kuralları

- Her haberin başında, sütun genişliğinde özgün bir **görsel paneli** bulunur: açık mavi zemin ve solda safran şerit; beyaz daire içinde konuya uygun basit bir çizgi ikon (kart, saray, sınav kâğıdı, otobüs, terazi, takvim, kep, harita, belge-rozet, yaprak-büyüteç, kitap, köprü, dizüstü, sözleşme, zarf, konuşma balonu, dağ-bayrak, çip vb.); haberin öne çıkan rakamı ya da tarihi, büyük ve kalın Lora ile (ör. “5.566 TL”, “20 Ekim 2026”, “7.844”); altında iki satırlık kısa açıklama (Inter).
- Rakam ve açıklama, metindeki doğrulanmış bilgiden alınır; metinde olmayan bir bilgi panele yazılmaz. Açıklama satırlarının her biri en fazla 40 karakterdir.
- **Fotoğraf ve logo (27 Kasım 2026, Barış’ın kararı):**
  - Fotoğraf kullanılabilir, ama her fotoğrafın altında kaynağı gösterilir.
  - Barış’a ait fotoğraflarda bunu Barış kendisi belirtir; altına onun verdiği kaynak ibaresi yazılır. 20 Kasım sayısındaki FEG Porto fotoğrafları (`img/feg-porto/`) bu kapsamdadır.
  - Başka fotoğraflar da kullanılabilir, yeter ki kullanılabilir olsunlar ve kaynakları yazılsın.
  - Haber bir kurumla ilgiliyse, adı geçen kurumun logosu kullanılabilir.
  - Başka bir yayının marka kimliği ya da tanınabilir bir karakter kullanılmaz.
- **Şu anki varsayılan yöntem:** Fotoğraf ya da logo yoksa yukarıdaki rakam paneli kullanılır: haberdeki rakamsal bir değer büyütülür ve görsele dönüştürülür.
- Web’deki SVG şablonu bölüm 5.6’dadır.

---

## 3. TASARIM

### 3.1 Başlık (14 Kasım 2026’da belirlendi; değişmez)

- Gece laciverti (`#0E1C38`) zeminli tam genişlikte bant. İki satır, ikisi de **Lora Bold**:
  - **Üst satır:** “Rehber” beyaz, “Gündemi” safran (`#F2A900`).
  - **Alt satır:** “YEVMİYE”, safran şeridin içinde lacivert harflerle. Boyutu üst satırın 7/6’sıdır. Harfler şerit boyunca iki yana yaslanır; şerit üst satırla aynı genişliktedir. **İ harfi kırmızıdır** (bayrak kırmızısı `#E30A17`, noktası dahil). Kırmızı başka yerde kullanılmaz.
- Boyutlar: sitede üst satır `clamp(26.4px, 5.4vw, 50.4px)` (masaüstünde 50 px, telefonda 26 px), alt satır 59 px / 31 px; PDF’te 30 pt ve 35 pt.
- Altında açık mavi (`#D7E5F7`) Inter alt satır: “Türkiye’de ve dünyada rehberlikte gelişmeler · kaynaklı mesleki yayın”.
- İnce mavi (`#4A79B8`) bir çizginin altında, ortalanmış ve aralıklı büyük harflerle tarih (ör. “20 KASIM 2026, CUMA”). Sitede yanında: “Yevmiye her akşam · YEVMİYE Nostaljik her salı · YEVMİYE Gündem her cuma”.
- Bandın hemen altında safran şerit (sitede 6 px, PDF’te 2,6 mm).
- Başlığa “AI” ya da başka bir yazı eklenmez.
- **Lâlâ figürü:** Sitede başlık yazısının hemen sağında hareketli bir Lâlâ çizimi bulunur. Bu bir logo değil, yayının maskotudur.
  - Dosyalar: `img/lala-cizgi.webp` (hareketli, 230×320) ve `img/lala-cizgi-sabit.png` (hareketsiz).
  - Hareketi azaltmayı seçmiş okurlara hareketsiz dosya gösterilir (`prefers-reduced-motion`).
  - HTML’de `p.wordmark` içinde `<picture class="wm-fig">` olarak durur. CSS’te `.wordmark .wm-fig` başlığın sağına yaslanır ve yüksekliği başlıkla aynıdır.
  - Barış’ın gözlemi (27 Kasım 2026): figür bir ara görünmez olmuştu. Bu kontrol edilecek (bkz. 11).

### 3.2 Renkler

| Ad | Kod | Kullanım |
|---|---|---|
| Gece laciverti | `#0E1C38` | başlık bandı, bölüm bantları, rozet dolgusu, metin vurgusu |
| Mavi | `#1E5AA8` | üst etiket, alt başlık, ikon vurgusu |
| Koyu mavi (bağlantı) | `#1A4F94` | bağlantılar |
| Açık mavi | `#DCE8F6` | “Neden önemli?”, görsel paneli zemini |
| Çok açık mavi | `#F1F6FC` | kutular, YEVMİYE Nostaljik zemini |
| Safran | `#F2A900` | vurgu (yalnızca vurgu olarak) |
| Koyu safran | `#9C6B00` (PDF), `#8A5E00` (site) | safran üstü metin |
| Açık safran zemin | `#FFF5DC` | Doğrulama notu, Erişim notları, Yevmiye zemini |
| Kırmızı | `#E30A17` | yalnızca başlıktaki YEVMİYE’nin İ harfi |
| Metin | `#1C2430` | gövde |
| İkincil metin | `#5B6675` (PDF), `#4E5A68` (site) | açıklamalar |
| Çizgi | `#D5DDE6` | ayırıcılar |

### 3.3 Yazı tipleri

- Gövde ve başlıklar: **Lora** (PDF: gövde 9,2 pt, satır aralığı 1,4; haber başlığı 13 pt; manşet 23 pt; spot italik 11 pt).
- Etiket, rozet, tablo, künye ve arayüz: **Inter**.
- Site, yazı tiplerini Google Fonts’tan yükler (Lora 400/600/700 ve italik 400; Inter 400–800).

### 3.4 PDF sayfa düzeni (haftalık sayı)

- **Sayfa:** A4. Kenar boşlukları üstte 19 mm, yanlarda 15 mm, altta 16,5 mm.
- **Sayfa üst bilgisi:** 2. sayfadan itibaren solda “Rehber Gündemi Yevmiye” (Lora kalın), sağda tarih; altında tam genişlikte ince gri çizgi.
- **Sayfa alt bilgisi:** Üstte tam genişlikte ince gri çizgi. Solda “Rehber Gündemi Yevmiye · Türkiye’de ve dünyada rehberlikte gelişmeler”, sağda sayfa numarası.
- **Düzen:** Manşetin üst etiketi, başlığı, spotu ve rozetleri tam genişliktedir. Gazetenin geri kalanı, sütun aralığı 7 mm olan tek bir iki sütunlu akış hâlinde ilerler. Bölüm bantları, kutular ve tablolar sütun genişliğindedir. Metin iki yana yaslanır ve Türkçe hecelenir; kutu içi metinler sola yaslanır.
- **Bölüm bandı:** Gece laciverti zemin, solda safran şerit, beyaz büyük harfli bölüm adı, sağda açık mavi alt başlık.
- **Kutular:** Sunuş zeminsiz. “Bu sayıda” ve Karşılaştırma çok açık mavi zeminli; “Bu sayıda” kutusunun üstünde lacivert, Karşılaştırma kutusunun üstünde safran çizgi. İzleme listesi çok açık mavi zemin ve “›” işaretleri. Erişim notları açık safran zemin. Künye lacivert çerçeve, üstte safran çizgi.
- **Tablolar:** Başlık satırı lacivert zemin üzerine beyaz Inter. Satırlar sırayla açık mavi zeminli. Uzun tablolar sütun içinde bölünebilecek şekilde satır satır kurulur ve satır ortasından bölünmez.

---

## 4. PDF ÜRETİMİ, NÜSHALAR VE TESLİM

### 4.1 Üretim ve kontrol

- **Yöntem:** HTML/CSS ile dizip PDF’e çevir (WeasyPrint).
- **Teknik notlar (13 Kasım deneyimi):**
  - Üst ve alt bilgi `@page` kenar kutularıyla kurulur; çizginin sayfa boyunca uzanması için sol ve sağ kutulara `width: 50%` verilir.
  - Sütunlar arasında bölünen tablolar WeasyPrint’te üst üste biner; tablolar `div` satırlarıyla (flex, `box-sizing: border-box`, sabit genişlik) kurulur.
  - Ayırıcı (• • •) sütun başında yalnız kalmasın diye `.sep { break-before: avoid }`.
  - Türkçe heceleme için yumuşak tire (`&shy;`) ekleyen bir işlev kullanılır.
  - Görseller satır içi SVG’dir.
  - Kaynak numaraları tek bir sözlükten otomatik verilir; satır içi kaynaklar, KAYNAK satırları ve kaynak listesi tıklanabilir olur.
- **PDF’ten önce metin kontrolü:**
  - Her rakam, tarih ve ad kaynağıyla karşılaştırılır.
  - “Birebir korunacak cümleler” harfi harfine kontrol edilir.
  - Tekrar eden bilgi aranır.
  - Yasak ifade taraması: “TÜREB”, “Dünya Rehberlik Gündemi”, sayı numarası, “Araştırma tarihi”; okuyucu nüshasında ayrıca “değerlendirme nüshası”.
- **PDF’ten sonra:**
  - Her sayfa görüntü olarak tek tek incelenir: taşma, üst üste binme, sütun sonunda yalnız kalan başlık ya da ayırıcı, görselinden kopan haber, tablo hizası.
  - Başlıkta YEVMİYE şeridinin üst satırla aynı genişlikte olduğu ve İ harfinin kırmızı çıktığı kontrol edilir.
  - Bağlantı sayısı ve benzersiz URL sayısı kontrol edilir.

### 4.2 Nüsha türleri

**Değerlendirme nüshası:** Başlık bandının altında küçük bir “DEĞERLENDİRME NÜSHASI · yayımlanmamıştır” etiketi bulunur. Sona bir **“Yayın ekibine notlar”** kutusu eklenir: kaynak envanterinin durumu, taranan ve taranamayan e-posta uyarıları, onay bekleyen bilgiler, açık kalan doğrulamalar.

**Okuyucu nüshası:** Barış onay verdikten sonra hazırlanır. Değerlendirme etiketi ve “Yayın ekibine notlar” kutusu çıkarılır. Okur için gerekli erişim ve doğrulama notları kalır.

### 4.3 Teslim

- **Dosya adı:** `Rehber_Gundemi_Yevmiye_GG_Ay_YYYY.pdf`. Değerlendirme nüshasında adın sonuna `_degerlendirme` eklenir.
- **Teslim mesajı** birkaç satırdır: sayfa sayısı; manşet ve haber başlıkları; açık kalan doğrulamalar; Barış’ın onayını gerektiren noktalar (e-posta bilgileri, birebir cümleler, hassas ifadeler).

---

## 5. WEB SİTESİ

### 5.1 Siteler

- **Yayındaki site (yeni hesap):** “YEVMIYE” · https://claude.ai/artifact/KHk1NvjNZuk6rknFBzpJnR · bağlantıya sahip herkes görebilir. Barış’ın kenar çubuğunda sabitlenmiştir.
- **Eski taslak:** “YEVMİYE taslak · 17–20 Kasım Yevmiyeleri ve 20 Kasım Gündem” · https://claude.ai/artifact/H87VJwch7rsx6HFhyCDbWU. Son güncellenme 20 Kasım 2026; şu anda hiçbir görev buraya yazmıyor.
- **Eski hesabın siteleri** (`SBeQWRDWsf8zFgFM9J3fdw` yayındaki, `X5SvaZwTQNDW4x8ZuPTuSR` taslak) artık erişilebilir değil. Bunlara yazılmaz ve bağlantı verilmez.
- Site çok dosyalı bir claude.ai artifact’idir. Artifact aracıyla güncellenir: önce `action: "read"` (yalnız `url`), sonra `action: "publish"` + aynı `url` + yalnızca değişen dosyaları içeren `files` haritası. Çakışma olursa sayfa yeniden okunur, `liste.json` en güncel sürümün üzerine kurulur ve tekrar yayımlanır. Paylaşım ayarı değiştirilmez.
- `liste.json` dosyalarında `"taslak": true` olursa sayfanın üstünde “Taslak · onay bekliyor, yayımlanmadı” bandı çıkar. Yayındaki sitede bu değer `false` kalır.

### 5.2 Dosya yapısı

| Dosya | İçerik | Kim değiştirir |
|---|---|---|
| `index.html`, `css/site.css`, `js/site.js` | Kabuk | Yalnızca Barış’ın açıkça istediği tasarım değişikliklerinde |
| `js/dil.js` | Dil penceresi: tarayıcı dili Türkçe olmayan okura siteyi kendi dilinde okumak isteyip istemediğini sorar; çeviriyi tarayıcının cihaz üzerindeki çevirmeni yapar, özgün metin değişmez, “Türkçe” düğmesi geri alır (30 dil) | Kabuk gibi |
| `img/lala-cizgi.webp`, `img/lala-cizgi-sabit.png` | Başlıktaki Lâlâ figürü (bkz. 3.1) | Kabuk gibi |
| `img/feg-porto/…` | 20 Kasım Gündem’inde kullanılan FEG Porto fotoğrafları | Dokunulmaz |
| `sayilar/liste.json` | `{"taslak": bool, "sayilar": [{"tarih": "YYYY-AA-GG", "baslik": "20 Kasım 2026, Cuma", "manset": "…", "dosya": "sayilar/YYYY-AA-GG.html"}, …]}` — en yeni başta | Cuma görevi |
| `sayilar/YYYY-AA-GG.html` | Bir sayının HTML parçası (tarih = cuma); `<script>` içermez | Cuma görevi |
| `yevmiye/liste.json` | `{"taslak": bool, "gunler": [{"tarih": "YYYY-AA-GG", "baslik": "14 Kasım 2026, Cumartesi", "dosya": "yevmiye/YYYY-AA-GG.html"}, …]}` — en yeni başta | Akşam görevi |
| `yevmiye/YYYY-AA-GG.html` | Bir günün Yevmiye parçası | Akşam görevi |
| `haftalik/liste.json` | `{"taslak": bool, "haftalar": [{"tarih": "YYYY-AA-GG", "baslik": "17–23 Kasım 2026", "konu": "dosya konusu", "dosya": "haftalik/YYYY-AA-GG.html"}, …]}` — en yeni başta; tarih = salı | Salı görevi |
| `haftalik/YYYY-AA-GG.html` | Bir haftanın YEVMİYE Nostaljik parçası | Salı görevi |
| `arsiv/eski.json` | Eski Rehber Gündemi (2010–2023) envanteri; dokunulmaz | — |

`arsiv/eski.json` biçimi: `{"kaynak": "rehbergundemi.com başlık envanteri, 7 Kasım 2026; bağlantılar Internet Archive (Wayback Machine) kayıtları", "yazilar": [{"t": "YYYY-AA-GG", "b": "başlık", "u": "https://web.archive.org/…", "k": "ozet | baslik | rss …"}, …], "sayfalar": [{"b": "…", "u": "…"}]}`. 13 Kasım 2026’da 748 yazı ve 2 sayfa içeriyordu; projedeki “Rehber Gündemi arşiv haberleri” yazışmasında hazırlandı.

### 5.3 Kabuğun yapısı ve görünümler

Ön sayfa yukarıdan aşağıya:
1. Başlık bandı (bkz. 3.1) ve tarih şeridi.
2. Taslak bandı (herhangi bir `liste.json` dosyasında `"taslak": true` varsa).
3. Yapışkan bölüm menüsü: Yevmiye · Nostaljik (YEVMİYE Nostaljik yoksa gizli) · Manşet · Türkiye · Dünya · Küresel · Dijital ve yeşil · Takvim · Analiz · Kaynaklar · Arşiv.
4. **Yevmiye** sürmanşeti (`section#yevmiye`): kısa görünümde takvim yaprağı, giriş, gökyüzü ve saha maddelerinin tek cümlelik özetleri; “Yevmiye’nin tamamını oku · 4–5 dk” düğmesi; altında son beş günün kısa yolları (“Önceki günler”, ör. “13 Kas Cum”), “Yevmiye arşivi →” bağlantısı ve eski bir gün açıkken “← En yeni Yevmiye”.
5. **YEVMİYE Nostaljik** kutusu (`section#haftalik`): kısa görünümde lacivert yaprak (hafta aralığı), giriş ve kabuğun kendisinin kurduğu özet (her bölümün başlığı ve maddelerinin `h5` başlıkları; tıklanınca tam metin açılır ve maddeye gidilir); “YEVMİYE Nostaljik’in tamamını oku · 12–15 dk” düğmesi; “Önceki haftalar” kısa yolları (son üç), “Nostaljik arşivi →” ve eski hafta açıkken “← En yeni hafta”.
6. **YEVMİYE Gündem** (`main#issue`): sayı parçası; manşetin hemen altına kabuk tarafından “Arşiv · Rehber Gündemi 2010’dan bu yana” şeridi eklenir (yıl düğmeleri `#arsiv-YYYY` ve “Arşive git →”; yıllar ve yazı sayısı `arsiv/eski.json`’dan okunur).
7. Sayılar arası gezinme (“← Önceki sayı”, “Sonraki sayı →”, “Bütün sayılar →”).
8. Arşiv görünümü (`section#archive`): YEVMİYE Gündem sayıları listesi; Yevmiye listesi (`#yv-arsiv`); YEVMİYE Nostaljik listesi (`#hf-arsiv`, dosya konusuyla); Eski Rehber Gündemi (yıllara göre açılır kapanır listeler, arama kutusu, “Bütün yılları aç/kapat”, arşiv notu; başlıklar Wayback Machine kayıtlarına gider).
9. Alt bilgi (27 Kasım 2026’daki metin): “**Rehber Gündemi Yevmiye** · Yapay Zeka botu Lâlâ yayınıdır · Yevmiye her akşam, YEVMİYE Nostaljik her salı sabahı, YEVMİYE Gündem her cuma sabahı güncellenir.” Ardından bağımsızlık notu (“Bağımsız, derleme bir yayındır; hiçbir kurum, kuruluş, meslek odası ya da dernekle organik bağı yoktur. İçeriğin sorumluluğu yayımlayana aittir.”) ve kaynak notu gelir.
10. Dil penceresi (`js/dil.js`): yalnızca tarayıcı dili Türkçe olmayan okura görünür.

Kutu düğmelerinin metinleri: “Yevmiye’nin tamamını oku · 4–5 dk”, “YEVMİYE Nostaljik’in tamamını oku · 12–15 dk”; arşiv bağlantıları “Yevmiye arşivi →” ve “Nostaljik arşivi →”.

Adresler: boş adres en yeni sayıyı, en yeni Yevmiye’yi ve en yeni YEVMİYE Nostaljik’i açar. `#sayi-YYYY-AA-GG` belirli bir sayıyı, `#yevmiye-YYYY-AA-GG` belirli bir günü, `#haftalik-YYYY-AA-GG` belirli bir haftayı, `#arsiv` arşivi, `#arsiv-yevmiye` ve `#arsiv-haftalik` arşivdeki listeleri, `#arsiv-YYYY` eski arşivde o yılı açar. Sekme başlığı “Rehber Gündemi Yevmiye · …” biçimindedir.

Kabuk tek renkli (açık) temadır, telefon ve masaüstüne uyar, tarayıcı depolaması kullanmaz. Bir liste dosyası yoksa ya da boşsa ilgili bölüm gizlenir.

### 5.4 Sayı parçasının iskeleti

Önceki sayının dosyasını (Artifact aracıyla `read` + `paths`) şablon olarak kullan; sınıf adlarını ve bölüm kimliklerini değiştirme.

1. **Manşet:** `<article class="lead-story" id="s-manset">`
   - İçinde sırayla: üst etiket `<div class="kicker">… <span class="dt">Tarih türü: tarih</span></div>`, `<h1>` başlık, `<p class="deck">` spot, `<div class="badges">…</div>`.
   - Ardından:
     ```
     <div class="lead-grid">
       <div class="lead-main">metin, <h4> alt başlıklar, <ul class="l"> maddeler</div>
       <aside class="lead-aside">görsel, Neden önemli?, Doğrulama notu, KAYNAK satırı</aside>
     </div>
     ```
2. **Giriş:** `<section class="sec sec-intro" id="s-sunus">` — `<div class="sunus">` (kicker “Sunuş”, `<h3>`, paragraf) ve `<div class="box toc">` (“Bu sayıda” tablosu).
3. **Haber bölümleri:** `<section class="sec" id="s-turkiye">`, `s-dunya`, `s-kuresel`, `s-dijital`. Her biri `<h2 class="band"><span class="t">Türkiye</span><span class="s">Rehberlik ve turizm</span></h2>` ile başlar; ardından `<div class="cards">` gelir. Her haber bir `<article class="card">`. Karşılaştırma kutuları da bu ızgaranın içindedir: `<div class="box cmp">`.
4. **Takvim:** `<section class="sec sec-takvim" id="s-takvim">` — bant, ardından `<div class="tbl cal">`. Başlık satırı: `<div class="hd"><div class="c d">Tarih</div><div class="c w">Gelişme</div><div class="c s">Durum</div></div>`. Her etkinlik: `<div class="row"><div class="c d"><p>…</p></div><div class="c w"><p>… <a class="ref" href="URL">[n]</a></p></div><div class="c s"><p>…</p></div></div>`. Sonda `<p class="calnote">` notu.
5. **Analiz:** `<section class="sec sec-analiz" id="s-analiz">` — bant; `<div class="an">`: kicker, `<h3>` ve maddeler (`<p><span class="no">1</span> <b>Hüküm cümlesi.</b> …</p>`), bölüm `<p class="closing">` ile kapanır; ardından `<div class="box watch">` (İzleme listesi, `<ul><li>`).
6. **Kaynaklar:** `<section class="sec" id="s-kaynaklar">` — bant; `<div class="srclist">`: grup başlıkları `<h3 class="srcgroup">Türkiye</h3>`, ardından `<ol start="n"><li value="n"><span class="o">Kurum</span> — Başlık (tarih) — <a href="URL">alanadi</a></li></ol>`; ardından `<div class="box access">` (Erişim ve doğrulama notları).
7. **Kim kimdir ve künye:** `<section class="sec" id="s-kim">` — `<div class="kim-wrap">` (kicker, `<h3>`, `<p class="intro">`), `<div class="tbl kim">` (sütunlar `c k` / `c t` / `c y`), `<div class="kunye">`.

### 5.5 Haber kartı

```
<article class="card">
  <div class="kicker">ÜLKE · KURUM · <span class="dt">Duyuru: 4 Kasım 2026</span></div>
  <h3>Başlık</h3>
  <div class="badges"><span class="b b-on">…</span></div>
  <figure class="vis">…</figure>
  <p>… (<a class="src" href="URL">Kaynak adı<span class="n">[n]</span></a>) …</p>
  <div class="why"><b class="lbl">Neden önemli?</b><p>…</p></div>
  <div class="verify"><b class="lbl">Doğrulama notu</b><p>…</p></div>
  <div class="kaynak"><b>Kaynak</b> <a href="URL">alanadi&nbsp;[n]</a> · …</div>
</article>
```

`verify` kutusu yalnızca gerektiğinde eklenir. Rozet sınıfları 2.6’dadır. Kaynak numaraları sayı içinde 1’den başlar: önce Türkiye grubu, sonra Dünya ve Avrupa, en son Küresel/dijital grubu numaralanır.

### 5.6 Haber görseli (her haberde bir tane)

```
<figure class="vis"><svg viewBox="0 0 340 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BÜYÜK RAKAM — açıklama">
  <rect width="340" height="92" rx="6" fill="#DCE8F6"/>
  <rect x="0" y="0" width="5" height="92" fill="#F2A900"/>
  <circle cx="50" cy="46" r="35" fill="#fff" opacity="0.55"/>
  … ikon …
  <text x="102" y="45" font-family="Lora" font-weight="700" font-size="27" fill="#0E1C38">BÜYÜK RAKAM</text>
  <text x="102" y="64" font-family="Inter" font-size="10.2" fill="#3E4A59">açıklama satırı 1</text>
  <text x="102" y="78" font-family="Inter" font-size="10.2" fill="#3E4A59">açıklama satırı 2</text>
</svg></figure>
```

İkon beyaz dairenin içine (yaklaşık x 15–85, y 11–81) basit çizgilerle çizilir: kontur `#0E1C38`, kalınlık 2,6; vurgu renkleri `#1E5AA8` ve `#F2A900`.

### 5.7 YEVMİYE Gündem iş akışı (her cuma)

1. Bu belgeyi oku. Sitenin `sayilar/liste.json` dosyasını ve en yeni sayı dosyasını oku. En yeni sayıyı biçim şablonu olarak kullan.
2. Önceki sayının İzleme listesini kontrol et.
3. Araştırmayı bölüm 2’ye göre yap: kurumların web sayfalarını ve resmî sosyal medya hesaplarını tara, açılamayanları not et; e-posta uyarılarını ayrı tut.
4. Yeni sayı parçasını yaz. Künyenin ilk satırı “Rehber Gündemi · [tarih]” olur (bkz. 2.5/15).
5. **Kontroller:** “TÜREB” yok, “TUREB” kullanılmış; tekrar eden bilgi yok; her haberde görsel var; bütün bağlantılar `https` ile başlıyor; HTML etiketleri dengeli. Bölüm kimliklerinin hepsi bulunmalı: `s-manset`, `s-sunus`, `s-turkiye`, `s-dunya`, `s-kuresel`, `s-dijital`, `s-takvim`, `s-analiz`, `s-kaynaklar`, `s-kim`.
6. **Yayımla (şu anki uygulama):** Yeni `sayilar/YYYY-AA-GG.html` ile güncel `sayilar/liste.json`’u (yeni sayı başta, eski kayıtlar korunur, `"taslak": false`) doğrudan siteye gönder.
7. **Barış’a bildir:** manşet, bölüm başlıkları, açık kalan doğrulamalar ve onay isteyen e-posta bilgileri (hangi uyarı, hangi bilgi).
8. Barış taslak usulüne dönmeye karar verirse (bkz. 11), 6. adımın yerine şu adımlar uygulanır: önce taslağa yayımla, Barış’a bildir, dur; “yayımla” gelince yayındaki siteye gönder.

### 5.8 Kabuk değişiklikleri

`index.html`, `css/site.css`, `js/site.js`, `js/dil.js` ve `img/` yalnızca Barış’ın açıkça istediği tasarım değişikliklerinde güncellenir. Değişiklik masaüstü ve telefon ekran görüntüleriyle gösterilir ve Barış’ın “yayımla” onayıyla siteye gönderilir. Gönderirken yalnızca değişen kabuk dosyaları `files` haritasına konur. İçerik dosyaları (`sayilar/`, `yevmiye/`, `haftalik/`, `arsiv/`) gönderilmez, böylece korunur. Görünür her değişiklik onay ister.

---

## 6. YEVMİYE (HER AKŞAM)

### 6.1 Barış’ın Yevmiye Promptu (13 Kasım 2026; metin değiştirilmez)

Yapay zekâ robotu Lâlâ tarafından Cemiyet rehberleri için günlük hazırlanır.

Çağdaş bir gazete görünümünde PDF formatında olsun.

Başlıklar şu soruların yanıtı olsun: Bir turist rehberi olarak yarın ne bilmeliyim, sahada neyle karşılaşacağım ve ziyaretçilerimle hangi güncel konuları konuşabilirim?

Günlük ana prompt · Her akşam 19.00 · Ertesi gün için · 4–5 dakika

**YEVMİYE — Günlük İstanbul Rehber Bülteni (Ana Prompt)**

YEVMİYE adıyla günlük, Türkçe bir bilgi bülteni hazırla. Bültende “Cemiyet rehberleri için yapay zeka botumuz Lâlâ tarafından hazırlanmıştır” ibaresi yer alsın.

Tarih belirtilmemişse İstanbul saatine göre ertesi günü esas al. Başa yalnızca bültenin tarihini ve haftanın gününü yaz.

Bülten her akşam 19.00’da hazırlanır ve yaklaşık 4–5 dakikada okunabilecek uzunlukta olur.

*Temel amaç*

Şu sorulara cevap ver:

“Bir turist rehberi olarak yarın ne bilmeliyim? Sahada neyle karşılaşacağım?”

Bülten, rehberin ertesi sabah çantasına koyacağı bir bilgi notu niteliğinde olsun.

Saatli Maarif Takvimi’nin merak uyandıran, insana ve şehre yakın havasını taşısın. Girişte günün İstanbul’una ilişkin kısa, özgün ve merak uyandıran bir paragraf kullan.

*Takvim ve gökyüzü*

Şu bilgileri kısa ve düzenli biçimde ver:

- Mîladî, Rûmî, Hicrî ve İbrânî tarihler.
- İstanbul’da gün doğumu ve gün batımı.
- Gündüz süresi.
- Gün doğumu anında Güneş’in tropikal zodyaktaki burcu, derecesi ve dakikası.
- Ay’ın evresi.
- İstanbul saatiyle 09.00’da Ay’ın aydınlanma yüzdesi.

Astronomik hesapları güvenilir kaynaklarla doğrula.

Rutin teknik açıklamaları yazma: hesap yöntemleri, takvim reformları, Swiss Ephemeris ve astrolojik yorum gibi.

Yalnızca gerçek bir belirsizlik ya da önemli bir takvim uyuşmazlığı varsa kısa bir açıklama ekle.

*Denizden, havadan — bugünün sahası*

Ertesi günün fiilî tur programını etkileyebilecek gelişmeleri araştır.

- **Hava ve deniz:** İstanbul’un hava durumu, sıcaklık, yağış, rüzgârın yönü ve şiddeti, Marmara Denizi ve İstanbul Boğazı’nın koşulları, resmî meteorolojik uyarılar.
- **Deniz ulaşımı:** Şehir Hatları, İDO ve ilgili özel motor işletmelerinin duyuruları; iptaller, iskele kapanışları, hat ve saat değişiklikleri.
- **Kruvaziyerler:** İstanbul limanlarına planlanan gemilerin adları, varış ve hareket saatleri. Planlı uğrağı fiilî yanaşmadan, gemi varışını yolcu çıkışından ayır.
- **Kara ulaşımı:** Yol kapatmaları, toplu taşıma değişiklikleri, büyük organizasyonlar ve tur güzergâhlarını etkileyen çalışmalar.
- **Müzeler ve ören yerleri:** Olağan saatlerden farklı açılış ve kapanışlar, restorasyonlar, geçici erişim kısıtlamaları ve özel ziyaret koşulları.
- **Törenler:** Resmî günler, anmalar, diplomatik toplantılar ve şehir hayatını etkileyen organizasyonlar.

Her önemli gelişmede yeri, tarihi, saati ve tur programına olası etkisini belirt.

Tahmini gerçekleşmiş olayla, tarifeyi canlı sefer durumuyla karıştırma.

Değişiklik yoksa uzun kurum listeleri sıralama.

Mesleki hatırlatmalarda yalnızca o gün ya da çok yakında kapanan önemli kayıt ve başvuruları belirt.

Yayımlamadan önce yeni etkinlik, iptal, yer ve saat değişikliklerini kontrol et.

Her bir haber için mantıksal çerçevede bir görsel tasarla.

### 6.2 Uygulama notları

*İlk yazım 13 Kasım 2026; aynı akşam 14 Kasım sayısındaki iki taslak birleştirilirken güncellendi. Yukarıdaki metin Barış’ındır ve değiştirilmez. Bu notlar yalnızca o metnin nasıl uygulandığını anlatır.*

**Tek içerik, iki çıktı**
- Her gün için bir araştırma yapılır ve tek bir metin yazılır. Ana metin, sitedeki parçadır (`yevmiye/YYYY-AA-GG.html`). PDF, aynı metinden ve aynı bilgilerle üretilir.
- Aynı gün için ayrı ayrı yazılmış iki sürüm tutulmaz. 14 Kasım sayısında site taslağı (20.30) ile PDF (19.00) ayrı yazıldığı için saatler ve kaynaklar birbirini tutmadı; bu kural o yüzden kondu.
- PDF, sayfa sınırı yüzünden metni kısaltabilir ama sitede olmayan bir bilgiyi eklemez. Sitede düzeltilen her bilgi PDF’te de düzeltilir.
- İki çıktıda da “Bilgiler … itibarıyla” saati aynıdır.
- PDF’in teknik ölçüleri: A4, 3 sayfa; HTML/CSS’ten headless Chrome ile basılır; Fraunces, Source Serif 4 ve IBM Plex Sans Condensed yazı tipleri gömülür; yedek yazı tipi (Liberation) gömülmüş olmamalı (`→` ve `−` gibi işaretler yedek yazı tipini çağırdığı için kullanılmaz); her sayfada metnin alt bilgiye taşmadığı ölçülerek kontrol edilir.
- PDF’te başlık varsa yayın adı sitedeki gibi yazılır: lacivert zemin üzerinde üstte “Rehber” (beyaz) “Gündemi” (safran), altında safran şerit içinde lacivert harflerle “YEVMİYE”, İ harfi kırmızı.

**Üç soru, üç bölüm**
1. **Yarın ne bilmeliyim?** Giriş paragrafı, takvim ve gökyüzü, mesleki hatırlatma.
2. **Sahada neyle karşılaşacağım?** “Denizden, havadan — bugünün sahası”: hava ve deniz, deniz ulaşımı, kruvaziyer, kara ulaşımı, müzeler ve ören yerleri, törenler ve organizasyonlar, mesleki hatırlatma. Her maddede bir “Tura etkisi” satırı bulunur.
3. **Ziyaretçilerle hangi güncel konuları konuşabilirim?** “Ziyaretçilerle ne konuşalım?”: üç ya da dört madde (gündemden bir konu, şehrin dili ya da günün havası, bugün tarihte, müze gündemi gibi). Her maddede bir “Sohbet ipucu” satırı bulunur.

**Takvim ve gökyüzü**
- Değerler her gün o günün tarihi için hesaplanır. Aylık ortalama tablolar (ör. weatherspark) kaynak olarak kullanılmaz.
- Ana hesap Skyfield ve JPL DE421 efemeridiyle, İstanbul (Sultanahmet; 41,008 K, 28,978 D) için yapılır; sonuç PyEphem ile karşılaştırılır. Fark bir dakikayı geçerse nedeni bulunmadan yayımlanmaz.
- Gün doğumu ve batımı Güneş’in üst kenarına göre, 34′ standart kırılmayla hesaplanır. PyEphem’de `pressure=0` ve `horizon='-0:34'` birlikte kullanılır; basınç sıfır yapılmadan ufuk −0:34 verilirse kırılma iki kez uygulanır ve doğum saati yaklaşık beş dakika erken çıkar (14 Kasım için önce 07.45 bulunmasının nedeni buydu; doğrusu 07.50).
- Gün doğumu anında Güneş’in burcu, tarihin ekinoksuna göre görünür ekliptik boylamdan bulunur. Derece ve dakika en yakın dakikaya yuvarlanır (21° 49,6′ → 21° 50′).
- Ay için 09.00’daki aydınlanma yüzdesi tam sayıya yuvarlanır. Bir sonraki ana evre tarihi ve saatiyle yazılır.
- Hicrî tarihte Diyanet tablosu (namazvakitleri.diyanet.gov.tr) esastır; aritmetik dönüştürücüler bir iki gün sapabilir (14 Kasım 2026 = 5 Cemâziyelâhir 1448; dönüştürücü 3 veriyordu). Ümmü’l-Kurâ takvimi farklı bir gün veriyorsa bu, notta belirtilir.
- Rûmî tarih Jülyen tarihten çevrilir; Rûmî yıl, Jülyen yıldan 584 çıkarılarak bulunur. İbrânî tarih bir dönüştürücüyle hesaplanır.
- Halk takvimi (Hızır ve Kasım günleri) girişte kullanılabilir. Kasım günleri 8 Kasım’da, Hızır günleri 6 Mayıs’ta başlar.

**Saha bölümünün kuralları**
- **Kaynak önceliği:** Önce resmî kurumlar: Valilik, MGM, AKOM, Şehir Hatları, İDO, BUDO, İBB, Kültür ve Turizm Bakanlığı, Millî Saraylar, müzelerin kendi siteleri. Ajans ve gazete haberleri bunlardan sonra gelir. Bir haber sitesi kullanıldığında açıklamanın hangi kuruma ait olduğu da yazılır (ör. “Valilik/Sözcü”).
- **Ayrı tutulacak bilgiler:** tahmin ve uyarı (MGM, AKOM) ile gerçekleşmiş olay; tarife ile canlı sefer durumu; kruvaziyer gemisinin planlı uğrağı ile fiilî yanaşması; geminin yanaşması ile yolcuların karaya çıkışı.
- **Çelişen kaynaklar:** Kurumlar farklı saat veriyorsa ikisi de kurum adı ve saatiyle yazılır (ör. Valilik’e göre fırtına uyarısı 05.00’e kadar sürer; AKOM’a göre rüzgâr öğle saatlerinde döner).
- **Etkinlikler:** Yalnızca düzenleyicinin ya da mekânın resmî duyurusuna dayanarak yazılır. İptal kontrolü yapılmamış etkinlik bültene girmez. Durumu doğrulanamayan etkinlik çıkarılır (14 Kasım sayısından bir konser bu nedenle çıkarıldı).
- **Mesleki hatırlatma:** Yalnızca o gün ya da çok yakında kapanan başvuru, kayıt ve ödemeler yazılır.

**Son kontrol**
- 19.00’da taslak girdikten sonra ve “yayımla”dan hemen önce şu duyurular yeniden taranır: Valilik; MGM ve AKOM; Şehir Hatları, İDO ve BUDO; İBB’nin ulaşım ve yol duyuruları.
- Yeni bilgi eskisinin yerine yazılır. Geçersiz kalan bilgi metinden çıkarılır; eski ve yeni saat yan yana bırakılmaz.
- Değişiklik olursa site parçası ile PDF birlikte güncellenir ve “itibarıyla” saati ikisinde de değiştirilir.

**Uzunluk:** kaynak adları hariç yaklaşık 1.000–1.100 kelime; 4–5 dakikalık okumaya denk gelir.

### 6.3 Site parçası: `yevmiye/YYYY-AA-GG.html`

HTML parçasıdır; `<script>` içermez. Şablon olarak en yeni gün kullanılır (ilk örnek `yevmiye/2026-11-14.html`, 27 Kasım’daki en yeni `yevmiye/2026-11-27.html`).

- `<article class="yv" data-tarih="YYYY-AA-GG">`
  - `<div class="yv-leaf">` takvim yaprağı: `yv-label`, `yv-day`, `yv-when` (`yv-month` ile `yv-wd`), `<dl class="yv-cal">` (Rûmî, Hicrî, İbrânî).
  - `<div class="yv-body">` sırayla:
    - `yv-credit`: Lâlâ ibaresi (“Günlük İstanbul rehber bülteni · Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır.”).
    - `yv-intro`: Saatli Maarif havasında giriş paragrafı.
    - `<ul class="yv-sky">`: gün doğumu, gün batımı, gündüz süresi, Güneş burcu, Ay. Burada aylık ortalama tablolara kaynak verilmez.
    - `<h3 class="yv-h">Denizden, havadan — bugünün sahası</h3>`
    - `<div class="yv-items">`: her madde bir `<section class="yv-item">`: 40×40 SVG ikon (`yv-ic`), `h4` başlık, `p.yv-kisa` tek cümlelik özet, `div.yv-detay` (metin, satır içi kaynaklar ve `p.yv-etki` “Tura etkisi” satırı).
    - **Ziyaretçilerle ne konuşalım?** Bölümün tamamı bir `div.yv-detay` içine yazılır; yalnızca “tamamını oku” açıldığında görünür:
      ```
      <div class="yv-detay">
        <h3 class="yv-h">Ziyaretçilerle ne konuşalım?</h3>
        <div class="yv-items">
          <section class="yv-item"> svg.yv-ic + <div><h4>…</h4><p>… kaynak …</p><p class="yv-etki"><b>Sohbet ipucu:</b> …</p></div></section>
          … (3–4 madde)
        </div>
      </div>
      ```
      Bu bölümün maddelerinde `p.yv-kisa` kullanılmaz.
    - `<p class="yv-not">`: hesap notu, Hicrî takvim notu, planlı uğrak uyarısı ve “Bilgiler … itibarıyla” saati.
- Kaynaklar `<a class="src" href="URL">Kurum/Yayın<span class="n">[n]</span></a>` biçimindedir. Yaprakta yalnızca Hicrî kaynak için `<a class="ref">[1]</a>` kullanılır. Numaralar parça içinde sırayla ilerler; aynı kaynak tekrar kullanıldığında aynı numarayı alır.
- Sitede başlangıçta yalnızca saha maddelerinin özetleri görünür; yalnızca en yeni gün sürmanşettedir, önceki günler arşivdedir.

### 6.4 Günlük iş akışı (her akşam)

1. **Hazırlık:** Ertesi gün için araştırma yapılır ve parça yazılır. PDF istenmişse aynı metinden basılır.
2. **Kontrol:** “TÜREB” geçmediği, bağlantıların `https` ile başladığı, etiketlerin dengeli olduğu denetlenir. Önceki sayıda düzeltilmesi gereken bir bilgi varsa yeni sayıda açıkça düzeltilir. PDF varsa sayfa sayısı, alt bilgiye taşma ve yedek yazı tipi kontrol edilir.
3. **Yayım (şu anki uygulama):** Yeni `yevmiye/YYYY-AA-GG.html` ile güncel `yevmiye/liste.json`’u (yeni gün başta, eski kayıtlar korunur, `"taslak": false`) doğrudan siteye gönder. Tarih listede zaten varsa yeni kayıt eklenmez, dosya güncellenir.
4. **Bildirim:** Hedef tarih, ana başlıklar ve doğrulanamayan noktalar kısaca bildirilir.
5. **Taslak usulüne dönülürse** (bkz. 11): 3. adımda önce taslağa yayımlanır. Barış’a bildirilir ve mesaj “Yayımlamak için ‘yayımla’ yazman yeterli; düzeltme varsa yaz.” cümlesiyle biter. “Yayımla”dan önce Valilik, MGM, AKOM, Şehir Hatları, İDO, BUDO ve İBB duyuruları yeniden taranır. Onay gelmezse yayındaki sitede bir önceki günün Yevmiye’si kalır.

---

## 7. YEVMİYE NOSTALJİK (HER SALI)

*Bu bölümün ilk adı “Haftalık Yevmiye”ydi. Sitede bugün “YEVMİYE Nostaljik” adı kullanılıyor; yaprağın etiketi (`hf-label`) “Yevmiye Nostaljik”. Barış’ın 7.1’deki özgün metni eski adıyla korunur.*

### 7.1 Barış’ın Haftalık Yevmiye Promptu (14 Kasım 2026; metin değiştirilmez)

Haftalık YEVMİYE
Her salı sabah 07.00 · Gelecek yedi gün için · 12–15 dakika

**DÜNÜN İSTANBULU’NDA BU HAFTA**
1. Haftanın İstanbul'u: Haftanın önemli tarihî yıl dönümleri ve anlatı fırsatları
2. Mevsim ve şehir hayatı: Mevsimsel değişimler, balıkçılık, göç, kültürel gelenekler

**MEVSİMİN DİLİ VE MEVSİMİN BALIĞI**
Mevsimin Dili: Halk takvimi, hikâye ve tılsımlar, rüzgârlar, kuş göçleri, deniz ve mevsim gelenekleri.
Mevsimin Balığı: Balıkçılık tarihi, İstanbul sofrası, hatıralar ve edebiyat.

**DOSYA**
Haftanın araştırma dosyası İstanbul tarihinden kaynaklı, derinlikli bir konu.

*(Özgün metinde “tılsımla” yazıyordu; “tılsımlar” olarak düzeltildi. Barış, Lâlâ’nın Haftası’ndaki ayrıntılı bölüm kurallarının buraya eklenmemesini istedi.)*

### 7.2 Uygulama

- YEVMİYE Nostaljik, günlük Yevmiye’ye ve YEVMİYE Gündem’e **ektir**; onların yerini tutmaz.
- Kapsadığı dönem, yayımlandığı salıdan başlayan yedi gündür (salı–pazartesi). İlk sayı, Barış’ın kararıyla 10 Kasım 2026 Salı tarihli 10–16 Kasım sayısıdır; 14 Kasım’da geriye dönük derlendi ve Dosya konusu 13 Kasım 1918 (“Geldikleri gibi giderler”) oldu. Otomatik görevin ilk sayısı 17–23 Kasım’dır.
- Kaynakları otomatik numaralamak için ilk sayıda kullanılan yöntem: metinde `{anahtar|Etiket}` işaretleri, tek bir kaynak sözlüğü ve ilk geçiş sırasına göre numara veren küçük bir betik. Yayından önce numaraların ilk geçiş sırasıyla arttığı ve bütün bağlantıların `https` ile başladığı denetlenir.
- Lâlâ ibaresi bulunur: “Haftalık İstanbul tarih, mevsim ve araştırma bülteni · Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır.”
- İşlenmiş Dosya konuları (tekrar edilmez): 10 Kasım: 13 Kasım 1918, Haydarpaşa’dan Karaköy’e bir istimbot · 17 Kasım: Malaya zırhlısının Dolmabahçe önündeki iki yolculuğu · 24 Kasım: 27 Kasım 1970, Kültür Sarayı’nda Cadı Kazanı. Güncel liste her zaman `haftalik/liste.json`’daki `konu` alanındadır.
- Uzunluk: kaynak adları hariç yaklaşık 2.800–3.400 kelime (12–15 dakika).
- Girişte haftanın İstanbul’una dair kısa, özgün ve merak uyandıran bir paragraf yazılır.
- Haftanın İstanbul’u maddeleri gün sırasıyla (salıdan pazartesiye) verilir; her maddede kesin tarih, yer ve “Anlatı fırsatı” satırı bulunur. Tarih türleri (doğum, ölüm, olay, ilan, açılış) karıştırılmaz.
- “Mevsim ve şehir hayatı” insanları, çalışma hayatını ve şehri anlatır; “Mevsimin dili ve mevsimin balığı” halk bilgisini, sofrayı ve edebiyatı anlatır. Balıkçılık ve göç iki bölümde de geçebilir ama aynı bilgi tekrarlanmaz.
- Halk takvimine ait bilgiler meteorolojik tahminden ayrı tutulur.
- Önemli her bilginin yanında tıklanabilir kaynak bulunur. Doğrulanamayan bilgi açıkça belirtilir; sayfa numarası, arşiv künyesi ya da belge numarası uydurulmaz; yapay zekâ metinleri kaynak sayılmaz.
- Her maddeye konuya uygun, özgün ve küçük (40×40) bir SVG ikon çizilir. Fotoğraf ya da logo kullanılırsa 2.7’deki kurallar geçerlidir (kaynak her zaman gösterilir).
- Günlük Yevmiye’nin saha bilgileri (hava, ulaşım, kruvaziyer, müze saatleri) burada tekrarlanmaz. Önceki haftanın dosya konusu ve anlatılan yıl dönümleri tekrarlanmaz.

### 7.3 Site parçası: `haftalik/YYYY-AA-GG.html` (tarih = salı)

HTML parçasıdır; `<script>` içermez.

```
<article class="hf">
  <div class="hf-leaf"><p class="hf-label">Yevmiye Nostaljik</p><p class="hf-range">17–23</p><div class="hf-when"><p class="hf-month">Kasım 2026</p><p class="hf-wd">Salı – Pazartesi</p></div></div>
  <div class="hf-body">
    <p class="hf-credit">Haftalık İstanbul tarih, mevsim ve araştırma bülteni · Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır.</p>
    <p class="hf-intro">giriş paragrafı</p>
    <section class="hf-sec" id="hf-dun"><h3 class="hf-h">Dünün İstanbulu’nda bu hafta</h3>
      <h4 class="hf-sub">Haftanın İstanbul’u</h4><div class="hf-items"> hf-item’lar </div>
      <h4 class="hf-sub">Mevsim ve şehir hayatı</h4><div class="hf-items"> hf-item’lar </div></section>
    <section class="hf-sec" id="hf-mevsim"><h3 class="hf-h">Mevsimin dili ve mevsimin balığı</h3><div class="hf-items"> “Mevsimin dili” ve “Mevsimin balığı” hf-item’ları </div></section>
    <section class="hf-sec" id="hf-dosya"><h3 class="hf-h">Dosya</h3><div class="hf-items hf-tek"> tek hf-item: dosya başlığı h5’te, metin birden çok paragraf </div></section>
    <p class="hf-not">hesap ve kaynak notu; “Bilgiler … itibarıyla” saati</p>
  </div>
</article>
```

Her madde:
```
<section class="hf-item"><svg class="hf-ic" viewBox="0 0 40 40" aria-hidden="true">…</svg><div>
  <p class="hf-tarih">19 Kasım · Perşembe</p><h5>Başlık</h5>
  <p>Metin (<a class="src" href="URL">Kaynak<span class="n">[n]</span></a>)</p>
  <p class="hf-etki"><b>Anlatı fırsatı:</b> …</p></div></section>
```

- `hf-tarih`: Haftanın İstanbul’unda gün ve tarih; diğerlerinde “Bu hafta”, “Mevsimin dili”, “Mevsimin balığı”, “Haftanın araştırma dosyası”.
- `hf-etki` etiketi: Haftanın İstanbul’u için “Anlatı fırsatı:”, mevsim maddeleri için “Sohbet ipucu:”, şehir hayatı ve dosya için “Sahada:”.
- Kaynak numaraları parça içinde [1]’den başlar; aynı kaynak aynı numarayı alır.
- Hafta iki aya yayılıyorsa `hf-range` “29–5”, `hf-month` “Aralık 2026 – Ocak 2027” biçiminde yazılır.
- Ön sayfadaki kısa görünüm `h3` ve `h5` başlıklarından kabuk tarafından kurulur; başlıklar kısa ve bilgi verici tutulur.

### 7.4 İş akışı (her salı)

1. Siteden `haftalik/liste.json`’u ve en yeni Nostaljik sayısını oku. En yeni sayıyı biçim şablonu olarak kullan.
2. Araştırmayı yap; yayımlamadan önce tarihleri, yerleri ve kaynakları yeniden kontrol et.
3. Parçayı yaz; “TÜREB”, `https` ve etiket denetimini yap.
4. **Yayımla (şu anki uygulama):** Yeni parçayı ve güncel `haftalik/liste.json`’u (yeni hafta başta, eski kayıtlar korunur, `"taslak": false`) doğrudan siteye gönder.
5. Barış’a bildir: hafta, Dosya konusu ve doğrulanamayan noktalar.
6. Taslak usulüne dönülürse (bkz. 11): önce taslağa yayımla, Barış’a bildir (“Yayımlamak için ‘yayımla’ yazman yeterli; düzeltme varsa yaz.”), dur. Onay gelmezse yayındaki sitede önceki hafta kalır.

---

## 8. OTOMATİK GÖREVLER

**Şu anki görevler (27 Kasım 2026).** Görevler Claude masaüstü uygulamasının zamanlanmış görevleridir ve Barış’ın bilgisayarında çalışır. **Bilgisayar kapalıysa ya da uyku modundaysa görev o saatte çalışmaz.** Talimat dosyaları `C:\Users\hasan\.claude\scheduled-tasks\<kimlik>\SKILL.md` yolundadır.

| Görev | Kimlik | Çalışma (bilgisayar saati) | Dokunduğu dosyalar |
|---|---|---|---|
| Yevmiye (her akşam) | `yevmiye-gunluk` | `0 19 * * *`, her gün 19.00 (birkaç dakika kayabilir) | `yevmiye/<ertesi gün>.html`, `yevmiye/liste.json` |
| YEVMİYE Nostaljik (salı sabahı) | `yevmiye-nostaljik-haftalik` | `0 7 * * 2`, salı 07.00 | `haftalik/<salı>.html`, `haftalik/liste.json` |
| YEVMİYE Gündem (cuma sabahı) | `yevmiye-gundem-cuma` | `0 7 * * 5`, cuma 07.00 | `sayilar/<cuma>.html`, `sayilar/liste.json` |

- Üç görev de aynı siteye yazar: https://claude.ai/artifact/KHk1NvjNZuk6rknFBzpJnR. Yalnızca kendi iki dosyasına dokunur, `index.html`’i göndermez.
- Görevler şu anda bu belgeyi okumuyor; kuralların özeti kendi talimatlarında yazılı. Bu belgede bir kural değişirse üç görevin talimatı da elle güncellenir.
- **Eski hesabın bulut görevleri** (`trig_01EqA2pjARnCKqTNPs5hMfLn`, `trig_016KYVq2orUNuZ7G6Q6Bp4Yj`, `trig_019X4jQQwuCnMotrKuJAE4Bo`) erişilemeyen hesapta kaldı. O hesapta görevler bulutta çalıştığı için bilgisayarın açık durması gerekmiyordu.
- Her görevin talimatı şu sırayla kurulur: görev ve tarih → kaynak belge (bu belge) → siteler ve dokunulacak klasör → içerik özeti (ilgili bölüm) → dosya biçimi → adımlar (oku, araştır, yaz, denetle, taslağa yayımla, Barış’a bildir, dur, onayla yayına al) → yasaklar (onaysız yayın yok, paylaşım ayarına dokunma yok, başka yerde yayımlama/paylaşma/e-posta yok, onaysız e-posta bilgisi yok, kişisel bilgi dışarı yok).
- Bir görev yeniden kurulacaksa yukarıdaki saat ve bu yapı kullanılır; içerik bu belgenin ilgili bölümünden (cuma: 2 ve 5; akşam: 6; salı: 7) alınır.
- Yayının adı, tasarımı ya da iş akışı değişirse üç görevin talimatı da güncellenir.

---

## 9. KARAR GEÇMİŞİ

**13 Kasım 2026**
- İlk sayı (13 Kasım 2026, Cuma) PDF olarak hazırlandı. Başlık için üç tasarımdan **B** seçildi (lacivert bant, safran “Gündemi”). Sayı numarası yerine yalnızca tarih; “Araştırma tarihi” ibaresi kaldırıldı; başlığın solundaki logo tamamen kaldırıldı.
- Birliğin yazımı: “TÜREB değil TUREB”.
- FEG Genel Kurulu (Porto) haberi için birebir cümle: “Kongrede Türkiye’yi TKTC adına katılan Hasan Barış Partal temsil edecek”. FEG ile süren uluslararası çalışmalar (Cemiyet döneminde WFTGA ile başlatılan) habere eklendi.
- Her habere bir görsel; kurum logoları yerine özgün illüstrasyon.
- Ayrı “Dünya” dosyası metin düzeyinde, tekrarsız birleştirildi; yayın promptu yazıldı.
- İRO Kitap Kulübü “Yazarlar ile Söyleşi – 42” (Cemil Bezmen, 18 Kasım 2026, 18.00–20.00, Zoğrafyon Lisesi Mezunları Derneği, Beyoğlu) sayıya alındı; Kim kimdir’e TKTC eklendi.
- İçerik, her cuma sabahı güncellenen bir web sitesine dönüştürüldü: yayın saati 07.00, önce Barış’ın onayı (ayrı taslak sitesi).
- Ön sayfadan eski Rehber Gündemi arşivine (2010–2023) bağlantı ve manşet üstünde her akşam yenilenen Yevmiye sürmanşeti eklendi; Yevmiye de her akşam Barış’ın onayıyla yayımlanır.
- Künye satırı: “Dil: Türkçe · Günlük yayın Yevmiye, Rehber Gündemi sitesinde sürmanşet olarak yayımlanır; Lâlâ’nın Haftası’ndan ayrı bir yayındır.”

**14 Kasım 2026**
- 14 Kasım Yevmiye’si yayımlandı.
- Yayının adı **Rehber Gündemi Yevmiye** oldu; renkler korundu. Başlık iki satıra ayrıldı.
- On başlık örneği arasından **3 (“Safran şerit”)** seçildi: üst satır %40 küçültüldü, alt satır %40 büyütüldü; yeni renk eklenmedi.
- Üst satıra kırmızı “AI” eklemek denendi ve geri alındı.
- YEVMİYE’nin İ harfi kırmızı yapıldı (`#E30A17`).
- Proje adı “RG Yevmiye” oldu.
- Lâlâ’nın Haftası metninin bu yayına entegre edilmesi önerildi; Barış geri aldı.
- **Haftalık Yevmiye** eklendi: her salı 07.00, gelecek yedi gün, 12–15 dakika; cuma sayısına ek. Lâlâ’nın Haftası’ndaki ayrıntılı bölüm kuralları eklenmedi.
- Bütün belgeler bu tek talimatta birleştirildi.
- İlk Haftalık Yevmiye 10–16 Kasım 2026 için yazıldı (Barış: “İlk Haftalık YEVMİYE 10 Kasım Salı günü yayımlanmış olsun. Not 13 Kasım Geldikleri gibi giderler dediği gün.”); Dosya bu güne ayrıldı. Kartal istimbotunun bugünkü yeri araştırıldı (özgün tekne Mart 2025’ten beri Çanakkale Deniz Müzesi’nde; Kocaeli’de bir replika kaydı bulunamadı) ve sayı Barış’ın “yayımla” onayıyla yayındaki siteye girdi.
- Eski üç belge (`Rehber_Gundemi_Yayin_Promptu.md`, `Rehber_Gundemi_Site_Guncelleme.md`, `Yevmiye_Promptu.md`) projeden kaldırıldı; geçerli belgeler bu talimat ve `Proje_Talimatlari.md`’dir.

**15–26 Kasım 2026 (yeni hesap; tarihleri tam bilinmiyor, sitenin bugünkü hâlinden çıkarıldı)**
- Eski hesaba erişim kesildi. Site yeni hesapta yeniden kuruldu (KHk1NvjNZuk6rknFBzpJnR); ayrı bir taslak sitesi kullanılmıyor.
- Üç görev bu bilgisayarda zamanlanmış görev olarak yeniden kuruldu (16 Kasım 2026). Görevler doğrudan siteye yazıyor.
- Bölüm adları değişti: Haftalık Yevmiye → **YEVMİYE Nostaljik**, haftalık sayı → **YEVMİYE Gündem**.
- Yayın **bağımsız** oldu: künyede yayımlayan Hasan Barış Partal; “hiçbir kurum, kuruluş, meslek odası ya da dernekle organik bağı yoktur”. TKTC adı künyeden, alt bilgiden ve Analiz kapanış notundan çıktı.
- Lâlâ ibaresi “Profesyonel rehberler için yapay zekâ botu Lâlâ tarafından hazırlanmıştır” oldu; alt bilgide “Yapay Zeka botu Lâlâ yayınıdır”.
- Başlığa hareketli Lâlâ figürü eklendi (`img/lala-cizgi.webp`).
- Türkçe bilmeyen okurlar için dil penceresi eklendi (`js/dil.js`).
- 20 Kasım Gündem’inde FEG Porto fotoğrafları kullanıldı (`img/feg-porto/`).

**27 Kasım 2026**
- Talimat, yeni hesaptaki gerçek duruma göre güncellendi ve `OneDrive\Documents\barispartal.com\yevmiye\` klasörüne kondu. Bu klasördeki kopya geçerli kopyadır.
- Sitede o gün: 14 Yevmiye (14–27 Kasım), 3 Nostaljik (10, 17, 24 Kasım), 3 Gündem (13, 20, 27 Kasım), eski arşivde 748 yazı.

---

## 10. PROJE TALİMAT ALANI İÇİN KISA METİN

Projenin özel talimat alanına şu metin yapıştırılır:

claude.ai’de bir Proje açılır (önerilen ad: “RG Yevmiye”). Bu belge Projenin bilgi alanına yüklenir ve aşağıdaki metin Projenin talimat alanına yapıştırılır. Telefondan açılan bütün Yevmiye sohbetleri o Projenin içinde başlatılır.

```
REHBER GÜNDEMİ YEVMİYE — PROJE TALİMATI
Kullanıcı Barış'tır (Hasan Barış Partal). Her zaman Türkçe yanıt ver.
Her işten önce projedeki Rehber_Gundemi_Yevmiye_Tam_Talimat.md belgesini oku ve harfiyen uygula. Yayın adı, tasarım, içerik standardı, web sitesi, Yevmiye (her akşam), YEVMİYE Nostaljik (her salı) ve YEVMİYE Gündem (her cuma) kuralları, otomatik görevler ve karar geçmişi oradadır.
Site: https://claude.ai/artifact/KHk1NvjNZuk6rknFBzpJnR. Yayın bağımsızdır; TKTC adına çıkmaz.
Her sayıda ilgili kurumların web sayfaları ile sosyal medya hesaplarından yapılan duyuruları muhakkak tara ve haber niteliği taşıyanları değerlendir.
Sitenin tasarım dosyalarına (index.html, css, js, img) Barış'ın açık onayı olmadan dokunma. İçerik eklerken yalnızca ilgili sayının dosyası ile liste.json'u gönder. Paylaşım ayarına dokunma; başka yerde yayımlama, sosyal medyada paylaşma ve e-posta gönderme ayrıca yetki ister. E-posta uyarılarındaki bilgiyi, hangi uyarı ve hangi bilgi olduğunu gösterip onay almadan kullanma. Barış'ın kişisel bilgilerini dış servislere yazma.
Yeni bir karar alındığında talimat belgesinin güncel hâlini Barış'a ver; o da Projedeki dosyayı ve bilgisayardaki kopyayı yeniler.
```

---

## 11. KARAR BEKLEYEN NOKTALAR (27 Kasım 2026)

Bunlar Barış’ın kararını bekliyor. Karar verildiğinde ilgili bölüm güncellenir ve madde buradan karar geçmişine (9) taşınır.

1. **Onay usulü:** Eski kurala (önce taslak, “yayımla” onayıyla yayın) dönülecek mi, yoksa şu anki uygulama (görevler doğrudan yayımlar, Barış sonradan düzeltir) mi kalacak? Taslağa dönülürse yeni bir taslak sitesi gerekir; eski taslak (H87VJwch7rsx6HFhyCDbWU) bu iş için kullanılabilir.
2. **Bilgisayara bağımlılık:** Barış görevlerin buluta taşınmasını istedi. Nasıl taşınacağı 6. maddedeki karara bağlı. Site claude.ai’de kalırsa, bulutta çalışan bir görevin bu siteye yazabildiği önce bir denemeyle doğrulanmalı.
3. **Lâlâ figürü:** Kodda ve dosyalarda duruyor. Hangi ekranda görünmediği (telefon mu, bilgisayar mı) ve nasıl hareket etmesi gerektiği belirlenmeli.
4. **Görevlerin bu belgeyi okuması:** Görev talimatları bu belgeye bağlansın mı (her çalıştırmada bu dosyayı okusunlar), yoksa kendi kısa özetleriyle mi kalsınlar?
5. **Künyedeki ad (karara bağlandı, 27 Kasım 2026):** Yayın Barış’ın kişisel sitesinin altında durduğu için künyede ayrıca “Yayımlayan” satırı ve kişisel e-posta bulunmaz. Künyede yalnızca Lâlâ ibaresi, hedef kitle ve bağımsızlık notu kalır. Yevmiye kendi bağımsız adresine geçtiğinde künyeye bir iletişim e-postası eklenir; hangi adres olacağını Barış belirler.
6. **Yayının yeri ve adı:** Yevmiye’nin kendi adresi olsun mu (ör. yevmiye.barispartal.com)? Bu, ya WordPress’le ya da görevlerin bulutta çalışabileceği bir GitHub deposuyla kurulabilir.

**Karara bağlananlar (27 Kasım 2026):** künyedeki “Dil: Türkçe … Lâlâ’nın Haftası’ndan ayrı bir yayındır.” satırı kaldırıldı · fotoğraf ve logo kuralı yenilendi (bkz. 2.7) · Lâlâ’nın Haftası artık sürmüyor; yayında yalnızca hazırlayanın Lâlâ olduğu ve hedef kitlenin profesyonel turist rehberleri ile sektör paydaşları olduğu söylenir (bkz. 1.1) · görevlerin buluta taşınması istendi (Barış: “bulutta olması kesinlikle daha doğru”), nasıl yapılacağı 6. maddeye bağlı.
