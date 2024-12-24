export interface TodoInterface {
    id: number
    title: string
    done: boolean
}

export class Todo implements TodoInterface {
    public id = 0;
    public title = '';
    done = false;
    constructor(title: string) {
        this.id = Date.now();
        this.title = title;
    }
}