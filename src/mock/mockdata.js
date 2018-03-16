import Mock from 'mockjs'
import data from "./data";
import homeinfo from './homeinfo'

export default function () {
    // 请求首页信息接口
    Mock.mock('/api/gethomeinfo/', homeinfo);
    Mock.mock(/\.json/, data);
}