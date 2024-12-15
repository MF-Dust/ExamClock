/* 
 * 背景切换
 */
const gallery = {
  Nov21: [["绩笑", "窗边", "2/04/04/kBiwl"], ["绩笑", "书堆", "2/04/04/kB11g"], ["绩笑", "讲台", "2/04/04/kBFKP"], ["绩笑", "课桌", "2/04/04/kBz56"], ["绩笑", "商店", "2/04/04/kBh0b"], ["绩笑", "云层", "2/04/04/kB7HB"], ["绩笑", "蒲公英", "2/04/04/kBN8s"],],
  Dec21: [["純粋な", "校门", "2/04/04/kBrxK"], ["純粋な", "楼顶", "2/04/04/kBAJa"], ["純粋な", "操场", "2/04/04/kBKfS"], ["純粋な", "广场", "2/04/04/kBvBN"], ["齐天", "书桌", "2/04/04/kByKC"], ["云山", "环道", "2/04/04/kBg0L"], ["Echo", "云海", "2/04/04/kBpMi"], ["Echo", "楼顶", "2/04/04/kBJ1X"], ["Echo", "幕影", "2/04/04/kBPHt"], ["Echo", "操场", "2/04/04/kBRXx"], ["Echo", "楼道", "2/04/04/kB4xj"], ["Echo", "水杉", "2/04/04/kBDJp"], ["凌球", "雪松", "2/04/04/kBHlU"], ["北盼城南烟花繁", "日落", "2/04/04/kBEBY"], ["北盼城南烟花繁", "楼道", "2/04/04/kBGZv"], ["北盼城南烟花繁", "兼程", "2/04/04/kBQcq"], ["小佗", "紫叶李", "2/04/04/kB0Mc"], ["小佗", "银杏", "2/04/04/kTXgU"], ["小佗", "复羽叶栾树", "2/04/04/kTusY"], ["小佗", "云海", "2/04/04/kTjtx"], ["小佗", "合欢花", "2/04/04/kT2jj"], ["小佗", "梅", "2/04/04/kT8Wp"], ["小佗", "合欢", "2/04/04/kT3ov"], ["小佗", "紫叶李", "2/04/04/kTCrq"], ["小佗", "操场", "2/04/04/kTwGc"], ["小佗", "幕墙与树", "2/04/04/kUM3r"], ["小佗", "篮球架", "2/04/04/kUaiM"], ["小佗", "永远热爱", "2/04/04/kUotG"], ["姚小瑶", "云", "2/04/04/kUq21"], ["姚小瑶", "运动会", "2/04/04/kUBWI"], ["暮草兮", "龙棕", "2/04/04/kUTgD"], ["Stars", "操场", "2/04/04/kUUVF"], ["Stars", "广场", "2/04/04/kUbo6"], ["Stars", "操场的云", "2/04/04/kUkrP"], ["Stars", "云与合欢", "2/04/04/kUKrC"], ["靖靖子", "夕晖", "2/04/04/kUZQL"], ["靖靖子", "不落", "2/04/04/kUvCi"], ["靖靖子", "夕云", "2/04/04/kUgiX"], ["靖靖子", "运动会", "2/04/04/kUm4t"], ["靖靖子", "金叶女贞", "2/04/04/kUp6x"], ["靖靖子", "教室后", "2/04/04/kUPbj"], ["靖靖子", "对面宿舍", "2/04/04/kUtYU"], ["靖靖子", "书架", "2/04/04/kURmp"], ["靖靖子", "楼外楼", "2/04/04/kUDqY"], ["靖靖子", "讲桌下", "2/04/04/kUHAv"], ["靖靖子", "谁的课桌", "2/04/04/kUz3l"], ["靖靖子", "午间", "2/04/04/kUhig"], ["靖靖子", "货架", "2/04/04/kUn2s"], ["靖靖子", "这又是谁的课桌", "2/04/04/kUxQb"], ["秤砣", "墙上", "2/04/04/kUi4B"], ["秤砣", "捉光", "2/04/04/kU7bK"], ["秤砣", "楼间松", "2/04/04/kUNma"], ["秤砣", "栾树外", "2/04/04/kUeVS"], ["秤砣", "枫香树下", "2/04/04/kUAqN"], ["秤砣", "鳞状云", "2/04/04/kULSq"], ["秤砣", "第二场雪", "2/04/04/kU06G"], ["秤砣", "外立面", "2/04/04/kUECc"], ["秤砣", "放飞气球", "2/04/04/kUSDM"], ["秤砣", "气球外的梦", "2/04/04/kUQnr"], ["秤砣", "远方的灯", "2/04/04/kUdk1"], ["秤砣", "晴", "2/04/04/kUf5F"], ["秤砣", "月", "2/04/04/kUsmI"], ["北盼城南烟花繁", "看操场", "2/04/04/kUVYD"], ["北盼城南烟花繁", "球场", "2/04/04/kUlA6"], ["东隅", "日出", "2/04/04/kU9SP"], ["东隅", "对面", "2/04/04/kUjwb"], ["东隅", "操场与日落", "2/04/04/kU6nl"], ["SuperR1SE", "一框", "2/04/04/kU8Dg"], ["SuperR1SE", "背后", "2/04/04/kUX8B"], ["SuperR1SE", "日", "2/04/04/kUIks"],],
  Jan22: [["亦", "于云出", "2/04/04/kWOKN"], ["亦", "楼与楼", "2/04/04/kWM5S"], ["亦", "看台上", "2/04/04/kWaSC"], ["亦", "球场的黄昏", "2/04/04/kUCfa"], ["亦", "旗杆与云海", "2/04/04/kU3pK"], ["亦", "操场", "2/04/04/kW51i"], ["亦", "绚", "2/04/04/kWowL"], ["亦", "霞", "2/04/04/kWBDX"], ["亦", "天空之下是热爱", "2/04/04/kWT8t"], ["亦", "射者中", "2/04/04/kWWxx"], ["亦", "胶囊仓降落台", "2/04/04/kWbpj"], ["泡泡", "捉云", "2/04/04/kWkfp"], ["泡泡", "云上冲浪", "2/04/04/kWzBU"], ["泡泡", "日落于东", "2/04/04/kWFKY"], ["泡泡", "饱和度战士", "2/04/04/kWh0v"], ["吴鸭鸭", "艺术节的夜", "2/04/04/kWnMq"], ["吴鸭鸭", "落日与晚风", "2/04/04/kW11c"], ["吴鸭鸭", "校庆人海", "2/04/04/kW7Hr"], ["吴鸭鸭", "校庆幕后", "2/04/04/kWNXM"], ["SuperR1SE", "广场", "2/04/04/kWrxG"], ["SuperR1SE", "球场", "2/04/04/kWAJ1"], ["纸某鹿", "浪漫了整片天", "2/04/04/kWKfI"], ["纸某鹿", "云之形", "2/04/04/kkBbx"], ["纸某鹿", "持不稳的黄昏", "2/04/04/kkTgj"], ["木鱼", "欢庆之夜", "2/04/04/kkotX"], ["木鱼", "虹", "2/04/04/kkq2t"], ["派小星", "光帆", "2/04/04/kkaii"], ["派小星", "摘", "2/04/04/kkUVp"], ["派小星", "觅", "2/04/04/kkbqU"], ["派小星", "镜中云", "2/04/04/kkkrY"], ["派小星", "叶影", "2/04/04/kkxQv"], ["派小星", "镶", "2/04/04/kkzCq"], ["派小星", "遇", "2/04/04/kkhic"], ["派小星", "路迹", "2/04/04/kki4r"], ["派小星", "映", "2/04/04/kkn6M"], ["派小星", "雨过", "2/04/04/kk7bG"], ["派小星", "覆云", "2/04/04/kkNm1"], ["派小星", "楼", "2/04/04/kkeVI"], ["古怪", "某人的杯子", "2/04/04/kkZQ6"], ["古怪", "桌上的笔袋", "2/04/04/kkKAF"], ["古怪", "讲台前的杯子", "2/04/04/kkvCP"], ["古怪", "打球的少年们", "2/04/04/kkgnb"], ["古怪", "阳光直射的地方", "2/04/04/kkAqD"], ["古怪", "空虚的走廊", "2/04/04/kkm4l"], ["古怪", "神奇的房间", "2/04/04/kkp6g"], ["古怪", "死里卷", "2/04/04/kkPkB"], ["古怪", "古怪的笔袋", "2/04/04/kkRms"], ["古怪", "午间的书桌", "2/04/04/kktYK"], ["古怪", "凌乱的课桌", "2/04/04/kkD5a"], ["古怪", "我不知道起什么名字了", "2/04/04/kkHAS"], ["古怪", "剩余的143天", "2/04/04/kkLSN"], ["古怪", "那边的兼程楼", "2/04/04/kkECC"], ["古怪", "周六的街道", "2/04/04/kkQnL"],],
  Feb22: [["一棵果树", "云树", "2/04/04/kkSDi"], ["一棵果树", "团", "2/04/04/kk06X"], ["一棵果树", "驾一叶", "2/04/04/kkdkt"], ["一棵果树", "艺术", "2/04/04/kkspx"], ["一棵果树", "漾", "2/04/04/kkVYj"], ["一棵果树", "霞", "2/04/04/kkf5p"], ["抓旭", "叶间", "2/04/04/kkjwv"], ["抓旭", "云帘", "2/04/04/kk9SY"], ["抓旭", "望月", "2/04/04/kklKU"], ["抓旭", "海中树", "2/04/04/kk61q"], ["抓旭", "微夏", "2/04/04/kkX8r"], ["抓旭", "云生", "2/04/04/kkIxM"], ["抓旭", "天之纹", "2/04/04/kk3pG"], ["抓旭", "光迹", "2/04/04/kkCf1"], ["抓旭", "行路", "2/04/04/kxM5I"], ["抓旭", "树下", "2/04/04/kxOKD"], ["古怪", "相机水印忘关了", "2/04/04/kxa0F"], ["古怪", "傍晚", "2/04/04/kxow6"], ["古怪", "植被颜色是不是太深了", "2/04/04/kx51P"], ["古怪", "这张忘了拍的是哪了", "2/04/04/kxBHb"], ["古怪", "Lightroom改的天空", "2/04/04/kxT8l"], ["古怪", "回村的小路", "2/04/04/kxWxg"], ["古怪", "等等，这是哪来着，我又忘了", "2/04/04/kxbJB"], ["古怪", "千万别细看这张", "2/04/04/kxkfs"], ["古怪", "再不走就快天黑了", "2/04/04/kxzBK"], ["古怪", "话说山和坡的区别是啥", "2/04/04/kxFZa"], ["古怪", "你知道水塔在哪吗？", "2/04/04/kxh0S"], ["古怪", "这张好黑啊", "2/04/04/kk8Dc"], ["古怪", "呃，写不出来名字了，那就叫无题吧", "2/04/04/kx11C"], ["古怪", "平淡无奇的一张", "2/04/04/kxnMN"], ["古怪", "不知名公园", "2/04/04/kxNXi"], ["太阳", "松", "2/04/04/kxrxX"], ["太阳", "雪与外立面", "2/04/04/kx7HL"], ["太阳", "柳下", "2/04/04/kxAJt"], ["太阳", "窗间", "2/04/04/kxKlx"], ["太阳", "漫雪", "2/04/04/kxvBj"], ["太阳", "余晖", "2/04/04/kxyZp"],],
  Mar22: [["Telsaの的折耳猫", "赛场", "2/04/04/kxgcU"], ["Telsaの的折耳猫", "树林", "2/04/04/kxpMY"], ["Telsaの的折耳猫", "操场", "2/04/04/kxJ7v"], ["Ivana", "从窗而来", "2/04/04/kxPLq"], ["Ivana", "与黑板", "2/04/04/kxRXc"], ["Ivana", "许久不见", "2/04/04/kx4zr"],],
  Apr22: [["梦颜", "窗边的", "2/04/04/kxGZI"], ["梦颜", "所盼", "2/04/04/kxET1"], ["酸子", "牡丹", "2/04/04/kx0OF"], ["酸子", "压枝", "2/04/04/kxc76"], ["酸子", "纹", "2/04/04/kxQcD"], ["酸子", "花间", "2/04/04/kxdLP"], ["酸子", "园中", "2/04/04/kxsub"], ["酸子", "芽", "2/04/04/kxYzl"], ["夜枯", "花落", "2/04/04/kxfPg"], ["夜枯", "暝", "2/04/04/kxl9B"], ["夜枯", "识月", "2/04/04/kxjTs"], ["夜枯", "世间烂漫", "2/04/04/kx2vK"], ["夜枯", "市光", "2/04/04/kx6da"], ["夜枯", "飘雪", "2/04/04/kxXOS"], ["夜枯", "染", "2/04/04/kxuNN"], ["夜枯", "晨光", "2/04/04/kx3uL"], ["夜枯", "上灯", "2/04/04/kxILC"], ["夜枯", "扬", "2/04/04/kxwFi"], ["夜枯", "晨", "2/04/04/kzMPX"], ["夜枯", "眺", "2/04/04/kzO9t"], ["夜枯", "将落", "2/04/04/kzoUx"], ["夜枯", "未落", "2/04/04/kz5dp"], ["夜枯", "正落", "2/04/04/kzqvj"], ["夜枯", "升", "2/04/04/kzWEv"], ["夜枯", "已落", "2/04/04/kzTaU"], ["夜枯", "共徘徊", "2/04/04/kzUNY"], ["夜枯", "虹", "2/04/04/kzbIq"], ["夜枯", "鳞", "2/04/04/kzxFc"], ["夜枯", "层", "2/04/04/kzzRr"], ["夜枯", "绽樱", "2/04/04/kzFjM"], ["夜枯", "读书吧", "2/04/04/kziUG"], ["夜枯", "四月又至", "2/04/04/kzny1"], ["℃", "正盛", "2/04/06/kruYq"], ["℃", "热爱", "2/04/06/krXmv"], ["即兴", "熙攘", "2/04/06/kr26U"], ["即兴", "归", "2/04/06/kr8bY"], ["即兴", "向晚", "2/04/06/krj4p"], ["William", "余日", "2/04/09/kHSkL"], ["William", "望山", "2/04/09/kH0pi"], ["ttgz", "花语", "2/04/09/kHG6C"], ["ttgz", "樱花下", "2/04/09/kHs5t"], ["ttgz", "一枝", "2/04/09/kHcYX"], ["ttgz", "新发", "2/04/09/kHVKx"], ["ttgz", "投", "2/04/09/kHYSj"], ["Yurosan", "楼心", "2/04/10/k0AwB"], ["小佗", "花下", "2/04/10/k0vDK"], ["小佗", "向阳", "2/04/10/k0Zns"], ["酸子", "群楼", "2/04/18/xBt21"], ["酸子", "嫣", "2/04/18/xBDWI"], ["酸子", "筑", "2/04/18/xBPiM"], ["酸子", "檐牙", "2/04/18/xBRtG"], ["酸子", "廊", "2/04/18/xBp3r"], ["秤砣", "不候", "2/04/18/xBHgD"], ["秤砣", "盼", "2/04/18/xBLVF"], ["秤砣", "落英", "2/04/18/xBGo6"], ["秤砣", "夹道", "2/04/18/xBQrP"], ["太阳", "河畔", "2/04/20/xJYNY"], ["太阳", "与樱", "2/04/20/xJjFc"], ["太阳", "归途", "2/04/20/xJVaU"], ["太阳", "亭外", "2/04/20/xJlIq"], ["太阳", "于观景台", "2/04/20/xJfEv"], ["ALPEISN", "云壤", "2/04/27/x2VpX"], ["ALPEISN", "叶上海", "2/04/27/x2lBx"], ["ALPEISN", "栾与棚", "2/04/27/x2Yft"], ["ALPEISN", "旗杆", "2/04/27/x2sxi"], ["ALPEISN", "我中使命", "2/04/27/x2c8L"], ["ALPEISN", "寂", "2/04/27/x29Kj"], ["ALPEISN", "已暝", "2/04/27/x2j0p"], ["ALPEISN", "长焦之外", "2/04/27/x26MU"], ["ALPEISN", "光变", "2/04/27/x281Y"],],
  May22: [["小雨到处跑", "老街", "2/05/03/z15XD"], ["小雨到处跑", "新市", "2/05/03/z1qHI"], ["小雨到处跑", "石鼓", "2/05/03/z1McM"], ["小雨到处跑", "渭河", "2/05/03/z1o71"], ["小雨到处跑", "欲暝", "2/05/03/z1aMG"], ["小雨到处跑", "丰茂", "2/05/03/z1TzF"], ["小雨到处跑", "晃", "2/05/03/z1UJ6"], ["小雨到处跑", "对岸", "2/05/03/z1WlP"], ["小雨到处跑", "连", "2/05/03/z1kTb"], ["程程", "球场漫步", "2/05/11/zfQJt"], ["程程", "一隅", "2/05/11/zfcBj"], ["程程", "净空", "2/05/11/zfSlx"], ["头", "望联盟桥", "2/05/11/zfLXi"], ["沉积岩", "被劈开的云", "2/05/11/zfGxX"], ["Bittersweet", "撷", "2/05/15/z37jN"], ["Bittersweet", "我们", "2/05/15/z3ryL"], ["Bittersweet", "瞥", "2/05/15/z31RS"], ["Bittersweet", "框", "2/05/15/z3nha"], ["Bittersweet", "回不去的梦", "2/05/15/z3eUC"], ["Bittersweet", "子虚", "2/05/15/z3Asi"], ["沉积岩", "槐", "2/05/15/z3ZaX"], ["寒香", "梅", "2/05/24/h4NZl"], ["凌球", "观", "2/06/03/nQ1vD"], ["凌球", "幢", "2/06/03/nQ7dF"],],
  June22: [["纸某鹿", "片云", "2/06/28/NiuFX"], ["纸某鹿", "落", "2/06/28/Ni8Ii"], ["纸某鹿", "朦胧", "2/06/28/NiIRt"], ["纸某鹿", "一米", "2/06/28/NiwUj"], ["纸某鹿", "夕日", "2/06/28/Ni3jx"], ["纸某鹿", "浮光", "2/06/28/NnMyp"], ["纸某鹿", "眺", "2/06/28/NnOsU"], ["纸某鹿", "松", "2/06/28/Nnqev"], ["纸某鹿", "一别", "2/06/28/Nn5Gq"], ["四郎", "叶下", "2/06/28/NnoaY"], ["四郎", "云间", "2/06/28/NnBIc"], ["33", "那次日落", "2/06/28/NnUhr"], ["33", "在树之间", "2/06/28/NnWtM"], ["33", "光的印迹", "2/06/28/NnbjG"], ["无情小明", "护", "2/06/28/NnxW1"], ["无情小明", "走向", "2/06/28/NnzyI"], ["无情小明", "土地", "2/06/28/NnFsD"], ["无情小明", "浮云", "2/06/28/NnioF"], ["无情小明", "铁路", "2/06/28/Nn1GP"], ["无情小明", "训练", "2/06/28/Nn73b"], ["无情小明", "觅云", "2/06/28/Nnne6"], ["无情小明", "见云", "2/06/28/Nnehl"], ["无情小明", "羡云", "2/06/28/Nnrtg"], ["无情小明", "芳道", "2/06/28/NnY4r"], ["无情小明", "挂银", "2/06/28/NndCq"], ["无情小明", "披雪", "2/06/28/NncQv"], ["无情小明", "浸白", "2/06/28/Nn0rY"], ["无情小明", "方砖", "2/06/28/NnVic"], ["无情小明", "十月廿三申时", "2/06/28/Nnf6M"], ["无情小明", "酉时不见月", "2/06/28/Nn9bG"], ["无情小明", "映河", "2/06/28/Nn2VI"], ["ALPEISN", "织空", "2/06/28/Nnjm1"], ["糸守", "暮语", "2/06/28/Nn8qD"], ["糸守", "偏撷", "2/06/28/NnXAF"], ["33", "可燃", "2/06/28/NnuQ6"], ["33", "尽染", "2/06/28/NnICP"],],
  July22: [["硫酸锌不要酸", "游云.png", "2/07/03/N0Maj"], ["四郎", "云衾", "2/07/03/N0Oep"], ["四郎", "于维也纳", "2/07/03/N0aGU"], ["四郎", "瓦上云", "2/07/21/rB7SM"], ["四郎", "叶间楼", "2/07/21/rBNCG"], ["四郎", "林中花", "2/07/21/rBrn1"], ["风吹不过江川", "映空", "2/07/28/r4y5p"], ["风吹不过江川", "日暮", "2/07/28/r4gKU"], ["风吹不过江川", "意中云", "2/07/28/r4Kpx"], ["风吹不过江川", "绪难平", "2/07/28/r4ZYj"], ["拾汘", "层峦叠嶂", "2/07/28/r4Akt"], ["拾汘", "野望", "2/07/28/r4mSY"], ["拾汘", "霞观", "2/07/28/r4pwv"], ["拾汘", "漩云", "2/07/28/r4P1q"], ["拾汘", "岸上塔", "2/07/28/r4RDc"], ["拾汘", "晨光荷", "2/07/28/r4t8r"], ["拾汘", "云蔽日", "2/07/28/r4DxM"], ["拾汘", "柳前路", "2/07/28/r4HpG"], ["拾汘", "游园", "2/07/28/r4Lf1"], ["Dolores", "Tyndall", "2/07/28/r4G5I"], ["Dolores", "Morning", "2/07/28/r4QKD"], ["Dolores", "Lake", "2/07/28/r4S0F"], ["Dolores", "Cloud", "2/07/28/r40w6"], ["Dolores", "Road", "2/07/28/r4d1P"],],
  Sept22: [["鱼征", "行空", "2/10/07/ptLkF"], ["鱼征", "暗橘", "2/10/07/ptZbY"], ["鱼征", "行廊", "2/10/07/pttn1"], ["鱼征", "昇", "2/10/07/ptEm6"], ["鱼征", "蔽", "2/10/07/ptvmv"], ["鱼征", "后生", "2/10/07/ptmqc"], ["鱼征", "远光", "2/10/07/ptyYq"], ["鱼征", "流纹", "2/10/07/ptpAr"], ["鱼征", "", "2/10/07/ptJSM"], ["鱼征", "云啮", "2/10/07/ptPCG"], ["鱼征", "与光同程", "2/10/07/pt44I"], ["鱼征", "云云", "2/10/07/ptD6D"], ["鱼征", "云云云", "2/10/07/ptGYP"], ["鱼征", "云云云云", "2/10/07/ptS5b"], ["鱼征", "云云云云日", "2/10/07/pt0Al"], ["伪装孤独", "黄昏", "2/10/07/ptcSg"],],
  Oct22: [["KT", "乒乒乓乓", "2/10/07/pt9kS"], ["KT", "东云", "2/10/07/ptVns"], ["KT", "夜月", "2/10/07/ptdwB"], ["KT", "问晨", "2/10/07/ptf8a"], ["KT", "筐日", "2/10/07/ptYDK"], ["KT", "觅空", "2/10/07/ptjpN"], ["KT", "楼后", "2/10/07/p4M8p"], ["KT", "纸浅", "2/10/07/p4axU"], ["KT", "望红", "2/10/07/p4opY"], ["KT", "携月", "2/10/07/ptC1x"], ["KT", "其会", "2/10/07/ptwDj"], ["prlgrim", "午后", "2/10/26/PfBnI"], ["prlgrim", "柳上云", "2/10/26/Pfqw1"], ["纸某鹿", "AI朝霞", "2/10/26/PfLlq"], ["纸某鹿", "AI日出", "2/10/26/PfHJv"], ["纸某鹿", "AI日落", "2/10/26/PfDxY"], ["纸某鹿", "AI远峰落日", "2/10/26/PftXU"],],
  End22: [["呱唧", "山望", "2/12/16/HBqoL"], ["呱唧", "瞰林", "2/12/16/HBBGX"], ["呱唧", "朦云", "2/12/16/HB5ri"], ["呱唧", "云驻", "2/12/16/HBasC"], ["鱼柾", "遮(冬季限定)", "2/12/16/HBOgN"],],
  Jan23: [["酸子", "云中印象", "3/01/03/E8Lwa"], ["酸子", "镜中暮", "3/01/03/E8HSK"], ["酸子", "穹下楼影", "3/01/03/E845B"], ["酸子", "枝上有佳果", "3/01/03/E8GnS"], ["酸子", "谁人窗中晖", "3/01/03/E8DAs"], ["猴墩", "花下行", "3/01/05/Ge8qq"], ["猴墩", "窥篁", "3/01/05/Ge9bU"], ["猴墩", "不忘初心", "3/01/05/GejgY"], ["猴墩", "馆中灯火", "3/01/05/Gef2p"], ["猴墩", "楼林蔽空", "3/01/05/Ge2Vv"],],
  Dec23: [["Kc", "鳞光", "3/12/16/OK53vX"], ["Kc", "追梦", "3/12/16/OK5Cdt"], ["Kc", "运动会", "4/04/06/Om1hz6"], ["Kc", "马路与车", "4/04/06/Om17Tl"], ["Kc", "夜下楼", "4/04/06/Om1iPP"], ["氚", "晨云", "4/04/06/Om1zuF"], ["氚", "海上日", "4/04/06/Om1n9b"], ["氚", "黄昏", "4/04/06/Om1Nvg"], ["氚", "金黄", "4/04/06/Om1edB"], ["氚", "鲸", "4/04/06/Om1AOs"], ["氚", "铃", "4/04/06/Om1KNK"], ["氚", "暮阳", "4/04/06/Om1ZEa"], ["氚", "暮云", "4/04/06/Om1vuS"], ["氚", "跑道", "4/04/06/Om1gFN"], ["氚", "棚上光", "4/04/06/Om1mPC"], ["氚", "洒金廊", "4/04/06/Om1p9L"], ["氚", "网中暮", "4/04/06/Om1PUi"], ["氚", "无患子", "4/04/06/Om1RvX"], ["氚", "祥", "4/04/06/Om1tdt"], ["氚", "烟青", "4/04/06/Om1Dax"], ["氚", "运动会", "4/04/06/Om1HNj"], ["氚", "皂荚", "4/04/06/Om1LEp"], ["虛偽艺术家_245", "场地", "4/04/06/Om1EIU"], ["虛偽艺术家_245", "枫叶之下", "4/04/06/Om1QFY"], ["虛偽艺术家_245", "枫枝", "4/04/06/Om1SRv"], ["虛偽艺术家_245", "枫", "4/04/06/Om7aGK"], ["虛偽艺术家_245", "建", "4/04/06/Om13yl"], ["虛偽艺术家_245", "街上", "4/04/06/Om7MoB"], ["虛偽艺术家_245", "栏", "4/04/06/Om1Csg"], ["虛偽艺术家_245", "楼", "4/04/06/Om7Oes"], ["虛偽艺术家_245", "楼与树", "4/04/06/Om7o3a"], ["虛偽艺术家_245", "树", "4/04/06/Om75hS"], ["虛偽艺术家_245", "眺", "4/04/06/Om7BtN"], ["虛偽艺术家_245", "卫生所", "4/04/06/Om7TjC"], ["虛偽艺术家_245", "行知", "4/04/06/Om7WWL"], ["虛偽艺术家_245", "圆月", "4/04/06/Om7bgi"], ["虛偽艺术家_245", "志学路", "4/04/06/Om7ksX"],],
  May24: [["羊羽", "万里风鹏举", "4/05/11/OJU3HL"], ["羊羽", "云与楼与树", "4/05/11/OJUI1C"], ["羊羽", "石鼓金辉", "4/05/11/OJU80S"], ["羊羽", "暮中剪影", "4/05/11/OJUuMN"], ["羊羽", "樱下街边隅", "4/05/11/OJUCXi"], ["羊羽", "垂丝海棠色", "4/05/11/OJWMxX"], ["羊羽", "日落大道", "4/05/13/OJzih6"], ["羊羽", "在路上", "4/05/13/OJzzGD"], ["羊羽", "黄昏的云", "4/05/13/OJzko1"], ["羊羽", "虹", "4/05/13/OJzF3F"], ["羊羽", "天际线", "4/05/13/OJzxeI"], ["羊羽", "水面白鹅", "4/05/13/OJzntP"], ["羊羽", "晚霞", "4/05/13/OJz12b"], ["羊羽", "远山", "4/05/13/OJzNWl"],],
  Oct24: [["氚", "石中天", "4/10/07/ODMG5a"], ["氚", "草", "4/10/07/ODMQAS"], ["氚", "晨望", "4/10/07/ODMHms"], ["氚", "荷包牡丹", "4/10/07/ODMLYK"], ["氚", "花落", "4/10/07/ODMSSN"], ["氚", "射者中", "4/10/07/ODMsDi"], ["氚", "生叶", "4/10/07/ODMV6X"], ["氚", "树", "4/10/07/ODMfkt"], ["氚", "伟人之思", "4/10/07/ODMlpx"], ["氚", "斜阳", "4/10/07/ODM9Yj"], ["氚", "学院纹理", "4/10/07/ODM25p"], ["氚", "叶间光影", "4/10/07/ODM6KU"], ["氚", "叶之廓", "4/10/07/ODM8SY"], ["氚", "一筐", "4/10/07/ODMXwv"], ["氚", "影", "4/10/07/ODMI1q"], ["氚", "月", "4/10/07/ODM3Dc"], ["氚", "知识摄食", "4/10/07/ODMC8r"], ["氚", "中心之外", "4/10/07/ODOMxM"],],
  Nov24: [["杨sy", "钟意其云", "4/11/13/OHmjet"], ["杨sy", "日暮与晖", "4/11/13/OHm9aX"], ["杨sy", "操场之望", "4/11/13/OHm2Gx"], ["杨sy", "旷穹一云", "4/11/13/OHmYyL"], ["杨sy", "眺望此空", "4/11/13/OHmfsi"], ["蘇白河", "光合", "4/11/13/OHpgqi"], ["蘇白河", "青黄相接", "4/11/13/OHppQt"], ["蘇白河", "栅外栅上叶", "4/11/13/OHpmrX"], ["蘇白河", "先贤像", "4/11/13/OHpJCx"], ["蘇白河", "剪影", "4/11/13/OHpe4a"], ["蘇白河", "银杏中“学”", "4/11/13/OHpNiK"], ["蘇白河", "和谐与叶", "4/11/13/OHp13s"], ["蘇白河", "桠下新枝", "4/11/13/OHpnQB"], ["蘇白河", "根蘖叶芽", "4/11/13/OHpirg"], ["蘇白河", "楼宇外墙", "4/11/13/OHphol"], ["蘇白河", "亦行亦知", "4/11/13/OHpzVb"], ["蘇白河", "舞绿泼黄", "4/11/13/OHpxgP"], ["蘇白河", "桐叶遮幕", "4/11/13/OHpW2F"], ["蘇白河", "楼枫一色", "4/11/13/OHpkW6"], ["蘇白河", "绽金飘瑙", "4/11/13/OHpUtD"], ["蘇白河", "灿叶净空", "4/11/13/OHp531"], ["蘇白河", "红枫绿幕", "4/11/13/OHpThI"], ["蘇白河", "何人孟冬拾落黄，留得西南孤韧枝", "4/11/13/OHpqGG"], ["蘇白河", "碎金压枝低，白宣不复明", "4/11/13/OHporM"], ["蘇白河", "宝枝因重斜", "4/11/13/OHmwgq"], ["蘇白河", "片鹅缀枝", "4/11/13/OHpMsc"], ["蘇白河", "一棵", "4/11/13/OHpaor"], ["蘇白河", "卷叶", "4/11/13/OHm6Ij"], ["蘇白河", "两棵", "4/11/13/OHmCWv"], ["蘇白河", "夹道银杏", "4/11/13/OHmIjY"], ["蘇白河", "路边", "4/11/13/OHmXhp"], ["蘇白河", "楼间树下", "4/11/13/OHmutU"],],
  Dec24: [["Eatong", "灿光", "4/12/08/OLdvyr"], ["Eatong", "黄昏", "4/12/08/OLdAjq"], ["Eatong", "柳影", "4/12/08/OLdmaG"], ["Eatong", "暮云", "4/12/08/OLdZUc"], ["Eatong", "日下", "4/12/08/OLdrRv"], ["Eatong", "园趣", "4/12/08/OLdysM",], ["芈月晗", "掠影", "4/12/15/OLwZDC"]],
};

const galleryFlated = Object.entries(gallery).flatMap(([vol, picInfos]) =>
  picInfos.map(([author, name, shortURL]) => ({
    vol, author, name, url: `https://ooo.0x0.ooo/202${shortURL}.jpg`,
  }))
)

function bg(vol) {
  bg.cur = getBg(vol);
  // 重新设置换壁纸定时
  clearInterval(bg.interval);
  bg.interval = setInterval(bg, 2E6);
  document.body.style.backgroundImage = `url(${bg.cur.url})`;
  return document.getElementById("bg").innerHTML = `背景: ${bg.cur.author} - ${bg.cur.name} (${bg.cur.vol})`;
}

function getBg(vol) {
  if (vol in gallery) {
    const [author, name, shortURL] = gallery[vol][~~(Math.random() * gallery[vol].length)];
    return { vol, author, name, url: `https://ooo.0x0.ooo/202${shortURL}.jpg` };
  }
  return galleryFlated[~~(Math.random() * galleryFlated.length)];
}

!function loadBgVolList() {
  const volList = document.getElementById("bgVolList");
  const volReversed = Object.keys(gallery).reverse();
  volReversed.forEach(volName => {
    const a = document.createElement("a");
    a.innerText = `${volName}(${gallery[volName].length})`;
    a.onclick = () => playCover(bg(volName));
    volList.appendChild(a);
  });
}();

bg(Object.keys(gallery).at(-1));
