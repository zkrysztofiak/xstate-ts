import React from 'react';
import { Form, Input, Button } from 'antd';


interface Fields {
	kwotaZnP: string
	kwotaMinus: string
}

interface Form1Props {
	kwotaZnP: number;
	kwotaMinus: number;
	name?: string;
	// handleOnClick?: () => void;
	handleOnFinish?: (values: Fields) => void;
}

// export const Form1: React.FC<Form1Props> = (props) => {
export const Form1 = (props: Form1Props) => {

	return (
		<div className=''>
			<>
				<Form layout='vertical' onFinish={props.handleOnFinish}>
					<Form.Item label='kwotaZnP' name='kwotaZnP'>
						<Input placeholder={props.kwotaZnP + ''} />
					</Form.Item>
					<Form.Item label='Pomniejsz o:' name='kwotaMinus'>
						<Input placeholder={props.kwotaMinus + ''} />
					</Form.Item>
					<Form.Item>
						{/* <Button type='primary' size='large' onClick={props.handleOnClick}> */}
						<Button type='primary' size='large' htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</>
		</div>
	);
};
