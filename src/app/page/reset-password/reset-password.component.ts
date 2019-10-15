import { Component }    from '@angular/core';
import { MainService }  from "../../services";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

    form_data = {
        "mobile" : null,
        "validate_code" : null,
        "newPassword" : null,
        "repassword" : null,
        "userType" : 1
    };

    clock = {
        "on-off" : false,
        "interval" : 60,
        "timer" : null,
        "value" : "获取验证码"
    };

    constructor(private service : MainService) { }

//  发送验证码
    sendCode(){
        let params = {"sendValidateCode": {"mobile": this.form_data.mobile, "type": 20, "userType":"1"}};
        this.service.getData(params).subscribe(res=>{
            console.log("发送验证码",res);
            this.timer();
            if (res['sendValidateCode']['rsp_code'] == 1) {
                console.log("验证码发送成功，请查收");
                this.timer();
            }else {
                console.log("发送验证码失败：",res['sendValidateCode']['err_msg']);
            }
        });
    }

    //  提交表单
    submitForm(){
        this.service.getData({"resetPwd" : this.form_data}).subscribe(res=>{
            if (res['resetPwd'].rsp_code == 1){
                this.service.ToastBox('修改成功');
            }
            console.log("重置密码",res);
        });
    }

    //  定时器
    timer(){
        let $this =this;
        this.clock["on-off"] = true;
        this.clock.timer = setInterval(()=>{
            $this.clock.interval--;
            if ($this.clock.interval <= 0) {
                clearInterval($this.clock.timer);
                $this.clock = {
                    "on-off" : false,
                    "interval" : 60,
                    "timer" : null,
                    "value" : "重新发送"
                };
            }
        },1000)
    }
}
