
---


# 🌐 E-Commerce Application

A modern **full-stack e-commerce platform** built using **Next.js**, **React**, and **TypeScript**. Browse products, manage your cart, and checkout smoothly using Stripe — all wrapped in a futuristic, cyber-themed interface.

🔗 **Live Demo:** https://eshemeta.vercel.app/

---

## 🚀 Features

- 🛒 **Product Catalog** – View products with detailed descriptions and images  
- 🛍️ **Shopping Cart** – Add, remove, and adjust item quantities  
- 💳 **Secure Checkout** – Stripe-powered payment flow  
- 📱 **Fully Responsive** – Optimized for mobile and desktop  
- 🎨 **Modern UI/UX** – Tailwind CSS + Shadcn UI with reusable components  
- ⚡ **Fast State Management** – Zustand for instant UI updates  
- 💾 **Persistent Cart** – Cart state stored locally across sessions  

---

## 🛠 Tech Stack

<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
  <img height="55" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s" />
  <img height="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" />
  <img height="55" src="https://ui.shadcn.com/apple-touch-icon.png" />
</div>

---

## 📂 Project Structure

```

/
├── app/                  # App Router pages & layouts
│   ├── checkout/         # Checkout flow pages
│   ├── products/         # Product pages
│   ├── success/          # Payment success page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── carousel.tsx      # Product image carousel
│   ├── navbar.tsx        # Navigation bar
│   ├── product-card.tsx  # Product listing card
│   └── ...
├── lib/                  # Helpers, utils, API configs
├── public/               # Static assets
├── store/                # Zustand state management
│   └── cart-store.ts     # Shopping cart store logic
└── ...

````

---

## ⚙️ Installation

1. **Clone**

```bash
git clone <repository-url>
cd ecommerce
````

2. **Install Dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. **Run Dev Server**

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Cart Management (Zustand)

The cart store includes the following methods:

* `addItem` – Add item or increase quantity
* `removeItem` – Decrease quantity or remove if zero
* `clearCart` – Remove all items

---

## ⚡ Deployment

Build for production:

```bash
npm run build
```

Run production:

```bash
npm start
```

Or deploy to **Vercel** for instant hosting.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file.

---

## 📚 Useful Resources

* [https://nextjs.org/docs](https://nextjs.org/docs)
* [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* [https://stripe.com/docs](https://stripe.com/docs)
* [https://ui.shadcn.com/](https://ui.shadcn.com/)

---

