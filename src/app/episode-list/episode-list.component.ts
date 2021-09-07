import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  public episodes: Episode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
