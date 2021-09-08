import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  public episodes: Episode[] = [];

  constructor(private episodeService: EpisodesService) { }

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(episodes => this.episodes = episodes);
  }

}
