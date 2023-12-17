import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-image': "url('../../public/hero-bg.png')",
        'premium-upgrade-bg-image': "url('../../public/premium-bg.png')",
        'testimonial-bg-image': "url('../../public/testimonial-bg.png')",
        'portfolio-stats-bg-image': "url(../../public/portfolio-stats-bg.png)",
        'footer-bg-image': "url('../../public/footer-bg.png')",
      },
      gridTemplateColumns: {
        'products-table-header': "48% 20% 20% 10%",
        'products-table': "50% 20% 20% 10%"
      }
    },
  },
  plugins: [nextui()],
}
export default config
