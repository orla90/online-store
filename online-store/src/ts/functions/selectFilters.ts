import { VALUES_FOR_LOCAL_STORAGE } from '../../store/data';
import { filterCardsByManufacturer } from './filters';

export const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null
) => {
  const manufacturer = (clickedManufacturerFilter as HTMLDivElement).getAttribute(
    'data-manufacturer'
  );

  if (
    (clickedManufacturerFilter as HTMLDivElement).classList.contains('active')
  ) {
    (clickedManufacturerFilter as HTMLDivElement).classList.remove('active');
    if (manufacturer)
      VALUES_FOR_LOCAL_STORAGE.filterSettings.manufacturer = VALUES_FOR_LOCAL_STORAGE.filterSettings.manufacturer.filter(
        (el) => el !== manufacturer
      );
  } else {
    (clickedManufacturerFilter as HTMLDivElement).classList.add('active');
    if (manufacturer)
      VALUES_FOR_LOCAL_STORAGE.filterSettings.manufacturer.push(manufacturer);
  }
  filterCardsByManufacturer();
};

export const selectClickedCameraFilter = (
  clickedCameraFilter: EventTarget | null
) => {
  const camera = (clickedCameraFilter as HTMLDivElement).getAttribute(
    'data-camera'
  );
  if ((clickedCameraFilter as HTMLDivElement).classList.contains('active')) {
    (clickedCameraFilter as HTMLDivElement).classList.remove('active');
    if (camera)
      VALUES_FOR_LOCAL_STORAGE.filterSettings.cameras = VALUES_FOR_LOCAL_STORAGE.filterSettings.cameras.filter(
        (el) => el !== camera
      );
  } else {
    (clickedCameraFilter as HTMLDivElement).classList.add('active');
    if (camera) VALUES_FOR_LOCAL_STORAGE.filterSettings.cameras.push(camera);
  }
  filterCardsByManufacturer();
};

export const selectClickedColorFilter = (
  clickedColorFilter: EventTarget | null
) => {
  const color = (clickedColorFilter as HTMLDivElement).getAttribute(
    'data-color'
  );
  if ((clickedColorFilter as HTMLDivElement).classList.contains('active')) {
    (clickedColorFilter as HTMLDivElement).classList.remove('active');
    if (color)
      VALUES_FOR_LOCAL_STORAGE.filterSettings.colors = VALUES_FOR_LOCAL_STORAGE.filterSettings.colors.filter(
        (el) => el !== color
      );
  } else {
    (clickedColorFilter as HTMLDivElement).classList.add('active');
    if (color) VALUES_FOR_LOCAL_STORAGE.filterSettings.colors.push(color);
  }
  filterCardsByManufacturer();
};
