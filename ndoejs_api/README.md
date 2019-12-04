## 项目实训api

直接通过git clone后npm i 下载依赖后使用

#### 接口

| 接口名称  | 接口功能  | 请求类型 | 传入参数 | 返回样式 |
| ----- | ----- | ----- | ----- | ----- |
| /login    | 登录        | post | userid,pwd | { state: '', message: '', content: true or false } |
| /register | 注册        | post | userid,pwd,email | { state: '', message: '', content: true or false } |
| /personal | 个人信息    | get  | userid | { state: '', message: '', content: json对象 } |
| /offpaint | 官方发布图片 | get  | 无    | { state: '', message: '', content: json对象 } |
| /perpaint | 用户发布图片 | post | paintid,userid,paintdata,type,describe | { state: '', message: '', content: json对象 } |
| /releases | 社区        | get  | userid | { state: '', message: '', content: json对象 } |
| /collection | 收藏      | get  | userid | { state: '', message: '', content: json对象 } |
| /work     | 作品        | get  | userid | { state: '', message: '', content: json对象 } |
| /usrcnki  | 用户名查重   | get  | userid | { state: '', message: '', content: true or false } |
| /img      | 闪屏随机图片 | get  | 无    | 图片 |
| /setall   | 个人信息设置 | post  | olduserid,userid,pwd,email,avatarurl,motto    | { state: '', message: '', content: true or false } |
| /addcollect | 添加收藏   | post  | userid,paintid    | { state: '', message: '', content: true or false } |
