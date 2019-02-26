export default class Song{ // 初始化歌曲信息类
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) { // 实例化歌曲信息
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://112.90.53.146/amobile.music.tc.qq.com/C400002E3MtF0IAMMY.m4a?guid=6695659760&vkey=47E151B44F217EF06F0A2682A73F706861B60E24F2E5AED6935C61D09DD319945376D2AAA4872DBFD3C154CF8C9457341430B9F164F6ED84&uin=0&fromtag=66`
  })
}

function filterSinger (singer) { // 拼接歌手信息为字符串
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
