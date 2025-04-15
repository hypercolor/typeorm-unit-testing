export class RepositoryMock {
    public save = jest.fn();
    public findOne = jest.fn();
    public findOne_addFixture(value: any) {
        this.findOne.mockReturnValue(value);
    }
}
