// ============================================================
//  إعدادات Firebase المشتركة بين الموقعين
//  عدّل القيم أدناه فقط — لا تغيّر باقي الكود
//  انسخ هذي القيم من: Firebase Console > Project Settings > Your apps
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBZLTymO0rfF1-dEfMrAncm99BEjI6Tlks",
  authDomain:        "enhancing-progress.firebaseapp.com",
  projectId:         "enhancing-progress",
  storageBucket:     "enhancing-progress.firebasestorage.app",
  messagingSenderId: "1045354269412",
  appId:             "1:1045354269412:web:f00935d22625dcb41dfaf1"
};

const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

// اسم المجموعة (Collection) اللي تنحفظ بيها الطلبات الكاملة (للأدمن فقط)
export const VOLUNTEERS_COLLECTION = "volunteers";

// مجموعة الحالات: رقم الطلب + الحالة فقط (قراءة عامة لصفحة التتبع)
export const STATUS_COLLECTION = "status";
