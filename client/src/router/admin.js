const  admin = [
    {
        path: "/admin",
        component: ()=>import("../layouts/admin.vue"),
        children: [
            //Quản lý users
            {
                path: "users",
                name: "admin.users",
                component: () => import("../views/admin/users/index.vue")
            },

            //Quản lý bài đăng
            {
                path: "posts",
                name: "admin.posts",
                component: () => import("../views/admin/posts/index.vue")
            },
            {
                path: "posts/create",
                name: "admin.posts.create",
                component: () => import("../views/admin/posts/create.vue")
            },
            //Quản lý admin
            {
                path: "managements",
                name: "admin.managements",
                component: () => import("../views/admin/managements/index.vue")
            },
            {
                path: "managements/create",
                name: "admin.managements.create",
                component: () => import("../views/admin/managements/create.vue")
            },
            {
                path: "managements/edit/:id",
                name: "admin.managements.edit",
                component: () => import("../views/admin/managements/edit.vue")
            },
            {
                path: "managements/destroy/:id",
                name: "admin.managements.destroy",
                component: () => import("../views/admin/managements/index.vue")
            },
        ]
    }
];

export default admin;