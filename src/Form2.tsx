import React from 'react';
import { Form, Input, Button } from 'antd';
import { useMachine } from '@xstate/react';
import { zapoNaPlatnoscMachine } from './zapoNaPlatnoscMachine';


interface Fields {
	kwotaZnP: number
	kwotaMinus: number
}

interface Form1Props {
	kwotaZnP: number;
	kwotaMinus: number;
	name?: string;
	// handleOnClick?: () => void;
	// handleOnFinish?: (changedFields: Fields) => void;
}
// const handleOnFinish = (changedFields: Fields) => console.log(changedFields);
// const handleOnFinish = (values: Fields) => console.log(values);



// export const Form1: React.FC<Form1Props> = (props) => {
export const Form2 = (props: Form1Props) => {
	const [current, send] = useMachine(zapoNaPlatnoscMachine);
	const handleOnFinish = (allFields: Fields) => {
		console.log(allFields);
		console.log(current);
		send('DONE_POMNIEJSZONO');
		console.log(current);
	}
	return (
		<div className=''>
			<>
				<Form
					layout='vertical'
					initialValues={{
						kwotaZnP: current.context.kwotaZnP,
						kwotaMinus: current.context.kwotaMinus
					}}
					onFinish={handleOnFinish}>
					<Form.Item label='kwotaZnP' name='kwotaZnP'>
						<Input />
					</Form.Item>
					<Form.Item label='Pomniejsz o:' name='kwotaMinus'>
						<Input />
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
