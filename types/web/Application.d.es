package web{
  
    import web.components.NodeElementType
    import web.components.VNodeDataConfig
    import web.components.Router;
    import web.components.RouteConfig;
    import web.components.Component;

    declare class Application extends EventDispatcher{

        constructor( options?:object );

        /**
        * 获取应用实例
        * 此访问器在子类中不可重写
        * @return object
        */
        final get app():any

        /**
        * 获取一个路由器的实例
        * @return web.components.Router;
        */
        get router():Router

        /**
        * 获取路由配置
        * return RouteConfig[];
        */
        get routes():RouteConfig[];

        /**
        * 获取子级组件
        */
        get children():Component[];

        /**
        * 获取一个语言包实例，通常为 i18n 这种实例对象
        * return object;
        */
        get locale():object

        /**
        * 获取一个全局数据存储实例，通常为 Store 这种实例对象
        * return object;
        */
        get store():object

        get element():Element;

        /**
        * 获取需要混入全局的方法
        * return object;
        */
        mixin(name:string, method:Function):this;
        provide(name:string, value:any):this;
        plugin( plugin:any ):this;

        /**
        * 子级元素渲染方法，此方法必须在子类中重写。
        */
        render( createElement? ):VNode | Component
        
        getRefs<T=NodeElementType | NodeElementType[]>(name:string):T;

        getAttribute<T>(name:string):T;

        createVNode(name:string|Component,data?:VNodeDataConfig,children?:VNode|Component[]):VNode;

        /**
        * 挂载并显示整个应用的页面
        */
        mount(el:string | Node):void
        unmount():void; 
    }
}