import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

 account:Account = new Account();

 accountCreate=false;


constructor(private accountService:AccountService, private router:Router){}

    saveAccount(){


      this.accountService.createAccount(this.account).subscribe(data=>{

      console.log(data);

      this.accountCreate=true;
      
      setTimeout(() =>{
        this.goToAccountList();
      }, 2000);

     

      })
    }

      onSubmit() {
    // console.log('Form submitted:', this.account);
    // You can send this.account to your service to save to backend
    this.saveAccount();
  }
  
  goToAccountList()
  {
    this.router.navigate(['/accounts'])
  }


}
