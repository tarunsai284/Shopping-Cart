import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector:'sh-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    productPanelHeading: string = 'Product List';
    showImage: boolean = false;
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
    ]
    filteredProducts: IProduct[] = this.products;    
    _search: string;
    get search(): string {
        return this._search;
    }
    set search(value: string) {
        this._search = value;
        this.filteredProducts = this._search ? this.performFilter(this._search.toLocaleLowerCase()) : this.products;
    }
    toggleImage(){
        this.showImage = !this.showImage;
    }
    performFilter(search: string){
        return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(search)!= -1);
    }
}
