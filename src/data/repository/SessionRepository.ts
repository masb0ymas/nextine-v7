import { SessionAttributes } from '../entities/Session'
import BaseRepository, { MultipleIdsEntity } from './BaseRepository'

const repo = new BaseRepository({ endpoint: '/session' })

export default class SessionRepository {
  public static api = repo.api

  /**
   *
   * @param formData
   * @returns
   */
  public static async create(formData: SessionAttributes) {
    const response = await repo.create(formData)
    return response
  }

  /**
   *
   * @param id
   * @param formData
   * @returns
   */
  public static async update(id: string, formData: SessionAttributes) {
    const response = await repo.update(id, formData)
    return response
  }

  /**
   *
   * @param id
   * @returns
   */
  public static async restore(id: string) {
    const response = await repo.restore(id)
    return response
  }

  /**
   *
   * @param id
   * @returns
   */
  public static async softDelete(id: string) {
    const response = await repo.softDelete(id)
    return response
  }

  /**
   *
   * @param id
   * @returns
   */
  public static async forceDelete(id: string) {
    const response = await repo.forceDelete(id)
    return response
  }

  /**
   *
   * @param data
   * @returns
   */
  public static async multipleRestore(data: MultipleIdsEntity) {
    const response = await repo.multipleRestore(data)
    return response
  }

  /**
   *
   * @param data
   * @returns
   */
  public static async multipleSoftDelete(data: MultipleIdsEntity) {
    const response = await repo.multipleSoftDelete(data)
    return response
  }

  /**
   *
   * @param data
   * @returns
   */
  public static async multipleForceDelete(data: MultipleIdsEntity) {
    const response = await repo.multipleForceDelete(data)
    return response
  }
}
