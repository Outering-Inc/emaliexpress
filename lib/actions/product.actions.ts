'use server'

import { connectToDatabase } from '@/lib/db'
import Product  from '@/lib/db/models/product.model'

// GET ALL PRODUCTS FOR ADMIN
export async function getAllProductsForAdmin(){

  await connectToDatabase()

  const categories = await Product.find({ isPublished: true }).distinct(
    'category'
)
  return categories
}

export async function getAllCategories() {
    await connectToDatabase()
    const categories = await Product.find({ isPublished: true }).distinct(
      'category'
    )
    return categories
  }

export async function getProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string
  limit?: number
}) {
  await connectToDatabase()
  const products = await Product.find(
    { tags: { $in: [tag] }, isPublished: true },
    {
      name: 1,
      href: { $concat: ['/product/', '$slug'] },
      image: { $arrayElemAt: ['$images', 0] },
    }
  )
    .sort({ createdAt: 'desc' })
    .limit(limit)
  return JSON.parse(JSON.stringify(products)) as {
    name: string
    href: string
    image: string
  }[]
}
