
# 🌐 E-Commerce Application

![Tech Neon Divider](https://img.shields.io/badge/Tech-Cyberpunk-ff00ff?style=for-the-badge&logo=appveyor)

A **cutting-edge, full-stack e-commerce platform** built with **Next.js**, **React**, and **TypeScript**. Explore products, manage your cart, and checkout seamlessly with Stripe — all wrapped in a **neon cyberpunk vibe**.

**🔗 Live Demo:** [E-shemeta](https://eshemeta.vercel.app/)

## 🚀 Features

- **🛒 Product Catalog:** Browse through an immersive collection of products with detailed views
- **🛍️ Shopping Cart:** Add/remove items and manage quantities effortlessly
- **💳 Checkout Process:** Secure payments via Stripe integration
- **📱 Responsive Design:** Perfectly optimized for desktop and mobile devices
- **🎨 Modern UI:** Built with Tailwind CSS, Shadcn UI, and custom reusable components
- **⚡ State Management:** Powered by Zustand for ultra-fast, reactive cart updates
- **💾 Persistent Cart:** Cart data survives page reloads for seamless shopping

## 🛠 Tech Stack

<div style="display: flex; grid-template-r: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />&nbsp; 
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />&nbsp; 
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />&nbsp; 
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />&nbsp; 
  <img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg" />&nbsp; 
<img height="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png" />  
<img width="55" src="https://images.seeklogo.com/logo-png/51/2/shadcn-ui-logo-png_seeklogo-519786.png" />
<img height="55" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkq-qvtMS8B3VEYbUtIkDb6Kfo2X1fwdj3RQ&s" />
 


</div>

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

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ecommerce
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to explore your neon marketplace.

## 🧩 Cart Management

The application uses **Zustand** with persistent storage for fast and reactive cart updates:

* `addItem`: Add an item or increment quantity
* `removeItem`: Decrease quantity or remove item if zero
* `clearCart`: Empty the cart

## ⚡ Deployment

1. **Build the production version:**

   ```bash
   npm run build
   ```

2. **Start production server:**

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
* [Shadcn UI](https://ui.shadcn.com/)
