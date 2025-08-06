export interface UserInterface {
    profile?: string,
    cover?: string,
    name?: string,
    nickname?: string,
    password?: string,
    school?: string,
    status?: string,
    workplace?: string,
    bio?: string,
    feedback?: string,
    star?: 0,
    post?: []
}

export interface PostInterface {
    date?: string,
    text?: string,
    love?: number,
    picture?: string,
    comments?: [
        {
            talker: string,
            talker_name: string,
            comment: string
        }
    ]
}