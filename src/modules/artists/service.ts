import { RESTDataSource } from 'apollo-datasource-rest';

export class Artists extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_PORT
    }

    onGetAllArtists() {
        return this.get("/").then((res) =>
            res.items.map((item: any) => ({
                ...item,
                id: item._id,
            }))
        );
    }

    onSelectOneArtist(id: string) {
        return this.get(`/${id}`);
    }

}