import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe"

export default async function Products(){
    const products = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 100,
    });
    return(
        <div className="pb-8">
            <h1 className="text-3xl font-bold leading-none tracking-tight mb-8 text-black">All Products</h1>
            <ProductList products={products.data} />
        </div>
    )
}