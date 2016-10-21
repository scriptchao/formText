$('.project').keyup(function(){
    var value = $(this).val();
    $(this).next().html(~value.indexOf(' ') ? '项目名称不能为空' : '')
});


//正则表达式
//Regular Expression
//RegExp
//正则表达式字面量

var reg1 = /a/; //匹配a的字符

//实例化正则对象

var reg2 = new RegExp('a');
console.log(typeof reg2);

//字符串结合正则

//字符串的正则匹配方法search
//类似indexOf,但是参数可接受正则表达式，返回值是正则表达式匹配到的下标
console.log('\ta'.search(reg1));

//字符串的replace方法第一个参数也能接受正则表达式,替换被匹配的内容
console.log('\tcat'.replace(reg2,'u'));
// 字符串的split方法也能接受正则表达式，根据正则表达式的规则进行字符串的切割
console.log('\tcat'.split(reg2));

//字符串的match方法,返回匹配到的字符串部分的集合
console.log('\tcata'.match(reg1));



//正则对象的匹配方法

//test去检测字符串是否有匹配到正则表达式
//返回值是true或false
console.log(reg1.test('\tcat'));

//正则表达式规则
console.log(/aaa/.test('aada'));

//标识符
//i
//ignore case 不区分大小写
console.log(/asdf/i.test('Asdf'));

//g
//global匹配所有,全局
console.log('asdfasdfasdf'.match(/asdf/g));

console.log('ASdfasdfasdf'.match(/asdf/gi)); //标识符可以连用

//特殊元字符
//\t即匹配制表符
//tab
console.log('asdfas\tdfasdf'.match(/\t/));
//\r匹配回车键 return
//\n匹配换行符 newline



//\s空格以及制表符以及换行符
//space
console.log('asd   \r fas df  asdf'.match(/\s/g));
//\d匹配0到9的数字
//digit
console.log('24234sdf23432'.match(/\d/g));
console.log('24234sdf23432'.match(/\D/g));
//大写是对当前的元字符进行取反
//\w匹配到0到9的数字  大小写英文字母 下划线
//word

//\b
//block匹配单词边界 //是否以inter开头或结尾！！！
console.log('internationalization'.match(/\w*\b/));

//.
//匹配所有
console.log('fsdafsdf23q4\r2354^%&&**(%&*98'.match(/./g));// \r会理解成转义符

//\转义
//  ()[].\/?+*^$
console.log('()'.match(/\(\)/g));
console.log('[]'.match(/\[\]/g));
console.log('\\b'.match(/\\b/));


//中括号区间 里面是或
console.log('21342343'.match(/[0123]/g));//匹配0或1或2或3
//0-5 0到5
console.log('21342343'.match(/[0-5]/g));
//a-z a到z
//A-Z A到Z
//a-zA-Z
console.log('sfdfklsAFSFSLKF'.match(/[a-zA-Z]/));

//[[]] 你懂的！！！
console.log('sfdsfe'.match(/[adsf]/g));

console.log('sdfds  dsfsd\tfsf  fsdsd'.match(/[\w\s]/g));//有中括号是或
console.log('sdfds  dsfsd\tfsf  fsdsd'.match(/\w\s/g));//这个是&&

//^d对中括号内的数字取反  注意必须要有中括号 /[^\d\w]/
console.log(/[(^\s)\s]/g.test(' ')); //既不是也不是

//数量级
//单独使用时表示数量级尽量多的去匹配 ，贪婪


//*匹配前一个规则任意次  ！！！{0,}
console.log('123'.match(/\d*/));
console.log('frsd24235dsd&(*&^*%'.match(/\d*/g));//没有g就只是匹配一次 匹配到了一个空''
console.log('dsfdfsd3253*df'.match(/[\d*]/g));//中括弧里面的就是*

//？ 匹配前一个规则0次或一次{0,1}
console.log('123'.match(/\d?/));

//+ 匹配至少一次 {1,}
console.log('123'.match(/\d+/g));

//{}自定义匹配前一个规则的次数,匹配前一个规则m次至n次
//{m}匹配前一个规则M次 ，只能是两次
//{m,}匹配前一个至少m次
//{0,m}匹配前一个规则至多m次
console.log('123dfgds334'.match(/\d{1,2}/g));

//在规则的数量级之后加？ 表示知足模式


//^以后面的规则由字符串开始  注意 是非中括号的
console.log('12fsd343'.match(/^\d/));


//$以前面的规则由字符串结束

//
var str = '12345456661';
console.log(/^1[3578]\d{9}$/.test(str));


//^以后面的规则由字符串开始  注意 是非中括号的
console.log('12fsd343'.match(/^\d/));//其实就是在匹配'和\d

//$以前面的规则结束
console.log('34dfds343d'.match(/\d$/)); //其实就是匹配\d和'

console.log('afgd2345235'.match(/\d/));

//()表示分组
console.log('asd11d2asd3d5'.match(/as(d\d)+/g));

//  |表示或者

/*

function People(){
    console.log('ddd');
}
var man = new People;
console.log(man);*/

//匹配身份证号码，不计润平年 //小括号里使用?:取消引用，对不必要的小括号引用加上？：可以提高正则表达式的运算效率
console.log("332521196902060091".match(/^((1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[12])\d|8(86|5[23]))\d{3}(19\d{2}|20(0\d|1[0-6]))((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[469]|11)(0[1-9]|[12]\d|30)|02(0[1-9]|[12]\d))\d{3}[\dxX]$/));

//replace
console.log('sf2dsfsd'.replace(/(\w\d)/,'$122222'));

//正则表达式中使用\n可以获取到前面被小括号分组匹配到的内容，并成为正则表达式规则的一部分
console.log('asdf123asdf'.match(/(asdf)123\1/)); //\1使用引用 自身不会多出来
console.log('asdf123\1asdf'.match(/(?:asdf)123\1/)); //字符串里面的\1被理解为ASCII码

//
/*console.log(/^<[^>]+>[\s\w]+<\/[^>]+>$/.test('<div>dssfdsdfd</div>'));*/
//匹配标签
console.log(/^<([a-z]+[a-z\d]*).*>.*<\/\1>$/.test('<script></script>'));
console.log(/<script.*>/.test('<script>'));


//前瞻  //其实和^$很像
//？=肯定前瞻
//?!否定前瞻
//前瞻判定的内容不会移动匹配光标
console.log('asdf123asdf'.match(/asdf(?=\d)/));
console.log('asdf123asdf'.match(/asdf(?!\d)/));








