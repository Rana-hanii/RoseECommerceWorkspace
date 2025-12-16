import { ProductData } from "../../shared/interfaces/products/products-res"

export function getBadge(product:ProductData):string[]{ 
  
        const badges:string[]=[]
  
        if(product.createdAt.includes('2025')){
          badges.push('new')
        }
        if(product.sold && product.sold >= 100){
         badges.push('hot')
        }
  
        if(product.quantity < 1){
          badges.push('out of stock')
        }
  
        return badges
      }