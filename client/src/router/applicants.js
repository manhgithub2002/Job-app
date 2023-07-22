const auth = [
    {
        path: '/applicants',
        name: 'applicants.index',
        component: () => import("../views/appicant/index.vue"),
    },
];

export default auth;