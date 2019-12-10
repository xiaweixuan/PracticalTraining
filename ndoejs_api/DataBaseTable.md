## 用户
| 账号  | 密码  | 手机号 | 头像路径 | 个性签名 |
| ----- | ----- | ----- | ----- | ----- |
| userid varchar(12) | pwd varchar(12) | email varchar(20) | avatarurl varchar(12) | motto  varchar(100) |

## 画
| 画名（归属账号+timestarp） | 归属账号 | 图 | 类别 | 描述 | 历史记录 | 列(默认20) | 行(默认20) |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| paintid varchar(24) | userid varchar(12) | paintdata text | type varchar(12) | describe varchar(50) | history text | int(4) | int(4) |

## 作品
| 账号  | 画名  |
| ----- | ----- |
| userid varchar(12) | paintid varchar(24) |

## 收藏
| 账号  | 画名 |
| ----- | ----- |
| userid varchar(12) | paintid varchar(24) |