import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
    selector:'sh-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    constructor(private productService: ProductService){
    }

    productPanelHeading: string = 'Product List';
    showImage: boolean = false;
    products: IProduct[] = [];
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

    ngOnInit(): void{
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}
