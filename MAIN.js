/**
 * 暂不开源脚本，以下代码仅作为内容展示
 */
 
//草榴官方客户端辅助，小草客户端辅助脚本，Android
//newt66y helloworld 1024app - Android 草榴社区自动回贴t66y.com
//基于Hamibot的草榴社区自动脚本 1024 新手上路 回帖任务辅助 技術討論區
//代码页面不提供 草榴社区最新地址,草榴社区邀请码,草榴社區,邀請碼
//小草新手上路有1024秒回复间隔，一天最多回复10帖，基本要回够1000帖才能上岛，我太难了!
//这是一个基于Hamibot的草榴自动回帖和点赞辅助脚本，适合新手上路使用，你需要在手机上运行脚本。

// 检查无障碍服务是否已经启用
auto.waitFor();

// 保持屏幕唤醒状态
device.keepScreenDim();
// 获得原来的媒体音量并静音，后面调回去
var vol = device.getMusicVolume();
device.setMusicVolume(0);

//初始化屏幕参数
var [device_w, device_h] = init_wh();

// 屏幕宽高、方向初始化
function init_wh() {
  var device_w = depth(0).findOne().bounds().width();
  var device_h = depth(0).findOne().bounds().height();
  return [device_w, device_h]
}

/**
 * 获取配置参数及本地存储数据
 */
// 基础数据
var { delay_time } = hamibot.env;
var { reply_id_Check } = hamibot.env;
var { all_completed_Vibrate } = hamibot.env;
delay_time = Number(delay_time) * 1000;

/**
 * 模拟随机时间
 * @param {int} time 时间
 * @return {int} 随机后的时间值
 */
function random_time(time) {
    return time + random(100, 1000);
}

/**
 * 模拟点击可点击元素
 * @param {string} target 控件文本
 */
function my_click_clickable(target) {
    text(target).waitFor();
    click(target);
}

function swipe_page() {
    swipe(device_w / 2, device_h * 0.8, device_w / 2, device_h * 0.2, 1000);
}

function back_page() {
    className("android.widget.RelativeLayout").depth(3).findOne().child(1).click();
}

sleep(random_time(delay_time));
launch('com.hamibot.hamibot');
textMatches(/Hamibot|日志/).waitFor();
toastLog("1024脚本正在运行");
sleep(random_time(delay_time));
app.launchApp("小草");
sleep(random_time(delay_time * 3));
//下面没有了
