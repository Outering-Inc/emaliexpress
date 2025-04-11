/* eslint-disable @typescript-eslint/no-explicit-any */
import data from '@/lib/data'
import { connectToDatabase } from '.'
import * as ProductModel from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

// Load environment variables
loadEnvConfig(cwd())

// Extract the default export properly for ES module + tsx compatibility
const Product = ProductModel.default

const main = async () => {
  try {
    const { products } = data

    await connectToDatabase(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({
      createdProducts,
      message: 'Seeded database successfully',
    })

    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to Seed database')
  }
}

main()
