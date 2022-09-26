export default function (errorCode) {
    switch (errorCode) {
        case "auth/configuration-not":
            return "Kullanıcı bulunamadı";

        case "auth/invalid-email":
            return "Geçersiz e-posta adresi";

        case "auth/email-already-exists":
            return "Kullanıcı zaten mevcut";

        case "auth/weak-password":
            return "Zayıf şifre";

        case "auth/wrong-password":
            return "Yanlış şifre";

        default:
            return errorCode;
    }
}