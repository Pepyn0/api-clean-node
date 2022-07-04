import { MongoClient, Collection } from 'mongodb'

export const mongoHelper = {
  client: null as MongoClient,

  async connect (url: string) {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}