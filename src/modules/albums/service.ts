import { RESTDataSource } from 'apollo-datasource-rest';


export class Albums extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_PORT
    }

    onGetAllAlbum() {
        return this.get("/").then((res) =>
            res.items.map((item: any) => ({
                ...item,
                id: item._id,
            }))
        );
    }

    onSelectOneAlbum(id: string) {
        return this.get(`/${id}`);
    }

}