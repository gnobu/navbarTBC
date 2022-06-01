export const navItems = [
    {
        id: 1,
        title: 'Information',
        path: './information',
        cName: 'nav__link',
        dropdownType: 'list',
        dropdown: [
            {
                id: 1,
                title: 'Free Tutorials',
                sub: [
                    {
                        id: 1,
                        title: 'All',
                        path: 'information/free-tutorials/all',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Latest',
                        path: 'information/free-tutorials/latest',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Popular',
                        path: 'information/free-tutorials/popular',
                        cName: 'nav__link'
                    },
                ],
                path: './free-tutorials',
                cName: 'dropdown__title'
            },
            {
                id: 2,
                title: 'Courses',
                sub: [
                    {
                        id: 1,
                        title: 'JavaScript',
                        path: 'information/courses/javascript',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'CSS',
                        path: 'information/courses/css',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'React',
                        path: 'information/courses/react',
                        cName: 'nav__link'
                    },
                ],
                path: './courses',
                cName: 'dropdown__title'
            },
            {
                id: 3,
                title: 'Blog',
                sub: [
                    {
                        id: 1,
                        title: 'All',
                        path: 'information/blog/all',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Latest',
                        path: 'information/blog/latest',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Popular',
                        path: 'information/blog/popular',
                        cName: 'nav__link'
                    },
                ],
                path: './blog',
                cName: 'dropdown__title'
            },
            {
                id: 4,
                title: 'Other',
                sub: [
                    {
                        id: 1,
                        title: 'Twitter',
                        path: 'information/other/twitter',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Newsletter',
                        path: 'information/other/newsletter',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Discord',
                        path: 'information/other/discord',
                        cName: 'nav__link'
                    },
                ],
                path: './other',
                cName: 'dropdown__title'
            },
            
        ]
    },
    {
        id: 4,
        title: 'Trial',
        path: './trial',
        cName: 'nav__link',
        dropdownType: 'list',
        dropdown: [
            {
                id: 1,
                title: 'Free Trial',
                sub: [
                    {
                        id: 1,
                        title: 'All',
                        path: 'trial/free-trial/all',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Latest',
                        path: 'trial/free-trial/latest',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Popular',
                        path: 'trial/free-trial/popular',
                        cName: 'nav__link'
                    },
                ],
                path: './free-tutorials',
                cName: 'dropdown__title'
            },
            {
                id: 2,
                title: 'Courses',
                sub: [
                    {
                        id: 1,
                        title: 'JavaScript',
                        path: 'trial/courses/javascript',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'CSS',
                        path: 'trial/courses/css',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'React',
                        path: 'trial/courses/react',
                        cName: 'nav__link'
                    },
                ],
                path: './courses',
                cName: 'dropdown__title'
            },
            {
                id: 3,
                title: 'Blog',
                sub: [
                    {
                        id: 1,
                        title: 'All',
                        path: 'trial/blog/all',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Latest',
                        path: 'trial/blog/latest',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Popular',
                        path: 'trial/blog/popular',
                        cName: 'nav__link'
                    },
                ],
                path: './blog',
                cName: 'dropdown__title'
            },
            {
                id: 4,
                title: 'Other',
                sub: [
                    {
                        id: 1,
                        title: 'Twitter',
                        path: 'trial/other/twitter',
                        cName: 'nav__link'
                    },
                    {
                        id: 2,
                        title: 'Newsletter',
                        path: 'trial/other/newsletter',
                        cName: 'nav__link'
                    },
                    {
                        id: 3,
                        title: 'Discord',
                        path: 'trial/other/discord',
                        cName: 'nav__link'
                    },
                ],
                path: './other',
                cName: 'dropdown__title'
            },
            
        ]
    },
    {
        id: 2,
        title: 'Pricing',
        path: './pricing',
        cName: 'nav__link',
        dropdownType: 'none',
        dropdown: null
    },
    {
        id: 3,
        title: 'Login',
        path: './login',
        cName: 'nav__link',
        dropdownType: 'login',
        dropdown: 'login'
    },
]