import Stripe from 'stripe';

const stripe = new Stripe(process.env.NX_STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

interface ProductParams {
  name: string;
  description: string;
}

export const createProduct = async ({ name, description }: ProductParams) => {
  console.log(
    'Creating product with name:',
    name,
    'and description:',
    description
  );
  const product = await stripe.products.create({
    name,
    description,
  });
  console.log('Product created:', product);
  return product;
};

export const getProduct = async (productId: string) => {
  console.log('Retrieving product with ID:', productId);
  const product = await stripe.products.retrieve(productId);
  console.log('Product retrieved:', product);
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
  console.log(
    'Updating product with ID:',
    productId,
    'to new name:',
    newName,
    'and new description:',
    newDescription
  );
  const updatedProduct = await stripe.products.update(productId, {
    name: newName,
    description: newDescription,
  });
  console.log('Product updated:', updatedProduct);
  return updatedProduct;
};

export const deleteProduct = async (productId: string) => {
  console.log('Deleting product with ID:', productId);
  const deletedProduct = await stripe.products.del(productId);
  console.log('Product deleted:', deletedProduct);
  return deletedProduct;
};
