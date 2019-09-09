//vue面试题
一.vue面试题;

框架
    1.mvvm 框架是什么
    Mvvm定义MVVM是Model-View-ViewModel的简写 即模型-视图-视图模型 模型 指的是后端传递的数据 视图 指的是所看到的                 页面  视图模型 mvvm模式的核心,它是连接view和model的桥梁 它有两个方向:
    一是将 模型  转化成 视图 即将后端传递的数据转化成所看到的页面 实现的方式是:数据绑定
    二是将 视图 转化成 模型, 即将所看到的页面转化成后端的数据 实现的方式是:DOM 事件监听 这两个方向都实现的,我们称之为数        据的双向绑定
    总结:在MVVM的框架下视图和模型是不能直接通信的 它们通过ViewModel来通信,ViewModel通常要实现一个observer观察者,当数据发         生变化,ViewModel能够监听到数据的这种变化,然后通知到对应的视图做自动更新,而当用户操作视图,ViewModel也能监听到视图的变化       然后通知数据做改动,这实际上就实现了数据的双向绑定
    2.mvc 框架是什么
    MVC的定义:MVC是Model-View- Controller的简写 即模型-视图-控制器 M和V指的意思和MVVM中的M和V意思一样 C即Controller指的是        页面业务逻辑 使用MVC的目的就是将M和V的代码分离  MVC是单向通信 也就是View跟Model,必须通过Controller来承上启下MVC
    MVVM的区别并不是VM完全取代了C ,ViewModel存在目的在于抽离Controller中展示的业务逻辑,而不是替代Controller,其它视图操作业       务等还是应该放在Controller中实现 也就是说MVVM实现的是业务逻辑组件的重用

生命周期函数面试题
    1.什么是vue生命周期
        Vue实例有一个完整的生命周期,也就是从开始创建 初始化数据 编译模板 挂载DOM 渲染 一 更新 卸载等一系列过程
        (通俗话讲 就是Vue实例从创建到销毁的过程)
    2.vue生命周期的作用是什么
        它的生命周期中有多个事件钩子,让我们在控制整个Vue实例的过程时更容易形成好的逻辑
    3.vue生命周期总共有几个阶段
        它可以总共分为8个阶段 创建前/后, 载入前/后,更新前/后,销毁前/销毁后
    4.第一次页面加载会触发哪几个钩子
        第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子
    5.简述每个周期具体适合哪些场景
        生命周期钩子的一些使用方法 : beforecreate : 可以在这加个loading事件,在加载实例时触发 created : 初始化完成时的事件写在        这里,如在这结束loading事件,异步请求也适宜在这里调用 mounted : 挂载元素,获取到DOM节点 updated : 如果对数据统一处理,在         这里写上相应函数 beforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom
    6.created和mounted的区别
        created:在模板渲染成html前调用,即通常初始化某些属性值,然后再渲染成视图
        mounted:在模板渲染成html后调用,通常是初始化页面完成后,再对html的dom节点进行一些需要的操作
    7.vue获取数据在哪个周期函数
        created

vue路由面试题
    1.vue-router 是什么? 它有哪些组件
        vue-router是Vue.js官方的路由插件,它和vue.js是深度集成的,适合用于构建单页面应用 vue的单页面应用是基于路由和组件的,路由        用于设定访问路径,并将路径和组件映射起来 传统的页面应用 是用一些超链接来实现页面切换和跳转的 在vue-router单页面应用中         ,则是路径之间的切换,也就是组件的切换
    2. active-class 是哪个组件的属性?
        router-link
        设置 链接激活时使用的 CSS 类名 默认值可以通过路由的构造选项 linkActiveClass 来全局配置
    4.怎么定义 vue-router 的动态路由? 怎么获取传过来的值
         创建组件 引入组件
         定义路由 path配置组件路径(动态路由加: /"内容" )
         实现路由跳转 router-link (加参数)
         this.$route.params
    5.vue-router 有哪几种导航钩子?
         全局导航钩子
            beforeEach
            beforeResolve
            afterEach
         某个路由独享的导航钩子
            beforeEnter
         路由组件上的导航钩子
            beforeRouteEnter
            beforeRouteUpdate (2.2 新增)
            beforeRouteLeave
    6.$route 和 $router 的区别
         this.$route相当于当前激活的路由对象 包含当前url解析得到的数据 可以从对象里获取一些数据,如name,path等
         this.$router是VueRouter的实例方法,当导航到不同url,可以使用this.$router.push方法,这个方法则会向history里面添加一条记         录,当点击浏览器回退按钮或者this.$router.back()就会回退之前的url
    7.vue-router响应路由参数的变化
         watch (监测变化) $route
         beforeRouteUpdate
    8.vue-router传参
         get方法 <router-link :to="{path:'/test',query: {name: id}}">跳转</router-link>
            接收值 this.$route.query.name
         post方法 <router-link :to="{path:'/test',push: {name: id}}">跳转</router-link>
            接收值 this.$route.query.name
         路由方法
             props:{name:{required:false,default:''}}
    9.vue-router的两种模式
         vue-router 默认 hash 模式,还有一种是history模式
         hash模式的工作原理是hashchange事件,可以在window监听hash的变化.我们在url后面随便添加一个#xx触发这个事件
         history模式把window.history对象打印出来可以看到里边提供的方法和记录长度
    10.vue-router实现路由懒加载(动态加载路由 )
        vue异步组件 component: resolve => require(['@/components/home'],resolve)
        es提案的import() const About = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/about')
        webpack的require,ensure() component: r => require.ensure([], () => r(require('@/components/home')), 'demo')

vue常见面试题
    1.vue是什么
        Vue是一个渐进式的javascript开发框架,通过组件的开发,最后进行组件的组合,合并组件形成页面
        自动化构建工具
        构造器(构造函数)
    2.vue优点
        组件化开发
        单页面路由
        丰富的Api方法
        双向的数据绑定
        单向数据流
        易于结合其他第三库
    3.vue父组件向子组件传递数据?
        父组件的data中定义值,引入并调用子组件,在引用的子组件的标签上通过v-bind指令给子组件传值,子组件通过在data中定义的              props属性接收父组件传过来的值然后应用到子组件里
            子组件接受的父组件的值分为  引用类型和普通类型两种
            普通类型:字符串(String) 数字(Number) 布尔值(Boolean) 空(Null)
            引用类型:数组(Array) 对象(Object)
            其中,普通类型是可以在子组件中更改,不会影响其他兄弟子组件内同样调用的来自父组件的值
            但是,引用类型的值,当在子组件中修改后,父组件的也会修改
    4.子组件像父组件传递事件?
        this.$emit('message', '第一个参数', '第二个参数');
            message在父组件  <div @message="getMyEvent"></div>
    5.v-show和v-if指令的共同点和不同点
        v-if是根据后面数据的真假值判断直接从Dom树上删除或重建元素节点
        v-show只是在修改元素的css样式,也就是display的属性值,元素始终在Dom树上
    6.如何让CSS只在当前组件中起作用
        <style scoped></style>
    7.<keep-alive></keep-alive>的作用是什么?
        <keep-alive>是Vue的内置组件,能在组件切换过程中将状态保留在内存中,防止重复渲染DOM
        <keep-alive> 包裹动态组件时,会缓存不活动的组件实例,而不是销毁它们 和 <transition> 相似,<keep-alive>是一个抽象组           件:它自身不会渲染一个 DOM 元素,也不会出现在父组件链中
    8.如何获取dom
        Vue提供的ref属性以及this.$refs即可实现
        <div ref='box'  v-on:click="changeText()">这是一个盒子</div>
        changeText: function() {
            this.$refs.box.innerHTML = "改变盒子的文字";
        }
    9.说出几种vue当中的指令和它的用法?
        v-if 判断是否隐藏
        v-show 控制的隐藏出现,只是将css属性设为了display:none 或block;
        v-for 进行列表和表格的渲染
        v-bind 绑定属性
        v-model 双向数据绑定
        v-html 获取html标签
        v-text不解释标签
    10.vue-loader是什么?使用它的用途有哪些?
        vue-loader是解析 .vue 文件的一个加载器,跟 template/js/style转换成 js 模块;
        用途:js可以写es6 style样式可以scss或less template可以加jade等
    11.为什么使用key
        vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等 , 因为vue组件高度复用增加Key可以标识组件的唯一性           ,为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM
    12.axios及安装
        npm install axios --save
    13.为什么要有跨域限制
        跨域:指的是浏览器不能执行其他网站的脚本 它是由浏览器的同源策略造成的,是浏览器对javascript施加的安全限制
        同源策略(Same origin policy)是一种约定,它是浏览器最核心也最基本的安全功能.如果缺少了同源策略,则浏览器的正常功能             可能都会受到影响 可以说 Web 是构建在同源策略基础之上的,浏览器只是针对同源策略的一种实现
        因为存在浏览器同源策略,所以才会有跨域问题
    14.axios解决跨域


