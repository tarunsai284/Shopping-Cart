import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector:'sh-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() starRating: number;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.starRating * 86/5;      
    }
    
}