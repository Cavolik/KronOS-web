import { Injectable } from '@angular/core';
import Hls from "hls.js";

type PlayList = {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private audioSrc: PlayList[] = [
    {
      name: "nrk p1 oslo og akershus",
      url: "https://nrk-radio-live.telenorcdn.net/60/0/hls/nrk_p1_oslo_akershus/1403133980-1403133980-prog_index.m3u8"
    },
    {
      name: "p2",
      url: "https://live-cdn.sr.se/pool2/p2musik/p2musik.isml/p2musik-audio=192000.m3u8"
    },
    {
      name: "vodobox",
      url: "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
    },
    {
      name: "longtail",
      url: "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8"
    },
    {
      name: "apple",
      url: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8"
    },
    {
      name: "afcdn",
      url: "https://assets.afcdn.com/video49/20210722/v_645516.m3u8"
    }
  ];

  private hls: Hls;
  private readonly audio: HTMLAudioElement;
  playing: boolean = false;
  channel: number = 0;

  constructor() {
    this.hls = new Hls();
    this.audio = new Audio();
    this.hls.loadSource(this.audioSrc[this.channel].url);
    this.hls.attachMedia(this.audio);
  }

  playPause = () => {
    (this.playing) ? this.audio.pause():this.audio.play();
    this.playing = !this.playing;
  }

  channelDown = () => {
    this.channel = (this.channel - 1 + this.audioSrc.length) % this.audioSrc.length;
    this.changeChannel(this.audioSrc[this.channel].url);
    return this.audioSrc[this.channel].name;
  }

  channelUp = () => {
    this.channel = (this.channel + 1 + this.audioSrc.length) % this.audioSrc.length;
    this.changeChannel(this.audioSrc[this.channel].url);
    return this.audioSrc[this.channel].name;
  }

  getPlayList = () => {
    return this.audioSrc;
  }

  setAudioLevel = (level: number)=>{
    this.audio.volume = level;
  }
  private changeChannel = (audioSrc: string) => {
    this.playPause();
    this.hls.loadSource(audioSrc)
    this.hls.attachMedia(this.audio);
    this.playPause();
  }



}
