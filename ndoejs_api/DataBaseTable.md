## 用户
| 账号  | 密码  | 手机号 | 头像路径 | 个性签名 |
| ----- | ----- | ----- | ----- | ----- |
| userid varchar(12) | pwd varchar(12) | phonenum char(11) | avatarurl varchar(12) | motto  varchar(50) |

## 画
| 画名  | 归属账号 | 图 | 类别 | 描述 |
| ----- | ----- | ----- | ----- | ----- |
| paintid char(12) | userid varchar(12) | paintdata text | type varchar(12) | describe varchar(50) |

## 作品
| 账号  | 画名  |
| ----- | ----- |
| userid varchar(12) | paintid char(12) |

## 收藏
| 账号  | 画名 |
| ----- | ----- |
| userid varchar(12) | paintid char(12) |