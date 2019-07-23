# websocket

# OSI七层 模型里面 

<img src="1.jpg" />

我们前端一般只会关注应用层

TCP/IP协议

三次握手，四次挥手

|层名|作用||
|-|-|-|
|应用层|网络服务与最终用户的一个接口。|HTTP FTP TFTP SMTP SNMP DNS TELNET HTTPS POP3 DHCP Websocket|
|表示层|数据的表示、安全、压缩。|JPEG、ASCll、DECOIC、加密格式等|
|会话层|建立、管理、终止会话。|对应主机进程，指本地主机与远程主机正在进行的会话|
|传输层|定义传输数据的协议端口号，以及流控和差错校验。|TCP UDP|
|网络层|进行逻辑地址寻址，实现不同网络之间的路径选择。|ICMP IGMP IP（IPV4 IPV6） ARP RARP|
|数据链路层|建立逻辑连接、进行硬件地址寻址、差错校验 [2]  等功能。（由底层网络定义协议）
将比特组合成字节进而组合成帧，用MAC地址访问介质，错误发现但不能纠正||
|物理层|建立、维护、断开物理连接。（由底层网络定义协议）|

TCP是短连接(ajax短http协议连接)，http的底层tcp，http 状态变化100->200

UDP是长久连接，websocket，连接建立了之后一般不会轻易终端 一直都在100

# 总结为

应用层：ajax请求 http协议(get,post)，请求头和请求体

传输层：TCP/UDP,TCP是http下一层，http或者https必定经过TCP，三次握手（建立稳定的连接，至少三次）

IP：找服务器的IP地址，去全球13台服务器里面把域名解析为IP地址

网路接口层：光纤



# 重温 HTTP 协议
HTTP 协议可以总结几个特点：
- 一次性的、无状态的短连接：客户端发起请求、服务端响应、结束。
- 被动性响应：只有当客户端请求时才被执行，给予响应，不能主动向客户端发起响应。
- 信息安全性：得在服务器添加 SSL 证书，访问时用 HTTPS。
- 跨域：服务器默认不支持跨域，可在服务端设置支持跨域的代码或对应的配置。

# 认识 TCP
TCP 协议可以总结几个特点：
- 有状态的长连接：客户端发起连接请求，服务端响应并建立连接，连接会一直保持直到一方主动断开。
- 主动性：建立起与客户端的连接后，服务端可主动向客户端发起调用。
- 信息安全性：同样可以使用 SSL 证书进行信息加密，访问时用 WSS 。
- 跨域：默认支持跨域。

# 认识 WebSocket
WebSocket 目前由 W3C 进行标准化。WebSocket 已经受到 Firefox 4、Chrome 4、Opera 10.70 以及Safari 5 等浏览器的支持。
如果在前端我们可以把 AJAX 请求当作一个 HTTP 协议的实现，那么，WebSocket 就是 UDP 协议的一种实现。

# node的ws原生模块

http原生模块，用于搭建http服务器，用express

客户端要发http是基于XMLHttpRequest,短连接

我们如果用node搭建ws协议的服务器，那么我们将会用到dgram模块
dgram 模块提供了 UDP 数据包 socket 的实现。用ws模块搭建。

客户端要发websocket是基于WebSocket，长连接


# 服务端 API

- 安装第三方模块 ws：`npm install ws`
- 开启一个 WebSocket 的服务器，端口为 8080
```javascript
var socketServer = require('ws').Server;
var wss = new socketServer({
	port: 8080
});
```
- 也可以利用 Express 来开启 WebSocket 的服务器
```javascript
var app = require('express')();
var server = require('http').Server(app);

var socketServer = require('ws').Server;
var wss = new socketServer({server: server, port: 8080});
```
- 用 on 来进行事件监听
- connection：连接监听，当客户端连接到服务端时触发该事件
- close：连接断开监听，当客户端断开与服务器的连接时触发
- message：消息接受监听，当客户端向服务端发送信息时触发该事件
- send: 向客户端推送信息

```javascript
wss.on('connection', function (client) {
    client.on('message', function (_message) {
    	var _messageObj = JSON.parse(_message);
        //status = 1 表示正常聊天
        _messageObj.status = 1;
    	this.message = _messageObj;
        //把客户端的消息广播给所有在线的用户
        wss.broadcast(_messageObj);
    });

    // 退出聊天  
    client.on('close', function() {  
        try{
            this.message = this.message || {};
            // status = 0 表示退出聊天
            this.message.status = 0;
            //把客户端的消息广播给所有在线的用户
            wss.broadcast(this.message);  
        }catch(e){  
            console.log('刷新页面了');  
        }  
    });  
});

//定义广播方法
wss.broadcast = function broadcast(_messageObj) {  
    wss.clients.forEach(function(client) { 
        client.send(JSON.stringify(_messageObj))
    });  
}; 
```
# 客户端 API

- 在支持 WebSocket 的浏览器下实例化 WebSocket ，参数为 WebSocket 服务器地址，建立与服务器的连接
```javascript
if(!WebSocket){
    $('.connState').text("您的浏览器不支持WebSocket");
    return false;
} 
//连接 socket 服务器
var socket = new WebSocket('ws://localhost:8080');
```
<img src="2.png"/>

- onopen：当网络连接建立时触发该事件
```javascript
//监听 socket 的连接
socket.onopen = function(){
    $('.connState').text("服务已连接 ws://localhost:8080");
}
```
- onclose：当服务端关闭时触发该事件
```javascript
//监听服务端断开
socket.onclose = function(){
    $('.connState').text("服务已断开");
    socket = null;
}
```
- close: 在客户端断开与服务端的连接 `socket.close();`
- onerror：当网络发生错误时触发该事件
```javascript
//监听服务端异常
socket.onerror = function(){
    $('.connState').text("服务错误");
    socket = null;
}
```
- onmessage：当接收到服务器发来的消息的时触发的事件，也是通信中最重要的一个监听事件
```javascript
//监听服务端广播过来的消息
socket.onmessage = function(msg){
    var msgObj = JSON.parse(msg.data);
    if(msgObj.status == 0){
        $('<p>' + msgObj.nickname + '[' + msgObj.time + ']退出聊天</p>').appendTo('.msgList');
    } else{
        $('<p>' + msgObj.nickname + '[' + msgObj.time + ']：' + msgObj.message + '</p>').appendTo('.msgList');
    }
}
```
- send：向服务端推送消息
```javascript
var sendMessage = function(_mess){
    if(socket){
        var myDate = new Date();
        var now = myDate.getMonth() + '-' + myDate.getDate() + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();				
        
        var mesObj = {
            nickname: $('#nickName').val(),
            message: _mess || $('#mesBox').val(),
            time: now
        }
        //向服务端发送消息
        socket.send(JSON.stringify(mesObj));
    }			
}
```

# 项目应用
该案例是一个多人聊天室

运行步骤
- npm install ws
- node socketServer

案例思路
- 服务端开户一个服务 `new socketServer({port: 8080});`
- 客户端建立和服务端的连接 `var socket = new WebSocket('ws://localhost:8080');`
- 建立连接的同时发送上线信息给服务端 `socket.send('加入聊天');`
- 服务端接受到客户端的消息触发 message 方法，然后将该消息广播给所有在线的用户
- 所有客户端收到来自服务端广播的消息，然后将该消息显示在聊天列表。
- 聊天和退出聊天都是重复着客户端发送消息，服务端接受消息然后向客户端广播消息，客户端显示广播消息。
