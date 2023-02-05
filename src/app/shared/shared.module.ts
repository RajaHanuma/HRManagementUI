import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule
    ],
    exports: [
        FormsModule,
        MaterialModule,
        HttpClientModule
    ]
})

export class SharedModule { }
