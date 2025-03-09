console.groupCollapsed("\n%c  %c考试时钟 ExamClock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://github.com/L33Z22L11/ExamClock\n野生技协群：894656456\n\n");
console.groupEnd();


exams[27] = {
  type: "高一日常",
  author: "来源:阳毅",
  origin: "2027级年级部",
  mainSlogan: "以梦为马，不负韶华",
  rollSlogan: [""],
  schedule() {
    $("早读", today.date, "06:50", "07:10");
    $("早读", today.date, "07:10", "07:35");
    $("第1节", today.date, "08:00", "08:40");
    $("第2节", today.date, "08:50", "09:30");
    $("第3节", today.date, "09:40", "10:20");
    $("第4节", today.date, "10:30", "11:10");
    $("第5节", today.date, "11:20", "12:10");
    $("第6节", today.date, "14:20", "15:00", null, null, 5);
    $("第7节", today.date, "15:10", "15:50");
    $("第8节", today.date, "16:00", "16:40", null, null, 7);
    $("数学限时练", today.date, "17:50", "17:30");
    $("自习", today.date, "18:30", "19:10", null, null, 5);
    $("晚一", today.date, "19:10", "20:00");
    $("晚二", today.date, "20:10", "20:50");
    $("晚三", today.date, "21:00", "22:00", null, null, 7);
    }
  }

exams[271] = {
  type: "高一考试",
  author: "来源:张老师",
  origin: "2027届年级部",
  rollSlogan: ["高一第一学期期末考试：请以实际铃声为准。"],
  schedule() {
    $("语文", "2025-01-13", "08:00", "10:00");
    $("英语", "2025-01-13", "10:30", "12:10");
    $("史地", "2025-01-13", "14:10", "16:10");
    $("物理", "2025-01-13", "16:40", "18:10");
    $("数学", "2025-01-14", "08:00", "09:40");
    $("化学", "2025-01-14", "10:10", "11:40");
    $("生物", "2025-01-14", "14:10", "15:40");
    $("政治", "2025-01-14", "16:10", "17:10");
  }
};

