import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.models';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  trackTrending: Array<TrackModel> = []
  trackRandom: Array<TrackModel> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
  this.loadDataRandom();
  this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    this.trackTrending = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllTracks$()
      .subscribe((response: TrackModel[]) => {
        this.trackRandom = response
      })
  }

}
