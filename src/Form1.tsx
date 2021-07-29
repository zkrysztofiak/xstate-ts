import React from 'react';
import { Form, Input, Button } from 'antd';

interface Form1Props {
	kwotaZnP: number,
	name?: string
}

export const Form1: React.SFC<Form1Props> = (props) => {
	// Typescript will infer what current and send are here
	// And will provide useful information about usage

	return (
		<div className=''>
			<div className=''>
				<>
					<Form
						layout="vertical"
					>

						<Form.Item label="kwotaZnP">
							<Input placeholder={props.kwotaZnP + ''} />
						</Form.Item>
						<Form.Item label="Pomniejsz o:">
							<Input placeholder="input placeholder" />
						</Form.Item>
						<Form.Item >
							<Button type="primary">Submit</Button>
						</Form.Item>
					</Form>
				</>
			</div>
		</div>
	);
};

