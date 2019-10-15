import {Injectable} from "@angular/core";
import {RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';

@Injectable({providedIn: 'root'})
export class SimpleReuseStrategy implements RouteReuseStrategy {

    /***用于缓存数据（路由快照及当前组件实例对象）***/
    _cacheRouters: { [key: string]: any } = {};

    /***直接返回 true 表示对所有路由允许复用***/
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // 默认对所有路由复用 可通过给路由配置项增加data: { reuse: true }来进行选择性使用
        // {path: 'search', component: SearchComponent, data: {reuse: true}},
        // 路由跳转前检查路由配置项
        if (route.data.reuse) {
            return true;
        } else {
            return false;
        }
    }

    /***当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象；path等同RouterModule.forRoot中的配置。***/
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // 按path作为key存储路由快照&组件当前实例对象
        // path等同RouterModule.forRoot中的配置
        // 获取路由中的参数部分
        let key = this.getRouteParams(route);
        this._cacheRouters[key] = {
            snapshot: route,
            handle: handle
        };
    }

    /***若 path 在缓存中有的都认为允许还原路由***/
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // 动态设置网页标题
        document.title = route.data.title;
        // 在路由是login的时候清空缓存
        if(route.routeConfig.path=='login'){
            console.log('清空路由快照');
            this._cacheRouters = {};
        }
        // 获取路由中的参数部分
        let key = this.getRouteParams(route);
        // 在缓存中有的都认为允许还原路由
        return !!route.routeConfig && !!this._cacheRouters[key];
    }

    /*** 从缓存中获取快照，若无则返回null***/
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // 从缓存中获取快照，若无则返回null
        if (!route.routeConfig || route.routeConfig.loadChildren ) {
            return null;
        }else {
            // 获取路由中的参数部分
            let key = this.getRouteParams(route);
            if (!this._cacheRouters[key]) {
                return null;
            }else {
                return this._cacheRouters[key].handle;
            }
        }
    }

    /***进入路由触发，判断是否同一路由***/
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        if (future.routeConfig && curr.routeConfig) {
            return future.routeConfig === curr.routeConfig;
        }
        return false;
    }

    //  判断对象是否为空
    isEmptyObj(obj){
        for (let i in obj)  return false;
        return true;
    }

    //
    getRouteParams(route){
        if (!route.routeConfig) return null;
        let params = route.routeConfig.path;
        if (!this.isEmptyObj(route.params)) {
            for (let i in route.params) {
                params += route.params[i];
            }
        }
        if (!this.isEmptyObj(route.queryParams)) {
            for (let i in route.queryParams) {
                params += route.queryParams[i];
            }
        }
        return params;
    }
}
