import { DateTime } from 'luxon'

import User from 'App/Models/User'
import Comment from 'App/Models/Comment'

import {
  BaseModel,
  column,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {

  @column({ isPrimary: true })
  public id: number
  
  @hasMany(() => Comment)
  public posts: HasMany<typeof Comment>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

}
