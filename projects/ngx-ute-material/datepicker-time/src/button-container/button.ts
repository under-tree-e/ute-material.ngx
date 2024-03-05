import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: "time-button",
    standalone: true,
    imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: "button.html",
    styleUrls: ["button.scss"],
})
export class TimeButton implements OnChanges {
    @Input() public block: string[] = [];
    @Input() public array: string[] = [];
    @Input() public underline: boolean = false;
    @Input() public step: number = 1;
    @Input() public currentIndex: number = 0;
    @Input() public infiniteScroll: boolean = true;
    @Output() public onChange: EventEmitter<number> = new EventEmitter<number>();

    public inputblock: boolean = false;
    public currentValue: string = "";

    constructor() {}

    /**
     * Init items
     */
    ngAfterViewInit(): void {
        this.currentValue = this.array[this.currentIndex];
        this.inputblock = this.array.length === 2 ? true : false;
    }

    /**
     * Reculculate position when change index at UteDatepickerTime
     * @param changes - SimpleChanges interface
     */
    ngOnChanges(changes: SimpleChanges) {
        if (changes && Object.keys(changes).some((change: any) => change === "currentIndex")) {
            this.currentValue = this.array[this.currentIndex];
        }
    }

    /**
     * Detect scroll action
     * @param event - Dom event
     */
    public onWheel(event: any) {
        this.onClick(event.deltaY > 0 ? false : true);
    }

    /**
     * Detect click action
     * @param side - Button side
     */
    public onClick(side: boolean) {
        if (side) {
            if (this.currentIndex != this.array.length - 1) {
                this.currentIndex += 1;
            } else if (this.infiniteScroll) {
                this.currentIndex = 0;
            }
        } else {
            if (this.currentIndex != 0) {
                this.currentIndex -= 1;
            } else if (this.infiniteScroll) {
                this.currentIndex = this.array.length - 1;
            }
        }
        this.currentValue = this.array[this.currentIndex];
        this.onChange.emit(this.currentIndex);
    }

    /**
     * Detect input change action
     * @param event - Dom event
     */
    public onInput(event: any) {
        this.currentIndex = this.array.map((item: string) => parseInt(item)).indexOf(Math.floor(parseInt(event.target.value) / this.step) * this.step);
        this.currentValue = this.array[this.currentIndex];
        this.onChange.emit(this.currentIndex);
    }

    /**
     * Check if value is allow to select
     * @returns boolean status
     */
    public checkValue(): boolean {
        return this.block.some((bl: string) => bl === this.array[this.currentIndex]) ? true : false;
    }

    /**
     * Check if button can be clicked
     * @param side - Button side
     * @returns boolean status
     */
    public getDisabled(side: boolean): boolean {
        if (side) {
            if (this.currentIndex === this.array.length - 1) {
                return true;
            } else if (this.infiniteScroll) {
                return false;
            }
        } else {
            if (this.currentIndex === 0) {
                return true;
            } else if (this.infiniteScroll) {
                return false;
            }
        }
        return false;
    }
}
