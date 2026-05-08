/* ── MULTILINGUAL SUPPORT SYSTEM ── */

const TRANSLATIONS = {
  en: {
    'hero.tagline': 'Arabic Calligraphy & Bespoke Graphic Design',
    'hero.cta': 'View Portfolio',
    'scroll.label': 'Scroll',
    'about.label': 'About',
    'about.title': 'Where Ink Meets Tradition',
    'about.para1': 'Imamuddin is a specialist in Arabic calligraphy and bespoke graphic design, bringing the timeless art of the written word into contemporary visual communication.',
    'about.para2': 'Every stroke is deliberate. Every composition carries meaning and weight — whether it graces a wedding invitation, adorns a business calendar, or elevates a brand identity.',
    'about.para3': 'Working with clients across a range of print and digital media, Imamuddin crafts pieces that honour the classical tradition while serving modern purpose.',
    'about.arabic': 'In the name of God',
    'service.pamphlets': 'Pamphlets & Brochures',
    'service.posters': 'Posters & Banners',
    'service.calendars': 'Calendars',
    'service.receipts': 'Receipt Books',
    'service.wedding': 'Wedding Stationery',
    'service.brand': 'Brand Identity',
    'service.certificates': 'Certificates',
    'service.custom': 'Custom Artwork',
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'Selected Works',
    'portfolio.hint': 'See something you love? Hover any piece and request something similar.',
    'portfolio.loading': 'Loading portfolio…',
    'portfolio.empty': 'Portfolio coming soon — check back shortly.',
    'portfolio.empty_category': 'No items in this category yet.',
    'filter.all': 'All',
    'filter.posters': 'Posters',
    'filter.pamphlets': 'Pamphlets',
    'filter.calendars': 'Calendars',
    'filter.wedding': 'Wedding Stationery',
    'filter.receipts': 'Receipt Books',
    'filter.certificates': 'Certificates',
    'filter.custom': 'Custom Artwork',
    'filter.brand': 'Brand Identity',
    'filter.social': 'Social Media Posts',
    'contact.label': 'Contact',
    'contact.title': 'Commission a Piece',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone / WhatsApp',
    'contact.instagram.label': 'Instagram',
    'contact.location.label': 'Location',
    'form.name': 'Your Name',
    'form.email': 'Your Email',
    'form.phone': 'Phone / WhatsApp',
    'form.project': 'Project Type (e.g. Wedding Poster)',
    'form.message': 'Tell me about your project…',
    'form.send': 'Send Enquiry',
    'form.selectType': 'Select Project Type',
    'form.notes': 'Any specific text, colours, size requirements…',
    'form.sendRequest': 'Send Request →',
    'form.other': 'Other',
    'footer.text': 'Crafted with devotion — Arabic Calligraphy & Design',
    'modal.title': 'Request Similar Work',
    'modal.inspired': 'Inspired by:',
    'modal.success': 'Your request has been received. Imamuddin will be in touch shortly.',
  },
  hi: {
    'hero.tagline': 'अरबी कैलिग्राफी और कस्टम ग्राफिक डिजाइन',
    'hero.cta': 'पोर्टफोलियो देखें',
    'scroll.label': 'स्क्रॉल करें',
    'about.label': 'परिचय',
    'about.title': 'जहाँ स्याही परंपरा से मिलती है',
    'about.para1': 'इमामुद्दीन अरबी कैलिग्राफी और कस्टम ग्राफिक डिजाइन में विशेषज्ञ हैं, जो लिखित शब्द की कालजयी कला को समकालीन दृश्य संचार में लाते हैं।',
    'about.para2': 'हर स्ट्रोक जानबूझकर है। हर रचना का मतलब और वजन होता है — चाहे वह शादी के निमंत्रण को सुशोभित करे, व्यावसायिक कैलेंडर को सजाए, या ब्रांड पहचान को बढ़ाए।',
    'about.para3': 'विभिन्न मुद्रित और डिजिटल मीडिया में क्लाइंट के साथ काम करते हुए, इमामुद्दीन ऐसी रचनाएँ तैयार करते हैं जो शास्त्रीय परंपरा को सम्मान देते हुए आधुनिक उद्देश्य की पूरी करती हैं।',
    'about.arabic': 'ईश्वर के नाम से',
    'service.pamphlets': 'पैम्फलेट और ब्रोशर',
    'service.posters': 'पोस्टर और बैनर',
    'service.calendars': 'कैलेंडर',
    'service.receipts': 'रसीद की किताबें',
    'service.wedding': 'विवाह स्टेशनरी',
    'service.brand': 'ब्रांड आइडेंटिटी',
    'service.certificates': 'प्रमाणपत्र',
    'service.custom': 'कस्टम आर्टवर्क',
    'portfolio.label': 'पोर्टफोलियो',
    'portfolio.title': 'चयनित कार्य',
    'portfolio.hint': 'क्या आपको कुछ पसंद है? किसी भी पीस पर होवर करें और समान कुछ मांगें।',
    'portfolio.loading': 'पोर्टफोलियो लोड हो रहा है…',
    'portfolio.empty': 'पोर्टफोलियो जल्द आने वाली है — जल्द ही देखें।',
    'portfolio.empty_category': 'इस श्रेणी में अभी कोई आइटम नहीं।',
    'filter.all': 'सभी',
    'filter.posters': 'पोस्टर',
    'filter.pamphlets': 'पैम्फलेट',
    'filter.calendars': 'कैलेंडर',
    'filter.wedding': 'विवाह स्टेशनरी',
    'filter.receipts': 'रसीद की किताबें',
    'filter.certificates': 'प्रमाणपत्र',
    'filter.custom': 'कस्टम आर्टवर्क',
    'filter.brand': 'ब्रांड आइडेंटिटी',
    'filter.social': 'सोशल मीडिया',
    'contact.label': 'संपर्क',
    'contact.title': 'एक टुकड़ा कमीशन करें',
    'contact.email.label': 'ईमेल',
    'contact.phone.label': 'फोन / व्हाट्सएप',
    'contact.instagram.label': 'इंस्टाग्राम',
    'contact.location.label': 'स्थान',
    'form.name': 'आपका नाम',
    'form.email': 'आपका ईमेल',
    'form.phone': 'फोन / व्हाट्सएप',
    'form.project': 'प्रोजेक्ट प्रकार (जैसे शादी का पोस्टर)',
    'form.message': 'अपने प्रोजेक्ट के बारे में बताएं…',
    'form.send': 'पूछताछ भेजें',
    'form.selectType': 'प्रोजेक्ट प्रकार चुनें',
    'form.notes': 'कोई विशिष्ट पाठ, रंग, आकार आवश्यकताएँ…',
    'form.sendRequest': 'अनुरोध भेजें →',
    'form.other': 'अन्य',
    'footer.text': 'भक्ति के साथ तैयार — अरबी कैलिग्राफी और डिजाइन',
    'modal.title': 'समान कार्य का अनुरोध करें',
    'modal.inspired': 'से प्रेरित:',
    'modal.success': 'आपका अनुरोध प्राप्त हो गया है। इमामुद्दीन शीघ्र ही आपसे संपर्क करेंगे।',
  },
  ur: {
    'hero.tagline': 'عربی خطاطی اور حسب ضرورت گرافک ڈیزائن',
    'hero.cta': 'پورٹ فولیو دیکھیں',
    'scroll.label': 'اسکرول کریں',
    'about.label': 'تعارف',
    'about.title': 'جہاں سیاہی روایت سے ملتی ہے',
    'about.para1': 'امام الدین عربی خطاطی اور حسب ضرورت گرافک ڈیزائن میں ماہر ہیں، جو لکھے ہوئے لفظ کی لازوال فن کو جدید بصری رابطہ میں لے آتے ہیں۔',
    'about.para2': 'ہر ضربت قصد سے ہے۔ ہر ترتیب کا مطلب اور وزن ہے — چاہے یہ شادی کی دعوت کو سجائے، کاروباری کیلنڈر کو سزائے، یا برانڈ کی شناخت کو بلند کرے۔',
    'about.para3': 'مختلف پرنٹ اور ڈیجیٹل میڈیا میں کلائنٹس کے ساتھ کام کرتے ہوئے، امام الدین ایسی تخلیقات تیار کرتے ہیں جو روایتی فن کو احترام دیتے ہوئے جدید مقصد کو پورا کرتی ہیں۔',
    'about.arabic': 'خدا کے نام سے',
    'service.pamphlets': 'پمفلٹ اور براشور',
    'service.posters': 'پوسٹر اور بینر',
    'service.calendars': 'کیلنڈر',
    'service.receipts': 'رسیدوں کی کتابیں',
    'service.wedding': 'شادی کے سٹیشنری',
    'service.brand': 'برانڈ کی شناخت',
    'service.certificates': 'سرٹیفکیٹ',
    'service.custom': 'حسب ضرورت فن کاری',
    'portfolio.label': 'پورٹ فولیو',
    'portfolio.title': 'منتخب کام',
    'portfolio.hint': 'کیا آپ کو کچھ پسند ہے؟ کسی بھی کام پر ہوور کریں اور اسی طرح کی چیز منگوائیں۔',
    'portfolio.loading': 'پورٹ فولیو لوڈ ہو رہا ہے…',
    'portfolio.empty': 'پورٹ فولیو جلد آنے والا ہے — جلد ہی دوبارہ چیک کریں۔',
    'portfolio.empty_category': 'اس زمرے میں ابھی کوئی چیز نہیں۔',
    'filter.all': 'تمام',
    'filter.posters': 'پوسٹر',
    'filter.pamphlets': 'پمفلٹ',
    'filter.calendars': 'کیلنڈر',
    'filter.wedding': 'شادی کے سٹیشنری',
    'filter.receipts': 'رسیدوں کی کتابیں',
    'filter.certificates': 'سرٹیفکیٹ',
    'filter.custom': 'حسب ضرورت فن کاری',
    'filter.brand': 'برانڈ کی شناخت',
    'filter.social': 'سوشل میڈیا',
    'contact.label': 'رابطہ',
    'contact.title': 'ایک کام منگوائیں',
    'contact.email.label': 'ای میل',
    'contact.phone.label': 'فون / واٹس ایپ',
    'contact.instagram.label': 'انسٹاگرام',
    'contact.location.label': 'مقام',
    'form.name': 'آپ کا نام',
    'form.email': 'آپ کی ای میل',
    'form.phone': 'فون / واٹس ایپ',
    'form.project': 'منصوبہ کی قسم (جیسے شادی کا پوسٹر)',
    'form.message': 'اپنے منصوبے کے بارے میں بتائیں…',
    'form.send': 'استفسار بھیجیں',
    'form.selectType': 'منصوبہ کی قسم منتخب کریں',
    'form.notes': 'کوئی خاص متن، رنگ، سائز کی ضروریات…',
    'form.sendRequest': 'درخواست بھیجیں →',
    'form.other': 'دیگر',
    'footer.text': 'عقیدت سے تیار — عربی خطاطی اور ڈیزائن',
    'modal.title': 'اسی طرح کا کام منگوائیں',
    'modal.inspired': 'سے متاثر:',
    'modal.success': 'آپ کی درخواست موصول ہو گئی ہے۔ امام الدین جلد ہی آپ سے رابطہ کریں گے۔',
  },
  ar: {
    'hero.tagline': 'الخط العربي والتصميم الجرافيكي المخصص',
    'hero.cta': 'عرض المحفظة',
    'scroll.label': 'مرر',
    'about.label': 'نبذة',
    'about.title': 'حيث يلتقي الحبر بالتقليد',
    'about.para1': 'إمام الدين متخصص في الخط العربي والتصميم الجرافيكي المخصص، حاملاً فن الكلمة المكتوبة الخالد إلى التواصل البصري المعاصر.',
    'about.para2': 'كل ضربة مقصودة. كل تركيب يحمل معنى وثقلاً — سواء كان يزين بطاقة دعوة الزفاف، يزين تقويماً تجارياً، أو يرفع هوية العلامة التجارية.',
    'about.para3': 'من خلال العمل مع العملاء عبر مجموعة من وسائط الطباعة والرقمية، يحرف إمام الدين أعمالاً تحترم التقليد الكلاسيكي مع خدمة الغرض الحديث.',
    'about.arabic': 'بسم الله',
    'service.pamphlets': 'النشرات والكتيبات',
    'service.posters': 'الملصقات واللافتات',
    'service.calendars': 'التقويمات',
    'service.receipts': 'دفاتر الإيصالات',
    'service.wedding': 'القرطاسية للحفلات',
    'service.brand': 'هوية العلامة التجارية',
    'service.certificates': 'الشهادات',
    'service.custom': 'الأعمال الفنية المخصصة',
    'portfolio.label': 'المحفظة',
    'portfolio.title': 'الأعمال المختارة',
    'portfolio.hint': 'هل رأيت شيئاً تحبه؟ مرر على أي عمل واطلب شيئاً مشابهاً.',
    'portfolio.loading': 'جاري تحميل المحفظة…',
    'portfolio.empty': 'المحفظة قادمة قريباً — تحقق مرة أخرى قريباً.',
    'portfolio.empty_category': 'لا توجد عناصر في هذه الفئة حتى الآن.',
    'filter.all': 'جميع',
    'filter.posters': 'ملصقات',
    'filter.pamphlets': 'نشرات',
    'filter.calendars': 'تقويمات',
    'filter.wedding': 'قرطاسية الحفلات',
    'filter.receipts': 'دفاتر الإيصالات',
    'filter.certificates': 'شهادات',
    'filter.custom': 'أعمال فنية مخصصة',
    'filter.brand': 'هوية العلامة التجارية',
    'filter.social': 'وسائل التواصل الاجتماعي' ,
    'contact.label': 'الاتصال',
    'contact.title': 'اطلب قطعة عمل',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.phone.label': 'الهاتف / واتس آب',
    'contact.instagram.label': 'إنستاغرام',
    'contact.location.label': 'الموقع',
    'form.name': 'اسمك',
    'form.email': 'بريدك الإلكتروني',
    'form.phone': 'الهاتف / واتس آب',
    'form.project': 'نوع المشروع (مثال: ملصق حفل زفاف)',
    'form.message': 'حدثنا عن مشروعك…',
    'form.send': 'إرسال الاستفسار',
    'form.selectType': 'اختر نوع المشروع',
    'form.notes': 'أي نص معين أو ألوان أو متطلبات حجم…',
    'form.sendRequest': 'إرسال الطلب →',
    'form.other': 'أخرى',
    'footer.text': 'تم إنشاؤه بتفان — الخط العربي والتصميم',
    'modal.title': 'اطلب عملاً مشابهاً',
    'modal.inspired': 'مستوحى من:',
    'modal.success': 'تم استلام طلبك. سيتصل بك إمام الدين قريباً.',
  }
};

const LANGUAGE_CONFIG = {
  en: { dir: 'ltr', name: 'English' },
  hi: { dir: 'ltr', name: 'हिन्दी' },
  ur: { dir: 'rtl', name: 'اردو' },
  ar: { dir: 'rtl', name: 'العربية' },
};

let currentLang = localStorage.getItem('selectedLanguage') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeLanguage();
  setupLanguageSwitcher();
});

function initializeLanguage() {
  const htmlRoot = document.getElementById('htmlRoot');
  const config = LANGUAGE_CONFIG[currentLang];
  
  htmlRoot.lang = currentLang;
  htmlRoot.dir = config.dir;
  
  updatePageText();
  updateActiveLanguageButton();
}

function updatePageText() {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.dataset.key;
    const translation = TRANSLATIONS[currentLang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-placeholder-key]');
  placeholderElements.forEach(el => {
    const key = el.dataset.placeholderKey;
    const translation = TRANSLATIONS[currentLang][key];
    if (translation) {
      el.placeholder = translation;
    }
  });
}

function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('selectedLanguage', currentLang);
      initializeLanguage();
    });
  });
}

function updateActiveLanguageButton() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    }
  });
}

function getTranslation(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}
