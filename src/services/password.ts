import bcrypt from 'bcrypt';
export class Password {
  static async hash(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPAssword = await bcrypt.hash(password, salt);
    return hashedPAssword;
  }
  static async compare(suppliedPassword: string, storedPassword: string) {
    const match = await bcrypt.compare(suppliedPassword, storedPassword);
    return match;
  }
}
