interface Post {
    id: string;
    title: string;
    date: string;
}

interface DataBase {
    posts: Post[];
}

const data: DataBase = {
    posts: [
        { id: '1', title: 'Как приготовить чизкейк в домашних условиях', date: '2021-04-12' },
        { id: '2', title: 'Где купить эпоксидную смолу', date: '2021-06-01' },
        { id: '3', title: 'Плюсы и минусы быть программистом', date: '2022-01-22' },
    ],
}

class Api {
    origin: string;

    constructor(origin: string) {
        this.origin = origin;
    }

    /** todo: Сделайте метод get защищённым */
    protected get<T>(path: string, response: () => T) {
        /** todo: Реализуйте метод get */
            console.log(`GET ${this.origin}/${path}`);
        return response();
    }
}

class PostsApi extends Api {
    constructor(origin: string) {
        super(origin);
    }

    getPosts() {
        return this.get('posts', () => data.posts);
    }
}

const api = new PostsApi('http://localhost:3000');

console.log(api.getPosts());
