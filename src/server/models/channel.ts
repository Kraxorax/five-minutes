

class Channel {
    posts: string[] = ['Channel started'];

    add = (text: string): number => {
        this.posts.push(text)
        return this.posts.length
    }
}


export const chan = new Channel()
