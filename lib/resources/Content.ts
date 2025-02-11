import type { APIWrapper } from "../utilities/apiWrapper"

import type {
  FlattenContentModels,
  ContentModelTopLevelValues,
  ContentParams,
  ContentResponse
} from '../types/Butter'

export class Resource_Content {
  api: APIWrapper

  constructor (api: APIWrapper) {
    this.api = api
  }

  async retrieve <ContentModels extends object = object> (keys: Array<keyof ContentModels>, params?: ContentParams<FlattenContentModels<ContentModelTopLevelValues<ContentModels>>>) {
    return this.api.get<ContentResponse<ContentModels>>('content', { keys: keys.join(), ...params })
  }
}
