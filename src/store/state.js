import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放/暂停
  fullScreen: false, // 展开或收起
  playlist: [], // 播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放的歌曲
}

export default state
