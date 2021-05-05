import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodeDetailComponent } from './episode-detail.component';
import { Episode } from '../../models/episode';

describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;
  let episode: Episode;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    episode = createEpisode();
    component.episode = episode;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an episode', () => {
    expect(component.episode).toBeTruthy();
    expect(html.querySelector('h5.card-title').textContent).toEqual(episode.name);
  });

  it('should render episode in a flex column', () => {
    expect(html.querySelectorAll('.col').length).toBeGreaterThan(0);
  });

  // Test utils ------------------------

  function createEpisode(): Episode {
    episode = new Episode();
    episode.name = 'Test and Rorty';
    episode.episode = 'TEST01';
    episode.air_date = 'December 2, 2013';
    return episode;
  }
});
