

```markdown
# 🌐 E-Commerce Application

![Tech Neon Divider](https://img.shields.io/badge/Tech-Cyberpunk-ff00ff?style=for-the-badge&logo=appveyor)

A **cutting-edge, full-stack e-commerce platform** built with **Next.js**, **React**, and **TypeScript**. Explore products, manage your cart, and checkout seamlessly with Stripe — all wrapped in a **neon cyberpunk vibe**.  

**🔗 Live Demo:** [E-shemeta](https://eshemeta.vercel.app/)

## 🚀 Features
- **🛒 Product Catalog:** Browse through an immersive collection of products with detailed views.  
- **🛍️ Shopping Cart:** Add/remove items and manage quantities effortlessly.  
- **💳 Checkout Process:** Secure payments via Stripe integration.  
- **📱 Responsive Design:** Perfectly optimized for desktop and mobile devices.  
- **🎨 Modern UI:** Built with Tailwind CSS and custom reusable components.  
- **⚡ State Management:** Powered by Zustand for ultra-fast, reactive cart updates.  
- **💾 Persistent Cart:** Cart data survives page reloads for seamless shopping.  

## 🛠 Tech Stack
| Technology | Icon |
|------------|------|
| **Next.js 16** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) |
| **React 19** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| **Tailwind CSS** | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Zustand** | ![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zeit&logoColor=white) |
| **Stripe** | ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white) |
| **Lucide Icons** | ![Lucide](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white) |

## 📂 Project Structure
```

/
├── app/                  # App Router pages and layouts
│   ├── checkout/         # Checkout related pages
│   ├── products/         # Product related pages
│   ├── success/          # Success page after checkout
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── carousel.tsx      # Product image carousel
│   ├── navbar.tsx        # Navigation bar
│   ├── product-card.tsx  # Product card component
│   └── ...
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── store/                # State management
│   └── cart-store.ts     # Shopping cart store
└── ...

````

## ⚙️ Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce
````

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to explore your neon marketplace.

## 🧩 Cart Management

The application uses **Zustand** with persistent storage for fast and reactive cart updates:

* `addItem`: Add an item or increment quantity
* `removeItem`: Decrease quantity or remove item if zero
* `clearCart`: Empty the cart

## ⚡ Deployment

1. Build the production version:

```bash
npm run build
```

2. Start production server:

```bash
npm start
```

**Or deploy directly to Vercel for instant cyberpunk vibes!**

## 📜 License

MIT License — see the [LICENSE](LICENSE) file for details.

## 💡 Acknowledgments & Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Stripe Documentation](https://stripe.com/docs)

## 🌌 Futuristic Cyberpunk Notes

* Neon gradients and glowing badges throughout the project
* Optimized for speed and smooth UX
* Built for **modern devs** who love clean + cyber aesthetics
* Ready to scale with hybrid state + auto translations (Amharic & English)

```

---

```
