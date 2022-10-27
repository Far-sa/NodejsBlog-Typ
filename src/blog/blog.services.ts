import { BlogIdDTO, CreateBlogTDO } from './blog.dto'
import { IBlog } from './blog.types'
import { BlogModel } from '../models/blog.model'
import { validateSync } from 'class-validator'
import { errorHandler } from '../modules/utils'

export class BlogService {
  async create (blogDTO: CreateBlogTDO): Promise<IBlog> {
    const errors = validateSync(blogDTO)
    const validationErr = errorHandler(errors)
    if (validationErr.length > 0)
      throw {
        status: 400,
        message: 'Validation Errors',
        errors: validationErr
      }
    const blog: IBlog = await BlogModel.create(blogDTO)
    return blog
  }
  async fetchAll (): Promise<IBlog[]> {
    return []
  }
  async fetchById (bloGId: BlogIdDTO): Promise<IBlog | undefined> {
    return
  }
  async removeById (bloGId: BlogIdDTO): Promise<string> {
    return ''
  }
}
