import { joinWithNewLines } from '@/src/util/join-with-new-lines/join-with-new-lines'
import { describe, expect, test } from 'vitest'

describe('joinWithNewLinesのテスト', () => {
  test('ただしく改行されるかどうか', () => {
    expect(joinWithNewLines('hoge', 'huga')).toEqual('hoge\nhuga')
    expect(joinWithNewLines('hoge', '', '', 'huga')).toEqual('hoge\n\n\nhuga')
  })
})
