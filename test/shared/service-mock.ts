export class ServiceMock {

  public getPendingAdmitProfiles = jest.fn();
  public getExploreFeed = jest.fn();
  public getTenantFaq = jest.fn();
  public getSchoolAdminsForTenant = jest.fn();
  public getWelcomeScreen = jest.fn()
  public updateAndVerifyAdmitProfile = jest.fn();
  public getTenantResourceByIdOrFail = jest.fn();
  public loadTenantResource = jest.fn();

}
