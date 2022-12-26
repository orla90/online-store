import { ErrorModal } from './errorModal';

const renderErrorModalWindow = (urlToImg: string, text: string) => {
  const modal = new ErrorModal('modal', { urlToImg, text });
  modal.renderErrorModal();
};

export const generateAbsentModal = () => {
  renderErrorModalWindow(
    '../assets/media/dog404.jpeg',
    'Извините, совпадений не обнаружено'
  );
};

export const generateBasketModal = () => {
  renderErrorModalWindow(
    '../assets/media/dog.jpeg',
    'Извините, все слоты заполнены'
  );
};
