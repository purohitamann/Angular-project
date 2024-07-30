import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponentByIdComponent } from './project-component-by-id.component';

describe('ProjectComponentByIdComponent', () => {
  let component: ProjectComponentByIdComponent;
  let fixture: ComponentFixture<ProjectComponentByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponentByIdComponent]
    });
    fixture = TestBed.createComponent(ProjectComponentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
