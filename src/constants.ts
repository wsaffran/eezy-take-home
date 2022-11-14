export const BASE_URL: string = 'https://dog.ceo/api/';
export const DETAIL_URL: string = BASE_URL + 'breed/';
export const LIST_URL: string = BASE_URL + 'breeds/';

export const MAX_IMAGES: number = 9;

export const IMG_SRC_PARAMS: string = '?w=164&h=164&fit=crop&auto=format';
export const IMG_SRC_SET_PARAMS: string = '?w=164&h=164&fit=crop&auto=format&dpr=2 2x';

export const MODAL_STYLE: { [key: string]: string | number} = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
