import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations:[
  AppComponent
  ],
  imports:[
    BrowserModule,
    AngularFireModule.initializeApp(environment)
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
