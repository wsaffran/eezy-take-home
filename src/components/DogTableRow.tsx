import { useState } from "react";

import { Button, TableCell, TableRow } from "@mui/material";

import { fetchImages, fetchSubBreeds } from "../api";

import BreedDropdown from "./BreedDropdown";
import DogImageModal from "./ImageModal";

export interface IProps {
  key: number;
  dogBreeds: string[];
  addRow: () => void;
  lastRow: boolean;
}

function DogTableRow(props: IProps)  {
	const [breed, setBreed] = useState<string>('');
	const [images, setImages] = useState<string[]>([]);
	const [subBreed, setSubBreed] = useState<string>('');
	const [subBreeds, setSubBreeds] = useState<string[]>([]);

	async function updateBreed(breed: string): Promise<void> {
		setBreed(breed);
		
		// Reset sub-breed on breed change
		setSubBreed('');

		// fetch sub-breeds for current breed
		setSubBreeds(await fetchSubBreeds(breed));
		setImages(await fetchImages(breed));
	}

	async function updateSubBreed(subBreed: string): Promise<void> {
		setSubBreed(subBreed);
		setImages(await fetchImages(breed, subBreed));
	}

	async function updateImages(): Promise<void> {
		setImages(await fetchImages(breed, subBreed));
	}

	return (
		<TableRow>
			<TableCell component="th" scope="row">
				<BreedDropdown
					handleChange={updateBreed}
					label='Breed'
					options={props.dogBreeds}
					value={breed}
				/>
			</TableCell>
			<TableCell>
				<BreedDropdown
					disabled={!breed || !subBreeds.length}
					handleChange={updateSubBreed}
					label='Sub-Breed'
					options={subBreeds}
					value={subBreed}
				/>
			</TableCell>
			<TableCell>
				<DogImageModal
					images={images}
					updateImages={updateImages}
				/>
			</TableCell>
			<TableCell>
				{props.lastRow &&
					<Button onClick={props.addRow} >
						+ Add
					</Button>}
			</TableCell>
		</TableRow>
	);
}

export default DogTableRow;
