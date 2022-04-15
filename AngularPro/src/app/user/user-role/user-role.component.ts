import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserRoleModel } from './user-role.model';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {
userModel:UserRoleModel=new UserRoleModel()
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getUserData(){
    // this.userModel.roleId = ''
this.userService.getUserData(this.userModel).subscribe(data=>{

})
  }
}
