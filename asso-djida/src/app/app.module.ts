import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminAccueilComponent } from './admin/admin-accueil/admin-accueil.component';
import { AdminAddArticleComponent } from './admin/admin-add-article/admin-add-article.component';
import { AdminAddCagnotteComponent } from './admin/admin-add-cagnotte/admin-add-cagnotte.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CagnottesComponent } from './cagnottes/cagnottes.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { SingleCagnotteComponent } from './single-cagnotte/single-cagnotte.component';
import { PanierComponent } from './panier/panier.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr";
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import  {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {  FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { UploadComponent } from './upload/upload.component';
import { UploadvideoComponent } from './upload/uploadvideo/uploadvideo.component';
import { AdminAdherentComponent } from './admin/admin-adherent/admin-adherent/admin-adherent.component';
import { AdminAddAdherentComponent } from './admin/admin-adherent/admin-add-adherent/admin-add-adherent.component';
import { ModifCagnotteComponent } from './modif-cagnotte/modif-cagnotte.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { ModifAdherentComponent } from './modif-adherent/modif-adherent.component';
import { AproposComponent } from './apropos/apropos.component';
import { CguComponent } from './cgu/cgu.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes=[
  {path: '',component:AcceuilComponent},
  {path: 'accueil',component:AcceuilComponent},
  {path: 'article',component:ArticleComponent},
  {path: 'article/:id',component:SingleArticleComponent},
  {path: 'cagnottes',component:CagnottesComponent},
  {path: 'cagnottes/:id',component:SingleCagnotteComponent},
  {path:'pay',component:PaypalComponent},
  {path:'panier',component:PanierComponent},
  {path:'admin',component:AdminAccueilComponent},
  {path:'admin/add/cagnotte',component:AdminAddCagnotteComponent},
  {path:'admin/add/article',component:AdminAddArticleComponent},
  {path:'admin/modifier/cagnotte/:id',component:ModifCagnotteComponent},
  {path:'admin/modifier/article/:id',component:ModifArticleComponent},
  {path:'admin/modifier/adherent/:id',component:ModifAdherentComponent},
  {path:'connexion',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent},
  {path:'cgu',component:CguComponent},
  {path:'admin/adherent/list',component:AdminAdherentComponent},
  {path:'admin/add/adherent',component:AdminAddAdherentComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',pathMatch:'full', redirectTo:'not-found'},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    CagnottesComponent,
    ArticleComponent,
    SingleArticleComponent,
    SingleCagnotteComponent,
    PaypalComponent,
    AdminAccueilComponent,
    AdminAddCagnotteComponent,
    AdminAddArticleComponent,
    PanierComponent,
    LoginComponent,
    UploadComponent,
    UploadvideoComponent,
    AdminAdherentComponent,
    AdminAddAdherentComponent,
    ModifCagnotteComponent,
    ModifArticleComponent,
    ModifAdherentComponent,
    AproposComponent,
    CguComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
registerLocaleData(localeFr, "fr");
