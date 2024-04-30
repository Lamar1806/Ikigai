import Stripe from 'stripe';

const stripe = new Stripe(process.env.NX_STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Define interfaces for function parameters where needed
interface ProductParams {
  name: string;
  description: string;
}
export const createProduct = async ({ name, description }: ProductParams) => {
  const product = await stripe.products.create({
    name,
    description,
  });
  return product;
};

export const getProduct = async (productId: string) => {
  const product = await stripe.products.retrieve(productId);
  return product;
};

interface UpdateProductParams {
  productId: string;
  newName: string;
  newDescription: string;
}
export const updateProduct = async ({
  productId,
  newName,
  newDescription,
}: UpdateProductParams) => {
  const updatedProduct = await stripe.products.update(productId, {
    name: newName,
    description: newDescription,
  });
  return updatedProduct;
};

export const deleteProduct = async (productId: string) => {
  const deletedProduct = await stripe.products.del(productId);
  return deletedProduct;
};

// async function manageProducts() {
//   try {
//       // Create a product
//       const createdProduct = await createProduct('Pro Plan', 'Advanced subscription plan with additional features');
//       console.log('Product Created:', createdProduct);

//       // Retrieve the product
//       const retrievedProduct = await getProduct(createdProduct.id);
//       console.log('Product Retrieved:', retrievedProduct);

//       // Update the product
//       const updatedProduct = await updateProduct(createdProduct.id, 'Pro Plan Updated', 'Updated description');
//       console.log('Product Updated:', updatedProduct);

//       // Delete the product
//       const deletedProduct = await deleteProduct(createdProduct.id);
//       console.log('Product Deleted:', deletedProduct);
//   } catch (error) {
//       console.error('Error managing products:', error);
//   }
// }

// manageProducts();
