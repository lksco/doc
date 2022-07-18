module.exports = {
    base: "/doc/",
    title: "LKSCO - ScoreList",
    description: "The Score Registration and Storage Solution (Documentation) for the Chinese Orchestra of TWGHs Li Ka Shing College",
    plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom"],

    head: [
        ["script", {
            src: "/scripts/index.js"
        }]
    ],

    locales: {
        "/": {
            lang: "en-US"
        },
        "/zh/": {
            lang: "zh-hk"
        }
    },

    themeConfig: {
        yuu: {
            defaultDarkTheme: false,
            disableThemeIgnore: true,
            labels: {
                darkTheme: "Dark Theme"
            }
        },
        locales: {
            "/": {
                selectText: "Lang",
                label: "English",
                nav: [{
                        text: "Home",
                        link: "/"
                    },
                    {
                        text: "Guide:Operator",
                        link: "/operator/"
                    },
                    {
                        text: "Guide:Admin",
                        link: "/admin/"
                    },
                    {
                        text: "ScoreList",
                        link: "https://docs.google.com/spreadsheets/d/1V9uz-5N4GwmD1HQnuxjBj8iRKLUyiTaKfq2_NeQBZmo/edit?usp=sharing"
                    }
                ],
                sidebar: {
                    "/operator/": [{
                            title: "Guide:Operator",
                            collapsable: false,
                            children: [
                                ""
                            ]
                        },
                        {
                            title: "Overview",
                            collapsable: false,
                            children: [
                                "structure",
                                "regular-score-list",
                                "special-score-list"
                            ]
                        },
                        {
                            title: "Operations",
                            collapsable: false,
                            children: [
                                "outline",
                                "handling-existing-scores",
                                "editing-sheet-data",
                                "general-management",
                                "advanced-tips"
                            ]
                        },
                        {
                            title: "Other",
                            collapsable: false,
                            children: [
                                "people-and-development"
                            ]
                        }
                    ],
                    "/admin/": [{
                        title: "Guide:Administrator",
                        collapsable: false,
                        children: [
                            ""
                        ]
                    }, ]
                }
            },
            "/zh/": {
                selectText: "語言",
                label: "中文(香港)",
                nav: [{
                        text: "主頁",
                        link: "/zh/"
                    },
                    {
                        text: "指引:操作員",
                        link: "/zh/operator/"
                    },
                    {
                        text: "指引:管理員",
                        link: "/zh/admin/"
                    },
                    {
                        text: "ScoreList",
                        link: "https://docs.google.com/spreadsheets/d/1V9uz-5N4GwmD1HQnuxjBj8iRKLUyiTaKfq2_NeQBZmo/edit?usp=sharing"
                    }
                ],
                sidebar: {
                    "/zh/operator/": [{
                            title: "指引:操作員",
                            collapsable: false,
                            children: [
                                ""
                            ]
                        },
                        {
                            title: "總覽",
                            collapsable: false,
                            children: [
                                "structure",
                                "regular-score-list",
                                "special-score-list"
                            ]
                        },
                        {
                            title: "操作",
                            collapsable: false,
                            children: [
                                "outline",
                                "handling-existing-scores",
                                "editing-sheet-data",
                                "general-management",
                                "advanced-tips"
                            ]
                        },
                        {
                            title: "其他",
                            collapsable: false,
                            children: [
                                "people-and-development"
                            ]
                        }
                    ],
                    "/zh/admin/": [{
                        title: "指引:管理員",
                        collapsable: false,
                        children: [
                            ""
                        ]
                    }, ]
                }
            }
        }
    }
};