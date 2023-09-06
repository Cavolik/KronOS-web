import {Injectable} from '@angular/core';
import Hls from "hls.js";
import {reportUnhandledError} from "rxjs/internal/util/reportUnhandledError";

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
    { name: "apple",
      url: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8"
    },
    { name: "afcdn",
      url: "https://assets.afcdn.com/video49/20210722/v_645516.m3u8"
    },
    { name: "",
      url: ""
    },
  ];

  private hls: Hls;
  private audio: HTMLAudioElement;
  playing = true;
  chanel = 0;

  constructor() {
    this.hls = new Hls();
    this.audio = new Audio();
    this.hls.loadSource(this.audioSrc[this.chanel].url);
    this.hls.attachMedia(this.audio);
  }

  playPause = () => {
    if (this.playing){
      void this.audio.play()
    } else {
      void this.audio.pause()
    }
    this.playing = !this.playing;
    console.log(this.playing);
  }

  chanelLower = () => {
    this.chanel --;
    if (this.chanel < 0) {
      this.chanel = this.audioSrc.length - 1;
    }
    this.hls.loadSource(this.audioSrc[this.chanel].url)
    this.hls.attachMedia(this.audio);
    return this.audioSrc[this.chanel].name;
  }

  chanelHigher = () => {
    this.chanel ++;
    if (this.chanel > this.audioSrc.length - 1) {
      this.chanel = 0;
    }
    this.hls.loadSource(this.audioSrc[this.chanel].url)
    this.hls.attachMedia(this.audio);
    return this.audioSrc[this.chanel].name;
  }

  getPlayList = () => {
    return this.audioSrc;
  }
}
