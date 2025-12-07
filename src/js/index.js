// 获取DOM元素
const digitalTimeElement = document.getElementById('digitalTime');
const periodIndicatorElement = document.getElementById('periodIndicator');
const fullDateElement = document.getElementById('fullDate');
const timezoneElement = document.getElementById('timezone');
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

// 控制按钮
const toggleFormatBtn = document.getElementById('toggleFormat');
const toggleSecondsBtn = document.getElementById('toggleSeconds');
const colorThemeBtn = document.getElementById('colorTheme');

// 状态变量
let is24HourFormat = false;
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

    // 处理12/24小时制
    let period = '';
    if (!is24HourFormat) {
        period = hours >= 12 ? '下午' : '上午';
        hours = hours % 12 || 12; // 将0转换为12
    }

    // 格式化时间字符串（补零）
    const timeString = is24HourFormat
        ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // 更新数字时钟
    digitalTimeElement.textContent = showSeconds ? timeString : timeString.slice(0, -3);
    periodIndicatorElement.textContent = is24HourFormat ? '' : period;

    // 更新模拟时钟
    updateAnalogClock(hours, minutes, seconds);

    // 更新日期信息
    updateDateInfo(now);
}



// 更新日期信息
function updateDateInfo(date) {
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


// 随机显示一个时间事实
setTimeout(() => {
    const randomFact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
    document.querySelector('.subtitle').textContent += ` | 你知道吗：${randomFact}`;
}, 3000);