import { Component } from '@angular/core';
import {Images} from "../../sources";
import {MainService} from "../../services";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent {

    img = Images;

    type_select = false;

    feedback_type = "";

    types = ["产品问题","支付","其他"];
    content = "";
    mobile = null;

  constructor(private service:MainService) { }

  // 提交意见反馈
  submitFeedback(){
      let params = {
          "user": this.mobile,
          "content": this.content,
          "question_type": this.feedback_type,
          "access_token": sessionStorage.getItem('access_token')
      };
      this.service.getData({"feedback":params}).subscribe(res=>{
          console.log("意见反馈",res);
          if (res["feedback"].rsp_code == 1){
              this.service.ToastBox('您的意见反馈已经提交，谢谢您的建议！');
              this.service.goBack();
          }
      })
  }

}
