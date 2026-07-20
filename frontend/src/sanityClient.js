import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// 1. Connect to your Sanity database
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false, // Speeds up loading by caching images globally
  apiVersion: '2023-01-01',
})

// 2. Helper function to generate usable image URLs from Sanity's raw data
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)