import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuthentication: FirebaseAuthentication, private name:String, private email:String, private password:String) { }



  async sendEmail():Promise<void>{}
  async register():Promise<User>{}
  async login(email:string, password:string):Promise<User>{
    try {
      const { user } = await this.firebaseAuthentication.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log(error)
    }
  }



  async logout(): Promise<void>{

    try {
      await this.firebaseAuthentication.signOut();
    } catch (error) {
      console.log(error)
    }
  }

   
}
