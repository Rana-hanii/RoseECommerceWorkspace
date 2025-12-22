import { filterProducts } from './products.state';
import { ProductData } from './../../shared/interfaces/products/products-res';


export function applyAllFilters(products:ProductData[] , filters:filterProducts):ProductData[]{
    let result = [...products]

    if (filters.categoryID?.length) {
        result= result.filter(data=> filters.categoryID?.includes(data.category))
    }

    if(filters.occasionID?.length){
        result = result.filter(data=> filters.occasionID?.includes(data.occasion))
    }
    
    if(filters.lowPrice != null){
        result = result.filter(data => data.priceAfterDiscount >= filters.lowPrice!)
    }

    if(filters.highPrice != null){
        result = result.filter(data => data.priceAfterDiscount <= filters.highPrice!)
    }

    if(filters.minRating != null){
        result = result.filter(data=> data.rateAvg == filters.minRating!)
    }

    if(filters.sorting === 'LOW_TO_HIGH'){
        result = [...result].sort((a,b) => a.priceAfterDiscount - b.priceAfterDiscount)
    }
    if(filters.sorting === 'HIGH_TO_LOW'){
        result = [...result].sort((a,b) => b.priceAfterDiscount - a.priceAfterDiscount)
    }
    
    if (filters.search) {
        const search =filters.search.toLowerCase().trim()
       
         result = result.filter( data => 
                  data.title.toLowerCase().includes(search) || 
                  data.description.toLowerCase().includes(search)
            )
    }
    

    return result
}