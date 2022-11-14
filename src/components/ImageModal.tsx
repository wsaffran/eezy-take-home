import { Box, Button, ImageList, ImageListItem, Modal } from "@mui/material";

import { IMG_SRC_PARAMS, IMG_SRC_SET_PARAMS, MAX_IMAGES, MODAL_STYLE } from "../constants";

import withToggle, { IToggleProps } from "./withToggle";

interface IProps extends IToggleProps {
  images: string[];
	updateImages: () => Promise<void>;
}

function ImageModal(props: IProps) {
  return (
    <>
      <Button
        disabled={!props.images.length}
        onClick={props.toggle}
      >
        See {props.images.length} Images
      </Button>
      <Modal
        onClose={props.toggle}
        open={props.isVisible}
      >
        <Box sx={MODAL_STYLE}>
          <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
            {props.images.map((image: string) => (
              <ImageListItem key={image}>
                <img
                  alt={image}
                  loading="lazy"
                  src={`${image}${IMG_SRC_PARAMS}`}
                  srcSet={`${image}${IMG_SRC_SET_PARAMS}`}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Button disabled={props.images.length < MAX_IMAGES} onClick={props.updateImages}>
            Generate
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default withToggle(ImageModal);
