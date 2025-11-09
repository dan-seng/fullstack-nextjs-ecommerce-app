# E-Commerce Application

A modern, full-stack e-commerce application built with Next.js, React, and TypeScript. This application features product listings, a shopping cart, and checkout functionality with Stripe integration.

## Features

- **Product Catalog**: Browse through a collection of products with detailed views
- **Shopping Cart**: Add/remove items and manage quantities
- **Checkout Process**: Secure payment processing with Stripe
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and custom components
- **State Management**: Utilizes Zustand for efficient state management
- **Persistent Cart**: Cart data persists across page refreshes

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **State Management**: Zustand
- **Icons**: Lucide Icons, Hero Icons
- **Payment Processing**: Stripe
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Webpack (via Next.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                  # App router pages and layouts
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
```

## Cart Management

The application uses Zustand for state management with persistent storage for the shopping cart. The cart store provides the following actions:

- `addItem`: Add an item to the cart or update quantity if it exists
- `removeItem`: Decrease item quantity or remove if quantity reaches zero
- `clearCart`: Remove all items from the cart

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key (server-side only)

## Testing

Run the linter:
```bash
npm run lint
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
