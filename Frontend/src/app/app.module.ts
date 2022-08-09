import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { ProductCompareComponent } from './product-compare/product-compare.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { RetailerComponent } from './retailer/retailer.component';
import { IndexComponent } from './retailer/index/index.component';
import { ViewComponent } from './retailer/view/view.component';
import { CreateComponent } from './retailer/create/create.component';
import { EditComponent } from './retailer/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { ProductdescComponent } from './productdesc/productdesc.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    LoginComponent,
    ProductCompareComponent,
    UserDetailsComponent,
    UserRegisterComponent,
    ForgotPasswordComponent,
    CartComponent,
    routingComponents,
    CategoriesComponent,
    RetailerComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    RegisterUserComponent,
    AddproductComponent,
    ProductComponent,
    UserdataComponent,
    ProductdescriptionComponent,
    UserComponent,
    AdminComponent,
    SellerComponent,
    ProductdescComponent,
    ProductDetailsComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
