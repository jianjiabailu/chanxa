

// 本地图片的路径
const server = "../../assets";
// const server = "./";

// 网络图片的路径
export const ImgServer = "http://chanxa.f3322.net:8888/templatedH5Images/";

// 统一管理图片地址，在主服务层引入
export const Images = {
    "default" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==",
    "icon":{
        "mobile" : server+"/images/icon/sign_in_mobile-phone.png",
        "password" : server+"/images/icon/icon_mima.png",
        "password_confirm" : server+"/images/icon/icon_mima_confirm.png",
        "verify" : server+"/images/icon/icon_yanzhengma_2.png",
        "qq" : server+"/images/icon/sign_in_qq.png",
        "wx" : server+"/images/icon/wechat_circle.png",
        "sina" : server+"/images/icon/sign_in_micro-blog.png",
        "delete" : server+"/images/icon/sign_in_delete.png",
        "trash" : server+"/images/icon/icon_lajitong.png",
        "trash_blue" : server+"/images/icon/icon_lajitong_theme.png",
        "setting" : server+"/images/icon/my_set_up.png",
        "edit" : server+"/images/icon/icon_bianji.png",
        "yhm" : server+"/images/icon/icon_youhuima（huise）.png",
        "triangle" : server+"/images/icon/icon_xuanze.png",
        "search" : server+"/images/icon/icon_sousuo.png",
        "tx" : server+"/images/my_logged_in.png",
        "success" : server+"/images/icon/successful_deal.png",
        "closed" : server+"/images/icon/trading_closed.png",
        "close" : server+"/images/icon/close.png",
        "ticket_left" : server+"/images/icon/coupons_r.png",
        "ticket_right" : server+"/images/icon/coupons_e.png",
        "order_status_dfh" : server+"/images/icon/goods_white.png",
        "contact_blue" : server+"/images/icon/icon_dianhua.png",
        "arrow_down" : server+"/images/icon/screening_arrow_default.png",
        "wechat_border" : server+"/images/icon/wechat_border.png",
        "wudingdang" : server+"/images/icon/icon_wudingdang.png",
        "loading" : server+"/images/icon/loading-063.gif",
    },
    "banner":[
        server+"/images/banner/banner1.png",
        server+"/images/banner/banner2.png",
        server+"/images/banner/banner3.png",
        server+"/images/banner/banner4.png"
    ],
    "goods" : {
        "bags": server+"/images/the _picture.png",
        "ladies": server+"/images/ladies.png",
        "iphone": server+"/images/digital.png",
        "swear": server+"/images/menswear.png"
    },
    "home": {
        "bargain" : server+"/images/icon/bargain.png",
        "money" : server+"/images/icon/get_the_money.png",
        "wallet" : server+"/images/icon/top-up.png",
        "all" : server+"/images/icon/all.png",
        "ladies" : server+"/images/ladies.png",
        "tries" : server+"/images/menswear.png",
        "bags" : server+"/images/shoes_and_bags.png",
        "good" : server+"/images/beauty_makeup.png",
        "scan" : server+"/images/icon/icon_saoyisao.png"
    },
    "account" :{
        "address" : server+"/images/icon/addge.png",
        "collection" : server+"/images/icon/My_Collection.png",
        "decout" : server+"/images/icon/decout.png",
        "coupons" : server+"/images/icon/icon_wodeyouhuijuan.png",
        "dingdan" : server+"/images/icon/icon_wodedingdan.png",
        "messages" : server+"/images/icon/my_message_center.png",
        "history" : server+"/images/icon/my_historical_records.png",
        "dfh" : server+"/images/icon/icon_daifahuo.png",
        "dfk" : server+"/images/icon/icon_daifukuan.png",
        "dsh" : server+"/images/icon/icon_daishouhuo.png",
        "dpj" : server+"/images/icon/icon_daipingjia.png",
        "shtk" : server+"/images/icon/icon_tuikuan.png"
    },
    "setting" : {
        "message" : server+"/images/icon/icon_xitongxinxi.png",
        "voice" : server+"/images/icon/icon_shengyintixing.png",
        "comment" : server+"/images/icon/icon_yijianfankui.png"
    }
};

// 数据接口地址
export const Interfaces = {
    "common" : "/TemplatedAPI/",
    // "common" : "http://www.chookr.net/TemplatedAPI/",
    "completion" : "http://172.16.1.252:8092/TemplatedAPI"
};

// 省市区三联数据
export const Area = [
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10010101,
                            "name": "东城区",
                            "parent": 100101
                        },
                        {
                            "code": 10010102,
                            "name": "西城区",
                            "parent": 100101
                        },
                        {
                            "code": 10010103,
                            "name": "崇文区",
                            "parent": 100101
                        },
                        {
                            "code": 10010104,
                            "name": "宣武区",
                            "parent": 100101
                        },
                        {
                            "code": 10010105,
                            "name": "朝阳区",
                            "parent": 100101
                        },
                        {
                            "code": 10010106,
                            "name": "丰台区",
                            "parent": 100101
                        },
                        {
                            "code": 10010107,
                            "name": "石景山区",
                            "parent": 100101
                        },
                        {
                            "code": 10010108,
                            "name": "海淀区",
                            "parent": 100101
                        },
                        {
                            "code": 10010109,
                            "name": "门头沟区",
                            "parent": 100101
                        },
                        {
                            "code": 10010110,
                            "name": "房山区",
                            "parent": 100101
                        },
                        {
                            "code": 10010111,
                            "name": "通州区",
                            "parent": 100101
                        },
                        {
                            "code": 10010112,
                            "name": "顺义区",
                            "parent": 100101
                        },
                        {
                            "code": 10010113,
                            "name": "昌平区",
                            "parent": 100101
                        },
                        {
                            "code": 10010114,
                            "name": "大兴区",
                            "parent": 100101
                        },
                        {
                            "code": 10010115,
                            "name": "平谷区",
                            "parent": 100101
                        },
                        {
                            "code": 10010116,
                            "name": "怀柔区",
                            "parent": 100101
                        },
                        {
                            "code": 10010117,
                            "name": "密云县",
                            "parent": 100101
                        },
                        {
                            "code": 10010118,
                            "name": "延庆县",
                            "parent": 100101
                        }
                    ],
                    "code": 100101,
                    "name": "北京市",
                    "parent": 1001
                }
            ],
            "code": 1001,
            "name": "北京市",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10020101,
                            "name": "和平区",
                            "parent": 100201
                        },
                        {
                            "code": 10020102,
                            "name": "河东区",
                            "parent": 100201
                        },
                        {
                            "code": 10020103,
                            "name": "河西区",
                            "parent": 100201
                        },
                        {
                            "code": 10020104,
                            "name": "南开区",
                            "parent": 100201
                        },
                        {
                            "code": 10020105,
                            "name": "河北区",
                            "parent": 100201
                        },
                        {
                            "code": 10020106,
                            "name": "红桥区",
                            "parent": 100201
                        },
                        {
                            "code": 10020107,
                            "name": "塘沽区",
                            "parent": 100201
                        },
                        {
                            "code": 10020108,
                            "name": "汉沽区",
                            "parent": 100201
                        },
                        {
                            "code": 10020109,
                            "name": "大港区",
                            "parent": 100201
                        },
                        {
                            "code": 10020110,
                            "name": "东丽区",
                            "parent": 100201
                        },
                        {
                            "code": 10020111,
                            "name": "西青区",
                            "parent": 100201
                        },
                        {
                            "code": 10020112,
                            "name": "津南区",
                            "parent": 100201
                        },
                        {
                            "code": 10020113,
                            "name": "北辰区",
                            "parent": 100201
                        },
                        {
                            "code": 10020114,
                            "name": "武清区",
                            "parent": 100201
                        },
                        {
                            "code": 10020115,
                            "name": "宝坻区",
                            "parent": 100201
                        },
                        {
                            "code": 10020116,
                            "name": "宁河县",
                            "parent": 100201
                        },
                        {
                            "code": 10020117,
                            "name": "静海县",
                            "parent": 100201
                        },
                        {
                            "code": 10020118,
                            "name": "蓟县",
                            "parent": 100201
                        }
                    ],
                    "code": 100201,
                    "name": "天津市",
                    "parent": 1002
                }
            ],
            "code": 1002,
            "name": "天津市",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10030101,
                            "name": "长安区",
                            "parent": 100301
                        },
                        {
                            "code": 10030102,
                            "name": "桥东区",
                            "parent": 100301
                        },
                        {
                            "code": 10030103,
                            "name": "桥西区",
                            "parent": 100301
                        },
                        {
                            "code": 10030104,
                            "name": "新华区",
                            "parent": 100301
                        },
                        {
                            "code": 10030105,
                            "name": "郊区",
                            "parent": 100301
                        },
                        {
                            "code": 10030106,
                            "name": "井陉矿区",
                            "parent": 100301
                        },
                        {
                            "code": 10030107,
                            "name": "井陉县",
                            "parent": 100301
                        },
                        {
                            "code": 10030108,
                            "name": "正定县",
                            "parent": 100301
                        },
                        {
                            "code": 10030109,
                            "name": "栾城县",
                            "parent": 100301
                        },
                        {
                            "code": 10030110,
                            "name": "行唐县",
                            "parent": 100301
                        },
                        {
                            "code": 10030111,
                            "name": "灵寿县",
                            "parent": 100301
                        },
                        {
                            "code": 10030112,
                            "name": "高邑县",
                            "parent": 100301
                        },
                        {
                            "code": 10030113,
                            "name": "深泽县",
                            "parent": 100301
                        },
                        {
                            "code": 10030114,
                            "name": "赞皇县",
                            "parent": 100301
                        },
                        {
                            "code": 10030115,
                            "name": "无极县",
                            "parent": 100301
                        },
                        {
                            "code": 10030116,
                            "name": "平山县",
                            "parent": 100301
                        },
                        {
                            "code": 10030117,
                            "name": "元氏县",
                            "parent": 100301
                        },
                        {
                            "code": 10030118,
                            "name": "赵县",
                            "parent": 100301
                        },
                        {
                            "code": 10030119,
                            "name": "辛集市",
                            "parent": 100301
                        },
                        {
                            "code": 10030120,
                            "name": "藁城市",
                            "parent": 100301
                        },
                        {
                            "code": 10030121,
                            "name": "晋州市",
                            "parent": 100301
                        },
                        {
                            "code": 10030122,
                            "name": "新乐市",
                            "parent": 100301
                        },
                        {
                            "code": 10030123,
                            "name": "鹿泉市",
                            "parent": 100301
                        }
                    ],
                    "code": 100301,
                    "name": "石家庄市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030201,
                            "name": "路南区",
                            "parent": 100302
                        },
                        {
                            "code": 10030202,
                            "name": "路北区",
                            "parent": 100302
                        },
                        {
                            "code": 10030203,
                            "name": "古冶区",
                            "parent": 100302
                        },
                        {
                            "code": 10030204,
                            "name": "开平区",
                            "parent": 100302
                        },
                        {
                            "code": 10030205,
                            "name": "新区",
                            "parent": 100302
                        },
                        {
                            "code": 10030206,
                            "name": "丰润县",
                            "parent": 100302
                        },
                        {
                            "code": 10030207,
                            "name": "滦县",
                            "parent": 100302
                        },
                        {
                            "code": 10030208,
                            "name": "滦南县",
                            "parent": 100302
                        },
                        {
                            "code": 10030209,
                            "name": "乐亭县",
                            "parent": 100302
                        },
                        {
                            "code": 10030210,
                            "name": "迁西县",
                            "parent": 100302
                        },
                        {
                            "code": 10030211,
                            "name": "玉田县",
                            "parent": 100302
                        },
                        {
                            "code": 10030212,
                            "name": "唐海县",
                            "parent": 100302
                        },
                        {
                            "code": 10030213,
                            "name": "遵化市",
                            "parent": 100302
                        },
                        {
                            "code": 10030214,
                            "name": "丰南市",
                            "parent": 100302
                        },
                        {
                            "code": 10030215,
                            "name": "迁安市",
                            "parent": 100302
                        }
                    ],
                    "code": 100302,
                    "name": "唐山市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030301,
                            "name": "海港区",
                            "parent": 100303
                        },
                        {
                            "code": 10030302,
                            "name": "山海关区",
                            "parent": 100303
                        },
                        {
                            "code": 10030303,
                            "name": "北戴河区",
                            "parent": 100303
                        },
                        {
                            "code": 10030304,
                            "name": "青龙满族自治县",
                            "parent": 100303
                        },
                        {
                            "code": 10030305,
                            "name": "昌黎县",
                            "parent": 100303
                        },
                        {
                            "code": 10030306,
                            "name": "抚宁县",
                            "parent": 100303
                        },
                        {
                            "code": 10030307,
                            "name": "卢龙县",
                            "parent": 100303
                        }
                    ],
                    "code": 100303,
                    "name": "秦皇岛市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030401,
                            "name": "邯山区",
                            "parent": 100304
                        },
                        {
                            "code": 10030402,
                            "name": "丛台区",
                            "parent": 100304
                        },
                        {
                            "code": 10030403,
                            "name": "复兴区",
                            "parent": 100304
                        },
                        {
                            "code": 10030404,
                            "name": "峰峰矿区",
                            "parent": 100304
                        },
                        {
                            "code": 10030405,
                            "name": "邯郸县",
                            "parent": 100304
                        },
                        {
                            "code": 10030406,
                            "name": "临漳县",
                            "parent": 100304
                        },
                        {
                            "code": 10030407,
                            "name": "成安县",
                            "parent": 100304
                        },
                        {
                            "code": 10030408,
                            "name": "大名县",
                            "parent": 100304
                        },
                        {
                            "code": 10030409,
                            "name": "涉县",
                            "parent": 100304
                        },
                        {
                            "code": 10030410,
                            "name": "磁县",
                            "parent": 100304
                        },
                        {
                            "code": 10030411,
                            "name": "肥乡县",
                            "parent": 100304
                        },
                        {
                            "code": 10030412,
                            "name": "永年县",
                            "parent": 100304
                        },
                        {
                            "code": 10030413,
                            "name": "邱县",
                            "parent": 100304
                        },
                        {
                            "code": 10030414,
                            "name": "鸡泽县",
                            "parent": 100304
                        },
                        {
                            "code": 10030415,
                            "name": "广平县",
                            "parent": 100304
                        },
                        {
                            "code": 10030416,
                            "name": "馆陶县",
                            "parent": 100304
                        },
                        {
                            "code": 10030417,
                            "name": "魏县",
                            "parent": 100304
                        },
                        {
                            "code": 10030418,
                            "name": "曲周县",
                            "parent": 100304
                        },
                        {
                            "code": 10030419,
                            "name": "武安市",
                            "parent": 100304
                        }
                    ],
                    "code": 100304,
                    "name": "邯郸市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030501,
                            "name": "桥东区",
                            "parent": 100305
                        },
                        {
                            "code": 10030502,
                            "name": "桥西区",
                            "parent": 100305
                        },
                        {
                            "code": 10030503,
                            "name": "邢台县",
                            "parent": 100305
                        },
                        {
                            "code": 10030504,
                            "name": "临城县",
                            "parent": 100305
                        },
                        {
                            "code": 10030505,
                            "name": "内丘县",
                            "parent": 100305
                        },
                        {
                            "code": 10030506,
                            "name": "柏乡县",
                            "parent": 100305
                        },
                        {
                            "code": 10030507,
                            "name": "隆尧县",
                            "parent": 100305
                        },
                        {
                            "code": 10030508,
                            "name": "任县",
                            "parent": 100305
                        },
                        {
                            "code": 10030509,
                            "name": "南和县",
                            "parent": 100305
                        },
                        {
                            "code": 10030510,
                            "name": "宁晋县",
                            "parent": 100305
                        },
                        {
                            "code": 10030511,
                            "name": "巨鹿县",
                            "parent": 100305
                        },
                        {
                            "code": 10030512,
                            "name": "新河县",
                            "parent": 100305
                        },
                        {
                            "code": 10030513,
                            "name": "广宗县",
                            "parent": 100305
                        },
                        {
                            "code": 10030514,
                            "name": "平乡县",
                            "parent": 100305
                        },
                        {
                            "code": 10030515,
                            "name": "威县",
                            "parent": 100305
                        },
                        {
                            "code": 10030516,
                            "name": "清河县",
                            "parent": 100305
                        },
                        {
                            "code": 10030517,
                            "name": "临西县",
                            "parent": 100305
                        },
                        {
                            "code": 10030518,
                            "name": "南宫市",
                            "parent": 100305
                        },
                        {
                            "code": 10030519,
                            "name": "沙河市",
                            "parent": 100305
                        }
                    ],
                    "code": 100305,
                    "name": "邢台市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030601,
                            "name": "新市区",
                            "parent": 100306
                        },
                        {
                            "code": 10030602,
                            "name": "北市区",
                            "parent": 100306
                        },
                        {
                            "code": 10030603,
                            "name": "南市区",
                            "parent": 100306
                        },
                        {
                            "code": 10030604,
                            "name": "满城县",
                            "parent": 100306
                        },
                        {
                            "code": 10030605,
                            "name": "清苑县",
                            "parent": 100306
                        },
                        {
                            "code": 10030606,
                            "name": "涞水县",
                            "parent": 100306
                        },
                        {
                            "code": 10030607,
                            "name": "阜平县",
                            "parent": 100306
                        },
                        {
                            "code": 10030608,
                            "name": "徐水县",
                            "parent": 100306
                        },
                        {
                            "code": 10030609,
                            "name": "定兴县",
                            "parent": 100306
                        },
                        {
                            "code": 10030610,
                            "name": "唐县",
                            "parent": 100306
                        },
                        {
                            "code": 10030611,
                            "name": "高阳县",
                            "parent": 100306
                        },
                        {
                            "code": 10030612,
                            "name": "容城县",
                            "parent": 100306
                        },
                        {
                            "code": 10030613,
                            "name": "涞源县",
                            "parent": 100306
                        },
                        {
                            "code": 10030614,
                            "name": "望都县",
                            "parent": 100306
                        },
                        {
                            "code": 10030615,
                            "name": "安新县",
                            "parent": 100306
                        },
                        {
                            "code": 10030616,
                            "name": "易县",
                            "parent": 100306
                        },
                        {
                            "code": 10030617,
                            "name": "曲阳县",
                            "parent": 100306
                        },
                        {
                            "code": 10030618,
                            "name": "蠡县",
                            "parent": 100306
                        },
                        {
                            "code": 10030619,
                            "name": "顺平县",
                            "parent": 100306
                        },
                        {
                            "code": 10030620,
                            "name": "博野县",
                            "parent": 100306
                        },
                        {
                            "code": 10030621,
                            "name": "雄县",
                            "parent": 100306
                        },
                        {
                            "code": 10030622,
                            "name": "涿州市",
                            "parent": 100306
                        },
                        {
                            "code": 10030623,
                            "name": "定州市",
                            "parent": 100306
                        },
                        {
                            "code": 10030624,
                            "name": "安国市",
                            "parent": 100306
                        },
                        {
                            "code": 10030625,
                            "name": "高碑店市",
                            "parent": 100306
                        }
                    ],
                    "code": 100306,
                    "name": "保定市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030701,
                            "name": "桥东区",
                            "parent": 100307
                        },
                        {
                            "code": 10030702,
                            "name": "桥西区",
                            "parent": 100307
                        },
                        {
                            "code": 10030703,
                            "name": "宣化区",
                            "parent": 100307
                        },
                        {
                            "code": 10030704,
                            "name": "下花园区",
                            "parent": 100307
                        },
                        {
                            "code": 10030705,
                            "name": "宣化县",
                            "parent": 100307
                        },
                        {
                            "code": 10030706,
                            "name": "张北县",
                            "parent": 100307
                        },
                        {
                            "code": 10030707,
                            "name": "康保县",
                            "parent": 100307
                        },
                        {
                            "code": 10030708,
                            "name": "沽源县",
                            "parent": 100307
                        },
                        {
                            "code": 10030709,
                            "name": "尚义县",
                            "parent": 100307
                        },
                        {
                            "code": 10030710,
                            "name": "蔚县",
                            "parent": 100307
                        },
                        {
                            "code": 10030711,
                            "name": "阳原县",
                            "parent": 100307
                        },
                        {
                            "code": 10030712,
                            "name": "怀安县",
                            "parent": 100307
                        },
                        {
                            "code": 10030713,
                            "name": "万全县",
                            "parent": 100307
                        },
                        {
                            "code": 10030714,
                            "name": "怀来县",
                            "parent": 100307
                        },
                        {
                            "code": 10030715,
                            "name": "涿鹿县",
                            "parent": 100307
                        },
                        {
                            "code": 10030716,
                            "name": "赤城县",
                            "parent": 100307
                        },
                        {
                            "code": 10030717,
                            "name": "崇礼县",
                            "parent": 100307
                        }
                    ],
                    "code": 100307,
                    "name": "张家口市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030801,
                            "name": "双桥区",
                            "parent": 100308
                        },
                        {
                            "code": 10030802,
                            "name": "双滦区",
                            "parent": 100308
                        },
                        {
                            "code": 10030803,
                            "name": "鹰手营子矿区",
                            "parent": 100308
                        },
                        {
                            "code": 10030804,
                            "name": "承德县",
                            "parent": 100308
                        },
                        {
                            "code": 10030805,
                            "name": "兴隆县",
                            "parent": 100308
                        },
                        {
                            "code": 10030806,
                            "name": "平泉县",
                            "parent": 100308
                        },
                        {
                            "code": 10030807,
                            "name": "滦平县",
                            "parent": 100308
                        },
                        {
                            "code": 10030808,
                            "name": "隆化县",
                            "parent": 100308
                        },
                        {
                            "code": 10030809,
                            "name": "丰宁满族自治县",
                            "parent": 100308
                        },
                        {
                            "code": 10030810,
                            "name": "宽城满族自治县",
                            "parent": 100308
                        },
                        {
                            "code": 10030811,
                            "name": "围场满族蒙古族自治县",
                            "parent": 100308
                        }
                    ],
                    "code": 100308,
                    "name": "承德市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10030901,
                            "name": "新华区",
                            "parent": 100309
                        },
                        {
                            "code": 10030902,
                            "name": "运河区",
                            "parent": 100309
                        },
                        {
                            "code": 10030903,
                            "name": "沧县",
                            "parent": 100309
                        },
                        {
                            "code": 10030904,
                            "name": "青县",
                            "parent": 100309
                        },
                        {
                            "code": 10030905,
                            "name": "东光县",
                            "parent": 100309
                        },
                        {
                            "code": 10030906,
                            "name": "海兴县",
                            "parent": 100309
                        },
                        {
                            "code": 10030907,
                            "name": "盐山县",
                            "parent": 100309
                        },
                        {
                            "code": 10030908,
                            "name": "肃宁县",
                            "parent": 100309
                        },
                        {
                            "code": 10030909,
                            "name": "南皮县",
                            "parent": 100309
                        },
                        {
                            "code": 10030910,
                            "name": "吴桥县",
                            "parent": 100309
                        },
                        {
                            "code": 10030911,
                            "name": "献县",
                            "parent": 100309
                        },
                        {
                            "code": 10030912,
                            "name": "孟村回族自治县",
                            "parent": 100309
                        },
                        {
                            "code": 10030913,
                            "name": "泊头市",
                            "parent": 100309
                        },
                        {
                            "code": 10030914,
                            "name": "任丘市",
                            "parent": 100309
                        },
                        {
                            "code": 10030915,
                            "name": "黄骅市",
                            "parent": 100309
                        },
                        {
                            "code": 10030916,
                            "name": "河间市",
                            "parent": 100309
                        }
                    ],
                    "code": 100309,
                    "name": "沧州市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10031001,
                            "name": "安次区",
                            "parent": 100310
                        },
                        {
                            "code": 10031002,
                            "name": "固安县",
                            "parent": 100310
                        },
                        {
                            "code": 10031003,
                            "name": "永清县",
                            "parent": 100310
                        },
                        {
                            "code": 10031004,
                            "name": "香河县",
                            "parent": 100310
                        },
                        {
                            "code": 10031005,
                            "name": "大城县",
                            "parent": 100310
                        },
                        {
                            "code": 10031006,
                            "name": "文安县",
                            "parent": 100310
                        },
                        {
                            "code": 10031007,
                            "name": "大厂回族自治县",
                            "parent": 100310
                        },
                        {
                            "code": 10031008,
                            "name": "霸州市",
                            "parent": 100310
                        },
                        {
                            "code": 10031009,
                            "name": "三河市",
                            "parent": 100310
                        }
                    ],
                    "code": 100310,
                    "name": "廊坊市",
                    "parent": 1003
                },
                {
                    "child": [
                        {
                            "code": 10031101,
                            "name": "桃城区",
                            "parent": 100311
                        },
                        {
                            "code": 10031102,
                            "name": "枣强县",
                            "parent": 100311
                        },
                        {
                            "code": 10031103,
                            "name": "武邑县",
                            "parent": 100311
                        },
                        {
                            "code": 10031104,
                            "name": "武强县",
                            "parent": 100311
                        },
                        {
                            "code": 10031105,
                            "name": "饶阳县",
                            "parent": 100311
                        },
                        {
                            "code": 10031106,
                            "name": "安平县",
                            "parent": 100311
                        },
                        {
                            "code": 10031107,
                            "name": "故城县",
                            "parent": 100311
                        },
                        {
                            "code": 10031108,
                            "name": "景县",
                            "parent": 100311
                        },
                        {
                            "code": 10031109,
                            "name": "阜城县",
                            "parent": 100311
                        },
                        {
                            "code": 10031110,
                            "name": "冀州市",
                            "parent": 100311
                        },
                        {
                            "code": 10031111,
                            "name": "深州市",
                            "parent": 100311
                        }
                    ],
                    "code": 100311,
                    "name": "衡水市",
                    "parent": 1003
                }
            ],
            "code": 1003,
            "name": "河北省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10040101,
                            "name": "小店区",
                            "parent": 100401
                        },
                        {
                            "code": 10040102,
                            "name": "迎泽区",
                            "parent": 100401
                        },
                        {
                            "code": 10040103,
                            "name": "杏花岭区",
                            "parent": 100401
                        },
                        {
                            "code": 10040104,
                            "name": "尖草坪区",
                            "parent": 100401
                        },
                        {
                            "code": 10040105,
                            "name": "万柏林区",
                            "parent": 100401
                        },
                        {
                            "code": 10040106,
                            "name": "晋源区",
                            "parent": 100401
                        },
                        {
                            "code": 10040107,
                            "name": "清徐县",
                            "parent": 100401
                        },
                        {
                            "code": 10040108,
                            "name": "阳曲县",
                            "parent": 100401
                        },
                        {
                            "code": 10040109,
                            "name": "娄烦县",
                            "parent": 100401
                        },
                        {
                            "code": 10040110,
                            "name": "古交市",
                            "parent": 100401
                        }
                    ],
                    "code": 100401,
                    "name": "太原市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040201,
                            "name": "城区",
                            "parent": 100402
                        },
                        {
                            "code": 10040202,
                            "name": "矿区",
                            "parent": 100402
                        },
                        {
                            "code": 10040203,
                            "name": "南郊区",
                            "parent": 100402
                        },
                        {
                            "code": 10040204,
                            "name": "新荣区",
                            "parent": 100402
                        },
                        {
                            "code": 10040205,
                            "name": "阳高县",
                            "parent": 100402
                        },
                        {
                            "code": 10040206,
                            "name": "天镇县",
                            "parent": 100402
                        },
                        {
                            "code": 10040207,
                            "name": "广灵县",
                            "parent": 100402
                        },
                        {
                            "code": 10040208,
                            "name": "灵丘县",
                            "parent": 100402
                        },
                        {
                            "code": 10040209,
                            "name": "浑源县",
                            "parent": 100402
                        },
                        {
                            "code": 10040210,
                            "name": "左云县",
                            "parent": 100402
                        },
                        {
                            "code": 10040211,
                            "name": "大同县",
                            "parent": 100402
                        }
                    ],
                    "code": 100402,
                    "name": "大同市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040301,
                            "name": "城区",
                            "parent": 100403
                        },
                        {
                            "code": 10040302,
                            "name": "矿区",
                            "parent": 100403
                        },
                        {
                            "code": 10040303,
                            "name": "郊区",
                            "parent": 100403
                        },
                        {
                            "code": 10040304,
                            "name": "平定县",
                            "parent": 100403
                        },
                        {
                            "code": 10040305,
                            "name": "盂县",
                            "parent": 100403
                        }
                    ],
                    "code": 100403,
                    "name": "阳泉市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040401,
                            "name": "城区",
                            "parent": 100404
                        },
                        {
                            "code": 10040402,
                            "name": "郊区",
                            "parent": 100404
                        },
                        {
                            "code": 10040403,
                            "name": "长治县",
                            "parent": 100404
                        },
                        {
                            "code": 10040404,
                            "name": "襄垣县",
                            "parent": 100404
                        },
                        {
                            "code": 10040405,
                            "name": "屯留县",
                            "parent": 100404
                        },
                        {
                            "code": 10040406,
                            "name": "平顺县",
                            "parent": 100404
                        },
                        {
                            "code": 10040407,
                            "name": "黎城县",
                            "parent": 100404
                        },
                        {
                            "code": 10040408,
                            "name": "壶关县",
                            "parent": 100404
                        },
                        {
                            "code": 10040409,
                            "name": "长子县",
                            "parent": 100404
                        },
                        {
                            "code": 10040410,
                            "name": "武乡县",
                            "parent": 100404
                        },
                        {
                            "code": 10040411,
                            "name": "沁县",
                            "parent": 100404
                        },
                        {
                            "code": 10040412,
                            "name": "沁源县",
                            "parent": 100404
                        },
                        {
                            "code": 10040413,
                            "name": "潞城市",
                            "parent": 100404
                        }
                    ],
                    "code": 100404,
                    "name": "长治市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040501,
                            "name": "城区",
                            "parent": 100405
                        },
                        {
                            "code": 10040502,
                            "name": "沁水县",
                            "parent": 100405
                        },
                        {
                            "code": 10040503,
                            "name": "阳城县",
                            "parent": 100405
                        },
                        {
                            "code": 10040504,
                            "name": "陵川县",
                            "parent": 100405
                        },
                        {
                            "code": 10040505,
                            "name": "泽州县",
                            "parent": 100405
                        },
                        {
                            "code": 10040506,
                            "name": "高平市",
                            "parent": 100405
                        }
                    ],
                    "code": 100405,
                    "name": "晋城市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040601,
                            "name": "朔城区",
                            "parent": 100406
                        },
                        {
                            "code": 10040602,
                            "name": "平鲁区",
                            "parent": 100406
                        },
                        {
                            "code": 10040603,
                            "name": "山阴县",
                            "parent": 100406
                        },
                        {
                            "code": 10040604,
                            "name": "应县",
                            "parent": 100406
                        },
                        {
                            "code": 10040605,
                            "name": "右玉县",
                            "parent": 100406
                        },
                        {
                            "code": 10040606,
                            "name": "怀仁县",
                            "parent": 100406
                        }
                    ],
                    "code": 100406,
                    "name": "朔州市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040701,
                            "name": "忻府区",
                            "parent": 100407
                        },
                        {
                            "code": 10040702,
                            "name": "原平市",
                            "parent": 100407
                        },
                        {
                            "code": 10040703,
                            "name": "定襄县",
                            "parent": 100407
                        },
                        {
                            "code": 10040704,
                            "name": "五台县",
                            "parent": 100407
                        },
                        {
                            "code": 10040705,
                            "name": "代县",
                            "parent": 100407
                        },
                        {
                            "code": 10040706,
                            "name": "繁峙县",
                            "parent": 100407
                        },
                        {
                            "code": 10040707,
                            "name": "宁武县",
                            "parent": 100407
                        },
                        {
                            "code": 10040708,
                            "name": "静乐县",
                            "parent": 100407
                        },
                        {
                            "code": 10040709,
                            "name": "神池县",
                            "parent": 100407
                        },
                        {
                            "code": 10040710,
                            "name": "五寨县",
                            "parent": 100407
                        },
                        {
                            "code": 10040711,
                            "name": "岢岚县",
                            "parent": 100407
                        },
                        {
                            "code": 10040712,
                            "name": "河曲县",
                            "parent": 100407
                        },
                        {
                            "code": 10040713,
                            "name": "保德县",
                            "parent": 100407
                        },
                        {
                            "code": 10040714,
                            "name": "偏关县",
                            "parent": 100407
                        }
                    ],
                    "code": 100407,
                    "name": "忻州市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040801,
                            "name": "离石区",
                            "parent": 100408
                        },
                        {
                            "code": 10040802,
                            "name": "孝义市",
                            "parent": 100408
                        },
                        {
                            "code": 10040803,
                            "name": "汾阳市",
                            "parent": 100408
                        },
                        {
                            "code": 10040804,
                            "name": "文水县",
                            "parent": 100408
                        },
                        {
                            "code": 10040805,
                            "name": "交城县",
                            "parent": 100408
                        },
                        {
                            "code": 10040806,
                            "name": "兴县",
                            "parent": 100408
                        },
                        {
                            "code": 10040807,
                            "name": "临县",
                            "parent": 100408
                        },
                        {
                            "code": 10040808,
                            "name": "柳林县",
                            "parent": 100408
                        },
                        {
                            "code": 10040809,
                            "name": "石楼县",
                            "parent": 100408
                        },
                        {
                            "code": 10040810,
                            "name": "岚县",
                            "parent": 100408
                        },
                        {
                            "code": 10040811,
                            "name": "方山县",
                            "parent": 100408
                        },
                        {
                            "code": 10040812,
                            "name": "中阳县",
                            "parent": 100408
                        },
                        {
                            "code": 10040813,
                            "name": "交口县",
                            "parent": 100408
                        }
                    ],
                    "code": 100408,
                    "name": "吕梁市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10040901,
                            "name": "榆次市",
                            "parent": 100409
                        },
                        {
                            "code": 10040902,
                            "name": "介休市",
                            "parent": 100409
                        },
                        {
                            "code": 10040903,
                            "name": "榆社县",
                            "parent": 100409
                        },
                        {
                            "code": 10040904,
                            "name": "左权县",
                            "parent": 100409
                        },
                        {
                            "code": 10040905,
                            "name": "和顺县",
                            "parent": 100409
                        },
                        {
                            "code": 10040906,
                            "name": "昔阳县",
                            "parent": 100409
                        },
                        {
                            "code": 10040907,
                            "name": "寿阳县",
                            "parent": 100409
                        },
                        {
                            "code": 10040908,
                            "name": "太谷县",
                            "parent": 100409
                        },
                        {
                            "code": 10040909,
                            "name": "祁县",
                            "parent": 100409
                        },
                        {
                            "code": 10040910,
                            "name": "平遥县",
                            "parent": 100409
                        },
                        {
                            "code": 10040911,
                            "name": "灵石县",
                            "parent": 100409
                        }
                    ],
                    "code": 100409,
                    "name": "晋中市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10041001,
                            "name": "临汾市",
                            "parent": 100410
                        },
                        {
                            "code": 10041002,
                            "name": "侯马市",
                            "parent": 100410
                        },
                        {
                            "code": 10041003,
                            "name": "霍州市",
                            "parent": 100410
                        },
                        {
                            "code": 10041004,
                            "name": "曲沃县",
                            "parent": 100410
                        },
                        {
                            "code": 10041005,
                            "name": "翼城县",
                            "parent": 100410
                        },
                        {
                            "code": 10041006,
                            "name": "襄汾县",
                            "parent": 100410
                        },
                        {
                            "code": 10041007,
                            "name": "洪洞县",
                            "parent": 100410
                        },
                        {
                            "code": 10041008,
                            "name": "古县",
                            "parent": 100410
                        },
                        {
                            "code": 10041009,
                            "name": "安泽县",
                            "parent": 100410
                        },
                        {
                            "code": 10041010,
                            "name": "浮山县",
                            "parent": 100410
                        },
                        {
                            "code": 10041011,
                            "name": "吉县",
                            "parent": 100410
                        },
                        {
                            "code": 10041012,
                            "name": "乡宁县",
                            "parent": 100410
                        },
                        {
                            "code": 10041013,
                            "name": "蒲县",
                            "parent": 100410
                        },
                        {
                            "code": 10041014,
                            "name": "大宁县",
                            "parent": 100410
                        },
                        {
                            "code": 10041015,
                            "name": "永和县",
                            "parent": 100410
                        },
                        {
                            "code": 10041016,
                            "name": "隰县",
                            "parent": 100410
                        },
                        {
                            "code": 10041017,
                            "name": "汾西县",
                            "parent": 100410
                        }
                    ],
                    "code": 100410,
                    "name": "临汾市",
                    "parent": 1004
                },
                {
                    "child": [
                        {
                            "code": 10041101,
                            "name": "运城市",
                            "parent": 100411
                        },
                        {
                            "code": 10041102,
                            "name": "永济市",
                            "parent": 100411
                        },
                        {
                            "code": 10041103,
                            "name": "河津市",
                            "parent": 100411
                        },
                        {
                            "code": 10041104,
                            "name": "芮城县",
                            "parent": 100411
                        },
                        {
                            "code": 10041105,
                            "name": "临猗县",
                            "parent": 100411
                        },
                        {
                            "code": 10041106,
                            "name": "万荣县",
                            "parent": 100411
                        },
                        {
                            "code": 10041107,
                            "name": "新绛县",
                            "parent": 100411
                        },
                        {
                            "code": 10041108,
                            "name": "稷山县",
                            "parent": 100411
                        },
                        {
                            "code": 10041109,
                            "name": "闻喜县",
                            "parent": 100411
                        },
                        {
                            "code": 10041110,
                            "name": "夏县",
                            "parent": 100411
                        },
                        {
                            "code": 10041111,
                            "name": "绛县",
                            "parent": 100411
                        },
                        {
                            "code": 10041112,
                            "name": "平陆县",
                            "parent": 100411
                        },
                        {
                            "code": 10041113,
                            "name": "垣曲县",
                            "parent": 100411
                        }
                    ],
                    "code": 100411,
                    "name": "运城市",
                    "parent": 1004
                }
            ],
            "code": 1004,
            "name": "山西省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10050101,
                            "name": "新城区",
                            "parent": 100501
                        },
                        {
                            "code": 10050102,
                            "name": "回民区",
                            "parent": 100501
                        },
                        {
                            "code": 10050103,
                            "name": "玉泉区",
                            "parent": 100501
                        },
                        {
                            "code": 10050104,
                            "name": "郊区",
                            "parent": 100501
                        },
                        {
                            "code": 10050105,
                            "name": "土默特左旗",
                            "parent": 100501
                        },
                        {
                            "code": 10050106,
                            "name": "托克托县",
                            "parent": 100501
                        },
                        {
                            "code": 10050107,
                            "name": "和林格尔县",
                            "parent": 100501
                        },
                        {
                            "code": 10050108,
                            "name": "清水河县",
                            "parent": 100501
                        },
                        {
                            "code": 10050109,
                            "name": "武川县",
                            "parent": 100501
                        }
                    ],
                    "code": 100501,
                    "name": "呼和浩特市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050201,
                            "name": "东河区",
                            "parent": 100502
                        },
                        {
                            "code": 10050202,
                            "name": "昆都伦区",
                            "parent": 100502
                        },
                        {
                            "code": 10050203,
                            "name": "青山区",
                            "parent": 100502
                        },
                        {
                            "code": 10050204,
                            "name": "石拐矿区",
                            "parent": 100502
                        },
                        {
                            "code": 10050205,
                            "name": "白云矿区",
                            "parent": 100502
                        },
                        {
                            "code": 10050206,
                            "name": "郊区",
                            "parent": 100502
                        },
                        {
                            "code": 10050207,
                            "name": "土默特右旗",
                            "parent": 100502
                        },
                        {
                            "code": 10050208,
                            "name": "固阳县",
                            "parent": 100502
                        },
                        {
                            "code": 10050209,
                            "name": "达尔罕茂明安联合旗",
                            "parent": 100502
                        }
                    ],
                    "code": 100502,
                    "name": "包头市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050301,
                            "name": "海勃湾区",
                            "parent": 100503
                        },
                        {
                            "code": 10050302,
                            "name": "海南区",
                            "parent": 100503
                        },
                        {
                            "code": 10050303,
                            "name": "乌达区",
                            "parent": 100503
                        }
                    ],
                    "code": 100503,
                    "name": "乌海市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050401,
                            "name": "红山区",
                            "parent": 100504
                        },
                        {
                            "code": 10050402,
                            "name": "元宝山区",
                            "parent": 100504
                        },
                        {
                            "code": 10050403,
                            "name": "松山区",
                            "parent": 100504
                        },
                        {
                            "code": 10050404,
                            "name": "阿鲁科尔沁旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050405,
                            "name": "巴林左旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050406,
                            "name": "巴林右旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050407,
                            "name": "林西县",
                            "parent": 100504
                        },
                        {
                            "code": 10050408,
                            "name": "克什克腾旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050409,
                            "name": "翁牛特旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050410,
                            "name": "喀喇沁旗",
                            "parent": 100504
                        },
                        {
                            "code": 10050411,
                            "name": "宁城县",
                            "parent": 100504
                        },
                        {
                            "code": 10050412,
                            "name": "敖汉旗",
                            "parent": 100504
                        }
                    ],
                    "code": 100504,
                    "name": "赤峰市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050501,
                            "name": "海拉尔市",
                            "parent": 100505
                        },
                        {
                            "code": 10050502,
                            "name": "满洲里市",
                            "parent": 100505
                        },
                        {
                            "code": 10050503,
                            "name": "扎兰屯市",
                            "parent": 100505
                        },
                        {
                            "code": 10050504,
                            "name": "牙克石市",
                            "parent": 100505
                        },
                        {
                            "code": 10050505,
                            "name": "根河市",
                            "parent": 100505
                        },
                        {
                            "code": 10050506,
                            "name": "额尔古纳市",
                            "parent": 100505
                        },
                        {
                            "code": 10050507,
                            "name": "阿荣旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050508,
                            "name": "莫力达瓦达斡尔族自治旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050509,
                            "name": "鄂伦春自治旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050510,
                            "name": "鄂温克族自治旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050511,
                            "name": "新巴尔虎右旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050512,
                            "name": "新巴尔虎左旗",
                            "parent": 100505
                        },
                        {
                            "code": 10050513,
                            "name": "陈巴尔虎旗",
                            "parent": 100505
                        }
                    ],
                    "code": 100505,
                    "name": "呼伦贝尔市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050601,
                            "name": "乌兰浩特市",
                            "parent": 100506
                        },
                        {
                            "code": 10050602,
                            "name": "阿尔山市",
                            "parent": 100506
                        },
                        {
                            "code": 10050603,
                            "name": "科尔沁右翼前旗",
                            "parent": 100506
                        },
                        {
                            "code": 10050604,
                            "name": "科尔沁右翼中旗",
                            "parent": 100506
                        },
                        {
                            "code": 10050605,
                            "name": "扎赉特旗",
                            "parent": 100506
                        },
                        {
                            "code": 10050606,
                            "name": "突泉县",
                            "parent": 100506
                        }
                    ],
                    "code": 100506,
                    "name": "兴安盟",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050701,
                            "name": "科尔沁区",
                            "parent": 100507
                        },
                        {
                            "code": 10050702,
                            "name": "霍林郭勒市",
                            "parent": 100507
                        },
                        {
                            "code": 10050703,
                            "name": "科尔沁左翼中旗",
                            "parent": 100507
                        },
                        {
                            "code": 10050704,
                            "name": "科尔沁左翼后旗",
                            "parent": 100507
                        },
                        {
                            "code": 10050705,
                            "name": "开鲁县",
                            "parent": 100507
                        },
                        {
                            "code": 10050706,
                            "name": "库伦旗",
                            "parent": 100507
                        },
                        {
                            "code": 10050707,
                            "name": "奈曼旗",
                            "parent": 100507
                        },
                        {
                            "code": 10050708,
                            "name": "扎鲁特旗",
                            "parent": 100507
                        }
                    ],
                    "code": 100507,
                    "name": "通辽市",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050801,
                            "name": "二连浩特市",
                            "parent": 100508
                        },
                        {
                            "code": 10050802,
                            "name": "锡林浩特市",
                            "parent": 100508
                        },
                        {
                            "code": 10050803,
                            "name": "阿巴嘎旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050804,
                            "name": "苏尼特左旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050805,
                            "name": "苏尼特右旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050806,
                            "name": "东乌珠穆沁旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050807,
                            "name": "西乌珠穆沁旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050808,
                            "name": "太仆寺旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050809,
                            "name": "镶黄旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050810,
                            "name": "正镶白旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050811,
                            "name": "正蓝旗",
                            "parent": 100508
                        },
                        {
                            "code": 10050812,
                            "name": "多伦县",
                            "parent": 100508
                        }
                    ],
                    "code": 100508,
                    "name": "锡林郭勒盟",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10050901,
                            "name": "集宁市",
                            "parent": 100509
                        },
                        {
                            "code": 10050902,
                            "name": "丰镇市",
                            "parent": 100509
                        },
                        {
                            "code": 10050903,
                            "name": "卓资县",
                            "parent": 100509
                        },
                        {
                            "code": 10050904,
                            "name": "化德县",
                            "parent": 100509
                        },
                        {
                            "code": 10050905,
                            "name": "商都县",
                            "parent": 100509
                        },
                        {
                            "code": 10050906,
                            "name": "兴和县",
                            "parent": 100509
                        },
                        {
                            "code": 10050907,
                            "name": "凉城县",
                            "parent": 100509
                        },
                        {
                            "code": 10050908,
                            "name": "察哈尔右翼前旗",
                            "parent": 100509
                        },
                        {
                            "code": 10050909,
                            "name": "察哈尔右翼中旗",
                            "parent": 100509
                        },
                        {
                            "code": 10050910,
                            "name": "察哈尔右翼后旗",
                            "parent": 100509
                        },
                        {
                            "code": 10050911,
                            "name": "四子王旗",
                            "parent": 100509
                        }
                    ],
                    "code": 100509,
                    "name": "乌兰察布盟",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10051001,
                            "name": "东胜市",
                            "parent": 100510
                        },
                        {
                            "code": 10051002,
                            "name": "达拉特旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051003,
                            "name": "准格尔旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051004,
                            "name": "鄂托克前旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051005,
                            "name": "鄂托克旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051006,
                            "name": "杭锦旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051007,
                            "name": "乌审旗",
                            "parent": 100510
                        },
                        {
                            "code": 10051008,
                            "name": "伊金霍洛旗",
                            "parent": 100510
                        }
                    ],
                    "code": 100510,
                    "name": "伊克昭盟",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10051101,
                            "name": "临河市",
                            "parent": 100511
                        },
                        {
                            "code": 10051102,
                            "name": "五原县",
                            "parent": 100511
                        },
                        {
                            "code": 10051103,
                            "name": "磴口县",
                            "parent": 100511
                        },
                        {
                            "code": 10051104,
                            "name": "乌拉特前旗",
                            "parent": 100511
                        },
                        {
                            "code": 10051105,
                            "name": "乌拉特中旗",
                            "parent": 100511
                        },
                        {
                            "code": 10051106,
                            "name": "乌拉特后旗",
                            "parent": 100511
                        },
                        {
                            "code": 10051107,
                            "name": "杭锦后旗",
                            "parent": 100511
                        }
                    ],
                    "code": 100511,
                    "name": "巴彦淖尔盟",
                    "parent": 1005
                },
                {
                    "child": [
                        {
                            "code": 10051201,
                            "name": "阿拉善左旗",
                            "parent": 100512
                        },
                        {
                            "code": 10051202,
                            "name": "阿拉善右旗",
                            "parent": 100512
                        },
                        {
                            "code": 10051203,
                            "name": "额济纳旗",
                            "parent": 100512
                        }
                    ],
                    "code": 100512,
                    "name": "阿拉善盟",
                    "parent": 1005
                }
            ],
            "code": 1005,
            "name": "内蒙古",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10060101,
                            "name": "和平区",
                            "parent": 100601
                        },
                        {
                            "code": 10060102,
                            "name": "沈河区",
                            "parent": 100601
                        },
                        {
                            "code": 10060103,
                            "name": "大东区",
                            "parent": 100601
                        },
                        {
                            "code": 10060104,
                            "name": "皇姑区",
                            "parent": 100601
                        },
                        {
                            "code": 10060105,
                            "name": "铁西区",
                            "parent": 100601
                        },
                        {
                            "code": 10060106,
                            "name": "苏家屯区",
                            "parent": 100601
                        },
                        {
                            "code": 10060107,
                            "name": "东陵区",
                            "parent": 100601
                        },
                        {
                            "code": 10060108,
                            "name": "新城子区",
                            "parent": 100601
                        },
                        {
                            "code": 10060109,
                            "name": "于洪区",
                            "parent": 100601
                        },
                        {
                            "code": 10060110,
                            "name": "辽中县",
                            "parent": 100601
                        },
                        {
                            "code": 10060111,
                            "name": "康平县",
                            "parent": 100601
                        },
                        {
                            "code": 10060112,
                            "name": "法库县",
                            "parent": 100601
                        },
                        {
                            "code": 10060113,
                            "name": "新民市",
                            "parent": 100601
                        }
                    ],
                    "code": 100601,
                    "name": "沈阳市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060201,
                            "name": "中山区",
                            "parent": 100602
                        },
                        {
                            "code": 10060202,
                            "name": "西岗区",
                            "parent": 100602
                        },
                        {
                            "code": 10060203,
                            "name": "沙河口区",
                            "parent": 100602
                        },
                        {
                            "code": 10060204,
                            "name": "甘井子区",
                            "parent": 100602
                        },
                        {
                            "code": 10060205,
                            "name": "旅顺口区",
                            "parent": 100602
                        },
                        {
                            "code": 10060206,
                            "name": "金州区",
                            "parent": 100602
                        },
                        {
                            "code": 10060207,
                            "name": "长海县",
                            "parent": 100602
                        },
                        {
                            "code": 10060208,
                            "name": "瓦房店市",
                            "parent": 100602
                        },
                        {
                            "code": 10060209,
                            "name": "普兰店市",
                            "parent": 100602
                        },
                        {
                            "code": 10060210,
                            "name": "庄河市",
                            "parent": 100602
                        }
                    ],
                    "code": 100602,
                    "name": "大连市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060301,
                            "name": "铁东区",
                            "parent": 100603
                        },
                        {
                            "code": 10060302,
                            "name": "铁西区",
                            "parent": 100603
                        },
                        {
                            "code": 10060303,
                            "name": "立山区",
                            "parent": 100603
                        },
                        {
                            "code": 10060304,
                            "name": "千山区",
                            "parent": 100603
                        },
                        {
                            "code": 10060305,
                            "name": "台安县",
                            "parent": 100603
                        },
                        {
                            "code": 10060306,
                            "name": "岫岩满族自治县",
                            "parent": 100603
                        },
                        {
                            "code": 10060307,
                            "name": "海城市",
                            "parent": 100603
                        }
                    ],
                    "code": 100603,
                    "name": "鞍山市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060401,
                            "name": "新抚区",
                            "parent": 100604
                        },
                        {
                            "code": 10060402,
                            "name": "露天区",
                            "parent": 100604
                        },
                        {
                            "code": 10060403,
                            "name": "望花区",
                            "parent": 100604
                        },
                        {
                            "code": 10060404,
                            "name": "顺城区",
                            "parent": 100604
                        },
                        {
                            "code": 10060405,
                            "name": "抚顺县",
                            "parent": 100604
                        },
                        {
                            "code": 10060406,
                            "name": "新宾满族自治县",
                            "parent": 100604
                        },
                        {
                            "code": 10060407,
                            "name": "清原满族自治县",
                            "parent": 100604
                        }
                    ],
                    "code": 100604,
                    "name": "抚顺市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060501,
                            "name": "平山区",
                            "parent": 100605
                        },
                        {
                            "code": 10060502,
                            "name": "溪湖区",
                            "parent": 100605
                        },
                        {
                            "code": 10060503,
                            "name": "明山区",
                            "parent": 100605
                        },
                        {
                            "code": 10060504,
                            "name": "南芬区",
                            "parent": 100605
                        },
                        {
                            "code": 10060505,
                            "name": "本溪满族自治县",
                            "parent": 100605
                        },
                        {
                            "code": 10060506,
                            "name": "桓仁满族自治县",
                            "parent": 100605
                        }
                    ],
                    "code": 100605,
                    "name": "本溪市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060601,
                            "name": "元宝区",
                            "parent": 100606
                        },
                        {
                            "code": 10060602,
                            "name": "振兴区",
                            "parent": 100606
                        },
                        {
                            "code": 10060603,
                            "name": "振安区",
                            "parent": 100606
                        },
                        {
                            "code": 10060604,
                            "name": "宽甸满族自治县",
                            "parent": 100606
                        },
                        {
                            "code": 10060605,
                            "name": "东港市",
                            "parent": 100606
                        },
                        {
                            "code": 10060606,
                            "name": "凤城市",
                            "parent": 100606
                        }
                    ],
                    "code": 100606,
                    "name": "丹东市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060701,
                            "name": "古塔区",
                            "parent": 100607
                        },
                        {
                            "code": 10060702,
                            "name": "凌河区",
                            "parent": 100607
                        },
                        {
                            "code": 10060703,
                            "name": "太和区",
                            "parent": 100607
                        },
                        {
                            "code": 10060704,
                            "name": "黑山县",
                            "parent": 100607
                        },
                        {
                            "code": 10060705,
                            "name": "义县",
                            "parent": 100607
                        },
                        {
                            "code": 10060706,
                            "name": "凌海市",
                            "parent": 100607
                        },
                        {
                            "code": 10060707,
                            "name": "北宁市",
                            "parent": 100607
                        }
                    ],
                    "code": 100607,
                    "name": "锦州市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060801,
                            "name": "站前区",
                            "parent": 100608
                        },
                        {
                            "code": 10060802,
                            "name": "西市区",
                            "parent": 100608
                        },
                        {
                            "code": 10060803,
                            "name": "鲅鱼圈区",
                            "parent": 100608
                        },
                        {
                            "code": 10060804,
                            "name": "老边区",
                            "parent": 100608
                        },
                        {
                            "code": 10060805,
                            "name": "盖州市",
                            "parent": 100608
                        },
                        {
                            "code": 10060806,
                            "name": "大石桥市",
                            "parent": 100608
                        }
                    ],
                    "code": 100608,
                    "name": "营口市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10060901,
                            "name": "海州区",
                            "parent": 100609
                        },
                        {
                            "code": 10060902,
                            "name": "新邱区",
                            "parent": 100609
                        },
                        {
                            "code": 10060903,
                            "name": "太平区",
                            "parent": 100609
                        },
                        {
                            "code": 10060904,
                            "name": "清河门区",
                            "parent": 100609
                        },
                        {
                            "code": 10060905,
                            "name": "细河区",
                            "parent": 100609
                        },
                        {
                            "code": 10060906,
                            "name": "阜新蒙古族自治县",
                            "parent": 100609
                        },
                        {
                            "code": 10060907,
                            "name": "彰武县",
                            "parent": 100609
                        }
                    ],
                    "code": 100609,
                    "name": "阜新市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10061001,
                            "name": "白塔区",
                            "parent": 100610
                        },
                        {
                            "code": 10061002,
                            "name": "文圣区",
                            "parent": 100610
                        },
                        {
                            "code": 10061003,
                            "name": "宏伟区",
                            "parent": 100610
                        },
                        {
                            "code": 10061004,
                            "name": "弓长岭区",
                            "parent": 100610
                        },
                        {
                            "code": 10061005,
                            "name": "太子河区",
                            "parent": 100610
                        },
                        {
                            "code": 10061006,
                            "name": "辽阳县",
                            "parent": 100610
                        },
                        {
                            "code": 10061007,
                            "name": "灯塔市",
                            "parent": 100610
                        }
                    ],
                    "code": 100610,
                    "name": "辽阳市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10061101,
                            "name": "双台子区",
                            "parent": 100611
                        },
                        {
                            "code": 10061102,
                            "name": "兴隆台区",
                            "parent": 100611
                        },
                        {
                            "code": 10061103,
                            "name": "大洼县",
                            "parent": 100611
                        },
                        {
                            "code": 10061104,
                            "name": "盘山县",
                            "parent": 100611
                        }
                    ],
                    "code": 100611,
                    "name": "盘锦市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10061201,
                            "name": "银州区",
                            "parent": 100612
                        },
                        {
                            "code": 10061202,
                            "name": "清河区",
                            "parent": 100612
                        },
                        {
                            "code": 10061203,
                            "name": "铁岭县",
                            "parent": 100612
                        },
                        {
                            "code": 10061204,
                            "name": "西丰县",
                            "parent": 100612
                        },
                        {
                            "code": 10061205,
                            "name": "昌图县",
                            "parent": 100612
                        },
                        {
                            "code": 10061206,
                            "name": "铁法市",
                            "parent": 100612
                        },
                        {
                            "code": 10061207,
                            "name": "开原市",
                            "parent": 100612
                        }
                    ],
                    "code": 100612,
                    "name": "铁岭市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10061301,
                            "name": "双塔区",
                            "parent": 100613
                        },
                        {
                            "code": 10061302,
                            "name": "龙城区",
                            "parent": 100613
                        },
                        {
                            "code": 10061303,
                            "name": "朝阳县",
                            "parent": 100613
                        },
                        {
                            "code": 10061304,
                            "name": "建平县",
                            "parent": 100613
                        },
                        {
                            "code": 10061305,
                            "name": "喀喇沁左翼蒙古族自治县",
                            "parent": 100613
                        },
                        {
                            "code": 10061306,
                            "name": "北票市",
                            "parent": 100613
                        },
                        {
                            "code": 10061307,
                            "name": "凌源市",
                            "parent": 100613
                        }
                    ],
                    "code": 100613,
                    "name": "朝阳市",
                    "parent": 1006
                },
                {
                    "child": [
                        {
                            "code": 10061401,
                            "name": "连山区",
                            "parent": 100614
                        },
                        {
                            "code": 10061402,
                            "name": "龙港区",
                            "parent": 100614
                        },
                        {
                            "code": 10061403,
                            "name": "南票区",
                            "parent": 100614
                        },
                        {
                            "code": 10061404,
                            "name": "绥中县",
                            "parent": 100614
                        },
                        {
                            "code": 10061405,
                            "name": "建昌县",
                            "parent": 100614
                        },
                        {
                            "code": 10061406,
                            "name": "兴城市",
                            "parent": 100614
                        }
                    ],
                    "code": 100614,
                    "name": "葫芦岛市",
                    "parent": 1006
                }
            ],
            "code": 1006,
            "name": "辽宁省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10070101,
                            "name": "南关区",
                            "parent": 100701
                        },
                        {
                            "code": 10070102,
                            "name": "宽城区",
                            "parent": 100701
                        },
                        {
                            "code": 10070103,
                            "name": "朝阳区",
                            "parent": 100701
                        },
                        {
                            "code": 10070104,
                            "name": "二道区",
                            "parent": 100701
                        },
                        {
                            "code": 10070105,
                            "name": "绿园区",
                            "parent": 100701
                        },
                        {
                            "code": 10070106,
                            "name": "双阳区",
                            "parent": 100701
                        },
                        {
                            "code": 10070107,
                            "name": "农安县",
                            "parent": 100701
                        },
                        {
                            "code": 10070108,
                            "name": "九台市",
                            "parent": 100701
                        },
                        {
                            "code": 10070109,
                            "name": "榆树市",
                            "parent": 100701
                        },
                        {
                            "code": 10070110,
                            "name": "德惠市",
                            "parent": 100701
                        }
                    ],
                    "code": 100701,
                    "name": "长春市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070201,
                            "name": "昌邑区",
                            "parent": 100702
                        },
                        {
                            "code": 10070202,
                            "name": "龙潭区",
                            "parent": 100702
                        },
                        {
                            "code": 10070203,
                            "name": "船营区",
                            "parent": 100702
                        },
                        {
                            "code": 10070204,
                            "name": "丰满区",
                            "parent": 100702
                        },
                        {
                            "code": 10070205,
                            "name": "永吉县",
                            "parent": 100702
                        },
                        {
                            "code": 10070206,
                            "name": "蛟河市",
                            "parent": 100702
                        },
                        {
                            "code": 10070207,
                            "name": "桦甸市",
                            "parent": 100702
                        },
                        {
                            "code": 10070208,
                            "name": "舒兰市",
                            "parent": 100702
                        },
                        {
                            "code": 10070209,
                            "name": "磐石市",
                            "parent": 100702
                        }
                    ],
                    "code": 100702,
                    "name": "吉林市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070301,
                            "name": "铁西区",
                            "parent": 100703
                        },
                        {
                            "code": 10070302,
                            "name": "铁东区",
                            "parent": 100703
                        },
                        {
                            "code": 10070303,
                            "name": "梨树县",
                            "parent": 100703
                        },
                        {
                            "code": 10070304,
                            "name": "伊通满族自治县",
                            "parent": 100703
                        },
                        {
                            "code": 10070305,
                            "name": "公主岭市",
                            "parent": 100703
                        },
                        {
                            "code": 10070306,
                            "name": "双辽市",
                            "parent": 100703
                        }
                    ],
                    "code": 100703,
                    "name": "四平市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070401,
                            "name": "龙山区",
                            "parent": 100704
                        },
                        {
                            "code": 10070402,
                            "name": "西安区",
                            "parent": 100704
                        },
                        {
                            "code": 10070403,
                            "name": "东丰县",
                            "parent": 100704
                        },
                        {
                            "code": 10070404,
                            "name": "东辽县",
                            "parent": 100704
                        }
                    ],
                    "code": 100704,
                    "name": "辽源市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070501,
                            "name": "东昌区",
                            "parent": 100705
                        },
                        {
                            "code": 10070502,
                            "name": "二道江区",
                            "parent": 100705
                        },
                        {
                            "code": 10070503,
                            "name": "通化县",
                            "parent": 100705
                        },
                        {
                            "code": 10070504,
                            "name": "辉南县",
                            "parent": 100705
                        },
                        {
                            "code": 10070505,
                            "name": "柳河县",
                            "parent": 100705
                        },
                        {
                            "code": 10070506,
                            "name": "梅河口市",
                            "parent": 100705
                        },
                        {
                            "code": 10070507,
                            "name": "集安市",
                            "parent": 100705
                        }
                    ],
                    "code": 100705,
                    "name": "通化市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070601,
                            "name": "八道江区",
                            "parent": 100706
                        },
                        {
                            "code": 10070602,
                            "name": "抚松县",
                            "parent": 100706
                        },
                        {
                            "code": 10070603,
                            "name": "靖宇县",
                            "parent": 100706
                        },
                        {
                            "code": 10070604,
                            "name": "长白朝鲜族自治县",
                            "parent": 100706
                        },
                        {
                            "code": 10070605,
                            "name": "江源县",
                            "parent": 100706
                        },
                        {
                            "code": 10070606,
                            "name": "临江市",
                            "parent": 100706
                        }
                    ],
                    "code": 100706,
                    "name": "白山市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070701,
                            "name": "宁江区",
                            "parent": 100707
                        },
                        {
                            "code": 10070702,
                            "name": "前郭尔罗斯蒙古族自治县",
                            "parent": 100707
                        },
                        {
                            "code": 10070703,
                            "name": "长岭县",
                            "parent": 100707
                        },
                        {
                            "code": 10070704,
                            "name": "乾安县",
                            "parent": 100707
                        },
                        {
                            "code": 10070705,
                            "name": "扶余县",
                            "parent": 100707
                        }
                    ],
                    "code": 100707,
                    "name": "松原市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070801,
                            "name": "洮北区",
                            "parent": 100708
                        },
                        {
                            "code": 10070802,
                            "name": "镇赉县",
                            "parent": 100708
                        },
                        {
                            "code": 10070803,
                            "name": "通榆县",
                            "parent": 100708
                        },
                        {
                            "code": 10070804,
                            "name": "洮南市",
                            "parent": 100708
                        },
                        {
                            "code": 10070805,
                            "name": "大安市",
                            "parent": 100708
                        }
                    ],
                    "code": 100708,
                    "name": "白城市",
                    "parent": 1007
                },
                {
                    "child": [
                        {
                            "code": 10070901,
                            "name": "延吉市",
                            "parent": 100709
                        },
                        {
                            "code": 10070902,
                            "name": "图们市",
                            "parent": 100709
                        },
                        {
                            "code": 10070903,
                            "name": "敦化市",
                            "parent": 100709
                        },
                        {
                            "code": 10070904,
                            "name": "珲春市",
                            "parent": 100709
                        },
                        {
                            "code": 10070905,
                            "name": "龙井市",
                            "parent": 100709
                        },
                        {
                            "code": 10070906,
                            "name": "和龙市",
                            "parent": 100709
                        },
                        {
                            "code": 10070907,
                            "name": "汪清县",
                            "parent": 100709
                        },
                        {
                            "code": 10070908,
                            "name": "安图县",
                            "parent": 100709
                        }
                    ],
                    "code": 100709,
                    "name": "延边朝鲜族自治州",
                    "parent": 1007
                }
            ],
            "code": 1007,
            "name": "吉林省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10080101,
                            "name": "道里区",
                            "parent": 100801
                        },
                        {
                            "code": 10080102,
                            "name": "南岗区",
                            "parent": 100801
                        },
                        {
                            "code": 10080103,
                            "name": "道外区",
                            "parent": 100801
                        },
                        {
                            "code": 10080104,
                            "name": "松北区",
                            "parent": 100801
                        },
                        {
                            "code": 10080105,
                            "name": "香坊区",
                            "parent": 100801
                        },
                        {
                            "code": 10080106,
                            "name": "阿成区",
                            "parent": 100801
                        },
                        {
                            "code": 10080107,
                            "name": "平房区",
                            "parent": 100801
                        },
                        {
                            "code": 10080108,
                            "name": "呼兰区",
                            "parent": 100801
                        },
                        {
                            "code": 10080109,
                            "name": "依兰县",
                            "parent": 100801
                        },
                        {
                            "code": 10080110,
                            "name": "方正县",
                            "parent": 100801
                        },
                        {
                            "code": 10080111,
                            "name": "宾县",
                            "parent": 100801
                        },
                        {
                            "code": 10080112,
                            "name": "巴彦县",
                            "parent": 100801
                        },
                        {
                            "code": 10080113,
                            "name": "木兰县",
                            "parent": 100801
                        },
                        {
                            "code": 10080114,
                            "name": "通河县",
                            "parent": 100801
                        },
                        {
                            "code": 10080115,
                            "name": "延寿县",
                            "parent": 100801
                        },
                        {
                            "code": 10080116,
                            "name": "双城市",
                            "parent": 100801
                        },
                        {
                            "code": 10080117,
                            "name": "尚志市",
                            "parent": 100801
                        },
                        {
                            "code": 10080118,
                            "name": "五常市",
                            "parent": 100801
                        }
                    ],
                    "code": 100801,
                    "name": "哈尔滨市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080201,
                            "name": "龙沙区",
                            "parent": 100802
                        },
                        {
                            "code": 10080202,
                            "name": "建华区",
                            "parent": 100802
                        },
                        {
                            "code": 10080203,
                            "name": "铁锋区",
                            "parent": 100802
                        },
                        {
                            "code": 10080204,
                            "name": "昂昂溪区",
                            "parent": 100802
                        },
                        {
                            "code": 10080205,
                            "name": "富拉尔基区",
                            "parent": 100802
                        },
                        {
                            "code": 10080206,
                            "name": "碾子山区",
                            "parent": 100802
                        },
                        {
                            "code": 10080207,
                            "name": "梅里斯达斡尔族区",
                            "parent": 100802
                        },
                        {
                            "code": 10080208,
                            "name": "龙江县",
                            "parent": 100802
                        },
                        {
                            "code": 10080209,
                            "name": "依安县",
                            "parent": 100802
                        },
                        {
                            "code": 10080210,
                            "name": "泰来县",
                            "parent": 100802
                        },
                        {
                            "code": 10080211,
                            "name": "甘南县",
                            "parent": 100802
                        },
                        {
                            "code": 10080212,
                            "name": "富裕县",
                            "parent": 100802
                        },
                        {
                            "code": 10080213,
                            "name": "克山县",
                            "parent": 100802
                        },
                        {
                            "code": 10080214,
                            "name": "克东县",
                            "parent": 100802
                        },
                        {
                            "code": 10080215,
                            "name": "拜泉县",
                            "parent": 100802
                        },
                        {
                            "code": 10080216,
                            "name": "讷河市",
                            "parent": 100802
                        }
                    ],
                    "code": 100802,
                    "name": "齐齐哈尔市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080301,
                            "name": "鸡冠区",
                            "parent": 100803
                        },
                        {
                            "code": 10080302,
                            "name": "恒山区",
                            "parent": 100803
                        },
                        {
                            "code": 10080303,
                            "name": "滴道区",
                            "parent": 100803
                        },
                        {
                            "code": 10080304,
                            "name": "梨树区",
                            "parent": 100803
                        },
                        {
                            "code": 10080305,
                            "name": "城子河区",
                            "parent": 100803
                        },
                        {
                            "code": 10080306,
                            "name": "麻山区",
                            "parent": 100803
                        },
                        {
                            "code": 10080307,
                            "name": "鸡东县",
                            "parent": 100803
                        },
                        {
                            "code": 10080308,
                            "name": "虎林市",
                            "parent": 100803
                        },
                        {
                            "code": 10080309,
                            "name": "密山市",
                            "parent": 100803
                        }
                    ],
                    "code": 100803,
                    "name": "鸡西市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080401,
                            "name": "向阳区",
                            "parent": 100804
                        },
                        {
                            "code": 10080402,
                            "name": "工农区",
                            "parent": 100804
                        },
                        {
                            "code": 10080403,
                            "name": "南山区",
                            "parent": 100804
                        },
                        {
                            "code": 10080404,
                            "name": "兴安区",
                            "parent": 100804
                        },
                        {
                            "code": 10080405,
                            "name": "东山区",
                            "parent": 100804
                        },
                        {
                            "code": 10080406,
                            "name": "兴山区",
                            "parent": 100804
                        },
                        {
                            "code": 10080407,
                            "name": "萝北县",
                            "parent": 100804
                        },
                        {
                            "code": 10080408,
                            "name": "绥滨县",
                            "parent": 100804
                        }
                    ],
                    "code": 100804,
                    "name": "鹤岗市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080501,
                            "name": "尖山区",
                            "parent": 100805
                        },
                        {
                            "code": 10080502,
                            "name": "岭东区",
                            "parent": 100805
                        },
                        {
                            "code": 10080503,
                            "name": "四方台区",
                            "parent": 100805
                        },
                        {
                            "code": 10080504,
                            "name": "宝山区",
                            "parent": 100805
                        },
                        {
                            "code": 10080505,
                            "name": "集贤县",
                            "parent": 100805
                        },
                        {
                            "code": 10080506,
                            "name": "友谊县",
                            "parent": 100805
                        },
                        {
                            "code": 10080507,
                            "name": "宝清县",
                            "parent": 100805
                        },
                        {
                            "code": 10080508,
                            "name": "饶河县",
                            "parent": 100805
                        }
                    ],
                    "code": 100805,
                    "name": "双鸭山市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080601,
                            "name": "萨尔图区",
                            "parent": 100806
                        },
                        {
                            "code": 10080602,
                            "name": "龙凤区",
                            "parent": 100806
                        },
                        {
                            "code": 10080603,
                            "name": "让胡路区",
                            "parent": 100806
                        },
                        {
                            "code": 10080604,
                            "name": "红岗区",
                            "parent": 100806
                        },
                        {
                            "code": 10080605,
                            "name": "大同区",
                            "parent": 100806
                        },
                        {
                            "code": 10080606,
                            "name": "肇州县",
                            "parent": 100806
                        },
                        {
                            "code": 10080607,
                            "name": "肇源县",
                            "parent": 100806
                        },
                        {
                            "code": 10080608,
                            "name": "林甸县",
                            "parent": 100806
                        },
                        {
                            "code": 10080609,
                            "name": "杜尔伯特蒙古族自治县",
                            "parent": 100806
                        }
                    ],
                    "code": 100806,
                    "name": "大庆市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080701,
                            "name": "伊春区",
                            "parent": 100807
                        },
                        {
                            "code": 10080702,
                            "name": "南岔区",
                            "parent": 100807
                        },
                        {
                            "code": 10080703,
                            "name": "友好区",
                            "parent": 100807
                        },
                        {
                            "code": 10080704,
                            "name": "西林区",
                            "parent": 100807
                        },
                        {
                            "code": 10080705,
                            "name": "翠峦区",
                            "parent": 100807
                        },
                        {
                            "code": 10080706,
                            "name": "新青区",
                            "parent": 100807
                        },
                        {
                            "code": 10080707,
                            "name": "美溪区",
                            "parent": 100807
                        },
                        {
                            "code": 10080708,
                            "name": "金山屯区",
                            "parent": 100807
                        },
                        {
                            "code": 10080709,
                            "name": "五营区",
                            "parent": 100807
                        },
                        {
                            "code": 10080710,
                            "name": "乌马河区",
                            "parent": 100807
                        },
                        {
                            "code": 10080711,
                            "name": "汤旺河区",
                            "parent": 100807
                        },
                        {
                            "code": 10080712,
                            "name": "带岭区",
                            "parent": 100807
                        },
                        {
                            "code": 10080713,
                            "name": "乌伊岭区",
                            "parent": 100807
                        },
                        {
                            "code": 10080714,
                            "name": "红星区",
                            "parent": 100807
                        },
                        {
                            "code": 10080715,
                            "name": "上甘岭区",
                            "parent": 100807
                        },
                        {
                            "code": 10080716,
                            "name": "嘉荫县",
                            "parent": 100807
                        },
                        {
                            "code": 10080717,
                            "name": "铁力市",
                            "parent": 100807
                        }
                    ],
                    "code": 100807,
                    "name": "伊春市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080801,
                            "name": "新兴区",
                            "parent": 100808
                        },
                        {
                            "code": 10080802,
                            "name": "桃山区",
                            "parent": 100808
                        },
                        {
                            "code": 10080803,
                            "name": "茄子河区",
                            "parent": 100808
                        },
                        {
                            "code": 10080804,
                            "name": "勃利县",
                            "parent": 100808
                        }
                    ],
                    "code": 100808,
                    "name": "七台河市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10080901,
                            "name": "东安区",
                            "parent": 100809
                        },
                        {
                            "code": 10080902,
                            "name": "阳明区",
                            "parent": 100809
                        },
                        {
                            "code": 10080903,
                            "name": "爱民区",
                            "parent": 100809
                        },
                        {
                            "code": 10080904,
                            "name": "西安区",
                            "parent": 100809
                        },
                        {
                            "code": 10080905,
                            "name": "东宁县",
                            "parent": 100809
                        },
                        {
                            "code": 10080906,
                            "name": "林口县",
                            "parent": 100809
                        },
                        {
                            "code": 10080907,
                            "name": "绥芬河市",
                            "parent": 100809
                        },
                        {
                            "code": 10080908,
                            "name": "海林市",
                            "parent": 100809
                        },
                        {
                            "code": 10080909,
                            "name": "宁安市",
                            "parent": 100809
                        },
                        {
                            "code": 10080910,
                            "name": "穆棱市",
                            "parent": 100809
                        }
                    ],
                    "code": 100809,
                    "name": "牡丹江市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10081001,
                            "name": "爱辉区",
                            "parent": 100810
                        },
                        {
                            "code": 10081002,
                            "name": "嫩江县",
                            "parent": 100810
                        },
                        {
                            "code": 10081003,
                            "name": "逊克县",
                            "parent": 100810
                        },
                        {
                            "code": 10081004,
                            "name": "孙吴县",
                            "parent": 100810
                        },
                        {
                            "code": 10081005,
                            "name": "北安市",
                            "parent": 100810
                        },
                        {
                            "code": 10081006,
                            "name": "五大连池市",
                            "parent": 100810
                        }
                    ],
                    "code": 100810,
                    "name": "黑河市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10081101,
                            "name": "绥化市",
                            "parent": 100811
                        },
                        {
                            "code": 10081102,
                            "name": "安达市",
                            "parent": 100811
                        },
                        {
                            "code": 10081103,
                            "name": "肇东市",
                            "parent": 100811
                        },
                        {
                            "code": 10081104,
                            "name": "海伦市",
                            "parent": 100811
                        },
                        {
                            "code": 10081105,
                            "name": "望奎县",
                            "parent": 100811
                        },
                        {
                            "code": 10081106,
                            "name": "兰西县",
                            "parent": 100811
                        },
                        {
                            "code": 10081107,
                            "name": "青冈县",
                            "parent": 100811
                        },
                        {
                            "code": 10081108,
                            "name": "庆安县",
                            "parent": 100811
                        },
                        {
                            "code": 10081109,
                            "name": "明水县",
                            "parent": 100811
                        },
                        {
                            "code": 10081110,
                            "name": "绥棱县",
                            "parent": 100811
                        }
                    ],
                    "code": 100811,
                    "name": "绥化市",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10081201,
                            "name": "呼玛县",
                            "parent": 100812
                        },
                        {
                            "code": 10081202,
                            "name": "塔河县",
                            "parent": 100812
                        },
                        {
                            "code": 10081203,
                            "name": "加格达奇区",
                            "parent": 100812
                        },
                        {
                            "code": 10081204,
                            "name": "呼中区",
                            "parent": 100812
                        },
                        {
                            "code": 10081205,
                            "name": "新林区",
                            "parent": 100812
                        },
                        {
                            "code": 10081206,
                            "name": "松岭区",
                            "parent": 100812
                        },
                        {
                            "code": 10081207,
                            "name": "漠河县",
                            "parent": 100812
                        }
                    ],
                    "code": 100812,
                    "name": "大兴安岭地区",
                    "parent": 1008
                },
                {
                    "child": [
                        {
                            "code": 10081301,
                            "name": "向阳区",
                            "parent": 100813
                        },
                        {
                            "code": 10081302,
                            "name": "前进区",
                            "parent": 100813
                        },
                        {
                            "code": 10081303,
                            "name": "东风区",
                            "parent": 100813
                        },
                        {
                            "code": 10081304,
                            "name": "郊区",
                            "parent": 100813
                        },
                        {
                            "code": 10081305,
                            "name": "桦南县",
                            "parent": 100813
                        },
                        {
                            "code": 10081306,
                            "name": "桦川县",
                            "parent": 100813
                        },
                        {
                            "code": 10081307,
                            "name": "汤原县",
                            "parent": 100813
                        },
                        {
                            "code": 10081308,
                            "name": "抚远县",
                            "parent": 100813
                        },
                        {
                            "code": 10081309,
                            "name": "同江市",
                            "parent": 100813
                        },
                        {
                            "code": 10081310,
                            "name": "富锦市",
                            "parent": 100813
                        }
                    ],
                    "code": 100813,
                    "name": "佳木斯",
                    "parent": 1008
                }
            ],
            "code": 1008,
            "name": "黑龙江省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10090101,
                            "name": "浦东新区",
                            "parent": 100901
                        },
                        {
                            "code": 10090102,
                            "name": "徐汇区",
                            "parent": 100901
                        },
                        {
                            "code": 10090103,
                            "name": "黄浦区",
                            "parent": 100901
                        },
                        {
                            "code": 10090104,
                            "name": "杨浦区",
                            "parent": 100901
                        },
                        {
                            "code": 10090105,
                            "name": "虹口区",
                            "parent": 100901
                        },
                        {
                            "code": 10090106,
                            "name": "闵行区",
                            "parent": 100901
                        },
                        {
                            "code": 10090107,
                            "name": "长宁区",
                            "parent": 100901
                        },
                        {
                            "code": 10090108,
                            "name": "普陀区",
                            "parent": 100901
                        },
                        {
                            "code": 10090109,
                            "name": "宝山区",
                            "parent": 100901
                        },
                        {
                            "code": 10090110,
                            "name": "静安区",
                            "parent": 100901
                        },
                        {
                            "code": 10090111,
                            "name": "闸北区",
                            "parent": 100901
                        },
                        {
                            "code": 10090112,
                            "name": "松江区",
                            "parent": 100901
                        },
                        {
                            "code": 10090113,
                            "name": "嘉定区",
                            "parent": 100901
                        },
                        {
                            "code": 10090114,
                            "name": "金山区",
                            "parent": 100901
                        },
                        {
                            "code": 10090115,
                            "name": "青浦区",
                            "parent": 100901
                        },
                        {
                            "code": 10090116,
                            "name": "奉贤区",
                            "parent": 100901
                        },
                        {
                            "code": 10090117,
                            "name": "崇明县",
                            "parent": 100901
                        }
                    ],
                    "code": 100901,
                    "name": "上海市",
                    "parent": 1009
                }
            ],
            "code": 1009,
            "name": "上海市",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10100101,
                            "name": "玄武区",
                            "parent": 101001
                        },
                        {
                            "code": 10100102,
                            "name": "秦淮区",
                            "parent": 101001
                        },
                        {
                            "code": 10100103,
                            "name": "建邺区",
                            "parent": 101001
                        },
                        {
                            "code": 10100104,
                            "name": "鼓楼区",
                            "parent": 101001
                        },
                        {
                            "code": 10100105,
                            "name": "浦口区",
                            "parent": 101001
                        },
                        {
                            "code": 10100106,
                            "name": "栖霞区",
                            "parent": 101001
                        },
                        {
                            "code": 10100107,
                            "name": "雨花台区",
                            "parent": 101001
                        },
                        {
                            "code": 10100108,
                            "name": "江宁区",
                            "parent": 101001
                        },
                        {
                            "code": 10100109,
                            "name": "六合区",
                            "parent": 101001
                        },
                        {
                            "code": 10100110,
                            "name": "溧水区",
                            "parent": 101001
                        },
                        {
                            "code": 10100111,
                            "name": "高淳区",
                            "parent": 101001
                        }
                    ],
                    "code": 101001,
                    "name": "南京市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100201,
                            "name": "崇安区",
                            "parent": 101002
                        },
                        {
                            "code": 10100202,
                            "name": "南长区",
                            "parent": 101002
                        },
                        {
                            "code": 10100203,
                            "name": "北塘区",
                            "parent": 101002
                        },
                        {
                            "code": 10100204,
                            "name": "郊区",
                            "parent": 101002
                        },
                        {
                            "code": 10100205,
                            "name": "马山区",
                            "parent": 101002
                        },
                        {
                            "code": 10100206,
                            "name": "江阴市",
                            "parent": 101002
                        },
                        {
                            "code": 10100207,
                            "name": "宜兴市",
                            "parent": 101002
                        },
                        {
                            "code": 10100208,
                            "name": "锡山市",
                            "parent": 101002
                        }
                    ],
                    "code": 101002,
                    "name": "无锡市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100301,
                            "name": "鼓楼区",
                            "parent": 101003
                        },
                        {
                            "code": 10100302,
                            "name": "云龙区",
                            "parent": 101003
                        },
                        {
                            "code": 10100303,
                            "name": "九里区",
                            "parent": 101003
                        },
                        {
                            "code": 10100304,
                            "name": "贾汪区",
                            "parent": 101003
                        },
                        {
                            "code": 10100305,
                            "name": "泉山区",
                            "parent": 101003
                        },
                        {
                            "code": 10100306,
                            "name": "丰县",
                            "parent": 101003
                        },
                        {
                            "code": 10100307,
                            "name": "沛县",
                            "parent": 101003
                        },
                        {
                            "code": 10100308,
                            "name": "铜山县",
                            "parent": 101003
                        },
                        {
                            "code": 10100309,
                            "name": "睢宁县",
                            "parent": 101003
                        },
                        {
                            "code": 10100310,
                            "name": "新沂市",
                            "parent": 101003
                        },
                        {
                            "code": 10100311,
                            "name": "邳州市",
                            "parent": 101003
                        }
                    ],
                    "code": 101003,
                    "name": "徐州市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100401,
                            "name": "天宁区",
                            "parent": 101004
                        },
                        {
                            "code": 10100402,
                            "name": "钟楼区",
                            "parent": 101004
                        },
                        {
                            "code": 10100403,
                            "name": "戚墅堰区",
                            "parent": 101004
                        },
                        {
                            "code": 10100404,
                            "name": "郊区",
                            "parent": 101004
                        },
                        {
                            "code": 10100405,
                            "name": "溧阳市",
                            "parent": 101004
                        },
                        {
                            "code": 10100406,
                            "name": "金坛市",
                            "parent": 101004
                        },
                        {
                            "code": 10100407,
                            "name": "武进市",
                            "parent": 101004
                        }
                    ],
                    "code": 101004,
                    "name": "常州市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100501,
                            "name": "沧浪区",
                            "parent": 101005
                        },
                        {
                            "code": 10100502,
                            "name": "平江区",
                            "parent": 101005
                        },
                        {
                            "code": 10100503,
                            "name": "金阊区",
                            "parent": 101005
                        },
                        {
                            "code": 10100504,
                            "name": "郊区",
                            "parent": 101005
                        },
                        {
                            "code": 10100505,
                            "name": "常熟市",
                            "parent": 101005
                        },
                        {
                            "code": 10100506,
                            "name": "张家港市",
                            "parent": 101005
                        },
                        {
                            "code": 10100507,
                            "name": "昆山市",
                            "parent": 101005
                        },
                        {
                            "code": 10100508,
                            "name": "吴江市",
                            "parent": 101005
                        },
                        {
                            "code": 10100509,
                            "name": "太仓市",
                            "parent": 101005
                        },
                        {
                            "code": 10100510,
                            "name": "吴县市",
                            "parent": 101005
                        }
                    ],
                    "code": 101005,
                    "name": "苏州市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100601,
                            "name": "崇川区",
                            "parent": 101006
                        },
                        {
                            "code": 10100602,
                            "name": "港闸区",
                            "parent": 101006
                        },
                        {
                            "code": 10100603,
                            "name": "海安县",
                            "parent": 101006
                        },
                        {
                            "code": 10100604,
                            "name": "如东县",
                            "parent": 101006
                        },
                        {
                            "code": 10100605,
                            "name": "启东市",
                            "parent": 101006
                        },
                        {
                            "code": 10100606,
                            "name": "如皋市",
                            "parent": 101006
                        },
                        {
                            "code": 10100607,
                            "name": "通州市",
                            "parent": 101006
                        },
                        {
                            "code": 10100608,
                            "name": "海门市",
                            "parent": 101006
                        }
                    ],
                    "code": 101006,
                    "name": "南通市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100701,
                            "name": "连云区",
                            "parent": 101007
                        },
                        {
                            "code": 10100702,
                            "name": "云台区",
                            "parent": 101007
                        },
                        {
                            "code": 10100703,
                            "name": "新浦区",
                            "parent": 101007
                        },
                        {
                            "code": 10100704,
                            "name": "海州区",
                            "parent": 101007
                        },
                        {
                            "code": 10100705,
                            "name": "赣榆县",
                            "parent": 101007
                        },
                        {
                            "code": 10100706,
                            "name": "东海县",
                            "parent": 101007
                        },
                        {
                            "code": 10100707,
                            "name": "灌云县",
                            "parent": 101007
                        },
                        {
                            "code": 10100708,
                            "name": "灌南县",
                            "parent": 101007
                        }
                    ],
                    "code": 101007,
                    "name": "连云港市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100801,
                            "name": "清河区",
                            "parent": 101008
                        },
                        {
                            "code": 10100802,
                            "name": "清浦区",
                            "parent": 101008
                        },
                        {
                            "code": 10100803,
                            "name": "淮阴区",
                            "parent": 101008
                        },
                        {
                            "code": 10100804,
                            "name": "涟水县",
                            "parent": 101008
                        },
                        {
                            "code": 10100805,
                            "name": "洪泽县",
                            "parent": 101008
                        },
                        {
                            "code": 10100806,
                            "name": "盱眙县",
                            "parent": 101008
                        },
                        {
                            "code": 10100807,
                            "name": "金湖县",
                            "parent": 101008
                        },
                        {
                            "code": 10100808,
                            "name": "淮安区",
                            "parent": 101008
                        }
                    ],
                    "code": 101008,
                    "name": "淮安市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10100901,
                            "name": "城区",
                            "parent": 101009
                        },
                        {
                            "code": 10100902,
                            "name": "响水县",
                            "parent": 101009
                        },
                        {
                            "code": 10100903,
                            "name": "滨海县",
                            "parent": 101009
                        },
                        {
                            "code": 10100904,
                            "name": "阜宁县",
                            "parent": 101009
                        },
                        {
                            "code": 10100905,
                            "name": "射阳县",
                            "parent": 101009
                        },
                        {
                            "code": 10100906,
                            "name": "建湖县",
                            "parent": 101009
                        },
                        {
                            "code": 10100907,
                            "name": "盐都县",
                            "parent": 101009
                        },
                        {
                            "code": 10100908,
                            "name": "东台市",
                            "parent": 101009
                        },
                        {
                            "code": 10100909,
                            "name": "大丰市",
                            "parent": 101009
                        }
                    ],
                    "code": 101009,
                    "name": "盐城市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10101001,
                            "name": "广陵区",
                            "parent": 101010
                        },
                        {
                            "code": 10101002,
                            "name": "郊区",
                            "parent": 101010
                        },
                        {
                            "code": 10101003,
                            "name": "宝应县",
                            "parent": 101010
                        },
                        {
                            "code": 10101004,
                            "name": "邗江县",
                            "parent": 101010
                        },
                        {
                            "code": 10101005,
                            "name": "仪征市",
                            "parent": 101010
                        },
                        {
                            "code": 10101006,
                            "name": "高邮市",
                            "parent": 101010
                        },
                        {
                            "code": 10101007,
                            "name": "江都市",
                            "parent": 101010
                        }
                    ],
                    "code": 101010,
                    "name": "扬州市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10101101,
                            "name": "京口区",
                            "parent": 101011
                        },
                        {
                            "code": 10101102,
                            "name": "润州区",
                            "parent": 101011
                        },
                        {
                            "code": 10101103,
                            "name": "丹徒县",
                            "parent": 101011
                        },
                        {
                            "code": 10101104,
                            "name": "丹阳市",
                            "parent": 101011
                        },
                        {
                            "code": 10101105,
                            "name": "扬中市",
                            "parent": 101011
                        },
                        {
                            "code": 10101106,
                            "name": "句容市",
                            "parent": 101011
                        }
                    ],
                    "code": 101011,
                    "name": "镇江市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10101201,
                            "name": "海陵区",
                            "parent": 101012
                        },
                        {
                            "code": 10101202,
                            "name": "高港区",
                            "parent": 101012
                        },
                        {
                            "code": 10101203,
                            "name": "兴化市",
                            "parent": 101012
                        },
                        {
                            "code": 10101204,
                            "name": "靖江市",
                            "parent": 101012
                        },
                        {
                            "code": 10101205,
                            "name": "泰兴市",
                            "parent": 101012
                        },
                        {
                            "code": 10101206,
                            "name": "姜堰市",
                            "parent": 101012
                        }
                    ],
                    "code": 101012,
                    "name": "泰州市",
                    "parent": 1010
                },
                {
                    "child": [
                        {
                            "code": 10101301,
                            "name": "宿城区",
                            "parent": 101013
                        },
                        {
                            "code": 10101302,
                            "name": "宿豫县",
                            "parent": 101013
                        },
                        {
                            "code": 10101303,
                            "name": "沭阳县",
                            "parent": 101013
                        },
                        {
                            "code": 10101304,
                            "name": "泗阳县",
                            "parent": 101013
                        },
                        {
                            "code": 10101305,
                            "name": "泗洪县",
                            "parent": 101013
                        }
                    ],
                    "code": 101013,
                    "name": "宿迁市",
                    "parent": 1010
                }
            ],
            "code": 1010,
            "name": "江苏省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10110101,
                            "name": "上城区",
                            "parent": 101101
                        },
                        {
                            "code": 10110102,
                            "name": "下城区",
                            "parent": 101101
                        },
                        {
                            "code": 10110103,
                            "name": "江干区",
                            "parent": 101101
                        },
                        {
                            "code": 10110104,
                            "name": "拱墅区",
                            "parent": 101101
                        },
                        {
                            "code": 10110105,
                            "name": "西湖区",
                            "parent": 101101
                        },
                        {
                            "code": 10110106,
                            "name": "滨江区",
                            "parent": 101101
                        },
                        {
                            "code": 10110107,
                            "name": "桐庐县",
                            "parent": 101101
                        },
                        {
                            "code": 10110108,
                            "name": "淳安县",
                            "parent": 101101
                        },
                        {
                            "code": 10110109,
                            "name": "萧山市",
                            "parent": 101101
                        },
                        {
                            "code": 10110110,
                            "name": "建德市",
                            "parent": 101101
                        },
                        {
                            "code": 10110111,
                            "name": "富阳市",
                            "parent": 101101
                        },
                        {
                            "code": 10110112,
                            "name": "余杭市",
                            "parent": 101101
                        },
                        {
                            "code": 10110113,
                            "name": "临安市",
                            "parent": 101101
                        }
                    ],
                    "code": 101101,
                    "name": "杭州市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110201,
                            "name": "海曙区",
                            "parent": 101102
                        },
                        {
                            "code": 10110202,
                            "name": "江东区",
                            "parent": 101102
                        },
                        {
                            "code": 10110203,
                            "name": "江北区",
                            "parent": 101102
                        },
                        {
                            "code": 10110204,
                            "name": "北仑区",
                            "parent": 101102
                        },
                        {
                            "code": 10110205,
                            "name": "镇海区",
                            "parent": 101102
                        },
                        {
                            "code": 10110206,
                            "name": "象山县",
                            "parent": 101102
                        },
                        {
                            "code": 10110207,
                            "name": "宁海县",
                            "parent": 101102
                        },
                        {
                            "code": 10110208,
                            "name": "鄞县",
                            "parent": 101102
                        },
                        {
                            "code": 10110209,
                            "name": "余姚市",
                            "parent": 101102
                        },
                        {
                            "code": 10110210,
                            "name": "慈溪市",
                            "parent": 101102
                        },
                        {
                            "code": 10110211,
                            "name": "奉化市",
                            "parent": 101102
                        }
                    ],
                    "code": 101102,
                    "name": "宁波市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110301,
                            "name": "鹿城区",
                            "parent": 101103
                        },
                        {
                            "code": 10110302,
                            "name": "龙湾区",
                            "parent": 101103
                        },
                        {
                            "code": 10110303,
                            "name": "瓯海区",
                            "parent": 101103
                        },
                        {
                            "code": 10110304,
                            "name": "洞头县",
                            "parent": 101103
                        },
                        {
                            "code": 10110305,
                            "name": "永嘉县",
                            "parent": 101103
                        },
                        {
                            "code": 10110306,
                            "name": "平阳县",
                            "parent": 101103
                        },
                        {
                            "code": 10110307,
                            "name": "苍南县",
                            "parent": 101103
                        },
                        {
                            "code": 10110308,
                            "name": "文成县",
                            "parent": 101103
                        },
                        {
                            "code": 10110309,
                            "name": "泰顺县",
                            "parent": 101103
                        },
                        {
                            "code": 10110310,
                            "name": "瑞安市",
                            "parent": 101103
                        },
                        {
                            "code": 10110311,
                            "name": "乐清市",
                            "parent": 101103
                        }
                    ],
                    "code": 101103,
                    "name": "温州市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110401,
                            "name": "秀城区",
                            "parent": 101104
                        },
                        {
                            "code": 10110402,
                            "name": "郊区",
                            "parent": 101104
                        },
                        {
                            "code": 10110403,
                            "name": "嘉善县",
                            "parent": 101104
                        },
                        {
                            "code": 10110404,
                            "name": "海盐县",
                            "parent": 101104
                        },
                        {
                            "code": 10110405,
                            "name": "海宁市",
                            "parent": 101104
                        },
                        {
                            "code": 10110406,
                            "name": "平湖市",
                            "parent": 101104
                        },
                        {
                            "code": 10110407,
                            "name": "桐乡市",
                            "parent": 101104
                        }
                    ],
                    "code": 101104,
                    "name": "嘉兴市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110501,
                            "name": "吴兴区",
                            "parent": 101105
                        },
                        {
                            "code": 10110502,
                            "name": "南浔区",
                            "parent": 101105
                        },
                        {
                            "code": 10110503,
                            "name": "德清县",
                            "parent": 101105
                        },
                        {
                            "code": 10110504,
                            "name": "长兴县",
                            "parent": 101105
                        },
                        {
                            "code": 10110505,
                            "name": "安吉县",
                            "parent": 101105
                        }
                    ],
                    "code": 101105,
                    "name": "湖州市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110601,
                            "name": "越城区",
                            "parent": 101106
                        },
                        {
                            "code": 10110602,
                            "name": "绍兴县",
                            "parent": 101106
                        },
                        {
                            "code": 10110603,
                            "name": "新昌县",
                            "parent": 101106
                        },
                        {
                            "code": 10110604,
                            "name": "诸暨市",
                            "parent": 101106
                        },
                        {
                            "code": 10110605,
                            "name": "上虞市",
                            "parent": 101106
                        },
                        {
                            "code": 10110606,
                            "name": "嵊州市",
                            "parent": 101106
                        }
                    ],
                    "code": 101106,
                    "name": "绍兴市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110701,
                            "name": "婺城区",
                            "parent": 101107
                        },
                        {
                            "code": 10110702,
                            "name": "金华县",
                            "parent": 101107
                        },
                        {
                            "code": 10110703,
                            "name": "武义县",
                            "parent": 101107
                        },
                        {
                            "code": 10110704,
                            "name": "浦江县",
                            "parent": 101107
                        },
                        {
                            "code": 10110705,
                            "name": "磐安县",
                            "parent": 101107
                        },
                        {
                            "code": 10110706,
                            "name": "兰溪市",
                            "parent": 101107
                        },
                        {
                            "code": 10110707,
                            "name": "义乌市",
                            "parent": 101107
                        },
                        {
                            "code": 10110708,
                            "name": "东阳市",
                            "parent": 101107
                        },
                        {
                            "code": 10110709,
                            "name": "永康市",
                            "parent": 101107
                        }
                    ],
                    "code": 101107,
                    "name": "金华市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110801,
                            "name": "柯城区",
                            "parent": 101108
                        },
                        {
                            "code": 10110802,
                            "name": "衢县",
                            "parent": 101108
                        },
                        {
                            "code": 10110803,
                            "name": "常山县",
                            "parent": 101108
                        },
                        {
                            "code": 10110804,
                            "name": "开化县",
                            "parent": 101108
                        },
                        {
                            "code": 10110805,
                            "name": "龙游县",
                            "parent": 101108
                        },
                        {
                            "code": 10110806,
                            "name": "江山市",
                            "parent": 101108
                        }
                    ],
                    "code": 101108,
                    "name": "衢州市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10110901,
                            "name": "定海区",
                            "parent": 101109
                        },
                        {
                            "code": 10110902,
                            "name": "普陀区",
                            "parent": 101109
                        },
                        {
                            "code": 10110903,
                            "name": "岱山县",
                            "parent": 101109
                        },
                        {
                            "code": 10110904,
                            "name": "嵊泗县",
                            "parent": 101109
                        }
                    ],
                    "code": 101109,
                    "name": "舟山市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10111001,
                            "name": "椒江区",
                            "parent": 101110
                        },
                        {
                            "code": 10111002,
                            "name": "黄岩区",
                            "parent": 101110
                        },
                        {
                            "code": 10111003,
                            "name": "路桥区",
                            "parent": 101110
                        },
                        {
                            "code": 10111004,
                            "name": "玉环县",
                            "parent": 101110
                        },
                        {
                            "code": 10111005,
                            "name": "三门县",
                            "parent": 101110
                        },
                        {
                            "code": 10111006,
                            "name": "天台县",
                            "parent": 101110
                        },
                        {
                            "code": 10111007,
                            "name": "仙居县",
                            "parent": 101110
                        },
                        {
                            "code": 10111008,
                            "name": "温岭市",
                            "parent": 101110
                        },
                        {
                            "code": 10111009,
                            "name": "临海市",
                            "parent": 101110
                        }
                    ],
                    "code": 101110,
                    "name": "台州市",
                    "parent": 1011
                },
                {
                    "child": [
                        {
                            "code": 10111101,
                            "name": "丽水市",
                            "parent": 101111
                        },
                        {
                            "code": 10111102,
                            "name": "龙泉市",
                            "parent": 101111
                        },
                        {
                            "code": 10111103,
                            "name": "青田县",
                            "parent": 101111
                        },
                        {
                            "code": 10111104,
                            "name": "云和县",
                            "parent": 101111
                        },
                        {
                            "code": 10111105,
                            "name": "庆元县",
                            "parent": 101111
                        },
                        {
                            "code": 10111106,
                            "name": "缙云县",
                            "parent": 101111
                        },
                        {
                            "code": 10111107,
                            "name": "遂昌县",
                            "parent": 101111
                        },
                        {
                            "code": 10111108,
                            "name": "松阳县",
                            "parent": 101111
                        },
                        {
                            "code": 10111109,
                            "name": "景宁畲族自治县",
                            "parent": 101111
                        }
                    ],
                    "code": 101111,
                    "name": "丽水市",
                    "parent": 1011
                }
            ],
            "code": 1011,
            "name": "浙江省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10120101,
                            "name": "东市区",
                            "parent": 101201
                        },
                        {
                            "code": 10120102,
                            "name": "中市区",
                            "parent": 101201
                        },
                        {
                            "code": 10120103,
                            "name": "西市区",
                            "parent": 101201
                        },
                        {
                            "code": 10120104,
                            "name": "郊区",
                            "parent": 101201
                        },
                        {
                            "code": 10120105,
                            "name": "长丰县",
                            "parent": 101201
                        },
                        {
                            "code": 10120106,
                            "name": "肥东县",
                            "parent": 101201
                        },
                        {
                            "code": 10120107,
                            "name": "肥西县",
                            "parent": 101201
                        }
                    ],
                    "code": 101201,
                    "name": "合肥市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120201,
                            "name": "镜湖区",
                            "parent": 101202
                        },
                        {
                            "code": 10120202,
                            "name": "马塘区",
                            "parent": 101202
                        },
                        {
                            "code": 10120203,
                            "name": "新芜区",
                            "parent": 101202
                        },
                        {
                            "code": 10120204,
                            "name": "鸠江区",
                            "parent": 101202
                        },
                        {
                            "code": 10120205,
                            "name": "芜湖县",
                            "parent": 101202
                        },
                        {
                            "code": 10120206,
                            "name": "繁昌县",
                            "parent": 101202
                        },
                        {
                            "code": 10120207,
                            "name": "南陵县",
                            "parent": 101202
                        }
                    ],
                    "code": 101202,
                    "name": "芜湖市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120301,
                            "name": "东市区",
                            "parent": 101203
                        },
                        {
                            "code": 10120302,
                            "name": "中市区",
                            "parent": 101203
                        },
                        {
                            "code": 10120303,
                            "name": "西市区",
                            "parent": 101203
                        },
                        {
                            "code": 10120304,
                            "name": "郊区",
                            "parent": 101203
                        },
                        {
                            "code": 10120305,
                            "name": "怀远县",
                            "parent": 101203
                        },
                        {
                            "code": 10120306,
                            "name": "五河县",
                            "parent": 101203
                        },
                        {
                            "code": 10120307,
                            "name": "固镇县",
                            "parent": 101203
                        }
                    ],
                    "code": 101203,
                    "name": "蚌埠市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120401,
                            "name": "大通区",
                            "parent": 101204
                        },
                        {
                            "code": 10120402,
                            "name": "田家庵区",
                            "parent": 101204
                        },
                        {
                            "code": 10120403,
                            "name": "谢家集区",
                            "parent": 101204
                        },
                        {
                            "code": 10120404,
                            "name": "八公山区",
                            "parent": 101204
                        },
                        {
                            "code": 10120405,
                            "name": "潘集区",
                            "parent": 101204
                        },
                        {
                            "code": 10120406,
                            "name": "凤台县",
                            "parent": 101204
                        }
                    ],
                    "code": 101204,
                    "name": "淮南市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120501,
                            "name": "金家庄区",
                            "parent": 101205
                        },
                        {
                            "code": 10120502,
                            "name": "花山区",
                            "parent": 101205
                        },
                        {
                            "code": 10120503,
                            "name": "雨山区",
                            "parent": 101205
                        },
                        {
                            "code": 10120504,
                            "name": "当涂县",
                            "parent": 101205
                        }
                    ],
                    "code": 101205,
                    "name": "马鞍山市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120601,
                            "name": "杜集区",
                            "parent": 101206
                        },
                        {
                            "code": 10120602,
                            "name": "相山区",
                            "parent": 101206
                        },
                        {
                            "code": 10120603,
                            "name": "烈山区",
                            "parent": 101206
                        },
                        {
                            "code": 10120604,
                            "name": "濉溪县",
                            "parent": 101206
                        }
                    ],
                    "code": 101206,
                    "name": "淮北市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120701,
                            "name": "铜官山区",
                            "parent": 101207
                        },
                        {
                            "code": 10120702,
                            "name": "狮子山区",
                            "parent": 101207
                        },
                        {
                            "code": 10120703,
                            "name": "郊区",
                            "parent": 101207
                        },
                        {
                            "code": 10120704,
                            "name": "铜陵县",
                            "parent": 101207
                        }
                    ],
                    "code": 101207,
                    "name": "铜陵市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120801,
                            "name": "迎江区",
                            "parent": 101208
                        },
                        {
                            "code": 10120802,
                            "name": "大观区",
                            "parent": 101208
                        },
                        {
                            "code": 10120803,
                            "name": "郊区",
                            "parent": 101208
                        },
                        {
                            "code": 10120804,
                            "name": "怀宁县",
                            "parent": 101208
                        },
                        {
                            "code": 10120805,
                            "name": "枞阳县",
                            "parent": 101208
                        },
                        {
                            "code": 10120806,
                            "name": "潜山县",
                            "parent": 101208
                        },
                        {
                            "code": 10120807,
                            "name": "太湖县",
                            "parent": 101208
                        },
                        {
                            "code": 10120808,
                            "name": "宿松县",
                            "parent": 101208
                        },
                        {
                            "code": 10120809,
                            "name": "望江县",
                            "parent": 101208
                        },
                        {
                            "code": 10120810,
                            "name": "岳西县",
                            "parent": 101208
                        },
                        {
                            "code": 10120811,
                            "name": "桐城市",
                            "parent": 101208
                        }
                    ],
                    "code": 101208,
                    "name": "安庆市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10120901,
                            "name": "屯溪区",
                            "parent": 101209
                        },
                        {
                            "code": 10120902,
                            "name": "黄山区",
                            "parent": 101209
                        },
                        {
                            "code": 10120903,
                            "name": "徽州区",
                            "parent": 101209
                        },
                        {
                            "code": 10120904,
                            "name": "歙县",
                            "parent": 101209
                        },
                        {
                            "code": 10120905,
                            "name": "休宁县",
                            "parent": 101209
                        },
                        {
                            "code": 10120906,
                            "name": "黟县",
                            "parent": 101209
                        },
                        {
                            "code": 10120907,
                            "name": "祁门县",
                            "parent": 101209
                        }
                    ],
                    "code": 101209,
                    "name": "黄山市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121001,
                            "name": "琅琊区",
                            "parent": 101210
                        },
                        {
                            "code": 10121002,
                            "name": "南谯区",
                            "parent": 101210
                        },
                        {
                            "code": 10121003,
                            "name": "来安县",
                            "parent": 101210
                        },
                        {
                            "code": 10121004,
                            "name": "全椒县",
                            "parent": 101210
                        },
                        {
                            "code": 10121005,
                            "name": "定远县",
                            "parent": 101210
                        },
                        {
                            "code": 10121006,
                            "name": "凤阳县",
                            "parent": 101210
                        },
                        {
                            "code": 10121007,
                            "name": "天长市",
                            "parent": 101210
                        },
                        {
                            "code": 10121008,
                            "name": "明光市",
                            "parent": 101210
                        }
                    ],
                    "code": 101210,
                    "name": "滁州市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121101,
                            "name": "颍州区",
                            "parent": 101211
                        },
                        {
                            "code": 10121102,
                            "name": "颍东区",
                            "parent": 101211
                        },
                        {
                            "code": 10121103,
                            "name": "颍泉区",
                            "parent": 101211
                        },
                        {
                            "code": 10121104,
                            "name": "临泉县",
                            "parent": 101211
                        },
                        {
                            "code": 10121105,
                            "name": "太和县",
                            "parent": 101211
                        },
                        {
                            "code": 10121106,
                            "name": "阜南县",
                            "parent": 101211
                        },
                        {
                            "code": 10121107,
                            "name": "颍上县",
                            "parent": 101211
                        },
                        {
                            "code": 10121108,
                            "name": "界首市",
                            "parent": 101211
                        }
                    ],
                    "code": 101211,
                    "name": "阜阳市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121201,
                            "name": " 墉桥区",
                            "parent": 101212
                        },
                        {
                            "code": 10121202,
                            "name": "砀山县",
                            "parent": 101212
                        },
                        {
                            "code": 10121203,
                            "name": "萧县",
                            "parent": 101212
                        },
                        {
                            "code": 10121204,
                            "name": "灵璧县",
                            "parent": 101212
                        },
                        {
                            "code": 10121205,
                            "name": "泗县",
                            "parent": 101212
                        }
                    ],
                    "code": 101212,
                    "name": "宿州市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121301,
                            "name": "金安区",
                            "parent": 101213
                        },
                        {
                            "code": 10121302,
                            "name": "裕安区",
                            "parent": 101213
                        },
                        {
                            "code": 10121303,
                            "name": "寿县",
                            "parent": 101213
                        },
                        {
                            "code": 10121304,
                            "name": "霍邱县",
                            "parent": 101213
                        },
                        {
                            "code": 10121305,
                            "name": "舒城县",
                            "parent": 101213
                        },
                        {
                            "code": 10121306,
                            "name": "金寨县",
                            "parent": 101213
                        },
                        {
                            "code": 10121307,
                            "name": "霍山县",
                            "parent": 101213
                        }
                    ],
                    "code": 101213,
                    "name": "六安市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121401,
                            "name": "宣州区",
                            "parent": 101214
                        },
                        {
                            "code": 10121402,
                            "name": "宁国市",
                            "parent": 101214
                        },
                        {
                            "code": 10121403,
                            "name": "郎溪县",
                            "parent": 101214
                        },
                        {
                            "code": 10121404,
                            "name": "广德县",
                            "parent": 101214
                        },
                        {
                            "code": 10121405,
                            "name": "泾县",
                            "parent": 101214
                        },
                        {
                            "code": 10121406,
                            "name": "旌德县",
                            "parent": 101214
                        },
                        {
                            "code": 10121407,
                            "name": "绩溪县",
                            "parent": 101214
                        }
                    ],
                    "code": 101214,
                    "name": "宣城市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121501,
                            "name": "巢湖区",
                            "parent": 101215
                        },
                        {
                            "code": 10121502,
                            "name": "庐江县",
                            "parent": 101215
                        },
                        {
                            "code": 10121503,
                            "name": "无为县",
                            "parent": 101215
                        },
                        {
                            "code": 10121504,
                            "name": "含山县",
                            "parent": 101215
                        },
                        {
                            "code": 10121505,
                            "name": "和县",
                            "parent": 101215
                        }
                    ],
                    "code": 101215,
                    "name": "巢湖市",
                    "parent": 1012
                },
                {
                    "child": [
                        {
                            "code": 10121601,
                            "name": "贵池区",
                            "parent": 101216
                        },
                        {
                            "code": 10121602,
                            "name": "东至县",
                            "parent": 101216
                        },
                        {
                            "code": 10121603,
                            "name": "石台县",
                            "parent": 101216
                        },
                        {
                            "code": 10121604,
                            "name": "青阳县",
                            "parent": 101216
                        }
                    ],
                    "code": 101216,
                    "name": "池州市",
                    "parent": 1012
                }
            ],
            "code": 1012,
            "name": "安徽省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10130101,
                            "name": "鼓楼区",
                            "parent": 101301
                        },
                        {
                            "code": 10130102,
                            "name": "台江区",
                            "parent": 101301
                        },
                        {
                            "code": 10130103,
                            "name": "仓山区",
                            "parent": 101301
                        },
                        {
                            "code": 10130104,
                            "name": "马尾区",
                            "parent": 101301
                        },
                        {
                            "code": 10130105,
                            "name": "晋安区",
                            "parent": 101301
                        },
                        {
                            "code": 10130106,
                            "name": "闽侯县",
                            "parent": 101301
                        },
                        {
                            "code": 10130107,
                            "name": "连江县",
                            "parent": 101301
                        },
                        {
                            "code": 10130108,
                            "name": "罗源县",
                            "parent": 101301
                        },
                        {
                            "code": 10130109,
                            "name": "闽清县",
                            "parent": 101301
                        },
                        {
                            "code": 10130110,
                            "name": "永泰县",
                            "parent": 101301
                        },
                        {
                            "code": 10130111,
                            "name": "平潭县",
                            "parent": 101301
                        },
                        {
                            "code": 10130112,
                            "name": "福清市",
                            "parent": 101301
                        },
                        {
                            "code": 10130113,
                            "name": "长乐市",
                            "parent": 101301
                        }
                    ],
                    "code": 101301,
                    "name": "福州市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130201,
                            "name": "思明区 ",
                            "parent": 101302
                        },
                        {
                            "code": 10130202,
                            "name": "海沧区",
                            "parent": 101302
                        },
                        {
                            "code": 10130203,
                            "name": "湖里区",
                            "parent": 101302
                        },
                        {
                            "code": 10130204,
                            "name": "集美区",
                            "parent": 101302
                        },
                        {
                            "code": 10130205,
                            "name": "同安区",
                            "parent": 101302
                        },
                        {
                            "code": 10130206,
                            "name": "翔安区",
                            "parent": 101302
                        }
                    ],
                    "code": 101302,
                    "name": "厦门市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130301,
                            "name": "蕉城区",
                            "parent": 101303
                        },
                        {
                            "code": 10130302,
                            "name": "霞浦县",
                            "parent": 101303
                        },
                        {
                            "code": 10130303,
                            "name": "古田县",
                            "parent": 101303
                        },
                        {
                            "code": 10130304,
                            "name": "屏南县",
                            "parent": 101303
                        },
                        {
                            "code": 10130305,
                            "name": "寿宁县",
                            "parent": 101303
                        },
                        {
                            "code": 10130306,
                            "name": "周宁县",
                            "parent": 101303
                        },
                        {
                            "code": 10130307,
                            "name": "柘荣县",
                            "parent": 101303
                        },
                        {
                            "code": 10130308,
                            "name": "福安市",
                            "parent": 101303
                        },
                        {
                            "code": 10130309,
                            "name": "福鼎市",
                            "parent": 101303
                        }
                    ],
                    "code": 101303,
                    "name": "宁德市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130401,
                            "name": "城厢区",
                            "parent": 101304
                        },
                        {
                            "code": 10130402,
                            "name": "涵江区",
                            "parent": 101304
                        },
                        {
                            "code": 10130403,
                            "name": "荔城区",
                            "parent": 101304
                        },
                        {
                            "code": 10130404,
                            "name": "秀屿区",
                            "parent": 101304
                        },
                        {
                            "code": 10130405,
                            "name": "仙游县",
                            "parent": 101304
                        }
                    ],
                    "code": 101304,
                    "name": "莆田市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130501,
                            "name": "鲤城区",
                            "parent": 101305
                        },
                        {
                            "code": 10130502,
                            "name": "丰泽区",
                            "parent": 101305
                        },
                        {
                            "code": 10130503,
                            "name": "洛江区",
                            "parent": 101305
                        },
                        {
                            "code": 10130504,
                            "name": "泉港区",
                            "parent": 101305
                        },
                        {
                            "code": 10130505,
                            "name": "惠安县",
                            "parent": 101305
                        },
                        {
                            "code": 10130506,
                            "name": "安溪县",
                            "parent": 101305
                        },
                        {
                            "code": 10130507,
                            "name": "永春县",
                            "parent": 101305
                        },
                        {
                            "code": 10130508,
                            "name": "德化县",
                            "parent": 101305
                        },
                        {
                            "code": 10130509,
                            "name": "金门县",
                            "parent": 101305
                        },
                        {
                            "code": 10130510,
                            "name": "石狮市",
                            "parent": 101305
                        },
                        {
                            "code": 10130511,
                            "name": "晋江市",
                            "parent": 101305
                        },
                        {
                            "code": 10130512,
                            "name": "南安市",
                            "parent": 101305
                        }
                    ],
                    "code": 101305,
                    "name": "泉州市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130601,
                            "name": "芗城区",
                            "parent": 101306
                        },
                        {
                            "code": 10130602,
                            "name": "龙文区",
                            "parent": 101306
                        },
                        {
                            "code": 10130603,
                            "name": "云霄县",
                            "parent": 101306
                        },
                        {
                            "code": 10130604,
                            "name": "漳浦县",
                            "parent": 101306
                        },
                        {
                            "code": 10130605,
                            "name": "诏安县",
                            "parent": 101306
                        },
                        {
                            "code": 10130606,
                            "name": "长泰县",
                            "parent": 101306
                        },
                        {
                            "code": 10130607,
                            "name": "东山县",
                            "parent": 101306
                        },
                        {
                            "code": 10130608,
                            "name": "南靖县",
                            "parent": 101306
                        },
                        {
                            "code": 10130609,
                            "name": "平和县",
                            "parent": 101306
                        },
                        {
                            "code": 10130610,
                            "name": "华安县",
                            "parent": 101306
                        },
                        {
                            "code": 10130611,
                            "name": "龙海市",
                            "parent": 101306
                        }
                    ],
                    "code": 101306,
                    "name": "漳州市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130701,
                            "name": "新罗区",
                            "parent": 101307
                        },
                        {
                            "code": 10130702,
                            "name": "长汀县",
                            "parent": 101307
                        },
                        {
                            "code": 10130703,
                            "name": "永定县",
                            "parent": 101307
                        },
                        {
                            "code": 10130704,
                            "name": "上杭县",
                            "parent": 101307
                        },
                        {
                            "code": 10130705,
                            "name": "武平县",
                            "parent": 101307
                        },
                        {
                            "code": 10130706,
                            "name": "连城县",
                            "parent": 101307
                        },
                        {
                            "code": 10130707,
                            "name": "漳平市",
                            "parent": 101307
                        }
                    ],
                    "code": 101307,
                    "name": "龙岩",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130801,
                            "name": "梅列区",
                            "parent": 101308
                        },
                        {
                            "code": 10130802,
                            "name": "三元区",
                            "parent": 101308
                        },
                        {
                            "code": 10130803,
                            "name": "明溪县",
                            "parent": 101308
                        },
                        {
                            "code": 10130804,
                            "name": "清流县",
                            "parent": 101308
                        },
                        {
                            "code": 10130805,
                            "name": "宁化县",
                            "parent": 101308
                        },
                        {
                            "code": 10130806,
                            "name": "大田县",
                            "parent": 101308
                        },
                        {
                            "code": 10130807,
                            "name": "尤溪县",
                            "parent": 101308
                        },
                        {
                            "code": 10130808,
                            "name": "沙　县",
                            "parent": 101308
                        },
                        {
                            "code": 10130809,
                            "name": "将乐县",
                            "parent": 101308
                        },
                        {
                            "code": 10130810,
                            "name": "泰宁县",
                            "parent": 101308
                        },
                        {
                            "code": 10130811,
                            "name": "建宁县",
                            "parent": 101308
                        },
                        {
                            "code": 10130812,
                            "name": "永安市",
                            "parent": 101308
                        }
                    ],
                    "code": 101308,
                    "name": "三明市",
                    "parent": 1013
                },
                {
                    "child": [
                        {
                            "code": 10130901,
                            "name": "延平区",
                            "parent": 101309
                        },
                        {
                            "code": 10130902,
                            "name": "顺昌县",
                            "parent": 101309
                        },
                        {
                            "code": 10130903,
                            "name": "浦城县",
                            "parent": 101309
                        },
                        {
                            "code": 10130904,
                            "name": "光泽县",
                            "parent": 101309
                        },
                        {
                            "code": 10130905,
                            "name": "松溪县",
                            "parent": 101309
                        },
                        {
                            "code": 10130906,
                            "name": "政和县",
                            "parent": 101309
                        },
                        {
                            "code": 10130907,
                            "name": "邵武市",
                            "parent": 101309
                        },
                        {
                            "code": 10130908,
                            "name": "武夷山市",
                            "parent": 101309
                        },
                        {
                            "code": 10130909,
                            "name": "建瓯市",
                            "parent": 101309
                        },
                        {
                            "code": 10130910,
                            "name": "建阳市",
                            "parent": 101309
                        }
                    ],
                    "code": 101309,
                    "name": "南平市",
                    "parent": 1013
                }
            ],
            "code": 1013,
            "name": "福建省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10140101,
                            "name": "东湖区",
                            "parent": 101401
                        },
                        {
                            "code": 10140102,
                            "name": "西湖区",
                            "parent": 101401
                        },
                        {
                            "code": 10140103,
                            "name": "青云谱区",
                            "parent": 101401
                        },
                        {
                            "code": 10140104,
                            "name": "湾里区",
                            "parent": 101401
                        },
                        {
                            "code": 10140105,
                            "name": "青山湖区",
                            "parent": 101401
                        },
                        {
                            "code": 10140106,
                            "name": "南昌县",
                            "parent": 101401
                        },
                        {
                            "code": 10140107,
                            "name": "新建县",
                            "parent": 101401
                        },
                        {
                            "code": 10140108,
                            "name": "安义县",
                            "parent": 101401
                        },
                        {
                            "code": 10140109,
                            "name": "进贤县",
                            "parent": 101401
                        }
                    ],
                    "code": 101401,
                    "name": "南昌市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140201,
                            "name": "昌江区",
                            "parent": 101402
                        },
                        {
                            "code": 10140202,
                            "name": "珠山区",
                            "parent": 101402
                        },
                        {
                            "code": 10140203,
                            "name": "浮梁县",
                            "parent": 101402
                        },
                        {
                            "code": 10140204,
                            "name": "乐平市",
                            "parent": 101402
                        }
                    ],
                    "code": 101402,
                    "name": "景德镇市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140301,
                            "name": "安源区",
                            "parent": 101403
                        },
                        {
                            "code": 10140302,
                            "name": "湘东区",
                            "parent": 101403
                        },
                        {
                            "code": 10140303,
                            "name": "莲花县",
                            "parent": 101403
                        },
                        {
                            "code": 10140304,
                            "name": "上栗县",
                            "parent": 101403
                        },
                        {
                            "code": 10140305,
                            "name": "芦溪县",
                            "parent": 101403
                        }
                    ],
                    "code": 101403,
                    "name": "萍乡市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140401,
                            "name": "庐山区",
                            "parent": 101404
                        },
                        {
                            "code": 10140402,
                            "name": "浔阳区",
                            "parent": 101404
                        },
                        {
                            "code": 10140403,
                            "name": "九江县",
                            "parent": 101404
                        },
                        {
                            "code": 10140404,
                            "name": "武宁县",
                            "parent": 101404
                        },
                        {
                            "code": 10140405,
                            "name": "修水县",
                            "parent": 101404
                        },
                        {
                            "code": 10140406,
                            "name": "永修县",
                            "parent": 101404
                        },
                        {
                            "code": 10140407,
                            "name": "德安县",
                            "parent": 101404
                        },
                        {
                            "code": 10140408,
                            "name": "星子县",
                            "parent": 101404
                        },
                        {
                            "code": 10140409,
                            "name": "都昌县",
                            "parent": 101404
                        },
                        {
                            "code": 10140410,
                            "name": "湖口县",
                            "parent": 101404
                        },
                        {
                            "code": 10140411,
                            "name": "彭泽县",
                            "parent": 101404
                        },
                        {
                            "code": 10140412,
                            "name": "瑞昌市",
                            "parent": 101404
                        }
                    ],
                    "code": 101404,
                    "name": "九江市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140501,
                            "name": "渝水区",
                            "parent": 101405
                        },
                        {
                            "code": 10140502,
                            "name": "分宜县",
                            "parent": 101405
                        }
                    ],
                    "code": 101405,
                    "name": "新余市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140601,
                            "name": "月湖区",
                            "parent": 101406
                        },
                        {
                            "code": 10140602,
                            "name": "余江县",
                            "parent": 101406
                        },
                        {
                            "code": 10140603,
                            "name": "贵溪市",
                            "parent": 101406
                        }
                    ],
                    "code": 101406,
                    "name": "鹰潭市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140701,
                            "name": "章贡区",
                            "parent": 101407
                        },
                        {
                            "code": 10140702,
                            "name": "赣县",
                            "parent": 101407
                        },
                        {
                            "code": 10140703,
                            "name": "信丰县",
                            "parent": 101407
                        },
                        {
                            "code": 10140704,
                            "name": "大余县",
                            "parent": 101407
                        },
                        {
                            "code": 10140705,
                            "name": "上犹县",
                            "parent": 101407
                        },
                        {
                            "code": 10140706,
                            "name": "崇义县",
                            "parent": 101407
                        },
                        {
                            "code": 10140707,
                            "name": "安远县",
                            "parent": 101407
                        },
                        {
                            "code": 10140708,
                            "name": "龙南县",
                            "parent": 101407
                        },
                        {
                            "code": 10140709,
                            "name": "定南县",
                            "parent": 101407
                        },
                        {
                            "code": 10140710,
                            "name": "全南县",
                            "parent": 101407
                        },
                        {
                            "code": 10140711,
                            "name": "宁都县",
                            "parent": 101407
                        },
                        {
                            "code": 10140712,
                            "name": "于都县",
                            "parent": 101407
                        },
                        {
                            "code": 10140713,
                            "name": "兴国县",
                            "parent": 101407
                        },
                        {
                            "code": 10140714,
                            "name": "会昌县",
                            "parent": 101407
                        },
                        {
                            "code": 10140715,
                            "name": "寻乌县",
                            "parent": 101407
                        },
                        {
                            "code": 10140716,
                            "name": "石城县",
                            "parent": 101407
                        },
                        {
                            "code": 10140717,
                            "name": "瑞金市",
                            "parent": 101407
                        },
                        {
                            "code": 10140718,
                            "name": "南康市",
                            "parent": 101407
                        }
                    ],
                    "code": 101407,
                    "name": "赣州市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140801,
                            "name": "宜春市",
                            "parent": 101408
                        },
                        {
                            "code": 10140802,
                            "name": "丰城市",
                            "parent": 101408
                        },
                        {
                            "code": 10140803,
                            "name": "樟树市",
                            "parent": 101408
                        },
                        {
                            "code": 10140804,
                            "name": "高安市",
                            "parent": 101408
                        },
                        {
                            "code": 10140805,
                            "name": "奉新县",
                            "parent": 101408
                        },
                        {
                            "code": 10140806,
                            "name": "万载县",
                            "parent": 101408
                        },
                        {
                            "code": 10140807,
                            "name": "上高县",
                            "parent": 101408
                        },
                        {
                            "code": 10140808,
                            "name": "宜丰县",
                            "parent": 101408
                        },
                        {
                            "code": 10140809,
                            "name": "靖安县",
                            "parent": 101408
                        },
                        {
                            "code": 10140810,
                            "name": "铜鼓县",
                            "parent": 101408
                        }
                    ],
                    "code": 101408,
                    "name": "宜春市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10140901,
                            "name": "上饶市",
                            "parent": 101409
                        },
                        {
                            "code": 10140902,
                            "name": "德兴市",
                            "parent": 101409
                        },
                        {
                            "code": 10140903,
                            "name": "上饶县",
                            "parent": 101409
                        },
                        {
                            "code": 10140904,
                            "name": "广丰县",
                            "parent": 101409
                        },
                        {
                            "code": 10140905,
                            "name": "玉山县",
                            "parent": 101409
                        },
                        {
                            "code": 10140906,
                            "name": "铅山县",
                            "parent": 101409
                        },
                        {
                            "code": 10140907,
                            "name": "横峰县",
                            "parent": 101409
                        },
                        {
                            "code": 10140908,
                            "name": "弋阳县",
                            "parent": 101409
                        },
                        {
                            "code": 10140909,
                            "name": "余干县",
                            "parent": 101409
                        },
                        {
                            "code": 10140910,
                            "name": "波阳县",
                            "parent": 101409
                        },
                        {
                            "code": 10140911,
                            "name": "万年县",
                            "parent": 101409
                        },
                        {
                            "code": 10140912,
                            "name": "婺源县",
                            "parent": 101409
                        }
                    ],
                    "code": 101409,
                    "name": "上饶市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10141001,
                            "name": "吉安市",
                            "parent": 101410
                        },
                        {
                            "code": 10141002,
                            "name": "井冈山市",
                            "parent": 101410
                        },
                        {
                            "code": 10141003,
                            "name": "吉安县",
                            "parent": 101410
                        },
                        {
                            "code": 10141004,
                            "name": "吉水县",
                            "parent": 101410
                        },
                        {
                            "code": 10141005,
                            "name": "峡江县",
                            "parent": 101410
                        },
                        {
                            "code": 10141006,
                            "name": "新干县",
                            "parent": 101410
                        },
                        {
                            "code": 10141007,
                            "name": "永丰县",
                            "parent": 101410
                        },
                        {
                            "code": 10141008,
                            "name": "泰和县",
                            "parent": 101410
                        },
                        {
                            "code": 10141009,
                            "name": "遂川县",
                            "parent": 101410
                        },
                        {
                            "code": 10141010,
                            "name": "万安县",
                            "parent": 101410
                        },
                        {
                            "code": 10141011,
                            "name": "安福县",
                            "parent": 101410
                        },
                        {
                            "code": 10141012,
                            "name": "永新县",
                            "parent": 101410
                        },
                        {
                            "code": 10141013,
                            "name": "宁冈县",
                            "parent": 101410
                        }
                    ],
                    "code": 101410,
                    "name": "吉安市",
                    "parent": 1014
                },
                {
                    "child": [
                        {
                            "code": 10141101,
                            "name": "临川市",
                            "parent": 101411
                        },
                        {
                            "code": 10141102,
                            "name": "南城县",
                            "parent": 101411
                        },
                        {
                            "code": 10141103,
                            "name": "黎川县",
                            "parent": 101411
                        },
                        {
                            "code": 10141104,
                            "name": "南丰县",
                            "parent": 101411
                        },
                        {
                            "code": 10141105,
                            "name": "崇仁县",
                            "parent": 101411
                        },
                        {
                            "code": 10141106,
                            "name": "乐安县",
                            "parent": 101411
                        },
                        {
                            "code": 10141107,
                            "name": "宜黄县",
                            "parent": 101411
                        },
                        {
                            "code": 10141108,
                            "name": "金溪县",
                            "parent": 101411
                        },
                        {
                            "code": 10141109,
                            "name": "资溪县",
                            "parent": 101411
                        },
                        {
                            "code": 10141110,
                            "name": "东乡县",
                            "parent": 101411
                        },
                        {
                            "code": 10141111,
                            "name": "广昌县",
                            "parent": 101411
                        }
                    ],
                    "code": 101411,
                    "name": "抚州市",
                    "parent": 1014
                }
            ],
            "code": 1014,
            "name": "江西省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10150101,
                            "name": "历下区",
                            "parent": 101501
                        },
                        {
                            "code": 10150102,
                            "name": "市中区",
                            "parent": 101501
                        },
                        {
                            "code": 10150103,
                            "name": "槐荫区",
                            "parent": 101501
                        },
                        {
                            "code": 10150104,
                            "name": "天桥区",
                            "parent": 101501
                        },
                        {
                            "code": 10150105,
                            "name": "历城区",
                            "parent": 101501
                        },
                        {
                            "code": 10150106,
                            "name": "长清县",
                            "parent": 101501
                        },
                        {
                            "code": 10150107,
                            "name": "平阴县",
                            "parent": 101501
                        },
                        {
                            "code": 10150108,
                            "name": "济阳县",
                            "parent": 101501
                        },
                        {
                            "code": 10150109,
                            "name": "商河县",
                            "parent": 101501
                        },
                        {
                            "code": 10150110,
                            "name": "章丘市",
                            "parent": 101501
                        }
                    ],
                    "code": 101501,
                    "name": "济南市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150201,
                            "name": "市南区",
                            "parent": 101502
                        },
                        {
                            "code": 10150202,
                            "name": "市北区",
                            "parent": 101502
                        },
                        {
                            "code": 10150203,
                            "name": "四方区",
                            "parent": 101502
                        },
                        {
                            "code": 10150204,
                            "name": "黄岛区",
                            "parent": 101502
                        },
                        {
                            "code": 10150205,
                            "name": "崂山区",
                            "parent": 101502
                        },
                        {
                            "code": 10150206,
                            "name": "李沧区",
                            "parent": 101502
                        },
                        {
                            "code": 10150207,
                            "name": "城阳区",
                            "parent": 101502
                        },
                        {
                            "code": 10150208,
                            "name": "胶州市",
                            "parent": 101502
                        },
                        {
                            "code": 10150209,
                            "name": "即墨市",
                            "parent": 101502
                        },
                        {
                            "code": 10150210,
                            "name": "平度市",
                            "parent": 101502
                        },
                        {
                            "code": 10150211,
                            "name": "胶南市",
                            "parent": 101502
                        },
                        {
                            "code": 10150212,
                            "name": "莱西市",
                            "parent": 101502
                        }
                    ],
                    "code": 101502,
                    "name": "青岛市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150301,
                            "name": "淄川区",
                            "parent": 101503
                        },
                        {
                            "code": 10150302,
                            "name": "张店区",
                            "parent": 101503
                        },
                        {
                            "code": 10150303,
                            "name": "博山区",
                            "parent": 101503
                        },
                        {
                            "code": 10150304,
                            "name": "临淄区",
                            "parent": 101503
                        },
                        {
                            "code": 10150305,
                            "name": "周村区",
                            "parent": 101503
                        },
                        {
                            "code": 10150306,
                            "name": "桓台县",
                            "parent": 101503
                        },
                        {
                            "code": 10150307,
                            "name": "高青县",
                            "parent": 101503
                        },
                        {
                            "code": 10150308,
                            "name": "沂源县",
                            "parent": 101503
                        }
                    ],
                    "code": 101503,
                    "name": "淄博市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150401,
                            "name": "市中区",
                            "parent": 101504
                        },
                        {
                            "code": 10150402,
                            "name": "薛城区",
                            "parent": 101504
                        },
                        {
                            "code": 10150403,
                            "name": "峄城区",
                            "parent": 101504
                        },
                        {
                            "code": 10150404,
                            "name": "台儿庄区",
                            "parent": 101504
                        },
                        {
                            "code": 10150405,
                            "name": "山亭区",
                            "parent": 101504
                        },
                        {
                            "code": 10150406,
                            "name": "滕州市",
                            "parent": 101504
                        }
                    ],
                    "code": 101504,
                    "name": "枣庄市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150501,
                            "name": "东营区",
                            "parent": 101505
                        },
                        {
                            "code": 10150502,
                            "name": "河口区",
                            "parent": 101505
                        },
                        {
                            "code": 10150503,
                            "name": "垦利县",
                            "parent": 101505
                        },
                        {
                            "code": 10150504,
                            "name": "利津县",
                            "parent": 101505
                        },
                        {
                            "code": 10150505,
                            "name": "广饶县",
                            "parent": 101505
                        }
                    ],
                    "code": 101505,
                    "name": "东营市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150601,
                            "name": "芝罘区",
                            "parent": 101506
                        },
                        {
                            "code": 10150602,
                            "name": "福山区",
                            "parent": 101506
                        },
                        {
                            "code": 10150603,
                            "name": "牟平区",
                            "parent": 101506
                        },
                        {
                            "code": 10150604,
                            "name": "莱山区",
                            "parent": 101506
                        },
                        {
                            "code": 10150605,
                            "name": "长岛县",
                            "parent": 101506
                        },
                        {
                            "code": 10150606,
                            "name": "龙口市",
                            "parent": 101506
                        },
                        {
                            "code": 10150607,
                            "name": "莱阳市",
                            "parent": 101506
                        },
                        {
                            "code": 10150608,
                            "name": "莱州市",
                            "parent": 101506
                        },
                        {
                            "code": 10150609,
                            "name": "蓬莱市",
                            "parent": 101506
                        },
                        {
                            "code": 10150610,
                            "name": "招远市",
                            "parent": 101506
                        },
                        {
                            "code": 10150611,
                            "name": "栖霞市",
                            "parent": 101506
                        },
                        {
                            "code": 10150612,
                            "name": "海阳市",
                            "parent": 101506
                        }
                    ],
                    "code": 101506,
                    "name": "烟台市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150701,
                            "name": "潍城区",
                            "parent": 101507
                        },
                        {
                            "code": 10150702,
                            "name": "寒亭区",
                            "parent": 101507
                        },
                        {
                            "code": 10150703,
                            "name": "坊子区",
                            "parent": 101507
                        },
                        {
                            "code": 10150704,
                            "name": "奎文区",
                            "parent": 101507
                        },
                        {
                            "code": 10150705,
                            "name": "临朐县",
                            "parent": 101507
                        },
                        {
                            "code": 10150706,
                            "name": "昌乐县",
                            "parent": 101507
                        },
                        {
                            "code": 10150707,
                            "name": "青州市",
                            "parent": 101507
                        },
                        {
                            "code": 10150708,
                            "name": "诸城市",
                            "parent": 101507
                        },
                        {
                            "code": 10150709,
                            "name": "寿光市",
                            "parent": 101507
                        },
                        {
                            "code": 10150710,
                            "name": "安丘市",
                            "parent": 101507
                        },
                        {
                            "code": 10150711,
                            "name": "高密市",
                            "parent": 101507
                        },
                        {
                            "code": 10150712,
                            "name": "昌邑市",
                            "parent": 101507
                        }
                    ],
                    "code": 101507,
                    "name": "潍坊市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150801,
                            "name": "市中区",
                            "parent": 101508
                        },
                        {
                            "code": 10150802,
                            "name": "任城区",
                            "parent": 101508
                        },
                        {
                            "code": 10150803,
                            "name": "微山县",
                            "parent": 101508
                        },
                        {
                            "code": 10150804,
                            "name": "鱼台县",
                            "parent": 101508
                        },
                        {
                            "code": 10150805,
                            "name": "金乡县",
                            "parent": 101508
                        },
                        {
                            "code": 10150806,
                            "name": "嘉祥县",
                            "parent": 101508
                        },
                        {
                            "code": 10150807,
                            "name": "汶上县",
                            "parent": 101508
                        },
                        {
                            "code": 10150808,
                            "name": "泗水县",
                            "parent": 101508
                        },
                        {
                            "code": 10150809,
                            "name": "梁山县",
                            "parent": 101508
                        },
                        {
                            "code": 10150810,
                            "name": "曲阜市",
                            "parent": 101508
                        },
                        {
                            "code": 10150811,
                            "name": "兖州市",
                            "parent": 101508
                        },
                        {
                            "code": 10150812,
                            "name": "邹城市",
                            "parent": 101508
                        }
                    ],
                    "code": 101508,
                    "name": "济宁市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10150901,
                            "name": "泰山区",
                            "parent": 101509
                        },
                        {
                            "code": 10150902,
                            "name": "郊区",
                            "parent": 101509
                        },
                        {
                            "code": 10150903,
                            "name": "宁阳县",
                            "parent": 101509
                        },
                        {
                            "code": 10150904,
                            "name": "东平县",
                            "parent": 101509
                        },
                        {
                            "code": 10150905,
                            "name": "新泰市",
                            "parent": 101509
                        },
                        {
                            "code": 10150906,
                            "name": "肥城市",
                            "parent": 101509
                        }
                    ],
                    "code": 101509,
                    "name": "泰安市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151001,
                            "name": "环翠区",
                            "parent": 101510
                        },
                        {
                            "code": 10151002,
                            "name": "文登市",
                            "parent": 101510
                        },
                        {
                            "code": 10151003,
                            "name": "荣成市",
                            "parent": 101510
                        },
                        {
                            "code": 10151004,
                            "name": "乳山市",
                            "parent": 101510
                        }
                    ],
                    "code": 101510,
                    "name": "威海市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151101,
                            "name": "东港区",
                            "parent": 101511
                        },
                        {
                            "code": 10151102,
                            "name": "岚山区",
                            "parent": 101511
                        },
                        {
                            "code": 10151103,
                            "name": "五莲县",
                            "parent": 101511
                        },
                        {
                            "code": 10151104,
                            "name": "莒县",
                            "parent": 101511
                        }
                    ],
                    "code": 101511,
                    "name": "日照市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151201,
                            "name": "莱城区",
                            "parent": 101512
                        },
                        {
                            "code": 10151202,
                            "name": "钢城区",
                            "parent": 101512
                        }
                    ],
                    "code": 101512,
                    "name": "莱芜市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151301,
                            "name": "兰山区",
                            "parent": 101513
                        },
                        {
                            "code": 10151302,
                            "name": "罗庄区",
                            "parent": 101513
                        },
                        {
                            "code": 10151303,
                            "name": "河东区",
                            "parent": 101513
                        },
                        {
                            "code": 10151304,
                            "name": "沂南县",
                            "parent": 101513
                        },
                        {
                            "code": 10151305,
                            "name": "郯城县",
                            "parent": 101513
                        },
                        {
                            "code": 10151306,
                            "name": "沂水县",
                            "parent": 101513
                        },
                        {
                            "code": 10151307,
                            "name": "苍山县",
                            "parent": 101513
                        },
                        {
                            "code": 10151308,
                            "name": "费县",
                            "parent": 101513
                        },
                        {
                            "code": 10151309,
                            "name": "平邑县",
                            "parent": 101513
                        },
                        {
                            "code": 10151310,
                            "name": "莒南县",
                            "parent": 101513
                        },
                        {
                            "code": 10151311,
                            "name": "蒙阴县",
                            "parent": 101513
                        },
                        {
                            "code": 10151312,
                            "name": "临沭县",
                            "parent": 101513
                        }
                    ],
                    "code": 101513,
                    "name": "临沂市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151401,
                            "name": "德城区",
                            "parent": 101514
                        },
                        {
                            "code": 10151402,
                            "name": "陵县",
                            "parent": 101514
                        },
                        {
                            "code": 10151403,
                            "name": "宁津县",
                            "parent": 101514
                        },
                        {
                            "code": 10151404,
                            "name": "庆云县",
                            "parent": 101514
                        },
                        {
                            "code": 10151405,
                            "name": "临邑县",
                            "parent": 101514
                        },
                        {
                            "code": 10151406,
                            "name": "齐河县",
                            "parent": 101514
                        },
                        {
                            "code": 10151407,
                            "name": "平原县",
                            "parent": 101514
                        },
                        {
                            "code": 10151408,
                            "name": "夏津县",
                            "parent": 101514
                        },
                        {
                            "code": 10151409,
                            "name": "武城县",
                            "parent": 101514
                        },
                        {
                            "code": 10151410,
                            "name": "乐陵市",
                            "parent": 101514
                        },
                        {
                            "code": 10151411,
                            "name": "禹城市",
                            "parent": 101514
                        }
                    ],
                    "code": 101514,
                    "name": "德州市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151501,
                            "name": "东昌府区",
                            "parent": 101515
                        },
                        {
                            "code": 10151502,
                            "name": "阳谷县",
                            "parent": 101515
                        },
                        {
                            "code": 10151503,
                            "name": "莘县",
                            "parent": 101515
                        },
                        {
                            "code": 10151504,
                            "name": "茌平县",
                            "parent": 101515
                        },
                        {
                            "code": 10151505,
                            "name": "东阿县",
                            "parent": 101515
                        },
                        {
                            "code": 10151506,
                            "name": "冠县",
                            "parent": 101515
                        },
                        {
                            "code": 10151507,
                            "name": "高唐县",
                            "parent": 101515
                        },
                        {
                            "code": 10151508,
                            "name": "临清市",
                            "parent": 101515
                        }
                    ],
                    "code": 101515,
                    "name": "聊城市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151601,
                            "name": "滨城区",
                            "parent": 101516
                        },
                        {
                            "code": 10151602,
                            "name": "惠民县",
                            "parent": 101516
                        },
                        {
                            "code": 10151603,
                            "name": "阳信县",
                            "parent": 101516
                        },
                        {
                            "code": 10151604,
                            "name": "无棣县",
                            "parent": 101516
                        },
                        {
                            "code": 10151605,
                            "name": "沾化区",
                            "parent": 101516
                        },
                        {
                            "code": 10151606,
                            "name": "博兴县",
                            "parent": 101516
                        },
                        {
                            "code": 10151607,
                            "name": "邹平县",
                            "parent": 101516
                        }
                    ],
                    "code": 101516,
                    "name": "滨州市",
                    "parent": 1015
                },
                {
                    "child": [
                        {
                            "code": 10151701,
                            "name": "牡丹区",
                            "parent": 101517
                        },
                        {
                            "code": 10151702,
                            "name": "曹县",
                            "parent": 101517
                        },
                        {
                            "code": 10151703,
                            "name": "定陶县",
                            "parent": 101517
                        },
                        {
                            "code": 10151704,
                            "name": "成武县",
                            "parent": 101517
                        },
                        {
                            "code": 10151705,
                            "name": "单县",
                            "parent": 101517
                        },
                        {
                            "code": 10151706,
                            "name": "巨野县",
                            "parent": 101517
                        },
                        {
                            "code": 10151707,
                            "name": "郓城县",
                            "parent": 101517
                        },
                        {
                            "code": 10151708,
                            "name": "鄄城县",
                            "parent": 101517
                        },
                        {
                            "code": 10151709,
                            "name": "东明县",
                            "parent": 101517
                        }
                    ],
                    "code": 101517,
                    "name": "菏泽市",
                    "parent": 1015
                }
            ],
            "code": 1015,
            "name": "山东省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10160101,
                            "name": "中原区",
                            "parent": 101601
                        },
                        {
                            "code": 10160102,
                            "name": "二七区",
                            "parent": 101601
                        },
                        {
                            "code": 10160103,
                            "name": "管城回族区",
                            "parent": 101601
                        },
                        {
                            "code": 10160104,
                            "name": "金水区",
                            "parent": 101601
                        },
                        {
                            "code": 10160105,
                            "name": "上街区",
                            "parent": 101601
                        },
                        {
                            "code": 10160106,
                            "name": "邙山区",
                            "parent": 101601
                        },
                        {
                            "code": 10160107,
                            "name": "中牟县",
                            "parent": 101601
                        },
                        {
                            "code": 10160108,
                            "name": "巩义市",
                            "parent": 101601
                        },
                        {
                            "code": 10160109,
                            "name": "荥阳市",
                            "parent": 101601
                        },
                        {
                            "code": 10160110,
                            "name": "新密市",
                            "parent": 101601
                        },
                        {
                            "code": 10160111,
                            "name": "新郑市",
                            "parent": 101601
                        },
                        {
                            "code": 10160112,
                            "name": "登封市",
                            "parent": 101601
                        }
                    ],
                    "code": 101601,
                    "name": "郑州市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160201,
                            "name": "龙亭区",
                            "parent": 101602
                        },
                        {
                            "code": 10160202,
                            "name": "顺河回族区",
                            "parent": 101602
                        },
                        {
                            "code": 10160203,
                            "name": "鼓楼区",
                            "parent": 101602
                        },
                        {
                            "code": 10160204,
                            "name": "南关区",
                            "parent": 101602
                        },
                        {
                            "code": 10160205,
                            "name": "郊区",
                            "parent": 101602
                        },
                        {
                            "code": 10160206,
                            "name": "杞县",
                            "parent": 101602
                        },
                        {
                            "code": 10160207,
                            "name": "通许县",
                            "parent": 101602
                        },
                        {
                            "code": 10160208,
                            "name": "尉氏县",
                            "parent": 101602
                        },
                        {
                            "code": 10160209,
                            "name": "开封县",
                            "parent": 101602
                        },
                        {
                            "code": 10160210,
                            "name": "兰考县",
                            "parent": 101602
                        }
                    ],
                    "code": 101602,
                    "name": "开封市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160301,
                            "name": "老城区",
                            "parent": 101603
                        },
                        {
                            "code": 10160302,
                            "name": "西工区",
                            "parent": 101603
                        },
                        {
                            "code": 10160303,
                            "name": "廛河回族区",
                            "parent": 101603
                        },
                        {
                            "code": 10160304,
                            "name": "涧西区",
                            "parent": 101603
                        },
                        {
                            "code": 10160305,
                            "name": "吉利区",
                            "parent": 101603
                        },
                        {
                            "code": 10160306,
                            "name": "郊区",
                            "parent": 101603
                        },
                        {
                            "code": 10160307,
                            "name": "孟津县",
                            "parent": 101603
                        },
                        {
                            "code": 10160308,
                            "name": "新安县",
                            "parent": 101603
                        },
                        {
                            "code": 10160309,
                            "name": "栾川县",
                            "parent": 101603
                        },
                        {
                            "code": 10160310,
                            "name": "嵩县",
                            "parent": 101603
                        },
                        {
                            "code": 10160311,
                            "name": "汝阳县",
                            "parent": 101603
                        },
                        {
                            "code": 10160312,
                            "name": "宜阳县",
                            "parent": 101603
                        },
                        {
                            "code": 10160313,
                            "name": "洛宁县",
                            "parent": 101603
                        },
                        {
                            "code": 10160314,
                            "name": "伊川县",
                            "parent": 101603
                        },
                        {
                            "code": 10160315,
                            "name": "偃师市",
                            "parent": 101603
                        }
                    ],
                    "code": 101603,
                    "name": "洛阳市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160401,
                            "name": "新华区",
                            "parent": 101604
                        },
                        {
                            "code": 10160402,
                            "name": "卫东区",
                            "parent": 101604
                        },
                        {
                            "code": 10160403,
                            "name": "石龙区",
                            "parent": 101604
                        },
                        {
                            "code": 10160404,
                            "name": "湛河区",
                            "parent": 101604
                        },
                        {
                            "code": 10160405,
                            "name": "宝丰县",
                            "parent": 101604
                        },
                        {
                            "code": 10160406,
                            "name": "叶县",
                            "parent": 101604
                        },
                        {
                            "code": 10160407,
                            "name": "鲁山县",
                            "parent": 101604
                        },
                        {
                            "code": 10160408,
                            "name": "郏县",
                            "parent": 101604
                        },
                        {
                            "code": 10160409,
                            "name": "舞钢市",
                            "parent": 101604
                        },
                        {
                            "code": 10160410,
                            "name": "汝州市",
                            "parent": 101604
                        }
                    ],
                    "code": 101604,
                    "name": "平顶山市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160501,
                            "name": "文峰区",
                            "parent": 101605
                        },
                        {
                            "code": 10160502,
                            "name": "北关区",
                            "parent": 101605
                        },
                        {
                            "code": 10160503,
                            "name": "铁西区",
                            "parent": 101605
                        },
                        {
                            "code": 10160504,
                            "name": "郊区",
                            "parent": 101605
                        },
                        {
                            "code": 10160505,
                            "name": "安阳县",
                            "parent": 101605
                        },
                        {
                            "code": 10160506,
                            "name": "汤阴县",
                            "parent": 101605
                        },
                        {
                            "code": 10160507,
                            "name": "滑县",
                            "parent": 101605
                        },
                        {
                            "code": 10160508,
                            "name": "内黄县",
                            "parent": 101605
                        },
                        {
                            "code": 10160509,
                            "name": "林州市",
                            "parent": 101605
                        }
                    ],
                    "code": 101605,
                    "name": "安阳市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160601,
                            "name": "鹤山区",
                            "parent": 101606
                        },
                        {
                            "code": 10160602,
                            "name": "山城区",
                            "parent": 101606
                        },
                        {
                            "code": 10160603,
                            "name": "郊区",
                            "parent": 101606
                        },
                        {
                            "code": 10160604,
                            "name": "浚县",
                            "parent": 101606
                        },
                        {
                            "code": 10160605,
                            "name": "淇县",
                            "parent": 101606
                        }
                    ],
                    "code": 101606,
                    "name": "鹤壁市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160701,
                            "name": "红旗区",
                            "parent": 101607
                        },
                        {
                            "code": 10160702,
                            "name": "新华区",
                            "parent": 101607
                        },
                        {
                            "code": 10160703,
                            "name": "北站区",
                            "parent": 101607
                        },
                        {
                            "code": 10160704,
                            "name": "郊区",
                            "parent": 101607
                        },
                        {
                            "code": 10160705,
                            "name": "新乡县",
                            "parent": 101607
                        },
                        {
                            "code": 10160706,
                            "name": "获嘉县",
                            "parent": 101607
                        },
                        {
                            "code": 10160707,
                            "name": "原阳县",
                            "parent": 101607
                        },
                        {
                            "code": 10160708,
                            "name": "延津县",
                            "parent": 101607
                        },
                        {
                            "code": 10160709,
                            "name": "封丘县",
                            "parent": 101607
                        },
                        {
                            "code": 10160710,
                            "name": "长垣县",
                            "parent": 101607
                        },
                        {
                            "code": 10160711,
                            "name": "卫辉市",
                            "parent": 101607
                        },
                        {
                            "code": 10160712,
                            "name": "辉县市",
                            "parent": 101607
                        }
                    ],
                    "code": 101607,
                    "name": "新乡市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160801,
                            "name": "解放区",
                            "parent": 101608
                        },
                        {
                            "code": 10160802,
                            "name": "中站区",
                            "parent": 101608
                        },
                        {
                            "code": 10160803,
                            "name": "马村区",
                            "parent": 101608
                        },
                        {
                            "code": 10160804,
                            "name": "山阳区",
                            "parent": 101608
                        },
                        {
                            "code": 10160805,
                            "name": "修武县",
                            "parent": 101608
                        },
                        {
                            "code": 10160806,
                            "name": "博爱县",
                            "parent": 101608
                        },
                        {
                            "code": 10160807,
                            "name": "武陟县",
                            "parent": 101608
                        },
                        {
                            "code": 10160808,
                            "name": "温县",
                            "parent": 101608
                        },
                        {
                            "code": 10160809,
                            "name": "沁阳市",
                            "parent": 101608
                        },
                        {
                            "code": 10160810,
                            "name": "孟州市",
                            "parent": 101608
                        }
                    ],
                    "code": 101608,
                    "name": "焦作市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10160901,
                            "name": "华龙区",
                            "parent": 101609
                        },
                        {
                            "code": 10160902,
                            "name": "清丰县",
                            "parent": 101609
                        },
                        {
                            "code": 10160903,
                            "name": "南乐县",
                            "parent": 101609
                        },
                        {
                            "code": 10160904,
                            "name": "范县",
                            "parent": 101609
                        },
                        {
                            "code": 10160905,
                            "name": "台前县",
                            "parent": 101609
                        },
                        {
                            "code": 10160906,
                            "name": "濮阳县",
                            "parent": 101609
                        }
                    ],
                    "code": 101609,
                    "name": "濮阳市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161001,
                            "name": "魏都区",
                            "parent": 101610
                        },
                        {
                            "code": 10161002,
                            "name": "许昌县",
                            "parent": 101610
                        },
                        {
                            "code": 10161003,
                            "name": "鄢陵县",
                            "parent": 101610
                        },
                        {
                            "code": 10161004,
                            "name": "襄城县",
                            "parent": 101610
                        },
                        {
                            "code": 10161005,
                            "name": "禹州市",
                            "parent": 101610
                        },
                        {
                            "code": 10161006,
                            "name": "长葛市",
                            "parent": 101610
                        }
                    ],
                    "code": 101610,
                    "name": "许昌市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161101,
                            "name": "源汇区",
                            "parent": 101611
                        },
                        {
                            "code": 10161102,
                            "name": "郾城区",
                            "parent": 101611
                        },
                        {
                            "code": 10161103,
                            "name": "召陵区",
                            "parent": 101611
                        },
                        {
                            "code": 10161104,
                            "name": "舞阳县",
                            "parent": 101611
                        },
                        {
                            "code": 10161105,
                            "name": "临颍县",
                            "parent": 101611
                        }
                    ],
                    "code": 101611,
                    "name": "漯河市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161201,
                            "name": "湖滨区",
                            "parent": 101612
                        },
                        {
                            "code": 10161202,
                            "name": "渑池县",
                            "parent": 101612
                        },
                        {
                            "code": 10161203,
                            "name": "陕县",
                            "parent": 101612
                        },
                        {
                            "code": 10161204,
                            "name": "卢氏县",
                            "parent": 101612
                        },
                        {
                            "code": 10161205,
                            "name": "义马市",
                            "parent": 101612
                        },
                        {
                            "code": 10161206,
                            "name": "灵宝市",
                            "parent": 101612
                        }
                    ],
                    "code": 101612,
                    "name": "三门峡市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161301,
                            "name": "宛城区",
                            "parent": 101613
                        },
                        {
                            "code": 10161302,
                            "name": "卧龙区",
                            "parent": 101613
                        },
                        {
                            "code": 10161303,
                            "name": "南召县",
                            "parent": 101613
                        },
                        {
                            "code": 10161304,
                            "name": "方城县",
                            "parent": 101613
                        },
                        {
                            "code": 10161305,
                            "name": "西峡县",
                            "parent": 101613
                        },
                        {
                            "code": 10161306,
                            "name": "镇平县",
                            "parent": 101613
                        },
                        {
                            "code": 10161307,
                            "name": "内乡县",
                            "parent": 101613
                        },
                        {
                            "code": 10161308,
                            "name": "淅川县",
                            "parent": 101613
                        },
                        {
                            "code": 10161309,
                            "name": "社旗县",
                            "parent": 101613
                        },
                        {
                            "code": 10161310,
                            "name": "唐河县",
                            "parent": 101613
                        },
                        {
                            "code": 10161311,
                            "name": "新野县",
                            "parent": 101613
                        },
                        {
                            "code": 10161312,
                            "name": "桐柏县",
                            "parent": 101613
                        },
                        {
                            "code": 10161313,
                            "name": "邓州市",
                            "parent": 101613
                        }
                    ],
                    "code": 101613,
                    "name": "南阳市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161401,
                            "name": "梁园区",
                            "parent": 101614
                        },
                        {
                            "code": 10161402,
                            "name": "睢阳区",
                            "parent": 101614
                        },
                        {
                            "code": 10161403,
                            "name": "民权县",
                            "parent": 101614
                        },
                        {
                            "code": 10161404,
                            "name": "睢县",
                            "parent": 101614
                        },
                        {
                            "code": 10161405,
                            "name": "宁陵县",
                            "parent": 101614
                        },
                        {
                            "code": 10161406,
                            "name": "柘城县",
                            "parent": 101614
                        },
                        {
                            "code": 10161407,
                            "name": "虞城县",
                            "parent": 101614
                        },
                        {
                            "code": 10161408,
                            "name": "夏邑县",
                            "parent": 101614
                        },
                        {
                            "code": 10161409,
                            "name": "永城市",
                            "parent": 101614
                        }
                    ],
                    "code": 101614,
                    "name": "商丘市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161501,
                            "name": "浉河区",
                            "parent": 101615
                        },
                        {
                            "code": 10161502,
                            "name": "平桥区",
                            "parent": 101615
                        },
                        {
                            "code": 10161503,
                            "name": "罗山县",
                            "parent": 101615
                        },
                        {
                            "code": 10161504,
                            "name": "光山县",
                            "parent": 101615
                        },
                        {
                            "code": 10161505,
                            "name": "新县",
                            "parent": 101615
                        },
                        {
                            "code": 10161506,
                            "name": "商城县",
                            "parent": 101615
                        },
                        {
                            "code": 10161507,
                            "name": "固始县",
                            "parent": 101615
                        },
                        {
                            "code": 10161508,
                            "name": "潢川县",
                            "parent": 101615
                        },
                        {
                            "code": 10161509,
                            "name": "淮滨县",
                            "parent": 101615
                        },
                        {
                            "code": 10161510,
                            "name": "息县",
                            "parent": 101615
                        }
                    ],
                    "code": 101615,
                    "name": "信阳市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161601,
                            "name": "周口市",
                            "parent": 101616
                        },
                        {
                            "code": 10161602,
                            "name": "项城市",
                            "parent": 101616
                        },
                        {
                            "code": 10161603,
                            "name": "扶沟县",
                            "parent": 101616
                        },
                        {
                            "code": 10161604,
                            "name": "西华县",
                            "parent": 101616
                        },
                        {
                            "code": 10161605,
                            "name": "商水县",
                            "parent": 101616
                        },
                        {
                            "code": 10161606,
                            "name": "太康县",
                            "parent": 101616
                        },
                        {
                            "code": 10161607,
                            "name": "鹿邑县",
                            "parent": 101616
                        },
                        {
                            "code": 10161608,
                            "name": "郸城县",
                            "parent": 101616
                        },
                        {
                            "code": 10161609,
                            "name": "淮阳县",
                            "parent": 101616
                        },
                        {
                            "code": 10161610,
                            "name": "沈丘县",
                            "parent": 101616
                        }
                    ],
                    "code": 101616,
                    "name": "周口市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161701,
                            "name": "驿城区",
                            "parent": 101617
                        },
                        {
                            "code": 10161702,
                            "name": "确山县",
                            "parent": 101617
                        },
                        {
                            "code": 10161703,
                            "name": "泌阳县",
                            "parent": 101617
                        },
                        {
                            "code": 10161704,
                            "name": "遂平县",
                            "parent": 101617
                        },
                        {
                            "code": 10161705,
                            "name": "西平县",
                            "parent": 101617
                        },
                        {
                            "code": 10161706,
                            "name": "上蔡县",
                            "parent": 101617
                        },
                        {
                            "code": 10161707,
                            "name": "汝南县",
                            "parent": 101617
                        },
                        {
                            "code": 10161708,
                            "name": "平舆县",
                            "parent": 101617
                        },
                        {
                            "code": 10161709,
                            "name": "新蔡县",
                            "parent": 101617
                        },
                        {
                            "code": 10161710,
                            "name": "正阳县",
                            "parent": 101617
                        }
                    ],
                    "code": 101617,
                    "name": "驻马店市",
                    "parent": 1016
                },
                {
                    "child": [
                        {
                            "code": 10161801,
                            "name": "济源市",
                            "parent": 101618
                        }
                    ],
                    "code": 101618,
                    "name": "济源市",
                    "parent": 1016
                }
            ],
            "code": 1016,
            "name": "河南省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10170101,
                            "name": "江岸区",
                            "parent": 101701
                        },
                        {
                            "code": 10170102,
                            "name": "江汉区",
                            "parent": 101701
                        },
                        {
                            "code": 10170103,
                            "name": "乔口区",
                            "parent": 101701
                        },
                        {
                            "code": 10170104,
                            "name": "汉阳区",
                            "parent": 101701
                        },
                        {
                            "code": 10170105,
                            "name": "武昌区",
                            "parent": 101701
                        },
                        {
                            "code": 10170106,
                            "name": "青山区",
                            "parent": 101701
                        },
                        {
                            "code": 10170107,
                            "name": "洪山区",
                            "parent": 101701
                        },
                        {
                            "code": 10170108,
                            "name": "东西湖区",
                            "parent": 101701
                        },
                        {
                            "code": 10170109,
                            "name": "汉南区",
                            "parent": 101701
                        },
                        {
                            "code": 10170110,
                            "name": "蔡甸区",
                            "parent": 101701
                        },
                        {
                            "code": 10170111,
                            "name": "江夏区",
                            "parent": 101701
                        },
                        {
                            "code": 10170112,
                            "name": "黄陂区",
                            "parent": 101701
                        },
                        {
                            "code": 10170113,
                            "name": "新洲区",
                            "parent": 101701
                        }
                    ],
                    "code": 101701,
                    "name": "武汉市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170201,
                            "name": "黄石港区",
                            "parent": 101702
                        },
                        {
                            "code": 10170202,
                            "name": "石灰窑区",
                            "parent": 101702
                        },
                        {
                            "code": 10170203,
                            "name": "下陆区",
                            "parent": 101702
                        },
                        {
                            "code": 10170204,
                            "name": "铁山区",
                            "parent": 101702
                        },
                        {
                            "code": 10170205,
                            "name": "阳新县",
                            "parent": 101702
                        },
                        {
                            "code": 10170206,
                            "name": "大冶市",
                            "parent": 101702
                        }
                    ],
                    "code": 101702,
                    "name": "黄石市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170301,
                            "name": "茅箭区",
                            "parent": 101703
                        },
                        {
                            "code": 10170302,
                            "name": "张湾区",
                            "parent": 101703
                        },
                        {
                            "code": 10170303,
                            "name": "郧县",
                            "parent": 101703
                        },
                        {
                            "code": 10170304,
                            "name": "郧西县",
                            "parent": 101703
                        },
                        {
                            "code": 10170305,
                            "name": "竹山县",
                            "parent": 101703
                        },
                        {
                            "code": 10170306,
                            "name": "竹溪县",
                            "parent": 101703
                        },
                        {
                            "code": 10170307,
                            "name": "房县",
                            "parent": 101703
                        },
                        {
                            "code": 10170308,
                            "name": "丹江口市",
                            "parent": 101703
                        }
                    ],
                    "code": 101703,
                    "name": "十堰市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170401,
                            "name": "西陵区",
                            "parent": 101704
                        },
                        {
                            "code": 10170402,
                            "name": "伍家岗区",
                            "parent": 101704
                        },
                        {
                            "code": 10170403,
                            "name": "点军区",
                            "parent": 101704
                        },
                        {
                            "code": 10170404,
                            "name": "虎亭区",
                            "parent": 101704
                        },
                        {
                            "code": 10170405,
                            "name": "宜昌县",
                            "parent": 101704
                        },
                        {
                            "code": 10170406,
                            "name": "远安县",
                            "parent": 101704
                        },
                        {
                            "code": 10170407,
                            "name": "兴山县",
                            "parent": 101704
                        },
                        {
                            "code": 10170408,
                            "name": "秭归县",
                            "parent": 101704
                        },
                        {
                            "code": 10170409,
                            "name": "长阳土家族自治县",
                            "parent": 101704
                        },
                        {
                            "code": 10170410,
                            "name": "五峰土家族自治县",
                            "parent": 101704
                        },
                        {
                            "code": 10170411,
                            "name": "宜都市",
                            "parent": 101704
                        },
                        {
                            "code": 10170412,
                            "name": "当阳市",
                            "parent": 101704
                        },
                        {
                            "code": 10170413,
                            "name": "枝江市",
                            "parent": 101704
                        }
                    ],
                    "code": 101704,
                    "name": "宜昌市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170501,
                            "name": "襄城区",
                            "parent": 101705
                        },
                        {
                            "code": 10170502,
                            "name": "樊城区",
                            "parent": 101705
                        },
                        {
                            "code": 10170503,
                            "name": "襄阳县",
                            "parent": 101705
                        },
                        {
                            "code": 10170504,
                            "name": "南漳县",
                            "parent": 101705
                        },
                        {
                            "code": 10170505,
                            "name": "谷城县",
                            "parent": 101705
                        },
                        {
                            "code": 10170506,
                            "name": "保康县",
                            "parent": 101705
                        },
                        {
                            "code": 10170507,
                            "name": "老河口市",
                            "parent": 101705
                        },
                        {
                            "code": 10170508,
                            "name": "枣阳市",
                            "parent": 101705
                        },
                        {
                            "code": 10170509,
                            "name": "宜城市",
                            "parent": 101705
                        }
                    ],
                    "code": 101705,
                    "name": "襄樊市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170601,
                            "name": "梁子湖区",
                            "parent": 101706
                        },
                        {
                            "code": 10170602,
                            "name": "华容区",
                            "parent": 101706
                        },
                        {
                            "code": 10170603,
                            "name": "鄂城区",
                            "parent": 101706
                        }
                    ],
                    "code": 101706,
                    "name": "鄂州市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170701,
                            "name": "东宝区",
                            "parent": 101707
                        },
                        {
                            "code": 10170702,
                            "name": "掇刀区",
                            "parent": 101707
                        },
                        {
                            "code": 10170703,
                            "name": "京山县",
                            "parent": 101707
                        },
                        {
                            "code": 10170704,
                            "name": "沙洋县",
                            "parent": 101707
                        },
                        {
                            "code": 10170705,
                            "name": "钟祥市",
                            "parent": 101707
                        }
                    ],
                    "code": 101707,
                    "name": "荆门市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170801,
                            "name": "孝南区",
                            "parent": 101708
                        },
                        {
                            "code": 10170802,
                            "name": "孝昌县",
                            "parent": 101708
                        },
                        {
                            "code": 10170803,
                            "name": "大悟县",
                            "parent": 101708
                        },
                        {
                            "code": 10170804,
                            "name": "云梦县",
                            "parent": 101708
                        },
                        {
                            "code": 10170805,
                            "name": "应城市",
                            "parent": 101708
                        },
                        {
                            "code": 10170806,
                            "name": "安陆市",
                            "parent": 101708
                        },
                        {
                            "code": 10170807,
                            "name": "汉川市",
                            "parent": 101708
                        }
                    ],
                    "code": 101708,
                    "name": "孝感市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10170901,
                            "name": "沙市区",
                            "parent": 101709
                        },
                        {
                            "code": 10170902,
                            "name": "荆州区",
                            "parent": 101709
                        },
                        {
                            "code": 10170903,
                            "name": "公安县",
                            "parent": 101709
                        },
                        {
                            "code": 10170904,
                            "name": "监利县",
                            "parent": 101709
                        },
                        {
                            "code": 10170905,
                            "name": "江陵县",
                            "parent": 101709
                        },
                        {
                            "code": 10170906,
                            "name": "石首市",
                            "parent": 101709
                        },
                        {
                            "code": 10170907,
                            "name": "洪湖市",
                            "parent": 101709
                        },
                        {
                            "code": 10170908,
                            "name": "松滋市",
                            "parent": 101709
                        }
                    ],
                    "code": 101709,
                    "name": "荆州市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171001,
                            "name": "黄州区",
                            "parent": 101710
                        },
                        {
                            "code": 10171002,
                            "name": "团风县",
                            "parent": 101710
                        },
                        {
                            "code": 10171003,
                            "name": "红安县",
                            "parent": 101710
                        },
                        {
                            "code": 10171004,
                            "name": "罗田县",
                            "parent": 101710
                        },
                        {
                            "code": 10171005,
                            "name": "英山县",
                            "parent": 101710
                        },
                        {
                            "code": 10171006,
                            "name": "浠水县",
                            "parent": 101710
                        },
                        {
                            "code": 10171007,
                            "name": "蕲春县",
                            "parent": 101710
                        },
                        {
                            "code": 10171008,
                            "name": "黄梅县",
                            "parent": 101710
                        },
                        {
                            "code": 10171009,
                            "name": "麻城市",
                            "parent": 101710
                        },
                        {
                            "code": 10171010,
                            "name": "武穴市",
                            "parent": 101710
                        }
                    ],
                    "code": 101710,
                    "name": "黄冈市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171101,
                            "name": " 咸安区",
                            "parent": 101711
                        },
                        {
                            "code": 10171102,
                            "name": "嘉鱼县",
                            "parent": 101711
                        },
                        {
                            "code": 10171103,
                            "name": "通城县",
                            "parent": 101711
                        },
                        {
                            "code": 10171104,
                            "name": "崇阳县",
                            "parent": 101711
                        },
                        {
                            "code": 10171105,
                            "name": "通山县",
                            "parent": 101711
                        },
                        {
                            "code": 10171106,
                            "name": "赤壁市",
                            "parent": 101711
                        }
                    ],
                    "code": 101711,
                    "name": "咸宁市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171201,
                            "name": "曾都区",
                            "parent": 101712
                        },
                        {
                            "code": 10171202,
                            "name": "随县",
                            "parent": 101712
                        },
                        {
                            "code": 10171203,
                            "name": "广水市",
                            "parent": 101712
                        }
                    ],
                    "code": 101712,
                    "name": "随州市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171301,
                            "name": "恩施市",
                            "parent": 101713
                        },
                        {
                            "code": 10171302,
                            "name": "利川市",
                            "parent": 101713
                        },
                        {
                            "code": 10171303,
                            "name": "建始县",
                            "parent": 101713
                        },
                        {
                            "code": 10171304,
                            "name": "巴东县",
                            "parent": 101713
                        },
                        {
                            "code": 10171305,
                            "name": "宣恩县",
                            "parent": 101713
                        },
                        {
                            "code": 10171306,
                            "name": "咸丰县",
                            "parent": 101713
                        },
                        {
                            "code": 10171307,
                            "name": "来凤县",
                            "parent": 101713
                        },
                        {
                            "code": 10171308,
                            "name": "鹤峰县",
                            "parent": 101713
                        }
                    ],
                    "code": 101713,
                    "name": "恩施土家族苗族自治州",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171401,
                            "name": "仙桃市",
                            "parent": 101714
                        }
                    ],
                    "code": 101714,
                    "name": "仙桃市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171501,
                            "name": "潜江市",
                            "parent": 101715
                        }
                    ],
                    "code": 101715,
                    "name": "潜江市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171601,
                            "name": "天门市",
                            "parent": 101716
                        }
                    ],
                    "code": 101716,
                    "name": "天门市",
                    "parent": 1017
                },
                {
                    "child": [
                        {
                            "code": 10171701,
                            "name": "神农架林区",
                            "parent": 101717
                        }
                    ],
                    "code": 101717,
                    "name": "神农架林区",
                    "parent": 1017
                }
            ],
            "code": 1017,
            "name": "湖北省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10180101,
                            "name": "芙蓉区",
                            "parent": 101801
                        },
                        {
                            "code": 10180102,
                            "name": "天心区",
                            "parent": 101801
                        },
                        {
                            "code": 10180103,
                            "name": "岳麓区",
                            "parent": 101801
                        },
                        {
                            "code": 10180104,
                            "name": "开福区",
                            "parent": 101801
                        },
                        {
                            "code": 10180105,
                            "name": "雨花区",
                            "parent": 101801
                        },
                        {
                            "code": 10180106,
                            "name": "长沙县",
                            "parent": 101801
                        },
                        {
                            "code": 10180107,
                            "name": "望城县",
                            "parent": 101801
                        },
                        {
                            "code": 10180108,
                            "name": "宁乡县",
                            "parent": 101801
                        },
                        {
                            "code": 10180109,
                            "name": "浏阳市",
                            "parent": 101801
                        }
                    ],
                    "code": 101801,
                    "name": "长沙市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180201,
                            "name": "荷塘区",
                            "parent": 101802
                        },
                        {
                            "code": 10180202,
                            "name": "芦淞区",
                            "parent": 101802
                        },
                        {
                            "code": 10180203,
                            "name": "石峰区",
                            "parent": 101802
                        },
                        {
                            "code": 10180204,
                            "name": "天元区",
                            "parent": 101802
                        },
                        {
                            "code": 10180205,
                            "name": "株洲县",
                            "parent": 101802
                        },
                        {
                            "code": 10180206,
                            "name": "攸县",
                            "parent": 101802
                        },
                        {
                            "code": 10180207,
                            "name": "茶陵县",
                            "parent": 101802
                        },
                        {
                            "code": 10180208,
                            "name": "炎陵县",
                            "parent": 101802
                        },
                        {
                            "code": 10180209,
                            "name": "醴陵市",
                            "parent": 101802
                        }
                    ],
                    "code": 101802,
                    "name": "株洲市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180301,
                            "name": "雨湖区",
                            "parent": 101803
                        },
                        {
                            "code": 10180302,
                            "name": "岳塘区",
                            "parent": 101803
                        },
                        {
                            "code": 10180303,
                            "name": "湘潭县",
                            "parent": 101803
                        },
                        {
                            "code": 10180304,
                            "name": "湘乡市",
                            "parent": 101803
                        },
                        {
                            "code": 10180305,
                            "name": "韶山市",
                            "parent": 101803
                        }
                    ],
                    "code": 101803,
                    "name": "湘潭市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180401,
                            "name": "江东区",
                            "parent": 101804
                        },
                        {
                            "code": 10180402,
                            "name": "城南区",
                            "parent": 101804
                        },
                        {
                            "code": 10180403,
                            "name": "城北区",
                            "parent": 101804
                        },
                        {
                            "code": 10180404,
                            "name": "郊 区",
                            "parent": 101804
                        },
                        {
                            "code": 10180405,
                            "name": "南岳区",
                            "parent": 101804
                        },
                        {
                            "code": 10180406,
                            "name": "衡阳县",
                            "parent": 101804
                        },
                        {
                            "code": 10180407,
                            "name": "衡南县",
                            "parent": 101804
                        },
                        {
                            "code": 10180408,
                            "name": "衡山县",
                            "parent": 101804
                        },
                        {
                            "code": 10180409,
                            "name": "衡东县",
                            "parent": 101804
                        },
                        {
                            "code": 10180410,
                            "name": "祁东县",
                            "parent": 101804
                        },
                        {
                            "code": 10180411,
                            "name": "耒阳市",
                            "parent": 101804
                        },
                        {
                            "code": 10180412,
                            "name": "常宁市",
                            "parent": 101804
                        }
                    ],
                    "code": 101804,
                    "name": "衡阳市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180501,
                            "name": "双清区",
                            "parent": 101805
                        },
                        {
                            "code": 10180502,
                            "name": "大祥区",
                            "parent": 101805
                        },
                        {
                            "code": 10180503,
                            "name": "北塔区",
                            "parent": 101805
                        },
                        {
                            "code": 10180504,
                            "name": "邵东县",
                            "parent": 101805
                        },
                        {
                            "code": 10180505,
                            "name": "新邵县",
                            "parent": 101805
                        },
                        {
                            "code": 10180506,
                            "name": "邵阳县",
                            "parent": 101805
                        },
                        {
                            "code": 10180507,
                            "name": "隆回县",
                            "parent": 101805
                        },
                        {
                            "code": 10180508,
                            "name": "洞口县",
                            "parent": 101805
                        },
                        {
                            "code": 10180509,
                            "name": "绥宁县",
                            "parent": 101805
                        },
                        {
                            "code": 10180510,
                            "name": "新宁县",
                            "parent": 101805
                        },
                        {
                            "code": 10180511,
                            "name": "城步苗族自治县",
                            "parent": 101805
                        },
                        {
                            "code": 10180512,
                            "name": "武冈市",
                            "parent": 101805
                        }
                    ],
                    "code": 101805,
                    "name": "邵阳市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180601,
                            "name": "岳阳楼区",
                            "parent": 101806
                        },
                        {
                            "code": 10180602,
                            "name": "云溪区",
                            "parent": 101806
                        },
                        {
                            "code": 10180603,
                            "name": "君山区",
                            "parent": 101806
                        },
                        {
                            "code": 10180604,
                            "name": "岳阳县",
                            "parent": 101806
                        },
                        {
                            "code": 10180605,
                            "name": "华容县",
                            "parent": 101806
                        },
                        {
                            "code": 10180606,
                            "name": "湘阴县",
                            "parent": 101806
                        },
                        {
                            "code": 10180607,
                            "name": "平江县",
                            "parent": 101806
                        },
                        {
                            "code": 10180608,
                            "name": "汨罗市",
                            "parent": 101806
                        },
                        {
                            "code": 10180609,
                            "name": "临湘市",
                            "parent": 101806
                        }
                    ],
                    "code": 101806,
                    "name": "岳阳市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180701,
                            "name": "武陵区",
                            "parent": 101807
                        },
                        {
                            "code": 10180702,
                            "name": "鼎城区",
                            "parent": 101807
                        },
                        {
                            "code": 10180703,
                            "name": "安乡县",
                            "parent": 101807
                        },
                        {
                            "code": 10180704,
                            "name": "汉寿县",
                            "parent": 101807
                        },
                        {
                            "code": 10180705,
                            "name": "澧县",
                            "parent": 101807
                        },
                        {
                            "code": 10180706,
                            "name": "临澧县",
                            "parent": 101807
                        },
                        {
                            "code": 10180707,
                            "name": "桃源县",
                            "parent": 101807
                        },
                        {
                            "code": 10180708,
                            "name": "石门县",
                            "parent": 101807
                        },
                        {
                            "code": 10180709,
                            "name": "津市市",
                            "parent": 101807
                        }
                    ],
                    "code": 101807,
                    "name": "常德市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180801,
                            "name": "永定区",
                            "parent": 101808
                        },
                        {
                            "code": 10180802,
                            "name": "武陵源区",
                            "parent": 101808
                        },
                        {
                            "code": 10180803,
                            "name": "慈利县",
                            "parent": 101808
                        },
                        {
                            "code": 10180804,
                            "name": "桑植县",
                            "parent": 101808
                        }
                    ],
                    "code": 101808,
                    "name": "张家界市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10180901,
                            "name": "资阳区",
                            "parent": 101809
                        },
                        {
                            "code": 10180902,
                            "name": "赫山区",
                            "parent": 101809
                        },
                        {
                            "code": 10180903,
                            "name": "南县",
                            "parent": 101809
                        },
                        {
                            "code": 10180904,
                            "name": "桃江县",
                            "parent": 101809
                        },
                        {
                            "code": 10180905,
                            "name": "安化县",
                            "parent": 101809
                        },
                        {
                            "code": 10180906,
                            "name": "沅江市",
                            "parent": 101809
                        }
                    ],
                    "code": 101809,
                    "name": "益阳市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10181001,
                            "name": "北湖区",
                            "parent": 101810
                        },
                        {
                            "code": 10181002,
                            "name": "苏仙区",
                            "parent": 101810
                        },
                        {
                            "code": 10181003,
                            "name": "桂阳县",
                            "parent": 101810
                        },
                        {
                            "code": 10181004,
                            "name": "宜章县",
                            "parent": 101810
                        },
                        {
                            "code": 10181005,
                            "name": "永兴县",
                            "parent": 101810
                        },
                        {
                            "code": 10181006,
                            "name": "嘉禾县",
                            "parent": 101810
                        },
                        {
                            "code": 10181007,
                            "name": "临武县",
                            "parent": 101810
                        },
                        {
                            "code": 10181008,
                            "name": "汝城县",
                            "parent": 101810
                        },
                        {
                            "code": 10181009,
                            "name": "桂东县",
                            "parent": 101810
                        },
                        {
                            "code": 10181010,
                            "name": "安仁县",
                            "parent": 101810
                        },
                        {
                            "code": 10181011,
                            "name": "资兴市",
                            "parent": 101810
                        }
                    ],
                    "code": 101810,
                    "name": "郴州市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10181101,
                            "name": "芝山区",
                            "parent": 101811
                        },
                        {
                            "code": 10181102,
                            "name": "冷水滩区",
                            "parent": 101811
                        },
                        {
                            "code": 10181103,
                            "name": "祁阳县",
                            "parent": 101811
                        },
                        {
                            "code": 10181104,
                            "name": "东安县",
                            "parent": 101811
                        },
                        {
                            "code": 10181105,
                            "name": "双牌县",
                            "parent": 101811
                        },
                        {
                            "code": 10181106,
                            "name": "道县",
                            "parent": 101811
                        },
                        {
                            "code": 10181107,
                            "name": "江永县",
                            "parent": 101811
                        },
                        {
                            "code": 10181108,
                            "name": "宁远县",
                            "parent": 101811
                        },
                        {
                            "code": 10181109,
                            "name": "蓝山县",
                            "parent": 101811
                        },
                        {
                            "code": 10181110,
                            "name": "新田县",
                            "parent": 101811
                        },
                        {
                            "code": 10181111,
                            "name": "江华瑶族自治县",
                            "parent": 101811
                        }
                    ],
                    "code": 101811,
                    "name": "永州市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10181201,
                            "name": "鹤城区",
                            "parent": 101812
                        },
                        {
                            "code": 10181202,
                            "name": "中方县",
                            "parent": 101812
                        },
                        {
                            "code": 10181203,
                            "name": "沅陵县",
                            "parent": 101812
                        },
                        {
                            "code": 10181204,
                            "name": "辰溪县",
                            "parent": 101812
                        },
                        {
                            "code": 10181205,
                            "name": "溆浦县",
                            "parent": 101812
                        },
                        {
                            "code": 10181206,
                            "name": "会同县",
                            "parent": 101812
                        },
                        {
                            "code": 10181207,
                            "name": "麻阳苗族自治县",
                            "parent": 101812
                        },
                        {
                            "code": 10181208,
                            "name": "新晃侗族自治县",
                            "parent": 101812
                        },
                        {
                            "code": 10181209,
                            "name": "芷江侗族自治县",
                            "parent": 101812
                        },
                        {
                            "code": 10181210,
                            "name": "靖州苗族侗族自治县",
                            "parent": 101812
                        },
                        {
                            "code": 10181211,
                            "name": "通道侗族自治县",
                            "parent": 101812
                        },
                        {
                            "code": 10181212,
                            "name": "洪江市",
                            "parent": 101812
                        }
                    ],
                    "code": 101812,
                    "name": "怀化市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10181301,
                            "name": "娄星区",
                            "parent": 101813
                        },
                        {
                            "code": 10181302,
                            "name": "冷水江市",
                            "parent": 101813
                        },
                        {
                            "code": 10181303,
                            "name": "涟源市",
                            "parent": 101813
                        },
                        {
                            "code": 10181304,
                            "name": "双峰县",
                            "parent": 101813
                        },
                        {
                            "code": 10181305,
                            "name": "新化县",
                            "parent": 101813
                        }
                    ],
                    "code": 101813,
                    "name": "娄底市",
                    "parent": 1018
                },
                {
                    "child": [
                        {
                            "code": 10181401,
                            "name": "吉首市",
                            "parent": 101814
                        },
                        {
                            "code": 10181402,
                            "name": "泸溪县",
                            "parent": 101814
                        },
                        {
                            "code": 10181403,
                            "name": "凤凰县",
                            "parent": 101814
                        },
                        {
                            "code": 10181404,
                            "name": "花垣县",
                            "parent": 101814
                        },
                        {
                            "code": 10181405,
                            "name": "保靖县",
                            "parent": 101814
                        },
                        {
                            "code": 10181406,
                            "name": "古丈县",
                            "parent": 101814
                        },
                        {
                            "code": 10181407,
                            "name": "永顺县",
                            "parent": 101814
                        },
                        {
                            "code": 10181408,
                            "name": "龙山县",
                            "parent": 101814
                        }
                    ],
                    "code": 101814,
                    "name": "湘西土家族苗族自治州",
                    "parent": 1018
                }
            ],
            "code": 1018,
            "name": "湖南省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10190101,
                            "name": "荔湾区",
                            "parent": 101901
                        },
                        {
                            "code": 10190102,
                            "name": "越秀区",
                            "parent": 101901
                        },
                        {
                            "code": 10190103,
                            "name": "海珠区",
                            "parent": 101901
                        },
                        {
                            "code": 10190104,
                            "name": "天河区",
                            "parent": 101901
                        },
                        {
                            "code": 10190105,
                            "name": "芳村区",
                            "parent": 101901
                        },
                        {
                            "code": 10190106,
                            "name": "白云区",
                            "parent": 101901
                        },
                        {
                            "code": 10190107,
                            "name": "黄埔区",
                            "parent": 101901
                        },
                        {
                            "code": 10190108,
                            "name": "番禺市",
                            "parent": 101901
                        },
                        {
                            "code": 10190109,
                            "name": "花都区",
                            "parent": 101901
                        },
                        {
                            "code": 10190110,
                            "name": "增城市",
                            "parent": 101901
                        },
                        {
                            "code": 10190111,
                            "name": "从化市",
                            "parent": 101901
                        }
                    ],
                    "code": 101901,
                    "name": "广州市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190201,
                            "name": "武江区",
                            "parent": 101902
                        },
                        {
                            "code": 10190202,
                            "name": "浈江区",
                            "parent": 101902
                        },
                        {
                            "code": 10190203,
                            "name": "曲江区",
                            "parent": 101902
                        },
                        {
                            "code": 10190204,
                            "name": "始兴县",
                            "parent": 101902
                        },
                        {
                            "code": 10190205,
                            "name": "仁化县",
                            "parent": 101902
                        },
                        {
                            "code": 10190206,
                            "name": "翁源县",
                            "parent": 101902
                        },
                        {
                            "code": 10190207,
                            "name": "乳源瑶族自治县",
                            "parent": 101902
                        },
                        {
                            "code": 10190208,
                            "name": "新丰县",
                            "parent": 101902
                        },
                        {
                            "code": 10190209,
                            "name": "乐昌市",
                            "parent": 101902
                        },
                        {
                            "code": 10190210,
                            "name": "南雄市",
                            "parent": 101902
                        }
                    ],
                    "code": 101902,
                    "name": "韶关市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190301,
                            "name": "罗湖区",
                            "parent": 101903
                        },
                        {
                            "code": 10190302,
                            "name": "福田区",
                            "parent": 101903
                        },
                        {
                            "code": 10190303,
                            "name": "南山区",
                            "parent": 101903
                        },
                        {
                            "code": 10190304,
                            "name": "宝安区",
                            "parent": 101903
                        },
                        {
                            "code": 10190305,
                            "name": "龙岗区",
                            "parent": 101903
                        },
                        {
                            "code": 10190306,
                            "name": "盐田区",
                            "parent": 101903
                        }
                    ],
                    "code": 101903,
                    "name": "深圳市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190401,
                            "name": "香洲区",
                            "parent": 101904
                        },
                        {
                            "code": 10190402,
                            "name": "斗门区",
                            "parent": 101904
                        },
                        {
                            "code": 10190403,
                            "name": "金湾区",
                            "parent": 101904
                        }
                    ],
                    "code": 101904,
                    "name": "珠海市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190501,
                            "name": "濠江区",
                            "parent": 101905
                        },
                        {
                            "code": 10190502,
                            "name": "龙湖区",
                            "parent": 101905
                        },
                        {
                            "code": 10190503,
                            "name": "金平区",
                            "parent": 101905
                        },
                        {
                            "code": 10190504,
                            "name": "潮南区",
                            "parent": 101905
                        },
                        {
                            "code": 10190505,
                            "name": "澄海区",
                            "parent": 101905
                        },
                        {
                            "code": 10190506,
                            "name": "潮阳区",
                            "parent": 101905
                        },
                        {
                            "code": 10190507,
                            "name": "南澳县",
                            "parent": 101905
                        }
                    ],
                    "code": 101905,
                    "name": "汕头市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190601,
                            "name": "禅城区",
                            "parent": 101906
                        },
                        {
                            "code": 10190602,
                            "name": "顺德区",
                            "parent": 101906
                        },
                        {
                            "code": 10190603,
                            "name": "南海区",
                            "parent": 101906
                        },
                        {
                            "code": 10190604,
                            "name": "三水区",
                            "parent": 101906
                        },
                        {
                            "code": 10190605,
                            "name": "高明区",
                            "parent": 101906
                        }
                    ],
                    "code": 101906,
                    "name": "佛山市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190701,
                            "name": "蓬江区",
                            "parent": 101907
                        },
                        {
                            "code": 10190702,
                            "name": "江海区",
                            "parent": 101907
                        },
                        {
                            "code": 10190703,
                            "name": "台山市",
                            "parent": 101907
                        },
                        {
                            "code": 10190704,
                            "name": "新会市",
                            "parent": 101907
                        },
                        {
                            "code": 10190705,
                            "name": "开平市",
                            "parent": 101907
                        },
                        {
                            "code": 10190706,
                            "name": "鹤山市",
                            "parent": 101907
                        },
                        {
                            "code": 10190707,
                            "name": "恩平市",
                            "parent": 101907
                        }
                    ],
                    "code": 101907,
                    "name": "江门市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190801,
                            "name": "赤坎区",
                            "parent": 101908
                        },
                        {
                            "code": 10190802,
                            "name": "霞山区",
                            "parent": 101908
                        },
                        {
                            "code": 10190803,
                            "name": "坡头区",
                            "parent": 101908
                        },
                        {
                            "code": 10190804,
                            "name": "麻章区",
                            "parent": 101908
                        },
                        {
                            "code": 10190805,
                            "name": "遂溪县",
                            "parent": 101908
                        },
                        {
                            "code": 10190806,
                            "name": "徐闻县",
                            "parent": 101908
                        },
                        {
                            "code": 10190807,
                            "name": "廉江市",
                            "parent": 101908
                        },
                        {
                            "code": 10190808,
                            "name": "雷州市",
                            "parent": 101908
                        },
                        {
                            "code": 10190809,
                            "name": "吴川市",
                            "parent": 101908
                        }
                    ],
                    "code": 101908,
                    "name": "湛江市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10190901,
                            "name": "茂南区",
                            "parent": 101909
                        },
                        {
                            "code": 10190902,
                            "name": "茂港区",
                            "parent": 101909
                        },
                        {
                            "code": 10190903,
                            "name": "电白县",
                            "parent": 101909
                        },
                        {
                            "code": 10190904,
                            "name": "高州市",
                            "parent": 101909
                        },
                        {
                            "code": 10190905,
                            "name": "化州市",
                            "parent": 101909
                        },
                        {
                            "code": 10190906,
                            "name": "信宜市",
                            "parent": 101909
                        }
                    ],
                    "code": 101909,
                    "name": "茂名市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191001,
                            "name": "端州区",
                            "parent": 101910
                        },
                        {
                            "code": 10191002,
                            "name": "鼎湖区",
                            "parent": 101910
                        },
                        {
                            "code": 10191003,
                            "name": "广宁县",
                            "parent": 101910
                        },
                        {
                            "code": 10191004,
                            "name": "怀集县",
                            "parent": 101910
                        },
                        {
                            "code": 10191005,
                            "name": "封开县",
                            "parent": 101910
                        },
                        {
                            "code": 10191006,
                            "name": "德庆县",
                            "parent": 101910
                        },
                        {
                            "code": 10191007,
                            "name": "高要市",
                            "parent": 101910
                        },
                        {
                            "code": 10191008,
                            "name": "四会市",
                            "parent": 101910
                        }
                    ],
                    "code": 101910,
                    "name": "肇庆市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191101,
                            "name": "惠城区",
                            "parent": 101911
                        },
                        {
                            "code": 10191102,
                            "name": "博罗县",
                            "parent": 101911
                        },
                        {
                            "code": 10191103,
                            "name": "惠东县",
                            "parent": 101911
                        },
                        {
                            "code": 10191104,
                            "name": "龙门县",
                            "parent": 101911
                        },
                        {
                            "code": 10191105,
                            "name": "惠阳区",
                            "parent": 101911
                        }
                    ],
                    "code": 101911,
                    "name": "惠州市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191201,
                            "name": "梅江区",
                            "parent": 101912
                        },
                        {
                            "code": 10191202,
                            "name": "梅县",
                            "parent": 101912
                        },
                        {
                            "code": 10191203,
                            "name": "大埔县",
                            "parent": 101912
                        },
                        {
                            "code": 10191204,
                            "name": "丰顺县",
                            "parent": 101912
                        },
                        {
                            "code": 10191205,
                            "name": "五华县",
                            "parent": 101912
                        },
                        {
                            "code": 10191206,
                            "name": "平远县",
                            "parent": 101912
                        },
                        {
                            "code": 10191207,
                            "name": "蕉岭县",
                            "parent": 101912
                        },
                        {
                            "code": 10191208,
                            "name": "兴宁市",
                            "parent": 101912
                        }
                    ],
                    "code": 101912,
                    "name": "梅州市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191301,
                            "name": "城区",
                            "parent": 101913
                        },
                        {
                            "code": 10191302,
                            "name": "海丰县",
                            "parent": 101913
                        },
                        {
                            "code": 10191303,
                            "name": "陆河县",
                            "parent": 101913
                        },
                        {
                            "code": 10191304,
                            "name": "陆丰市",
                            "parent": 101913
                        }
                    ],
                    "code": 101913,
                    "name": "汕尾市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191401,
                            "name": "源城区",
                            "parent": 101914
                        },
                        {
                            "code": 10191402,
                            "name": "紫金县",
                            "parent": 101914
                        },
                        {
                            "code": 10191403,
                            "name": "龙川县",
                            "parent": 101914
                        },
                        {
                            "code": 10191404,
                            "name": "连平县",
                            "parent": 101914
                        },
                        {
                            "code": 10191405,
                            "name": "和平县",
                            "parent": 101914
                        },
                        {
                            "code": 10191406,
                            "name": "东源县",
                            "parent": 101914
                        }
                    ],
                    "code": 101914,
                    "name": "河源市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191501,
                            "name": "江城区",
                            "parent": 101915
                        },
                        {
                            "code": 10191502,
                            "name": "阳西县",
                            "parent": 101915
                        },
                        {
                            "code": 10191503,
                            "name": "阳东县",
                            "parent": 101915
                        },
                        {
                            "code": 10191504,
                            "name": "阳春市",
                            "parent": 101915
                        }
                    ],
                    "code": 101915,
                    "name": "阳江市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191601,
                            "name": "清城区",
                            "parent": 101916
                        },
                        {
                            "code": 10191602,
                            "name": "佛冈县",
                            "parent": 101916
                        },
                        {
                            "code": 10191603,
                            "name": "阳山县",
                            "parent": 101916
                        },
                        {
                            "code": 10191604,
                            "name": "连山壮族瑶族自治县",
                            "parent": 101916
                        },
                        {
                            "code": 10191605,
                            "name": "连南瑶族自治县",
                            "parent": 101916
                        },
                        {
                            "code": 10191606,
                            "name": "清新县",
                            "parent": 101916
                        },
                        {
                            "code": 10191607,
                            "name": "英德市",
                            "parent": 101916
                        },
                        {
                            "code": 10191608,
                            "name": "连州市",
                            "parent": 101916
                        }
                    ],
                    "code": 101916,
                    "name": "清远市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191701,
                            "name": "莞城区",
                            "parent": 101917
                        },
                        {
                            "code": 10191702,
                            "name": "南城区",
                            "parent": 101917
                        },
                        {
                            "code": 10191703,
                            "name": "东城区",
                            "parent": 101917
                        },
                        {
                            "code": 10191704,
                            "name": "万江区",
                            "parent": 101917
                        }
                    ],
                    "code": 101917,
                    "name": "东莞市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191801,
                            "name": "中山市",
                            "parent": 101918
                        }
                    ],
                    "code": 101918,
                    "name": "中山市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10191901,
                            "name": "湘桥区",
                            "parent": 101919
                        },
                        {
                            "code": 10191902,
                            "name": "潮安县",
                            "parent": 101919
                        },
                        {
                            "code": 10191903,
                            "name": "饶平县",
                            "parent": 101919
                        }
                    ],
                    "code": 101919,
                    "name": "潮州市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10192001,
                            "name": "榕城区",
                            "parent": 101920
                        },
                        {
                            "code": 10192002,
                            "name": "揭东县",
                            "parent": 101920
                        },
                        {
                            "code": 10192003,
                            "name": "揭西县",
                            "parent": 101920
                        },
                        {
                            "code": 10192004,
                            "name": "惠来县",
                            "parent": 101920
                        },
                        {
                            "code": 10192005,
                            "name": "普宁市",
                            "parent": 101920
                        }
                    ],
                    "code": 101920,
                    "name": "揭阳市",
                    "parent": 1019
                },
                {
                    "child": [
                        {
                            "code": 10192101,
                            "name": "云城区",
                            "parent": 101921
                        },
                        {
                            "code": 10192102,
                            "name": "新兴县",
                            "parent": 101921
                        },
                        {
                            "code": 10192103,
                            "name": "郁南县",
                            "parent": 101921
                        },
                        {
                            "code": 10192104,
                            "name": "云安县",
                            "parent": 101921
                        },
                        {
                            "code": 10192105,
                            "name": "罗定市",
                            "parent": 101921
                        }
                    ],
                    "code": 101921,
                    "name": "云浮市",
                    "parent": 1019
                }
            ],
            "code": 1019,
            "name": "广东省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10200101,
                            "name": "兴宁区",
                            "parent": 102001
                        },
                        {
                            "code": 10200102,
                            "name": "青秀区",
                            "parent": 102001
                        },
                        {
                            "code": 10200103,
                            "name": "西乡塘区",
                            "parent": 102001
                        },
                        {
                            "code": 10200104,
                            "name": "江南区",
                            "parent": 102001
                        },
                        {
                            "code": 10200105,
                            "name": "良庆区",
                            "parent": 102001
                        },
                        {
                            "code": 10200106,
                            "name": "邕宁区",
                            "parent": 102001
                        },
                        {
                            "code": 10200107,
                            "name": "武鸣县",
                            "parent": 102001
                        },
                        {
                            "code": 10200108,
                            "name": "隆安县",
                            "parent": 102001
                        },
                        {
                            "code": 10200109,
                            "name": "马山县",
                            "parent": 102001
                        },
                        {
                            "code": 10200110,
                            "name": "上林县",
                            "parent": 102001
                        },
                        {
                            "code": 10200111,
                            "name": "宾阳县",
                            "parent": 102001
                        },
                        {
                            "code": 10200112,
                            "name": "横县",
                            "parent": 102001
                        }
                    ],
                    "code": 102001,
                    "name": "南宁市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200201,
                            "name": "城中区",
                            "parent": 102002
                        },
                        {
                            "code": 10200202,
                            "name": "鱼峰区",
                            "parent": 102002
                        },
                        {
                            "code": 10200203,
                            "name": "柳南区",
                            "parent": 102002
                        },
                        {
                            "code": 10200204,
                            "name": "柳北区",
                            "parent": 102002
                        },
                        {
                            "code": 10200205,
                            "name": "柳江县",
                            "parent": 102002
                        },
                        {
                            "code": 10200206,
                            "name": "柳城县",
                            "parent": 102002
                        },
                        {
                            "code": 10200207,
                            "name": "鹿寨县",
                            "parent": 102002
                        },
                        {
                            "code": 10200208,
                            "name": "融安县",
                            "parent": 102002
                        },
                        {
                            "code": 10200209,
                            "name": "融水苗族自治县",
                            "parent": 102002
                        },
                        {
                            "code": 10200210,
                            "name": "三江侗族自治县",
                            "parent": 102002
                        }
                    ],
                    "code": 102002,
                    "name": "柳州市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200301,
                            "name": "秀峰区",
                            "parent": 102003
                        },
                        {
                            "code": 10200302,
                            "name": "叠彩区",
                            "parent": 102003
                        },
                        {
                            "code": 10200303,
                            "name": "象山区",
                            "parent": 102003
                        },
                        {
                            "code": 10200304,
                            "name": "七星区",
                            "parent": 102003
                        },
                        {
                            "code": 10200305,
                            "name": "雁山区",
                            "parent": 102003
                        },
                        {
                            "code": 10200306,
                            "name": "阳朔县",
                            "parent": 102003
                        },
                        {
                            "code": 10200307,
                            "name": "临桂县",
                            "parent": 102003
                        },
                        {
                            "code": 10200308,
                            "name": "灵川县",
                            "parent": 102003
                        },
                        {
                            "code": 10200309,
                            "name": "全州县",
                            "parent": 102003
                        },
                        {
                            "code": 10200310,
                            "name": "兴安县",
                            "parent": 102003
                        },
                        {
                            "code": 10200311,
                            "name": "永福县",
                            "parent": 102003
                        },
                        {
                            "code": 10200312,
                            "name": "灌阳县",
                            "parent": 102003
                        },
                        {
                            "code": 10200313,
                            "name": "龙胜各县自治区",
                            "parent": 102003
                        },
                        {
                            "code": 10200314,
                            "name": "资源县",
                            "parent": 102003
                        },
                        {
                            "code": 10200315,
                            "name": "平乐县",
                            "parent": 102003
                        },
                        {
                            "code": 10200316,
                            "name": "荔蒲县",
                            "parent": 102003
                        },
                        {
                            "code": 10200317,
                            "name": "恭城瑶族自治县",
                            "parent": 102003
                        }
                    ],
                    "code": 102003,
                    "name": "桂林市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200401,
                            "name": "万秀区",
                            "parent": 102004
                        },
                        {
                            "code": 10200402,
                            "name": "蝶山区",
                            "parent": 102004
                        },
                        {
                            "code": 10200403,
                            "name": "市郊区",
                            "parent": 102004
                        },
                        {
                            "code": 10200404,
                            "name": "苍梧县",
                            "parent": 102004
                        },
                        {
                            "code": 10200405,
                            "name": "藤县",
                            "parent": 102004
                        },
                        {
                            "code": 10200406,
                            "name": "蒙山县",
                            "parent": 102004
                        },
                        {
                            "code": 10200407,
                            "name": "岑溪市",
                            "parent": 102004
                        }
                    ],
                    "code": 102004,
                    "name": "梧州市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200501,
                            "name": "海城区",
                            "parent": 102005
                        },
                        {
                            "code": 10200502,
                            "name": "银海区",
                            "parent": 102005
                        },
                        {
                            "code": 10200503,
                            "name": "铁山港区",
                            "parent": 102005
                        },
                        {
                            "code": 10200504,
                            "name": "合浦县",
                            "parent": 102005
                        }
                    ],
                    "code": 102005,
                    "name": "北海市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200601,
                            "name": "港口区",
                            "parent": 102006
                        },
                        {
                            "code": 10200602,
                            "name": "防城区",
                            "parent": 102006
                        },
                        {
                            "code": 10200603,
                            "name": "上思县",
                            "parent": 102006
                        },
                        {
                            "code": 10200604,
                            "name": "东兴市",
                            "parent": 102006
                        }
                    ],
                    "code": 102006,
                    "name": "防城港市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200701,
                            "name": "钦南区",
                            "parent": 102007
                        },
                        {
                            "code": 10200702,
                            "name": "钦北区",
                            "parent": 102007
                        },
                        {
                            "code": 10200703,
                            "name": "浦北县",
                            "parent": 102007
                        },
                        {
                            "code": 10200704,
                            "name": "灵山县",
                            "parent": 102007
                        }
                    ],
                    "code": 102007,
                    "name": "钦州市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200801,
                            "name": "港北区",
                            "parent": 102008
                        },
                        {
                            "code": 10200802,
                            "name": "港南区",
                            "parent": 102008
                        },
                        {
                            "code": 10200803,
                            "name": "覃塘区",
                            "parent": 102008
                        },
                        {
                            "code": 10200804,
                            "name": "平南县",
                            "parent": 102008
                        },
                        {
                            "code": 10200805,
                            "name": "桂平市",
                            "parent": 102008
                        }
                    ],
                    "code": 102008,
                    "name": "贵港市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10200901,
                            "name": "玉州区",
                            "parent": 102009
                        },
                        {
                            "code": 10200902,
                            "name": "容县",
                            "parent": 102009
                        },
                        {
                            "code": 10200903,
                            "name": "陆川县",
                            "parent": 102009
                        },
                        {
                            "code": 10200904,
                            "name": "博白县",
                            "parent": 102009
                        },
                        {
                            "code": 10200905,
                            "name": "兴业县",
                            "parent": 102009
                        },
                        {
                            "code": 10200906,
                            "name": "北流市",
                            "parent": 102009
                        }
                    ],
                    "code": 102009,
                    "name": "玉林市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10201001,
                            "name": "江州区",
                            "parent": 102010
                        },
                        {
                            "code": 10201002,
                            "name": "凭祥市",
                            "parent": 102010
                        },
                        {
                            "code": 10201003,
                            "name": "扶绥县",
                            "parent": 102010
                        },
                        {
                            "code": 10201004,
                            "name": "宁明县",
                            "parent": 102010
                        },
                        {
                            "code": 10201005,
                            "name": "龙州县",
                            "parent": 102010
                        },
                        {
                            "code": 10201006,
                            "name": "大新县",
                            "parent": 102010
                        },
                        {
                            "code": 10201007,
                            "name": "天等县",
                            "parent": 102010
                        }
                    ],
                    "code": 102010,
                    "name": "崇左市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10201101,
                            "name": "兴宾区",
                            "parent": 102011
                        },
                        {
                            "code": 10201102,
                            "name": "合山市",
                            "parent": 102011
                        },
                        {
                            "code": 10201103,
                            "name": "忻城县",
                            "parent": 102011
                        },
                        {
                            "code": 10201104,
                            "name": "象州县",
                            "parent": 102011
                        },
                        {
                            "code": 10201105,
                            "name": "武宣县",
                            "parent": 102011
                        },
                        {
                            "code": 10201106,
                            "name": "金秀瑶族自治县",
                            "parent": 102011
                        }
                    ],
                    "code": 102011,
                    "name": "来宾市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10201201,
                            "name": "八步区",
                            "parent": 102012
                        },
                        {
                            "code": 10201202,
                            "name": "昭平县",
                            "parent": 102012
                        },
                        {
                            "code": 10201203,
                            "name": "钟山县",
                            "parent": 102012
                        },
                        {
                            "code": 10201204,
                            "name": "富川瑶族自治县",
                            "parent": 102012
                        }
                    ],
                    "code": 102012,
                    "name": "贺州市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10201301,
                            "name": "右江区",
                            "parent": 102013
                        },
                        {
                            "code": 10201302,
                            "name": "田阳县",
                            "parent": 102013
                        },
                        {
                            "code": 10201303,
                            "name": "田东县",
                            "parent": 102013
                        },
                        {
                            "code": 10201304,
                            "name": "平果县",
                            "parent": 102013
                        },
                        {
                            "code": 10201305,
                            "name": "德保县",
                            "parent": 102013
                        },
                        {
                            "code": 10201306,
                            "name": "靖西县",
                            "parent": 102013
                        },
                        {
                            "code": 10201307,
                            "name": "那坡县",
                            "parent": 102013
                        },
                        {
                            "code": 10201308,
                            "name": "凌云县",
                            "parent": 102013
                        },
                        {
                            "code": 10201309,
                            "name": "乐业县",
                            "parent": 102013
                        },
                        {
                            "code": 10201310,
                            "name": "田林县",
                            "parent": 102013
                        },
                        {
                            "code": 10201311,
                            "name": "隆林各族自治县",
                            "parent": 102013
                        },
                        {
                            "code": 10201312,
                            "name": "西林县",
                            "parent": 102013
                        }
                    ],
                    "code": 102013,
                    "name": "百色市",
                    "parent": 1020
                },
                {
                    "child": [
                        {
                            "code": 10201401,
                            "name": "金城江区",
                            "parent": 102014
                        },
                        {
                            "code": 10201402,
                            "name": "宜州市",
                            "parent": 102014
                        },
                        {
                            "code": 10201403,
                            "name": "罗城仫佬族自治县",
                            "parent": 102014
                        },
                        {
                            "code": 10201404,
                            "name": "环江毛南族自治县",
                            "parent": 102014
                        },
                        {
                            "code": 10201405,
                            "name": "南丹县",
                            "parent": 102014
                        },
                        {
                            "code": 10201406,
                            "name": "天峨县",
                            "parent": 102014
                        },
                        {
                            "code": 10201407,
                            "name": "凤山县",
                            "parent": 102014
                        },
                        {
                            "code": 10201408,
                            "name": "东兰县",
                            "parent": 102014
                        },
                        {
                            "code": 10201409,
                            "name": "巴马瑶族自治县",
                            "parent": 102014
                        },
                        {
                            "code": 10201410,
                            "name": "都安瑶族自治县",
                            "parent": 102014
                        },
                        {
                            "code": 10201411,
                            "name": "大化瑶族自治县",
                            "parent": 102014
                        }
                    ],
                    "code": 102014,
                    "name": "河池市",
                    "parent": 1020
                }
            ],
            "code": 1020,
            "name": "广西省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10210101,
                            "name": "琼海市",
                            "parent": 102101
                        }
                    ],
                    "code": 102101,
                    "name": "琼海市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210201,
                            "name": "儋州市",
                            "parent": 102102
                        }
                    ],
                    "code": 102102,
                    "name": "儋州市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210301,
                            "name": "五指山市",
                            "parent": 102103
                        }
                    ],
                    "code": 102103,
                    "name": "五指山市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210401,
                            "name": "文昌市",
                            "parent": 102104
                        }
                    ],
                    "code": 102104,
                    "name": "文昌市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210501,
                            "name": "万宁市",
                            "parent": 102105
                        }
                    ],
                    "code": 102105,
                    "name": "万宁市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210601,
                            "name": "东方市",
                            "parent": 102106
                        }
                    ],
                    "code": 102106,
                    "name": "东方市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210701,
                            "name": "定安县",
                            "parent": 102107
                        }
                    ],
                    "code": 102107,
                    "name": "定安县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210801,
                            "name": "屯昌县",
                            "parent": 102108
                        }
                    ],
                    "code": 102108,
                    "name": "屯昌县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10210901,
                            "name": "澄迈县",
                            "parent": 102109
                        }
                    ],
                    "code": 102109,
                    "name": "澄迈县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211001,
                            "name": "临高县",
                            "parent": 102110
                        }
                    ],
                    "code": 102110,
                    "name": "临高县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211101,
                            "name": "白沙黎族自治县",
                            "parent": 102111
                        }
                    ],
                    "code": 102111,
                    "name": "白沙黎族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211201,
                            "name": "昌江黎族自治县",
                            "parent": 102112
                        }
                    ],
                    "code": 102112,
                    "name": "昌江黎族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211301,
                            "name": "乐东黎族自治县",
                            "parent": 102113
                        }
                    ],
                    "code": 102113,
                    "name": "乐东黎族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211401,
                            "name": "陵水黎族自治县",
                            "parent": 102114
                        }
                    ],
                    "code": 102114,
                    "name": "陵水黎族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211501,
                            "name": "保亭黎族苗族自治县",
                            "parent": 102115
                        }
                    ],
                    "code": 102115,
                    "name": "保亭黎族苗族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211601,
                            "name": "琼中黎族苗族自治县",
                            "parent": 102116
                        }
                    ],
                    "code": 102116,
                    "name": "琼中黎族苗族自治县",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211701,
                            "name": "西南中沙群岛办事处",
                            "parent": 102117
                        }
                    ],
                    "code": 102117,
                    "name": "西南中沙群岛办事处",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211801,
                            "name": "龙华区",
                            "parent": 102118
                        },
                        {
                            "code": 10211802,
                            "name": "秀英区",
                            "parent": 102118
                        },
                        {
                            "code": 10211803,
                            "name": "琼山区",
                            "parent": 102118
                        },
                        {
                            "code": 10211804,
                            "name": "美兰区",
                            "parent": 102118
                        }
                    ],
                    "code": 102118,
                    "name": "海口市",
                    "parent": 1021
                },
                {
                    "child": [
                        {
                            "code": 10211901,
                            "name": "吉阳区",
                            "parent": 102119
                        },
                        {
                            "code": 10211902,
                            "name": "崖州区",
                            "parent": 102119
                        },
                        {
                            "code": 10211903,
                            "name": "天涯区",
                            "parent": 102119
                        },
                        {
                            "code": 10211904,
                            "name": "海棠区",
                            "parent": 102119
                        }
                    ],
                    "code": 102119,
                    "name": "三亚市",
                    "parent": 1021
                }
            ],
            "code": 1021,
            "name": "海南省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10220101,
                            "name": "万州区",
                            "parent": 102201
                        },
                        {
                            "code": 10220102,
                            "name": "涪陵区",
                            "parent": 102201
                        },
                        {
                            "code": 10220103,
                            "name": "渝中区",
                            "parent": 102201
                        },
                        {
                            "code": 10220104,
                            "name": "大渡口区",
                            "parent": 102201
                        },
                        {
                            "code": 10220105,
                            "name": "江北区",
                            "parent": 102201
                        },
                        {
                            "code": 10220106,
                            "name": "沙坪坝区",
                            "parent": 102201
                        },
                        {
                            "code": 10220107,
                            "name": "九龙坡区",
                            "parent": 102201
                        },
                        {
                            "code": 10220108,
                            "name": "南岸区",
                            "parent": 102201
                        },
                        {
                            "code": 10220109,
                            "name": "北碚区",
                            "parent": 102201
                        },
                        {
                            "code": 10220110,
                            "name": "万盛区",
                            "parent": 102201
                        },
                        {
                            "code": 10220111,
                            "name": "双桥区",
                            "parent": 102201
                        },
                        {
                            "code": 10220112,
                            "name": "渝北区",
                            "parent": 102201
                        },
                        {
                            "code": 10220113,
                            "name": "巴南区",
                            "parent": 102201
                        },
                        {
                            "code": 10220114,
                            "name": "长寿县",
                            "parent": 102201
                        },
                        {
                            "code": 10220115,
                            "name": "綦江县",
                            "parent": 102201
                        },
                        {
                            "code": 10220116,
                            "name": "潼南县",
                            "parent": 102201
                        },
                        {
                            "code": 10220117,
                            "name": "铜梁县",
                            "parent": 102201
                        },
                        {
                            "code": 10220118,
                            "name": "大足县",
                            "parent": 102201
                        },
                        {
                            "code": 10220119,
                            "name": "荣昌县",
                            "parent": 102201
                        },
                        {
                            "code": 10220120,
                            "name": "璧山县",
                            "parent": 102201
                        },
                        {
                            "code": 10220121,
                            "name": "梁平县",
                            "parent": 102201
                        },
                        {
                            "code": 10220122,
                            "name": "城口县",
                            "parent": 102201
                        },
                        {
                            "code": 10220123,
                            "name": "丰都县",
                            "parent": 102201
                        },
                        {
                            "code": 10220124,
                            "name": "垫江县",
                            "parent": 102201
                        },
                        {
                            "code": 10220125,
                            "name": "武隆县",
                            "parent": 102201
                        },
                        {
                            "code": 10220126,
                            "name": "忠县",
                            "parent": 102201
                        },
                        {
                            "code": 10220127,
                            "name": "开县",
                            "parent": 102201
                        },
                        {
                            "code": 10220128,
                            "name": "云阳县",
                            "parent": 102201
                        },
                        {
                            "code": 10220129,
                            "name": "奉节县",
                            "parent": 102201
                        },
                        {
                            "code": 10220130,
                            "name": "巫山县",
                            "parent": 102201
                        },
                        {
                            "code": 10220131,
                            "name": "巫溪县",
                            "parent": 102201
                        },
                        {
                            "code": 10220132,
                            "name": "黔江土家族苗族自治县",
                            "parent": 102201
                        },
                        {
                            "code": 10220133,
                            "name": "石柱土家族自治县",
                            "parent": 102201
                        },
                        {
                            "code": 10220134,
                            "name": "秀山土家族苗族自治县",
                            "parent": 102201
                        },
                        {
                            "code": 10220135,
                            "name": "酉阳土家族苗族自治县",
                            "parent": 102201
                        },
                        {
                            "code": 10220136,
                            "name": "彭水苗族土家族自治县",
                            "parent": 102201
                        },
                        {
                            "code": 10220137,
                            "name": "江津市",
                            "parent": 102201
                        },
                        {
                            "code": 10220138,
                            "name": "合川市",
                            "parent": 102201
                        },
                        {
                            "code": 10220139,
                            "name": "永川市",
                            "parent": 102201
                        },
                        {
                            "code": 10220140,
                            "name": "南川市",
                            "parent": 102201
                        }
                    ],
                    "code": 102201,
                    "name": "重庆市",
                    "parent": 1022
                }
            ],
            "code": 1022,
            "name": "重庆市",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10230101,
                            "name": "锦江区",
                            "parent": 102301
                        },
                        {
                            "code": 10230102,
                            "name": "青羊区",
                            "parent": 102301
                        },
                        {
                            "code": 10230103,
                            "name": "金牛区",
                            "parent": 102301
                        },
                        {
                            "code": 10230104,
                            "name": "武侯区",
                            "parent": 102301
                        },
                        {
                            "code": 10230105,
                            "name": "成华区",
                            "parent": 102301
                        },
                        {
                            "code": 10230106,
                            "name": "龙泉驿区",
                            "parent": 102301
                        },
                        {
                            "code": 10230107,
                            "name": "青白江区",
                            "parent": 102301
                        },
                        {
                            "code": 10230108,
                            "name": "金堂县",
                            "parent": 102301
                        },
                        {
                            "code": 10230109,
                            "name": "双流县",
                            "parent": 102301
                        },
                        {
                            "code": 10230110,
                            "name": "温江县",
                            "parent": 102301
                        },
                        {
                            "code": 10230111,
                            "name": "郫县",
                            "parent": 102301
                        },
                        {
                            "code": 10230112,
                            "name": "新都县",
                            "parent": 102301
                        },
                        {
                            "code": 10230113,
                            "name": "大邑县",
                            "parent": 102301
                        },
                        {
                            "code": 10230114,
                            "name": "蒲江县",
                            "parent": 102301
                        },
                        {
                            "code": 10230115,
                            "name": "新津县",
                            "parent": 102301
                        },
                        {
                            "code": 10230116,
                            "name": "都江堰市",
                            "parent": 102301
                        },
                        {
                            "code": 10230117,
                            "name": "彭州市",
                            "parent": 102301
                        },
                        {
                            "code": 10230118,
                            "name": "邛崃市",
                            "parent": 102301
                        },
                        {
                            "code": 10230119,
                            "name": "崇州市",
                            "parent": 102301
                        }
                    ],
                    "code": 102301,
                    "name": "成都市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230201,
                            "name": "自流井区",
                            "parent": 102302
                        },
                        {
                            "code": 10230202,
                            "name": "贡井区",
                            "parent": 102302
                        },
                        {
                            "code": 10230203,
                            "name": "大安区",
                            "parent": 102302
                        },
                        {
                            "code": 10230204,
                            "name": "沿滩区",
                            "parent": 102302
                        },
                        {
                            "code": 10230205,
                            "name": "荣县",
                            "parent": 102302
                        },
                        {
                            "code": 10230206,
                            "name": "富顺县",
                            "parent": 102302
                        }
                    ],
                    "code": 102302,
                    "name": "自贡市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230301,
                            "name": "东区",
                            "parent": 102303
                        },
                        {
                            "code": 10230302,
                            "name": "西区",
                            "parent": 102303
                        },
                        {
                            "code": 10230303,
                            "name": "仁和区",
                            "parent": 102303
                        },
                        {
                            "code": 10230304,
                            "name": "米易县",
                            "parent": 102303
                        },
                        {
                            "code": 10230305,
                            "name": "盐边县",
                            "parent": 102303
                        }
                    ],
                    "code": 102303,
                    "name": "攀枝花市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230401,
                            "name": "江阳区",
                            "parent": 102304
                        },
                        {
                            "code": 10230402,
                            "name": "纳溪区",
                            "parent": 102304
                        },
                        {
                            "code": 10230403,
                            "name": "龙马潭区",
                            "parent": 102304
                        },
                        {
                            "code": 10230404,
                            "name": "泸县",
                            "parent": 102304
                        },
                        {
                            "code": 10230405,
                            "name": "合江县",
                            "parent": 102304
                        },
                        {
                            "code": 10230406,
                            "name": "叙永县",
                            "parent": 102304
                        },
                        {
                            "code": 10230407,
                            "name": "古蔺县",
                            "parent": 102304
                        }
                    ],
                    "code": 102304,
                    "name": "泸州市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230501,
                            "name": "旌阳区",
                            "parent": 102305
                        },
                        {
                            "code": 10230502,
                            "name": "中江县",
                            "parent": 102305
                        },
                        {
                            "code": 10230503,
                            "name": "罗江县",
                            "parent": 102305
                        },
                        {
                            "code": 10230504,
                            "name": "广汉市",
                            "parent": 102305
                        },
                        {
                            "code": 10230505,
                            "name": "什邡市",
                            "parent": 102305
                        },
                        {
                            "code": 10230506,
                            "name": "绵竹市",
                            "parent": 102305
                        }
                    ],
                    "code": 102305,
                    "name": "德阳市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230601,
                            "name": "涪城区",
                            "parent": 102306
                        },
                        {
                            "code": 10230602,
                            "name": "游仙区",
                            "parent": 102306
                        },
                        {
                            "code": 10230603,
                            "name": "三台县",
                            "parent": 102306
                        },
                        {
                            "code": 10230604,
                            "name": "盐亭县",
                            "parent": 102306
                        },
                        {
                            "code": 10230605,
                            "name": "安县",
                            "parent": 102306
                        },
                        {
                            "code": 10230606,
                            "name": "梓潼县",
                            "parent": 102306
                        },
                        {
                            "code": 10230607,
                            "name": "北川县",
                            "parent": 102306
                        },
                        {
                            "code": 10230608,
                            "name": "平武县",
                            "parent": 102306
                        },
                        {
                            "code": 10230609,
                            "name": "江油市",
                            "parent": 102306
                        }
                    ],
                    "code": 102306,
                    "name": "绵阳市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230701,
                            "name": "利州区",
                            "parent": 102307
                        },
                        {
                            "code": 10230702,
                            "name": "元坝区",
                            "parent": 102307
                        },
                        {
                            "code": 10230703,
                            "name": "朝天区",
                            "parent": 102307
                        },
                        {
                            "code": 10230704,
                            "name": "旺苍县",
                            "parent": 102307
                        },
                        {
                            "code": 10230705,
                            "name": "青川县",
                            "parent": 102307
                        },
                        {
                            "code": 10230706,
                            "name": "剑阁县",
                            "parent": 102307
                        },
                        {
                            "code": 10230707,
                            "name": "苍溪县",
                            "parent": 102307
                        }
                    ],
                    "code": 102307,
                    "name": "广元市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230801,
                            "name": "船山区",
                            "parent": 102308
                        },
                        {
                            "code": 10230802,
                            "name": "　安居区",
                            "parent": 102308
                        },
                        {
                            "code": 10230803,
                            "name": "蓬溪县",
                            "parent": 102308
                        },
                        {
                            "code": 10230804,
                            "name": "射洪县",
                            "parent": 102308
                        },
                        {
                            "code": 10230805,
                            "name": "大英县",
                            "parent": 102308
                        }
                    ],
                    "code": 102308,
                    "name": "遂宁市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10230901,
                            "name": "市中区",
                            "parent": 102309
                        },
                        {
                            "code": 10230902,
                            "name": "东兴区",
                            "parent": 102309
                        },
                        {
                            "code": 10230903,
                            "name": "威远县",
                            "parent": 102309
                        },
                        {
                            "code": 10230904,
                            "name": "资中县",
                            "parent": 102309
                        },
                        {
                            "code": 10230905,
                            "name": "隆昌县",
                            "parent": 102309
                        }
                    ],
                    "code": 102309,
                    "name": "内江市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231001,
                            "name": "市中区",
                            "parent": 102310
                        },
                        {
                            "code": 10231002,
                            "name": "沙湾区",
                            "parent": 102310
                        },
                        {
                            "code": 10231003,
                            "name": "五通桥区",
                            "parent": 102310
                        },
                        {
                            "code": 10231004,
                            "name": "金口河区",
                            "parent": 102310
                        },
                        {
                            "code": 10231005,
                            "name": "犍为县",
                            "parent": 102310
                        },
                        {
                            "code": 10231006,
                            "name": "井研县",
                            "parent": 102310
                        },
                        {
                            "code": 10231007,
                            "name": "夹江县",
                            "parent": 102310
                        },
                        {
                            "code": 10231008,
                            "name": "沐川县",
                            "parent": 102310
                        },
                        {
                            "code": 10231009,
                            "name": "峨边彝族自治县",
                            "parent": 102310
                        },
                        {
                            "code": 10231010,
                            "name": "马边彝族自治县",
                            "parent": 102310
                        },
                        {
                            "code": 10231011,
                            "name": "峨眉山市",
                            "parent": 102310
                        }
                    ],
                    "code": 102310,
                    "name": "乐山市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231101,
                            "name": "顺庆区",
                            "parent": 102311
                        },
                        {
                            "code": 10231102,
                            "name": "高坪区",
                            "parent": 102311
                        },
                        {
                            "code": 10231103,
                            "name": "嘉陵区",
                            "parent": 102311
                        },
                        {
                            "code": 10231104,
                            "name": "南部县",
                            "parent": 102311
                        },
                        {
                            "code": 10231105,
                            "name": "营山县",
                            "parent": 102311
                        },
                        {
                            "code": 10231106,
                            "name": "蓬安县",
                            "parent": 102311
                        },
                        {
                            "code": 10231107,
                            "name": "仪陇县",
                            "parent": 102311
                        },
                        {
                            "code": 10231108,
                            "name": "西充县",
                            "parent": 102311
                        },
                        {
                            "code": 10231109,
                            "name": "阆中市",
                            "parent": 102311
                        }
                    ],
                    "code": 102311,
                    "name": "南充市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231201,
                            "name": "翠屏区",
                            "parent": 102312
                        },
                        {
                            "code": 10231202,
                            "name": "宜宾县",
                            "parent": 102312
                        },
                        {
                            "code": 10231203,
                            "name": "南溪县",
                            "parent": 102312
                        },
                        {
                            "code": 10231204,
                            "name": "江安县",
                            "parent": 102312
                        },
                        {
                            "code": 10231205,
                            "name": "长宁县",
                            "parent": 102312
                        },
                        {
                            "code": 10231206,
                            "name": "高县",
                            "parent": 102312
                        },
                        {
                            "code": 10231207,
                            "name": "珙县",
                            "parent": 102312
                        },
                        {
                            "code": 10231208,
                            "name": "筠连县",
                            "parent": 102312
                        },
                        {
                            "code": 10231209,
                            "name": "兴文县",
                            "parent": 102312
                        },
                        {
                            "code": 10231210,
                            "name": "屏山县",
                            "parent": 102312
                        }
                    ],
                    "code": 102312,
                    "name": "宜宾市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231301,
                            "name": "广安区",
                            "parent": 102313
                        },
                        {
                            "code": 10231302,
                            "name": " 岳池县",
                            "parent": 102313
                        },
                        {
                            "code": 10231303,
                            "name": " 武胜县",
                            "parent": 102313
                        },
                        {
                            "code": 10231304,
                            "name": " 邻水县",
                            "parent": 102313
                        },
                        {
                            "code": 10231305,
                            "name": " 华莹市",
                            "parent": 102313
                        }
                    ],
                    "code": 102313,
                    "name": "广安市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231401,
                            "name": "达川区",
                            "parent": 102314
                        },
                        {
                            "code": 10231402,
                            "name": "万源市",
                            "parent": 102314
                        },
                        {
                            "code": 10231403,
                            "name": "通川区",
                            "parent": 102314
                        },
                        {
                            "code": 10231404,
                            "name": "宣汉县",
                            "parent": 102314
                        },
                        {
                            "code": 10231405,
                            "name": "开江县",
                            "parent": 102314
                        },
                        {
                            "code": 10231406,
                            "name": "大竹县",
                            "parent": 102314
                        },
                        {
                            "code": 10231407,
                            "name": "渠县",
                            "parent": 102314
                        }
                    ],
                    "code": 102314,
                    "name": "达州市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231501,
                            "name": "雨城区",
                            "parent": 102315
                        },
                        {
                            "code": 10231502,
                            "name": "名山县",
                            "parent": 102315
                        },
                        {
                            "code": 10231503,
                            "name": "荥经县",
                            "parent": 102315
                        },
                        {
                            "code": 10231504,
                            "name": "汉源县",
                            "parent": 102315
                        },
                        {
                            "code": 10231505,
                            "name": "石棉县",
                            "parent": 102315
                        },
                        {
                            "code": 10231506,
                            "name": "天全县",
                            "parent": 102315
                        },
                        {
                            "code": 10231507,
                            "name": "芦山县",
                            "parent": 102315
                        },
                        {
                            "code": 10231508,
                            "name": "宝兴县",
                            "parent": 102315
                        }
                    ],
                    "code": 102315,
                    "name": "雅安市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231601,
                            "name": "汶川县",
                            "parent": 102316
                        },
                        {
                            "code": 10231602,
                            "name": "理县",
                            "parent": 102316
                        },
                        {
                            "code": 10231603,
                            "name": "茂县",
                            "parent": 102316
                        },
                        {
                            "code": 10231604,
                            "name": "松潘县",
                            "parent": 102316
                        },
                        {
                            "code": 10231605,
                            "name": "九寨沟县",
                            "parent": 102316
                        },
                        {
                            "code": 10231606,
                            "name": "金川县",
                            "parent": 102316
                        },
                        {
                            "code": 10231607,
                            "name": "小金县",
                            "parent": 102316
                        },
                        {
                            "code": 10231608,
                            "name": "黑水县",
                            "parent": 102316
                        },
                        {
                            "code": 10231609,
                            "name": "马尔康县",
                            "parent": 102316
                        },
                        {
                            "code": 10231610,
                            "name": "壤塘县",
                            "parent": 102316
                        },
                        {
                            "code": 10231611,
                            "name": "阿坝县",
                            "parent": 102316
                        },
                        {
                            "code": 10231612,
                            "name": "若尔盖县",
                            "parent": 102316
                        },
                        {
                            "code": 10231613,
                            "name": "红原县",
                            "parent": 102316
                        }
                    ],
                    "code": 102316,
                    "name": "阿坝藏族羌族自治州",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231701,
                            "name": "康定县",
                            "parent": 102317
                        },
                        {
                            "code": 10231702,
                            "name": "泸定县",
                            "parent": 102317
                        },
                        {
                            "code": 10231703,
                            "name": "丹巴县",
                            "parent": 102317
                        },
                        {
                            "code": 10231704,
                            "name": "九龙县",
                            "parent": 102317
                        },
                        {
                            "code": 10231705,
                            "name": "雅江县",
                            "parent": 102317
                        },
                        {
                            "code": 10231706,
                            "name": "道孚县",
                            "parent": 102317
                        },
                        {
                            "code": 10231707,
                            "name": "炉霍县",
                            "parent": 102317
                        },
                        {
                            "code": 10231708,
                            "name": "甘孜县",
                            "parent": 102317
                        },
                        {
                            "code": 10231709,
                            "name": "新龙县",
                            "parent": 102317
                        },
                        {
                            "code": 10231710,
                            "name": "德格县",
                            "parent": 102317
                        },
                        {
                            "code": 10231711,
                            "name": "白玉县",
                            "parent": 102317
                        },
                        {
                            "code": 10231712,
                            "name": "石渠县",
                            "parent": 102317
                        },
                        {
                            "code": 10231713,
                            "name": "色达县",
                            "parent": 102317
                        },
                        {
                            "code": 10231714,
                            "name": "理塘县",
                            "parent": 102317
                        },
                        {
                            "code": 10231715,
                            "name": "巴塘县",
                            "parent": 102317
                        },
                        {
                            "code": 10231716,
                            "name": "乡城县",
                            "parent": 102317
                        },
                        {
                            "code": 10231717,
                            "name": "稻城县",
                            "parent": 102317
                        },
                        {
                            "code": 10231718,
                            "name": "得荣县",
                            "parent": 102317
                        }
                    ],
                    "code": 102317,
                    "name": "甘孜藏族自治州",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231801,
                            "name": "西昌市",
                            "parent": 102318
                        },
                        {
                            "code": 10231802,
                            "name": "木里藏族自治县",
                            "parent": 102318
                        },
                        {
                            "code": 10231803,
                            "name": "盐源县",
                            "parent": 102318
                        },
                        {
                            "code": 10231804,
                            "name": "德昌县",
                            "parent": 102318
                        },
                        {
                            "code": 10231805,
                            "name": "会理县",
                            "parent": 102318
                        },
                        {
                            "code": 10231806,
                            "name": "会东县",
                            "parent": 102318
                        },
                        {
                            "code": 10231807,
                            "name": "宁南县",
                            "parent": 102318
                        },
                        {
                            "code": 10231808,
                            "name": "普格县",
                            "parent": 102318
                        },
                        {
                            "code": 10231809,
                            "name": "布拖县",
                            "parent": 102318
                        },
                        {
                            "code": 10231810,
                            "name": "金阳县",
                            "parent": 102318
                        },
                        {
                            "code": 10231811,
                            "name": "昭觉县",
                            "parent": 102318
                        },
                        {
                            "code": 10231812,
                            "name": "喜德县",
                            "parent": 102318
                        },
                        {
                            "code": 10231813,
                            "name": "冕宁县",
                            "parent": 102318
                        },
                        {
                            "code": 10231814,
                            "name": "越西县",
                            "parent": 102318
                        },
                        {
                            "code": 10231815,
                            "name": "甘洛县",
                            "parent": 102318
                        },
                        {
                            "code": 10231816,
                            "name": "美姑县",
                            "parent": 102318
                        },
                        {
                            "code": 10231817,
                            "name": "雷波县",
                            "parent": 102318
                        }
                    ],
                    "code": 102318,
                    "name": "凉山彝族自治州",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10231901,
                            "name": "巴州区",
                            "parent": 102319
                        },
                        {
                            "code": 10231902,
                            "name": "通江县",
                            "parent": 102319
                        },
                        {
                            "code": 10231903,
                            "name": "南江县",
                            "parent": 102319
                        },
                        {
                            "code": 10231904,
                            "name": "恩阳区",
                            "parent": 102319
                        },
                        {
                            "code": 10231905,
                            "name": "平昌县",
                            "parent": 102319
                        }
                    ],
                    "code": 102319,
                    "name": "巴中市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10232001,
                            "name": "东坡区",
                            "parent": 102320
                        },
                        {
                            "code": 10232002,
                            "name": "仁寿县",
                            "parent": 102320
                        },
                        {
                            "code": 10232003,
                            "name": "彭山区",
                            "parent": 102320
                        },
                        {
                            "code": 10232004,
                            "name": "洪雅县",
                            "parent": 102320
                        },
                        {
                            "code": 10232005,
                            "name": "丹棱县",
                            "parent": 102320
                        },
                        {
                            "code": 10232006,
                            "name": "青神县",
                            "parent": 102320
                        }
                    ],
                    "code": 102320,
                    "name": "眉山市",
                    "parent": 1023
                },
                {
                    "child": [
                        {
                            "code": 10232101,
                            "name": "雁江区",
                            "parent": 102321
                        },
                        {
                            "code": 10232102,
                            "name": "简阳市",
                            "parent": 102321
                        },
                        {
                            "code": 10232103,
                            "name": "安岳县",
                            "parent": 102321
                        },
                        {
                            "code": 10232104,
                            "name": "乐至县",
                            "parent": 102321
                        }
                    ],
                    "code": 102321,
                    "name": "资阳市",
                    "parent": 1023
                }
            ],
            "code": 1023,
            "name": "四川省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10240101,
                            "name": "南明区",
                            "parent": 102401
                        },
                        {
                            "code": 10240102,
                            "name": "云岩区",
                            "parent": 102401
                        },
                        {
                            "code": 10240103,
                            "name": "花溪区",
                            "parent": 102401
                        },
                        {
                            "code": 10240104,
                            "name": "乌当区",
                            "parent": 102401
                        },
                        {
                            "code": 10240105,
                            "name": "白云区",
                            "parent": 102401
                        },
                        {
                            "code": 10240106,
                            "name": "小河区",
                            "parent": 102401
                        },
                        {
                            "code": 10240107,
                            "name": "开阳县",
                            "parent": 102401
                        },
                        {
                            "code": 10240108,
                            "name": "息烽县",
                            "parent": 102401
                        },
                        {
                            "code": 10240109,
                            "name": "修文县",
                            "parent": 102401
                        },
                        {
                            "code": 10240110,
                            "name": "清镇市",
                            "parent": 102401
                        }
                    ],
                    "code": 102401,
                    "name": "贵阳市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240201,
                            "name": "钟山区",
                            "parent": 102402
                        },
                        {
                            "code": 10240202,
                            "name": "盘县特区",
                            "parent": 102402
                        },
                        {
                            "code": 10240203,
                            "name": "六枝特区",
                            "parent": 102402
                        },
                        {
                            "code": 10240204,
                            "name": "水城县",
                            "parent": 102402
                        }
                    ],
                    "code": 102402,
                    "name": "六盘水市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240301,
                            "name": "红花岗区",
                            "parent": 102403
                        },
                        {
                            "code": 10240302,
                            "name": "汇川区",
                            "parent": 102403
                        },
                        {
                            "code": 10240303,
                            "name": "遵义县",
                            "parent": 102403
                        },
                        {
                            "code": 10240304,
                            "name": "桐梓县",
                            "parent": 102403
                        },
                        {
                            "code": 10240305,
                            "name": "绥阳县",
                            "parent": 102403
                        },
                        {
                            "code": 10240306,
                            "name": "正安县",
                            "parent": 102403
                        },
                        {
                            "code": 10240307,
                            "name": "道真仡佬族苗族自治县",
                            "parent": 102403
                        },
                        {
                            "code": 10240308,
                            "name": "务川仡佬族苗族自治县",
                            "parent": 102403
                        },
                        {
                            "code": 10240309,
                            "name": "凤冈县",
                            "parent": 102403
                        },
                        {
                            "code": 10240310,
                            "name": "湄潭县",
                            "parent": 102403
                        },
                        {
                            "code": 10240311,
                            "name": "余庆县",
                            "parent": 102403
                        },
                        {
                            "code": 10240312,
                            "name": "习水县",
                            "parent": 102403
                        },
                        {
                            "code": 10240313,
                            "name": "赤水市",
                            "parent": 102403
                        },
                        {
                            "code": 10240314,
                            "name": "仁怀市",
                            "parent": 102403
                        }
                    ],
                    "code": 102403,
                    "name": "遵义市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240401,
                            "name": "碧江区",
                            "parent": 102404
                        },
                        {
                            "code": 10240402,
                            "name": "江口县",
                            "parent": 102404
                        },
                        {
                            "code": 10240403,
                            "name": "玉屏侗族自治县",
                            "parent": 102404
                        },
                        {
                            "code": 10240404,
                            "name": "石阡县",
                            "parent": 102404
                        },
                        {
                            "code": 10240405,
                            "name": "思南县",
                            "parent": 102404
                        },
                        {
                            "code": 10240406,
                            "name": "印江土家族苗族自治县",
                            "parent": 102404
                        },
                        {
                            "code": 10240407,
                            "name": "德江县",
                            "parent": 102404
                        },
                        {
                            "code": 10240408,
                            "name": "沿河土家族自治县",
                            "parent": 102404
                        },
                        {
                            "code": 10240409,
                            "name": "松桃苗族自治县",
                            "parent": 102404
                        },
                        {
                            "code": 10240410,
                            "name": "万山区",
                            "parent": 102404
                        }
                    ],
                    "code": 102404,
                    "name": "铜仁市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240501,
                            "name": "兴义市",
                            "parent": 102405
                        },
                        {
                            "code": 10240502,
                            "name": "兴仁县",
                            "parent": 102405
                        },
                        {
                            "code": 10240503,
                            "name": "普安县",
                            "parent": 102405
                        },
                        {
                            "code": 10240504,
                            "name": "晴隆县",
                            "parent": 102405
                        },
                        {
                            "code": 10240505,
                            "name": "贞丰县",
                            "parent": 102405
                        },
                        {
                            "code": 10240506,
                            "name": "望谟县",
                            "parent": 102405
                        },
                        {
                            "code": 10240507,
                            "name": "册亨县",
                            "parent": 102405
                        },
                        {
                            "code": 10240508,
                            "name": "安龙县",
                            "parent": 102405
                        }
                    ],
                    "code": 102405,
                    "name": "黔西南布依族苗族自治州",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240601,
                            "name": "七星关区",
                            "parent": 102406
                        },
                        {
                            "code": 10240602,
                            "name": "大方县",
                            "parent": 102406
                        },
                        {
                            "code": 10240603,
                            "name": "黔西县",
                            "parent": 102406
                        },
                        {
                            "code": 10240604,
                            "name": "金沙县",
                            "parent": 102406
                        },
                        {
                            "code": 10240605,
                            "name": "织金县",
                            "parent": 102406
                        },
                        {
                            "code": 10240606,
                            "name": "纳雍县",
                            "parent": 102406
                        },
                        {
                            "code": 10240607,
                            "name": "威宁彝族回族苗族自治县",
                            "parent": 102406
                        },
                        {
                            "code": 10240608,
                            "name": "赫章县",
                            "parent": 102406
                        }
                    ],
                    "code": 102406,
                    "name": "毕节市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240701,
                            "name": "西秀区",
                            "parent": 102407
                        },
                        {
                            "code": 10240702,
                            "name": "平坝区",
                            "parent": 102407
                        },
                        {
                            "code": 10240703,
                            "name": "普定县",
                            "parent": 102407
                        },
                        {
                            "code": 10240704,
                            "name": "关岭布依族苗族自治县",
                            "parent": 102407
                        },
                        {
                            "code": 10240705,
                            "name": "镇宁布依族苗族自治县",
                            "parent": 102407
                        },
                        {
                            "code": 10240706,
                            "name": "紫云苗族布依族自治县",
                            "parent": 102407
                        }
                    ],
                    "code": 102407,
                    "name": "安顺市",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240801,
                            "name": "凯里市",
                            "parent": 102408
                        },
                        {
                            "code": 10240802,
                            "name": "黄平县",
                            "parent": 102408
                        },
                        {
                            "code": 10240803,
                            "name": "施秉县",
                            "parent": 102408
                        },
                        {
                            "code": 10240804,
                            "name": "三穗县",
                            "parent": 102408
                        },
                        {
                            "code": 10240805,
                            "name": "镇远县",
                            "parent": 102408
                        },
                        {
                            "code": 10240806,
                            "name": "岑巩县",
                            "parent": 102408
                        },
                        {
                            "code": 10240807,
                            "name": "天柱县",
                            "parent": 102408
                        },
                        {
                            "code": 10240808,
                            "name": "锦屏县",
                            "parent": 102408
                        },
                        {
                            "code": 10240809,
                            "name": "剑河县",
                            "parent": 102408
                        },
                        {
                            "code": 10240810,
                            "name": "台江县",
                            "parent": 102408
                        },
                        {
                            "code": 10240811,
                            "name": "黎平县",
                            "parent": 102408
                        },
                        {
                            "code": 10240812,
                            "name": "榕江县",
                            "parent": 102408
                        },
                        {
                            "code": 10240813,
                            "name": "从江县",
                            "parent": 102408
                        },
                        {
                            "code": 10240814,
                            "name": "雷山县",
                            "parent": 102408
                        },
                        {
                            "code": 10240815,
                            "name": "麻江县",
                            "parent": 102408
                        },
                        {
                            "code": 10240816,
                            "name": "丹寨县",
                            "parent": 102408
                        }
                    ],
                    "code": 102408,
                    "name": "黔东南苗族侗族自治州",
                    "parent": 1024
                },
                {
                    "child": [
                        {
                            "code": 10240901,
                            "name": "都匀市",
                            "parent": 102409
                        },
                        {
                            "code": 10240902,
                            "name": "福泉市",
                            "parent": 102409
                        },
                        {
                            "code": 10240903,
                            "name": "荔波县",
                            "parent": 102409
                        },
                        {
                            "code": 10240904,
                            "name": "贵定县",
                            "parent": 102409
                        },
                        {
                            "code": 10240905,
                            "name": "瓮安县",
                            "parent": 102409
                        },
                        {
                            "code": 10240906,
                            "name": "独山县",
                            "parent": 102409
                        },
                        {
                            "code": 10240907,
                            "name": "平塘县",
                            "parent": 102409
                        },
                        {
                            "code": 10240908,
                            "name": "罗甸县",
                            "parent": 102409
                        },
                        {
                            "code": 10240909,
                            "name": "长顺县",
                            "parent": 102409
                        },
                        {
                            "code": 10240910,
                            "name": "龙里县",
                            "parent": 102409
                        },
                        {
                            "code": 10240911,
                            "name": "惠水县",
                            "parent": 102409
                        },
                        {
                            "code": 10240912,
                            "name": "三都水族自治县",
                            "parent": 102409
                        }
                    ],
                    "code": 102409,
                    "name": "黔南布依族苗族自治州",
                    "parent": 1024
                }
            ],
            "code": 1024,
            "name": "贵州省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10250101,
                            "name": "五华区",
                            "parent": 102501
                        },
                        {
                            "code": 10250102,
                            "name": "盘龙区",
                            "parent": 102501
                        },
                        {
                            "code": 10250103,
                            "name": "官渡区",
                            "parent": 102501
                        },
                        {
                            "code": 10250104,
                            "name": "西山区",
                            "parent": 102501
                        },
                        {
                            "code": 10250105,
                            "name": "东川区",
                            "parent": 102501
                        },
                        {
                            "code": 10250106,
                            "name": "呈贡县",
                            "parent": 102501
                        },
                        {
                            "code": 10250107,
                            "name": "晋宁县",
                            "parent": 102501
                        },
                        {
                            "code": 10250108,
                            "name": "富民县",
                            "parent": 102501
                        },
                        {
                            "code": 10250109,
                            "name": "宜良县",
                            "parent": 102501
                        },
                        {
                            "code": 10250110,
                            "name": "石林彝族自治县",
                            "parent": 102501
                        },
                        {
                            "code": 10250111,
                            "name": "嵩明县",
                            "parent": 102501
                        },
                        {
                            "code": 10250112,
                            "name": "禄劝彝族苗族自治县",
                            "parent": 102501
                        },
                        {
                            "code": 10250113,
                            "name": "寻甸回族彝族自治县",
                            "parent": 102501
                        },
                        {
                            "code": 10250114,
                            "name": "安宁市",
                            "parent": 102501
                        }
                    ],
                    "code": 102501,
                    "name": "昆明市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250201,
                            "name": "麒麟区",
                            "parent": 102502
                        },
                        {
                            "code": 10250202,
                            "name": "马龙县",
                            "parent": 102502
                        },
                        {
                            "code": 10250203,
                            "name": "陆良县",
                            "parent": 102502
                        },
                        {
                            "code": 10250204,
                            "name": "师宗县",
                            "parent": 102502
                        },
                        {
                            "code": 10250205,
                            "name": "罗平县",
                            "parent": 102502
                        },
                        {
                            "code": 10250206,
                            "name": "富源县",
                            "parent": 102502
                        },
                        {
                            "code": 10250207,
                            "name": "会泽县",
                            "parent": 102502
                        },
                        {
                            "code": 10250208,
                            "name": "沾益县",
                            "parent": 102502
                        },
                        {
                            "code": 10250209,
                            "name": "宣威市",
                            "parent": 102502
                        }
                    ],
                    "code": 102502,
                    "name": "曲靖市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250301,
                            "name": "红塔区",
                            "parent": 102503
                        },
                        {
                            "code": 10250302,
                            "name": "江川县",
                            "parent": 102503
                        },
                        {
                            "code": 10250303,
                            "name": "澄江县",
                            "parent": 102503
                        },
                        {
                            "code": 10250304,
                            "name": "通海县",
                            "parent": 102503
                        },
                        {
                            "code": 10250305,
                            "name": "华宁县",
                            "parent": 102503
                        },
                        {
                            "code": 10250306,
                            "name": "易门县",
                            "parent": 102503
                        },
                        {
                            "code": 10250307,
                            "name": "峨山彝族自治县",
                            "parent": 102503
                        },
                        {
                            "code": 10250308,
                            "name": "新平彝族傣族自治县",
                            "parent": 102503
                        },
                        {
                            "code": 10250309,
                            "name": "元江哈尼族彝族傣族自治县",
                            "parent": 102503
                        }
                    ],
                    "code": 102503,
                    "name": "玉溪市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250401,
                            "name": "昭阳区",
                            "parent": 102504
                        },
                        {
                            "code": 10250402,
                            "name": "鲁甸县",
                            "parent": 102504
                        },
                        {
                            "code": 10250403,
                            "name": "巧家县",
                            "parent": 102504
                        },
                        {
                            "code": 10250404,
                            "name": "盐津县",
                            "parent": 102504
                        },
                        {
                            "code": 10250405,
                            "name": "大关县",
                            "parent": 102504
                        },
                        {
                            "code": 10250406,
                            "name": "永善县",
                            "parent": 102504
                        },
                        {
                            "code": 10250407,
                            "name": "绥江县",
                            "parent": 102504
                        },
                        {
                            "code": 10250408,
                            "name": "镇雄县",
                            "parent": 102504
                        },
                        {
                            "code": 10250409,
                            "name": "彝良县",
                            "parent": 102504
                        },
                        {
                            "code": 10250410,
                            "name": "威信县",
                            "parent": 102504
                        },
                        {
                            "code": 10250411,
                            "name": "水富县",
                            "parent": 102504
                        }
                    ],
                    "code": 102504,
                    "name": "昭通市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250501,
                            "name": "楚雄市",
                            "parent": 102505
                        },
                        {
                            "code": 10250502,
                            "name": "双柏县",
                            "parent": 102505
                        },
                        {
                            "code": 10250503,
                            "name": "牟定县",
                            "parent": 102505
                        },
                        {
                            "code": 10250504,
                            "name": "南华县",
                            "parent": 102505
                        },
                        {
                            "code": 10250505,
                            "name": "姚安县",
                            "parent": 102505
                        },
                        {
                            "code": 10250506,
                            "name": "大姚县",
                            "parent": 102505
                        },
                        {
                            "code": 10250507,
                            "name": "永仁县",
                            "parent": 102505
                        },
                        {
                            "code": 10250508,
                            "name": "元谋县",
                            "parent": 102505
                        },
                        {
                            "code": 10250509,
                            "name": "武定县",
                            "parent": 102505
                        },
                        {
                            "code": 10250510,
                            "name": "禄丰县",
                            "parent": 102505
                        }
                    ],
                    "code": 102505,
                    "name": "楚雄彝族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250601,
                            "name": "个旧市",
                            "parent": 102506
                        },
                        {
                            "code": 10250602,
                            "name": "开远市",
                            "parent": 102506
                        },
                        {
                            "code": 10250603,
                            "name": "蒙自县",
                            "parent": 102506
                        },
                        {
                            "code": 10250604,
                            "name": "屏边苗族自治县",
                            "parent": 102506
                        },
                        {
                            "code": 10250605,
                            "name": "建水县",
                            "parent": 102506
                        },
                        {
                            "code": 10250606,
                            "name": "石屏县",
                            "parent": 102506
                        },
                        {
                            "code": 10250607,
                            "name": "弥勒县",
                            "parent": 102506
                        },
                        {
                            "code": 10250608,
                            "name": "泸西县",
                            "parent": 102506
                        },
                        {
                            "code": 10250609,
                            "name": "元阳县",
                            "parent": 102506
                        },
                        {
                            "code": 10250610,
                            "name": "红河县",
                            "parent": 102506
                        },
                        {
                            "code": 10250611,
                            "name": "金平苗族瑶族傣族自治县",
                            "parent": 102506
                        },
                        {
                            "code": 10250612,
                            "name": "绿春县",
                            "parent": 102506
                        },
                        {
                            "code": 10250613,
                            "name": "河口瑶族自治县",
                            "parent": 102506
                        }
                    ],
                    "code": 102506,
                    "name": "红河哈尼族彝族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250701,
                            "name": "文山县",
                            "parent": 102507
                        },
                        {
                            "code": 10250702,
                            "name": "砚山县",
                            "parent": 102507
                        },
                        {
                            "code": 10250703,
                            "name": "西畴县",
                            "parent": 102507
                        },
                        {
                            "code": 10250704,
                            "name": "麻栗坡县",
                            "parent": 102507
                        },
                        {
                            "code": 10250705,
                            "name": "马关县",
                            "parent": 102507
                        },
                        {
                            "code": 10250706,
                            "name": "丘北县",
                            "parent": 102507
                        },
                        {
                            "code": 10250707,
                            "name": "广南县",
                            "parent": 102507
                        },
                        {
                            "code": 10250708,
                            "name": "富宁县",
                            "parent": 102507
                        }
                    ],
                    "code": 102507,
                    "name": "文山壮族苗族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250801,
                            "name": "思茅市",
                            "parent": 102508
                        },
                        {
                            "code": 10250802,
                            "name": "普洱哈尼族彝族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250803,
                            "name": "墨江哈尼族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250804,
                            "name": "景东彝族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250805,
                            "name": "景谷傣族彝族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250806,
                            "name": "镇沅彝族哈尼族拉祜族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250807,
                            "name": "江城哈尼族彝族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250808,
                            "name": "孟连傣族拉祜族佤族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250809,
                            "name": "澜沧拉祜族自治县",
                            "parent": 102508
                        },
                        {
                            "code": 10250810,
                            "name": "西盟佤族自治县",
                            "parent": 102508
                        }
                    ],
                    "code": 102508,
                    "name": "思茅市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10250901,
                            "name": "景洪市",
                            "parent": 102509
                        },
                        {
                            "code": 10250902,
                            "name": "勐海县",
                            "parent": 102509
                        },
                        {
                            "code": 10250903,
                            "name": "勐腊县",
                            "parent": 102509
                        }
                    ],
                    "code": 102509,
                    "name": "西双版纳傣族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251001,
                            "name": "大理市",
                            "parent": 102510
                        },
                        {
                            "code": 10251002,
                            "name": "漾濞彝族自治县",
                            "parent": 102510
                        },
                        {
                            "code": 10251003,
                            "name": "祥云县",
                            "parent": 102510
                        },
                        {
                            "code": 10251004,
                            "name": "宾川县",
                            "parent": 102510
                        },
                        {
                            "code": 10251005,
                            "name": "弥渡县",
                            "parent": 102510
                        },
                        {
                            "code": 10251006,
                            "name": "南涧彝族自治县",
                            "parent": 102510
                        },
                        {
                            "code": 10251007,
                            "name": "巍山彝族回族自治县",
                            "parent": 102510
                        },
                        {
                            "code": 10251008,
                            "name": "永平县",
                            "parent": 102510
                        },
                        {
                            "code": 10251009,
                            "name": "云龙县",
                            "parent": 102510
                        },
                        {
                            "code": 10251010,
                            "name": "洱源县",
                            "parent": 102510
                        },
                        {
                            "code": 10251011,
                            "name": "剑川县",
                            "parent": 102510
                        },
                        {
                            "code": 10251012,
                            "name": "鹤庆县",
                            "parent": 102510
                        }
                    ],
                    "code": 102510,
                    "name": "大理白族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251101,
                            "name": "隆阳区",
                            "parent": 102511
                        },
                        {
                            "code": 10251102,
                            "name": "施甸县",
                            "parent": 102511
                        },
                        {
                            "code": 10251103,
                            "name": "腾冲县",
                            "parent": 102511
                        },
                        {
                            "code": 10251104,
                            "name": "龙陵县",
                            "parent": 102511
                        },
                        {
                            "code": 10251105,
                            "name": "昌宁县",
                            "parent": 102511
                        }
                    ],
                    "code": 102511,
                    "name": "保山市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251201,
                            "name": "畹町市",
                            "parent": 102512
                        },
                        {
                            "code": 10251202,
                            "name": "瑞丽市",
                            "parent": 102512
                        },
                        {
                            "code": 10251203,
                            "name": "潞西市",
                            "parent": 102512
                        },
                        {
                            "code": 10251204,
                            "name": "梁河县",
                            "parent": 102512
                        },
                        {
                            "code": 10251205,
                            "name": "盈江县",
                            "parent": 102512
                        },
                        {
                            "code": 10251206,
                            "name": "陇川县",
                            "parent": 102512
                        }
                    ],
                    "code": 102512,
                    "name": "德宏傣族景颇族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251301,
                            "name": "古城区",
                            "parent": 102513
                        },
                        {
                            "code": 10251302,
                            "name": "永胜县",
                            "parent": 102513
                        },
                        {
                            "code": 10251303,
                            "name": "华坪县",
                            "parent": 102513
                        },
                        {
                            "code": 10251304,
                            "name": "玉龙纳西族自治县",
                            "parent": 102513
                        },
                        {
                            "code": 10251305,
                            "name": "宁蒗彝族自治县",
                            "parent": 102513
                        }
                    ],
                    "code": 102513,
                    "name": "丽江市",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251401,
                            "name": "泸水县",
                            "parent": 102514
                        },
                        {
                            "code": 10251402,
                            "name": "福贡县",
                            "parent": 102514
                        },
                        {
                            "code": 10251403,
                            "name": "贡山独龙族怒族自治县",
                            "parent": 102514
                        },
                        {
                            "code": 10251404,
                            "name": "兰坪白族普米族自治县",
                            "parent": 102514
                        }
                    ],
                    "code": 102514,
                    "name": "怒江傈僳族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251501,
                            "name": "中甸县",
                            "parent": 102515
                        },
                        {
                            "code": 10251502,
                            "name": "德钦县",
                            "parent": 102515
                        },
                        {
                            "code": 10251503,
                            "name": "维西傈僳族自治县",
                            "parent": 102515
                        }
                    ],
                    "code": 102515,
                    "name": "迪庆藏族自治州",
                    "parent": 1025
                },
                {
                    "child": [
                        {
                            "code": 10251601,
                            "name": "临翔区",
                            "parent": 102516
                        },
                        {
                            "code": 10251602,
                            "name": "凤庆县",
                            "parent": 102516
                        },
                        {
                            "code": 10251603,
                            "name": "云县",
                            "parent": 102516
                        },
                        {
                            "code": 10251604,
                            "name": "永德县",
                            "parent": 102516
                        },
                        {
                            "code": 10251605,
                            "name": "镇康县",
                            "parent": 102516
                        },
                        {
                            "code": 10251606,
                            "name": "双江拉祜族佤族布朗族傣族自治县",
                            "parent": 102516
                        },
                        {
                            "code": 10251607,
                            "name": "耿马傣族佤族自治县",
                            "parent": 102516
                        },
                        {
                            "code": 10251608,
                            "name": "沧源佤族自治县",
                            "parent": 102516
                        }
                    ],
                    "code": 102516,
                    "name": "临沧市",
                    "parent": 1025
                }
            ],
            "code": 1025,
            "name": "云南省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10260101,
                            "name": "城关区",
                            "parent": 102601
                        },
                        {
                            "code": 10260102,
                            "name": "林周县",
                            "parent": 102601
                        },
                        {
                            "code": 10260103,
                            "name": "当雄县",
                            "parent": 102601
                        },
                        {
                            "code": 10260104,
                            "name": "尼木县",
                            "parent": 102601
                        },
                        {
                            "code": 10260105,
                            "name": "曲水县",
                            "parent": 102601
                        },
                        {
                            "code": 10260106,
                            "name": "堆龙德庆县",
                            "parent": 102601
                        },
                        {
                            "code": 10260107,
                            "name": "达孜县",
                            "parent": 102601
                        },
                        {
                            "code": 10260108,
                            "name": "墨竹工卡县",
                            "parent": 102601
                        }
                    ],
                    "code": 102601,
                    "name": "拉萨市",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260201,
                            "name": "卡若区",
                            "parent": 102602
                        },
                        {
                            "code": 10260202,
                            "name": "江达县",
                            "parent": 102602
                        },
                        {
                            "code": 10260203,
                            "name": "贡觉县",
                            "parent": 102602
                        },
                        {
                            "code": 10260204,
                            "name": "类乌齐县",
                            "parent": 102602
                        },
                        {
                            "code": 10260205,
                            "name": "丁青县",
                            "parent": 102602
                        },
                        {
                            "code": 10260206,
                            "name": "察雅县",
                            "parent": 102602
                        },
                        {
                            "code": 10260207,
                            "name": "八宿县",
                            "parent": 102602
                        },
                        {
                            "code": 10260208,
                            "name": "左贡县",
                            "parent": 102602
                        },
                        {
                            "code": 10260209,
                            "name": "芒康县",
                            "parent": 102602
                        },
                        {
                            "code": 10260210,
                            "name": "洛隆县",
                            "parent": 102602
                        },
                        {
                            "code": 10260211,
                            "name": "边坝县",
                            "parent": 102602
                        }
                    ],
                    "code": 102602,
                    "name": "昌都市",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260301,
                            "name": "乃东县",
                            "parent": 102603
                        },
                        {
                            "code": 10260302,
                            "name": "扎囊县",
                            "parent": 102603
                        },
                        {
                            "code": 10260303,
                            "name": "贡嘎县",
                            "parent": 102603
                        },
                        {
                            "code": 10260304,
                            "name": "桑日县",
                            "parent": 102603
                        },
                        {
                            "code": 10260305,
                            "name": "琼结县",
                            "parent": 102603
                        },
                        {
                            "code": 10260306,
                            "name": "曲松县",
                            "parent": 102603
                        },
                        {
                            "code": 10260307,
                            "name": "措美县",
                            "parent": 102603
                        },
                        {
                            "code": 10260308,
                            "name": "洛扎县",
                            "parent": 102603
                        },
                        {
                            "code": 10260309,
                            "name": "加查县",
                            "parent": 102603
                        },
                        {
                            "code": 10260310,
                            "name": "隆子县",
                            "parent": 102603
                        },
                        {
                            "code": 10260311,
                            "name": "错那县",
                            "parent": 102603
                        },
                        {
                            "code": 10260312,
                            "name": "浪卡子县",
                            "parent": 102603
                        }
                    ],
                    "code": 102603,
                    "name": "山南地区",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260401,
                            "name": "桑珠孜区",
                            "parent": 102604
                        },
                        {
                            "code": 10260402,
                            "name": "南木林县",
                            "parent": 102604
                        },
                        {
                            "code": 10260403,
                            "name": "江孜县",
                            "parent": 102604
                        },
                        {
                            "code": 10260404,
                            "name": "定日县",
                            "parent": 102604
                        },
                        {
                            "code": 10260405,
                            "name": "萨迦县",
                            "parent": 102604
                        },
                        {
                            "code": 10260406,
                            "name": "拉孜县",
                            "parent": 102604
                        },
                        {
                            "code": 10260407,
                            "name": "昂仁县",
                            "parent": 102604
                        },
                        {
                            "code": 10260408,
                            "name": "谢通门县",
                            "parent": 102604
                        },
                        {
                            "code": 10260409,
                            "name": "白朗县",
                            "parent": 102604
                        },
                        {
                            "code": 10260410,
                            "name": "仁布县",
                            "parent": 102604
                        },
                        {
                            "code": 10260411,
                            "name": "康马县",
                            "parent": 102604
                        },
                        {
                            "code": 10260412,
                            "name": "定结县",
                            "parent": 102604
                        },
                        {
                            "code": 10260413,
                            "name": "仲巴县",
                            "parent": 102604
                        },
                        {
                            "code": 10260414,
                            "name": "亚东县",
                            "parent": 102604
                        },
                        {
                            "code": 10260415,
                            "name": "吉隆县",
                            "parent": 102604
                        },
                        {
                            "code": 10260416,
                            "name": "聂拉木县",
                            "parent": 102604
                        },
                        {
                            "code": 10260417,
                            "name": "萨嘎县",
                            "parent": 102604
                        },
                        {
                            "code": 10260418,
                            "name": "岗巴县",
                            "parent": 102604
                        }
                    ],
                    "code": 102604,
                    "name": "日喀则市",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260501,
                            "name": "那曲县",
                            "parent": 102605
                        },
                        {
                            "code": 10260502,
                            "name": "嘉黎县",
                            "parent": 102605
                        },
                        {
                            "code": 10260503,
                            "name": "比如县",
                            "parent": 102605
                        },
                        {
                            "code": 10260504,
                            "name": "聂荣县",
                            "parent": 102605
                        },
                        {
                            "code": 10260505,
                            "name": "安多县",
                            "parent": 102605
                        },
                        {
                            "code": 10260506,
                            "name": "申扎县",
                            "parent": 102605
                        },
                        {
                            "code": 10260507,
                            "name": "索县",
                            "parent": 102605
                        },
                        {
                            "code": 10260508,
                            "name": "班戈县",
                            "parent": 102605
                        },
                        {
                            "code": 10260509,
                            "name": "巴青县",
                            "parent": 102605
                        },
                        {
                            "code": 10260510,
                            "name": "尼玛县",
                            "parent": 102605
                        }
                    ],
                    "code": 102605,
                    "name": "那曲地区",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260601,
                            "name": "普兰县",
                            "parent": 102606
                        },
                        {
                            "code": 10260602,
                            "name": "札达县",
                            "parent": 102606
                        },
                        {
                            "code": 10260603,
                            "name": "噶尔县",
                            "parent": 102606
                        },
                        {
                            "code": 10260604,
                            "name": "日土县",
                            "parent": 102606
                        },
                        {
                            "code": 10260605,
                            "name": "革吉县",
                            "parent": 102606
                        },
                        {
                            "code": 10260606,
                            "name": "改则县",
                            "parent": 102606
                        },
                        {
                            "code": 10260607,
                            "name": "措勤县",
                            "parent": 102606
                        }
                    ],
                    "code": 102606,
                    "name": "阿里地区",
                    "parent": 1026
                },
                {
                    "child": [
                        {
                            "code": 10260701,
                            "name": "林芝县",
                            "parent": 102607
                        },
                        {
                            "code": 10260702,
                            "name": "工布江达县",
                            "parent": 102607
                        },
                        {
                            "code": 10260703,
                            "name": "米林县",
                            "parent": 102607
                        },
                        {
                            "code": 10260704,
                            "name": "墨脱县",
                            "parent": 102607
                        },
                        {
                            "code": 10260705,
                            "name": "波密县",
                            "parent": 102607
                        },
                        {
                            "code": 10260706,
                            "name": "察隅县",
                            "parent": 102607
                        },
                        {
                            "code": 10260707,
                            "name": "朗县",
                            "parent": 102607
                        }
                    ],
                    "code": 102607,
                    "name": "林芝地区",
                    "parent": 1026
                }
            ],
            "code": 1026,
            "name": "西藏省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10270101,
                            "name": "新城区",
                            "parent": 102701
                        },
                        {
                            "code": 10270102,
                            "name": "碑林区",
                            "parent": 102701
                        },
                        {
                            "code": 10270103,
                            "name": "莲湖区",
                            "parent": 102701
                        },
                        {
                            "code": 10270104,
                            "name": "灞桥区",
                            "parent": 102701
                        },
                        {
                            "code": 10270105,
                            "name": "未央区",
                            "parent": 102701
                        },
                        {
                            "code": 10270106,
                            "name": "雁塔区",
                            "parent": 102701
                        },
                        {
                            "code": 10270107,
                            "name": "阎良区",
                            "parent": 102701
                        },
                        {
                            "code": 10270108,
                            "name": "临潼区",
                            "parent": 102701
                        },
                        {
                            "code": 10270109,
                            "name": "长安县",
                            "parent": 102701
                        },
                        {
                            "code": 10270110,
                            "name": "蓝田县",
                            "parent": 102701
                        },
                        {
                            "code": 10270111,
                            "name": "周至县",
                            "parent": 102701
                        },
                        {
                            "code": 10270112,
                            "name": "户县",
                            "parent": 102701
                        },
                        {
                            "code": 10270113,
                            "name": "高陵县",
                            "parent": 102701
                        }
                    ],
                    "code": 102701,
                    "name": "西安市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270201,
                            "name": "城区",
                            "parent": 102702
                        },
                        {
                            "code": 10270202,
                            "name": "郊区",
                            "parent": 102702
                        },
                        {
                            "code": 10270203,
                            "name": "耀县",
                            "parent": 102702
                        },
                        {
                            "code": 10270204,
                            "name": "宜君县",
                            "parent": 102702
                        }
                    ],
                    "code": 102702,
                    "name": "铜川市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270301,
                            "name": "渭滨区",
                            "parent": 102703
                        },
                        {
                            "code": 10270302,
                            "name": "金台区",
                            "parent": 102703
                        },
                        {
                            "code": 10270303,
                            "name": "宝鸡县",
                            "parent": 102703
                        },
                        {
                            "code": 10270304,
                            "name": "凤翔县",
                            "parent": 102703
                        },
                        {
                            "code": 10270305,
                            "name": "岐山县",
                            "parent": 102703
                        },
                        {
                            "code": 10270306,
                            "name": "扶风县",
                            "parent": 102703
                        },
                        {
                            "code": 10270307,
                            "name": "眉县",
                            "parent": 102703
                        },
                        {
                            "code": 10270308,
                            "name": "陇县",
                            "parent": 102703
                        },
                        {
                            "code": 10270309,
                            "name": "千阳县",
                            "parent": 102703
                        },
                        {
                            "code": 10270310,
                            "name": "麟游县",
                            "parent": 102703
                        },
                        {
                            "code": 10270311,
                            "name": "凤县",
                            "parent": 102703
                        },
                        {
                            "code": 10270312,
                            "name": "太白县",
                            "parent": 102703
                        }
                    ],
                    "code": 102703,
                    "name": "宝鸡市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270401,
                            "name": "秦都区",
                            "parent": 102704
                        },
                        {
                            "code": 10270402,
                            "name": "杨陵区",
                            "parent": 102704
                        },
                        {
                            "code": 10270403,
                            "name": "渭城区",
                            "parent": 102704
                        },
                        {
                            "code": 10270404,
                            "name": "三原县",
                            "parent": 102704
                        },
                        {
                            "code": 10270405,
                            "name": "泾阳县",
                            "parent": 102704
                        },
                        {
                            "code": 10270406,
                            "name": "乾县",
                            "parent": 102704
                        },
                        {
                            "code": 10270407,
                            "name": "礼泉县",
                            "parent": 102704
                        },
                        {
                            "code": 10270408,
                            "name": "永寿县",
                            "parent": 102704
                        },
                        {
                            "code": 10270409,
                            "name": "彬县",
                            "parent": 102704
                        },
                        {
                            "code": 10270410,
                            "name": "长武县",
                            "parent": 102704
                        },
                        {
                            "code": 10270411,
                            "name": "旬邑县",
                            "parent": 102704
                        },
                        {
                            "code": 10270412,
                            "name": "淳化县",
                            "parent": 102704
                        },
                        {
                            "code": 10270413,
                            "name": "武功县",
                            "parent": 102704
                        },
                        {
                            "code": 10270414,
                            "name": "兴平市",
                            "parent": 102704
                        }
                    ],
                    "code": 102704,
                    "name": "咸阳市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270501,
                            "name": "临渭区",
                            "parent": 102705
                        },
                        {
                            "code": 10270502,
                            "name": "华县",
                            "parent": 102705
                        },
                        {
                            "code": 10270503,
                            "name": "潼关县",
                            "parent": 102705
                        },
                        {
                            "code": 10270504,
                            "name": "大荔县",
                            "parent": 102705
                        },
                        {
                            "code": 10270505,
                            "name": "合阳县",
                            "parent": 102705
                        },
                        {
                            "code": 10270506,
                            "name": "澄城县",
                            "parent": 102705
                        },
                        {
                            "code": 10270507,
                            "name": "蒲城县",
                            "parent": 102705
                        },
                        {
                            "code": 10270508,
                            "name": "白水县",
                            "parent": 102705
                        },
                        {
                            "code": 10270509,
                            "name": "富平县",
                            "parent": 102705
                        },
                        {
                            "code": 10270510,
                            "name": "韩城市",
                            "parent": 102705
                        },
                        {
                            "code": 10270511,
                            "name": "华阴市",
                            "parent": 102705
                        }
                    ],
                    "code": 102705,
                    "name": "渭南市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270601,
                            "name": "宝塔区",
                            "parent": 102706
                        },
                        {
                            "code": 10270602,
                            "name": "延长县",
                            "parent": 102706
                        },
                        {
                            "code": 10270603,
                            "name": "延川县",
                            "parent": 102706
                        },
                        {
                            "code": 10270604,
                            "name": "子长县",
                            "parent": 102706
                        },
                        {
                            "code": 10270605,
                            "name": "安塞县",
                            "parent": 102706
                        },
                        {
                            "code": 10270606,
                            "name": "志丹县",
                            "parent": 102706
                        },
                        {
                            "code": 10270607,
                            "name": "吴旗县",
                            "parent": 102706
                        },
                        {
                            "code": 10270608,
                            "name": "甘泉县",
                            "parent": 102706
                        },
                        {
                            "code": 10270609,
                            "name": "富县",
                            "parent": 102706
                        },
                        {
                            "code": 10270610,
                            "name": "洛川县",
                            "parent": 102706
                        },
                        {
                            "code": 10270611,
                            "name": "宜川县",
                            "parent": 102706
                        },
                        {
                            "code": 10270612,
                            "name": "黄龙县",
                            "parent": 102706
                        },
                        {
                            "code": 10270613,
                            "name": "黄陵县",
                            "parent": 102706
                        }
                    ],
                    "code": 102706,
                    "name": "延安市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270701,
                            "name": "汉台区",
                            "parent": 102707
                        },
                        {
                            "code": 10270702,
                            "name": "南郑县",
                            "parent": 102707
                        },
                        {
                            "code": 10270703,
                            "name": "城固县",
                            "parent": 102707
                        },
                        {
                            "code": 10270704,
                            "name": "洋县",
                            "parent": 102707
                        },
                        {
                            "code": 10270705,
                            "name": "西乡县",
                            "parent": 102707
                        },
                        {
                            "code": 10270706,
                            "name": "勉县",
                            "parent": 102707
                        },
                        {
                            "code": 10270707,
                            "name": "宁强县",
                            "parent": 102707
                        },
                        {
                            "code": 10270708,
                            "name": "略阳县",
                            "parent": 102707
                        },
                        {
                            "code": 10270709,
                            "name": "镇巴县",
                            "parent": 102707
                        },
                        {
                            "code": 10270710,
                            "name": "留坝县",
                            "parent": 102707
                        },
                        {
                            "code": 10270711,
                            "name": "佛坪县",
                            "parent": 102707
                        }
                    ],
                    "code": 102707,
                    "name": "汉中市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270801,
                            "name": "汉滨区",
                            "parent": 102708
                        },
                        {
                            "code": 10270802,
                            "name": "汉阴县",
                            "parent": 102708
                        },
                        {
                            "code": 10270803,
                            "name": "石泉县",
                            "parent": 102708
                        },
                        {
                            "code": 10270804,
                            "name": "宁陕县",
                            "parent": 102708
                        },
                        {
                            "code": 10270805,
                            "name": "紫阳县",
                            "parent": 102708
                        },
                        {
                            "code": 10270806,
                            "name": "岚皋县",
                            "parent": 102708
                        },
                        {
                            "code": 10270807,
                            "name": "平利县",
                            "parent": 102708
                        },
                        {
                            "code": 10270808,
                            "name": "镇坪县",
                            "parent": 102708
                        },
                        {
                            "code": 10270809,
                            "name": "旬阳县",
                            "parent": 102708
                        },
                        {
                            "code": 10270810,
                            "name": "白河县",
                            "parent": 102708
                        }
                    ],
                    "code": 102708,
                    "name": "安康市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10270901,
                            "name": "商州区",
                            "parent": 102709
                        },
                        {
                            "code": 10270902,
                            "name": "洛南县",
                            "parent": 102709
                        },
                        {
                            "code": 10270903,
                            "name": "丹凤县",
                            "parent": 102709
                        },
                        {
                            "code": 10270904,
                            "name": "商南县",
                            "parent": 102709
                        },
                        {
                            "code": 10270905,
                            "name": "山阳县",
                            "parent": 102709
                        },
                        {
                            "code": 10270906,
                            "name": "镇安县",
                            "parent": 102709
                        },
                        {
                            "code": 10270907,
                            "name": "柞水县",
                            "parent": 102709
                        }
                    ],
                    "code": 102709,
                    "name": "商洛市",
                    "parent": 1027
                },
                {
                    "child": [
                        {
                            "code": 10271001,
                            "name": "榆阳区",
                            "parent": 102710
                        },
                        {
                            "code": 10271002,
                            "name": "神木县",
                            "parent": 102710
                        },
                        {
                            "code": 10271003,
                            "name": "府谷县",
                            "parent": 102710
                        },
                        {
                            "code": 10271004,
                            "name": "横山县",
                            "parent": 102710
                        },
                        {
                            "code": 10271005,
                            "name": "靖边县",
                            "parent": 102710
                        },
                        {
                            "code": 10271006,
                            "name": "定边县",
                            "parent": 102710
                        },
                        {
                            "code": 10271007,
                            "name": "绥德县",
                            "parent": 102710
                        },
                        {
                            "code": 10271008,
                            "name": "米脂县",
                            "parent": 102710
                        },
                        {
                            "code": 10271009,
                            "name": "佳县",
                            "parent": 102710
                        },
                        {
                            "code": 10271010,
                            "name": "吴堡县",
                            "parent": 102710
                        },
                        {
                            "code": 10271011,
                            "name": "清涧县",
                            "parent": 102710
                        },
                        {
                            "code": 10271012,
                            "name": "子洲县",
                            "parent": 102710
                        }
                    ],
                    "code": 102710,
                    "name": "榆林市",
                    "parent": 1027
                }
            ],
            "code": 1027,
            "name": "陕西省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10280101,
                            "name": "城关区",
                            "parent": 102801
                        },
                        {
                            "code": 10280102,
                            "name": "七里河区",
                            "parent": 102801
                        },
                        {
                            "code": 10280103,
                            "name": "西固区",
                            "parent": 102801
                        },
                        {
                            "code": 10280104,
                            "name": "安宁区",
                            "parent": 102801
                        },
                        {
                            "code": 10280105,
                            "name": "红古区",
                            "parent": 102801
                        },
                        {
                            "code": 10280106,
                            "name": "永登县",
                            "parent": 102801
                        },
                        {
                            "code": 10280107,
                            "name": "皋兰县",
                            "parent": 102801
                        },
                        {
                            "code": 10280108,
                            "name": "榆中县",
                            "parent": 102801
                        }
                    ],
                    "code": 102801,
                    "name": "兰州市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280201,
                            "name": "市辖区",
                            "parent": 102802
                        }
                    ],
                    "code": 102802,
                    "name": "嘉峪关市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280301,
                            "name": "金川区",
                            "parent": 102803
                        },
                        {
                            "code": 10280302,
                            "name": "永昌县",
                            "parent": 102803
                        }
                    ],
                    "code": 102803,
                    "name": "金昌市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280401,
                            "name": "白银区",
                            "parent": 102804
                        },
                        {
                            "code": 10280402,
                            "name": "平川区",
                            "parent": 102804
                        },
                        {
                            "code": 10280403,
                            "name": "靖远县",
                            "parent": 102804
                        },
                        {
                            "code": 10280404,
                            "name": "会宁县",
                            "parent": 102804
                        },
                        {
                            "code": 10280405,
                            "name": "景泰县",
                            "parent": 102804
                        }
                    ],
                    "code": 102804,
                    "name": "白银市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280501,
                            "name": "秦城区",
                            "parent": 102805
                        },
                        {
                            "code": 10280502,
                            "name": "北道区",
                            "parent": 102805
                        },
                        {
                            "code": 10280503,
                            "name": "清水县",
                            "parent": 102805
                        },
                        {
                            "code": 10280504,
                            "name": "秦安县",
                            "parent": 102805
                        },
                        {
                            "code": 10280505,
                            "name": "甘谷县",
                            "parent": 102805
                        },
                        {
                            "code": 10280506,
                            "name": "武山县",
                            "parent": 102805
                        },
                        {
                            "code": 10280507,
                            "name": "张家川回族自治县",
                            "parent": 102805
                        }
                    ],
                    "code": 102805,
                    "name": "天水市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280601,
                            "name": "玉门市",
                            "parent": 102806
                        },
                        {
                            "code": 10280602,
                            "name": "肃州区",
                            "parent": 102806
                        },
                        {
                            "code": 10280603,
                            "name": "敦煌市",
                            "parent": 102806
                        },
                        {
                            "code": 10280604,
                            "name": "金塔县",
                            "parent": 102806
                        },
                        {
                            "code": 10280605,
                            "name": "肃北蒙古族自治县",
                            "parent": 102806
                        },
                        {
                            "code": 10280606,
                            "name": "阿克塞哈萨克族自治县",
                            "parent": 102806
                        },
                        {
                            "code": 10280607,
                            "name": "瓜州县",
                            "parent": 102806
                        }
                    ],
                    "code": 102806,
                    "name": "酒泉市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280701,
                            "name": "甘州区",
                            "parent": 102807
                        },
                        {
                            "code": 10280702,
                            "name": "肃南裕固族自治县",
                            "parent": 102807
                        },
                        {
                            "code": 10280703,
                            "name": "民乐县",
                            "parent": 102807
                        },
                        {
                            "code": 10280704,
                            "name": "临泽县",
                            "parent": 102807
                        },
                        {
                            "code": 10280705,
                            "name": "高台县",
                            "parent": 102807
                        },
                        {
                            "code": 10280706,
                            "name": "山丹县",
                            "parent": 102807
                        }
                    ],
                    "code": 102807,
                    "name": "张掖市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280801,
                            "name": "凉州区",
                            "parent": 102808
                        },
                        {
                            "code": 10280802,
                            "name": "民勤县",
                            "parent": 102808
                        },
                        {
                            "code": 10280803,
                            "name": "古浪县",
                            "parent": 102808
                        },
                        {
                            "code": 10280804,
                            "name": "天祝藏族自治县",
                            "parent": 102808
                        }
                    ],
                    "code": 102808,
                    "name": "武威市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10280901,
                            "name": "安定区",
                            "parent": 102809
                        },
                        {
                            "code": 10280902,
                            "name": "通渭县",
                            "parent": 102809
                        },
                        {
                            "code": 10280903,
                            "name": "陇西县",
                            "parent": 102809
                        },
                        {
                            "code": 10280904,
                            "name": "渭源县",
                            "parent": 102809
                        },
                        {
                            "code": 10280905,
                            "name": "临洮县",
                            "parent": 102809
                        },
                        {
                            "code": 10280906,
                            "name": "漳县",
                            "parent": 102809
                        },
                        {
                            "code": 10280907,
                            "name": "岷县",
                            "parent": 102809
                        }
                    ],
                    "code": 102809,
                    "name": "定西市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10281001,
                            "name": "武都区",
                            "parent": 102810
                        },
                        {
                            "code": 10281002,
                            "name": "宕昌县",
                            "parent": 102810
                        },
                        {
                            "code": 10281003,
                            "name": "成县",
                            "parent": 102810
                        },
                        {
                            "code": 10281004,
                            "name": "康县",
                            "parent": 102810
                        },
                        {
                            "code": 10281005,
                            "name": "文县",
                            "parent": 102810
                        },
                        {
                            "code": 10281006,
                            "name": "西和县",
                            "parent": 102810
                        },
                        {
                            "code": 10281007,
                            "name": "礼县",
                            "parent": 102810
                        },
                        {
                            "code": 10281008,
                            "name": "两当县",
                            "parent": 102810
                        },
                        {
                            "code": 10281009,
                            "name": "徽县",
                            "parent": 102810
                        }
                    ],
                    "code": 102810,
                    "name": "陇南市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10281101,
                            "name": "崆峒区",
                            "parent": 102811
                        },
                        {
                            "code": 10281102,
                            "name": "泾川县",
                            "parent": 102811
                        },
                        {
                            "code": 10281103,
                            "name": "灵台县",
                            "parent": 102811
                        },
                        {
                            "code": 10281104,
                            "name": "崇信县",
                            "parent": 102811
                        },
                        {
                            "code": 10281105,
                            "name": "华亭县",
                            "parent": 102811
                        },
                        {
                            "code": 10281106,
                            "name": "庄浪县",
                            "parent": 102811
                        },
                        {
                            "code": 10281107,
                            "name": "静宁县",
                            "parent": 102811
                        }
                    ],
                    "code": 102811,
                    "name": "平凉市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10281201,
                            "name": "西峰区",
                            "parent": 102812
                        },
                        {
                            "code": 10281202,
                            "name": "庆城县",
                            "parent": 102812
                        },
                        {
                            "code": 10281203,
                            "name": "环县",
                            "parent": 102812
                        },
                        {
                            "code": 10281204,
                            "name": "华池县",
                            "parent": 102812
                        },
                        {
                            "code": 10281205,
                            "name": "合水县",
                            "parent": 102812
                        },
                        {
                            "code": 10281206,
                            "name": "正宁县",
                            "parent": 102812
                        },
                        {
                            "code": 10281207,
                            "name": "宁县",
                            "parent": 102812
                        },
                        {
                            "code": 10281208,
                            "name": "镇原县",
                            "parent": 102812
                        }
                    ],
                    "code": 102812,
                    "name": "庆阳市",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10281301,
                            "name": "临夏市",
                            "parent": 102813
                        },
                        {
                            "code": 10281302,
                            "name": "临夏县",
                            "parent": 102813
                        },
                        {
                            "code": 10281303,
                            "name": "康乐县",
                            "parent": 102813
                        },
                        {
                            "code": 10281304,
                            "name": "永靖县",
                            "parent": 102813
                        },
                        {
                            "code": 10281305,
                            "name": "广河县",
                            "parent": 102813
                        },
                        {
                            "code": 10281306,
                            "name": "和政县",
                            "parent": 102813
                        },
                        {
                            "code": 10281307,
                            "name": "东乡族自治县",
                            "parent": 102813
                        },
                        {
                            "code": 10281308,
                            "name": "积石山保安族东乡族撒拉族自治县",
                            "parent": 102813
                        }
                    ],
                    "code": 102813,
                    "name": "临夏回族自治州",
                    "parent": 1028
                },
                {
                    "child": [
                        {
                            "code": 10281401,
                            "name": "合作市",
                            "parent": 102814
                        },
                        {
                            "code": 10281402,
                            "name": "临潭县",
                            "parent": 102814
                        },
                        {
                            "code": 10281403,
                            "name": "卓尼县",
                            "parent": 102814
                        },
                        {
                            "code": 10281404,
                            "name": "舟曲县",
                            "parent": 102814
                        },
                        {
                            "code": 10281405,
                            "name": "迭部县",
                            "parent": 102814
                        },
                        {
                            "code": 10281406,
                            "name": "玛曲县",
                            "parent": 102814
                        },
                        {
                            "code": 10281407,
                            "name": "碌曲县",
                            "parent": 102814
                        },
                        {
                            "code": 10281408,
                            "name": "夏河县",
                            "parent": 102814
                        }
                    ],
                    "code": 102814,
                    "name": "甘南藏族自治州",
                    "parent": 1028
                }
            ],
            "code": 1028,
            "name": "甘肃省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10290101,
                            "name": "城东区",
                            "parent": 102901
                        },
                        {
                            "code": 10290102,
                            "name": "城中区",
                            "parent": 102901
                        },
                        {
                            "code": 10290103,
                            "name": "城西区",
                            "parent": 102901
                        },
                        {
                            "code": 10290104,
                            "name": "城北区",
                            "parent": 102901
                        },
                        {
                            "code": 10290105,
                            "name": "大通回族土族自治县",
                            "parent": 102901
                        }
                    ],
                    "code": 102901,
                    "name": "西宁市",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290201,
                            "name": "平安区",
                            "parent": 102902
                        },
                        {
                            "code": 10290202,
                            "name": "民和回族土族自治县",
                            "parent": 102902
                        },
                        {
                            "code": 10290203,
                            "name": "乐都区",
                            "parent": 102902
                        },
                        {
                            "code": 10290204,
                            "name": "互助土族自治县",
                            "parent": 102902
                        },
                        {
                            "code": 10290205,
                            "name": "化隆回族自治县",
                            "parent": 102902
                        },
                        {
                            "code": 10290206,
                            "name": "循化撒拉族自治县",
                            "parent": 102902
                        }
                    ],
                    "code": 102902,
                    "name": "海东市",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290301,
                            "name": "门源回族自治县",
                            "parent": 102903
                        },
                        {
                            "code": 10290302,
                            "name": "祁连县",
                            "parent": 102903
                        },
                        {
                            "code": 10290303,
                            "name": "海晏县",
                            "parent": 102903
                        },
                        {
                            "code": 10290304,
                            "name": "刚察县",
                            "parent": 102903
                        }
                    ],
                    "code": 102903,
                    "name": "海北藏族自治州",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290401,
                            "name": "同仁县",
                            "parent": 102904
                        },
                        {
                            "code": 10290402,
                            "name": "尖扎县",
                            "parent": 102904
                        },
                        {
                            "code": 10290403,
                            "name": "泽库县",
                            "parent": 102904
                        },
                        {
                            "code": 10290404,
                            "name": "河南蒙古族自治县",
                            "parent": 102904
                        }
                    ],
                    "code": 102904,
                    "name": "黄南藏族自治州",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290501,
                            "name": "共和县",
                            "parent": 102905
                        },
                        {
                            "code": 10290502,
                            "name": "同德县",
                            "parent": 102905
                        },
                        {
                            "code": 10290503,
                            "name": "贵德县",
                            "parent": 102905
                        },
                        {
                            "code": 10290504,
                            "name": "兴海县",
                            "parent": 102905
                        },
                        {
                            "code": 10290505,
                            "name": "贵南县",
                            "parent": 102905
                        }
                    ],
                    "code": 102905,
                    "name": "海南藏族自治州",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290601,
                            "name": "玛沁县",
                            "parent": 102906
                        },
                        {
                            "code": 10290602,
                            "name": "班玛县",
                            "parent": 102906
                        },
                        {
                            "code": 10290603,
                            "name": "甘德县",
                            "parent": 102906
                        },
                        {
                            "code": 10290604,
                            "name": "达日县",
                            "parent": 102906
                        },
                        {
                            "code": 10290605,
                            "name": "久治县",
                            "parent": 102906
                        },
                        {
                            "code": 10290606,
                            "name": "玛多县",
                            "parent": 102906
                        }
                    ],
                    "code": 102906,
                    "name": "果洛藏族自治州",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290701,
                            "name": "玉树县",
                            "parent": 102907
                        },
                        {
                            "code": 10290702,
                            "name": "杂多县",
                            "parent": 102907
                        },
                        {
                            "code": 10290703,
                            "name": "称多县",
                            "parent": 102907
                        },
                        {
                            "code": 10290704,
                            "name": "治多县",
                            "parent": 102907
                        },
                        {
                            "code": 10290705,
                            "name": "囊谦县",
                            "parent": 102907
                        },
                        {
                            "code": 10290706,
                            "name": "曲麻莱县",
                            "parent": 102907
                        }
                    ],
                    "code": 102907,
                    "name": "玉树藏族自治州",
                    "parent": 1029
                },
                {
                    "child": [
                        {
                            "code": 10290801,
                            "name": "格尔木市",
                            "parent": 102908
                        },
                        {
                            "code": 10290802,
                            "name": "德令哈市",
                            "parent": 102908
                        },
                        {
                            "code": 10290803,
                            "name": "乌兰县",
                            "parent": 102908
                        },
                        {
                            "code": 10290804,
                            "name": "都兰县",
                            "parent": 102908
                        },
                        {
                            "code": 10290805,
                            "name": "天峻县",
                            "parent": 102908
                        }
                    ],
                    "code": 102908,
                    "name": "海西蒙古族藏族自治州",
                    "parent": 1029
                }
            ],
            "code": 1029,
            "name": "青海省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10300101,
                            "name": "兴庆区",
                            "parent": 103001
                        },
                        {
                            "code": 10300102,
                            "name": "西夏区",
                            "parent": 103001
                        },
                        {
                            "code": 10300103,
                            "name": "金凤区",
                            "parent": 103001
                        },
                        {
                            "code": 10300104,
                            "name": "永宁县",
                            "parent": 103001
                        },
                        {
                            "code": 10300105,
                            "name": "贺兰县",
                            "parent": 103001
                        },
                        {
                            "code": 10300106,
                            "name": " 灵武市",
                            "parent": 103001
                        }
                    ],
                    "code": 103001,
                    "name": "银川市",
                    "parent": 1030
                },
                {
                    "child": [
                        {
                            "code": 10300201,
                            "name": "大武口区",
                            "parent": 103002
                        },
                        {
                            "code": 10300202,
                            "name": "惠农区",
                            "parent": 103002
                        },
                        {
                            "code": 10300203,
                            "name": "平罗县",
                            "parent": 103002
                        }
                    ],
                    "code": 103002,
                    "name": "石嘴山市",
                    "parent": 1030
                },
                {
                    "child": [
                        {
                            "code": 10300301,
                            "name": "利通区",
                            "parent": 103003
                        },
                        {
                            "code": 10300302,
                            "name": "　红寺堡区",
                            "parent": 103003
                        },
                        {
                            "code": 10300303,
                            "name": "盐池县",
                            "parent": 103003
                        },
                        {
                            "code": 10300304,
                            "name": "同心县",
                            "parent": 103003
                        },
                        {
                            "code": 10300305,
                            "name": "青铜峡市",
                            "parent": 103003
                        }
                    ],
                    "code": 103003,
                    "name": "吴忠市",
                    "parent": 1030
                },
                {
                    "child": [
                        {
                            "code": 10300401,
                            "name": "原州区",
                            "parent": 103004
                        },
                        {
                            "code": 10300402,
                            "name": "西吉县",
                            "parent": 103004
                        },
                        {
                            "code": 10300403,
                            "name": "隆德县",
                            "parent": 103004
                        },
                        {
                            "code": 10300404,
                            "name": "泾源县",
                            "parent": 103004
                        },
                        {
                            "code": 10300405,
                            "name": "彭阳县",
                            "parent": 103004
                        }
                    ],
                    "code": 103004,
                    "name": "固原市",
                    "parent": 1030
                },
                {
                    "child": [
                        {
                            "code": 10300501,
                            "name": "沙坡头区",
                            "parent": 103005
                        },
                        {
                            "code": 10300502,
                            "name": " 中宁县",
                            "parent": 103005
                        },
                        {
                            "code": 10300503,
                            "name": "海原县",
                            "parent": 103005
                        }
                    ],
                    "code": 103005,
                    "name": "中卫市",
                    "parent": 1030
                }
            ],
            "code": 1030,
            "name": "宁夏省",
            "parent": 10
        },
        {
            "child": [
                {
                    "child": [
                        {
                            "code": 10310101,
                            "name": "天山区",
                            "parent": 103101
                        },
                        {
                            "code": 10310102,
                            "name": "沙依巴克区",
                            "parent": 103101
                        },
                        {
                            "code": 10310103,
                            "name": "新市区",
                            "parent": 103101
                        },
                        {
                            "code": 10310104,
                            "name": "水磨沟区",
                            "parent": 103101
                        },
                        {
                            "code": 10310105,
                            "name": "头屯河区",
                            "parent": 103101
                        },
                        {
                            "code": 10310106,
                            "name": "南山矿区",
                            "parent": 103101
                        },
                        {
                            "code": 10310107,
                            "name": "东山区",
                            "parent": 103101
                        },
                        {
                            "code": 10310108,
                            "name": "乌鲁木齐县",
                            "parent": 103101
                        }
                    ],
                    "code": 103101,
                    "name": "乌鲁木齐市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310201,
                            "name": "独山子区",
                            "parent": 103102
                        },
                        {
                            "code": 10310202,
                            "name": "克拉玛依区",
                            "parent": 103102
                        },
                        {
                            "code": 10310203,
                            "name": "白碱滩区",
                            "parent": 103102
                        },
                        {
                            "code": 10310204,
                            "name": "乌尔禾区",
                            "parent": 103102
                        }
                    ],
                    "code": 103102,
                    "name": "克拉玛依市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310301,
                            "name": "高昌区",
                            "parent": 103103
                        },
                        {
                            "code": 10310302,
                            "name": "鄯善县",
                            "parent": 103103
                        },
                        {
                            "code": 10310303,
                            "name": "托克逊县",
                            "parent": 103103
                        }
                    ],
                    "code": 103103,
                    "name": "吐鲁番市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310401,
                            "name": "哈密市",
                            "parent": 103104
                        },
                        {
                            "code": 10310402,
                            "name": "巴里坤哈萨克自治县",
                            "parent": 103104
                        },
                        {
                            "code": 10310403,
                            "name": "伊吾县",
                            "parent": 103104
                        }
                    ],
                    "code": 103104,
                    "name": "哈密地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310501,
                            "name": "昌吉市",
                            "parent": 103105
                        },
                        {
                            "code": 10310502,
                            "name": "阜康市",
                            "parent": 103105
                        },
                        {
                            "code": 10310503,
                            "name": "呼图壁县",
                            "parent": 103105
                        },
                        {
                            "code": 10310504,
                            "name": "玛纳斯县",
                            "parent": 103105
                        },
                        {
                            "code": 10310505,
                            "name": "奇台县",
                            "parent": 103105
                        },
                        {
                            "code": 10310506,
                            "name": "吉木萨尔县",
                            "parent": 103105
                        },
                        {
                            "code": 10310507,
                            "name": "木垒哈萨克自治县",
                            "parent": 103105
                        }
                    ],
                    "code": 103105,
                    "name": "昌吉回族自治州",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310601,
                            "name": "博乐市",
                            "parent": 103106
                        },
                        {
                            "code": 10310602,
                            "name": "精河县",
                            "parent": 103106
                        },
                        {
                            "code": 10310603,
                            "name": "温泉县",
                            "parent": 103106
                        }
                    ],
                    "code": 103106,
                    "name": "博尔塔拉蒙古自治州",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310701,
                            "name": "库尔勒市",
                            "parent": 103107
                        },
                        {
                            "code": 10310702,
                            "name": "轮台县",
                            "parent": 103107
                        },
                        {
                            "code": 10310703,
                            "name": "尉犁县",
                            "parent": 103107
                        },
                        {
                            "code": 10310704,
                            "name": "若羌县",
                            "parent": 103107
                        },
                        {
                            "code": 10310705,
                            "name": "且末县",
                            "parent": 103107
                        },
                        {
                            "code": 10310706,
                            "name": "焉耆回族自治县",
                            "parent": 103107
                        },
                        {
                            "code": 10310707,
                            "name": "和静县",
                            "parent": 103107
                        },
                        {
                            "code": 10310708,
                            "name": "和硕县",
                            "parent": 103107
                        },
                        {
                            "code": 10310709,
                            "name": "博湖县",
                            "parent": 103107
                        }
                    ],
                    "code": 103107,
                    "name": "巴音郭楞蒙古自治州",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310801,
                            "name": "阿克苏市",
                            "parent": 103108
                        },
                        {
                            "code": 10310802,
                            "name": "温宿县",
                            "parent": 103108
                        },
                        {
                            "code": 10310803,
                            "name": "库车县",
                            "parent": 103108
                        },
                        {
                            "code": 10310804,
                            "name": "沙雅县",
                            "parent": 103108
                        },
                        {
                            "code": 10310805,
                            "name": "新和县",
                            "parent": 103108
                        },
                        {
                            "code": 10310806,
                            "name": "拜城县",
                            "parent": 103108
                        },
                        {
                            "code": 10310807,
                            "name": "乌什县",
                            "parent": 103108
                        },
                        {
                            "code": 10310808,
                            "name": "阿瓦提县",
                            "parent": 103108
                        },
                        {
                            "code": 10310809,
                            "name": "柯坪县",
                            "parent": 103108
                        }
                    ],
                    "code": 103108,
                    "name": "阿克苏地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10310901,
                            "name": "阿图什市",
                            "parent": 103109
                        },
                        {
                            "code": 10310902,
                            "name": "阿克陶县",
                            "parent": 103109
                        },
                        {
                            "code": 10310903,
                            "name": "阿合奇县",
                            "parent": 103109
                        },
                        {
                            "code": 10310904,
                            "name": "乌恰县",
                            "parent": 103109
                        }
                    ],
                    "code": 103109,
                    "name": "克孜勒苏柯尔克孜自治州",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311001,
                            "name": "喀什市",
                            "parent": 103110
                        },
                        {
                            "code": 10311002,
                            "name": "疏附县",
                            "parent": 103110
                        },
                        {
                            "code": 10311003,
                            "name": "疏勒县",
                            "parent": 103110
                        },
                        {
                            "code": 10311004,
                            "name": "英吉沙县",
                            "parent": 103110
                        },
                        {
                            "code": 10311005,
                            "name": "泽普县",
                            "parent": 103110
                        },
                        {
                            "code": 10311006,
                            "name": "莎车县",
                            "parent": 103110
                        },
                        {
                            "code": 10311007,
                            "name": "叶城县",
                            "parent": 103110
                        },
                        {
                            "code": 10311008,
                            "name": "麦盖提县",
                            "parent": 103110
                        },
                        {
                            "code": 10311009,
                            "name": "岳普湖县",
                            "parent": 103110
                        },
                        {
                            "code": 10311010,
                            "name": "伽师县",
                            "parent": 103110
                        },
                        {
                            "code": 10311011,
                            "name": "巴楚县",
                            "parent": 103110
                        },
                        {
                            "code": 10311012,
                            "name": "塔什库尔干塔吉克自治县",
                            "parent": 103110
                        }
                    ],
                    "code": 103110,
                    "name": "喀什地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311101,
                            "name": "和田市",
                            "parent": 103111
                        },
                        {
                            "code": 10311102,
                            "name": "和田县",
                            "parent": 103111
                        },
                        {
                            "code": 10311103,
                            "name": "墨玉县",
                            "parent": 103111
                        },
                        {
                            "code": 10311104,
                            "name": "皮山县",
                            "parent": 103111
                        },
                        {
                            "code": 10311105,
                            "name": "洛浦县",
                            "parent": 103111
                        },
                        {
                            "code": 10311106,
                            "name": "策勒县",
                            "parent": 103111
                        },
                        {
                            "code": 10311107,
                            "name": "于田县",
                            "parent": 103111
                        },
                        {
                            "code": 10311108,
                            "name": "民丰县",
                            "parent": 103111
                        }
                    ],
                    "code": 103111,
                    "name": "和田地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311201,
                            "name": "奎屯市",
                            "parent": 103112
                        },
                        {
                            "code": 10311202,
                            "name": "伊犁地区",
                            "parent": 103112
                        },
                        {
                            "code": 10311203,
                            "name": "伊宁市",
                            "parent": 103112
                        },
                        {
                            "code": 10311204,
                            "name": "伊宁县",
                            "parent": 103112
                        },
                        {
                            "code": 10311205,
                            "name": "察布查尔锡伯自治县",
                            "parent": 103112
                        },
                        {
                            "code": 10311206,
                            "name": "霍城县",
                            "parent": 103112
                        },
                        {
                            "code": 10311207,
                            "name": "巩留县",
                            "parent": 103112
                        },
                        {
                            "code": 10311208,
                            "name": "新源县",
                            "parent": 103112
                        },
                        {
                            "code": 10311209,
                            "name": "昭苏县",
                            "parent": 103112
                        },
                        {
                            "code": 10311210,
                            "name": "特克斯县",
                            "parent": 103112
                        },
                        {
                            "code": 10311211,
                            "name": "尼勒克县",
                            "parent": 103112
                        }
                    ],
                    "code": 103112,
                    "name": "伊犁哈萨克自治州",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311301,
                            "name": "塔城市",
                            "parent": 103113
                        },
                        {
                            "code": 10311302,
                            "name": "乌苏市",
                            "parent": 103113
                        },
                        {
                            "code": 10311303,
                            "name": "额敏县",
                            "parent": 103113
                        },
                        {
                            "code": 10311304,
                            "name": "沙湾县",
                            "parent": 103113
                        },
                        {
                            "code": 10311305,
                            "name": "托里县",
                            "parent": 103113
                        },
                        {
                            "code": 10311306,
                            "name": "裕民县",
                            "parent": 103113
                        },
                        {
                            "code": 10311307,
                            "name": "和布克赛尔蒙古自治县",
                            "parent": 103113
                        }
                    ],
                    "code": 103113,
                    "name": "塔城地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311401,
                            "name": "阿勒泰市",
                            "parent": 103114
                        },
                        {
                            "code": 10311402,
                            "name": "布尔津县",
                            "parent": 103114
                        },
                        {
                            "code": 10311403,
                            "name": "富蕴县",
                            "parent": 103114
                        },
                        {
                            "code": 10311404,
                            "name": "福海县",
                            "parent": 103114
                        },
                        {
                            "code": 10311405,
                            "name": "哈巴河县",
                            "parent": 103114
                        },
                        {
                            "code": 10311406,
                            "name": "青河县",
                            "parent": 103114
                        },
                        {
                            "code": 10311407,
                            "name": "吉木乃县",
                            "parent": 103114
                        }
                    ],
                    "code": 103114,
                    "name": "阿勒泰地区",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311501,
                            "name": "石河子市",
                            "parent": 103115
                        }
                    ],
                    "code": 103115,
                    "name": "石河子市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311601,
                            "name": "阿拉尔市",
                            "parent": 103116
                        }
                    ],
                    "code": 103116,
                    "name": "阿拉尔市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311701,
                            "name": "图木舒克市",
                            "parent": 103117
                        }
                    ],
                    "code": 103117,
                    "name": "图木舒克市",
                    "parent": 1031
                },
                {
                    "child": [
                        {
                            "code": 10311801,
                            "name": "五家渠市",
                            "parent": 103118
                        }
                    ],
                    "code": 103118,
                    "name": "五家渠市",
                    "parent": 1031
                }
            ],
            "code": 1031,
            "name": "新疆省",
            "parent": 10
        }
    ]
