# 🎟️ Round-Robin Coupon System

## 📌 Introduction

The **Round-Robin Coupon System** is a React-based project that allows users to claim unique coupons. A user can request a coupon, but if they have already claimed one, they must wait **one hour** before making another request. This ensures fair distribution of coupons using a round-robin mechanism.

## 🚀 Features

✅ Claim a coupon with a single click.  
✅ Implements **rate limiting** (1 coupon per hour per user).  
✅ Displays a countdown timer if a user tries to request too soon.  
✅ Provides real-time feedback with success/error messages.  
✅ Smooth UI built with **React + Tailwind CSS + DaisyUI**.

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/sikderfahad/round-robin-coupon-client
cd round-robin-coupon
```

### **2️⃣ Install Dependencies**

```sh
npm install  # or yarn install
```

### **3️⃣ Start the Development Server**

```sh
npm run dev  # or yarn dev
```

The project will be available at **http://localhost:5173** (default Vite port).

---

## 🌐 Live Demo

🔗 **Client-Side URL:** [Round-Robin Coupon Client](https://round-robin-coupon-client.vercel.app)

---

## 📖 Usage Guide

1️⃣ Click the **"Claim Coupon"** button.  
2️⃣ If eligible, a coupon code will be displayed.  
3️⃣ If not, an error message will indicate the remaining wait time.  
4️⃣ Store your coupon safely for future use!

---

## 🔄 Flow Diagram

Below is a simple representation of how the coupon system works:

```
   [User Requests Coupon]
            │
            ▼
 [Check Last Request Time]
       │           │
       │           ▼
       │   [< 1 Hour Passed?]
       │           │
       │           ▼
       │     [Grant Coupon]
       │           │
       ▼           ▼
 [Show Error]   [Show Coupon]
       │           │
       ▼           ▼
  [Display Timer]  [Success]
```

---

## 🏗️ Project Structure

```
round-robin-coupon/
│── src/
│   ├── components/
│   │   ├── CouponPage.jsx  # Main component
│   │   ├── Button.jsx       # Reusable button
│   ├── hooks/
│   │   ├── useAxiosSecure.js  # Secure API requests
│   │   ├── showToast.js       # Notification system
│   ├── App.jsx  # Entry file
│── public/
│── package.json
│── README.md
```

---

## 🛠️ Technologies Used

- **React** (Frontend framework)
- **Tailwind CSS** (Styling)
- **DaisyUI** (UI components)
- **Axios** (API calls)
- **LocalStorage** (Rate-limiting mechanism)

---

## 🌍 Deployment

This project can be deployed on **Vercel**:
1️⃣ Run `vercel` in your terminal.  
2️⃣ Follow the CLI instructions.  
3️⃣ Your frontend will be deployed instantly! 🚀

For backend deployment, ensure your **Express.js API** is also deployed to Vercel or another hosting provider.

---

## 🙌 Credits & Contribution

Contributions are welcome! Feel free to **fork**, submit **issues**, and create **pull requests**.

📧 Contact: [sikderfahad003@gmail.com](mailto:sikderfahad003@gmail.com)

⭐ Don't forget to **star** this repo if you found it useful!

---
