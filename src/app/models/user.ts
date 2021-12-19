export type User = {
    address: string,
    pdsAccount?: string,
    discord?: {
        id: string,
        username: string,
        avatar: string,
        discriminator: string,
        flags:number,
    },
    twitter?: any,
    token?: string
}