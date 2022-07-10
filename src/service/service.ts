import { RESTDataSource } from "apollo-datasource-rest";
export class HTTP extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: any) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`)
  }

  selectOnes = () => this.get("/").then((res) => res.items.map((item: any) => ({ ...item, })));

  selectOne = (id: string) => this.get(`/${id}`);

  selectOnesByIds = (items: Array<string>) => Promise.all(items.map((id: string) => this.selectOne(id)))

  createPostMethod = async (parent: any, args: any) => await this.post("/", { ...args.input })

  upPutMethod = async (parent: any, args: any) => await this.put(`/${args.id}`, { ...args.input })

  deleteMethod = async (parent: any, args: any) => await this.delete(`/${args.id}`)

}
