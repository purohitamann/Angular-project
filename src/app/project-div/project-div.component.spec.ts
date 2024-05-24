import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDivComponent } from './project-div.component';

describe('ProjectDivComponent', () => {
  let component: ProjectDivComponent;
  let fixture: ComponentFixture<ProjectDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDivComponent]
    });
    fixture = TestBed.createComponent(ProjectDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
