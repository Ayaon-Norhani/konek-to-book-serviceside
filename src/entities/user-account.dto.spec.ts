import { UserAccountDto } from './user-account.dto';

describe('UserAccountDto', () => {
  it('should be defined', () => {
    expect(new UserAccountDto()).toBeDefined();
  });
});
