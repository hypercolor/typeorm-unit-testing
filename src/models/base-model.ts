export abstract class BaseModel {
  public static build<T extends BaseModel>(
    this: new () => T,
    parameters?: Partial<T>
  ) {
    const instance = new this();
    Object.assign(instance, parameters);
    return instance;
  }
}
