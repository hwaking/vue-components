import Main from '@/components/main'
import H5 from '@/components/H5/index'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true
        },
        component: () =>
            import('@/view/login/login.vue')
    },
    {
        path: '/admin',
        name: 'adminlogin',
        meta: {
            title: 'ADMIN登录',
            hideInMenu: true
        },
        component: () =>
            import('@/view/admin-login/login.vue')
    },
    {
        path: '/admin/projectlist',
        name: 'admin/projectlist',
        meta: {
            title: '项目展示',
            hideInMenu: true
        },
        component: () =>
            import('@/view/project/index.vue')
    },
    {
        path: '/demo',
        name: 'h5/demo',
        meta: {
            title: '项目展示',
            hideInMenu: true
        },
        component: () =>
            import('@/view/demo/index.vue')
    },
    
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true,
                icon: 'md-home'
            },
            component: () =>
                import('@/view/single-page/home')
        }]
    },
    {
        path: '/message',
        name: 'message',
        component: Main,
        meta: {
            hideInBread: true,
            hideInMenu: true
        },
        children: [{
            path: 'message_page',
            name: 'message_page',
            meta: {
                icon: 'md-notifications',
                title: '消息中心'
            },
            component: () =>
                import('@/view/single-page/message/index.vue')
        }]
    },
    

    // PC
    {
        path: '/components',
        name: 'components',
        meta: {
            icon: 'logo-buffer',
            title: '组件管理',
        },
        component: Main,
        children: [
            {
                path: 'tree',
                name: 'components/tree',
                meta: {
                    title: 'Tree控件',
                },
                component: () =>
                    import('@/view/tree/index.vue')
            },
            {
                path: 'imgupload',
                name: 'components/imgupload',
                meta: {
                    title: '图片上传',
                },
                component: () =>
                    import('@/view/upload/index.vue')
            },
            {
                path: 'imglist',
                name: 'components/imglist',
                meta: {
                    title: '图片列表控件',
                },
                component: () =>
                    import('@/view/img-list/index.vue')
            },
            {
                path: 'show',
                name: 'components/show',
                meta: {
                    title: '图片上传&列表',
                },
                component: () =>
                    import('@/view/upload/show.vue')
            },
            {
                path: 'map',
                name: 'components/map',
                meta: {
                    title: '自定义地图',
                },
                component: () =>
                    import('@/view/map/index.vue')
            },
        ]
            
            
    },
   
    {
        path: '/setup',
        name: 'setup',
        meta: {
            icon: 'md-settings',
            title: '设置中心',
            showAlways: true,
            access: ['setFocus']
        },
        component: Main,
        children: [

            {
                path: 'dict',
                name: 'dict',
                meta: {
                    icon: 'md-pricetags',
                    title: '字典项管理',
                    access: ['setFocus/dictManage']
                },
                component: () =>
                    import('@/view/setup/dict/list.vue')
            },
         

        ]
    },
   
   
    
    
  
    
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/404.vue')
    }
]