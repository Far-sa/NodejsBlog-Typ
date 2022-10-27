import { IsDefined, Matches } from 'class-validator'
import { Expose } from 'class-transformer'

export class CreateBlogTDO {
  @IsDefined()
  @Expose()
  title: string
}
export class BlogIdDTO {
  @IsDefined()
  @Expose()
  title: string
}
