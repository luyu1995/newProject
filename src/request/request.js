import axios from "axios";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到

/****** 创建axios实例 ******/
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 5000 // 请求超时时间
});
