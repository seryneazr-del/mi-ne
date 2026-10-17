const form = document.getElementById("projectForm");
const formMessage = document.getElementById("formMessage");

// رقم واتساب الجزائري بصيغة دولية دون + أو مسافات
const WHATSAPP_NUMBER = "213778928781";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    if (!/^213\d{9}$/.test(WHATSAPP_NUMBER)) {
        formMessage.textContent = "تحقق من رقم واتساب في ملف JavaScript.";
        return;
    }

    const data = new FormData(form);

    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const phone = data.get("phone").trim();
    const website = data.get("website").trim();
    const type = data.get("type");
    const description = data.get("description").trim();
    const budget = data.get("budget");

    const message = [
        "🚀 طلب جديد لتصميم موقع ويب",
        "",
        "👤 الاسم الكامل: " + name,
        "📧 البريد الإلكتروني: " + email,
        "📱 رقم الهاتف: " + phone,
        "",
        "🌐 اسم الموقع: " + website,
        "💻 نوع الموقع: " + type,
        "",
        "📝 وصف المشروع:",
        description,
        "",
        "💰 الميزانية: " + budget,
        "",
        "يرجى التواصل معي بخصوص هذا المشروع."
    ].join("\n");

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    formMessage.textContent =
        "سيتم فتح واتساب. راجع تفاصيل الطلب ثم اضغط إرسال.";

    const newWindow = window.open(
        whatsappURL,
        "_blank"
    );

    if (!newWindow) {
        window.location.href = whatsappURL;
    }
});