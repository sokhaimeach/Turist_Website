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
    username?: string,
    userpic?: string,
    date?: string,
    text?: string,
    picture?: string,
    lover?: [],
    talker?: string,
    talker_name?: string,
    comment?: string,
    shareby?: []
}