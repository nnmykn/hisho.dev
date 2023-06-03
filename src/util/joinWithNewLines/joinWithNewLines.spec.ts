import { describe, expect, test } from 'vitest'
import { joinWithNewLines } from '@/src/util/joinWithNewLines/joinWithNewLines'

describe('joinWithNewLinesのテスト', () => {
  test('ただしく改行されるかどうか', () => {
    expect(joinWithNewLines('hoge', 'huga')).toEqual('hoge\nhuga')
    expect(joinWithNewLines('hoge', '', '', 'huga')).toEqual('hoge\n\n\nhuga')
  })
})
