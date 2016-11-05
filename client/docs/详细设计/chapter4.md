## 4. 接口视角

### 4.1 模块的职责
系统各模块职责如下表所示：

模块 | 职责
:---: | : ---
数据管理 | 负责管理用户的运动数据并对数据进行数据分析，以直观的形式展现给用户
活动 | 展现活动内容，并允许用户发起或参与活动
圈子 | 为用户提供交流分享的平台
个人信息 | 用户个人信息的管理
设备管理 | 负责管理用户的设备，并提供设备数据的导入
登录/注册 | 用户登录/注册

### 4.2 接口描述

* 本系统为单页应用，所有界面均基于主界面，构成主界面的组件。
* 本系统采用分级导航机制，根据职责不同，将系统分为六个一级组件，分别为数据管理、活动、圈子、个人信息以及设备管理，以下对六个一级组件所需接口进行详细说明。
* 服务器端所有返回数据均为 `json` 格式，以后不再说明。

#### 4.2.1 数据管理

数据对象为json对象类型，包含日期、活动类型以及活动时间(单位: 分钟),对象示例如下:
```
{
    "date": "2016-10-28",
    "type": "跑步",
    "time": 30
}
```

* 上传数据
	* url: /upload
	* method: POST
	* 请求参数: 
		* data: 数据对象 
	* 返回值: messag对象
		* 成功: `{"state": 1, "info": "上传成功", "object": null}`
		* 失败: `{"state": 0, info: "失败的原因", "object": null}`
		
* 修改数据
	* url: /modify
	* method: POST
	* 请求参数: 
		* id: 数据id
		* data: 修改后的数据对象
	* 返回值: 
		* 成功: `{"state": 1, "info": "修改成功", "object": 修改后的数据对象}`
		* 失败: `{"state": 0, "info": "失败原因", "object": null}`
		
* 删除数据
	* url: /delete
	* method: POST
	* 请求参数:
		* id: 数据id 
	* 返回值: messag对象
		* 成功: `{"state": 1, "info": "上传成功", "object": null}`
		* 失败: `{"state": 0, "info": "失败的原因", "object": null}`
		
* 历史数据
	* url: /history
	* method: POST
	* 请求参数: 
		* page: 页数
		* 不加参数默认返回第一页
	* 返回值:
		* 成功: `{"state": 1, "info": 总页数, "object": 数据对象数组}`
		* 失败: `{"state": 0, "info": '失败的原因', "object": null}`
		
* 数据分析
	* 登录后自动返回, 无需请求 

#### 4.2.2 活动

活动对象为json对象类型，对象示例如下:
```
{
    "id": "2016102800032",        // 活动id
    "date": "2016-10-28",         // 活动日期
    "time": "20:00",              // 活动时间
    "type": "跑步",                // 活动类型
    "duration": 30,               // 活动时长,单位分钟
    "place": "南大鼓楼校区",        // 活动地点
    "description": "慢跑",        // 活动描述
    "sponsor": "bedisdover",      // 活动发起人
    "permission": "公开"          // 活动性质,包含公开、仅好友、仅认证用户
}
```

* 活动列表
    * url: /activities
    * method: GET
    * 请求参数: 
        * page: 页数
        * 不加参数默认返回第一页
    * 返回值:
        * 成功: `{"state": 1, "info": 总页数, "object": 活动对象数组}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`
        
* 活动详情
    * url: /activity
    * method: GET
    * 请求参数: 
        * id: 活动id
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 活动对象}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`

* 参与活动
    * url: /join
    * method: POST
    * 请求参数:
        * id: 活动id
    * 返回值: 
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`
        
* 发起活动
    * url: /start
    * method: POST
    * 请求参数: 
        * data: 活动对象
    * 返回值: 
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 

* 我的活动
    * url: /myactivities
    * method: GET
    * 请求参数: 无
    * 返回值: 
        * 成功: `{"state": 1, "info": "请求成功", "object": 活动对象列表}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 

#### 4.2.3 圈子

* 好友列表
    * url: /friends
    * method: POST
    * 请求参数: 无
    * 返回值: 
        * 成功: `{"state": 1, "info": "请求成功", "object": 好友列表}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 
* 添加好友
    * url: /addfriend
    * method: POST
    * 请求参数: 
        * id: 用户id
    * 返回值: 
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 
 * 删除好友
     * url: /deletefriend
     * method: POST
     * 请求参数: 
        * id: 用户id
     * 返回值: 
         * 成功: `{"state": 1, "info": "请求成功", "object": null}`
         * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 
* 消息
    * url: /messages
    * method: POST
    * 请求参数: 无
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 消息列表}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 
* 朋友圈
    * url: /moments
    * method: POST
    * 请求参数: 无
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 动态列表}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}` 
* 发表动态
    * url: /send
    * method: POST
    * 请求参数:
        * data: 动态对象
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`

#### 4.2.4 个人信息

* 查看个人信息
    * url: /me
    * method: POST
    * 请求参数: 无
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 个人信息对象}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`
* 修改个人信息
    * url: /modifyinfo
    * method: POST
    * 请求参数: 
        * data: 个人信息对象
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`

#### 4.2.5 设备管理

* 绑定设备
    * url: /bind
    * method: POST
    * 请求参数:
        * data: 设备对象
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`
* 设备管理
    * url: /device
    * method: POST
    * 请求参数: 无 
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 设备列表}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`

#### 4.2.6 登录/注册

* 登录
    * url: /login
    * method: POST
    * 请求参数: 
        * username: 用户名
        * password: 密码
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": 数据分析}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`

* 注册
    * url: /signup
    * method: POST
    * 请求参数: 
        * phone: 手机号
        * password: 密码
    * 返回值:
        * 成功: `{"state": 1, "info": "请求成功", "object": null}`
        * 失败: `{"state": 0, "info": '失败的原因', "object": null}`
