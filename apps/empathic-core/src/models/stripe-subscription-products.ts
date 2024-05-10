import Stripe from 'stripe';

const stripe = new Stripe(process.env.NX_STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

interface CreateSubscriptionProductParams {
  productName: string;
  description: string;
  amount: number; // Amount should be in the smallest currency unit (e.g., cents)
  currency: string;
  interval: 'day' | 'week' | 'month' | 'year'; // Restrict interval to valid recurring options
}

export const createSubscriptionProduct = async ({
  productName,
  description,
  amount,
  currency,
  interval,
}: CreateSubscriptionProductParams) => {
  console.log('Creating subscription product:', productName);
  const product = await stripe.products.create({
    name: productName,
    description,
  });
  console.log('Product created:', product);

  console.log('Creating price for product:', product.id);
  const price = await stripe.prices.create({
    unit_amount: amount,
    currency,
    recurring: { interval },
    product: product.id,
  });
  console.log('Price created:', price);

  return { product, price };
};

export const getSubscriptionProduct = async (productId: string) => {
  console.log('Retrieving subscription product with ID:', productId);
  const product = await stripe.products.retrieve(productId);
  const prices = await stripe.prices.list({
    product: productId,
  });
  console.log('Product details:', product, 'Prices:', prices);

  return { product, prices };
};

interface UpdateProductParams {
  name?: string;
  description?: string;
  active?: boolean; // This field can be used to archive/unarchive a product
  metadata?: Record<string, string>; // Optional metadata that can be attached to the product
}

export const updateSubscriptionProduct = async (
  productId: string,
  updates: UpdateProductParams
) => {
  console.log('Updating subscription product with ID:', productId);
  const updatedProduct = await stripe.products.update(productId, updates);
  console.log('Product updated:', updatedProduct);
  return updatedProduct;
};

export const deleteSubscriptionProduct = async (productId: string) => {
  console.log('Deleting subscription product with ID:', productId);
  const deletedProduct = await stripe.products.del(productId);
  console.log('Product deleted:', deletedProduct);
  return deletedProduct;
};
