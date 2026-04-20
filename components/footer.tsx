"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">E-ሸመታ</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted Ethiopian e-commerce platform for quality products and exceptional service.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+251 911 234 567</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">support@esmeta.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=electronics" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products?category=fashion" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/products?category=beauty" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Beauty & Health
                </Link>
              </li>
              <li>
                <Link href="/products?category=sports" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sports & Outdoors
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for exclusive offers
                </label>
                <div className="flex space-x-2">
                  <input
                    id="newsletter"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Follow us on social media</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://twitter.com/esmeta" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com/esmeta" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12zm0-1.44c4.817 0 8.544-3.099 8.544-8.544 0-4.816-3.099-8.544-8.544-4.816 0-8.544 3.099-8.544 8.544zm-4.944 7.688c.329-.428.658-.9.958-1.351 1.351-.693.393-1.351 1.351s-1.351-.958-1.351-1.351c-.693 0-1.351.393-1.351 1.351v.014c-.001.027-.001.053-.001.08zm6.528-7.545c.848 0 1.534.286 1.534.646 0 .359-.686.646-1.534.646s-1.534-.287-1.534-.646c-.848 0-1.534-.287-1.534-.646 0-.359.686-.646 1.534-.646.848 0 1.534.286 1.534.646zm-3.195 9.876c-.576-.197-1.134-.434-1.657-.717-.523.283-1.081.523-1.657.717.576.197 1.134.434 1.657.717.523-.283 1.081-.523 1.657-.717zm-4.944-7.545c-.848 0-1.534-.286-1.534-.646 0-.359.686-.646 1.534-.646.848 0 1.534.286 1.534.646z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/esmeta" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/esmeta" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 E-ሸመታ. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
