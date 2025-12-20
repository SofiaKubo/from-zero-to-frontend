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
        { id: '3', title: 'Работа программиста: плюсы и минусы', date: '2022-01-22' },
    ],
}

class Api {
    origin: string;

    /** todo: Сделайте поле authToken приватным */
    private authToken: string;

    constructor(origin: string, authToken: string) {
        this.origin = origin;
        this.authToken = authToken;
    }

    /** todo: Напишите метод auth */

      private auth(token: string): boolean {
        return token === this.authToken;
    }

    protected get<T>(authToken: string, path: string, response: () => T) {
        console.log('GET', `${this.origin}/${path}`);

        /** todo: Возвращайте response() только если авторизация пройдена */
        if (this.auth(authToken)) {
            return response();
        }
        return null;
    }
}

class PostsApi extends Api {
    constructor(origin: string, authToken: string) {
        super(origin, authToken);
    }

    getPosts(authToken: string): Post[] | null {
        return this.get(authToken, 'posts', () => data.posts);
    }
}

const api = new PostsApi('http://localhost:3000', '1234');

console.log(api.getPosts('0000'));
console.log(api.getPosts('1234'));
