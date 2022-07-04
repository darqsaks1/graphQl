import { RESTDataSource } from 'apollo-datasource-rest';

export class Genres extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_PORT
    }

    onGetAll() {
        return this.get("/").then((res) =>
            res.items.map((item: any) => ({
                ...item,
                id: item._id,
            }))
        );
    }

    onSelectOne(id: string) {
        return this.get(`/${id}`);
    }

}