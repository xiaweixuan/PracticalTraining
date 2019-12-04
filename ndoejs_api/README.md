## 项目实训api

直接通过git clone后npm i 下载依赖后使用

#### 接口

| 接口名称  | 接口功能  | 请求类型 | 传入参数 | 返回样式 |
| ----- | ----- | ----- | ----- | ----- |
| /login    | 登录        | post | useid,pwd | { state: '', message: '', content: true or false } |
| /register | 注册        | post | useid,pwd,email | { state: '', message: '', content: true or false } |
| /personal | 个人信息    | get  | useid | { state: '', message: '', content: json对象 } |
| /offpaint | 官方发布图片 | get  | 无    | { state: '', message: '', content: json对象 } |
| /perpaint | 用户发布图片 | post | 无    | { state: '', message: '', content: json对象 } |
| /releases | 社区        | get  | useid | { state: '', message: '', content: json对象 } |
| /collection | 收藏      | get  | useid | { state: '', message: '', content: json对象 } |
| /work     | 作品        | get  | useid | { state: '', message: '', content: json对象 } |
| /usrcnki  | 用户名查重   | get  | useid | { state: '', message: '', content: true or false } |
| /img      | 闪屏随机图片 | get  | 无    | 图片 |
