import { Component, OnInit, ElementRef } from '@angular/core';
import { MainService } from "../../services";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

    selectOptions = {header: '请选择性别'};

    params = {
        "base64" : null,
        "imageType" : "",
        "access_token" : sessionStorage.getItem('access_token')
    };

    my_info = {};

    // 上传的图片src
    uploadimg=null;
    // 经过裁剪的图片src
    cropimg = "";
    // 裁剪区域的位置
    position = {
        'left':  '100px',
        'top': '200px'
    };
    // 移动的相对位置
    startX = null;
    startY = null;
    endX = null;
    endY = null;

  constructor(
      private el:ElementRef,
      private service:MainService
  ) { }

  ngOnInit() {
    this.getMyInformation();
  }

  // 获取我的资料
  getMyInformation(){
    let params = {
      "id" : sessionStorage.getItem('user_id'),
      "access_token" : sessionStorage.getItem('access_token')
    };
    this.service.getData({"personDetail":params}).subscribe(res=>{
        if (res['personDetail'].rsp_code == 1) {
            this.my_info = res['personDetail'];
        }
    });
  }

  // 保存信息
  saveMyInfo(){
      let params = {
          "name" : this.my_info['customerName'],
          "sex" : this.my_info['sex'],       // 1：男 2:女
          "mobile" : this.my_info['mobile'],
          "address" : this.my_info['address'],
          "headImg" : this.my_info['headImg'],
          "id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"savaPersonDetail":params}).subscribe(res=>{
          console.log("我的信息",res);
          if (res['savaPersonDetail'].rsp_code == 1) {
              this.getMyInformation();
          }
      });
  }

  // 上传图片
  uploadImg(evt){
      let fileList: FileList = evt.target.files;
      let reader = new FileReader();
      try {
          // 将文件以Data URL形式进行读入页面
          reader.readAsDataURL(fileList[0]);
          this.params.imageType = (fileList[0].type).replace("image/","");
          let $this = this;
          reader.onload = async function(){
              // params.base64  = await this.result;
              $this.uploadimg = await this.result;
          }
      }catch (e) {/*忽略错误，继续进行*/}
  }

    // 对图片进行裁剪
    async tailor() {
        // 创建一个画布，取得图片的DOM
        let Canvas = document.createElement('canvas');
        let img = this.el.nativeElement.querySelector('#uploadimg');

        // 获取裁剪区域的DOM
        let cropArea = this.el.nativeElement.querySelector('#cropArea');
        // console.log('裁剪区域宽高：',cropArea.offsetWidth,cropArea.offsetHeight);
        // console.log('裁剪区域位置：',this.position['left'],this.position['top']);

        // 设置画布大小
        Canvas.width = cropArea.offsetWidth;
        Canvas.height = cropArea.offsetHeight;

        //获取图片原始大小
        let _size = this.getNaturalSize(this.uploadimg);
        // console.log('图片原始宽高：',_size[0],_size[1]);
        // console.log('图片实际宽高：',img.width,img.height);

        // 裁剪区域相对于实际图片的位置
        let sx = (parseInt(this.position['left'])/img.width)*_size[0];
        let sy = (parseInt(this.position['top'])/img.height)*_size[1];

        // 裁剪区域相对于实际宽高的大小
        let sw = (cropArea.offsetWidth/img.width)*_size[0];
        let sh = (cropArea.offsetHeight/img.height)*_size[1];

        // 绘制图片参数
        // img	规定要使用的图像、画布或视频。
        // sx	可选。开始剪切的 x 坐标位置。
        // sy	可选。开始剪切的 y 坐标位置。
        // sw	可选。被剪切图像的宽度。
        // sh	可选。被剪切图像的高度。
        // dx	在画布上放置图像的 x 坐标位置。
        // dy	在画布上放置图像的 y 坐标位置。
        // dw	可选。要使用的图像的宽度。（伸展或缩小图像）
        // dh	可选。要使用的图像的高度。（伸展或缩小图像）
        Canvas.getContext('2d').drawImage(img, sx,sy, sw,sh, 0, 0,cropArea.offsetWidth,cropArea.offsetHeight);
        this.params.base64 = await  Canvas.toDataURL('image/png');
        this.service.getData({"uploadImage":this.params}).subscribe(res=>{
            console.log("上传图片",res);
            if (res['uploadImage'].rsp_code == 1) {
                this.my_info['headImg'] = res['uploadImage'].imagePath;
                console.log(this.my_info['headImg']);
                this.uploadimg = null;
            }
        });
    }

    // touch事件之开始点击
    touchstart(evt){
        evt.preventDefault();
        this.startX = evt.changedTouches[0].clientX;    //获取点击点的X坐标
        this.startY = evt.changedTouches[0].clientY;    //获取点击点的Y坐标
    }
    // touch事件之结束
    touchend(evt){
        evt.preventDefault();
        this.endX = evt.changedTouches[0].clientX;    //获取点击点的X坐标
        this.endY = evt.changedTouches[0].clientY;    //获取点击点的Y坐标
    }
    // touch事件之移动
    touchmove(evt){
        evt.preventDefault();
        let moveX = evt.changedTouches[0].clientX;    //获取点击点的X坐标
        let moveY = evt.changedTouches[0].clientY;    //获取点击点的Y坐标

        // 计算此次移动相对上一个位置的距离
        let offsetX = moveX-this.startX;
        let offsetY = moveY-this.startY;
        // console.log('初始位置：',this.startX,this.startY);
        // console.log('移动位置：',moveX,moveY);
        // console.log('移动距离：',offsetX,offsetY);

        // 保存当前位置为下一次计算时的初始位置
        this.startX = evt.changedTouches[0].clientX;    //获取点击点的X坐标
        this.startY = evt.changedTouches[0].clientY;    //获取点击点的Y坐标

        // 获取图片的实际大小
        let img = this.el.nativeElement.querySelector('#uploadimg');
        // 对裁剪框进行移动;
        this.position['left'] = (parseInt(this.position['left'])+offsetX) > 0 ? (parseInt(this.position['left'])+offsetX)+"px" : "0";
        this.position['left'] = (parseInt(this.position['left'])+evt.srcElement.offsetWidth) <= img.width ? this.position['left'] : (img.width-evt.srcElement.offsetWidth)+"px";
        this.position['top'] = (parseInt(this.position['top'])+offsetY) > 0 ? (parseInt(this.position['top'])+offsetY)+"px" : "0";
        this.position['top'] = (parseInt(this.position['top'])+evt.srcElement.offsetHeight) <= img.height ? this.position['top'] : (img.height-evt.srcElement.offsetHeight)+"px";
        // console.log('选取区域当前位置：',this.position['left'],this.position['top']);

    }

    // 获取图片原始大小
    getNaturalSize(src) {
        let image = new Image();
        image.src = src;
        let naturalWidth = image.width;
        let naturalHeight = image.height;
        return [naturalWidth,naturalHeight];
    }
}
