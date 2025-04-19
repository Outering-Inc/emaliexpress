export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'EmaliExpress '
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || 'Spend less,enjoy more.'  
export const APP_DESCRIPTION = 
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 
    'Marketplace app,build with Next.js, Tailwind CSS, and MongoDB'  

export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || `Copyright © ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.`    

export const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE || 10)   
export const FREE_SHIPPING_PRICE = Number(process.env.NEXT_PUBLIC_FREE_SHIPPING_PRICE || 35)  