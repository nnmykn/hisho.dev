import { describe, expect, test } from 'vitest'
import { createMultiLineString } from '@shared/util/createMultiLineString/createMultiLineString'

describe('createMultiLineStringのテスト', () => {
  test('ただしく改行されるかどうか', () => {
    expect(createMultiLineString('hoge', 'huga')).toEqual('hoge\nhuga')
    expect(createMultiLineString('hoge', '', '', 'huga')).toEqual(
      'hoge\n\n\nhuga'
    )
  })
})
