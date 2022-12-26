import { VALUES_FOR_LOCAL_STORAGE } from './data';
import { filterCardsByManufacturer } from './filters';

export const getAmountRangeValues = () => {
  const rangeInput = document.querySelectorAll('.amount-range-input input');
  const amountValuesDiff =
    +rangeInput[0].getAttribute('max')! - +rangeInput[0].getAttribute('min')!;

  const amountInput = document.querySelectorAll(
    '.store-content__amount-numbers'
  );
  const progress = document.querySelector('.amount-slider .amount-progress');
  const minValueBox = document.querySelector(
    '.amount-slider .amount-value_min'
  );
  const maxValueBox = document.querySelector(
    '.amount-slider .amount-value_max'
  );

  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e: Event) => {
      const minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      console.log(minValue);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === 'amount-range-min') {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove('hidden');
        maxValueBox?.classList.remove('hidden');
        amountInput[0].innerHTML = minValue.toString();
        amountInput[1].innerHTML = maxValue.toString();
        VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[0] = minValue.toString();
        VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[1] = maxValue.toString();
        (progress as HTMLDivElement).style.left = `${Math.trunc(
          (minValue * 100) / amountValuesDiff
        )}%`;

        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          (minValue * 100) / amountValuesDiff
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();
        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc((maxValue * 100) / amountValuesDiff)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          (maxValue * 100) / amountValuesDiff
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        filterCardsByManufacturer();
      }
    });
    input.addEventListener('mouseup', () => {
      minValueBox?.classList.add('hidden');
      maxValueBox?.classList.add('hidden');
    });
  });
};

export const getYearRangeValues = () => {
  const rangeInput = document.querySelectorAll('.year-range-input input');
  const yearValuesDiff =
    +rangeInput[0].getAttribute('max')! - +rangeInput[0].getAttribute('min')!;
  const yearInput = document.querySelectorAll('.store-content__year-numbers');
  const progress = document.querySelector('.year-slider .year-progress');
  const minValueBox = document.querySelector('.year-slider .year-value_min');
  const maxValueBox = document.querySelector('.year-slider .year-value_max');
  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e: Event) => {
      const minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === 'year-range-min') {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove('hidden');
        maxValueBox?.classList.remove('hidden');
        yearInput[0].innerHTML = minValue.toString();
        yearInput[1].innerHTML = maxValue.toString();
        VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[0] = minValue.toString();
        VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[1] = maxValue.toString();

        (progress as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / yearValuesDiff
        )}%`;
        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / yearValuesDiff
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();

        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc(((maxValue - 2000) * 100) / yearValuesDiff)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((maxValue - 2000) * 100) / yearValuesDiff
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        filterCardsByManufacturer();
      }
    });
    input.addEventListener('mouseup', () => {
      minValueBox?.classList.add('hidden');
      maxValueBox?.classList.add('hidden');
    });
  });
};
