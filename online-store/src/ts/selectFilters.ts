import { valueObjForLocalStorage } from './data';
import { filterCardsByManufacturer } from './filters';

//Select filters
export const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null,
) => {
  const manufacturer = (clickedManufacturerFilter as HTMLDivElement).getAttribute(
    'data-manufacturer',
  );

  if (
    (clickedManufacturerFilter as HTMLDivElement).classList.contains('active')
  ) {
    (clickedManufacturerFilter as HTMLDivElement).classList.remove('active');
    if (manufacturer)
      valueObjForLocalStorage.filterSettings.manufacturer = valueObjForLocalStorage.filterSettings.manufacturer.filter(
        (el) => el !== manufacturer,
      );
  } else {
    (clickedManufacturerFilter as HTMLDivElement).classList.add('active');
    if (manufacturer)
      valueObjForLocalStorage.filterSettings.manufacturer.push(manufacturer);
  }
  filterCardsByManufacturer();
};

export const selectClickedCameraFilter = (
  clickedCameraFilter: EventTarget | null,
) => {
  const camera = (clickedCameraFilter as HTMLDivElement).getAttribute(
    'data-camera',
  );
  if ((clickedCameraFilter as HTMLDivElement).classList.contains('active')) {
    (clickedCameraFilter as HTMLDivElement).classList.remove('active');
    if (camera)
      valueObjForLocalStorage.filterSettings.cameras = valueObjForLocalStorage.filterSettings.cameras.filter(
        (el) => el !== camera,
      );
  } else {
    (clickedCameraFilter as HTMLDivElement).classList.add('active');
    if (camera) valueObjForLocalStorage.filterSettings.cameras.push(camera);
  }
  filterCardsByManufacturer();
};

export const selectClickedColorFilter = (
  clickedColorFilter: EventTarget | null,
) => {
  const color = (clickedColorFilter as HTMLDivElement).getAttribute(
    'data-color',
  );
  if ((clickedColorFilter as HTMLDivElement).classList.contains('active')) {
    (clickedColorFilter as HTMLDivElement).classList.remove('active');
    if (color)
      valueObjForLocalStorage.filterSettings.colors = valueObjForLocalStorage.filterSettings.colors.filter(
        (el) => el !== color,
      );
  } else {
    (clickedColorFilter as HTMLDivElement).classList.add('active');
    if (color) valueObjForLocalStorage.filterSettings.colors.push(color);
  }
  filterCardsByManufacturer();
};
