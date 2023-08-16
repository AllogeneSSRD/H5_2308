const button = document.getElementById("btn");
// 对 button 按钮绑定点击事件
// 向用户为当前来源 请求显示通知的权限

button.addEventListener("click", async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    
    if (permission === "granted") {
        const notice = new Notification("千秋九", {
            body: "对象实例已创建",
            icon: "../static/svg/樟子松-1.svg",
            data: {
                address: "https://space.bilibili.com/238761523",
            },
            requireInteraction: false,
            tag: "notice OCL"
        });
        console.log(notice.data);
        notice.addEventListener("click", msg => {
            console.log(msg);
        })
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "prerender") {
        new Notification("html加载成功 等待资源")
    }
});

let leaveNotification;

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        leaveNotification = new Notification("页面已移入后台", {
            icon: "../static/images/bilibili/emoticon/崩坏3·光辉矢愿_大佬喝可乐.png"
            // tag: "notice hidden"
        });
    } else {
        leaveNotification.close();
    }
});