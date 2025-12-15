import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Antachia Olive Oil',
    short_name: 'Antachia',
    description: 'Olive oil crafted with care in Ethiopia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/imgs/olive.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}
