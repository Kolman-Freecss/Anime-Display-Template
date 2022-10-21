import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFormComponent } from './anime-form.component';

describe('AnimeFormComponent', () => {
  let component: AnimeFormComponent;
  let fixture: ComponentFixture<AnimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
