import { Request, Response } from 'express';
import faker from 'faker';

import Article, { IArticle } from '../models/article';

class ArticleController {

  // Get > /
  public getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const articles: IArticle[] = await Article.find();
        
      return res.status(200).json({
        result: true,
        message: "List articles.",
        data: articles
      });
    } catch(error) {
      return res.status(500).json({
        result: false,
        error: error
      });
    }
  }

  // GET > create
  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      for (let i = 0; i < 5; i++) {
        const article: IArticle = new Article({
          title: faker.name.title(),
          description: faker.lorem.paragraph(),
          imageURL: faker.image.imageUrl()
        });
      
        await article.save();
      }
        
      return res.status(201).json({
        result: true,
        message: "List of articles created."
      });
    } catch(error) {
        return res.status(500).json({
          result: false,
          error: error
        })
    }
  }

}

export default new ArticleController();