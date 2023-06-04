
package web.components{

    @WebComponent
    declare class Component implements IEventDispatcher {
        static getAttribute<T>(target:Component,name:string):T;
        static getPolyfillValue(value:any, name:string, classModule:class<any>):any;
        public constructor(props?:{[key:string]:any});
        protected onInitialized():void;
        protected onBeforeMount():void;
        protected onMounted():void;
        protected onBeforeUpdate():void;
        protected onUpdated():void;
        protected onBeforeUnmount():void;
        protected onUnmounted():void;
        protected onActivated():void;
        protected onDeactivated():void;
        protected onErrorCaptured():void;
        protected receivePropValue<T>(value:T,name:string):T;
        protected beforeReceiveProp(value:any,name:string):boolean;
        protected render():VNode | Component;
        public get parent():Component;
        public get children():Component[];
        public get element():HTMLElement;
        public getParentComponent( filter:boolean | (child?:Component)=>boolean ):Component;
        public getConfig():object;
        public slot( name:string , scope?:boolean, called?:boolean, params?:object ):VNode|Component[];
        public createVNode(name:string|Component,data?:VNodeDataConfig,children?:VNode|Component[]):VNode;
        public getRefs<T=NodeElementType | NodeElementType[]>(name:string):T;
        public provide(name:string, provider:()=>any):void;
        public inject<T=any>(name:string, from?:string, defaultValue?:T):T;
        public forceUpdate();
        public on(type: string, listener:(...args)=>void):void;
        public off(type: string, listener?:(...args)=>void):void;
        public emit(type: string, ...args?:any[]):void;
        public watch(name: string, callback:(uewVlaue?,oldValue?)=>void, options?:boolean | {immediate?:boolean,deep?:boolean}):void;
        public reactive<T>(name:string, value?:T, initValue?:any):T;
        public observable<T extends object>(target:T):T;
        public nextTick(callback:()=>void):void;
        /**
        * 获取原始对象中的属性
        */
        public getAttribute<T>(name:string):T;
        public addEventListener(type: string, listener: (event?:Event)=>void):this;
        public dispatchEvent(event: Event):boolean;
        public removeEventListener(type: string, listener?: (event?:Event)=>void):boolean;
        public hasEventListener(type: string, listener?: (event?:Event)=>void):boolean;
    }

    declare type NodeElementType = HTMLElement | Component;
    
    declare type VNodeDataConfig = {
        props?:{},
        data?:()=>{},
        on?:{},
        style?:{},
        className?:string,
        ref?:string
    };
}



