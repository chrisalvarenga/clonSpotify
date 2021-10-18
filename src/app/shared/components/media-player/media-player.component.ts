import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from 'src/app/core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: '',
    album:'',
    name: '',
    url: '',
    _id: 1
  }
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
  }
  
  

}
