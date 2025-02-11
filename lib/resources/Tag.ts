import type { APIWrapper } from "../utilities/apiWrapper"

import type {
  TagListResponse,
  TagParams,
  TagRetrieveResponse
} from '../types/Butter'

export class Resource_Tag {
  api: APIWrapper

  constructor (api: APIWrapper) {
    this.api = api
  }

  async list(params?: TagParams)  {
    return this.api.get<TagListResponse>('tags', params)
  }

  async retrieve <TagSlug extends string = string> (slug: TagSlug, params?: TagParams) {
    return this.api.get<TagRetrieveResponse<TagSlug>>(`tags/${slug}`, params)
  }
}
