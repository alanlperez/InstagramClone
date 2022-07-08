import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://pbs.twimg.com/media/FTyPTkqUAAETmfJ?format=jpg&name=large',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Cannot wait for you to see Good Faith Forever at Hard Summer! #HardFest',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'porterrobinson',
                comment: 'Wow! This looks amazing Hugo!',
            },
            {
                user: 'illenium',
                comment: 'So inspirational!',
            },
        ],
    },
    {
        imageUrl: 'https://edmidentity.com/wp-content/uploads/2020/07/EP4F8dpU4AAOTiu.jpg',
        user: USERS[2].user,
        likes: 8620,
        caption: 'So tell me how it felt when you walked on water. Bringing Nurture to Hard Summer! #HardFest',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'madeon',
                comment: 'See you there Porter!',
            },
            {
                user: 'illenium',
                comment: 'did you get your wish?',
            }
        ]
    }
]