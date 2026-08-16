import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Home": "Home",
        "Product": "Product",
        "Login": "Login",
        "Register": "Register",
        "Logout": "Logout",
        "Cart": "Cart",
        "Category": "Category",
        "Price": "Price",
        "Add to Cart": "Add to Cart",
        "Remove": "Remove",
        "Quantity": "Quantity",
        "Total": "Total",
        "Product Name": "Product Name",
        "Product Id": "Product Id"
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "Product": "المنتجات",
      "Login": "تسجيل الدخول",
      "Register": "التسجيل",
      "Logout": "تسجيل الخروج",
      "Cart": "السلة",
      "Category": "الفئة",
      "Price": "السعر",
      "Add to Cart": "إضافة إلى السلة",
      "Remove": "إزالة",
      "Quantity": "الكمية",
      "Total": "المجموع",
      "Product Name": "اسم المنتج",
      "Product Id": "رقم المنتج",
      "Actions": "الإجراءات",
      "Footer":"تذييل الصفحة",
      "Categories":"الفئات",
      "Contact Us":"اتصل بنا",
      "About Us":"معلومات عنا",
      "Privacy Policy":"سياسة الخصوصية",
      "First Name":"الاسم الأول",
      "Last Name":"اسم العائلة",
      "Email":"البريد الإلكتروني",
      "Phone Number":"رقم الهاتف",
      "Message":"الرسالة",
      "Submit":"إرسال",
      "Password":"كلمة المرور",
      "Full Name":"الاسم الكامل",
      "Username":"اسم المستخدم",
      "Remove":"إزالة",
      "Add":"إضافة",
      "Update":"تحديث",
      "REMOVE":"إزالة",
      "ADD":"إضافة",
      "UPDATE":"تحديث",
      "Profile":"الصفحة الشخصية",
      "Checkout":"الدفع",
      "Payment Method":"طريقة الدفع",
      "Visa":"فيزا",
      "Cash":"نقدا",
      "Pay Now":"ادفع الآن",
      "Proceed to Checkout":"المتابعة إلى الدفع",
      "Continue Shopping":"متابعة التسوق",
      "CONTINUE SHOPPING":"متابعة التسوق",
      "PROCEED TO CHECKOUT":"المتابعة إلى الدفع",
      "Prouct Details":"تفاصيل المنتج",
      "Add to Cart":"أضف إلى السلة",
      "Product Description":"وصف المنتج",
      "Product Reviews":"مراجعات المنتج",
      "Related Products":"منتجات ذات صلة",
      "Products":"المنتجات",
      "New Products":"المنتجات الجديده"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

   
  });

  export default i18n;