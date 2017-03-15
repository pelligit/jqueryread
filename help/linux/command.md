```
// 树莓派更改主机名
cd /etc/

// 修改其中10.127.0.1对应的内容为想要的主机名字
sudo nano hosts

// 修改主机名
sudo nano hostname

// 关机
sudo init 0

// 开机后就可以了
```


## 新建用户testuser

```
sudo useradd -d /usr/testuser -m testuser
sudo passwd testuser
```
