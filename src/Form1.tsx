import React from 'react';
import { Form, Input, Button } from 'antd';

interface Form1Props {
	kwotaZnP: number;
	kwotaMinus: number;
	name?: string;
	handleOnClick?: () => void; // this means that the onClick param is a function that takes a label of type string as function parameter
	// handleOnClick?: (label: string) => void; // this means that the onClick param is a function that takes a label of type string as function parameter
}

export const Form1: React.FC<Form1Props> = (props) => {
	// Typescript will infer what current and send are here
	// And will provide useful information about usage

	return (
		<div className=''>
			<>
				<Form layout='vertical'>
					<Form.Item label='kwotaZnP'>
						<Input placeholder={props.kwotaZnP + ''} />
					</Form.Item>
					<Form.Item label='Pomniejsz o:'>
						<Input placeholder={props.kwotaMinus + ''} />
					</Form.Item>
					<Form.Item>
						<Button type='primary' size='large' onClick={props.handleOnClick}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</>
		</div>
	);
};
