export class SearchFileModel {
  public id: string = '';
  public code: string = '';
  public name: string = '';
  public path: string = '';
  public content: string = '';
  public type: string = '';
  public typeTag: Array<any> = [];
  public wordCount: number = 0;
  public tag: string = '';
  public other: string = '';
  public createDate!: string;
  public updateDate!: string;
}

export default SearchFileModel;
