'use client'

import useCartStore from '@/hooks/use-cart-store'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const { cart } = useCartStore()

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>

      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='space-y-4'>
          {cart.items.map((item, index) => (
            <li key={index} className='border p-4 rounded'>
              <div className='font-medium'>{item.name}</div>
              <div>Qty: {item.quantity}</div>
              <div>Price: ${item.price}</div>
              <div>Total: ${item.price * item.quantity}</div>
            </li>
          ))}
        </ul>
      )}

      <div className='mt-6'>
        <p className='text-lg font-semibold'>Total Price: ${cart.totalPrice}</p>
        <Button className='mt-4'>Proceed to Checkout</Button>
      </div>
    </div>
  )
}
