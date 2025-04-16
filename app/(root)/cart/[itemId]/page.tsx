import CartAddItem from './cart-add-item';

export default function CartItemPage({ params }: { params: { itemId: string } }) {
  return <CartAddItem itemId={params.itemId} />;
}
