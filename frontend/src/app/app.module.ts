import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		// components
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NavComponent,
		HomeComponent,
		ProductCrudComponent,
		ProductCreateComponent,

		// directives
		RedDirective,
		ForDirective,
		ProductReadComponent,
		ProductUpdateComponent,
		ProductDeleteComponent,

		// pipes
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,

		// material
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
