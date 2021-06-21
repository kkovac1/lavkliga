import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
    imports: [
        BrowserModule,
        DividerModule,
        TabMenuModule,
        MenubarModule,
        CardModule,
        TableModule,
        MenuModule,
        ButtonModule,
        GalleriaModule
    ],
    exports: [
        BrowserModule,
        DividerModule,
        TabMenuModule,
        MenubarModule,
        CardModule,
        TableModule,
        MenuModule,
        ButtonModule,
        GalleriaModule
      ],
    providers: [
    ]
  })

  export class PrimengModule { }