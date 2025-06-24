Banking Application - Springboot + Angular Fullstack Working


GitHub links:
Front-End:https://github.com/DipakBainade/BankingApp_Springboot-Angular_Fullstack_Project_Frontend.git

Back-End:https://github.com/DipakBainade/BankingApp_Springboot-Angular_Fullstack_Project_Backend.git

Working:
1.Run the backend project in STS (Spring Tool Suite)
2.We are using MySQL database: Create database bankingapp in MySQL database
3.Project will run on 8085 port: http://localhost:8085
4.Now run the front end project in VS Code. 
5.Open new terminal anad Run the command: npm install
6.Now run the command: ng serve and access project on: http://localhost:4200
7.Access varius mapping by: Using postman
Get Mapping: Access all accounts:
http://localhost:8085/api/accounts
Put Mapping: withdraw amount from account:
http://localhost:8085/api/accounts/2/withdraw
Put Mapping: Deposit amount in account:
http://localhost:8085/api/accounts/2/deposit
Get Mapping: Access single account
http://localhost:8085/api/accounts/1
Delete Mapping: Delete single account
http://localhost:8085/api/accounts/1

8.Using application:
Click on withdraw button to withdraw amount, click on deposit button to deposit amount, click on view button to view particular user account information.



