import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { EpisodeDetailComponent } from './episode-detail.component';
import {Episode} from '../episode';

describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;
  let episode: Episode;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    episode = new Episode();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render episode details', () => {
    episode.name = 'Test Morty';
    component.episode = episode;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.episode');
    expect(el.textContent).toContain(episode.name);
  });
});
