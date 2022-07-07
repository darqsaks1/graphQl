import { RESTDataSource } from "apollo-datasource-rest";
export class HTTP extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: any) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`)
  }

  selectOnes() {
    return this.get("/").then((res) =>
      res.items.map((item: any) => ({
        ...item,
      }))
    );
  }

  selectOne(id: string) {
    return this.get(`/${id}`);
  }

  selectOnesByIds(items: Array<string>) {
    return Promise.all(items.map((id: string) => this.selectOne(id))
    )
  }
  
  async createPostMethod(parent: any, args: any) {
    return await this.post("/", { ...args.input })
  }

  async upPutMethod(parent: any, args: any) {
    return await this.put(`/${args.id}`, { ...args.input })
  }

  async deleteMethod(parent: any, args: any) {
    return await this.delete(`/${args.id}`)
  }


}
