import React from 'react';
import { Form, Input, Button } from 'antd';

interface Fields {
	kwotaZnP: number; //podstawa
	doplataReklamacja?: number;
	potracenia: number;
	nalezneSaldo?: number; //wyliczona z algorytmu +/-
	doWyplaty?: number; //wyliczone
}
interface Form1Props extends Fields {
	handleOnFinish: (changedFields: Fields) => void;
}

// export const Form2: React.FC<Form1Props> = ({ kwotaZnP, potracenia, handleOnFinish }) => {
export const Form2: React.FC<Form1Props> = (props) => {
	return (
		<div className=''>
			<>
				<Form
					layout='vertical'
					initialValues={{
						kwotaZnP: props.kwotaZnP,
						potracenia: props.potracenia,
						doplataReklamacja: props.doplataReklamacja,
						nalezneSaldo: props.nalezneSaldo,
						doWyplaty: props.nalezneSaldo,
					}}
					onFinish={props.handleOnFinish}>
					<Form.Item label='KwotaZnP' name='kwotaZnP'>
						<Input disabled={true} />
					</Form.Item>
					<Form.Item label='Dopłata z reklamacji:' name='doplataReklamacja'>
						<Input />
					</Form.Item>
					<Form.Item label='Potrącenia:' name='potracenia'>
						<Input />
					</Form.Item>
					<Form.Item label='Kwota nalezna/Saldo:' name='nalezneSaldo'>
						<Input disabled={true} />
					</Form.Item>
					<Form.Item label='Kwota do wyplaty:' name='doWyplaty'>
						<Input disabled={true} />
					</Form.Item>
					<Form.Item>
						{/* <Button type='primary' size='large' onClick={props.handleOnClick}> */}
						<Button type='primary' size='large' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</>
		</div>
	);
};
