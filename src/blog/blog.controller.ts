import { plainToClass } from 'class-transformer'
import { NextFunction, Request, Response } from 'express'

import {
  DecoratorController,
  Delete,
  Get,
  Post
} from '../decorators/router.decorators'
import { CreateBlogTDO } from './blog.dto'
import { BlogService } from './blog.services'
import { IBlog } from './blog.types'

const blogService: BlogService = new BlogService()

@DecoratorController('/blogs')
export class BlogController {
  @Post()
  async CreateBlog (req: Request, res: Response, next: NextFunction) {
    try {
      const blogDTO: CreateBlogTDO = plainToClass(CreateBlogTDO, req.body)
      const blog: IBlog = await blogService.create(blogDTO)
      return res.status(201).json({
        statusCode: 201,
        data: {
          blog,
          message: 'Blog has been created successfully'
        }
      })
    } catch (error) {
      next(error)
    }
  }

  @Get()
  GetAllBlogs (req: Request, res: Response, next: NextFunction) {}

  @Get()
  GetBlogById (req: Request, res: Response, next: NextFunction) {}

  @Delete()
  RemoveBlogById (req: Request, res: Response, next: NextFunction) {}
}
