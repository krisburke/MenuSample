import { ViewA,
         ViewB,
         ViewC,
         ViewD,
         ViewE,
         ViewF } from './components';

export const routes = {
    simple: [
        {
            path: "/viewA",
            content: ViewA
        },
        {
            path: "/viewB",
            content: ViewB,
        },
        {
            path: "/viewC",
            content: ViewC,
        }
    ],
    stateful: [
        {
            name: "viewD",
            path: "/viewD",
            content: ViewD,
        },
        {
            name: "viewE",
            path: "/viewE",
            content: ViewE,
        },
        {
            name:"viewF",
            path: "/viewF",
            content: ViewF,
        }
    ]
};
