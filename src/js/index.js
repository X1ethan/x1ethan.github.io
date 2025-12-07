// 获取DOM元素
const digitalTimeElement = document.getElementById('digitalTime');
const fullDateElement = document.getElementById('fullDate');
const timezoneElement = document.getElementById('timezone');


// 状态变量
let showSeconds = true;
let isBlueTheme = true;

// 星期几的中文表示
const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

// 月份的中文表示
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// 更新时间函数
function updateTime() {
    const now = new Date();

    // 获取时间组件
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
     const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    // 更新数字时钟
    digitalTimeElement.textContent = timeString;

    console.log(timeString)

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const weekday = weekdays[date.getDay()];

    fullDateElement.textContent = `${year}年${month}${day}日 ${weekday}`;

    // 获取时区信息
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneOffset = -date.getTimezoneOffset() / 60;
    const offsetSign = timezoneOffset >= 0 ? '+' : '-';
    const offsetString = `UTC${offsetSign}${Math.abs(timezoneOffset)}`;

    timezoneElement.textContent = `时区：${timezone} (${offsetString})`;

}
// 初始更新时间
updateTime();

// 每秒更新一次时间
setInterval(updateTime, 1000);