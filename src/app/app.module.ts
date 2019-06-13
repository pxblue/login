import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule, MatListModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot/forgot.component';
import { AuthGuard } from './guards/auth.guard';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appRoutes } from './app.routing';
@NgModule({
  entryComponents: [],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule,
    MatChipsModule, MatToolbarModule, MatIconModule, MatListModule, RouterModule.forRoot(appRoutes), IonicModule.forRoot(), BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MatIconRegistry, AppService, AuthGuard
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent, RegistrationComponent, ForgotPasswordComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }