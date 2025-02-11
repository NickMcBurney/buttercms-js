import type {
  AuthorMethods,
  CategoryMethods,
  FeedMethods,
  TagMethods,
  PageMethods,
  PostMethods,
  ContentMethods
} from './types/Butter'

import type { GlobalButterConfig } from './types/GlobalButterConfig'

// wrapper for API calls
import { APIWrapper } from './utilities/apiWrapper'

// resources
import { Resource_Author } from './resources/Author'
import { Resource_Category } from './resources/Category'
import { Resource_Content } from './resources/Content'
import { Resource_Feed } from './resources/Feed'
import { Resource_Page } from './resources/Page'
import { Resource_Post } from './resources/Posts'
import { Resource_Tag } from './resources/Tag'

export default class Butter {
  #api: APIWrapper
  // resource APIs
  author: AuthorMethods
  category: CategoryMethods
  content: ContentMethods
  feed: FeedMethods
  page: PageMethods
  post: PostMethods
  tag: TagMethods

  constructor  (token: string, previewMode: boolean = false, timeout: number = 3000, config: GlobalButterConfig = { retries: 1 }) {
    /* if no token is passed throw error */
    if (typeof token !== 'string') {
      throw 'ButterCMS API token not set';
    }

    this.#api = new APIWrapper(token, previewMode, timeout, config)

    this.author = new Resource_Author(this.#api)
    this.category = new Resource_Category(this.#api)
    this.content = new Resource_Content(this.#api)
    this.feed = new Resource_Feed(this.#api)
    this.page = new Resource_Page(this.#api)
    this.post = new Resource_Post(this.#api)
    this.tag = new Resource_Tag(this.#api)
  }
}
