// export interface RegisterDTO {
//   username: string
//   fullname: string
//   password: string
// }

import { IsDefined, Matches } from 'class-validator'
import { Expose } from 'class-transformer'

export class RegisterDTO {
  @IsDefined()
  @Expose()
  fullname: string
  @IsDefined()
  @Expose()
  @Matches(RegExp(/[A-Za-z0-9]\_\.{5,}/))
  username: string
  @IsDefined()
  @Expose()
  password: string
}
