import { Component }    from '@angular/core';
import { MainService }  from '../../services'

// 短信发送间隔
const interval = 60;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    form_data = {
        "reg_user" : {
            "mobile" : null,
            "validate_code" : null,
            "password" : null,
            "repassword" : null,
            "userType" : 1
        }
    };
    clock = {
        "on-off" : false,
        "interval" : interval,
        "timer" : null,
        "value" : "获取验证码"
    };
  isAgree = false;

  constructor(private service:MainService) { }

  //  发送验证码
  sendCode(){
      if(!(/^1[34578]\d{9}$/.test(this.form_data.reg_user.mobile))){
          this.service.ToastBox("手机号码有误，请重填");
          return;
      }
      let params = {"mobile" : this.form_data.reg_user.mobile, "type": "10", "userType" : "1"};
      this.service.getData({"sendValidateCode":params}).subscribe(res=>{
        if (res['sendValidateCode']['rsp_code'] == 1) {
          this.timer();
        }
    });
  }

  //  提交表单
  submitForm(){
      this.service.getData(this.form_data).subscribe(res=>{
          console.log(res);
      });
  }

  //  计时器
  timer(){
    let $this =this;
    this.clock["on-off"] = true;
    this.clock.timer = setInterval(()=>{
        $this.clock.interval--;
        if ($this.clock.interval <= 0) {
            clearInterval($this.clock.timer);
            $this.clock = {
                "on-off" : false,
                "interval" : interval,
                "timer" : null,
                "value" : "重新发送"
            };
        }
    },1000)
  }
}
