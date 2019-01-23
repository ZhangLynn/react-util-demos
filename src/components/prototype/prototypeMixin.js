/**
 * created by LynnZhang on 2019/1/23
 */
function Component() {
    this.name = 'component'
}

Component.prototype.getProtoName = function() {
    console.log(this)
};

function PureComponent() {

}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
// 为什么要有ComponentDummy这个类 可以使Component的this属性不会到PureComponent上
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
// 直接让prototype等于某个类实例 prototype会失去构造函数的指向
pureComponentPrototype.constructor = PureComponent;
// 避免属性查找 把PureComponent.prototype.__proto__指针上的getProtoName方法提了一级 直接PureComponent.prototype.getProtoName可以方法
// 如果只想依靠这个浅复制把Component的prototype方法拷贝给pureComponent的prototype 那么原型链就断了
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;




// 本意是想要PureComponent拥有Component的原型上方法
// 这样原型改变 PureComponent也可以接收到改变
// 但是下面这种写法就导致共享一个原型对象引用了
// PureComponent.prototype = prototypeBase;
// PureComponent.prototype.isPure = true;
console.log((new PureComponent).__proto__);
console.log(Component.prototype)
