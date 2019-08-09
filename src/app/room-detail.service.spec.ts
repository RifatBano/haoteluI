import { TestBed } from '@angular/core/testing';

import { RoomDetailService } from './room-detail.service';

describe('RoomDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomDetailService = TestBed.get(RoomDetailService);
    expect(service).toBeTruthy();
  });
});
