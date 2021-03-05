import { Injectable } from '@angular/core';
import { FirebaseService } from 'firebase'
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseService:FirebaseService) { }

   
}
