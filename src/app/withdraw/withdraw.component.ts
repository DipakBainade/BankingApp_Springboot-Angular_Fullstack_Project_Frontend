import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  id:number=0;
  account:Account = new Account();

  constructor(private accountService:AccountService,private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data =>{
      this.account=data;
    })
  }

  successMessage="";
  errorMessage="";

  onSubmit(){
    if(this.isValidAmount(this.account.balance)){
     this.accountService.withdraw(this.id, this.account.balance).subscribe(data =>{
      this.account=data;
      this.successMessage="Withdraw Successfully...!"

      setTimeout(()=> {
        this.router.navigate(['/accounts'])
      }, 1000);


      
     })

   
    } else if(this.account.balance>=10000000){
      this.errorMessage="Amount must be less than 1 Crore"
      setTimeout(()=>{
        this.errorMessage=""
      }, 1000);

  }
  else{
       this.errorMessage="Invalid amount. Please enter valid amount"
      
       setTimeout(()=> {
         this.errorMessage=""
      }, 1000);
 
      }
}

  isValidAmount(amount:number):boolean{
     return amount>0 && amount<10000000
  }

}
