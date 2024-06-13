import { Component, Input, OnChanges, SimpleChanges, inject, numberAttribute } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { initialFlight } from '../../logic/model/flight';
import { Store } from '@ngrx/store';
import { routerFeature } from '../../../../shared/+state/router.feature';


@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnChanges {
  private store = inject(Store);

  @Input() flight = initialFlight;

  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0, [Validators.required, Validators.min(0)]],
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    delayed: [false]
  });

  constructor() {
    this.store.select(routerFeature.selectRouteParams).subscribe(
      params => console.log(params)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['flight'].previousValue !== changes['flight'].currentValue) {
      this.editForm.patchValue(this.flight);
    }
  }

  protected save(): void {
    console.log(this.editForm.value);
  }
}
