import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuthentication: FirebaseAuthentication, private name:String, private email:String, private password:String) { }



  // async sendEmail():Promise<void>{

  //   try {
  //     return (await this.firebaseAuthentication.onAuthStateChanged).sendEmailVerification();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async loginWithGoogle():Promise<User>{
  //   try {
  //     const {user} = await this.firebaseAuthentication.signInWithGoogle(new auth.GoogleAuthProvider())
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async register(email:string, password:string):Promise<User>{
      try {
        const {user} = await this.firebaseAuthentication.createUserWithEmailAndPassword(email, password);
       // await this.sendEmail();
        return user;
      } catch (error) {
        console.log(error)
      }
  }



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
