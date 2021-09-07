import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of episodes', () => {
    expect(component.episodes).toBeDefined();
  });

  it('should render each episode', () => {
    component.episodes = [{name: 'Ep 1'}, {name: 'Ep 2'}];
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelectorAll('.episode');
    expect(el.length).toEqual(2);
  });
});
