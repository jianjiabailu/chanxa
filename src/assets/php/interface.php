<?php
//  header("content-type:text/html;charset=utf-8");         //设置编码
  header("Access-Control-Allow-Origin: *");          //防止跨域问题
  error_reporting(E_ALL^E_NOTICE);

  require_once "jssdk.php";

  $jssdk = new JSSDK("wxd2cde7b4ba1cdd6b", "36bf00e2622336a09535701b28108718");//这里改成自己的
  $signPackage = $jssdk->GetSignPackage();

  echo json_encode($signPackage) ;


