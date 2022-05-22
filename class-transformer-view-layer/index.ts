import { Exclude, Expose, plainToClass, Transform } from 'class-transformer'
import * as express from 'express'
import * as strftime from 'strftime'

const app = express()

class User {
  id: number
  name: string
  password: string
  createdAt: Date

  static find(): User[] {
    return [
      plainToClass(User, { id: 1, name: 'John', password: '1234', createdAt: new Date() }),
      plainToClass(User, { id: 2, name: 'Jane', password: '1235', createdAt: new Date() }),
      plainToClass(User, { id: 3, name: 'Same', password: '1236', createdAt: new Date() }),
    ]
  }
}

@Exclude()
class APIUser {
  @Expose()
  name: string
  @Expose()
  @Transform(value => strftime('%d/%m/%Y - %H:%M:%S', value.obj.createdAt))
  createdAt: string
}

class GetUsersResponse {
  users: APIUser[]

  static fromUsers(users: User[]): GetUsersResponse {
    return { users: users.map(u => plainToClass(APIUser, u)) }
  }
}

app.get('/users', (req, res) => {
  const users = User.find()
  res.json(GetUsersResponse.fromUsers(users))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
