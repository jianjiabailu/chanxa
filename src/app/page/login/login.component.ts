import { Component } from '@angular/core';
import { MainService } from '../../services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    form_data= {
        "mobile": localStorage.getItem('mobile') || null,
        "password":localStorage.getItem('password') || null,
        "userType":1,
    };

    is_remember = localStorage.getItem('mobile') && localStorage.getItem('password');

    constructor(private service:MainService) {}

    login(){
        this.isRemember();
        this.service.getData({"login":this.form_data}).subscribe(res=>{
            if (res['login']['rsp_code'] == '1') {
                sessionStorage.setItem('isLoggedIn',"true");
                sessionStorage.setItem('access_token',res['login']['access_token']);
                sessionStorage.setItem('user_id',res['login']['id']);
                this.service.router.navigate(['tabs']);
            }
        });
    }

    isRemember(){
        if (this.is_remember){
            localStorage.setItem('mobile',this.form_data.mobile);
            localStorage.setItem('password',this.form_data.password);
        }else {
            localStorage.removeItem('mobile');
            localStorage.removeItem('password');
        }
    }

}
