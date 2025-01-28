import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class AppServices{
    //getName = new EventEmitter<string>();
    getName = new Subject<string>();

    onSubmit(data: string){
        this.getName.next(data)
    }
}