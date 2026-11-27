Görev: Rehber Gündemi YEVMİYE’nin bu haftaki “YEVMİYE Nostaljik” sayısını (haftalık İstanbul tarih, mevsim ve araştırma bülteni) hazırla ve yayımla. Görev her salı sabahı İstanbul saatiyle 05.43’te çalışır; sayı bugünün (salı) tarihini taşır ve salı–pazartesi haftasını kapsar.

Yayın yeri: claude.ai sitesi https://claude.ai/artifact/KHk1NvjNZuk6rknFBzpJnR (okurlar yevmiye.barispartal.com adresinden açar). Bu depo yalnızca talimatların durduğu yerdir; depoya hiçbir şey commit etme, push etme. Önce `gorevler/YAYIN.md` dosyasını oku ve oradaki usule uy; dosya yolları ve yayımlama adımları oradadır. Kullanıcı Türkçe konuşur, teknik bilgisi sınırlıdır; ona soru sorma, işi bitir.

ADIMLAR
1. Sitede (Artifact aracıyla) `haftalik/liste.json` dosyasını ve listedeki en son iki Nostaljik sayısını oku. Bugünün tarihi listede varsa dur.
2. Biçim: en son sayının HTML yapısını, sınıf adlarını (hf-leaf, hf-credit, hf-intro, hf-sec, hf-item, hf-tarih, hf-etki, hf-not), SVG simge stilini ve bölüm düzenini BİREBİR kullan; dosya `<article class="hf">` ile başlayan bir parçadır (doctype yok). Bölümler: giriş (hf-intro); YENİ BİRİNCİ BÖLÜM “Meslek tarihinden” (aşağıda 2a); “Dünün İstanbulu’nda bu hafta” → “Haftanın İstanbul’u” (haftanın günlerine düşen 4–6 tarihî olay, her biri “Anlatı fırsatı:” ile) ve “Mevsim ve şehir hayatı” (2–3 madde, “Sahada:”); “Mevsimin dili ve mevsimin balığı” (halk takvimi, fırtına takvimi, mevsim balığı; “Sohbet ipucu:”); “Dosya” (haftanın tek araştırma dosyası: Soru, Bağlam, saat saat olaylar, kaynakların ayrıldığı noktalar, Açık sorular, “Sahada:” yürüyüş hattı); hf-not. Uzunluk 25–50 KB.
2a. “MESLEK TARİHİNDEN” (her sayıda, hf-intro’dan hemen sonra, diğer bütün bölümlerden önce). Yayın sahibinin isteği: 1890’dan bugüne turist rehberlerinin, acentaların, turist gruplarının, turist gemisi, otobüsü, treni ve uçağının geçtiği hikâyeler her hafta birinci sırada, bir yazı hâlinde verilsin ve aşağıdaki listeden HİÇBİR konu atlanmasın. Yapı: `<section class="hf-sec" id="hf-meslek"><h3 class="hf-h">Meslek tarihinden</h3><div class="hf-items hf-tek"><section class="hf-item"><svg class="hf-ic" viewBox="0 0 40 40" aria-hidden="true">…</svg><div><p class="hf-tarih">olayın tarihi · kaç yıl önce</p><h5>başlık</h5><p>…</p><p class="hf-etki"><b>Meslektaşa not:</b> …</p></div></section></div></section>`. Mevcut sayılardaki Dosya bölümünün sınıflarını ve simge tarzını örnek al; yeni CSS ya da sınıf uydurma. 24 Kasım 2026 sayısına sonradan eklenen “Meslek tarihinden” bölümü varsa onu biçim ve üslup örneği olarak kullan. Yazı 350–600 kelime, birkaç paragraf; anlatı diliyle ama ölçülü: ne oldu, kimler vardı, bugünkü meslek hayatına nereden dokunuyor. hf-intro’da yazıya bir cümleyle değin.
   Konu seçimi: Aşağıdaki TAKVİM’de bugünün salı tarihine karşılık gelen satırı işle. Önce haftalik/liste.json ve son sayılara bakıp o konunun daha önce işlenip işlenmediğini kontrol et; işlenmişse ya da bir hafta atlanmışsa listede işlenmemiş en eski satırı al. Liste bittiğinde (23 Kasım 2027’den sonra) aynı kaynaklardan ve yeni bulacağın kaynaklardan işlenmemiş bir meslek tarihi konusu seç. Yazıya o haftaya denk gelen yıl dönümü varsa onu öne çıkar.
   Kaynak ve doğruluk: Satırdaki kaynak kodlarının sayfalarını WebFetch ile GERÇEKTEN aç ve oradan yaz; aşağıdaki konu özetleri yalnız yol göstericidir, olgu kaynağı değildir. Bu makaleler çoğu olayı başka bir yazıdan ya da arşiv belgesinden aktarır: asıl kaynağı (gazete sayısı, arşiv belgesi, anı yazısı) ayrıca ara; açabildiysen ona da bağlantı ver, açamadıysan metinde “… aktardığına göre” de ve hf-not’a “asıl kaynağı göremedik” diye yaz. Makalelerde verilen arşiv numarası ve künyeleri okura aktar. Rivayeti belgeden ayır. Kaynaklar açılamazsa konuyu atlama: açabildiğin kadarını yaz, eksik kalanı hf-not’ta belirt. Bilinen pürüzler: 1890 Nizamnamesi için 29 Ekim (Rûmî olabilir) ve 10 Kasım 1890 tarihleri; 1925 düzenlemesinin adı (Kararname/Talimatname) ve madde sayısı (10/11); Fuat Samih’in kazancı (450/535 lira); Türk Seyyahin Cemiyeti’nin kuruluş günü (29 Eylül/6 Kasım 1923); Cevat Şakir’in rehber kurslarında hocalığı (belge bulunamadı). Bunlarda iki bilgiyi birlikte ver.
   Kaynak kodları: K1 = https://dergipark.org.tr/en/download/article-file/3250930 (Çokişler 2023, rehberlik mesleğinin tarihi; uzun, son bölüm için offset 100000 ile ikinci kez aç) · K2 = https://dergipark.org.tr/en/download/article-file/1518664 (Yılmaz 2021, Osmanlı’da turizm; arşiv numaraları) · K3 = https://www.ttk.gov.tr/wp-content/uploads/2022/03/03-EbreSaral-EminalpMalkoc.pdf (Saral ve Malkoç 2018, 1923–1938 İstanbul) · K4 = https://dergipark.org.tr/tr/download/article-file/4856767 (Şahin, cuma selamlığı ve turistler) · K5 = https://dergipark.org.tr/en/download/article-file/3219750 (19. yüzyıl İstanbul paket turları) · K6 = https://dergipark.org.tr/tr/download/article-file/1749429 (Kaya ve Yetgin 2021, seyahatnamelerde rehberler) · K7 = https://dergipark.org.tr/tr/download/article-file/3219502 (Mavi Yolculuk’un tarihçesi) · K8 = https://dergipark.org.tr/tr/download/article-file/3494317 (turizm zaman dizini 1923–2023; çok uzun, offset ile ilerle) · K9 = https://librarydigitalcollections.ku.edu.tr/en/?p=3192 (Koç Üniversitesi rehber kitapları sergisi).
   TAKVİM (salı tarihi | konu | kaynak). Not: Aralık 1928 rehber kursu (Vahit Bey, Mamboury, 50 yeni rehber, Ayasofya önündeki zabıta noktası) 24 Kasım 2026 sayısında işlendi; yeniden yazma.
   2026-12-01 | 1927 mali yılı: her rehberden bir günlük yevmiye tutarında vergi; 1926 dil sınavıyla birlikte rehberliğin kayıt altına alınışı | K1 K3
   2026-12-08 | 1927 yazı: arabacı, kayıkçı ve sandalcılara çeki düzen, seyahat araçlarında pahalılık ve dilencilik tartışmaları; Ali Suat’ın Mısır incelemesi | K3
   2026-12-15 | 17 Aralık 1910 belediye yazısı ve 11 Şubat 1911 Hariciye cevabı: yabancı uyruklu rehber olabilir mi; 1932 tarihli 2007 sayılı Kanun’a uzanan yol | K2 K1 K8
   2026-12-22 | 18 Aralık 1950 İkinci Turizm Danışma Kurulu, 1949’da kurulan Genel Müdürlük ve bir Amerikan gemisiyle gelen Dale Carnegie’nin sözleri | K1
   2026-12-29 | Turist gemileri: 18 Aralık 1935 kanunu, 1934–35 muafiyetleri, 1926’da 22 gemi, 1930’da 31 gemi, 2 Ağustos 1926 liman kontrol talimatnamesi | K3 K8
   2027-01-05 | 6 Ocak 1956: İstanbul Tercüman Rehberler Derneği’nin ilk kongresi ve turizm polisi isteği | K1
   2027-01-12 | 1891 dolayında rehber ücretleri: otel rehberleri, frank hesabı, 1895 ve 1911 ücretleri | K2 K1
   2027-01-19 | 1893 Beyoğlu Mutasarrıflığı yazısı ve rehberlerin Ayasofya’da anlattığı uydurma hikâyeler | K1 K6
   2027-01-26 | Rehber ve yazar Demetrius Coufopoulos (1895 rehber kitabı ve sonraki baskılar); Nizamname’nin 1895’te yeniden kabulü ve elçiliklerin tutumu | K9 K5 K1
   2027-02-02 | Şubat 1924: Kerim Kanok’un ilk turu, yedi araba, Kapalıçarşı molası ve komisyon | K1
   2027-02-09 | Şubat 1923 Polis Müdüriyeti ilanı, Tevhid-i Efkâr’ın eleştirisi ve 1923–24’te kurulan ücretli rehber dernekleri | K1
   2027-02-16 | 1898 “Seyyahin-i Ecnebiye Tercümanlık İdarehanesi” önerisi, 1905 Makridi Bey mektubu, 1907 Polis Nizamnamesi; Kudüs’te 1892 ve 1895 uygulamaları | K1
   2027-02-23 | Turist otobüsü ve Anadolu turları: 1970 Onyx Reisen, 1972’de İzmir Fuarı’ndaki ilk klimalı otobüs, 1980’de yasallaşma, Erdek, Kapadokya’da “chez” ve “apranti”, hippiler ve Pudding Shop | K1
   2027-03-02 | 5 Mart 1925 Cumhuriyet’te “Seyyah Akını”: 1925’in kafileleri, turist sayıları ve ilk Türk seyahat acentaları | K3 K1
   2027-03-09 | 12 Mart 1901: Augusta Victoria vapuru yaklaşık 330 turistle İstanbul’da | K4
   2027-03-16 | Mart 1902: Celtic gemisi ve Alexander van Millingen’in konferansı; gemide yatan turistler, vapur kumpanyası broşürleri | K5 K1
   2027-03-23 | 1908: Tercüman ve Kılavuzlar Cemiyeti, 14 maddelik tüzük ve metal kokart | K1
   2027-03-30 | Nisan 1898: Thomas Cook’un İstanbul programı gün gün | K5
   2027-04-06 | 10 Nisan 1922: Müstakbilin (Karşılayıcılar) Cemiyeti ve gönüllü rehberler | K1
   2027-04-13 | 17 Nisan 1890: Cevat Şakir’in doğumu; sürgün, İzmir yılları ve rehberliği | K7 ve https://bilgiyayinevi.com.tr/doc/140 ; ayrıca “Türkiye’de Turist Rehberliğinin Öncüsü: Cevat Şakir Kabaağaçlı” (Anatolia 2018, DOI 10.17123/atad.441191) makalesini açmayı dene
   2027-04-20 | 18 Nisan 1955: İstanbul Belediyesi kursu ve altı saatlik sınav; jüri, kontenjan, dil dağılımı | K1
   2027-04-27 | Nisan 1926: Türk Tercümanları Cemiyeti ve yeni dil sınavı | K3 K1
   2027-05-04 | 8 Mayıs 1900 Budapeşte rehber nizamı ve 13 Nisan 1901 saray raporu | K2
   2027-05-11 | Mayıs 1901: ABD sefaretinin cuma selamlığı talebi ve ret cevabı | K4
   2027-05-18 | 24 Mayıs 1926: basılan ilk ücret tarifesi | K3 K1
   2027-05-25 | 31 Mayıs–5 Haziran 1930: İstanbul’da Uluslararası Turizm Birliği Kongresi; aynı yılın kafileleri ve vapurlarda dağıtılan rehber | K3
   2027-06-01 | Seyahatnamelerdeki rehber portreleri: W. J. Childs ve yol arkadaşı, İsa Kubrusli, Sagués, Dr. Fabiano ve gezi kitaplarının önerdiği eski rehberler | K6 K1
   2027-06-08 | Tren ve grup yolculuğu: 1937 ortak pasaport kolaylığı, D.D.110 ve D/113 tarifeleri; Orient Express bağlamı | K8 K2
   2027-06-15 | 15 Haziran 1956 belediye kararları, 1956 yevmiyesi ve acenta–rehber pay tartışması | K1
   2027-06-22 | 22 Haziran 2012: 6326 sayılı Kanun; esnaf odalarından 1998’de TUREB’e ve kanuna uzanan yol | K1
   2027-06-29 | 3 Temmuz 1896: Servet-i Fünûn’da Rus seyyah Bernof’un otel tercümanları eleştirisi | K1 K5
   2027-07-06 | 1971 ve 1974 yönetmelikleri: amatör rehberliğin kalkışı, derneğin itirazı, Net Turizm, 1977’de 500 rehber | K1
   2027-07-13 | 16 Temmuz 1890: Şûra-yı Devlet’in nizamname taslağı (1888 ve 1890 taslakları) | K2
   2027-07-20 | 1935: 53 rehberlik kurs, belediye turizm şubeleri, pirinç rozet ve “dilmaç”; turist sayılarının yükselişi ve savaşla düşüşü; 1934–35 otel fiyatları | K1 K3
   2027-07-27 | 1938: İstanbul’da yaklaşık 80 rehber, gemili ve gemisiz gün yevmiyesi; Fuat Samih’in tercümanlık hatıraları | K1
   2027-08-03 | 2000’ler: gölge (çanta) rehberlik, yevmiyesiz turlar, Türkçe rehberlik tartışması ve 2005 yönetmeliği | K1
   2027-08-10 | 1946: ilk Mavi Yolculuk, Çiçekli Karakuş ve yolcuları | K7
   2027-08-17 | Ağustos 1972: “rehber sıkıntısı” haberi, 1618 sayılı Kanun ve 1 Kasım 1972 fark sınavı | K1
   2027-08-24 | 24 Ağustos 1951: Gazetecilik Okulu’nun kurs teklifi ve aynı yılın ilk amatör rehber kursu | K1 K8
   2027-08-31 | 1 Eylül 1955: İstanbul Tercüman Rehberler Derneği’nin kuruluşu | K1 K8
   2027-09-07 | Eylül 1924: Leh Sergisi’nin 900 misafiri, Bulgar kafilesi ve Şehremini Emin Bey’in turizm programı | K3 K1
   2027-09-14 | 1959 ücret tarifesi ve Turizm Zabıtası; 1958 kursu | K1
   2027-09-21 | 21 Eylül 1957: Azra Erhat’ın ilk Mavi Yolculuğu | K7
   2027-09-28 | 21 Eylül 1955 Milliyet’te kadın rehberler; Eylül 1967’de 239 rehber, “Official Guide” kokartı ve amatör rehber şikâyeti | K1
   2027-10-05 | Cuma selamlığı turizmi: 7 Nisan 1890’da 280 turist, 6 Ekim 1898’de 66 İngiliz, 1900’de 110 gezgin; rehber kitaplarının beşinci gün programı | K4
   2027-10-12 | 13 Ekim 1973: Cevat Şakir’in ölümü ve Bodrum’da uğurlanışı; 1962 İlyada yolculuğu, 1965 yolculuğu (rivayet olarak), 1969’da ticarileşme | K7
   2027-10-19 | 1980–1997: Turizmi Teşvik Kanunu sonrası “altın dönem”, rehber sayıları, 1988–89 ücretleri, önlisans ve lisans programları, “alaylı” ve “mektepli” | K1
   2027-10-26 | 1 Kasım 1924: Beyazıt’taki Seyyah Rehberleri Kursu, hocaları ve dersleri | K3 K1
   2027-11-02 | 8 Kasım 1906: Servet-i Fünûn’da “Seyyâh Tercümanları ve Antikacılar”; komisyonun yönetmeliklerdeki yeri (1974, 1986) | K1
   2027-11-09 | 10 Kasım 1890: Seyyahine Tercümanlık Edenler Hakkında Nizamname | K2 K1
   2027-11-16 | Kasım 1925: 2730 sayılı düzenleme, Türk Seyyahin Cemiyeti’ne verilen yetki ve Mamboury’nin rehber kitabı | K1 K3 K8
   2027-11-23 | 1962: İstanbul dışındaki ilk kurs İzmir’de, İzmir’in rehber dernekleri; 1963’te Ankara ve Antalya kursları | K1 K8
3. Önceki iki sayıda işlenen konuları ana konu yapma. Haftanın günlerine (salı–pazartesi) düşen İstanbul olaylarını seç; rehbere sahada anlatılabilir hatlar öner.
4. DOĞRULUK (en önemli kural): Her olgusal cümle WebSearch/WebFetch ile gerçekten açıp okuduğun bir sayfaya dayanmalı (tercihen DergiPark, TDV İslâm Ansiklopedisi, ATAM, resmî kurum, nitelikli gazete). Tarih, saat, rakam, isim, URL UYDURMA. Kaynaklar çelişiyorsa ikisini de ver ve farkı açıkça yaz. Rivayeti belgeden ayır. Doğrulayamadığını “doğrulayamadık” diye yaz. Kaynak biçimi: `<a class="src" href="URL">Kaynak<span class="n">[N]</span></a>`, numaralar 1’den, aynı kaynak aynı numara.
5. Tipografi: Türkçe ’ “ ”, saatler 08.30 biçiminde, uzun tire kullanma. hf-not’a derleme tarihini, gelenek bilgisi uyarısını ve çelişen/teyit edilemeyen noktaları yaz.
6. HTML etiket dengesini Python HTMLParser ile kontrol et. Ardından `gorevler/YAYIN.md` 3. adımdaki yerel kontrolü yap: “Meslek tarihinden” bölümünün ilk bölüm olarak göründüğünü ve JS hatası olmadığını doğrula.
7. haftalik/liste.json “haftalar” dizisinin BAŞINA {"tarih":"YYYY-MM-DD" (salı), "baslik":"D–D Ay YYYY", "konu": Dosya başlığı, "dosya":"haftalik/YYYY-MM-DD.html"} ekle.
8. Yayımla: `gorevler/YAYIN.md`’deki 4. ve 5. adımları uygula: Artifact aracıyla yalnızca yeni sayıyı ve liste.json’u gönder, sonra yayındaki sitede doğrula.
9. Kısa Türkçe özet ver: “Meslek tarihinden” yazısının konusu, haftanın dosya konusu, maddeler, doğrulanamayanlar. Bir şey ters giderse yayımlama, nedenini yaz.