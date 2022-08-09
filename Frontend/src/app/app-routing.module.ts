import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductCompareComponent } from './product-compare/product-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { ProductdescComponent } from './productdesc/productdesc.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateComponent } from './retailer/create/create.component';
import { EditComponent } from './retailer/edit/edit.component';
import { IndexComponent } from './retailer/index/index.component';
import { ViewComponent } from './retailer/view/view.component';
import { SellerComponent } from './seller/seller.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'',component: HomepageComponent},
  {path:'addproduct',component: AddproductComponent },
  {path:'users',component: RegisterUserComponent},
  {path:'user-register',component: UserRegisterComponent},
  {path:'compare',component: ProductCompareComponent},
  {path:'products',component: ProductPageComponent},
  {path:'products/:id',component: ProductDetailsComponent},
  {path:'cart-page', component: CartComponent},
  {path:'forgotpassword', component: ForgotPasswordComponent},
  {path:'userdetails', component: UserDetailsComponent},
  {path:'categories', component: CategoriesComponent},
  { path: 'retailer', redirectTo: 'retailer/index', pathMatch: 'full'},
  { path: 'retailer/index', component: IndexComponent },
  { path: 'retailer/:retailerId/view', component: ViewComponent },
  { path: 'retailer/create', component: CreateComponent },
  { path: 'retailer/:retailerId/edit', component: EditComponent },
  {path:'userdesc', component: UserComponent},
  {path:'admindesc', component: AdminComponent},
  {path:'retailerdesc', component: SellerComponent},
  {path:'checkout', component: CheckoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomepageComponent,UserRegisterComponent,
  ProductCompareComponent,ProductPageComponent,CartComponent,
  ForgotPasswordComponent,CategoriesComponent,IndexComponent,CreateComponent,EditComponent,ViewComponent]