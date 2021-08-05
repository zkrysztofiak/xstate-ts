import React from 'react';
import { Form, Input, Button } from 'antd';

interface Fields {
	nrWoP: number;
}
interface FormNrWoPprops extends Fields {
	handleOnFinish: (changedFields: Fields) => void;
}

// export const Form2: React.FC<Form1Props> = ({ kwotaZnP, potracenia, handleOnFinish }) => {
export const FormNrWoP: React.FC<FormNrWoPprops> = (props) => {
	return (
		<div className=''>
			<>
				<Form
					layout='vertical'
					initialValues={{
						nrWoP: 2
					}}
					onFinish={props.handleOnFinish}>
					<Form.Item label='Nr WoP' name='nrWoP'>
						<Input />
					</Form.Item>
					<Form.Item>
						<Button type='primary' size='large' htmlType='submit'>
							Pobierz
						</Button>
					</Form.Item>
				</Form>
			</>
		</div>
	);
};
