import { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import DogTableRow from './DogTableRow';

interface IProps {
  dogBreeds: string[];
}

function DogTable(props: IProps) {
    const [tableRows, setTableRows] = useState<number>(1);

    function addTableRow(): void {
      setTableRows((prevTableRows: number) => prevTableRows + 1);
    }

    return (
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Dog Breed</TableCell>
							<TableCell>Sub-Breed</TableCell>
							<TableCell>Image Count</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{[...Array(tableRows)].map((_, index: number) => (
							<DogTableRow
								key={index}
								dogBreeds={props.dogBreeds}
								addRow={addTableRow}
								lastRow={index === tableRows - 1}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
    );
};

export default DogTable;
