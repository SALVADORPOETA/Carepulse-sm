# CarePulse

🚀 Introduction

CarePulse-sm is a **healthcare management system** developed following a tutorial by the YouTube channel **JavaScript Mastery**, with significant **custom improvements implemented independently**.

The system offers real-time **SMS notifications** to streamline patient checkups and secure authentication and registration workflows. Users can submit personal details, medical history, and identification, then schedule appointments with their preferred doctor. The platform provides confirmation screens, access permission models, and a comprehensive admin panel for managing, rescheduling, or canceling appointments—all with automated SMS alerts.

This project demonstrates a **production-ready, full-stack solution** with enhanced UX and security improvements beyond the original tutorial.

<img width="765" height="601" alt="carepulse" src="https://github.com/user-attachments/assets/8f19a53d-20fe-463a-bfb7-50e7bad64653" />

---

## ⚙️ Features

### 👥 Patient Registration & Management

* Secure forms for personal details, medical history, emergency contacts, insurance information, and identification uploads

### 📅 Appointment Scheduling & Management

* Users can schedule, reschedule, or cancel appointments with their preferred doctor
* Admin panel supports full appointment oversight

### 📱 Real-Time SMS Notifications

* Automated messages sent to patients for appointment scheduling or cancellations

### 🔐 Secure Admin Access

* Protected admin routes with passkey modal, session validation, and logout functionality

### 📝 Advanced Forms & Validation

* OTP input verification
* Date pickers and international phone inputs
* Validation with **React Hook Form** + **Zod**

### 📱 Responsive UI

* Built with **TailwindCSS** and **ShadCN/UI** for modern, fully responsive interfaces

### 🗄️ Backend Powered by Appwrite

* Database, user authentication, file storage, and messaging integration

### 📊 Monitoring & Error Tracking

* Integrated with **Sentry** for performance monitoring and error reporting

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React 19, TypeScript, TailwindCSS, ShadCN/UI
* **Forms & Validation:** React Hook Form, Zod, @hookform/resolvers
* **Authentication & Security:** Appwrite Users, secure passkey modal, client-side session validation
* **Backend & Storage:** Appwrite Databases, Storage, Messaging (SMS)
* **Notifications:** Twilio (via Appwrite Messaging)
* **Monitoring:** Sentry
* **Other Tools:** Radix UI components, Lucide React icons, React Datepicker, React Dropzone, OTP inputs

---

## 🔧 My Personal Contributions & Improvements

### 🔐 Implemented Secure Admin Access with Passkey Modal, Logout Handling, and Route Protection

**Initial Problem:**
The original tutorial project had no proper access control for the admin dashboard. Clicking the "Admin" button allowed potential unauthorized access to `/admin`, there was no logout, and the route itself lacked protection.

**My Contribution:**

1. Validated the modal input on the homepage "Admin" button and stored the encrypted passkey in `sessionStorage`
2. Added a **logout button** in the admin dashboard header, clearing the session and redirecting users to the homepage
3. Implemented **client-side route validation** for `/admin` using the encrypted passkey stored in `sessionStorage` and the `NEXT_PUBLIC_ADMIN_PASSKEY` environment variable. Unauthorized users are redirected to `/`

**Impact:**

* Lightweight but effective **access control** for the admin panel
* Sessions can now be actively terminated
* The flow from homepage access to protected route rendering is secure and seamless
* Demonstrates skills in **frontend security, state management, and route handling in Next.js**

---

## ⚡ Installation

### 1. Clone the repository

```bash
git clone https://github.com/SALVADORPOETA/Carepulse-sm.git
cd Carepulse-sm
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file with the following (replace with your own Appwrite project details):

```env
NEXT_PUBLIC_ENDPOINT=<your-appwrite-endpoint>
PROJECT_ID=<your-project-id>
API_KEY=<your-api-key>
DATABASE_ID=<your-database-id>
PATIENT_COLLECTION_ID=<your-patient-collection-id>
DOCTOR_COLLECTION_ID=<your-doctor-collection-id>
APPOINTMENT_COLLECTION_ID=<your-appointment-collection-id>
NEXT_PUBLIC_BUCKET_ID=<your-bucket-id>
NEXT_PUBLIC_ADMIN_PASSKEY=<your-admin-passkey>
```

### 4. Run the project

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🎨 Usage

* Register as a patient, upload identification if needed, and fill out medical history
* Schedule an appointment with your chosen doctor
* Receive SMS notifications for scheduled or canceled appointments
* Admins can securely access `/admin` to manage appointments and patients

---

## 📦 Project Structure

```
carepulse-sm/
├─ app/
│  ├─ admin/
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ ...
├─ components/
│  ├─ ui/
│  │  ├─ input.tsx
│  │  ├─ textarea.tsx
│  │  ├─ table.tsx
│  │  ├─ radio-group.tsx
│  │  ├─ select.tsx
│  │  ├─ label.tsx
│  │  └─ ... 
│  └─ ... (other components)
├─ lib/
│  └─ utils.ts
├─ types/
│  └─ appwrite.types.ts
├─ public/
│  └─ ... (assets, imágenes, iconos)
├─ package.json
└─ tsconfig.json

```

---

## 🌐 Links

* **GitHub:** [https://github.com/SALVADORPOETA/Carepulse-sm](https://github.com/SALVADORPOETA/Carepulse-sm)
* **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

---

## ⚖️ License

This is a personal portfolio project by Salvador Martinez based on a JavaScript Mastery tutorial. No commercial use intended.
